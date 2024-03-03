export var Class509 = function () {
    var a = function (b) {
        this.data = Array(b);
        this.member8305 = 0;
    };
    a.prototype.append = function (b) {
        this.data[this.member8305++] = b;
    };
    a.prototype.member8306 = function (c) {
        for (var b = 0; b < c.member8305; ++b) {
            this.data[this.member8305++] = c.data[b];
        }
    };
    a.prototype.member301 = function () {
        for (var b = 0; b < this.member8305; ++b) {
            this.data[b] = undefined;
        }
        this.member8305 = 0;
    };
    a.prototype.member8307 = function () {
        for (var c = 0; c < this.member8305; ++c) {
            for (var b = 0; b < c; ++b) {
            }
        }
    };
    return function (b) {
        return new a(b);
    };
}();