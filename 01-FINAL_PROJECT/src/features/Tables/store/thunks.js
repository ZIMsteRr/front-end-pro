import { TablesApi } from '../api/server';
import { action } from './reducer';

export const fetchTablesAsync = () => {
    return (dispatch) => {
        dispatch(action.getListLoading());
        TablesApi.getList()
            .then((newList) => dispatch(action.getListSuccess(newList)))
            .catch((error) => dispatch(action.getListError(error.message)));
    };
};

export const getOneItem = (id) => {
    return (dispatch) => {
        TablesApi.getOne(id)
            .then((table) => dispatch(action.setEditTable(table)))
            .catch((error) => dispatch(action.getListError(error.message)))
    };
};

export const saveItem = (table) => {
    return (dispatch) => {
        if (table.id) {
            TablesApi.update(table.id, table)
                .then((newTable) => dispatch(action.updateTable(newTable)))
                .catch((error) => dispatch(action.getListError(error.message)))
        } else {
            TablesApi.create(table)
                .then((newTable) => dispatch(action.createTable(newTable)))
                .catch((error) => dispatch(action.getListError(error.message)))
        }
    };
};

export const removeItem = (id) => {
    return (dispatch) => {
        TablesApi.delete(id)
            .then(() => dispatch(action.removeTable(id)))
            .catch((error) => dispatch(action.getListError(error.message)))
    };
};