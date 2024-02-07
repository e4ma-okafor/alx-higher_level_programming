// script that fetches the movie titles from Star Wars API URL
// URL: https://swapi-api.hbtn.io/api/films/?format=json
$.get('https://swapi.co/api/films/?format=json', function (data) {
  $('UL#list_movies').append(...data.results.map(movie => `<li>${movie.title}</li>`));
});
