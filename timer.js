// global variables
let totalSeconds = 1500;
totalSeconds --;
let brakeTimerTime = 300;

// event listeners for Timer Butons & Brake buttons
document.getElementById("start").addEventListener("click", () => {
  console.log("start session timer clicked");
  longTimer();
});
document.getElementById("pause").addEventListener("click", () => {
  console.log("paused clicked");
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
});
document.getElementById("resetBrk").addEventListener("click", () => {
  console.log("reset brake btn clicked");
});
// function toggle() {
//  document.getElementById('reset').addEventListener('click', () => {
//     console.log('sessionBtnReset btn clicked');
//     let resetSession = document.getElementById('sessionTime');
//    if (resetSession.style.display === 'none'){
//     resetSession.style.display = 'block';
//    }else{
//     resetSession.style.display = 'none';
//    }
// });
// }
//toggle();
function displayTimer() {
  let minutes = parseInt(totalSeconds / 60);
  console.log(minutes);
  let seconds = totalSeconds % 60;
  console.log(seconds);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.querySelector("#sessionMinutes").innerHTML = minutes + ":" + seconds;
}
displayTimer();

function brakeTimer() {
  let min = parseInt(brakeTimerTime / 60);
  console.log(min);
  let brakeSeconds = brakeTimerTime % 60;
  console.log(brakeSeconds);
  if (brakeSeconds < 10) {
    brakeSeconds = "0" + brakeSeconds;
  }
  document.querySelector(".text").innerHTML = min + ":" + brakeSeconds;
}
brakeTimer();

setInterval(function longTimer() {
  brakeTimer();
  longTimer();
  totalSeconds = totalSeconds - 1;
}, 1000);
