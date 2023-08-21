import { Api } from '../api/Api.js'
import { contactsUrl } from '../api/url.js'
import {
    //fillForm,
    fillFormInputs,
    clearFormData,
    //getFormData,
    getFormDataInputs,
} from '../lib_module'

const EDIT_BTN_CLASS = 'editBtn'
const DELETE_BTN_CLASS = 'deleteBtn'
const CONTACT_ITEM_CLASS = 'contactItem'

const inputs = document.querySelectorAll('.formInput')
const contactContainer = document.querySelector('#contactContainer')
const form = document.querySelector('#contactForm')
const api = new Api(contactsUrl)
let contactList = []

contactContainer.addEventListener('click', onContactContainerClick)
form.addEventListener('submit', onFormSubmit)

init()

function init () {
    api.getList().then((list) => {
        renderList(list)
        contactList = list
    })
}

function onContactContainerClick (e) {
    const target = e.target
    const contactEl = findContactEl(target)
    const id = Number(contactEl?.dataset?.id)

    if (id) {
        if(isEditButtonClicked(target)) {
            const contact = getContactById(id)

            fillFormInputs(inputs, contact)
        }
    }
}

function onFormSubmit (e) {
    e.preventDefault()

    const formElements = form.elements
    // const contact = getFormData(formElements)
    const contact = getFormDataInputs(inputs)

    // isContactValid()

    if (contact.id) { // update
        api.update(contact.id, contact).then(() => {
            replaceContactInList(contact.id, contact)
            replaceContactEl(contact.id, contact)
            clearFormData(formElements)
        })
    } else { // create

    }
}

function isEditButtonClicked (el) {
    return el.closest(`.${EDIT_BTN_CLASS}`)
}

function findContactEl (el) {
    return el.closest(`.${CONTACT_ITEM_CLASS}`)
}

function renderList (contacts) {
    contactContainer.innerHTML = contacts.map(generateContactHtml).join('')
}

function generateContactHtml (contact) {
    return `
    <tr
      class="${CONTACT_ITEM_CLASS}"
      data-id="${contact.id}"
    >
      <td>${contact.firstName}</td>
      <td>${contact.lastName}</td>
      <td>${contact.phone}</td>
      <td>
          <span>
              <button class="${EDIT_BTN_CLASS}">[Edit]</button>
              <button class="${DELETE_BTN_CLASS}">[Delete]</button>
          </span>
      </td>
    </tr>
  `
}

function replaceContactEl (id, contact) {
    const oldContactEl = findContactElById(id)

    oldContactEl.outerHTML = generateContactHtml(contact)
}

function findContactElById (id) {
    return contactContainer.querySelector(`[data-id="${id}"]`)
}

function getContactById (id) {
    return contactList.find(contact => contact.id === id)
}

function replaceContactInList (id, contact) {
    contactList = contactList.map(c => c.id === Number(id) ? { ...contact, id: Number(id) } : c)
}

function deleteContactById (id) {
    const contactEl = findContactElById(id)

    if (contactEl) {
        contactEl.remove()
        else
    }

    throw new Error('Contact element not found')
}