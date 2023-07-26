// algorithm

// 1. get data
// 2. validate data
// 3. show error
// 4. render
// 5. clear form

'use strict'

const DELETE_BTN_CLASS = 'deleteBtn'
const CONTACT_ITEM_CLASS = 'contactItem'
const CONTACT_FORM = 'contactForm'
const CONTACT_LIST = 'contactList'

const form = document.querySelector(`#${CONTACT_FORM}`)
const contactList = document.querySelector(`#${CONTACT_LIST}`)

form.addEventListener('submit', onFormSubmit)
contactList.addEventListener('click', onContactListClick)

renderContact({ name: 'Harry', surname: 'Potter', phone: '888888888' })
renderContact({ name: 'Tom', surname: 'Riddle', phone: '66666666' })

function onFormSubmit (e) {
    e.preventDefault()

    const formElements = form.elements
    const contact = getFormData(formElements)

    if (!isContactValid(contact)) {
        showError('All fields must be required and phone must be a number.')
        return
    }

    renderContact(contact)
    clearFormData(formElements)
}

function onContactListClick (e) {
    const contactItemEl = getContactItem(e.target)

    if (contactItemEl && e.target.classList.contains(DELETE_BTN_CLASS)) {
        removeContact(contactItemEl)
    }
}

function removeContact (el) {
    el.remove()
}

function isContactValid (contact) {
    return !isEmpty(contact.name)
        && !isEmpty(contact.surname)
        && !isEmpty(contact.phone)
        && isNumber(Number(contact.phone))
}

function renderContact (contact) {
    const html = generateTemplate(contact)

    contactList.insertAdjacentHTML('beforeend', html)
}

function generateTemplate (contact) {
    return `
    <tr class="${CONTACT_ITEM_CLASS}">
      <td>${contact.name}</td>
      <td>${contact.surname}</td>
      <td>${contact.phone}</td>
      <td><span><button type="button" class="${DELETE_BTN_CLASS}">Delete</button></span></td>
    </tr>
  `
}

function showError (message) {
    alert(message)
}

function getContactItem (el) {
    return el.closest(`.${CONTACT_ITEM_CLASS}}`)
}