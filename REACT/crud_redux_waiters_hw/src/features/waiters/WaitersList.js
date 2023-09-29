import { WaitersItem } from './WaitersItem';
import style from './WaitersList.module.css';

export function WaitersList ({ waiters, onWaitersDelete, onWaitersEdit }) {
    return (
        <table className={style.table}>
            <thead>
            <tr>
                <th className={style.th}>Name</th>
                <th className={style.th}>Phone</th>
                <th className={style.th}>Actions</th>
            </tr>
            </thead>
            <tbody>
            {waiters.map(waiter => (
                <WaitersItem
                    key={waiter.id}
                    waiter={waiter}
                    onWaitersDelete={onWaitersDelete}
                    onWaitersEdit={onWaitersEdit}
                />
            ))}
            </tbody>
        </table>
    )
}