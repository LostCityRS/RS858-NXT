export var Class491 = function () {
    var a = function (b) {
        this.member7896 = new Array();
    };
    a.prototype.member4384 = function (b) {
        this.member7896.push(b);
    };
    a.prototype.member4379 = function (c) {
        for (var b = 0; b < this.member7896.length; b++) {
            if (this.member7896[b] === c) {
                this.member7896.splice(b, 1);
                return;
            }
        }
    };
    a.prototype.member4376 = function (c) {
        for (var b = 0; b < this.member7896.length; b++) {
            if (!this.member7896[b].member4377()) {
                return false;
            }
        }
        return true;
    };
    return function (b) {
        return new a(b);
    };
}();