---
title: Right-To-Left layout (RTL) support in wxWidgets
date: '2006-10-14T20:22:00.000Z'
author: Robert
modified_time: '2006-10-14T21:07:43.173Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-116086006250198096
blogger_orig_url: http://wxwidgets.blogspot.com/2006/10/right-to-left-layout-rtl-support-in.html
---

Here is some information about the support for locales with right-to-left (RTL)
layout out in wxWidgets. As you probably know, RTL-support is required mostly of
Hebrew, Arabic and Farsi. It has been decided that wxWidgets should follow
mostly the Windows API and Windows approach for displaying RTL text and layout
in applications. This approach is described in a document at MSDN. In short, all
coordinates for drawing and for window positioning are mirrored horizontally
which means that (apart from bitmap mirroring) little has to be done at the user
level. Also, the various native Win32 controls are modified to support RTL
design.

This is different from what is done under GTK+, where no coordinates are
mirrored. Instead, every app needs to mirror everything itself, even if the job
of mirroring controls is mostly done within GTK+'s layout container
automatically. As far as drawing within wxWidgets is concerned, coordinates are
mirrored at the wxDC level in the GTK+ port.

I have added two screenshots from the popular FileZilla application running in
the `ar_EG` (Egyptian variant of Arab) locale (screenshots in parts thanks to
Tim Kosse). Since the tree control in the Linux screenshot is using generic
wxWidgets code, this also demonstrates how drawing and scrolling is mirrored for
user windows.

Below is a screenshot using wxWidgets and GTK 2.4.9.

<img src="Arab_Linux.0.png" class="img-fluid" alt="FileZilla in Egyptian Arab on Linux">

Here is roughly the same screenshot using Windows 2000.

<img src="Arab_Windows.0.png" class="img-fluid" alt="FileZilla in Egyptian Arab on Windows">
