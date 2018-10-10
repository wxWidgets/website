---
title: "Overview"
---

wxWidgets was started in 1992 by Julian Smart at the University of Edinburgh.
Initially started as a project for creating applications that were portable
across Unix and Windows, it has grown to support macOS, GTK+, and many other
toolkits and platforms (see the [history page][12] for more details). The
number of developers contributing to the project is now in the hundreds and the
toolkit has a strong userbase that includes everyone from open source
developers to corporations. So what is special about wxWidgets compared with
other cross-platform GUI toolkits?

[12]: /about/history/

wxWidgets gives you a single, easy-to-use API for writing GUI applications on
multiple platforms that still utilize the native platform's controls and
utilities. Link with the appropriate library for your platform and compiler,
and your application will adopt the look and feel appropriate to that platform.
On top of great GUI functionality, wxWidgets gives you: online help, network
programming, streams, clipboard and drag and drop, multithreading, image
loading and saving in a variety of popular formats, HTML viewing and printing,
and much more.

Although wxWidgets is written in C++, you can use it with a variety of
languages including Python, Perl, and C#. If using wxWidgets with C++, you will
link your code to a different version of the library on each platform. Since
the wxWidgets libraries are built and compiled in C++ rather than a language
like Java, they are high-performance and nearly as fast as using the native
toolkits themselves.


## Supported Platforms

wxWidgets currently supports the following platforms:

* **wxGTK**: The recommended port for Linux and other Unix variants, using GTK+
  version 2.6 or higher.
* **wxMSW**: The port for 32-bit and 64-bit Windows variants including Windows
  XP, Vista, 7, 8 and 10.
* **wxOSX/Cocoa**: For delivering 32-bit and 64-bit Cocoa-based applications on
  macOS 10.7 and above.
* **wxQt**: wxQt is a port of wxWidgets using Qt libraries. It requires Qt 5 or later.
* **wxX11**: A port for Linux and Unix variants targetting X11 displays using a
  generic widget set.
* **wxMotif**: A port for Linux and Unix variants using OpenMotif or Lesstif
  widget sets.

*Additionally* the following legacy platforms are supported by the current stable 3.0 release:

* **wxMSW**: Legacy 32-bit Windows versions like Windows 95, Windows 98, Windows 2000
* **wxMac**: For delivering Carbon applications on Mac OS X 10.2 through 10.6.
* **wxOSX/Carbon**: For delivering 32-bit Carbon-based applications on Mac OS X
  10.5 and above.


## Features and Functionality

wxWidgets has hundreds of classes covering many areas of application
development, which we cannot adequately summarize in this short document. GUI
components range from a simple button component to an HTML list box; from a
basic message box to a print preview window. Other areas include:

* Window Layout Using Sizers
* Device Contexts (along with pens, brushes and fonts)
* Comprehensive Event Handling System
* HTML Help Viewer
* Sound and Video Playback
* Unicode and Internationalization Support
* Document/View Architecture
* Printing Archiecture
* Sockets
* Multithreading
* File and Directory Manipulation
* Online and Context-Sensitive Help
* HTML Rendering
* Basic Containers
* Image Loading, Saving, Drawing and Manipulation
* Date-Time Library and Timers
* Error Handling
* Clipboard and Drag-and-Drop

You may find it helpful to browse the [reference manual][1] to get a feel for
supported functionality.

[1]: https://docs.wxwidgets.org/trunk/page_class_cat.html


## The wxWidgets License

The wxWidgets library is distributed under the [wxWindows License][2], which is
based on the L-GPL but with an exception clause. The exception clause allows
you to link your application either dynamically or statically to wxWidgets
without the requirement to distribute the source for your your own application.
In other words, you can use wxWidgets for either free or commercial projects,
at no cost. The license encourages you to give back enhancements you make to
the wxWidgets library itself.

[2]: /about/licence/


## Who uses wxWidgets?

wxWidgets is used by a huge range of organisations and individuals all over the
world. It’s equally at home being the basis for a consumer product selling
hundreds of thousands of copies as it is in university or open source projects.
wxWidgets has been used to help companies create leading-edge chips, to help
drill for oil, to control pilotless aircraft, and to test components of space
telescopes. Many companies are dependent on wxWidgets and the cross-platform
advantage it gives them. Some of the better-known organisations who have used
wxWidgets include AOL, AMD, Lockheed Martin, Xerox, NASA, and the Open Source
Applications Foundation (OSAF). wxWidgets applications that you may be familiar
with include AVG AntiVirus, Forte Agent, Audacity, Filezilla, iPodder, and
Tortoise CVS. It’s impossible to know how many wxWidgets developers there are
but there is a very active wxWidgets community with over 1,800 subscribers to
the bulletin board alone.


## What are the benefits of using wxWidgets?

The benefits include the following:

* Cost savings from writing code once that will run on Windows, Unix, macOS,
  and other platforms.
* Customer satisfaction from delivering stable, fast, attractive applications
  with a native look and feel.
* Increased productivity from the wide variety of classes that wxWidgets
  provides, both for creating great GUIs and for general application
  development.
* Increased market share due to support for platforms you may not have
  previously considered, and the ability to internationalize your applications.
* Support from a large, active wxWidgets community that answers questions
  helpfully and provides prompt bug-fixing.
* Access to the source, for enhancement and trouble-shooting.


## How do I learn wxWidgets using C++?

When you download wxWidgets, you get a 3,000 page reference manual and around
80 samples and demos. This provides a mass of information to help you get
started, but the [Cross-Platform GUI Programming With wxWidgets][3] book by
Julian Smart and Kevin Hock with Stefan Csomor is also a very valuable
resource. The dialog editor on the accompanying CD will help you get to grips
with sizers, a flexible layout mechanism.

[3]: /docs/book/


## How do I learn wxWidgets using Python?

The wxPython wiki provides an excellent guide for [getting started][4], but if
you still need additional help, take a look at the [wxPython in Action][5] book
or the newer [wxPython 2.8 Application Development Cookbook][7]. Check out the
[wxPython website][6] to download the wxPython libraries, along with the docs
and demos package. The docs and demos package contains an application showing
the use of nearly every class available in wxWidgets, and the demos are
dynamically editable so that you can make changes and see the effects in real-
time. This is an excellent way to learn how the toolkit works.

[4]: http://wiki.wxpython.org/How%20to%20Learn%20wxPython
[5]: http://www.manning.com/rappin/
[6]: http://www.wxpython.org/
[7]: http://www.amazon.com/exec/obidos/ASIN/1849511780/thmovsthpy-20/


## Additional Support

You can find free community support from fellow developers on the [forums][8]
and [mailing lists][9]. The community-edited [wxWiki][11] contains many guides
that help supplement the official documentation, and [commercial support][10]
is also available from several companies.

[8]: https://forums.wxwidgets.org/
[9]: /support/mailing-lists/
[10]: /support/commercial
[11]: https://wiki.wxwidgets.org/


<p class="my-4 text-center">
  <a href="/downloads/" class="btn btn-lg btn-primary"><i class="fas fa-download fa-fw"></i> Download now &raquo;</a>
</p>
