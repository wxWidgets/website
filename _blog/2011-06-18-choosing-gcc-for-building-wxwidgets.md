---
title: Choosing gcc for building wxWidgets under Windows
date: '2011-06-18T14:57:00.005Z'
author: Vadim Zeitlin
tags:
- build mingw
modified_time: '2012-02-29T22:59:24.039Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-4512480258177905754
blogger_orig_url: http://wxwidgets.blogspot.com/2011/06/choosing-gcc-for-building-wxwidgets.html
---

There are a lot of possibilities for building wxWidgets under Windows using gcc.
First of all, you can choose to use traditional makefile in
`build/msw/makefile.gcc`. This binds you to using a [MinGW] version of the
compiler in Windows command prompt (i.e. `cmd.exe` as hopefully nobody uses
systems with `command.com` any more) as the makefiles use DOS/Windows style paths
and commands. Second, you can use the traditional Unix configure-and-make
approach. Then you have a subchoice between using [MSYS] which is a minimalistic
environment developed by MinGW project or a full-blown [Cygwin] one. In the
former case you would use MinGW compilers too, of course, and in the latter one
the natural idea is to use Cygwin compilers. This however means that the
generated programs would depend on Cygwin DLL and would require installing it
for them to run. As this can be undesirable, there is also a possibility of
using a MinGW cross-compiler from Cygwin environment which combines the
advantages of being able to use Cygwin on the build machine while not requiring
anything special for the deployment.

Let's summarize the choices in a concise list:

1.  Use makefiles: implies the use of MinGW compiler in DOS prompt.
2.  Use configure+make; then choose between
    * Using MSYS and MinGW compiler
    * Using Cygwin and Cygwin compiler
    * Using Cygwin and MinGW cross-compiler

Using MSYS and MinGW compiler is probably the simplest one if you want to
install as few things as possible. However, it doesn't allow you to easily
specify many compilation options (you need to edit `setup.h` file instead of
just passing options to configure on command line) and, worse, it doesn't
produce a `wx-config` script as part of the build -- and even if it did, there
would be no way to use it without some kind of Unix-like shell.

Because of this, I always recommended using the second approach to building
wxWidgets. Moreover, personally I've always favoured using Cygwin because I use
[zsh] all day long anyhow. However traditionally you had to use Cygwin compiler
which was the worst of the lot. Not only did it always lag a version or two (and
sometimes more) behind the latest available MinGW one, but it also was
significantly slower than MinGW version. And, of course, the binaries created by
it depended on `cygwin1.dll`. Because of this, people fond of Cygwin (or,
alternatively, not fond of many MSYS problems), also tried to use native MinGW
compilers under Cygwin and this could be made to work but was so painful because
you had to painstakingly ensure that both MinGW compiler and Cygwin tools could
understand the paths you used (which basically meant that only relative paths
could be really used as absolute paths take different forms for Windows-based
MinGW compiler and Cygwin-based tools) that I could never wholeheartedly
recommend it.

So I was very pleasantly surprised when I learnt that Cygwin now provides recent
versions of MinGW cross-compiler or, rather, several of them. As Charles Wilson
[explains here], there is a cross-compiler for Win64 from [MinGW64] project,
another cross-compiler for Win32 from the same project and also a Win32
cross-compiler from "traditional" [MinGW]. Hence now you have yet another choice
to make in using Cygwin and MinGW cross-compiler.

Obviously, if you need to target Win64 the choice is easy to make, as there is
only one of them. I recommend using MinGW64 version of Win32 cross-compiler as
well for two reasons: first, it seems quite likely that you will need to target
Win64 later even if you don't need it now, so why not use the same compiler that
would allow you to build for Win64 later. And second, MinGW64 uses the so-called
SJLJ exceptions which can propagate through the code not compiled with gcc, e.g.
all Windows system DLLs. And in practice this is needed to be able to catch any
exceptions thrown by your wxWidgets event handlers. So while DW2 exceptions used
by MinGW version do have their advantages (in particular they are much more
speed-efficient), SJLJ ones are preferable for wxWidgets GUI applications.

To summarize, my recommendation for building wxWidgets under Windows using gcc
is now straightforward and unambiguous: use MinGW64 compiler under Cygwin. To be
more precise, you need to install Cygwin (if you don't have it yet) and its
[mingw64-i686-gcc-g++] package (you shouldn't download this file directly
though, use Cygwin setup program to install it with all its dependencies). Then
you simply need to run wxWidgets configure with the following options:

    ./configure --host=i686-w64-mingw32 --build=i686-pc-cygwin ...

and run make as usual. You can also use `wx-config` script and, in general,
things are almost as nice as under Unix. Just don't forget to use
`i686-w64-mingw32-g++` compiler instead of plain `g++` if you write it manually
instead of using `wx-config --cxx` output.

Another good news is that the speed of the compiler seems to have improved
dramatically since the bad old `gcc3` days: building the entire wxWidgets takes
less than 4 minutes here with `make -j8` in default shared library build.
Running configure itself is still painfully slow the first time but reasonably
fast afterwards if you use `-C` option to cache the tests results.

Good luck building your applications using wxWidgets using Cygwin
cross-compilers and thanks for Cygwin and MinGW(64) folks for making it faster
and easier than ever!

[MinGW]: http://www.mingw.org/
[MSYS]: http://www.mingw.org/wiki/msys
[Cygwin]: http://www.cygwin.com/
[zsh]: http://www.zsh.org/
[explains here]: http://cygwin.com/ml/cygwin/2011-06/msg00021.html
[MinGW64]: http://mingw-w64.sourceforge.net/
[MinGW]: http://mingw.org/
[mingw64-i686-gcc-g++]: http://cygwin.com/packages/mingw64-i686-gcc-g++/
