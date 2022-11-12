$(document).ready(function() {
    console.log("Ready!");
});
var currentDate = document.getElementById('currentDay');
var timeBlock = document.getElementsByClassName('#time-block');
var DateTime = luxon.DateTime;
var dayOfYear = DateTime.now().toLocaleString(DateTime.DATE_FULL);
var currentTime = DateTime.now().get('hour');

function displayTodaysDate() {
    currentDate.innerHTML = dayOfYear;
 }

//  function timeCheck() { 
//     for (let i = 9; i < 17;i++) {
//         var timeTable = $('#' + i);
//         if (currentTime == i) {
//           timeTable.addClass("present");

//         } else if (currentTime > i) {
//             timeTable.addClass("past");

//         } else if (currentTime < i) {
//             // timeTable.removeClass("present");
//             timeTable.addClass("future");
//         }
        
//     }
// };
function timeCheck() {
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
})
};
displayTodaysDate();
timeCheck();