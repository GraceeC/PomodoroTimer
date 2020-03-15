// global variables
let totalSeconds = 1500;
let brakeTimerTime = 300;
let longTime;
let shortTime;
let pauseSession;
let pauseBrake;

// event listeners for Timer Butons & Brake buttons
document.getElementById("start").addEventListener("click", () => {
  console.log("start session timer clicked");
  longTimer();
});
document.getElementById("pause").addEventListener("click", () => {
  console.log("paused clicked");
  stopLongtimer();
});
document.getElementById("reset").addEventListener("click", () => {
  console.log("reset clicked");
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
});

// global variable for session timer 
const longTimerDisplay =document.querySelector('#sessionMinutes')
//session timer function
function displayTimer(currentTime, display) {
  let minutes = parseInt(currentTime / 60);
  console.log(minutes);
  let seconds = currentTime % 60;
  console.log(seconds);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  display.innerHTML = minutes + ":" + seconds;
}
displayTimer(totalSeconds, longTimerDisplay);

//setInterval for my session timer
function longTimer(){
  longTime = setInterval(function () {
    displayTimer(totalSeconds, longTimerDisplay);
    totalSeconds = totalSeconds - 1;
  }, 1000);
}

//function to stop lonTimer
function pauseSess(){
  pauseSession = setTimeout(() => {
    displayTimer(totalSeconds, longTimerDisplay);
  }, 1000); 
}
pauseSess();

function stopLongtimer(){
clearTimeout(longTime);
}

//globarl variable for brake
const brakeTimerDisplay = document.querySelector('.text');
//function for brake timer
function brakeTimer(brakeTime, displayBrake) {
  let min = parseInt(brakeTime / 60);
  console.log(min);
  let brakeSeconds = brakeTime % 60;
  console.log(brakeSeconds);
  if (brakeSeconds < 10) {
    brakeSeconds = "0" + brakeSeconds;
  }
  displayBrake.innerHTML = min + ":" + brakeSeconds;
}
brakeTimer(brakeTimerTime,brakeTimerDisplay);


//setInterval for brake timer
function shortTimer(){
  shortTime = setInterval(function (){
    brakeTimer(brakeTimerTime,brakeTimerDisplay);
    brakeTimerTime = brakeTimerTime -1;
  }, 1000);
}

//function to stop shortTimer
function pauseShortTimer(){
  pauseBrake = setTimeout(() =>{
    brakeTimer(brakeTimerTime,brakeTimerDisplay)
  },1000);
}
pauseShortTimer();

function stopBrakeTimer(){
  clearTimeout(shortTime);
}
