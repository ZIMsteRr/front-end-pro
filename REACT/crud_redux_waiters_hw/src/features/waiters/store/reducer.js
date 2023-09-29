import {
    ACTION_WAITER_SET_LIST,
    ACTION_WAITER_SET_EDIT_ITEM
} from './actions';

const initialState = {
    waiter: undefined,
    list: [],
};

export function reducer (state = initialState, {type, payload}) {
    switch (type) {
        case ACTION_WAITER_SET_LIST:
            return {
                ...state,
                list: payload
            };
        case ACTION_WAITER_SET_EDIT_ITEM:
            return {
                ...state,
                waiter: payload
            };
        default:
            return state;
    }
}