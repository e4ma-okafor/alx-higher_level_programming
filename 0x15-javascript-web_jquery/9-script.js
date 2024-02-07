// script that fetches the value of hello from French API URL
// URL: https://fourtonfish.com/hellosalut/?lang=fr
$('document').ready(function () {
  $.get('https://fourtonfish.com/hellosalut/?lang=fr', function (data) {
    $('DIV#hello').text(data.hello);
  });
});
