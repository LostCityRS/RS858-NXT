import { Class86 } from 'Class86.js';
import { Class121 } from 'Class121.js';
import { Class416 } from 'Class416.js';
export var Class417 = function () {
    var v = {};
    var a = Class86.member731 * 4;
    var m = Class86.member731 * 8;
    var n = Class86.member731 * 12;
    var k = Class86.member731 * 16;
    var j = Class86.member730;
    var b = Class86.member730 * 4;
    var x = Class86.member730 * 30;
    v.member4794 = function () {
        return b * b;
    };
    var h = v.member4794;
    v.member4795 = function () {
        return b;
    };
    var e = v.member4795;
    v.member4796 = function () {
        return x * x;
    };
    var d = v.member4796;
    v.member4797 = function () {
        return x;
    };
    var c = v.member4797;
    var s = 150000;
    var r = 325000;
    var t = 450000;
    v.member4798 = function () {
        return s;
    };
    v.member4799 = function () {
        return r;
    };
    v.member4800 = function () {
        return t;
    };
    v.member4801 = function (y) {
        return s = y;
    };
    v.member4802 = function (y) {
        return r = y;
    };
    v.member4803 = function (y) {
        return t = y;
    };
    var g = Class121.member893;
    v.member4804 = function () {
        if (u) {
            return Class121.member1031;
        } else {
            return g;
        }
    };
    v.member4805 = function (y) {
        g = y;
    };
    var i = -1;
    v.member4806 = function () {
        return i;
    };
    v.member4807 = function (y) {
        i = y;
    };
    var u = false;
    v.member4808 = function (y) {
        u = y;
    };
    v.member3657 = function () {
        if (u) {
            return c() + Class86.member718 * 2;
        } else if (g === Class121.member893) {
            return a + Class86.member718 * 2;
        } else if (g === Class121.member796) {
            return m + Class86.member718 * 2;
        } else if (g === Class121.member881) {
            return n + Class86.member718 * 2;
        } else if (g === Class121.member797) {
            return k + Class86.member718 * 2;
        } else {
            return e() + Class86.member718 * 2;
        }
    };
    v.member4809 = function (B, y, A) {
        if (u) {
            return 0;
        }
        var z;
        if (g === Class121.member893) {
            z = 1;
        } else if (g === Class121.member796) {
            z = 2;
        } else if (g === Class121.member881) {
            z = 3;
        } else if (g === Class121.member797) {
            z = 4;
        } else {
            z = 8;
        }
        return new Float32Array([
            A - B * z * y / Class416.member4787 - Class86.member718 / 2,
            A
        ]);
    };
    var o = function (z, y) {
        if (i !== -1) {
            return i;
        } else if (z < a * a) {
            return Class121.member893;
        } else if (z < m * m) {
            return Class121.member796;
        } else if (z < n * n) {
            return Class121.member881;
        } else if (z < k * k) {
            return Class121.member797;
        } else if (z < v.member4794()) {
            return Class121.member1028;
        } else {
            return Class121.member778;
        }
    };
    v.member4571 = o;
    v.member4810 = function () {
        return a;
    };
    v.member4811 = function () {
        return m;
    };
    v.member4812 = function () {
        return n;
    };
    v.member4813 = function () {
        return k;
    };
    var q = function (y, z) {
        if (z) {
            return Class121.member1031;
        } else if (y < s * s) {
            return Class121.member1029;
        } else if (y < r * r) {
            return Class121.member1030;
        } else {
            return Class121.member1031;
        }
    };
    v.member4814 = q;
    return v;
}();