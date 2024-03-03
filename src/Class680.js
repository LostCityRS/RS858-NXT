import { Class433 } from 'Class433.js';
import { Class231 } from 'Class231.js';
import { Class541 } from 'Class541.js';
export var Class680 = function () {
    var b = {};
    var a;
    var c = function (d) {
        a = d;
    };
    b.member25 = c;
    Class433.member6358.member6428 = function (e, g) {
        var h = e.g4();
        var d = a.member7135();
        if (d !== undefined) {
            d.member8210(h);
        }
    };
    Class433.member6236.member6428 = function (d, e) {
        a.member6452.member8461(d, e);
    };
    Class433.member6264.member6428 = function (h, j) {
        var i = h.g2_alt3();
        if (i == 65535) {
            i = -1;
        }
        var d = h.g1();
        var g = h.g1();
        var e = h.gjstr();
        if (d >= 1 && d <= a.member9179.member9837) {
            if (e === 'null') {
                e = null;
            }
            a.member9179.member9838(d, e, i, g === 0);
        }
    };
    Class433.member6256.member6428 = function (d, e) {
        a.member6116.member8789().member9852(d.g1());
        a.member7187.member9152();
    };
    Class433.member6257.member6428 = function (d, e) {
        a.member6116.member8789().member9853(d.g2s());
        a.member7187.member9152();
    };
    Class433.member6291.member6428 = function (e, h) {
        var d = Class231.member2769(e, 0, 24);
        var g = e.g4s();
        if (g === d) {
            e.pos -= 28;
            a.member9854().member2814(e);
            e.pos += 4;
        } else if (false) {
        }
    };
    Class433.member6375.member6428 = function (g, h) {
        var d = a.member7135();
        var e = g.g2s();
        if (d !== undefined) {
            d.member8221(e);
        }
    };
    Class433.member6372.member6428 = function (e, g) {
        var d = a.member7135();
        if (d !== undefined) {
            d.member8222(Class541.member6097[e.g1()]);
        }
    };
    Class433.member6408.member6428 = function (g, h) {
        var e = g.g1();
        e = -e - 2;
        var d = g.g1s();
        a.member9207(e, true).member8027(g, d);
    };
    Class433.member6409.member6428 = function (e, g) {
        var d = e.g1();
        d = -d - 2;
        a.member9855(d);
    };
    Class433.member6364.member6428 = function (e, g) {
        var d = a.member7135();
        if (d !== undefined) {
            d.member8178(e.g3s());
            d.member8176(e.g1() === 1);
        }
    };
    return b;
}();