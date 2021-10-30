---
title: "Roundup of the Recent Changes"
date: 2021-10-30
tags:
- changes
comments: true

---

A quick overview of the recent changes and improvements in wxWidgets: since
3.1.5, quite a few things have happened and this post provides a summary of
the last 6 months.

The most important one is the addition of [wxBitmapBundle class][1] class,
which allows to provide several versions of the same bitmap, including the
default (used at 100% DPI, i.e. without DPI scaling at all) and
high-resolution one (used at 200% DPI scaling) as well as more variants for
the intermediate scaling factors, if necessary, and let wxWidgets
automatically select the best version to use and switch between them if the
DPI scaling changes, as it happens when moving the window between displays
using different DPI. Note that the new API is 100% backwards-compatible with
the existing one, i.e. all the existing code will continue to work and if you
provide just a single bitmap, it will be upscaled to the expected size, just
as before. But now you can also easily provide your own high resolution
version to avoid the bitmaps in your application looking blurry in high DPI.
This already works today with `wxButton` (and all the derived classes),
`wxStaticBitmap` and `wxToolBar` and all the other classes using bitmaps will
support the new API in wx 3.1.6.

Moreover, as a side-effect of this work, it is now possible to use SVG images
everywhere where `wxBitmap` is used with [wxBitmapBundle::FromSVG()][2],
thanks to [Nano SVG][3] library integration.

[1]: https://docs.wxwidgets.org/trunk/classwx_bitmap_bundle.html
[2]: https://docs.wxwidgets.org/trunk/classwx_bitmap_bundle.html#ad7add757fd27af9ad000750cef9c61f9
[3]: https://github.com/memononen/nanosvg


The next big addition to the API is the [wxUILocale class][4], which provides
a new and more flexible way to get locale-specific information than the old
`wxLocale`. Notably, the new class doesn't rely on the -- quite naive, in
retrospect -- assumption that the standard C `setlocale()` function actually
works, which allows it to work correctly under the recent macOS, where C
locale cannot be used at all, due to bugs in Apple code. It also uses [BCP
47-like][4] identifiers for the locale instead of `wxLanguage` enum, which
allows it to cover all the languages supported by the OS and not just those
known to wxWidgets, and provides a new [CompareString() function][6] which
compares strings using language-specific rules. It is recommended to use this
class rather than `wxLocale` in all new code, especially for applications
targeting macOS, as using the old class results in a [bad bug][7] under macOS
10.15 or newer.

[4]: https://docs.wxwidgets.org/trunk/classwx_u_i_locale.html
[5]: https://www.rfc-editor.org/rfc/bcp/bcp47.txt
[6]: https://docs.wxwidgets.org/trunk/classwx_u_i_locale.html#ab8614302394aa5f3dafddd39fd2aeab7
[7]: https://trac.wxwidgets.org/ticket/19023


Other new features include:

- Add support for using native spell checking in `wxTextCtrl`.
- Add XRC handler for `wxStyledTextCtrl`.
- Implement support for undo/redo for `wxTextCtrl` in wxOSX.
- Add `wxImage::Change{Saturation,Brightness,HSV,Lightness}()`.
- Add `wxKeyEvent::IsAutoRepeat()`.
- Add `wxSpinCtrl::GetTextValue()`.

There have a few updates for the new compiler versions and other modernizations:

- wxWidgets headers have been updated to not produce any warnings when
  compiling in C++20 mode with gcc 11 and clang 12.
- MSVS 2022 is now supported.
- Variadic functions such as `wxPrintf()` and `wxLogXXX()` now support
  `std::string_view` arguments too.
- wxMSW uses (quite old) Winsock 2 by default rather than the (absolutely
  ancient) Winsock 1.

A few optimizations as well:

- `wxMBConv` was significantly sped up under Unix systems.
- Creating standard system fonts is now much faster in wxOSX.

And other than that, there were all the usual minor improvements and bug fixes:

- `wxMediaCtrl` in wxGTK now works when using Wayland too.
- Fix key event generation in `wxDataViewCtrl`.
- Improve handling printer settings in wxMSW and wxGTK.
- Fix mouse events when using touch events in wxGTK.
- Fix `wxDC::Blit()` when using RTL layout in wxMSW.
- Improve `wxSpinCtrlDouble` significant digits handling.
- Several bug fixes in the long-neglected wxUniv port.

That's all for this "brief" summary, please don't hesitate to try the new
features and let us know if you have any questions about them or if you find
any problems, so that they could be fixed before the upcoming 3.2.0 release.

Thanks in advance!
