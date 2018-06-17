---
title: Do Androids dream of wxWidgets?
date: '2010-12-07T23:23:00.003Z'
author: Vadim Zeitlin
modified_time: '2010-12-07T23:36:10.944Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-6001257849742973540
blogger_orig_url: http://wxwidgets.blogspot.com/2010/12/do-androids-dream-of-wxwidgets.html
---

Don't know about androids to be honest but I'd definitely love to be able to
develop applications using wxWidgets that could run on both iPhone (which is
already kind of possible) and Android and also reuse at least parts of their
code with desktop versions. Unfortunately Android doesn't exactly encourage
developing in C++ but things seem to be slowly moving in the right direction and
the last [NDK] release allows to implement GUI applications entirely in C++ by
providing the new `NativeActivity` class.

There is still no convenient access to native widgets but we can use Java
classes from C++ code via JNI and we could even automatically wrap them using
something like [JCC]. So at least in principle it seems that there are no
obstacles to implementing a working wxAndroid port. And at least wxUniversal
could be ported without using JNI at all and just using OpenGL for drawing.

All we need right now are the volunteers (and/or donations...) to make it
happen. For me personally it would be one of the most interesting things to do
after releasing wxWidgets 3.0.

[NDK]: http://developer.android.com/sdk/ndk/index.html
[JCC]: http://lucene.apache.org/pylucene/jcc/index.html
