import { DishesApi } from '../api/server';
import { action } from './reducer';

export const getList = () => {
    return (dispatch) => {
        dispatch(action.getListLoading());
        DishesApi.getList()
            .then((newList) => dispatch(action.getListSuccess(newList)))
            .catch((error) => dispatch(action.getListError(error.message)));
    };
};

export const saveItem = (dish) => {
    return (dispatch) => {
        if (dish.id) {
            DishesApi.update(dish.id, dish).then((newDish) => {
                dispatch(action.updateItem(newDish));
            });
        } else {
            DishesApi.create(dish).then((newDish) => dispatch(action.createItem(newDish)));
        }
    };
};

export const getOneItem = (id) => {
    return (dispatch) => {
        DishesApi.getOne(id).then((dish) => dispatch(action.setEditItem(dish)))
    };
};

export const removeItem = (id) => {
    return (dispatch) => {
        DishesApi.delete(id).then(() => dispatch(action.removeItem(id)))
    };
};