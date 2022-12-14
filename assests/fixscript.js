
var currentDate = document.getElementById('currentDay');
var displayTime = document.getElementById("currentTime");


// time api i found when i couldnt get the dayjs plug ins to work
var DateTime = luxon.DateTime;

var currentTime = DateTime.now().get('hour');
// shows the date in the head of the document
    currentDate.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
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
// adds an eventlistenr for the save button and logs it to local storage

$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time,value);
});
// added a clear button to get rid of schedle for a new day
$("#clearBtn").click(function(event) {
    event.preventDefault();
    $("textarea").val("");
    localStorage.clear();
})

// puts the text from local data into the corispoding boxes when the page is reloaded
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

