---
title: "X11 FAQ"
---

See also [top-level FAQ page](/docs/faq/).

### List of questions in this category</a>

*   [What do I need to compile wxX11?](#needed)
*   [What features are missing or partially implemented?](#missing)

<a name="needed"></a>

### What do I need to compile wxX11?

For desktop compilation, you only need X11 (not Xt, GTK+ or any other widget
set). For embedded use, Tiny-X should work fine too. There is incomplete
support for Microwindows (the Nano-X API).

<a name="missing"></a>

### What features are missing or partially implemented?

The following classes and features are not yet implemented: wxSpinCtrl,
wxSocket, wxToggleButton, clipboard classes, drag and drop classes,
tooltips.
