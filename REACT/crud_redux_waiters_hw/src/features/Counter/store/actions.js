export const ACTION_COUNTER_SET = 'COUNTER_SET';
export const ACTION_COUNTER_INC = 'COUNTER_INC';
export const ACTION_COUNTER_DEC = 'COUNTER_DEC';

export const set = (count) => ({
    type: ACTION_COUNTER_SET,
    payload: count
});
export const inc = () => ({ type: ACTION_COUNTER_INC });
export const dec = () => ({ type: ACTION_COUNTER_DEC });