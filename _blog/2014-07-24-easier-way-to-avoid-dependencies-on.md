---
title: Easier way to avoid dependencies on the system installed libraries
date: '2014-07-24T11:48:00.001Z'
author: Vadim Zeitlin
tags:
- howto
- new
- brief
modified_time: '2014-07-24T11:48:34.006Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-8072659364085068208
blogger_orig_url: http://wxwidgets.blogspot.com/2014/07/easier-way-to-avoid-dependencies-on.html
---

When you build wxWidgets under Unix, configure script will by default try using
the system versions of the third party libraries, such as libpng, libjpeg,
libtiff and so on. Usually this is the right thing to do, as you avoid compiling
(potentially a lot of) code which already exists in the ready to use binary form
on your system and, more importantly, use exactly the same version of these
libraries as other libraries wxWidgets links with, notably GTK+ ones.

However, sometimes you may want to avoid using the system libraries, e.g.
because you want to build a statically linked version of your program with as
few dependencies as possible. This was always possible by explicitly disabling
the use of each and every library with `-with-libfoo=builtin`, but this was
relatively tiresome and it was easy to forget a library or two.

To remedy this, I've just added a new `--disable-sys-libs` configure option
which does exactly what it says: when it is specified on configure command line,
only the built-in versions of the third party libraries will be used. This can
be useful in the above mentioned static linking scenario under Linux but is
probably most valuable under OS X where you never want to have dependencies on
any locally installed (e.g. via [Homebrew] or [MacPorts]) libraries as this
would make the resulting binary impossible to run on other OS X machines.

To summarize, it's a tiny feature, but one which would probably go unnoticed in
the 3.1 release change log while I think it could be something useful to quite a
few people.

[Homebrew]: https://brew.sh/
[MacPorts]: https://www.macports.org/
