---
title: Another Victory in the War Against Macros
date: '2011-07-28T22:01:00.001Z'
author: Vadim Zeitlin
modified_time: '2011-07-28T22:40:25.970Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-5697899472117533439
blogger_orig_url: http://wxwidgets.blogspot.com/2011/07/another-victory-in-war-against-macros.html
---

wxWidgets is notorious for using many macros. While evils of macros in C++ are
well-known, sometimes they are really necessary, e.g. `wxIMPLEMENT_APP` hides
the difference between using `main()` or `WinMain()` as entry point and
sometimes, even if there are alternative approaches not involving macros, e.g.
using [a base class] instead of `wxDECLARE_NO_COPY_CLASS` macro, their use is
still not particularly offending. In still other cases macros are used to
provide a kind of a [DSL], such as [event table macros] that allow to describe
event handler connections statically and less flexibly but more concisely than
[Connect()].

[a base class]: http://www.boost.org/doc/libs/1_46_1/libs/utility/utility.htm#Class_noncopyable
[DSL]: http://en.wikipedia.org/wiki/Domain-specific_language
[event table macros]: https://docs.wxwidgets.org/trunk/group__group__funcmacro__events.html
[Connect()]: http://wxwidgets.blogspot.com/2007/01/in-praise-of-connect.html

However in some cases there is really nothing that can be said in defense of
using the macros and they are present in the code just for "historical
reasons", i.e. because nobody thought about doing it better back when the code
was first written, often enough almost 20 years ago. We try to deprecate (which
is a polite term for "get rid of") such macros progressively and there are not
that many of them left, at least on the interface side.

A couple of days ago I finally managed to ditch a particularly aggravating set
of them: the so-called "control container" macros. They must be used in the
classes that represent windows containing other windows ("controls") in order to
allow TAB navigation inside them. While wxPanel and wxDialog, which are two of
the usual control containers, already do it, you had to explicitly use macros
such as `WX_DECLARE_CONTROL_CONTAINER()` and
`WX_DELEGATE_TO_CONTROL_CONTAINER()` if you wanted to write your own composite
controls. Luckily few people did this because these macros were not even
documented but even just using them in wxWidgets itself causes much teeth
gnashing. And particularly so from my part, almost surely because I wrote these
macros myself (and only 10 years ago so even the "explanation for using macros
here is forever lost in the mists of time" excuse is at most half-valid).

So when I had to add correct keyboard navigation to `wxSearchCtrl` to fix
[another bug], I finally decided to atone for my mistake. The solution turned
out to be surprisingly simple and nice: instead of all these macros I added a
new [wxNavigationEnabled] class which uses [CRTP] to inject the TAB-handling
logic into the derived class. So, as the example in the documentation shows, you
now simply have to inherit your custom composite control from
`wxNavigationEnabled<wxWindow>` instead of directly deriving from `wxWindow` to
get correct keyboard handling, e.g.:

    class MyCompositeControl : wxNavigationEnabled {
        // ...
    };


Using `wxNavigationEnabled` is definitely much simpler than using macros -- in
fact, it's so simple that it could even finally be documented quite painlessly,
which is a good criteria -- so I'm quite happy with it (as you can see, even
happy enough to write a blog post about this). Even though not having to do
anything at all and have TAB-navigation just work would certainly be even
better, this can't be done without moving all the TAB navigation logic down into
`wxWindow` itself and there are many, many windows which don't contain any other
controls this doesn't look like a good idea.

Anyhow, this battle against macros was won but the war is not over yet. Getting
rid of (or at least providing non preprocessor-based alternatives to) all macros
in wxWidgets is not the highest priority issue but it's still nice to make some
progress on it. And if you have any candidates for irritating macros to be dealt
with next, please let us know!

[another bug]: https://trac.wxwidgets.org/ticket/12808
[wxNavigationEnabled]: https://docs.wxwidgets.org/trunk/classwx_navigation_enabled.html
[CRTP]: http://en.wikipedia.org/wiki/Curiously_recurring_template_pattern
