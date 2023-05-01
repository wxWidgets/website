---
title: "Are Macros Required To Use wxWidgets?"
date: 2023-05-01
comments: true
---

As anybody familiar with the [Betteridge's law of headlines][Betteridge-law]
could immediately tell, the answer to the question in the title is, of course,
"No" and the goal of this post is to debunk the myth that using wxWidgets C++
API involves dealing with macros.

Of course, as anybody familiar with the mythology could also tell, like many
good myths, this one is based on the real events, and even if these events
happened in the distant past, they left their trace in the historical record,
including various forum posts, tutorials and even wxWidgets own samples, few
of which have been updated to follow the best practices. So you are still
unfortunately very likely to see programs like this, written in the "classic"
(which is the polite term for "old and hoary") style:
```cpp
// Complete, compilable example using old style.
#include <wx/wx.h>

class MyFrame : public wxFrame {
public:
    MyFrame() : wxFrame(nullptr, wxID_ANY, L"Hello old wxWidgets!") {
        SetBackgroundColour(*wxWHITE);
        Show();
    }

private:
    void OnPaint(wxPaintEvent&) {
        wxPaintDC dc{this};
        dc.SetTextForeground(*wxBLUE);
        dc.Clear();
        dc.SetFont(dc.GetFont().Scaled(2));
        dc.DrawLabel(L"This uses macros :-(", GetClientSize(), wxALIGN_CENTER);
    }

    void OnSize(wxSizeEvent&) { Refresh(); }

    wxDECLARE_EVENT_TABLE(); // ❶ Event table declaration macro.
};

wxBEGIN_EVENT_TABLE(MyFrame, wxFrame) // ❷ Event table definition macro.
    EVT_PAINT(MyFrame::OnPaint) // ❸ Event handlers macros.
    EVT_SIZE(MyFrame::OnSize) // ❸ 
wxEND_EVENT_TABLE()

class MyApp : public wxApp {
public:
    MyApp() = default;

    bool OnInit() wxOVERRIDE { // ❹ Pre-C++11 portability macros.
        if (!wxApp::OnInit())
            return false;

        new MyFrame();

        return true;
    }

    wxDECLARE_NO_COPY_CLASS(MyApp); // ➎ Pre-C++11 equivalent macros.
};

wxIMPLEMENT_APP(MyApp); // ➏ Application definition macro.
```

But, of course, none of the macros used here are _required_ and most of them
are not recommended since a very long (10+ years). In particular, there is no
reason to ever use macros ➍ or ➎ that only made sense for C++98 support and
there are rarely any good reasons use the [event table macros][event-tables]
in any new code (and "new" here applies to anything written since 10+ years
ago), as [using Bind()][event-bind] is almost always preferable, so all event
handler macros like ❸ can, and should, be replaced with the calls to `Bind()`
and the macros ❶ and ❷ removed entirely, resulting in this version:

```cpp
// Complete, compilable example using new style.
class MyFrame : public wxFrame {
public:
    MyFrame() : wxFrame(nullptr, wxID_ANY, L"Hello modern wxWidgets!") {
        Bind(wxEVT_PAINT, &MyFrame::OnPaint, this);
        Bind(wxEVT_SIZE, [this](wxSizeEvent&) { Refresh(); });

        SetBackgroundColour(0xffffff);
        Show();
    }

private:
    void OnPaint(wxPaintEvent&) {
        wxPaintDC dc{this};
        dc.SetTextForeground(wxColour(0x00, 0x00, 0xff));
        dc.Clear();
        dc.SetFont(dc.GetFont().Scaled(2));
        dc.DrawLabel(L"Look, no macros!", GetClientSize(), wxALIGN_CENTER);
    }
};

class MyApp : public wxApp {
public:
    MyApp() = default;

    MyApp(MyApp const&) = delete;
    MyApp& operator=(MyApp const&) = delete;

    bool OnInit() override {
        if (!wxApp::OnInit())
            return false;

        new MyFrame();

        return true;
    }
};

wxIMPLEMENT_APP(MyApp); // The only macro still remaining.
```

By the way, this shows that using `Bind()` we may avoid not only using the
event table macros, but even avoid defining event handler functions entirely,
as we did for `OnSize()` which was replaced with a lambda -- although, of
course, it may still be a good idea to keep the event handling in a separate
function if it is less trivial, like `OnPaint()`.

In fact, using `Bind()` allows to avoid defining a separate class at all, if
its only purpose was to define event table handlers, and the whole program may
instead be written in the following simpler way:

```cpp
// Complete, compilable example using new style without a separate frame class.
#include <wx/wx.h>

class MyApp : public wxApp {
public:
    MyApp() = default;

    MyApp(MyApp const&) = delete;
    MyApp& operator=(MyApp const&) = delete;

    bool OnInit() override {
        if (!wxApp::OnInit())
            return false;

        auto const win = new wxFrame(nullptr, wxID_ANY, L"Hello wxWidgets!");

        win->Bind(wxEVT_PAINT, [win](wxPaintEvent&) {
            wxPaintDC dc{win};
            dc.SetTextForeground(wxColour(0x00, 0x00, 0xff));
            dc.Clear();
            dc.SetFont(dc.GetFont().Scaled(2));
            dc.DrawLabel(L"No class to look at!", win->GetClientSize(), wxALIGN_CENTER);
        });

        win->Bind(wxEVT_SIZE, [win](wxSizeEvent&) { win->Refresh(); });

        win->SetBackgroundColour(0xffffff);
        win->Show();

        return true;
    }
};

wxIMPLEMENT_APP(MyApp); // The only macro still remaining.
```

The remaining macro could be avoided too, as we could replace it roughly with
the following (please note that it's not quite the exact equivalent):
```cpp
#ifdef __WXMSW__
extern "C" int WINAPI
WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, wxCmdLineArgType lpCmdLine, int nCmdShow) {
    wxApp::SetInstance(new MyApp{});
    return wxEntry(hInstance, hPrevInstance, lpCmdLine, nCmdShow);
}
#else
int main(int argc, char* argv[]) {
    wxApp::SetInstance(new MyApp{});
    return wxEntry(argc, argv);
}
#endif
```

but comparing the two versions side by side, it's easy to see why many
applications still use `wxIMPLEMENT_APP()`.

However this is just one, single macro that is still acceptable to use. Not
only the event table macros don't have to be used, but not using them can
often make the code shorter and simpler and more readable, by keeping the
event handling logic in a single place.

So just say no to the macros and let's finally kill the myth that wxWidgets
requires using them.

[Betteridge-law]: https://en.wikipedia.org/wiki/Betteridge%27s_law_of_headlines
[event-tables]: https://docs.wxwidgets.org/3.2/overview_events.html#overview_events_eventtables
[event-bind]: https://docs.wxwidgets.org/3.2/overview_events.html#overview_events_bind
