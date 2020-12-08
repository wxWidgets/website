---
title: "Windows FAQ"
---

See also [top-level FAQ page](/docs/faq/).

### List of questions in this category

*   [Which Windows platforms are supported?](#platforms)
*   [Why do controls in my application look odd?](#manifest)
*   [Why does my application look blurry?](#hidpi)
*   [What compilers are supported?](#compilers)
*   [Is wxWidgets compatible with MFC?](#mfc)
*   [Why do I get errors about setup.h not being found?](#setuph)
*   [Why do I get errors about FooBarA when I only use FooBar in my program?](#asuffix)
*   [How do I port MFC applications to wxWidgets?](#mfcport)
*   [Why are menu hotkeys or shortcuts not working in my application?](#shortcutproblem)
*   [Is MS Active Accessibility supported?](#access)
*   [Visual C++ gives errors about multiply defined symbols, what can I do?](#crtmismatch)
*   [How to get `HWND` of a wxWindow object?](#gethwnd)
*   [How do I handle Windows messages in my wxWidgets program?](#handlewm)

<a name="platforms"></a>

### Which Windows platforms are supported?

wxWidgets can be used to develop and deliver applications on Windows
XP, Vista, 7, 8, 10.

<a name="manifest"></a>

### Why do controls in my application look odd?

If the controls do not look as expected (very noticeable e.g. with buttons),
your application probably does not have an [application manifest](https://docs.microsoft.com/en-us/windows/win32/sbscs/application-manifests)
and so Windows displays the controls unthemed, as if in Windows 9x.
wxWidgets provides such a manifest in wx/msw/wx.rc and so your application will be
themed automatically so long as you include that file in your own .rc file.

<a name="hidpi"></a>

### Why does my application look blurry?
The most likely reason is that you have a High DPI display
but your application does not state High DPI support.
Please see [High DPI Support in wxWidgets Overview](https://docs.wxwidgets.org/trunk/overview_high_dpi.html).
If you need more information about High DPI on Windows, 
please read [Microsoft Windows High DPI Guide](https://docs.microsoft.com/en-us/windows/win32/hidpi/high-dpi-desktop-application-development-on-windows).

<a name="compilers"></a>

### What compilers are supported?

Please see [docs/msw/install.md](https://github.com/wxWidgets/wxWidgets/blob/master/docs/msw/install.md) file for up-to-date information.
Also see [this article](https://docs.wxwidgets.org/trunk/page_introduction.html#page_introduction_requirements).


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

This can happen if you have a child window intercepting `EVT_CHAR` events and
swallowing all keyboard input. You should ensure that `event.Skip()` is called
for all input that isn't used by the event handler.

It can also happen if you append the submenu to the parent menu _before_ you
have added your menu items. Do the append _after_ adding your items, or
accelerators may not be registered properly.



<a name="access"></a>

### Is MS Active Accessibility supported?

Please see [this page](/docs/tutorials/accessibility/) for the current status.


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
