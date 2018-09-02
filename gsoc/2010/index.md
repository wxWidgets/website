---
title: GSoC 2010
---

We had the record five projects during Google Summer of Code 2010:

----

### wxRichTextCtrl image enhancement
Student: Bella
Mentor: Julian Smart

Original proposal:

> wxRichTextCtrl aims to provide a generic implementation of a rich text editor
> that can handle different character styles, paragraph formatting, and images.
> With this project I will implement a class to support the basic operation
> control for the image's size, alignment and float options. What's more,
> images will be able to floated in the project buffer in proper order and
> genetic layout algorithm that could later be used to wrap text around image
> and other objects.

This project was successful and was integrated into the next release.

[git branch](https://github.com/wxWidgets/wxWidgets/tree/SOC2010_RTC_IMAGES)

----

### Implementing wxQT port
Student: Javier Torres
Mentor: Julian Smart

Original proposal:

> A port of wxWidgets to the Qt toolkit already exists but is at a very basic
> state. Implementing the basic widgets (buttons, labels, etc.) should make the
> port suitable for developing small applications with it.

The goals of this project were over-ambitious and in spite of great efforts by
Javier, wxQt hasn't achieved the usable state yet.

[git branch](https://github.com/wxWidgets/wxWidgets/tree/wxQT)

See also: [wiki page](https://wiki.wxwidgets.org/WxQt)

----

### Masked Edit Control
Student: Julien Weinzorn
Mentor: Robin Dunn

Original proposal:

> Masked Edit Control is used to help user to write a string in the good
> format. It may be useful in ip configuration for example. Administrator
> access is required to install or to modify critical files. This two project
> is very useful for the user and for the developers.

Unfortunately, the student didn't finish this project.

[git branch](https://github.com/wxWidgets/wxWidgets/tree/SOC2010_MASKED_CTRL)

----

### Wrapping new Windows Vista/7 functionality
Student: Rickard Westerlund
Mentor: Vadim Zeitlin

Original proposal:

> This proposal describes a project for integrating new features introduced to
> the Windows API with Windows Vista and 7. Some will be implemented as native
> implementations for existing components, and some others would introduce new
> generic components along with a native implementation like the Task Dialog.
> The benefit of this project is to allow wxWidgets to stay modern with newer
> GUI components.

This project was successful and brought a better, more native, appearance to
wxWidgets programs under modern Windows systems.

[git branch](https://github.com/wxWidgets/wxWidgets/tree/SOC2010_WIN7_UI)

----

### Improved wxWidgets GUI unit testing
Student: Steven Lamerton
Mentor: Stefan Csomor & Vadim Zeitlin

> wxWidgets currently has very few tests for its GUI classes. This proposal
> aims to remedy this by first providing an improved GUI testing system and set
> of documentation followed by a large set of new tests. In turn this should
> help reduce the number of bugs in the project itself and improve consistency
> whilst making it easier for new developers to add their own tests in the
> future.

This project was a spectacular success and resulted in addition of
[wxUIActionSimulator](https://docs.wxwidgets.org/trunk/classwx_u_i_action_simulator.html)
class and a whole new GUI test suite using it, as well as fixing a huge number
of bugs in wxWidgets.

[git branch](https://github.com/wxWidgets/wxWidgets/tree/SOC2010_GUI_TEST)

----

<p class="my-5 text-center">
  <a href="../2009/" class="btn btn-lg btn-outline-primary"><i class="fas fa-arrow-alt-circle-left fa-fw"></i> Previous Year</a>
  <a href="../2011/" class="btn btn-lg btn-outline-primary">Next Year <i class="fas fa-arrow-alt-circle-right fa-fw"></i></a>
</p>
