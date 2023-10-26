import { createSlice } from '@reduxjs/toolkit';

export const tablesSliceName = 'tables'

const DEFAULT_TABLE = {
    id: undefined,
    number: '',
};

const initialState = {
    editingTable: DEFAULT_TABLE,
    list: [],
    listLoading: false,
    listError: '',
};

export const tablesSlice = createSlice({
    name: 'tables',
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
        setEditTable: (state, { payload }) => {
            state.editingTable = payload;
        },
        removeTable: (state, { payload }) => {
            state.list = state.list.filter((table) => table.id !== payload);
        },
        createTable: (state, { payload }) => {
            state.editingTable = { ...DEFAULT_TABLE };
            state.list = [...state.list, payload];
        },
        updateTable: (state, { payload }) => {
            state.editingTable = DEFAULT_TABLE;
            state.list = state.list.map((table) => (table.id === payload.id ? payload : table));
        },
    },
});

export const action = tablesSlice.actions;
export const name = tablesSliceName;
export default tablesSlice.reducer;