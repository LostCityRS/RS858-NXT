import { Packet } from 'Class124.js';
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
        var t = Packet(b());
        t.p1(r);
        t.p1(0);
        t.p1(0);
        t.p1(0);
        t.p1(0);
        t.p1(0);
        t.p1(0);
        t.p1(0);
        t.p1(0);
        t.p2(0);
        t.p1(1);
        t.p3(0);
        t.p2(0);
        t.pjstr(m, true);
        t.pjstr(n, true);
        t.pjstr(q, true);
        t.pjstr(g, true);
        t.p1(0);
        t.p2(0);
        t.pjstr(i, true);
        t.pjstr(k, true);
        t.p1(0);
        t.p1(0);
        for (var s = 0; s < e.length; s++) {
            t.p4(0);
        }
        t.p4(0);
        t.pjstr(d, true);
        return t;
    };
    h.member681 = j;
    var b = function () {
        var s = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + 3 + 2 + 1 + 2 + 1 + 1 + 4 + 4 + 4 + 4;
        s += Packet.member1152(m, true);
        s += Packet.member1152(n, true);
        s += Packet.member1152(q, true);
        s += Packet.member1152(g, true);
        s += Packet.member1152(i, true);
        s += Packet.member1152(k, true);
        s += Packet.member1152(d, true);
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