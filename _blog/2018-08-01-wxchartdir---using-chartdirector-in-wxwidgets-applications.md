---
title: "wxChartDir - Using ChartDirector in wxWidgets applications"
date: 2018-08-01
author: Ulrich Telle
comments: true
---

Many real-world applications have the requirement to display data in a graphical form
using various types of diagrams like pie, bar, line, or scatter charts, just to name a few.
wxWidgets applications are no exception.

The wxWidgets library itself offers no explicit charting support, but several separate
open source wxWidgets-based components exist which claim to fulfill the needs for graphical
data representation - at least to a certain degree:

- [wxMathPlot](http://wxmathplot.sourceforge.net/)<br/>
  Support for scientific x-y diagrams including zooming and panning
- [wxFreeChart](https://github.com/iwbnwif/wxFreeChart)<br/>
  Support for various business chart types (line, histogram, area,
  bar, pie, bubble, gantt, OHLC)
- [wxCharts](https://github.com/wxIshiko/wxCharts)<br/>
  Support for various business chart types (pie, donut, line, column,
  stacked column, bar, stacked bar, scatter, polar, radar, bubble, OHLC,
  candlestick)

As is unfortunately often the case for open source components the above mentioned components
either support only a limited set of diagram types or suffer from lack of features or lack of
continued development, although they may suffice for certain use cases.

Even resorting to a commercial charting library can be a bumpy road to success, since very
few charting libraries support the wxWidgets framework directly. However, with the arrival
of [wxChartDir](https://utelle.github.io/wxchartdir/) this has changed.

<img src="/blog/2018/08/wxchartdir-using-chartdirector-in-wxwidgets-applications/wxchartdir.png" alt="wxChartDir" align="left" hspace="5">
**wxChartDir** provides components for the integration and use of the _commercial_ C++ library
[ChartDirector](https://www.advsofteng.com), a universal charting library developed
by [Advanced Software Engineering Ltd](https://www.advsofteng.com), in wxWidgets based applications.

**ChartDirector** is an _extremely versatile_, stable and _affordable_ charting library,
that supports many different chart types like pie, donut, bar, line, spline, step line,
trend line, curve-fitting, inter-line filling, area, band, scatter, bubble, floating box,
box-whisker, waterfall, contour, heat map, surface, vector, finance, gantt, radar, polar,
rose, pyramid, cone, funnel and more. Charts can be created as vector graphics in PDF and SVG
and as raster graphics in PNG, JPG, GIF and BMP.
Please visit the [ChartDirector gallery](https://www.advsofteng.com/gallery.html) to get
an impression of the capabilities of this library.

**wxChartDir** includes the following charting controls:

1. _wxChartViewer_ - a wxWidgets control that inherits from _wxPanel_ and _ViewPortManager_. A viewport can be imagined as a rectangular window of an underlying rectangular surface.
2. _wxViewPortControl_ - a wxWidgets control that inherits from _wxPanel_ and _ViewPortControlBase_. A viewport control is a user interface element to let the user visualize and manipulate the viewport managed by the ViewPortManager.

Included with **wxChartDir** are wxWidgets based versions of all sample applications coming with **ChartDirector**.
Many of them demonstrate the various types of interactive charts. 

_Figure 1_ shows a crosshair cursor with a tooltip for data points and data value labels on the axes.

<p align="center">
<img src="/blog/2018/08/wxchartdir-using-chartdirector-in-wxwidgets-applications/crosshair.png" alt="Crosshair Cursor">
<br/>Figure 1: Crosshair Cursor
</p>

_Figure 2_ shows the display of realtime data allowing to measure the distance between data points selected by positioning 2 track lines.

<p align="center">
<img src="/blog/2018/08/wxchartdir-using-chartdirector-in-wxwidgets-applications/extra-realtimemeasure.png" alt="Track Lines" width="600">
<br/>Figure 2: Measuring data between 2 track lines
</p>

_Figure 3_ shows the zooming and scrolling of the viewport via a viewport control.

<p align="center">
<img src="/blog/2018/08/wxchartdir-using-chartdirector-in-wxwidgets-applications/viewportcontroldemo.png" alt="Viewport Control" width="600">
<br/>Figure 3: Controling the viewport
</p>

_Figure 4_ shows the visualization of 3D data.

<p align="center">
<img src="/blog/2018/08/wxchartdir-using-chartdirector-in-wxwidgets-applications/wxdemo.png" alt="3D Surface" width="600">
<br/>Figure 4: 3D surface
</p>

_Figure 5_ shows the feature to zoom and scroll in 2 dimensions.

<p align="center">
<img src="/blog/2018/08/wxchartdir-using-chartdirector-in-wxwidgets-applications/xyzoomscroll.png" alt="X-Y Zoom/Scroll" width="600">
<br/>Figure 5: Horizontal and vertical zooming and scrolling
</p>

All relevant parts of the **ChartDirector** _trial version_ for C++ are included in the **wxChartDir** distribution. This allows to compile and test the sample applications without having to download and install **ChartDirector** separately.

The **ChartDirector** _trial version_ is fully functional, but will produce yellow banner messages at the bottom of the generated chart images. To eliminate these banners the [purchase of a ChartDirector license](https://www.advsofteng.com/purchase.html) is required.
