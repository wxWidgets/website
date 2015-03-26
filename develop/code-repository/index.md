---
title: "Code Repository"
---

The official wxWidgets source code repository is managed by git. Git is a
distributed version control system that allows the core developers to
collaborate on a single codebase.

In order to be granted push access to the repository you need to have
proven your skills and ability in the area of wxWidgets that you would
like to work on.  Typically this is done by submitting patches that have
been reviewed by a member of the core development team and have been
accepted into the source tree.  If you feel you qualify and would like to
gain push access to facilitate your ongoing work on the project, then please
contact one of the core developers, preferably one who has already reviewed
your patches.

Anonymous read-only access to the repository is available to everyone (see
below for a description of how to set it up). You can also directly browse the
sources using either [Trac](http://trac.wxwidgets.org/browser) or
[GitHub](https://github.com/wxWidgets/), depending on your preference.


### Git Software and Documentation

The instructions here about git are very brief and cover only the most common
operations. For more information, please see the references below:

* See BuildGit.txt in the top-level wxWidgets distribution directory.
* [Git](http://git-scm.com/): Git project and documentation.


### Cloning wxWidgets with Git

You can clone wxWidgets from git with the following command:

    git clone https://github.com/wxWidgets/wxWidgets.git

Even developers with push access should submit large or controversial changes
to [Trac](http://trac.wxwidgets.org) so they can be discussed on the
[mailing list](/support/mailing-lists/) before being committed.

You can recieve notifications whenever someone updates a file in git by
[subscribing to the Source Code Updates mailing list](/support/mailing-lists/).

The instructions above will checkout the wxWidgets master branch. To checkout a
different branch, use the following command:

    git checkout WX_2_8_BRANCH

You can find a full listing of all branches
[here](https://github.com/wxWidgets/wxWidgets/branches).


### Updating Your Files

To make your files reflect what's currently in the repository:

    git pull

This will merge in all of the latest commits on your branch with your own.


### Tags

Git tags give you the ability to checkout any specific version of wxWidgets
that has been tagged either for a release, or as identification markers for a
significant change. These work exactly the same as checking out branches.

For example, to checkout wxWidgets 2.8.12 from git, use the following command:

    git checkout WX_2_8_12

You can find a list of all tags available for checkout
[here](https://github.com/wxWidgets/wxWidgets/tags).


### Committing Changes

After making changes to files, you need to "stage" those changes for commit.
This can be done by running:

    git add --all

Running the following command will now show which changes will be committed:

    git status

You can now commit those changes by running:

    git commit -m "You can (and should) specify your commit log here."
