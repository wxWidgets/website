---
title: Early October and a bit of September recap
date: '2006-10-08T08:11:00.000Z'
author: Ryan Norton
modified_time: '2006-10-08T22:58:46.240Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-116029617307940151
blogger_orig_url: http://wxwidgets.blogspot.com/2006/10/early-october-and-bit-of-september.html
---

The wxDataViewCtrl class gotten [some documentation]. wxDataViewCtrl aims to be
a replacement for wxListCtrl and wxTreeCtrl.

[some documentation]: https://docs.wxwidgets.org/3.0/classwx_data_view_ctrl.html

A standardized, and sometimes native, way for showing an about dialog was added
to CVS. The main way to do this is through the [wxAboutBox()] function.

There is a bit of discussion over the status of the `SOC2006_SOCKET` branch of
CVS. This was the branch started as part of Google's summer of code to make
improvements to the wxSocket APIs and implementation.

Changes to the wxIcon API on wxMac were also proposed in order to better
interact with the native Carbon API. Ports are often inconsistant on the ease of
use with Native APIs; for example wxMac does not have a streamlined way to
interact with all types of window handles, such as `wxWindow::AssociateHandle`;
often times this is due to the design of the Native API itself.

New classes for graphics were added, including wxGraphicsPath and wxGCDC, in
order to interact with APIs such as GDI+ on Windows and Cairo. There is
currently no documentation for the classes, however. The interface is available
through `wx/graphics.h`.

[wxAboutBox()]: https://docs.wxwidgets.org/3.0/group__group__funcmacro__dialog.html#ga6d8198c95b97786f206abfde010a4d8f
