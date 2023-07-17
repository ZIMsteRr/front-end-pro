function Hamburger({ price, calories }) {
  this.price = price;
  this.calories = calories;
}

Hamburger.prototype.addTopping = function ({ price, calories }) {
  this.price += price;
  this.calories += calories;
};
