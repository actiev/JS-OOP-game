function Barrier() {
    var affect;
    var image;
    var left;
    var html;

    this.setLeft = function (value) {
        left = value;
    };

    this.setAffect = function (value) {
      affect = value;
    };

    this.setImage = function (value) {
        image = value;
    };

    this.getLeft = function () {
        return left;
    };

    this.getAffect = function () {
       return affect;
    };

    this.getImage = function () {
        return image;
    };

    this.setHtml = function (value) {
        html = value;
    };

    this.getHtml = function () {
        return html;
    };

    this.init();
}

Barrier.prototype = Object.create(Barrier.prototype);

Barrier.MIN_AFFECT = 1;
Barrier.MAX_AFFECT = 3;
Barrier.MIN_LEFT = 2;
Barrier.MAX_LEFT = 10;

Barrier.prototype.init = function () {
    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

    function typeOfBarrier(number) {
        return number % 2 === 0 ? "yagoda" : "kamen";
    }

    var affect = randomInteger(Barrier.MIN_AFFECT,Barrier.MAX_AFFECT);
    var image = typeOfBarrier(affect);

    this.setLeft(randomInteger(Barrier.MIN_LEFT,Barrier.MAX_LEFT));
    this.setImage(image);

    if (image === "yagoda") {
        this.setAffect(affect);
    } else {
        this.setAffect(-affect);
    }

    var div = document.createElement("div");
    div.classList.add('barrier',this.getImage());

    this.setHtml(div);
};


