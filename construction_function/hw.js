"use strict";

function Calculator(base) {
  this.value = base;
  this.base = base;

  this.add = function (num) {
    if (typeof num === "number") {
      this.value += num;
    }
  };

  this.sub = function (num) {
    if (typeof num === "number") {
      this.value -= num;
    }
  };

  this.set = function (num) {
    if (typeof num === "number") {
      this.value = num;
    }
  };

  this.get = function () {
    return this.value;
  };

  this.reset = function () {
    this.value = this.base;
  };
}

const calc = new Calculator(100);

calc.add(10);
calc.add(10);
calc.sub(20);
calc.set(20);
calc.add(10);
calc.add(10);
calc.add("qwe");
console.log(calc.get());

calc.reset();
console.log(calc.get());
