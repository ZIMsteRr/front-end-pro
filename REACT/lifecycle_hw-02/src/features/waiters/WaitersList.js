import { WaitersItem } from './WaitersItem';
export function WaitersList ({ waiters }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>firstName</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {waiters.map(waiter => (<WaitersItem key={waiter.id} waiter={waiter} />))}
            </tbody>
        </table>
    )
}