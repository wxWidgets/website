---
title: 2.9.3 release in details
date: '2011-12-14T16:21:00.001Z'
author: Vadim Zeitlin
tags:
- release
- roadmap
modified_time: '2013-04-30T11:05:43.848Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-5589884605075055229
blogger_orig_url: http://wxwidgets.blogspot.com/2011/12/293-release-in-details.html
---

wxWidgets 2.9.3 has been officially released today. In spite of our efforts to
speed up the release process, it still took us 5 months to do it after 2.9.2.
However it's significantly better than a year that both 2.9.1 and 2.9.2 had
taken. And we plan to make 2.9.4 sooner than in 5 months too as explained in the
[updated roadmap].

As a remainder, here is a summary of the most important new features that
appeared in wxWidgets since 2.9.2:

*   The star addition of this release is the [wxWebView] library by Steven
    Lamerton and Auria, developed during Google Summer of Code 2011. It is by
    far the biggest and most important new feature. Thanks to it it is finally
    possible to embed a fully functional _native_ web rendering engine (with
    JavaScript and CSS support) in wxWidgets applications.

*   [wxTimePickerCtrl] logically complements [wxDatePickerCtrl]. Currently it
    uses a native control under MSW and a generic implementation elsewhere but
    we have plans to also provide a native implementation for OS X in the next
    version (and for wxDatePickerCtrl as well).

*   [wxTreeListCtrl]: this is much less revolutionary but is a convenient and,
    most importantly, simple to use multi-column hierarchical control.

*   [wxRichToolTip] and [wxBannerWindow] are also not exactly earth shattering
    but provide a simple way to enhance your application UI by presenting more
    information in a nice and not distracting way to the user.

*   Time functions now can return time with microsecond, rather than
    millisecond, precision and [wxStopWatch] is more precise thanks to this.

*   The generation of [wxEVT_CHAR_HOOK] event was made consistent for all the
    major platforms and [DoAllowNextEvent()] was added to make it possible to
    handle this event in more flexible way.

*   [wxMessageDialog] gained support for wxHELP button and, consequently, it is
    now possible to easily show message boxes with up to 4 (instead of 3 before)
    custom buttons. We are sure that wxWidgets users won't abuse this feature
    but, just in case, we officially announce that 4 is as high as the number of
    message box buttons will ever go.

*   You can now [try to enter] a critical section, without blocking.

*   wxTextCtrl has gained support for [auto-completing the directories]
    (unfortunately, as with the files, this is only implemented in wxMSW
    currently).

*   And it is now also possible to [find the pixel coordinates] of a text
    position in wxTextCtrl which is helpful for e.g. showing a context menu or
    a popup window for the given character or word.

*   Support for wxSplitterWindow persistency was added, meaning that you can now
    simply call [wxPersistentRegisterAndRestore(splitter)] to automatically save
    the splitter position and restore it the next time your program is executed.
    Additionally, the location and the format of saved persistent options can
    now be customized by providing a custom [wxPersistenceManager] and
    overriding its [GetKey()] method.

*   Keyboard navigation in generic wxDataViewCtrl has been significantly
    enhanced to make it really practical to use it for editing and not just
    browsing data.

There were many more minor additions and plenty of bug fixes as well, of course,
see [the change log] for even more details.

Finally some combined statistics about the changes since the last release:

    % git shortlog -sn remotes/tags/WX_2_9_2..
       465  Vadim Zeitlin
       232  Steven Lamerton
        74  Stefan Csomor
        71  Vaclav Slavik
        47  Dimitri Schoolwerth
        47  Robin Dunn
        41  Paul Cornett
        26  Julian Smart
        21  Jouk Jansen
         6  Francesco Montorsi
         5  Chris Elliott
         1  Bryan Petty
         1  John Chain
         1  Mike Wetherell

for 1038 commits. Notice that my own check ins include committing many patches
from other people (which git would have kept track of but svn is unfortunately
incapable of this). In particular, I'd like to thank Catalin Raceanu, Kinaou
Hervé, David Hart, troelsk, Armel Asselin, wsu, joostn, Navaneeth, Allonii,
ivan_14_32, Marcin Wojdyr, John Roberts and others for their contributions to
this release (sorry in advance if I forgot anybody in this list, please contact
me if you should have been included into it). To keep an idea of the amount of
code changed by these commits here is another statistics:

    % git diff --shortstat remotes/tags/WX_2_9_2
     1202 files changed, 231492 insertions(+), 149751 deletions(-)

So around 80000 lines have been added which seems enormous but more than 60000
of them were actually changes to the (automatically generated) make and project
files and message catalogs so "only" approximatively 18000 new lines of code
have been added. Remarkably, almost 6000 of them were added to the documentation
and another 1500 or so to the unit tests. On the other hand, we actually lost
20000 lines in an upgrade of libpng so the actual amount of the new lines in our
own code is close to 15000 which is still pretty impressive.

On a less bright note, using [trac-ticket-stats], we also have:

    % ./trac-ticket-stats trac.wxwidgets.org 2011-07-04 today
    Ticket statistics for http://trac.wxwidgets.org/timeline
    from 2011-07-04 to 2011-12-14:
    --------------------
    New              454
    Closed           397
    Reopened          59
    --------------------
    Delta            116

so while almost 400 bugs were fixed since 2.9.2, net effect is unfortunately
that today we have 116 more bugs than 5 months ago.

[updated roadmap]: https://trac.wxwidgets.org/wiki/Roadmap
[wxWebView]: https://docs.wxwidgets.org/trunk/group__group__class__webview.html
[wxTimePickerCtrl]: https://docs.wxwidgets.org/trunk/classwx_time_picker_ctrl.html
[wxDatePickerCtrl]: https://docs.wxwidgets.org/trunk/classwx_date_picker_ctrl.html
[wxTreeListCtrl]: https://docs.wxwidgets.org/trunk/classwx_tree_list_ctrl.html
[wxRichToolTip]: https://docs.wxwidgets.org/trunk/classwx_rich_tool_tip.html
[wxBannerWindow]: https://docs.wxwidgets.org/trunk/classwx_banner_window.html
[wxStopWatch]: https://docs.wxwidgets.org/trunk/classwx_stop_watch.html
[wxEVT_CHAR_HOOK]: https://docs.wxwidgets.org/trunk/classwx_key_event.html
[DoAllowNextEvent()]: https://docs.wxwidgets.org/trunk/classwx_key_event.html#a4a7060ef0054d681cf8685e0467a663e
[wxMessageDialog]: https://docs.wxwidgets.org/trunk/classwx_message_dialog.html
[try to enter]: https://docs.wxwidgets.org/trunk/classwx_critical_section.html#abb732e66f2b0e6f38d30f29a25d8851a
[auto-completing the directories]: https://docs.wxwidgets.org/trunk/classwx_text_entry.html#ab02338d68d51f103551454298578851c
[find the pixel coordinates]: https://docs.wxwidgets.org/trunk/classwx_text_ctrl.html#a2d976679d30dfd1ff0adb177b9537880
[wxPersistentRegisterAndRestore(splitter)]: https://docs.wxwidgets.org/trunk/persist_8h.html#aa88ad0cab20a78e9c930fbbbc6caa36d
[wxPersistenceManager]: https://docs.wxwidgets.org/trunk/classwx_persistence_manager.html
[GetKey()]: https://docs.wxwidgets.org/trunk/classwx_persistence_manager.html#a03e9951d6bfd4b6b089a60a5045ae19e
[the change log]: https://sourceforge.net/projects/wxwindows/files/2.9.3/changes.txt
[trac-ticket-stats]: http://www.tt-solutions.com/en/portfolio/trac_ticket_stats
