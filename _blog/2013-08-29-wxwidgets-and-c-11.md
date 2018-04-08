---
title: wxWidgets and C++ 11
date: '2013-08-29T15:03:00.000Z'
author: Vadim Zeitlin
tags:
- c++11
modified_time: '2013-08-29T15:03:54.699Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-4897312174451465466
blogger_orig_url: http://wxwidgets.blogspot.com/2013/08/wxwidgets-and-c-11.html
---

I've recently learnt that the latest edition of Bjarne Stroustrup's "The C++
Programming Language", updated to cover C++11, mentions wxWidgets as one of the
commonly used C++ libraries (you can [search the book] at Amazon for "wxWidgets"
to find the relevant paragraph). Thanks to Herb Thompson for noticing this.
Being mentioned in the bible of C++ is always nice, of course, but isn't it
strange that a book about C++11 references a purely C++98 library? Of course,
C++11 is almost fully backwards compatible with C++98 and wxWidgets can be
compiled with a C++11 compiler (e.g. under Unix, just pass `CXX="g++
-std=c++11"` to configure) but this is not very interesting. More so is how the
new C++11 features make writing code using wxWidgets simpler and this is the
topic of this post.

To illustrate this, let's look at a very simple program written in C++ 98:

```cpp
#include <wx/wx.h>

class MyFrame : public wxFrame
{
public:
    MyFrame() : wxFrame(NULL, wxID_ANY, "Test")
    {
        wxSizer* sizer = new wxBoxSizer(wxHORIZONTAL);
        sizer->Add(new wxStaticText(this, wxID_ANY, "Press to enlarge"), wxSizerFlags().Border().Centre());

        wxButton* btn = new wxButton(this, wxID_OK);
        btn->Bind(wxEVT_BUTTON, &MyFrame::OnButton, this),

        sizer->Add(btn, wxSizerFlags().Border().Centre());
        SetSizerAndFit(sizer);
        Show(true);
    }

private:
    void OnButton(wxCommandEvent& event)
    {
        for ( wxWindowList::iterator it = GetChildren().begin(); it != GetChildren().end(); ++it )
            (*it)->SetFont((*it)->GetFont().Larger());

        Fit();
    }
};

class MyApp : public wxApp
{
public:
    virtual bool OnInit() { new MyFrame; return true; }
};

wxIMPLEMENT_APP(MyApp);
```

It simply shows a window with a button and increases the button font when it is
pressed. It's not especially useful but does show a few typical constructs
appearing in real-life programs. This version can be compiled with just about
any C++ compiler (VC6 need not apply) and works with any wxWidgets version since
2.9.0, which introduced `Bind()`.

So let's now look at the version updated to use some C++ 11 features:

```cpp
#include <wx/wx.h>

class MyFrame : public wxFrame
{
public:
    MyFrame() : wxFrame(nullptr, wxID_ANY, "Test")
    {
        auto sizer = new wxBoxSizer(wxHORIZONTAL);
        sizer->Add(new wxStaticText(this, wxID_ANY, "Press to enlarge"), wxSizerFlags().Border().Centre());

        auto btn = new wxButton(this, wxID_OK);
        btn->Bind(wxEVT_BUTTON, [=](wxCommandEvent&) {
                for ( auto& w: GetChildren() )
                    w->SetFont(w->GetFont().Larger());

                Fit();
            });

        sizer->Add(btn, wxSizerFlags().Border().Centre());
        SetSizerAndFit(sizer);
        Show(true);
    }
};

class MyApp : public wxApp
{
public:
    virtual bool OnInit() override { new MyFrame; return true; }
};

wxIMPLEMENT_APP(MyApp);
```

This version requires a C++11 compiler, e.g. g++ 4.7 or later (tested with 4.8),
MSVC11 (a.k.a. Microsoft Visual Studio 2012) or clang 3. It also doesn't quite
compile with wxWidgets 2.9.5, so currently you need the latest Git/SVN sources.
But it will compile out of the box with wxWidgets 3.0, of course.

The functionality is exactly the same, so what are the differences?

1.  The most important change is undoubtedly the possibility to use lambdas as
    argument to `Bind()`. This is very useful for writing simple and short event
    handlers as it allows to keep the handler code together with the code
    creating (or loading from resources) the control. Notice that you need to
    capture `this` pointer by value in the lambda, hence the use of `[=]` in the
    call to `Bind()`. Also notice that the lambda still must take (unused)
    `wxCommandEvent&`. This is something that we might get rid of in the future.

2.  The possibility to use the new `for` loop is also quite appreciable, notice
    how much simpler iterating over the child windows has become.

3.  Finally, there are small changes such as using `nullptr` instead of `NULL`,
    the added `override` in the `OnInit()` declaration ensuring that you really
    override the base class method and using `auto` for the variables
    declaration. This is not really related to wxWidgets and I'm not completely
    convinced myself about the benefits of using auto everywhere (yet?) but if
    you are, perhaps after reading [this article], you shouldn't encounter any
    problems doing it.

So, finally, even without any serious modifications to wxWidgets itself, the
most user-visible changes of C++11 can be used in the programs using the
library. Of course, there are many other C++11 features which would be very
useful in the library implementation too and I'm very much looking forward to
the variadic templates support becoming common enough to use them instead of the
macro-based approach for the implementation of `wxPrintf()` and similar
functions. But for now just using lambdas for the event handlers is already very
nice.

[search the book]: https://www.amazon.com/C-Programming-Language-4th/dp/0321563840/
[this article]: https://herbsutter.com/2013/06/13/gotw-93-solution-auto-variables-part-2/
