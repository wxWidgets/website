---
title: "Motif FAQ"
---

See also [top-level FAQ page](/docs/faq/).

### List of questions in this category

*   [What version of Motif do I need?](#versiob)
*   [What features are missing or partially implemented?](#missing)
*   [Why are windows are not refreshed properly until I resize them?](#refresh)

<a name="versiob"></a>

### What version of Motif do I need?

You will need version 1.2 or above. Version 2 should also be fine. Some people
have had a positive experience with [Lesstif](http://lesstif.sourceforge.net/),
a free Motif clone. (Note from Julian Smart - I use the Linux version of
MetroLink Motif 1.2.4).

<a name="missing"></a>

### What features are missing or partially implemented?

The following classes are not yet implemented: wxSpinButton, wxCheckListBox,
wxJoyStick, wxGLCanvas.

The following classes are not likely to be implemented because there is no
sensible equivalent on Motif: wxMiniFrame, wxTaskBar.

These features are not yet implemented:

* Clipboard and drag and drop support are currently under development.
* Support for selection of specific visuals.
* Wide character support (but when Unicode is supported under Windows, this
  support will be relatively easy to add).
* Configurable colour/font settings (they are currently hard-wired in
  wxSystemSettings).
* A help system (please use wxHelpController and Netscape instead). An HTML
  widget and help system is in preparation.

<a name="refresh"></a>

### Why are windows are not refreshed properly until I resize them?

Very occasionally you can experience this glitch, probably because sometimes the
window tries to resize and repaint itself before the final size is known. The workaround
is to add code like this after window creation and initialization:

    #ifdef __WXMOTIF__
        wxNoOptimize noOptimize;
        window-&#62;SetSize(-1, -1, w, h);
    #endif
