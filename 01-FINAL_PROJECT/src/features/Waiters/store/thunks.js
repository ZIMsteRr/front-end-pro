import {WaitersApi} from "../api/server";
import {action} from "./reducer";

export const getList = () => {
    return (dispatch) => {
        dispatch(action.getListLoading());
        WaitersApi
            .getList()
            .then((newList) => dispatch(action.getListSuccess(newList)))
            .catch((error) => dispatch(action.getListError(error.message)));
    }
}

export const saveItem = (waiter) => {
    return (dispatch) => {
        if (waiter.id) {
            WaitersApi.update(waiter.id, waiter).then((newWaiter) => {
                dispatch(action.updateItem(newWaiter));
            });
        } else {
            WaitersApi.create(waiter).then((newWaiter) => dispatch(action.createItem(newWaiter)));
        }
    }
}

export const getOneItem = (id) => {
    return (dispatch) => {
        WaitersApi.getOne(id).then((waiter) => dispatch(action.setEditItem(waiter)));
    }
};

export const removeItem = (id) => {
    return (dispatch) => {
        WaitersApi.delete(id).then(() => dispatch(action.removeItem(id)));
    }
};
