---
title: 'An unexpectedly expected release: 3.1.0 is available'
date: '2016-02-29T19:42:00.002Z'
author: Vadim Zeitlin
tags:
- release
- announcement
- roadmap
modified_time: '2016-02-29T19:42:55.256Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-124065253178526223
blogger_orig_url: http://wxwidgets.blogspot.com/2016/02/an-unexpectedly-expected-release-310-is.html
---

Surprisingly, at least to me, we managed to make [3.1.0 release] exactly [as
planned], i.e. today, without any delays. The price for this is that there are a
couple of known problems in this release (see the errata on the release page),
but we decided that it was not worth delaying the release for them.

This is not the most exciting release in wxWidgets project history, but it's
still very much worth upgrading to as there has been a huge number of bug fixes
in it, especially in wxGTK3 and wxOSX ports. Of course, as usual, there are a
few new features as well, see the [web site] for a brief list and the [change
log] for a fuller one and I'll try to find some time to write in more details
about one of them, [wxNativeWindow] here in the near future.

The next goal is to release 3.0.3 to make at least some of the bug fixes, if not
the new features, from 3.1.0 available to people using the system packages under
Linux or just too cautious to start using the "development" releases (even
although in my opinion this is not really justified as, on average, 3.1 branch
has fewer, not more, bugs than 3.0.x one). As for 3.1.1, this will depend on how
quickly the changes accumulate in the master, we'll see how it goes. In the
meanwhile, we hope that you'll enjoy the new release!

[3.1.0 release]: https://github.com/wxWidgets/wxWidgets/releases/tag/v3.1.0
[as planned]: /blog/2016/01/310-is-coming/
[web site]: /news/2016/02/wxwidgets-3.1.0-released/
[change log]: https://raw.githubusercontent.com/wxWidgets/wxWidgets/v3.1.0/docs/changes.txt
[wxNativeWindow]: https://docs.wxwidgets.org/3.1.0/classwx_native_window.html
