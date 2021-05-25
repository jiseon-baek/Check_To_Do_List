'use strict'


const toDoForm = document.querySelector(".toDoForm_js"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".toDoList_js");


const ToDos_LS = "toDos";

const toDos = [];


function showToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "⭕️"
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    showToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos() {
    const loadedToDos = localStorage.getItem(ToDos_LS);
    if(loadedToDos !== null) {

    }
}


function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();

