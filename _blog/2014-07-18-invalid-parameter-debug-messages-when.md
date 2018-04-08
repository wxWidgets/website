---
title: '"Invalid parameter" debug messages when using wxGLCanvas'
date: '2014-07-18T11:07:00.002Z'
author: Vadim Zeitlin
tags:
- debug
modified_time: '2014-07-18T11:07:44.511Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-7885683954535146808
blogger_orig_url: http://wxwidgets.blogspot.com/2014/07/invalid-parameter-debug-messages-when.html
---

While debugging a problem with wxGLCanvas today, I noticed that every run of the
OpenGL cube sample resulted in several copies of the following message in the
MSVS debug output window:

    Invalid parameter passed to C runtime function.

Now this is an error message just as I love them: it's worrisome enough to make
you feel like you ought to do something about it, but without any information
allowing you to find out what, actually, should be done. Luckily, there are not
that many ways to write to the debug output under Windows and putting a
breakpoint on `OutputDebugStringA()` (surprisingly used instead of
`OutputDebugStringW()` that I tried first) discovered that the debug message was
given from deep inside GDI `ChoosePixelFormat()` function which ends up calling
`wglChoosePixelFormat()` in `opengl32.dll` which, in turn, calls into ATI driver
DLL (`atioglxx.dll`) which ends up calling `_wcscpy_s()` with a `NULL` parameter
which is clearly a bug, but it's not _our_ bug.

So, finally the problem is not related to wxWidgets, even if you will see it
every time you use wxGLCanvas with (this, buggy, version of) ATI OpenGL drivers.
But at the very least I now know that if I see this message again, I can set a
breakpoint on `{,,msvcrt.dll}__invoke_watson` function, using MSVS debugger
idiosyncratic syntax, and directly see where does the problem occur. Hopefully
this can be useful to someone else too and maybe it will save you some time
chasing bugs in ATI code.

Ah, and the original problem which started all this? It turned out to be
[bogus]. Today hasn't been very productive so far...

[bogus]: https://trac.wxwidgets.org/ticket/2004#comment:3
