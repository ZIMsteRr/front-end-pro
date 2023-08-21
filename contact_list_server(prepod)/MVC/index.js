import {
    showError,
} from '../../lib_module'
import {
    getList,
    remove,
    create,
    update,
    getContactById,
} from './contacts.js'
import {
    renderList,
    replaceContactEl,
    renderContact,
    deleteContactById,
    initContactsView,
} from './contactsViev'
import {
    initForm,
    fillForm,
    clearForm,
} from './formViev'

initForm({
    onSubmit: contact => saveContact(contact),
})
initContactsView({
    onEdit: (id) => {
        const contact = getContactById(id)

        fillForm(contact)
    },
    onDelete: (id) => {
        remove(id)
            .then(deleteContactById)
            .catch(showError)
    },
})

getList()
    .then(renderList)
    .catch(showError)

function saveContact (contact) {
    if (contact.id) {
        update(contact)
            .then(() => {
                replaceContactEl(contact.id, contact)
                clearForm()
            })
            .catch(showError)
    } else {
        create(contact)
            .then((newContactWithId) => {
                renderContact(newContactWithId)
                clearForm()
            })
            .catch(showError)
    }
}