"use strict";

function Rabbit(name, color, maxSpeed, eats) {
  this.name = name;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.eats = eats;

  this.sayName = function () {
    console.log("My name is ${this.name}");
  };

  this.run = function () {
    console.log("I am running with speed &{this.maxSpeed}");
  };
}

const rabbit = new Rabbit("Bob", "white", 8, true);

console.log(rabbit);

