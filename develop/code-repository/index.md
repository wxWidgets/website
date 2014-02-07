---
layout: default
title: "Code Repository"
---

The official wxWidgets source code repository is managed by Subversion.
Subversion is a version control system that allows the core developers to
collaborate on a central repository. Administration of the SVN server is
carried out by Robin Dunn.

For the wxWidgets team, SVN removes the bottleneck caused by one person per
port accepting modifications and releasing occasional distributions. Also,
users can download the very latest source from the SVN repository. This has
implications for stability, so tested releases will still be needed.

In order to be granted write access to the repository you need to have
proven your skills and ability in the area of wxWidgets that you would
like to work on.  Typically this is done by submitting patches that have
been reviewed by a member of the core development team and have been
accepted into the source tree.  If you feel you qualify and would like to
gain write access to facilitate your ongoing work on the project, then please
contact one of the core developers, preferably one who has already reviewed
your patches.

Anonymous read-only access to the repository is available to everyone (see
below for a description of how to set it up). You can also directly browse the
SVN sources using either [Trac](http://trac.wxwidgets.org/browser) or
[ViewVC](http://svn.wxwidgets.org/viewvc/wx/), depending on your preference.


### Subversion Software and Documentation

The instructions here about SVN are very brief and cover only the most common
operations. For more information, please see the references below:

* To build wxWidgets from SVN, see BuildSVN.txt in the top-level wxWidgets
  distribution directory.
* [Subversion Manual](http://svnbook.red-bean.com/)
* [Subversion Project](http://subversion.apache.org/): SVN for a variety of
  platforms, plus documentation.


### Checking Out wxWidgets with SVN

For anonymous (read-only) access, you can checkout wxWidgets from SVN with
the following command:

    svn checkout https://svn.wxwidgets.org/svn/wx/wxWidgets/trunk wxWidgets

If you have been given write access to the wxWidgets repository, you will
want to checkout wxWidgets with your username and password using the following
command (replace 'ID' with your username):

    svn checkout --username ID https://svn.wxwidgets.org/svn/wx/wxWidgets/trunk wxWidgets

Even developers with write access should submit large or controversial changes
to [Trac](http://trac.wxwidgets.org) so they can be discussed on the
[mailing list](/support/mailing-lists/) before being committed.

You can recieve notifications whenever someone updates a file in SVN by
[subscribing to the Source Code Updates mailing list](/support/mailing-lists/).

You may wish to keep two copies of the repository; the current stable
branch as well as the `trunk` (the development 'sandbox'). The instructions
above will checkout the wxWidgets trunk, to checkout one of the branches, you
must use the path to the branch you would like to checkout instead.

For example, to checkout the `WX_2_8_BRANCH`, use the folling command:

    svn checkout https://svn.wxwidgets.org/svn/wx/wxWidgets/branches/WX_2_8_BRANCH wxWidgets-2.8

You can now work in either tree without passing any extra parameters to
your SVN commands, and updates will happen in the correct branch. You can find
a full listing of all branches [here](http://svn.wxwidgets.org/svn/wx/wxWidgets/branches/).


### Updating Your Files

To make your files reflect what's currently in the repository:

    svn update

The directory you're currently in determines which directories will be
updated, so to make sure you have all files, run the update from the top level
directory.


### Tags

SVN tags give you the ability to checkout any specific version of wxWidgets
that has been tagged either for a release, or as identification markers for a
significant change. These work exactly the same as checking out branches,
except you need to use the correct path to the tag.

For example, to checkout wxWidgets 2.8.12 from SVN, use the following command:

    svn checkout http://svn.wxwidgets.org/svn/wx/wxWidgets/tags/WX_2_8_12 wxWidgets-2.8.12

You can find a list of all tags available for checkout
[here](http://svn.wxwidgets.org/svn/wx/wxWidgets/tags/).

The contents of the remaining sections only apply to people with _write_
access to our Subversion repository.


### Committing Changes

After making changes to files, go to a directory which you wish to be committed
(the top-level wxWidgets directory if you wish to commit all changed files) and
type:

    svn commit -m "You can (and should) specify your commit log here."

You may need to update your sources before committing if any changes have been
committed since you last updated. If you are already up to date, then this will
commit your changes. Note that this will commit all files below the current
directory, so if you wish to add a comment for a particular file, change to the
appropriate directory and then do the commit for this directory or an
individual file first.


### Adding and Removing Files

Add files and directories to the repository with:

    svn add filename

Make sure to set up the auto-props as described in the next section before
doing this!

To remove a file, type:

    svn delete filename

Upon running this command, the file (or directory) will be marked for removal
on your next commit, and the file(s) will be physically deleted from your
computer. If you specified a directory, the directory will be emptied, and
completely removed once you commit.


### Setting `auto-props`

Files of different types need to have different line endings styles, e.g.
source files (*.cpp) need to use native line endings (LF under Unix, CR LF
under Windows) while MSVC project files (*.vcproj) must alway use CR LF line
endings. With SVN the easiest way to achieve this is to configure your local
[auto-props][props] settings.

[props]: http://svnbook.red-bean.com/en/1.7/svn.advanced.props.html#svn.advanced.props.auto

To use it you must first locate your configuration file as described
[here][conf]. In brief, it's `~/.subversion/config` under Unix (including OS X)
and `Subversion\config` somewhere under users data directory under Windows.
Then you must edit and enable auto-props by uncommenting the line with
`enable-auto-props`. And finally you need to define the properties to set
automatically. Here is the full recommended list:

    [auto-props]
    *.bkl = svn:eol-style=native;svn:keywords=Id
    *.c = svn:eol-style=native;svn:keywords=Id
    *.cpp = svn:eol-style=native;svn:keywords=Id
    *.h = svn:eol-style=native;svn:keywords=Id
    *.dsp = svn:eol-style=CRLF
    *.dsw = svn:eol-style=CRLF
    *.in = svn:eol-style=native
    *.jpg = svn:mime-type=image/jpeg
    *.html = svn:eol-style=native
    *.pl = svn:eol-style=native;svn:executable;svn:keywords=Id
    *.pm = svn:eol-style=native;svn:keywords=Id
    *.png = svn:mime-type=image/png
    *.po = svn:eol-style=native;svn:keywords=Id
    *.py = svn:eol-style=native;svn:executable;svn:keywords=Id
    *.rb = svn:eol-style=native;svn:executable;svn:keywords=Id
    *.sh = svn:eol-style=native;svn:executable;svn:keywords=Id
    *.sln = svn:eol-style=CRLF
    *.sql = svn:eol-style=native;svn:executable;svn:keywords=Id
    *.txt = svn:eol-style=native
    *.vcproj = svn:eol-style=CRLF
    ChangeLog = svn:eol-style=native
    configure = svn:eol-style=native;svn:keywords=Id
    configure.ac = svn:eol-style=native;svn:keywords=Id
    install-sh = svn:eol-style=native
    makefile* = svn:eol-style=native;svn:keywords=Id
    Makefile = svn:eol-style=native;svn:keywords=Id
    Makefile* = svn:eol-style=native;svn:keywords=Id
    README = svn:eol-style=native

[conf]: http://svnbook.red-bean.com/en/1.7/svn.advanced.confarea.html