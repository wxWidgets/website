---
title: Preparing for 2.9.5
date: '2012-10-21T20:43:00.001Z'
author: Vadim Zeitlin
tags:
- progress
- roadmap
modified_time: '2012-10-21T20:43:42.437Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-948354164377355991
blogger_orig_url: http://wxwidgets.blogspot.com/2012/10/preparing-for-295.html
---

As (unfortunately) not unusual, it looks like 2.9.5 won't be released before the
end of October as I planned hoped. But the good news is that we're still
relatively close to it, so even though the release is going to be late, at least
it won't be late by much. This optimistic assessment is based on the fact that a
lot of long-standing important tasks are finally getting closer to the
completion:

First, we will finally (after 3 years) soon apply the [XRC reorganization] patch
by Steven Lamerton that will allow us to have XRC handlers for the classes not
in the "core" or "adv" libraries, e.g. wxRichTextCtrl, wxRibbonControl or
various AUI classes. This was unfortunately impossible so far because of
annoying inter-library dependencies issues, but will be fixed by this patch in a
classic computer science manner -- that is, by introducing another level of
indirection. The changes here are relatively straightforward but there are still
quite a few of them, so it would be great to get more testing for them, even
before 2.9.5 release, so if you're interested, please get the patch from the
Trac or, soon, from the svn or its [git mirror] and let us know about your
experience.

[XRC reorganization]: https://trac.wxwidgets.org/ticket/10996
[git mirror]: https://github.com/wxWidgets/wxWidgets

Second, an almost as long-lived branch containing several [important changes to
wxAUI] by Malcolm MacLeod is also planned for a merge. The main user-visible
effect of these changes is that it will now be possible to drag notebook pages
not only between different wxAuiNotebooks but also form notebooks dynamically by
simply piling up pages on top of each other. There are other notebook-related
improvements, such as support for horizontal (i.e. on the left or right) tabs by
Jens Lody. But here there are also a _lot_ of changes and, to make matters more
interesting, they're hardly straightforward so testing this patch would be very
welcome as well.

[important changes to wxAUI]: https://trac.wxwidgets.org/ticket/14756

The final relatively big feature planned for 2.9.5 is [wxMaskedEdit] by Manuel
Martin and, again, unsurprisingly, feedback about it would be very welcome.

[wxMaskedEdit]: https://trac.wxwidgets.org/ticket/14535

In addition to the not-yet-quite-merged patches above, several other
long-postponed changes have been already done in the svn:

*   Scintilla, used by [wxStyledTextCtrl], was upgraded to almost the latest
    version. This brings a number of new features but also, possibly, some bugs
    which it would be great to find before the release.
*   Much better support for symbolic links in `wxFileName` (see
    [DontFollowLink()] and the new `flags` argument of [Exists()]) and
    `wxFileSystemWatcher` (work done by David Hart).
*   New [wxSimplebook] class.
*   Support for [embedding PNG] into the program sources, XPM-like.
*   wxPython `CallAfter()` equivalent for C++.

Please test your programs with the latest svn and, better yet, try using the new
features in them and let us know about any regressions or things that could be
improved in the new stuff.

Thanks in advance for helping us to make wxWidgets 3.0 better!

[wxStyledTextCtrl]: https://docs.wxwidgets.org/trunk/classwx_styled_text_ctrl.html
[DontFollowLink()]: https://docs.wxwidgets.org/trunk/classwx_file_name.html#af1430dafaf1f522710b52f0a0bf0f060
[Exists()]: https://docs.wxwidgets.org/trunk/classwx_file_name.html#ae85e9aa0c443761a0c380d770a42d672
[wxSimplebook]: https://docs.wxwidgets.org/trunk/classwx_simplebook.html
[embedding PNG]: https://docs.wxwidgets.org/trunk/group__group__funcmacro__gdi.html#ga30fc362d22b3045f58aed54fc808f203
