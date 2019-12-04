function session(){
let x = new Date();
let min = x.getMinutes();
let sec = x.getSeconds();
let sessionBtn = document.getElementById('start');
let sessionBtnReset = document.getElementById('reset');
let startBrk = document.getElementById('startBrk');
let resetBrake = document.getElementById('resetBrk');
let minutesSeconds = `${min}:${sec}`;
console.log(x);

document.querySelector('.session').innerHTML = min + ':';
document.querySelector('.session').innerHTML = sec;
document.querySelector('.session').innerHTML = minutesSeconds;

document.querySelector('.break').innerHTML = sec;
document.querySelector('.break').innerHTML = sec;
document.querySelector('.break').innerHTML = minutesSeconds;

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

}

session();

