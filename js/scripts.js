$(document).ready(function() {
  $("#formTwo").submit(function(event) {
    $(".name").append("blah");
    $(".location").append("blah");

    $("#track").show();

  event.preventDefault();
  });
});
