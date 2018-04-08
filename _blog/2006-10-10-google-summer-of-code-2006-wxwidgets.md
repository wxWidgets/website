---
title: 'Google Summer of Code 2006: wxWidgets projects summary'
date: '2006-10-10T20:16:00.000Z'
author: Julian Smart
modified_time: '2006-10-11T05:46:00.546Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-116051337486255802
blogger_orig_url: http://wxwidgets.blogspot.com/2006/10/google-summer-of-code-2006-wxwidgets.html
---

Google Summer of Code 2006 is over, and it's time to take stock of what's been
achieved. We had nearly 20 proposals, and in the end three projects went ahead.
All of the three have contributed useful code, and needless to say we're in awe
of Google's programme that gave so much and asked for so little in return. Open
source in general, and wxWidgets in particular, just took another big leap this
forward this summer. Thank you Google! And of course a big thank you to the
three students, and to others who submitted applications - perhaps they will be
working on GSoC 2007. Meanwhile, there's still the [page of project suggestions]
for people looking for contribution ideas.

[page of project suggestions]: /gsoc/projects/

Here then are summaries of the projects.

#### wxWidgets Package Manager

This project promises to make it easy for people to use the many available
third-party wxWidgets components, which often have unique installation methods
that take time to understand. What started off as one application has become a
suite of three: wxPackageManager, wxPackager and wxp.

wxPackageManager is a GUI application that lets you browse local and remote
package repositories, view a summary and details of the packages, and then
download, compile, install, and uninstall them.

wxPackager is another GUI application that helps you create and edit a package
description file, and upload the compressed package archive to a remote
repository.

wxp is a command-line utility that allows you to perform all tasks exposed by
the wxPackageManager and wxPackager GUI and also create and maintain
repositories of packages.

Francesco Montorsi has already worked on valuable wxWidgets enhancements, but
has excelled himself in this project, bringing a high standard of coding and
attention to detail. It needed a fairly broad range of skills including
knowledge of GUI design and implementation, network programming, multithreading,
and XML. The project will make a significant difference to the ease of use of
wxWidgets components when the package format is taken up by component authors.
It’s doubtful if the package manager would have been built without the support
of Google.

Links:

* [Source Code](https://svn.wxwidgets.org/svn/wx/sandbox/trunk/)
* [Latest Release](http://ftp.wxwidgets.org/pub/utils/wxwpm/)

The Package Manager on Windows XP:

<img src="wxpackagemanager.jpg" class="img-fluid" alt="Package Manager on Windows XP">

#### Network class improvements

Angel Vidal’s project involved a range of fixes and enhancements to the
wxWidgets network classes. These include unifying socket code for each plaform
and rationalising common code; applying patches and updating the SourceForge
trackers; adding proxy support for Connect() calls; improving UDP socket
support; and testing on Linux 32/64, MSW and Mac OS X.

These improvements haven’t yet been incorporated into the main development
branch, but we hope that after a little more work the result will be far better
and more easily maintainable network code than in wxWidgets at present.

Angel's code is available in the `SOC2006_SOCKET` CVS branch.

#### Right To Left language support

As befits a framework developed by a group of people from many different
countries, wxWidgets has long had facilities to help with internationalization
and localization issues, but until now it had no support for RTL (right to left)
scripts such as Arabic or Hebrew as we didn't have either the resources or
knowledge of these languages necessary to implement it. Diaa Mahmoud Sami
Abdel-Ghani started on the project to change this and to add full RTL support,
including mirroring of the GUI elements, to the library. The project started
well enough with the discussions of the API changes needed for this and,
relatively soon thereafter, Diaa wrote the code to allow wxWidgets applications
to show up correctly in Arabic locale under Microsoft Windows. Unfortunately,
after the mid-term point almost no more work had been done until the very last
few days of the program, and so the initial goals hadn't been fully achieved
which led the mentor to give a negative final evaluation. Nevertheless, the
project was far from being a complete failure as all code written by Diaa was
integrated into the main wxWidgets sources and several people, notably Tim Kosse
and Robert Roebling, were motivated enough by this to fix the remaining bugs and
add RTL support for the GTK+ port.

So, while this project wasn't an unmitigated success from the student's point of
view, it definitely helped wxWidgets as it has gained RTL support - probably
imperfect but incomparably better than no RTL support at all. It wouldn't have
happened without GSoC.

The RTL support is in CVS HEAD (2.7).
