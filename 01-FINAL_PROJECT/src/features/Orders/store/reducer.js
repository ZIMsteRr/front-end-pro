import { createSlice } from '@reduxjs/toolkit';

export const ordersSliceName = 'orders'

const DEFAULT_ORDER = {
    id: undefined,
    waiterId: '',
    tableId: '',
    orderId: '',
    dishes: [],
};

const initialState = {
    editingOrder: DEFAULT_ORDER,
    list: [],
    listLoading: false,
    listError: '',
};

export const ordersSlice = createSlice({
    name: 'orders',
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
        setEditOrder: (state, { payload }) => {
            state.editingOrder = payload;
        },
        removeOrder: (state, { payload }) => {
            state.list = state.list.filter((order) => order.id !== payload);
        },
        createOrder: (state, { payload }) => {
            state.editingOrder = { ...DEFAULT_ORDER };
            state.list = [...state.list, payload];
        },
        updateOrder: (state, { payload }) => {
            state.editingOrder = DEFAULT_ORDER;
            state.list = state.list.map((order) => (order.id === payload.id ? payload : order));
        },
    },
});

export const action = ordersSlice.actions;
export const name = ordersSliceName;
export default ordersSlice.reducer;