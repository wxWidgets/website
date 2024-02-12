---
title: "More Resourceful Property Grid"
date: 2024-02-11
comments: true
tags: xrc, propgrid
---

Just a quick note to say that it is now possible to define [wxPropertyGrid][1]
controls in XRC, e.g. here is a minimal example:

```xml
<object class="wxPropertyGrid" name="grid_music">
    <property class="wxStringProperty">
        <label>Name</label>
        <value>Now And Then</value>
    </property>
    <property class="wxIntProperty">
        <label>Year</label>
        <value>2023</value>
    </property>
</object>
```

Support for `wxPropertyGrid` must be explicitly enabled by registering the XRC
handler for it, so the code loading the XRC file including the fragment above
would look like this:

```cpp
// Include declaration of the XRC handler for wxPropertyGrid.
#include "wx/xrc/xh_propgrid.h"

bool MyApp::OnInit() {
    auto xrc = wxXmlResource::Get();

    // Initialize all standard handlers.
    xrc->InitAllHandlers();

    // And add this one which is not standard.
    xrc->AddHandler(new wxPropertyGridXmlHandler);

    if ( !xrc->Load("propgrid.xrc") )
    {
        wxLogError("XRC file couldn't be loaded.");
        return false;
    }

    ...
}
```

The updated sample contains a more complex example of [wxPropertyGridManager
defined in XRC][2] and the documentation has been updated to [describe the
supported elements][3].

[1]: https://docs.wxwidgets.org/latest/classwx_property_grid.html
[2]: https://github.com/wxWidgets/wxWidgets/blob/master/samples/propgrid/propgrid.xrc
[3]: https://docs.wxwidgets.org/latest/overview_xrcformat.html#xrc_wxpropertygrid
