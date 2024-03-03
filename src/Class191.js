import { Class178 } from 'Class178.js';
import { Class50 } from 'Class50.js';
import { Class96 } from 'Class96.js';
import { Class93 } from 'Class93.js';
import { Class190 } from 'Class190.js';
export var Class191 = function () {
    var c = {};
    var i;
    var d;
    var b;
    var a = Class178(c, undefined, undefined, undefined, undefined, undefined, true);
    c.member2134 = function () {
        return a;
    };
    var g = new Float32Array(Class50.member361 * 3 * 4);
    c.member2135 = function () {
        return g;
    };
    var j = new Float32Array(Class50.member362 * 4);
    c.member2136 = function () {
        return j;
    };
    var h = new Float32Array(Class50.member363 * 4);
    c.member2137 = function () {
        return h;
    };
    var e = true;
    c.member2138 = function () {
        return e;
    };
    c.member2139 = function (k) {
        e = k;
    };
    c.member25 = function (m) {
        i = m.member995;
        d = m.member2140;
        b = m.member2141;
        var o = new Float32Array([
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0
        ]);
        for (var k = 0; k < Class50.member361; k++) {
            for (var n = 0; n < 12; n++) {
                g[k * 12 + n] = o[n];
            }
        }
    };
    c.member2142 = function (o, n) {
        var m = i.getFile(b, o, 0, Class96.member841, Class93.member797);
        if (m === member47) {
            return member47;
        }
        var k = Class178(c, undefined, undefined, undefined, m, n);
        return k;
    };
    c.member2143 = function (m) {
        var k = i.getFile(d, m, 0, Class96.member841, Class93.member797);
        if (k === member47) {
            return member47;
        }
        var n = Class190({ data: k });
        return n;
    };
    c.member2144 = function (m, n, k) {
        return Class178(c, m, n, k);
    };
    return c;
}();