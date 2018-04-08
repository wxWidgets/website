---
title: wxWidgets 2.7.1 released
date: '2006-10-12T20:00:00.000Z'
author: Julian Smart
modified_time: '2006-10-12T20:16:46.463Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-116068330609123102
blogger_orig_url: http://wxwidgets.blogspot.com/2006/10/wxwidgets-271-released.html
---

12th October 2006: wxWidgets 2.7.1 (a development release) is now [available for
download].

[available for download]: /downloads/

The main changes since 2.7.0 are detailed below. We would be grateful for
testing as we work towards 2.8.0 release within the next few weeks. However
please be aware that 2.7.1 is not production quality.

wxMac defaults to using the more advanced Core Graphics implementation - this is
a work in progress, and we would like to hear of any problems. You can edit
include/wx/mac/carbon/chkconf.h to switch Core Graphics off.

Thanks,

The wxWidgets Team


#### Changes in 2.7.1

All:

* Added wxDir::FindFirst() (Francesco Montorsi).
* Added wxPlatformInfo class (Francesco Montorsi).
* Added wxLocale::IsAvailable() (Creighton).
* Added Malay translations (Mahrazi Mohd Kamal)
* Added reference counting for wxVariant
* For consistency, all classes having Ok() method now also have IsOk() one, use
  of the latter form is preferred although the former hasn't been deprecated yet

All (GUI):

* Support for right-to-left text layout (started by Diaa Sami during Google
  Summer of Code, with a lot of help from Tim Kosse and others).
* wxAnimationCtrl added (Francesco Montorsi)
* Added wxAboutBox() function for displaying the standard about dialog
* Added wxID\_PAGE\_SETUP standard id.
* Added wxSize::IncBy() and DecBy() methods.
* Added wxTextCtrl::IsEmpty()
* Added file type parameter to wxTextCtrl::LoadFile, wxTextCtrl::SaveFile for
consistency with wxRichTextCtrl.
* wxRichTextCtrl: fixed range out-by-one bug to be consistent with wxTextCtrl
  API, fixed some attribute bugs and added wxRichTextStyleComboCtrl.
* Added wxWindow::IsDoubleBuffered()

wxMSW:

* Implemented wxComboBox::SetEditable().
* wxSemaphore::Post() returns wxSEMA_OVERFLOW as documented (Christian Walther)
* Fixed a bug whereby static controls didn't use the correct text colour if the
  parent's background colour had been set (most noticeable when switching to a
  high-contrast theme).
* Respect wxBU_EXACTFIT style in wxToggleButton (Alexander Borovsky)

wxMac:

* Add parameter to the --enable-universal_binary configure option for the path
  to the SDK.

wxGTK:

* Automatically use stock items for menu items with standard ids.
* Setting cursor now works for all controls.
* Implemented right-to-left support
* Implemented left indentation and tab stops support in wxTextCtrl (Tim Kosse).

wxUniv:

* Added wxTLW::UseNativeDecorations() and UseNativeDecorationsByDefault()
