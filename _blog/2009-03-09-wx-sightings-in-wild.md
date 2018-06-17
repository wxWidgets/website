---
title: wx Sightings in the Wild
date: '2009-03-09T22:38:00.004Z'
author: Vadim Zeitlin
modified_time: '2009-03-09T23:46:46.103Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-5444578877601388775
blogger_orig_url: http://wxwidgets.blogspot.com/2009/03/wx-sightings-in-wild.html
---

I've just discovered (please don't laugh as apparently everyone else made this
discovery [a year] or at least [half a year] ago but better late than never) a
nice solution for synchronizing files between different machines called
[Dropbox]. For those of you who are as ignorant as me, it's basically a way to
transparently rsync files (up to 2GB for free) with Amazon S3 storage. The
transparent part is nice as it means that you just run a daemon monitoring the
dropbox directory in an efficient way (using [inotify] under Linux and, my
guess would be, using [ReadDirectoryChangesW()] under Windows) and don't have
to manually commit and update your files as I was doing so far, using a central
CVS server (from which I'm slowly moving to an [hg] one). And, unlike CVS,
Dropbox also provides a nice way to access your files from any
JavaScript-enabled browser (which is more convenient than hg web interface but
then it's not at all meant to do the same thing).

<img src="dropbox_wx.png" class="img-fluid" alt="Dropbox using wxWidgets">

The only problem with Dropbox is that the daemon part of their product is not
open source. This is really a pity but it also explains why I started looking at
its internals at all -- only to discover that it is written using wx, more
precisely wxPython. It's not the most demanding GUI application in existence but
it's still nice to see that an application used by many (how many? I don't know
but judging from amount of stuff written about it on the web this must be one of
the most widely used wx applications in existence) people is written in wx and
apparently nobody complains about its GUI.

So while I'll probably mostly continue to use hg myself, I'll certainly
recommend it to my less DVCS-inclined friends and relatives. And if any of the
readers of this blog want to try it out, don't hesitate to use my [affiliate
link] to register and get extra 250MB of space for both you and me.

[a year]: http://www.techcrunch.com/2008/03/11/dropbox-the-online-storage-solution-weve-been-waiting-for/
[half a year]: http://arstechnica.com/software/news/2008/09/how-dropbox-ended-my-search-for-seamless-sync-on-linux.ars
[Dropbox]: http://www.getdropbox.com/
[inotify]: http://en.wikipedia.org/wiki/Inotify
[ReadDirectoryChangesW()]: http://msdn.microsoft.com/en-us/library/aa365465(VS.85).aspx
[hg]: http://www.selenic.com/mercurial/
[affiliate link]: https://www.getdropbox.com/referrals/NTcyNDYwMjk
