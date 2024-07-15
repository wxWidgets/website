---
title: "Great Grid Upgrades"
date: 2024-06-22
comments: true
tags: a11y, grid
---

There have been a couple of changes to `wxGrid` in wx master that are
important enough to deserve their own blog post.

First of all, Dietmar Schwertberger has implemented basic accessibility
support for it (see [#24368][24368]), which makes it usable when using a
screen reader.

Dietmar has also enhanced `wxGrid` in other ways, by implementing
drag-resizing its row and column label windows ([#24362][24362]) and making
several improvements to row/column reordering (see [#24303][24303],
[#24363][24363], [#24619][24619]).

And, second, Ali Kettab has modified selection drawing to use much nicer
"overlay" effect instead of simply changing the background colour
(see [#24561][24561]), here is how it now looks under Linux:

<img src="/blog/2024/06/22/great-grid-upgrades/grid_linux.png" class="img-fluid" alt="Screenshot of wxGrid using overlay selection under Linux">

and macOS, in dark mode:

<img src="/blog/2024/06/22/great-grid-upgrades/grid_mac.png" class="img-fluid" alt="Screenshot of wxGrid using overlay selection under macOS">

Of course, as with any changes, there is always a possibility that the new
features could have changed the existing behaviour, even if we are not aware
of any incompatible changes right now, so if you use grids in your
application, please check how they work with the latest wx master and let us
know about any regressions!

[24303]: https://github.com/wxWidgets/wxWidgets/pull/24303
[24362]: https://github.com/wxWidgets/wxWidgets/pull/24362
[24363]: https://github.com/wxWidgets/wxWidgets/pull/24363
[24368]: https://github.com/wxWidgets/wxWidgets/pull/24368
[24561]: https://github.com/wxWidgets/wxWidgets/pull/24561
[24619]: https://github.com/wxWidgets/wxWidgets/pull/24619
