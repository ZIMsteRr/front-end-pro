import React from 'react';

export default function OrderDetails({ order }) {
    const total = order.dishes.reduce((acc, dish) => acc + dish.count * dish.price, 0);

    return (
        <div className="order-details">
            <h2>Order {order.id}</h2>
            <div>
                <p>Waiter: {order.waiterId}</p>
                <p>Table: {order.tableId}</p>
            </div>
            <div>
                <p>Dishes:</p>
                <ul>
                    {order.dishes.map((dish) => (
                        <li key={dish.id}>
                            {dish.name} x{dish.count}
                        </li>
                    ))}
                </ul>
            </div>
            <p>Total: {total}</p>
        </div>
    );
}