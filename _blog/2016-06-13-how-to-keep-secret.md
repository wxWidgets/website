---
title: How to Keep a Secret
date: '2016-06-13T02:03:00.000Z'
author: Vadim Zeitlin
tags:
- new
- brief
modified_time: '2016-06-13T02:03:10.050Z'
blogger_id: tag:blogger.com,1999:blog-35681690.post-1331648834085408730
blogger_orig_url: http://wxwidgets.blogspot.com/2016/06/how-to-keep-secret.html
---

If your program needs to ask the user for a password, e.g. to connect to a web
site or a database, chances are that it proposes a way to remember this password
and not have to enter it the next time. This is convenient for the users, but is
quite difficult to implement in any more or less secure way and a lot of
programs end up storing the passwords in plain text, or something almost
indistinguishable from it, e.g. base64-encoded string, in [wxConfig].

But now wxWidgets provides a better way to do it with the new [wxSecretStore]
class. It is still as simple to use as wxConfig but uses the OS-provided
password storage facility such as Microsoft Windows credentials vault or OS X
keychain, for storing the secrets you confide to it. Here is how you would
normally use it:

```cpp
#include <wx/secretstore.h>

void DoSomethingRequiringAPassword(const wxString& username)
{
    wxSecretStore store = wxSecretStore::GetDefault();
    if ( !store.IsOk() ) {
        // Complain about not being able to store the password securely
        ...
        return;
    }

    // This is a free-form string which should be reasonably unique.
    const char* UNIQUE_SERVICE_NAME = "com.mycompany.myproject/database"
    wxSecretValue secret = store.Load(UNIQUE_SERVICE_NAME, username);
    if ( !secret.IsOk() ) {
        const wxString password = AskUserForPassword(username);

        // Use the password, confirming that it is correct
        ...

        if ( wantsToSaveIt ) {
            if ( !store.Save(UNIQUE_SERVICE_NAME, username, secret) ) {
                // Warn about failing to save the password
                ...
            }
        }
    }
}
```

Currently there is not much more that can be done with this class, the only
functionality not illustrated by this example is deleting a previously stored
secret, but in the future we could extend it, notably to provide a way to also
ask the user to enter the password using the OS-provided dialog. Let us know if
you use wxSecretStore and if you see possible improvements, please don't keep
them secret!

[wxConfig]: https://docs.wxwidgets.org/trunk/classwx_config_base.html
[wxSecretStore]: https://docs.wxwidgets.org/trunk/classwx_secret_store.html
