// 1. add current date in header
$("#currentDay").text(moment().format("dddd, MMM Do YYYY"));

// 2. color-coded time block showing past, present, and future
// 2.1 refresh page every minutes in case users leave window on for hours

var currentHour = moment().hours(); //shows in 24 hous

$("textarea").each(function () {
  var textAreaHour = $(this).attr("id").split("-")[1];

  if (textAreaHour < currentHour) {
    $(this).addClass("past");
  } else if (textAreaHour == currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

// 3. save event in local storage
$("button").on("click", function () {
  var time = $(this).siblings("textarea").attr("id");
  var textInput = $(this).siblings("textarea").val();

  localStorage.setItem(time, textInput);
});

// 4. present saved event when refresh
$(".time-block").each(function () {
  var id = $(this).children("textarea").attr("id");
  var savedText = localStorage.getItem(id);

  if (savedText !== null) {
    $(this).children("textarea").val(savedText);
  }
});
