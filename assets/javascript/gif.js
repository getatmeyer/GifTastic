// $( document ).ready(function() {

  // Initial array of Marvel Characters
  var characters = ["Iron Man", "Thor", "Hulk", "Ant-Man", "Black Widow", "Doctor Strange", "Black Panther", "Gambit", "Falcon", "Winter Solider", "Storm" ];

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
    console.log("push"); // PASSED
    
    marvelButtons();
    
  });
  marvelButtons();

  //#.gifs-div changed to .marvel for future reference

  $(document).on("click", ".marvel", function (rating, person) {
    //Add parameter to the below function 

    var person = $(this).attr("data-person");
    
    console.log(person);
    


        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + rating + "&api_key=Gs0TNfUIkttmc4yeUOBjAJPa1UR6Ck1D&limit=9";
     
       $.ajax({ // performing our AJAX GET request
        url: queryURL,
        method: "GET"
      })
              // After the data comes back from the API
            .then(function (response) {

              // Storing an array of results in the results variable
              var results = response.data;
              // console.log(results);
              console.log(response.data);

              // Looping over every result item
              for (var j = 0; j < results.length; j++) {
                console.log(results.length);
                
                 // Only taking action if the photo has an appropriate rating
                 if (results[j].rating !== "y" && results[j].rating !== "pg") {
    
                  // Creating a div with the class "item"
                  var gifDiv = $("<#gifs-div>");
                  console.log(gifDiv);

                  var rating = $(this).text();
                  console.log(rating);
    
                  // Storing the result item's rating
                  var rating = results[j].rating;
    
                  // Creating a paragraph tag with the result item's rating
                  var p = $("<p>").text("rating: " + rating);
    
                  // Creating an image tag
                  var personImage = $("<img>");
                  console.log(personImage);
                  
                  // Setting the marvelImage src attribute to imageUrl
                  // img.attr("src", results[i]);
                  // personimg.attr("alt", "superhero image");
                  // console.log(img.attr);
                  
          
                  // Giving the image tag an src attribute of a proprty pulled off the
                  // result item
                  personImage.attr("src", results[j].images.fixed_height.url);
                  console.log(results[j].images);
                  
    
                  gifDiv.append(p);
                  gifDiv.append(personImage);
    
                  // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                  $("#gifs-div").prepend(gifDiv);
                 
                 }
    
                 }
                })
              })
            // });