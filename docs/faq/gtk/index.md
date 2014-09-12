---
title: "GTK+ FAQ"
---

See also [top-level FAQ page](/docs/faq/).

### List of questions in this category

*   [What is wxGTK?](#wxgtk)
*   [Why doesn't reading floating point numbers work when using wxWidgets?](#locale)
*   [Does wxGTK have GNOME support?](#gnome)
*   [Can I statically link the GTK+ library?](#static)
*   [Why does my simple program using `EVT_CHAR` not work?](#charinframe)
*   [How do I trace the cause of an X11 error such as BadMatch?](#debugging)

<a name="wxgtk"></a>

### What is wxGTK?

wxGTK is a port of wxWidgets to the [GTK+ toolkit](http://www.gtk.org/). It is
the default port used (if available) on all Linux and Unix platforms except for
Mac OS X.

<a name="locale"></a>

### Why doesn't reading floating point numbers work when using wxWidgets?

If your program reads the floating point numbers in the format `123.45` from a
file, it may suddenly start returning just `123` instead of the correct value
on some systems -- which is all the more mysterious as the same code in a
standalone program works just fine.

The explanation is that GTK+ changes the current locale on program startup. If
the decimal point character in the current locale is not the period (for
example, it is comma in the French locale), all the standard C functions won't
recognize the numbers such as above as floating point ones any more.

The solution is to either use your own function for reading the floating point
numbers (probably the best one) or to call `setlocale(LC_NUMERIC, "C")` before
reading from file and restore the old locale back afterwards if needed.

<a name="gnome"></a>

### Does wxGTK have GNOME support?

Currently wxGTK does not have any features that would involve dependence on any
desktop environment's libraries, so it can work on GNOME, KDE and with other
window managers without installation hassles. Some GNOME and KDE integration
features are file based, and so may be added without dependence on libraries.
Other features may be supported in the future, probably as a separate library.

<a name="static"></a>

### Can I statically link the GTK+ library?

No, this is not possible. It leads to crashes in GTK+.

<a name="charinframe"></a>

### Why does my simple program using `EVT_CHAR` not work?

In wxGTK, the frames never get focus and so can never receive `CHAR` nor `KEY`
events so an `EVT_CHAR` handler for a frame will be never called. To receive
these events, you should create a `wxPanel` inside the frame and register the
key event handlers for the panel, not the frame.

<a name="debugging"></a>

### How do I trace the cause of an X11 error such as BadMatch?

When a fatal X11 error occurs, the application quits with no stack trace. To
find out where the problem is, put a breakpoint on g_log (`b g_log` in gdb).
