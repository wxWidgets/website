---
layout: default
title: "Coding Guidelines"
---

<div class="alert alert-warning">
    <strong>Warning:</strong> Parts of this document (especially those dealing
    with not using some C++ language features) are out of date for the latest
    wxWidgets development branch. They still apply to wxWidgets 2.8, but this
    document needs to be revised for 3.0.
</div>

This guide is intended for people who are (or intending to start) writing code
for inclusion into the wxWidgets library. We consider these guidelines as good
rules for use when developing an application on top of wxWidgets, specifically
when you need the same level of portability that wxWidgets requires, but this
is not required by any means.

The guide is separated into two parts: the first one addresses the general
compatibility issues and is not wxWidgets-specific. The advices in this part
will hopefully help you to write programs which compile and run on greater
variety of platforms. The second part covers the wxWidgets code organization
and its goal: to make wxWidgets as uniform as possible without imposing too
many restrictions on the programmer.

#### General C++ Rules

* New or not widely supported C++ features
  * [Don't use C++ templates](#no_templates)
  * [Don't use C++ exceptions](#no_exceptions)
  * [Don't use RTTI](#no_rtti)
  * [Don't use namespaces](#no_namespaces)
  * [Don't use STL](#no_stl)
  * [Don't declare variables inside `for()`](#no_fordecl)
  * [Don't use nested classes](#no_nestedclasses)
  * [Don't use new logical operators keywords](#no_newlogicalops)
* Other compiler limitations
  * [Use ternary operator `?:` carefully](#no_ternarywithobjects)
  * [Don't use initializers with automatic arrays](#no_autoaggregate)
  * [Always have at least one constructor in a class with destructor](#no_dtorswithoutctor)
* General recommendations
  * [No C++ comments in C code](#no_cppcommentsinc)
  * [No global variables with constructor](#no_globals)
  * [Turn on all warnings and eradicate them](#no_warnings)
  * [Don't rely on `sizeof(int) == 2`](#no_assume_sizeof)
  * [No assignments in conditional expressions](#no_assignment_in_if)
  * [Use `#if 0` rather than comments to temporarily disable blocks of code](#no_comment_code)
  * [Avoid overloaded virtual functions](#no_overloaded_virtuals)
  * [Don't use boolean function arguments](#no_bool_params)
  * [Don't use extra semi-colons on top level](#no_extra_semicolon)
* Unix/DOS differences
  * [Use .cpp for C++ source file extension](#use_cpp_ext)
  * [Don't use backslash ('\\') in #includes](#no_backslash)
  * [Avoid carriage returns in cross-platform code](#no_carriagereturn)
  * [Use only lower letter filenames](#no_caps_in_filenames)
  * [Terminate the files with a new-line](#no_incomplete_files)
  * [Avoid globals differing by case only](#no_case_only_diff)
* Style choices
  * [Naming conventions: use `m_` for members](#naming_conv)
  * [Don't use `void` for functions without arguments](#no_void_param)
  * [Don't use `const` for non pointer/reference arguments](#no_const_int)
  * [Use `NULL` rather than `0`](#null_not_zero)

#### wxWidgets Rules

* Files location and naming conventions
  * [File locations](#file_locations)
  * [Include guards](#include_guards)
  * [Precompiled headers](#pch)
* File layout and indentation
  * [wxWidgets standard header](#wxwin_header)
  * [Indent your code with 4 spaces (no tabs!)](#indentation)
  * [Order of parts in a class declarations](#class_decl)
* More about naming conventions
  * [Use wx or WX prefix for all public symbols](#wx_prefix)
  * [Use WXDLLEXPORT with all classes/functions in wxMSW/common code](#wxdllexport)
  * [Use Set/Get prefixes for accessors](#set_get)
  * [wxNAMING_CONSTANTS](#constants)
* Message and documentation conventions
  * [Use well-formed language for messages](#wellformed)
  * [Always starts a sentence with a capital letter](#startcapital)
  * [Always end a sentence with a period or other appropriate punctuation](#endperiod)
  * [Never use "..." unless absolutely necessary](#noellipsis)
  * [Avoid "!" wherever possible](#nopling)
  * [Use only one space after a period and before a new sentence](#onespace)
  * [Don't use unnecessary parentheses](#limitparenth)
* Miscellaneous
  * [Use forward declarations whenever possible](#forward_decl)
  * [Use debugging macros](#debug_macros)



## General C++ Rules


### New or not widely supported C++ features

The usage of all features in this section is not recommended for one reason:
they appeared in C++ relatively recently and are not yet supported by all
compilers. Moreover, when they're supported, there are differences between
different vendor's implementations. It's understandable that you might love one
(or all) of these features, but you surely can write C++ programs without them.
Where possible, workarounds to compensate for absence of your favourite C++
abilities are indicated.

Just to suppress any doubts that there are compilers which don't support these
new features, you can think about Win16 (a.k.a. Win 3.1) compilers, _none_ of
which supports _any_ feature from the list below.

<a name="no_templates"></a>

#### Don't use C++ templates

Besides the reasons mentioned above, template usage also makes the program
compile much slower (200%-300% is not uncommon) and their support even in the
compilers which have had it for a long time is far from perfect (the best
example is probably gcc).

<u>Workaround</u>: The things you would like to use templates for are, most
commonly, polymorphic containers (in the sense that they can contain objects of
any type without compromising C++ type system, i.e. using `void *` is out of
question). wxWidgets provides dynamic arrays and lists which are sufficient in
99% of cases -- please don't hesitate to use them. Lack of template is not a
reason to use static arrays or type-less (passing by `void*`) containers.

<a name="no_exceptions"></a>

#### Don't use C++ exceptions

The C++ exception system is an error-reporting mechanism. Another reasons not
to use it, besides portability, are the performance penalty it imposes (small,
but, at least for current compilers, non-zero), and subtle problems with
memory/resource deallocation it may create (the place where you'd like to use
C++ exceptions most of all are the constructors, but you need to be very
careful in order to be able to do it).

<u>Workaround</u>: there is no real workaround, of course, or the exceptions
wouldn't have been added to the language. However, there are several rules
which might help here:

1.  Every function returns an integer (or at least boolean) error code.

    There is no such thing as a function that never fails -- even if it
    can't fail now, it might do it later, when modified to be more
    powerful/general. Put the `int` or `bool` return type from the very
    beginning!

2.  Every function you call may fail -- check the return code!

    Never rely on the function's success, always test for a possible error.

3.  Tell the user about the error, don't silently ignore them.

    Exceptions are always caught and, normally, processed when they're caught.
    In the same manner, the error return code must always be processed somehow.
    You may choose to ignore it, but at least tell the user that something
    wrong happened using `wxLogError` or `wxLogWarning` functions. All
    wxWidgets functions (must) log the error messages on failure -- this can be
    disabled by using `wxLogNull` object before calling it.

    Examples:

    *   _Wrong_:

            void ReadAddressBookFile(const wxString& strName)
            {
                wxFile file;

                if ( !file.Open(strFile) )
                    return;

                // ... process it ...
            }

    *   _Correct_:

            bool ReadAddressBookFile(const wxString& strName)
            {
                wxFile file;

                if ( !file.Open(strFile) ) {
                    wxLogError("Can't read address book from '%s'!", strName.c_str());
                    return false;
                }

                // ... process it ...

                return true;
            }

        or, if it's not an error if file doesn't exist (here we could just
        check its existence, but let's suppose that there is no
        `wxFile::Exists()`) we can also write:


            bool ReadAddressBookFile(const wxString& strName)
            {
                wxFile file;

                {
                    wxLogNull noLog;
                    if ( !file.Open(strFile) )
                    return false;
                }

                // ... process it ...

                return true;
            }

<a name="no_rtti"></a>

#### Don't use RTTI

RTTI stands for Run-Time Type Information and there is probably no other reason
not to use it except the portability issue and the fact that it adds
`sizeof(void *)` bytes to any class having virtual functions (at least, in the
implementations I'm aware of).

<u>Workaround</u>: use wxWidgets RTTI system which allows you to do almost
everything which the new C++ RTTI, except that, of course, you have to use
macros instead of the (horrible looking, BTW) `dynamic_cast`.

<a name="no_namespaces"></a>

#### Don't use namespaces

This topic is subject to change with time, however for the moment all wxWidgets
classes and methods live in the global namespace.

<u>Workaround</u>: None.

<a name="no_stl"></a>

#### Don't use STL

STL is the new C++ standard library, proposing all kinds of template containers
and generic algorithm implementations. Templates are the heart (and almost
everything else) of the library, so its usage is out of question. Besides, even
with the compilers which do support templates, STL has many of its own
problems, there are many "not 100% standard compatible" vendor implementations,
none of existing debuggers understands its complicated data structures, and the
list can go on (almost) forever.

<u>Workaround</u>: Use wxString, dynamic arrays and lists and other wxWidgets
classes. wxString has many of the most often used functions of std::string STL
class (typedef to be precise).

<a name="no_fordecl"></a>

#### Don't declare variables inside `for()`

The scope of a variable declared inside `for()` statement changed several years
ago, however many compilers still will complain about second declaration of `i`
in the following code even though if it's perfectly legal now:

    for ( int i = 0; i < 10; i++ ) {
        // ...
    }

    // Later, in the same scope...

    for ( int i = 0; i < 10; i++ ) {
        // ...
    }

<u>Workaround</u>: Write this instead:

    int i;
    for ( i = 0; i < 10; i++ ) {
        // ...
    }

    // Later, in the same scope...

    for ( i = 0; i < 10; i++ ) {
        // ...
    }

Even better, use different names for the variables in the different for loops
(in particular, avoid mute variable names like `i` above) -- then you can
declare them in the loop statement and don't pollute the outer name space with
local loop variables.

<a name="no_nestedclasses"></a>

#### Don't use nested classes

Nested classes are, without doubt, a very good thing because they allow to hide
"private" (in the sense that they're used only inside the library) classes and,
generally, put the related things together. For example, you might have this:

    class PublicLibClass {
    private:
        class PrivateLibClass { /* ... */ } m_object;
    };

Unfortunately, some compilers have trouble understanding them, so we must
sacrifice the ideals of software design to get a working program in this case.

<u>Workaround</u>:

    class PrivateLibClass;
    class PublicLibClass {
    private:
        class PrivateLibClass *m_pObject;
    };

    class PrivateLibClass { /* ... */ };

    PublicLibClass::PublicLibClass()
    {
        m_pObject = new PrivateLibClass;
    }

    PublicLibClass::~PublicLibClass()
    {
        delete m_pObject;
    }

A nice side effect is that you don't need to recompile all the files including
the header if you change the `PrivateLibClass` declaration (it's an example of
a more general interface/implementation separation idea).

<a name="no_newlogicalops"></a>

#### Don't use new logical operators keywords

The C++ standard has introduced the following new reserved words: `or`, `and`,
`not`, `xor`, `bitand`, `bitor`, `compl`, `and_eq`, `or_eq`, `not_eq`, `or_eq`
which can be used instead of the usual C operations `&&`, `||`, `~`, etc.

This wonderful (and not backwards compatible in addition to being absolutely
useless) new feature means that these new keywords should not be used as the
variable names -- even if the current compilers usually will accept this, your
code will break in the future. For most of the keywords, using them as variable
names is quite unlikely, but `or` and `compl` were used in the wxWidgets
sources which seems to indicate that they are the most likely candidates.

It goes without saying that these new keywords should not be used instead of
the tradional C operators neither both because most existing compilers don't
ship with `<iso646.h>` header needed to be able to use the new keywords and
because using them in C code makes it less readable.


### Other compiler limitations

This section lists the less obvious limitations of the current C++ compilers
which are less restrictive than the ones mentioned in the previous section but
are may be even more dangerous as a program which compiles perfectly well on
some platform and seems to use only standard C++ featurs may still fail to
compile on another platform and/or with another compiler.

<a name="no_ternarywithobjects"></a>

#### Use ternary operator `?:` carefully

The ternary operator `?:` shouldn't be used with objects (i.e. if any of
its operands are objects) because some compilers (notably Borland C++) fail to
compile such code.

<u>Workaround</u>: use `if/else` instead.

    wxString s1, s2;

    wxString s = s1.Len() < s2.Len() ? s1 : s2;

    wxString s;
    if ( s1.Len() &lt; s2.Len() )
        s = s1;
    else
        s = s2;

<a name="no_autoaggregate"></a>

#### Don't use initializers with automatic arrays

The initializers for automatic array variables are not supported by some older
compilers. For example, the following line will fail to compile with HP-UX C++
compiler:

    int daysInMonth[12] = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };

<u>Workaround</u>: either make the array static or initialize each item
separately: in the (stupid) example above, the array should be definitely
declared as `static const` (assuming that the leap years are dealt with
elsewhere somehow...) which is ok. When an array is really not const, you
should initialize each element separately.

<a name="no_dtorswithoutctor"></a>

#### Always have at least one constructor in a class with destructor

It is a good rule to follow in general, but some compilers (HP-UX) enforce it.
So even if you are sure that the default constructor for your class is ok but
it has a destructor, remember to add an empty default constructor to it.


### General recommendations

While the recommendations in the previous section may not apply to you if
you're only working with perfect compilers which implement the very newest
directives of C++ standard, this section contains compiler (and language)
independent advice which **must** be followed if you wish to write correct,
i.e. working, programs. It also contains some C/C++ specific remarks in the end
which are less important.

<a name="no_cppcommentsinc"></a>

#### No C++ comments in C code

Never use C++ comments in C code -- not all C compilers/preprocessors
understand them. Although we're mainly concerned with C++ here, there are
several files in wxWidgets sources tree which are compiled with C compiler.
Among them are `include/wx/setup.h` and `include/wx/expr.h`. Another thing
related to C vs C++ preprocessor differences is that some old C preprocessors
require that all directives start in the first column (while it's generally
allowed to have any amount of whitespace before them in C++), so you should
start them in the beginning of the line in files which are compiled with C
compiler.

<a name="no_globals"></a>

#### No global variables with constructors

In C++, the constructors of global variables are called before the `main()`
function (or `WinMain()` or any other program entry point) starts executing.
Thus, there is no possibility to initialize _anything_ before the constructor
call. The order of construction is largely implementation-defined, meaning that
there is no guarantee that one global object will be initialized before another
one (except if they are both defined in the same translation unit, i.e. .cpp
file). Most importantly, no custom memory allocation operators are installed at
the moment of execution of global variables constructors, so a (less
restrictive) rule is that you should have no global variables which allocate
memory (or do anything else non-trivial) in the constructor. Of course, if an
object doesn't allocate memory in its constructor right now, it may start
making it later, so you can only be sure about this if you don't use _any_
variables of object (as opposed to simple: `int`, ...) types. Example:
currently, wxString doesn't allocate memory in its default constructor, so you
might think that having a global (initially) empty wxString is safe. However,
if wxString starts allocating some minimal amount of memory in its default
constructor (which doesn't look unreasonable), you would have all kinds of
problems with `new` and `delete` operators (overloaded in wxWidgets),
especially because the first `new` called is the standard one (before wxWidgets
overloads them) and `delete` will be the overloaded operator.

<a name="no_warnings"></a>

#### Turn on all warnings and eradicate them

Give the compiler a chance to help you -- turn on all warnings! You should
always use the maximum available warning level of your compiler and understand
and correct each of them. If, for whatever reasons, a compiler gives a warning
on some perfectly legal line of code and you can't change it, please insert a
comment indicating it in the code. Most oftenly, however, all compiler warnings
may be avoided (not suppressed!) with minimal changes to your code.

<a name="no_assume_sizeof"></a>

#### Don't rely on `sizeof(int) == 2`

You should never assume any absolute constraints on data type sizes. Currently,
we have 16-bit, 32-bit and 64-bit machines and even inside each class data type
sizes are different. A small table illustrates it quite well:

<table class="table table-hover">
  <thead>
    <tr>
      <th>Architecture/OS</th>
      <th>sizeof(short)</th>
      <th>sizeof(int)</th>
      <th>sizeof(long)</th>
      <th>sizeof(void *)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1/Windows 3.1</td>
      <td>2</td>
      <td>2</td>
      <td>4</td>
      <td>2 or 4</td>
    </tr>
    <tr>
      <td>1/Windows 95</td>
      <td>2</td>
      <td>4</td>
      <td>4</td>
      <td>4</td>
    </tr>
    <tr>
      <td>ia64/Win64</td>
      <td>2</td>
      <td>4</td>
      <td>4</td>
      <td>8</td>
    </tr>
    <tr>
      <td>Alpha/Linux</td>
      <td>2</td>
      <td>4</td>
      <td>8</td>
      <td>8</td>
    </tr>
  </tbody>
</table>

<a name="no_assignment_in_if"></a>

#### No assignments in conditional expressions

Although close to the heart of many C programmers (I plead guilty), code like
classical `if ( (c = getchar()) != EOF )` is bad because it prevents you
from enabling "assignment in conditional expression" warning (see also
[above](#no_warnings)) which is helpful to detect common mistypes like
`if ( x = 2 )` instead of `if ( x == 2 )`.

<a name="no_comment_code"></a>

#### Use `#if 0` rather than comments to temporarily disable blocks of code

If you have to temporarily disable some code, use

    #if 0
    // ... disabled code ...
    #endif

instead of

    /*
    // ... disabled code ...
    */

The reason is simple: if there are any `/* ... */` comments inside your
disabled code, the second version will, of course, miserably fail.

<a name="no_overloaded_virtuals"></a>

#### Avoid overloaded virtual functions

You should avoid having overloaded virtual methods in a base class because if
any of them is overriden in a derived class, then all others must be overriden
as well or it would be impossible to call them on an object of derived class.
For example, take following code:

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

This technique is widely used in many of wxWidgets classes -- for example,
`wxWindow` has more than a dozen of `DoXXX()` functions which allows to have
many overloaded versions of commonly used methods such as `SetSize()`.

<a name="no_bool_params"></a>

#### Don't use boolean function arguments

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

<a name="no_extra_semicolon"></a>

#### Don't use extra semi-colons on top level

Some compilers don't pay any attention to extra semicolons on top level, like:

    class Foo { };;

Others complain loudly about it. Of course, you would rarely put 2 semicolons
yourself, but it may happen if you're using a macro (`IMPLEMENT_something`, for
example) which already has a ';' inside and put another one after it.


### Unix/DOS differences

Two operating systems supported by wxWidgets right now are (different flavours
of) Unix and Windows 3.1/95/NT (although Mac, OS/2 and other ports exist/are
being developed as well). The main differences between them are summarized
here.

<a name="use_cpp_ext"></a>

#### Use .cpp for C++ source file extension

There is, unfortunately, no standard extension for C++ source files. Different
people use .C, .cc, .cpp, .cxx, .c++ and probably several others I forgot. Some
compilers don't care about extension, but there are also other ones which can't
be made to compile any file with "wrong" extension. Such compilers are very
common in DOS/Windows land, that's why the .cpp extension is the least likely
to cause any problems -- it's the standard one under DOS and will probably be
accepted by any Unix compiler as well (any counter examples?). The extension
for the header files is .h.

<a name="no_backslash"></a>

#### Don't use backslash ('\\') in #includes

Although it's too silly to mention, please don't use backslashes in `#include`
preprocessor statement. Not all Windows compilers even accept it, without
speaking about all other ones.

<a name="no_carriagereturn"></a>

#### Avoid carriage returns in cross-platform code

This problem will hopefully not arise at all, with SVN taking care of this
stuff, however it is perhaps not useless to remember that many Unix compilers
(including, but not limited to, gcc) don't accept carriage returns (= = '\r')
in C/C++ code.

<a name="no_caps_in_filenames"></a>

#### Use only lower case filenames

DOS/Windows 3.1 isn't case sensitive, Windows 95/NT are case preserving, but
not case sensitive. To avoid all kinds of problems with compiling under Unix
(or any other fully case-sensitive OS), please use only lower case letters in
the filenames.

<a name="no_incomplete_files"></a>

#### Terminate the files with a new-line

While DOS/Windows compilers don't seem to mind, their Unix counterparts don't
like files without terminating new-line. Such files also give a warning message
when loaded to vim (the Unix programmer's editor of choice :-)), so please
think about terminating the last line.

<a name="no_case_only_diff"></a>

#### Avoid globals differing by case only

The linker on VMS is case-insensitive. Therefore all external variables and
functions which differ only in case are not recognized by the linker as
different, so all externals should differ in more than the case only: i.e.
`GetId` is the same as `GetID`.


### Style choices

All wxWidgets specific style guidelines are specified in the next section, here
are the choices which are not completely arbitrary, but have some deeper and
not wxWidgets-specific meaning.

<a name="naming_conv"></a>

#### Naming conventions: use `m_` for members

We all know how important it is to write readable code. One of the first steps
in this direction is the choice of naming convention. It may be quite vague or
strictly define the names of all the variables and function in the program,
however it surely must somehow allow the reader to distinguish between variable
and functions and local variables and member variables from the first glance.

The first requirement is commonly respected, but for some strange reasons, the
second isn't, even if it's much more important because, after all, the
immediate context usually allows you to distinguish a variable from a function
in C/C++ code. On the other hand, you _cannot_ say what `x` in the
following code fragment is:

    void Foo::Bar(int x_)
    {
        // ...

        x = x_;

        // ...
    }

It might be either a local variable (unluckily the function is too long so you
don't see the variable declarations when you look at `x = x_` line), a member
variable or a global variable -- you have no way of knowing.

The wxWidgets naming convention gives you, the reader of the code, much more
information about `x`. In the code above you know that it's a local variable
because:

1. global variables are always prefixed with `g_`
2. member variables are always prefixed with `m_`
3. static variables are always prefixed with `s_`

Examples:

    extern int g_x;

    void Bar()
    {
        int x;
    }

    class Foo {
    public:
        void SetX(int x) { m_x = x; }
    private:
        int m_x;
    };

As you see, it also solves once and for all the old C++ programmer's question:
how to call `SetX()` parameter? The answer is simple: just call it `x` because
there is no ambiguity with `Foo::m_x`.

The prefixes can be combined to give `ms_` and `gs_` for static member (a.k.a.
class) variables and static global variables.

The convention is, of course, completely worthless if it is not followed:
nothing like being sure that `x` is a local variable in the code fragment above
and discovering later the following lines in the header:

    class Foo {
        // ...
        int x;
    };

Please do use these prefixes, they make your code much easier to read. Also
please notice that it has nothing to do with the so-called _Hungarian notation_
which is used in wxMSW part of wxWidgets code and which encodes the _type_ of
the variable in its name -- it is actually quite useful in C, but has little or
no sense in C++.

<a name="no_void_param"></a>

#### Don't use `void` for functions without arguments

In ANSI C, `void Foo()` takes an arbitrary number of arbitrarily typed
arguments (although the form `void Foo(...)` is preferred) and `void Foo(void)`
doesn't take any arguments. In C++, however, the situation is different and
both declarations are completely equivalent. As there is no need to write
`void` in this situation, let's not write it -- it can only be confusing and
create an impression that it really means something when it's not at all the
case.

<a name="no_const_int"></a>

#### Don't use `const` for non pointer/reference arguments

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

#### Use `NULL` rather than `0`

We have chosen to use the standard `NULL` macro in the expressions involving
the pointers instead of just the constant `0`. Although both are perfectly
equivalent in this context, we feel that using `NULL` provides better
readability and stands out better.

A related advice is to use `'\0'` instead of `0` in the expressions involving
`char` types.



## wxWidgets Rules


### File location and naming conventions

<a name="file_locations"></a>

#### File locations

The wxWidgets files for each supported platform have their own subdirectories
in "include" and "src". So, for example, there is "src/msw", "include/gtk" etc.
There are also two special subdirectories called "common" and "generic". The
common subdirectory contains the files which are platform independent
(wxObject, wxString, ...) and the generic one the generic implementations of
GUI widgets, i.e. those which use only other wxWidgets classes to implement
them. For the platforms where the given functionality cannot be implemented
natively, the generic implementation is used and the native one is used for the
others. As I feel that it becomes a bit too confusing, here is an example:
wxMessageBox function is implemented natively under Windows (where it just
calls MessageBox API), but there is also a generic implementation which is used
under, for example, GTK. A generic class should normally have a name that
distinguishes it from any platform-specific implementation. A #define will
allow wxGenericMessageDialog to be wxMessageDialog on some platforms, for
example.

This scheme applies not only for the .cpp files, but also for the headers.
However, as the program using wxWidgets should (ideally) not use any
`#ifdef <platform>` at all, the headers are always included with
`#include <wx/msgdlg.h>` (for example). This file, in turn, includes the right
header for given platform. Any new headers should conform to this setup as well
to allow including `<wx/foo.h>` on any platform.

Note that wxWidgets implementation files should use quotes when including
wxWidgets headers, not angled brackets. Applications should use angled
brackets. This ensures that the dependencies are correctly handled by the
compiler.

<a name="include_guards"></a>

#### Include guards

To minimize the compile time C++ programmers often use so called include
guards: for example, in the header file foo.h you might have

    #ifndef _FOO_H_
    #define _FOO_H_

    // ... all header contents ...

    #endif

In this way, the header will only be included once for the compilation of any
.cpp (of course, it still will be included many times for the compilation of
the whole project, so it has nothing to do with precompiled headers). wxWidgets
is no exception and also uses include guards which should use the above form,
except for top-level headers which include files with identical names, in which
case you should use `_FOO_H_BASE_`.

<a name="pch"></a>

#### Precompiled headers

The precompiled headers greatly (we're speaking about orders of hundreds of
percent here) reduce the compilation time. wxWidgets uses them if the target
compiler supports them (it knows about MS Visual C++, Borland C++ and g++). You
should include all the headers included from only inside `#if !USE_PRECOMP` to
avoid unnecessary overhead in the case when the precompiled headers are used.

The start of a cpp implementation file after the heading might look like this:

    #include "wx/wxprec.h"

    #ifdef __BORLANDC__
    #pragma hdrstop
    #endif

    #ifndef WX_PRECOMP
    #include <stdio.h>
    #include "wx/setup.h"
    #include "wx/list.h"
    #include "wx/utils.h"
    #include "wx/app.h"
    #include "wx/palette.h"
    #include "wx/bitmap.h"
    #include "wx/icon.h"
    #endif

    #include "wx/msw/private.h"


### File layout and indentation

<a name="wxwin_header"></a>

#### wxWidgets standard header

All wxWidgets files should start with the following standard header:

    /////////////////////////////////////////////////////////////////////////////
    // Name:        src/common/foo.cpp
    // Purpose:     Implementation of wxFoo
    // Author:      Your Name
    // Created:     2014-02-07
    // Copyright:   (c) 2014 wxWidgets development team
    // Licence:     wxWindows licence
    /////////////////////////////////////////////////////////////////////////////

Notice that the date should be in ISO format (YYYY-MM-DD). The licence must
always be specified as wxWindows licence (not "wxWidgets licence") while
copyright may differ.

<a name="indentation"></a>

#### Indent your code with 4 spaces (no tabs!)

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

<a name="class_decl"></a>

#### Order of parts in a class declarations

By convention, please put the public parts of the class first, then protected,
then private. The idea is to be able to quickly see the public API of a class
without having to read through uninteresting implementation details in the
public sections.

Also, please put all wxWidgets macros which must be used in the class
declaration (such as `BEGIN_EVENT_TABLE`) in the end of it as, again, these are
implementation details and shouldn't get in the way of the person who is
reading the file.


### More about naming conventions

<a name="wx_prefix"></a>

#### Use wx or WX prefix for all public symbols

The prefix `wx` should be used for functions and classes, and `WX` for macros.

<a name="wxdllexport"></a>

#### Use WXDLLEXPORT with all classes/functions in wxMSW/common code

The title says it all -- every public (in the sense that it is not internal to
the library) function or class should have `WXDLLEXPORT` macro in its
declaration to allow compilation of wxWidgets as shared library. For example:

    bool WXDLLEXPORT wxYield(void);
    class WXDLLEXPORT MyClass;
    WXDLLEXPORT_DATA(extern wxApp*) wxTheApp;

The reason for the strange syntax for data is that some compilers use different
keyword ordering for exporting data.

<a name="set_get"></a>

#### Use Set/Get prefixes for accessors

There is a convention in wxWidgets to prefix the accessors (i.e. any simple, in
general, inline function which does nothing else except changing or returning
the value of a member variable) with either `Set` or `Get`.

<a name="constants"></a>

#### wxNAMING_CONSTANTS

The constants in wxWidgets code should be defined using `enum` C++ keyword (and
not with `#define` or `static const int`). They should be declared in the
global scope (and not inside class declaration) and their names should start
with a `wx` prefix. Finally, the constants should be in all capital letters
(except the first 2) to make it easier to distinguish them from the variables
with underscores separating the words.

For example, file-related constants should be declared like this:

    enum
    {
        wxFILEOPEN_READ,
        wxFILEOPEN_WRITE,
        wxFILEOPEN_READWRITE
    };


### Message and documentation conventions

These apply to messages in the wxWidgets source, as well as to wxWidgets
documentation.

<a name="wellformed"></a>

#### Use well-formed language for messages, not abbreviations or psuedo-English

<a name="startcapital"></a>

#### Always starts a sentence with a capital letter

<a name="endperiod"></a>

#### Always end a sentence with a period or other appropriate punctuation.

<a name="noellipsis"></a>

#### Never use "..." unless absolutely necessary.

<a name="nopling"></a>

#### Avoid "!" wherever possible

It's rarely necessary to emphasise a point this much (the same applies to
documentation).

<a name="onespace"></a>

#### Use only one space after a period and before a new sentence.

Don't add a lone space after a period if it's not going to be followed by
another sentence.

<a name="limitparenth"></a>

#### Don't use unnecessary parentheses in messages and documentation.

Instead, rearrange the sentence.


### Miscellaneous

<a name="forward_decl"></a>

#### Use forward declarations whenever possible

It's a really trivial piece of advice, but remember that using forward
declarations instead of including the header of corresponding class is better
because not only does it minimize the compile time, it also simplifies the
dependencies between different source files.

On a related subject, in general, you should try not to include other headers
from a header file.

<a name="debug_macros"></a>

#### Use debugging macros

wxWidgets provides the debugging macros `wxASSERT, wxFAIL` and `wxCHECK_RET` in
file. Please use them as often as you can -- they will never do you any harm
but can greatly simplify the bug tracking both for you and for others.

Also, please use `wxFAIL_MSG("not implemented")` instead of writing stubs for
not (yet) implemented functions which silently return incorrect values --
otherwise, a person using a not implemented function has no idea that it is, in
fact, not implemented.

As all debugging macros only do something useful if the symbol `__WXDEBUG__` is
defined, you should compile your programs in debug mode to profit from them.
