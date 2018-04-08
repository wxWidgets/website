---
title: New MSVS project files
date: '2014-08-06T01:28:00.002Z'
author: Vadim Zeitlin
tags:
- change
- msvs
modified_time: '2014-08-06T01:29:18.775Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-4009354463320623413
blogger_orig_url: http://wxwidgets.blogspot.com/2014/08/if-you-try-to-build-latest-wxwidgets.html
---

If you try to build the latest wxWidgets sources from [Subversion] or [Git], you
may be surprised to discover that the various `wx_vcN_*.vcxproj` project files
don't exist any more. The solution files `wx_vcN.sln` do still exist (for N from
7 to 12), so if you just use them to build wxWidgets, almost nothing changes for
you, but if you use the projects themselves, you will need to use the new ones,
without `vcN_` part in their name.

Indeed, we now have only one set of projects for VC10, VC11 and VC12 (MSVS 2010,
2012 and 2013 respectively), which is very nice from maintenance point of view
and will ensure that all modern, i.e. MSBuild-based, VC projects are always
synchronized in the future. It also means that it is a bit easier to customize
the projects if you use more than one version of VC at the same time: just copy
`wx_setup.props` file to `wx_local.props` (this is recommended instead of
modifying the former directly as it's under version control and so would appear
modified if you do this) and edit this property file. For example, in mine I
have:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="4.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <PropertyGroup Label="UserMacros">
    <wxShortVersionString>31</wxShortVersionString>
    <wxToolkitPrefix>msw</wxToolkitPrefix>
    <wxCompilerPrefix Condition="'$(VisualStudioVersion)' == '10.0'">vc100</wxCompilerPrefix>
    <wxCompilerPrefix Condition="'$(VisualStudioVersion)' == '11.0'">vc110</wxCompilerPrefix>
    <wxCompilerPrefix Condition="'$(VisualStudioVersion)' == '12.0'">vc120</wxCompilerPrefix>
    <wxCfg>
    </wxCfg>
    <wxVendor>custom</wxVendor>
  </PropertyGroup>
  ... the rest of wx_setup.props unmodified ...
</Project>
```

to ensure that different output directories are used for all versions of the
compiler. Of course, the other properties can be modified here as well, e.g. you
could set vendor to the name of your company if you're distributing custom
builds of wxWidgets DLLs.

Other than that, the new projects should work just as well as the old ones, but
please let us know if you find any problems with them. Happy building!

[Subversion]: /develop/code-repository/
[Git]: https://github.com/wxWidgets/wxWidgets
