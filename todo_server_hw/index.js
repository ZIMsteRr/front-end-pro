import {Api} from '../api/Api.js'
import {todoUrl} from '../api/url.js'
import {clearFormData, getFormData, isEmpty, showError,} from '../lib_module/index';

const FORM_SELECTOR = '#todoForm'
const UL_SELECTOR = '#todoList'
const DONE_CLASS = 'done'
const DELETE_BTN_CLASS = 'deleteBtn'
const TODO_ITEM_CLASS = 'todoItem'

const todoApi = new Api(todoUrl);
const form = document.querySelector(FORM_SELECTOR)
const ul = document.querySelector(UL_SELECTOR)
let todoList = [];

form.addEventListener('submit', onFormSubmit)
ul.addEventListener('click', onUlClick)

init()

function init() {
    todoApi.getList()
        .then((list) => {
            todoList = list
            renderTodoList(list)
        })
        .catch(e => showError(e.message))
}

function onFormSubmit (e) {
    e.preventDefault()

    const formElements = form.elements
    const todo = getFormData(formElements)

    if (!isTodoValid(todo)) {
        showError('Поле сообщение не должно быть пустым')
        return
    }

    todoApi.create(todo)
        .then((newTodo) => {
            renderTodo(newTodo)
            clearFormData(formElements)
        })
        .catch(e => showError(e.message))
}

function onUlClick (e) {
    const todoItemEl = getTodoItemEl(e.target)
    const id = Number(todoItemEl.dataset.id)
    const todo = todoList.find((todoItem) => todoItem.id === id)

    if (todoItemEl) {
        if (isDeleteBtn(e.target)) {
            todoApi.delete(id)
                .then(() => deleteTodoEl(todoItemEl))
                .catch(e => showError(e.message))
        } else {
            const newTodo = { ...todo, done: !todo.done }

            todoApi.update(id, newTodo)
                .then(() => {
                    replaceTodoEl(todoItemEl, newTodo)
                    todoList = todoList.map((todoItem) => todoItem.id === id ? newTodo : todoItem)
                })
        }
    }
}

function isTodoValid (todo) {
    return !isEmpty(todo.title)
}

function renderTodoList (list) {
    ul.innerHTML = list.map(generateTodoHtml).join('')
}

function renderTodo (todo) {
    const html = generateTodoHtml(todo)

    ul.insertAdjacentHTML('beforeend', html)
}

function generateTodoHtml (todo) {
    const done = todo.done ? ` ${DONE_CLASS}` : ''

    return `
    <li 
      class="todoItem${done}" 
      data-id="${todo.id}"
    >
      ${todo.title}
      <button class="${DELETE_BTN_CLASS}"><span>[Delete]</span></button>
    </li>
  `
}

function getTodoItemEl (el) {
    return el.closest(`.${TODO_ITEM_CLASS}`)
}

function isDeleteBtn (el) {
    return el.closest(`.${DELETE_BTN_CLASS}`)
}

function deleteTodoEl (el) {
    return el.remove()
}

function replaceTodoEl (oldTodoEl, todo) {
    oldTodoEl.outerHTML = generateTodoHtml(todo)
}