---
title: "General FAQ"
---

See also [top-level FAQ page](/docs/faq/).

### List of questions in this category

*   [What is wxWidgets?](#whatis)
*   [Can I use wxWidgets for both proprietary projects, and GPL'ed projects?](#licence)
*   [Is there support?](#support)
*   [Who uses wxWidgets?](#users)
*   [What platforms are supported by wxWidgets?](#platforms)
*   [How does wxWidgets support platform-specific features?](#specific)
*   [Does wxWidgets use STL, or the standard string class?](#stl)
*   [Is there a rich edit/markup widget for wxWidgets?](#richedit)
*   [How to use C++ exceptions with wxWidgets?](#exceptions)
*   [How is wxWidgets being developed?](#dev)
*   [How is wxWidgets distributed?](#distrib)
*   [What is wxBase?](#base)
*   [What is wxUniversal?](#univ)
*   [What about Java?](#java)
*   [What about .NET/Mono?](#dotnet)
*   [How can I help the project?](#help)
*   [How do I start a new port?](#newport)

<a name="whatis"></a>

### What is wxWidgets?

wxWidgets is a class library that allows you to compile graphical C++ programs
on a range of different platforms. wxWidgets defines a common API across
platforms, but uses the native graphical user interface (GUI) on each platform,
so your program will take on the native 'look and feel' that users are familiar
with.

Although GUI applications are mostly built programmatically, there are several
dialog editors to help build attractive dialogs and panels. Anthemion
Software's [DialogBlocks](http://www.anthemion.co.uk/dialogblocks/) is one
commercial example, but there are many others, see the wiki
[tools](https://wiki.wxwidgets.org/Tools) page for some of them.

You don't have to use C++ to use wxWidgets: there is a
[Python interface](http://wxpython.org/) for wxWidgets, and also a
[Perl interface](http://wxperl.sourceforge.net/).

<a name="licence"></a>

### Can I use wxWidgets for both proprietary (commercial) projects, and GPL'ed projects?

Yes. Please see the [licence](/about/licence/) for details, but basically you
can distribute proprietary binaries without distributing any source code, and
neither will wxWidgets conflict with GPL code you may be using or developing
with it.

The conditions for using wxWidgets are the same whether you are a personal,
academic or commercial developer.

<a name="support"></a>

### Is there support?

No official support, but the mailing list is very helpful and some people say
that wxWidgets support is better than for much commercial software. The
developers are keen to fix bugs as soon as possible, though obviously there are
no guarantees.

<a name="users"></a>

### Who uses wxWidgets?

Many organisations - commercial, government, and academic - across the
world. It's impossible to estimate the true number of users, since wxWidgets
is obtained by many different means, and we cannot monitor distribution.

See the [screenshots page](/about/screenshots/) for a list of some users and
their applications.

<a name="platforms"></a>

### What platforms are supported by wxWidgets?

Please see the [overview page](/about/) for the list of supported platforms.

<a name="specific"></a>

### How does wxWidgets support platform-specific features?

This is a hotly-debated topic amongst the developers. My own philosophy is to
make wxWidgets as platform-independent as possible, but allow in a few classes
(functions, window styles) that are platform-specific.
For example, Windows metafiles and file system volumes/drives have their own
classes on Windows, but nowhere else. Because these classes are provided and
are wxWidgets-compatible, it doesn't take much coding effort for an application
programmer to add support for some functionality that the user on a particular
platform might otherwise miss. Also, some classes that started off as
platform-specific, such as the MDI classes, have been emulated on other
platforms. wxTaskBarIcon started as Windows-only but was eventually implemented
for other ports too.

In other words, wxWidgets is not a 'lowest common denominator' approach, but it
will still be possible to write portable programs using the core API.
Forbidding some platform-specific classes would be a stupid approach that would
alienate many potential users, and encourage the perception that toolkits such
as wxWidgets are not up to the demands of today's sophisticated applications.

Currently resources such as bitmaps and icons are handled in a platform-
specific way, but it is hoped to reduce this dependence in due course.

Another reason why wxWidgets is not a 'lowest common denominator' toolkit is
that some functionality missing on some platform has been provided using
generic, platform-independent code, such as the wxTreeCtrl and wxListCtrl
classes.

<a name="stl"></a>

### Does wxWidgets use STL, or the standard string class?

wxWidgets doesn't use STL by default simply because it wasn't widely available
when the library was initially developed. However wxWidgets does strive to
provide seamless interoperability with standard containers and other classes.
For example, a `std::string` or `std::wstring` can be used anywhere where
`wxString` is expected and a `wxString` can, in turn, be easily converted to
an object of the standard string class using its `ToStdString()` and
`ToStdWstring()` methods.

Moreover, if the library is built with `wxUSE_STL==1`, standard containers are
used for implementing wxWidgets containers such as `wxList` and `wxString`
also becomes _implicitly_ convertible to standard string classes, improving
interoperability even further.


<a name="richedit"></a>

### Is there a rich edit/markup widget for wxWidgets?

These are the possibilities so far:

* See [www.scintilla.org](http://www.scintilla.org) for a very nice
  syntax-highlighting editor widget. wxWidgets includes an implementation of
  this control named [wxStyledTextCtrl](https://docs.wxwidgets.org/stable/classwx_styled_text_ctrl.html).
* If you only need to display marked-up information, rather than edit it, then
  wxHTML will suit your needs. wxHTML is built into wxWidgets - please see the
  reference manual for details, and samples/html.
* There is also [wxRichTextCtrl](https://docs.wxwidgets.org/stable/classwx_rich_text_ctrl.html),
  a generic control implemented on all platforms.
* The wxTextCtrl class supports some less powerful control over styles using
  [wxTextAttr](https://docs.wxwidgets.org/stable/classwx_text_attr.html).
* And finally, a heavier solution is available by pulling in a full native
  browser engine using [wxWebView](https://docs.wxwidgets.org/stable/classwx_web_view.html).

<a name="exceptions"></a>

### How to use C++ exceptions with wxWidgets?

wxWidgets library itself is unfortunately _not_ exception-safe (as its initial
version predates, by far, the addition of the exceptions to the C++ language).
However you can still use the exceptions in your own code and use the other
libraries using the exceptions for the error reporting together with wxWidgets.

There are a few issues to keep in mind, though:

* You shouldn't let the exceptions propagate through wxWidgets code, in
  particular you should always catch the exceptions thrown by the functions
  called from an event handler in the handler itself and not let them propagate
  upwards to wxWidgets.
* You may need to ensure that the compiler support for the exceptions is
  enabled as, considering that wxWidgets itself doesn't use the exceptions and
  turning their support on results in the library size augmentation of 10% to
  20%, it is turned off by default for a few compilers. Moreover, for gcc (or
  at least its mingw version) you must also turn on the RTTI support to be able
  to use the exceptions, so you should use the `--disable-no_rtti` and
  `--disable-no_exceptions` options when configuring the library (note the
  double negation).

<a name="dev"></a>

### How is wxWidgets being developed?

We are using [git](/develop/code-repository/) to develop and maintain wxWidgets.
This allows us to make alterations and publish them where others can update
their source.

To build source from git, see the BuildGit.txt file in the top-level wxWidgets
distribution directory.

<a name="distrib"></a>

### How is wxWidgets distributed?

You can download wxWidgets from our [downloads](/downloads/) page. If you are
feeling adventurous, you may also check out the sources directly from the
[code repository](/develop/code-repository/).

<a name="base"></a>

### What is wxBase?

wxBase is a subset of wxWidgets comprised by the non-GUI classes. It includes
wxWidgets container and primitive data type classes (including wxString,
wxDateTime and so on) and also useful wrappers for the operating system objects
such as files, processes, threads, sockets and so on. With very minor
exceptions wxBase may be used in exactly the same way as wxWidgets but it
doesn't require a GUI to run and so is ideal for creating console mode
utilities or server programs. It is also possible to create a program which can
be compiled either as a console application (using wxBase) or a GUI one (using
a full featured wxWidgets port).

<a name="univ"></a>

### What is wxUniversal?

The main difference between wxUniversal-based ports (such as wxX11, wxDirectFB) and
other ports (such as wxMSW, wxGTK+, wxMac) is that wxUniversal implements all
controls (or widgets) in wxWidgets itself thus allowing to have much more
flexibility (for example, support for themes even under MS Windows). It also
means that it is now much easier to port wxWidgets to a new platform as only
the low-level classes must be ported which make for a small part of the
library.

<a name="java"></a>

### What about Java?

The Java honeymoon period is over :-) and people are realising that it cannot
meet all their cross-platform development needs. We don't anticipate a major
threat from Java, and the level of interest in wxWidgets is as high as ever.

<a name="dotnet"></a>

### What about .NET/Mono?

Microsoft is spending a lot on promoting the .NET initiative, which is a set of
languages, APIs and web service components for Windows. Ximian has started an
open source version of .NET, mostly for Linux. C# is Microsoft's alternative to
Java, supporting 'managed code', garbage collection and various other Java-like
language features.

Although this may be attractive to some developers, there is a variety of
reasons why the .NET/Mono combination is unlikely to make wxWidgets redundant.
Please note that the following comments are Julian Smart's opinions.

1.  Not everyone wants or needs net services.
2.  Mono Forms may only target Winelib (at least to begin with), so the end
      result is not as native as wxWidgets (I'm aware there is GTK# for use
      with the C# language).
3.  C# is usually byte-compiled and therefore slower. Plus, .NET adds a
      layer of overhead to the client computer that wxWidgets does not
      require.
4.  Mono hasn't proven its long-term viability yet (it's a complex system of
      components); wxWidgets is ready now.
5.  You may not wish to buy into Microsoft marketing spin and APIs.
6.  Microsoft may at some point sue developers of non-Microsoft .NET
      implementations. After all, platform-independence is not in Microsoft's
      interest.
7.  .NET might never be implemented on some platforms, especially Mac and
      embedded variants of Linux.
8.  wxPython and other language variants provide further reasons for
      wxWidgets to continue.
9.  The same issue exists for Qt: if Qt sales remain strong, it's a good
      indication that the market for a C++ based approach is still there.
      (Either that, or everyone's turning to wxWidgets!)

There is nothing to stop folk from developing a C# version of the wxWidgets
API. We already have bindings to Python, Perl, JavaScript, Lua, Basic, and
Eiffel. Update: A [wx.NET](http://wxnet.sourceforge.net/) project is now in
progress.

<a name="help"></a>

### How can I help the project?

Please check out the [Developer](/develop/) pages, in particular subscribe to
the developers' [mailing list](/support/mailing-lists/) to join in some of the
tasks and topics being worked on.

<a name="newport"></a>

### How do I start a new port?

Please subscribe to the [developers' mailing list](/support/mailing-lists/)
(wx-dev) and ask if anyone else is interested in helping with the port, or has
specific suggestions. Also please read the
[coding standards](/develop/standard.htm).

Each port consists of a platform-specific part (e.g. src/msw, include/wx/msw),
a generic set of widgets and dialogs for when the port doesn't support them
natively (src/generic, include/wx/generic) and the common code that all ports
use (src/common, include/wx). By browsing the source you should get a good idea
of the general pattern.

To kick start a new port development one possible strategy is to take a port
that most closely matches your port, and strip out the implementation so you
have a skeleton port that compiles, and then start implementing the classes
using your target platform native API.

You will need to define a symbol for the new port, e.g. `__WXXBOX__`. Look at
files such as wx/defs.h, wx/wxchar.h for areas where you'll need to add to
existing conditionals to set up wide character support and other issues. If the
GUI runs on a Unix variant, define the `__UNIX__` variable in your makefile.

Then you can start implementing the port, starting with wxWindow,
wxTopLevelWindow, wxFrame, wxDialog so you can get the minimal sample running
as soon as possible.

If GDI objects (wxPen, wxBrush, etc.) are not concepts in your native GUI, you
may wish to use very generic versions of some of these - see the wxX11 port.

Consider using the wxUniversal widget set as a quick way to implement wxWidgets
on your platform. You only need to define some basic classes such as device
contexts, wxWindow, wxTopLevelWindow, GDI objects etc. and the actual widgets
will be drawn for you. See wxX11, wxMGL, and wxMSW/Univ for sample wxUniversal
ports.

To begin with, you can use whatever makefiles or project files work for you.
Look at existing makefiles to see what generic/common/Unix files need to be
included. Later, you'll want to integrate support for your port into configure
(Unix-like systems and gcc under Windows), and bakefile (for other makefiles on
Windows).

Submit your port as patches via SourceForge; you might wish to separate it into
one patch that touches common headers and source files, and another containing
the port-specific code, to make it much easier for us to review and apply the
patches.

Good luck!
