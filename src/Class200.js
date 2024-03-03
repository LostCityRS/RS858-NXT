import { Class194 } from 'Class194.js';
import { Class86 } from 'Class86.js';
export var Class200 = function (l) {
    var d = {};
    var h = false;
    var b = null;
    var g;
    var i;
    var c;
    var e;
    var j = null;
    if (l.request.member1641 !== undefined && l.request.member1566 !== undefined && l.request.member2374 !== undefined && l.request.member1655 !== undefined) {
        i = l.request.member1641;
        g = l.request.member1566;
        c = l.request.member2374;
        e = l.request.member1655;
        if (false) {
        } else {
            d.name = '';
        }
    } else {
        throw new Error('2154 ');
    }
    var a = function (m, n) {
        b[n].setup.member1569 = m;
        b[n].setup.member1647 = false;
    };
    d.member1648 = a;
    var k = function (v, t) {
        if (b === null) {
            var r = g.length;
            b = new Array(r);
            for (var n = 0; n < r; n++) {
                var p = b[n] = {
                    member2239: g[n],
                    setup: {
                        member1569: null,
                        member1647: false
                    }
                };
                p.setup.member1653 = [
                    p.member2239.member2247,
                    p.member2239.member2248,
                    p.member2239.member2249,
                    p.member2239.member2250,
                    p.member2239.member2252,
                    p.member2239.member2253
                ];
            }
        }
        var u = true;
        for (var n = 0; n < b.length; n++) {
            if (b[n].setup.member1569 === null && b[n].setup.member1653.length > 0) {
                if (!b[n].setup.member1647) {
                    v.member1654(b[n].setup.member1653, t, n);
                    b[n].setup.member1647 = true;
                }
                u = false;
            }
        }
        if (!u) {
            return null;
        }
        var o = new Array(b.length);
        var m = new Array(b.length * 2);
        var q = 0;
        for (var n = 0; n < b.length; n++) {
            var p = b[n];
            var s = Class194({
                member1569: p.setup.member1569,
                member2239: p.member2239,
                member2240: function (E, D) {
                    E += p.member2239.member1593[0];
                    D += p.member2239.member1593[2];
                    var H = Math.floor(Class86.member729 / c) * Class86.member718;
                    var x = Math.floor(E / H) + 1;
                    if (x < 0) {
                        x = 0;
                    }
                    var C = x + 1;
                    if (C >= e.length) {
                        C = e.length - 1;
                        x = e.length - 1;
                    }
                    var G = Math.floor(D / H) + 1;
                    if (G < 0) {
                        G = 0;
                    }
                    var F = G + 1;
                    if (F >= e[x].length) {
                        F = e[x].length - 1;
                        G = e[x].length - 1;
                    }
                    var z = E & H - 1;
                    var y = D & H - 1;
                    var B = (e[x][G] * (H - z) + e[C][G] * z) / H;
                    var A = (e[x][F] * (H - z) + e[C][F] * z) / H;
                    return (B * (H - y) + A * y) / H;
                }
            });
            o[n] = {};
            o[n].member2285 = s.member681();
            m[q++] = o[n].member2285.member1570;
            m[q++] = o[n].member2285.member1699;
        }
        m.length = q;
        return {
            member1658: o,
            member1659: m
        };
    };
    d.member78 = k;
    l = undefined;
    return d;
};