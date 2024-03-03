import { Class105 } from 'Class105.js';
import { Class124 } from 'Class124.js';
import { Class214 } from 'Class214.js';
export var Class275 = function () {
    var c = false;
    var d = true;
    if (false) {
    }
    var b = function (e) {
        if (e.member895 === undefined || e.member3254 === undefined) {
            throw new Error('1106 ');
        }
        var g = { member895: e.member895 };
        if (false) {
        }
        this.member3255 = Class105(g);
        this.member3254 = e.member3254;
    };
    b.prototype.member907 = function () {
        return this.member3255.member907();
    };
    var a = function (g, e) {
        return g + Math.pow(2, 8) * e;
    };
    b.prototype.member3256 = function (k, j, h, g, e) {
        var i = {
            member2779: h,
            member2778: g,
            groupData: e
        };
        this.member3255.put(i, e.byteLength, a(k, j));
    };
    b.prototype.member3257 = function (i, q, m, k) {
        var j = this.member3255.find(a(i, q));
        if (j === null) {
            return undefined;
        }
        if (j.member2779 !== k.member3258(q) || j.member2778 !== k.member3259(q)) {
            this.member3260(i, q);
            if (false) {
            }
            return undefined;
        }
        var o = Class124(undefined, j.groupData);
        if (k.member3261(q) === 1) {
            return j.groupData.slice(0);
        }
        var e;
        if (k.member3262(q)) {
            e = m;
        } else {
            var h = parseInt(m);
            var n = k.member3263(q);
            for (var g = 0; g < n.length; g++) {
                if (h === n[g]) {
                    e = g;
                    break;
                }
            }
            if (e === undefined) {
                throw new Error('1107 ' + m + '1107 ' + h + '1107 ');
            }
        }
        return Class214.member2638(o, e);
    };
    b.prototype.getFile = function (j, i, e, h) {
        var g = this.member3257(j, i, e, h);
        if (g === undefined) {
            return undefined;
        }
        return Class124(undefined, g);
    };
    b.prototype.member3264 = function (j, i, e, h) {
        var g = this.member3257(j, i, e, h);
        if (g === undefined) {
            return false;
        }
        return true;
    };
    b.prototype.member3260 = function (g, e) {
        if (false) {
        }
        this.member3255.remove(a(g, e));
    };
    b.prototype.member3265 = function () {
        this.member3255.member301();
        if (false) {
        }
    };
    b.prototype.member78 = function () {
        this.member3255.member905(this.member3254);
    };
    b.prototype.member3266 = function () {
        return 'Mem:' + Math.floor(this.member3255.member906() / (1024 * 1024)) + 'M';
    };
    return function (e) {
        return new b(e);
    };
}();