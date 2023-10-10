import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/actions";

export function UserList() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h1>Список пользователей</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        <Link to={`/albums/${user.id}`}>Альбомы</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}