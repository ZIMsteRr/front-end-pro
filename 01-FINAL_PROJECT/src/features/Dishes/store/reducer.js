import { createSlice } from '@reduxjs/toolkit';

export const dishesSliceName = 'dishes';

const DEFAULT_DISH = {
    id: undefined,
    name: '',
    description: '',
    price: 0,
};

const initialState = {
    editingDish: DEFAULT_DISH,
    list: [],
    listLoading: false,
    listError: '',
};

export const dishesSlice = createSlice({
    name: 'dishes',
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
            state.editingDish = payload;
        },
        removeItem: (state, { payload }) => {
            state.list = state.list.filter((dish) => dish.id !== payload);
        },
        createItem: (state, { payload }) => {
            state.editingDish = { ...DEFAULT_DISH };
            state.list = [...state.list, payload];
        },
        updateItem: (state, { payload }) => {
            state.editingDish = DEFAULT_DISH;
            state.list = state.list.map((dish) => (dish.id === payload.id ? payload : dish));
        },
    },
});

export const action = dishesSlice.actions;
export const name = dishesSliceName;
export default dishesSlice.reducer;