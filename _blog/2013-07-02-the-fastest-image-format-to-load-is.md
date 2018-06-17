---
title: The fastest image format to load is...
date: '2013-07-02T17:18:00.003Z'
author: Vadim Zeitlin
tags:
- benchmark
- brief
modified_time: '2013-07-02T17:18:41.591Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-6778812910577426344
blogger_orig_url: http://wxwidgets.blogspot.com/2013/07/the-fastest-image-format-to-load-is.html
---

... surprisingly, at least to me, TIFF. I have recently added a simple
[benchmark for wxImage] methods, mostly to be able to test the optimizations to
`wxImage::Scale()` [done] by `@Hsilgos`, but it also looked like a good
opportunity to test the speed of loading the same image in different formats.
And it turns out that loading the image from TIFF is consistently faster than
loading it from JPEG, BMP or PNG even though the JPEG file is much smaller and
I'd expect this to play a role. Actually, either the TIFF library under Linux is
particularly optimized or the other ones are not optimized at all because using
the system libraries for all formats (except BMP which is always loaded using
our own code), loading TIFF image is more than twice faster than loading the
JPEG one, 8 times faster and **10** times faster than loading the PNG one. Under
Windows, where our builds of the libraries, compiled without any particular
optimizations, are used, TIFF is relatively twice slower as it's only 10% faster
than JPEG, 4 times faster than BMP and 5 times faster than PNG but the
differences are still quite big.

The fact that using libpng turns out to be slower (albeit not by a large margin)
than our own naive BMP loading code is rather surprising too but perhaps it's
due to the code in `wxPNGHandler` which tries to determine the alpha format in a
not very clever way. It would be interesting to profile this further and also
test with other images (currently I have a huge sample of 1) and at least
determine whether TIFF is consistently faster or just for some images (and, if
so, for which ones) and whether this is specific to the code in wxWidgets or if
the TIFF protocol or library is just really more efficient.

[benchmark for wxImage]: https://trac.wxwidgets.org/changeset/74319
[done]: https://trac.wxwidgets.org/changeset/74321
