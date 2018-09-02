---
title: Autumnal Tidings
date: '2009-11-01T11:48:00.000Z'
author: Vadim Zeitlin
tags:
- progress
modified_time: '2009-11-01T16:49:05.818Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-2536691933032504208
blogger_orig_url: http://wxwidgets.blogspot.com/2009/09/autumnal-tidings.html
---

I let slip the October post about the changes in the previous month so let me
make this one, about combined changes in September and October, on time to try
to compensate for it.

Many things have happened during these two months but the most important one was
arguably the official 2.9.0 release. It's just the first release in 2.9 series
and so many things will change (and already have changed since then) but it's
still significant as it's our first non bug-fix release since 2.8.0 almost 3
years ago and the first one containing Unicode-related changes as [described
here], and, in much more details, in the updated [Unicode overview] in the
manual (make sure to read about the [changes since 2.8] if you're upgrading).
Now you can easily download it and try it out if the idea of using an svn
snapshot makes you nervous. Please do let us know about any problems you
encounter when porting the existing code working -- it's not too late to do
something to make it easier to upgrade to 3.0 but we need to know about the
problems in order to fix them!

[described here]: /blog/2007/11/looking-forward-to-wxwidgets-3/
[Unicode overview]: https://docs.wxwidgets.org/trunk/overview_unicode.html
[changes since 2.8]: https://docs.wxwidgets.org/trunk/overview_changes_since28.html

The rest of the changes were the usual mix of bug fixes (many) and feature
improvements (a few). One of them stands out though: the long spoken, discussed,
argued and even [blogged] about unification of the debug and release builds was
implemented soon after 2.9.0 release. As with the Unicode changes, we're
confident that it's for the better but it is also quite possible that these
changes have introduced some problems in the existing projects/makefiles. And
again, if you let us know about them, we'd do our best to fix them before the
final 3.0 release.

[blogged]: /blog/2009/09/debug-build-changes-in-wx3/

As for the new features:

*   2 of the 3 GSoC branches have been merged into the trunk so now
    [wxRibbonBar] and [related classes] as well as [wxFileSystemWatcher] are
    available in it.

[wxRibbonBar]: https://docs.wxwidgets.org/trunk/classwx_ribbon_bar.html
[related classes]: https://docs.wxwidgets.org/trunk/group__group__class__ribbon.html
[wxFileSystemWatcher]: https://docs.wxwidgets.org/trunk/classwx_file_system_watcher.html

*   New [wxAny] class by Jaakko Salli was added. This is a modern, more
    efficient and safer replacement for wxVariant and the name was chosen
    because of the similarity to `boost::any`. It is not used by wxWidgets
    itself yet but we hope to provide a bridge between it and wxVariant in the
    future and start using the new class in the API once all the problems with
    it are ironed out.

[wxAny]: https://docs.wxwidgets.org/trunk/classwx_any.html

*   [wxInfoBar] GUI control was added. Instead of describing it, it is probably
    enough to show how it looks: there are two test bars in the dialogs sample
    now which can be shown or hidden using the menu commands but I'll spare you
    YouTube videos showing the effect and will just paste in three screenshots:

    <img src="infobar_msw.png" class="img-fluid" alt="wxInfoBar on MSW">

    This is the native GTK+ version available with GTK+ 2.18 and later only,
    with earlier GTK+ it would looks similarly to the other platforms, notably
    it would show icons and position the buttons horizontally -- I have no idea
    why does the native implementation stack them vertically which looks rather
    ugly IMO.

    <img src="infobar_gtk.png" class="img-fluid" alt="wxInfoBar on GTK">

    And finally, of course, OSX:

    <img src="infobar_osx.png" class="img-fluid" alt="wxInfoBar on OSX">

[wxInfoBar]: https://docs.wxwidgets.org/trunk/classwx_info_bar.html

*   Many improvements in wxOSX/Cocoa port. Among cosmetic (but nice) things was
    the addition of [ShowWithEffect()] implementation, among less visible ones
    the addition of more conversions from various NSTypes to wx equivalents
    which makes developing wxOSX itself simpler. There were also improvements
    for iPhone (notably OpenGL-related ones) and fixes for 10.6. On a personal
    note, I started using Cocoa port instead of the Carbon for all new Mac
    development as I believe that it's in a good enough shape to be used now and
    prefer to fix any bugs in Cocoa code which will be used in the future and
    not in Carbon port which won't.

[ShowWithEffect()]: https://docs.wxwidgets.org/trunk/classwx_window.html#596b1715edfc7609f352b2e000ecbaec

*   As usual, wxDataViewCtrl and related classes also received several bug fixed
    and improvements.

As usual, I won't describe the bug fixes in details but will just say that many
of them were fixed both in the trunk and 2.8 branch so we'd really appreciate
more testing of the current 2.8 branch in svn as the problem with fixing so many
bugs in the stable branch is that this might inadvertently break something else
and it would be great to find and fix it before 2.8.11 release rather than after
it.

I will omit the statistics section this time as there doesn't seem to be much
point, it doesn't change much from month to month, let me know if anybody was
interested in it.

Well, that's all for now -- better brief than late.
