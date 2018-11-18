---
title: "Using wxWidgets with MSVS"
date: 2018-11-18
tags:
- msvs
- build
comments: true
---

If you are using a less than 10 year old version of Microsoft Visual Studio
(i.e. 2010 or later), configuring your project to work with wxWidgets will
become even simpler in the upcoming 3.1.2 release. Instead of configuring the
library include and library paths and preprocessor definitions, all you have
to do to use wxWidgets from a project now is to add wxWidgets [property
sheet][1] to it using the "View|Property Manager" menu item in the IDE or by
just editing your project file directly and adding a line such as

	<Import Project="3rdparty\wx\wxwidgets.props">

to it after any existing similar "Import" lines. This particular example
assumes that you use wxWidgets as a submodule in your main Git repository
under `3rdparty/wx` path, but any path can be specified, including a full path
to a directory outside of the repository or `$(wxwin)` environment variable.

[1]: https://github.com/wxWidgets/wxWidgets/blob/4099e75edb86948a46963511401dc3025e883183/wxwidgets.props

You still need to either build wxWidgets yourself (which is as simple as
opening and building `build/msw/wx_vcN.sln` file matching your compiler
version) or download the binaries, but there is nothing else to do now and, in
particular, no fiddling with the various project options is required.
