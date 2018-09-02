---
title: wxFileDialog and Windows Vista
date: '2006-10-08T23:32:00.000Z'
author: Ryan Norton
modified_time: '2006-10-09T15:28:25.800Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-116035068153089486
blogger_orig_url: http://wxwidgets.blogspot.com/2006/10/wxfiledialog-and-windows-vista.html
---

There are some changes regarding the native file dialog in Windows Vista. If one
changes properties of the native file dialog, one gets the "old" file dialog
from Windows XP.

Here's an example of the difference: ("Old" is the first menu option from the
filedialog portion of the [dialog sample], "New" is the second.)

[dialog sample]: https://docs.wxwidgets.org/trunk/page_samples.html#page_samples_dialogs

"Old":

<img src="oldfd.0.jpg" class="img-fluid" alt="Old file dialog on Vista">

"New":

<img src="newfd.jpg" class="img-fluid" alt="New file dialog on Vista">

The problem is that the dialogs sample uses

    dialog.CentreOnParent();

which causes Vista to revert to the "old" file dialog.

So, if you are using common dialogs just keep an eye out if you customize it
all; as even centering it with its parent could change the appearance of it. In
fact, calling any wxWindow method can be problematic as it can make the look of
a common dialog non-native, or it may not work at all (in some cases on some
platforms setting the background color doesn't work, for example).

I posted on the mailing list awhile back, but sometimes it is a lot better with
pictures :D.

Also, it still happens with RC2, which is supposively the last release before
RTM (Release To Market), so it is likely that this will stay.

For those to wish to interact with the new Windows Vista file dialog API, they
can use the `IFileDialogXXX` COM interfaces. This also includes derivatives such
as `IFileOpenDialog`. Hopefully wxWidgets won't end up having to support a
seperate file dialog interface; but then I guess one could just `pImpl` it as
well.
