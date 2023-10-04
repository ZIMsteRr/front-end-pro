import React from "react";
import style from './EditForm.module.css'
import {useSelector} from "react-redux";
import {WaitersApi} from "./api/server";
import {actionCreateItem, actionUpdateItem} from "./store/actions";

export function EditForm ({ onWaitersSubmit }) {
    const waiter = useSelector((state) => state.waiters.waiter);
    const [firstName, setFirstName] = React.useState('');
    const [phone, setPhone] = React.useState('');

    React.useEffect(() => {
        if (waiter) {
            setFirstName(waiter.firstName)
            setPhone(waiter.phone)
        }
    }, [waiter])

    const onSubmit = (event) => {
        event.preventDefault();

        c
        const onWaitersSubmit = (formWaiter) => {
            if (formWaiter.id) {
                WaitersApi.update(formWaiter.id, formWaiter).then((newWaiter) => {
                    dispatch(actionUpdateItem(newWaiter));
                });
            } else {
                WaitersApi.create(formWaiter).then((newWaiter) => dispatch(actionCreateItem(newWaiter)));
            }
        };

        onWaitersSubmit({
            ...waiter,
            firstName: firstName,
            phone: phone,
        })

        setFirstName('')
        setPhone('')
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="firstName">Name</label>
            <input value={firstName} onChange={event => setFirstName(event.target.value)} type="text" id="firstName" />

            <label htmlFor="phone">Phone</label>
            <input value={phone} onChange={event => setPhone(event.target.value)} type="text" id="phone" />

            <button className={style.action} type="submit">Save</button>
        </form>
    )
}