import React from "react";

export function EditForm ({ onWaiterSubmit }) {
    const [firstName, setFirstName] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        onWaiterSubmit({
            id: Date.now().toLocaleString(),
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

            <button type="submit">Save</button>
        </form>
    )
}