---
title: "Downloads"
mirror: "https://github.com/wxWidgets/wxWidgets/releases/download"
source_archives:
  - description: "Windows ZIP"
    prefix: "wxWidgets-"
    postfix: ".zip"
  - description: "Windows 7z"
    prefix: "wxWidgets-"
    postfix: ".7z"
  - description: "Windows Installer"
    prefix: "wxMSW-"
    postfix: "-Setup.exe"
  - description: "Source for Linux, macOS, etc"
    prefix: "wxWidgets-"
    postfix: ".tar.bz2"
doc_downloads:
  - description: "Manual (HTML) ZIP"
    postfix: "-docs-html.zip"
  - description: "Manual (HTML) BZIP"
    postfix: "-docs-html.tar.bz2"
  - description: "Manual (CHM)"
    postfix: "-docs-chm.zip"
---

<div class="alert alert-info">
  <strong>Not using C++?</strong>
  Get wxWidgets from the
  <a href="http://wxpython.org/download.php" class="alert-link" target="_new">wxPython</a>,
  <a href="http://wxperl.eu/download.html" class="alert-link" target="_new">wxPerl</a>, or
  <a href="http://wxnet.sourceforge.net/binary.html" class="alert-link" target="_new">wx.NET</a>
  download sites.
</div>

When installing wxWidgets on Windows or OS X, we always recommend building the
library from source yourself, and only provide the source package for most
platforms. On some platforms, we have provided a few pre-built binaries for
convenience, but wxWidgets supports so many compilers on so many platforms,
that we can't provide binaries for all of them. On Linux, we recommend using
the official wxGTK packages provided by each distribution, but newer packages
are available below.


{% for release in site.data.releases %}
## Latest {{ release.channel }} Release: {{ release.version }}

<p class="text-muted mb-0">Released: {{ release.released }}</p>
{% if release.stable_api_since %}
<p class="text-muted mb-0">API Stable Since: {{ release.stable_api_since }}</p>
{% endif %}

{% assign release_id = release.version | replace: ".", "" %}
{% assign release_info = site.data.release_assets[release_id] %}
{% assign release_assets = release_info.assets  %}
{% assign version = "v" | append: release.version %}

<div class="row">
  <div class="col-sm-6">
    <div class="card my-3">
      <div class="card-body">
        <p class="card-title">Source Code</p>
        {% for archive in page.source_archives %}
          {% assign asset_filename = archive.prefix | append: release.version | append: archive.postfix %}
          {% assign asset = release_assets | where: "name", asset_filename | first %}
          
          <a href="{{ asset.browser_download_url }}">{{ archive.description }}</a>
          ({{ asset.size | times: 1.0 | divided_by: 1024 | divided_by: 1024 | ceil }} MiB)
          <br>

        {% endfor %}

        <p class="card-title mt-3">Binaries</p>
        <a href="https://github.com/wxWidgets/wxWidgets/releases/tag/{{ version }}">wxMSW DLLs</a> for the selected compilers:
        <ul>
          <li>Visual C++ 2008-2017 (more details <a href="../blog/2012/08/how-to-use-294-wxmsw-binaries/">here</a>)</li>
          <li>TDM-GCC {{ release.tdm_gcc_versions }}</li>
        </ul>
        <a href="{{ release.bin_url_debian }}" target="_new">Ubuntu / Debian Packages</a><br>
        <a href="{{ release.bin_url_fedora }}" target="_new">Fedora / openSUSE Packages</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card my-3">
      <div class="card-body">
        <p class="card-title">Documentation</p>
        <a href="https://github.com/wxWidgets/wxWidgets/blob/{{ version }}/docs/readme.txt">Readme</a><br>
        <a href="https://github.com/wxWidgets/wxWidgets/blob/{{ version }}/docs/changes.txt">Changes</a><br>
        <p></p>
        <a href="https://docs.wxwidgets.org/{{ release.version }}/">Online Manual</a><br>

        {% for doc in page.doc_downloads %}
          {% assign asset_filename = "wxWidgets-" | append: release.version | append: doc.postfix %}
          {% assign asset = release_assets | where: "name", asset_filename | first %}
          
          <a href="{{ asset.browser_download_url }}">{{ doc.description }}</a>
          ({{ asset.size | times: 1.0 | divided_by: 1024 | divided_by: 1024 | ceil }} MiB)
          <br>
        {% endfor %}
      </div>
    </div>
  </div>
</div>

{% endfor %}

## Previous Stable Release: 2.8.12

<p class="text-muted mb-0">Released: March 28th, 2011</p>
<p class="text-muted mb-0">API Stable Since: December 11th, 2006</p>

<div class="row">
  <div class="col-sm-6">
    <div class="card my-3">
      <div class="card-body">
        <p class="card-title">Source Code</p>
        wxAll: <a href="{{ page.mirror }}/v2.8.12/wxWidgets-2.8.12.tar.gz">GZIP</a> 19MB, <a href="{{ page.mirror }}/v2.8.12/wxWidgets-2.8.12.zip">ZIP</a> 23MB<br>
        wxMSW: <a href="{{ page.mirror }}/v2.8.12/wxMSW-2.8.12-Setup.exe">Installer</a> 13MB, <a href="{{ page.mirror }}/v2.8.12/wxMSW-2.8.12.zip">ZIP</a> 17MB<br>
        <a href="{{ page.mirror }}/v2.8.12/wxGTK-2.8.12.tar.gz">wxGTK</a> 13MB<br>
        <a href="{{ page.mirror }}/v2.8.12/wxMac-2.8.12.tar.gz">wxMac</a> 14MB (see <a href="https://wiki.wxwidgets.org/Development:_wxMac#Building_under_10.6_Snow_Leopard">10.6+ notes</a>)<br>
        <a href="{{ page.mirror }}/v2.8.12/wxX11-2.8.12.tar.gz">wxX11</a> 13MB<br>
        <p class="card-title mt-3">Binaries</p>
        <a href="http://wiki.wxpython.org/InstallingOnUbuntuOrDebian">Ubuntu / Debian Packages</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card my-3">
      <div class="card-body">
        <p class="card-title">Documentation</p>
        <a href="{{ page.mirror }}/v2.8.12/readme.txt">Readme</a><br>
        <a href="{{ page.mirror }}/v2.8.12/changes-2.8.12.txt">Changes</a><br>
        <p></p>
        <a href="https://docs.wxwidgets.org/2.8/">Online Manual</a><br>
        <a href="{{ page.mirror }}/v2.8.12/wxWidgets-2.8.12-HTML.zip">Manual (HTML)</a> (2.6 MB)<br>
        <a href="{{ page.mirror }}/v2.8.12/wxWidgets-2.8.12-CHM.zip">Manual (CHM)</a> (3.7 MB)<br>
        <a href="{{ page.mirror }}/v2.8.12/wxWidgets-2.8.12-PDF.zip">Manual (PDF)</a> (10.3 MB)<br>
        <a href="{{ page.mirror }}/v2.8.12/wxWidgets-2.8.12-HLP.zip">Manual (WinHelp)</a> (2.9 MB)<br>
        <a href="{{ page.mirror }}/v2.8.12/wxWidgets-2.8.12-HTB.zip">Manual (HTB)</a> (2.2 MB)
      </div>
    </div>
  </div>
</div>

## Other Downloads

* [SourceForge.net Release Archive](https://sourceforge.net/projects/wxwindows/files/)
* [York University (UK) Mirror](http://biolpc22.york.ac.uk/pub/)
* [wxCode Add-on Repository](http://wxcode.sourceforge.net/)
* [Logos](/downloads/logos/)
