'use strict'

const searchBtn = document.querySelector('#searchBtn');
const userInfoContainer = document.querySelector('#userInfo');

searchBtn.addEventListener('click', onSearchBtnClick);

function onSearchBtnClick() {
    const username = document.getElementById('usernameInput').value;
    if (username) {
        fetchUserInfo(username)
            .then(displayUserInfo)
            .catch(displayError);
    }
}

function fetchUserInfo(username) {
    const apiUrl = `https://api.github.com/users/${username}`;
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Пользователь не найден');
            }
            return response.json();
        });
}

function displayUserInfo(userInfo) {
    userInfoContainer.innerHTML = `
        <img src="${userInfo.avatar_url}" alt="Avatar">
        <p>Количество репозиториев: ${userInfo.public_repos}</p>
        <p>Количество фолловеров: ${userInfo.followers}</p>
        <p>Количество наблюдаемых: ${userInfo.following}</p>
    `;
}

function displayError(error) {
    userInfoContainer.innerHTML = `<p>${error.message}</p>`;
}