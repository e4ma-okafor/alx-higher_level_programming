// script that fetches the name from Star Wars API URL
// URL: https://swapi-api.hbtn.io/api/people/5/?format=json
$.get('https://swapi.co/api/people/5/?format=json', function (data) {
  $('DIV#character').text(data.name);
});
