---
title: Dropping Carbon support under OS X
date: '2016-01-21T22:10:00.001Z'
author: Vadim Zeitlin
tags:
- osx
- ports
- poll
modified_time: '2016-01-21T22:10:31.896Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-3847890311539006628
blogger_orig_url: http://wxwidgets.blogspot.com/2016/01/dropping-carbon-support-under-os-x.html
---

We would like to remove the old Mac OS X port using Carbon in the upcoming 3.1.0
release because we think nobody should be using it any longer (and we definitely
know that nobody building 64 bit applications does because Carbon just doesn't
exist in 64 bits) and it would make things simpler for us. But "should" and "is"
are different things and if there are more than a handful of people who are
still using Carbon and can't migrate to wxOSX/Cocoa port (I'd like to know
why!), but, at the same time, still plan to update to 3.2 in the observable
future, we could reconsider this. So if you'd like Carbon to continue to be
supported, please let us know, in the comments here or on the mailing list.
Thanks!
