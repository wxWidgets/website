---
title: Continuous Integration with Travis
date: '2013-07-26T14:48:00.001Z'
author: Vadim Zeitlin
tags:
- brief
modified_time: '2013-07-26T14:48:56.482Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-5184063680566485850
blogger_orig_url: http://wxwidgets.blogspot.com/2013/07/continuous-integration-with-travis.html
---

[Travis] is a continuous integration system which works nicely with [GitHub], so
while we've been using [Buildbot] since a long time and will continue to do it,
we thought it could be nice to also try Travis and so now we have a minimal
configuration file for it and it builds wxGTK after each commit.

You can check the latest Travis build status by just looking at this blog post:

[![Build Status](https://travis-ci.org/wxWidgets/wxWidgets.svg?branch=master)](https://travis-ci.org/wxWidgets/wxWidgets)

and you can click the button for more details. For the other ports and also to
check if the tests pass (as Travis currently only checks the compilation and
doesn't run the tests yet), see our [Buildbot status] page.

[Travis]: https://travis-ci.org/wxWidgets/wxWidgets
[GitHub]: https://github.com/wxWidgets
[Buildbot]: https://buildbot.net/
[Buildbot status]: http://buildbot.tt-solutions.com/wx/
