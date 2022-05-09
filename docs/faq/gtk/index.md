---
title: "GTK FAQ"
---

See also [top-level FAQ page](/docs/faq/).

### List of questions in this category

*   [What is wxGTK?](#wxgtk)
*   [Why entering accented letters or other non-ASCII characters doesn't work?](#xim)
*   [Why doesn't reading floating point numbers work when using wxWidgets?](#locale)
*   [Does wxGTK have GNOME support?](#gnome)
*   [Can I statically link the GTK library?](#static)
*   [Why does my simple program using `EVT_CHAR` not work?](#charinframe)
*   [How do I trace the cause of an X11 error such as BadMatch?](#debugging)

<a name="wxgtk"></a>

### What is wxGTK?

wxGTK is a port of wxWidgets to the [GTK toolkit](https://www.gtk.org/). It is
the default port used (if available) on all Linux and Unix platforms.

<a name="xim"></a>

### Why entering accented letters or other non-ASCII characters doesn't work?

Please check that you don't use unsupported and obsolete XIM input method
manager by doing `echo $GTK_IM_MODULE` in a terminal window. If this outputs
"xim", please do `unset GTK_IM_MODULE` or install `ibus` package (exact name
varies on the distribution used) and log out and in again, which should
normally set `GTK_IM_MODULE=ibus`.

Using XIM results in multiple problems with both input and appearance (e.g. it
can result in noticeable flickering even when not using any non-ASCII
characters at all), so please avoid using it.

<a name="locale"></a>

### Why doesn't reading floating point numbers work when using wxWidgets?

If your program reads the floating point numbers in the format `123.45` from a
file, it may suddenly start returning just `123` instead of the correct value
on some systems -- which is all the more mysterious as the same code in a
standalone program works just fine.

The explanation is that GTK changes the current locale on program startup. If
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

### Can I statically link the GTK library?

No, this is not possible. This is not supported by GTK itself.

<a name="charinframe"></a>

### Why does my simple program using `EVT_CHAR` not work?

In wxGTK, the frames never get focus and so can never receive `CHAR` nor `KEY`
events so an `EVT_CHAR` handler for a frame will be never called. To receive
these events, you should create a `wxPanel` inside the frame and register the
key event handlers for the panel, not the frame.

<a name="debugging"></a>

### What can I do about GTK debug messages?

Unfortunately programs using GTK often output scarily looking messages on the
standard error stream, which is connected to the controlling terminal by
default. Please be aware that most of these messages, even those using
"CRITICAL" severity, are not actually harmful and can be just ignored.

If these messages are annoying for the users of your application (although
most users probably won't see them, as they wouldn't be running the program
from the terminal), you can use `wxApp::GTKSuppressDiagnostics()` function to
disable them.

If you'd like to make sure these messages don't indicate some problem, you
need to debug your program to see where exactly are they coming from. The
simplest way to do it is to run the program under a debugger, such as gdb, and
put a breakpoint on the function used for logging these message (`g_log` in
GTK 2, `g_log_writer_standard_streams` in GTK 3) and then look at the stack to
determine which wxGTK function results in them -- and possibly report an issue
in wxGTK if the message actually indicates a problem.
