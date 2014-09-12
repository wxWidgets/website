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
application files. You can use a commercial product such as WISE Install or
InstallShield, but there are several free offerings that will probably be
adequate for your needs. Here are some free Windows installers. My personal
favourite at present is Inno Setup combined with ScriptMaker. I can still
automate the production of parts of the script (see the files in distrib/msw in
the wxWidgets distribution) but use ScriptMaker to edit the parts that would be
tedious to edit by hand.


## Windows Installers

You can use a commercial product such as WISE Install or InstallShield, but
there are several free offerings that will probably be adequate for your needs.
Here are some free Windows installers.

* [Inno Setup](http://www.jrsoftware.org/isinfo.htm), a free Windows installer
  with Pascal scripting
* [ScriptMaker](http://www.tafweb-trainz.co.uk/tafwebsw/scriptmaker.html), a
  very useful GUI adjunct to Inno Setup (unfortunately not maintained any more)
* [Ghost Installer](http://www.ghostinstaller.com/), also free
* [NSIS](http://www.nullsoft.com/free/nsis/) Nullsoft (SuperPiMP|Scriptable)
  Install System, originally written for installing Winamp
* [InstallMaker](http://www.clickteam.com/index.php3?page=9) by ClickTeam
* [InstallAnywhere](http://www.zerog.com/products_ia.html) by Zero G
* [BitRock InstallBuilder](http://www.bitrock.com/)

My personal favourite at present is Inno Setup combined with ScriptMaker. I can
still automate the production of parts of the script (see the files in
distrib/msw in the wxWidgets distribution) but use ScriptMaker to edit the
parts that would be tedious to edit by hand.

Note that you should install any DLLs that are needed by your application, and
if you use VC++ this will probably include msvcrt.dll and maybe
msvcirt.dll. You can determine the DLL dependencies of your application using
Steve Miller's [Dependency Walker][walker].

[walker]: http://www.dependencywalker.com

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

Apple recommends that Mac OS X applications are installed simply by copying a
folder containing the application files to the hard disk. For more complex
installations, you can use OS X's Package Manager. For details, see
[Installing your application][osx_installer] at the Apple developer's web site.

[osx_installer]: http://developer.apple.com/techpubs/macosx/Essentials/SystemOverview/InstallIntegrate/Installing__Application.html

For Classic (OS 9 and below), you can use [InstallerMaker][InstallerMaker] from
Aladdin or [Installer VISE][vise] from Mindvision.

[InstallerMaker]: http://www.stuffit.com/installermaker/
[vise]: http://www.mindvision.com/index1.html

Robert Roebling says:

"I put the whole dir into Alladin StuffIt (which you need to buy) and make the
wxSomething.sit file into a wxSomething.sit.bin file with Alladin later, since
the latter step is required for Netscape users downloading such an archive."

Brian Victor says:

"I'd like to point out that you can also use Alladin's DropStuff, which is
shareware, to create .sit archives.

In OSX, it seems to be popular to create disk images of application bundle with
directions to just drag the bundle into one's hard drive. Bundles make that
really clean and easy. Usually these disk images are compressed with Stuffit or
DropStuff.

Also, Apple has its own packaging system for OSX, which helps take care of
things like click-through licensing, getting administrator (i.e., root)
privileges, and probably dependencies also. Such packages have a .dpkg suffix."

The following is a list of known Mac installers.

* [InstallAnywhere](http://www.zerog.com/products_ia.html) by Zero G
* [InstallerMaker](http://www.stuffit.com/installermaker/) from Aladdin
* [Installer VISE](http://www.mindvision.com/index1.html)


## Tips for Finding the Application Path

An installation issue that many people ask about is: how do I find the path of
the application, so I can find the other files that the application needs? Here
are some resolutions to this issue, followed by a function that may solve the
problem for most people.

1.  Use argv[0]. Test for:

    * an absolute path (just use this)
    * a relative path (append to the current working directory)
    * application name only (use the PATH variable to find the executable)

2.  You can check the APPDIR variable. If not set, use another method.

3.  Ask the user, then save this in a config file.

4.  During installation, save the install directory in a config file or in a wrapper script, see (6).

5.  You can check /opt/appname. Apps should be installed under /opt if
    possible. See [www.pathname.com/fhs](http://www.pathname.com/fhs). You can
    also check /usr/appname, /usr/local/appname, /usr/local/share/appname.

6.  Use a wrapper script, which can set the environment variable or use a
    switch e.g. --dir datadir. So even if you use a symbolic link, the script
    still knows what directory to use for data. E.g.

        #!/bin/sh

        # filled-in by the installer script or whatever
        APPDIR=/home/user/mydir

        # set LD_LIBRARY_PATH and other stuff here...
        $APPDIR/bin/myapp.bin

7.  From Alan Gonzalez:

    Well, I've read the posts about finding the path. All seemed pretty good,
    but maybe this one is better :-)

    There is a way to detect in a running program where the absolute path of
    that running program is. This is done in one tool that I know of: mpatrol.

    mpatrol runs on a variety of unixes (it's a memory profiler/bounds checker)
    and has a pretty complicated bit of coding to correctly detect the runtime
    program's path. It doesn't use path traversing, just stack manipulations
    and on easy platforms /proc. The code for the function progname() (in
    memory.cc) is nasty to say the least. mpatrol currently runs on: AIX,
    DG/UX, DRS/NS, DYNIX/ptx, FreeBSD, HP/UX, IRIX, Linux, LynxOS, SINIX,
    Solaris, UnixWare, AmigaOS and Windows NT.

    It's under LGPL, so you can make it a linked library and just call what you
    want. Anyways, the function is called progname() and returns the char *
    path. It's useful in my programs, because when they crash I can have gigs
    of stuff in memory and saving core files that size sucks, so I trap, and
    look up the program path and then start gdb on the program while it's
    running so that I can see where the problem was without resorting to core
    files.

8.  From Nigel Hathaway:

    On Mac Classic, argv is not used. The method of getting this information is
    long and convoluted, involves calling GetCurrentProcess() and
    GetProcessInformation(), and then taking the processAppSpec field of the
    returned structure and converting it into an absolute path.

    So here's a more "robust" and more universal solution (tested, barring any
    further required #includes):

        #ifdef __WXMAC__
        # ifdef __DARWIN__
        #  include <Carbon/Carbon.h>
        # else
        #  include <Process.h>
        # endif
        # include "wx/filename.h"
        #endif

        wxString ::GetExecutablePath()
        {
            static bool found = false;
            static wxString path;

            if (found)
                return path;
            else
            {
        #ifdef __WXMSW__

                char buf[512];
                *buf = '\0';
                GetModuleFileName(NULL, buf, 511);
                path = buf;

        #elif defined(__WXMAC__)

                ProcessInfoRec processinfo;
                ProcessSerialNumber procno ;
                FSSpec fsSpec;

                procno.highLongOfPSN = NULL ;
                procno.lowLongOfPSN = kCurrentProcess ;
                processinfo.processInfoLength = sizeof(ProcessInfoRec);
                processinfo.processName = NULL;
                processinfo.processAppSpec = &fsSpec;

                GetProcessInformation( &procno , &processinfo ) ;
                path = wxMacFSSpec2MacFilename(&fsSpec);
        #else
                wxString argv0 = wxTheApp->argv[0];

                if (wxIsAbsolutePath(argv0))
                    path = argv0;
                else
                {
                    wxPathList pathlist;
                    pathlist.AddEnvList(wxT("PATH"));
                    path = pathlist.FindAbsoluteValidPath(argv0);
                }

                wxFileName filename(path);
                filename.Normalize();
                path = filename.GetFullPath();
        #endif
                found = true;
                return path;
            }
        }

9.  And finally, from Julian Smart:

        // Find the absolute path where this application has been run from.
        // argv0 is wxTheApp->argv[0]
        // cwd is the current working directory (at startup)
        // appVariableName is the name of a variable containing the directory for this app, e.g.
        // MYAPPDIR. This is checked first.

        wxString wxFindAppPath(const wxString& argv0, const wxString& cwd, const wxString& appVariableName)
        {
            wxString str;

            // Try appVariableName
            if (!appVariableName.IsEmpty())
            {
                str = wxGetenv(appVariableName);
                if (!str.IsEmpty())
                    return str;
            }

        #if defined(__WXMAC__) && !defined(__DARWIN__)
            // On Mac, the current directory is the relevant one when
            // the application starts.
            return cwd;
        #endif

            if (wxIsAbsolutePath(argv0))
                return wxPathOnly(argv0);
            else
            {
                // Is it a relative path?
                wxString currentDir(cwd);
                if (currentDir.Last() != wxFILE_SEP_PATH)
                    currentDir += wxFILE_SEP_PATH;

                str = currentDir + argv0;
                if (wxFileExists(str))
                    return wxPathOnly(str);
            }

            // OK, it's neither an absolute path nor a relative path.
            // Search PATH.

            wxPathList pathList;
            pathList.AddEnvList(wxT("PATH"));
            str = pathList.FindAbsoluteValidPath(argv0);
            if (!str.IsEmpty())
                return wxPathOnly(str);

            // Failed
            return wxEmptyString;
        }


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
as the excellent [UPX][uxp], which works on a variety of platforms. It can
shrink your app by 50% or so, but you need to be aware that multiple
invocations of the same application will no longer share memory and will
therefore be more RAM-hungry. Also debuggers will not recognise the compressed
executable format, so your Unix users may be puzzled when trying to figure out
the cause of a core dump.

[uxp]: http://upx.sourceforge.net/
