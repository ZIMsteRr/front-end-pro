import React, {useContext} from 'react';
import style from './WaitersItem.module.css'
import {actionRemoveItem, actionSetEditItem} from "./store/actions";
import {useDispatch} from "react-redux";
import {useLang} from "../../hooks/LanguageContext";

export function WaitersItem ({ waiter }) {
    const lang = useLang()
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
                <button className={style.action} onClick={onEditBtnClick}>{lang === 'en' ? 'Edit' : 'Видалити'}</button>
                <button className={style.action} onClick={onDeleteBtnClick}>Delete</button>
            </td>
        </tr>
    )
}