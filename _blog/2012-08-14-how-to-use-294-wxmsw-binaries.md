---
title: How to use 2.9.4 wxMSW binaries
date: '2012-08-14T16:58:00.001Z'
author: Vadim Zeitlin
tags:
- howto
- msvs
modified_time: '2013-02-08T21:05:34.724Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-674840326215457843
blogger_orig_url: http://wxwidgets.blogspot.com/2012/08/how-to-use-294-wxmsw-binaries.html
---

## Please note that this post is out of date, see the [wxMSW binaries](https://docs.wxwidgets.org/3.1.4/plat_msw_binaries.html) section of the manual for the up-to-date instructions.

---

We have decided to experiment with providing binaries for wxWidgets releases.
So, for the first time ever, 2.9.4 release includes [binaries] for a few
different versions of Microsoft Visual C++ compiler.

However we might not have done a very good job of explaining how to actually use
them, the `README` at the link above is relatively brief and omits some steps,
so let me try to explain in more details how to build your wxWidgets
applications using the files provided and without building wxWidgets yourself.

First, you need to get the correct files. You will always need the [headers] one
but the rest depends on your compiler version and architecture: as different
versions of MSVC compiler are not binary compatible, you should select the files
with the correct `vc80`, `vc90` or `vc100` suffix depending on whether you use
Visual Studio 2005, 2008 or 2010 respectively. You also need to decide whether
you use the `x64` files for 64-bit development or the ones without this suffix
for the still more common 32-bit builds. After determining the combination of
suffixes you need, you should download the "Dev" and the "ReleaseDLL" files in
addition to the "Headers" one above, e.g. for 32-bit MSVS 2010 development you
need [wxMSW-2.9.4_vc100_Dev.7z]and [wxMSW-2.9.4_vc100_ReleaseDLL.7z].

Once you have the files you need, unzip all of them into the same directory, for
example `c:\wx\2.9.4`. You should have only include and lib subdirectories under
it, nothing else. To avoid hard-coding this path into your projects, define
`wxwin` environment variable containing it: although it's a little known fact,
all versions of MSVC support environment variable expansion in the C++ projects
(but not, unfortunately, in the solution files).

Next step is to set up your project to use these files. You need to do the
following:

*   In the compiler options, i.e. "C/C++" properties:
    *   Add `$(wxwin)/include/msvc;$(wxwin)/include` to the "Additional Include
        Directories". Notice that the order is important here, putting the
        MSVC-specific directory first ensures that you use `wx/setup.h`
        automatically linking in wxWidgets libraries.
    *   Add `WXUSINGDLL` and `wxMSVC_VERSION_AUTO` to the list of defined
        symbols in "Preprocessor Definitions". The first should be
        self-explanatory (we only provide DLLs, not static libraries) while the
        second one is necessary to use the libraries from e.g. `lib\vc100_dll`
        directory and not the default `lib\vc_dll`.
    *   Also check that `_UNICODE` and `UNICODE` symbols are defined in the same
        "Preprocessor Definitions" section. This should already be the case for
        the newly created projects but it might be necessary to add them if
        you're upgrading an existing one.
    *   Check that you use "Multi-threaded \[Debug\] DLL" in the "Run-time
        library" option under "Code Generation" to ensure that your build uses
        the same CRT version as our binaries.
*   In the linker options you only need to add `$(wxwin)\lib\vc100_dll` (with
    the compiler-version-dependent suffix, of course) to "Additional Library
    Directories" under "Linker\\General" in the options. Thanks to the use of
    MSVC-specific `setup.h` you don't need to list wxWidgets libraries manually,
    i.e. you do **not** need to put anything in the list of "Additional
    Dependencies".

Now you should be able to build your project successfully, both in "Debug" and
"Release" configurations. With MSVC 10 it can also be done from the command line
using `msbuild.exe`. Of course, to run the generated executable you will need to
either add the directory containing wxWidgets DLLs to your PATH or copy the DLL
files to a directory already on it. Finally, if you want to distribute the
binaries created using these options, you will need to install Microsoft Visual
C++ run-time DLLs. Again, MSVC 10 has an advantage here as you can simply copy
`msvcp100.dll` and `msvcr100.dll` as any other DLL, while you need to install
specially for the previous compiler versions that use WinSxS ("side-by-side")
for them.

Let us know if you run into any problems using these binaries or, on the
contrary, if you didn't but were glad to have them. If enough people find them
useful, we'll try to provide them again for 2.9.5 and, most importantly, for
3.0.

---

Updated on 2012-08-23T12:55:10: Corrected linker options instructions.

[binaries]: https://sourceforge.net/projects/wxwindows/files/2.9.4/binaries/
[headers]: https://sourceforge.net/projects/wxwindows/files/2.9.4/binaries/wxWidgets-2.9.4_Headers.7z/download
[wxMSW-2.9.4_vc100_Dev.7z]: https://sourceforge.net/projects/wxwindows/files/2.9.4/binaries/wxMSW-2.9.4_vc100_Dev.7z/download
[wxMSW-2.9.4_vc100_ReleaseDLL.7z]: https://sourceforge.net/projects/wxwindows/files/2.9.4/binaries/wxMSW-2.9.4_vc100_ReleaseDLL.7z/download
