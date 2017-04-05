/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

 

$(document).ready(function() {
///
 console.log("Ready");
  $("#button").click(compileMovies); 
  function compileMovies() {

    $.getJSON(
     
      "https://www.omdbapi.com/?t=" + $("input[name='title']").val() ,
     
      function(response) {
        console.log(response);
        $("#poster").html("<img src=" + response.Poster + ">");
        $("#actors").html(response.Actors);
        $("#plot").html(response.Plot);
        $("#genre").html(response.Genre);
        $("#year").html(response.Year);
        $("#country").html(response.Country);

      });
  }
});