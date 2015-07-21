var displayAnswer = function(response){
  $('#movie_poster').html('<img id="poster" src=' + response.Poster + '>');
  $('#title').text(response.Title);
  $('#director').text(response.Director);
  $('#actors').text(response.Actors);
  $('#released_date').text(response.Released);
  $('#awards').text(response.Awards);
  $('#country').text(response.Country);
  $('#genre').text(response.Genre);
  $('#language').text(response.Language);
  $('#Runtime').text(response.Runtime);
  $('#plot').text(response.Plot);
  $('#Writer').text(response.Writer);
  $('#imdb_rating').text(response.imdbRating);
}

var Request = function(query){
  var query = $('#user_input').val();
  $.ajax({
    type: "GET",
    url: 'http://www.omdbapi.com/?t=' + query + '&y=&plot=short&r=json',
    dataType: "JSON",
    success: function(response){
      displayAnswer(response);
    }
  });
}

$('#user_input').keypress(function(e){
  if (e.keyCode === 13){
    Request();
  }
})
