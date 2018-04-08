---
title: 'GSoC 2014 summary: wxX11/Univ improvement project'
date: '2014-09-23T17:56:00.000Z'
author: Vadim Zeitlin
tags:
- progress
- gsoc
modified_time: '2014-09-23T17:56:17.283Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-5064667232920894844
blogger_orig_url: http://wxwidgets.blogspot.com/2014/09/gsoc-2014-summary-wxx11univ-improvement.html
---

The work of Sun Boxiang on improving wxUniv and notably wxX11 port has been
merged into the trunk. This was mostly a bug fixing project and as the result
of, many more unit tests now pass in wxX11 test suite than before, we're down to
"only" 16 failures in 539 tests compared to 80 out of 308 before the project
beginning. One new feature also implemented during this project is the new
implementation of `wxClipboard` for X11. See [Sun's summary] of his work for
more details.

Unfortunately there still remains quite a bit of work to be done before wxUniv
can really be considered to be ready for general use, but at least know we know
better what is missing or broken. In wxX11, there is some major work to be done
on event loop code refactoring, to allow reusing the same logic as for the other
Unix ports. We should probably also switch to using Cairo instead of the old
style X11 drawing functions. And at wxUniv level, we really need a better theme
with nicer appearance.

Unfortunately we, the current wxWidgets developers, just don't have any
possibility to work on it, so there is no time frame for any of the above, but
any contributions from people interested in using wxUniv (e.g. for writing
applications with a particular appearance using a custom theme) would be very
welcome!

[Sun's summary]: https://groups.google.com/forum/#!msg/wx-dev/-z-LfabvZko/_f88vzwTuLsJ
