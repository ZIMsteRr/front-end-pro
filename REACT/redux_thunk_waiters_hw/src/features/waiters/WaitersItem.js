import React from 'react';
import style from './WaitersItem.module.css'
import {actionRemoveItem, actionSetEditItem} from "./store/actions";
import {useDispatch} from "react-redux";

export function WaitersItem ({ waiter }) {
    const dispatch = useDispatch();
    const onEditBtnClick = () => {
        dispatch(actionSetEditItem(waiter));
    }

    const onDeleteBtnClick = () => {
        dispatch(actionRemoveItem(waiter.id));
    };

    return (
        <tr>
            <td className={style.td}>{waiter.firstName}</td>
            <td className={style.td}>{waiter.phone}</td>
            <td>
                <button className={style.action} onClick={onEditBtnClick}>Edit</button>
                <button className={style.action} onClick={onDeleteBtnClick}>Delete</button>
            </td>
        </tr>
    )
}