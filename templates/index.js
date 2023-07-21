function renderTodo (todo) {
    const template = document.querySelector('#someID').innerHTML

    ul.insertAdjacentHTML('beforeend', template.replace('{{ message }}', todo.message))
}

function clear () {
    input.value = '';
}