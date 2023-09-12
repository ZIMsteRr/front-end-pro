export class Form {
    constructor(form, ws) {
        this.form = form;
        this.ws = ws;

        this.setupForm();
    }

    setupForm() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();

            const nameInput = this.form.querySelector('#name-input');
            const messageInput = this.form.querySelector('#message-input');

            const username = nameInput.value;
            const message = messageInput.value;
            const chatMessage = {
                username,
                message
            };

            this.ws.send(JSON.stringify(chatMessage));

            nameInput.value = '';
            messageInput.value = '';
        });
    }
}