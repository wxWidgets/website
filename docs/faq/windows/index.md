---
title: "Windows FAQ"
---

See also [top-level FAQ page](/docs/faq/).

### List of questions in this category

*   [Which Windows platforms are supported?](#platforms)
*   [What do I need to do for Windows XP?](#winxp)
*   [What compilers are supported?](#compilers)
*   [Which is the best compiler to use with wxWidgets?](#bestcompiler)
*   [Is Unicode supported?](#unicode)
*   [Does wxWidgets support double byte fonts (Chinese/Japanese/Korean etc.)?](#doublebyte)
*   [Can you compile wxWidgets as a DLL?](#dll)
*   [How can I reduce executable size?](#exesize)
*   [Is wxWidgets compatible with MFC?](#mfc)
*   [Why do I get errors about setup.h not being found?](#setuph)
*   [Why do I get errors about FooBarA when I only use FooBar in my program?](#asuffix)
*   [Why my code fails to compile with strange errors about new operator?](#newerrors)
*   [How do I port MFC applications to wxWidgets?](#mfcport)
*   [Why are menu hotkeys or shortcuts not working in my application?](#shortcutproblem)
*   [Why can I not write to the HKLM part of the registry with wxRegConfig?](#regconfig)
*   [Is MS Active Accessibility supported?](#access)
*   [Why does Visual C++ complain about corrupted project files?](#dspfmt)
*   [Visual C++ gives errors about multiply defined symbols, what can I do?](#crtmismatch)
*   [Why do I get compilation errors when using wxWidgets with DirectShow?](#directx)
*   [How to get `HWND` of a wxWindow object?](#gethwnd)
*   [How do I handle Windows messages in my wxWidgets program?](#handlewm)

<a name="platforms"></a>

### Which Windows platforms are supported?

wxWidgets can be used to develop and deliver applications on Windows
XP, Vista, 7, 8, 10.

<a name="winxp"></a>

### What do I need to do for Windows XP?

The XP manifest is included in wx/msw/wx.rc and so your application will be
themed automatically so long as you include wx.rc in your own .rc file.

<a name="compilers"></a>

### What compilers are supported?

Please see [docs/msw/install.md](https://github.com/wxWidgets/wxWidgets/blob/master/docs/msw/install.md) file for up-to-date information.
Also see [this article](https://docs.wxwidgets.org/trunk/page_introduction.html#page_introduction_requirements).

<a name="bestcompiler"></a>

### Which is the best compiler to use with wxWidgets?

It's partly a matter of taste, but some people prefer Visual C++ since the
debugger is very good, it's very stable, the documentation is extensive, and it
generates small executables. Since project files are plain text, it's easy for
me to generate appropriate project files for wxWidgets samples.

Among the free compilers the best choice seem to be mingw32 (port of gcc to
Win32), with all its different flavours.

You can't beat Cygwin's price (free), and you can debug adequately using gdb.
However, it's quite slow to compile since it does not use precompiled headers.

Embarcadero C++ Builder is fine and allegedly very fast.

<a name="unicode"></a>

### Is Unicode supported?

Yes, Unicode is fully supported.

<a name="doublebyte"></a>

### Does wxWidgets support double byte fonts (Chinese/Japanese/Korean etc.)?

By far the best advice is to use Unicode build and avoid dealing with DBCS.
Otherwise, for Japanese, it seems that wxWidgets has no problems working
with double byte char sets (meaning DBCS, not Unicode). First you have to
install Japanese support on your system and choose for ANSI translation
`HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Nls\CodePage=932` (default
is 1252 for Western). Then you can see all the Japanese letters in wxWidgets
applications.

<a name="dll"></a>

### Can you compile wxWidgets as a DLL?

Yes, but be aware that distributing DLLs is a thorny issue and you may be
better off compiling statically-linked applications, unless you're delivering
a suite of separate programs, or you're compiling a lot of wxWidgets
applications and have limited hard disk space.

With a DLL approach, and with different versions and configurations of
wxWidgets needing to be catered for, the end user may end up with a host of
large DLLs in his or her Windows system directory, negating the point of using
DLLs. Of course, this is not a problem just associated with wxWidgets!

<a name="exesize"></a>

### How can I reduce executable size?

You can compile wxWidgets as a DLL (see above). You should also compile your
programs for release using non-debugging and space-optimisation options.

If you want to distribute really small executables, you can use
[Petite](http://www.un4seen.com/petite/) by Ian Luck. This nifty utility
compresses Windows executables by around 50%, so your 500KB executable will
shrink to a mere 250KB. With this sort of size, there is reduced incentive to
use DLLs. Another good compression tool (probably better than Petite) is
[UPX](http://upx.sourceforge.net/).

Please do not be surprised if MinGW produces a statically-linked minimal
executable of 1 MB. Firstly, gcc produces larger executables than some
compilers. Secondly, this figure will include most of the overhead of
wxWidgets, so as your application becomes more complex, the overhead becomes
proportionally less significant. And thirdly, trading executable compactness
for the enormous increase in productivity you get with wxWidgets is almost
always well worth it.

If you have a really large executable compiled with MinGW (for example 20MB)
then you need to configure wxWidgets to compile without debugging information:
see docs/msw/install.txt for details. You may find that using configure instead
of makefile.g95 is easier, particularly since you can maintain debug and
release versions of the library simultaneously, in different directories. Also,
run 'strip' after linking to remove all traces of debug info.

<a name="mfc"></a>

### Is wxWidgets compatible with MFC?

There is a sample which demonstrates MFC and wxWidgets code co-existing in the
same application. However, don't expect to be able to enable wxWidgets windows
with OLE-2 functionality using MFC.

<a name="setuph"></a>

### Why do I get errors about setup.h not being found?

When you build the wxWidgets library, setup.h is copied from
include/wx/msw/setup.h to e.g. lib/vc_lib/mswud/wx/setup.h (the path depends on
the configuration you're building). So you need to add `lib/vc_lib/mswud` to
your include path if building using the static Unicode Debug library, or
`lib/vc_lib/mswu` if building the static Unicode Release library.

<a name="asuffix"></a>

### Why do I get errors about FooBarA when I only use FooBar in my program?

If you get errors like:

    no matching function for call to 'wxDC::DrawTextA(const char[5], int, int)'

Or similar ones for the other functions, i.e. the compiler error messages
mention the function with the `'A'` suffix while you didn't use it in your
code, the explanation is that you had included `<windows.h>` header which
redefines many symbols to have such suffix (or `'W'` in the Unicode builds).

The fix is to either not include `<windows.h>` at all or include
`"wx/msw/winundef.h"` immediately after it.

<a name="newerrors"></a>

### Why my code fails to compile with strange errors about new operator?

The most common cause of this problem is the memory debugging settings in
`wx/msw/setup.h`. You have a couple choices:

1. Either disable overloading the global operator new completely by setting
   wxUSE_GLOBAL_MEMORY_OPERATORS and wxUSE_DEBUG_NEW_ALWAYS to 0 in this file.
2. Or leave them on but do #undef new after including any wxWidgets headers,
   like this the memory debugging will be still on for wxWidgets sources but
   off for your own code.

Notice that IMHO the first solution is preferable for VC++ users who can use
the VC++ CRT memory debugging features instead.

<a name="mfcport"></a>

### How do I port MFC applications to wxWidgets?

Set up your interface from scratch using wxWidgets (especially
[DialogBlocks](http://www.anthemion.co.uk/dialogblocks/) -- it'll save you a
_lot_ of time) and when you have a shell prepared, you can start 'pouring in'
code from the MFC app, with appropriate modifications. This is the approach I
have used, and I found it very satisfactory. A two-step process then -
reproduce the bare interface first, then wire it up afterwards. That way you
deal with each area of complexity separately. Don't try to think MFC and
wxWidgets simultaneously from the beginning - it is easier to reproduce the
initial UI by looking at the behaviour of the MFC app, not its code.

<a name="shortcutproblem"></a>

### Why are menu hotkeys or shortcuts not working in my application?

This can happen if you have a child window intercepting EVT_CHAR events and
swallowing all keyboard input. You should ensure that event.Skip() is called
for all input that isn't used by the event handler.

It can also happen if you append the submenu to the parent menu _before_ you
have added your menu items. Do the append _after_ adding your items, or
accelerators may not be registered properly.

<a name="regconfig"></a>

### Why can I not write to the HKLM part of the registry with wxRegConfig?

Currently this is not possible because the wxConfig family of classes is
supposed to deal with per-user application configuration data, and HKLM is only
supposed to be writeable by a user with Administrator privileges. In theory,
only installers should write to HKLM. This is still a point debated by the
wxWidgets developers. There are at least two ways to work around it if you
really need to write to HKLM.

First, you can use wxRegKey directly, for example:

```cpp
wxRegKey regKey;

wxString idName(wxT("HKEY_LOCAL_MACHINE\\SOFTWARE\\My Company\\My Product\\Stuff\\"));
idName += packid;

regKey.SetName(idName);

{
    wxLogNull dummy;
    if (!regKey.Create())
    {
        idName = wxT("HKEY_CURRENT_USER\\SOFTWARE\\My Company\\My Product\\Stuff\\");
        idName += packid;
        regKey.SetName(idName);
        if (!regKey.Create())
            return FALSE;
    }
}

if (!regKey.SetValue(wxT("THING"), (long) thing)) err += 1;

regKey.Close();
```

Or, you can employ this trick suggested by Istvan Kovacs:

```cpp
class myGlobalConfig : public wxConfig
{
    myGlobalConfig() :
        wxConfig ("myApp", "myCompany", "", "", wxCONFIG_USE_GLOBAL_FILE) {};
    bool Write(const wxString& key, const wxString& value);
}

bool myGlobalConfig::Write (const wxString& key, const wxString& value)
{
    wxString path = wxString ("SOFTWARE\\myCompany\\myApp\\") + wxPathOnly(key);
    wxString new_path = path.Replace ("/", "\\", true);
    wxString new_key = wxFileNameFromPath (key);
    LocalKey().SetName (wxRegKey::HKLM, path);
    return wxConfig::Write (new_key, value);
}
```

<a name="access"></a>

### Is MS Active Accessibility supported?

Please see [this page](/docs/tutorials/accessibility/) for the current status.

<a name="dspfmt"></a>

### Why does Visual C++ complain about corrupted project files?

If you have downloaded the wxWidgets sources from the svn using a Unix svn
client or downloaded a daily snapshot in `.tar.gz` format, it is likely that
the project files have Unix line endings (LF) instead of the DOS ones (CR LF).
However some old versions of Visual C++ can only open the
files with the DOS line endings, so you must transform the files to this format
using any of the thousands ways to do it.

Of course, another possibility is to always use only the Windows svn client and
to avoid this problem completely.

<a name="crtmismatch"></a>

### Visual C++ gives errors about multiply defined symbols, what can I do?

If you get errors like this

    MSVCRTD.lib(MSVCRTD.dll) : error LNK2005: _xxxxxx already defined in LIBCD.lib(yyyyy.obj)

when linking your project, this means that you used different versions of CRT
(C Run-Time) library for wxWindows (or possibly another library) and the main
project. Visual C++ provides static or dynamic and multithread safe or not
versions of CRT for each of debug and release builds, for a total of 8
libraries. You can choose among them by going to the "Code generation"
page/subitem of the "C++" tab/item in the project proprieties dialog in VC.

To avoid problems, you **must** use the same one for all components of your
project. wxWindows uses multithread safe DLL version of the CRT which is a good
choice but may be problematic when distributing your applications if you don't
include the CRT DLL in your installation -- in this case you may decide to
switch to using a static CRT version. If you build with `wxUSE_THREADS == 0`
you may also use the non MT-safe version as it is slightly smaller and faster.

But the most important thing is to use the **same** CRT setting for all
components of your project.

<a name="directx"></a>

### Why do I get compilation errors when using wxWidgets with DirectShow?

If you get errors when including Microsoft DirectShow or DirectDraw headers,
the following message from Peter Whaite could help:

    > This causes compilation errors within DirectShow:
    >
    > wxutil.h(125) : error C2065: 'EXECUTE_ASSERT' : undeclared identifier
    > amfilter.h(1099) : error C2065: 'ASSERT' : undeclared identifier

    The reason for this is that __WXDEBUG__ is also used by the DXSDK (9.0
    in my case) to '#pragma once' the contents of
    DXSDK/Samples/C++/DirectShow/BaseClasses/wxdebug.h.  So if __WXDEBUG__
    is defined, then wxdebug.h doesn't get included, and the assert macros
    don't get defined.  You have to #undef __WXDEBUG__ before including the
    directshow baseclass's `<streams.h>`.

<a name="gethwnd"></a>

### How to get `HWND` of a wxWindow object?

If you need to interface with native Windows code, you may use
`wxWindow::GetHWND()` method whose result can be cast to `HWND`.

<a name="handlewm"></a>

### How do I handle Windows messages in my wxWidgets program?

To handle a Windows message you need to override a virtual `MSWWindowProc()`
method in a wxWindow-derived class. You should then test if `nMsg` parameter is
the message you need to process and perform the necessary action if it is or
call the base class method otherwise.
