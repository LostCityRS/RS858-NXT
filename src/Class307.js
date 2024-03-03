import { Class306 } from 'Class306.js';
import { Class41 } from 'Class41.js';
import { Class140 } from 'Class140.js';
import { Class49 } from 'Class49.js';
export var Class307 = function (d) {
    var o = Class306();
    var v = Class41.create();
    var c = Class140.create();
    var k = Class140.create();
    var e = Class49.member313();
    var i = new Float32Array([
        1,
        1,
        -1
    ]);
    var s = new Float32Array([
        0,
        0,
        1
    ]);
    if (true) {
        Class140.member1354(c);
    } else {
    }
    var h = function (x) {
        Class41.add(v, x);
    };
    o.translate = h;
    var b = function (x) {
        v = Class41.set(x, v);
    };
    o.setPosition = b;
    var a = function (x) {
        Class41.set(v, x);
    };
    o.member2026 = a;
    var q = function (x) {
        Class140.member323(x, c, c);
        Class140.normalize(c);
    };
    o.rotate = q;
    var r = function (x) {
        c = Class140.set(x, c);
    };
    o.setOrientation = r;
    var u = function (x) {
        Class140.set(c, x);
    };
    o.member3654 = u;
    var n = function (x) {
        Class140.member318(Class140.member1355(c, k), s, x);
    };
    o.member3649 = n;
    var m = function (x) {
        Class41.set(v, x);
    };
    o.member3650 = m;
    var g = function (x) {
        Class140.member316(Class140.member1355(c, k), x);
        Class49.member313(e);
        Class49.translate(e, v);
        Class49.member323(e, x, x);
        Class49.scale(x, i);
        Class49.inverse(x);
        x;
    };
    o.member3651 = g;
    o.member3652 = function () {
        return 90;
    };
    o.member3653 = function (x, y) {
        return x / y;
    };
    var t;
    o.member3655 = function () {
        return t;
    };
    o.member3656 = function (x) {
        t = x;
    };
    var j;
    o.member3657 = function () {
        return j;
    };
    o.member3658 = function (x) {
        j = x;
    };
    d = undefined;
    return o;
};