'use strict'
function addContact(firstName, lastName, phoneNumber) {
    const table = document.getElementById("contactTable");
    const row = table.insertRow(-1);
    row.insertCell(0).textContent = firstName;
    row.insertCell(1).textContent = lastName;
    row.insertCell(2).textContent = phoneNumber;
    const deleteCell = row.insertCell(3);
    deleteCell.innerHTML = '<button class="deleteButton">Delete</button>';
}

function clearInputFields() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phoneNumber").value = "";
}

function validateInputFields(firstName, lastName, phoneNumber) {
    if (firstName.trim() === "" || lastName.trim() === "") {
        alert("Enter first and last name.");
        return false;
    }

    if (phoneNumber.trim() === "" || isNaN(phoneNumber)) {
        alert("Number must contain only digits.");
        return false;
    }

    return true;
}

function onAddButtonClick(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    if (validateInputFields(firstName, lastName, phoneNumber)) {
        addContact(firstName, lastName, phoneNumber);
        clearInputFields();
    }
}

function onDeleteButtonClick(event) {
    if (event.target.classList.contains("deleteButton")) {
        const row = event.target.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
}

document.getElementById("addButton").addEventListener("click", onAddButtonClick);
document.getElementById("contactTable").addEventListener("click", onDeleteButtonClick);