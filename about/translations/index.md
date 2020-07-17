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

[1]: https://raw.githubusercontent.com/wxWidgets/wxWidgets/master/locale/wxstd.pot
[2]: http://www.loc.gov/standards/iso639-2/php/English_list.php
[3]: http://www.iso.org/iso/prods-services/iso3166ma/02iso-3166-code-lists/country_names_and_code_elements
[4]: http://www.poedit.net/
[5]: mailto:vadim@wxwidgets.org

## Translators

* Afrikaans (af)
  * Petri Jooste <<rkwjpj@puk.ac.za>>
  * Friedel Wolff <<friedel@translate.org.za>>
* Albanian (sq)
  * Besnik Bleta <<besnik@programeshqip.org>>
* Arabic (ar)
  * Abdullah Abouzekry <<abouzekry@gmail.com>>
* Aragonese (an)
  * Jorge Pérez <<jorgtum@gmail.com>>
* Basque (eu)
  * 3ARRANO Euskalgintza Taldea <<3arrano@euskalerria.org>>
  * Xabier Aramendi <<azpidatziak@gmail.com>>
* Catalan (ca)
  * Pau Bosch i Crespo <<paubcrespo@hotmail.com>>
  * Robert Millan <<rmh@aybabtu.com>>
  * Eduard Ereza Martínez <<eduard@ereza.cat>>
* Chinese (zh_CN)
  * mrfx <<mrfx@fm365.com>>
  * Liu XiaoXi <<liouxiao@hotmail.com>>
  * Huang Jiawei <<hjiawei@gmail.com>>
  * William Jiang <<williamroot777@qq.com>>
* Chinese (zh_TW)
  * Walter Cheuk <<wwycheuk@gmail.com>>
  * pal.tw <<pal.tw@yahoo.com.tw>>
  * pan93412 <<pan93412@gmail.com>>
* Croatian (hr)
  * Milo Ivir <<mail@milotype.de>>
* Czech (cs)
  * Vaclav Slavik <<vaclav.slavik@matfyz.cz>>
  * Herbert Breunung <<deirdre_skye@web.de>>
  * Zbyněk Schwarz <<zbynek.schwarz@gmail.com>>
* Danish (da)
  * Leif Jensen <<leif@danmos.dk>>
  * Henrik Ræder Clausen <<henrik@fangorn.dk>>
  * Morten Råbjerg Ulrich <<mulrich15@yahoo.dk>>
  * Bue Vester-Andersen <<bue@vester-andersen.dk>>
  * scootergrisen
* Dutch (nl)
  * Patrick Hubers <<phubers@solve-i-t.com>>
  * Gideon van Melle <<gvmelle@gmail.com>>
  * Thomas De Rocker <<thomasderocker@hotmail.com>>
* Finnish (fi)
  * Kaj G Backas <<kgb@compart.fi>>
  * Lauri Nurmi <<lanurmi@iki.fi>>
  * Jaakko Salli <<jmsalli79@hotmail.com>>
  * Elias Julkunen <<elias.julkunen@gmail.com>>
  * Jani Kinnunen <<jani.kinnunen@wippies.fi>>
* French (fr)
  * Stephane Junique <<stephane.junique@optics.kth.se>>
  * Lionel Allorge <<lionel.allorge@lunerouge.com>>
  * Gilles Guyot <<gilles.guyot@krypton.be>>
* Galician (gl_ES)
  * Leandro Regueiro <<leandro.regueiro@gmail.com>>
  * Adrián González Alba <<correoadrian82@hotmail.com>>
  * Nuria Andión <<nandiez@gmail.com>>
* German (de)
  * Daniel Reith <<danr@gmx.de>>
  * Gerhard Gruber <<sparhawk@aon.at>>
  * Stefan Hedemann <<stefan@hedemann.de>>
  * Dr. Detlev Reymann <<d.reymann@geisenheim.mnd.fh-wiesbaden.de>>
  * Mark Johnson
  * Martin Jost <<martinnost@users.sf.net>>
  * Herbert Breunung <<deirdre_skye@web.de>>
  * Ch. Buck <<chbuck@gmail.com>>
  * Max Christian Pohle <<webmaster@coderonline.de>>
  * Thomas Krebs <<thomas.krebs@mecadtron.de>>
  * Wolfgang Stöggl <<c72578@yahoo.de>>
* Greek (el)
  * Tsolakos Stavros <<tsolako1@otenet.gr>>
  * Nassos Yiannopoulos <<nassosy@innerprocess.com>>
* Hindi (hi)
  * Dhananjaya Sharma <<dysxhi@yahoo.co.in>>
  * Priyank Bolia <<priyank.bolia@gmail.com>>
* Hungarian (hu)
  * Végh János Dr. <<janos_vegh@users.sourceforge.net>>
* Indonesian (id)
  * Bambang Purnomosidi D. P. <<bambang@3wsi.com>>
  * Rahmat Bambang <<doplank@gmx.com>>
* Italian (it)
  * bovirus <<bovirus@libero.it>>
  * Mattia Barbon <<mbarbon@cpan.org>>
  * Marco Cavallini <<m.cavallini@koansoftware.com>>
  * Stefano <<l.stickell@yahoo.it>>
* Japanese (ja)
  * James Bishop <<james.bishop1@tiscali.co.uk>>
  * Hiroshi Saito <<saito@inetrt.skcapi.co.jp>>
  * Suzumizaki-Kimitaka <<suzumizaki@free.japandesign.ne.jp>>
  * Y. KABA. <<kaba@shall-systemservice.co.jp>>
* Korean (ko_KR)
  * Sungkee Jung <<dragoneyes.org@gmail.com>>
* Latvian (lv)
  * Jānis Eisaks <<jancs@dv.lv>>
* Lithuanian (lt)
  * Pieter <<pieter.clarysse@bricsys.com>>
* Malay (ms)
  * Mahrazi Mohd Kamal <<mahrazi@gmail.com>>
* Nepali (ne)
  * Him Prasad Gautam <<drishtibachak@gmail.com>>
* Norwegian Bokmal (nb)
  * Hans F. Nordhaug <<hans@nordhaug.priv.no>>
  * Hallgeir Holien <<haholien@gmail.com>>
* Persian (fa_IR)
  * Ali Asadi <<ali.asady@gmail.com>>
* Polish (pl)
  * Mariusz Drozdowski <<schemedit@wp.pl>>
  * Piotr Mackowiak <<matis@linuxmail.org>>
  * Janusz Piwowarski <<jpiw@go2.pl>>
  * ABX <<abx@abx.art.pl>>
  * Michał Trzebiatowski <<hippie_1968@hotmail.com>>
* Portuguese (pt)
  * Mario Pereira <<marionrpereira76@hotmail.com>>
  * Antonio Cardoso Martins <<digiplan.pt@gmail.com>>
  * Carlos Gonçalves <<mail@cgoncalves.info>>
  * Manuela Silva <<manuela.silva@sky.com>>
* Portuguese (pt_BR)
  * E.A. Tacao <<e.a.tacao@terra.com.br>>
  * José Eduardo de Carvalho Diniz <<jecdiniz@yahoo.com.br>>
  * Adiel Mittmann <<adiel@inf.ufsc.br>>
  * Allann Jones <<allanjos@gmail.com>>
  * Felipe <<felipefplzx@gmail.com>>
* Romanian (ro)
  * Manuel Ciosici <<manuelciosici@yahoo.com>>
  * Cătălin Răceanu <<cata_sr@yahoo.com>>
  * Adrian Hăisan <<adrian..haisan@gmail.com>>
* Russian (ru)
  * Dennis Prochko <<wolfsoft@mail.ru>>
  * Roman Rolinsky <<rolinsky@mema.ucl.ac.be>>
  * Vadim Zeitlin <<vadim@wxwidgets.org>>
  * Andrew V. Samoilov <<kai@cmail.ru>>
  * Dmitry Levichev <<d.levichev@gmail.com>>
  * Pavel Maryanov <<acid@jack.kiev.ua>>
  * Alexander Kovalenko <<nktch@yandex.ru>>
* Slovak (sk)
  * Ivan Masar <<helix84@centrum.sk>>
* Slovenian (sl)
  * Roman Plevel <<roman.plevel@iskratr.si>>
  * Martin Srebotnjak <<miles@filmsi.net>>
* Spanish (es)
  * Guillermo Rodriguez Garcia <<guille@iies.es>>
  * JSJ <<jsj666@hotmail.com>>
  * Francisco Vila <<francisco.vila@hispalinux.es>>
  * Adrián González Alba <<correoadrian82@hotmail.com>>
  * Miguel Giménez <<webmaster@solener.com>>
* Swedish (sv)
  * Jonas Rydberg <<jonas@drevo.se>>
  * Kaj G Backas <<kgb@compart.fi>>
* Tamil (ta)
  * DINAKAR T.D. <<td.dinkar@gmail.com>>
* Turkish (tr)
  * Hakki Dogusan <<dogusanh@dynaset.org>>
  * Kaya Zeren <<kayazeren@gmail.com>>
* Ukrainian (uk)
  * Yuri Chornoivan <<yurchor@ukr.net>>
  * Eugene Manko <<manko@salingshot.co.nz>>
  * Ylia K <<k_ilya@ukr.net>>
* Valencian (Southern Catalan) (ca@valencia)
  * Robert Millan <<rmh@aybabtu.com>>
* Vietnamese (vi)
  * Tran Ngoc Quan <<vnwildman@gmail.com>>
