import { Class248 } from 'Class248.js';
import { Class247 } from 'Class247.js';
import { Class197 } from 'Class197.js';
import { Class95 } from 'Class95.js';
import { Class271 } from 'Class271.js';
import { Class96 } from 'Class96.js';
export var Class406 = function () {
    var a = function (e, d, c, g, i, h, b) {
        if (e === undefined || d === undefined || c === undefined || g === undefined) {
            throw new Error('1391 ');
        }
        member46(this, Class248, Class247.member2326, Class197.member2326, e);
        this.member1643 = d;
        this.member1642 = c;
        this.member1641 = g;
        this.member1644 = i;
        this.member1566 = h;
        this.member1565 = b;
        this.member1640 = member47;
        this.member4659 = member47;
    };
    member45(Class248, a);
    a.prototype.member2889 = function (k, j) {
        if (this.member1644 === undefined) {
            if (this.member1640 === member47) {
                var h = this.member4660(k, this.member1643, this.member1642);
                if (h === member47) {
                    return member47;
                } else if (h === undefined) {
                    return undefined;
                } else {
                    this.member1640 = [h.getData()];
                }
            }
        } else {
            if (this.member1644.member3251.length < 1) {
                return undefined;
            }
            if (this.member1640 === member47) {
                var d = new Array(this.member1644.member3251.length);
                var i = true;
                for (var g = 0; g < this.member1644.member3251.length; g++) {
                    var e = this.member4660(k, this.member1644.member3251[g].member1643, this.member1644.member3251[g].member1642);
                    if (e === member47) {
                        i = false;
                    } else if (e !== undefined) {
                        d[g] = e.getData();
                    } else {
                        d[g] = new ArrayBuffer(0);
                    }
                }
                if (i) {
                    this.member1640 = d;
                } else {
                    return member47;
                }
            }
        }
        var b = {
            member1643: this.member1643,
            member1642: this.member1642,
            member1644: this.member1644,
            member1640: this.member1640,
            member1641: this.member1641,
            member1566: this.member1566,
            member1565: this.member1565
        };
        var c = this.member1640;
        return {
            member2890: b,
            member2891: c
        };
    };
    a.prototype.member4660 = function (e, b, g) {
        var c = b | g << 7;
        var d = e.member1551(Class95.member809, c, Class271.member3211);
        if (d === undefined) {
            return undefined;
        } else if (d === false) {
            return member47;
        } else {
            return e.getFile(Class95.member809, c, Class271.member3211, Class96.member841);
        }
    };
    a.prototype.member2892 = function (b) {
        this.member4659 = b;
    };
    a.prototype.member2893 = function () {
        return this.member4659;
    };
    return function (e, d, c, g, i, h, b) {
        return new a(e, d, c, g, i, h, b);
    };
}();