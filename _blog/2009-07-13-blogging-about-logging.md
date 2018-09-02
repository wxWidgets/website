---
title: Blogging about logging
date: '2009-07-13T06:32:00.000Z'
author: Vadim Zeitlin
tags:
- log
- new
modified_time: '2013-04-30T11:04:15.861Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-6011097824517489594
blogger_orig_url: http://wxwidgets.blogspot.com/2009/07/blogging-about-logging.html
---

I've [just finished] a series of changes which were meant to make [wxLog] less
embarrassing and more useful. Of course, wxLog was always meant to be a simple
logging framework adapted for typical logging patterns of GUI applications but
there is such thing as being too simple and it became apparent since quite some
time that wxLog was insufficient for any kind of application using multiple
threads or even simply separated in multiple components whose logging should be
controlled simultaneously. And as most applications nowadays do use multiple
threads, this is a serious limitation indeed.

[just finished]: https://trac.wxwidgets.org/changeset/61423
[wxLog]: https://docs.wxwidgets.org/trunk/classwx_log.html

As an aside, when I realized that the deficiencies of `wxLog` really prevented
it from being useful in the application I was working on, my first idea was not
to enhance it but to switch to another, dedicated logging library. But
incredibly enough I couldn't find any good candidate: there are tons of
libraries based on [log4j] but translating Java API in C++ is really not a good
idea and I hoped to find something more idiomatically C++-ish. So I naturally
turned towards Boost and found not one but two libraries named "Boost.Log", with
[one] even confusingly called "Boost.Log v2" despite being older than the [other
one]. Unfortunately, while both of them are undoubtedly great libraries, I was
completely overwhelmed by their complexity. They are certainly great and allow
some things I wouldn't even think of if I were creating a new logging library
from scratch, e.g. a possibility to associate a [decrementing counter starting
from 100 with step of -5] with every log record which is extremely impressive
but also doesn't seem to be especially useful in practice and I'd prefer to just
simply use a logging library instead of admiring its marvellous elegance. So I
passed them too -- and decided that while `wxLog` might be too simple, keeping
it simple enough was still very important.

[log4j]: https://logging.apache.org/log4j/1.2/index.html
[one]: http://torjo.com/log2/
[other one]: http://boost-log.sourceforge.net/libs/log/doc/html/index.html
[decrementing counter starting from 100 with step of -5]: http://boost-log.sourceforge.net/libs/log/doc/html/attributes.html#header.boost.log.attributes.counter_hpp

With this in mind, I decided to simply fix the few most glaring omissions in
wxLog:

1.  Lack of support for logging from threads other than main.
2.  Impossibility to treat logs from different parts of application differently.
3.  Absence of `__FILE__`, `__LINE__` and `__FUNCTION__` information.

The first one was already solved for some logging targets, e.g. [wxLogWindow]
was already thread-safe as it collected the messages coming from other threads
and really displayed it in its text control only during the idle time from the
main thread. All I did was to extend this approach to all log targets by moving
its implementation in `wxLog` itself.

[wxLogWindow]: https://docs.wxwidgets.org/trunk/classwx_log_window.html

This does introduce a new problem however: as the messages are buffered instead
of being output immediately, they could be lost if the program crashes before
the main thread has a chance to output them. So I also added a concept of
per-thread log targets which can be associated with a single thread only and
don't need to do any buffering. Of course, such target can't show messages to
the user -- as this can only be done from the main GUI thread -- but it can log
them to a file and so a thread can always set up [wxLogStderr] or a
[wxLogStream] to ensure that its messages are saved in a file as soon as they
are output.

[wxLogStderr]: https://docs.wxwidgets.org/trunk/classwx_log_stderr.html
[wxLogStream]: https://docs.wxwidgets.org/trunk/classwx_log_stream.html

On a related note, using [wxLogNull] (and [wxLog::EnableLogging()] which it uses
internally) now only disables logging for the current thread and not the
application as a whole. This makes sense as if you just want to suppress an
error message from a wxWidgets function you're going to call, you shouldn't
disable all the logs from the other threads of your application which can be
doing something completely unrelated while this function is executing. The
initial plan was to also add a new way of disabling the logging globally but
after thinking about it for quite some time I couldn't find any realistic use
case when doing this would be really useful so for now logging can only be
enabled thread-wise -- but we can always make it possible to disable it either
globally or, which probably makes more sense, on log target basis, if really
needed.

[wxLogNull]: https://docs.wxwidgets.org/trunk/classwx_log_null.html
[wxLog::EnableLogging()]: https://docs.wxwidgets.org/trunk/classwx_log.html#58bbfc0831eb47f0d88c9350d1f6e02d

The second problem was solved by introducing the notion of "log components".
These are simply arbitrary strings which identify the component which logged a
message. By default, messages logged by wxWidgets come from the log component
"wx" and its subcomponents, that is strings starting with "wx/" like, for
example, "wx/net/ftp", while messages generated outside of wxWidgets have empty
log component as it's not defined by default. This is already useful as
sometimes you may want to treat wxWidgets and your own messages differently,
e.g. you could disable all non-error messages from wxWidgets by [setting the log
level] of the "wx" component to `wxLOG_Error` while keeping all messages,
including the debugging ones, from your code enabled. But this feature becomes
really useful mostly when you do define your own custom log components. This is
done simply by `#define`-ing `wxLOG_COMPONENT` before using `wxLogXXX()`
functions. It can be done on the compiler command line (to ensure that the same
value is uniformly used everywhere) or inside the source files. In either case
you will probably want to use different values for different parts of your
application, e.g. "myapp/ui" and "myapp/db" and "myapp/network" and so on. And
then you can independently configure the log level for each module and, also
importantly, you can distinguish between the messages logged by different
components and send them to different final destinations (e.g. database-related
messages to one log file and network ones to another) from your overridden
[wxLog::DoLogRecord()].

[setting the log level]: https://docs.wxwidgets.org/trunk/classwx_log.html#7ae244e71dff20efd3a37b3718841a39
[wxLog::DoLogRecord()]: https://docs.wxwidgets.org/trunk/classwx_log.html#ede0ff7812690d487de845b7f3095dfd

Finally, to solve the last problem in the list, all `wxLogXXX()` functions have
been replaced by macros with the same names, which allows to record the
information about the log message location. It can be retrieved from
`DoLogRecord()` from the [wxLogRecordInfo] struct passed to it. By default, this
information is not used in any of the predefined loggers (yet?) but it's
available in case you need it.

[wxLogRecordInfo]: https://docs.wxwidgets.org/trunk/classwx_log_record_info.html

Moreover, in process of doing this, I actually created a relatively generic
mechanism for passing arbitrary extra information to the log functions -- but,
still remembering my experience of reading Boost.Log documentation, I decided to
not make it public for now and to keep things simple.

After all, with the additions mentioned above `wxLog` is already much more
useful and hopefully it's good enough for even complex wxWidgets applications
now. And if not, we'd be interested to hear about still missing features, of
course, so do have a look at the improved `wxLog` version in svn trunk and let
us know what do you think!
