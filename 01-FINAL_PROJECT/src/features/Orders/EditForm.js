import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveOrder } from './store/thunks';

export function EditForm({ order, lang }) {
    const dispatch = useDispatch();
    const [editingOrder, setEditingOrder] = useState(order || {});

    const handleSaveOrder = () => {
        dispatch(saveOrder(editingOrder));
        setEditingOrder({});
    };

    return (
        <div>
            <input
                type="text"
                value={editingOrder.orderId}
                onChange={(e) => setEditingOrder({ ...editingOrder, orderId: e.target.value })}
            />
            {/* Добавьте поля для официанта, столика и другие свойства заказа */}
            <button onClick={handleSaveOrder}>
                {lang === 'en' ? 'Save' : 'Зберегти'}
            </button>
        </div>
    );
}