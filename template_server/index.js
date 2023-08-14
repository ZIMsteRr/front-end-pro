'use strict'

import {Api} from '../api/Api.js'
import {contactsUrl} from "../api/url.js";
import {
    getFormData,
    clearFormData,
    isEmpty,
    showError,}
    from '../lib_module';

const FORM_SELECTOR = '#contactForm';
const TABLE_SELECTOR = '#contactTable';
const DELETE_BTN_CLASS = 'deleteButton';
const CONTACT_ITEM_CLASS = 'contactItem';

const contactApi = new Api(contactsUrl);
const form = document.querySelector(FORM_SELECTOR);
const table = document.querySelector(TABLE_SELECTOR);
let contactList = [];

form.addEventListener('submit', onFormSubmit);
table.addEventListener('click', onTableClick);
document.getElementById('editButton').addEventListener('click', onEditButtonClick);

init();

function init() {
    contactApi.getList()
        .then((list) => {
            contactList = list;
            renderContactList(list);
        })
        .catch(e => showError(e.message));
}

function onFormSubmit(e) {
    e.preventDefault();

    const formElements = form.elements;
    const contact = getFormData(formElements);
    const contactId = Number(document.getElementById('contactId').value);

    if (!isContactValid(contact)) {
        showError('All fields are required');
        return;
    }

    if (contactId) {
        contactApi.update(contactId, contact)
            .then((updatedContact) => {
                updateContactInList(updatedContact);
                clearFormData(formElements);
            })
            .catch(e => showError(e.message));
    } else {
        contactApi.create(contact)
            .then((newContact) => {
                renderContact(newContact);
                clearFormData(formElements);
            })
            .catch(e => showError(e.message));
    }
}

function onTableClick(e) {
    const contactItemEl = getContactItemEl(e.target);
    const id = Number(contactItemEl.dataset.id);
    const contact = contactList.find((contactItem) => contactItem.id === id);

    if (contactItemEl) {
        if (isDeleteBtn(e.target)) {
            contactApi.delete(id)
                .then(() => deleteContactEl(contactItemEl))
                .catch(e => showError(e.message));
        } else {
            fillFormForEditing(contact);
        }
    }
}

function fillFormForEditing(contact) {
    document.getElementById('firstName').value = contact.firstName;
    document.getElementById('lastName').value = contact.lastName;
    document.getElementById('phoneNumber').value = contact.phoneNumber;

    const editButton = document.getElementById('editButton');
    editButton.style.display = 'block';
    editButton.dataset.id = contact.id;

    const addButton = document.getElementById('addButton');
    addButton.style.display = 'none';
    document.getElementById('contactId').value = contact.id;
    document.getElementById('addButton').style.display = 'none';
}

function onEditButtonClick() {
    const editedContactId = Number(document.getElementById('editButton').dataset.id);
    const editedContact = getFormData(form.elements);

    if (!isContactValid(editedContact)) {
        showError('All fields are required');
        return;
    }

    contactApi.update(editedContactId, editedContact)
        .then((updatedContact) => {
            updateContactInList(updatedContact);
            clearFormData(form.elements);
            document.getElementById('addButton').style.display = 'block';
            document.getElementById('editButton').style.display = 'none';
        })
        .catch(e => showError(e.message));
}

function updateContactInList(updatedContact) {
    const contactIndex = contactList.findIndex(contact => contact.id === updatedContact.id);
    if (contactIndex !== -1) {
        contactList[contactIndex] = updatedContact;
        renderContactList(contactList);
    }
}

function isContactValid(contact) {
    return !isEmpty(contact.firstName) && !isEmpty(contact.lastName) && !isEmpty(contact.phoneNumber);
}

function renderContactList(list) {
    table.innerHTML = list.map(generateContactHtml).join('');
}

function renderContact(contact) {
    const html = generateContactHtml(contact);
    table.insertAdjacentHTML('beforeend', html);
}

function generateContactHtml(contact) {
    return `
    <tr class="${CONTACT_ITEM_CLASS}" data-id="${contact.id}">
        <td>${contact.firstName}</td>
        <td>${contact.lastName}</td>
        <td>${contact.phoneNumber}</td>
        <td><button class="${DELETE_BTN_CLASS}">Delete</button></td>
    </tr>
  `;
}

function getContactItemEl(el) {
    return el.closest(`.${CONTACT_ITEM_CLASS}`);
}

function isDeleteBtn(el) {
    return el.classList.contains(DELETE_BTN_CLASS);
}

function deleteContactEl(el) {
    return el.remove();}