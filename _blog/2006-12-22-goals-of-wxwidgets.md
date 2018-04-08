---
title: Goals of wxWidgets
date: '2006-12-22T16:58:00.000Z'
author: Vadim Zeitlin
modified_time: '2006-12-22T22:13:25.766Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-116682560566856840
blogger_orig_url: http://wxwidgets.blogspot.com/2006/12/goals-of-wxwidgets.html
---

A comment attached to the [last post] asked the question about what wxWidgets
goals are. I was initially quite surprised because the answer was so obvious to
me, but thinking a bit more about this I realized that we don't clearly answer
this question anywhere in the public documentation and so for someone not
following [wx-dev] mailing list the direction of wxWidgets development may
indeed seem mysterious. To help with understanding it, I'd like to briefly
explain where wxWidgets is coming from, what are the guiding principles for its
development today and what I hope it is going to be tomorrow. Please note that,
as anyone who _does_ follow wx-dev would know, we don't always agree about
everything and so what follows is just my personal point of view and while it
hopefully does overlap with that of the others -- at least for the past and
present parts -- I don't pretend to speak for everybody.

[last post]: /blog/2006/12/how-to-contribute-to-wxwidgets-guide/
[wx-dev]: http://dir.gmane.org/gmane.comp.lib.wxwidgets.devel

This disclaimer aside, let's start by looking at the current state of wxWidgets
and how did we get there. On the negative, and often mentioned, side, it's an
accretion of almost 15 years of development, by different people, some of which
have stopped contributing to the project since a long time. So it is not
surprising that there are some inconsistencies in the API (although we work hard
on ironing them out) and some components (notably those whose maintainers have
left) are not as good as one'd expect them to be. It is also true that
compatibility with [MFC] seemed much more important in the nineties than now and
this explains why wxWidgets has some superficial similarities to it, although it
has never been nor designed to be, an MFC clone. So it's true that this long
history resulted in some problems and we had to change quite a few things to fix
them -- even the [original name] of the library turned out to be a bad idea.

[MFC]: https://en.wikipedia.org/wiki/Microsoft_Foundation_Class_Library
[original name]: /about/name-change/

However, on the bright side, not everything we did during these 15 years was a
complete waste of time and, in addition to the accumulated historical luggage,
everything that we did right is in the wxWidgets codebase too. And this is quite
enough to allow people to create real life, professional complicated graphical
cross-platform applications -- which is, to answer the initial question, what
wxWidgets is about. To be more precise, the main goal is to allow the developers
to do everything they need to do without resorting to writing platform-specific
code: the "Write once, compile anywhere" principle. Of course, this goal is a
moving target which can never be quite achieved because developers discover more
and more things that they need to do with time as the new graphical environments
introduce new standards (use of gradients and animations in the GUI was not
exactly common when wxWidgets was started) but, still, I believe we're pretty
close to it -- and getting closer with every new release.

So wxWidgets primary goal is to allow creating sophisticated portable
applications without writing platform-specific code. This is not the only goal,
of course, but it's the most important one and so trumps all the others. For
example, wxWidgets could be more size efficient but this would be mostly
important for toy applications and not for the programs which are themselves of
reasonably important size. And so, while we'd be as glad to make wxWidgets
smaller as anybody else, this currently has a relatively low priority because
it's not very important from the main goal perspective. On a perhaps more
constructive note, this also explains why do we consider the differences in
behaviour of wxWidgets on different platforms important bugs: it's useless to
have the code which compiles on all platforms if it doesn't behave the same
everywhere during run-time.

But, to repeat, as important as this goal is, I think we're quite close to it
and have been there since a long time. However other things could really be
improved. Chief among them is the ease of use of wxWidgets: things have changed
a lot since its creation and, in particular, modern C++ doesn't have much to do
with C++ of the nineties. So it would be great to make wxWidgets evolve with the
language and other standard C++ libraries. This would mean providing a more
modern API, removing the need for memory management completely (this is very
rarely a problem in wxWidgets even now, as most of the objects are owned by the
library anyhow, but it would be nice to make this more explicit) and improve
error handling by using exceptions. We should also rely more on the standard C++
library and [Boost] instead of implementing all various useful but not directly
GUI-related classes on our own as we had to do in the past (as not implementing
them would have conflicted with our primary goal whereas now, when such classes
are available from elsewhere, it doesn't any more). This, and much more, is in
our plans for [wxWidgets 3].

There are certainly a lot of other tactical goals. The fact that I didn't
mention at all fixing the bugs or improving the documentation doesn't mean that
these goals are not important but just that they are obvious and I don't want to
make this article even longer than it already is by stating the obvious. The
point of this post was to just say that strategically, our main goal always was
and remains making wxWidgets suitable for real-life portable applications
development and, in addition, creating a new, modern, API for wxWidgets 3 in
(hopefully near) future.

[Boost]: http://www.boost.org/
[wxWidgets 3]: http://www.wxwidgets.org/wiki/index.php/Development:_wxWidgets_3
