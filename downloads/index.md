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
compilers:
  - description: "MinGW-TDM 4.92"
    id: gcc492TDM
  - description: "MinGW-TDM 5.10"
    id: gcc510TDM
  - description: "MinGW-TDM 7.20"
    id: gcc720
  - description: "Visual Studio 2008"
    id: vc90
  - description: "Visual Studio 2010"
    id: vc100
  - description: "Visual Studio 2012"
    id: vc110
  - description: "Visual Studio 2013"
    id: vc120
  - description: "Visual Studio 2015"
    id: vc140
  - description: "Visual Studio 2017"
    id: vc141
architectures:
  - description: "32-Bit (x86)"
  - description: "64-Bit (x86_64)"
    postfix: "_x64"
binaries:
  - description: "Development Files"
    id: Dev
  - description: "Release DLLs"
    id: ReleaseDLL
  - description: "Release DLLs PDB Files"
    id: ReleasePDB
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
      <div class="card-header">Source Code</div>
      <div class="card-body">
        {% for archive in page.source_archives %}
          {% assign asset_filename = archive.prefix | append: release.version | append: archive.postfix %}
          {% assign asset = release_assets | where: "name", asset_filename | first %}
          
          <a href="{{ asset.browser_download_url }}">{{ archive.description }}</a>
          ({{ asset.size | times: 1.0 | divided_by: 1024 | divided_by: 1024 | ceil }} MiB)
          <br>

        {% endfor %}
      </div>
    </div>
    <div class="card my-3">
      <div class="card-header">Binaries</div>
      <div class="card-body">

        <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#mswModal{{ release_id }}">
          <i class="fab fa-windows fa-fw"></i> Download Windows Binaries
        </button> <br/>

        wxMSW DLLs for the selected compilers are available.
        For more details see <a href="../blog/2012/08/how-to-use-294-wxmsw-binaries/">here</a><br />

        <br />
        <a href="{{ release.bin_url_debian }}" target="_new">Ubuntu / Debian Packages</a><br>
        <a href="{{ release.bin_url_fedora }}" target="_new">Fedora / openSUSE Packages</a>
      </div>
      <div class="card-footer text-muted">
        <i class="fab fa-github fa-fw"></i> <a href="{{ release_info.html_url }}">Release Information on GitHub</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card my-3">
      <div class="card-header">Documentation</div>
      <div class="card-body">
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

<div class="modal fade" id="mswModal{{ release_id }}" tabindex="-1" role="dialog" aria-labelledby="mswModal{{ release_id }}Label" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="mswModal{{ release_id }}Label">Download Windows Binaries</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">        

        {% assign asset_filename = "wxWidgets-" | append: release.version | append: "-headers.7z" %}
        {% assign header_asset = release_assets | where: "name", asset_filename | first %}

<div class="accordion" id="accordionMSW{{ release_id }}">
        {% for compiler in page.compilers reversed %}
          {% assign asset_filename = "wxMSW-" | append: release.version | append: "_" | append: compiler.id | append: "_Dev.7z" %}
          {% assign dev_asset = release_assets | where: "name", asset_filename | first %}

          {% if dev_asset %}
            {% assign cardID = release_id | append: compiler.id %}
            <div class="card">
              <div class="card-header p-0" id="heading{{ cardID }}">
                <h5 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse{{ cardID }}" aria-expanded="false" aria-controls="collapse{{ cardID }}">
                    {{ compiler.description }}
                  </button>
                </h5>
              </div>

              <div id="collapse{{ cardID }}" class="collapse {% if forloop.first %}show{% endif %}" aria-labelledby="heading{{ cardID }}" data-parent="#accordionMSW{{ release_id}}">
                <div class="card-body">
                  <p class="card-text">
                      <a href="{{ header_asset.browser_download_url }}">Header Files</a>
                      ({{ header_asset.size | times: 1.0 | divided_by: 1024 | divided_by: 1024 | ceil }} MiB)
                  </p>

            {% for architecture in page.architectures %}
              <h6 class="card-subtitle text-muted">{{ architecture.description }}</h6>
              <p class="card-text ml-2">
              {% for bin in page.binaries %}
                {% assign asset_filename = "wxMSW-" | append: release.version | append: "_" | append: compiler.id | append: architecture.postfix | append: "_" | append: bin.id | append: ".7z" %}
                {% assign asset = release_assets | where: "name", asset_filename | first %}
                {% if asset %}
                <a href="{{ asset.browser_download_url }}">{{ bin.description }}</a> 
                ({{ asset.size | times: 1.0 | divided_by: 1024 | divided_by: 1024 | ceil }} MiB)
                <br />
                {% endif %}
              {% endfor %}
              </p>
            {% endfor %}

                </div>
              </div>

            </div>
          {% endif %}
        {% endfor %}
</div>

   </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
      <div class="card-header">Source Code</div>
      <div class="card-body">
        wxAll: <a href="{{ page.mirror }}/v2.8.12/wxWidgets-2.8.12.tar.gz">GZIP</a> 19MB, <a href="{{ page.mirror }}/v2.8.12/wxWidgets-2.8.12.zip">ZIP</a> 23MB<br>
        wxMSW: <a href="{{ page.mirror }}/v2.8.12/wxMSW-2.8.12-Setup.exe">Installer</a> 13MB, <a href="{{ page.mirror }}/v2.8.12/wxMSW-2.8.12.zip">ZIP</a> 17MB<br>
        <a href="{{ page.mirror }}/v2.8.12/wxGTK-2.8.12.tar.gz">wxGTK</a> 13MB<br>
        <a href="{{ page.mirror }}/v2.8.12/wxMac-2.8.12.tar.gz">wxMac</a> 14MB (see <a href="https://wiki.wxwidgets.org/Development:_wxMac#Building_under_10.6_Snow_Leopard">10.6+ notes</a>)<br>
        <a href="{{ page.mirror }}/v2.8.12/wxX11-2.8.12.tar.gz">wxX11</a> 13MB<br>
      </div>
    </div>
    <div class="card my-3">
      <div class="card-header">Binaries</div>
      <div class="card-body">
        <a href="http://wiki.wxpython.org/InstallingOnUbuntuOrDebian">Ubuntu / Debian Packages</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card my-3">
      <div class="card-header">Documentation</div>
      <div class="card-body">
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
