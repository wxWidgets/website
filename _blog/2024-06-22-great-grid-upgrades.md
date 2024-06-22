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

<img src="https://private-user-images.githubusercontent.com/7704771/334199918-6189e9b2-b5b7-491a-9972-b69f6c442f60.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTkwNjY2MTYsIm5iZiI6MTcxOTA2NjMxNiwicGF0aCI6Ii83NzA0NzcxLzMzNDE5OTkxOC02MTg5ZTliMi1iNWI3LTQ5MWEtOTk3Mi1iNjlmNmM0NDJmNjAucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDYyMiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA2MjJUMTQyNTE2WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YjIyOTk0NTUzZjY4ZWViNTdkMGY2MzZiM2IzZjY2Njg1MmNkNjg1NTdlMzQyYThkM2UwOWU3YWVmNTYyYmQwNyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.cjpHAXizmJnHn23QQP_iyjP5-jZr8WYaTuxBClv6r3g" class="img-fluid" alt="Screenshot of wxGrid using overlay selection under Linux">

and macOS, in dark mode:

<img src="https://private-user-images.githubusercontent.com/146917/338008274-dab0b9cb-b43b-4248-b80f-2bcad89a5c9e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTkwNjY2MTYsIm5iZiI6MTcxOTA2NjMxNiwicGF0aCI6Ii8xNDY5MTcvMzM4MDA4Mjc0LWRhYjBiOWNiLWI0M2ItNDI0OC1iODBmLTJiY2FkODlhNWM5ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYyMlQxNDI1MTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wYzZmYTMwOTRhYzYxNjM3Y2M0MDQ0ODEwYjk0ZDdjM2YxODg5Nzc2YWY0MmY2ZGY3NTY0ZWJlYTAxNDc4NWRiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.WonblUXwUvmp_xb9JfmncYNWpGZjxqtPnqExCrqtuVU" class="img-fluid" alt="Screenshot of wxGrid using overlay selection under macOS">

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
