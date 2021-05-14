// $(document).ready(function () {

  // Initial array of Marvel Characters
  var characters = ["Iron Man", "Thor", "Hulk", "Ant-Man", "Black Widow", "Doctor Strange", "Black Panther", "Gambit",
   "Falcon", "Winter Soldier", "Wolverine", "Captain America", "Iron Fist","DareDevil", "Dr. Doom", "Loki", "Spider-man",
   "Venom", "Jessica Jones", "Bishop", "Quicksliver", "Kitty Pryde", "Nightcrawler","Psylocke", "Emma Frost", "Professor X",
   "Iceman", "Ultron", "Thanos", "Captain Marvel", "Deadpool", "Ghost Rider", "Juggernaut","Groot", "Magneto", "Mystique",
   "Hawkeye", "Susan Storm", "The Thing", "Star Lord", "Mantis", "Valkyrie", "Vision", "Scarlet Witch", "Spider-woman",
   "Punisher", "Elektra", "Rogue", "The Thing", "Hank Pym", "Hamir", "M'Baku", "M.O.D.O.K", "Adam Warlock", "She-Hulk","The Wasp",
   "Green Goblin", "Bullseye", "Galactus", "Kingpin", "Dormammu", "Sabretooth", "Dr. Otto Octavius", "Carnage", "Mephisto",
   "Lady Deathstrike", "Annihilus", "Hela", "Vulture", "Electro", "Omega Red", "Crossbones", "Norman Osborn", "Arnim Zola", "Surtur",
   "Shocker", "Korvac", "Kang", "Mandarin", "Dark Phoenix", "The Avengers", "Abomination", "Baron von Strucker", "Sentinels", "Morgan Le Fay",
  "Grandmaster", "Magus", "Ronan", "Maestro", "Kraven the Hunter", "Mad Thinker", "Purple Man", "Lizard", "The Collector", "Nitro", "Executioner",
"William Stryker", "Sandman", "Callisto", "Jonah Jameson", "Onslaught", "Rhino", "Silver Samurai", "Nebula", "Ebony Maw", "Scorpion", "Morbious",
"Red Skull", "Void", "The Shadow King", "Malekith", "Molecule Man", "Johnny Storm", "X-Factor", "Fanastic Four", "The Defenders", "Madame Hydra",
"Hellfire Club", "Impossible Man", "Spiral", "Fin Fang Foom", "Mole Man", "Marrow", "Super-Skrull", "Ego the Living Planet", "Howard the Duck",
]

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
  $("#add-marvelCharc").on("click", function (event) { // This function handles event where button is clicked

    event.preventDefault(); // prevents the form from trying to sumbit itself. Instead, the user can hit enter

    var marvel = $("#marvel-input").val().trim();
    characters.push(marvel);
    console.log("push"); // PASSED

    marvelButtons();

  });
  marvelButtons();

  //#.gifs-div changed to .marvel for future reference

  $(document).on("click", ".marvel", function (person, rating) {

    //Add parameter to the below function \

    // button triggered
    var person = $(this).attr("data-name");
    console.log(person);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&limit=9&api_key=Gs0TNfUIkttmc4yeUOBjAJPa1UR6Ck1D";

    $.ajax({ // performing our AJAX GET request
      url: queryURL,
      method: "GET"
    })
      // After the data comes back from the API
      .then(function (response) {

        // Storing an array of results in the results variable
        var results = response.data;
        // console.log(results);
        console.log(results);

        // Looping over every result item
        for (var j = 0; j < results.length; j++) {
          console.log(results.length);

          // Only taking action if the photo has an appropriate rating
          if (results[j].rating !== "r" && results[j].rating !== "pg") {

            // Creating a div with the class "item"
            var gifDiv = $("<div>");
            console.log(gifDiv);

            var rating = $(this).text();
            console.log(rating);

            // Storing the result item's rating
            var rating = results[j].rating;

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text(" Rating : " + rating);

            // Creating an image tag
            var personImage = $("<img class='gif'>")
            // console.log(personImage);

            // Setting the marvelImage src attribute to imageUrl
            personImage.attr("alt", "marvel image");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            
            personImage.attr("src", results[j].images.fixed_height.url);
            personImage.attr("data-state", "still")
            personImage.attr("data-animate", results[j].images.fixed_height.url);
            personImage.attr("data-still", results[j].images.fixed_height_still.url);
            
            // <img src="www.urlforstillimage" data-still="www.urlforstillimage" data-animate="www.urlforanimatedImage" data-state="still"></img>
            console.log(results[j].images);

            gifDiv.append(p);
            gifDiv.append(personImage);

            gifDiv.addClass("gif"); // Adding a class


            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            $(".gifs-div").prepend(gifDiv);
          }
        }

        $(".gif").on("click", function() {
        //   // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
          var state = $(this).attr("data-state");
          
            if (state ==="still") {
              $(this).attr("src", $(this).attr("data-animate"));

              $(this).attr("data-state", "animate");
            }else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
            });

        })
      })





