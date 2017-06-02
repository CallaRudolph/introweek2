$(document).ready(function() {
  $("#formTwo").submit(function(event) {
    var nameInput = $("input#name").val();
    var locationInput = $("input#location").val();

    $(".name").append(nameInput);
    $(".location").append(locationInput);
    $("#track").show();

  event.preventDefault();
  });
});
