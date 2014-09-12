---
title: "History"
---

wxWidgets was started in 1992 at the
[Artificial Intelligence Applications Institute][1], University of Edinburgh,
by Julian Smart. Julian was designing a kind of meta-CASE tool called Hardy
which needed to run on Windows as well as X-based Unix workstations. The
existing commercial cross-platform tools were deemed too expensive for an in-
house experimental project, so the only alternative was to build one. wxWidgets
(w for Windows, x for X) started off with support for XView and MFC 1.0, and
AIAI allowed it to be released to the Internet. As it became clear that XView
was doomed, a Motif port was written. Borland C++ users began to request a
version that was not dependent on MFC, so the Windows port was rewritten to use
the native Windows API.

[1]: http://www.aiai.ed.ac.uk/

Over time, a small but enthusiastic community of wxWidgets users was
established and a mailing list set up. Contributions and fixes were sent in,
the largest contributions being the Mac and Xt ports. wxWidgets gradually
picked up more and more users from all over the world: commercial, government,
and - most gratifying of all - company users who found that wxWidgets offered a
better product, and better support, than the commercial products they had
looked at or used.

During 1995, Markus Holzem released his port of wxWidgets to Xt, the X toolkit.
This meant that software could be written that would work on X systems without
the need for installing Motif, which is a commercial product.

In 1996 wxWidgets stagnated a little. Julian left AIAI to do freelance
consultancy, and there were few new releases. The seemingly unstoppable advance
of Java was throwing some doubt on the future of C++ libraries. After many
contributions, the wxWidgets code was looking rather tired and in need of a
serious rethink. At the start of 1997 it was make or break time - call it a day
and move on to other things, or commit to re-engineering wxWidgets with an API
that was flexible enough for current and future user interface trends, with
more 'widgets', and better use of C++. After an exchange between Julian Smart
and Markus Holzem (the author of the Xt port), it was decided that it was
worthwhile. Julian would do the Windows port, Markus the combined Motif/Xt
port, with both contributing to the generic parts. wxWidgets 2 API ideas and
code started to take shape.

During 1997 an effort to produce a standard Linux desktop environment was
underway - GNOME. Its widget set was GTK+, built on top of X11 and it looked as
though GTK+-based apps were to become the standard in the Linux universe. Its
one major problem - GTK+ was C-based, and only a thin (and unportable) C++
wrapper existed for it. In August 1997, Wolfram Gloger made a suggestion that
wxWidgets 2 should be ported to GTK+ - Robert Roebling had initial
reservations, but in general supported the idea. He became the prime mover for
wxGTK and alphas were made available at the beginning of 1998. In May 1998 the
Windows and GTK+ ports were merged and put into a CVS repository made available
to all contributors to wxWidgets. By now Vadim Zeitlin had become a very active
wxWidgets developer, and he remains probably the most energetic of us all.

Markus Holzem had to drop out of the wxWidgets 2 effort in early 1998, but
Julian Smart started a new wxMotif port. The idea of an Xt port was dropped,
since there remained two possibilities for free Unix programming with
wxWidgets: wxGTK, and wxMotif with the Motif clone Lesstif.

Towards the end of 1997, Julian Smart started distributing a CD-ROM of
wxWidgets.

In September 1998, Stefan Csomor started a new version of the wxMac 2 port
based in part on Greg Whitehead's initial work.

wxWidgets 2.1.11 saw the bundling of Vaclav Slavik's impressive wxHTML classes,
with subsequent enhancements including print/preview ability, and a helpview
application and help controller class for cross-platform HTML help. wxHTML
gives applications easy access to enviable formatted text viewing and reporting
capabilities.

Mid-2000 saw the launch of wxDesigner, Robert Roebling's commercial dialog
editor and RAD tool, which has proved very popular. 2000 also saw the start of
wxUniversal, wxWidgets' own set of widgets for use on platforms that have no
widget set of their own. wxUniversal was coded mainly by Vadim Zeitlin and
funded by SciTech Software, Inc, who also funded Vaclav Slavik to write a port
to their MGL porting layer.

In July 2000, Julian Smart joined Red Hat's Cambridge operation, U.K., and left
in February 2002 to pursue [his own products][2] when Red Hat decided to
jettison the eCos deeply embedded operating system.

[2]: http://www.anthemion.co.uk/

From late 2001 to mid-2002, Julian Smart and Robert Roebling added the wxX11
port using the wxUniversal widgets - requiring only Linux and X11, it's
suitable for any Linux environment and can be used in fairly low-spec systems.
In October 2002 Robert Roebling succeeded in cross-compiling wxX11 for the
Familiar Linux distribution running on the iPAQ. Robert also got wxGTK working
with GTK+ 2 with Unicode support, opening up wxWidgets to further markets.

In July 2003 wxWidgets started running on Windows CE, and Robert Roebling
demonstrated wxGTK applications running on the GPE embedded Linux platform.

The OS/2 port by David Webster and Stefan Neis has been improving slowly but
steadily over the last few years.

Take a look at the [news archive][3] for further history.

[3]: /news/archive/