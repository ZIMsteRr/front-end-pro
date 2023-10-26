import { store } from './store';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './hooks/LanguageContext';
import { Waiters } from './features/Waiters';
import { NotFound } from './features/NotFound';
import { Provider } from 'react-redux';
import React from 'react';
import styles from './App.module.css';
import { Dishes } from './features/Dishes';
import { Tables } from "./features/Tables";
import {Orders} from "./features/Orders";

export function App() {
    const active = ({ isActive }) => (isActive ? styles.active : '');

    return (
        <Provider store={store}>
            <BrowserRouter>
                <LanguageProvider>
                    <nav style={{ marginBottom: '20px' }}>
                        <NavLink to="/" className={active} end>
                            Orders
                        </NavLink>{' | '}
                        <NavLink to="/waiters" className={active}>
                            Waiters
                        </NavLink>{' | '}
                        <NavLink to="/tables" className={active}>
                            Tables
                        </NavLink>{' | '}
                        <NavLink to="/dishes" className={active}>
                            Dishes
                        </NavLink>
                    </nav>
                    <Routes>
                        <Route path="/*" element={<Orders />} />
                        <Route path="/waiters/*" element={<Waiters />} />
                        <Route path="/tables/*" element={<Tables />} />
                        <Route path="/dishes/*" element={<Dishes />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </LanguageProvider>
            </BrowserRouter>
        </Provider>
    );
}