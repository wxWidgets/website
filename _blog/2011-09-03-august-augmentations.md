---
title: August Augmentations
date: '2011-09-03T15:14:00.000Z'
author: Vadim Zeitlin
tags:
- progress
modified_time: '2011-09-04T12:05:24.749Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-8888115028197819068
blogger_orig_url: http://wxwidgets.blogspot.com/2011/09/august-augmentations.html
---

August has been a busy month this year, with a couple of new classes being
added and several minor enhancements to the existing ones as well. Even though
none of these changes is particularly major, they should hopefully be useful to
wxWidgets users, just as they were useful for me when working on my projects.
---

The first of the new classes is [wxBannerWindow]. As you can see from the
screenshot at that link, it is a particularly simple class as it is static in
appearance and basically doesn't do anything except providing some information
about the current window to the user and, mostly, just looking nice. Of course,
it was always pretty simple to do something like this with wxWidgets and
personally I had already done it a few times but having a standard class for
this makes using it even easier, especially as it can also be defined in the XRC
resources and so added to your existing dialogs very easily.

[wxBannerWindow]: https://docs.wxwidgets.org/trunk/classwx_banner_window.html

---

The second new class is actually not really a new class at all but a wrapper for
an existing one: [wxTreeListCtrl] is a _façade_ for [wxDataViewCtrl] which is
not nearly as flexible as the full wxDataViewCtrl class but is much easier to
use in a special yet common case when you just want to have a multi-column tree
control, optionally with icons and, also optionally, check boxes, in the first
column, like this:

<img src="wxtreelistctrl.png" class="img-fluid" alt="wxTreeListCtrl">

What you can't see on the screenshot is that the source code of the new
[treelist] sample is much simpler than that of the dataview sample. Of course,
this simplicity comes at a price: you can't have "infinitely" many items in this
control because it stores all of them internally. However if you have a control
with relatively few (not more than a couple of thousands) items, then this is
probably not a big problem and this control can be a simple alternative to
wxDataViewCtrl. And, of course, wxTreeListCtrl features are a union of those of
wxTreeCtrl and wxListCtrl and so it may also provide a simple solution if you're
currently using one of those controls but need the extra features (multiple
columns or hierarchical items) not available in it.

[wxTreeListCtrl]: https://docs.wxwidgets.org/trunk/classwx_tree_list_ctrl.html
[wxDataViewCtrl]: https://docs.wxwidgets.org/trunk/classwx_data_view_ctrl.html
[treelist]: http://svn.wxwidgets.org/viewvc/wx/wxWidgets/trunk/samples/treelist/treelist.cpp?view=markup

---

And then there were several enhancements to the existing classes:

*   Navaneeth [has contributed] a useful [wxTextCtrl::PositionToCoords()] method
    allowing to find the pixel coordinates of the given character in wxTextCtrl.
    This allows to show auto-completion window at the right position, for
    example.

*   [wxMessageDialog] and, hence, [wxMessageBox()], have gained support for
    wxHELP button. Beyond the ability to provide help in your message boxes this
    is significant because you can now have up to 4, instead of 3, as before,
    buttons in your message boxes. And as using [SetHelpLabel()] you can set
    arbitrary text for this button, it means you can now propose more choices to
    the user if really necessary (an advance warning: 4 is as high as it will
    go).

*   A new [wxTextEntry::AutoCompleteDirectories()] was added. Unfortunately,
    just as [AutoCompleteFileNames()], it is currently MSW-only. But at least on
    this platform it makes using controls used for entering directory names in
    them more convenient for the user. Moreover, [wxFilePickerCtrl] and
    [wxDirPickerCtrl] now call the appropriate completion function automatically
    for their integrated text control and so you don't even need to worry about
    not forgetting to do it yourself if you use one of those handy controls.

*   Another MSW-specific change is the addition of
    [wxTopLevelWindow::MSWGetSystemMenu()]. This function can be used to add
    items to the "system" window of Windows programs. Using it is inherently not
    portable but can still be useful even in cross-platform applications: for
    example, you could use it to add an "About" item to the system menu under
    MSW if your application doesn't have any normal menu bar. This is actually
    consistent with OS X where all applications have the standard "About" item
    in their "Apple" menu, whether they have a menu bar or not. Maybe in the
    future we will provide a higher level interface for this but for now this
    function can be helpful.

*   Some cleanup was done as well: `SetImageList()` and `AssignImageList()` now
    work consistently for all controls, as discussed in [this thread]. And
    `wxDataViewCtrl::GetSelection()` now works consistently in all ports, after
    the changes proposed [here] were implemented. New, more clear,
    [wxComboBox::IsTextEmpty()] and [IsListEmpty()] were added to replace
    `IsEmpty()` whose behaviour was inconsistent in different port. Finally,
    Stefan fixed long-standing issue with `Ctrl` vs `Cmd` keys confusion in
    wxOSX after [this discussion].

[has contributed]: https://trac.wxwidgets.org/changeset/68450
[wxTextCtrl::PositionToCoords()]: https://docs.wxwidgets.org/trunk/classwx_text_ctrl.html#2d976679d30dfd1ff0adb177b9537880
[wxMessageDialog]: https://docs.wxwidgets.org/trunk/classwx_message_dialog.html
[wxMessageBox()]: https://docs.wxwidgets.org/trunk/group__group__funcmacro__dialog.html#gf8a6b7e1e34eae82d3d75e3721298b26
[SetHelpLabel()]: https://docs.wxwidgets.org/trunk/classwx_message_dialog.html#85dd2dfd88baa9af9de185bae6642c0e
[wxTextEntry::AutoCompleteDirectories()]: https://docs.wxwidgets.org/trunk/classwx_text_entry.html#b02338d68d51f103551454298578851c
[AutoCompleteFileNames()]: https://docs.wxwidgets.org/trunk/classwx_text_entry.html#d40d7e35d8bb9c9ab8e4ffa1b801a5d5
[wxFilePickerCtrl]: https://docs.wxwidgets.org/trunk/classwx_file_picker_ctrl.html
[wxDirPickerCtrl]: https://docs.wxwidgets.org/trunk/classwx_dir_picker_ctrl.html
[wxTopLevelWindow::MSWGetSystemMenu()]: https://docs.wxwidgets.org/trunk/classwx_top_level_window.html#503565e9c0a1f37a281b52e1d53029b6
[this thread]: http://thread.gmane.org/gmane.comp.lib.wxwidgets.devel/132110
[here]: http://thread.gmane.org/gmane.comp.lib.wxwidgets.devel/132014
[wxComboBox::IsTextEmpty()]: https://docs.wxwidgets.org/trunk/classwx_combo_box.html#7ea3095ed99ef8b1b70e29e1a5f3eab1
[IsListEmpty()]: https://docs.wxwidgets.org/trunk/classwx_combo_box.html#8c5e9ee5cf37d5e2f43eb1f6311b4536
[this discussion]: http://thread.gmane.org/gmane.comp.lib.wxwidgets.devel/132042

---

More new features are planned for September too, notably I'm personally planning
to add a new [wxTimePickerCtrl] class and also [wxBalloonTooltip]. Any help with
their development or participation in discussion of the API of the new classes
is always welcome on wx-dev.

[wxTimePickerCtrl]: http://thread.gmane.org/gmane.comp.lib.wxwidgets.devel/132258
[wxBalloonTooltip]: http://thread.gmane.org/gmane.comp.lib.wxwidgets.devel/132023
