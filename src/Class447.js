import { Class337 } from 'Class337.js';
export var Class447 = function (o) {
    var h = {};
    var m;
    var j;
    if (o.member1789 !== undefined && o.member1790 !== undefined) {
        m = o.member1789;
        j = o.member1790;
    } else if (o.rectangle !== undefined) {
        m = Class337.create(o.rectangle.member1792());
        j = Class337.create(o.rectangle.member1793());
    } else if (o.member680 !== undefined) {
        m = o.member680.member1789;
        j = o.member680.member1790;
    } else {
        throw new Error('1592 ');
    }
    var n = function () {
        return {
            member1789: m,
            member1790: j
        };
    };
    h.member681 = n;
    var e = function (r) {
        m[0] += r[0];
        m[1] += r[1];
        j[0] += r[0];
        j[1] += r[1];
    };
    h.translate = e;
    var k = function () {
        return m;
    };
    h.member1792 = k;
    var i = function () {
        return j;
    };
    h.member1793 = i;
    var d = function () {
        return j[0] - m[0];
    };
    h.member556 = d;
    var b = function () {
        return j[1] - m[1];
    };
    h.member557 = b;
    var g = function () {
        return new Array([
            m[0] + (j[0] - m[0]) / 2,
            m[1] + (j[1] - m[1]) / 2
        ]);
    };
    h.member1798 = g;
    var q = function (r) {
        if (r[0] >= m[0] && r[0] <= j[0] && r[1] >= m[1] && r[1] <= j[1]) {
            return true;
        } else {
            return false;
        }
    };
    h.member7103 = q;
    var c = function (r) {
        return !(r.member1792()[0] > j[0] || r.member1793()[0] < m[0] || r.member1792()[1] > j[1] || r.member1793()[1] < m[1]);
    };
    h.member7104 = c;
    var a = function (t, s) {
        var r = t[0];
        if (r < m[0]) {
            r = m[0];
        } else if (r > j[0]) {
            r = j[0];
        }
        s[0] = r;
        var u = t[1];
        if (u < m[1]) {
            u = m[1];
        } else if (u > j[1]) {
            u = j[1];
        }
        s[1] = u;
    };
    h.member1806 = a;
    o = undefined;
    return h;
};