---
title: Google Summer of Code 2008 and wx
date: '2008-04-29T12:00:00.002Z'
author: Vadim Zeitlin
modified_time: '2008-04-29T12:33:26.678Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-8046285403103950056
blogger_orig_url: http://wxwidgets.blogspot.com/2008/04/google-summer-of-code-2008-and-wx.html
---

Since a couple of years, there is something we really look forward to each
spring. I'm not speaking about blossoming flowers and all this nonsense, of
course, but about the [Google summer of code]. This is a wonderful program which
gives many open source projects, including wx, an opportunity to work on some
projects which wouldn't be started otherwise because they require initial
investment beyond what we can normally afford and attract new contributors to
the project.

[Google summer of code]: https://developers.google.com/open-source/gsoc/2008/

So it's great to be part of GSoC again, even though -- let me perform some
ritualistic whining -- we got only 2 slots this year while we had 3 of them
during the previous ones. I'm not sure why did this happen (probably because
ever more projects take part in the program and even Google's budget is not
unlimited) but it might be related to the relatively few students proposals we
received this year (about a dozen and 5 of them about the same project). Of
course, there were still some worthy proposals which got cut (at least the third
and the fourth one) but I still think that one of the goals for the next year
should be to prepare more interesting projects and try to attract more interest --
and if you have any great ideas, please let us know or just add them to [this
page].

[this page]: /gsoc/projects/

Of course, while wxWidgets itself has 2 slots, there are other wx-related
projects undertaken by the other organizations. [wxPython] has 3 more slots,
[Audacity] uses one of its 5 for writing new draggable sizer classes which could
hopefully be reused by other projects and even [Perl] has wxCPANPLUS project
using wx. So the life is still good.

[wxPython]: https://www.wxpython.org/
[Audacity]: https://www.audacityteam.org/
[Perl]: https://www.perl.org/

But it will be even better once our 2 projects are completed. Personally I'm
mostly excited about the "duller" one of [them] -- the bug fixing one by Marcin
Wojdyr. We currently have an indecent number of open bugs (~1600 at the last
count) in our bug tracker and this is way too much, in fact there are so many of
them that even finding an existing bug is difficult. This is partly due to the
extremely poor SourceForge bug tracker UI so one of the first steps in this
project will be migrating all our bugs and patches to [Trac]. And then, of
course, fixing some of them. This is probably not as exciting as writing some
great new control but almost certainly is more useful to wxWidgets and will do
more for our users so, once again, we're really glad to have the opportunity to
do it during this GSoC!

[them]: http://code.google.com/soc/2008/wxwidgets/about.html
[Trac]: http://trac.edgewall.org/
