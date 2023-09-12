export class Chat {
    constructor(ws, messageCallback) {
        this.ws = ws;
        this.messageCallback = messageCallback;

        this.setupWebSocket();
    }

    setupWebSocket() {
        this.ws.onopen = (event) => {
            console.log('onopen', event);
            this.ws.send(JSON.stringify({
                username: 'Ughh',
                message: 'Another human'
            }));
        };

        this.ws.onclose = (event) => {
            console.log('onclose', event);
        };

        this.ws.onmessage = (event) => {
            console.log('onmessage', event);
            const chatMessage = JSON.parse(event.data);
            this.messageCallback(chatMessage);
        };

        this.ws.onerror = (event) => {
            console.log('onerror', event);
        };
    }
}