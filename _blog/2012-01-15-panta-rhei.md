---
title: Panta rhei
date: '2012-01-15T14:49:00.003Z'
author: Vadim Zeitlin
tags:
- ports
- roadmap
modified_time: '2012-01-15T15:20:23.293Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-7046044860829561261
blogger_orig_url: http://wxwidgets.blogspot.com/2012/01/panta-rhei.html
---

I've just done something that I hadn't done during the entire time I was working
on wxWidgets: removed an entire port. And not even just one of them but two at
once: [wxPalmOS] and [wxMGL]. The latter wasn't used since many years and I
don't think the former has been ever really used at all. Moreover, the platforms
targeted by these ports don't themselves exist any more. So removing them was a
pretty straightforward decision as there were no benefits at all in keeping
these ports while maintaining them took small but non zero amount of work.

The decision is less clear cut for them but there are other ports which might be
dropped soon too. wxGTK1 will probably disappear when GTK+ 3 support is merged
into trunk. The old Cocoa port should be removed too, if only to avoid confusion
with the new wxOSX/Cocoa. wxMotif is definitely not very relevant any more so it
will probably go as well. I'm not sure if anybody is interested in wxPM (OS/2
port) but it could be a candidate for removal in the near future as well.

The one port which we, or at least I, had high hopes for was the
[DirectFB]-based wxUniversal, a.k.a. wxDFB. Unfortunately it hasn't attracted
any interest from the community so it has never developed into a fully-fledged
port. This is really a pity as I'd like to see wxWidgets used more on
low-powered embedded devices where DirectFB is pretty popular and I still hope
that we can find somebody interested in working on it. And while there is hope,
we're not going to remove it, even if it's really not very useful in its current
state.

With all these ports gone or going, what is remaining? The three major ports
are, as always, wxMSW, wxGTK(2) and wxOSX. wxDFB, wxX11 and wxWinCE are not used
much but still exist in a more or less reasonable shape. We also hope to have
wxGTK3 soon and, more excitingly, the new wxiOS port. Other than that, wxQt port
was started but seems to have stalled and, in any case, it was never clear if it
made much sense. wxAndroid would be the port I personally would most love to see
but it requires a big effort and in spite of having been discussed several times
nothing much has happened.

I think writing new ports -- or maintaining and improving the existing ones --
is much simpler now than it used to be because of the clear definitions of the
classes API (for the most part anyhow), more clear documentation and the unit
tests allowing to automatically check the code correctness. And working on your
own port is very rewarding and (at least in my, perhaps atypical, opinion) a lot
of fun so if you're looking for a fun open source project for 2012, you could do
worse than choose working on wxSomethingOrOther!

[wxPalmOS]: https://trac.wxwidgets.org/changeset/70345
[wxMGL]: https://trac.wxwidgets.org/changeset/70353
[DirectFB]: http://www.directfb.org/
