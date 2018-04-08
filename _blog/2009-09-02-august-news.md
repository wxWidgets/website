---
title: August News
date: '2009-09-02T16:56:00.001Z'
author: Vadim Zeitlin
tags:
- progress
modified_time: '2009-09-02T17:15:15.769Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-5068755974429456487
blogger_orig_url: http://wxwidgets.blogspot.com/2009/09/august-news.html
---

An even shorter post than the one for the previous month as nothing much seems
to have happened in August. Personally I mostly worked on other projects using
wxWidgets and didn't have time to do much on wx itself and didn't even have time
to finish my wxInfoBar contribution which was supposed to be done back in July.
So it was mostly bug fixes and cleanup with some minor new features mostly
contributed by others via patches on Trac.

August also marked the end of the GSoC. I'll try to write more about wxFSWatcher
(or maybe invite Bartosz to write about it himself) later, when I integrate his
work in SVN trunk and would also like to invite other mentors to write about the
projects they were involved in too but for now let me just say that all 3
projects were successful, so you can look forward to new wxRibbonBar and
wxFSWatcher classes and AUI improvements in the next wx version.

Another good news is that people are working on using wx under several new
platforms: this month we had posts about wxSymbian again (wxBase part only, no
GUI yet), wxQNX (apparently wx already works under QNX in fact, although I don't
even know which port does it use) and someone is writing a wxAmigaOS4 port.
Personally I'd be most interested in the first one of those but more ports is
always fun to have, even if AmigaOS is unlikely to ever become as popular as its
predecessor was again.

The usual statistics for committers:

1. Vadim Zeitlin (106)
2. Jaakko Salli (11)
3. Stefan Csomor (10)
4. Mike Wetherell (5)
5. Paul Cornett (4)
6. Julian Smart (3)
7. Bryan Petty (1)
8. Jouk Jansen (1)
9. Kevin Ollivier (1)

The usual suspects were at it again: I was mostly checking in patches by others,
Jaakko working on wxPropertyGrid and Stefan fixing bugs in wxOSX. Paul fixed a
pretty bad bug in wxGTK which prevented it from working at all under [Fluxbox]
WM (actually it was apparently a Fluxbox bug but users probably don't care about
such fine distinctions).

101 new Trac tickets were created, 92 were closed but 10 were reopened so we
seem to be in the red again -- but then it seems like it is the case every month
so it's not very surprising any more.

[Fluxbox]: http://www.fluxbox.org/
