let workSeconds = 1500;
let breakSeconds = 300;
let workIntervalID;
let breakIntervalID;

let audio = new Audio("pinwheel.mp3");
console.log(audio);

window.onload = function (e) {
  displayWorkTimer(workSeconds);
  displayBreakTimer(breakSeconds);
  toggleBtn(false);
};

document.getElementById("start").addEventListener("click", workTimer);
document.getElementById("pause").addEventListener("click", stopWorkTimer);
document.getElementById("reset").addEventListener("click", resetWorkTimer);
document.getElementById("start-brk").addEventListener("click", breakTimer);
document.getElementById("pause-brk").addEventListener("click", stopBreakTimer);
document.getElementById("reset-brk").addEventListener("click", resetBreakTimer);

document.getElementById("slider-btn").addEventListener("click", (e) => {
  toggleBtn(e.target.checked);
});

const workTimerDisplay = document.getElementById("session-text");

function displayWorkTimer(currentTime) {
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
    clearTimeout(workIntervalID);
  }
  if (currentTime === 0) {
    audio.play();
  }
  workTimerDisplay.innerHTML = minutes + ":" + seconds;
}

function workTimer() {
  workIntervalID = setInterval(function () {
    workSeconds = workSeconds - 1;
    displayWorkTimer(workSeconds);
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

const breakTimerDisplay = document.getElementById("text-break");

function displayBreakTimer(breakTime) {
  let min = parseInt(breakTime / 60);
  console.log(min);
  let breakSeconds = breakTime % 60;
  console.log(breakSeconds);
  if (breakSeconds < 10) {
    breakSeconds = "0" + breakSeconds;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (breakTime < 1) {
    stopBreakTimer();
    breakSeconds = 300;
    displayBreakTimer(breakSeconds);
  }
  if (breakTime === 0) {
    audio.play();
  }
  breakTimerDisplay.innerHTML = min + ":" + breakSeconds;
}

function breakTimer() {
  breakIntervalID = setInterval(function () {
    breakSeconds = breakSeconds - 1;
    breakSeconds;
    displayBreakTimer(breakSeconds);
  }, 1000);
}

function stopBreakTimer() {
  clearTimeout(breakIntervalID);
}

function resetBreakTimer() {
  stopBreakTimer();
  breakSeconds = 300;
  displayBreakTimer(breakSeconds);
}

function toggleBtn(isBreakTimer) {
  let breakToggle = document.getElementById('break');
  let workTimerSession = document.getElementById('session-time');
  if (isBreakTimer === true) {
    resetWorkTimer();
    workTimerSession.style.display = 'none';
    breakToggle.style.display = 'block';
  } else {
    workTimerSession.style.display = 'block';
    breakToggle.style.display = 'none';
  }
}
