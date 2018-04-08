---
title: Some 3.0 release stats
date: '2013-11-11T21:00:00.000Z'
author: Vadim Zeitlin
tags:
- release
- stats
modified_time: '2013-11-11T21:00:53.439Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-5296697063992126102
blogger_orig_url: http://wxwidgets.blogspot.com/2013/11/some-30-release-stats.html
---

So wxWidgets 3.0 is [finally released]. We should have done it much sooner than
7 years after 2.8.0 release, but better late than never. And at least this gives
us a lot of statistics to analyse to see how much has changed since the last
major release. So let's do just this.

Using git log shows that, in total, there have been 19224 commits (or 7.6
commits per day on average), changing 10352 files (3680 of which are new) with 2
085 638 insertions and 1 767 670 deletions, i.e. about 320 000 new lines.
However these statistics are skewed by several big reorganizations that happened
during 3.0 development: we moved wxPython out of the main wxWidgets repository,
removed most of the old `contrib` directory and also converted the old
documentation in LaTeX format to Doxygen. So maybe restricting ourselves to the
code only, i.e. just `include` and `src` subdirectories is more fair. In this
case, there are "only" 13857 commits changing 5132 files (and 600 files were
added) with 926 608 insertions and 722 382 deletions i.e. more than 200 000 new
lines of code. Which, by the way, brings the total number of lines of code in
wxWidgets to more than 1.1 millions. To which should be added slightly more than
200 000 lines of documentation, more than 100 000 lines of the examples and, an
area which has been especially greatly improved since 2.8, more than 50 000
lines of unit tests. Of course, the numbers of commits and lines of code don't
mean everything and our numbers are not especially impressive anyhow, compared
to other well-known open source projects such as Linux kernel or Apache, but, if
nothing else, they show how active the project development was during all these
years even in absence of any new stable releases.

Besides wxWidgets code base, a lot of other things have changed since 2007. One
of them is that we're using Subversion instead of CVS now for version control.
Naturally, a possible conclusion could be that things haven't changed enough as
we still don't use Git for the official repository, even though I personally
haven't used anything else since several years and we have an up-to-date [Git
mirror] now. One of the problems of not using Git is that I don't have an
accurate count of contributors to wxWidgets. While `git shortlog` does give the
numbers of people who committed to svn, there are only about 25 of them, as
almost all patches submitted to us ended up being committed by me and Subversion
doesn't preserve the original authorship information. My personal estimation is
that there must have been around 300 external contributors since 2.8 (we have
about 220 of them mentioned in the change log but not everything is mentioned in
it). Huge thanks to all the people who have kept helping improving wxWidgets and
contributing back to community!

Looking forward, I have no idea when will 4.0 release happen nor what will it
contain. But we'll definitely make 3.2 release sooner than in 7 years, even if
it will probably mean less impressive numbers in its announcement post. In the
meanwhile, enjoy using wxWidgets 3.0 — I know that we will enjoy having finally
made it!

[finally released]: https://groups.google.com/d/msg/wx-announce/Ngt-fa-8Rkc/26GQ9zXgQxgJ
[Git mirror]: https://github.com/wxWidgets/wxWidgets
