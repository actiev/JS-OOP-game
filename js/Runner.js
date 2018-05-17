function Runner() {
    var speed = 0;
    var image;
    var left = 0;
    var html;

    this.setImage = function (value) {
        image = value;
    };

    this.setLeft = function (value) {
        left = value;
    };

    this.setSpeed = function (value) {
        if (value >= 0) {
            speed = value;
        }
    };

    this.setHtml = function (value) {
        html = value;
    };

    this.getImage = function () {
        return image;
    };

    this.getSpeed = function () {
        return speed;
    };

    this.getLeft = function () {
        return left;
    };

    this.getHtml = function () {
        return html;
    };
}

Runner.prototype = Object.create(Runner.prototype);

Runner.prototype.init = function () {
   var div = document.createElement('div');
   div.classList.add('player',this.getImage());

   this.setHtml(div);
};

Runner.prototype.run = function () {
    this.setLeft(this.getLeft()+this.getSpeed());
    this.getHtml().style.transform = "translate("+this.getLeft()+"px,0)";
};