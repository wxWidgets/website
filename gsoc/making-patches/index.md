---
title: Making Patches
---

To get some experience of working with wxWidgets code base we ask the
potential applicants to make some simple modifications to wxWidgets. Please
don't worry if you hadn't done it before, it's really not that difficult and
we'll be there to help you with it. The important thing is to try to do it and
see that you can, indeed, succeed as you will need to be able to work on
wxWidgets sources during your GSoC project.

To get a general understanding of how submitting patches works, please read
our [patches HOWTO](https://trac.wxwidgets.org/wiki/HowToSubmitPatches). Next,
you need to select a task to work on. While you could take any open ticket
in our [Trac](https://trac.wxwidgets.org) installation, we have a special list
of [simple bugs](https://trac.wxwidgets.org/query?status=accepted&status=confirmed&status=infoneeded&status=infoneeded_new&status=new&status=reopened&keywords=~simple) which are
supposed to be easy to fix so we recommend that you look at one of those.
Please feel free to choose one of the bugs that either corresponds to your
experience (e.g. if you are a Windows programmer you could additionally filter
by wxMSW platform) or have some relationship with the project you plan to
propose. Finally, if you can't find anything at all for you to work on in this
list, please ask us and we'll try to find something appropriate for you
together.

Once you have chosen the task you are going to work on, please make your
changes and prepare a patch as described in the HOWTO. You may work with
[Git](https://github.com/wxWidgets/wxWidgets), and please do use a checkout of the latest sources as,
again, you will need to be able to work with them during your project.

Finally, open a Git PR or attach your patch to the Trac ticket (creating a new
one if necessary). As before, please don't hesitate to ask us on the mailing
list if you have any questions about this procedure.

And good luck!
