export const ACTION_WAITER_SET_LIST = 'WAITER_SET_LIST';
export const ACTION_WAITER_SET_ITEM = 'WAITER_SET_ITEM';
export const ACTION_WAITER_SET_EDIT_ITEM = 'WAITER_SET_EDIT_ITEM';
export const ACTION_WAITER_REMOVE_ITEM = 'WAITER_REMOVE_ITEM';

export const actionSetList = (list) => ({
    type: ACTION_WAITER_SET_LIST,
    payload: list
});
export const actionSetEditItem = (waiter) => ({
    type: ACTION_WAITER_SET_EDIT_ITEM,
    payload: waiter
});