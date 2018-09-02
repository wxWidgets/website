---
title: 'March of progress in action: wxAboutBox()'
date: '2006-10-08T19:43:00.000Z'
author: Vadim Zeitlin
modified_time: '2006-10-08T23:45:13.890Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-116033837849359205
blogger_orig_url: http://wxwidgets.blogspot.com/2006/10/march-of-progress-in-action-wxaboutbox.html
---

Finally, 13 years after its beginning, wxWidgets has gained this mostly
indispensable feature of any modern GUI toolkit: the possibility to show the
standard "About" dialog with one line of code. As of today, [wxAboutBox()]
function can be used to create a dialog box like this:

<img src="about-gtk.png" class="img-fluid" alt="About dialog on GTK">

or like that

<img src="about-mac.png" class="img-fluid" alt="About dialog on Mac">

or, if all else fails, like this

<img src="about-msw.png" class="img-fluid" alt="About dialog on Windows">

The generic dialog is not finished however as the best way to implement is seems
to be using yet another new control: the hypothetical wxCollapsiblePane. The
hope is to have it soon, finish wxGenericAboutDialog next, and release 2.7.1
immediately thereafter.

[wxAboutBox()]: https://docs.wxwidgets.org/3.0/group__group__funcmacro__dialog.html#ga6d8198c95b97786f206abfde010a4d8f
