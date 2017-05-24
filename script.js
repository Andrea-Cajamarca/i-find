/**
New: AIzaSyCaZI5sfmIoRlA5OgiYRpy_EdMgkpSlWZw

https://www.googleapis.com/youtube/v3/search?part=snippet&q=&maxResults=1&key=AIzaSyCaZI5sfmIoRlA5OgiYRpy_EdMgkpSlWZw

Error link: https://www.googleapis.com/youtube/v3/search?part=snippet&q=shreeeeeeeeeekkkkk%20official%20trailer%20&maxResults=1&key=AIzaSyCaZI5sfmIoRlA5OgiYRpy_EdMgkpSlWZw

The Movie DB Api Link: https://api.themoviedb.org/3/movie/550?api_key=0d02dd329cdb155d5842855bfb30bee0

GOOD EXAMPLE: https://api.themoviedb.org/3/search/movie?query=shrek&api_key=0d02dd329cdb155d5842855bfb30bee0

EXAMPLE FOR ERROR: https://api.themoviedb.org/3/search/movie?query=shreeeekk&api_key=0d02dd329cdb155d5842855bfb30bee0

*/ 



$(document).ready(function() {
  $(".movieData").hide();
  $("#button").click(compileMovies); 
  function compileMovies() {
    getMovieInfo();
  };
  
  function getMovieInfo() {
    var title= $("input[name='title']").val();
    $.getJSON(
      "https://api.themoviedb.org/3/search/movie?query=" + title + "&api_key=0d02dd329cdb155d5842855bfb30bee0",
      function(response) {
        console.log(response);
        if (response.total_results > 0) {
          getMovieTrailer();
          $(".movieData").show();
          $("#poster").html("<img src='https://image.tmdb.org/t/p/w500/" + response.results[0].poster_path + "'>");
          $("#popularity").html(response.results[0].popularity);
          console.log(response);
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