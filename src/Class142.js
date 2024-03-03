import { Priority } from 'Class96.js';
import { Class141 } from 'Class141.js';
export var Class142 = function () {
    var e = {};
    var g;
    var d;
    var i = 65535;
    var h = 0;
    e.member1433 = function () {
        return h;
    };
    var c = 0;
    e.member1434 = function () {
        return c;
    };
    var a = null;
    var b = null;
    e.member25 = function (k, j) {
        g = k;
        d = j;
    };
    e.member512 = function () {
        h = 0;
        c = 0;
        a = null;
        b = null;
    };
    e.member1435 = function () {
        return a;
    };
    e.member1436 = function () {
        return b;
    };
    e.member78 = function () {
        if (!g.member1437(d)) {
            return false;
        }
        if (a === null) {
            var m = g.member1438(d, 0);
            if (m) {
                c = g.member1439(d).member1440(0);
                a = new Array(c + 1);
                for (var k = 0; k < c; k++) {
                    var j = g.getFile(d, 0, k, Priority.member841);
                    if (j !== undefined) {
                        a[k] = Class141(k, j);
                        h++;
                    }
                }
                b = Class141(-1, null);
                if (false) {
                }
                return true;
            }
        }
        return false;
    };
    return e;
}();