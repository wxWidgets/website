---
title: Invalid non-literal msgid error
---

## Explanation of the problem

This page explains how to fix compilation errors given when wxWidgets
translations macros such as `_()`, `wxPLURAL()`, `wxGETTEXT_IN_CONTEXT` or
`wxGETTEXT_IN_CONTEXT_PLURAL()` are used incorrectly. If you're only
interested in the fastest possible workaround, jump to [the end](#workaround)
but be warned that this is not the best solution!

To understand the problem, you need to know that, due to the way xgettext
works, the arguments of these macros should always be literal strings, i.e.
either `"a usual string"` or `L"a wide string"` but nothing else and since
wxWidgets 3.3.0 using them with anything else results in a compilation error.

In the previous versions of wxWidgets, the code compiled but silently didn't
work correctly. New versions improve the situation by catching the problem
earlier.


## Correct fix

To fix the problem, you need to change the code to use literal strings, e.g.
if you have

```cpp
wxMessageBox(_(wxString::Format("Hello %s", who)));
```

in your code you need to change it to

```cpp
wxMessageBox(wxString::Format(_("Hello %s"), who));
```

so that `_()` is passed a literal string.

Sometimes fixing the problem is as simple as removing an extraneous occurrence
of `_()`, e.g. if you have

```cpp
wxPLURAL(_("%d file"), _("%d files"), n)
```

you should just remove the `_()` around the arguments as it's not only not
needed but actively prevents this code from working correctly:

```cpp
wxPLURAL("%d file", "%d files", n)
```


## <a name="workaround"></a> Workaround

If you really can't, or don't want to change the existing code, it can be made
to compile in the same way as before by predefining `wxNO_REQUIRE_LITERAL_MSGIDS`
preprocessor symbol, typically at the build system level, i.e. in your
makefile, project file etc.

Please note that this is not recommended, as the code still won't work
correctly -- but it will at least continue to compile as before.
