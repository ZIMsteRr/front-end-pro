import {createSlice} from "@reduxjs/toolkit";

export const waiterSliceName = 'waiters';

const DEFAULT_WAITER = {
    id: undefined,
    firstName: '',
    phone: '',
}

const initialState = {
    editingWaiter: DEFAULT_WAITER,
    list: [],
    listLoading: false,
    listError: '',
};

export const waiterSlice = createSlice({
    name: 'waiters',
    initialState,
    reducers: {
        getListLoading: (state) => {
            state.listLoading = true;
            state.listError = '';
        },
        getListSuccess: (state, { payload }) => {
            state.list = payload;
            state.listLoading = false;
        },
        getListError: (state, { payload }) => {
            state.listLoading = false;
            state.listError = payload;
        },
        setEditItem: (state, { payload }) => {
            state.editingWaiter = payload;
        },
        removeItem: (state, { payload }) => {
            state.list = state.list.filter((waiter) => waiter.id !== payload)
        },
        createItem: (state, { payload }) => {
            state.editingWaiter = { ...DEFAULT_WAITER};
            state.list = [...state.list, payload]
        },
        updateItem: (state, { payload }) => {
            state.editingWaiter = DEFAULT_WAITER;
            state.list = state.list.map((waiter) => waiter.id === payload.id ? payload : waiter)
        }
    }
});

export const action = waiterSlice.actions;
export const name = waiterSliceName;
export default waiterSlice.reducer;