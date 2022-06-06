---
title: "wxWidgets Roadmap"
---

## Understanding wxWidgets development process

First of all, it is useful to know that wxWidgets has stable release branch and a development branch. The stable branch preserves both API and ABI (binary) compatibility between all releases in the same series while the development branches may (and, while, rarely, sometimes do) break API and don't attempt to preserve the ABI at all.

Because of compatibility constraints, the releases in the stable branch generally only add bug fixes and while sometimes new features are also back ported from the trunk (development branch) to them, there are no particular plans for adding new features to stable. So this page describes only the features planned for the next development releases and the next stable release which be done after them.

Please notice that all dates given in the roadmap are ''very'' tentative. Due to the nature of open source projects there is no warranty that developers have enough time to make things happen as planned. Being a purely voluntary effort, wxWidgets development doesn't always advance as quickly as we'd like it too -- but your contributions are welcome to speed it up!

## Current stable branch: 3.0.x

The latest stable release, 3.0.5, was released on April 25th, 2020. We probably will make at least one other bug fix release in the 3.0.x series, which started with 3.0.0 back on November 11th, 2013.

## Development branch and 3.2

New development happens on 3.1 branch. The latest version is 3.1.7, released
on June 6, 2022. This is the final release in 3.1.x series and the next
planned release is 3.2.0 in July 2022, which will start the new stable 3.2
branch.

## Further plans

We don't have any well-defined for 4.0 release yet.

## Wishes

The following items are currently not planned because we don't have the possibility to work on them but would be great to have:

 * wxAndroid port.
 * Add more functionality to wxiOS port.
 * wxWinRT port.

Please contact us if you'd like to work on any of these projects -- or perhaps fund their development.
