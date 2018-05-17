function Volk() {
    Runner.call(this);
    this.setSpeed(Volk.SPEED);
    this.setImage('volk');
    this.name = "Волк";

    this.init();
}

Volk.prototype = Object.create(Runner.prototype);
Volk.prototype.constructor = Volk;

Volk.SPEED = 3;