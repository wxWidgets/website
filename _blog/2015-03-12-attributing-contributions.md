---
title: Attributing the contributions
date: '2015-03-12T13:00:00.001Z'
author: Vadim Zeitlin
tags:
- developer
modified_time: '2015-03-12T13:00:26.451Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-7863765592179476493
blogger_orig_url: http://wxwidgets.blogspot.com/2015/03/attributing-contributions.html
---

One of the lesser, but still appreciable, benefits of [switching to Git] is that
now we can properly record the author of the commit (e.g. the author of a
patch), in addition to the (less important) person who committed it (e.g. me).
While we tried to do this manually in the [change log] before, this couldn't be
done for all the changes as the change log only mentions the most important ones
and, sometimes, could be forgotten even for those changes for which it should
have been done.

With Git, things are much more straightforward and you just need to provide your
identity with your patch. The simplest way to do it is to use [git format-patch]
command -- after ensuring that your name and email are correctly configured
locally, of course. But you could also just mention them in your Trac ticket or
wx-dev email and we'll use them when committing your changes (note for
committers: you can always set `GIT_AUTHOR_{NAME,EMAIL}` for a particular commit
to set the authorship information by hand).

Looking forward to your patches -- which will be now properly attributed to you
instead of boosting my own commit stats!

[switching to Git]: /news/2015/03/official-switch-to-git/
[change log]: https://github.com/wxWidgets/wxWidgets/blob/master/docs/changes.txt
[git format-patch]: https://git-scm.com/docs/git-format-patch
