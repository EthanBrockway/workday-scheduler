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
  $("#hr8 .description").val(localStorage.getItem("hour8"));
  $("#hr9 .description").val(localStorage.getItem("hour9"));
  $("#hr10 .description").val(localStorage.getItem("hour10"));
  $("#hr11 .description").val(localStorage.getItem("hour11"));
  $("#hr12 .description").val(localStorage.getItem("hour12"));
  $("#hr13 .description").val(localStorage.getItem("hour13"));
  $("#hr14 .description").val(localStorage.getItem("hour14"));
  $("#hr15 .description").val(localStorage.getItem("hour15"));
  $("#hr16 .description").val(localStorage.getItem("hour16"));
  $("#hr17 .description").val(localStorage.getItem("hour17"));

  timeTrack();
});
