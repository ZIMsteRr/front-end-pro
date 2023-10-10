import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "./store/actions";

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
            <Link to={`/albums/${albumId}`}>Назад к альбомам</Link>
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