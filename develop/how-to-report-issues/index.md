---
title: "How to Report an Issue"
---

To create a new issue, you must have a [GitHub](https://github.com/) account. If you really can't open or use one, consider posting to [wx-users mailing list](/support/mailing-lists/), but creating the issue directly is strongly preferred.

Please ***search*** to check if the bug or proposed enhancement is already submitted before reporting it. If you are not sure that you encountered the same bug, please open a new issue and add mutual links to both issues (`#1234` is automatically linked). 

If you want to express interest in a bug that is already submitted, subscribe to it or add more details. Or even better, try to fix it.

When reporting a bug, it's usually obvious to the submitter (you) what the problem is. Unfortunately it's quite often less obvious to us (the developers) and the chances of a bug being fixed decrease dramatically if we can't even understand what it is. So please follow this general template when reporting the bugs, with the possible exception of really trivial and self-explanatory ones:

1. Describe what you do, ideally providing a way for us to reproduce it
2. Describe what you expect to happen
3. Describe what happens

Variations are possible, of course, but please follow the above steps if in doubt. Also see the descriptions of the individual fields below for more details.

## Reproducing the Problem

Except for the most trivial bugs, this is the most important part: to be able to do anything about the problem, we must be able to reproduce it so please provide us with a way to do it. The most preferred option by far is to find one of wxWidgets samples (see `samples` subdirectory of your wxWidgets installation) doing something similar to your own program and see if the problem appears in it too. For example, if you have a problem with `wxTreeCtrl`, you should look at the `treectrl` sample, with `wxGrid` -- the `grid` one, and so on. `widgets` sample shows most of the standard widgets, so is a good choice for any problems related to them.

If the sample doesn't show the problem, please try to ***minimally*** modify its code to make the problem manifest itself or, if you haven't been able to find a sample close to your code, start from the `minimal` sample and try to reproduce the problem in it -- again, with the ***smallest possible*** amount of code. If you can't make the problem appear in the sample, chances are that the bug is actually not in wxWidgets itself, but in your own program. If you can, great, you have found a good way to reproduce the bug and you now just need to make a patch with your changes and attach it to the ticket (please don't include the patches inline unless it's a literally one line change).

Making the patch is trivial if you use git: then you just need to run
```
git diff origin/master.. > repro-for-my-bug.patch
```

If you don't use git, please use the standalone `diff` program with the `-u` option to create a unified diff. The most general form of the diff command you need to use is
```
diff -uNr wxWidgets-orig wxWidgets-mine > repro-for-my-bug.patch
```

but you can omit `-N` and `-r` parts if you have modified a single file only. However please still run diff from the top level directory and **not** from the sample subdirectory to make applying it easier.

To summarize, here are the salient points once again:

1. You should make a single patch with all changes and make from the top of wxWidgets tree.
2. This patch should be in unified diff format.
3. Please attach the patch to the issue you create.

Once again, please notice that providing a way to reproduce the bug is a vital first step in fixing it. It doesn't guarantee that the bug will be fixed, but if we're not able to reproduce the bug, it does almost guarantees that we will not fix it neither. Thanks in advance for your help!

## Fatal Bugs

In a special case of reporting a fatal bug/crash please run the program under the debugger and include the stack trace at the moment of the crash in your report.

Under Unix it is as simple as running `gdb your-program-name` (under OS X, use `gdb your-app/Contents/MacOS/your-app`), typing `r` in gdb and then typing `bt` when the crash happens. You may do it even with non-debug build of wxWidgets as this should still give us at least the names of the functions but ideally you should rebuild wxWidgets with debug information as this would give the line numbers and parameter values as well.

Under Windows you should use a debug build and run the program under Microsoft Visual Studio debugger if you're using MSVC compiler or under WinDBG otherwise.

## Creating the Issue

* Title: Please provide a meaningful title for your issue.

* Description: Explain how to reproduce the problem in as much details as possible. Check if you can see it in the samples. If not, try to make a ***minimal*** modification, i.e. such that every change in it is really needed, to one of the samples to demonstrate it and attach this modification as a patch ([unified](https://en.wikipedia.org/wiki/Diff#Unified_format) format with extension `.diff` or `.patch` is strongly preferred). Alternatively, you can also attach a minimal complete application in a single `.cpp` file.

## Things To Do To Dissuade Us From Fixing a Bug

Following the guidelines in this page helps a lot with fixing the bug but unfortunately it doesn't always ensure that it is fixed (unless you also [submit a patch](/develop/how-to-submit-patches/)), unfortunately. However there are several things which you can do which might not ensure that the bug is **not** fixed, strictly speaking, but which come pretty close. Here are some examples:

 * Not providing enough details about the problem.
 * Opening multiple identical (or very similar) bug reports about the same problem, usually still without providing enough details.
 * Incrementing the bug priority or moving its target milestone, typically even though it was already reset by a developer before.
 * Putting strongly-worded requests to fix your bug as soon as possible (usually in capital letters) in the summary or description.
 * Trying to generate interest in your problem by insulting wxWidgets developers when the above fails.

Doing anything of the above is just a waste of time so please don't engage in it.

## Final Note

wxWidgets is a community project and we need your help. At the very least, if you see that the bug you reported in the past was fixed, but the issue is still open, we will appreciate if you close it. You can easily find all the open issues you reported by clicking on "Filter" dropdown and choosing "Your issues".

And, of course, we really welcome other help with the existing bugs: for example, verifying that the bugs can still be reproduced, commenting on potential workarounds and so on.

Thanks in advance!
