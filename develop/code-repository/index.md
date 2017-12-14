---
title: "Code Repository"
---

The official wxWidgets source code repository is managed by
[Git](https://git-scm.com/). Git is a distributed version control system that
allows the core developers to collaborate on a single codebase and anybody
else, anywhere in the world, to always view the latest sources using
[GitHub](https://github.com/wxWidgets/) web interface or check them out,
following the instructions below.

### Git Software and Documentation

The instructions here about Git are very brief and cover only the most common
operations. For more information, please see the references below:

* See [BuildGit.txt](https://github.com/wxWidgets/wxWidgets/blob/47c0aed3222360f22cd35e8cad307457e51299c2/BuildGit.txt)
  file in the top-level wxWidgets distribution directory.
* [Git book](https://git-scm.com/book/en/v2): Pro Git book online.


### Cloning wxWidgets with Git

You can clone wxWidgets from Git with the following command:

    git clone --recurse-submodules https://github.com/wxWidgets/wxWidgets.git

If you forget to use the `--recurse-submodules` during the initial clone, or
new submodules have been added since it, please use

    git submodule update --init

command to initialize the submodules later.

The command above checks out the wxWidgets master branch, corresponding to the
latest development version. To check out a different branch, you can use

    git checkout WX_3_0_BRANCH

You can find a full listing of all branches
[here](https://github.com/wxWidgets/wxWidgets/branches).


### Updating Your Files

To make your files reflect what's currently in the repository:

    git pull --ff-only

This will add all of the commits since the last pull (or clone, if doing this
for the first time) to your active branch, without creating a merge commit
accidentally.

Note that you can receive notifications about all Git changes by subscribing
to the [Source Code Updates mailing list](/support/mailing-lists/).


### Tags

Git tags give you the ability to checkout any specific version of wxWidgets
that has been tagged either for a release, or as identification markers for a
significant change. These work exactly the same as checking out branches.

For example, to checkout wxWidgets 2.8.12 from Git, use the following command:

    git checkout WX_2_8_12

You can find a list of all tags available for checkout
[here](https://github.com/wxWidgets/wxWidgets/tags).


### Making Changes

If you want to contribute to wxWidgets by submitting an enhancement or a bug
fix, please start by posting to [wx-dev mailing list](/support/mailing-lists/)
to discuss the proposed changes. Once a rough agreement about what needs to be
done is reached, start working on your contribution by creating a new branch
for your work:

    git checkout -b my-work origin/master

Then do the required changes and stage them for commit by using `git add`
command, e.g. in the simplest case when you want to commit all local changes,
just

    git add --all

Running the following command will now show which changes will be committed:

    git status

You can now commit those changes by running:

    git commit

Please take the time to write a good commit message for all your commits,
following [the standard rules](https://chris.beams.io/posts/git-commit/).


### Integrating Changes into wxWidgets

After making all the changes, please push your branch to GitHub and make a
[pull request](https://help.github.com/articles/about-pull-requests/) to the
main wxWidgets repository. If you don't use GitHub, please [make a
patch](https://trac.wxwidgets.org/wiki/HowToSubmitPatches) and submit it via
wxTrac instead, but pull requests are preferred for any non-trivial changes as
they allow the code to pass the continuous integration checks.

If you submit pull requests often and feel that having write access to the
repository would facilitate your ongoing work on the project, please ask
for it on wx-dev. However please notice that even core contributors, who do
have write access, are still strongly encouraged to use the PR-based workflow
above for their contributions.
