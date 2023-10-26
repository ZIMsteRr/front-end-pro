import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTablesAsync } from './store/thunks';
import {useLang} from "../../hooks/LanguageContext";
import {getList} from "../Dishes/store/thunks";
import {TablesItem} from "./TablesItem";

export function TablesList() {
    const dispatch = useDispatch();
    const tables = useSelector((state) => state.tables.list);

    useEffect(() => {
        dispatch(fetchTablesAsync()); // Используем fetchTablesAsync для получения данных
    }, [dispatch]);
    const lang = useLang();

    useEffect(() => {
        dispatch(getList());
    }, [dispatch]);

    return (
        <div>
            <h1>{lang === 'en' ? 'Tables' : 'Столи'}</h1>
            <Link to="/tables/edit">
                <button>{lang === 'en' ? 'Add Table' : 'Додати стіл'}</button>
            </Link>
            <table>
                <thead>
                <tr>
                    <th>Number</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {tables.map((table) => (
                    <TablesItem key={table.id} table={table} />
                ))}
                </tbody>
            </table>
        </div>
    );
}