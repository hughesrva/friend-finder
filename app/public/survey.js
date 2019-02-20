$("#submitBtn").on("click", function(event) {
  event.preventDefault();
  alert("clicked");

  var newFriend = {
    friendName: $("#name")
      .val()
      .trim(),
    friendPhoto: $("#photoLink")
      .val()
      .trim(),
    friendAnswers: [
      $("q1").val(),
      $("q2").val(),
      $("q3").val(),
      $("q4").val(),
      $("q5").val(),
      $("q6").val(),
      $("q7").val(),
      $("q8").val(),
      $("q9").val(),
      $("q10").val()
    ]
  };

  console.log(newFriend);

  $.post("/api/friends", newFriend, function(data) {
    if (data) {
      alert("There was data!");
    } else {
      alert("No data");
    }


    $("#name").val("");
    $("#name").val("");
  });
});



