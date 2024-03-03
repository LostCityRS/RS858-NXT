import { Class86 } from 'Class86.js';
export var CoordFine = function () {
    var CoordFine = function (c, b, e, d) {
        this.level = -1;
        this.member3454 = new Float32Array(3);
        this.member25(c, b, e, d);
    };
    CoordFine.prototype.member25 = function (c, b, e, d) {
        if (c !== undefined) {
            if (typeof c === 'number') {
                this.level = c;
                if (typeof b === 'number' && typeof e === 'number') {
                    this.member3454[0] = b;
                    if (typeof d === 'number') {
                        this.member3454[1] = e;
                        this.member3454[2] = d;
                    } else {
                        this.member3454[1] = 0;
                        this.member3454[2] = e;
                    }
                } else if (b instanceof Float32Array && b.length === 3) {
                    this.member3454[0] = b[0];
                    this.member3454[1] = b[1];
                    this.member3454[2] = b[2];
                }
            } else if (c instanceof CoordFine || c.level !== undefined && c.member3454 !== undefined) {
                this.level = c.level;
                this.member3454[0] = c.member3454[0];
                this.member3454[1] = c.member3454[1];
                this.member3454[2] = c.member3454[2];
            } else if (c.level !== undefined && c.x !== undefined && c.member756 !== undefined) {
                this.level = c.level;
                this.member3454[0] = c.x;
                if (c.y !== undefined) {
                    this.member3454[1] = c.y;
                }
                this.member3454[2] = c.member756;
            } else if (c.member3455 !== undefined) {
                this.level = c.member3455.level;
                this.member3454[0] = c.member3455.member3454[0];
                this.member3454[1] = c.member3455.member3454[1];
                this.member3454[2] = c.member3455.member3454[2];
            } else if (c.member3456 !== undefined) {
                this.level = c.member3456.g1();
                this.x = c.member3456.g4s();
                this.y = c.member3456.g4s();
                this.member756 = c.member3456.g4s();
            }
        }
    };
    CoordFine.prototype.set = function (b) {
        this.level = b.level;
        this.member3454[0] = b.member3454[0];
        this.member3454[1] = b.member3454[1];
        this.member3454[2] = b.member3454[2];
    };
    CoordFine.prototype.member3457 = function (c) {
        var d = c.member3454[0] - this.member3454[0];
        var b = c.member3454[2] - this.member3454[2];
        return Math.sqrt(d * d + b * b);
    };
    CoordFine.prototype.equals = function (b) {
        return this.level === b.level && this.member3454[0] === b.member3454[0] && this.member3454[1] === b.member3454[1] && this.member3454[2] === b.member3454[2];
    };
    CoordFine.prototype.member3458 = function (b) {
        return Math.floor(this.member3454[b] / Class86.member718);
    };
    CoordFine.prototype.toString = function (b) {
        if (b) {
            return '(' + this.level + ',' + Math.floor(this.member3454[0] / 32768) + ',' + Math.floor(this.member3454[1] / 32768) + ',' + Math.floor(this.member3454[0] % 32768 / 512) + ',' + Math.floor(this.member3454[2] % 32768 / 512) + ')';
        } else {
            return '(' + this.level + ',' + this.member3454[0] + ',' + this.member3454[1] + ',' + this.member3454[2] + ')';
        }
    };
    CoordFine.prototype.member3459 = function () {
        return CoordFine;
    };
    return function (c, b, e, d) {
        return new CoordFine(c, b, e, d);
    };
}();