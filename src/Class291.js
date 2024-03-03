import { CoordFine } from 'Class290.js';
import { Class86 } from 'Class86.js';
export var Class291 = function () {
    var b = function (d, c, e) {
        this.level = -1;
        this.x = 0;
        this.member756 = 0;
        this.member3455 = undefined;
        this.member25(d, c, e);
    };
    var a = CoordFine().member3459();
    b.prototype.member25 = function (d, c, e) {
        if (d !== undefined) {
            if (typeof d === 'number') {
                if (typeof c === 'number' && typeof e === 'number') {
                    this.level = d;
                    this.x = c;
                    this.member756 = e;
                } else if (d === -1) {
                    this.level = -1;
                } else {
                    this.level = d >> 28 & 3;
                    this.x = d >> 14 & 16383;
                    this.member756 = d & 16383;
                }
            } else if (d instanceof b) {
                this.level = d.level;
                this.x = d.x;
                this.member756 = d.member756;
            } else if (d instanceof a) {
                this.level = d.level;
                this.x = Math.floor(d.member3454[0] / Class86.member718);
                this.member756 = Math.floor(d.member3454[2] / Class86.member718);
            } else if (d.level !== undefined && d.x !== undefined && d.member756 !== undefined) {
                this.level = d.level;
                this.x = d.x;
                this.member756 = d.member756;
            } else if (d.bitPacked !== undefined) {
                if (d.bitPacked === -1) {
                    this.level = -1;
                } else {
                    this.level = d.bitPacked >> 28 & 3;
                    this.x = d.bitPacked >> 14 & 16383;
                    this.member756 = d.bitPacked & 16383;
                }
            } else if (d.member3455 !== undefined) {
                this.level = d.member3455.level;
                this.x = Math.floor(d.member3455.member3454[0] / Class86.member718);
                this.member756 = Math.floor(d.member3455.member3454[2] / Class86.member718);
            } else if (d.member3460 !== undefined) {
                this.level = d.member3460.level;
                this.x = d.member3460.x;
                this.member756 = d.member3460.member756;
            }
        }
    };
    b.prototype.member3461 = function (c) {
        if (this.member3455 === undefined) {
            this.member3455 = CoordFine();
        }
        this.member3455.level = this.level;
        this.member3455.member3454[0] = this.x * Class86.member718 + (c ? Class86.member718 / 2 : 0);
        this.member3455.member3454[1] = 0;
        this.member3455.member3454[2] = this.member756 * Class86.member718 + (c ? Class86.member718 / 2 : 0);
        return this.member3455;
    };
    b.prototype.member3462 = function () {
        return this.level << 28 | this.x << 14 | this.member756;
    };
    b.prototype.toString = function () {
        return '(x: ' + this.x + ', z: ' + this.member756 + ', level: ' + this.level + ')';
    };
    return function (d, c, e) {
        return new b(d, c, e);
    };
}();