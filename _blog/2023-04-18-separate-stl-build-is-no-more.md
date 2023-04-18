---
title: "Separate STL Build Is No More"
date: 2023-04-18
comments: true
---

Since almost 20 years (see [this commit][stl-commit]) wxWidgets had a separate "STL
build mode", in which it used the standard library classes instead of the
legacy code originally written even earlier because the standard library
hadn't been universally available under all platforms back then. This build
mode provided better interoperability with the rest of the code, using the
standard C++, at the cost of less than perfect backwards compatibility.

The bad news is that the separate STL build mode doesn't exist in wxWidgets
3.3 any more. But the good news is that it doesn't exist because using
standard library is now the default and, in most places, the only supported
option (amazingly, even in 2023, we still have to use our own code instead of
`std::unordered_map` when [using gcc 4.8][gcc-stl-bug]). Globally, this is, of
course, a very good change as it's not necessary to set any options to make
wxWidgets use standard classes any longer and, in particular,
distribution-provided packages under Linux or other packaged wxWidgets
binaries (provided by [Homebrew][brew-wx], [vcpkg][vcpkg-wx] etc) will now use
them.

So, mostly, the news is: all containers used by wxWidgets are now standard
containers under the hood and you should treat them as such, ignoring any
non-standard member functions they may also have for compatibility reasons.

Unfortunately, as usual, there is some price to pay for this in terms of
backwards compatibility. This is briefly documented in the [incompatible
changes][incompat-changes] section of the [changelog][], but this post will go
into a bit more details about how you may need to update your code when
upgrading to wxWidgets 3.3. There are two non-overlapping cases that we'll
cover separately below:

## Upgrading from non-STL build

The first case is about upgrading the code which used the default build of the
library, with `wxUSE_STL==0`. Such code should mostly continue to compile and
work unchanged if it was already upgraded to use `compatibility_iterator` to
iterate over the various linked lists. If it still uses `wxNode`-based
iteration, i.e. contains any fragments like this
```cpp
    // Existing code which only compiles in non-STL build mode of wx < 3.3.
    const wxWindowList& children = someWindow->GetChildren();
    for ( wxWindowList::Node* node = children.GetFirst(); node; node = node->GetNext() ) {
        wxWindow* const child = node->GetData();
        // ... do something with the child ...
    }
```
you need to update it to use `compatibility_iterator`, recommended since
wxWidgets 2.5.0, and working in any build, and with any wx version. This can
be done by just changing the type of `node` variable above, i.e. writing
```cpp
    // This code compiles in both STL and non-STL build with any wx version.
    const wxWindowList& children = someWindow->GetChildren();
    for ( wxWindowList::compatibility_iterator node = children.GetFirst(); node; node = node->GetNext() ) {
        wxWindow* const child = node->GetData();
        // ... do something with the child ...
    }
```

Of course, this is the absolutely minimum change and you might prefer to
update this code to use the real iterators instead or even get rid of the
explicit iterators and use the range for loop:
```cpp
    // This code also compiles with any wx 3.x version.
    for ( const wxWindow* child : GetChildren() ) {
        // ... do something with the child ...
    }
```
but this is not required.

The only other changes that may be required are to the code which used legacy
containers that were never part of wxWidgets public API. As wxWidgets itself
doesn't use them any longer (note that this doesn't apply to the legacy
containers that were, and still are, part of the public API, such as
`wxWindowList` shown above), you can simply update your code to use
`std::vector<>`, `std::list<>` or `std::unordered_map<>` instead of the
containers based on wx array/list/hashmap macros.


## Upgrading from STL build

The other situation is when the existing code base already used the STL build,
i.e. used `--enable-stl` configure option or set `wxUSE_STL=1` in some other
way. While using all wxWidgets containers in such code will continue to work
without any changes, there is another backwards-incompatible change that may
still affect it: traditionally, STL build enabled _implicit_ conversions of
`wxString` to `std::string` and `std::wstring`. This always was a rather poor
idea and is now not done any more. If your code relied on such conversions,
consider modifying it to use `ToStdString()` or, usually more convenient,
`utf8_string()` for converting to `std::string` and `ToStdWstring()` for
converting to `std::wstring` explicitly instead.

But if doing this is too difficult, you may set the
`wxUSE_STD_STRING_CONV_IN_WXSTRING` build option to 1 to enable these implicit
conversions again.

For completeness, please note that implicit conversions to `const char*` and
`const wchar_t*`, which used to be disabled in the STL build in the previous
wxWidgets versions, are now _enabled_ by default, for compatibility with the
non-STL build. You may want to disable them by predefining
`wxNO_IMPLICIT_WXSTRING_CONV_TO_PTR` when compiling your code. Note that,
unlike changing `wxUSE_XXX`, this does _not_ require rebuilding the library
itself and can be used with the standard binaries.


## Conclusion

Most of the existing code should continue to work without any changes with
wxWidgets 3.3, but some code may need to be updated. Please try building your
code with the current Git master or 3.3.0 once it is released and if you run
into any problems not mentioned here, please [open an issue][open-issue] about
them, so that we could fix them before the final 3.4 release, which is still
some time off. Thanks in advance!

[stl-commit]: https://github.com/wxWidgets/wxWidgets/commit/df5168c427b51f1ab2b3200a5c8f7626b3d24aae
[gcc-stl-bug]: https://gcc.gnu.org/bugzilla/show_bug.cgi?id=56278
[brew-wx]: https://formulae.brew.sh/formula/wxwidgets
[vcpkg-wx]: https://www.wxwidgets.org/blog/2019/01/wxwidgets-and-vcpkg/
[incompat-changes]: https://github.com/wxWidgets/wxWidgets/blob/82d2c9f8af42c8e0af421815142f8a121eeb78b7/docs/changes.txt#L90-L109
[changelog]: https://github.com/wxWidgets/wxWidgets/blob/master/docs/changes.txt
[open-issue]: https://github.com/wxWidgets/wxWidgets/issues/new
