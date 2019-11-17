---
title: "Building Installers"
---

When you have written your wxWidgets application, you will need some way of
getting it to the user along with the supporting files that you may need (DLLs,
documentation, images, and so on). For anything except the most informal
internal releases, you should provide an installation program to do this in a
friendly manner, if appropriate giving options to install only certain modules,
and you should also give the user an uninstall facility. It will take you less
time than you might think (at least on Windows!) and will give your application
a more professional look than if you merely bundled a zip file containing your
application files.

## Windows Installers

You can use a commercial product such as InstallShield or InstallAnywhere, but
there are several free offerings that will probably be adequate for your needs.
Here are some free Windows installers:

* [Inno Setup](http://www.jrsoftware.org/isinfo.htm), a free Windows installer
  with Pascal scripting
* [NSIS](http://nsis.sourceforge.net) Nullsoft (SuperPiMP|Scriptable)
  Install System, originally written for installing Winamp
* [Install Creator](http://www.clickteam.com/install-creator-2), has a free version

Note that you should install any DLLs that are needed by your application. You
can determine the DLL dependencies of your application using Steve Miller's
[Dependency Walker](http://www.dependencywalker.com).

## Linux and Unix Installers

On Linux, the standard installation method is using the native package manager
for each distribution. However this is quite an unfriendly installation method
in my (Julian's) opinion: it has to be run as root, and it doesn't offer any
application-specific options to the user. There's a GUI front-end to RPM,
[GnoRPM][GnoRPM], but I find this also less than intuitive. However, RPM _is_
an important standard; you might like to try using [RUST][RUST] to create them
without having to learn about .spec files.

[GnoRPM]: http://www.daa.com.au/~james/gnome/
[RUST]: http://www.rusthq.com/

Some people prefer to write a shell script which may still invoke RPM. A good
wxWidgets project would be to write a font-end installer builder that would
write RPM spec files and/or a friendly shell script. An example shell script to
put on the wxWidgets web site would be welcome.

The following is a list of known Linux or generic Unix installers.

* [Loki Setup](http://www.lokigames.com/development/),
  a GUI installer based on GTK+.
* [Red Hat Package Manager](http://www.rpm.org/) (RPM).
* [RUST](http://www.rusthq.com/), a drag and drop GTK+ application for building
  RPM files without messing with .spec files.
* [InstallAnywhere](http://www.zerog.com/products_ia.html) by Zero G
* [InstallShield Multiplatform](http://www.installshield.com/imp/)
* [EPM](http://www.easysw.com/epm/)

The following articles may be of interest to those writing their own Linux
application installer.

* [Integrating Applications Into the GNOME 2.0 Desktop][1]
* [KDE and GNOME desktop environment entry standard][2]

[1]: http://soldc.sun.com/articles/integrating_gnome.html
[2]: http://www.freedesktop.org/standards/desktop-entry-spec/desktop-entry-spec.html


## Mac OS X Installers

Plese go [here](https://developer.apple.com/macos/distribution/) to learn how to best distribute your Mac OS X applications.


## Other Issues

### Dynamic or Static Linking

It's tempting to compile wxWidgets as a DLL or shared library and then marvel
at the tiny size of your application. However, you then have to worry about
distributing potentially very large libraries with your application, and on
both Unix and Windows there is potential for time-wasting confusion. So if you
can, compile your application statically: a good linker (such as VC++'s) will
strip out redundant code and produce a reasonably small executable.

On Unix, you can compile wxWidgets with the --disable-shared configure option,
so that wxGTK and GTK+ will be linked into the application. Although your
executable will be quite big, you will save on the hassles of installing shared
libraries on your user's machine.

### File Compression

You can 'cheat' and make an executable smaller by using a file compressor, such
as the excellent [UPX](https://upx.github.io/), which works on a variety of platforms. It can
shrink your app by 50% or so, but you need to be aware that multiple
invocations of the same application will no longer share memory and will
therefore be more RAM-hungry. Also debuggers will not recognise the compressed
executable format, so your Unix users may be puzzled when trying to figure out
the cause of a core dump.
