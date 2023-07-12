function Hamburger(size) {
  this.size = size;
  this.toppings = [];
}

Hamburger.SIZE_SMALL = {
  price: 50,
  calories: 20,
};

Hamburger.SIZE_MEDIUM = {
  price: 75,
  calories: 30,
};

Hamburger.SIZE_LARGE = {
  price: 100,
  calories: 40,
};

Hamburger.TOPPING_CHEESE = {
  price: 10,
  calories: 20,
};

Hamburger.TOPPING_SALAD = {
  price: 20,
  calories: 5,
};

Hamburger.TOPPING_POTATO = {
  price: 15,
  calories: 10,
};

Hamburger.TOPPING_SPICE = {
  price: 15,
  calories: 0,
};

Hamburger.TOPPING_MAYO = {
  price: 20,
  calories: 5,
};

Hamburger.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
};

Hamburger.prototype.getPrice = function () {
  let totalPrice = this.size.price;
  this.toppings.forEach(function (topping) {
    totalPrice += topping.price;
  });
  return totalPrice;
};

Hamburger.prototype.getCalories = function () {
  let totalCalories = this.size.calories;
  this.toppings.forEach(function (topping) {
    totalCalories += topping.calories;
  });
  return totalCalories;
};

const hamburger = new Hamburger(Hamburger.SIZE_LARGE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_CHEESE);

console.log("Price with toppings: " + hamburger.getPrice() + " tugriks");
console.log("Calories with toppings: " + hamburger.getCalories() + " calories");
