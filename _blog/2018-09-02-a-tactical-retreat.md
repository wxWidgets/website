---
title: "A Tactical Retreat"
date: 2018-09-02
tags:
- brief
- build
- change
comments: true
---

If a "retreat" is the antonym of "advance", then we've just made one by
removing all the contents of the wxAdvanced library, affectionately known as
"adv". This library used to contain a hodge-podge of classes having nothing
much to do with each other except not naturally belonging to any other library
and being considered too "advanced", in some vague sense of the word, to be in
wxCore. Just the trouble of explaining what it was shows why it was a bad idea
to have it in the first place and we have decided to not perpetuate this
mistake any more by moving all of its contents to wxCore itself.

This change is perfectly backwards compatible for now, and will remain so in
wxWidgets 3.2, as we still provide an empty "adv" library for compatibility,
so that the existing projects linking with it continue to work. You just don't
need to do it any longer, i.e. you can simply remove all references to this
library now. E.g. if you're currently using `wx-config --libs std,adv,html`
when linking your program under Unix, just use `wx-config --libs std,html`
instead.

The empty compatibility husk of wxAdvanced will only be removed in some
distant future, so there is no real urgency with upgrading your make- and
project files, but at the very least remember that you don't need to link with
it any more when creating new projects.

