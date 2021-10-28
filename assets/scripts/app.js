//Importing HTML elements & Defining Functions For Code Shortening
const clock = document.querySelector('.clock');
const bell = document.querySelector('audio');
const minutesDiv = document.querySelector('.mins');
const secondsDiv = document.querySelector('.secs');


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