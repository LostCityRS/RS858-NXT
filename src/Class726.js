import { Class725 } from 'Class725.js';
import { Class723 } from 'Class723.js';
import { Class501 } from 'Class501.js';
import { Class124 } from 'Class124.js';
export var Class726 = function () {
    var x = {};
    var D;
    var H = null;
    x.member8268 = function () {
        return H;
    };
    var g = null;
    x.member7227 = function () {
        return g;
    };
    var a = null;
    x.member10094 = function () {
        return a;
    };
    var c = undefined;
    var h = false;
    var e = null;
    x.member7141 = function () {
        return e;
    };
    var A = null;
    x.member10095 = function () {
        return A;
    };
    var F = null;
    x.member10096 = function () {
        return F;
    };
    var o = null;
    x.member10097 = function (K) {
        o = K;
    };
    x.member10098 = function () {
        return o;
    };
    var c = null;
    var h = false;
    var J = false;
    x.member10099 = function () {
        return J;
    };
    var b = 0;
    x.member10100 = function () {
        return b;
    };
    var z = null;
    var G = new Array(0);
    var r = 999999;
    var B = function (L, N, M, K) {
        D = L;
        e = g = N;
        A = H = M;
        F = a = K;
    };
    x.member25 = B;
    var E = function (K) {
        return Class725.member4085(K);
    };
    x.member9653 = E;
    var C = function (L, M, K, N) {
        if (g !== null) {
            if (g.member7228() === L && g.member8269() === M) {
                return;
            }
            g.member10053(L);
            g.member10054(M);
            g.member10056(K);
            g.member10058(N);
        } else {
            g = Class723({
                member8439: L,
                member10059: M,
                member10060: K,
                member10061: N
            });
        }
        return true;
    };
    x.member9666 = C;
    x.member8560 = function (K, L, N, M) {
        if (H === null) {
            H = Class723({
                member10059: K,
                member8439: L,
                member10060: N,
                member10061: M
            });
        } else {
            H.member10054(K);
            H.member10053(L);
            H.member10056(N);
            H.member10058(M);
        }
    };
    var y = function () {
        if (o.member7228() !== -1) {
            C(o.member7228(), o.member8269(), o.member10055(), o.member10057());
        }
    };
    x.member9665 = y;
    var v = function () {
        if (J) {
            return false;
        } else if (b > Date.now() - 1000) {
            return true;
        } else {
            var K = D.member8252.member8259();
            var L = K.member8260(Class501.member8157);
            L.member2698.member1056(Class725.member10093());
            K.member8261(L);
            J = true;
            return false;
        }
    };
    x.member9660 = v;
    var u = function (O, P) {
        var M = O.member609() === 1;
        if (z === null) {
            z = new Class124(20000);
        }
        z.member1067(O.getData(), O.member1047(), P);
        if (M) {
            z.member607(0);
            Class725.decode(z);
            G = new Array(Class725.member10092());
            var N = 0;
            for (var K = Class725.member10090(); K <= Class725.member10091(); K++) {
                var L = Class725.member4085(K);
                if (L !== undefined) {
                    G[N++] = L;
                }
            }
            J = false;
            b = Date.now();
            z = null;
        }
    };
    x.member9997 = u;
    var s = function () {
        r = 0;
        return q();
    };
    x.member9662 = s;
    var q = function () {
        if (r < G.length) {
            return G[r++];
        }
        return null;
    };
    x.member9664 = q;
    var n = function (L, N, K, M) {
        d(0, G.length - 1, L, N, K, M);
    };
    x.member9661 = n;
    var d = function (M, P, L, T, K, S) {
        if (M < P) {
            var Q = Math.floor((M + P) / 2);
            var O = M;
            var N = G[Q];
            G[Q] = G[P];
            G[P] = N;
            for (var U = M; U < P; U++) {
                if (t(G[U], N, L, T, K, S) <= 0) {
                    var R = G[U];
                    G[U] = G[O];
                    G[O++] = R;
                    continue;
                }
            }
            G[P] = G[O];
            G[O] = N;
            d(M, O - 1, L, T, K, S);
            d(O + 1, P, L, T, K, S);
        }
    };
    var t = function (L, K, O, R, M, Q) {
        var P = I(L, K, O, R);
        if (P !== 0) {
            if (R) {
                return -P;
            } else {
                return P;
            }
        }
        if (M === -1) {
            return 0;
        }
        var N = I(L, K, M, Q);
        if (Q) {
            return -N;
        } else {
            return N;
        }
    };
    var I = function (L, K, O, M) {
        if (O === 1) {
            var N = L.member9657(), P = K.member9657();
            if (!M) {
                if (N === -1) {
                    N = 2001;
                }
                if (P === -1) {
                    P = 2001;
                }
            }
            return N - P;
        }
        if (O === 2) {
            return L.member9656().localeCompare(K.member9656());
        }
        if (O === 3) {
            if (L.activity === '-') {
                if (K.activity === '-') {
                    return 0;
                }
                return M ? -1 : 1;
            } else if (K.activity === '-') {
                return M ? 1 : -1;
            }
            return L.activity.localeCompare(K.activity);
        }
        if (O === 4) {
            return L.member10074() ? K.member10074() ? 0 : 1 : K.member10074() ? -1 : 0;
        }
        if (O === 5) {
            return L.member10072() ? K.member10072() ? 0 : 1 : K.member10072() ? -1 : 0;
        }
        if (O === 6) {
            return L.member10073() ? K.member10073() ? 0 : 1 : K.member10073() ? -1 : 0;
        }
        if (O === 7) {
            return L.member9584() ? K.member9584() ? 0 : 1 : K.member9584() ? -1 : 0;
        }
        if (O === 8) {
            var N = -1, P = -1;
            if (M) {
                if (N === 1000) {
                    N = -1;
                }
                if (P === 1000) {
                    P = -1;
                }
            } else {
                if (N === -1) {
                    N = 1000;
                }
                if (P === -1) {
                    P = 1000;
                }
            }
            return N - P;
        }
        return L.member9663() - K.member9663();
    };
    var m = function () {
        c = Class723({
            member8439: g.member7228(),
            member10059: g.member8269(),
            member10060: g.member10055(),
            member10061: g.member10057()
        });
    };
    x.member10101 = m;
    var k = function () {
        if (c !== undefined) {
            C(c.member7228(), c.member8269(), c.member10055(), c.member10057());
        }
    };
    x.member10102 = k;
    var j = function (K) {
        h = K;
    };
    x.member10103 = j;
    var i = function () {
        return h;
    };
    x.member10104 = i;
    return x;
}();