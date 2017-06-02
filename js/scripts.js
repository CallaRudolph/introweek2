$(document).ready(function() {
  $("#formTwo").submit(function(event) {
    var nameInput = $("input#name").val();
    var locale = $("#location").val();

    $(".name").text(nameInput);
    $(".location").text(locale);
    $("#track").show();

  event.preventDefault();
  });
});
