import React from 'react';
import { EditForm } from './EditForm';
import { WaitersList } from './WaitersList';
import { WaitersApi } from "../../Api/server";

export function Waiters () {
    const [list, setList] = React.useState([]);

    React.useEffect(() => {
        WaitersApi.getList().then((data) => setList(data))
    }, [])

    const onWaitersSubmit = (waiter) => {
        setList([...list, waiter])
    }

    return (
        <>
            <EditForm onWaiterSubmit={onWaitersSubmit} />
            <WaitersList waiters={list} />
        </>
    )
}