---
title: MSVS 2012 RC Installation Experience
date: '2012-07-01T12:14:00.000Z'
author: Vadim Zeitlin
modified_time: '2012-07-01T12:14:29.424Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-6839146159899613556
blogger_orig_url: http://wxwidgets.blogspot.com/2012/07/msvs-2012-rc-installation-experience.html
---

As an update to my previous post about building wxWidgets with VC11 beta, I'd
like to say a few words about my experience with installing the RC version of
the same compiler -- now known as MSVS 2012.

First of all, the installer doesn't tell you anything about having to uninstall
the beta yourself before running it but you really must do it. Otherwise the
installation will succeed but the IDE won't open afterwards with an "invalid
licence" error (see [this known issue], apparently beta has a higher version
number than the RC).

Second, and **much** more annoyingly, the installer also doesn't warn you that
it's going to break your existing VC 10 installation. This is also an apparently
[known problem] and can be fixed by installing SP1 for VC 10 but if you're
unaware of it it may not be completely obvious that the mysterious `LNK1123:
failure during conversion to COFF: file invalid or corrupt` errors you now get
when building any MSVS 2010 C++ projects in debug build are due to VS 2012
installation.

Hopefully knowing this in advance will make testing MSVS 2012 less aggravating
to the other wxWidgets users than it was for me. Unfortunately you will still
need to reboot your machine a couple of times to install it but then clearly not
having to reboot for a compiler installation would have been too much to expect.

Ah, and as for building wxWidgets with VC 11 RC -- nothing to say here, it still
works, just as it did with beta and I didn't notice any real changes affecting
wxWidgets. The new IDE look is pretty ugly but all the features are there and
the profiler is rather nice. Pity it's only included in Premium edition and
later.

[this known issue]: http://connect.microsoft.com/VisualStudio/feedback/details/746531/visual-studio-2012-don-t-start-invalid-license
[known problem]: http://social.msdn.microsoft.com/Forums/da-DK/vssetup/thread/d10adba0-e082-494a-bb16-2bfc039faa80
