---
title: "Initializer List and Ambiguous Overloads with 3.1.4"
date: 2023-11-30
comments: true
---

If you have started getting compilation errors about "ambiguous overload" after
updating to wxWidgets 3.1.4, you have unfortunately run into [this bug][] which
got inadvertently introduced in this version, while trying to make wxWidgets
array classes more comfortable to use.

The problem happens whenever you have a function overloaded to take more than
one class that can be implicitly constructed from `std::initializer_list<>`, e.g.

```cpp
void DoSomethingWithString(const std::vector<wxString>& strings);
void DoSomethingWithString(const wxArrayString& strings);
```

and then calling it with an initializer list like

```cpp
DoSomethingWithString({"Now", "and", "Then"});
```

The preferred fix for these problems is to explicitly specify the overload to
use, for example:

```cpp
DoSomethingWithString(std::vector<wxString>{"Now", "and", "Then"});
```

but if you have many instances of this problem and use wxWidgets 3.1.5 (or the
latest 3.2 branch until this version is released), you may want to add
`-DwxNO_INITIALIZER_LIST` to the compiler options to prevent the new overloads
added in wxWidgets 3.1.4 from being defined.

Sorry about introducing this problem and hopefully this post can help you with
solving it!

[this bug]: https://github.com/wxWidgets/wxWidgets/issues/24093
