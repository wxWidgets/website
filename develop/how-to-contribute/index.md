---
title: "How to Contribute to wxWidgets"
---

This short text tries to explain what should you do if you'd like to contribute to wxWidgets. wxWidgets is a real community project and its success depends heavily on your help and new developers are always warmly welcome!

## Deciding How to Contribute

This guide is addressed to code contributors, however this is not the only way to help wxWidgets and just because the other ones are not described in details here doesn't mean they are not, or less, important.  Contributions to documentation, including both fixing any problems in [the manual](https://docs.wxwidgets.org/stable/) included in wxWidgets itself and writing external tutorials/articles about wxWidgets, are always very much appreciated.  Testing wxWidgets, especially with lesser used compilers/architectures/operating systems is very important too. So is helping with answering the users questions on [wx-users mailing list](/support/mailing-lists/). And even [reporting bugs](/develop/how-to-report-issues/) is a welcome contribution too, although contributing the fixes for the bugs you discover is even better.

However the most common kind of contribution remains help with improving wxWidgets itself, i.e. submitting code fixing bugs or implementing the new features for the library. If you would like to do this but are not sure what exactly would you like to do, please have a look at our [roadmap](/develop/roadmap/) listing the most important goals for the upcoming wxWidgets releases. And if this is not enough, there are many, many [open bugs](https://github.com/wxWidgets/wxWidgets/issues) fixes for which would be very welcome.

Alternatively, you may need a feature for your program which isn't present in wxWidgets yet. In this case you're arguably the best person to implement it--you know exactly how the new feature should be used. And while you could implement support for this feature inside your own code, more often than not it is better to submit it to wxWidgets instead because this ensures that the feature will remain available in the future wxWidgets versions and you won't have to spend time upgrading your code for each new wxWidgets release. Of course, discussing the new code and submitting it for peer review results in better quality implementation.

## Discuss the Changes You Want to Do

So once you've decided what you want to do, the very first thing to do is to post to [wx-dev mailing list](https://www.wxwidgets.org/support/mailing-lists/) a message describing what you would like to do and why. This is really important as it allows you to coordinate the activity of different developers and can also allow you to discover better ways of doing what you need or maybe even realize that it has already been done in the latest wxWidgets version--nothing more wasteful than to work on some feature which has already been implemented by someone else. It would also be nice if you could introduce yourself, at least briefly, in your first posting, so that the others could know you better.

Please note that it's a very good idea to subscribe to this mailing list if you plan to become a regular wxWidgets contributor. It is relatively low traffic and you can also browse the archives on the [Google Groups page](https://groups.google.com/forum/#!forum/wx-dev).

Finally, please respect the standard [netiquette guidelines](https://en.wikipedia.org/wiki/Netiquette) for your posts to wx-dev mailing list. In particular, please don't post in (pure) HTML and don't top post.

## Implement the Changes

Once the agreement is reached on the mailing list about the best way to implement the changes, it's time to... not to start coding, but to read  [wxWidgets coding standards](/develop/coding-guidelines/) guide.  Please do it _before_ starting to write the code meant for inclusion in wxWidgets.

### Writing the Documentation

If you submit a new feature (as opposed to just a bug fix), you **must** provide documentation for it. It is better to document the code first and then write the implementation according to the specification, which is why this step comes before writing the code itself. Take a look over the [guide to adding wxWidgets class documentation](https://github.com/wxWidgets/wxWidgets/blob/master/docs/contributing/how-to-add-class-documentation.md).

### Writing the Code

You should try to compile your code under as many platforms as possible (unless it's a port-specific change, of course).  Using different compilers on different architectures ([at maximal warning level](/develop/coding-guidelines/#no_warnings) of course) is a great way to find bugs. Also, implementing a new feature for more than one platform is highly desirable as a single-platform implementation could result in an API impossible or very difficult to implement elsewhere. Changes implemented and tested on multiple platforms have a much higher chance of being accepted quickly in wxWidgets.

If you have any questions during this step, such as "How can I add a new file to wxWidgets?" or "Is there already a generic way to do this and that?" please don't hesitate to ask on wx-dev.

### Writing the Test or a Sample

The work is not complete before the new feature (or a fixed old one) can be tested to ensure that it works correctly. For non-GUI classes, you should add a new unit test under <tt>tests</tt> directory. For a new GUI class you should either modify an existing sample (e.g. <tt>samples/widgets</tt> if you add a new control), or write a new one if the new feature is too big to be shoehorned into an existing sample. We won't be able to accept changes which we are unable to test (and how can you be sure that they work without this anyhow?) so it is really important to not forget about this step.

## Submit Your Code

This step is explained in more details on a [separate page](/develop/how-to-submit-patches/) but the short summary is: your pull requests are welcome but please do read the linked instructions unless you already have experience of submitting patches to other open source projects.

Please be prepared that it can take us some time to deal with the patches. We are sorry about it, but unfortunately each patch needs to be reviewed and tested and this takes time which is always in short supply. As the time needed to deal with a patch increases exponentially with its size, it is much better to submit 2 or 3 small (but self-contained) patches than one mega-patch containing all of them.

## Further Involvement

Once the patch is included in the main wxWidgets tree, it becomes a integral part of the project and so can be maintained by the core wxWidgets development team. You are still welcome to continue working with the code you wrote and submitting more changes to it. Usually the first contribution is the most time-consuming step and the subsequent ones take less time both for you to make and for wxWidgets developers to apply. Of course, after submitting many high quality patches you shouldn't hesitate to ask to become a full-fledged member of wxWidgets development team!

