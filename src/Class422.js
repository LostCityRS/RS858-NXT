import { Class421 } from 'Class421.js';
import { Class371 } from 'Class371.js';
import { Class332 } from 'Class332.js';
import { Class347 } from 'Class347.js';
import { Class351 } from 'Class351.js';
export var Class422 = function () {
    var d = {};
    var a;
    var c;
    var b;
    var e = function (g, h) {
        a = g;
        c = a.member4480();
        b = h;
    };
    d.member25 = e;
    Class421.member5655.member867 = function (i) {
        i.member6099 -= 2;
        var j = i.member6100[i.member6099];
        var g = i.member6100[i.member6099 + 1];
        if (j > 700 || g > 700) {
            i.member6100[i.member6099++] = 256;
        }
        var h = (Math.random() * (g + j) - j + 800) / 100;
        i.member6100[i.member6099++] = Math.floor(Math.pow(2, h) + 0.5);
    };
    Class421.member5360.member867 = function (g) {
        var h = g.member6100[--g.member6099];
        if (h != c.member3965.getValue()) {
            c.member3965.setValue(a.member433, a.member6101.member6102(), h);
            c.member3972();
            a.member6103.member6104(false);
        }
    };
    Class421.member5359.member867 = function (g) {
        var h = g.member6100[--g.member6099];
        if (h != c.member3962.getValue()) {
            c.member3962.setValue(a.member433, a.member6101.member6102(), h);
            c.member3972();
            a.member6103.member6104(false);
        }
    };
    Class421.member5361.member867 = function (g) {
        var h = g.member6100[--g.member6099];
        if (h != c.member3963.getValue()) {
            c.member3963.setValue(a.member433, a.member6101.member6102(), h);
            c.member3972();
            a.member6103.member6104(false);
        }
    };
    Class421.member5375.member867 = function (g) {
        var h = g.member6100[--g.member6099];
        if (h != c.member3964.getValue()) {
            c.member3964.setValue(a.member433, a.member6101.member6102(), h);
            c.member3972();
            a.member6103.member6104(false);
        }
    };
    Class421.member5194.member867 = function (k) {
        k.member6099 -= 3;
        var j = k.member6100[k.member6099];
        var g = k.member6100[k.member6099 + 1];
        var i = k.member6100[k.member6099 + 2];
        var h = k.member6100[k.member6099 + 3];
        Class371.member4060(Class332.member3788, j, g, h, Class347.member3905, undefined, undefined, undefined, undefined, undefined, i);
    };
    Class421.member5197.member867 = function (g) {
        member5200(g);
    };
    Class421.member5202.member867 = function (g) {
        member5203(g);
    };
    Class421.member5200.member867 = function (k) {
        k.member6099 -= 4;
        var j = k.member6100[k.member6099];
        var g = k.member6100[k.member6099 + 1];
        var i = k.member6100[k.member6099 + 2];
        var h = k.member6100[k.member6099 + 3];
        Class371.member4060(Class332.member3788, j, g, h, Class347.member3905, undefined, undefined, undefined, undefined, undefined, i);
    };
    Class421.member5203.member867 = function (m) {
        m.member6099 -= 5;
        var k = m.member6100[m.member6099];
        var g = m.member6100[m.member6099 + 1];
        var j = m.member6100[m.member6099 + 2];
        var i = m.member6100[m.member6099 + 3];
        var h = m.member6100[m.member6099 + 4];
        Class371.member4060(Class332.member3788, k, g, i, Class347.member3905, Class351.member3922, undefined, null, 0, h, j);
    };
    Class421.member6003.member867 = function (o) {
        o.member6099 -= 6;
        var n = o.member6100[o.member6099];
        var g = o.member6100[o.member6099 + 1];
        var m = o.member6100[o.member1045 + 2];
        var k = o.member6100[o.member6099 + 3];
        var h = o.member6100[o.member6099 + 4];
        var j = o.member6100[o.member6099 + 5];
        var i = Class371.member4059(Class332.member3788, n, g, k, Class347.member3905, Class371, Class351.member3922, undefined, undefined, -1, h);
        if (j !== undefined && i !== null && i !== undefined) {
            Class371.member4023(j, i, m);
        }
    };
    Class421.member6001.member867 = function (h) {
        h.member6099 -= 1;
        var g = h.member6100[h.member6099];
        Class371.member4025(g);
    };
    Class421.member6002.member867 = function (h) {
        h.member6099 -= 1;
        var g = h.member6100[h.member6099];
        Class371.member4026(g);
    };
    Class421.member6004.member867 = function (h) {
        h.member6099 -= 3;
        var g = h.member6100[h.member6099];
        var i = h.member6100[h.member6099 + 1];
        var j = h.member6100[h.member6099 + 2];
        Class371.member3300(g, i, j);
    };
    Class421.member6005.member867 = function (h) {
        h.member6099 -= 2;
        var g = h.member6100[h.member6099];
        var i = h.member6100[h.member6099 + 1];
        Class371.member4037(g, i);
    };
    Class421.member5195.member867 = function (g) {
        g.member6099 -= 1;
        var h = g.member6100[g.member6099];
        Class371.member4040(h);
    };
    Class421.member5196.member867 = function (g) {
        g.member6099 -= 2;
        var h = g.member6100[g.member6099];
        Class371.member4053(h);
    };
    Class421.member5198.member867 = function (h) {
        h.member6099 -= 3;
        var i = h.member6100[h.member6099];
        var g = h.member6100[h.member6099 + 2];
        Class371.member4040(i, g);
    };
    Class421.member6000.member867 = function (g) {
        Class371.member4046(true);
    };
    Class421.member5199.member867 = function (g) {
        g.member6099 -= 3;
    };
    Class421.member5201.member867 = function (k) {
        k.member6099 -= 4;
        var j = k.member6100[k.member6099];
        var g = k.member6100[k.member6099 + 1];
        var i = k.member6100[k.member6099 + 2];
        var h = k.member6100[k.member6099 + 3];
        Class371.member4060(Class332.member3788, j, g, h, Class347.member3907, undefined, undefined, undefined, undefined, undefined, i);
    };
    Class421.member6006.member867 = function (i) {
        i.member6099 -= 5;
        var m = i.member6100[i.member6099];
        var g = i.member6100[i.member6099 + 1];
        var j = i.member6100[i.member6099 + 2];
        var h = i.member6100[i.member6099 + 3];
        var k = i.member6100[i.member6099 + 4];
        m = m !== 0 ? true : false;
        j *= 0.01;
        Class371.member4022(m, g, j, h, k);
    };
    return d;
}();