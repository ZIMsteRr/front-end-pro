import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLang } from '../../hooks/LanguageContext';
import { getOrders } from './store/thunks';
import { EditForm } from './EditForm';
import { OrdersItem } from './OrdersItem';

export function Orders() {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.list);
    const lang = useLang();

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    const [editingOrder, setEditingOrder] = useState(null);

    return (
        <div>
            <h1>{lang === 'en' ? 'Orders' : 'Замовлення'}</h1>
            <EditForm order={editingOrder} lang={lang} />
            <table>
                <thead>
                <tr>
                    <th>{lang === 'en' ? 'Order ID' : 'Номер замовлення'}</th>
                    <th>{lang === 'en' ? 'Table' : 'Стіл'}</th>
                    <th>{lang === 'en' ? 'Waiter' : 'Офіціант'}</th>
                    <th>{lang === 'en' ? 'Actions' : 'Дії'}</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order) => (
                    <OrdersItem key={order.id} order={order} lang={lang} />
                ))}
                </tbody>
            </table>
        </div>
    );
}