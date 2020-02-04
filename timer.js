// global variables
let totalSeconds = 1500;
let brakeTimerTime = 300;
let stop = clearInterval;
let sessionBtn = document.getElementById('start');
let sessionBtnReset = document.getElementById('reset');
let startBrk = document.getElementById('startBrk');
let resetBrake = document.getElementById('resetBrk');
let longSessionBtn = document.getElementById('longTimer');
let shortSessionBtn = document.getElementById("shortTimer");
let hideContainerThree = document.getElementById('container3');

// event listeners for Timer Butons & Brake buttons
document.getElementById('start').addEventListener('click', () => {
    console.log('start session btn clicked');
});
startBrk.addEventListener('click', () => {
    console.log('start brake btn clicked');
});
resetBrake.addEventListener('click', () => {
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


function reset(){
     let reset =document.getElementById('reset').addEventListener('click', () => {
         if (reset === stop){
             console.log('it works');
             totalSeconds = clearInterval();
         }
     
        
        
    });        

    }




reset();

function longTimer() {
    let startButton = document.getElementById('start');
    startButton.addEventListener('click', () => {
        setInterval(() => {
            totalSeconds = totalSeconds - 1;
            let minutes = Math.floor(totalSeconds / 60)  ;
            console.log(minutes);
            let seconds = Math.floor(totalSeconds % 60) ;
            if (seconds < 10){
                seconds = '0' + seconds;
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
