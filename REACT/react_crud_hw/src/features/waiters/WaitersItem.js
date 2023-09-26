import React from 'react';
import style from './WaitersItem.module.css'

export function WaitersItem ({ waiter, onWaitersDelete, onWaitersEdit }) {
    return (
        <tr>
            <td className={style.td}>{waiter.firstName}</td>
            <td className={style.td}>{waiter.phone}</td>
            <td>
                <button className={style.action} onClick={() => onWaitersEdit(waiter)}>Edit</button>
                <button className={style.action} onClick={() => onWaitersDelete(waiter.id)}>Delete</button>
            </td>
        </tr>
    )
}