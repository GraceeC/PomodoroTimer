// global variables
let totalSeconds = 1500;
let brakeTimerTime = 300;
let stop = clearInterval;

// event listeners for Timer Butons & Brake buttons
document.getElementById('start').addEventListener('click', () => {
    console.log('start session btn clicked');
});
document.getElementById('pause').addEventListener('click', () => {
    console.log('paused clicked');
});
document.getElementById('reset').addEventListener('click', () => {
    console.log('reset clicked');
});
document.getElementById('startBrk').addEventListener('click', () => {
    console.log('start break btn clicked ');
});
document.getElementById('pauseBrk').addEventListener('click', () => {
    console.log('pause brake btn clicked');
});
document.getElementById('resetBrk').addEventListener('click', () => {
    console.log('reset brake btn clicked');
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
function pauseTimer(){
           

    }
pauseTimer();


function longTimer() {
    let startButton = document.getElementById('start');
    startButton.addEventListener('click', () => {
        setInterval(() => {
            totalSeconds = totalSeconds - 1;
            let minutes = (parseInt(Math.round(totalSeconds / 60)));
            console.log(minutes);
            let seconds = (totalSeconds.toFixed() % 60);
            if (seconds < 10){
                seconds = '0' + seconds;
            }else{
                clearInterval(totalSeconds);
            }
            document.querySelector('#sessionMinutes').innerHTML =
                minutes + ':' + seconds;
                
        }, 1000);
    });
    
}
longTimer();
function brakeTime() {
    let brakeBtn = document.getElementById('startBrk');
    brakeBtn.addEventListener('click', () => {
        setInterval(() => {
            brakeTimerTime = brakeTimerTime - 1;
            let min = Math.round(brakeTimerTime /60);
            let seconds = Math.floor(brakeTimerTime % 60);
            if (seconds < 10){
                seconds = '0' + seconds;
            }
            document.querySelector('.text').innerHTML = min + ':' + seconds;
        }, 1000);
    });
}
brakeTime();
