var topic = "video games";

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  var results = response.data;
  console.log(results)

  for (i = 0; i < results.length; i++) {
    var rating = results[i].rating;
    var gifDiv = $("<div class='item'>");
    var p = $("<p>").text("Rating: " + rating);
    var img = $("<img>");
    img.attr("src", results[i].images.fixed_height.url);
    gifDiv.append(p);
    gifDiv.append(img);
    $(".insertGifsHere").prepend(gifDiv);
  }
})