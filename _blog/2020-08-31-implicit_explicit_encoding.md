---
title: Implicit and explicit encoding of wxString data
date: '2020-08-31T12:00:00.001Z'
author: Arrigo Marchiori
tags:
- api
- change
---

This blog post is about encoding and decoding non-ASCII characters in wxString's.

---

**TL;DR:** Define the macro `wxNO_IMPLICIT_WXSTRING_ENCODING` if you want your compiler to refuse to convert wxStrings to and from C strings, unless you explicitly indicate the encoding.

---

#### The dim and distant past

A long time ago, when wxWidgets 2.8 ruled the world, developers had to choose between two different wxWidgets builds: "Unicode" and "ANSI". Anyone living (or exporting their software) out of the United States probably chose the Unicode build, because it allowed them to work with non-ASCII strings, containing accented letters, umlauts and other funny symbols foreign languages like to use.

The biggest downside of the Unicode build was that every literal string had to be wrapped by the `wxT()` macro, in order to be transformed into a wxString. Standard `const char *` strings were not allowed as wxStrings in Unicode builds.

```cpp
    wxString english = wxT("We the people...");
    wxString italian = wxT("L'Italia è una Repubblica...");
```
    
The `wxT()` macro had two different meanings, depending on the current build. In ANSI builds, it was a no-op. In Unicode builds, it was equivalent to a `L`, indicating that the literal string was “wide”, i.e. based on `wchar_t` rather than `char`.

#### The closer past

One of the great improvements of wxWidgets 3.0 over the previous versions, was that [Unicode builds were the default](https://docs.wxwidgets.org/3.1/overview_unicode.html#overview_unicode_support_default), but more important, the `wxT()` macro was not necessary any more and was declared obsolete.

Finally, developers could use plain `const char *` for literal strings all over the place, with all their à’s, ü’s and ø’s, knowing that their compiler, wxWidgets and their operating system would know what to do.

Or maybe not.

Some users were in fact noticing that the same code was working well on a platform, while on another platform the contents of some strings were lost because their encoding or decoding failed silently.

The default behavior of the “automatic” encoding and decoding of wxString’s [was found to be "unsafe"](http://www.wxwidgets.org/blog/2017/02/safer-s/)  and a new macro was born to prevent problems: `wxNO_UNSAFE_WXSTRING_CONV`.

#### Encodings galore

This chapter is about string encoding. You can skip it if you already know what Unicode, ASCII, ISO-8859-1 and UTF-8 are. You can also refer to the document "[Unicode support in wxWidgets](https://docs.wxwidgets.org/3.1/overview_unicode.html)" for more details on the Unicode Standard and how wxWidgets implement it.

The main problem with "standard" (i.e. non-wide) strings in today’s globalized world, is that one char is "only" 8 bits, and therefore it cannot represent any symbol from any language being spoken today. The ASCII encoding, for example, does not contain any accented letters.

The first solution to this problem was to "amend" ASCII, assigning language-specific symbols to the characters above number 127. This was a good solution, as long as you did not need to display, say, Russian and German messages in the same program. 8 bits could have been enough for one language, but not for all of them at the same time. And for other languages, such as Chinese, they were not even enough.

The second solution was to enable multi-byte encodings. If 8 bit were not enough, then 16 could suffice, or maybe even 24 or 32.

Quoting Andrew S. Tanenbaum, the nice thing about standards is that you have so many to choose from. There is no "silver bullet" encoding, and you and wxWidgets must be ready to support all (or at least many) of them.

In order to make encodings inter-operable, you need a "super-encoding" that could represent all possible characters, symbols, letters etc. That’s the Unicode Standard.

Strings should then be considered "Unicode strings". Rather than "characters", they are made of "code points". A code point can represent a character, a part of it or even something else, like information on spacing or line breaking. There is no possibility to confuse an "À" with a "╖" in the Unicode world, because every character of every language can be represented by one or more code points.

Encodings, then, can be seen as ways to convert characters between the perfect world of Unicode, and whatever "limited" encoding you are currently using on your computer. The process of converting text to Unicode is called "decoding", whereas representing Unicode codepoints into your current encoding is called "encoding".

In wxWidgets, Unicode strings are represented as wide strings. The most expert readers would argue that `wchar_t` strings are also encoded, but we can ignore this detail as it should not affect us practically: wide strings are the closest we can get to the ideal Unicode world. The `wxMBConv` and derived classes are used to convert between wide and narrow strings. Following the terminology we just introduced, it is enough for us to understand that "encoding" means converting wide to narrow strings, and "decoding" means converting narrow to wide strings.

#### What’s my encoding and how do I choose it?

We will discuss decoding strings first, but the same logic will apply to encoding them.

There are three ways to create a `wxString` from a literal string:

1. Wide character strings. When you declare them (remember, this was the case of the now-obsolete `wxT()` macro), you are asking your **compiler** to decode them into Unicode. You just need to tell your encoding to GCC, Visual Studio or whatever build system you are using, and you can rely on them for exact decoding of all your strings.

2. Explicit encoding. Use the `wxString` constructor or any other factory method that explicitly indicates the encoding. For example: `wxString::fromASCII()` or `wxString::fromUTF8()`. In this case, your **code** is responsible for indicating the correct encoding.

3. Rely on the default `wxString` constructor, letting it "guess" the encoding for you. This is the "implicit" way, allowed since wxWidgets 3.0. This is based on the **operating system**'s choice of the best encoding for the current user, **at run time**. This encoding is called `wxConvLibC`.

This post is about disabling choice 3. above, in case you want to be 100% in control of your strings.

For example, if Linux is your primary choice for developing and testing your software, your CPP files will probably be encoded in UTF-8, because that is the standard nowadays.

If you compiled the same CPP files on Windows, the same strings may be decoded incorrectly, because Windows is not currently adopting UTF-8 as  standard for all languages, and `wxConvLibC` could rather choose Windows-1252 if you are in Europe.

As stated at the beginning of this paragraph, the same applies to encoding wxStrings. You can:

1. request a `wchar_t` representation with method `wxString::wc_str()`,

2. call method `wxString::mb_str()` explicitly indicating the encoding (for example `wxConvUTF8`),

3. call method `wxString::mb_str()` without any parameters, i.e. requesting `wxConvLibC`.

#### Why do we need another macro?

wxWidgets 3.0 never took away from you the possibility to indicate encodings explicitly, or to use wide character strings for all your literals. But there may be many places where the conversions are done... implicitly, under the hood, with no notice.

The purpose of the `wxNO_IMPLICIT_WXSTRING_ENCODING` macro is to disable all such conversions, so that they would just not compile. It is designed to help developers spot all the places where they are not indicating the encoding explicitly.

You are free to use it, or not. By default it is not defined, so if you want to activate it, you have to change your build configuration, as suggested in the blog post for the `wxNO_UNSAFE_WXSTRING_CONV` macro linked above.

As a side note, the new macro implies the old one: if you disable any implicit en/decoding, you are also disabling the unsafe ones.

#### Conclusion

The `wxNO_IMPLICIT_WXSTRING_ENCODING` macro tries to be an additional help to developers, who want to be extra-sure that their software will work well on any computer worldwide.

In the intentions of the wxWidgets’ developers, this macro must not introduce any breakage to currently working code, when not activated.

If your software is being affected in any ways by this new macro, and you are not defining it, then please contact them because they may need to fix something.
