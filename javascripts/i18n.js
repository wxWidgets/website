// ---------------------------------------------------------------------
//           Configuration of translations status script
// ---------------------------------------------------------------------
// Setup SVN access here, must point to the directory with .po files:
var localeCheckoutURL = "http://svn.wxwidgets.org/svn/wx/wxWidgets/trunk/locale/";

// Name of POT file (in SVN directory):
var potFileName     = "wxstd.pot";

// Path to images (1x16 bars):
var imgFuzzy        = "/images/i18n-fuzzy.png";
var imgTranslated   = "/images/i18n-translated.png";
var imgUntranslated = "/images/i18n-untranslated.png";

// Width of status bar:
var graphWidth = 200;
// ---------------------------------------------------------------------
//                     List of our translators
// ---------------------------------------------------------------------

// for convenience, the records here are sorted by the language code, even
// though they're displayed sorted by the language name in the table below
translators = new Array();
translators["af"]         = '<a href="mailto:rkwjpj@@puk.ac.za">Petri Jooste</a>';
translators["ar"]         = '<a href="mailto:abouzekry@@gmail.com">Abdullah Abouzekry</a>';
translators["ca@valencia"]= '<a href="mailto:rmh@@aybabtu.com">Robert Millan</a>';
translators["hu"]         = '<a href="mailto:Janos_Vegh@@users.sourceforge.net">Végh János Dr.</a>';
translators["id"]         = '<a href="mailto:bambang@@3wsi.com">Bambang Purnomosidi D. P.</a>';
translators["ko_KR"]      = '<a href="mailto:dragoneyes.org@@gmail.com">Sungkee Jung</a>';
translators["lt"]         = '<a href="mailto:pieter.clarysse@@bricsys.com">Pieter</a>';
translators["ms"]         = '<a href="mailto:mahrazi@@gmail.com">Mahrazi Mohd Kamal</a>';
translators["nb"]         = '<a href="mailto:hans@@nordhaug.priv.no">Hans F. Nordhaug</a>';
translators["sk"]         = '<a href="mailto:helix84@@centrum.sk">Ivan Masar</a>';
translators["sq"]         = '<a href="mailto:besnik@@programeshqip.org">Besnik Bleta</a>';
translators["ta"]         = '<a href="mailto:td.dinkar@@gmail.com">DINAKAR T.D.</a>';
translators["vi"]         = '<a href="mailto:vnwildman@gmail.com">Tran Ngoc Quan</a>';
translators["zh_TW"]      = '<a href="mailto:pal.tw@@yahoo.com.tw">pal.tw</a>';

translators["ca"]         = new Array(  '<a href="mailto:paubcrespo@@hotmail.com">Pau Bosch i Crespo</a><br/>',
                                        '<a href="mailto:rmh@@aybabtu.com">Robert Millan</a>');

translators["cs"]         = new Array(  '<a href="mailto:vaclav.slavik@@matfyz.cz">Vaclav Slavik</a><br/>',
                                        '<a href="mailto:deirdre_skye@@web.de">Herbert Breunung</a><br/>',
                                        '<a href="mailto:zbynek.schwarz@@gmail.com">Zbyn&#283;k Schwarz</a>');
translators["da"]         = new Array(  '<a href="mailto:leif@@danmos.dk">Leif Jensen</a><br>',
                                        '<a href="mailto:Henrik@@fangorn.dk">Henrik Ræder Clausen</a>',
                                        '<a href="mailto:mulrich15@@yahoo.dk">Morten Råbjerg Ulrich</a>');

translators["de"]         = new Array(  '<a href="mailto:DanR@@gmx.de">Daniel Reith</a><br/>',
                                        '<a href="mailto:sparhawk@@aon.at">Gerhard Gruber</a><br/>',
                                        '<a href="mailto:stefan@@hedemann.de">Stefan Hedemann</a><br/>',
                                        '<a href="mailto:D.Reymann@@geisenheim.mnd.fh-wiesbaden.de">Dr. Detlev Reymann</a><br/>',
                                        'Mark Johnson<br/>',
                                        '<a href="mailto:martinnost@@users.sf.net">Martin Jost</a><br/>',
                                        '<a href="mailto:deirdre_skye@@web.de">Herbert Breunung</a><br/>',
                                        '<a href="mailto:chbuck@@gmail.com">Ch. Buck</a><br/>',
                                        '<a href="mailto:webmaster@@coderonline.de">Max Christian Pohle</a><br/>',
                                        '<a href="mailto:Thomas.Krebs@@mecadtron.de">Thomas Krebs</a>');

translators["el"]         = new Array(  '<a href="mailto:tsolako1@@otenet.gr">Tsolakos Stavros</a><br/>',
                                        '<a href="mailto:nassosy@@innerprocess.com">Nassos Yiannopoulos</a>');

translators["es"]         = new Array(  '<a href="mailto:guille@@iies.es">Guillermo Rodriguez Garcia</a><br/>',
                                        '<a href="mailto:jsj666@@hotmail.com">JSJ</a><br/>',
                                        '<a href="mailto:francisco.vila@@hispalinux.es">Francisco Vila</a><br/>',
                                        '<a href="mailto:correoadrian82@@hotmail.com">Adrián González Alba</a>');

translators["eu"]         = new Array(  '<a href="mailto:3arrano@@euskalerria.org">3ARRANO Euskalgintza Taldea</a><br/>',
                                        '<a href="mailto:azpidatziak@@gmail.com">Xabier Aramendi</a>');

translators["fi"]         = new Array(  '<a href="mailto:kgb@@compart.fi">Kaj G Backas</a><br/>',
                                        '<a href="mailto:lanurmi@@iki.fi">Lauri Nurmi</a><br/>',
                                        '<a href="mailto:jmsalli79@@hotmail.com">Jaakko Salli</a><br/>',
                                        '<a href="mailto:elias.julkunen@gmail.com">Elias Julkunen</a>');

translators["fr"]         = new Array(  '<a href="mailto:Stephane.Junique@@optics.kth.se">Stephane Junique</a><br>',
                                        '<a href="mailto:lionel.allorge@@lunerouge.com">Lionel Allorge</a><br>',
                                        '<a href="mailto:Gilles.Guyot@@Krypton.be">Gilles Guyot</a>');

translators["gl_ES"]      = new Array(  '<a href="mailto:leandro.regueiro@@gmail.com">Leandro Regueiro</a><br/>',
                                        '<a href="mailto:correoadrian82@@hotmail.com">Adrián González Alba</a>');

translators["hi"]         = new Array(  '<a href="mailto:dysxhi@@yahoo.co.in">Dhananjaya Sharma</a><br/>',
                                        '<a href="mailto:priyank.bolia@@gmail.com">Priyank Bolia</a>');

translators["it"]         = new Array(  '<a href="mailto:Roberto.Boriotti@@canon-europe.com">Roberto Boriotti</a><br/>',
                                        '<a href="mailto:mbarbon@@cpan.org">Mattia Barbon</a><br/>',
                                        '<a href="mailto:m.cavallini@@koansoftware.com">Marco Cavallini</a>',
                                        '(<a href="http://www.koansoftware.com" target=_new>Koan Software</a>),<br/>',
                                        '<a href="mailto:l.stickell@@yahoo.it">Stefano</a>');

translators["ja"]         = new Array(  '<a href="mailto:james.bishop1@@tiscali.co.uk">James Bishop</a><br/>',
                                        '<a href="mailto:saito@@inetrt.skcapi.co.jp">Hiroshi Saito</a><br/>',
                                        '<a href="mailto:suzumizaki@@free.japandesign.ne.jp">Suzumizaki-Kimitaka</a><br/>',
                                        '<a href="mailto:kaba@@shall-systemservice.co.jp">Y. KABA.</a>');

translators["nl"]         = new Array(  '<a href="mailto:phubers@@solve-i-t.com">Patrick Hubers</a><br/>',
                                        '<a href="mailto:gvmelle@@gmail.com">Gideon van Melle</a>');

translators["pl"]         = new Array(  '<a href="mailto:matis@@linuxmail.org">Piotr Maćkowiak</a><br/>',
                                        '<a href="mailto:jpiw@@go2.pl">Janusz Piwowarski</a><br/>',
                                        '<a href="mailto:abx@@abx.art.pl">ABX</a><br/>',
                                        '<a href="mailto:hippie_1968@@hotmail.com">Michał Trzebiatowski</a>');

translators["pt"]         = new Array(  '<a href="mailto:marionrpereira76@@hotmail.com">Mario Pereira </a><br/>',
                                        '<a href="mailto:digiplan.pt@@gmail.com">Antonio Cardoso Martins </a><br/>',
                                        '<a href="mailto:mail@@cgoncalves.info">Carlos Gonçalves</a>');

translators["pt_BR"]      = new Array(  '<a href="mailto:e.a.tacao@@terra.com.br">E.A. Tacao</a><br/>',
                                        '<a href="mailto:jecdiniz@@yahoo.com.br">José Eduardo de Carvalho Diniz</a><br/>',
                                        '<a href="mailto:adiel@@inf.ufsc.br">Adiel Mittmann</a><br/>',
                                        '<a href="mailto:allanjos@@gmail.com">Allann Jones</a>');

translators["ro"]         = new Array(  '<a href="mailto:manuelciosici@@yahoo.com">Manuel Ciosici</a><br/>',
                                        '<a href="mailto:cata_sr@@yahoo.com">Cătălin Răceanu</a><br/>',
                                        '<a href="mailto:adrian..haisan@@gmail.com">Adrian Hăisan</a>');

translators["ru"]         = new Array(  '<a href="mailto:wolfsoft@@mail.ru">Dennis Prochko</a><br/>',
                                        '<a href="mailto:rolinsky@@mema.ucl.ac.be">Roman Rolinsky</a><br/>',
                                        '<a href="mailto:vadim@@wxwidgets.org">Vadim Zeitlin</a><br/>',
                                        '<a href="mailto:kai@@cmail.ru">Andrew V. Samoilov</a>');

translators["sl"]         = new Array(  '<a href="mailto:roman.plevel@@iskratr.si">Roman Plevel</a><br/>',
                                        '<a href="mailto:miles@@filmsi.net">Martin Srebotnjak</a>');

translators["sv"]         = new Array(  '<a href="mailto:jonas@@arbor.se">Jonas Rydberg</a><br/>',
                                        '<a href="mailto:kgb@@compart.fi">Kaj G Backas</a>');

translators["tr"]         = new Array(  '<a href="mailto:dogusanh@@dynaset.org">Hakki Dogusan</a><br/>',
                                        '<a href="mailto:kayazeren@@gmail.com">Kaya Zeren</a>');

translators["uk"]         = new Array(  '<a href="mailto:yurchor@@ukr.net">Yuri Chornoivan</a><br/>',
                                        '<a href="mailto:manko@@salingshot.co.nz">Eugene Manko</a><br/>',
                                        '<a href="mailto:k_ilya@@ukr.net">Ylia K</a>');

translators["zh_CN"]      = new Array(  '<a href="mailto:mrfx@@fm365.com">mrfx</a><br/>',
                                        '<a href="mailto:liouxiao@@hotmail.com">Liu XiaoXi</a><br/>',
                                        '<a href="mailto:hjiawei@@gmail.com">Huang Jiawei</a>');
// ---------------------------------------------------------------------
//                   List of recognized languages
// ---------------------------------------------------------------------
langNames = new Array();
langNames["aa"]         = "Afar";
langNames["ab"]         = "Abkhazian";
langNames["ae"]         = "Avestan";
langNames["af"]         = "Afrikaans";
langNames["am"]         = "Amharic";
langNames["ar"]         = "Arabic";
langNames["as"]         = "Assamese";
langNames["ay"]         = "Aymara";
langNames["az"]         = "Azerbaijani";
langNames["ba"]         = "Bashkir";
langNames["be"]         = "Byelorussian";
langNames["bg"]         = "Bulgarian";
langNames["bh"]         = "Bihari";
langNames["bi"]         = "Bislama";
langNames["bn"]         = "Bengali";
langNames["bo"]         = "Tibetan";
langNames["br"]         = "Breton";
langNames["bs"]         = "Bosnian";
langNames["ca"]         = "Catalan";
langNames["ca@valencia"]= "Valencian (Southern Catalan)";
langNames["ce"]         = "Chechen";
langNames["ch"]         = "Chamorro";
langNames["co"]         = "Corsican";
langNames["cs"]         = "Czech";
langNames["cu"]         = "Church Slavic";
langNames["cv"]         = "Chuvash";
langNames["cy"]         = "Welsh";
langNames["da"]         = "Danish";
langNames["de"]         = "German";
langNames["dz"]         = "Dzongkha";
langNames["el"]         = "Greek";
langNames["en"]         = "English";
langNames["eo"]         = "Esperanto";
langNames["es"]         = "Spanish";
langNames["et"]         = "Estonian";
langNames["eu"]         = "Basque";
langNames["fa"]         = "Persian";
langNames["fi"]         = "Finnish";
langNames["fj"]         = "Fijian";
langNames["fo"]         = "Faroese";
langNames["fr"]         = "French";
langNames["fy"]         = "Frisian";
langNames["ga"]         = "Irish";
langNames["gd"]         = "Gaelic";
langNames["gl"]         = "Galician";
langNames["gn"]         = "Guarani";
langNames["gu"]         = "Gujarati";
langNames["ha"]         = "Hausa";
langNames["he"]         = "Hebrew";
langNames["hi"]         = "Hindi";
langNames["ho"]         = "Hiri Motu";
langNames["hr"]         = "Croatian";
langNames["hu"]         = "Hungarian";
langNames["hy"]         = "Armenian";
langNames["hz"]         = "Herero";
langNames["ia"]         = "Interlingua";
langNames["id"]         = "Indonesian";
langNames["ie"]         = "Interlingue";
langNames["ik"]         = "Inupiaq";
langNames["is"]         = "Icelandic";
langNames["it"]         = "Italian";
langNames["iu"]         = "Inuktitut";
langNames["ja"]         = "Japanese";
langNames["jw"]         = "Javanese";
langNames["ka"]         = "Georgian";
langNames["ki"]         = "Kikuyu";
langNames["kj"]         = "Kuanyama";
langNames["kk"]         = "Kazakh";
langNames["kl"]         = "Kalaallisut";
langNames["km"]         = "Khmer";
langNames["kn"]         = "Kannada";
langNames["ko"]         = "Korean";
langNames["ks"]         = "Kashmiri";
langNames["ku"]         = "Kurdish";
langNames["kv"]         = "Komi";
langNames["kw"]         = "Cornish";
langNames["ky"]         = "Kirghiz";
langNames["la"]         = "Latin";
langNames["lb"]         = "Letzeburgesch";
langNames["ln"]         = "Lingala";
langNames["lo"]         = "Lao";
langNames["lt"]         = "Lithuanian";
langNames["lv"]         = "Latvian";
langNames["mg"]         = "Malagasy";
langNames["mh"]         = "Marshall";
langNames["mi"]         = "Maori";
langNames["mk"]         = "Macedonian";
langNames["ml"]         = "Malayalam";
langNames["mn"]         = "Mongolian";
langNames["mo"]         = "Moldavian";
langNames["mr"]         = "Marathi";
langNames["ms"]         = "Malay";
langNames["mt"]         = "Maltese";
langNames["my"]         = "Burmese";
langNames["na"]         = "Nauru";
langNames["ne"]         = "Nepali";
langNames["ng"]         = "Ndonga";
langNames["nl"]         = "Dutch";
langNames["nn"]         = "Norwegian Nynorsk";
langNames["nb"]         = "Norwegian Bokmal";
langNames["nr"]         = "Ndebele, South";
langNames["nv"]         = "Navajo";
langNames["ny"]         = "Chichewa; Nyanja";
langNames["oc"]         = "Occitan";
langNames["om"]         = "(Afan) Oromo";
langNames["or"]         = "Oriya";
langNames["os"]         = "Ossetian; Ossetic";
langNames["pa"]         = "Panjabi";
langNames["pi"]         = "Pali";
langNames["pl"]         = "Polish";
langNames["ps"]         = "Pashto, Pushto";
langNames["pt"]         = "Portuguese";
langNames["qu"]         = "Quechua";
langNames["rm"]         = "Rhaeto-Romance";
langNames["rn"]         = "Rundi";
langNames["ro"]         = "Romanian";
langNames["ru"]         = "Russian";
langNames["rw"]         = "Kinyarwanda";
langNames["sc"]         = "Sardinian";
langNames["sd"]         = "Sindhi";
langNames["se"]         = "Northern Sami";
langNames["sg"]         = "Sangro";
langNames["sh"]         = "Serbo-Croatian";
langNames["si"]         = "Sinhalese";
langNames["sk"]         = "Slovak";
langNames["sl"]         = "Slovenian";
langNames["sm"]         = "Samoan";
langNames["sn"]         = "Shona";
langNames["so"]         = "Somali";
langNames["sq"]         = "Albanian";
langNames["sr"]         = "Serbian";
langNames["ss"]         = "Siswati";
langNames["st"]         = "Sesotho";
langNames["su"]         = "Sundanese";
langNames["sv"]         = "Swedish";
langNames["sw"]         = "Swahili";
langNames["ta"]         = "Tamil";
langNames["te"]         = "Telugu";
langNames["tg"]         = "Tajik";
langNames["th"]         = "Thai";
langNames["ti"]         = "Tigrinya";
langNames["tk"]         = "Turkmen";
langNames["tl"]         = "Tagalog";
langNames["tn"]         = "Setswana";
langNames["to"]         = "Tonga";
langNames["tr"]         = "Turkish";
langNames["ts"]         = "Tsonga";
langNames["tt"]         = "Tatar";
langNames["tw"]         = "Twi";
langNames["ty"]         = "Tahitian";
langNames["ug"]         = "Uighur";
langNames["uk"]         = "Ukrainian";
langNames["ur"]         = "Urdu";
langNames["uz"]         = "Uzbek";
langNames["vi"]         = "Vietnamese";
langNames["vo"]         = "Volapuk";
langNames["wo"]         = "Wolof";
langNames["xh"]         = "Xhosa";
langNames["yi"]         = "Yiddish";
langNames["yo"]         = "Yoruba";
langNames["za"]         = "Zhuang";
langNames["zh"]         = "Chinese";
langNames["zu"]         = "Zulu";
// ----------------------------------------------------------------------
//             Display information about single translation:
// ----------------------------------------------------------------------

// If the URL is www.wxwidgets.org/i18n.php, display summary of all
// translations, if it is www.wxwidgets.org/i18n/xy.html, display
// information about translators of language xy:
function GetLangName(langCode)
{
    if (langCode.length > 2 && langCode[2] == '_')
        var key=langCode.substring(0,2);
    else
        var key=langCode;

    return langNames[key];
}

function CompareCatStatus(a, b)
{
    var lhs = GetLangName(a[0]);
    var rhs = GetLangName(b[0]);

    if( lhs == rhs )
        return 0;

    return (lhs < rhs) ? -1 : 1;
}

function FillLocalizationTable()
{
    catStatus.sort(CompareCatStatus);

    for( var i = 0; i < catStatus.length; i++ )
    {
        var value      = catStatus[i];
        var lang       = value[0];
        var total      = value[1];
        var fuzzy      = value[2];
        var untrans    = value[3];

        var cntTotal   = total + fuzzy + untrans;
        var cntTrans   = cntTotal == 0 ? 0 : 100 * total / cntTotal;
        var cntFuzzy   = cntTotal == 0 ? 0 : 100 * fuzzy / cntTotal;
        var cntUntrans = cntTotal == 0 ? 0 : 100 * untrans / cntTotal;
        var wTrans     = cntTotal == 0 ? 0 : (graphWidth * total / cntTotal);
        var wFuzzy     = cntTotal == 0 ? 0 : (graphWidth * (total + fuzzy) / cntTotal) - wTrans;
        var wUntrans   = cntTotal == 0 ? 0 : (graphWidth * (total + fuzzy + untrans) / cntTotal) - wTrans - wFuzzy;

        var tableRow;
        if( fuzzy + untrans > 0 )
            tableRow='<tr class="incomplete"><td class="lang">';
        else
            tableRow='<tr class="complete"><td class="lang">';

        tableRow += '<a href="'+lang+'">'+GetLangName(lang)+'('+lang+')</a></td>';
        tableRow += sprintf('<td class="trans"   nowrap="nowrap">%0.1f%%</td>', cntTrans);
        tableRow += sprintf('<td class="fuzzy"   nowrap="nowrap">%0.1f%%</td>', cntFuzzy);
        tableRow += sprintf('<td class="untrans" nowrap="nowrap">%0.1f%%</td>', cntUntrans);
        tableRow += '<td class="graph">';

        if( cntTrans != 0 )
            tableRow += '<img src="'+imgTranslated+'" width="'+wTrans+'" height="16"/>';

        if( cntFuzzy != 0 )
            tableRow += '<img src="'+imgFuzzy+'" width="'+wFuzzy+'" height="16"/>';

        if( cntUntrans != 0 )
            tableRow += '<img src="'+imgUntranslated+'" width="'+wUntrans+'" height="16"/>';

        tableRow += '</td>';
        tableRow += '<td class="download"><a href="'+localeCheckoutURL+lang+'.po">'+lang+'.po</a></td>';
        tableRow += '</tr>';

        document.write( tableRow );
    }

    document.write('<tr class="template">');
    document.write('<td>Template file</td><td></td><td></td><td></td><td></td>');
    document.write('<td class="download"><a href="'+localeCheckoutURL+potFileName+'">'+potFileName+'</a></td>');
    document.write('</tr>');
}
