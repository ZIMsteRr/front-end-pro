import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "./store/actions";
import { Button, Table } from "antd";

export function AlbumList() {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const albums = useSelector((state) => state.albums);

    useEffect(() => {
        dispatch(fetchAlbums(userId));
    }, [dispatch, userId]);

    const columns = [
        {
            title: "Альбом",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Фото",
            key: "photo",
            render: (text, album) => (
                <Link to={`/photos/${album.id}`}>
                    <Button type="primary">Фото</Button>
                </Link>
            ),
        },
    ];

    return (
        <div>
            <h1>Альбомы пользователя</h1>
            <Link to="/">
                <Button type="default">Назад к пользователям</Button>
            </Link>
            <Table dataSource={albums} columns={columns} />
        </div>
    );
}