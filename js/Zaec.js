function Zaec() {
    Runner.call(this);
    this.setSpeed(Zaec.SPEED);
    this.setImage('zaec');
    this.name = "Заяц";

    this.init();
}

Zaec.prototype = Object.create(Runner.prototype);
Zaec.prototype.constructor = Zaec;

Zaec.SPEED = 5;