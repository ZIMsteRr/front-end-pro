export function filterDishes(dishes, filter) {
    return dishes.filter((dish) => {
        if (filter === 'byName') {
            return dish.name;
        } else if (filter === 'byPrice') {
            return dish.price;
        } else {
            return dish;
        }
    });
}