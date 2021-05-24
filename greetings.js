'use strict'

const form = document.querySelector(".form_js"),
    input = form.querySelector("input"),
    greeting = document.querySelector("h4")


const User_LS = "currentUser"


function loadName() {
    const currentUser = localStorage.getItem(User_LS);
    if(currentUser === null) {

    } else {
        
    }
}




function init() {
    loadName();
}

init();