---
title: "Operators Are Your Friends"
date: 2024-01-12
comments: true
tags: cpp
---

<style type="text/css">
pre { white-space: pre-wrap; }
.ef0,.f0 { color: #000000; } .eb0,.b0 { background-color: #000000; }
.ef1,.f1 { color: #AA0000; } .eb1,.b1 { background-color: #AA0000; }
.ef2,.f2 { color: #00AA00; } .eb2,.b2 { background-color: #00AA00; }
.ef3,.f3 { color: #AA5500; } .eb3,.b3 { background-color: #AA5500; }
.ef4,.f4 { color: #0000AA; } .eb4,.b4 { background-color: #0000AA; }
.ef5,.f5 { color: #AA00AA; } .eb5,.b5 { background-color: #AA00AA; }
.ef6,.f6 { color: #00AAAA; } .eb6,.b6 { background-color: #00AAAA; }
.ef7,.f7 { color: #AAAAAA; } .eb7,.b7 { background-color: #AAAAAA; }
.f9 { color: #000000; }
.b9 { background-color: #FFFFFF; }
pre .bold { font-weight: bold; }
</style>

Or, at least, they should be. But for most of wxWidgets history the operators
defined in the library itself, for its own types, were not very friendly. For
example, if you worked on your program containing the following

```cpp
#include <wx/wx.h>

class MyClassWithALotOfData {
    // TODO: Implement the "a lot of data" part.
};

int main() {
    MyClassWithALotOfData first, second;
    return first == second;
}
```

and tried to compile it with gcc, you would get the following errors (it's ok
if your eyes glaze over when you look at them):

```
oper.cpp: In function ‘int main()’:
oper.cpp:9:18: error: no match for ‘operator==’ (operand types are ‘MyClassWithALotOfData’ and ‘MyClassWithALotOfData’)
    9 |     return first == second;
      |            ~~~~~ ^~ ~~~~~~
      |            |        |
      |            |        MyClassWithALotOfData
      |            MyClassWithALotOfData
In file included from /usr/local/include/wx/dialog.h:16,
                 from /usr/local/include/wx/wx.h:64,
                 from oper.cpp:1:
/usr/local/include/wx/sharedptr.h:158:6: note: candidate: ‘template<class T, class U> bool operator==(const wxSharedPtr<T>&, const wxSharedPtr<U>&)’
  158 | bool operator == (wxSharedPtr<T> const &a, wxSharedPtr<U> const &b )
      |      ^~~~~~~~
/usr/local/include/wx/sharedptr.h:158:6: note:   template argument deduction/substitution failed:
oper.cpp:9:21: note:   ‘MyClassWithALotOfData’ is not derived from ‘const wxSharedPtr<T>’
    9 |     return first == second;
      |                     ^~~~~~
In file included from /usr/local/include/wx/wx.h:14:
/usr/local/include/wx/defs.h:924:17: note: candidate: ‘bool operator==(char, const wxUniChar&)’
  924 |     inline bool operator op(T1 x, T2 y) { return y oprev x; }
      |                 ^~~~~~~~
...
... many lines snipped
...
... and when I say many, I really mean it
...
In file included from /usr/local/include/wx/dc.h:24,
                 from /usr/local/include/wx/wx.h:51:
/usr/local/include/wx/brush.h:109:13: note: candidate: ‘bool operator==(wxBrushStyle, wxDeprecatedGUIConstants)’
  109 | inline bool operator==(wxBrushStyle s, wxDeprecatedGUIConstants t)
      |             ^~~~~~~~
/usr/local/include/wx/brush.h:109:37: note:   no known conversion for argument 1 from ‘MyClassWithALotOfData’ to ‘wxBrushStyle’
  109 | inline bool operator==(wxBrushStyle s, wxDeprecatedGUIConstants t)
      |                        ~~~~~~~~~~~~~^```
```

with most of them snipped because the complete output contains **526** lines,
with just the first 6 of them being actually relevant and the rest being
uselessly confusing and ensuring that you don't even see the first lines with
the actual description of the error as they would scroll out of your terminal
or IDE window.

This was due to the fact that whenever the compiler encountered an operator
(any operator, not necessarily just `==`) that it couldn't match, it had to
try using all of the operators defined for wxWidgets types, such as
`wxSharedPtr<>` or `wxBrushStyle` appearing above, but also many, many others,
and diligently report that it couldn't use any of them. The compiler didn't
really have any choice because this is what the language rules dictate: all
the operators defined in the global scope have to be considered in this case.

However there is a better way, known as "hidden friends" idiom and popularized
(but probably not invented, although I'd welcome any information about who did
invent this) by Anthony Williams in his [blog post][blog-post]. So if we
define these operators as friends of e.g. `wxSharedPtr` directly in this class
declaration, they would still work just fine when used with `wxSharedPtr`, as
intended, but wouldn't be considered for anything else. And this is exactly
what the [latest wxWidgets version][latest-wx] does, for all these operators,
so that now compiling the program above results in just

<body class="f9 b9">
<pre>
<span class="bold">oper.cpp:</span> In function ‘<span class="bold">int main()</span>’:                                            
<span class="bold">oper.cpp:9:18:</span> <span class="bold"><span class="f1">error: </span></span>no match for ‘<span class="bold">operator==</span>’ (operand types are ‘<span class="bold">MyClassWithALotOfData</span>’ and ‘<span class="bold">MyClassWithALotOfData</span>’)
    9 |     return <span class="f2">first</span> <span class="bold"><span class="f1">==</span></span> <span class="f4">second</span>;                                                                                    
      |            <span class="f2">~~~~~</span> <span class="bold"><span class="f1">^~</span></span> <span class="f4">~~~~~~</span>                                                                                     
      |            <span class="f2">|</span>        <span class="f4">|</span>                                                                                          
      |            <span class="f2">|</span>        <span class="f4">MyClassWithALotOfData</span>                                                                      
      |            <span class="f2">MyClassWithALotOfData</span>                                                                               
</pre>
</body>

and nothing else, making the error immediately clear and obvious.

Moreover, even if there are no errors, there are still benefits to the new
approach: compiler has to consider fewer candidates and so compilation process
is faster, too.

Of course, as always, there are some caveats. The main, and most important
one, is that this change is not fully backwards-compatible: if you previously
had some type implicitly convertible to e.g. `wxString`, you could compare it
with `wxString` or anything string-like via this implicit conversion and
`operator==()` defined by wxWidgets. This is not the case any longer and while
this is not always a problem -- and could, indeed, fix unwanted comparisons
and other operators being available for your type -- it may be, in some cases,
and you will have to convert the objects to `wxString` explicitly or define
your own operator now.

The second one is that Microsoft C++ compiler in its infinite wisdom still
considers even the hidden friend operators when looking for overload
candidates. This helpful behaviour can be disabled by using `/permissive-`
compiler flag which is done implicitly if you use `/std:c++20` with this
compiler (which is recommended if possible, of course).

But globally this should be a big improvement and wxWidgets-defined operators
shouldn't get in your way when using operators with your own types ever again.

[blog-post]: https://www.justsoftwaresolutions.co.uk/cplusplus/hidden-friends.html
[latest-wx]: https://github.com/wxWidgets/wxWidgets/commit/a2f7a933e861a0d32bbc195a0ed502913ed1fd34
