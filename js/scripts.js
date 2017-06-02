$(document).ready(function() {
  $("#formTwo").submit(function(event) {
    var end = parseInt($("#end").val());
    var nameInput = $("input#name").val();
    var localeInput = $("#location").val();
    var css = ("CSS/Design");
    if (end === 1)

    $(".name").text(nameInput);
    $(".location").text(localeInput);

    $("#course").empty().append(css);
    $("#track").show();

  event.preventDefault();
  });
});
