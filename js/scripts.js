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


    $(".name").text(nameInput);
    $(".location").text(localeInput);
    $("#course").empty().text(java);
    $("#track").show();


  });
});
