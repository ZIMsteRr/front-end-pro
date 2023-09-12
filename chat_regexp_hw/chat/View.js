export class View {
    constructor(chatContainer) {
        this.chatContainer = chatContainer;
    }

    displayMessage(chatMessage) {
        this.chatContainer.insertAdjacentHTML(
            'beforeend',
            `<p>${chatMessage.username}: ${chatMessage.message}</p>`
        );
    }
}