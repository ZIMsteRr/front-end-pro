import React from 'react';
import { EditForm } from './EditForm';
import { WaitersList } from './WaitersList';
import {Route, Routes} from "react-router-dom";
import {NotFound} from "../NotFound";

export function Waiters () {
    return (
        <Routes>
            <Route path="/" element={<WaitersList />} />
            <Route path="/edit" element={<EditForm />} />
            <Route path="/edit/:waiterId" element={<EditForm />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}