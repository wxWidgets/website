---
title: Looking forward to wxWidgets 3
date: '2007-11-04T14:53:00.000Z'
author: Vadim Zeitlin
modified_time: '2007-11-05T00:45:37.652Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-5133345245556070218
blogger_orig_url: http://wxwidgets.blogspot.com/2007/11/looking-forward-to-wxwidgets-3.html
---

The first alpha version of wxWidgets 2.0 was released 10 and a half years ago
and we are still (only) at version 2.8.6 right now so the wxWidgets version
numbers don't change very quickly as we, with the disdain proper to free
software developers, don't really like inflating them for marketing purposes.
However soon -- hopefully in the beginning of the next year -- we will release
wxWidgets 3.0 which will be the first change of major version since a long time
and only the second time it happens in wxWidgets history. So it may be
interesting to look at what exactly has changed to warrant this and I'll try to
briefly describe it in this post.

First, a word of reassurance: there are no sweeping backwards-incompatible
changes in wxWidgets 3.0 compared to 2.8. We did have to break compatibility in
a few places but fixing the existing code to compile with 3.0 will be trivial,
if needed at all, unlike 1.0 -> 2.0 transition which required rewriting it.

Second, the main change in 3.0 is the rethought support of Unicode. While
wxWidgets supports Unicode since quite a long time, so far it did according to
Win32 model: there were two different builds of the library, one ANSI and the
other Unicode and you could either use the former to use the familiar `char *`
strings but stay limited to a single encoding or choose the latter one and be
able to use Unicode in the GUI but at the price of working with `wchar_t *`
string only which implied using ugly-looking `wxT()` macro in a lot of places
for example. wxWidgets 3.0 will have only one build (which on its own is a great
simplification for developers, packagers and even users who won't hesitate
between which one to choose) combining the best features of the two: it will
always use Unicode internally but support `char *` string and simply convert
them using the current encoding transparently. In other words, you will be able
to write code in exactly the same way as with the old ANSI build if this is all
you need but profit from the full Unicode support at the same time. This is
especially nice for the existing wxWidgets applications which weren't always
written with Unicode in mind and so often didn't even compile with the Unicode
build of wx -- now they will and it will be possible to extend them to deal with
Unicode at leisure instead of spending a big initial effort on `wxT()`-izing
them first.

wxWidgets 3.0 is still work in progress, in particular documentation hasn't been
updated to reflect the changes yet. However the API and the code are believed to
be stable enough to be used and we'd welcome any feedback on the new API. In
particular, please try recompiling the existing code with the version currently
in the SVN trunk and let us know about any problems you may encounter (other
than those which are mentioned in [docs/changes.txt]: please read it first!).

There are, of course, many other new features in wxWidgets 3.0 (without speaking
about the bug fixes...):

*   The new wxDataViewCtrl class provides all the features lacking in wxListCtrl
    and a much better and simpler API to use them.
*   There is a new wxDFB ([DirectFB]-based) port especially suitable for the
    embedded devices.
*   wxGTK (and wxDFB) are also more efficient internally because they use UTF-8
    for the string representation, instead of `wchar_t` and so avoid the
    conversions between the underlying toolkit strings and `wxString`.
*   New and improved wxFileCtrl (thanks to Google summer of code).
*   Many enhancements to wxRichTextCtrl.
*   Important improvements to several controls under wxGTK, including wxToolBar,
    wxStaticText, wxHyperlinkCtrl and others.
*   Support for auto-completion in wxTextCtrl and wxComboBox.

But, again, the most important change by far is the merge of ANSI and Unicode
builds and the resulting changes to wxString. As this is the biggest change to
wxWidgets API since several years we'd really welcome your comments on it, this
will help us release 3.0 sooner and better!

[docs/changes.txt]: https://github.com/wxWidgets/wxWidgets/blob/master/docs/changes_30.txt
[DirectFB]: http://www.directfb.org/
