---
title: January 2009 Progress Report
date: '2009-01-31T22:04:00.001Z'
author: Vadim Zeitlin
modified_time: '2009-01-31T15:35:16.347Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-2157698417912781414
blogger_orig_url: http://wxwidgets.blogspot.com/2009/01/january-2009-progress-report.html
---

As the post about wx progress in 2008 seemed to generate quite some interest,
here is the promised update for the things we did in the first month of 2009.

The main new addition was probably the [long-discussed] support for persistent
controls. This is not completely done yet but initial implementation of the
basic support for persistence was checked in and now persistent adapters for
more wxWidgets classes (currently only wxTopLevelWindow and wxBookCtrls are
covered) can be added one by one.

[long-discussed]: http://thread.gmane.org/gmane.comp.lib.wxwidgets.devel/108204

Another important change was the integration of the [type-safe events] patch
from Peter Most. Not only it makes the events safer but it also allows
connecting anything as an event handler, not necessarily a method of
wxEvtHandler-derived class. Unfortunately we hit some problems with building
this code with all but the very latest compilers (we didn't even try to use it
with VC6, but it was a bad surprise that VC7 template deduction was not smart
enough for it neither) so currently it is still disabled but we plan to
re-enable it a.s.a.p.

[type-safe events]: https://trac.wxwidgets.org/ticket/10000

Speaking of the improvements to compile-time safety, Francesco has modified
[wxWindow::ProcessEvent] to be protected at wxWindow level as it should never be
called directly but only as `win->GetEventHandler()->ProcessEvent()` or, with the
latest trunk, as `win->ProcessWindowEvent()` which does the same thing, to avoid
skipping any event handlers pushed onto the window. Doing this allowed to find
several places in wxWidgets itself where `GetEventHandler()` call was forgotten
and there are certainly a lot of similar omissions in code outside of wx itself
which this change will now allow to find during compile-time.

[wxWindow::ProcessEvent]: https://docs.wxwidgets.org/trunk/classwx_window.html#5ebdbd87c28644149a07f1742996df96

There was also more work done on the [native headers] (with nice support of
sorting and column reordering) in wxDataViewCtrl and wxGrid (special thanks to
[Zen Fire] for sponsoring this work!) and on wxDataViewCtrl in general. In
particular the simple [wxDataViewListCtrl] wrapper was added and event-based API
for drag-and-drop was implemented.

[native headers]: https://docs.wxwidgets.org/trunk/classwx_header_ctrl.html
[Zen Fire]: http://www.zen-fire.com/
[wxDataViewListCtrl]: https://docs.wxwidgets.org/trunk/classwx_data_view_list_ctrl.html

The last problems with support for custom controls in native file dialogs under
Windows were solved thanks to Marcin so now only Mac support for this feature is
missing. Speaking of Mac, the new OS X port kept progressing in leaps and bounds
and I'm especially glad that several people have contributed to it recently --
thanks!

Then there were some improvements to MDI stuff. This code was not updated for a
long time so I started reviewing and correcting it in last November and
continued to do so, while adding some new features, now.

And finally some useless statistics: so far (the month is not quite over yet...)
there were 850 check ins in January. 138 new tickets were created, 211 ones were
closed (at least we're moving in the right direction!) and Trac records 365
ticket modifications in total from 93 different people (with Robin and me doing
most of the damage with about 70 changes each).

---

On a completely unrelated note, I've installed, out of curiosity, beta of
Windows 7 and tested some wx samples under it. They have no special support of
Windows 7 (nor even Vista yet) but they still appear to be quite fine, only
small details (e.g. owner drawn menu items) look out of place. I'm not sure if
this can really be seen as our merit though, it's probably more a compliment to
Microsoft for maintaining backwards compatibility. Although it also clearly
shows the advantage of using native controls -- I doubt that the programs
written using Qt, especially using its version from a few years ago, look as
good as the ones written even very old wx versions under the new system. Other
than that, my main impression of Windows 7 is that it's amazing that it _still_
needs to restart when changing the workgroup name. I guess they didn't want to
remove all old and familiar features at once...

---

And to end this post, some less technical news: we made a brief [roadmap] for
3.0 release. This is not much in itself but it does help to concentrate thoughts
on it and hopefully gives a bit more visibility into the project future for
people not reading this blog.

And I was extremely glad to learn that wxWidgets now has a new maintainer in
Debian as I almost lost hope to ever see them there as the old maintainer spent
his time only sabotaging the efforts by others to bring wx to Debian and
spreading FUD about it in his spare time whereas the new maintainer has already
released the [updated packages] which is great news for me both from a wx
developer and a Debian user viewpoint. We also had a discussion with Dan Horák,
Fedora packager of wxGTK, about supporting multiarch (mostly x86/amd64) packages
and making RPMs for wxWidgets 3.0.

[roadmap]: https://trac.wxwidgets.org/wiki/Roadmap
[updated packages]: http://packages.debian.org/lenny/libwxgtk2.8-0
