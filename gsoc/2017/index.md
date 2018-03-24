---
title: GSoC 2017
---

We had two projects during Google Summer of Code 2017. Check out the
[GSoC 2017 summary][1] post for a summary of what each student
accomplished.

[1]: http://wxwidgets.blogspot.com/2017/12/gsoc-2017-summary.html

----

### Support multi-touch gestures

- Student: Prashant Kumar
- Mentor: Cătălin Răceanu

Original proposal:

> The goal of this project is to generate wxWidgets events for the multi-touch
> gestures recognized by the underlying system and, possibly, also the raw
> touches which compose them. But it’s adding support for the high level
> events, such as "zoom", "pan" or "rotate" which is the most important part
> of this project.
> Modern desktop systems all support sending such events but do it in
> different ways, so the first part of this project will be to find a subset
> of events and information carried by them sufficiently rich to be useful,
> yet also supported by more than one, and ideally by all three, major
> platforms.

[GSoC Project Page](https://summerofcode.withgoogle.com/archive/2017/projects/5379891201572864/)

[git branch](https://github.com/prashantkn94/wxWidgets/tree/SOC2017_GESTURES)

----

### wxWebView JavaScript Integration

- Student: Jose Lorenzo
- Mentor: Steven Lamerton, Mariano Reingart

Original proposal:

> wxWebView currently provides a simple RunScript() function for running
> JavaScript. However in many cases it would be preferable have access to a
> return value, or even to call C++ from the JavaScript. This project would
> aim to provide at least basic functionality for accessing JavaScript values.
> An API would be required that ensures uniform behaviour across the different
> backends.

[GSoC Project Page](https://summerofcode.withgoogle.com/archive/2017/projects/6201193772613632/)

[git branch](https://github.com/joseeloren/wxWidgets/tree/SOC2017_WEBVIEW_JS)

----

<p class="my-5 text-center">
  <a href="../2014/" class="btn btn-lg btn-outline-primary"><i class="fas fa-arrow-alt-circle-left fa-fw"></i> Previous Year</a>
</p>
