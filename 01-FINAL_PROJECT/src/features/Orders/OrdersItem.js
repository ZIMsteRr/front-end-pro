import React from 'react';
import { useDispatch } from 'react-redux';
import { removeOrder, setEditOrder } from './store/thunks';

export function OrdersItem({ order, lang }) {
    const dispatch = useDispatch();

    const handleEditOrder = () => {
        dispatch(setEditOrder(order));
    };

    const handleRemoveOrder = () => {
        dispatch(removeOrder(order.id));
    };

    return (
        <tr>
            <td>{order.orderId}</td>
            <td>{order.tableId}</td>
            <td>{order.waiterId}</td>
            <td>
                <button onClick={handleEditOrder}>
                    {lang === 'en' ? 'Edit' : 'Редагувати'}
                </button>
                <button onClick={handleRemoveOrder}>
                    {lang === 'en' ? 'Delete' : 'Видалити'}
                </button>
            </td>
        </tr>
    );
}