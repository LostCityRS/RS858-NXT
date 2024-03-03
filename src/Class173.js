import { Priority } from 'Class96.js';
import { Class172 } from 'Class172.js';
export var Class173 = function () {
    var a = {};
    var d;
    var g;
    var c = 0;
    a.member1709 = function () {
        return c;
    };
    var e = 0;
    a.member1894 = function () {
        return e;
    };
    var b = null;
    a.member1895 = function () {
        return b;
    };
    a.member25 = function (i, h) {
        d = i;
        g = h;
    };
    a.member512 = function () {
        c = 0;
        e = 0;
        b = null;
    };
    a.member1896 = function (h) {
        return b[h];
    };
    a.member78 = function () {
        if (!d.member1437(g)) {
            return false;
        }
        if (b === null) {
            var j = d.member1438(g, 0);
            if (j) {
                e = d.member1439(g).member1440(0);
                b = new Array(e + 1);
                for (var i = 0; i < e; i++) {
                    var h = d.getFile(g, 0, i, Priority.member841);
                    if (h !== undefined) {
                        b[i] = Class172(h);
                        c++;
                    }
                }
                if (false) {
                }
                return true;
            }
        }
        return false;
    };
    return a;
}();