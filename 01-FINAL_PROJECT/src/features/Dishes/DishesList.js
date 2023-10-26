import { DishesItem } from './DishesItem';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filters } from './Filters';
import { filterDishes } from './utils/filterDishes';
import { getList } from './store/thunks';
import {useLang} from "../../hooks/LanguageContext";

export function DishesList() {
    const dispatch = useDispatch();
    const dishes = useSelector((state) => state.dishes.list);
    const lang = useLang();

    useEffect(() => {
        dispatch(getList());
    }, [dispatch]);

    return (
        <div>
            <h1>{lang === 'en' ? 'Dishes' : 'Блюда'}</h1>
            <Link to="/dishes/edit">
                <button>{lang === 'en' ? 'Add Dish' : 'Додати блюдо'}</button>
            </Link>
            <Filters />
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filterDishes(dishes).map((dish) => (
                    <DishesItem key={dish.id} dish={dish} />
                ))}
                </tbody>
            </table>
        </div>
    );
}