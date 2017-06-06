$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));

  if (height >= 60 && height <= 84) {
    $('#all').show();
    $(".highlight").addClass("green-text");
  } else if (height < 60) {
    $('#short').show();
    $(".highlight").addClass("green-text");
  } else if (height > 84) {
    $('#tall').show();
    $(".highlight").addClass("green-text");

  }
});
