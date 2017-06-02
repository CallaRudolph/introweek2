$(document).ready(function() {
  $("#formTwo").submit(function(event) {
    event.preventDefault();
    var end = parseInt($("#end").val());
    var apps = parseInt($("#apps").val());
    var job = parseInt($("#job").val());

    var nameInput = $("input#name").val();
    var localeInput = $("#location").val();

    var java;
    if (apps === 3 && end === 1) {
      java = ("test");
    }
    var ruby;
    if (apps === 4 && end === 2 && job === 5) {
      ruby = ("TEST");
    }


    $(".name").text(nameInput);
    $(".location").text(localeInput);
    $("#course").empty().text(java);
    $("#course").empty().text(ruby);
    $("#track").show();


  });
});
