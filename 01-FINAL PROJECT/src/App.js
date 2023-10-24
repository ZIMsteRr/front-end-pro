import {store} from "./store";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {LanguageProvider} from "./hooks/LanguageContext";
import {Home} from "./features/Home";
import {Waiters} from "./features/waiters";
import {About} from "./features/About";
import {NotFound} from "./features/NotFound";
import {Provider} from "react-redux";
import React from "react";
import styles from './App.module.css';

export function App () {
    const active = ({ isActive }) => isActive ? styles.active : "";

    return (
        <Provider store={store}>
            <BrowserRouter>
                <LanguageProvider>
                    <nav style={{ marginBottom: '20px' }}>
                        <NavLink to="/" className={active} end>Home</NavLink> {' | '}
                        <NavLink to="/waiters" className={active}>Waiters</NavLink> {' | '}
                        <NavLink to="/about" className={active}>About</NavLink>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/waiters/*" element={<Waiters />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </LanguageProvider>
            </BrowserRouter>
        </Provider>
    )
}