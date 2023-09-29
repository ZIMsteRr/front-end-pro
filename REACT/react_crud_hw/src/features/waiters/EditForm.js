import React from "react";
import style from './EditForm.module.css'

export function EditForm ({ waiter, onWaitersSubmit }) {
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