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

$(saveBtn).on("click", function(){
    console.log(saveBtn);
    var textEntry = $(saveBtn).siblings(".description").val();
    var timeBlock = $(saveBtn).parent().attr("id");
    console.log("textEntry", textEntry);
    console.log("timeBlock", timeBlock);
    localStorage.setItem(timeBlock, textEntry);
})
