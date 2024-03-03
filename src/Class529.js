import { Class421 } from 'Class421.js';
export var Class529 = function () {
    Class421.member5636.member867 = function (e) {
        e.member6099 -= 2;
        var d = e.member6100[e.member6099];
        var c = e.member6100[e.member6099 + 1];
        e.member6100[e.member6099++] = d + c;
    };
    Class421.member5637.member867 = function (e) {
        e.member6099 -= 2;
        var d = e.member6100[e.member6099];
        var c = e.member6100[e.member6099 + 1];
        e.member6100[e.member6099++] = d - c;
    };
    Class421.member5638.member867 = function (e) {
        e.member6099 -= 2;
        var d = e.member6100[e.member6099];
        var c = e.member6100[e.member6099 + 1];
        e.member6100[e.member6099++] = d * c;
    };
    Class421.member5639.member867 = function (e) {
        e.member6099 -= 2;
        var d = e.member6100[e.member6099];
        var c = e.member6100[e.member6099 + 1];
        e.member6100[e.member6099++] = Math.floor(d / c);
    };
    Class421.member5640.member867 = function (b) {
        var a = b.member6100[--b.member6099];
        b.member6100[b.member6099++] = Math.floor(Math.random() * a);
    };
    Class421.member5641.member867 = function (b) {
        var a = b.member6100[--b.member6099];
        b.member6100[b.member6099++] = Math.floor(Math.random() * (a + 1));
    };
    Class421.member5642.member867 = function (e) {
        e.member6099 -= 5;
        var b = e.member6100[e.member6099];
        var a = e.member6100[e.member6099 + 1];
        var d = e.member6100[e.member6099 + 2];
        var c = e.member6100[e.member6099 + 3];
        var g = e.member6100[e.member6099 + 4];
        e.member6100[e.member6099++] = Math.floor(b + (a - b) * (g - d) / (c - d));
    };
    Class421.member5643.member867 = function (a) {
        a.member6099 -= 2;
        var c = a.member6100[a.member6099];
        var b = a.member6100[a.member6099 + 1];
        a.member6100[a.member6099++] = Math.floor(c + c * b / 100);
    };
    Class421.member5644.member867 = function (a) {
        a.member6099 -= 2;
        var c = a.member6100[a.member6099];
        var b = a.member6100[a.member6099 + 1];
        a.member6100[a.member6099++] = c | 1 << b;
    };
    Class421.member5645.member867 = function (a) {
        a.member6099 -= 2;
        var c = a.member6100[a.member6099];
        var b = a.member6100[a.member6099 + 1];
        a.member6100[a.member6099++] = c & 4294967295 - (1 << b);
    };
    Class421.member5646.member867 = function (a) {
        a.member6099 -= 2;
        var c = a.member6100[a.member6099];
        var b = a.member6100[a.member6099 + 1];
        a.member6100[a.member6099++] = (c & 1 << b) != 0 ? 1 : 0;
    };
    Class421.member5647.member867 = function (e) {
        e.member6099 -= 2;
        var d = e.member6100[e.member6099];
        var c = e.member6100[e.member6099 + 1];
        e.member6100[e.member6099++] = Math.floor(d % c);
    };
    Class421.member5648.member867 = function (e) {
        e.member6099 -= 2;
        var d = e.member6100[e.member6099];
        var c = e.member6100[e.member6099 + 1];
        if (d === 0) {
            e.member6100[e.member6099++] = 0;
        } else {
            e.member6100[e.member6099++] = Math.floor(Math.pow(d, c));
        }
    };
    Class421.member5649.member867 = function (e) {
        e.member6099 -= 2;
        var d = e.member6100[e.member6099];
        var c = e.member6100[e.member6099 + 1];
        if (d === 0) {
            e.member6100[e.member6099++] = 0;
        } else if (c === 0) {
            e.member6100[e.member6099++] = 2147483647;
        } else {
            e.member6100[e.member6099++] = Math.floor(Math.pow(d, 1 / c));
        }
    };
    Class421.member5650.member867 = function (e) {
        e.member6099 -= 2;
        var d = e.member6100[e.member6099];
        var c = e.member6100[e.member6099 + 1];
        e.member6100[e.member6099++] = d & c;
    };
    Class421.member5651.member867 = function (e) {
        e.member6099 -= 2;
        var d = e.member6100[e.member6099];
        var c = e.member6100[e.member6099 + 1];
        e.member6100[e.member6099++] = d | c;
    };
    Class421.member5652.member867 = function (e) {
        e.member6099 -= 2;
        var d = e.member6100[e.member6099];
        var c = e.member6100[e.member6099 + 1];
        e.member6100[e.member6099++] = d < c ? d : c;
    };
    Class421.member5653.member867 = function (e) {
        e.member6099 -= 2;
        var d = e.member6100[e.member6099];
        var c = e.member6100[e.member6099 + 1];
        e.member6100[e.member6099++] = d > c ? d : c;
    };
    Class421.member5654.member867 = function (e) {
        e.member6099 -= 3;
        var d = e.member6100[e.member6099];
        var c = e.member6100[e.member6099 + 1];
        var g = e.member6100[e.member6099 + 2];
        e.member6100[e.member6099++] = Math.floor(d * g / c);
    };
    Class421.member5657.member867 = function (c) {
        var b = c.member6100[--c.member6099];
        c.member6100[c.member6099++] = ~b;
    };
}();