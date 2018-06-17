---
title: Cleaning patches for the review
date: '2011-08-20T12:03:00.002Z'
author: Vadim Zeitlin
tags:
- brief
- developer
modified_time: '2011-08-20T12:32:27.279Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-2759283444405219833
blogger_orig_url: http://wxwidgets.blogspot.com/2011/08/cleaning-patches-for-review.html
---

Unfortunately (and, as usual, for historical reasons) we keep quite a few
auto-generated files in wxWidgets sources repository, for example configure
(created by autoconf), a lot of `setup.h` files all generated from the master
`setup_inc.h` template using a simple `sed` script and also tons of makefiles
(created by [bakefile]).

One of the many reasons this is inconvenient is that changes to these files get
in the way when reviewing patches. But luckily, it's simple enough to fix this,
at least if you're using a Unix system with [patchutils] on it. It's enough to
execute this command:

    filterdiff -x '*/*.vcproj' -x '*/*.dsp' -x configure -x \
      '*/makefile.*' -x '*Makefile.in' -x setup.h.in \
      -x include/wx/msw/wince/setup.h -x '*/setup0.h' \
      some-wx-patch.diff > some-wx-patch-clean.diff

The command is actually not difficult to write but it is long and it's easy to
forget something (as I just did for not the first time when retyping it) so I
recorded it in a one-line script called [clean_patch] and now you (and I) can
simply do this instead:

    ./misc/scripts/clean_patch some-wx-patch.diff > some-wx-patch-clean.diff

If you add any new files, any new `wxUSE_XXX` constants or modify
`configure.in`, please remember to clean your patches up. The clean patches are
much more pleasant to review and easier to merge, even if there were other
changes to the auto-generated files in the meanwhile.

[bakefile]: http://www.bakefile.org/
[patchutils]: http://cyberelk.net/tim/software/patchutils/
[clean_patch]: http://svn.wxwidgets.org/viewvc/wx/wxWidgets/trunk/misc/scripts/clean_patch
