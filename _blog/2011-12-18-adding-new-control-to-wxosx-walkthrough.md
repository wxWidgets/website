---
title: 'Adding a New Control to wxOSX: A Walkthrough.'
date: '2011-12-18T13:21:00.002Z'
author: Vadim Zeitlin
tags:
- osx
- developer
modified_time: '2011-12-20T16:01:42.054Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-4858086263868601065
blogger_orig_url: http://wxwidgets.blogspot.com/2011/12/adding-new-control-to-wxosx-walkthrough.html
---

I've decided to write down my notes about implementing a new control for wxOSX
port in the hope that it can help other OS X developers to participate in wxOSX
development (but, to be honest, also because I might return to it myself when I
have to do this the next time).

So, without further ado, here is the full and unabridged true story \[\*\] of
implementing [wxDatePickerCtrl] in wxOSX/Cocoa.

[wxDatePickerCtrl]: https://docs.wxwidgets.org/trunk/classwx_date_picker_ctrl.html

To start with, you need to set up your wxWidgets development environment. For
this you need to get wxWidgets sources, ideally from [svn] or its [git mirror].
You then need to build them enabling debug support to make sure you can debug
them later. The simplest way to do this is to use the command line, even if you
prefer to use Xcode for editing and debugging later. It's strongly recommended
to build wxWidgets in a separate directory from the one containing its sources,
so, assuming you put the sources in `$HOME/src/wx`, you should do:

    mkdir -p ~/build/wx/osx_cocoa-debug
    cd $_
    ~/src/wx/configure --with-osx_cocoa --enable-debug

[svn]: https://www.wxwidgets.org/develop/code-repository/
[git mirror]: https://github.com/wxWidgets/wxWidgets

If you prefer to build in 32 bits, add `--enable-macosx_arch=i386` switch to
configure. Another useful option is `-C` to make configure cache the results of
its checks, this will make it run much faster the subsequent times. In any case,
after doing this you just need to do `make -s -j8` with "-s" added to avoid huge
quantities of output you probably don't care about and "-j8" being adequate for
the modern quad-core CPUs. Of course, if you use a less -- or more -- powerful
machine, adjust the "8" accordingly. Depending on your machine characteristics
the build can take anywhere from a couple of minutes to half an hour or more but
it should eventually finish. To test that everything well, and also because we
will need it later for testing anyhow, try building and running the "widgets"
sample:

    cd ~/build/wx/osx_cocoa-debug/samples/widgets
    make -s
    open ./widgets.app

Next step is to add stubs for OS X-specific version of the control: usually, the
control you want to implement will be already available under OS X but its
"generic", i.e. platform-independent and hence not really Mac-looking, version
would be used. We want to replace it with the native one so let's do it by
modifying a few files in wxWidgets sources:

1.  Modify `include/wx/datetimectrl.h` to include `wx/osx/datetimectrl.h` if
    `__WXOSX_COCOA__` is defined. Notice that we only implement this control for
    the Cocoa port version, if you were doing it for both Carbon and Cocoa, you
    would have tested for just `__WXOSX__`.

2.  Our example is actually more complicated than a typical control because
    there are two classes: `wxDateTimePickerCtrlBase`, which is the common base
    class for `wxDatePickerCtrl` and `wxTimePickerCtrl` and `wxDatePickerCtrl`
    itself. So we also need to update `include/wx/datectrl.h` in a similar way.

3.  Of course, now that we added inclusions of the new files, we actually need
    to create them so let's do it. Both headers should declare the corresponding
    classes, i.e. the same as in the common headers from where we include them
    but without the "Base" suffix. So let's define `wxDateTimePickerCtrl`,
    inheriting from `wxDateTimePickerCtrlBase` in
    `include/wx/osx/datetimectrl.h`. And, similarly, `wxDatePickerCtrl`
    inheriting from `wxDatePickerCtrlBase` in `include/wx/osx/datectrl.h`. You
    can copy the file structure (i.e. the standard header comment, the include
    guards, ...) from another OS X header or maybe from the common header that
    you already modified itself. Don't forget to put your name in the "Author"
    line!

4.  Usually, the classes we declared are concrete, so they should have the
    correct constructors and implement base class pure virtual methods. The
    "Base" classes don't define the constructors so we need to look at an
    existing implementation, for example the native MSW one in
    `include/wx/datectrl.h`, to see which arguments should the constructor take.
    You can simply copy the constructors (including the default one) and
    `Create()` function declaration from there as they must be the same for all
    ports, it's just their implementation that will be different.

At this stage, it might be a good idea that our new headers compile correctly
(of course, nothing is going to work nor even link yet) so you could try to
compile some file including them. In my case let me check if `make
advdll_datavcmn.o` still works -- it does, so we didn't make any stupid mistakes
(yet) and can continue.

Let's add the stubs for the implementation of the new classes too now:

1.  Create `src/osx/datetimectrl_osx.cpp` and `src/osx/cocoa/datetimectrl.mm`.
    The latter is an "Objective-C++" source file, hence the relatively unusual
    extension. Again, as we actually are implementing two new classes and not
    one, we also need to create `src/osx/datectrl_osx.cpp`. But as we suspect
    that we won't need any Cocoa-specific implementation for this class (as
    everything will be done in the base one), we don't need any other
    Objective-C++ files.

2.  We need to update wxWidgets build system to take the new files into account.
    For this, we need to edit `build/bakefiles/files.bkl`, locate
    `ADVANCED_OSX_COCOA_SRC` definition in it and add the new files paths to it.
    Also do the same for `ADVANCED_OSX_COCOA_HDR`.

3.  If you don't have it yet, you need to install bakefile for the next step.
    Just grab the DMG from [download page] and install it as usual.

4.  Go to `build/bakefiles` subdirectory and run `bakefile_gen -b wx.bkl` to
    update all make and project files for wxWidgets.

5.  Finally, re-run configure or just recreate the makefile using the command
    `~/src/wx/regen Makefile` from the build directory.

6.  And redo make again as a sanity check. I got undefined symbol error from the
    linker about `wxDatePickerCtrl::GetClassInfo()` when doing this, which made
    me realize that I forgot to put `wxIMPLEMENT_DYNAMIC_CLASS()` in
    `src/osx/datectrl_osx.cpp`. After adding it, everything linked correctly. Of
    course, nothing works yet but we're going to change this soon.

[download page]: http://www.bakefile.org/download.html

So, finally, here is the interesting part: actually implementing the control
using Cocoa API. The details of doing this depend on the exact control used, of
course, e.g. we are going to base it on [NSDatePicker] in this case but another
subclass of `NSControl` would need to be used for another control. But some
things need to be done for all of them in more or less the same way because all
wxOSX classes are similar and use [pImpl-idiom]: the wxControl-derived class
itself just forwards all of its methods to its "peer", which is a pointer to an
internal object of a class deriving from `wxWidgetImpl` implemented differently
for Carbon and Cocoa ports. In more details:

[NSDatePicker]: http://developer.apple.com/library/mac/#documentation/Cocoa/Reference/ApplicationKit/Classes/NSDatePicker_Class/Reference/Reference.html
[pImpl-idiom]: http://c2.com/cgi/wiki?PimplIdiom

1.  As we need some additional methods in our "impl", we're going to define a
    new class for it. Notice that sometimes this can be avoided as
    `wxWidgetImpl` already has quite a few standard methods which are enough for
    many common controls. In our case, however, they are not. So we add a new
    `include/wx/osx/core/private/datetimectrl.h` header and define
    `wxDateTimeWidgetImpl` class with the `Set/GetDate()` and
    `Set/GetDateRange()` methods corresponding to `wxDatePickerCtrl` methods we
    need to implement in it. Notice that this is a private header, not installed
    when wxWidgets is installed, so there is no need to add it to
    `build/bakefiles/files.bkl` unlike the public headers we had created before.

2.  We also a static `CreateDateTimePicker()` method that we'll use for creating
    the native Cocoa control to this class as well.

3.  The implementation will be the same as for the other Cocoa widgets, i.e. it
    will first create a subclassed `NSDatePicker` which is only necessary in
    order to call `wxOSXCocoaClassAddWXMethods()` (it would definitely be nice
    to have some way to avoid duplicating this code, even if it's quite trivial
    for all classes, but I don't know how to do it -- contributions from
    Cocoa/Objective-C experts would be welcome) and associate it with the peer
    object mentioned above.

4.  We also need to implement `wxDateTimeWidgetImpl` implementing all its pure
    virtual methods we added above and implement them using the corresponding
    `NSDatePicker` methods in the straightforward way. We'll call our derived
    class `wxDateTimeWidgetCocoaImpl` for consistency with the similar classes.

5.  Finally we also need to add code for generating events for our control. In
    this case it is very simple as there is only one event and it's the
    main/default action of the Cocoa control so it's enough to just override
    `controlAction()` method in `wxDateTimeWidgetCocoaImpl`.

By now we have a minimally working implementation of the control! It's
definitely not perfect as we don't handle almost any styles of `wxDatePickerCtrl`,
notably `wxDP_ALLOWNONE`, but as there doesn't seem to be any simple way to
implement it with the native Cocoa control we're just going to leave it
unimplemented for now. We do need to mention this to warn the users so let's
update `interface/wx/datectrl.h` to add a note about this. Otherwise no new
documentation needs to be written as it already existed so we are almost done.

The last thing is to submit the changes for the inclusion to wxWidgets. This is
normally done by [submitting a patch] to our Trac but as this patch is rather
extensive, it's a good idea to [request a review] for it first. Remember to
[clean up your patch] before submitting for the review, just as I did before
submitting [this patch].

[submitting a patch]: https://trac.wxwidgets.org/wiki/HowToSubmitPatches
[request a review]: http://review.bakefile.org/r/new/
[clean up your patch]: http://wxwidgets.blogspot.com/2011/08/cleaning-patches-for-review.html
[this patch]: http://review.bakefile.org/r/372/

While this post turned out to be quite long, it's mostly because I tried to
describe all the steps, including the very first ones, in details. It also
involved a rather atypical case with 2 different classes being involved when
usually only one of them is. Adding new controls to wxOSX is really not that
difficult and I hope this walk-through will encourage more people to do it. And
if you do follow it and find any inexactitudes (this word sounds so much better
than "stupid errors"), please let me know and I'll correct them here.

Happy hacking!

---

\[\*\] For some values of "unabridged" and "true". I did simplify a few things,
mainly because I implemented both `wxDatePickerCtrl` and `wxTimePickerCtrl` at
the same time.
