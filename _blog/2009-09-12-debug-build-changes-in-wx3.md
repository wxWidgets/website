---
title: Debug Build Changes in wx3
date: '2009-09-12T11:57:00.006Z'
author: Vadim Zeitlin
tags:
- wx3
modified_time: '2009-09-12T21:08:37.504Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-8247665315513483681
blogger_orig_url: http://wxwidgets.blogspot.com/2009/09/debug-build-changes-in-wx3.html
---

A series of recent commits finally implement important changes to debugging
support in wxWidgets which we planned to do since a long time. To understand
them better, it's probably helpful to say a few words about how the things
worked until now, in 2.8 and all previous versions up to the [recently released]
2.9.0. So far we had two distinct builds of the library: a debug one and a
release one. This should be familiar to Windows programmers as the dominant IDE
under this platform uses the configurations with these names by default since
many years but let me list the differences between the two for the benefit of
others:

[recently released]: https://groups.google.com/forum/#!topic/wx-announce/Gl7LVGNebFw

1.  Assertions are only enabled in debug build and disappear completely in
    release one: this is true both for the standard `assert` macro as it expands
    to nothing if `NDEBUG` is defined (which it is in release) and was also true
    for the wx macros such as `wxASSERT` which expanded to nothing unless
    `__WXDEBUG__` was defined (and it was defined in debug builds only).
2.  Moreover, at least with the MSVC compiler, debug builds use the special
    debug version of C run-time library which not only has the asserts enabled
    in it but also has additional checks, notably very useful memory leaks and
    integrity checking which are not done in release builds.
3.  Debug information is only generated in the debug build on the (not quite
    correct as we'll see below) assumption that you don't need to debug the
    release build anyhow.
4.  In debug builds, optimizations are turned off, including function inlining:
    this can have dramatic consequences for the performance of C++ code which
    uses a lot of trivial inline functions and adding a function call overhead
    to them means that the debug build is usually too slow to be used normally.

As you can see, this mostly makes sense for the programs. However it doesn't
really for the libraries that these programs use as there are good reasons to
use a release version of the library even in debug build of your application:
e.g. you may want to to avoid getting slowed down by the lack of optimizations
in the library code. And, conversely, you may want to have some debugging
features even in the release build: assertions may still be useful (although
they probably need to be handled differently) and debug information is
invaluable when debugging crashes in production builds of your software (notably
using the mini dumps produced by [wxDebugReport]). The debug/release separation
is a heritage of the days when every CPU cycle and every byte on the disk
counted and so production versions of the software couldn't allow to have any
debugging checks in them but these days are long gone and being able to find a
bug quickly is well worth the slightly increased library size and unmeasurable
drop in performance.

[wxDebugReport]: https://docs.wxwidgets.org/trunk/classwx_debug_report.html

Further, in the Unix world it's almost unheard of to have two versions of the
library -- just check whether you really have two versions of any of the
libraries used by wxWidgets itself, such as libpng, libjpeg or even different
GTK+ libraries themselves. Nevertheless, at least the GTK+ libraries do provide
some assert-like error checking even in the release build and you also can
download a separate package with the debugging information for these libraries
with many Linux distributions. In other words, they have the advantages of the
debug builds without many of the problems.

And this is exactly what we have now for wxWidgets too. We still have two
different builds under Windows because of the point (2) above: debug builds of
the applications use debug CRT and so they must use a special build of the
library which was also compiled with the debug CRT or unpleasantness (in the
form of heap corruption when memory allocated by one CRT version is freed with
another one) is sure to result. But this is the only difference between the two
builds now. In other words, the "d" suffix in the library name now indicates
only that it uses the debug CRT. Accordingly, the "d" suffix is not used at all
under Unix (including OS X) as there is no debug CRT library there. This
shouldn't be a problem from compatibility point of view as `wx-config` output
has been adjusted to use the new libraries names so if you use `wx-config` in
your makefiles nothing should need changing -- and if you don't, you really
should consider using it. Under Windows the libraries names didn't change at
all, of course, so there is no need to change anything neither.

On the other hand, the behaviour of the release version did change. All the
details are explained in the updated [debugging overview] but, in brief, the
main difference is that the asserts now remain in the release build too. They
can be compiled out completely by using `--disable-debug` configure flag or
setting `wxDEBUG_LEVEL` to `0` in `wx/msw/setup.h` explicitly under Windows but
there should be no need to do this because by default the asserts are dormant in
the release build of the application while they continue to produce the usual
message boxes in case of an assertion failure in the debug build (again, of the
application, not the library). In practice this means two important things:

[debugging overview]: https://docs.wxwidgets.org/trunk/overview_debugging.html

*   Under Unix you can now use the release version of the library when
    developing. Unless you define `NDEBUG` when building your own code, the
    asserts will be generated just as they were before when you used the debug
    version so you will still profit from early error detection if you use the
    library in a wrong way. But you won't be hampered by slow operation of the
    library itself and you won't need to switch to another version for the
    release builds. Under Windows you still will need to do it, again because of
    the point (2), so nothing much changes there from this point of view.
*   But under both platforms you can now also enable asserts detection in the
    release builds. It is entirely up to you whether you're going to do it but
    personally I strongly recommend at least logging the assertion failures as
    they do indicate a problem in your code and may be valuable when trying to
    diagnose the problems your users experience. Showing the message box to your
    users is almost never the right thing to do though so you will want to
    define your own assertion handler using [wxSetAssertHandler()] function.

[wxSetAssertHandler()]: https://docs.wxwidgets.org/trunk/group__group__funcmacro__debug.html#g7a8443c97e45d2943f03769aaa787376

Inquiring readers may wish to know how is the magic with asserts being enabled
for only debug builds of the application code is achieved. The answer is that
wxWidgets fiendishly injects a bit of its own code into your application as part
of [IMPLEMENT_APP()] macro. As it is compiled as part of your program, it can do
different things depending on whether `NDEBUG` is defined or not in your
makefile and it only disables the asserts if it is. Of course, it also means
that if you don't use this macro in your code you do need to use
[wxDISABLE_DEBUG_SUPPORT] explicitly as by default asserts are enabled.

[IMPLEMENT_APP()]: https://docs.wxwidgets.org/trunk/group__group__funcmacro__rtti.html#g7d79b7b778032bc4e2712dcf16943d72
[wxDISABLE_DEBUG_SUPPORT]: https://docs.wxwidgets.org/trunk/group__group__funcmacro__debug.html#g8db18cbe95b3b42c3017a8bf048b0839

There are two other, less important but still nice, things which have changed in
the release build of wxWidgets: debug logging, i.e. output produced by
[wxLogDebug()] and [wxLogTrace()] functions now remains in it too. Just as the
asserts, it is disabled by default meaning that the cost of having the debug
statements remaining in your code is extremely slight as their arguments are not
even evaluated any more until you call [wxLog::SetLogLevel()] to enable it --
but you may do it if you need it.

[wxLogDebug()]: https://docs.wxwidgets.org/trunk/group__group__funcmacro__log.html#g9c530ae20eb423744f90874d2c97d02b
[wxLogTrace()]: https://docs.wxwidgets.org/trunk/group__group__funcmacro__log.html#ge28a46b220921cd87a6f75f0842294c5
[wxLog::SetLogLevel()]: https://docs.wxwidgets.org/trunk/classwx_log.html#4ea68379469ca27f645d5f91c2d42b3b

And, finally, debug information is now generated for the release builds as well
for MSVC. This is very useful if you use [wxDebugReport] as without it the dumps
produced by it are mostly useless and doesn't have almost any drawbacks, in
particular the executables size doesn't increase at all as the debugging
information is generated in the separate PDB files so just about the only price
you pay for this is the increased disk space consumption which shouldn't matter
much in our days of multi-terabyte disks. We also plan to enable debug
information for Unix builds in the future but we need to modify the makefiles to
also produce it in separate files, just as MSVC does it, first.

[wxDebugReport]: https://docs.wxwidgets.org/trunk/classwx_debug_report.html

To summarize, nothing much has changed for you, wxWidgets user, by default, and
if you hadn't read this blog entry (which is excusable, especially considering
its length) nor the list of important changes in `docs/changes.txt` (much less
so!) you might not notice that anything has changed at all. However after
reading this you should also know that you now have the additional flexibility
of being able to enable asserts and/or debug logging even in your production
builds and that you can use the same wxWidgets libraries both for development
and production under Unix.
