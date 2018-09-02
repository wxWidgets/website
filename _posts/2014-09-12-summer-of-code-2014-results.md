---
title: "Summer of Code 2014 Results"
date: 2014-09-12
comments: true
---

[Google Summer of Code 2014][1] wrapped up back on August 25th, and we're
pleased to announce that all six of our students passed their evaluations!
We wanted to share the results of these projects today.

[1]: https://www.google-melange.com/gsoc/org2/google/gsoc2014/wx

<!--more-->

**wxGraphicsContext using Direct2D** - Alexandru Pana has brought together a
very functional Direct2D wxGraphicsContext renderer for Windows 7 and later.
This work has been merged to wxWidgets SVN trunk. You can review a summary of
what has been done [here][2]. Be sure to check out the "drawing" sample!

[2]: https://github.com/alexpana/wxWidgets/wiki/Direct2D-Implementation-Progress

**wxTaskBarButton under Windows Vista/7+** - Chaobin Zhang has implemented the
native Windows 7 taskbar functionality with a very clean and easy to use API
available through [wxTaskBarButton][3]. This project was cut short of an OSX
implementation, however, nearly every native feature of the Windows 7 taskbar
is available for use, and has been merged to wxWidgets SVN trunk. We would
encourage others interested in working on the OSX implemention to get involved
now that GSoC has ended. Here's an [overview of the features][4], and be sure
to check out the new "taskbarbutton" sample.

[3]: https://docs.wxwidgets.org/trunk/classwx_task_bar_button.html
[4]: https://github.com/zhchbin/wxWidgets/wiki/SOC2014_TASKBAR

**Chromium backend for wxWebView** - Haojian Wu has brought wxWidgets the
ability to integrate a single common, modern browser engine on all platforms
based on the CEF3 library. This adds [wxWebViewChromium][5] to wxWidgets, but
requires a bit more work to enable out of the box due to library dependencies.
This has not been merged to SVN trunk yet, check out the [pull request][6] to
get involved in the review, and it's new "webview_chromium" sample. Here's the
[overview][7] of the project as well.

[5]: http://hokein.github.io/wxWidgets/classwx_web_view_chromium.html
[6]: https://github.com/wxWidgets/wxWidgets/pull/15
[7]: https://github.com/hokein/wxWidgets/wiki

**wxQt Port** - Mariano Reingart continues the work from Peter Most, Javier
Torres, Kolya Kosenko, and his own work even back in 2013, building out the
new Qt-based wxWidgets port to a usable state. Being one of the more ambitious
projects, we're very pleased to see the success of this project. We'd also
like to thank Sean D'Epagnier for his help as well. This work has been merged
to SVN trunk. Check out the [installation instructions][8], the
[project overview and wxQt status][9], and the [merge pull request][10] with
screenshots.

[8]: https://github.com/wxWidgets/wxWidgets/tree/master/docs/qt
[9]: https://wiki.wxwidgets.org/WxQt
[10]: https://github.com/wxWidgets/wxWidgets/pull/14

**wxAndroid Port** - Nikola Miljkovic worked on this fresh new port, with the
goal of building just a single minimal sample into an Android app. The
majority of this project involved working out the details of wrapping
wxWidgets C++ calls through JNI just for the main required application
components. Nikola has achieved this as seen by the wxWidgets-based
[android app][11] in the Google Play Store, but to be clear, this port still
requires a lot of work before it's usable. There aren't any plans to merge
this to SVN trunk just yet, but we would encourage interested developers to
check out the [documentation][12], and the [SOC2014_ANDROID][13] branch Nikola
has been working on.

[11]: https://play.google.com/store/apps/details?id=org.wxwidgets
[12]: https://wiki.wxwidgets.org/WxAndroid/docs
[13]: https://github.com/SRBNikolaSRB/wxWidgets/compare/SOC2014_ANDROID

**wxUniversal Cleanup** - Sun Boxiang chose to tackle general issues with our
very neglected wxUniversal port. About 80 unique issues were resolved while
expanding the test coverage from 308 to 518 unit tests. This work has not been
merged to SVN trunk yet, but hopefully soon. In the mean time, check out the
[project overview][14], and [the development branch][15].

[14]: https://groups.google.com/d/msg/wx-dev/-z-LfabvZko/_f88vzwTuLsJ
[15]: https://github.com/Daetalus/wxWidgets/compare/SOC2014_UNIV

Once again, we really want to thank all of our students for one of the most
exceptional years we've had participating in the Google Summer of Code
program. We'd also like to thank all of the community who stepped up to help
these students besides just their mentors.
