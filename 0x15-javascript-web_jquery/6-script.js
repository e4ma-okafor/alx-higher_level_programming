// script that changes the text of HTML header tag to "New Header!!!"
// when the user clicks on the tag DIV#update_header
$('DIV#update_header').click(function () {
  $('header').text('New Header!!!');
});
