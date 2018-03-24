---
title: GSoC 2014
---

We had six projects during Google Summer of Code 2014. Check out the
[Summer of Code 2014 Results][1] post for a summary of what each student
accomplished.

[1]: https://www.wxwidgets.org/news/2014/09/summer-of-code-2014-results/

----

### wxGraphicsContext using Direct2D

- Student: Alexandru Pana
- Mentor: Stefan Csomor

Original proposal:

> Currently, wxGraphicsContext is implemented using GDI+ under Windows. GDI+
> seems, unfortunately, to be abandoned by Microsoft and has a lot of problems
> including generally very poor performance and horrible text rendering,
> especially at small font sizes. Since Windows 7 (and Vista with updates
> installed) another solution is available: Direct2D. This project would
> consist of implementing a new wxGraphicsContext backend using this new API,
> and its companion DirectWrite for the text output.

[GSoC Project Page](https://www.google-melange.com/gsoc/project/details/google/gsoc2014/alexandru_pana/5685265389584384)

----

### wxTaskBarButton under Windows Vista/7+

- Student: Chaobin Zhang
- Mentor: Bryan Petty

Original proposal:

> Windows Vista/7+ has added support for several new features to the taskbar
> which are all accessible via ITaskbarList3 interface, we can implement
> wrapper with this interface to help developers get rid of COM while
> implementing taskbar functionality, so that they can write more pure
> wxWidgets code. Notice that we can provide some of ITaskbarList3
> functionality under OS X and Ubuntu Unity as well.

[GSoC Project Page](https://www.google-melange.com/gsoc/project/details/google/gsoc2014/zhchbin/5771972189356032)

----

### Chromium backend for wxWebView

- Student: Haojian Wu
- Mentor: Steven Lamerton

Original proposal:

> The aim of the project is to provide a new webview in wxWidgets
> (wxWedViewChromium) based on Chromium Embedded Framework (CEF3) to
> developers. The project involves integrating and extending the existing
> webViewChromium backend for wxWebView on three major platforms (Windows, Mac
> and Linux).

[GSoC Project Page](https://www.google-melange.com/gsoc/project/details/google/gsoc2014/hokein/5775305083977728)

----

### wxQt Port

- Student: Mariano Reingart
- Mentor: Vadim Zeitlin

Original proposal:

> A previous GSoC project has created the basics of a wxWidgets port to Qt.
> The task for this year would be to make this port really usable and complete
> the missing parts, suitable for developing small applications with it,
> bringing the wxQt port up to current wxWidgets standards, updated to Qt 5.2.
> As a proof of concept to explore the capabilities and limits of the mobile
> environment and rapid application development, a minimal prototype of
> wxPython using wxQt for Andorid could be developed.

[GSoC Project Page](https://www.google-melange.com/gsoc/project/details/google/gsoc2014/reingart/5750085036015616)

----

### wxAndroid Port

- Student: Nikola Miljkovic
- Mentor: Zsolt Bakcsi

Original proposal:

> Android is one of leading portable OS, and extending its capabilities with
> wxWidgets is must do. This will be next step in wxWidgets being fully cross
> platform while capturing important parts of each platform such as screen,
> touch gestures and low power consumption. I want to make all this possible
> by working on wxWidgets port to android.

[GSoC Project Page](https://www.google-melange.com/gsoc/project/details/google/gsoc2014/srb_nikola94/5636470266134528)

----

### wxUniversal Cleanup

- Student: Sun Boxiang
- Mentor: Cătălin Răceanu

Original proposal:

> Currently, wxUniv have many fundamentally bugs and drawing issues. This
> proposal will bring the wxUniv port up to current wxWidgets standards and
> let it have a good appearance.

[GSoC Project Page](https://www.google-melange.com/gsoc/project/details/google/gsoc2014/daetalus/5639274879778816)

----

<p class="my-5 text-center">
  <a href="../2011/" class="btn btn-lg btn-outline-primary"><i class="fas fa-arrow-alt-circle-left fa-fw"></i> Previous Year</a>
  <a href="../2017/" class="btn btn-lg btn-outline-primary">Next Year <i class="fas fa-arrow-alt-circle-right fa-fw"></i></a>
</p>
