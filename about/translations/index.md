---
layout: default
title: "Translations"
footer_scripts:
  - "/assets/js/jquery.tablesorter.min.js"
  - "/assets/js/spin.min.js"
  - "translations.js"
---

wxWidgets presents many user-readable strings such as "help" or "Load file" to
users of any wxWidgets-based application that need to be translated to the
user's language if it is different from English. wxWidgets has built in support
for this, and will automatically translate these strings if the translation for
the current language is available.

The list below shows all currently supported translations. If you would like to
help translate wxWidgets to your language, please see the instructions below.
It is often helpful to have several translators for every language.

## Available Translations

<div id="translation_loading" style="text-align: center; margin: 2em 0 2em 0; display: none;">
  <p style="padding-top: 6em;">Loading Translations...</p>
</div>
<table id="translations" class="table table-hover" style="display: none;">
  <caption>Translation status of all languages supported by wxWidgets.</caption>
  <thead><tr><th>Language</th><th colspan="2">Status</th></tr></thead>
  <tbody></tbody>
</table>
<noscript>Please enable JavaScript to view translation status information.</noscript>

## How to Help

wxWidgets uses the standard GNU gettext tools for translations so if you are
already familiar with them you shouldn't have any problems with working on
wxWidgets translations. Here are the the steps you should follow:

* Get the latest version of the file `wxstd.pot` from the wxWidgets source
  tree. If you're using SVN or the daily snapshots, you should already have it,
  otherwise you can always retrieve it directly from [here][1].
* Rename it to `ll_CC.po` where `ll` is the 2 letter [ISO 639-1][2] language
  code for your language and `CC` is the 2 letter [ISO 3166][3] country code.
  If the country is the default one for this language (e.g. Italy is default
  country for Italian), then the country part and underscore preceding it
  should be omitted -- this is, in fact, the most common case.
* Translate the strings in this file using either your preferred text editor or
  a specialized tool such as Vaclav Slavik's excellent [Poedit][4] utility.
* Verify that your translations can at least be compiled (even if they are
  incomplete) by running `msgfmt -v ll_CC.po`. Please note that you must use
  the `-v` option. In particular, please fill in the header fields because
  `msgfmt` doesn't accept the default values for them.
* Send the finished translation to [Vadim Zeitlin][5] and it will be added to
  the next wxWidgets release or snapshot.

In addition, please consider subscribing to the [translators mailing list][6]
where special announcements for translators are announced.

[1]: http://svn.wxwidgets.org/svn/wx/wxWidgets/trunk/locale/wxstd.pot
[2]: http://www.loc.gov/standards/iso639-2/php/English_list.php
[3]: http://www.iso.org/iso/prods-services/iso3166ma/02iso-3166-code-lists/country_names_and_code_elements
[4]: http://www.poedit.net/
[5]: mailto:vadim@wxwidgets.org
[6]: /support/maillst2.htm#translators