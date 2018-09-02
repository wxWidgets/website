---
title: Hildonizing wxGTK
date: '2007-11-25T23:19:00.000Z'
author: Vadim Zeitlin
modified_time: '2007-11-26T00:39:05.928Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-507613994126676630
blogger_orig_url: http://wxwidgets.blogspot.com/2007/11/hildonizing-wxgtk.html
---

Last week-end I have somehow managed to find myself with a couple of hours of
free time and, instead of spending them on fixing random wxWidgets bugs as
usual, I wanted to actually do something new and different for once and so chose
to check how wx applications look on a [Nokia 770] tablet. Several people have
talked about porting wxWidgets to this device in the past and at least one has
apparently [done some work] but it was almost two years ago and nothing has
happened since, so I felt it was time to do something about it myself;
especially as I own a N770 tablet since quite some time but, instead of writing
programs for it as originally planned, I've so far spent time just using it (I
do feel ashamed).

[Nokia 770]: http://en.wikipedia.org/wiki/Nokia_770
[done some work]: http://n770.herraiz.org/archives/18

For those who don't know about Nokia internet tablets line, which started with
N770 but has been extended with N800 and N810 since then, they're small handheld
non-phone devices which run Linux and use a modified Gnome desktop version
called [Maemo]. Maemo basically just adds another level of libraries, called
[Hildon] on top of GTK+ itself. So, while GTK+ applications can mostly run on
N770 without changing, they don't have the correct look and feel before they are
hildonized, that is modified to use Hildon-specific functions instead of the
generic GTK+ ones -- hence the somewhat barbaric adjective used in the title of
this article.

[Maemo]: http://www.maemo.org/
[Hildon]: http://live.gnome.org/Hildon

This is the theory, anyhow. And I've decided to check how it was in practice.
The first results were encouraging: after a few simple fixes, wxGTK did build
for Maemo and I could run applications on my device. However they really didn't
look like they belonged here as can be seen by comparing the dialogs sample:

<img src="wxmaemo_old.png" class="img-fluid w-75" alt="Maemo wxWidgets app">

with a native application, such as this one:

<img src="maemopad.png" class="img-fluid w-75" alt="Maemo native app">

You can immediately see several differences:

*   The border of the window are not the same, the wx example doesn't fit into
    the desktop.
*   The menus are completely different: the native applications don't show a
    menu bar but use the drop down menus attached to the window itself.
*   The wx example shows a useless status bar with an even more useless resize
    grip (the window can't be resized anyhow).

So I set about fixing this and after a couple of hours of hacking here is what I
got:

<img src="wxmaemo.png" class="img-fluid w-75" alt="New wxWidgets Maemo app">

This is already much better: the points mentioned above were corrected and I
also added a new class (which is available, and hopefully will be useful, under
the other platforms too) called [wxNotificationMessage] and which is used by the
small message in the upper right part of the window (such messages are often
used in Maemo UI as notifications and also message box replacements).

[wxNotificationMessage]: https://docs.wxwidgets.org/trunk/classwx_notification_message.html

Of course, there are a lot of other things to do. For one, wxToolBar needs to be
changed in the same way wxMenuBar was. Next, as Maemo replaces almost all of the
standard GTK+ dialogs with its own ones, we need to do it too. I did it for the
colour selection dialog which looks like this now if wxWidgets was built with
`--with-hildon` option:

<img src="wxmaemo_coldlg.png" class="img-fluid w-75" alt="wxWidgets colour selection on Maemo">

And the same should be done for the file selection dialogs and several other
ones.

There are also less trivial things to do, like to understand how can the size of
the library (and of the applications using it) be reduced to be more in line
with the embedded systems capabilities. But globally I think wxWidgets is
perfectly viable for developing Maemo applications and is even more convenient
for doing this than raw GTK+ (which is the native toolkit of the platform)
because it transparently abstracts the differences between the desktop GTK+ and
Maemo systems: the dialogs sample itself hasn't been modified at all (just
extended to show the notification message) to use the correct menus and so on,
everything is done inside the library so exactly the same code can be used for
the desktop application without any loss in functionality. Of course, in
practice you will need to adapt applications to the mobile devices by probably
removing some functionality which doesn't make sense there and simplifying the
user interface. But wxWidgets already does some of this for you and hopefully
will do even more in the future.

Of course, I don't actually expect to have that much free time every week-end so
the progress of wxMaemo depends on the help from others. So if you're interested
in checking out wxMaemo for yourself, don't hesitate to grab the latest wx code
from [our svn] and build it with the above-mentioned --with-hildon option under
[Scratchbox]. If you are new to Maemo, notice that its web site has [nice
tutorial] about setting up the development environment for this platform. And,
of course, if you can contribute to this effort, don't hesitate to send us
patches and join us in discussions on wx-dev.

Have fun!

[our svn]: /develop/code-repository/
[Scratchbox]: http://www.scratchbox.org/
[nice tutorial]: http://maemo.org/development/documentation/tutorials/maemo_2_2_tutorial/
