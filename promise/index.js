// const promise = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve(), 1000)
//     setTimeout(() => reject(new Error('Stupid russians')), 1000)
// })
//
// console.log(promise)
//
// promise
//     .then(() => {
//         console.log('Homework Done!')
//     })
//     .catch(() => {
//         console.log('Homework is not Done!')
//     })

// LoadScript('./react.js')
//     .then((data) => {
//
//         return loadScript('./Tabs.js')
//     })
//
// function LoadScript(path, callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const scriptContent = 'file content';
//             const error = null;
//
//             resolve(scriptContent);
//         }, 100)
//     })
// }

const btn = document.querySelector('#getWaitersBtn')
const list = document.querySelector('#list')

btn.addEventListener('click', onBtnClick)

function onBtnClick () {
    fetch('address')
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                console.log('Can not do this')
            }
        })
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(`Some sht happened: ${error.message}`)
        })
}

function renderWaiters (waitersList) {
    list.innerHTML = list.map(generateWaiterHtml).join('')
}

function generateWaiterHtml (waiter) {
    return `
        <div>
            <h2>${waiter.firstName}</h2>
        </div>
    `
}