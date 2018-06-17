---
title: Building wxWidgets with Visual C++ 11
date: '2012-02-29T22:40:00.001Z'
author: Vadim Zeitlin
tags:
- msvs11
modified_time: '2012-02-29T22:54:18.782Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-8708624876538175645
blogger_orig_url: http://wxwidgets.blogspot.com/2012/02/building-wxwidgets-with-microsoft.html
---

This is practically a non-post as building wxWidgets with the [recently
released] [Visual Studio 11 Beta] turned out to be completely uneventful. After
installing the Visual Studio itself -- which was also perfectly straightforward
albeit still a typically Microsoft experience as, obviously, installing a
compiler should require you to reboot your machine -- I could build the current
wxWidgets with the new compiler from command line using `nmake /f makefile.vc`
without any problems. I did [fix] a harmless warning about an unrecognized
Visual C++ version but no other changes were needed.

So far I don't have any experience with the new compiler yet, i.e. there are no
obvious differences compared with VC10. It seems to produce slightly larger
binaries (~70MiB instead of ~68 for VC10 for `wxmsw29u_core.lib`) but this is
perhaps a consequence of its beta nature. I do look forward to testing the
improved support for C++11 in the new version and, if I have some time, I'd like
to play with the new WinRT stuff and, in particular, WRL library to see if it's
realistic to write Metro applications in C++ without using Microsoft-specific
compiler extensions and, if so, whether we can support Metro in wxWidgets.

[recently released]: http://blogs.msdn.com/b/vcblog/archive/2012/02/29/10272778.aspx
[Visual Studio 11 Beta]: http://www.microsoft.com/visualstudio/11/en-us
[fix]: https://trac.wxwidgets.org/changeset/70757
