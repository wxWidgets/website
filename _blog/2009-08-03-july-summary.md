---
title: July Summary
date: '2009-08-03T00:00:00.002Z'
author: Vadim Zeitlin
tags:
- progress
modified_time: '2009-08-03T00:31:21.525Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-3564192630961162528
blogger_orig_url: http://wxwidgets.blogspot.com/2009/08/july-summary.html
---

Another month, another post about progress in wxWidgets development. The most
important recent change was covered by a [separate post] recently and I won't
return to it but just say that wxLog is much nicer to use now in general and
it's possible to use it effectively in multi-threaded programs, unlike before.

[separate post]: /blog/2009/07/blogging-about-logging/

Other changes were mostly bug fixes (including a few important ones in wxSocket,
but unfortunately it still [seems broken] under Mac, so I'll have something to
announce the next month :-) and minor feature improvements. A [huge patch]
globally replacing all occurrences of `_T()` macro with `wxT()` was applied so
we finally got rid of one nastiness in wx code which is always nice (`_T()` is
still available for user code for compatibility reasons though). And I also
started working on [wxInfoBar] but it isn't quite done yet so this will be
something for the next month again.

[seems broken]: https://trac.wxwidgets.org/ticket/11030
[huge patch]: https://trac.wxwidgets.org/ticket/10660
[wxInfoBar]: http://groups.google.com/group/wx-dev/browse_frm/thread/6b00b189ba75f22e#

Except for this the most exciting new development wasn't actually in wxWidgets
itself at all but outside of it when Ben Williams (AUI author) announced
[wxWebConnect] availability. I didn't have time to try it myself yet but it
definitely looks very promising and should allow to easily embed a modern HTML
rendering engine (Gecko in this case) in wxWidgets applications. This opens
quite a few possibilities, especially with the new features of HTML5 some of
which are already implemented in Gecko.

[wxWebConnect]: http://www.kirix.com/labs/wxwebconnect.html

As for the rest, as I can now [use git] as wxWidgets svn client, I also can use
[git shortlog] which makes writing summaries simpler, e.g. here is the number of
commits to the trunk per author:

1. Vadim Zeitlin (129)
2. Stefan Csomor (22)
3. Jaakko Salli (14)
4. Kevin Ollivier (4)
5. Mike Wetherell (3)
6. Vaclav Slavik (3)
7. Jouk Jansen (2)
8. Paul Cornett (1)
9. Robert Roebling (1)

So you can see that in addition to my own changes which I described above, some
work was done on OS X port and wxPropertyGrid. What can't be seen from here is
that there were also several changes on 2.9.0 branch and a lot of ones in the
topical GSoC branches.

Finally my script for analysing Trac statistics reports 109 new tickets and 67
closed ones of which 8 were reopened. So our goal of closing all the tickets
didn't advance much this month neither -- help with them would be welcome!

[use git]: /blog/2009/07/playing-with-dvcs-for-wxwidgets/
[git shortlog]: http://www.kernel.org/pub/software/scm/git/docs/git-shortlog.html
