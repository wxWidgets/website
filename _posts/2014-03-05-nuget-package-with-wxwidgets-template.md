---
title: "NuGet Package with wxWidgets Template"
date: 2014-03-05
comments: true
---

Andrew Smart has created a [NuGet][1] package containing a template allowing
to easily configure and build wxWidgets applications in Microsoft Visual
Studio. See the [detailed instructions][2] on the wiki and give it a try if
you use MSVS 2010 or later!

Notice that the template works with the [official binaries][3] if you use the
matching options, i.e. DLL with the correct version-dependent compiler prefix,
but if you prefer to use another configuration, for example a static library
build of wxWidgets, you can easily build it using the solution files for MSVS
2011 and 2013 which are now also provided (and will be included in the
upcoming 3.0.1 release) thanks to the contribution from Artur Wieczorek.

[1]: http://www.nuget.org/
[2]: https://wiki.wxwidgets.org/Microsoft_Visual_C++_NuGet
[3]: http://sourceforge.net/projects/wxwindows/files/3.0.0/binaries/
