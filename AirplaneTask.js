let Airplane = {
  land: function (name) {
    this.isFlying = true;
    return name + ` isFlying ` + this.isFlying;
  },
  takeOff: function (name) {
    this.isFlying = false;
    return name + ` isFlying ` + this.isFlying;
  },
};
let Aeroflot = Object.create(Airplane);
console.log(Aeroflot.land(`Aeroflot`));
