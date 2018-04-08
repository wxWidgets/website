---
title: Announcing the Great Rewrite
date: '2014-04-01T12:28:00.001Z'
author: Vadim Zeitlin
tags:
- javascript
- roadmap
modified_time: '2014-04-01T12:28:53.914Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-112498057017436393
blogger_orig_url: http://wxwidgets.blogspot.com/2014/04/announcing-great-rewrite.html
---

It has become increasingly clear during the last few years that the current
wxWidgets code base is simply too out of date for the present day connected,
mobile, cloud-based computing world. So, after a deep and careful consideration,
we have decided to launch a new project, wxWidgets 2020, which will allow us to
remedy this.

The major change to be done in the framework of this project is to switch the
implementation language of the library. Clearly, nothing worthwhile can be
written nowadays in anything other than JavaScript. While we unfortunately
wasted our chance to port wxWidgets to Java in the nineties and thus completely
missed the Java desktop revolution, we still can correct this by using
JavaScript which, as a language, combines the unparalleled [elegance] and
efficiency of Java with great scripting support (as obviously follows from its
name). JavaScript is clearly the language of the future as in addition to the
its [brilliant success] on the client side, it is now even displacing the
[pinnacle of software engineering] which is PHP on the server side, thanks to
amazing innovations such as reimplementation of the [best features] of Windows
3.1 in node.js. Moreover, by using JavaScript we will finally be able to
increase the visibility of wxWidgets by hopefully appearing more often in
security advisories, which was difficult for us so far due to the total lack of
support for XSS and CSRF in C++.

Of course, we, wxWidgets developers, take the backwards compatibility seriously
and so we have also thought of a couple of the current users of the library who
might have some existing C++ code. Luckily, migrating it to wxWidgets 2020
should be easy to do as you'd simply need to recompile it using asm.js which
will be proven to work flawlessly as soon as we test it. And if it ever doesn't,
there is always the fall back solution of continuing to run the existing code
unchanged inside a virtual machine running inside the web browser -- after all,
the modern hardware is largely fast enough to allow doing this, and it would be
a pity to keep these CPUs idle.

Finally, the most difficult aspect of this decision was, as usual, choosing the
name. After a long and agonizing discussions, we agreed on 2020 which gives us a
reasonable amount of time before the release (while releasing wxWidgets 3.0 did
take more than 6 years, we are confident that things will happen much faster now
that we have the [magic of JavaScript] at our disposal). And if we miss that
deadline, we can always pretend that the name was just a play on "Web 2.0" (only
twice as much). As you can see, we have thought of everything. Watch this space!

[elegance]: http://harmful.cat-v.org/software/_java/problem-factory.jpg
[brilliant success]: https://web.archive.org/web/20140226114606/http://javascriptads.com/
[pinnacle of software engineering]: https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/
[best features]: http://jlouisramblings.blogspot.fr/2010/12/differences-between-nodejs-and-erlang_14.html
[magic of JavaScript]: https://www.destroyallsoftware.com/talks/wat
