---
title: "Hello Darkness"
date: 2024-10-29
comments: true
tags:
- dark
- roadmap
---

wxWidgets 3.3.0 is not released yet, but there is no doubt about what will be
the most important new feature in it when it does get released (hopefully some
time soon): it will be support for dark mode in wxMSW, the Windows port of the
library. This is "just" a cosmetic feature, but it's also the most requested
one since the entire history of wxWidgets existence, so it will be great to
finally have it available, after all these years.

Of course, the delay hasn't been just due to neglect of our users wishes. The
main problem is that Microsoft still doesn't officially support dark mode for
the desktop Windows applications and so implementing it requires using
undocumented API and also a huge amount of work on things not supported by
those APIs, which are far from being complete.

I'm very grateful to [KiCad organization][kicad] for helping to solve the
second part of the problem by funding my work on Windows dark mode
implementation and, of course, also to all the other contributors who helped
with reporting and fixing bugs. Thanks to them all, I believe that dark mode
support is now in a good enough shape to be used in most applications, even
though there are still some [known problems][dark-bugs], and, in fact, it's
already used in some of my own applications in production since quite some
time.

However, due to the first problem, dark mode support is, and will remain,
until Microsoft announces official support for it, disabled by default, and
you will need to explicitly opt-in into using it. To give an example, this
minimal wxWidgets application:

```cpp
#include <wx/app.h>
#include <wx/artprov.h>
#include <wx/frame.h>
#include <wx/sizer.h>
#include <wx/stattext.h>

class MyApp : public wxApp {
public:
    bool OnInit() override {
        // ❶ SetAppearance(Appearance::System);
        auto f = new wxFrame(nullptr, wxID_ANY, "wxWidgets Example");
        auto s = new wxGridSizer(1);
        s->Add(new wxStaticText(f, wxID_ANY, "Hello, world!"), wxSizerFlags().Center());
        f->SetSizer(s);
        f->SetIcon(wxArtProvider::GetIcon(wxART_WX_LOGO));
        f->Show();

        return true;
    }
};
wxIMPLEMENT_APP(MyApp);
```

still has the same boring, old, tired appearance, even when the system uses
dark mode by default, shown on the left below. However by uncommenting the
line marked with ❶ in the beginning of `OnInit()` the appearance changes to
the modern, new, wired look on the right:

<img src="/blog/2024/10/29/hello-darkness/hi-default.png" style="width: 49%" alt="Default wxWidgets application appearance">
<img src="/blog/2024/10/29/hello-darkness/hi-dark.png" style="width: 49%" alt="wxWidgets application in dark mode">

Of course, this assumes that the system uses the dark look by default. If it
doesn't, the appearance would naturally stay the same, even with the
`SetAppearance()` call. As the [documentation explains][docs-set-appearance],
this function can also be used with `Appearance::Dark` argument to force the
use of dark mode or, to emphasize that dark mode is not wanted, with
`Appearance::Light`.

Also note that while calling `SetAppearance()` is required for dark mode
support under Windows, the situation under other platforms is a bit
different: because they do provide perfectly official and safe to use API for
the desktop applications, the system mode is used there by default and calling
`SetAppearance(Appearance::System)` doesn't do anything there -- however it
does no harm neither and using this function to force either dark or light
appearance works under the other platforms as expected too.

Finally, there is a semi-secret way of enabling dark mode support for Windows
applications even if they don't call `SetAppearance()`: setting the
environment variable `wx_msw_dark_mode` to the value of 1 has the same effect
as opting in into using the system appearance, while setting it to 2 forces
the use of dark appearance. However, if the application does set its own
appearance, this overrides the environment variable value, so this trick is
really only supposed to be used for the older applications which haven't been
updated to call `SetAppearance()` yet.

I'd like to end this post by repeating that everything described above is
available in current Git master and while dark mode support will be included
in wxWidgets 3.3.0 release, you are also more than welcome to try it already
and report (and maybe help fix?) any problems you find!

[kicad]: https://www.kicad.org/
[dark-bugs]: https://github.com/wxWidgets/wxWidgets/issues?q=is%3Aopen+is%3Aissue+label%3A%22dark+mode%22
[docs-set-appearance]: https://docs.wxwidgets.org/latest/classwx_app.html#a8a690b08e7fd93e7fce6bfacd247c335
