'use strict'


const body = document.querySelector('body');

const Img_NB = 10;

function genRandom() {
    const number = Math.floor(Math.random() * Img_NB);
    return number;
};


function init() {
    const randomNumber = genRandom();
    
}

init();