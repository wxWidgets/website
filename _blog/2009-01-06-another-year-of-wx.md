---
title: Another Year of WX
date: '2009-01-06T00:49:00.000Z'
author: Vadim Zeitlin
modified_time: '2009-01-10T22:44:20.641Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-546170480770783610
blogger_orig_url: http://wxwidgets.blogspot.com/2009/01/another-year-of-wx.html
---

I wanted to write this summary of the work done on wx in 2008 before the end of
the year but, as it unfortunately often happens, ran out of time and couldn't do
it. Still, better late than never -- again this is a very familiar principle --
and so here is a brief summary of important things which happened to wx in 2008.
It liberally reuses the material from Robert's [Wonderful World of WX] write up,
read it for more details.

[Wonderful World of WX]: https://svn.wxwidgets.org/svn/wx/wxWidgets/trunk/docs/publicity/WoWoW30.html

So, what have we done in the almost 7000 revisions checked in during 2008? Maybe
surprisingly, the most important changes haven't been about writing code at all
but rather about improving the project infrastructure. This may not seem like a
big deal but the old SourceForge-based bug tracker was completely unusable and
basically was unused because of this and literally hundreds of bugs could have
been triaged and closed since the switch to using [Trac]. We also finally have a
working [BuildBot] which allows to detect breaking the build (and assigning the
blame) quickly and automatically and this is very useful for a project such as
wx where it's not always possible to test the compilation of the new code in all
configurations under all platforms. Finally, the [documentation] now is in a new
[Doxygen]-based format which makes it easier to maintain and contribute to it,
as well as producing nicer results.

[Trac]: https://trac.wxwidgets.org/
[BuildBot]: http://buildbot.tt-solutions.com/wx/
[documentation]: https://docs.wxwidgets.org/trunk/
[Doxygen]: http://www.doxygen.org/

By the way, you might have noticed that one of the goals of these changes was to
make it easier to contribute to wxWidgets:

*   Trac not only allows us to process bugs more efficiently but will hopefully
    also encourage others to to help with weeding out the duplicates (something
    we really couldn't expect the others to do with the SourceForge tracker as
    we couldn't even do it ourselves). And it allows for better bug
    categorizations, for instance you can see all [easy to fix] bugs at a glance
    and hopefully this can encourage more people to try fixing them (the list is
    short right now but will probably become longer with time).

*   The BuildBot allows to verify that the svn trunk version at least builds
    which is supposed to encourage people trying it out. We also hope to get
    more volunteers [setting up] their own build slaves to help us test even
    more configurations.

*   And the new documentation format has already allowed many more people to
    submit contributions to the manual than before and we hope that this trend
    is going to continue. And using Doxygen further lowers the barrier to entry
    to wxWidgets development as no LaTeX knowledge is needed any more.

[easy to fix]: https://trac.wxwidgets.org/query?status=accepted&status=confirmed&status=new&status=reopened&group=priority&order=priority&col=id&col=summary&col=status&col=type&col=priority&col=milestone&col=component&keywords=~simple
[setting up]: https://wiki.wxwidgets.org/Development:_Buildbot

But while waiting for the success of our diabolic plans to make wxWidgets users
work on improving the library themselves we still found time to do quite a few
things ourselves. From the strategical perspective the most important change of
2008 was certainly the decision to start merging the old Carbon-based wxMac port
and the alpha-quality wxCocoa into the new, one and only, wxOSX port which will
run on both 32 and 64 bit platforms and also iPods and iPhones and not just the
boring desktops. And as a side note, wxOSX can now also be built as a framework
and not just as plain old Unix-style dynamic library.

Another strategic decision was to concentrate more on the quality of the library
than on the quantity of the things it may do. This has led to dropping of ODBC
library which was embarrassingly buggy and unmaintained since a very long time
and spending a lot of effort on bug fixing, including the inconsistencies in
behaviour between different ports (and while this post intentionally doesn't
cite any names to avoid accidentally omitting somebody, I do have to thank once
again Google for organizing, once again, the Summer of Code which allowed us to
spend more resources than would have otherwise been possible on this task --
let's give credit where it is due). In the same category, we have finally
cleaned up [wxSocket] and [wxURL] code which became an acute embarrassment to
all of us after a decade of bit-rotting and also fixed some, although by far not
all, problems with [wxGrid] which also suffered from chronic lack of attention.

[wxSocket]: https://docs.wxwidgets.org/trunk/classwx_socket.html
[wxURL]: https://docs.wxwidgets.org/trunk/classwx_u_r_l.html
[wxGrid]: https://docs.wxwidgets.org/trunk/classwx_grid.html

Of course, all this doesn't mean that there were no new features added so let me
list the most important ones:

*   The first among them was the long-awaited inclusion of [wxPropertyGrid] in
    wxWidgets itself.

*   [wxDataViewCtrl] and related classes continued to be significantly enhanced.

*   [wxRichTextCtrl] has benefited from many small but cumulatively important
    improvements as well.

*   As part of improving [wxGrid]/[wxListCtrl] columns display support, a new
    [wxHeaderCtrl] class was added and a handy [wxRearrangeList] and related
    classes were added and column reordering was implemented.

*   A convenient new sizer class, [wxWrapSizer], was added.

*   [wxCalendarCtrl] now has a native implementation.

*   The humble [wxMessageDialog] got a much needed face lift as well, in
    particular you can finally use custom labels for its buttons

*   We even found something to improve in [wxStaticText] which now supports
    "ellipsization" of its contents.

*   [wxGLCanvas] gained anti-aliasing (multi-sampling) support.

*   The main -- but far from only -- change to AUI library was the addition of
    wxAuiToolBar.

*   Events (and hence timers and asynchronous sockets) support was finally added
    to wxBase, after years of planning to do it.

And I probably forget quite a few more.

[wxPropertyGrid]: https://docs.wxwidgets.org/trunk/classwx_property_grid.html
[wxDataViewCtrl]: https://docs.wxwidgets.org/trunk/classwx_data_view_ctrl.html
[wxRichTextCtrl]: https://docs.wxwidgets.org/trunk/classwx_rich_text_ctrl.html
[wxGrid]: https://docs.wxwidgets.org/trunk/classwx_grid.html
[wxListCtrl]: https://docs.wxwidgets.org/trunk/classwx_list_ctrl.html
[wxHeaderCtrl]: https://docs.wxwidgets.org/trunk/classwx_header_ctrl.html
[wxRearrangeList]: https://docs.wxwidgets.org/trunk/classwx_rearrange_list.html
[wxWrapSizer]: https://docs.wxwidgets.org/trunk/classwx_wrap_sizer.html
[wxCalendarCtrl]: https://docs.wxwidgets.org/trunk/classwx_calendar_ctrl.html
[wxMessageDialog]: https://docs.wxwidgets.org/trunk/classwx_message_dialog.html
[wxStaticText]: https://docs.wxwidgets.org/trunk/classwx_static_text.html
[wxGLCanvas]: https://docs.wxwidgets.org/trunk/classwx_g_l_canvas.html

But while things have progressed quite a lot, we didn't manage to do everything
we'd have liked to, of course (otherwise what would be doing this year?). My
main regret is that we didn't manage to release 2.9.0 development branch preview
release as I'd really like to do this a.s.a.p. to get more feedback about the
Unicode-related changes. Among the features we hoped to add this year but didn't
one really stands out: a lot of people are asking for images support in
[wxButton] and we really should support this as it's not even difficult to do so
this will definitely be something to do in 2009.

[wxButton]: https://docs.wxwidgets.org/trunk/classwx_button.html

The two other small things we hope to see in this new year are the wxOSX
completion and hopefully the 3.0 release. Let's see if this happens...

That's all for 2008 and see you in a year time (unless people find this post
really interesting, in which case I might try to write monthly summaries of wx
development)!

P.S. Edited to correct the date on 2009-01-09.
