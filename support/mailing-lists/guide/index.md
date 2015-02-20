---
title: "Mailing List Posting Guide"
---

This guide explains how to use the wxWidgets mailing lists effectively.
Although you may choose to not follow these guidelines, don't be surprised if
no-one provides any help. While many developers on the lists are happy to help,
all of them instinctually ignore posts not conforming to these guidelines.
Following these simple guidelines makes life much simpler for yourself as well
as those helping you.


## General Advice

Please read the wxWidgets documentation (manual, install.txt, FAQ) and search
the mailing list archive, before posting.

If you don't find an answer to your question and decide to post, please try to
give a specific, meaningful subject line to your posts so people can pick them
out easily, and it helps others find your post (and the answer) more easily.
The subject line must be descriptive to your problem.

When writing the body of your message, please:

* Ensure that you're using plain text, not HTML.
* Set your word wrap to 75 or less.
* Use English as correct as possible and, at the very least, use English and
  not some other language.
* Avoid multiple exclamation or interrogation marks, this simply gives bad
  impression about you without conveying any other information.

Please don't post large attachments to the mailing list. If you have something
to show (a screenshot in general), please put it on the web somewhere and post
a link. You can use free services like [Imgur] for screenshots, or [Pastebin]
for large excerpts of code or log output.

[Imgur]: http://imgur.com/
[Pastebin]: http://pastebin.com/

Generally, please ask your questions in a [smart way][catb]. Many, if not all,
of the advices there are applicable to the wxWidgets mailing lists.

[catb]: http://www.catb.org/~esr/faqs/smart-questions.html

The easier it is to help you, the more likely you are to get the help you need.


## Version and Platform Information

A question or bug report without version and platform information is useless.
Unless our crystal ball is in an exceptionally good working state on the day of
your posting, we generally have no idea what are you speaking about.

So please **always** mention your platform (this includes the architecture and
the compiler used for building wxWidgets) and wxWidgets version. If you are
using a clone of wxWidgets from git, please specify the commit you have checked
out (it can be seen in `git log` output). You may either mention it in the
subject, like this:

    [2.8.11, platform, compiler] subject
     ^         ^        ^
     |         |        +--- e.g. BC 5.0, VC 7.1, etc.
     |         +------------ e.g. WinXP, GTK+ 2, X11, etc.
     +---------------------- 2.9.0, git master from some date, ...

or inside the message body with a section like this:

    WX      : 2.8.11
    OS      : Windows 7
    COMPILER: VC9 (mention whether you use IDE or makefile)


## Build Problems

Please make sure to mention any non-standard options you used. For example, any
modifications to `wx/setup.h` for Windows builds or any non-default configure
options for Unix ones. Especially mention if you're using an STL build and, for
2.8, if you're using Unicode version or ANSI one. For Unix platforms the
contents of the `config.log` file is often helpful for diagnosing the problem.

Please don't send hundreds or thousands of lines of compiler or make output, as
you can certainly understand nobody is going to read them anyhow. Almost always
the first few errors, if not the first one, are enough. Please try to trim the
output before posting it. And, on a related note, please translate it to
English if your compiler gives errors in another language. If we can't
understand your message, we can't help you.


## Non Fatal Bugs

Generally it's much better to show a little bit of source with the code that
causes the problem, rather than sending an entire program that people then have
to sift through (nobody has time to do this anyhow).

Unless this is exceptionally difficult to do, please try to reproduce your
problem in one of the samples (minimal one by default, another one may be more
suitable if it already contains some of the code you need to show the problem)
and send us just a diff which can be produced by `git diff` command or by
saving the original file and running the diff utility (with `-bBu2` options)
against it after your changes.


## Fatal Bugs

Don't send a message about a program crash if you haven't already tried running
it under a debugger to investigate the problem. If you did, please send the
relevant part of the stack trace (what functions the crash happened in) for a
crash-type bug. Do note that you must use a version of wxWidgets built with the
debug info for the crash to be at all useful.

And unless the reason for the crash is obvious from the provided stack trace,
please also provide a way of reproducing the problem using the instructions for
the non-fatal bugs above.
