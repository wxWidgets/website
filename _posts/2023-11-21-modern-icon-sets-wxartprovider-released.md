---
title: "Modern Icon Sets wxArtProvider Released"
date: 2023-11-21
comments: true
---

[perazz][1] has released [wxMaterialDesignArtProvider][2], a custom `wxArtProvider` class providing SVG-based icons from the [Material Design][3], [SimpleIcons][4], [FontAwesome][5] and [FluentUI system][6] datasets. All these datasets come with permissive licenses (MIT, CC BY 4.0, CC0 1.0, Apache 2.0) that should make it easy to embed it in new and existing projects.  

All SVG icons are hardcoded into headers such that no external files are needed to build the art provider class. Each dataset belongs to a custom client (so that filled/outline versions can be used for hovering effects) and color customization is provided via a simple regex-based extension.

Hopefully this can be useful to people who want to make their existing wxWidgets applications access modern icon sets with limited effort.

![](wxMaterialDesignArtProvider_browser.png)
<img src="/blog/2023/11/21/modern-icon-sets-wxartprovider-released/wxMaterialDesignArtProvider_browser.png" class="img-fluid" alt="Screenshots of the wxMaterialDesignArtProvider sample browser in macOS and Windows">

[1]: https://github.com/perazz
[2]: https://github.com/perazz/wxMaterialDesignArtProvider
[3]: https://github.com/marella/material-design-icons
[4]: https://github.com/simple-icons/simple-icons/tree/develop
[5]: https://github.com/FortAwesome/Font-Awesome
[6]: https://github.com/microsoft/fluentui-system-icons
