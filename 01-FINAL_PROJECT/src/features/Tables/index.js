import React from 'react';
import { EditForm } from './EditForm';
import { TablesList } from './TablesList';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../NotFound';

export function Tables() {
    return (
        <Routes>
            <Route path="/" element={<TablesList />} />
            <Route path="/edit" element={<EditForm />} />
            <Route path="/edit/:dishId" element={<EditForm />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}