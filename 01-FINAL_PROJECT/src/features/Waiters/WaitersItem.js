import React from 'react';
import {useDispatch} from "react-redux";
import {useLang} from "../../hooks/LanguageContext";
import {Link} from "react-router-dom";
import {removeItem} from "./store/thunks";

export function WaitersItem ({ waiter }) {
    const lang = useLang()
    const dispatch = useDispatch();

    const onDeleteBtnClick = () => {
        dispatch(removeItem(waiter.id));
    };

    return (
        <tr>
            <td>{waiter.firstName}</td>
            <td>{waiter.phone}</td>
            <td>
                <Link to={`/waiters/edit/${waiter.id}`}><button>{lang === 'en' ? 'Edit' : 'Редагувати'}</button></Link>
                <button onClick={onDeleteBtnClick}>{lang === 'en' ? 'Delete' : 'Видалити'}</button>
            </td>
        </tr>
    )
}