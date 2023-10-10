import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "./store/actions";

export function AlbumList() {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const albums = useSelector((state) => state.albums);

    useEffect(() => {
        dispatch(fetchAlbums(userId));
    }, [dispatch, userId]);

    return (
        <div>
            <h1>Альбомы пользователя</h1>
            <Link to="/">Назад</Link>
            <ul>
                {albums.map((album) => (
                    <li key={album.id}>
                        {album.title}
                        <Link to={`/photos/${album.id}`}>Фото</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}