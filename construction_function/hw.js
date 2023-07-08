"use strict";

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

class Calculator {
  constructor(base) {
    this.value = base;
    this.base = base;
  }

  add(num) {
    if (typeof num === "number") {
      this.value += num;
    }
  }

  sub(num) {
    if (typeof num === "number") {
      this.value -= num;
    }
  }

  set(num) {
    if (typeof num === "number") {
      this.value = num;
    }
  }

  get() {
    return this.value;
  }

  reset() {
    this.value = this.base;
  }
}
