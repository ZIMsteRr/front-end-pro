'use strict'

const TODO_LIST = document.getElementById("todoList");
const TODO_INPUT = document.getElementById("todoInput");
const ADD_BUTTON = document.getElementById("addButton");

ADD_BUTTON.addEventListener("click", onAddButtonClick);
TODO_LIST.addEventListener("click", onDeleteButtonClick);

function onAddButtonClick(event) {
    event.preventDefault();

    const inputValue = TODO_INPUT.value.trim();

    if (inputValue !== "") {
        const todoItem = {
            message: inputValue,
            completed: false,
        };
        addTodoItem(todoItem);
        clearInputField(TODO_INPUT);
    }
}

function onDeleteButtonClick(event) {
    if (event.target.classList.contains("deleteButton")) {
        const listItem = event.target.closest("li");
        listItem.remove();
    }
}

function addTodoItem(todoItem) {
    const listItem = document.createElement("li");
    listItem.classList.add("todoItem");

    listItem.innerHTML = `
        <span>${todoItem.message}</span>
        <input type="checkbox">
        <button class="deleteButton">Delete</button>
    `;
    TODO_LIST.appendChild(listItem);
}

function clearInputField(inputElement) {
    inputElement.value = "";
}