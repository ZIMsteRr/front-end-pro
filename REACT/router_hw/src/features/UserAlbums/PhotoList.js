import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "./store/actions";
import { Button } from "antd";

export function PhotoList() {
    const { albumId } = useParams();
    const dispatch = useDispatch();
    const photos = useSelector((state) => state.photos);

    useEffect(() => {
        dispatch(fetchPhotos(albumId));
    }, [dispatch, albumId]);

    return (
        <div>
            <h1>Фотографии из альбома</h1>
            <Link to={`/albums/${albumId}`}>
                <Button type="default">Назад к альбомам</Button>
            </Link>
            <ul>
                {photos.map((photo) => (
                    <li key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}