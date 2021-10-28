//Importing HTML elements & Defining Functions For Code Shortening
//Figure Container
const clock = getSelector('.clock');
const bell = getSelector('audio');
const minutesDiv = getSelector('.mins');
const secondsDiv = getSelector('.secs');
//Buttons Container
const startBtn = getSelector('.start');
const pauseBtn = getSelector('.pause');
const resetBtn = getSelector('.reset');
const form = getSelector('form');
//Form Container
const workTimeInput = getSelector('#workTime');
const breakTimeInput = getSelector('#breakTime');
//Circle Import Container & Radius
const circle = getSelector('.progress-bar__circle');
const radius = circle.r.baseVal.value;
const circleCalc = radius * 2 * Math.PI;

//Defining getElementById, querySelector & querySelectorAll through function for code shortening
function getByid(param) {
    return document.getElementById(`${param}`);
}

function getSelector(param) {
    return document.querySelector(`${param}`);
}

function getSelectorAll(param) {
    return document.querySelectorAll(`${param}`);
}