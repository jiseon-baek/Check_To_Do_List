'use strict'


const clockContainer = document.querySelector(".clock_js"),
    clockTitle = clockContainer.querySelector("h1");



function getTime() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours %= 12;
    hours = hours ? hours : 12;
   
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0️${minutes}` : minutes}:${seconds < 10 ? `0️${seconds}` : seconds} ${ampm}`
}



function init() {
    setInterval(getTime, 0);
}

init();