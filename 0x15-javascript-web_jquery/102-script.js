// script that fetches the value of hello from language API URL
// where the language is the value of the tag INPUT#language_code
const $ = window.$;
window.onload = function () {
  $('INPUT#btn_translate').click(function () {
    const lan = $('INPUT#language_code').val();
    $.get('https://fourtonfish.com/hellosalut/?lang=' + lan, function (data, textStatus) {
      $('DIV#hello').text(data.hello);
    });
  });
};
