// global variables
let totalSeconds = 1500;
let brakeTimerTime = 300;
let longTime;
let shortTime;
let sessionPause;
let pauseBrake;

// event listeners for Timer Butons & Brake buttons
document.getElementById("start").addEventListener("click", () => {
  console.log("start session timer clicked");
  longTimer();
});
document.getElementById("pause").addEventListener("click", () => {
  console.log("paused clicked");
  stopLongTimer();
});
document.getElementById("reset").addEventListener("click", () => {
  console.log("reset clicked");
  resetLongTimer();
});
document.getElementById("startBrk").addEventListener("click", () => {
  console.log("start break btn clicked ");
  shortTimer();
});
document.getElementById("pauseBrk").addEventListener("click", () => {
  console.log("pause brake btn clicked");
  stopBrakeTimer();
});
document.getElementById("resetBrk").addEventListener("click", () => {
  console.log("reset brake btn clicked");
  resetShortTimer();
  //toggle event listener
});
document.getElementById("sliderBtn").addEventListener("click", () => {
  console.log("works");
  toggleButton();
});

// global variable for session timer
const longTimerDisplay = document.querySelector("#sessionMinutes");

//session timer function
function displayTimer(currentTime, display) {
  let minutes = parseInt(currentTime / 60);
  console.log(minutes);
  let seconds = currentTime % 60;
  console.log(seconds);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (currentTime < 1) {
    clearTimeout(longTime);
  }
  longTimerDisplay.innerHTML = minutes + ":" + seconds;
}
//global variable for longTimer
displayTimer(totalSeconds, longTimerDisplay);

//setInterval for my session timer
function longTimer() {
  longTime = setInterval(function() {
    displayTimer(totalSeconds, longTimerDisplay);
    totalSeconds = totalSeconds - 1;
  }, 1000);
}

//function to stop longTimer
function stopLongTimer() {
  clearTimeout(longTime);
}

function resetLongTimer() {
  stopLongTimer();
  let totalSeconds = 1500;
  displayTimer(totalSeconds, longTimerDisplay);
}

// //globarl variable for brake
const brakeTimerDisplay = document.querySelector(".text");

//function for brake timer
function brakeTimer(brakeTime, displayBrake) {
  let min = parseInt(brakeTime / 60);
  console.log(min);
  let brakeSeconds = brakeTime % 60;
  console.log(brakeSeconds);
  if (brakeSeconds < 10) {
    brakeSeconds = "0" + brakeSeconds;
  }
  if (min < 10) {
    min = "0" + min;

    // conditional used to restart timer once timer is complete
  }
  if (brakeTime < 1) {
    stopBrakeTimer();
    brakeTimerTime = 300;
    brakeTimer(brakeTimerTime, brakeTimerDisplay);
  }
  displayBrake.innerHTML = min + ":" + brakeSeconds;
}
brakeTimer(brakeTimerTime, brakeTimerDisplay);

//setInterval for brake timer
function shortTimer() {
  shortTime = setInterval(function() {
    brakeTimer(brakeTimerTime, brakeTimerDisplay);
    brakeTimerTime = brakeTimerTime - 1;
  }, 1000);
}

//function to stop shortTimer
function pauseShortTimer() {
  pauseBrake = setTimeout(() => {
    brakeTimer(brakeTimerTime, brakeTimerDisplay);
  }, 1000);
}
pauseShortTimer();

//function to pause brake timer
function stopBrakeTimer() {
  clearTimeout(shortTime);
}
//funtion to reset brake timer
function resetShortTimer() {
  stopBrakeTimer();
  let brakeTimerTime = 300;
  brakeTimer(brakeTimerTime, brakeTimerDisplay);
}
//toggle Button between long timer & short timer
function toggleButton() {
  let toggleBtn = document.getElementById("sessionTime");
  if (toggleBtn.style.display == "none") {
    toggleBtn.style.display = "block";
  } else {
    toggleBtn.style.display = "none";
  }
}
