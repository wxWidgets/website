---
title: wxWidgets under Vista
date: '2007-02-05T19:16:00.000Z'
author: Vadim Zeitlin
modified_time: '2007-02-05T21:36:37.426Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-117070673701511148
blogger_orig_url: http://wxwidgets.blogspot.com/2007/02/wxwidgets-under-vista.html
---

I've decided to (finally) test how do wxWidgets applications fare under [Windows
Vista]. Installing Vista (in a [VMware Workstation 6 Beta] virtual machine under
a Debian amd64 host) turned out to be more problematic than I thought as the
MSDN disk 2429.5 contains exactly 4 ISO images of Vista CDs while the installer
asked me to insert disk 5 and as I didn't have I couldn't continue with the
installation. So I had to install the Enterprise Edition from the disk 2430.2
which not only comes with 4 CD images on the DVD but also actually installs from
them.

[Windows Vista]: http://www.microsoft.com/windows/products/windowsvista/default.mspx
[VMware Workstation 6 Beta]: http://www.vmware.com/products/beta/ws/

Other than that, installation was pretty uneventful and un-wow: the installer
warns that the computer must reboot several times during the installation -- and
so it does. Why no other system among those I installed (various Linux
distributions, FreeBSD, Mac OS X, ...) needs to reboot even once? Anyhow,
UI-wise the only useful information from the installer is that Vista seems to
use `./../...` animation as an indeterminate progress control (OS X, or Firefox
which probably copied it from it, use a small spinning wheel for the same thing)
so if we ever implement a separate control for this, we know how it should look
under Windows now.

After finishing the installation and getting rid of half a dozen of the icons in
the taskbar notification area (this is progress, I think XP had only a couple of
them) I could finally run the widgets sample. The only problem I could see with
it was with wxNotebook tabs on the left or right: this doesn't work at all under
Vista and I think we should just abandon trying to make it work as it already
was pretty buggy under XP.

But there are a few enhancements we could implement, of course:

*   wxSearchCtrl doesn't look native but Vista does has a native version (just
    as OS X) and uses it everywhere so it's really jarring to have a different
    one in wx programs. Apparently the standard "Search Control" class is just a
    combination of "Edit" and "ToolbarWindow32" (with "Static" thrown in to show
    the inactive control contents) so we could emulate it easily even on
    pre-Vista systems. Or we could just use the native control, of course.
*   Buttons with images seem finally to be supported (they can be seen in e.g.
    "Tools" page of a disk properties dialog), so we should update wxButton to
    support this too.
*   As mentioned before, some file dialogs (e.g. `Ctrl-O` one in the dialogs
    sample) use old style while other ones (`Ctrl-Q` one) use a new style one
    which is inconsistent at best. Other dialogs seem to be just fine though,
    and the new Vista-style icons are used everywhere as expected, e.g. in the
    log dialog. Funny enough, the standard Vista error message dialog now looks
    a lot like wxWidgets standard log dialog with its "Details >>" button.

All in all I think wxWidgets applications look pretty decently under Vista,
especially considering that we didn't spend any effort at all so far on porting
the code to Vista. Of course, it's a tribute to Microsoft engineers backwards
compatibility maintaining skills more than anything we did but it's still nice,
especially compared with the transition to XP when previously working code
started to crash and a lot of things didn't look right at all.
