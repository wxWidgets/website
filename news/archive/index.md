---
title: News Archive
---

<table class="table table-striped my-4">
  <caption>Full historical listing of all news posts, sorted by newest first.</caption>
  <thead><tr><th>Post</th><th>Date</th></tr></thead>
  <tbody>
    {% for post in site.posts %}
    <tr>
      <td><a href="{{post.url}}">{{ post.title | escape }}</a></td>
      <td><time datetime="{{ post.date | datetime | date_to_xmlschema }}" pubdate{% if updated %} data-updated="true"{% endif %}>{{ post.date | date: "%B %d, %Y" }}</time></td>
    </tr>
    {% endfor %}
  </tbody>
</table>

## 2006 and Older

#### May 4th, 2006

*   We are pleased to announce that wxWidgets is a mentoring organization for
    the Google Summer of Code initiative. If you are a student with some free
    time this summer, then you can be one of many who will be selected to work
    for 4500 USD on open source projects. Find out more about Google Summer of
    Code, and sign up, at the [Google Summer of Code website][1]. The list of
    project suggestions can be found on the wxWiki. Happy coding!

[1]: https://developers.google.com/open-source/soc/

#### April 2nd, 2006

*   A new version of [lbDMF][3] (0.7.0) with a great wxWidgets based GUI
    sample application has been released. The new version includes improvements
    such as GUI state storage to file, a new property editor and layout
    capabilities and more. The sample can be used to rapidly develop database
    applications without writing a line of code.

[3]: http://sourceforge.net/projects/lbdmf

#### March 25th, 2006

*   wxWidgets 2.6.3 has been released: please see the download page for
    details. This is a bug fix release. Notable improvements include Mac
    universal binary creation with the command-line tools, Windows Mobile 5.0
    support, context menu and enhanced file selector support on Windows CE, AMD
    64-bit compilation on Windows, better VC++ 2005 support, and more
    efficient paint handling on wxGTK.

#### March 19th, 2006

*   wxWidgets 2.6.3 Release Candidate 2 is available.

#### March 18th, 2006

*   The source for [Xara LX][4], the vector graphics application being ported
    to wxWidgets, has been released under the GPL. You can download a pre-built
    downloadable version of Xara LX 0.3, and there are now many working drawing
    tools and features - you can draw shapes, color them and use the fill,
    transparency, blend, shape editing and other tools.

[4]: http://www.xaralx.org

#### March 10th, 2006

*   The [wxWidgets book][5] is now available as a PDF from [here][6], at the
    Bruce Perens' Open Source Series page.

[5]: /docs/book/
[6]: http://ptgmedia.pearsoncmg.com/images/0131473816/downloads/0131473816_book.pdf

#### March 5th, 2006

*   [BitWise IM][8] Version 1.7.1 is available for Windows, Mac OS X and
    Linux. Showcasing wxWidgets' support for Intel-based Macs, the Mac OS X
    version is now a Universal Binary! BitWise is an encrypted cross-platform
    instant messenger featuring text messaging, whiteboards, file sharing,
    voice chat, encryption and more. Personal and Professional versions are
    available, the latter providing a completely private IM network with
    administrative rights.

[8]: http://www.bitwiseim.com

#### February 13th, 2006

*   wxWidgets 2.6.3 Release Candidate 1 is available. Please do test it and let
    us know if you find any serious problems.

#### January 19th, 2006

*   wxWidgets is having a Bug Day, a concerted effort to fix bugs and clean up
    the trackers, to reduce the tally of 945 open bugs. It will take place
    Saturday 21st January between 9:00AM EST (14:00 GMT) and 9:00PM EST (02:00
    GMT), but also beyond that if there is interest. For more information, see
    [this announcement][9]. Please join in if you can!

[9]: http://article.gmane.org/gmane.comp.lib.wxwidgets.devel/69321

#### January 10th, 2006

*   Kirix Corporation is pleased to announce the availability of wxAUI 0.9.1
    for download. wxAUI is an Advanced User Interface library that aims to
    implement "cutting-edge" interface usability and design features so
    developers can quickly and easily create beautiful and usable application
    interfaces. The centerpiece of the library is a docking manager which
    allows windows to be floated/docked onto a frame. Please [click here][10]
    for more information.

[10]: http://www.kirix.com/en/community/opensource/wxaui/about_wxaui.html

#### January 5th, 2006

*   Koan Software is happy to announce the new license release of
    wxIndustrialControls. wxIndustrialControls, also known as KWIC cross
    platform library, provides a set of graphical widgets for showing digital
    and analogic values. Starting from January 2006 the source code becomes
    freely available under KWIC license (a modified LGPL). Contributors and
    developers are welcome, as are patches and improvements.

#### December 23rd, 2005

*   wxVisualSetup for Microsoft Visual Studio 2005 has been released.
    wxVisualSetup by Lit Window Productions integrates the wxWidgets library
    into Microsofts Visual Studio IDE. The project wizard creates ANSI or
    Unicode projects with static or DLL wxWidgets libraries. A script for the
    "Inno Setup" package creates installer for your program. wxVisualSetup also
    makes the wxWidgets documentation available in the Visual Studio Online
    Help. wxVisualStudio 2005 works with all versions of Microsoft Visual
    Studio 2005, including the Express versions. It is also available for
    Visual Studio 2002 and 2003.

#### December 20th, 2005

*   [Chandler 0.6][12] has been released. Chandler is a personal information
    management from the Open Source Applications Foundation, using wxPython.

[12]: http://downloads.osafoundation.org/chandler/releases/0.6/

#### November 21st, 2005

*   Dataton have won the Projection Product of the Year award at the
    entertainment technology trade show, ETS-LDI, with a wxWidgets-based
    application. [Dataton WATCHOUT][13] is multi-display production and
    presentation system, managing graphics, images, video, audio on a wide
    variety of display devices.

[13]: http://www.dataton.com/watchout

#### November 20th, 2005

*   Robert Roebling has updated his information on the port of wxWidgets to
    GPE, a PDA environment based on GTK+.

#### October 13th, 2005

*   Xara has announced that they are making their [Xara Xtreme][14] vector and
    bitmap package open source. They are using wxWidgets to maintain Windows,
    Linux and MacOS X versions.

[14]: http://www.xaraxtreme.org/

#### October 4th, 2005

*   wxWidgets is helping the Dutch submit their tax forms digitally on Windows,
    Mac and Linux.

#### September 21st, 2005

*   wxWidgets 2.6.2 has been released: please see the download page for
    details. This is a bug fix release.

#### September 13th, 2005

*   Michael Reithinger is pleased to announce [faces 2.1.0][15], a python based
    project management tool. faces offers great simplicity and flexibility in
    building and displaying project plans; it uses wxPython and currently runs
    under Linux and Windows.

[15]: http://faces.homeip.net/

#### August 20, 2005

*   Arnout Engelen has been experimenting with XML and the wxWidgets
    documentation for some time, and has two interesting contributions: the
    latest wxWidgets manual from CVS enhanced with user-contributed notes
    and quick-navigation toolbar, plus the wxWidgets manual as manpages.

#### August 19, 2005

*   [H-ITT][18] (Hyper Interactive Teaching Technology) today released the
    latest version of their software with numerous new features for their
    classroom response system. The software is used for collecting and grading
    responses from students who respond to questions from their instructor
    using hand held remote units or clickers. The software runs on Windows, Mac
    OS X, and Linux operating systems thanks to wxWidgets.

[18]: http://www.h-itt.com

#### August 13th, 2005

*   Kevin Hock, co-author of the [wxWidgets book][20], has returned from a
    successful LinuxWorld 2005 session in San Francisco where he gave a
    well-received presentation, mixed with current and potential wxWidgets
    users, and discussed publicity with the book's publisher, Pearson. You can
    view Kevin's presentation [here][21] (PowerPoint format).

[20]: /docs/book/
[21]: http://www.kevinhock.com/LinuxWorld_wxWidgets.ppt

#### July 27th, 2005

*   The wxWidgets book is published today! For information about content and
    availability, please see the [book page][22].

[22]: /docs/book/

#### June 7th, 2005

*   Following Apple's [announcement][23] that they will switch to Intel
    processors, Stefan Csomor has demonstrated the wxWidgets minimal sample
    running natively on an Intel-based Mac OS X system. The few necessary
    changes will be in wxWidgets 2.6.2 and existing wxMac developers should
    find the transition to Intel fairly painless.

[23]: http://www.apple.com/pr/library/2005/jun/06intel.html

#### June 3rd, 2005

*   wxWidgets 2.6.1 has been released: please see the download page for
    details. Bug fixes include refresh improvements on Windows, better wxX11
    menu support, wxMac fixes for Tiger, and the ability to compile wxMSW with
    Winelib under Unix.

#### May 20th, 2005

*   Persony announces VShow, a cost-effective Web conferencing product that
    uses standard Web servers to host online meetings. By leveraging millions
    of current Web servers, VShow makes Web conferencing affordable to
    small businesses and individuals.

#### May 9th, 2005

*   German Carrera has revised wxPlot, based on PLPlot. It supports a variety
    of plotting styles suitable for scientific applications.

#### May 6th, 2005

*   [BitWise IM][25] Version 1.0.4 is available for Windows, Mac OS X and
    Linux, thanks to wxWidgets. BitWise IM is an encrypted cross-platform
    instant messenger featuring text messaging, whiteboards, file sharing,
    voice chat, encryption and more. Personal and Professional versions are
    available, the latter providing a completely private IM network with
    administrative rights.

[25]: http://www.bitwiseim.com/

#### May 3rd, 2005

*   We're in Tiger! wxWidgets 2.5.3 Unicode (as well as wxPython and wxPerl
    2.5.3 Unicode) are being bundled as part of the Mac OS X Tiger operating
    system, currently Amazon's number one seller in the software category.

#### April 23rd, 2005

*   wxVisualSetup 2.6 has been released. wxVisualSetup by Lit Window
    Productions integrates the wxWidgets library into Microsofts Visual Studio
    .NET IDE. It includes a wizard that creates wxWidgets projects with a few
    mouse clicks, makes the wxWidgets documentation available in the Visual
    Studio Online Help and enables Intellisense for most wxWidgets functions.

#### April 21st, 2005

*   wxWidgets 2.6.0 has been released: please see the download page for
    details. This is the first official, stable release for a long time but we
    think the wait has been worth it.

#### April 7th, 2005

*   Kynosoft is glad to announce the first release of Magic Splitter, a quick
    and easy to use file splitting and checksum utility. It features checksum
    verification for split files, a standalone rebuild utility, and MD5, SHA1
    and CRC-32 checksums calculation and verification.

#### April 4th, 2005

*   wxWidgets 2.5.5 has been released: please see the download page. The next
    release will be 2.6.0 (stable).

#### March 30th, 2005

*   Zephyr Automated Test Runner 1.0.0 has been released. Zephyr is an
    automated functional and regression testing tool. It will test any
    application, written in any language, that has a GUI interface. Zephyr
    takes the place of a user pointing, clicking and entering text. For more
    information and downloads for Windows and Linux.

#### March 22nd, 2005

*   WinCustomizer - Admin Edition for Windows XP, by Thunderbird Software, has
    been released. WinCustomizer - Admin Edition lets you set per-user settings
    for all the users on your system.

#### March 10th, 2005

*   Autosort 0.9.2 has been released. Autosort is a program that automatically
    sorts outgoing and incoming mail, making all filters or rules in your email
    client redundant.

#### February 24, 2005

*   wxWidgets 2.5.4 has been released: please the download page. This is a
    development snapshot; we intend to make one more snapshot release (2.5.5)
    and then make the stable 2.6 release in March. Please let us have feedback
    and patches based on your experience on 2.5.4!

#### February 15, 2005

*   Kirix today released [Kirix Strata][26], a dynamic desktop database
    application for both Windows and Linux that leverages the open-source
    wxWidgets library. With an intuitive graphical interface and almost
    unlimited data capacity, Strata provides a more effective way to work with
    data. In addition to the release today, Kirix Strata also wins the
    LinuxWorld Product Excellence Award for Best Desktop/Productivity/Business
    Application.

[26]: http://www.kirix.com/

#### January 5th, 2005

*   Koan is proud to announce the release preview of wxIndustrialControls.
    wxIndustrialControls provides a set of graphical widgets for showing and
    manage digital and analogue values. A wxMSW executable demo is available at
    the Koan website.

#### December 22nd, 2004

*   H-ITT's Acquisition software, used for collecting responses from students
    in the classroom now runs on Linux, Mac OS X, and Windows operating
    systems. With this release H-ITT becomes the first vendor of its kind to
    release software for Windows, Mac OS X, and Linux operating systems. All
    three of these operating systems are in use in the higher education
    environment. This allows H-ITT's clients to work with the operating system
    of their choice.

#### October 18th, 2004

*   The first public release of Hajo Kirchoff's Lit Window Library (for C++) is
    now available at from LitWindow itself. The goal of The Lit Window Library
    is to speed up C++ GUI coding by a factor of 10. It greatly reduces the
    amount of work needed to code user interface requirements. This is not just
    another "better widgets" library. The library introduces two new, different
    concepts to UI coding: a data abstraction layer (reflections) and
    rule-based programming. See the [Lit Window home page][29] for more
    information.

[29]: http://www.litwindow.com/Library/index.html

#### October 15th, 2004

*   William Osborne has won our contest to win a free Tungsten T5 or
    equivalent, as the first person to show the minimal sample running under
    Palm OS 6. We didn't think it would happen this fast!

#### October 11th, 2004

*   The latest development snapshot has been released, wxWidgets 2.5.3.

#### September 28th, 2004

*   The wxWidgets team is offering a free Tungsten T5 or equivalent to the
    first person to show the minimal sample running under Palm OS 6.

#### September 20th, 2004

*   [H-ITT][32] releases Mac OS X and Linux versions of their software.

    H-ITT's software is now cross platform thanks to open source wxWidgets C++
    framework.

    Hyper-Interactive Teaching Technology (H-ITT), a leader in hand-held remote
    technology for the classroom, today announced the release of a Mac OS X and
    Linux version of their Analyzer Software.

    H-ITT's Analyzer, used for grading student responses and communicating with
    students via e-mail now runs on Linux, Mac OS X, and Windows operating
    systems. This release is yet another one of H-ITT's major advances in
    audience response technology. With this release H-ITT becomes the first
    vendor to release software for Windows, Mac, and Linux operating systems.
    All three of these operating systems are in use in the higher education
    environment. This allows H-ITT's clients to work with the operating system
    of their choice.

    H-ITT accomplished this feat by utilizing the popular open-source wxWidgets
    C++ framework. This framework allows H-ITT's software development team to
    target multiple platforms from one code base. In addition, utilizing
    wxWidgets allows the applications to have the native look-and-feel of their
    respective operating systems.

    "We started using wxWidgets 4 years ago knowing that if we ever need to do
    a Mac or Linux version we could. The port went very smoothly. In fact, I
    wouldn't even call it porting because almost no changes were made to the
    source code. We can now target all three platforms with ease and we like
    the native look and feel each application has on its operating system,"
    says Larry, head of H-ITT's application development team.

    H-ITT users can now collect data in class from the students on Windows
    machine utilizing the Acquisition software and grade and analyze it on the
    operating system of their choice. This is due in part to the cross platform
    XML file format. H-ITT plans to release a Mac OS X and Linux version of the
    Acquisition program in time for the start of the spring 2005 semester.

[32]: http://www.h-itt.com/

#### September 8th, 2004

*   [Gubed PHP Debugger][33] v0.1.1 by Linus McCabe has been released for Linux
    and Windows. Gubed PHP Debugger is a cross platform program to visually
    debug PHP scripts. It supports stepping though code, halting at errors and
    breakpoints, watching variables, as well as other features you'd expect
    from a debugger.

[33]: http://gubed.sourceforge.net/

#### August 30th, 2004

*   Jorgen Bodde has set up a wxWidgets Message Board, for those who prefer an
    alternative method of discussion.

#### July 26th, 2004

*   Koan Software has enhanced its real-time Linux distribution for industrial
    applications with support for wxWidgets.

#### June 1st, 2004

*   elementec announces Backup & Compress 1.1, a backup tool written using
    wxWidgets. It has a built-in scheduler and supports full and incremental
    backups. Backup archives are stored in ZIP files locally or on a file
    server in the local network.

#### May 31st, 2004

*   wxWidgets 2.5.2 has been released. This is a development snapshot. Amongst
    other improvements, sizers are working properly again in 2.5.2, and wxMac
    has come on leaps and bounds.

#### May 7th, 2004

*   The wxWidgets Edinburgh Fund is available to make small donations to help
    contributors.

#### April 18th, 2004

*   Following on from the recent wxMac reorganisation and improvements, we are
    launching a wxMac fundraising campaign. Please help us support your wxMac
    applications by making a donation, however small.
*   Check out the wxWidgets Bounties page where you can advertise for
    developers to implement a particular feature in exchange for a fee, or
    implement a feature yourself to claim the bounty.

#### April 14th, 2004

*   Shinkuro, Inc. is using wxWidgets for [software][36] to share files across
    enterprise boundaries securely. Shinkuro also includes secure instant
    messaging and secure screen sharing, to give you a complete collaboration
    environment.

[36]: http://www.shinkuro.com/products.php

#### March 10th, 2004

*   We are pleased to announce that [Software in the Public Interest][37] (SPI,
    Inc.) has voted to add wxWidgets to its list of supported projects. This
    means that we can now accept tax-exempt donations within the United States.

[37]: http://www.spi-inc.org

#### March 9th, 2004

*   [BitWise Version 1.0][39] has been released and is available for Windows,
    Linux and Mac OS X. BitWise is an encrypted, full-featured, ad-free instant
    messaging network built with wxWidgets. The Professional version, with
    additional security and privacy, is also available.

[39]: http://www.bitwiseim.com

#### February 23rd, 2004

*   wxWidgets 2.5.1 has been released. This is a development snapshot.

#### February 20th, 2004

*   wxWindows is changing its name to wxWidgets. Please read [this page][40]
    for more details.

[40]: /about/name-change/

#### February 10th, 2004

*   wxWidgets has been used in the latest release of the popular windows usenet
    browser, [Forte Agent][41].

[41]: http://www.forteinc.com/agent/index.php

#### January 13th, 2004

*   Arnout Engelen has spotted wxWidgets being used for home banking software
    provided by the Belgian ING bank, [here][42].

[42]: https://download.ing.be/software/homebank/offline/downloadHBOffline.asp?lang=EN

#### January 10th, 2004

*   Zeemo 1.2.9 has been released. You can use Zeemo for dating (with pictures,
    profiles and descriptions), instant messaging (with smileys and
    thumbnails), selling and buying, finding a job/employees, sharing files,
    and reading news.

#### January 6th, 2004

*   wxH2Help released. wxH2Help, by Thomas Kux, integrates wxWidgets 2.4
    documentation into Visual Studio .NET 2002 and Visual Studio .NET 2003.

#### October 30th, 2003

*   wxWidgets now has its own organisation to protect its intellectual property
    and help promote the project - please see the wxWindows Software Foundation
    pages, and also a letter to our users and contributors.

#### September 22nd, 2003

*   wxWidgets 2.4.2 has been released. This is a bug fix release.

#### August 20th, 2003

*   AOL has released AOL Communicator, built with a modified version of
    wxWidgets.

#### July 28th, 2003

*   wxWidgets gets a good write-up in
    [GUI Toolkits for The X Window System][44] by Leslie Polzer, on Freshmeat.

[44]: http://freecode.com/articles/gui-toolkits-for-the-x-window-system

#### July 25th, 2003

*   Robert Roebling has been playing with GPE on his iPAQ and has
    cross-compiled the wxWidgets Life! demo for it. GPE uses GTK+ 2 and comes
    with a number of PDA applications, making it a near-complete organiser
    environment.

#### July 18th, 2003

*   The July 2003 issue of Linux Journal has [an article][46] by Taran
    Rampersad describing the benefits and uses of wxWidgets.

[46]: http://www.linuxjournal.com/article.php?sid=6821

#### July 16th, 2003

*   The latest alpha of [KDevelop][47] sports a wxWidgets project option.

[47]: http://kdevelop.org/

#### July 12th, 2003

*   Progress has been made at last on the port to Windows CE. See the
    [wxEmbedded page][48] for details and a screenshot of the minimal sample
    running under emulation. If you want to see your wxWidgets apps running on
    a phone near you, get the latest code from wxWidgets CVS (head) and help
    with the porting effort!

[48]: /docs/embedded.htm#wxwince

#### July 7th, 2003

*   Announcing [Musik 0.1.2][49], an open source (under the BSD license)
    multimedia library; specifically supporting mp3 and ogg. It functions as a
    player, tagger, and organizer. It is crafted in the "iTunes" fashon, and
    written completely in wxWidgets with the help of a few additional
    libraries, such as id3lib, vorbis, fmod, and sqlite. Currently supported
    platforms are Win32 and Linux with GTK2.

[49]: http://musikcube.com/

#### July 5th, 2003

*   [wx.NET 0.2][50] has been released. wx.NET is a C# binding for .NET/Mono.

[50]: http://wxnet.sourceforge.net/

#### June 20th, 2003

*   wxPython 2.4.1.2 has been released. Please see the [wxPython site][51] for
    more details.

[51]: http://wxpython.org

#### June 13th, 2003

*   wxWidgets 2.4.1 has been released. This contains bug fixes to 2.4.0,
    including improved behaviour on Windows XP.

#### June 10th, 2003

*   Ryan Wilcox will be speaking at [MacHack][52]: "Cross-Platform Programming
    in wxWidgets (or: how to take it all with you, without Java)".

[52]: http://www.machack.com/content.php

#### June 2nd, 2003

*   wxOTL 0.3 has been released. wxOTL is a wxWidgets database programming
    library. Changes in this release include a new database grid (wxOTLGrid -
    wxOTLGridVariantTable), separation of database interface classes and DB GUI
    controls, several DB interface classes (for ODBC and others), updated
    makefiles for MinGW and Borland C++, and screenshots of all the samples.

#### June 1st, 2003

*   wxCRP 1.2 has been released - it's a cool template wizard, very
    customisable, and now with an HTTP update facility.
*   Linux Journal has published [wxWindows for Cross-Platform Coding][lp111]
    written by Taran Rampersad outlining many good reasons for using wxWindows.

[lp111]: http://www.linuxjournal.com/article/6778

#### May 21st, 2003

*   wxWidgets has been positively reviewed in the popular UK computer magazine
    PC Plus for July 2003 (edition 204). "It's a well-respected C++ toolkit...
    a huge number of sample applications are provided." wxWidgets gains a PC
    Plus Value Award.

#### May 19th, 2003

*   wx4J 0.1.0 has been released. wx4j is a Java binding for wxWidgets
    providing a Java GUI toolkit using native widgets. Since wx4j uses native
    widgets, it utilizes the native look and feel. This is the initial public
    release of wx4j.

#### May 13th, 2003

*   Announcing [DialogBlocks][53] 1.0, a capable dialog editor for wxWidgets
    running on Windows and Linux. DialogBlocks is available from
    [Anthemion Software Ltd][54].

[53]: http://www.anthemion.co.uk/dialogblocks/
[54]: http://www.anthemion.co.uk/

#### May 12th, 2003

*   Will McGugan has released Chess Commander. Play chess against the computer
    as well as against email and network opponents with one powerful and
    graphically rich interface.

#### May 11th, 2003

*   The [TerraIM][55] is a lightweight TOC AOL Instant Messenger - it fits on
    a floppy, requires no install and yet implements the most commonly used
    instant messaging features.

[55]: http://terraim.sourceforge.net

#### May 8th, 2003

*   The [WEDELMUSIC][56] project at the University of Florence is using
    wxWidgets. WEDELMUSIC is an innovative idea to allow the distribution and
    sharing of interactive music via Internet totally respecting the publisher
    rights and protecting them from copyright violation. The WEDELMUSIC editor
    is based on XML and includes: full music notation editor, automatic
    formatting and printing music notation, MIDI player, audio player, video
    player, synchronisation facilities, image score viewer, slide show, and
    many other features. The MUSIC Editor is now in Open Source.

[56]: http://www.wedelmusic.org/

#### April 22nd, 2003

*   [wx.NET][57], a C# binding for .NET/Mono is making good progress: see the
    chart of completed classes.
*   Shiv Shankar Ramakrishnan, a Microsoft employee with wxWidgets development
    experience, has very generously donated a massive amount of Microsoft
    software to core wxWidgets developers, which has allowed us to test
    wxWidgets against VC++ 7 and generally get us up-to-date with operating
    systems and other packages. Many many thanks to Shiv!

[57]: http://wxnet.sourceforge.net/

#### February 19th, 2003

*   A first cut at Active Accessibility support has been committed to CVS head.

#### February 10th, 2003

*   Julian Smart gave a presentation and a tutorial at [FOSDEM 2003][58].

[58]: https://archive.fosdem.org/2003/

#### January 30th, 2003

*   Announcing Zeemo 1.03, a new all-in-one wxWidgets application that combines
    advertising, searching for advertisements, instant messaging and file
    sharing.

#### January 6th, 2003

*   wxWidgets 2.4.0 has been released at last! This is the first official
    stable-API release since 2.2.9 and contains many enhancements in just about
    every area. 2.4.0 is the first synchronized official release to include
    wxMac, wxX11 and wxOS/2.

#### December 12th, 2002

*   [H-ITT][59] is proud to release their latest version of their audience
    polling software widely used in numerous universities across the globe.

[59]: http://www.h-itt.com

#### November 26th, 2002

*   wxWidgets 2.3.4 has been released. This should be *positively* the last
    development release before the stable 2.4.0 release.

#### November 18th, 2002

*   Robin Dunn, maintainer of wxPython, has been awarded a 6-month contract by
    the [Open Source Applications Foundation][60] to work on wxWidgets and
    wxPython improvements.

[60]: http://www.osafoundation.org/

#### November 12th, 2002

*   The Intuitive Works have released Intuitive MX, a sophisticated multitrack
    audio recording system at a low cost that's likely to make waves in the
    sound software industry.

#### November 10th, 2002

*   The [Open Source Initiative][61] has approved the wxWidgets licence,
    allowing us to put the OSI mark on our web site.

[61]: http://opensource.org

#### October 22nd, 2002

*   Mitch Kapor, founder of Lotus Corp. and author of Lotus 1-2-3, chooses
    wxWidgets and wxPython! Other big names involved with the
    [Open Source Applications Foundation][62] include Andy Hertzfeld (author of
    the original Mac toolbox) and Tim O'Reilly. See also articles in
    [The Register][63], and [Slashdot][64].

[62]: http://www.osafoundation.org/
[63]: http://www.theregister.co.uk/2002/10/21/kapors_open_source_spreadsheet/
[64]: http://slashdot.org/story/02/10/20/1827210/mitch-kapors-outlook-killer

#### October 11th, 2002

*   CVS has moved to SunSITE Denmark.

#### October 4th, 2002

*   There have been a lot of favourable responses to Robert Roebling's
    wxEmbedded announcement on [Slashdot][65].

[65]: http://hardware.slashdot.org/story/02/10/04/0244221/wxembedded-beta-released

#### September 22nd, 2002

*   Robert Roebling has cross-compiled wxX11 for the iPAQ. For screenshots,
    downloads and instructions, see the [wxEmbedded][66] page.

[66]: /docs/embedded.htm#gettingstarted

#### September 16th, 2002

*   wxWidgets 2.3.3 has at last been released, from the development branch.
    This should be the last development release before the stable 2.4.0
    release.

#### August 11th, 2002

*   Many thanks to Arnout Engelen for setting up the wxWiki: a set of
    user-editable pages for discussion, tutorials, code snippets and so forth.

#### July 22nd, 2002

*   We have a new ftp site, based at York University in the UK. A big thank you
    to Chris Elliott for hosting this site, and a fond farewell to our old ftp
    site hosted by Remstar/FastPic Systems.

#### June 11th, 2002

*   The National Center for Biotechnology Information released version 4.0 of
    [Cn3D][67], its protein structure and sequence alignment visualization
    tool. Cn3D uses wxWidgets to run on Windows, Macintosh, Solaris, Linux, and
    IRIX.

[67]: http://www.ncbi.nlm.nih.gov/Structure/CN3D/cn3d.shtml

#### April 19th, 2002

*   New article: Porting MFC applications to Linux: A step-by-step guide
    to using wxWidgets, by Markus Neifer, April 2002. A nice primer for MFC
    developers migrating to wxWidgets, on the IBM developerWorks site.

#### March 19th, 2002

*   The web site has been reworked, with a simplified toolbar and stronger
    colours. A search facility is now in place thanks to Google, and the screen
    shots section is prettier and more extensive.
*   A wxWidgets user has pointed out a very interesting article:
    [Case Study: Clusters and Image Processing][69] at LinuxPlanet. This
    describes the port to Linux of a *very* large application, and they chose
    wxWidgets for their GUI. "ImageLinks now uses the Open Source version of
    wxWidgets for all its current GUI development. Doing this ensures that
    everything interfaces cleanly and also makes it easier in the long run to
    add other GUIs along the way because ImageLinks has access to all the
    source code."

[69]: http://www.linuxplanet.com/linuxplanet/reports/4101/1/

#### March 6th, 2002

*   SciTech Software has announced screenshots and demos for wxMGL running
    under DOS.

#### March 1st, 2002

*   SciTech Software has announced their Display Doctor 7.0, a commercial
    application for optimizing graphics. This has an unusual UI, using wxHTML
    and applets to produce a very consumer-oriented interface.

#### February 26th, 2002

*   Good progress is being made on the wxWidgets for X11 port, which uses the
    wxUniversal widgets and requires only the X11 libraries. wxWidgets/X11 will
    be usable in embedded applications, along with Tiny-X or Nano-X
    (MicroWindows).

#### January 14th, 2002

*   There's a CodingStyle interview with several of the wxWidgets developers on
    Steve Frampton's site.

#### January 4th, 2002

*   wxWidgets 2.2.9 is the latest stable release. Various fixes, as summarised
    in changes.txt.

#### December 17th, 2001

*   A big thank-you to VMware for supplying VMware 3.0 licences to wxWidgets
    developers.

#### December 11th, 2001

*   wxWidgets 2.3.2 is the second major release of the development tree. The
    biggest change in the development version is that the Mac version is now
    90% ready for production use and supports MacOS 8.6 or higher as well as
    MacOS X or higher.

    Additionally, a new port has been created - called wxUniversal - which
    draws all widgets itself instead of using the various native GUIs. This is
    aimed at embedded devices or special controls on the existing platforms.

    The OS/2 port is also improving step by step, although it is not yet ready
    for general use. Its basics might be used in connection with the
    wxUniversal code in the near future.

    Last but not least, the two main platforms, Windows and GTK+, as well as
    the generic code, have seen hundreds of improvements and additions.

#### July 2nd, 2001

*   See the wxUniversal page for news of the generic widget project, as well as
    the wxMGL and wxMicroWindows ports that will use it.

#### June 22nd, 2001

*   wxWidgets 2.3.1 is the first complete development snapshot for a long time.
    We have waited until as many bugs as possible were fixed and some stability
    (for a development branch!) was achieved, so that people who really need
    the new features can start using it. Compared with the 2.2.x releases,
    there are various new classes including wxFileName, wxToggleButton,
    wxDbGrid, wxContextHelp, wxHelpProvider, wxSplashScreen. There are also
    improvements to many other classes, plus peripheral class libraries such as
    wxCanvas, wxPlot and wxRC (the new XML-based wxWidgets resource system).
    For other changes, please see the change log.

#### May 22nd, 2001

*   wxWidgets 2.2.7 has further fixes since 2.2.6. You may also like to check
    out the development snapshots in the same section. The main download site
    is now SourceForge.

#### March 12th, 2001

*   wxWidgets 2.2.6 is the latest stable distribution with a small number of
    fixes since 2.2.5.
*   The comp.soft-sys.wxwindows usenet group has now been created!

#### January 31st, 2001

*   wxWidgets 2.2.5 includes more fixes.

#### August 21st, 2000

*   wxWidgets 2.2.1 is the latest official stable release. The most bug-free,
    easiest-to-install release yet...

#### July 28th, 2000

*   Vaclav Slavik has recently written an article about wxWidgets for a Czech ezine.
*   Dr Dobbs Journal also carries a piece on wxWidgets.
*   There is a lot of traffic on the wxStudio mailing list, and Gerd Mueller
    has offered to make the WipeOut IDE open source and merge it with wxStudio.
    There is a new [wxStudio][71] page on SourceForge.

[71]: http://wxstudio.sourceforge.net/

#### July 9th, 2000

*   wxWidgets 2.2.0 is the result of many fixes and enhancements to 2.1, and is
    an official stable release.

#### June 4th, 2000

*   wxWidgets 2.1.16 contains fixes for wxGTK, wxMSW and wxMotif. It is hoped
    that this is the last release before the stable 2.2 version.

#### May 1st, 2000

*   [Sams Teach Yourself C++ for Linux in 21 Days][sams] has a chapter on GUI
    programming with several pages devoted to wxWidgets. This chapter was
    written by Jonathan Parry-McCulloch. The accompanying CD-ROM contains a
    wxWidgets distribution.

[sams]: http://www.amazon.com/exec/obidos/ASIN/0672318954/ref=rm_item

#### March 28th, 2000

*   wxWidgets 2.1.15 contains a few fixes for wxGTK and wxMSW. wxMSW and
    wxMotif users who already have 2.1.14 do not need to rush to download this
    version! The fixes in the patch file (see main download page) contain the
    major differences between 2.1.14 and 2.1.15.

#### March 21st, 2000

*   wxWidgets 2.1.14 is now available for Windows, Motif and GTK. Again, great
    strides have been made since the previous official version (2.1.11), and
    2.2 will be the next official stable version. Many things have been fixed
    and added.
*   Robin Dunn is contributing a wxStyledTextCtrl, a wrapper around the
    [Scintilla][72] styled text edit control. It can be used to provide syntax
    highlighting for various languages, and other applications. A snapshot of
    this work in progress, stc.zip, is provided on the ftp site alongside the
    latest wxWidgets release.
*   Guilhem Lavaux has reworked his MMedia sound and video class library and
    started its documentation; it too is available alongside the latest release
    as mmedia.zip.

[72]: http://www.scintilla.org/

#### January 14th, 2000

*   Mumit Khan of Mingw32 fame has been testing wxWidgets against Mingw32, to
    eliminate some bugs in both products and get wxWidgets compilation as a DLL
    working for Mingw32.
*   Vadim has added his wxDateTime and wxCalendarCtrl classes and samples to
    the CVS archive.
*   TIFF support has been added, and wxImage speeded up.
*   Guillermo Rodriguez Garcia has added a new Game of Life demo.
*   The DDE sample now works in socket mode, at last.
*   Vadim has got clipboard copy and paste working for metafiles, by adding an
    enhanced metafile class.
*   The wxWidgets web site is now hosted on SourceGear's server, with a bug
    tracker and other facilities to follow shortly.

#### November 9th, 1999

wxWidgets 2.1.11 is now available for Windows, Motif and GTK. The final 2.2
public release will have further bug fixes, but 2.1.11 is pretty stable - a big
improvement on 2.0.1 and better than previous snapshots. Here are a few of the
features that make it well worth the upgrade:

*   Numerous bug fixes and consistency improvements.
*   Further samples.
*   Factoring out of some code into base classes, for easier maintenance.
*   Ability to compile library in console (non-GUI) mode.
*   Integration of wxHTML widget and help controller into wxWidgets. wxHTML
    allows HTML viewing and printing (wxGTK and wxMSW, partial support in
    wxMotif).
*   New classes wxChrono, wxDialUpManager, wxFontEnumerator, wxWizard,
    wxStaticLine, etc.
*   wxShowTip for showing 'startup tips' to the user.
*   wxSocket and wxThread classes rewritten.
*   New, consistent drag and drop API (not wxMotif).
*   Better-looking dialogs in wxGTK; native message box used in wxMotif.
*   wxSizers reimplemented and used to specify window layout for some generic
    dialogs.
*   New, more sophisticated wxGrid class (in beta). The old grid class can
    still be used.
*   Text alignment options in wxStaticText.
*   wxImage class extended to read PCX and GIF files.
*   Documentation improvements.
*   Revised configure system for wxGTK and wxMotif; tmake-based system for
    generating wxMSW makefiles.
*   Installer for Windows as alternative to zip archives.

#### August 6th, 1999

Today, a snapshot release of the MSW and the GTK ports has been made. The two
snapshots are synchronized and have been tested for several weeks and should
thus be considered to be quite stable. Among the many new features that have
appeared since version 2.0 was release are:

*   A great number of incompatiblities between the GTK and the MSW port have
    been removed. This holds escecially true for the way, time and order,
    controls send notifications to the user program.
*   Practically all widgets have been updated, removing bugs or adding missing
    features to specific ports (mostly the GTK port).
*   The GTK port now supports GTK version 1.2 as well as 1.0, giving access to
    the many new features, such as e.g. menu accelerators.
*   Many of the non-GUI classes have been reworked and new ones added, the
    stream classes having undergone a complete rewrite.
*   The addition of code to handle Unicode has begun and is in an advanced
    state.
*   The Python bindings (wxPython) have been largely improved and upadted to
    the newest API and features.

#### July 31st, 1999

We are glad to announce the start of the work on the new wxWidgets port -
wxBeOS which will implement wxWidgets 2 API for BeOS. Thanks to Be for donating
licenses to wxWidgets project to make it possible.

If you're interested in helping with this new port, please write to wxWidgets
developers mailing list!

#### May 27th, 1999

*   Beta 1 of wxWidgets 2 for Mac has been released, thanks to Stefan Csomor's
    amazing efforts.
*   Work continues on the development branch of wxWidgets 2 for MSW, GTK and
    Motif. Vadim has been reworking the MSW implementation to solve some
    internal design problems, as well as factoring out base classes to make
    development easier.
*   Work on consistent drag and drop support in GTK and MSW continues.

#### March 1st, 1999

wxWidgets 2 launch day!

*   wxWidgets 2 officially launched, after more than two years' development of
    the API and ports to Windows, GTK and Motif (Mac to follow).

#### November 26th 1998

*   wxWidgets 1.68E contains minor bug fixes and now compiles with MS VC++ 6.0,
    and (hopefully) BC++ 5.0, as well as Cygwin b20.
*   The latest wxWidgets 2.0 alpha shows good progress on the Motif port, with
    a tabbed MDI implementation, a nice wxToolBar class and most major classes
    working. wxWidgets 2.0 for Windows now works with VC++ 6.0, BC++ 5.0 and
    Cygwin b20. There's a problem linking with Mingw32, I don't know why this
    is, perhaps something to do with differences in the way pragmas are
    handled.
*   There is also good progress with Stefan Csomor's wxMac 2.0: watch this
    space.
*   Work is finally underway on a wxWidgets IDE!
*   Aleksandras Gluchovas is working on a docking window implementation and the
    results are pretty impressive so far. The source also includes work on
    persistent storage classes.

#### September 13th 1998

*   The main ftp site is now www.remstar.com/pub/wxwin, since the AIAI site is
    no longer available for uploads.

#### August 23rd 1998

*   wxGTK and wxMSW 2.0 progress continues apace. The API is being unified
    quite successfully, and most of the samples now compile under both ports.
*   We are looking for sponsorship of wxMotif 2.0.

#### April 28th 1998

*   wxWidgets 1.68C has been released. This mainly provides compatibility with
    Gnu-Win32 b19 and Mingw32.
*   wxWidgets 2.0 beta 9 has been released. Again, this provides Gnu-Win32
    b19/Mingw32 compatibility plus a few small bug fixes.

#### March 22nd 1998

*   The mailing list addresses have changed. You may need to re-subscribe if
    you subscribed since February 1998.

#### January 5th 1998

*   wxWidgets 1.68B is available.
*   wxWidgets 2.0 has another port in progress - wxGTK by Robert Roebling.
*   The Windows and Xt/Motif ports to 2.0 are progressing well. A large
    proportion of the documentation has been done. One of the main things to
    resolve is how transformations (such as scaling and translation) will be
    done in 2.0, but we're heading towards agreement.
*   There is a new wxWidgets Developers Site in preparation, for people
    developing ports of wxWidgets. There are newsgroups and a wxwin-developers
    mailing list.
*   40 wxWidgets CD-ROMs have been sold, mostly outside the U.K.
*   Antonia Charlotte Smart was born on November 1st 1997. Naturally, she's as
    cute as her parents.

#### August 13th 1997

*   Added Getting Started page for new users.
*   There's a good review of wxWidgets by Oliver Niedung and Stefan Gunther in
    *iX*, a German computer magazine.

#### July 24th 1997

*   wxWidgets 1.67 released.

#### July 22nd 1997

*   Check out Forty Thieves, a great card game by Chris Breeze of Hitachi
    Europe Limited.

#### July 16th 1997

*   Jobst Schmalenbach has set up Australian FTP and HTTP mirrors.
*   Arthur Tetzlaff-Deas is starting to look afresh at a port of wxWidgets 2.0
    to NeXTStep. This is more relevant now that the NeXT OS will be essential
    to the Apple Mac's future.
*   The next release of wxWidgets for Motif/XView/Windows should be within the
    next two weeks or so. I have abandoned documentation in wxHelp form in
    favour of the much better quality HTML format, which I will be including
    with the distribution from now on.

#### July 7th 1997

*   For news on wxWidgets 2.0 development, please see "What's coming next?",
    developments include DLL and experimental Netscape Plugin support. The
    estimate for a release date has been put back to October 1997 - to be out
    of the way before Smart Jr. arrives in November...
*   Negotiations with a U.S. company about development of wxWidgets into a
    commercial product fell through, since it was not possible to agree about
    the continuation of a version of wxWidgets that maintains the free,
    collaborative spirit that currently exists.

#### May 18th 1997

*   wxWidgets 2.0 development (mostly for the Windows platform) is on track
    thanks to funding for wxWin-related consultancy - thank you to those
    concerned! This work is still on the free version of 2.0, although an
    additional commercial version may be developed sometime in the future.
    Markus Holzem continues to generously donate his spare time for Motif/Xt
    developments, and Greg Whitehead is looking into the Mac version of 2.0.
*   Guilhem Lavaux has contributed a first version of wxSocket, a set of
    classes for network programming based on work by Andrew Davison. Currently
    this works on Motif/Xt and is coded but not yet tested for Windows. The
    wxIPC classes on the UNIX side have been rewritten to take advantage of the
    new classes. wxSocket is a great contribution that will be a part of
    wxWidgets 2.0. Meanwhile, do check it out and help Guilhem debug and
    develop it further.
*   Other noteworthy contributions in recent weeks include a patch for using
    bitmap masks on X for transparency effects - another Lavaux effort! - plus
    thread classes by Wolfram Gloger, updates to wxXt by Markus Holzem, a start
    at OLE control support by Norbert Grotz, an improved Winstall by Stefan
    Hammes, and wxPreferences by Bart Jourquin to simulate .ini files on UNIX.

#### May 8th 1997

*   Hitachi Europe Limited have used wxWidgets both to implement and to
    illustrate their WebReuser tool.
*   Another interesting link in the Applications page is WipeOut, a C++
    integrated development environment for Linux.
*   Fixes to make wxWidgets 1.66F work with VC++ 5.0 are in the
    `ports/msvc50` directory.

#### April 20th 1997

*   wxWidgets is listed in the Scientific Applications on Linux index.
*   The wxWidgets Web pages can be switched to non-frames mode, for those who
    find frames irritating (and who use browsers that don't implement Back
    properly :-)).
*   wxWidgets 2.0 progress is steady.
*   Greg Whitehead is taking a look at what's involved for a Mac port of 2.0,
    possibly using MetroWerks' PowerPlant classes to speed up development.

#### March 13th 1997

*   Check out C-LAB's Lean Integration Platform written in wxWidgets/wxLisp:
    it's a multi-platform workflow tool.
*   wxWin 2.0 progress: I've eliminated the need for the dreaded CTL3D library
    for Windows 95 applications. New MDI classes are working, plus wxStatusBar,
    wxScrolledWindow. Markus is starting work on the Motif port, with wxXt 2.0
    as a second priority.

#### February 25th 1997

*   Yura Bidus has successfully adapted wxWidgets 1.66B to compile as a DLL
    under Borland C++. He will be patching 1.66F and investigating using VC++
    for building the DLL.
*   Early experiments indicate that application files using wxWidgets 2.0 and
    GNU-WIN32 will be at least twice as fast to compile as 1.66, due to
    elimination of base classes and restructuring to avoid including windows.h.

#### January 29th 1997

*   wxWidgets 1.66F has been semi-released for people to test before the
    official release. It works with GNU-WIN32, and contains miscellaneous bug
    fixes.
*   ITA, Inc. have sent a debugged and enhanced Mac port (building on 1.61).
*   Markus Holzem and Julian Smart are designing wxWidgets 2.0, which should
    make wxWidgets into a force to be reckoned with against other free and
    commercial libraries.
*   The mailing lists are up and running again, with new subscription and
    discussion list addresses.
