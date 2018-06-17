---
title: 2.9.2 and plans for the future
date: '2011-07-08T07:51:00.003Z'
author: Vadim Zeitlin
tags:
- release
- roadmap
modified_time: '2013-04-30T11:05:43.840Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-2025057660120891549
blogger_orig_url: http://wxwidgets.blogspot.com/2011/07/292-and-plans-for-future.html
---

As you've probably noticed at [www.wxwidgets.org], the new 2.9.2 release was
finally officially released this Tuesday. I won't detail its new features in
details here as most important of them were already covered before but just
wanted to say a few words about our future plans.

The next release -- incredibly enough -- will be 2.9.3 and we plan to do it at
the end of September, after merging the work of GSoC 2011 students in the trunk.
So ideally this release will have GTK+ 3 support, a new wxiOS port,
wxWebViewCtrl for embedding a "true" HTML rendering engine (such as Trident
under MSW or Webkit elsewhere) and a new UI animation library. Being realistic
(although I'd certainly like to be proven wrong!), at least some of these things
will probably be delayed but the release itself should still happen.

Depending on the things included in or omitted from 2.9.3 we may need to do
2.9.4 with all the big features we want in 3.0 next, although I'd like to avoid
it and, again, ideally, 2.9.3 would already have all of them. If 2.9.3 does have
everything and if no huge problems are discovered in it, we'd like to release
3.0 before the end of the year (meaning not later than mi-December). But then
again, [you have to be realistic about these things], so 3.0 will probably
happen in the beginning of the next year rather than in this one. Still,
planning it for 2011 at least gives us a target to miss.

As usual, let me end any roadmap discussion with a plea for help: we need your
help. Most obviously with testing the huge amounts of the new code that will
hopefully be in 2.9.3. But also with wxOS port as Stefan is almost alone working
on it and with GTK+ 3 stuff as few people know it (yet). Please help us make 3.0
available sooner and, most importantly, better -- thanks in advance!

[www.wxwidgets.org]: https://www.wxwidgets.org/
[you have to be realistic about these things]: http://www.goodreads.com/quotes/tag/logen-ninefingers
