/**
 * script.js
 * - All our useful JS goes here, awesome!
//
idea for Trailers API
--http://api.traileraddict.com/?film=curious-case-benjamin-button&count=3
*/ 

$(document).ready(function() {
///
  $(".movieData").hide();
  $("#button").click(compileMovies); 
  function compileMovies() {

    $.getJSON(
      "https://www.omdbapi.com/?t=" + $("input[name='title']").val(),
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
      });
  }
});