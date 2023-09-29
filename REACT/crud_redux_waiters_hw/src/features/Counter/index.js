import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {set,inc,dec} from "./store/actions";

export function Counter () {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    const [num, setNum] = useState(0);

    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>

            <label htmlFor='count'>New Count: </label>
            <input value={num} onChange={e => setNum(Number(e.target.value))} type='number' id='count' />

            <button onClick={() => dispatch(set(num))}>Set</button>
            <button onClick={() => dispatch(inc())}>+</button>
            <button onClick={() => dispatch(dec())}>-</button>
        </div>
    )}