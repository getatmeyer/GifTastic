
  // Initial array of Marvel Characters
  var characters = ["Iron Man", "Thor", "Hulk", "Ant-Man", "Black Widow", "Doctor Strange", "Black Panther", "Captian Marvel", "Falcon", "Winter Solider" ];

  function marvelButtons() {  //function for displaying Marvel data


    $("#buttons-view").empty(); //

      for (var i = 0; i < characters.length; i++) { // looping through the array of characters

          var a = $("<button>");

          a.addClass("marvel"); // Adding a class
          a.attr("data-name", characters[i]); //adding a data-attribute w/ value of the character at index i
          a.text(characters[i]); //providing the button's text w/ a value of the character at index i
          $("#buttons-view").append(a);
      }
    }
$("#add-marvelCharc").on("click", function(event) { // This function handles event where button is clicked

    event.preventDefault(); // prevents the form from trying to sumbit itself. Instead, the user can hit enter

    var marvel = $("#marvel-input").val().trim();
    characters.push(marvel);
    marvelButtons();
    
  });
  marvelButtons();

function callAPI () {

  $("#gifs-appear-here").on("click", function () {
    
   var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Gs0TNfUIkttmc4yeUOBjAJPa1UR6Ck1D";

   $.ajax({
    url: queryURL,
    method: "GET"
  })
          // After the data comes back from the API
        .then(function (response) {

          // Storing an array of results in the results variable
          var results = response.data.image_original_url;
          console.log("queryURL", queryURL);
          console.log("response",response);          
          
          // Looping over every result item
          for (var j = 0; j < results.length; j++) {

             // Only taking action if the photo has an appropriate rating
             if (results[j].rating !== "y" && results[j].rating !== "pg-13") {

              // Creating a div with the class "item"
              var gifDiv = $("<div>");

              // Storing the result item's rating
              var rating = results[j].rating;

              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + rating);

              // Creating an image tag
              var p = $("<img>");

              // Setting the catImage src attribute to imageUrl
              p.attr("src", results);
              p.attr("alt", "a image");

              // Giving the image tag an src attribute of a proprty pulled off the
              // result item
              a.attr("src", results[j].images.fixed_height.url);

              gifDiv.append(k);

              // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
              $("#gifs-appear-here").prepend(p);
              callAPI();
             
             }callAPI();
             }
            })
        })
      }
      
