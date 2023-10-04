import {
    ACTION_COUNTER_SET,
    ACTION_COUNTER_INC,
    ACTION_COUNTER_DEC
} from './actions';

const initialState = { count: 0 };

export function reducer (state = initialState, {type, payload}) {
    switch (type) {
        case ACTION_COUNTER_SET:
            return {
                ...state,
                count: payload
            };
        case ACTION_COUNTER_INC:
            return {
                ...state,
                count: state.count + 1
            };
        case ACTION_COUNTER_DEC:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
}