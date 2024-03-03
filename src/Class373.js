export var Class373 = function () {
    var a = function (b) {
        this.member1051;
        this.member1054;
        this.member4129;
        if (b.member1051 !== undefined && b.member1054 !== undefined && b.member4129 !== undefined) {
            this.member1051 = b.member1051;
            this.member1054 = b.member1054;
            this.member4129 = b.member4129;
        } else if (b.empty !== undefined) {
            this.member1051 = new Float32Array(3);
            this.member1054 = new Float32Array(3);
            this.member4129 = 0;
        } else {
            throw new Error('1083 ');
        }
    };
    a.prototype.member1813 = function () {
        return this.member1051;
    };
    a.prototype.member1814 = function () {
        return this.member1054;
    };
    a.prototype.member992 = function () {
        return this.member4129;
    };
    a.prototype.member1815 = function (b) {
        this.member4129 = b;
    };
    a.prototype.member4130 = function (j, i) {
        var h = this.member1054[0] - this.member1051[0], g = this.member1054[1] - this.member1051[1];
        var e = h * h + g * g;
        var d = j * h + i * g - (this.member1051[0] * h + this.member1051[1] * g);
        if (d <= 0) {
            var c = this.member1051[0] - j, b = this.member1051[1] - i;
            return c * c + b * b < this.member4129 * this.member4129;
        }
        if (d > e) {
            var c = this.member1054[0] - j, b = this.member1054[1] - i;
            return c * c + b * b < this.member4129 * this.member4129;
        }
        d = d / e;
        var c = this.member1051[0] + h * d - j, b = this.member1051[1] + g * d - i;
        return c * c + b * b < this.member4129 * this.member4129;
    };
    a.prototype.member4131 = function (b) {
        if (this.member1054[0] < this.member1051[0]) {
            b[0] = this.member1054[0] - this.member4129;
            b[2] = this.member1051[0] + this.member4129;
        } else {
            b[0] = this.member1051[0] - this.member4129;
            b[2] = this.member1054[0] + this.member4129;
        }
        if (this.member1054[1] < this.member1051[1]) {
            b[1] = this.member1054[1] - this.member4129;
            b[3] = this.member1051[1] + this.member4129;
        } else {
            b[1] = this.member1051[1] - this.member4129;
            b[3] = this.member1054[1] + this.member4129;
        }
    };
    return function (b) {
        return new a(b);
    };
}();