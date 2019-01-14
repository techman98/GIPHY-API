$(document).ready(function() {
var gifArr = ["Video Games", "animals", "cats"];
var results;
// var gifHolder;
function selectYourGif() {
  $(".insertGifsHere").empty();
  var topic = $(this).attr("topic");
  console.log(topic);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    
    results = response.data;
    console.log(results)
    for (i = 0; i < results.length; i++) {
      // gifHolder = results[i];
      var rating = results[i].rating;
      var gifDiv = $("<div class='item'>");
      var p = $("<p>").text("Rating: " + rating);
      var img = $('<img>');
      img.attr("src", results[i].images.fixed_height_still.url);
      img.attr("data-animate", results[i].images.fixed_height.url);
      img.attr("data-still", results[i].images.fixed_height_still.url);
      img.attr("data-state", "still");
      img.addClass("gif");
      gifDiv.append(p);
      gifDiv.append(img);
      $(".insertGifsHere").prepend(gifDiv);
    }
  })
}

function renderButtons() {

  $("#buttons-view").empty();

  for (var i = 0; i < gifArr.length; i++) {
    var buttonCreator = $("<button>");
    buttonCreator.addClass("gif-btn");
    buttonCreator.attr("topic", gifArr[i]);
    buttonCreator.text(gifArr[i]);
    $("#buttons-view").append(buttonCreator);
  }
}

$("#add-gif").on("click", function (event) {
  event.preventDefault();
  var yourGif = $("#gif-input").val().trim();
  gifArr.push(yourGif);
  renderButtons();
});

$(document).on("click", ".gif", function() {
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
  
});

$(document).on("click", ".gif-btn", selectYourGif);
renderButtons();
});