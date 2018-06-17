---
title: Surreptitious Submodule Switch
date: '2017-11-12T16:53:00.000Z'
author: Vadim Zeitlin
tags:
- git
- change
modified_time: '2017-11-12T16:53:13.692Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-6482695031173222877
blogger_orig_url: http://wxwidgets.blogspot.com/2017/11/surreptitious-submodule-switch.html
---

During the last couple of days, we've transitioned all the third party libraries
used by wxWidgets, such as libpng, libjpeg and so on, to use [Git submodules]
instead of just subdirectories in the main repository. If you don't use Git to
get the latest and greatest for the appropriate definition of "great" wxWidgets,
you don't need need to read further as it shouldn't affect you in any way except
for resulting in faster and more frequent updates to these libraries (but still
consider starting to use sources from Git to help us with testing!).

If you do use Git, you will notice that your next update, i.e. `git pull` or
`git fetch && git merge --ff-only origin/master`, will delete all files in
`src/{expat,jpeg,png,tiff,zlib}` directories. Do not be alarmed by this but do
run:

    git submodule update --init

to initialize and get the latest contents of all the submodules. This will,
unfortunately, take quite some time, and if you use a not too ancient version of
Git (2.8 or later), you should be able to speed the process up significantly by
doing:

    git fetch --recurse-submodules -j2

instead, where "2" could be replaced by any number up to 5 (higher would be
useless with only 5 submodules).

During subsequent updates, if you notice any change to one of the submodules,
you need to only rerun git submodule update (without the --init option) and it
will be much faster. Other than that, your use of wxWidgets Git repository
shouldn't have to change in any way, the only difference is now most of Git
commands won't recurse into submodules, at least by default, so git grep, for
example, won't find any matches in the subdirectories mentioned above by
default. However mostly the new behaviour is more useful, and you can use the
same `--recurse-submodules` option with a few Git commands to change it if
really needed.

Of course, if you do find any problems due to the switch to submodules or third
party libraries upgrades that have taken place together with it (we now use the
latest versions of all of them, notably jumping from libjpeg 6b released in 1998
to 9b, released in 2016), please let us know on the mailing lists, as usual.

[Git submodules]: https://git-scm.com/book/en/v2/Git-Tools-Submodules
