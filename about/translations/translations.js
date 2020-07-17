'use strict'

$(document).ready(function(){

  $('#translation_loading').show();
  var spinner = new Spinner({ hwaccel: true }).spin(
    document.getElementById('translation_loading')
  );

  var download_url = 'https://raw.githubusercontent.com/wxWidgets/wxWidgets/master/locale/';

  var languages = {
    "af":"Afrikaans",
    "an":"Aragonese",
    "ar":"Arabic",
    "ca":"Catalan",
    "ca@valencia":"Valencian (Southern Catalan)",
    "cs":"Czech",
    "da":"Danish",
    "de":"German",
    "el":"Greek",
    "es":"Spanish",
    "eu":"Basque",
    "fa_IR":"Persian",
    "fi":"Finnish",
    "fr":"French",
    "gl_ES":"Galician",
    "hi":"Hindi",
    "hr":"Croatian",
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
    url: 'stats.js',
    dataType: 'jsonp',
    cache: true,
    jsonp: false, // Don't append callback method query variable.
    jsonpCallback: 'processTranslationStats',
    success: function(data, text_status, xhr) {

      var last_modified = xhr.getResponseHeader('Last-Modified');
      if(last_modified) $('#stats_updated_date').text(last_modified);

      $.each(data, function(locale, stats) {
        var translated   = stats[0];
        var fuzzy        = stats[1];
        var untranslated = stats[2];

        var total = translated + fuzzy + untranslated;

        var round = function(number, precision) {
          var factor = Math.pow(10, precision);
          var tempNumber = number * factor;
          var roundedTempNumber = Math.round(tempNumber);
          return roundedTempNumber / factor;
        };

        var pct_translated = round((total == 0 ? 0 : 100 * (translated / total)), 2);
        var pct_fuzzy      = round((total == 0 ? 0 : 100 * (fuzzy / total)), 2);

        $('#translations tbody').append(
          '<tr>' +
            '<td><a href="' + download_url + locale + '.po">' + languages[locale] + ' (' + locale + ')</a></td>' +
            '<td>' + Math.round(pct_translated) + '%</td>' +
            '<td width="30%"><div class="progress">' +
              '<div class="progress-bar bg-success" role="progressbar" style="width: ' + pct_translated + '%;" aria-valuenow="' + pct_translated + '" aria-valuemin="0" aria-valuemax="100"></div>' +
              '<div class="progress-bar bg-warning" role="progressbar" style="width: ' + pct_fuzzy + '%;" aria-valuenow="' + pct_fuzzy + '" aria-valuemin="0" aria-valuemax="100"></div>' +
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

