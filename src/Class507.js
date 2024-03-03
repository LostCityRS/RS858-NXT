import { Class86 } from 'Class86.js';
import { Class129 } from 'Class129.js';
export var Class507 = function (e) {
    var g = {};
    var d = null;
    var c, b;
    var i, h;
    if (e.member8296 !== undefined && e.member8297 !== undefined && e.member8298 !== undefined && e.member8299 !== undefined && e.member8300 !== undefined) {
        d = e.member8296;
        c = e.member8297;
        b = e.member8298;
        i = e.member8299;
        h = e.member8300;
    } else {
        throw new Error('1279 ');
    }
    var a = function (q, n, m) {
        var k = Math.floor(n / Class86.member729);
        if (k < c || k > b) {
            return -1;
        }
        var j = Math.floor(m / Class86.member729);
        if (j < i || j > h) {
            return -1;
        }
        var o = d[k - c][j - i];
        if (o === undefined) {
            return -1;
        } else {
            return o.member4570(q, n % Class86.member729, m % Class86.member729);
        }
    };
    g.member4570 = a;
    g.member4112 = function (m, k) {
        var j = a(1, m, k);
        return j !== -1 && (j & Class129.member1175) !== 0;
    };
    g.member8301 = function (n, m, k) {
        var j = a(n, m, k);
        return j !== -1 && (j & Class129.member1176) !== 0;
    };
    g.member8302 = function (j, n, m, k) {
        var o = a(n, m, k);
        if (o === -1) {
            return true;
        }
        if ((o & Class129.member1177) !== 0) {
            return j === 0;
        } else if (n > 0 && (o & Class129.member1175) !== 0) {
            return n - 1 === j;
        } else {
            return true;
        }
    };
    e = undefined;
    return g;
};