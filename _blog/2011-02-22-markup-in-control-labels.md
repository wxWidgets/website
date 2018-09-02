---
title: Markup in control labels
date: '2011-02-22T18:12:00.007Z'
author: Vadim Zeitlin
tags:
- wx3
- new
- progress
- brief
modified_time: '2011-02-27T12:55:15.765Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-2793211197807135600
blogger_orig_url: http://wxwidgets.blogspot.com/2011/02/markup-in-control-labels.html
---

As I'm hopelessly out of date with my planned updates anyhow, I've decided to
write a brief post about a nice new feature that was [recently] [added] [to]
[wx] instead.

[recently]: https://trac.wxwidgets.org/changeset/67065
[added]: https://trac.wxwidgets.org/changeset/67066
[to]: https://trac.wxwidgets.org/changeset/67067
[wx]: https://trac.wxwidgets.org/changeset/67069

This feature is the possibility to use Pango-like [markup] in some wxWidgets
controls, notably [wxButton] and [wxStaticText]. This means that it is now
possible to write:

```
wxButton *b = new wxButton(parent, wxID_ANY, "");
b->SetLabelMarkup("<span size='x-large' color='blue'>Big</span> <b>bold</b> button");
```

and it will indeed behave as expected:

<img src="markup_btn_msw.png" class="img-fluid" alt="MSW button with markup">
<img src="markup_btn_osx.png" class="img-fluid" alt="OSX button with markup">
<img src="markup_btn_gtk.png" class="img-fluid" alt="GTK button with markup">

Currently this works for `wxButton` in all major ports and for the wxGTK and the
generic versions of `wxStaticText` (that can be used under all platforms if this
feature is important). The plan is to extend this to more controls later, e.g.
`wxCheckBox`, `wxRadioButton` or `wxStaticBox` and maybe even allow using markup
for the items of controls with multiple items such as `wxListBox` or
`wxComboBox`. There is however no definite schedule for this so if anybody is
interested in using markup with these controls, please consider helping with
implementing it, it should be pretty simple to do by simply copying `wxButton`
behaviour.

[markup]: http://library.gnome.org/devel/pango/unstable/PangoMarkupFormat.html
[wxButton]: https://docs.wxwidgets.org/trunk/classwx_button.html
[wxStaticText]: https://docs.wxwidgets.org/trunk/classwx_static_text.html
