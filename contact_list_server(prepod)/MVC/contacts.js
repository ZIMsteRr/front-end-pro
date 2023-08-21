import { Api } from '../../api/Api.js'
import { contactsUrl } from '../../api/url.js'

const api = new Api(contactsUrl)
let contactList = []

export function getList () {
    return api
        .getList()
        .then((list) => {
            setContacts(list)

            return list
        })
}

export function remove (id) {
    return api
        .delete(id)
        .then(() => {
            deleteContactInList(id)

            return id
        })
}

export function create (contact) {
    return api
        .create(contact)
        .then((newContactWithId) => {
            addContactInList(newContactWithId)

            return newContactWithId
        })
}

export function update (contact) {
    return api
        .update(contact.id, contact)
        .then(() => {
            replaceContactInList(contact.id, contact)

            return contact
        })
}

export function setContacts (list) {
    contactList = list
}

export function getContacts () {
    return contactList
}

export function getContactById (id) {
    return contactList.find(contact => contact.id === id)
}

export function replaceContactInList (id, contact) {
    contactList = contactList.map(c => c.id === Number(id) ? { ...contact, id: Number(id) } : c)
}

export function addContactInList (contact) {
    contactList.push(contact)
}

export function deleteContactInList (id) {
    contactList = contactList.filter(contact => contact.id !== Number(id))
}