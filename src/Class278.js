import { Class277 } from 'Class277.js';
export var Class278 = function () {
    var a = function () {
        var c = {};
        var b = false;
        c.member67 = function () {
            return b;
        };
        var g = new Array(0);
        var d;
        c.member3281 = function () {
            return d;
        };
        c.member25 = function (h) {
            d = h;
            b = true;
            return true;
        };
        c.member3295 = function () {
            for (var h = 0; h < g.length; h++) {
                var i = g[h];
                i.member3295();
            }
        };
        c.member3300 = function (h, j, m, k) {
            if (e(h) !== undefined) {
                console.log('Audio Mixer Error: Attempting to add a buss with Id: ' + h + ' but a buss with this Id already exists!');
                return null;
            }
            var n = undefined;
            if (j !== undefined) {
                n = e(j);
            }
            var o = Class277();
            var i = d.member3301(n);
            o.member25(h, m, i, c, k, n);
            g.push(o);
            return o;
        };
        c.member3302 = function (h) {
            return false;
        };
        var e = function (i) {
            for (var h = 0; h < g.length; h++) {
                var j = g[h];
                if (j.member444() === i) {
                    return g[h];
                }
            }
            return undefined;
        };
        c.member3303 = e;
        return c;
    };
    return a;
}();