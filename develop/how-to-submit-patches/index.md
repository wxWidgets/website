---
title: How to Submit Patches
---

***TL;DR:*** Please use [GitHub pull requests](https://help.github.com/articles/about-pull-requests/) or, if you can't use GitHub, send us a unified diff against the latest version of the appropriate branch (master or stable) and remember to update the docs and unit tests in any case.

User feedback and, especially, patches are very important for wxWidgets. They often help us improve wxWidgets' quality and fix bugs, so we are of course happy if you contribute them (how could we dislike your help, after all?). But we have all sort of problems with applying non-standard patches. To make life easier for both you and us, please follow the few simple rules below when submitting patches.

Remember that if you have any questions about the steps here, you can always post them to wx-dev mailing list and we'll do our best to help you.

## Changing wxWidgets

 * **Discuss your changes**: Before making your changes, please post to the [developers mailing list](/support/mailing-lists/) describing what you plan to do. Unless your change is very simple, this may save a lot of time to everyone involved compared to making the change first and then having to change it later.

 * **Follow our coding rules**: Please read the [wxWidgets coding standards](/develop/coding-guidelines/) and at least try to conform to them. In particular, please respect the indentation rules (4 spaces, no TABs) and code style (braces must be on their own line etc).

 * **Unit tests**: Please update (or add) unit tests for any easily testable functionality aspect that you modify or add. Our test suite doesn't cover 100% of wxWidgets code yet but we'd really like it to and we prefer not to add new classes or functions without tests.

 * **Documentation**: Last but not least, if your patch adds a new feature please include the patch to the documentation as well as undocumented feature is hardly useful to anyone but its author. The API is documented in `/interface` directory, in familiar and simple [Doxygen](http://www.doxygen.org/) format. If you don't do it, another developer would have to write the documentation and the patch won't be applied until he has time to do it.

## Mechanics of patch submission

If possible, i.e if you already use GitHub, please submit your patches via GitHub pull requests (PR) mechanism, i.e. fork [wxWidgets repository](https://github.com/wxWidgets/wxWidgets/), make a branch with your changes and submit PR to wx (master or 3.0). This has the advantage of building your patch in several different build configurations and rerunning the tests, so it's the preferred way of submitting your changes. The rest of this section only applies if you are unable or unwilling to use this mechanism.

While we prefer merging pull requests, we still accept plain patches too. For those, please use the manual approach described here:

 * **Use the latest version**: Please try to always make your patches against the latest version of wxWidgets.

  In most cases, you should make a patch against the git master branch. If the bug is only in stable branch or it was already fixed in master, make the patch against the stable git branch. You can learn how to download the source from git [here](/develop/code-repository/).

  If you cannot access git (for example when you are behind a firewall), please make the patch against latest release or, better, against fresh git snapshot (latest download: [master.zip](https://github.com/wxWidgets/wxWidgets/archive/master.zip)). 

 * **Standard patch format**: Please do **NOT** send us ZIP archives, whole files or even worse, only code snippets without context. It should be possible to apply your patch using a single `patch -p1 < your.diff` or `patch -p0 < your.diff` command.

  The advantage of using diff is that it produces one file with differences in all files you modified and what's more, diff files are small, easy to read and understand and can be applied even if the affected files have been changed since the moment when the patch was submitted. The _only_ exception to this rule is for the translations: unfortunately, `.po` files change a lot each time they are regenerated because all line numbers recorded in them change, and this risks making any patches to them unappliable very quickly. So for these files, and only for them, please submit the whole files and not patches to the existing ones. You can use `diff` program which is a standard part of most Unix systems and is available as part of cygwin package or elsewhere for Windows or, alternatively, you can just use `git diff` command which works almost in the same manner as diff if you are already using a git clone. The best way to make a patch is to use this command from the root wxWidgets directory:

	git diff origin/master... > mypatch.patch

  Alternatively, use the appropriate base git ref (i.e. for WX_3_0_BRANCH)

  If you use a standalone `diff` you need to add the `-u` option, i.e.:

	diff -uNr wxWidgets-orig wxWidgets-mine > mypatch.patch

  If your patch adds or removes files and you use a standalone diff program locally, you need to use `-N` option for the new files to be included in the patch.

 * Use standard **extension .diff or .patch** for the patch file.

 * **Don't include auto-generated files** (wx/{msw,univ}/setup.h, Makefiles, etc.) in the patch. 

  The simplest way is to edit the patch and remove appropriate chunks. Alternatively, please see [this post](http://wxwidgets.blogspot.com/2011/08/cleaning-patches-for-review.html) about how to do it on a Unix system (including Cygwin).

 * **Let us know your name**: Concerning the latter, we'd also like to give you credit for your patch (unless it's something really trivial as we avoid mentioning very small changes in our changelog) but we need to know your real name for this. Please tell us about it if we don't know you already from your posts to wx-dev.


## Thank you for reading this document -- and looking forward to your patches!
