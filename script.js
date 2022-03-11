//add today's date to the header
var now = moment().format("dddd MMMM Do");
$("#currentDay").html(now);

var taskContent = $("<textarea>").text();
var hour = $(".col-md-1 hour").text();

console.log(hour);