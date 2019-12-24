// global variables
let totalSeconds = 1500;
let totalMinutes = 25;
let timer = totalSeconds + totalMinutes;
let sessionBtn = document.getElementById('start');
let sessionBtnReset = document.getElementById('reset');
let startBrk = document.getElementById('startBrk');
let resetBrake = document.getElementById('resetBrk');


// event listeners for Timer Butons & Brake buttons
sessionBtn.addEventListener('click',() => {
console.log('start session btn clicked');
})
sessionBtnReset.addEventListener('click',() => {
    console.log('reset session btn clicked');
 });

startBrk.addEventListener('click',() => {
console.log('start brake btn clicked');
 });

resetBrake.addEventListener('click',(resetBtn) =>{
console.log('reset brake btn clicked');
if (resetBtn == reset){
    console.log('hello');
}
 });
    
// global variable for time minutes & seconds
const startButton = document.getElementById("start");
startButton.addEventListener("click", () => {
  setInterval(() => {
    totalSeconds = totalSeconds - 1;
    let minutes = Math.floor((totalSeconds % 1500) / 60);
    let seconds = totalSeconds % 60;
    document.querySelector('#sessionMinutes').innerHTML=minutes + ':' + seconds;
    }, 1000);

   
});



    
