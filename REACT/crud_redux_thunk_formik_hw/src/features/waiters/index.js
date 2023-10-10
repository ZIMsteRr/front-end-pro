import React from 'react';
import { EditForm } from './EditForm';
import { WaitersList } from './WaitersList';

export function Waiters () {
    return (
        <>
            <EditForm />
            <WaitersList />
        </>
    )
}