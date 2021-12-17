var currentDayEl = document.getElementById("currentDay")
console.log("this worked")

time = moment().format("dddd, MMMM Do");
console.log("time raw data", time);
console.log("time", time._d);

var currentDayDisplay = document.createElement ("p")
currentDayDisplay.textContent = time;
currentDayDisplay.className = "lead"
currentDayEl.appendChild(currentDayDisplay);