---
title: In Praise of Connect()
date: '2007-01-26T00:39:00.000Z'
author: Vadim Zeitlin
tags:
modified_time: '2007-01-26T17:02:59.603Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-116519373628190378
blogger_orig_url: http://wxwidgets.blogspot.com/2007/01/in-praise-of-connect.html
---

In this post I'd like to address a common misconception about wxWidgets which is
that it is somehow dirty and beneath consideration of "real" C++ programmers
because it relies too much on preprocessor macros. While it is true that the
traditional way to handle events in wxWidgets is using the macro-based event
tables, there is nothing really dirty nor evil about these macros: they are
there simply to save typing. In particular, they don't suffer from the usual
[macro pitfalls] as they don't have any side effects and are type-safe
(`static_cast` is used internally to ensure this).

[macro pitfalls]: http://gcc.gnu.org/onlinedocs/cpp/Macro-Pitfalls.html

However the main point is that the event tables macros are just one of two ways
of connecting the event handlers to events in wxWidgets and it's perfectly
possible to not use them at all. Moreover, there are good reasons to use the
alternative way beyond the subjective dislike of macros. This other way is the
[Connect()] method which, unsurprisingly, allows to connect a method of a class
derived from `wxEvtHandler` (which includes, but is not limited to, any
`wxWindow`-derived class) to an event.

[Connect()]: https://docs.wxwidgets.org/trunk/classwx_evt_handler.html#a78719e8b82c9f9c6e4056b3449df1943

The syntax is slightly more verbose which is, of course, one of the reasons for
using the event table macros in the first place, they simply save some typing.
So instead of this:

    BEGIN_EVENT_TABLE(MyFrame, wxFrame)
      EVT_MENU(wxID_EXIT, MyFrame::OnQuit)
    END_EVENT_TABLE()

You need to write (in the body of some method of MyFrame and not at global scope
as with the event tables):

    MyFrame::MyFrame(...)
    {
      Connect(wxID_EXIT, wxEVT_COMMAND_MENU_SELECTED,
      wxCommandEventHandler(MyFrame::OnQuit));
    }


Notice the use of `wxCommandEventHandler` which ensures that the method is of
correct type by using `static_cast` in the same way as event table macros do it.

So we see that all uses of event table macros can be trivially replaced with
`Connect()` calls. However `Connect()` is more powerful than macros and can do a
few things that macros are incapable of:

1.  Event handlers can be connected at any moment, e.g. it's possible to do some
    initialization first and only connect the handlers if and when it succeeds.
    This can avoid the need to test that the object was properly initialized in
    the event handlers themselves: with `Connect()` they simply won't be called
    at all if it wasn't.

2.  As a slight extension of the above, you can [Disconnect()] the handlers at
    any time. And maybe later reconnected again. Of course, it's also possible
    to emulate this behaviour with the classic static (i.e. connected via event
    tables) handlers by using an internal flag indicating whether the handler is
    currently enabled and returning from it if it isn't, but using dynamically
    connected handlers requires less code and is also usually more clear.

    [Disconnect()]: https://docs.wxwidgets.org/trunk/classwx_evt_handler.html#a13061cf0ed01ac10a804ac057ef4bdbc

3.  Also notice that you must derive a class inherited from, say, `wxTextCtrl`
    even if you don't want to modify the control behaviour at all but just want
    to handle some of its events. This is especially inconvenient when the
    control is loaded from the XRC. Connecting the event handler dynamically
    bypasses the need for this unwanted subclassing.

4.  Last but very, very far from least is the possibility to connect an event of
    some object to a method of _another_ object. This is impossible to do with
    event tables because there is no possibility to specify the object to
    dispatch the event to so it necessarily needs to be sent to the same object
    which generated the event. Not so with `Connect()` which has an optional
    `eventSink` parameter which can be used to specify the object which will
    handle the event. Of course, in this case the method being connected must
    belong to the class which is the type of the `eventSink` object! To give a
    quick example, people often want to catch mouse movement events happening
    when the mouse is in one of the frame children in the frame itself. Doing it
    in a naive way doesn't work:

    *   A `EVT_LEAVE_WINDOW(MyFrame::OnMouseLeave)` line in the frame event
        table has no effect as mouse move (including entering and leaving)
        events are not propagated upwards to the parent window (by default,
        anyhow).
    *   Putting the same line in a child event table will crash during run-time
        because the MyFrame method will be called on a wrong object.

    However writing:

        MyFrame::MyFrame(...)
        {
          m_child->Connect(wxID_ANY,
            wxEVT_LEAVE_WINDOW,
            wxMouseEventHandler(MyFrame::OnMouseLeave),
            NULL, this);
        }

    will work exactly as expected. Note that you can get the object which
    generated the event -- and which is not the same as the frame -- via
    `event.GetEventObject()`.

So the morale of the story is: **_don't hesitate to use Connect(), it's much
more powerful than static event tables_** which should be reserved just for the
most simple situations when you don't need any additional flexibility and wish
to save some extra typing, or maybe not even then for consistency sake.
