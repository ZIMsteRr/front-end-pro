import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { UserList } from "./UserList";
import { AlbumList } from "./AlbumList";
import { PhotoList } from "./PhotoList";
import {Button} from "antd";

export function App() {
    return (
        <BrowserRouter>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li>
                        <Link to={`/`}>
                            <Button type="primary">Вернуться на главную</Button>
                        </Link>
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