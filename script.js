/**
 * script.js
 * - All our useful JS goes here, awesome!
//
idea for Trailers API
--http://api.traileraddict.com/?film=curious-case-benjamin-button&count=3
*/ 

$(document).ready(function() {
///
  $("form").hide();
  $("#button").click(compileMovies); 
  function compileMovies() {

    $.getJSON(
     
      "https://www.omdbapi.com/?t=" + $("input[name='title']").val() ,
     
      function(response) {
        $("form").show();
        console.log(response);
        $("#poster").html("<img src=" + response.Poster + ">");
        $("#actors").html(response.Actors);
        $("#plot").html(response.Plot);
        $("#genre").html(response.Genre);
        $("#year").html(response.Year);
        $("#country").html(response.Country);
        $("#language").html(response.Language);
        $("#director").html(response.Director);
      });
  }
});