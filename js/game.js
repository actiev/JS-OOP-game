function Game() {
    var track1;
    var track2;
    var runner1;
    var runner2;

    this.setTrack1 = function (value) {
        track1 = value;
    };

    this.setTrack2 = function (value) {
        track2 = value;
    };

    this.setRunner1 = function (value) {
        runner1 = value;
    };

    this.setRunner2 = function (value) {
        runner2 = value;
    };

    this.getTrack1 = function () {
        return track1;
    };

    this.getTrack2 = function () {
       return track2;
    };

    this.getRunner1 = function () {
        return runner1;
    };

    this.getRunner2 = function () {
        return runner2;
    };

    this.init();
}

Game.CELL_WIDTH = 55;
Game.CELLS = 20;

Game.prototype.init = function () {
    this.setTrack1('#track1');
    this.setTrack2('#track2');

    this.setRunner1(new Zaec());
    this.setRunner2(new Volk());

    this.appendHtmlToDom(this.getTrack1(),this.getRunner1().getHtml());
    this.appendHtmlToDom(this.getTrack2(),this.getRunner2().getHtml());

    this.barrier1 = new Barrier();
    this.barrier2 = new Barrier();

    this.barrier1.getHtml().style.left = this.barrier1.getLeft()*Game.CELL_WIDTH+"px";
    this.barrier2.getHtml().style.left = this.barrier1.getLeft()*Game.CELL_WIDTH+"px";

    document.querySelector("#start").addEventListener("click", (e) => {
        this.start();
        e.target.removeAttribute("data-action");
    });

    document.querySelector("#restart").addEventListener("click", () => {
        this.restart();
    });
};

Game.prototype.appendHtmlToDom = function (parent,child) {
    document.querySelector(parent).appendChild(child);
};

Game.prototype.start = function () {

    if (document.querySelector("#start").getAttribute("data-action")) {
        this.appendHtmlToDom(this.getTrack1(),this.barrier1.getHtml());
        this.appendHtmlToDom(this.getTrack2(),this.barrier2.getHtml());

        this.run(this.getRunner1(),this.barrier1.getLeft()*Game.CELL_WIDTH);
        this.run(this.getRunner2(),this.barrier1.getLeft()*Game.CELL_WIDTH);

    } else {
        this.getRunner1().setSpeed(this.barrier1.getAffect()+this.getRunner1().getSpeed());
        this.getRunner2().setSpeed(this.barrier2.getAffect()+this.getRunner2().getSpeed());

        delete this.barrier1;
        delete this.barrier2;

        this.run(this.getRunner1(),Game.CELL_WIDTH*Game.CELLS);
        this.run(this.getRunner2(),Game.CELL_WIDTH*Game.CELLS);
    }
};

Game.prototype.run = function (runner,length) {
    runner.timerID = setInterval(() => {
        if (runner.getLeft() >= Game.CELL_WIDTH*Game.CELLS) {
            clearAllIntervals();
            this.finish(runner.name);
        } else if (this.getRunner2().getSpeed() >= this.getRunner1().getSpeed()) {
            clearAllIntervals();
            this.finish(this.getRunner2().name);
        } else if (runner.getLeft() >= length) {
            clearInterval(runner.timerID);
        }
        runner.run();
    }, 20);

    function clearAllIntervals () {
        for (let i=0; i < 10;i++) {
            clearInterval(i);
        }
    }
};

Game.prototype.finish = function (who) {
    document.querySelector(".message").style.display = "block";
    document.querySelector(".message").children[0].innerHTML += who;
};

Game.prototype.restart = function () {
    window.location.reload();
};

(function () {
    var game = new Game();
})();





