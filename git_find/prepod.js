const form = document.querySelector('#userForm')
const container = document.querySelector('#userInfoContainer')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit (e) {
    e.preventDefault();

    const formElements = form.elements
    const user = getFormData(formElements)

    if (!isUserValid(user)) {
        showError('Invalid User data')
        return;
    }

    findUser(user)
        .then((foudUser) => {
            renderUser(foudUser)
            clearFormData(formElements)
        })
        .catch((error) => {
            showError(error.message)
        })
}

function isUserValid (user) {
    return user.name !== '' && user.name.length > 2;
}

function findUser (user) { // Promise
    return fetch(`https://api.github.com/users/${user.name}`)
        .then((response) => {
            if (response.ok) { // 200 - 299
                return response.json()
            }

            throw new Error(`${response.status} ${response.statusText}`);
        })
        .catch((error) => {
            throw new Error(`User not found: ${error.message}`);
        })
}

function renderUser (user) {
    container.innerHTML = generateHtml(user);
}

function generateHtml (user) {
    return `
    <div className="userInfoRow">
      <img src="${user.avatar_url}"/>
      <p>Repos: ${user.public_repos}</p>
      <p>Followers: ${user.followers}</p>
      <p>Following: ${user.following}</p>
    </div>
  `
}