---
title: "Goodbye Trac"
date: 2022-01-12
comments: true

---

After almost 15 years of using [Trac][1] as our bug tracker (thank you Trac
developers for providing the tool that was so helpful for us during all these
years!), we've just migrated all the tickets from it to [GitHub Issues][2].
Most of the existing issues, with the exception of the very old ones, have
kept their existing numbers, so instead of
`https://trac.wxwidgets.org/ticket/NNNNN` you can simply use
`https://github.com/wxWidgets/wxWidgets/issues/NNNNN` now and we will
probably put in place an automatic redirect from the former to the latter
soon. And to report new issues, please go to
[https://github.com/wxWidgets/wxWidgets/issues/new/](https://github.com/wxWidgets/wxWidgets/issues/new/)

[1]: https://trac.edgewall.org/
[2]: https://github.com/wxWidgets/wxWidgets/issues/

There are many advantages of using GitHub Issues instead of our own Trac
installation, e.g. GitHub web UI is easier to use and much faster. And you
also don't need to create, or use, a separate account, as was the case for
wxTrac. However this is also the main disadvantage of this change: you now
need to have a GitHub account in order to report issues in wxWidgets. We
hope that relatively few people will be negatively affected by this, but for
those who are, please post your bug reports to [our mailing lists][3] instead.

[3]: https://www.wxwidgets.org/support/mailing-lists/

And please also use the mailing lists to let us know if you encounter any
problems after this migration!
