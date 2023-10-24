import React from 'react';
import style from './WaitersItem.module.css'
import {actionRemoveItem} from "./store/actions";
import {useDispatch} from "react-redux";
import {useLang} from "../../hooks/LanguageContext";
import {Link} from "react-router-dom";

export function WaitersItem ({ waiter }) {
    const lang = useLang()
    const dispatch = useDispatch();

    const onDeleteBtnClick = () => {
        dispatch(actionRemoveItem(waiter.id));
    };

    return (
        <tr>
            <td className={style.td}>{waiter.firstName}</td>
            <td className={style.td}>{waiter.phone}</td>
            <td>
                <Link to={`/waiters/edit/${waiter.id}`}><button className={style.action}>{lang === 'en' ? 'Edit' : 'Редагувати'}</button></Link>
                <button className={style.action} onClick={onDeleteBtnClick}>{lang === 'en' ? 'Delete' : 'Видалити'}</button>
            </td>
        </tr>
    )
}