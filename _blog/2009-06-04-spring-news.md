---
title: Spring News
date: '2009-06-04T14:36:00.001Z'
author: Vadim Zeitlin
tags:
- progress
modified_time: '2009-06-05T08:46:50.020Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-4305624720290222270
blogger_orig_url: http://wxwidgets.blogspot.com/2009/06/spring-news.html
---

Unfortunately I didn't have time to write the April summary until the second
week of May and by then it seemed too late so I decided to postpone it and write
a combined April-May one. As usual, postponing things doesn't make them easier
however and now I find myself unable (due to all the usual reasons of lack of
time, partly due to real life getting into the way) to write the May summary
properly neither. But better something than nothing so let me just make a very
short one.

Most of the activity in wx development community during this time was centred
around 2.9.0 release. It still didn't happen but we're now at release candidate
4 and it looks good -- or at least good enough to not justify postponing 2.9.0
any more -- so the final release should be expected very soon. Of course, if you
haven't tried [2.9.0-RC4] (or [bz2 version] if you prefer a much smaller
download) yet you're **strongly** encouraged to do it and post your feedback to
wx-users mailing list.

[2.9.0-RC4]: ftp://ftp.wxwidgets.org/pub/2.9.0-rc4/wxWidgets-2.9.0-RC4.zip
[bz2 version]: ftp://ftp.wxwidgets.org/pub/2.9.0-rc4/wxWidgets-2.9.0-RC4.tar.bz2

Speaking of the mailing lists, this was the most important administrative change
in our recent history: all the lists (including [wx-users] and [wx-dev]) have
migrated to Google Groups as the current (virtual) server didn't hold the charge
any more resulting not only in disruptions to the mailing list traffic but also
to frequent Trac outages as everything on that machine slowed down to a crawl
due to Postfix bogging all the disk bandwidth. Some people disliked this change
but from our point of view there was simply no other solution as switching to
Google Groups was much easier than paying for a better server and administering
it ourselves.

[wx-users]: https://groups.google.com/forum/#!forum/wx-users
[wx-dev]: https://groups.google.com/forum/#!forum/wx-dev

The only drawback of switching (so far) is that we still don't have any solution
for the gateway between wx-users and `comp.soft-sys.wxwindows` USENET group.
Unfortunately Google Groups don't provide this feature and so someone still
needs to host this gateway -- if anybody reading this can volunteer either
resources or at least information about how to do it, it would be great.

Other than that the usual cycle of adding new features and fixing old bugs
continued. Among the features I can remember the following additions:

*   Status bar tool tips shown when the text is truncated.

*   Better integration with the standard streams (thanks to Jonathan Liu): now
    you can wrap any wxStream as a `std::stream` and/or `std::streambuf` (we
    still need a way to wrap any `std::streambuf` as a wxStream to achieve
    perfect interoperability).

*   XRC improvements: wxListCtrl columns and item can now be defined directly in
    the resource files which is very convenient, especially for the columns
    (thanks go to Kinaou Hervé). And wxImageList support which was added to
    allow this is also available for the other controls using it such as
    wxTreeCtrl and various wxBookCtrl-derived classes.

*   A new [wxMouseEventsManager] class was added to abstract mouse handling in
    controls with items -- it doesn't seem like much but actually handling the
    mouse events properly, including respecting users mouse sensitivity options,
    is not that trivial. It still [remains] to modify the existing code in
    generic wxListCtrl, wxTreeCtrl and wxDataViewCtrl implementations to use it.

*   An already existing but private until then [wxTextWrapper] was promoted to
    a public class status.

*   More wxGrid tweaks: it's now possible to selectively disable resizing of
    individual rows or columns (despite the incredible (and confusing) richness
    of wxGrid API you couldn't do it before: it was all or nothing only).

*   Laurent Humbertclaude has submitted a patch adding table border width
    support to wxHtmlWindow which allows to have visually nicer tables in wx
    applications.

Finally, the GSoC projects seem to be all getting into their stride nicely. I
don't know much about the other two ones but I'm very satisfied with the
progress of the one I'm mentoring. Moreover, it seems that Bartosz is going to
add some important enhancements to wxEventLoop which are not part of file
system events notification project strictly speaking but which would be very
useful to any wx applications which need to monitor anything at all (to be more
precise, any file descriptor, `HANDLE` or `CFRunLoopSource` depending on the
platform) while running.

That's all for today -- and I'll try to find time to write more about June
changes and also to finally finish my long promised and long overdue post about
Bind() soon.

[wxMouseEventsManager]: https://docs.wxwidgets.org/trunk/classwx_mouse_events_manager.html
[remains]: https://trac.wxwidgets.org/ticket/10761
[wxTextWrapper]: https://docs.wxwidgets.org/trunk/classwx_text_wrapper.html
