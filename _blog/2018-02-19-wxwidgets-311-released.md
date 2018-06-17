---
title: wxWidgets 3.1.1 released
date: '2018-02-19T22:53:00.002Z'
author: Vadim Zeitlin
comments: true
tags:
- release
- brief
modified_time: '2018-02-19T22:53:29.421Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-5234267906893270746
blogger_orig_url: http://wxwidgets.blogspot.com/2018/02/wxwidgets-311-released.html
---

After fixing a few more bugs since the [release candidate], we've just released
the final version of wxWidgets 3.1.1. I won't repeat the [announcement email] or
the release announcement on the [web site], but would just like to say a few
words about the focus of this release and the future plans.

First of all, even though there are quite a few new features in 3.1.1, most of
the changes in this release are bug fixes and improvements. wxWidgets is still
by no way bugs free, but a lot of long-standing problems were fixes, especially
in GTK+ 3 and macOS ports, as well as wxDataViewCtrl bugs (although, again, not
all of them, by a long shot). This is, of course, hardly as exciting as shiny
new features, but is arguably at least as useful. It's also in line with our
goal to release the new stable 3.2.0 relatively soon.

We do hope to have at least one important new feature in the next release:
support for per-monitor DPI, with all that this entails, i.e. taking care of as
much as possible in the library itself and letting the application handle the
rest. My -- probably, as usual, too ambitious -- personal plan is to implement
this soon and release 3.1.2 in June, and then 3.2.0 in the autumn. Of course,
release planning is mostly made to be broken, at least in our case, but one of
the changes in this release is that it's now much simpler to make new releases
and the process is much more streamlined, so maybe this plan is not as
unrealistic as it might seem.

In the meanwhile, I'd still like to repeat one thing from the release
announcement: please consider updating to 3.1.1 a.s.a.p. There are almost no
incompatible changes in this release since 3.1.0 and only a few compared to 3.0,
so it shouldn't take much time (or, sometimes, any time at all) to upgrade and
you do get all the bug fixes mentioned above, which are very worth the upgrade,
even if you don't plan to use any new features immediately.

[release candidate]: /blog/2018/02/release-candidate-for-wxwidgets-311/
[announcement email]: https://groups.google.com/d/msg/wx-announce/qKmf_umCAzU/kCKbbRcdAwAJ
[web site]: /news/2018/02/wxwidgets-3.1.1-released/
