export var Class373 = function () {
    var a = function (b) {
        this.p1;
        this.p2;
        this.member4129;
        if (b.p1 !== undefined && b.p2 !== undefined && b.member4129 !== undefined) {
            this.p1 = b.p1;
            this.p2 = b.p2;
            this.member4129 = b.member4129;
        } else if (b.empty !== undefined) {
            this.p1 = new Float32Array(3);
            this.p2 = new Float32Array(3);
            this.member4129 = 0;
        } else {
            throw new Error('1083 ');
        }
    };
    a.prototype.member1813 = function () {
        return this.p1;
    };
    a.prototype.member1814 = function () {
        return this.p2;
    };
    a.prototype.member992 = function () {
        return this.member4129;
    };
    a.prototype.member1815 = function (b) {
        this.member4129 = b;
    };
    a.prototype.member4130 = function (j, i) {
        var h = this.p2[0] - this.p1[0], g = this.p2[1] - this.p1[1];
        var e = h * h + g * g;
        var d = j * h + i * g - (this.p1[0] * h + this.p1[1] * g);
        if (d <= 0) {
            var c = this.p1[0] - j, b = this.p1[1] - i;
            return c * c + b * b < this.member4129 * this.member4129;
        }
        if (d > e) {
            var c = this.p2[0] - j, b = this.p2[1] - i;
            return c * c + b * b < this.member4129 * this.member4129;
        }
        d = d / e;
        var c = this.p1[0] + h * d - j, b = this.p1[1] + g * d - i;
        return c * c + b * b < this.member4129 * this.member4129;
    };
    a.prototype.member4131 = function (b) {
        if (this.p2[0] < this.p1[0]) {
            b[0] = this.p2[0] - this.member4129;
            b[2] = this.p1[0] + this.member4129;
        } else {
            b[0] = this.p1[0] - this.member4129;
            b[2] = this.p2[0] + this.member4129;
        }
        if (this.p2[1] < this.p1[1]) {
            b[1] = this.p2[1] - this.member4129;
            b[3] = this.p1[1] + this.member4129;
        } else {
            b[1] = this.p1[1] - this.member4129;
            b[3] = this.p2[1] + this.member4129;
        }
    };
    return function (b) {
        return new a(b);
    };
}();