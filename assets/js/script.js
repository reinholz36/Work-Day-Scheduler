var currentDayEl = document.getElementById("currentDay")
var saveBtn = document.getElementsByClassName("saveBtn")

//pulls the current time by set format
time = moment().format("dddd, MMMM Do");

//displays the day, month and date on header
var currentDayDisplay = document.createElement ("p")
currentDayDisplay.textContent = time;
currentDayDisplay.className = "lead"
currentDayEl.appendChild(currentDayDisplay);

/*Save to local storage *Note: using "this" allows for dynamic use
of button accrose all save buttons where as entering "saveBtn" for sibling parent only yeilds first button use*/
$(saveBtn).on("click", function(){
    var textEntry = $(this).siblings(".description").val();
    var timeBlock = $(this).parent().attr("id");
    console.log("textEntry", textEntry);
    console.log("timeBlock", timeBlock);
    localStorage.setItem(timeBlock, textEntry);
})

//load value data from local storage
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

//Gets current local time
currentyHourly = moment().hours();

//Switch css color based on time
$(".time-block").each(function() {
    var timeBlockHour = parseInt($(this).attr("id"));

    if (timeBlockHour < currentyHourly) {
        $(this).removeClass("present future");
        $(this).addClass("past");
    }
    else if (timeBlockHour === currentyHourly) {
        $(this).removeClass("past future");
        $(this).addClass("present");

    } else {
        $(this).removeClass("past present");
        $(this).addClass("future");
    }
})
