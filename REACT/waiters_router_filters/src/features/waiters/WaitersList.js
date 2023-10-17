import { WaitersItem } from './WaitersItem';
import style from './WaitersList.module.css';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {WaitersApi} from "./api/server";
import {actionSetList} from "./store/actions";
import {Link, useSearchParams} from "react-router-dom";
import {Filters} from "./Filters";

export function WaitersList () {
    const dispatch = useDispatch();
    const waiters = useSelector((state) => state.waiters.list);
    let [searchParams] = useSearchParams();
    const filter = searchParams.get('filter');
    const filteredWaiters = filterWaiters(waiters, filter);

    useEffect(() => {
        WaitersApi.getList().then((newList) =>
            dispatch(actionSetList(newList))
        );
    }, []);

    return (
        <div>
            <h1>Waiters List</h1>
            <div>
                <Link to='/waiters/edit'><button>Add New</button></Link>
            </div>
            <table className={style.table}>
                <thead>
                <tr>
                    <th className={style.th}>Name</th>
                    <th className={style.th}>Phone</th>
                    <th className={style.th}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredWaiters.map(waiter => (
                    <WaitersItem
                        key={waiter.id}
                        waiter={waiter}
                    />
                ))}
                </tbody>
            </table>
            <Filters />
        </div>
    )
}

function filterWaiters (waiters,filter) {
    return waiters.filter(waiter => {
        if (filter === 'byName') {
            return waiter.name;
        } else if (filter === 'byPhone') {
            return waiter.phone;
        } else {
            return waiter;
        }
    })
}