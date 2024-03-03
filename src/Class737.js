import { Class433 } from 'Class433.js';
import { Class317 } from 'Class317.js';
export var Class737 = function () {
    var c = {};
    var a;
    var d = function (e) {
        a = e;
    };
    c.member25 = d;
    Class433.member6238.member6428 = function (r, s) {
        var A = a.member7259;
        while (r.member1047() < s) {
            var z = true;
            var C = r.member609() === 1;
            var D = r.member1089();
            var q = r.member1089();
            var v = r.member608();
            var n = r.member609();
            var h = r.member609();
            var i = (h & 1) !== 0;
            var k = (h & 2) !== 0;
            var o = '';
            var m = -1;
            var g = 0;
            if (v > 0) {
                o = r.member1089();
                m = r.member609();
                g = r.member1073();
            }
            var e = r.member1089();
            for (var B = 0; B < A.member7223(); B++) {
                var t = A.member7220(B);
                if (!C && D === t.member7233) {
                    if (v !== t.status) {
                        var u = true;
                        var x = 0;
                        while (x < A.member7246()) {
                            var y = A.member7243(x);
                            if (y.member7233 === D) {
                                if (v !== 0 && y.member7258 === 0) {
                                    A.member7245(x);
                                    u = false;
                                } else if (v === 0 && y.member7258 !== 0) {
                                    A.member7245(x);
                                    u = false;
                                }
                            }
                            x++;
                        }
                        if (u) {
                            A.member7244({
                                member3564: Date.now() / 1000,
                                member7233: D,
                                member7258: v
                            });
                        }
                    }
                    t.member7233 = D;
                    t.member7234 = q;
                    t.status = v;
                    t.member9446 = o;
                    t.member8438 = n;
                    t.member9447 = m;
                    t.member7229 = k;
                    t.member7230 = i;
                    t.member9442 = g;
                    t.member7260 = e;
                    z = false;
                    break;
                } else if (Class317.member3718(q, A.member7209()) === Class317.member3718(t.member7233, A.member7209())) {
                    t.member7233 = D;
                    t.member7234 = q;
                    z = false;
                    break;
                }
            }
            if (z && A.member7223() < A.member7224) {
                A.member7221({
                    member7233: D,
                    member7234: q,
                    status: v,
                    member9446: o,
                    member8438: n,
                    member9447: m,
                    member7229: k,
                    member7230: i,
                    member9442: g,
                    member7260: e
                });
            }
        }
        A.member7251(A.member7249);
        a.member7187.member7261();
        A.member7231();
        a.member6452.member6456(b);
        A.member7255();
    };
    var b = function (e) {
        e.member8028();
    };
    Class433.member6265.member6428 = function (e, h) {
        var g = a.member7259;
        g.member7251(g.member7248);
        a.member7187.member7261();
        g.member7255();
    };
    Class433.member6254.member6428 = function (e, g) {
        a.member7259.member7253(e.member609());
    };
    return c;
}();