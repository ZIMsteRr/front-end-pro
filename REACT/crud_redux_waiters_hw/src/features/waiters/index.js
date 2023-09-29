import React from 'react';
import { EditForm } from './EditForm';
import { WaitersList } from './WaitersList';
import { useWaiters } from './hooks/useWaiters';

export function Waiters () {
    const { waiter, list, onWaitersSubmit, onWaitersDelete, onWaitersEdit } = useWaiters();

    return (
        <>
            <EditForm
                waiter={waiter}
                onWaitersSubmit={onWaitersSubmit}
            />
            <WaitersList
                waiters={list}
                onWaitersDelete={onWaitersDelete}
                onWaitersEdit={onWaitersEdit}
            />
        </>
    )
}