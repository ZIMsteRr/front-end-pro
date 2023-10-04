import React from "react";
import style from './EditForm.module.css'
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {actionSaveItem} from "./store/actions";

export function EditForm () {
    const dispatch = useDispatch();
    const editingWaiter = useSelector((state) => state.waiters.editingWaiter);
    const [firstName, setFirstName] = React.useState(editingWaiter.firstName);
    const [phone, setPhone] = React.useState(editingWaiter.phone);

    React.useEffect(() => {
        if (editingWaiter.id) {
            setFirstName(editingWaiter.firstName)
            setPhone(editingWaiter.phone)
        }
    }, [editingWaiter])

    const onSubmit = (event) => {
        event.preventDefault();

        const formWaiter = {
            ...editingWaiter,
            firstName: firstName,
            phone: phone,
        }

        dispatch(actionSaveItem(formWaiter));
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