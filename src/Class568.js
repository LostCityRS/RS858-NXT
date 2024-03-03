import { Class140 } from 'Class140.js';
import { Class41 } from 'Class41.js';
import { Class567 } from 'Class567.js';
export var Class568 = function () {
    var a = function () {
        var j = {};
        var e = Class140.create();
        var k;
        var m = false;
        var b = Class41.create();
        j.member8856 = function (o) {
            Class41.set(b, o);
        };
        var i = false;
        var h = Class41.create();
        j.member6208 = function (o) {
            Class41.set(h, o);
        };
        var g = Class41.create();
        var d = -1;
        var c = Class41.create();
        j.member8857 = function () {
            return k;
        };
        j.member8858 = function (o) {
            m = true;
            k = o.member4179;
            Class41.set(o.member8859, b);
            i = o.member8860;
            d = k.member4110();
        };
        j.member6214 = function () {
            if (!n()) {
                return undefined;
            }
            k.member2026(g);
            return {
                member8861: h,
                member8862: g,
                member8863: c
            };
        };
        j.member6215 = function (o) {
            Class41.set(b, o);
            if (i) {
                k.member3320().member2029(e);
                Class140.member318(e, o);
            }
            Class41.add(o, h);
        };
        j.member6216 = function (o) {
            Class41.set(b, o);
            if (i) {
                k.member3320().member2029(e);
                Class140.member318(e, o);
            }
            Class41.add(o, g);
        };
        j.member6217 = function (o) {
            o.level = d;
            j.member6208(o.member3454);
        };
        j.member6218 = function () {
            return 0;
        };
        j.readyanim = function () {
            return m && k !== undefined;
        };
        var n = j.readyanim;
        j.member6219 = function (r, o) {
            var q = r.g1();
            var s = r.g2();
            if (q === Class567.PLAYER) {
                k = o.member6452.member6453(s);
            } else {
                k = o.member6450.member6451(s);
            }
            r.gFloatArray(b);
            i = r.g1() === 1;
            m = true;
        };
        j.member8864 = function (o) {
            k = o.member6452.member6453(o.member7135().member7649());
        };
        return j;
    };
    return a;
}();