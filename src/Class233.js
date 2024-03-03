import { Class124 } from 'Class124.js';
export var Class233 = function (o) {
    var h = {};
    var r = 7;
    var m = '';
    var n = '';
    var q = '';
    var g = '';
    var i = '';
    var k = '';
    var d = navigator.userAgent;
    var a;
    var e = new Array(3);
    var j = function () {
        var t = Class124(b());
        t.member1051(r);
        t.member1051(0);
        t.member1051(0);
        t.member1051(0);
        t.member1051(0);
        t.member1051(0);
        t.member1051(0);
        t.member1051(0);
        t.member1051(0);
        t.member1054(0);
        t.member1051(1);
        t.member1055(0);
        t.member1054(0);
        t.member1065(m, true);
        t.member1065(n, true);
        t.member1065(q, true);
        t.member1065(g, true);
        t.member1051(0);
        t.member1054(0);
        t.member1065(i, true);
        t.member1065(k, true);
        t.member1051(0);
        t.member1051(0);
        for (var s = 0; s < e.length; s++) {
            t.member1056(0);
        }
        t.member1056(0);
        t.member1065(d, true);
        return t;
    };
    h.member681 = j;
    var b = function () {
        var s = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 3 + 2 + 1 + 2 + 1 + 1 + 4 + 4 + 4 + 4;
        s += Class124.member1152(m, true);
        s += Class124.member1152(n, true);
        s += Class124.member1152(q, true);
        s += Class124.member1152(g, true);
        s += Class124.member1152(i, true);
        s += Class124.member1152(k, true);
        s += Class124.member1152(d, true);
        return s;
    };
    h.member2791 = b;
    var c = function (s) {
        a = s;
        if (a.member433 !== undefined && a.member433.gl !== undefined) {
            var t = a.member433.gl;
            n = t.getParameter(t.RENDERER);
            g = t.getParameter(t.VERSION);
        }
        if (d.length > 120) {
            d = d.substr(0, 120);
        }
    };
    h.member25 = c;
    o = undefined;
    return h;
};