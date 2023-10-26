import React from 'react';
import { useDispatch } from 'react-redux';
import { useLang } from '../../hooks/LanguageContext';
import { Link } from 'react-router-dom';
import { removeItem } from './store/thunks';

export function DishesItem({ dish }) {
    const lang = useLang();
    const dispatch = useDispatch();

    const onDeleteBtnClick = () => {
        dispatch(removeItem(dish.id));
    };

    return (
        <tr>
            <td>{dish.name}</td>
            <td>{dish.description}</td>
            <td>{dish.price}</td>
            <td>
                <Link to={`/dishes/edit/${dish.id}`}>
                    <button>{lang === 'en' ? 'Edit' : 'Редагувати'}</button>
                </Link>
                <button onClick={onDeleteBtnClick}>
                    {lang === 'en' ? 'Delete' : 'Видалити'}
                </button>
            </td>
        </tr>
    );
}