import React from "react";

export function EditForm (onWaiterSubmit) {
    const [waiter, setWaiter] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        onWaiterSubmit({
            firstName: waiter.firstName,
            phone: waiter.phone
        })

        setWaiter('')
    }

    const onWaiterChange = (event) => {
        setWaiter(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="firstName">Name</label>
            <input value={waiter} onChange={onWaiterChange} type="text" id="firstName" />
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" />
            <button type="submit">Save</button>
        </form>
    )
}