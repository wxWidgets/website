/* Randomly choose a sponsor to show in the sidebar. */

$(document).ready(function(){
  $('#sponsors .item').hide().eq(
    Math.floor( Math.random() * $('#sponsors .item').size() )
  ).show();
  $('div.sponsors').show();
});