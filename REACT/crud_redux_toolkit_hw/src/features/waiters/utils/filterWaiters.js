export function filterWaiters (waiters,filter) {
    return waiters.filter(waiter => {
        if (filter === 'byName') {
            return waiter.name;
        } else if (filter === 'byPhone') {
            return waiter.phone;
        } else {
            return waiter;
        }
    })
}