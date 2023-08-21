import {
    clearFormData,
    getFormData,
    isEmpty,
    showError,
    fillFormData,
} from '../../lib_module'

const form = document.querySelector('#contactForm')

export function initForm (options) {
    form.addEventListener('submit', (e) => onFormSubmit(e, options))
}

function onFormSubmit (e, options) {
    e.preventDefault()

    const contact = getFormData(form.elements)

    if (!isContactValid(contact)) {
        showError('Invalid form data')
        return;
    }

    options.onSubmit(contact)
}

function isContactValid (contact) {
    return !isEmpty(contact.firstName)
        && !isEmpty(contact.lastName)
        && !isEmpty(contact.phone)
}

export function fillForm(contact) {
    fillFormData(form.elements, contact)
}

export function clearForm() {
    clearFormData(form.elements)
}