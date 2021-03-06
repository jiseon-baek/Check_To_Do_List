'use strict'

const form = document.querySelector(".form_js"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".greetings");


const USER_LS = "currentUser",
    SHOWING_CN = "showing";


function saveName(text) {
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    showGreeting(currentValue);
    saveName(currentValue);
}


function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit);
}


function showGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}🐥`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        showGreeting(currentUser);
    }
}


function init() {
    loadName();
}

init();