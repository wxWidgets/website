---
title: Spring Cleaning
date: '2014-05-16T10:22:00.003Z'
author: Vadim Zeitlin
tags:
- progress
- brief
modified_time: '2014-05-16T13:08:11.991Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-7702639945427911858
blogger_orig_url: http://wxwidgets.blogspot.com/2014/05/spring-cleaning.html
---

Everything comes to an end. Even support for MSVC6, a.k.a. Microsoft Visual
Studio 98, which subtly hints at just exactly how old this compiler was. I
wouldn't be surprised if wxWidgets were the last open source library to still
support it 15 years after its initial release but now, finally, it's over and
3.2 release will require just barely ten year old MSVC7 or maybe even MSVC8 if
nobody uses VC7 any more (but up to at least a year ago, some people were still
actually using VC6, which is why it was, and remains, still supported in 3.0
release, although with quite some functionality not available for it).

In addition to dropping support for VC6, which was the really important change
as it means we can, finally, write the code in wxWidgets itself in something
resembling standard C++, we also officially stopped supporting Windows 9x
(95/98/ME) in wxMSW port. Windows XP remains supported however as the
differences between it and later Windows versions are much smaller than those
with Win9x.

Finally, [another] port bites the dust: this time it was wxPM, the port of
wxWidgets to OS/2. As far as I know, neither the port nor the platform itself
are used since quite some time and the [last real contribution] to it dates from
almost 5 years ago.

_Edit:_ I am on a tear, since writing the initial version of this post,
I've also removed support for the obsolete OpenWatcom and DigitalMars compilers
as well as positively ancient (last century) MinGW versions. At this rate, there
will be nothing left to remove soon, so I am going to really stop now.

All in all, a good day of work:

    % git diff --shortstat master@{yesterday}
    1756 files changed, 12868 insertions(+), 190758 deletions(-)

[another]: /blog/2012/01/panta-rhei/
[last real contribution]: https://trac.wxwidgets.org/ticket/10491
