/**
New: AIzaSyCaZI5sfmIoRlA5OgiYRpy_EdMgkpSlWZw

https://www.googleapis.com/youtube/v3/search?part=snippet&q=&maxResults=1&key=AIzaSyCaZI5sfmIoRlA5OgiYRpy_EdMgkpSlWZw

Error link: https://www.googleapis.com/youtube/v3/search?part=snippet&q=shreeeeeeeeeekkkkk%20official%20trailer%20&maxResults=1&key=AIzaSyCaZI5sfmIoRlA5OgiYRpy_EdMgkpSlWZw

The Movie DB Api Link: https://api.themoviedb.org/3/movie/550?api_key=0d02dd329cdb155d5842855bfb30bee0

GOOD EXAMPLE: https://api.themoviedb.org/3/search/movie?query=shrek&api_key=0d02dd329cdb155d5842855bfb30bee0

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
          // find out how to add year of production with the title input
          $("#trailer").attr("src", "");
        }
      }
    );  
  }
});