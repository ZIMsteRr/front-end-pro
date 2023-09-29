import React from "react";
import { WaitersApi } from "../api/server";
import { useDispatch, useSelector } from "react-redux";
import {
    actionSetList,
    actionSetEditItem,
} from "../store/actions";

export function useWaiters() {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.waiters.list);
    const waiter = useSelector((state) => state.waiters.waiter);

    React.useEffect(() => {
        WaitersApi.getList().then((newList) =>
            dispatch(actionSetList(newList))
        );
    }, []);

    const onWaitersSubmit = (formWaiter) => {
        if (formWaiter.id) {
            WaitersApi.update(formWaiter.id, formWaiter).then((newWaiter) => {
                const newList = list.map((waiter) =>
                    waiter.id === formWaiter.id ? newWaiter : waiter
                );

                dispatch(actionSetList(newList));
            });
        } else {
            WaitersApi.create(formWaiter).then((newWaiter) => {
                dispatch(actionSetList([...list, newWaiter]));
            });
        }
    };

    const onWaitersDelete = (id) => {
        const newList = list.filter((waiter) => waiter.id !== id);

        WaitersApi.delete(id).then(() => {
            dispatch(actionSetList(newList));
        });
    };

    const onWaitersEdit = (editWaiter) => {
        dispatch(actionSetEditItem(editWaiter));
    };

    return {
        waiter,
        list,
        onWaitersSubmit,
        onWaitersDelete,
        onWaitersEdit,
    };
}