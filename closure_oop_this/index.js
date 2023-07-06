'use strict'

const name = "John";

function sayHi() {
  console.log("Hi ${name}");
}

sayHi();

let counts = 0;

function count() {
  counts++;
}

count();

console.log(counts);

function createCounter() {
  let counts = 0;

  return () => {
    counts++;
  };
}

const count = createCounter();
const count2 = createCounter();
const count3 = createCounter();

console.log(count());
console.log(count2());

function createLogger(name) {
  function info(message) {
    console.log("[${name}] ${message}");
  }
  function error(message) {
    console.error("[${name}] ${message}");
  }

  return {
    info,
    error,
  };
}

const userLogger = createLogger("user");
const cartLogger = createLogger("cart");

userLogger("New user created");
userLogger("User deleted");
cartLogger("Product added");

function createLogger(name) {
  return {
    info: (message) => console.log("[${name}] ${message}"),
    error: (message) => console.error("[${name}] ${message}"),
  };
}


