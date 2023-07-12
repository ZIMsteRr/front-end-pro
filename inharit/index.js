const mazda = {
  isLightOn: false,
  model: "Mazda",
  toggleLight() {
    this.isLightOn = !this.isLightOn;
  },
};

const toyota = {
  isLightOn: false,
  model: "Toyota",
  toggleLight() {
    this.isLightOn = !this.isLightOn;
  },
};

function vehicle(model, isLightOn) {
  this.model = model;
  this.isLightOn = isLightOn;
}

vehicle.prototype.toggleLight = function () {
  this.isLightOn = !this.isLightOn;
};

const Mazda = new vehicle("Mazda", false);
const Toyota = new vehicle("Toyota", false);

console.log(mazda);
