const EDIT_BTN_CLASS = 'editBtn'
const DELETE_BTN_CLASS = 'deleteBtn'
const WAITER_ITEM_CLASS = 'contactItem'

export class ListView {
    constructor(options) {
        this.options = options;
        this.container = this.init();
        this.waiterContainer = this.container.querySelector('#waiterContainer');

        this.bindEvents();
    }

    init() {
        const div = document.createElement('div');

        div.innerHTML = `
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
        
            <tbody id="waiterContainer"></tbody>
        </table>
    `;

        return div.children[0];
    }

    bindEvents() {
        this.waiterContainer.addEventListener('click', this.onWaiterContainerClick.bind(this));
    }

    onWaiterContainerClick(e) {
        const target = e.target;
        const waiterEl = this.findWaiterEl(target);
        const id = Number(waiterEl?.dataset?.id);

        if (id) {
            if (this.isEditButtonClicked(target)) {
                this.options.onEdit(id);
            } else if (this.isDeleteButtonClicked(target)) {
                this.options.onDelete(id);
            }
        }
    }

    appendTo(rootEl) {
        rootEl.append(this.container);
    }

    isEditButtonClicked(el) {
        return el.closest(`.${EDIT_BTN_CLASS}`);
    }

    isDeleteButtonClicked(el) {
        return el.closest(`.${DELETE_BTN_CLASS}`);
    }

    findWaiterEl(el) {
        return el.closest(`.${WAITER_ITEM_CLASS}`);
    }

    renderWaiters(waiters) {
        this.waiterContainer.innerHTML = waiters.map(this.generateWaiterHtml).join('');
    }

    renderWaiter(waiter) {
        this.waiterContainer.insertAdjacentHTML('beforeend', this.generateWaiterHtml(waiter));
    }

    generateWaiterHtml(waiter) {
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

    replaceWaiter(id, waiter) {
        const oldWaiterEl = this.findWaiterElById(id);
        oldWaiterEl.outerHTML = this.generateWaiterHtml(waiter);
    }

    findWaiterElById(id) {
        return this.waiterContainer.querySelector(`[data-id="${id}"]`);
    }

    deleteWaiter(id) {
        const waiterEl = this.findWaiterElById(id);
        if (waiterEl) {
            waiterEl.remove();
        } else {
            console.error('Waiter element not found');
        }
    }
}