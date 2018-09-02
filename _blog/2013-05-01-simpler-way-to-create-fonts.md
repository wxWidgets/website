---
title: Simpler way to create fonts
date: '2013-05-01T13:26:00.000Z'
author: Vadim Zeitlin
tags:
- font
- new
- api
modified_time: '2013-05-01T13:26:04.879Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-2851940048749753717
blogger_orig_url: http://wxwidgets.blogspot.com/2013/05/simpler-way-to-create-fonts.html
---

Just a quick note about the new and simpler way to create fonts in wxWidgets
2.9: in addition to a multitude of `wxFont` constructors taking various font
attributes, such as size, style, weight, face name and so on, there is now
another constructor, taking a single [wxFontInfo] object that combines all of
them together and allows to use the [named parameter idiom] for the font
creation.

It may seem non-obvious how can adding another constructor help with the problem
of having too many constructors, so here is a quick example to show how it does:
suppose you want to create an underlined, 12 point version of "Courier" font.
Here is how you'd do it currently:

```cpp
wxFont f(
    12, wxFONTFAMILY_DEFAULT, wxFONTSTYLE_NORMAL,
    wxFONTWEIGHT_NORMAL, true, "Courier"
);
```

And here is how you'd do it with the new constructor:

```cpp
wxFont f(wxFontInfo(12).Underlined().FaceName("Courier"));
```

Hopefully the advantages from the point of view of the library user are clear:

*   You don't need to specify the default parameters such as
    `wxFONTFAMILY_DEFAULT`, that you don't care about.
*   Each font attribute is clearly written out, while the meaning of true (which
    meant that the font should be underlined, by the way) was hardly obvious in
    the first form.
*   You can specify the parameters in any order instead of having to check the
    documentation every time.
*   Last and really least but still: you can create strike-through fonts (notice
    that they are only supported under MSW and GTK currently) using the new
    constructor using the natural `Strikethrough()` syntax, while this wasn't
    supported at all with the old constructor.

From our, i.e. developers, point of view, there is one extra important
advantage, related to the last point: if support for a new `wxFont` attribute is
added later, this way of creating fonts will be easy to extend to support it.

So my advice is to use `wxFontInfo` in all the new code using wxWidgets 2.9. The
old constructors are not going anywhere and can still be used (except for the
one taking `int` flags which was added for 2.9.4 and now removed to avoid
ambiguities with the other existing constructors), but there is no reason to
prefer them to the new one.

[wxFontInfo]: https://docs.wxwidgets.org/trunk/classwx_font_info.html
[named parameter idiom]: http://www.parashift.com/c++-faq/named-parameter-idiom.html
