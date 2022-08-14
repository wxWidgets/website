---
title: "Translations"
scripts:
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

<div class="card border-primary my-4">
  <div class="card-header bg-primary text-light">Available Translations</div>
  <div class="card-body">
    <div id="translation_loading" class="text-center my-5" style="display: none;">
      <p style="padding-top: 6em;">Loading Translations...</p>
    </div>
    <div id="translation_caption" style="display: none;">
      <p>
        Translation status of all languages supported by wxWidgets. This table
        can be sorted by language or by status by clicking the appropriate
        header.
      </p>
      <p>Last Updated: <span id="stats_updated_date">Unknown</span></p>
      <p class="text-center">
        <span class="badge badge-success">Complete</span>
        <span class="badge badge-warning">Fuzzy</span>
      </p>
    </div>
    <noscript>Please enable JavaScript to view translation status information.</noscript>
  </div>
  <table id="translations" class="table table-hover" style="display: none;">
    <thead><tr>
      <th style="cursor: pointer;">Language</th>
      <th style="cursor: pointer;" colspan="2">Status</th>
    </tr></thead>
    <tbody></tbody>
  </table>
</div>

## How to Help

wxWidgets uses the standard GNU gettext tools for translations so if you are
already familiar with them you shouldn't have any problems with working on
wxWidgets translations. Here are the steps you should follow:

* Get the latest version of the file `wxstd.pot` from the wxWidgets source
  tree. If you're using git or the daily snapshots, you should already have it,
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

[1]: https://raw.githubusercontent.com/wxWidgets/wxWidgets/master/locale/wxstd.pot
[2]: http://www.loc.gov/standards/iso639-2/php/English_list.php
[3]: http://www.iso.org/iso/prods-services/iso3166ma/02iso-3166-code-lists/country_names_and_code_elements
[4]: http://www.poedit.net/
[5]: mailto:vadim@wxwidgets.org
[6]: /support/mailing-lists/

## Translators

* Afrikaans (af)
  * Petri Jooste <<rkwjpj -at- puk.ac.za>>
  * Friedel Wolff <<friedel -at- translate.org.za>>
* Albanian (sq)
  * Besnik Bleta <<besnik -at- programeshqip.org>>
* Arabic (ar)
  * Abdullah Abouzekry <<abouzekry -at- gmail.com>>
* Aragonese (an)
  * Jorge Pérez <<jorgtum -at- gmail.com>>
* Basque (eu)
  * 3ARRANO Euskalgintza Taldea <<3arrano -at- euskalerria.org>>
  * Xabier Aramendi <<azpidatziak -at- gmail.com>>
* Catalan (ca)
  * Pau Bosch i Crespo <<paubcrespo -at- hotmail.com>>
  * Robert Millan <<rmh -at- aybabtu.com>>
  * Eduard Ereza Martínez <<eduard -at- ereza.cat>>
* Chinese (zh_CN)
  * James Pan <<bojaypan -at- mail.ru>>
  * mrfx <<mrfx -at- fm365.com>>
  * Liu XiaoXi <<liouxiao -at- hotmail.com>>
  * Huang Jiawei <<hjiawei -at- gmail.com>>
  * William Jiang <<williamroot777 -at- qq.com>>
* Chinese (zh_TW)
  * James Pan <<bojaypan -at- mail.ru>>
  * Walter Cheuk <<wwycheuk -at- gmail.com>>
  * pal.tw <<pal.tw -at- yahoo.com.tw>>
  * Yi-Jyun Pan <<pan93412 -at- gmail.com>>
* Corsican (co)
  * Patriccollu <<patriccollu -at- gmail.com >>
* Croatian (hr)
  * Milo Ivir <<mail -at- milotype.de>>
* Czech (cs)
  * Vaclav Slavik <<vaclav.slavik -at- matfyz.cz>>
  * Herbert Breunung <<deirdre_skye -at- web.de>>
  * Zbyněk Schwarz <<zbynek.schwarz -at- gmail.com>>
* Danish (da)
  * Leif Jensen <<leif -at- danmos.dk>>
  * Henrik Ræder Clausen <<henrik -at- fangorn.dk>>
  * Morten Råbjerg Ulrich <<mulrich15 -at- yahoo.dk>>
  * Bue Vester-Andersen <<bue -at- vester-andersen.dk>>
  * scootergrisen
* Dutch (nl)
  * Patrick Hubers <<phubers -at- solve-i-t.com>>
  * Gideon van Melle <<gvmelle -at- gmail.com>>
  * Thomas De Rocker <<thomasderocker -at- hotmail.com>>
* Finnish (fi)
  * Kaj G Backas <<kgb -at- compart.fi>>
  * Lauri Nurmi <<lanurmi -at- iki.fi>>
  * Jaakko Salli <<jmsalli79 -at- hotmail.com>>
  * Elias Julkunen <<elias.julkunen -at- gmail.com>>
  * Jani Kinnunen <<jani.kinnunen -at- wippies.fi>>
* French (fr)
  * Stephane Junique <<stephane.junique -at- optics.kth.se>>
  * Lionel Allorge <<lionel.allorge -at- lunerouge.com>>
  * Gilles Guyot <<gilles.guyot -at- krypton.be>>
* Galician (gl_ES)
  * Leandro Regueiro <<leandro.regueiro -at- gmail.com>>
  * Adrián González Alba <<correoadrian82 -at- hotmail.com>>
  * Nuria Andión <<nandiez -at- gmail.com>>
* Georgian (ka)
  * Temuri Doghonadze <<temuri.doghonadze -at- gmail.com>>
* German (de)
  * Daniel Reith <<danr -at- gmx.de>>
  * Gerhard Gruber <<sparhawk -at- aon.at>>
  * Stefan Hedemann <<stefan -at- hedemann.de>>
  * Dr. Detlev Reymann <<d.reymann -at- geisenheim.mnd.fh-wiesbaden.de>>
  * Mark Johnson
  * Martin Jost <<martinnost -at- users.sf.net>>
  * Herbert Breunung <<deirdre_skye -at- web.de>>
  * Ch. Buck <<chbuck -at- gmail.com>>
  * Max Christian Pohle <<webmaster -at- coderonline.de>>
  * Thomas Krebs <<thomas.krebs -at- mecadtron.de>>
  * Wolfgang Stöggl <<c72578 -at- yahoo.de>>
* Greek (el)
  * Tsolakos Stavros <<tsolako1 -at- otenet.gr>>
  * Nassos Yiannopoulos <<nassosy -at- innerprocess.com>>
* Hindi (hi)
  * Dhananjaya Sharma <<dysxhi -at- yahoo.co.in>>
  * Priyank Bolia <<priyank.bolia -at- gmail.com>>
* Hungarian (hu)
  * Végh János Dr. <<janos_vegh -at- users.sourceforge.net>>
* Indonesian (id)
  * Bambang Purnomosidi D. P. <<bambang -at- 3wsi.com>>
  * Rahmat Bambang <<doplank -at- gmx.com>>
* Italian (it)
  * bovirus <<bovirus -at- gmail.com>>
  * Mattia Barbon <<mbarbon -at- cpan.org>>
  * Marco Cavallini <<m.cavallini -at- koansoftware.com>>
  * Stefano <<l.stickell -at- yahoo.it>>
* Japanese (ja)
  * James Bishop <<james.bishop1 -at- tiscali.co.uk>>
  * Hiroshi Saito <<saito -at- inetrt.skcapi.co.jp>>
  * Suzumizaki-Kimitaka <<suzumizaki -at- free.japandesign.ne.jp>>
  * Y. KABA. <<kaba -at- shall-systemservice.co.jp>>
* Korean (ko_KR)
  * Sungkee Jung <<dragoneyes.org -at- gmail.com>>
* Latvian (lv)
  * Jānis Eisaks <<jancs -at- dv.lv>>
* Lithuanian (lt)
  * Pieter <<pieter.clarysse -at- bricsys.com>>
* Malay (ms)
  * Mahrazi Mohd Kamal <<mahrazi -at- gmail.com>>
* Nepali (ne)
  * Him Prasad Gautam <<drishtibachak -at- gmail.com>>
* Norwegian Bokmal (nb)
  * Hans F. Nordhaug <<hans -at- nordhaug.priv.no>>
  * Hallgeir Holien <<haholien -at- gmail.com>>
* Persian (fa_IR)
  * Ali Asadi <<ali.asady -at- gmail.com>>
* Polish (pl)
  * Mariusz Drozdowski <<schemedit -at- wp.pl>>
  * Piotr Mackowiak <<matis -at- linuxmail.org>>
  * Janusz Piwowarski <<jpiw -at- go2.pl>>
  * ABX <<abx -at- abx.art.pl>>
  * Michał Trzebiatowski <<hippie_1968 -at- hotmail.com>>
* Portuguese (pt)
  * Mario Pereira <<marionrpereira76 -at- hotmail.com>>
  * Antonio Cardoso Martins <<digiplan.pt -at- gmail.com>>
  * Carlos Gonçalves <<mail -at- cgoncalves.info>>
  * Manuela Silva <<manuela.silva -at- sky.com>>
* Portuguese (pt_BR)
  * E.A. Tacao <<e.a.tacao -at- terra.com.br>>
  * José Eduardo de Carvalho Diniz <<jecdiniz -at- yahoo.com.br>>
  * Adiel Mittmann <<adiel -at- inf.ufsc.br>>
  * Allann Jones <<allanjos -at- gmail.com>>
  * Felipe <<felipefplzx -at- gmail.com>>
* Romanian (ro)
  * Manuel Ciosici <<manuelciosici -at- yahoo.com>>
  * Cătălin Răceanu <<cata_sr -at- yahoo.com>>
  * Adrian Hăisan <<adrian..haisan -at- gmail.com>>
* Russian (ru)
  * Dennis Prochko <<wolfsoft -at- mail.ru>>
  * Roman Rolinsky <<rolinsky -at- mema.ucl.ac.be>>
  * Vadim Zeitlin <<vadim -at- wxwidgets.org>>
  * Andrew V. Samoilov <<kai -at- cmail.ru>>
  * Dmitry Levichev <<d.levichev -at- gmail.com>>
  * Pavel Maryanov <<acid -at- jack.kiev.ua>>
  * Alexander Kovalenko <<nktch -at- yandex.ru>>
* Slovak (sk)
  * Ivan Masar <<helix84 -at- centrum.sk>>
  * jozef m <<jozef.m923 -at- gmail.com>>
* Slovenian (sl)
  * Roman Plevel <<roman.plevel -at- iskratr.si>>
  * Martin Srebotnjak <<miles -at- filmsi.net>>
* Spanish (es)
  * Guillermo Rodriguez Garcia <<guille -at- iies.es>>
  * JSJ <<jsj666 -at- hotmail.com>>
  * Francisco Vila <<francisco.vila -at- hispalinux.es>>
  * Adrián González Alba <<correoadrian82 -at- hotmail.com>>
  * Miguel Giménez <<webmaster -at- solener.com>>
* Swedish (sv)
  * Jonas Rydberg <<jonas -at- drevo.se>>
  * Kaj G Backas <<kgb -at- compart.fi>>
* Tamil (ta)
  * DINAKAR T.D. <<td.dinkar -at- gmail.com>>
* Turkish (tr)
  * Hakki Dogusan <<dogusanh -at- dynaset.org>>
  * Kaya Zeren <<kayazeren -at- gmail.com>>
* Ukrainian (uk)
  * Yuri Chornoivan <<yurchor -at- ukr.net>>
  * Eugene Manko <<manko -at- salingshot.co.nz>>
  * Ylia K <<k_ilya -at- ukr.net>>
* Valencian (Southern Catalan) (ca@valencia)
  * Robert Millan <<rmh -at- aybabtu.com>>
* Vietnamese (vi)
  * Tran Ngoc Quan <<vnwildman -at- gmail.com>>
