/**
 * script.js
 * - All our useful JS goes here, awesome!
//

New: AIzaSyCaZI5sfmIoRlA5OgiYRpy_EdMgkpSlWZw

https://www.googleapis.com/youtube/v3/search?part=snippet&q=&maxResults=1&key=AIzaSyCaZI5sfmIoRlA5OgiYRpy_EdMgkpSlWZw

Error link: https://www.googleapis.com/youtube/v3/search?part=snippet&q=shreeeeeeeeeekkkkk%20official%20trailer%20&maxResults=1&key=AIzaSyCaZI5sfmIoRlA5OgiYRpy_EdMgkpSlWZw

idea for Trailers API
--http://api.traileraddict.com/?film=curious-case-benjamin-button&count=3
*/ 



$(document).ready(function() {
///
  $(".movieData").hide();
  $("#button").click(compileMovies); 
  function compileMovies() {

    $.getJSON(
      "https://www.omdbapi.com/?type=movie&t=" + $("input[name='title']").val(),
      function(response) {
        $(".movieData").show();
        console.log(response);
        if (response.Response == "True") {
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
        }
      }
    );
    $.getJSON(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + $("input[name='title']").val() + "%20official%20trailer%20&maxResults=1&key=AIzaSyCaZI5sfmIoRlA5OgiYRpy_EdMgkpSlWZw",
      function(response) {
        $(".movieData").show();
        var embedURL = "https://www.youtube.com/embed/";        console.log(response);
        if (response.pageInfo.totalResults > 0) {
          $("iframe").show;
          $("iframe").html(response.videoId);
         // vid id shoukd go next to embed url, use dif. function
         /// put embed url in a var
          /// collect vid id and inject into Iframe and add the source (videoId
          /// otherwise, error for no show
        } else {
          $(".movieData").hide();
          $("#error").html(pageInfo.totalResults[]);
          $("iframe").hide();
        }
      }
    );
  }
});