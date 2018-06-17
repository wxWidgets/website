---
title: Better display of wxTypes in MSVS debugger
date: '2009-12-22T15:56:00.003Z'
author: Vadim Zeitlin
tags:
- msvs
modified_time: '2009-12-22T16:14:50.136Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-2758090950627711543
blogger_orig_url: http://wxwidgets.blogspot.com/2009/12/better-display-of-wxtypes-in-msvs.html
---

This is a quick note about displaying a few wx types in MSVS (2003 and later)
debugger as I just discovered, to some surprise, that some people using wx don't
know about it. Let me show what I mean with an example: I have the following in
my `%VSINSTALLDIR%\Common7\Packages\Debugger\autoexp.dat`:

    [AutoExpand]
    ; ... all the existing stuff ...
    ; wxWidgets types
    wxPoint=<x>,<y>
    wxSize=<x>*<y>
    wxRect=<x>,<y> <width>*<height>
    wxDateTime=<m_time.m_ll>ms
    wxLongLong=<m_ll>
    wxString=<m_impl>

This allows to see the contents of the variables of the types above in a much
better way than the default display (e.g. by default tooltips for wxRects only
show x, y and width values but the height is truncated -- hardly convenient). I
wonder if others have more types to add to this list?

Of course, there are limits to this approach. For example, I'd really prefer to
see an [ISO 8601] representation of wxDateTime instead of the number of
milliseconds since the Unix Epoch which is currently shown. But this probably
requires writing a custom visualizer which is a bit more difficult (would anyone
have done this already by chance?).

Still, debugging is much nicer when previewing wxStrings is as simple as
hovering a mouse over them so if you don't have the above in your `autoexp.dat`
you should really add it there. Just remember that wxString expansion is for
2.9, if you are using 2.8 you need to use `<m_pchData,s>` instead.

[ISO 8601]: http://en.wikipedia.org/wiki/ISO_8601
