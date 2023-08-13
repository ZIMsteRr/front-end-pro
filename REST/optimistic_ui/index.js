const userId = 8;

getUser(userId)
    .then((user) => {
        return getAlbum(user.albumId)
    })
    .then((album) => {
        return getPhoto(album.photos)
    })
    .then((photos) => {
        return getPhoto
    })

function getUser () {
    return new Promise((resolve) => {
        const user = {
            name : 'Jason',
            albumIds: [1, 2, 3],
        }

        setTimeout(() => resolve(user), 1000)
    })
}

function getAlbum (albumId) {
    return new Promise((resolve) => {
        const album = {
            id: 42,
            name: 'Wedding',
            photos: [1,2,3]
        }
        setTimeout(() => resolve(user), 1000)
    })
}

function getPhoto (albumId) {
    return new Promise((resolve) => {
        const album = {
            id: 42,
            name: 'xxxx',
            photos: '/qweqwe/qweqeqweqwe.jpg'
        }
        setTimeout(() => resolve(user), 1000)
    })
}