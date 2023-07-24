'use strict'

const contactList = document.getElementById("contactList");

function addContactToList(contact) {
    const listItem = document.createElement("li");
    listItem.classList.add("contactItem");

    listItem.innerHTML = `
        <span>${contact.firstName}</span>
        <span>${contact.lastName}</span>
        <span>${contact.phoneNumber}</span>
        <button class="deleteButton">Delete</button>
    `;
    contactList.appendChild(listItem);
}

function clearInputFields() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phoneNumber").value = "";
}

function validateInputFields(firstName, lastName, phoneNumber) {
    if (firstName.trim() === "" || lastName.trim() === "") {
        alert("Enter your first ad last name.");
        return false;
    }

    if (phoneNumber.trim() === "" || isNaN(phoneNumber)) {
        alert("Your phone number must contain only digits.");
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
        const contact = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
        };
        addContactToList(contact);
        clearInputFields();
    }
}

function onDeleteButtonClick(event) {
    if (event.target.classList.contains("deleteButton")) {
        const listItem = event.target.parentNode;
        listItem.parentNode.removeChild(listItem);
    }
}

document.getElementById("addButton").addEventListener("click", onAddButtonClick);
contactList.addEventListener("click", onDeleteButtonClick);