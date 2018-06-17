---
title: Build fixes for different gcc distributions under Windows
date: '2015-06-14T18:45:00.000Z'
author: Vadim Zeitlin
tags:
- mingw
- build
modified_time: '2015-06-14T23:27:03.150Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-1970492472385951099
blogger_orig_url: http://wxwidgets.blogspot.com/2015/06/build-fixes-for-different-gcc.html
---

I've spent most of the day today fixing various compilation issues for the three
most often used distributions of gcc under Windows: [TDM-GCC], [mingw-w64] and
the "classic" [MinGW] trying to ensure that the upcoming 3.0.3 release (as well
as the current master) builds out of the box with all of them using all the
common build scenarios. TDM-GCC and mingw-w64 required just one minor fix for
g++ 4.9.2 which started providing clang-like `__has_include()` except with
different (and IMHO completely useless) semantics, so we just have to ensure
that we don't use it with gcc even if it is available which was easy to do and
actually had been already done on master.

However things were much more interesting with MinGW. The main problem with it
was that it couldn't be used to build wxWidgets with `-std=c++11` option (nor
`-std=c++98` one, but almost nobody ever used this one anyhow) nor, even worse,
even use this option when compiling applications using wxWidgets as it broke
compilation of wxWidgets headers. There always was a simple workaround of using
`-std=gnu++11` option instead, but it only was simple once you knew about it,
which wasn't the case for most of first-time wxWidgets users who ran into it. So
I finally decided to make `-std=c++11` work as well and now it does, even though
this wasn't simple nor pretty.

The summary is that now building with all 3 compilers with and without
`-std=c++11` works. And, as a side effect of this, I also fixed some (mostly
harmless) warnings so that building with MinGW and mingw-w64 now doesn't give
any -- at least in the configurations I tested. TDM-GCC is pickier (which is
probably a good thing) and still gives quite a few warnings, so using
`-Wno-unused-value` in `CXXFLAGS` with it is recommended: with this option only
a couple of warnings in 3rd party code remain.

Of course, there are too many combinations for me to have tested all of them: 2
branches (3.0 and master), C++11 and C++98, static and shared, Unicode and ANSI,
STL and not-STL already give 96 builds to test and there are other options too.
So, before I spend too much time congratulating myself, it would be great if
people could actually test the build configurations they use and are interested
in and report if there are any (and especially any new) problems with them as
I'm sure I must have also broken something with so many changes. I'm just not
sure what, yet -- please let me know!

[TDM-GCC]: http://tdm-gcc.tdragon.net/
[mingw-w64]: http://mingw-w64.org/doku.php
[MinGW]: http://www.mingw.org/
