import { Class605 } from 'Class605.js';
import { Class421 } from 'Class421.js';
import { Class618 } from 'Class618.js';
import { Class95 } from 'Class95.js';
import { Class636 } from 'Class636.js';
export var Class637 = function () {
    var b = {};
    var a;
    var e;
    var d = function (g) {
        a = g;
        e = a.member9179;
    };
    b.member25 = d;
    var c = function (j, i) {
        var k = e.isOpen() ? Class605.member9169 : Class605.member778;
        var h = '';
        var g = '';
        var m = '';
        if (!e.isOpen() && j !== undefined) {
            k = j.member2794();
            h = j.member9538();
            g = j.member9539();
            if (g === null) {
                g = j.member9540();
            }
        }
        i.member6100[i.member6099++] = k;
        i.member6142[i.member6143++] = h;
        i.member6142[i.member6143++] = g;
        i.member6142[i.member6143++] = m;
    };
    Class421.member5543.member867 = function (g) {
        c(e.member9541(), g);
    };
    Class421.member5544.member867 = function (g) {
        c(e.member9542(), g);
    };
    Class421.member5545.member867 = function (g) {
        g.member6100[g.member6099++] = e.member2975();
        g.member6100[g.member6099++] = e.member9543();
    };
    Class421.member5553.member867 = function (g) {
        g.member6100[g.member6099++] = Class618.member8851() ? 1 : 0;
        g.member6142[g.member6143++] = Class618.member9244() === null ? '' : Class618.member9244();
        g.member6142[g.member6143++] = Class618.member9242() === null ? '' : Class618.member9242();
    };
    Class421.member5546.member867 = function (g) {
        var i = e.member9541();
        if (!e.isOpen() && i !== undefined && i.member2794() === Class605.NPC) {
            var h = i.member9531();
            var j = a.member6450.member6451(h);
            if (j !== undefined) {
                g.member8883 = j;
                g.member6100[g.member6099++] = 1;
            }
        }
        g.member6100[g.member6099++] = 0;
    };
    Class421.member5547.member867 = function (h) {
        var i = e.member9541();
        if (!e.isOpen() && i !== undefined && i.member2794() === Class605.PLAYER) {
            var g = i.member9531();
            var j = a.member6452.member6453(g);
            if (j !== undefined) {
                h.member8883 = j;
                h.member6100[h.member6099++] = 1;
                return;
            }
        }
        h.member6100[h.member6099++] = 0;
    };
    Class421.member5263.member867 = function (h) {
        h.member6099 -= 12;
        e.member9544();
        e.member9545();
        var g = e.member9546();
        g.member9547(h.member6100[h.member6099]);
        g.member9548(h.member6100[h.member6099 + 1]);
        g.member9549(h.member6100[h.member6099 + 2]);
        g.member9550(h.member6100[h.member6099 + 3]);
        g.member9551(h.member6100[h.member6099 + 4]);
        g.member9552(h.member6100[h.member6099 + 5]);
        g.member9553(h.member6100[h.member6099 + 6]);
        g.member9554(h.member6100[h.member6099 + 7]);
        g.member9555(h.member6100[h.member6099 + 8]);
        g.member9556(h.member6100[h.member6099 + 9]);
        g.member9557(h.member6100[h.member6099 + 10]);
        g.member9558(h.member6100[h.member6099 + 11]);
        a.member995.member1438(Class95.member811, g.topMiddleID);
        a.member995.member1438(Class95.member811, g.topSideID);
        a.member995.member1438(Class95.member811, g.horizontalEdgeID);
        a.member995.member1438(Class95.member811, g.verticalEdgeID);
        a.member995.member1438(Class95.member811, g.cornerID);
        a.member995.member1438(Class95.member811, g.fontID);
        a.member995.member1438(Class95.member814, g.fontID);
        e.member9559(true);
    };
    Class421.member5264.member867 = function (g) {
        e.member9545();
        e.member9559(false);
    };
    Class421.member5785.member867 = function (h) {
        h.member6099 -= 2;
        var i = h.member6100[h.member6099];
        var g = h.member6100[h.member6099 + 1];
        h.member6100[h.member6099++] = a.member9179.member9560(i, g) ? 1 : 0;
    };
    Class421.member5270.member867 = function (g) {
        minimenu.member9561(css.member6100[--css.member6099]);
    };
    Class421.member5183.member867 = function (h) {
        var i = h.member6100[--h.member6099];
        var g = h.member6142[--h.member6143];
        Class636.member9535(i, g);
    };
    Class421.member5189.member867 = function (g) {
        Class636.member9537(g.member6142[--g.member6143]);
    };
    return b;
}();