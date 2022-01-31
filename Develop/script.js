var currentDate = moment().format("ddd, MMM Do, YYYY");
$("#currentDay").html(currentDate);
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });
});
