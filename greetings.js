'use strict'

const form = document.querySelector(".form_js"),
    input = form.querySelector("input"),
    greeting = document.querySelector("h4")


const User_LS = "currentUser",
    Showing_CN = "showing";


function saveName(text) {
    localStorage.setItem(User_LS, text);
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    showGreeting(currentValue);
    saveName(currentValue);
}


function askForName() {
    form.classList.add(Showing_CN);
    form.addEventListener('submit', handleSubmit);
}


function showGreeting(text) {
    form.classList.remove(Showing_CN);
    greeting.classList.add(Showing_CN);
    greeting.innerText = `Hello ${text}🧡`;
}

function loadName() {
    const currentUser = localStorage.getItem(User_LS);
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