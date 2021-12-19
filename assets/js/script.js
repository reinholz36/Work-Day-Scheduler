var currentDayEl = document.getElementById("currentDay")
var saveBtn = document.getElementsByClassName("saveBtn")

//pulls the current time by set format
time = moment().format("dddd, MMMM Do");
console.log("time raw data", time);
console.log("time", time._d);
//displays the day, month and date on header
var currentDayDisplay = document.createElement ("p")
currentDayDisplay.textContent = time;
currentDayDisplay.className = "lead"
currentDayEl.appendChild(currentDayDisplay);

currentyHourly = moment().format("LT")
console.log("hourly", currentyHourly);

/*Save to local storage *Note: using "this" allows for dynamic use
of button accrose all time blocks where as entering "saveBtn" for sibling parent only yeilds first button use*/
$(saveBtn).on("click", function(){
    var textEntry = $(this).siblings(".description").val();
    var timeBlock = $(this).parent().attr("id");
    console.log("textEntry", textEntry);
    console.log("timeBlock", timeBlock);
    localStorage.setItem(timeBlock, textEntry);
})

//load value data from local storage
$("#8am .description").val(localStorage.getItem("8am"));
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));
