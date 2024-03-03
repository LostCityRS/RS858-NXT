import { Class41 } from 'Class41.js';
import { Class86 } from 'Class86.js';
export var Class591 = function () {
    var a = function () {
        var i = {};
        var k = false;
        var h = Class41.create();
        i.member8928 = function (n) {
            Class41.set(h, n);
        };
        var e = Class41.create();
        i.member8936 = function (n) {
            Class41.set(e, n);
        };
        var c = i.member8936;
        var d = -1;
        var g = Class41.create();
        var j = Class41.create();
        var b = false;
        i.member8989 = function (n) {
            b = n;
        };
        i.member8934 = function () {
            if (!m()) {
                return undefined;
            }
            return {
                member7699: h,
                member8935: e,
                member8863: g
            };
        };
        i.setDestination = function (n) {
            k = true;
            Class41.set(n.member3454, e);
            if (d === -1) {
                Class41.set(n.member3454, h);
                Class41.member313(g);
            }
            d = n.level;
        };
        i.member2026 = function (n) {
            Class41.set(h, n);
        };
        i.member7838 = function (n) {
            n.level = d;
            i.member2026(n.member3454);
        };
        i.stop = function () {
            Class41.set(h, e);
            Class41.member313(g);
        };
        i.readyanim = function () {
            return k;
        };
        var m = i.readyanim;
        i.member8938 = function (q, o, n, t) {
            if (!m() || !b) {
                return;
            }
            if (q === undefined) {
                return;
            }
            if (!n) {
                return;
            }
            c(j);
            var s = d;
            if (o.member4112(j[0] >> Class86.member720, j[2] >> Class86.member720)) {
                s = d + 1;
            }
            var r = q.member4115(s, j[0], j[2], true, t);
            if (r === -1) {
                return undefined;
            }
            r += Class86.member718;
            if (j[1] < r) {
                e[1] = r;
            }
        };
        i.member6219 = function (n) {
            k = true;
            n.gFloatArray(e);
        };
        return i;
    };
    return a;
}();