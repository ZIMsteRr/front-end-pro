import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from './store/thunks';
import { useLang } from '../../hooks/LanguageContext';
import {OrdersItem} from "./OrdersItem";

export function OrdersList() {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.list);
    const lang = useLang();

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    return (
        <div>
            <h1>{lang === 'en' ? 'Orders' : 'Замовлення'}</h1>
            <Link to="/orders/edit">
                <button>{lang === 'en' ? 'Add Order' : 'Додати замовлення'}</button>
            </Link>
            <table>
                <thead>
                <tr>
                    <th>{lang === 'en' ? 'Order Number' : 'Номер замовлення'}</th>
                    <th>{lang === 'en' ? 'Table Number' : 'Номер столика'}</th>
                    <th>{lang === 'en' ? 'Waiter' : 'Офіціант'}</th>
                    <th>{lang === 'en' ? 'Actions' : 'Дії'}</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order) => (
                    <OrdersItem key={order.id} order={order} />
                ))}
                </tbody>
            </table>
        </div>
    );
}