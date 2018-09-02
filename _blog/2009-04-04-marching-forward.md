---
title: Marching Forward
date: '2009-04-04T21:07:00.001Z'
author: Vadim Zeitlin
tags:
- progress
modified_time: '2009-10-07T09:02:30.992Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-954487490046755466
blogger_orig_url: http://wxwidgets.blogspot.com/2009/03/marching-forward.html
---

Here is a brief and late report of changes in wxWidgets in March. Somehow it
looks that once again not that much happened, although it certainly seemed like
a busy month. But most of the effort was spent on not very sexy activities such
as bug fixing and release preparation -- and 2.9.0 was finally postponed to
mid-April in spite of all that so I can't even boast about a new release this
month. This was a bit of disappointment but OTOH we'd like 2.9.0 to be usable in
production, the ominous zero at the end notwithstanding, and so we decided to
release it slightly later but with less problems.

Personally I was also upset by not managing to finish my work on debug/release
builds unification before 2.9.0. I did check in the changes introducing
`wxDEBUG_LEVEL` which allows us to more flexibly configure the presence of
assertions and other debugging helpers in your build, but the default behaviour
didn't change yet, it will now have to wait for 2.9.1 as we didn't want to
postpone 2.9.0 for that long neither.

A lot of time was also taken by preparation for GSoC 2009 and discussion of
proposal ideas first and the proposals themselves later. This is definitely not
time wasted though as we have more proposals this year than the last one
(although about the same as the years before) and, most importantly, their
average quality is much higher so I'm really looking forward to working with
students this year.

Anyhow, in short here is what happened at wxWidgets code level:

*   Added [wxTextEntry::SetHint()] which can be used to show a hint string (e.g.
    "Search") in an empty text control or combobox. This uses native XP/Vista
    support if available or a generic fallback otherwise.

*   Made wxFTP logging more flexible with [wxProtocolLog] (thanks to troelsk).
    We also should extend this to wxHTTP in the future.

*   `wxSP_WRAP` support was added to wxSpinCtrlDouble and `wxSP_ARROW_KEYS` was
    fixed too; alignment flags are now honoured for both it and plain wxSpinCtrl
    (thanks Andrew Radke).

*   wxImageHandler can now have more than one associated extension making it
    finally possible to use both `.jpg` and `.jpeg` (Ivan Krestinin).

*   Events for [wxComboBox] popup drop-down and close-up were added (Igor Korot).

*   [wxString::ToCLong()], ToCULong() and ToCDouble() were added.

*   Many fixes to wxDateTime parsing methods which were broken in variously
    entertaining ways after rewriting them to use iterators instead of string
    pointers some time ago. [wxLocale::GetInfo()] was extended to return various
    date and time formats in the process and as the result all our wxDateTime
    unit tests finally pass in all locales.

*   A bad and long standing [bug 9638] introduced by Unicode-related changes was
    finally fixed. Several other bugs related to handling of embedded `NUL`s in
    wxString were fixed as well. And all string unit tests pass too in all
    builds (wchar_t, UTF-8, ...) now.

*   XRC error reporting was significantly improved, now the line number is given
    in error messages.

*   wxDocView code was streamlined a bit more and made less surprising to an
    unsuspecting application programmer.

*   Several wxAUI bugs were fixed as Ben had some time to work on it recently.

*   Many OS X enhancements/fixes from Stefan and Kevin Ollivier.

*   And some wxDataViewCtrl improvements from Robert, as usual.

The previously mentioned `Bind()` function was finally finished and documented
and I'll describe it in more details in a separate post soon.

The usual monthly stats: 732 commits, 137 new tickets and 101 closed ones (oops,
no bragging about moving in the right direction this time).

And that's all for now, hopefully we'll have more meaty news next month with a
flurry of commits which habitually accompany the end of release freeze period.

[wxTextEntry::SetHint()]: https://docs.wxwidgets.org/trunk/classwx_text_entry.html#db61407dc8103df59c66cb5de3dd22a1
[wxProtocolLog]: https://docs.wxwidgets.org/trunk/classwx_protocol_log.html
[wxComboBox]: https://docs.wxwidgets.org/trunk/classwx_combo_box.html
[wxString::ToCLong()]: https://docs.wxwidgets.org/trunk/classwx_string.html#2d7fb808fae67a4226ebeedf854a5a03
[wxLocale::GetInfo()]: https://docs.wxwidgets.org/trunk/classwx_locale.html#cd6eccc8900847c0a29e7a4598c7d83f
[bug 9638]: https://trac.wxwidgets.org/ticket/9638
