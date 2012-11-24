$(document).ready(function(){

  $('#translation_loading').show();
  var spinner = new Spinner({ hwaccel: true }).spin(
    document.getElementById('translation_loading')
  );

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
    url: 'https://raw.github.com/gist/4138161/translation_stats.js',
    dataType: 'jsonp',
    cache: true,
    jsonp: false, // Don't append callback method query variable.
    jsonpCallback: 'processTranslationStats',
    success: function(data, textStatus, jqXHR) {

      $.each(data, function(locale, stats) {
        var translated   = stats[0];
        var fuzzy        = stats[1];
        var untranslated = stats[2];

        var total = translated + fuzzy + untranslated;

        var pct_translated   = (total == 0 ? 0 : 100 * (translated / total));
        var pct_fuzzy        = (total == 0 ? 0 : 100 * (fuzzy / total));
        var pct_untranslated = (total == 0 ? 0 : 100 * (untranslated / total));

        $('#translations tbody').append(
          '<tr>' +
            '<td>' + languages[locale] + ' (' + locale + ')</td>' +
            '<td>' + Math.round(pct_translated) + '%</td>' +
            '<td width="30%"><div class="progress">' +
              '<div class="bar bar-success" style="width: ' + pct_translated + '%;"></div>' +
              '<div class="bar bar-warning" style="width: ' + pct_fuzzy + '%;"></div>' +
              '<div class="bar bar-danger" style="width: ' + pct_untranslated + '%;"></div>' +
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

      spinner.stop();
      $('#translation_loading').hide();
      $("#translations").show();

    }
  });

});