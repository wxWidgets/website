---
title: "wxWidgets Roadmap"
---

## Understanding wxWidgets development process

First of all, it is useful to know that wxWidgets has stable release branch and a development branch. The stable branch preserves both API and ABI (binary) compatibility between all releases in the same series while the development branches may (and, while, rarely, sometimes do) break API and don't attempt to preserve the ABI at all.

Because of compatibility constraints, the releases in the stable branch generally only add bug fixes and while sometimes new features are also back ported from the trunk (development branch) to them, there are no particular plans for adding new features to stable. So this page describes only the features planned for the next development releases and the next stable release which be done after them.

Please notice that all dates given in the roadmap are ''very'' tentative. Due to the nature of open source projects there is no warranty that developers have enough time to make things happen as planned. Being a purely voluntary effort, wxWidgets development doesn't always advance as quickly as we'd like it too -- but your contributions are welcome to speed it up!

## Current stable branch: 3.2.x

The latest stable release is 3.2.2, released on 2023-02-08. This is the third release in the 3.2 branch, started with 3.2.0 on 2022-07-07, and will be followed by a few more releases preserving API _and_ ABI compatibility, next of which will probably happen in the summer of 2023.

## Development branch and 3.3

New development happens on the master branch. There are no concrete plans for the next release in this branch yet.

## Old stable branch: 3.0.x

The latest release in the previous stable branch, 3.0.5, was released on April 25th, 2020, and is compatible with 3.0.0 released back on November 11th, 2013.

## Further plans

We don't have any well-defined for 4.0 release yet.

## Wishes

The following items are currently not planned because we don't have the possibility to work on them but would be great to have:

 * wxAndroid port.
 * Add more functionality to wxiOS port.
 * wxWinRT port.

Please contact us if you'd like to work on any of these projects -- or perhaps fund their development.
