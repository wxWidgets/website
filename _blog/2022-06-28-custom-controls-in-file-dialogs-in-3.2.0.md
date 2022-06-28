---
title: "Custom Controls in File Dialogs in 3.2.0"
date: 2022-06-28
author: Vadim Zeitlin
comments: true
---

One [long-standing problem][1] in wxMSW was that, until now, we were still
using old-style Windows file dialogs that looked out of place under modern
Windows versions in some cases. To be more precise, `wxFileDialog` switched to
using the old-looking dialog when its `SetExtraControlCreator()` function was
called to add some custom controls to it, resulting in dialogs like this:

<img src="/blog/2022/06/custom-controls-in-file-dialogs-in-3.2.0/custom_old.png" class="img-fluid" alt="Screenshot of old-style dialog">

[1]: https://github.com/wxWidgets/wxWidgets/issues/14770

This will finally be fixed in wxWidgets 3.2.0 where the same dialogs now looks
as expected:

<img src="/blog/2022/06/custom-controls-in-file-dialogs-in-3.2.0/custom_new.png" class="img-fluid" alt="Screenshot of new-style dialog">

provided the new [SetCustomizeHook()][2] function is used to customize the
dialog instead.

[2]: https://docs.wxwidgets.org/3.1.7/classwx_file_dialog.html#ab02b1018e1e045904656e1d094010bc2

The switch to the new API is, unfortunately, required, as the new-style
Windows file dialogs simply don't provide the degree of customization that was
allowed by the old wxWidgets API (but please note that the old API still
continues to work, i.e. backwards compatibility is 100% preserved, it's just
that using it still results in an old-style dialog being shown).

Using it is quite different from the old one, but should be relatively
straightforward. The simplest possible example is shown in the [dialogs
samples][3] and looks like this:

```cpp
#include "wx/filedlg.h"
#include "wx/filedlgcustomize.h"

void SomeFunction() {
    class EncryptHook : public wxFileDialogCustomizeHook {
    public:
        void AddCustomControls(wxFileDialogCustomize& customizer) override {
            m_checkbox = customizer.AddCheckBox("Encrypt");
        }

        void TransferDataFromCustomControls() override {
            m_encrypt = m_checkbox->GetValue();
        }

        bool Encrypt() const { return m_encrypt; }

    private:
        wxFileDialogCheckBox* m_checkbox = nullptr;

        bool m_encrypt = fase;
    };

    EncryptHook customHook;
    dialog.SetCustomizeHook(customHook);

    if ( dialog.ShowModal() == wxID_OK ) {
        // Use customHook.Encrypt() here
    }
}
```

[3]: https://github.com/wxWidgets/wxWidgets/blob/v3.2.0-rc1/samples/dialogs/dialogs.cpp#L2013-L2040

As you can see, using the new API involves defining a new class inheriting
from `wxFileDialogCustomizeHook` and implementing its `AddCustomControls()`
pure virtual function to actually add the custom controls to the dialog. The
available controls are restricted to a few basic ones, see
[wxFileDialogCustomize documentation][4] for the list of available `AddXXX()`
methods, but should cover all the usual needs. Similarly, the controls created
by these functions are not the usual wxWidgets controls, but provide the basic
expected functionality, e.g. as can be seen above, `wxFileDialogCheckBox` has
the same `GetValue()` method as `wxCheckBox`, and similarly for the other
`wxFileDialogXXX` classes.

Once the controls are created, they can be updated while the dialog is shown
by overriding [UpdateCustomControls()][5] virtual function (not shown here),
and their values must be saved when [TransferDataFromCustomControls()][6] is
called, which only happens if the dialog was accepted by the user.

[4]: https://docs.wxwidgets.org/3.1.7/classwx_file_dialog_customize.html
[5]: https://docs.wxwidgets.org/3.1.7/classwx_file_dialog_customize_hook.html#a853376bdb78b1ff526e92eb54c617239\
[6]: https://docs.wxwidgets.org/3.1.7/classwx_file_dialog_customize_hook.html#abc1458029f362686eb7b2ea4b6454413

Note that there is no control over the layout in the new API, it is determined
by Windows itself, with more or less satisfactorily results depending on the
size of the dialog. Generally speaking, using just a few controls will work
well, while creating too many of them will probably result in less great
results. Of course, if precise control over the controls positioning is
absolutely needed, there is still always the possibility to use the old
`SetExtraControlCreator()` function, which is one of the reasons it hasn't
been deprecated -- but in most cases you should use `SetCustomizeHook()`
instead and update the existing code to use it.


Last, but not least, the reason for taking so long to finally address this
problem is due to the fact that implementing the new API required quite a
non-trivial amount of work and it was finally only made possible by generous
funding from [KiCad project](https://www.kicad.org/) -- so thanks a lot to
KiCad for making it possible to include this enhancement in wxWidgets 3.2 (but
I'll still take sole credit for all the bugs in the implementation, of course)!
