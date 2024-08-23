---
title: "Addressing wxWebRequest Requests"
date: 2024-08-22
comments: true
tags:
 - net
 - web
---

[wxWebRequest][webrequest] is a very useful class if you need to perform some
HTTPS requests from a GUI application: it's, perhaps, not the fastest nor the
most full-featured, but it doesn't have any dependencies and provides a very
simple way to do it without blocking the normal event handling of the GUI
program, i.e. without making it "unresponsive", thanks to its asynchronous
nature.

However, ever since it was added, there were requests to add an even simpler
way to use it in blocking, or synchronous, way, when this is affordable, for
example in simple console applications or in background threads of a GUI
application. And this is finally possible with
[wxWebRequestSync][webrequest-sync], which can be used as simply as

```cpp
wxWebRequestSync request = wxWebSessionSync::GetDefault().CreateRequest("https://www.wxwidgets.org");
auto const result = request.Execute();
if ( !result ) {
    wxLogError("Request failed: %s", result.error);
} else {
    if ( request.GetStatusCode() == 200 ) {
        // Do something with the response data in request.GetResponse()
        ...
    }
}
```

If you're familiar with `wxWebRequest` itself, you can see that the new class
is similar to it as it's still created by `wxWebSessionSync` very similar to
`wxWebSession` used with asynchronous requests, but instead of starting the
request and waiting to get its results at some later time via an event you can
just execute it in a blocking way and get the results in the same function.

By the way, note that, because the results are provided in the same
[wxWebResponse][webresponse] object, it is possible to write console and GUI
versions of the same program that execute the requests differently, but share
the code handling responses.

Finally, while adding support for synchronous operation, a few other things,
some of which had been also requested before, and others just looked like a
good idea, were added too:

1. It is now possible to set a common base URL to use for all requests created
   by the same session using either [wxWebSession::SetBaseURL()][setbaseurl]
   or [wxWebSessionSync::SetBaseURL()][setbaseurl-sync] depending on the kind
   of the requests used. This is handy when sending requests to some web API.
1. It is now also possible to disable the proxy or specify a proxy different
   from the system default with [wxWebSession::SetProxy()][setproxy] (which
   also exists in `wxWebSessionSync`, of course). Special thanks to Apple for
   making it apparently impossible to do this under iOS -- so this function
   does nothing there.
1. Because the world wide web is dark and full of dangers and misconfigured
   servers, it is also possible to disable the host name verification in the
   TLS certificate by calling [wxWebRequest::MakeInsecure()][makeinsecure].
   Hopefully you will never need to do it, but the function is there if you do.

And there was some other minor cleanup and bug fixes: notably, credentials can
now be specified directly in the URL under all platforms now, including when
using WinHTTP under MSW.

Of course, as with any change, all these new features could have introduced
their own bugs, so if you use `wxWebRequest` in your applications (or maybe
have just been waiting to start to do it!), please let us know if they broke
anything, preferably before the 3.3.0 release which is bound to happen at some
moment in the future.

[webrequest]: https://docs.wxwidgets.org/latest/classwx_web_request.html
[webrequest-sync]: https://docs.wxwidgets.org/latest/classwx_web_request_sync.html
[webresponse]: https://docs.wxwidgets.org/latest/classwx_web_response.html
[setbaseurl]: https://docs.wxwidgets.org/latest/classwx_web_session.html#a0a4caa930213a99017d8860a3a96e3cc
[setbaseurl-sync]: https://docs.wxwidgets.org/latest/classwx_web_session_sync.html#af5639d853664b12df39b9ff792ea512c
[setproxy]: https://docs.wxwidgets.org/latest/classwx_web_session.html#a853e6c4bc8cc66bd061d977d29094bd3
[makeinsecure]: https://docs.wxwidgets.org/latest/classwx_web_request.html#adb96d330a09ff87098f848200a361eb3
