---
title: A year in wx
date: '2014-12-31T02:22:00.000Z'
author: Vadim Zeitlin
tags:
- progress
modified_time: '2014-12-31T02:22:27.893Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-5286073772097155093
blogger_orig_url: http://wxwidgets.blogspot.com/2014/12/a-year-in-wx.html
---

2014 hasn't been the most exciting year for wxWidgets -- among the recent years
this honour certainly belongs to 2013, which finally saw the release of the
long, long awaited 3.0 release. However quite a few things still happened during
it.

First of all, thanks to Bryan Petty, we now have a new shiny web site which not
only looks much better, but is also simpler to update and to [contribute to].
And it was duly updated more often, in particular to announce two new releases
(3.0.1 and 3.0.2) last year, which is two more than we typically make per year.

Second, after a two year hiatus, wxWidgets was part of Google Summer of Code
again this year and we had 6 students working on several interesting projects,
admittedly with various degrees of success. But work done by Alexandru Pana on
Direct2D support, by Chaobin Zhang on new Windows Vista/7 taskbar features, Sun
Boxiang on wxUniv/X11 and Mariano Reingart on wxQt port was already merged into
the trunk and we hope to merge Haojian Wu's work on Chromium backend for
wxWebView before the next release.

Third, in 2014 we welcomed a new member to wxTeam: Artur Wieczorek has started
by submitting many important improvements to wxMSW and then also volunteered to
become the maintainer of [wxPropertyGrid] control and has since improved it as
well. Thank you Artur!

Other than that, life continued as normal in 2014 with 1678 commits in master
and 375 bugs fixed (compared to 1471 and 332 in the previous year).

What are we looking towards in 2015? Definitely a 3.1.0 release and almost
certainly a 3.0.3 one. With luck, 3.1.0 will include a new and reworked AUI
version. On infrastructure level, after upgrading the web site, the next
long-awaited change is officially migrating to git from svn. Finally, we hope
for as many contributions from the community in the next year as in the last
one, thanks to all (too numerous to list here, sorry!) who submitted patches or
sent us bug reports and please continue to do it!

Thank you and happy New Year!

[contribute to]: https://github.com/wxWidgets/website/pulls
[wxPropertyGrid]: https://docs.wxwidgets.org/trunk/overview_propgrid.html
