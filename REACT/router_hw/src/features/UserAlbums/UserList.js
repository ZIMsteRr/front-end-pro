import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/actions";
import { Button, Table } from "antd";

export function UserList() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const columns = [
        {
            title: "Имя",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Альбомы",
            key: "albums",
            render: (text, user) => (
                <Link to={`/albums/${user.id}`}>
                    <Button type="default">Альбомы</Button>
                </Link>
            ),
        },
    ];

    return (
        <div>
            <h1>Список пользователей</h1>
            <Table dataSource={users} columns={columns} />
        </div>
    );
}