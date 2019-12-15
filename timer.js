let totalSeconds = 1500;
let totalMinutes = 25;
let timer = totalSeconds + totalMinutes;
let sessionBtn = document.getElementById('start');
let sessionBtnReset = document.getElementById('reset');
let startBrk = document.getElementById('startBrk');
let resetBrake = document.getElementById('resetBrk');

const startButton = document.getElementById("start");
startButton.addEventListener("click", function(e) {
  setInterval(function() {
    totalSeconds = totalSeconds - 1;
    const minutes = Math.floor((totalSeconds % 1500) / 60);
    const seconds = totalSeconds % 60;
    document.querySelector('.sessionMinutes').innerHTML=minutes + ':';
    document.querySelector('.sessionSeconds').innerHTML=seconds;
    
    }, 1000);

   
});


sessionBtn.addEventListener('click',function(e){
    console.log('start session btn clicked');
    });
    
    sessionBtnReset.addEventListener('click',function(e){
    console.log('reset session btn clicked');
    });
    startBrk.addEventListener('click',function(e){
        console.log('start brake btn clicked');
    });
    resetBrake.addEventListener('click',function(e){
        console.log('reset brake btn clicked');
    });
    
    
