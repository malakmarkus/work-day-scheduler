$(document).ready(function () {
  //display current day & time.
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  //save button function
  $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".description").val(); 
      var time = $(this).parent().attr("id"); 
      //saving values in local storage.
      localStorage.setItem(time, text);
  })
  //load saved data from LocalStorage - 
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  function hourTracker() {
      //get current time.
      var now = moment().hour(); 

      // loop over time blocks and change the styles
      $(".time-block").each(function () {
          var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

          //check if we've moved past this time, click into css/html given classes of past, present, or future
          if (timeBlock < now) {
              $(this).addClass("past");
              $(this).removeClass("future");
              $(this).removeClass("present");
          }
          else if (timeBlock === now) {
                $(this).addClass("present");  
                $(this).removeClass("past");
                $(this).removeClass("future");
            } 
          else {
              $(this).addClass("future");
              $(this).removeClass("present");
              $(this).removeClass("past");  
            }
      })
    }
  hourTracker(); 
})

