---
title: 'GSoC 2014 summary: Windows task bar API project'
date: '2014-09-11T12:06:00.000Z'
author: Vadim Zeitlin
tags:
- new
- progress
- gsoc
modified_time: '2014-09-11T12:06:03.244Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-7472484467739727451
blogger_orig_url: http://wxwidgets.blogspot.com/2014/09/gsoc-2014-summary-windows-task-bar-api.html
---

This is the first in a series of posts about wxWidgets [GSoC 2014 projects] and
it is about Chaobin Zhang's work on wrapping Windows taskbar API for the use in
wxWidgets. The project was a success and I'd like to congratulate Chaobin and
thank him and Bryan Petty, who was the mentor on this project, for their work!

The new API additions and things they allow to do are described in more details
in [Chaobin's own post here], please read it for more information, but, in
short, almost all taskbar features are now accessible via wxWidgets API.

Of course, they still remain unportable and Windows-only and while it's better
to provide access to them than not do it at all, the main goal of wxWidgets is
to facilitate writing portable applications and so the next target is to build a
higher level API which would be available elsewhere. We have made a start with
[wxAppProgressIndicator] and `wxGA_PROGRESS` style for wxGauge using it, but
this is still not implemented for any other platform yet. Any contributions
implementing this (simple) class in terms of [NSProgress] under OS X or ideas
about how it could be implemented under Linux would be very welcome.

[GSoC 2014 projects]: /blog/2014/04/accepted-gsoc-2014-projects-announced/
[Chaobin's own post here]: https://github.com/zhchbin/wxWidgets/wiki/SOC2014_TASKBAR
[wxAppProgressIndicator]: https://docs.wxwidgets.org/trunk/classwx_app_progress_indicator.html
[NSProgress]: https://developer.apple.com/library/mac/documentation/Foundation/Reference/NSProgress_Class/Reference/Reference.html
