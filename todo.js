'use strict'


const toDoForm = document.querySelector(".toDoForm_js"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".toDoList_js");


const ToDos_LS = "toDos";


function loadToDos() {
    const toDos = localStorage.getItem(ToDos_LS);
    if(toDos !== null) {

    }
}


function init() {
    loadToDos();
    
}

init();

