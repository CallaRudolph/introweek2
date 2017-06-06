$(document).ready(function() {
  $("#formTwo").submit(function(event) {
    event.preventDefault();
    var end = parseInt($("#end").val());
    var apps = parseInt($("#apps").val());
    var job = parseInt($("#job").val());

    var nameInput = $("input#name").val();
    var localeInput = $("#location").val();

    $(".name").text(nameInput);
    $(".location").text(localeInput);
    $(".answer").hide();

    if (end === 2 && apps === 3 && job === 6) {
      $("#css").show();
    } else if (end === 1 && apps === 3) {
      $("#java").show();
    } else if (end === 2 && apps === 4 && job === 5) {
      $("#ruby").show();
    } else if (end === 2 && apps === 4 && job === 6) {
    $("#net").show();
    }
  });
});
