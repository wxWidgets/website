---
title: Nicer Notifications
date: '2012-07-27T15:40:00.000Z'
author: Vadim Zeitlin
tags:
- progress
- gtk
modified_time: '2012-07-27T15:40:39.747Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-8232781630838329984
blogger_orig_url: http://wxwidgets.blogspot.com/2012/07/nicer-notifications.html
---

This is something really not that important in the grand scheme of things but
notifications produced by [wxNotificationMessage] used to look relatively ugly
under Unix as they appeared just as a normal window:

<img src="wx-notification-old.png" class="img-fluid" alt="">

And this wasn't especially nicely looking and, even worse, inconsistent with all
the other notifications shown by the system.

As I'm currently on vacation and don't feel bound to work on "important" things,
I've finally decided to take time to change this. Switching to libnotify to show
the notifications as everybody else does was very simple and the end result is
much nicer:

<img src="wx-notification-new.png" class="img-fluid" alt="">

or, to show an example of multiple active notifications:

<img src="wx-notification-error.png" class="img-fluid" alt="">

Unfortunately fixing the rest of the problems due to lack of integration with
Linux desktop turned out to be less trivial, for example I totally failed in my
attempts to get notifications about the system going to sleep and waking up that
I'd really like to implement for wxGTK. The only other thing I managed to do
during this vacation was a couple of minor [wxWebView] enhancements but more
about this in a future post.

[wxNotificationMessage]: https://docs.wxwidgets.org/trunk/classwx_notification_message.html
[wxWebView]: https://docs.wxwidgets.org/trunk/classwx_web_view.html
