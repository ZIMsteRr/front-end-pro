import { waitersUrl } from '../api/url.js';

const EDIT_BTN_CLASS = 'editBtn';
const DELETE_BTN_CLASS = 'deleteBtn';
const WAITER_ITEM_CLASS = 'waiterItem';

function getElement(id) {
    return document.getElementById(id);
}

const waiterForm = getElement('waiterForm');
const nameInput = getElement('nameInput');
const phoneInput = getElement('phoneInput');
const waitersList = getElement('waitersList');

waiterForm.addEventListener('submit', onFormSubmit);
waitersList.addEventListener('click', onWaitersListClick);

init();

function init() {
    fetchWaiters(renderWaiters, renderWaitersOnError);
}

function fetchWaiters(successCallback, errorCallback) {
    fetch(waitersUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not successful');
            }
            return response.json();
        })
        .then(successCallback)
        .catch(error => {
            console.error('Error fetching waiter data:', error);
            if (errorCallback) {
                errorCallback();
            }
        });
}

function renderWaiters(waiters) {
    waitersList.innerHTML = waiters.map(generateWaiterHtml).join('');
}

function renderWaitersOnError() {
    waitersList.innerHTML = '<tr><td colspan="3">Error fetching waiters</td></tr>';
}

function generateWaiterHtml(waiter) {
    return `
    <tr class="${WAITER_ITEM_CLASS}" data-id="${waiter.id}">
      <td>${waiter.id}</td>
      <td>${waiter.firstName}</td>
      <td>${waiter.phone}</td>
      <td>
        <button class="btn ${EDIT_BTN_CLASS}" data-id="${waiter.id}">Edit</button>
        <button class="btn ${DELETE_BTN_CLASS}" data-id="${waiter.id}">Delete</button>
      </td>
    </tr>
  `;
}

function onFormSubmit(event) {
    event.preventDefault();

    const editId = waiterForm.getAttribute('data-edit-id');

    const firstName = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!firstName || !phone) {
        return;
    }

    const waiter = { firstName, phone };

    if (editId) {
        updateWaiter(editId, waiter, clearFormAndFetchWaiters, renderWaitersOnError);
    } else {
        createWaiter(waiter, clearFormAndFetchWaiters, renderWaitersOnError);
    }
}

function updateWaiter(id, waiter, successCallback, errorCallback) {
    fetch(`${waitersUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(waiter),
    })
        .then(successCallback)
        .catch(error => {
            console.error('Error updating waiter:', error);
            if (errorCallback) {
                errorCallback();
            }
        });
}

function createWaiter(waiter, successCallback, errorCallback) {
    fetch(waitersUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(waiter),
    })
        .then(successCallback)
        .catch(error => {
            console.error('Error creating waiter:', error);
            if (errorCallback) {
                errorCallback();
            }
        });
}

function onWaitersListClick(event) {
    const target = event.target;

    if (target.classList.contains(EDIT_BTN_CLASS)) {
        const waiterId = target.getAttribute('data-id');
        editWaiter(waiterId);
    } else if (target.classList.contains(DELETE_BTN_CLASS)) {
        const waiterId = target.getAttribute('data-id');
        deleteWaiter(waiterId);
    }
}

function editWaiter(id) {
    const waiter = getWaiterById(id);
    if (waiter) {
        nameInput.value = waiter.firstName;
        phoneInput.value = waiter.phone;
        waiterForm.setAttribute('data-edit-id', id);
    }
}

function deleteWaiter(id) {
    const confirmed = confirm('Are you sure you want to delete this waiter?');
    if (confirmed) {
        fetch(`${waitersUrl}/${id}`, {
            method: 'DELETE',
        })
            .then(() => fetchWaiters(renderWaiters, renderWaitersOnError))
            .catch(error => {
                console.error('Error deleting waiter:', error);
            });
    }
}

function clearFormAndFetchWaiters() {
    clearForm();
    fetchWaiters(renderWaiters, renderWaitersOnError);
}

function clearForm() {
    nameInput.value = '';
    phoneInput.value = '';
}