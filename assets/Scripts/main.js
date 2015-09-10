

function time() {
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var totalTime = hours + ":" + minutes + ":" + seconds;
var percentTime = Math.round(100 *(seconds/60));
var progressBar = document.querySelector('#progressBar');
progressBar.style.width = percentTime + '%';

hours =((hours <= "9") ? "0" : "") + hours;
minutes =((minutes <= "9") ? "0" : "") + minutes;
seconds =((seconds <= "9") ? "0" : "") + seconds;

document.querySelector('.js-percentage').textContent = percentTime;

//console.log(seconds);
//console.log(currentTime);
document.querySelector('.js-time').textContent = totalTime;
var everySecond = timeperSecond();

var color = "#" + hours + minutes + seconds;
document.querySelector('.container').style.backgroundColor = color;
}



function timeperSecond() {
var Runningtime = 1000;
var Continuoustime = setTimeout('time()', Runningtime);

}
