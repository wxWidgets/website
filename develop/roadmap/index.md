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

New development happens on 3.1 branch. The latest version is 3.1.5, released on April 14, 2021 and we plan to release one last 3.1.6 release in 3.1.x series in the beginning of 2022 with 3.2.0 hopefully following relatively soon.

One of the big planned changes for this 3.2 is better support for high DPI displays, but there are, of course, many, many other fixes and improvements in it as well.

3.2 will also finally drop support for very old legacy systems (such as Win9x platform) and compilers (MSVC6 and MSVC7).

The remaining things that we'd really like to do before 3.2 are:

 * Make sure public API of `wxBitmap`, `wxImageList` etc for scaled bitmaps is fully specified, implemented and documented. This is WIP and is being tracked [here](https://github.com/wxWidgets/wxWidgets/projects/1).

If possible, we'd also like to have the following relatively important features for 3.2:
 * ~~Replace `wxLocale` with a class changing the UI locale only as changing C locale is broken on macOS, unimplemented in iOS and is not the best thing to do under the other platforms anyhow.~~
 * Better keyboard input model, notably with full support for IME.
 * ~~Much improved wxQt port.~~
 * ~~wxAUI refactoring/rewrite with full support for dockable notebook pages.~~
 * Finish and merge `wxMaskedEdit` implementation. This will require providing support for filtering native controls input on all platforms which would be useful in its own right.
 * ~~Support for context-sensitive translations in `wxLocale`.~~
 * ~~Implementation of "frozen" columns and rows in `wxGrid`~~.
 * Improve support for window-modal and application-modal dialogs.

but if we can't implement them in time we'll release 3.2 without them.

## Further plans

We don't have any well-defined for 4.0 release yet.

## Wishes

The following items are currently not planned because we don't have the possibility to work on them but would be great to have:

 * wxAndroid port.
 * wxWinRT port.

Please contact us if you'd like to work on any of these projects -- or perhaps fund their development.
