import { OrdersApi } from '../api/server';
import { action } from './reducer';

export const getOrders = () => {
    return (dispatch) => {
        dispatch(action.getListLoading());
        OrdersApi.getList()
            .then((newList) => dispatch(action.getListSuccess(newList)))
            .catch((error) => dispatch(action.getListError(error.message)));
    };
};

export const saveOrder = (order) => {
    return (dispatch) => {
        if (order.id) {
            OrdersApi.update(order.id, order)
                .then((newOrder) => dispatch(action.updateOrder(newOrder)))
                .catch((error) => dispatch(action.getListError(error.message)));
        } else {
            OrdersApi.create(order)
                .then((newOrder) => dispatch(action.createOrder(newOrder)))
                .catch((error) => dispatch(action.getListError(error.message)));
        }
    };
};

export const removeOrder = (id) => {
    return (dispatch) => {
        OrdersApi.delete(id)
            .then(() => dispatch(action.removeOrder(id)))
            .catch((error) => dispatch(action.getListError(error.message)));
    };
};

export const setEditOrder = (order) => {
    return (dispatch) => {
        dispatch(action.setEditOrder(order));
    };
};

export const fetchOrders = () => {
    return async (dispatch) => {
        dispatch(action.getListLoading());
        try {
            const orders = await OrdersApi.getList();
            dispatch(action.getListSuccess(orders));
        } catch (error) {
            dispatch(action.getListError(error.message));
        }
    };
};