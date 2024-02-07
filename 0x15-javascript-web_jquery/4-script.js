// script that toggles the class of the HTML header tag
// when the user clicks on the tag DIV#toggle_header
$('DIV#toggle_header').click(function () {
  if ($('header').hasClass('red')) {
    $('header').toggleClass('green');
  } else {
    $('header').toggleClass('red');
  }
});
