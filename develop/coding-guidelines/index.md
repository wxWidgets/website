---
layout: default
title: "Coding Guidelines"
---

This guide is intended for people who are (or intending to start) writing code
for inclusion into the wxWidgets library. The guidelines here do _not_ need to
be followed when writing applications using wxWidgets as they typically don't
have to deal with all the platforms that the library itself supports, notably
there is usually absolutely no reason to avoid the use of exceptions or the
standard library in the application code.

* Physical Files Organization
  * [Use .cpp for C++ source file extension](#use_cpp_ext)
  * [File locations](#file_locations)
  * [Standard file header](#wxwin_header)
  * [Include guards](#include_guards)
  * [Precompiled headers](#pch)
  * [Use WXDLLIMPEXP_XXX with all public classes and functions](#wxdllexport)
  * [Use only lower letter filenames](#no_caps_in_filenames)
* Naming Conventions
  * [Use wx prefix for all public symbols](#wx_prefix)
  * [Use CamelCaseFunctions and camelCaseVariables](#camel_case)
  * [Use UPPER_CASE for constants](#upper_case)
  * [Use `m_` prefix for member variables](#m_prefix)
  * [Use Set/Get prefixes for accessors](#set_get)
* Coding Style
  * [Indent your code with 4 spaces (no tabs!)](#indentation)
  * [Put opening curly bracket on its own line](#opening_brace)
  * [Use spaces with keywords](#spaces_keywords)
  * [Order of parts in a class declarations](#class_decl)
  * [Don't use `void` for functions without arguments](#no_void_param)
  * [Don't use `const` for non pointer/reference arguments](#no_const_int)
  * [Use `NULL` rather than `0`](#null_not_zero)
* Restrictions on C++ Features
  * [Don't use exceptions](#no_exceptions)
  * [Don't use RTTI](#no_rtti)
  * [Don't use many standard library classes](#no_stl)
  * [Don't use new logical operators keywords](#no_newlogicalops)
* Code Quality
  * [Turn on all warnings and eradicate them](#no_warnings)
  * [No assignments in conditional expressions](#no_assignment_in_if)
  * [Avoid overloaded virtual functions](#no_overloaded_virtuals)
  * [Don't use boolean function arguments](#no_bool_params)
  * [Use forward declarations whenever possible](#forward_decl)
  * [Use debugging macros](#debug_macros)
* Message and Documentation Conventions
  * [Use well-formed language for messages](#wellformed)
  * [Always starts a sentence with a capital letter](#startcapital)
  * [Always end a sentence with a period or other appropriate punctuation](#endperiod)
  * [Never use "..." unless absolutely necessary](#noellipsis)
  * [Avoid "!" wherever possible](#nopling)
  * [Use only one space after a period and before a new sentence](#onespace)
  * [Don't use unnecessary parentheses](#limitparenth)



### Physical Files Organization

<a name="use_cpp_ext"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Use .cpp for C++ source file extension

Use `.cpp` extension for the C++ files and `.h` for the headers.


<a name="file_locations"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> File locations

All headers are found under the directory `include/wx`, both the public and
private ones. All source file are under the directory `src`.

Both of these directories contain port-specific subdirectories, such as
`include/wx/msw` or `src/gtk`. If a class has only a single implementation for
all platforms, it is declared in a single `include/wx/foo.h` header and
implemented in a single `src/common/foo.cpp` file, i.e. `src/common`
subdirectory should be used for platform-independent code when there is no
platform-specific version.

A more common case is to have several different versions of the class for
different platforms. In this case, the header `include/wx/foo.h` is still the
only header which can be directly included but it may and typically does
include platform-specific `include/wx/port/foo.h` headers internally (where
`port` is one of `msw`, `gtk`, `osx`, ...). The corresponding implementation
files are `src/port/foo.cpp` and the common, not platform-specific, part, if
any, is in `src/common/foocmn.cpp`.

Additionally, a GUI class can have a "generic" implementation, that is one
written in wxWidgets itself instead of using the platform-specific API. Such
implementation is declared in `include/wx/generic/foo.h` file (which is still
never included directly, but only from `include/wx/foo.h`) and defined in
`src/generic/foog.cpp` (notice the extra "g" at the end, to avoid confusion
with the native implementation called `foo.cpp`). In some cases, you may
notice that a class has only the generic implementation, which seems to
contradict this explanation, but actually just means that we plan to add one
or more native implementations in the future -- and this just hasn't happened
yet.

Sometimes it can be useful to have a private header, i.e. one used only in the
implementation of wxWidgets but not by the outside code using the library.
Such files should be placed under `include/wx/private` or
`include/wx/port/private` for port-specific ones.

Reference API documentation is in the files under `interface/wx` directory.
The rest of the manual is found under `docs/doxygen`.


<a name="wxwin_header"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Standard file header

All wxWidgets files should start with the following standard header:

    {% highlight cpp %}
    /////////////////////////////////////////////////////////////////////////////
    // Name:        src/common/foo.cpp
    // Purpose:     Implementation of wxFoo
    // Author:      Your Name <your@email.address>
    // Created:     2014-02-07
    // Copyright:   (c) 2014 wxWidgets development team
    // Licence:     wxWindows licence
    /////////////////////////////////////////////////////////////////////////////
    {% endhighlight %}

Notice that the date should be in ISO format (YYYY-MM-DD). The licence must
always be specified as wxWindows licence (not "wxWidgets licence") while the
copyright depends on the actual person or organization having contributed the
code.


<a name="include_guards"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Include guards

Any header `include/wx/foo/bar.h` must wrap its contents (i.e. everything
after the standard header comment) in an include guard:

    {% highlight cpp %}
    #ifndef _WX_FOO_BAR_H_
    #define _WX_FOO_BAR_H_

    // ... all header contents ...

    #endif // _WX_FOO_BAR_H_
    {% endhighlight %}

Formally `_WX` prefix makes this prefix a reserved word, however this style is
used in wxWidgets since 20+ years and hasn't created any problems so far, so
we are going to continue using it.


<a name="pch"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Precompiled headers

A source file should always start by including the precompiled header file
`wx/wxprec.h` which includes most of the commonly used wxWidgets headers if
precompiled headers support is used. If it isn't, the individual headers
actually used by the code need to be included inside `WX_PRECOMP` test. And
headers not included by `wx/wxprec.h` need to be included in any case.

    {% highlight cpp %}
    #include "wx/wxprec.h"

    #ifdef __BORLANDC__
    #pragma hdrstop
    #endif

    #ifndef WX_PRECOMP
    #include "wx/msgdlg.h" // This header is normally included from wx/wx.h
    #endif

    #include "wx/richmsgdlg.h" // But this one never is
    {% endhighlight %}


<a name="wxdllexport"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Use WXDLLIMPEXP_XXX with all public classes and functions

All public types and data must be declared with `WXDLLIMPEXP_XXX` in their
declaration to be usable outside of the wxWidgets DLL. `XXX` here can be one
of `BASE`, `CORE`, `ADV` and so on depending on the library the symbol is
exported from, see `include/wx/dlimpexp.h` for the full list. For example:

    {% highlight cpp %}
    bool WXDLLIMPEXP_BASE wxSomeUtilityFunction();
    class WXDLLIMPEXP_CORE wxSomeGUIClass { ... };
    WXDLLIMPEXP_DATA_CORE(extern wxApp*) wxTheApp;
    {% endhighlight %}



<a name="no_caps_in_filenames"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Use only lower case filenames

To avoid conflicts between case-sensitive and case-insensitive (even if
case-preserving) file systems, only use lower case ASCII letters (and numbers
if necessary) in the file names.


### Naming Conventions

The guidelines in this section describe the conventions used for naming
identifiers in wxWidgets code, please follow them to avoid surprising people
reading it.

Here is a quick example summarizing all the conventions described below:

    {% highlight cpp %}
    extern void wxGlobalFunction();

    enum wxFileOpenMode
    {
        wxFILEOPEN_READ,
        wxFILEOPEN_WRITE,
        wxFILEOPEN_READWRITE
    };

    void wxCountXs()
    {
        static int s_x;
        #ifdef wxSOMETHING_OR_OTHER
            s_x++;
        #endif
    }

    class wxSomeClass
    {
    public:
        int GetSomeX() const { return m_someX; }
        void SetSomeX(int x) { m_someX = x; }
    private:
        int m_someX;
    };
    {% endhighlight %}



<a name="wx_prefix"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Use wx prefix for all public symbols

The prefix `wx` must be used for all public classes, functions, constants
and macros, no exceptions.

Some old macros and a very few extremely old functions don't have this prefix,
but all new public identifiers should use it. Of course, class members don't
need to follow this rule as they don't have global visibility.


<a name="camel_case"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Use CamelCaseFunctions and camelCaseVariables

Use `CamelCase` for types (classes, structs, enums, unions), methods and
functions and `camelCase` for the variables.


<a name="upper_case"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Use UPPER_CASE for constants

Use `UPPER_CASE` for constants, whether they are enum elements or preprocessor
macros (the latter should be avoided if possible).

The same convention is also used for the macros, after taking the `wx` prefix
into account.


<a name="m_prefix"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Use `m_` prefix for member variables

All member variables should have `m_` prefix to distinguish them from local
variables.

Possible exception: simple structs, not having any methods (except, possibly
the constructor), may not use this prefix (rationale: there is no ambiguity as
to what kind of variable this is if it's always used via struct object,
pointer or reference).

Static variables should have `s_` prefix to allow to easily grep for them.

Member static variables combine both rules above and use `ms_` prefix
(rationale for choosing this over `sm_`: grepping for `s_` to check for
possible multi-threading problems finds them with this naming convention).

Global variables shouldn't normally be used at all, but if they are, should
have `g_` prefix.

Exception: _public_ global variables follow the rule above and so use `wx`
prefix instead of `g_` one. They also typically use `The` as part of their
name, e.g. `wxTheApp` or `wxTheClipboard`.


<a name="set_get"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Use Set/Get prefixes for accessors

There is a convention in wxWidgets to prefix the accessors (i.e. any simple, in
general, inline function which does nothing else except changing or returning
the value of a member variable) with either `Set` or `Get`.

On the contrary, do _not_ use `Get` prefix for a function which is
non-trivial, i.e. does something else than simply returning the internally
stored value.


### Coding Style

As any style, the guidelines here are at least partly subjective (although
some of them do have an objective rationale), but please follow them even if
they contradict your personal preferences to ensure consistent appearance of
all the code in the library.

<a name="indentation"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Indent your code with 4 spaces (no tabs!)

Configure your editor to use spaces, not TABs, for indentation and use 4
spaces per indentation level.

If you use Emacs, you can put the following in your .emacs file to help get
indentation right:

    ;; CC-mode setup
    (defun my-c-mode-common-hook ()
      ;; my customizations for all of c-mode, c++-mode, and objc-mode
      (c-set-offset 'substatement-open 0)
      (c-set-offset 'case-label 1)
      (c-set-offset 'defun-block-intro 4)
      (c-set-offset 'access-label -2)
      (setq c-recognize-knr-p nil)
      (setq c-basic-offset 4)
      (setq-default indent-tabs-mode nil)
    ;; Set the return key to autoindent
      (local-set-key "\C-m" 'reindent-then-newline-and-indent)
    )
    (add-hook 'c-mode-common-hook 'my-c-mode-common-hook)

Mattia Barbon suggests this:

    (setq-default indent-tabs-mode nil)

    (setq c-default-style
      '( ( c++-mode . "stroustrup" )
      ( c-mode . "stroustrup" ) )
    )

Robin Dunn has this alternative:

    (defun my-c-mode-common-hook ()
      ""
      (interactive)
      (c-set-style "bsd")
      ;;
      ;; configure vars for cc-mode based items
      ;;
      (setq c-auto-newline nil
            c-tab-always-indent nil
            c-basic-offset 4
            c-comment-only-line-offset 0
            c-hanging-comment-ender-p nil
            c-hanging-comment-starter-p nil
            c-comment-continuation-stars "** "
            c-cleanup-list (list 'empty-defun-braces
                                               'defun-close-semi
                                               'list-close-comma
                                               'scope-operator
                                               )
            compilation-ask-about-save nil
            compilation-read-command t
            compilation-scroll-output t
            fill-column 78
            comment-column 40
            tab-width 8
            indent-tabs-mode nil
            )

      (c-toggle-auto-hungry-state -1)
      (local-set-key "\C-m" 'newline-and-indent)
      (local-set-key "\C-cc" 'comment-region)
      (setq c-electric-pound-behavior '(alignleft))
      )

    (add-hook 'c-mode-common-hook 'my-c-mode-common-hook)

If you use vi(m), you can add the following line to your ~/.vimrc or ~/.exrc:

    au BufReadPost */wxWidgets/*/*.cpp,*/wxWidgets/*/*.h set sw=4 ts=4 et cin

(`et` and `cin` don't exist in plain vi)


<a name="opening_brace"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Put opening curly bracket on its own line

Don't leave `{` on the preceding line, always put it on its own line, e.g.

    {% highlight cpp %}
    if ( condition )
    {
        if-statements;
    }
    else
    {
        else-statements;
    }
    {% endhighlight %}


<a name="spaces_keywords"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Use spaces with keywords

Use a space after a keyword such as `if`, `for`, `while` or `switch` and
around the expression used by this keyword. Do _not_ use spaces in these
positions for the function calls but still use them to separate function
arguments. For example:

    {% highlight cpp %}
    for ( init; condition; loop )
    {
        switch ( expression )
        {
            case 0:
                CallSomeFunction(with, some, arguments);
                break;
        }
    }
    {% endhighlight %}


<a name="class_decl"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Order of parts in a class declarations

By convention, please put the public parts of the class first, then protected,
then private. The idea is to be able to quickly see the public API of a class
without having to read through uninteresting implementation details in the
public sections.

Also, please put all wxWidgets macros which must be used in the class
declaration (such as `wxBEGIN_EVENT_TABLE`) at the end as, again, these are
implementation details and shouldn't get in the way of the person who is
reading the file.


<a name="no_void_param"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Don't use `void` for functions without arguments

In ANSI C, `void Foo()` takes an arbitrary number of arbitrarily typed
arguments (although the form `void Foo(...)` is preferred) and `void Foo(void)`
doesn't take any arguments. In C++, however, the situation is different and
both declarations are completely equivalent. As there is no need to write
`void` in this situation, let's not write it -- it can only be confusing and
create an impression that it really means something when it's not at all the
case.


<a name="no_const_int"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Don't use `const` for non pointer/reference arguments

In both C and C++ an argument passed by value cannot be modified -- or, more
precisely, if it is modified in the called function, only the local copy is
really changed, not the caller's variable. So, semantically speaking, there is
no difference between `void Foo(int)` and `void Foo(const int)`. However, the
`const` keyword is confusing here, adds nothing to the code and even cannot be
removed if `Foo()` is virtual and overridden (because the names are mangled
differently). So, _for arguments passed by value_ you shouldn't use `const`.

Of course, it doesn't apply to functions such as
`void PrintMessage(const char *text)` where `const` is mandatory.


<a name="null_not_zero"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Use `NULL` rather than `0`

We have chosen to use the standard `NULL` macro in the expressions involving
the pointers instead of just the constant `0`. Although both are perfectly
equivalent in this context, we feel that using `NULL` provides better
readability and stands out better.

A related advice is to use `'\0'` instead of `0` in the expressions involving
`char` types.



### Restrictions on C++ features

<a name="no_exceptions"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Don't use exceptions

wxWidgets doesn't use exceptions, mostly for backwards compatibility reasons:
the existing code doesn't expect wxWidgets functions to throw exceptions, as
they had never been thrown before and so could be broken if they started now.
It is also sometimes useful to compile the code without exceptions support,
especially for embedded platforms where the resulting savings in the code size
and speed can be noticeable.

In any case, as exceptions are not used for error reporting, the failure of
the functions in wxWidgets API must be indicated by a special return value,
e.g. `false` for functions returning `bool` or `NULL` for the functions
returning pointers to objects. The special case of constructors, which have no
return value, is typically handled by providing an `IsOk()` method indicating
whether the object was constructed successfully and, for all
`wxWindow`-derived classes, also by using [two-step construction](#twostep_ctor).


<a name="no_rtti"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Don't use RTTI

wxWidgets doesn't use standard C++ RTTI, i.e. `dynamic_cast<>` and `typeid`
shouldn't be used in its code. This is done to allow compiling code which
disables RTTI support for performance reasons and also because wxWidgets has
its own wxRTTI mechanism for `wxObject`-derived classes which is necessary
anyhow, as, unlike the standard C++ RTTI, it also allows creation of C++
objects by name.

So `wxDynamicCast()` should be used instead of `dynamic_cast<>` (assuming it
needs to be used at all) and `wxObject::GetClassInfo()` instead of `typeid`.

Notice that `static_cast<>`, `const_cast<>` and `reinterpret_cast<>` can be
used as they don't require any run-time support.


<a name="no_stl"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Don't use many standard library classes

To allow creation of self-contained applications which don't depend on C++
standard library, wxWidgets still supports being built in a way which avoids
all standard library dependencies.

This means that the standard container, string, stream and other classes
should not be used inside the library itself. The most commonly used standard
library class is probably `std::vector<>` and wxWidgets provides `wxVector<>`
covering 99% of its features and which can be used instead -- and preferred to
the old style macro-based container classes.


<a name="no_newlogicalops"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Don't use new logical operators keywords

While not widely known, C++ standard defines the following reserved words:
`or`, `and`, `not`, `xor`, `bitand`, `bitor`, `compl`, `and_eq`, `or_eq`,
`not_eq`, `or_eq` which can be used instead of the usual C operations `&&`,
`||`, `~`, etc.

Support for these operators varies among compilers and some of them don't
support them at all while others require special options to enable their use.
For this reason, and also because there is absolutely no advantage in using
these keywords compared to the traditional operators, as well as for the
reasons of consistency, these keywords must not be used in wxWidgets sources.



### Code Quality

The recommendations in this section are much less subjective and describe best
practices when writing C++ code which should be followed in most, if not all,
large scale C++ projects, and thus apply to wxWidgets.

<a name="no_warnings"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Turn on all warnings and eradicate them

Give the compiler a chance to help you -- turn on all warnings! You should
always use the maximum available warning level of your compiler and understand
and correct each of them. If, for whatever reasons, a compiler gives a warning
on some perfectly legal line of code and you can't change it, please insert a
comment indicating it in the code. Most often, however, all compiler warnings
may be avoided (not suppressed!) with minimal changes to your code.


<a name="no_assignment_in_if"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> No assignments in conditional expressions

Although close to the heart of many C programmers (I plead guilty), code like
classical `if ( (c = getchar()) != EOF )` is bad because it prevents you
from enabling "assignment in conditional expression" warning (see also
[above](#no_warnings)) which is helpful to detect common mistypes like
`if ( x = 2 )` instead of `if ( x == 2 )`.


<a name="no_overloaded_virtuals"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Avoid overloaded virtual functions

Avoid having overloaded virtual methods in a base class because if any of them
is overridden in a derived class, then all others must be overridden as well
or it would be impossible to call them on an object of derived class. For
example, take following code:

    {% highlight cpp %}
    class Base
    {
    public:
        virtual void Read(wxFile& file);
        virtual void Read(const wxString& filename);
    };

    class Derived : public Base
    {
    public:
        virtual void Read(wxFile& file) { ... }
    };

    // ...

    Derived d;
    d.Read("some_filename");
    {% endhighlight %}

This will fail to compile because the base class function taking `filename` is
hidden by the virtual function overriden in the derived class (this is known as
[virtual] function name hiding problem in C++).

The standard solution to this problem in wxWidgets (where we have such
situations quite often) is to make both `Read()` functions not virtual and
introduce a single virtual function `DoRead()`. Usually, it makes sense because
the function taking a filename is (again, usually) implemented in terms of the
function reading from a file anyhow (but making only this functions not virtual
won't solve the above problem!).

So, the above declarations should be written as:

    {% highlight cpp %}
    class Base
    {
    public:
        void Read(wxFile& file);
        void Read(const wxString& filename);

    protected:
        virtual void DoRead(wxFile& file);
    };

    class Derived : public Base
    {
    protected:
        virtual void DoRead(wxFile& file) { ... }
    };
    {% endhighlight %}

This technique is widely used in many of wxWidgets classes -- for example,
`wxWindow` has more than a dozen of `DoXXX()` functions which allows to have
many overloaded versions of commonly used methods such as `SetSize()`.


<a name="no_bool_params"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Don't use boolean function arguments

Using boolean parameters in the public function usually is a bad API design
idea for two reasons which are explained below using the example of wxWidgets
`wxExecute` function used to launch an external process but which are,
in fact, quite general:

1.  _Readability:_

    When you see `wxExecute(TRUE)` or `wxExecute(FALSE)` you have absolutely no
    idea what does it mean. Even if you know (from reading the documentation)
    that the parameter specifies whether the program execution should be
    synchronous or not, you still don't know which one is which: `TRUE` and
    `FALSE` here are just the "bare numbers" which don't help the person
    reading the code to understand what do they stand for. The solution is the
    same for the other bare numbers: replace them with the symbolic constants.
    Indeed, when you see `wxExecute(wxEXEC_ASYNC)` you have no troubles
    understanding it on the first reading nor is there any danger of confusing
    the sync and async calls.

2.  _Inextensible:_

    Suppose now that you want to add another parameter to `wxExecute()`, for
    example whether a new console window should be opened, you have to add
    another parameter. And if it is bool as well you end up with such clear and
    expressible pearls as `wxExecute(TRUE, FALSE)`.

    The solution is simple: replace `bool` with `int` and add some flags with
    symbolic names. This solves both problems at once: not only you can avoid
    adding a new parameter to the function (which is especially important if it
    already has two or three of them) but also a call such as
    `wxExecute(wxEXEC_ASYNC | wxEXEC_NEW_CONSOLE)` is as readable as it gets.

    The only situations in which bool parameters may be used are those where
    their meaning is immediately clear from the function purpose, for example
    it is not unreasonable to have a `Show(bool show = TRUE)` function which
    either shows or hides something. But in vast majority of the cases, the
    meaning is not immediately clear to the reader and using the symbolic flag
    constants is a better alternative.


<a name="forward_decl"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Use forward declarations whenever possible

It's a really trivial piece of advice, but remember that using forward
declarations instead of including the header of corresponding class is better
because not only does it minimize the compile time, it also simplifies the
dependencies between different source files.

On a related subject, in general, you should try not to include other headers
from a header file.

<a name="debug_macros"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Use debugging macros

wxWidgets provides the debugging macros `wxASSERT, wxFAIL` and `wxCHECK_RET` in
file. Please use them as often as you can -- they will never do you any harm
but can greatly simplify the bug tracking both for you and for others.

Also, please use `wxFAIL_MSG("not implemented")` instead of writing stubs for
not (yet) implemented functions which silently return incorrect values --
otherwise, a person using a not implemented function has no idea that it is, in
fact, not implemented.

As all debugging macros only are deactivated when `NDEBUG` is defined, build
your code in debug version, i.e. without `/DNDEBUG`, when testing to give them
a chance to help you.


### Message and documentation conventions

These apply to messages in the wxWidgets source, as well as to wxWidgets
documentation.

<a name="wellformed"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Use well-formed language for messages, not abbreviations or psuedo-English

<a name="startcapital"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Always starts a sentence with a capital letter

<a name="endperiod"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Always end a sentence with a period or other appropriate punctuation.

<a name="noellipsis"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Never use "..." unless absolutely necessary.

<a name="nopling"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Avoid "!" wherever possible

It's rarely necessary to emphasise a point this much (the same applies to
documentation).

<a name="onespace"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Use only one space after a period and before a new sentence.

Don't add a lone space after a period if it's not going to be followed by
another sentence.

<a name="limitparenth"></a>

#### <i class="fa fa-check-square-o fa-fw"></i> Don't use unnecessary parentheses in messages and documentation.

Instead, rearrange the sentence.
