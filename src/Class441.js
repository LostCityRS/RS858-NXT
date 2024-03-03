export var Class441 = function () {
    var a = function (b) {
        this.member6662;
        this.member6663;
        if (b.member6662 !== undefined && b.member6663 !== undefined) {
            this.member6662 = b.member6662;
            this.member6663 = b.member6663;
        } else {
            throw new Error('1046 ');
        }
    };
    a.prototype.member6664 = function () {
        return this.member6663;
    };
    a.prototype.member6665 = function () {
        return this.member6662 !== 0;
    };
    a.prototype.member6666 = function () {
        return (this.member6662 & 1) != 0;
    };
    a.prototype.member6667 = function (b) {
        return (this.member6662 >> b + 1 & 1) != 0;
    };
    a.prototype.member6668 = function () {
        return this.member6662 >> 1 & 1023;
    };
    a.prototype.member6669 = function () {
        return this.member6662 >> 11 & 127;
    };
    a.prototype.member6670 = function () {
        return this.member6662 >> 18 & 7;
    };
    a.prototype.member6671 = function () {
        return (this.member6662 >> 21 & 1) != 0;
    };
    a.prototype.member6672 = function () {
        return (this.member6662 >> 22 & 1) != 0;
    };
    a.prototype.member6673 = function () {
        return (this.member6662 >> 23 & 1) != 0;
    };
    return function (b) {
        return new a(b);
    };
}();