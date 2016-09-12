---
title: "Writing Online Help"
---

Different platforms have different methods of displaying online help. Here's a
table of most of the interesting formats:

<table class="table table-hover">
  <thead>
    <tr>
      <th>Format</th>
      <th>Platform</th>
      <th>Viewer</th>
      <th>Help Controller</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <!-- WinHelp -->
    <tr>
      <td>WinHelp (.hlp, .cnt)</td>
      <td>Windows XP</td>
      <td>winhelp.exe, winhlp32.exe</td>
      <td>wxWinHelpController</td>
      <td>
        The old Windows Help viewer based on RTF files is still supported by
        Windows and many applications, but now considered deprecated.
      </td>
    </tr>
    <!-- HTML Help -->
    <tr>
      <td>MS HTML Help (.chm)</td>
      <td>Windows XP and newer</td>
      <td>hh.exe</td>
      <td>wxCHMHelpController</td>
      <td>
        The new MS help format is an improvement over WinHelp, with its
        contents hierarchy always present. This is now the favoured help format
        for wxWidgets on Windows.
      </td>
    </tr>
    <!-- Plain HTML -->
    <tr>
      <td>HTML (.htm, .html)</td>
      <td>Any</td>
      <td>Any browser</td>
      <td>wxExtHelpController</td>
      <td>
        On Unix you can use plain HTML and an external browser.
      </td>
    </tr>
    <!-- wxHTML Viewer (advanced) -->
    <tr>
      <td>wxHTML (.htb)</td>
      <td>Windows, GTK</td>
      <td>helpview[.exe], internal wxWin viewer</td>
      <td>wxHtmlHelpController</td>
      <td>
        Thanks to Vaclav Slavik, we now have a good wxWidgets-based,
        multiplatform capability for viewing online help from within an
        application or alternatively using an external viewer application.
      </td>
    </tr>
  </tbody>
</table>


## Deciding on a Help Format

With so many different help formats available, you may be wondering which is
best for you. The following clarifies some of the pros and cons, and you can
also look at the 'help' sample in the wxWidgets distribution which demonstrates
a variety of formats and help controllers.

### Unix

If you want all the power of HTML for your help files, then you may consider
using plain HTML files on Unix (invoked by wxExtHelpController). However, the
formatting of most help files doesn't need to be very complex and so a better
approach would be to use the internal wxHTML help system and
wxHtmlHelpController.

### Windows

MS HTML Help is now the favoured format on Windows (invoked by
wxCHMHelpController). However, both WinHelp and CHM files are supported.

<!--
Under Windows, WinHelp takes .hlp files. WinHelp files are produced from
specially-formatted RTF (Rich Text Format) files using the Windows 95
Help Workshop or the older DOS help compiler, hc.exe. WinHelp has now been
replaced by HTML Help, which uses .chm files generated from HTML and some
other files using the HTML Help Workshop.
-->


## Accessing Help from an Application

Sometimes one can rely on wxHelpController being aliased to the standard help
system for that platform (wxHTML help for Unix, WinHelp for Windows). To use a
different help controller than the standard one, you have to include the file
for that controller and create an object using the relevant class name (e.g.
'wxCHMHelpController') rather than simply using 'wxHelpController'. Please see
the wxHelpController documentation in the wxWidgets manual for details.

To create and initialize a help controller:

    helpController = new wxCHMHelpController;
    helpController->Initialize("myfile");

To access the contents, use code like the following:

    helpController->LoadFile("myapp");
    helpController->DisplayContents();

To access a particular section, use code like the following:

    helpController->LoadFile("myapp");
    helpController->DisplaySection("Diagram cards");

DisplaySection has different meanings for different help controllers, but for
most controllers it does a keyword search. It can also be used to display a
particular HTML file within the help file, for example in MS HTML Help.

To clean up as the application is ending:

    helpController->Quit();
    delete helpController;


## Tools for Writing Help

There is a variety of freeware, shareware and commercial tools for this
purpose, some of which generate both HTML and WinHelp RTF.

An example of a commercial tool is Julian Smart's
[HelpBlocks](http://www.helpblocks.com), available for Windows and Linux and
making it easy to write and preview HTML pages that can be converted to
wxWidgets HTML Help and MS HTML Help formats.

You can use Tex2RTF which is bundled with the wxWidgets distribution or
available separately. With Tex2RTF, you write your manual in an extended form
of Latex, and produce as output a variety of formats. You can also run your
.tex files through a real Latex processor, but this is optional. With Tex2RTF
you can produce manuals in the following formats:

* Linear RTF, for importing into a wide range of word processors.
* Windows Help hypertext RTF, for compilation with HC (Help Compiler).
* HTML (Hypertext Markup Language), as used on the World Wide Web. Tex2RTF also
  outputs the project, contents and keyword files required by the HTML Help
  Workshop and by wxHTML Help.

Once in MS Word RTF format, other formats can be generated, such as PostScript
(by printing to a PostScript file) and Adobe Acrobat Portable Document Format
(PDF). PDF generation requires MS Word and the full, commercial version of
[Acrobat](http://www.adobe.com). Alternatively, you can try using GhostScript
to generate PDF, and in the [MikTex](http://www.miktex.org) package there is a
latex2pdf converter.

A short list of tools:

* [HelpBlocks](http://www.helpblocks.com) by Julian Smart of Anthemion Software
* Doc2Help
* RoboHelp


## Online Help Versus Printed Manuals

Electronic manuals and printed manuals tend to have different characteristics.
Printed manuals are intended to be read mostly in sequence, whereas online help
usually consists of little chunks of information to be called up from the
application when necessary, in addition to longer descriptive sections.

This would seem to rule out the production of printed and online help from the
same source, but in fact a reasonable compromise can be reached, where sections
make sense when read sequentially as well as out of context. Lots of hyperlinks
can help to orient the user. Also, Tex2RTF allows conditional processing of
source for different output formats.

Here's a suggested list of chapters for a typical manual/help file.

* Welcome
* Installation
* Read Me (change log, release notes)
* Getting Started
* Using Menu Commands
* Using Toolbar Commands
* The Status Bar
* Working with Window X
* Working with Window Y
* Working with ...
* Dialogs (description of a dialog per section)
* How To (a tip per section)
* Glossary
* Index (non-hypertext version only)


## Tips

Prepare any bitmaps in both GIF and BMP form (with the same root name) so HTML
and WinHelp generation will work properly. An EPS image file is also required
for use with real Latex and dvips.
