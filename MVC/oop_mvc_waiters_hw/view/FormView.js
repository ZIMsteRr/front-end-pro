import {
    getFormData,
    fillFormData,
    clearFormData,
    isEmpty,
    showError,
} from '../../../lib_module/index.js'

export class FormView {
    constructor (options) {
        this.options = options;
        this.form = this.init();

        this.bindEvents();
    }

    init() {
        const div = document.createElement('div');

        div.innerHTML = `
            <form id="waiterForm" class="form">
                <input type="hidden" name="id" id="id" class="formInput">
                <input type="text" name="firstName" id="firstName" class="formInput">
                <input type="text" name="phone" id="phone" class="formInput">
                <button type="submit">Save</button>
            </form>
        `
        return div.children[0];
    }
    bindEvents() {
        this.form.addEventListener('submit', this.onFormSubmit.bind(this))
    }

    appendTo(rootEl) {
        rootEl.append(this.form)
    }

    onFormSubmit(e) {
        e.preventDefault();

        const waiter = getFormData(this.form.elements);
        console.log('Waiter data submitted:', waiter);

        if (!this.isWaiterValid(waiter)) {
            showError('Invalid form data');
            return;
        }

        const editId = waiter.id;
        if (editId) {
            console.log('Editing waiter with ID:', editId);
            this.options.onSave(waiter.id, waiter);
        } else {
            console.log('Creating new waiter:', waiter);
            this.options.onSave(waiter);
        }

        this.clearForm();
    }

        isWaiterValid(waiter)
        {
            return !isEmpty(waiter.firstName)
                && !isEmpty(waiter.phone);
        }

    fillForm(waiter) {
        fillFormData(this.form.elements, waiter)
        console.log('Filling form with data:', waiter);
    }

    clearForm() {
        clearFormData(this.form.elements)
    }

    setEditId(id) {
        this.form.elements['id'].value = id;
    }
}



