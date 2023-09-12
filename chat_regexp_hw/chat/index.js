import  { Chat } from './Chat.js';
import { Form } from './Form.js';
import { View } from './View.js'

const ws = new WebSocket('ws://localhost:4000/chat');
const form = document.querySelector('#message-form');
const chatContainer = document.querySelector('.chatContainer');

const view = new View(chatContainer);
const chat = new Chat(ws, view);
const chatForm = new Form(form, ws);