import { WaitersItem } from './WaitersItem';
import style from './WaitersList.module.css';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {WaitersApi} from "./api/server";
import {actionSetList} from "./store/actions";

export function WaitersList () {
    const dispatch = useDispatch();
    const waiters = useSelector((state) => state.waiters.list);

    useEffect(() => {
        WaitersApi.getList().then((newList) =>
            dispatch(actionSetList(newList))
        );
    }, []);

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
                />
            ))}
            </tbody>
        </table>
    )
}