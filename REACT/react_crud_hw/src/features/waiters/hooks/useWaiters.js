import React from "react";
import {WaitersApi} from "../../../Api/server";

export function useWaiters () {
    const [waiter, setWaiter] = React.useState({});
    const [list, setList] = React.useState([]);

    React.useEffect(() => {
        WaitersApi.getList().then((data) => setList(data))
    }, [])

    const onWaitersSubmit = (formWaiter) => {
        if (formWaiter.id) {
            WaitersApi.update(formWaiter.id, formWaiter).then((newWaiter) => {
                const newList = list.map((waiter) => waiter.id === formWaiter.id ? newWaiter : waiter);

                setList(newList);
            })
        } else {
            WaitersApi.create(formWaiter).then((newWaiter) => setList([...list, newWaiter]))
        }
    }

    const onWaitersDelete = (id) => {
        const newList = list.filter((waiter) => waiter.id !== id);

        WaitersApi.delete(id).then(() => setList(newList))
    }

    const onWaitersEdit = (editWaiter) => {
        setWaiter(editWaiter)
    }
    return {
        waiter,
        list,
        onWaitersSubmit,
        onWaitersDelete,
        onWaitersEdit
    }
}