---
title: "Using XDG-compliant Config Files"
date: 2024-01-07
comments: true
tags: linux, xdg
---

[XDG Base Directory Specification][xdg] has been a standard for organizing
application data files under Linux for a long time. Unfortunately, wxWidgets
has been around for even longer, and when support for configuration files was
added to it back in 1997, the usual convention was still to put these
so-called "dot files" directly in the user home directory, which is why an
application called `myapp` would use `~/.myapp` as its configuration file by
default and this default couldn't be just changed because this would make the
existing applications "lose" their configuration files, annoying their users.

However if this wasn't a concern, applications can (and this isn't exactly new
as this function exists since many years -- thanks to Martin Kögler for
contributing it) call

```cpp
wxStandardPaths::Get().SetFileLayout(wxStandardPaths::FileLayout_XDG);
```

to have their new files created in XDG-compliant `~/.config` directory (or
`$XDG_CONFIG_HOME` if this variable is defined, of course).

This was an easy, and recommended way to use the standard locations for the
new programs. However it didn't completely solve the problem because you had
to know about it in order to do add this call to a new application and for the
other ones there was still the vexing question of what to do with their
existing installations.

So, here is the good news: two recent changes in wxWidgets do, finally, solve
this problem fully. First of all, since wxWidgets 3.3.0 `wxFileConfig`
defaults to creating new files under `~/.config` by default, even without
using `FileLayout_XDG`, if there is no existing dot file in the home
directory. Unlike changing the file layout globally for all functions, this
is broadly backwards-compatible because the existing installations are not
affected: if there already was a dot file in the home directory, it will still
be used. But if the application runs on a new system for the first time, it
will behave correctly and avoid polluting the home directory with its files,
creating them under `~/.config` instead.

And, second, if you'd like to change the configuration file location to the
recommended one even for the existing users of your application, this is now
as simple as just calling the new [wxFileConfig::MigrateLocalFile()][fileconf-migrate]
function: it does what its name implies and migrates the existing local
configuration file to the new location. It is not limited just to this, but
the intended use case is, of course, for the applications not already using
XDG to call it with `wxCONFIG_USE_XDG` flag, as following:

```cpp
// Execute this early during the application startup, before the
// global wxConfig object is created.
const auto res = wxFileConfig::MigrateLocalFile("myapp", wxCONFIG_USE_XDG);
```

This will do nothing if there is no existing `~/.config/.myapp` file and will
move this file to the new location, i.e. `~/.config/myapp/myapp.conf`, if it
does exist. Or, rather, it will try to move it, but it might fail, so you will
also want to check for errors, e.g. like this:

```cpp
if ( !res.oldPath.empty() ) {
    if ( res.error.empty() )
        wxLogMessage("Config file moved from \"%s\" to \"%s\"", res.oldPath, res.newPath);
    else
        wxLogWarning("Migrating old config failed: %s.", res.error);
}
```

And if it did succeed, which should normally be the case, `wxFileConfig` will
use the file in the new, XDG-compliant, location by default, you don't have
anything special to do.

---

To summarize, `wxFileConfig` default behaviour has now changed to be what most
people would expect and creating new files in the correct location doesn't
require any effort at all, while moving the existing ones to it is as simple
as adding a single function call. However if, for some reason, you'd like to
keep the old behaviour, you now need to specify the new `wxCONFIG_USE_HOME`
flag when creating `wxFileConfig` to force using home directory for the
configuration files, no matter what.


Hopefully this will help wx applications to stop using configuration files in
the home directory in 2024!

[xdg]: https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html
[fileconf-migrate]: https://docs.wxwidgets.org/latest/classwx_file_config.html#a11ccb0d85d3d5982130372b9a653d66d
