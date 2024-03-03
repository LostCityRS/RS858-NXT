import { Class148 } from 'Class148.js';
export var Class566 = function () {
    var a = 4294967295;
    var b = function (m) {
        var v = {};
        var s = false;
        var e = undefined;
        var E = {};
        v.member3622 = function (x) {
            if (!s) {
                x = a;
            }
            j(x);
            if (E[x] === undefined) {
                return member47;
            } else {
                return E[x];
            }
        };
        var F = -1;
        v.member3621 = function () {
            return F;
        };
        var D = -1;
        var C = null;
        v.member3598 = function () {
            return C;
        };
        var r = null;
        v.member3625 = function (y, x) {
            if (!s) {
                y = a;
            }
            return r[y][x];
        };
        var i = null;
        v.member3626 = function (x) {
            return i[x];
        };
        var d;
        var j = function (Q) {
            if (!s) {
                Q = a;
            }
            if (e[Q] === undefined) {
                var L = F * D;
                var M = new Uint8Array(L * L * 4);
                var H = new Uint8Array(d.buffer);
                var J = Q >> 24 & 255;
                var U = Q >> 16 & 255;
                var P = Q >> 8 & 255;
                var R = Q & 255;
                for (var N = 0; N < H.length; N += 4) {
                    M[N] = H[N] * J / 255;
                    M[N + 1] = H[N + 1] * U / 255;
                    M[N + 2] = H[N + 2] * P / 255;
                    M[N + 3] = H[N + 3] * R / 255;
                }
                e[Q] = Class148.member1495(M.buffer, L, L, 0);
            }
            if (e[Q].member1541(true)) {
                var y = e[Q].member1539();
                E[Q] = y.member1277();
                var x = y.member1285(e[Q].member1494());
                var T = x.member493;
                var S = x.member494;
                var K = x.member495 - T;
                var I = x.member496 - S;
                r[Q] = new Array(q);
                for (var O = 0; O < q; O++) {
                    r[Q][O] = {
                        member493: T + K * (O % D / D),
                        member494: S + I * (Math.floor((q - O - 1) / D) / D),
                        member495: T + K * (O % D / D + 1 / D),
                        member496: S + I * (Math.floor((q - O - 1) / D) / D + 1 / D)
                    };
                }
            }
        };
        if (m.member8852 !== undefined && m.member8853 !== undefined && m.member8854 !== undefined && m.member8855 !== undefined) {
            D = m.member8852;
            C = m.member8854;
            s = m.member8855;
            var q = D * D;
            for (var c = 0; c < q; c++) {
                var t = m.member8853[c];
                if (t.member556() > F) {
                    F = t.member556();
                }
                if (t.member557() > F) {
                    F = t.member557();
                }
            }
            var G = F * D;
            d = new Uint32Array(G * G);
            r = [];
            i = new Array(q);
            for (var c = 0; c < q; c++) {
                var t = m.member8853[c];
                var A = new Uint32Array(t.member600());
                var k = t.member556();
                var g = t.member557();
                var B = c % D * F;
                var z = Math.floor(c / D) * F;
                for (var o = 0; o < k; o++) {
                    for (var n = 0; n < g; n++) {
                        var u = A[n * k + o];
                        d[(z + n) * G + B + o] = u;
                    }
                }
                var h = t.member595();
                i[c] = {
                    top: h.top,
                    member597: h.member597,
                    left: h.left,
                    member596: h.member596
                };
            }
            e = {};
            e[a] = Class148.member1495(d.buffer, G, G, 0);
            j(a);
            if (!s) {
                d = undefined;
            }
        } else {
            throw new Error('1159 ');
        }
        m = undefined;
        return v;
    };
    return b;
}();