---
title: Playing with DVCS for wxWidgets
date: '2009-07-25T12:11:00.004Z'
author: Vadim Zeitlin
tags:
- dvcs
- hg
- git
modified_time: '2009-07-25T13:07:19.734Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-4545676441702804545
blogger_orig_url: http://wxwidgets.blogspot.com/2009/07/playing-with-dvcs-for-wxwidgets.html
---

Just wanted to share my recent experiences with trying to use a [DVCS] for wx. I
was interested in this because I often need to test some change on multiple
platforms before committing it and currently what I do is to do the modification
in a svn checkout on one machine, test it there, then make a patch, apply it to
svn checkout on another one, test there, then commit from the first one, undo
the patch on the other one and update from there -- this is not really
complicated but certainly involves many more steps than I'd like. And this is
the simple case when the patch actually works, if it doesn't and if you need to
make changes to it, it's too easy to get entangled in multiple copies of the
patch and get lost.

[DVCS]: https://en.wikipedia.org/wiki/Distributed_version_control

On the other hand, I'm using since some time [Mercurial] (also known as hg) for
my own projects and enjoy its simplicity and how easy it is to create a separate
clone of the repository for the changes. It's also so much faster than svn for a
lot of common operations such as viewing the file history, annotating it or
finding a given log message (which it can do by keyword, unlike svn). So I
decided to try using [hgsubversion], a bi-directional Mercurial-SVN gateway, for
wx.

[Mercurial]: https://www.mercurial-scm.org/
[hgsubversion]: https://bitbucket.org/durin42/hgsubversion/wiki/Home

Unfortunately it didn't go great. Importing wx tree took a long time (~30 hours)
and ran out of memory a few times as reported [here], resulting in the process
being killed by Linux [out of memory killer] (one of few times I've been
actually glad to have it happen as a process consuming 8GB of memory without any
good reason does deserve to be killed). Of course, this is a one-time only
operation and so it doesn't matter much but, still, it was hardly a great start.
More importantly, though, working with this setup turned out to be inconvenient
in practice because cloning the entire wx tree does take time, even with hg
efficiency, especially to a different machine. It can hardly be otherwise
considering that the full cloned tree is 1.7GB -- it's not that much in absolute
as svn checkout of the trunk (only) is 330MB, while hg tree contains all project
versions and not just the latest one, but it's still a lot and, as we'll see
below, it can be much better.

[here]: http://bitbucket.org/durin42/hgsubversion/issue/110/memory-leak
[out of memory killer]: http://linux-mm.org/OOM_Killer

An alternative could have been to use Mercurial named branches but they are not
meant for the private changes, i.e. using them would leave traces in svn history
which is really not ideal (these branches are for my own personal testing and I
do not want the others to see how many mistakes I made while doing a trivial
change!). Or there is Mq extension which is supposed to be one of the greatest
things about Mercurial but unfortunately I could never get used to it and it
just doesn't seem right to me to use what is basically an orthogonal VCS on top
of the one which is normally used. And the patch queue is local to each
repository so with it I'd basically be reduced to copying patches around again.
Maybe the most promising extension is the [pbranch] one, it really does seem to
allow to do what I need. But it's non-standard, I'm unsure about its further
prospects and it seems rather complicated thus negating the main advantage of
hg: its simplicity.

[pbranch]: http://arrenbrecht.ch/mercurial/pbranch/

So, with a heavy heart, I turned to another popular DVCS: [Git]. I think it
could be described as Mercurial evil cousin. While Mercurial is as easy to use
as it could be and has great documentation, Git is almost perversely
complicated. It has concepts which are particular to it only (can anyone really
explain what purpose does the index existence serve except for confusing new
users and occasionally tripping more experienced ones?). Its included
documentation is only useful if you already know very well what you are doing.
It allows (I think it encourages, really) you to make errors -- which is, of
course, fine, as there are 3 or 4 different ways to undo them. Of which 2
(different ones, depending on situation) make things even worse. It seems to
enjoy reusing commands commonly used in other VCS to do something different.
Even the commands which seem to do what you'd expect (e.g. pull and push) do
not. Moreover, they are not really even opposites of each other. So you never
know what a command with a simple name does and you never risk finding any other
commands without reading half a dozen of git tutorials. And even then you have
to remember that the equivalent of `hg histedit` is `git rebase -i` (with rebase
in general doing something completely different, of course). And using git means
having one extra letter to type for every command compared to hg!

[Git]: https://www.git-scm.com/

So ever since I found Mercurial I never seriously considered using Git. While I
agree that Git is more powerful, having 37 different ways to shoot oneself in
the foot is not really what I'm looking for in my VCS. Unfortunately, Git does
have one killer feature: local branches. This is exactly what I need when
working with wx svn and is close to what Mercurial pbranch extension does.
Except, in this particular case only, Git is actually simpler. And faster.

Speaking about faster: importing wx svn using git-svn took "only" 12 hours. And
never consumed any appreciable amount of RAM. And, a really pleasant surprise,
the git repository of wx is only 400MB -- that is hardly bigger then svn
checkout of a single trunk revision (while git repository, like the hg one,
contains all versions of all branches in the project) and more than 4 times
smaller than hg. In spite of myself, I was impressed. Think about it: this means
that if you have both 2.8 and trunk checkout of wx you actually save 200MB of
disk space by using Git -- while gaining all the advantages of having the entire
project history locally (which is the reason for which switching between 2
branches in git is practical but using svn switch is not). And if, like me, you
have 4 branches checked out (2.8, 2.9.0 (well, hopefully not for much longer,
this one), SOC2009_FSWATCHER and trunk), the space savings becomes really
noticeable (almost 1GB).

But it gets better: "cloning" (creating a new local branch) with git is
instantaneous. Switching to another existing branch (e.g. 2.8 one) is much
faster than with hg. Even updating from svn seems to be faster, although here
the difference is not really significant. Using the usual `hg pull` instead of
`git svn rebase` is significant advantage of Mercurial though -- but
unfortunately it's easier to get used for idiosyncratic syntax (yeah, and
committing is done with `git svn dcommit` -- I'm sure there is a logical
explanation for this extra "d", too...) than to slowness.

So I'm using git as my svn client for now (all of 2 days). And I'm ashamed to
say I love it. Of course, hg is great compared to svn too. But I can't
realistically use it with svn right now and I can do it with git. And so I don't
have to jungle with patches any more. And the coloured output of `git diff` is
so much easier to read than `svn diff` (and even than `hg diff` with colour on,
as git also nicely highlights white space errors). Now if only I didn't forget
to use that `--cached` option half of the times...

To summarize, I wholeheartedly recommend using Git as a client for wx svn
repository. If there is any interest in it, I could push my repository to
[Github] (it's bigger than their 300MB limit for free plan but I hope they could
make an exception). But even if you need to run git-svn yourself, it's still
great to have a local git repository if you plan on submitting (or even just
having them privately) patches to wxWidgets. Of course, any DVCS could be used
to have this extra freedom of working with wx in any way you want. But while I
still hope hg implements local branches in the future and hgsubversion improves
(there doesn't seem to be much point in hoping that git interface becomes
logical), for now Git is the best choice of a DVCS to use with wxWidgets.

[Github]: https://github.com/
