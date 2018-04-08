---
title: Help with testing 3.0.1
date: '2014-06-02T13:29:00.000Z'
author: Vadim Zeitlin
tags:
- brief
- roadmap
modified_time: '2014-06-02T13:29:05.354Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-194475011882336551
blogger_orig_url: http://wxwidgets.blogspot.com/2014/06/help-with-testing-301.html
---

We plan to release 3.0.1 on June 15 (this year, before the jokes start coming
in). There have already been a lot of changes since 3.0.0, with many important
bug fixes in all three main ports, including tons of corrections to everything
bitmap/alpha-related in wxMSW by Artur Wieczorek who managed to eradicate
swathes of long-standing bugs, so we'd like to make these improvements available
as soon as possible. However we'd also like to ensure that we haven't broken
anything since 3.0.0. And while we are relatively confident that the ABI hasn't
changed, the behaviour of the code is another matter and some new bug(s) could
have been introduced in almost half a thousand commits since 3.0.0.

Which is why it would be really great if as many people as possible could test
the 3.0 branch sources before 3.0.1 is done, in two weeks time. Regressions are
usually found quite quickly after each release, which is great, but it would be
even better if we could find at least some of them _before_ releasing it. So if
you are using 3.0.0, please grab the latest 3.0 branch sources using either
[Subversion] or [Git] and let us know if you see any new problems.

Thanks in advance!

[Subversion]: https://svn.wxwidgets.org/svn/wx/wxWidgets/branches/WX_3_0_BRANCH
[Git]: https://github.com/wxWidgets/wxWidgets/tree/WX_3_0_BRANCH
