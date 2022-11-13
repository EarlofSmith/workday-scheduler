
var currentDate = document.getElementById('currentDay');
var timeBlock = document.getElementsByClassName('#time-block');
var DateTime = luxon.DateTime;
var dayOfYear = DateTime.now().toLocaleString(DateTime.DATE_FULL);
var currentTime = DateTime.now().get('hour');
// shows the date in the head of the document
    currentDate.innerHTML = dayOfYear;
// checks the time against the div classes number and changes the divs classes 
$(".time-block").each(function() {
    var timeDiv = $(this).attr("id").split("-")[1];

    if (currentTime == timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("present");

    } else if (currentTime < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");

    } else if (currentTime > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});
// adds an eventlistenr for the save and logs it to local storage

$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time,value);
});

// retrive the text from local data
$("#hour-8 .description").val(localStorage.getItem("8"));
$("#hour-9 .description").val(localStorage.getItem("9"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));
$("#hour-18 .description").val(localStorage.getItem("18"));

