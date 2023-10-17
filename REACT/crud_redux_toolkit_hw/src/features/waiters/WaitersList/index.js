import { WaitersItem } from '../WaitersItem';
import style from './WaitersList.module.css';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {Filters} from "../Filters";
import {filterWaiters} from "../utils/filterWaiters";
import {getList} from "../store/thunks";

export function WaitersList () {
    const dispatch = useDispatch();
    const waiters = useSelector((state) => state.waiters.list);
    const loading = useSelector((state) => state.waiters.listLoading);
    const error = useSelector((state) => state.waiters.listError);
    let [searchParams] = useSearchParams();
    const filter = searchParams.get('filter');
    const filteredWaiters = filterWaiters(waiters, filter);

    useEffect(() => {
            dispatch(getList());
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

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
