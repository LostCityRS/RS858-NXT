import { Class421 } from 'Class421.js';
import { Class633 } from 'Class633.js';
import { Class451 } from 'Class451.js';
export var Class634 = function () {
    var b = {};
    var a;
    var c = function (d) {
        a = d;
    };
    b.member25 = c;
    Class421.member5874.member867 = function (d) {
        d.member6100[d.member6099++] = Math.floor(Date.now() / 86400000) - 11745;
    };
    Class421.member5663.member867 = function (d) {
        var e = d.member6100[--d.member6099];
        d.member6142[d.member6143++] = Class633.member9461(Class633.member9467(e), a.clientParameters.member7138.value);
    };
    Class421.member5687.member867 = function (e) {
        var d = e.member6100[--e.member6099];
        e.member6142[e.member6143++] = Class633.member9462(d * 60000, a.clientParameters.member7138.value, true) + ' UTC';
    };
    Class421.member5877.member867 = function (e) {
        var d = e.member6100[--e.member6099];
        var g = true;
        if (d < 0) {
            g = (d + 1) % 4 == 0;
        } else if (d < 1582) {
            g = d % 4 == 0;
        } else if (d % 4 != 0) {
            g = false;
        } else if (d % 100 != 0) {
            g = true;
        } else if (d % 400 != 0) {
            g = false;
        }
        e.member6100[e.member6099++] = g ? 1 : 0;
    };
    Class421.member5873.member867 = function (d) {
        var e = Class451.member7178();
        d.member6100[d.member6099++] = e / 60000;
    };
    Class421.member5879.member867 = function (d) {
        var e = d.member6100[--d.member6099];
        d.member6100[d.member6099++] = Class633.member9467(e) / 60000;
    };
    Class421.member5875.member867 = function (h) {
        h.member6099 -= 3;
        var e = h.member6100[h.member6099];
        var j = h.member6100[h.member6099 + 1];
        var d = h.member6100[h.member6099 + 2];
        var g = Class633.member9466(0, 0, 12, e, j, d);
        var i = Class633.member9464(g);
        if (d < 1970) {
            i--;
        }
        h.member6100[h.member6099++] = i;
    };
    Class421.member5878.member867 = function (d) {
        var g = d.member6100[--d.member6099];
        var e = Class633.member9465(g);
        d.member6100[--d.member6099] = e[0];
        d.member6100[--d.member6099] = e[1];
        d.member6100[--d.member6099] = e[2];
        d.member6099 += 3;
    };
    Class421.member5876.member867 = function (d) {
        var e = Class451.member7178();
        d.member6100[d.member6099++] = Class633.member9468(e);
    };
    return b;
}();