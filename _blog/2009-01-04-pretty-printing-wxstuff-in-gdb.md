---
title: Pretty printing wxStuff in gdb
date: '2009-01-04T21:05:00.004Z'
author: Vadim Zeitlin
modified_time: '2009-01-04T22:29:53.272Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-8879719610684874107
blogger_orig_url: http://wxwidgets.blogspot.com/2009/01/pretty-printing-wxstuff-in-gdb.html
---

I've recently stumbled upon a highly informative [series of articles] by Tom
Tromey, one of gdb developers (among other things), about embedded Python in new
gdb. The one immediately useful consequence of this is that you can now write
pretty printers for custom data structures as explained [here]. Unlike the
custom gdb commands, the custom pretty-printers apply to all occurrences of the
objects, including as fields in the other data structures and even in the
backtraces printed by gdb itself so they are much more useful.

So without further ado here is a pretty printer for `wxString` from svn trunk
(it can also be trivially adapted for 2.8 version by using `m_impl.m_pchData`)
shamelessly stolen from the examples above:

```py
class wxStringPrinter:
 def __init__(self, val):
     self.val = val

 def to_string(self):
     return '"' + self.val['m_impl']['_M_dataplus']['_M_p'].string() + '"'

gdb.pretty_printers['^wxString$'] = wxStringPrinter
```

This is supposed to be put into a file sourced with `source -p` gdb command
(there is apparently a better way to load this than simply inserting the command
in `.gdbinit` but for now this is good enough for me).

And then:

```
[sunset:../src/build/wx-gtkud/samples/minimal]% gdb minimal
(gdb) b 149
Breakpoint 1 at 0x40cc65: file /usr/local/src/wx/HEAD/samples/minimal/minimal.cpp, line 149. (2 locations)
(gdb) r
Starting program: /usr/local/src/build/wx-gtkud/samples/minimal/minimal
[Thread debugging using libthread_db enabled]

Breakpoint 1, MyFrame (this=0x5751a0,title="Minimal wxWidgets App") at /usr/local/src/wx/HEAD/samples/minimal/minimal.cpp:149
149         SetIcon(wxICON(sample));
(gdb) bt 1
#0  MyFrame (this=0x5751a0, title="Minimal wxWidgets App") at /usr/local/src/wx/HEAD/samples/minimal/minimal.cpp:149
(gdb) p title
$1 = "Minimal wxWidgets App"
```

Of course, you do need a Python-enabled gdb for this to work. The easiest way is
probably to get the package from Debian Experimental as I did. Otherwise you can
always follow the instructions on Tom's blog and get gdb sources from git and
built them yourself.

But this is really incredibly useful and will be even more so when we add
pretty-printers for the other wxWidgets types (e.g. wxDateTime could definitely
benefit). Any contributions to [our custom pretty-printers] would be welcome!

[series of articles]: http://tromey.com/blog/?p=494
[here]: http://tromey.com/blog/?p=524
[our custom pretty-printers]: https://github.com/wxWidgets/wxWidgets/blob/master/misc/gdb/print.py
