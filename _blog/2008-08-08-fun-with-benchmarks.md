---
title: Fun with benchmarks
date: '2008-08-08T00:56:00.002Z'
author: Vadim Zeitlin
modified_time: '2008-08-08T01:12:28.986Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-5490375304689084459
blogger_orig_url: http://wxwidgets.blogspot.com/2008/08/fun-with-benchmarks.html
---

I was looking into optimizing the new UTF-8 string class in wxWidgets 3 and I
had to decide about the most efficient way to cache information about mapping
UTF-8 positions into byte offsets. So I wrote a [simple benchmark] to measure
the overhead of using the thread-specific variables compared to using normal
globals.

[simple benchmark]: https://github.com/wxWidgets/wxWidgets/tree/master/tests/benchmarks

To be precise I wrote a simple loop updating the variable (which is, of course,
not at all realistic but that's micro benchmarks for you) using the following
methods:

1.  Direct global variable access
2.  Using compiler thread-specific variables support (`__thread` for g++ and `__declspec(thread)` for MSVC)
3.  Using OS-specific TLS support (Win32 TLS or POSIX threads TSD)
4.  Using `boost::thread_specific_ptr`

The results were somewhat surprising, although also encouraging: under both
Win32 (x86) and Linux (amd64) platforms the first two ways were the fastest. The
OS functions were 3 times slower under Windows and 5 times slower under Linux.
Boost implementation was disappointing, at least from performance point of view
as it was 2 times slower than OS functions, making it 6 or 10 slower than the
fastest version. This is bad news as I hoped to avoid writing a
wxWidgets-specific TLS class and just use Boost version but this doesn't seem a
good idea for performance-sensitive code.

But the biggest surprise, at least for me, came from the comparison of the first
two approaches: using compiler support for thread-specific variables turns out
to be _faster_ than using plain old globals. This was so unexpected that I even
checked the disassembly to see if I wasn't missing anything and it turns out
that gcc generated exactly the same code for both versions except that in the
thread-specific version it used FS-relative addressing to access the value. For
MSVC the code wasn't quite the same but it also used FS for thread-specific
variable. So it looks that under both x86 and amd64 using FS register is
actually faster than using normal absolute addressing.

In any case, it's good to know that having thread-specific variables brings no
performance loss when they are supported by the compiler. Of course, my
benchmarks are very specific and, last but not least, they don't have any thread
running. However I think the results should be broadly true for more realistic
code which I'm going to benchmark once the real caching implementation is
written.
