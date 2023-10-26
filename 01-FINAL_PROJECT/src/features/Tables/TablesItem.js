import React from 'react';
import { useDispatch } from 'react-redux';
import { useLang } from '../../hooks/LanguageContext';
import { removeItem } from './store/thunks';

export function TablesItem({ table }) {
    const lang = useLang();
    const dispatch = useDispatch();

    const onDeleteBtnClick = () => {
        dispatch(removeItem(table.id));
    };

    return (
        <tr>
            <td>{table.number}</td>
            <td>
                <button onClick={onDeleteBtnClick}>
                    {lang === 'en' ? 'Delete' : 'Видалити'}
                </button>
            </td>
        </tr>
    );
}