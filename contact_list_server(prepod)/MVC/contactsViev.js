const EDIT_BTN_CLASS = 'editBtn'
const DELETE_BTN_CLASS = 'deleteBtn'
const CONTACT_ITEM_CLASS = 'contactItem'


const contactContainer = document.querySelector('#contactContainer')

export function initContactsView (options) {
    contactContainer.addEventListener('click', (e) => onContactContainerClick(e, options))
}

function onContactContainerClick (e, options) {
    const target = e.target
    const contactEl = findContactEl(target)
    const id = Number(contactEl?.dataset?.id)

    if (id) {
        if (isEditButtonClicked(target)) {
            options.onEdit(id)
        } else if (isDeleteButtonClicked(target)) {
            options.onDelete(id)
        }
    }
}

export function isEditButtonClicked (el) {
    return el.closest(`.${EDIT_BTN_CLASS}`)
}

export function isDeleteButtonClicked (el) {
    return el.closest(`.${DELETE_BTN_CLASS}`)
}

export function findContactEl (el) {
    return el.closest(`.${CONTACT_ITEM_CLASS}`)
}

export function renderList (contacts) {
    contactContainer.innerHTML = contacts.map(generateContactHtml).join('')
}

export function renderContact (contact) {
    contactContainer.insertAdjacentHTML('beforeend', generateContactHtml(contact))
}

export function generateContactHtml (contact) {
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

export function replaceContactEl (id, contact) {
    const oldContactEl = findContactElById(id)

    oldContactEl.outerHTML = generateContactHtml(contact)
}

export function findContactElById (id) {
    return contactContainer.querySelector(`[data-id="${id}"]`)
}

export function deleteContactById (id) {
    const contactEl = findContactElById(id)

    if (contactEl) {
        contactEl.remove()
    } else {
        throw new Error('Contact element not found')
    }
}