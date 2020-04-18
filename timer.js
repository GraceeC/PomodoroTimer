let workTimer = 1500;
let breakTimer = 300;
let longTime;
let shortTime;
let pauseBreak;
let audio = new Audio('pinwheel.mp3')

window.onload = function(e){
  toggleBtn(false);
  displayTimer(totalSeconds, longTimerDisplay);
  breakTimer(breakTimerTime, breakTimerDisplay);
  pauseShortTimer();
}

document.getElementById('start').addEventListener('click', workTime);
document.getElementById('pause').addEventListener('click', () => {
  console.log('paused clicked');
  stopWorkTimer();
});
document.getElementById('reset').addEventListener('click', () => {
  console.log('reset clicked');
  resetLongTimer();
});
document.getElementById('startBrk').addEventListener('click', () => {
  console.log('start break btn clicked');
  breakTimer();
});
document.getElementById('pauseBrk').addEventListener('click', () => {
  console.log('pause break btn clicked');
  stopBreakTimer();
});
document.getElementById('resetBrk').addEventListener('click', () => {
  console.log('reset break btn clicked');
  resetbreakTimer();
});
//toggle event listener
document.getElementById('sliderBtn').addEventListener('click', (e) => { 
});

// global variable for session timer
const longTimerDisplay = document.querySelector('#sessionMinutes');

//session timer function
function displayTimer(currentTime) {
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
  if (currentTime === 0) {
    audio.play();
  }
  longTimerDisplay.innerHTML = minutes + ":" + seconds;
}
//global variable for longTimer
displayTimer(workTimer);

//setInterval for my session timer
function workTimer() {
  longTime = setInterval(function () {
    displayTimer(totalSeconds, longTimerDisplay);
    totalSeconds = totalSeconds - 1;
  }, 1000);
}

//function to stop longTimer
function stopWorkTimer() {
  clearTimeout(longTime);
}

function resetWorkTimer() {
  stopLongTimer();
  totalSeconds = 1500;
  displayTimer(totalSeconds, longTimerDisplay);
}

// //globarl variable for break
const breakTimerDisplay = document.querySelector('.text');

//function for break timer
function breakTimer(breakTime, displayBreak) {
  let min = parseInt(breakTime / 60);
  console.log(min);
  let breakSeconds = breakTime % 60;
  console.log(breakSeconds);
  if (breakSeconds < 10) {
    breakSeconds = '0' + breakSeconds;
  }
  if (min < 10) {
    min = "0" + min;

    // conditional used to restart timer once timer is complete
  }
  if (breakTime < 1) {
    stopBreakTimer();
    breakTimerTime = 300;
    breakTimer(breakTimerTime, breakTimerDisplay);
  }
  if (breakTime === 0) {
    audio.play();
  }
  displayBreak.innerHTML = min + ':' + breakSeconds;
}
breakTimer(breakTimerTime, breakTimerDisplay);

function breakTimer() {
  shortTime = setInterval(function () {
    breakTimer(breakTimerTime, breakTimerDisplay);
    breakTimerTime = breakTimerTime - 1;
  }, 1000);
}

//function to stop shortTimer
function pauseBreakTimer() {
  pauseBreak = setTimeout(() => {
    breakTimer(breakTimerTime, breakTimerDisplay);
  }, 1000);
}

function stopBreakTimer() {
  clearTimeout(shortTime);
}

function resetbreakTimer() {
  stopBreakTimer();
  let breakTimerTime = 300;
  breakTimer(breakTimerTime, breakTimerDisplay);
}
//toggle Button between long timer & short timer
function toggleBtn(isBreakTimer) {
  let shortTimeToggleBtn = document.getElementById('break');
  let longTimerSession = document.getElementById('session-time');
  if (isBreakTimer === true) {
    resetWorkTimer();
    longTimerSession.style.display = 'none';
    shortTimeToggleBtn.style.display = 'block';
  } else {
    resetbreakTimer();
    longTimerSession.style.display = 'block';
    shortTimeToggleBtn.style.display = 'none';
  }
}

