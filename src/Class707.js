import { Class50 } from 'Class50.js';
export var Class707 = function () {
    var a = function (c, b) {
        this.member2896;
        this.member625;
        if (c !== undefined && b !== undefined) {
            this.member625 = c;
            this.member2896 = b;
        } else {
            throw new Error('1380 ');
        }
        this.member2920 = undefined;
    };
    a.prototype.member444 = function () {
        return this.member625;
    };
    a.prototype.member2919 = function () {
        return this.member2920;
    };
    a.prototype.decode = function (c) {
        while (true) {
            var b = c.member609();
            if (b === undefined) {
                throw new Error('1381 ');
                break;
            }
            if (b === 0) {
                break;
            }
            this.member2932(c, b);
        }
    };
    a.prototype.member2932 = function (h, e) {
        if (e === 2) {
            var b = h.member1078();
            for (var g = 0; g < b; g++) {
                h.member1078();
            }
        } else if (e === 3) {
            this.member2920 = new Float32Array(Class50.member358);
            var d = h.member609() / 255;
            if (d !== 0) {
                for (var g = 0; g < Class50.member358; g++) {
                    this.member2920[g] = d;
                }
            }
            var b = h.member1078();
            for (var g = 0; g < b; g++) {
                var c = h.member1078();
                this.member2920[c] = h.member609() / 255;
            }
        } else if (false) {
        }
    };
    return function (c, b) {
        return new a(c, b);
    };
}();