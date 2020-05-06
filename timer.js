let workSeconds = 1500;
let breakSeconds = 300;
let workIntervalID;
let brakeIntervalID;

let audio = new Audio('pinwheel.mp3')
console.log(audio);

window.onload=function (e){
displayWorkTimer(workSeconds, workTimerDisplay);
displayBreakTimer(breakSeconds, brakeTimerDisplay);
toggleBtn(false);
}

document.getElementById('start').addEventListener("click",workTimer);
document.getElementById('pause').addEventListener("click",stopWorkTimer);
document.getElementById('reset').addEventListener("click",resetWorkTimer);
document.getElementById('start-brk').addEventListener("click",shortTimer);
document.getElementById('pause-brk').addEventListener("click",stopBreakTimer);
document.getElementById('reset-brk').addEventListener("click",resetShortTimer);

document.getElementById('slider-btn').addEventListener("click", (e) => {
  toggleBtn(e.target.checked);
});

const workTimerDisplay = document.querySelector('#session-text');

function displayWorkTimer(currentTime, display) {
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
    clearTimeout(workTimeIntervalID);
  }
  if (currentTime === 0) {
    audio.play();
  }
  workTimerDisplay.innerHTML = minutes + ":" + seconds;
}

function workTimer() {
  workTimeIntervalID = setInterval(function () {
    displayWorkTimer(workSeconds, workTimerDisplay);
    workSeconds = workSeconds - 1;
  }, 1000);
}

function stopWorkTimer() {
  clearTimeout(workIntervalID);
}

function resetWorkTimer() {
  stopWorkTimer();
  workSeconds = 1500;
  displayWorkTimer(workSeconds, workTimerDisplay);
}

const brakeTimerDisplay = document.querySelector('.text-break');

function displayBreakTimer(brakeTime, displayBrake) {
  let min = parseInt(brakeTime / 60);
  console.log(min);
  let breakSeconds = brakeTime % 60;
  console.log(breakSeconds);
  if (breakSeconds < 10) {
    breakSeconds = "0" + breakSeconds;
  }
  if (min < 10) {
    min = "0" + min;

    // conditional used to restart timer once timer is complete
  }
  if (brakeTime < 1) {
    stopBrakeTimer();
    breakSeconds = 300;
    displayBreakTimer(breakSeconds, brakeTimerDisplay);
  }
  if (brakeTime === 0) {
    audio.play();
  }
  displayBrake.innerHTML=min + ":" + breakSeconds;
}

function shortTimer() {
  brakeIntervalID = setInterval(function () {
    displayBreakTimer(breakSeconds, brakeTimerDisplay);
    breakSeconds = breakSeconds - 1;
  }, 1000);
}

function stopBrakeTimer() {
  clearTimeout(breakIntervalID);
}

function resetShortTimer() {
  stopBreakTimer();
  breakSeconds = 300;
  displayBreakTimer(breakSeconds, brakeTimerDisplay);
}

function toggleBtn(isBrakeTimer) {
  let shortTimeToggleBtn = document.getElementById('container-three');
  let workTimerSession = document.getElementById('session-time');
  if (isBrakeTimer === true) {
    resetWorkTimer();
    workTimerSession.style.display='none'
    shortTimeToggleBtn.style.display='block'
  } else {
    workTimerSession.style.display='block'
    shortTimeToggleBtn.style.display='none';
  }
}
