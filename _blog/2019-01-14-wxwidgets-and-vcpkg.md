---
title: "wxWidgets and vcpkg"
date: 2019-01-14
tags:
- vcpkg
- msvs
- nuget
- build
comments: true
---

Something that may have flown under your radar since its creation in 2016 is Microsoft's [**vcpkg**](https://docs.microsoft.com/en-us/cpp/vcpkg), "A C++ package manager for Windows, Linux and MacOS". It's been steadily improving since release, and while I've only used its Windows incarnation, I can attest that it brings the overhead of working with third-party C++ libraries down to almost nil.

##### Set up with wxWidgets in 5 minutes

<sub><sup>Network and compiler speed depending.</sup></sub>

0. Prerequisites: Visual Studio on Windows, gcc on Linux or Clang on MacOS, Visual Studio Code on Linux/MacOS.
1. Install **vcpkg** (full instructions at https://docs.microsoft.com/en-us/cpp/vcpkg).
    * `git clone https://github.com/Microsoft/vcpkg`
    * `bootstrap-vcpkg.bat` (for Windows) or `./bootstrap-vcpkg.sh` (for Linux/MacOS)
1. Install **wxWidgets** (using your platform's default [triplet](https://vcpkg.readthedocs.io/en/latest/users/triplets/), e.g. *x86-windows* or *x64-linux.cmake*).
    * `vcpkg install wxwidgets`
    * This will take a little while. Pause the timer and go grab a beverage
1. Make wxWidgets available to Visual Studio or Visual Studio Code.
    * `vcpkg integrate install`
1. Use wxWidgets in your project of choice. Just `#include` wx headers as normal. Delete any existing references to wxWidgets in your include or library directories. You may need to add the preprocessor definition **WXUSINGDLL** if the project did not previously reference wxWidgets.
    * If you are using Windows and Visual Studio, try [this console hello world app](https://github.com/MikeAirey/wxWidgets-micro-sample). All you need to do is clone and build it.

##### Why bother?

vcpkg automatically builds the latest version of each installed library from source on your local machine, guaranteeing compatibility. For hands-free local dependency management you can use the implicit integration demonstrated above, and to cut down on third party build time and hassles across a team you can [export](https://vcpkg.readthedocs.io/en/latest/users/integration/#export-command) as-built bundles of one or more libraries (e.g. wxWidgets, sqlite and boost) to be consumed by MSBuild/Visual Studio, CMake or custom tooling.

By using a combination of vcpkg and exported packages, it's now easy to set up a project such that developers working with the wxWidgets framework can keep their team up to date almost effortlessly, and developers working on non-framework areas never need to consider it at all.
