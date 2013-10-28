$(document).ready(function(){

  $('#translation_loading').show();
  var spinner = new Spinner({ hwaccel: true }).spin(
    document.getElementById('translation_loading')
  );

  var download_url = 'http://svn.wxwidgets.org/svn/wx/wxWidgets/trunk/locale/';

  var languages = {
    "af":"Afrikaans",
    "ar":"Arabic",
    "ca":"Catalan",
    "ca@valencia":"Valencian (Southern Catalan)",
    "cs":"Czech",
    "da":"Danish",
    "de":"German",
    "el":"Greek",
    "es":"Spanish",
    "eu":"Basque",
    "fi":"Finnish",
    "fr":"French",
    "gl_ES":"Galician",
    "hi":"Hindi",
    "hu":"Hungarian",
    "id":"Indonesian",
    "it":"Italian",
    "ja":"Japanese",
    "ko_KR":"Korean",
    "lt":"Lithuanian",
    "lv":"Latvian",
    "ms":"Malay",
    "nb":"Norwegian Bokmal",
    "ne":"Nepali",
    "nl":"Dutch",
    "pl":"Polish",
    "pt":"Portuguese",
    "pt_BR":"Portuguese",
    "ro":"Romanian",
    "ru":"Russian",
    "sk":"Slovak",
    "sl":"Slovenian",
    "sq":"Albanian",
    "sv":"Swedish",
    "ta":"Tamil",
    "tr":"Turkish",
    "uk":"Ukrainian",
    "vi":"Vietnamese",
    "zh_CN":"Chinese",
    "zh_TW":"Chinese"
  };

  $.ajax({
    url: 'https://gist.github.com/tierra/4138161/raw/translation_stats.js',
    dataType: 'jsonp',
    cache: true,
    jsonp: false, // Don't append callback method query variable.
    jsonpCallback: 'processTranslationStats',
    success: function(data) {

      $.each(data, function(locale, stats) {
        var translated   = stats[0];
        var fuzzy        = stats[1];
        var untranslated = stats[2];

        var total = translated + fuzzy + untranslated;

        var pct_translated   = (total == 0 ? 0 : 100 * (translated / total));
        var pct_fuzzy        = (total == 0 ? 0 : 100 * (fuzzy / total));

        $('#translations tbody').append(
          '<tr>' +
            '<td><a href="' + download_url + locale + '.po">' + languages[locale] + ' (' + locale + ')</a></td>' +
            '<td>' + Math.round(pct_translated) + '%</td>' +
            '<td width="30%"><div class="progress">' +
              '<div class="progress-bar progress-bar-success" style="width: ' + pct_translated + '%;"></div>' +
              '<div class="progress-bar progress-bar-warning" style="width: ' + pct_fuzzy + '%;"></div>' +
            '</div></td>' +
          '</tr>'
        );
      });

      $("#translations").tablesorter({
          sortList: [[0,0], [1,0]],
          // headers: {
          //   1: { sorter: false }
          // }
      });

      $('#translation_loading').hide();
      $('#translation_caption').show();
      spinner.stop();
      $("#translations").show();

    }
  });

});