const ws = new WebSocket('ws://localhost:4000/chat');
const form = document.querySelector('#message-form');
const chat = document.querySelector('.chatContainer')

form.addEventListener('submit' , onFormSubmit)

function onFormSubmit (event) {
    event.preventDefault()

    const nameInput = document.querySelector('#name-input');
    const messageInput = document.querySelector('#message-input');

    const username = nameInput.value;
    const message = messageInput.value;
    const chatMessage = {
        username,
        message
    };

    ws.send(JSON.stringify(chatMessage))

    nameInput.value = '';
    messageInput.value = '';
}

ws.onopen = function (event){
    console.log('onopen', event)

    ws.send(JSON.stringify({
        username: 'Ughh',
        message: 'Another human'
    }));
};

ws.onclose = function (event){
    console.log('onclose', event)
};

ws.onmessage = function (event){
    console.log('onmessage', event);
    const chatMessage = JSON.parse(event.data);

    chat.insertAdjacentHTML('beforeend' , `<p>${chatMessage.username}: ${chatMessage.message}</p>`)
};

ws.onerror = function (event) {
    console.log('onerror', event);
};