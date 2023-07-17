class Vehicle {
  constructor(model, isLightOn) {
    this.model = model;
    this.isLightOn = isLightOn;

    this.move = function () {};
  }

  toggleLight() {
    this.isLightOn = !this.isLightOn;
  }
}

class User {
  #name;

  set name(value) {
    this.#name = value;
  }

  get name() {
    return this.name;
  }
}

const user = new User("Tom");

user.name = "Tom";

console.log(user.name);
