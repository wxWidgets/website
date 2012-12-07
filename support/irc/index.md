---
layout: default
title: "IRC Channel"
---

If the documentation isn't enough and you need in-person help, you can try the
`#wxwidgets` channel on the [Freenode][1] IRC server (`irc.freenode.net`). This
channel is regularly filled with many people who are all very experienced with
wxWidgets and are often willing to help.

[1]: http://freenode.net/


## Tips for Getting Help

The wxWidgets IRC channel is an active and growing community of wxWidgets users
who will gladly share their knowledge to help you get your wxWidgets code
working. However, they are also generally busy people, so there are some things
you can do to improve your chances of getting a helpful answer to your
questions.

### Don't Ask to Ask

**Avoid** questions like this:

* Is anyone here?
* Does anyone know anything about ______?
* Has anyone ever done ______?
* Are any of the wxWidgets developers here?

Most people simply ignore these questions. They have found that answering them
causes the recipient to expect personal attention from them, and they don't
want to set that expectation without knowing the scope of the problem. Just
asking what you want to know will be far more effective.

The last question also presumes that the rest of the users aren't good enough
to help you with your problem. You may be surprised to learn how much regular
users know about the framework's internals.

### Provide Enough Information to Solve the Problem

* If you're getting an error, copy and paste the real error. Don't paraphrase,
  don't retype, don't interpret. Error messages contain details that you might
  miss but that are probably essential.
* Provide just enough code that will compile and will demonstrate the problem.
  Occasionally incomplete code can be useful, but in most cases the person
  helping you will need to run the code. That person probably does not have
  time to work to try to compile it.
* Tell people what you expect to happen and what is actually happening. If you
  only include one or the other, no one will be able to figure out what you
  want help with.
* Don't flood IRC channels. If you have more than a very few lines to paste,
  use a [pastebin].

[pastebin]: http://pastebin.com/

### Be Patient

* Stick around the channel for a while after asking. Many people check their
  IRC windows regularly but infrequently.
* Don't complain about how quiet or unhelpful the channel is. That's a sure way
  to turn away people who might have been thinking about helping.

### Be Courteous

* Check the [manual], the [FAQ], and the [wiki] first. People hate answering
  RTFM questions.
* Don't privately message people without permission. Unsolicited private
  messages are considered intrusive and annoying. (Besides, when you get your
  support in public, others may learn from it, too.)
* Don't complain about how much wxWidgets sucks if it doesn't do what you want.
* Realize that although we are glad to help you understand how to use
  wxWidgets, we won't write your program for you. You will get the best
  responses to your questions if you show evidence of having tried to solve the
  problem yourself, rather than asking for examples at every step.

[manual]: http://docs.wxwidgets.org/stable/
[faq]: /docs/faq.htm
[wiki]: http://wiki.wxwidgets.org/


## wxOracle Bot Usage

We have provided a helpful bot by the name of "wxOracle" in the IRC channel
with the ability to retrieve class and method descriptions and information
directly from the wxWidgets documentation (besides the usual features supported
by most IRC bots). Currently, only one command is supported:
`@describe <method> | <class> [<method>]`. Some basic examples are shown below.

Probably the most basic usage is simply to get information about a certain
class or class template.

    < tierra> @describe wxSizer
    < wxOracle> wxSizer [#include "wx/sizer.h"] (Super-classes: wxObject)
                (Sub-classes: wxBoxSizer, wxGridSizer)
    < wxOracle> wxSizer is the abstract base class used for laying out
                subwindows in a window. You cannot use wxSizer directly;
                instead, you will have to use one of the sizer classes derived
                from it. Currently there are wxBoxSizer, wxStaticBoxSizer,
                wxGridSizer, wxFlexGridSizer, wxWrapSizer and wxGridBagSizer.
                ... The layout algorithm used by sizers in wxWidgets is
                closely related to layout in other GUI (7 more messages)

Note how the description is cut off at "(7 more messages)". More information
can be retrieved on your last query by simply typing `@more`.

    < tierra> @more
    < wxOracle> toolkits, such as Java's AWT, the GTK toolkit or the Qt
                toolkit. It is based upon the idea of the individual
                subwindows reporting their minimal required size and their
                ability to get stretched if the size of the parent window has
                changed. ... This will most often mean that the programmer
                does not set the original size of a dialog in the beginning,
                rather the dialog will be assigned a sizer and this sizer will
                be (6 more messages)

For global methods, there is no class scope to specify, so it's just the same
as retrieving class documentation. Note that no specific method overload needs
to be (or can be) specified, all overloads will be printed.

    < tierra> @describe wxFindWindowAtPointer
    < wxOracle> wxWindow* wxFindWindowAtPointer(wxPoint &pt)
    < wxOracle> Find the deepest window at the mouse pointer position,
                returning the window and current pointer position in screen
                coordinates. Include file: "#include <wx/window.h>"

Class methods can be specified in one of two different ways: either as
`@descibe wxClass::Method` (using the scope resolution operator), or as
`@describe wxClass Method` (just using a space).

    < tierra> @describe wxMenu::Remove
    < wxOracle> wxMenuItem* wxMenu::Remove(int id)
    < wxOracle> wxMenuItem* wxMenu::Remove(wxMenuItem *item)
    < wxOracle> Removes the menu item from the menu but doesn't delete the
                associated C++ object. This allows you to reuse the same item
                later by adding it back to the menu (especially useful with
                submenus). ...   Return: A pointer to the item which was
                detached from the menu.

In some cases, the class method you're looking for might have a fairly unique
name, in which case, you can get away with simply just listing the method
without specifying the class.

    < tierra> @describe GetEvtHandlerEnabled
    < wxOracle> bool wxEvtHandler::GetEvtHandlerEnabled() const
    < wxOracle> Returns true if the event handler is enabled, false otherwise.
                See: SetEvtHandlerEnabled()

However, if the method is ambiguous, the bot will list the locations it found
methods by the same name.

    < tierra> @describe GetSize
    < wxOracle> 23 methods found: wxXmlResourceHandler::GetSize,
                wxDC::GetSize, wxSizer::GetSize,
                wxDataViewCustomRenderer::GetSize, wxRect::GetSize,
                wxSizerItem::GetSize, wxArchiveEntry::GetSize,
                wxWindow::GetSize, wxCountingOutputStream::GetSize,
                wxAnimation::GetSize, wxTarEntry::GetSize, wxCaret::GetSize,
                wxCustomDataObject::GetSize, wxQueryLayoutInfoEvent::GetSize,
                wxBitmap::GetSize, wxStreamBase::GetSize, (1 more message)

Any of the above commands can also be used in a private message session with
wxOracle too in case you would either like keep the main channel free of noise
or just want to keep your work secret. If you do this, you also don't need to
prefix all of your commands with `@`.
