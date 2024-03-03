import { Class50 } from 'Class50.js';
export var SeqGroupType = function () {
    var a = function (c, b) {
        this.myList;
        this.member625;
        if (c !== undefined && b !== undefined) {
            this.member625 = c;
            this.myList = b;
        } else {
            throw new Error('1380 ');
        }
        this.member2920 = undefined;
    };
    a.prototype.getID = function () {
        return this.member625;
    };
    a.prototype.member2919 = function () {
        return this.member2920;
    };
    a.prototype.decode = function (c) {
        while (true) {
            var b = c.g1();
            if (b === undefined) {
                throw new Error('1381 ');
                break;
            }
            if (b === 0) {
                break;
            }
            this.decodeNext(c, b);
        }
    };
    a.prototype.decodeNext = function (h, e) {
        if (e === 2) {
            var b = h.gSmart1or2();
            for (var g = 0; g < b; g++) {
                h.gSmart1or2();
            }
        } else if (e === 3) {
            this.member2920 = new Float32Array(Class50.member358);
            var d = h.g1() / 255;
            if (d !== 0) {
                for (var g = 0; g < Class50.member358; g++) {
                    this.member2920[g] = d;
                }
            }
            var b = h.gSmart1or2();
            for (var g = 0; g < b; g++) {
                var c = h.gSmart1or2();
                this.member2920[c] = h.g1() / 255;
            }
        } else if (false) {
        }
    };
    return function (c, b) {
        return new a(c, b);
    };
}();