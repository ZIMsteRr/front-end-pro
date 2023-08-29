import { WaiterCollection } from '../model/WaiterCollection.js';
import { FormView } from '../view/FormView.js';
import { ListView } from '../view/ListView.js';

export class WaiterController {
    constructor(rootEl) {
        this.rootEl = rootEl;
        this.waiterCollection = new WaiterCollection();
        this.formView = new FormView({
            //onEdit: (id, waiter) => this.editWaiter(id, waiter),
            onSave: (waiter) => this.saveWaiter(waiter),
        });
        this.listView = new ListView({
            onEdit: id => this.editWaiter(id),
            onDelete: id => this.deleteWaiter(id),
        });

        this.formView.appendTo(this.rootEl);
        this.listView.appendTo(this.rootEl);

        this.waiterCollection.getList().then(list => {
            this.listView.renderWaiters(list);
        });
    }

    saveWaiter(waiter) {
        if (waiter.id) {
            this.waiterCollection.update(waiter)
                .then(updatedWaiter => {
                    this.listView.replaceWaiter(waiter.id, updatedWaiter);
                    this.formView.clearForm();
                })
                .catch(error => console.error('Error updating waiter:', error));
        } else {
            this.waiterCollection.create(waiter)
                .then(newWaiterWithId => {
                    this.listView.renderWaiter(newWaiterWithId);
                    this.formView.clearForm();
                })
                .catch(error => console.error('Error creating waiter:', error));
        }
    }

    editWaiter(id) {
        const waiter = this.waiterCollection.getWaiterById(id);
        if (waiter) {
            this.formView.fillForm(waiter);
            this.formView.setEditId(id);
        }
    }

    deleteWaiter(id) {
        const confirmed = confirm('Are you sure you want to delete this waiter?');
        if (confirmed) {
            this.waiterCollection.remove(id)
                .then(() => {
                    this.listView.deleteWaiter(id);
                })
                .catch(error => console.error('Error deleting waiter:', error));
        }
    }
}