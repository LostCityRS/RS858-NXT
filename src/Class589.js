import { Class41 } from 'Class41.js';
export var Class589 = function () {
    var a = function () {
        var g = {};
        var e = false;
        var d = Class41.create();
        g.member6208 = function (j) {
            Class41.set(d, j);
        };
        var c = Class41.create();
        g.member6216 = function (j) {
            Class41.set(c, j);
        };
        var i = -1;
        var b = Class41.create();
        g.member6214 = function () {
            if (!h()) {
                return undefined;
            }
            return {
                member8861: d,
                member8862: c,
                member8863: b
            };
        };
        g.member8986 = function (j) {
            e = true;
            c.set(j.member3454);
            if (i === -1) {
                Class41.set(j.member3454, d);
                Class41.member313(b);
            }
            i = j.level;
        };
        g.member6215 = function (j) {
            Class41.set(d, j);
        };
        g.member6217 = function (j) {
            j.level = i;
            g.member6208(j.member3454);
        };
        g.member6218 = function () {
            return 0;
        };
        g.stop = function () {
            Class41.set(d, c);
            Class41.member313(b);
        };
        g.readyanim = function () {
            return e;
        };
        var h = g.readyanim;
        g.member6219 = function (j) {
            e = true;
            j.gFloatArray(c);
        };
        return g;
    };
    return a;
}();