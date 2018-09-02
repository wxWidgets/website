---
title: "wxWidgets 2.9.5 Released"
date: 2013-07-16
---

wxWidgets 2.9.5 has been officially released. It is available right now from
[SourceForge][1] and our [FTP mirror][2] and, as usual, contain the sources and
the documentation in Unix (.tar.bz2) and Windows (.zip or .7z, with the latter
being significantly smaller) formats. Continuing the experiment started with
2.9.4, we also provide the pre-built [binaries][3] for Microsoft Visual C++
2008, 2010 and 2012 users.

<!--more-->

Please read [the change log][4] if you're upgrading from a previous version.
And please see [online documentation][5] for more details.

The 2.9 series bring many improvements compared to 2.8 series such as much
better and simpler to use support for Unicode and the new wxOSX/Cocoa port,
suitable for development of 64 bit GUI applications under OS X, as well as a
huge number of other new features and bug fixes. This release should be the
last one before the 3.0 release planned soon, so testing it is even more
important than usual. Please do download it, build your applications with it
and [report bugs][6] if anything doesn't work correctly.

Also notice that while this is still officially a development release, we
consider it to be stable enough to be used in production environment and using
it is strongly recommended for any new projects for which compatibility with
the previous 2.8 is not important. As for the existing projects, please try
them out with 2.9.5 as this is the last chance to fix any compatibility
problems before 3.0.

[1]: https://sourceforge.net/downloads/wxwindows/2.9.4/
[2]: ftp://ftp.wxwidgets.org/pub/2.9.5/
[3]: https://sourceforge.net/downloads/wxwindows/2.9.5/binaries/
[4]: https://sourceforge.net/projects/wxwindows/files/2.9.5/changes.txt
[5]: https://docs.wxwidgets.org/2.9.5/
[6]: https://trac.wxwidgets.org/newticket