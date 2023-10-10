import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { UserList } from "./UserList";
import { AlbumList } from "./AlbumList";
import { PhotoList } from "./PhotoList";

export function App() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Список пользователей</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/albums/:userId" element={<AlbumList />} />
                <Route path="/photos/:albumId" element={<PhotoList />} />
            </Routes>
        </BrowserRouter>
    );
}