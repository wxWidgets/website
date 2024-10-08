---
title: "Survival of the Oldest"
date: 2024-10-08
comments: true
tags: history
---

I've accidentally learnt about the [Git of Theseus][git-of-t] tool today
and, of course, couldn't resist running it on wxWidgets repository. After
spinning the fans for quite some time, it finished analysing it and I could
create a graph showing the survival rate of the lines of code in our code:

<img src="/blog/2024/10/08/survival-of-the-oldest/survival.png" class="img-fluid" alt="Plot of survival rate of lines of code in wxWidgets repository">

The exponential fit here is extremely bad, which is not really surprising
considering that wxWidgets consists of several parts, evolving (or stagnating)
at their own rate, but it's still interesting to see that the half-life of
more than 6 years is at the very end of the range of values presented in the
table at the end of the tool's author [blog post][blog-post], with only Git
itself (at 6.60 years) having a value significantly higher than this.

Another potentially interesting graph is that of code added by year:

<img src="/blog/2024/10/08/survival-of-the-oldest/by_year.png" class="img-fluid" alt="Plot of code added by year in wxWidgets repository">

which clearly shows when old ports were removed from the repository (all those
cliffs) but also the most productive years in terms of code added — and that
the recent years are not among them, unfortunately.

Hopefully this will change when somebody contributes GTK 4 support!

[git-of-t]: https://github.com/erikbern/git-of-theseus
[blog-post]: https://erikbern.com/2016/12/05/the-half-life-of-code.html
