export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_ALBUMS_SUCCESS = "FETCH_ALBUMS_SUCCESS";
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            dispatch({ type: FETCH_USERS_SUCCESS, users: data });
        } catch (error) {
            console.error(error);
        }
    };
};

export const fetchAlbums = (userId) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
            const data = await response.json();
            dispatch({ type: FETCH_ALBUMS_SUCCESS, albums: data });
        } catch (error) {
            console.error(error);
        }
    };
};

export const fetchPhotos = (albumId) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
            const data = await response.json();
            dispatch({ type: FETCH_PHOTOS_SUCCESS, photos: data });
        } catch (error) {
            console.error(error);
        }
    };
};