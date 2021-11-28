// 1. add current date in header
$("#currentDay").text(moment().format("dddd, MMM Do YYYY"));

// 2. color-coded time block showing past, present, and future
// 2.1 refresh page every minutes in case users leave window on for hours
setInterval(function () {
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
}, 60000);

// // save event in local storage
// $("button").on("click", function () {
//   var textInput = $("textarea").text();
//   localStorage.setItem("savedText", JSON.stringify(textInput));
// });


// //