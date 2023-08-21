import { waitersUrl } from "../api/url.js";

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
    fetchWaiters(renderWaitersOnError);
}

function fetchWaiters(successCallback, errorCallback) {
    fetch(waitersUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Сетевой ответ не был успешным');
            }
            return response.json();
        })
        .then(successCallback)
        .catch(error => {
            console.error('Ошибка при получении данных официантов:', error);
            if (errorCallback) {
                errorCallback();
            }
        });
}

function getWaiterById(id) {
    const waiter = Array.from(waitersList.querySelectorAll(`.${WAITER_ITEM_CLASS}`))
        .find(waiter => waiter.dataset.id === id);

    if (waiter) {
        const waiterId = waiter.querySelector('td').textContent;
        const waiterName = waiter.querySelector('td:nth-child(2)').textContent;
        const waiterPhone = waiter.querySelector('td:nth-child(3)').textContent;

        return { id: waiterId, firstName: waiterName, phone: waiterPhone };
    }

    return null;
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
            console.error('Ошибка при обновлении официанта:', error);
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
    const confirmed = confirm('Вы уверены, что хотите удалить этого официанта?');
    if (confirmed) {
        fetch(`${waitersUrl}/${id}`, {
            method: 'DELETE',
        })
            .then(() => fetchWaiters(renderWaiters, renderWaitersOnError))
            .catch(error => {
                console.error('Ошибка при удалении официанта:', error);
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