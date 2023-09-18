import { WaiterCollection } from '../model/WaiterCollection.js';
import { FormView } from '../view/FormView.js';
import { ListView } from '../view/ListView.js';

export class WaiterController {
    constructor(rootEl) {
        this.rootEl = rootEl;
        this.waiterCollection = new WaiterCollection();
        this.formView = new FormView({
            onSave: async (waiter) => await this.saveWaiter(waiter),
        });
        this.listView = new ListView({
            onEdit: (id) => this.editWaiter(id),
            onDelete: (id) => this.deleteWaiter(id),
        });

        this.formView.appendTo(this.rootEl);
        this.listView.appendTo(this.rootEl);

        this.initializeWaiters().then(r => console.log(r));
    }

    async initializeWaiters() {
        try {
            const list = await this.waiterCollection.getList();
            this.listView.renderWaiters(list);

        } catch (error) {
            console.error('Error fetching waiters:', error);
        }
    }

    async saveWaiter(waiter) {
        try {
            if (waiter.id) {
                const updatedWaiter = await this.waiterCollection.update(waiter);
                this.listView.replaceWaiter(waiter.id, updatedWaiter);
            } else {
                const newWaiterWithId = await this.waiterCollection.create(waiter);
                this.listView.renderWaiter(newWaiterWithId);
            }
            this.formView.clearForm();

        } catch (error) {
            console.error('Error saving waiter:', error);
        }
    }

    editWaiter(id) {
        const waiter = this.waiterCollection.getWaiterById(id);
        if (waiter) {
            this.formView.fillForm(waiter);
            this.formView.setEditId(id);
        }
    }

    async deleteWaiter(id) {
        const confirmed = confirm('Are you sure you want to delete this waiter?');
        if (confirmed) {
            try {
                await this.waiterCollection.remove(id);
                this.listView.deleteWaiter(id);

            } catch (error) {
                console.error('Error deleting waiter:', error);
            }
        }
    }
}