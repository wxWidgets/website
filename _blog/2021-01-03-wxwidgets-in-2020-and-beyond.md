---
title: "wxWidgets in 2020 and beyond"
date: 2021-01-03
tags:
- roadmap
comments: true
---

To keep up with the tradition, here is our slightly belated Happy New Year
post! We all hope that 2021 will be better than 2020 -- which is, admittedly,
not a very high bar to clear -- and we, in particular, also hope to finally
make wxWidgets 3.2.0 release this year, after successfully failing to do it in
2020 again.

This doesn't mean that nothing got done, however: in 2020 there were 2010
commits in the main wxWidgets repository from 88 contributors, changing 3375
files, and, beyond these statistics, we even managed to make not one but two
releases (3.1.4 and 3.0.5).

As the result of all this work, we are close to making 3.1.5 which should be
the last release before 3.2.0 which will become the new stable version, after
3.0.0 released back in 2013. It will have too many enhancements and
improvements to list in this blog post without turning it into a book, but
just for the changes specifically in 3.1.5, I'm very glad that we will finally
have a built-in way to use HTTPS from wxWidgets when [Tobias' pull request][1]
is merged.

[1]: https://github.com/wxWidgets/wxWidgets/pull/977

Of course, we already know that we won't have everything that we'd like to
have in wx 3.2. In particular, this version unfortunately won't support GTK 4
as its API is so incompatible with the previous GTK versions that huge parts
of wxGTK would have to be rewritten and we currently don't have any resources
for this (but then wxWidgets was always based on the efforts of volunteers, so
there is always hope that someone could contribute GTK 4 support). It will,
however, have better support for modern Linux systems with Wayland and EGL
improvements and also support for the latest macOS systems, including macOS 11
Big Sur and M1 ("Apple Silicon") architecture.

Thanks for reading and happy New Year once again!

Vadim Zeitlin, on behalf of wxWidgets development team.
