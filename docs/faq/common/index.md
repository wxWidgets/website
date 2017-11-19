---
title: "Common FAQ"
---

See also [top-level FAQ page](/docs/faq/).

### List of questions in this category

*   [Who deletes all the windows I create?](#windelete)
*   [How to create and use custom events?](#custevent)
*   [Why doesn't my code work when I create a window from a thread?](#guithread)
*   [How can I set the TAB order of the controls?](#taborder)
*   [What is the difference between `_T()`, `wxT()` and `_()`?](#wxtmacro)
*   [Why doesn't `Esc` close my dialog?](#escdlg)
*   [How can I get rid of message boxes with error messages?](#lognull)
*   [How do I write a Unix makefile for my program?](#makefile)
*   [XRC can't display non-ASCII characters correctly](#xrclocale)

<a name="windelete"></a>

### Who deletes all the windows I create?

All windows and controls in wxWidgets programs are created using `new` but you
shouldn't use `delete` to free them. This doesn't result in memory leaks
because wxWidgets takes care of this: all objects derived from wxWindow will be
deleted automatically by the library when the corresponding real, on screen,
window is destroyed. Thus, the top level window objects are deleted when you
call `Close()` or `Destroy()` and all the child windows are deleted just before
the parent window is. More details about the top level windows can be found in
the "Window deletion overview" in the manual.

wxWidgets also automatically deletes some other kind of the objects, notably
the sizer or constraint associated with the window -- this happens just before
the window itself is deleted. The sizers, in turn, delete their child sizers
automatically as well so in a typical situation you don't have to worry about
freeing the sizers you create. Note, however, that if you `Remove()` a sizer
from the window, it isn't automatically deleted any more and you are
responsable for doing this.

<a name="custevent"></a>

### How to create and use custom events?

Please look at the `event` wxWidgets sample source code, it shows how to do
this among other things. Note that the way custom events are defined has
changed in wxWidgets 2.3.1 as compared to the previous releases.

<a name="guithread"></a>

### Why doesn't my code work when I create a window from a thread?

Using any GUI functions from the thread other than the main one (the one
running the application event loop) is not supported, in particular creating
windows from a worker thread will never work. If you need to do anything from
the worker thread the simplest way to do it is to post a custom event to the
main thread asking it to do whatever is necessary.

<a name="taborder"></a>

### How can I set the TAB order of the controls?

Starting from wxWidgets 2.8 you can call wxWindow::MoveBeforeInTabOrder() and
MoveAfterInTabOrder() to change the position of a child window in the TAB
chain. Notice that by default the TAB order is the same as the order of
creation.

<a name="wxtmacro"></a>

### What is the difference between `_T()`, `wxT()` and `_()`?

First of all, `_T()` is exactly the same as `wxT()` (it exists only because it
should be more familiar to Windows programmers) which reduces the problem of
choosing among the macros to use somewhat.

Here is some pseudo-code for choosing the macro to use between the remaining
possibilities, that is whether to use `wxT()`, use `_()` or not use any of
them:

    if ( string should be translated )
        use _("string")
    else if ( string should be in Unicode in Unicode build )
        use wxT("string")
    else
        just use "string" normally

`wxT()` used to be mandatory for code intended to compile in both Unicode and
ANSI builds. Currently it is no longer required. Note that `_()` always took
care of it internally so code using it will continue to compile in both
Unicode and ANSI builds.

Please see the description of these macros in the manual for more details.

<a name="escdlg"></a>

### Why doesn't `Esc` close my dialog?

Pressing `Esc` will close the dialog if and only if it has a button with
`wxID_CANCEL` id.

<a name="lognull"></a>

### How can I get rid of message boxes with error messages?

These message boxes are probably due to calls to `wxLogError()` or other log
functions from wxWidgets code. To completely suppress them you may use
wxLogNull class, please see the manual for details. Do note, however, that a
better solution is to avoid the error in the first place as suppressing these
error message might hide other, important, ones.

<a name="makefile"></a>

### How do I write a Unix makefile for my program?

The simplest way to write a makefile is to copy `samples/minimal/makefile.unx`
from the wxWidgets distribution and adapt it to your needs. Notice that you
should _not_ use the `Makefile` file from the same directory as it only works
for the samples because it assumes that the program being built is inside
wxWidgets source tree.

The `makefile.unx` files use `wx-config` instead and are more flexible. The
minimal makefile has comments inside it explaining how to adapt it for your
program.

<a name="xrclocale"></a>

### XRC can't display non-ASCII characters correctly

If you use the wxXRC_USE_LOCALE flag (which is on by default), strings from XRC
files are translated using wxLocale. wxLocale assumes the strings are in ASCII
- if the are not, wxXmlResource leaves them in UTF-8 encoding in ANSI builds of
wxWidgets. Either don't use `wxXRC_USE_LOCALE` or use `translate="0"` attribute
in XRC files.
