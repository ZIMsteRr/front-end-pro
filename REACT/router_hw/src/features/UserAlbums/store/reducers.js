import { combineReducers } from "redux";
import {
    FETCH_USERS_SUCCESS,
    FETCH_ALBUMS_SUCCESS,
    FETCH_PHOTOS_SUCCESS,
} from "./actions";

const usersReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return action.users;
        default:
            return state;
    }
};

const albumsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALBUMS_SUCCESS:
            return action.albums;
        default:
            return state;
    }
};

const photosReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_PHOTOS_SUCCESS:
            return action.photos;
        default:
            return state;
    }
};

export default combineReducers({
    users: usersReducer,
    albums: albumsReducer,
    photos: photosReducer,
});