// You got this! 💫


// 💻 Work: 25 mins
// ☕️ Short break: 5 mins
// 🌯 Long break: 15 mins

const workTime = 25;
const shortBreakTime = 5;
const longBreakTime = 15;

let timeDisplay = document.getElementById("time-display");

// TODO FOR WORK BUTTON

$("#work-btn").click(function(){
    work(workTime);
});

function work(count){
    let count_min = Math.floor(count / 60);
    let count_sec = count % 60;
    if (count_sec < 10){
        count_sec = `0${count_sec}`;
    }

    if (count_min < 10){
        count_min = `0${count_min}`;
    }

    timeDisplay.innerHTML = `${count_min}:${count_sec}`;
}


// TODO FOR SHORT BREAK 
$("#short-break-btn").click(function(){
    work(workTime);
});

function shortBrak(){

}


// TODO FOR LONG BREAK 
$("#long-break-btn").click(function(){
    work(workTime);
});