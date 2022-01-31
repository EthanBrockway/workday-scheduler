var currentDate = moment().format("ddd, MMM Do, YYYY");
$("#currentDay").html(currentDate);
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });
  var timeTrack = function () {
    var timeNow = moment().hour();

    $(".time-block").each(function () {
      var timeBlock = parseInt$(this).attr("id").split("hour")[1];

      if (timeBlock > timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (timeBlock === timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
    });
  };
});
