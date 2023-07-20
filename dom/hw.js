"use strict";

const msgInput = document.getElementById("msgInput");
const msgButton = document.getElementById("msgButton");
const todoList = document.getElementById("todoList");

msgButton.addEventListener("click", () => {
  const inputValue = msgInput.value.trim();

  if (inputValue !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = inputValue;

    todoList.appendChild(listItem);

    msgInput.value = "";
  }
});
