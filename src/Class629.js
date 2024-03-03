import { Class291 } from 'Class291.js';
import { Class421 } from 'Class421.js';
import { Class290 } from 'Class290.js';
export var Class629 = function () {
    var c = {};
    var b;
    var a = Class291();
    var d = function (e) {
        b = e;
    };
    c.member25 = d;
    Class421.member5502.member867 = function (h) {
        var g = b.member7135();
        if (g !== undefined) {
            var e = g.member6453();
            if (e !== undefined) {
                e.member7836(a, true);
                h.member6100[h.member6099++] = a.member3462();
                return;
            }
        }
        h.member6100[h.member6099++] = -1;
    };
    Class421.member5503.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        g.member6100[g.member6099++] = e >> 14 & 16383;
    };
    Class421.member5504.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        g.member6100[g.member6099++] = e >> 28;
    };
    Class421.member5505.member867 = function (g) {
        var e = g.member6100[--g.member6099];
        g.member6100[g.member6099++] = e & 16383;
    };
    Class421.member5506.member867 = function (h) {
        var g = b.member7135();
        if (g !== undefined) {
            var e = g.member6453();
            var i = Class290();
            e.member7838(i);
            h.member6142[h.member6143++] = i;
        } else {
            h.member6142[h.member6143++] = Class290();
        }
    };
    Class421.member5507.member867 = function (g) {
        var e = g.member6142[--g.member6143];
        g.member6100[g.member6099++] = Math.floor(e.member3454[0]);
    };
    Class421.member5508.member867 = function (g) {
        var e = g.member6142[--g.member6143];
        g.member6100[g.member6099++] = Math.floor(e.member3454[1]);
    };
    Class421.member5509.member867 = function (g) {
        var e = g.member6142[--g.member6143];
        g.member6100[g.member6099++] = Math.floor(e.member3454[2]);
    };
    Class421.member5510.member867 = function (g) {
        var e = g.member6142[--g.member6143];
        g.member6100[g.member6099++] = e.level;
    };
    Class421.member5511.member867 = function (g) {
        var e = Class290(g.member6142[--g.member6143]);
        g.member6099 -= 4;
        e.level += g.member6100[g.member6099];
        e.member3454[0] += g.member6100[g.member6099 + 1];
        e.member3454[1] += g.member6100[g.member6099 + 2];
        e.member3454[2] += g.member6100[g.member6099 + 3];
        g.member6142[g.member6143++] = e;
    };
    Class421.member5512.member867 = function (i) {
        i.member6099 -= 2;
        var h = i.member6100[i.member6099];
        var e = i.member6100[i.member6099 + 1] === 1;
        var g = Class291(h);
        i.member6142[i.member6143++] = g.member3461(e);
    };
    Class421.member5513.member867 = function (g) {
        var e = Class291(g.member6142[--g.member6143]);
        g.member6100[g.member6099++] = e.member3462();
    };
    return c;
}();