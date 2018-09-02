---
title: Improving Inherently Important Internationalisation Issues
date: '2016-04-01T06:00:00.000Z'
author: Vadim Zeitlin
tags:
- new
- api
modified_time: '2016-04-01T06:00:22.758Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-7406966880085257252
blogger_orig_url: http://wxwidgets.blogspot.com/2016/04/improving-inherently-important.html
---

One of the lesser-known advantages of wxWidgets compared to many other libraries
is that, using its API, you can [centre] a window on the screen and set its
[colour] to [grey] without having to Americanise your programme. But, as natural
as this behaviour is, and in spite of agreeing to wxWidgets licence (the very
spelling of which should have been a sufficient hint), some users still
expressed their surprise in their dialogue with us and refused our advice to
accept using this flavour of the API. And so, to accommodate them, wxWidgets has
traditionally provided alternatives such as `Center()` method, `wxColor` class
and `wxGRAY` constant.

Admittedly, in practice this has been sufficient to avoid any problems for a
long time while still remaining true to wxWidgets historically British roots.
However, in addition to being British, wxWidgets was always mostly a European
effort and, besides, knowing that it was actually born in Edinburgh, it might
well end being [exclusively] European and [not British] at all in the near
future (but don't worry, even if the worst happens, we plan to continue
supporting British spelling for at least two more release cycles, in accordance
with the general backwards compatibility policy). Considering this, it seems
especially strange to have alternative American versions of the spelling, but no
attention being paid to the other European languages.

And now, after [releasing 3.1.0], it's finally time to do something about it as,
clearly, there are few unresolved issues of comparable importance left. To begin
with, I obviously had to add `wxCouleur` class which should undoubtedly help
with wxWidgets adoption in francophone countries. But adding just the French
variant would certainly be undiplomatic, so another pull request adds, in the
grand European tradition of Franco-German alliance, `wxFarbe`, and both of them
will be merged together to avoid any questions of precedence. Further, France
and Germany notwithstanding, I certainly don't plan to discriminate against
other countries but, in the usual spirit of Open Source, additions of
`wxColore`, `wxFarve`, `wxKleur` etc will have to wait until the appropriate
patches are submitted (luckily for them, Spanish users can, in the meanwhile,
already reuse the American variant, just as they already do with many other
words, e.g. burrito, for the classic American food).

Of course, nothing is ever as simple as planned and, while working on this, I
quickly realized that Greek might present some practical difficulties as UTF-8
support is still, even in 2016, not perfect on some of the legacy platforms
supported by wxWidgets, but it would be difficult to use `wxΧρώμαwithout` it. A
compromise solution that we're currently discussing would be to introduce a
`wxChroma` class right now and deprecate it by the time 3.2 is released as
Unicode support should really be widely available everywhere by then (3.2
release is currently planned for the early 2030-ies).

I do hope you will enjoy these changes, but, let's be honest, this is just the
beginning and we clearly still have a lot of work to do in this area. Fully
supporting colour internationalization is important, but it's just the first
step and we plan to go much further. Just imagine to be able to open a
`wxFenêtre` and choose a `wxStylo` for drawing on it and then, perhaps if you
live in Switzerland, create a `wxKnopf` as its child. The possibilities are
endless! Unfortunately, the same can't be said about our resources, so we count
on your help to make wxWidgets the best internationalized library of all time --
and we're looking forward to your [contributions]!

[centre]: https://docs.wxwidgets.org/3.1.0/classwx_window.html#a4a1819eeee3f2143cdde4f329ffde787
[colour]: https://docs.wxwidgets.org/3.1.0/classwx_colour.html
[grey]: https://docs.wxwidgets.org/3.1.0/brush_8h.html#a9fd61bfd0445d71e17e56d836098096f
[exclusively]: https://en.wikipedia.org/wiki/United_Kingdom_withdrawal_from_the_European_Union
[not British]: https://en.wikipedia.org/wiki/Scottish_independence_referendum,_2014
[releasing 3.1.0]: /blog/2016/02/an-unexpectedly-expected-release-310-is/
[contributions]: https://en.wikipedia.org/wiki/April_Fools'_Day
