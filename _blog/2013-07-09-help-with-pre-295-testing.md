---
title: Help with pre-2.9.5 testing
date: '2013-07-09T17:22:00.000Z'
author: Vadim Zeitlin
tags:
- release
- brief
modified_time: '2013-07-09T17:22:35.223Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-8492884575235785887
blogger_orig_url: http://wxwidgets.blogspot.com/2013/07/help-with-pre-295-testing.html
---

We plan to release 2.9.5 next Monday, so any testing right now would be even
more welcome than usual -- as 2.9.5 is supposed to be the last release before
3.0, it would be great to avoid having to do any big changes after it is done
and for this we need to avoid having the kind of bugs requiring such changes in
the release in the first place.

So if you can grab the latest sources from [SVN] or [Git] and test them with
your application, it would be really helpful. Especially if you discover any
news bugs while doing it. And even more so if you don't ;-)

Thanks in advance!

---

P.S. Currently wxX11 and wxMotif [are known] to be broken (and will be fixed
before 2.9.5) so testing these ports is not worth doing, but all the rest of the
ports are supposed to work.

[SVN]: /develop/code-repository/
[Git]: https://github.com/wxWidgets/wxWidgets
[are known]: https://trac.wxwidgets.org/ticket/15305
