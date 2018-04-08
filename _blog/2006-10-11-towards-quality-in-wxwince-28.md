---
title: Towards quality in wxWinCE 2.8
date: '2006-10-11T10:17:00.000Z'
author: ABX
modified_time: '2006-10-11T20:20:22.390Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-116056300879578857
blogger_orig_url: http://wxwidgets.blogspot.com/2006/10/towards-quality-in-wxwince-28.html
---

The most mature ports of our toolkit (wxGTK, wxMSW and wxMac) are nearly equally
advanced in terms of features. The development on them is "easy" - they all have
the same screen sizes, keyboards, pointing devices, and sounds so once a wrapper
around their native API is in place, the ports can share a common wxWidgets
infrastructure for events, placement of controls etc.

A few releases earlier we started work on a new family of ports that are
increasingly demanded by the market: handhelds, phones and PDAS.

wxWinCE is the name given to wxMSW when compiled on Windows CE devices. We have
a dedicated section in our manual about this port. Are you a wxWinCE user? What
do you miss most? When and how do you use `#ifdef __WXWINCE__` in your code? Do
you have some own improvements to this port? Please share any opinions and
findings about the current state of the wxWinCE port on wx-dev and (for bugs and
patches) the SourceForge trackers, and let's make it better together for future
releases.
