---
title: Configure is now less forgiving
date: '2017-05-28T14:44:00.001Z'
author: Vadim Zeitlin
tags:
- change
- unix
modified_time: '2017-05-28T14:44:34.686Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-2471915959757518259
blogger_orig_url: http://wxwidgets.blogspot.com/2017/05/configure-is-now-less-forgiving.html
---

Just a word of warning: it was previously possibly to write:

    ../configure --enable-bloordyblop

and configure would happily run and just ignore the unknown option. This could
be seen as being nicely lenient but, in fact, was much more often aggravating as
it allowed typos in configure options to slip through, resulting in many "WTF
are my library binaries still not optimised even though I did use
`--enable-optimize`?". The answer is, of course, [as previously mentioned],
wxWidgets British roots: you were supposed to use `--enable-optimise` (spelled
with an "s") instead. But while sticking to the right spelling might be
commendable, not giving any errors for the ~~wrong~~ alternative one is definitely
not. Moreover, this was never intentional and happened only as an unfortunate
side effect of how Autoconf `AC_CONFIG_SUBDIRS()` macro worked.

And this has finally changed: since this [recent commit], which will be part of
upcoming 3.1.1 release, unrecognised configure options will result in an
immediate error. And while the new behaviour is better, it does risk breaking a
few of the existing build scripts, e.g. if you use obsolete options (such as
`--enable-compat24`) or, indeed, if you made a typo in one of them. In this
case, please just remove the options that don't exist any more (they were
previously ignored anyhow) or fix the typos. And in the unlikely case when you
really need to pass an unsupported option to wx configure script (why would you
do this?), you can always explicitly use `--disable-option-checking` on the
command line to continue doing so -- and you will even get an error if you make
a typo in this one!

[as previously mentioned]: /blog/2016/04/improving-inherently-important/
[recent commit]: https://github.com/wxWidgets/wxWidgets/commit/aa7e10bb0919982bfdc510bd9cdc8b84d621d80b
