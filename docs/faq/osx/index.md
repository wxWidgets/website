---
title: "macOS FAQ"
---

See also [top-level FAQ page](/docs/faq/).

### List of questions in this category

*   [Which Mac platforms are supported?](#macplat)
*   [What compilers are supported?](#compilers)
*   [What steps are required to build wxMac under macOS?](#buildx)
*   [What can I do if I get conflicts between different installed versions of wxWidgets?](#conflicts)
*   [What are the smart preprocessing errors with the Apple Developer Tools?](#smarterrors)
*   [How does wxMac support the standard Apple About menu item and Help menu?](#aboutmenu)
*   [How do I add an icon to my application?](#findericon)
*   [Why can't I set focus to my wxMac application?](#nofocus)

<a name="macplat"></a>

### Which Mac platforms are supported?

wxWidgets can be used to develop and deliver applications on macOS  (previously known
as Mac OS X or just "OS X"). There's 3 unique ports of wxWidgets designed for macOS:
wxMac, wxOSX/Carbon, and wxOSX/Cocoa. Please see the
[overview page](/about/) for a description of each.

<a name="compilers"></a>

### What compilers are supported?

The free Developer Tools from Apple are all you need to build wxMac or wxOSX.

There are 3rd party IDEs (including many built specifically for use with
wxWidgets) available for macOS as well, however, they all require using the GCC
compiler distributed by Apple with Developer Tools.

<a name="buildx"></a>

### What steps are required to build wxMac under macOS?

First download and install the free Xcode IDE from Apple at
[http://developer.apple.com](http://developer.apple.com)

Next download and unpack wxWidgets. Then follow the instructions in
docs/osx/install.txt for compiling the libraries from a Terminal window.  (In
wxWidgets 2.8.x, this file is called docs/mac/install.txt.)

Try some of the samples and demos to see how well wxWidgets works on your Mac.
Finally start your own Xcode project using the instructions in the wxWiki under
[Guides & Tutorials](https://wiki.wxwidgets.org/Guides_%26_Tutorials)

<a name="conflicts"></a>

### What can I do if I get conflicts between different installed versions of wxWidgets?

For most development work, this is not an issue.  You can have many versions of
wxWidgets on your computer at the same time without conflict.  You will only
encounter this problem if you try to install wxWidgets into /usr/local/bin.

Some versions of macOS install an older version of wxMac than the one you
may be using for development. This can cause conflicts, such as link errors
when building your applications. In this case, always ensure you are using the
full path to `wx-config` in your project settings.

<a name="smarterrors"></a>

### What are the smart preprocessing errors with the Apple Developer Tools?

Smart preprocessing is activated with the '-cpp-precomp' option and allows much
faster preprocessing of the source files by loading precompiled Carbon header
files. This option speeds up the compilation of wxMac by a factor of 2 at
least. When compiling wxMac  using the Apple Developer Tools, the following
error is displayed for certain files:

    cpp-precomp: warning: errors during smart preprocessing, retrying in basic mode

This error is due to the smart precompiler which does not fully understand C++
syntax and reverts to basic preprocessing when a smart preprocessing error
occurs. This error can sometimes be corrected or avoided by modifying the
source code. However, leaving these errors is not a problem since the
preprocessor automatically switches to basic preprocessing if necessary.

<a name="aboutmenu"></a>

### How does wxMac support the standard Apple About menu item and Help menu?

Because wxWidgets does not have a specific API for the _About_ menu item or the
_Help_ menu, the Mac OS port uses some static variables to help the engine make
the right decisions:

* It assumes that the _About_ menu item is part of a _Help_ menu.
* The title of the _Help_ menu is stored in 'wxApp::s_macHelpMenuTitleName',
  it defaults to "&amp;Help", but you can change it in your constructor to your
  specific menu title.
* The item Id of the _About_ menu is stored in 'wxApp::s_macAboutMenuItemID',
  it defaults to 'wxID_ABOUT', but can be changed as well to suit your needs.
* The other items of the wxWidgets help menu are appended to the macOS _Help_
  menu and the translation of Ids is handled transparently for your
  application.

<a name="findericon"></a>

### How do I add an icon to my application?

If you have macOS, you have the icns editor somewhere in the Utilities
folder. Create an icon using this tool and DeRez it, so that you have a .r file
with a 'icns' resource with id (-16455). Include this .r file in your project
and in the CodeWarrior Settings add a check mark under Linker:Output
Flags/Finder Flags/Has Custom Icon.

<a name="nofocus"></a>

### Why can't I set focus to my wxMac application?

This happens when you don't build your application as a bundle. You _must_
create a bundle for macOS applications. Please look at the samples makefiles
which build bundles under macOS and read [this wiki topic][bundle] for more
details.

[bundle]: https://wiki.wxwidgets.org/WxMac_Issues#Building_a_MacOSX_application_bundle
