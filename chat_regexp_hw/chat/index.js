import  { Chat } from './Chat.js';
import { Form } from './Form.js';

const ws = new WebSocket('ws://localhost:4000/chat');
const form = document.querySelector('#message-form');
const chatContainer = document.querySelector('.chatContainer');

const chat = new Chat(ws, chatContainer);
const chatForm = new Form(form, ws);