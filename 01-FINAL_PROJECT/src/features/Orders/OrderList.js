import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from './store/thunks';
import OrderDetails from './OrderDetails';

export function OrdersList() {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.list);

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    return (
        <div>
            <h1>Orders</h1>
            <div className="order-list">
                {orders.map((order) => (
                    <OrderDetails key={order.id} order={order} />
                ))}
            </div>
        </div>
    );
}