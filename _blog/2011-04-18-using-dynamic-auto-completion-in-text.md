---
title: Using dynamic auto-completion in text controls
date: '2011-04-18T23:06:00.002Z'
author: Vadim Zeitlin
tags:
- new
modified_time: '2011-04-18T23:29:01.856Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-3008516561362789447
blogger_orig_url: http://wxwidgets.blogspot.com/2011/04/using-dynamic-auto-completion-in-text.html
---

[wxTextEntry] supports auto-completion of a fixed of strings in wxWidgets 2.9
since quite some time however so far you had to specify the full of set of
strings to complete and, incidentally, this didn't work under OS X meaning that
one of three major platforms didn't support auto-completion at all.

Lack of support of OS X aside, this is a useful feature which helps the users a
lot with the data entry. For example, it is typically used to keep the history
of previous entries in a text control and auto-complete the entries used in the
past automatically. And for this the existing `AutoComplete()` worked fine.
Sometimes, however, using a fixed set of strings is impractical. A typical
example is trying to complete the results of some database queries: there can be
a lot of them and it can be wasteful to get all the results from the database.
It would be much better to be able to dynamically retrieve just the completions
for the prefix already entered by user.

And this is exactly what the newly added [wxTextCompleter] class and
[wxTextEntry::AutoComplete()] overload taking it allows to do. A text completer
object can dynamically generate the completions using the prefix already by the
user, either by overriding `Start()` and `GetNext()` methods of
`wxTextCompleter` itself or by overriding the single `GetCompletions()` method
of [wxTextCompleterSimple] class. The widgets sample was updated to show how to
do it and the documentation of `wxTextCompleterSimple` also contains a simple
example and hopefully the new API should be clear enough to be used without
problems.

As usual, things could be improved further: for one, even though the new dynamic
auto-completion is implemented under MSW and OS X, it is not implemented under
GTK yet. It shouldn't be difficult to do it by defining a [GtkTreeModel]
forwarding to `wxTextCompleter` and using it with [GtkEntryCompletion] but this
still remains to be done. Also, under OS X the completion currently needs to be
triggered manually by pressing `F5` and doesn't appear automatically. This is
the native behaviour but it doesn't seem to be particularly useful so we'd need
to make it appear automatically. As usual, any contributions implementing either
of those improvements would be gratefully received by wxWidgets project so don't
hesitate to help if you'd like to use the missing features in your programs.

But even in the current state, you can easily define custom dynamic text
completers and also use fixed lists of completion strings under all of the major
platforms now.

[wxTextEntry]: https://docs.wxwidgets.org/trunk/classwx_text_entry.html
[wxTextCompleter]: https://docs.wxwidgets.org/trunk/classwx_text_completer.html
[wxTextEntry::AutoComplete()]: https://docs.wxwidgets.org/trunk/classwx_text_entry.html#e8ca40185ba6bbaacb4715039d73342b
[wxTextCompleterSimple]: https://docs.wxwidgets.org/trunk/classwx_text_completer_simple.html
[GtkTreeModel]: http://developer.gnome.org/gtk/stable/GtkTreeModel.html
[GtkEntryCompletion]: http://developer.gnome.org/gtk/stable/GtkEntryCompletion.html
