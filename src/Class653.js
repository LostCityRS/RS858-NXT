import { Class421 } from 'Class421.js';
import { Class453 } from 'Class453.js';
import { Class622 } from 'Class622.js';
export var Class653 = function () {
    var b = {};
    var a;
    var d;
    var c;
    var e = function (h, g, i) {
        a = h;
        d = g;
        c = i;
    };
    b.member25 = e;
    Class421.member5884.member867 = function (i) {
        var g = i.member6100[--i.member6099];
        var h = d.member9653(g);
        if (h !== undefined) {
            i.member6100[i.member6099++] = h.member304();
            i.member6142[i.member6143++] = h.member9654();
            i.member6100[i.member6099++] = h.member9655();
            i.member6142[i.member6143++] = h.member9656();
            i.member6100[i.member6099++] = h.member9657();
            i.member6100[i.member6099++] = h.member9658();
            i.member6142[i.member6143++] = h.member9659();
        } else {
            i.member6100[i.member6099++] = -1;
            i.member6142[i.member6143++] = '';
            i.member6100[i.member6099++] = 0;
            i.member6142[i.member6143++] = '';
            i.member6100[i.member6099++] = 0;
            i.member6100[i.member6099++] = 0;
            i.member6142[i.member6143++] = '';
        }
    };
    Class421.member5885.member867 = function (h) {
        var g = d.member9653(d.member7227().member7228());
        h.member6100[h.member6099++] = g === undefined ? 0 : g.flags;
    };
    Class421.member5387.member867 = function (g) {
        g.member6099--;
    };
    Class421.member5880.member867 = function (g) {
        if (a.member8233() !== Class453.member7199 && a.member8233() !== Class453.member7201 || c.member8235()) {
            g.member6100[g.member6099++] = 1;
            return;
        }
        if (d.member9660()) {
            g.member6100[g.member6099++] = 1;
        } else {
            g.member6100[g.member6099++] = 0;
        }
    };
    Class421.member5385.member867 = function (i) {
        i.member6099 -= 4;
        var h = i.member6100[i.member6099];
        var k = i.member6100[i.member6099 + 1] === 1;
        var g = i.member6100[i.member6099 + 2];
        var j = i.member6100[i.member6099 + 3] === 1;
        d.member9661(h, k, g, j);
    };
    Class421.member5881.member867 = function (h) {
        var g = d.member9662();
        if (g !== null) {
            h.member6100[h.member6099++] = g.member9663();
            h.member6100[h.member6099++] = g.member304();
            h.member6142[h.member6143++] = g.member9654();
            h.member6100[h.member6099++] = g.member9655();
            h.member6142[h.member6143++] = g.member9656();
            h.member6100[h.member6099++] = g.member9657();
            h.member6100[h.member6099++] = g.member9658();
            h.member6142[h.member6143++] = g.member9659();
        } else {
            h.member6100[h.member6099++] = -1;
            h.member6100[h.member6099++] = 0;
            h.member6142[h.member6143++] = '';
            h.member6100[h.member6099++] = 0;
            h.member6142[h.member6143++] = '';
            h.member6100[h.member6099++] = 0;
            h.member6100[h.member6099++] = 0;
            h.member6142[h.member6143++] = '';
        }
    };
    Class421.member5882.member867 = function (h) {
        var g = d.member9664();
        if (g !== null) {
            h.member6100[h.member6099++] = g.member9663();
            h.member6100[h.member6099++] = g.member304();
            h.member6142[h.member6143++] = g.member9654();
            h.member6100[h.member6099++] = g.member9655();
            h.member6142[h.member6143++] = g.member9656();
            h.member6100[h.member6099++] = g.member9657();
            h.member6100[h.member6099++] = g.member9658();
            h.member6142[h.member6143++] = g.member9659();
        } else {
            h.member6100[h.member6099++] = -1;
            h.member6100[h.member6099++] = 0;
            h.member6142[h.member6143++] = '';
            h.member6100[h.member6099++] = 0;
            h.member6142[h.member6143++] = '';
            h.member6100[h.member6099++] = 0;
            h.member6100[h.member6099++] = 0;
            h.member6142[h.member6143++] = '';
        }
    };
    Class421.member5386.member867 = function (g) {
        d.member9665();
    };
    Class421.member5883.member867 = function (h) {
        var k = h.member6100[--h.member6099];
        var i = h.member6142[--h.member6143];
        if (a.member8233() !== Class453.member7199 || c.member8235()) {
            h.member6100[h.member6099++] = 0;
        } else {
            var g = a.clientParameters.member8025.value;
            var m = Class622.member9301(g, Class622.member9299.member9297, k);
            var j = Class622.member9300(g, Class622.member9299.member9297, k);
            h.member6100[h.member6099++] = d.member9666(k, i, m, j) ? 1 : 0;
        }
    };
    return b;
}();