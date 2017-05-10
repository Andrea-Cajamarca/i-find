/**
 * script.js
 * - All our useful JS goes here, awesome!
//

New: AIzaSyCaZI5sfmIoRlA5OgiYRpy_EdMgkpSlWZw

https://www.googleapis.com/youtube/v3/search?part=snippet&q=&maxResults=1&key=AIzaSyCaZI5sfmIoRlA5OgiYRpy_EdMgkpSlWZw

Error link: https://www.googleapis.com/youtube/v3/search?part=snippet&q=shreeeeeeeeeekkkkk%20official%20trailer%20&maxResults=1&key=AIzaSyCaZI5sfmIoRlA5OgiYRpy_EdMgkpSlWZw

*/ 



$(document).ready(function() {
  $(".movieData").hide();
  $("#button").click(compileMovies); 
  function compileMovies() {
    getMovieInfo();
  };
  
  function getMovieInfo() {
    $.getJSON(
      "https://www.omdbapi.com/?type=movie&t=" + $("input[name='title']").val(),
      function(response) {
        if (response.Response == "True") {
          getMovieTrailer();
          $(".movieData").show();
          $("#poster").html("<img src=" + response.Poster + ">");
          $("#actors").html(response.Actors);
          $("#plot").html(response.Plot);
          $("#genre").html(response.Genre);
          $("#year").html(response.Year);
          $("#country").html(response.Country);
          $("#language").html(response.Language);
          $("#director").html(response.Director);
          $("#error").html("");
        } else {
          $(".movieData").hide();
          $("#error").html(response.Error);
          $("#trailer").attr("src", "");
        }
      }
    );
  }
  
  function getMovieTrailer() {
    $.getJSON(
      "https://www.googleapis.com/youtube/v3/search?part=snippet" +
        "&q=" + $("input[name='title']").val() + "%20movie%20official%20trailer" +
        "&maxResults=1" + 
        "&key=AIzaSyCaZI5sfmIoRlA5OgiYRpy_EdMgkpSlWZw",
      function(response) {
        var embedURL = "https://www.youtube.com/embed/";
        if (response.pageInfo.totalResults > 0) {
          $("#trailer").attr("src", embedURL + response.items[0].id.videoId);
        } else {
          $("#trailer").attr("src", "");
        }
      }
    );  
  }
});