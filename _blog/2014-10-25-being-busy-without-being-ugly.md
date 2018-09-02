---
title: Being busy without being ugly
date: '2014-10-25T15:03:00.000Z'
author: Vadim Zeitlin
tags:
- progress
modified_time: '2014-10-29T22:00:29.308Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-4118387228549370536
blogger_orig_url: http://wxwidgets.blogspot.com/2014/10/being-busy-without-being-ugly.html
---

[wxBusyInfo] is one of the classes that it is actually best not to use at all,
because it blocks the program UI without allowing to dismiss it, so it is
hardly user-friendly and usually performing the long-running operation in a
separate thread and providing some way to display its progress and canceling
it in the main GUI thread is strongly advised.

[wxBusyInfo]: https://docs.wxwidgets.org/trunk/classwx_busy_info.html

However sometimes doing it is too difficult or maybe even impossible if you are
using third-party libraries and in this case wxBusyInfo provides a very simple
way to at least indicate that the program is busy, using it is as easy as
creating an object on the stack:

    wxBusyInfo wait("Working, please wait...", parent);

Unfortunately, traditionally, it was not just very simple, but very ugly as
well, as can be seen on this screenshot:

<img src="busy-old.png" class="img-fluid" alt="wxBusyInfo Dialog">

After the recent changes, you can show to the user something more presentable
(especially if you use a decent icon):

<img src="busy-printing2.png" class="img-fluid" alt="Busy Printing Dialog">

and with only slightly more effort:

```
wxBusyInfo info
(
    wxBusyInfoFlags()
      .Parent(parent)
      .Icon(wxArtProvider::GetIcon(wxART_PRINT))
      .Title("<b>Printing your document</b>")
      .Text("Please wait...")
      .Foreground(*wxWHITE)
      .Background(*wxBLACK)
      .Transparency(4 * wxALPHA_OPAQUE / 5)
);
```

As you can see, now it's possible to specify quite a few more attributes than
just the unadorned message:

*   There can be an optional icon in the top part of the window.
*   Message is now split in the "text" and "title" parts, with the latter shown
    in bigger font by default.
*   Both text and title can contain [markup].
*   Background and foreground colours can be specified.
*   Finally, the window can be made partly transparent.

To avoid passing all these parameters directly to wxBusyInfo constructor as one
unintelligible jumble, a new helper class wxBusyInfoFlags was added to allow
specifying them all by names and to make it simple to add more attributes later
than needed.

So while the initial advice to avoid the use of wxBusyInfo in the first place
remains valid, you can at least make it less ugly now if you do have to use it.

[markup]: https://docs.wxwidgets.org/trunk/classwx_control.html#afeb308dc3b54d8d735b33cb250395503
