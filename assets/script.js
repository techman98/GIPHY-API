var gifArr = ["Video Games", "animals", "cats"];
function selectYourGif() {
  $(".insertGifsHere").empty();
  var topic = $(this).attr("topic");
  console.log(topic);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var results = response.data;

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

$(document).on("click", ".gif-btn", selectYourGif);
renderButtons();