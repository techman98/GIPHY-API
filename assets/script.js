var queryURL = "https://api.giphy.com/v1/gifs/search?q=video+games&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);




        var p = $("<p>").text("Rating: " + rating);
      })