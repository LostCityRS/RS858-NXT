import { Class421 } from 'Class421.js';
import { Class620 } from 'Class620.js';
export var Class621 = function () {
    var b = {};
    var a;
    b.member25 = function (c) {
        a = c;
    };
    Class421.member6079.member867 = function (c) {
        c.member6100[c.member6099++] = Class620.member9285().length;
    };
    Class421.member6080.member867 = function (d) {
        var c = d.member6100[--d.member6099];
        d.member6100[d.member6099++] = Class620.member9286(c);
    };
    Class421.member6081.member867 = function (c) {
        var d = c.member6100[--c.member6099];
        c.member6100[c.member6099++] = Class620.member3995(d).id;
    };
    Class421.member6082.member867 = function (c) {
        var d = c.member6100[--c.member6099];
        c.member6100[c.member6099++] = Class620.member3995(d).member9289().length;
    };
    Class421.member6083.member867 = function (c) {
        c.member6099 -= 2;
        var d = c.member6100[c.member6099];
        var e = c.member6100[c.member6099 + 1];
        c.member6100[c.member6099++] = Class620.member3995(d).member9290(e);
    };
    Class421.member6084.member867 = function (c) {
        c.member6099 -= 2;
        var d = c.member6100[c.member6099];
        var e = c.member6100[c.member6099 + 1];
        c.member6100[c.member6099++] = Class620.member3995(d).member9291(e);
    };
    Class421.member6085.member867 = function (c) {
        c.member6099 -= 2;
        var d = c.member6100[c.member6099];
        var e = c.member6100[c.member6099 + 1];
        c.member6100[c.member6099++] = Class620.member3995(d).member9292(e) ? 1 : 0;
    };
    Class421.member6086.member867 = function (c) {
        var d = c.member6100[--c.member6099];
        c.member6100[c.member6099++] = Class620.member3995(d).member9293().length;
    };
    Class421.member6087.member867 = function (c) {
        c.member6099 -= 2;
        var e = c.member6100[c.member6099];
        var d = c.member6100[c.member6099 + 1];
        c.member6100[c.member6099++] = Class620.member3995(e).member9294(d);
    };
    Class421.member6088.member867 = function (c) {
        c.member6099 -= 2;
        var e = c.member6100[c.member6099];
        var d = c.member6100[c.member6099 + 1];
        c.member6100[c.member6099++] = Class620.member3995(e).member9295(d);
    };
    Class421.member6089.member867 = function (d) {
        d.member6099 -= 3;
        var g = d.member6100[d.member6099];
        var h = d.member6100[d.member6099 + 1];
        var e = d.member6100[d.member6099 + 2];
        var c = Class620.member3995(g).member9296(h, e);
        d.member6100[d.member6099++] = c === null ? 0 : c;
    };
    Class421.member6090.member867 = function (c) {
        c.member6099 -= 3;
        var e = c.member6100[c.member6099];
        var g = c.member6100[c.member6099 + 1];
        var d = c.member6100[c.member6099 + 2];
        c.member6100[c.member6099++] = Class620.member3995(e).member9296(g, d) === null ? 0 : 1;
    };
    return b;
}();