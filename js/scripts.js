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

    if (end === 2 && job === 6) {
      $("#css").show();
    }
    if (apps === 3 && end === 1) {
      $("#java").removeClass();
      $("#java").show();
    }
    // // var ruby;
    // //   if (apps === 4 && end === 2 && job === 5) {
    // //     ruby = ("TEST");
    // // }
    // var java;
    // if (apps === 3 && end === 1) {
    //   java = ("Java/Android");
    // }





  });
});
