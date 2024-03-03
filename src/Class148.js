import { Class95 } from 'Class95.js';
import { Class96 } from 'Class96.js';
import { Class93 } from 'Class93.js';
import { Class80 } from 'Class80.js';
import { Class135 } from 'Class135.js';
export var Class148 = function () {
    var u = {};
    var a = 1;
    var q = 300000;
    var C = Date.now();
    var y;
    var b;
    var s;
    var D;
    var x = 0;
    var j = new Array(0);
    u.member1485 = function () {
        return j.length;
    };
    var k = new Array(0);
    var n = new Array(0);
    var r = 0;
    var d = new Array(0);
    var e = new Array(0);
    var z = false;
    var t = false;
    u.member1486 = function () {
        return z;
    };
    u.member1487 = function (E) {
        z = E;
    };
    u.member1488 = function () {
        return t;
    };
    u.member1489 = function (E) {
        t = E;
    };
    u.member25 = function (E) {
        y = E.member433;
        b = E.member1300;
        s = E.member995;
        D = E.member1490;
    };
    u.member1491 = function (F) {
        var E = A(F);
        if (E === member47) {
            E = o(F);
        }
        var G = D(E, F);
        if (E === member47) {
            i(F, G);
        }
        return G;
    };
    var i = function (G, F) {
        n.push(F);
        for (var E = 0; E < k.length; E++) {
            if (k[E].member1280 === G) {
                k[E].member1492++;
                return;
            }
        }
        k.push({
            member1280: G,
            member1492: 1
        });
    };
    u.member1493 = function (G) {
        var H = G.member1494();
        var F = n.indexOf(G);
        n.splice(F, 1);
        for (var E = 0; E < k.length; E++) {
            if (k[E].member1280 === H) {
                if (--k[E].member1492 === 0) {
                    k.splice(E, 1);
                }
                return;
            }
        }
    };
    var A = function (F) {
        for (var E = 0; E < j.length; E++) {
            if (j[E].member1283(F)) {
                return j[E];
            }
        }
        return member47;
    };
    var m = function (L, I) {
        var S = new Uint32Array(L.member546);
        var T = L.member1294;
        var Q = L.width;
        var V = L.height;
        var P = Q + T + T;
        var K = V + T + T;
        var X = Q * V;
        var J = P * K;
        L.member546 = new ArrayBuffer(J * 4);
        var O = new Uint32Array(L.member546);
        L.width = P;
        L.height = K;
        for (var W = P * T + T, E = 0; E < X; W += P, E += Q) {
            for (var U = 0; U < Q; U++) {
                O[W + U] = S[E + U];
            }
        }
        if (I) {
            return;
        }
        for (var W = 0; W < T; W++) {
            for (U = 0; U < Q; U++) {
                O[T + P * W + U] = S[U];
                O[T + (T + V + W) * P + U] = S[(V - 1) * Q + U];
            }
            for (U = 0; U < V; U++) {
                O[(T + U) * P + W] = S[U * Q];
                O[T + Q + (T + U) * P + W] = S[(U + 1) * Q - 1];
            }
        }
        var H = S[0];
        var F = S[Q - 1];
        var G = S[Q * (V - 1)];
        var R = S[Q * V - 1];
        for (var M = 0; M < T; M++) {
            for (var N = 0; N < T; N++) {
                O[M * P + N] = H;
                O[(M + 1) * P - T + N] = F;
                O[P * (K - M - 1) + N] = G;
                O[P * (K - M) - T + N] = R;
            }
        }
    };
    var c = function (K, E) {
        m(K, 1);
        var H = 0;
        var N = new Uint8Array(K.member546);
        var I = new Uint8Array(N);
        var P;
        var G = E >>> 24;
        var O = E >>> 16 & 255;
        var J = E >>> 8 & 255;
        var M = E & 255;
        for (var F = 0; F < K.height; F++) {
            for (var L = 0; L < K.width; L++) {
                P = false;
                if (I[H + 3] === 0) {
                    if (L > 0 && I[H - 1] !== 0) {
                        P = true;
                    } else if (F > 0 && I[H - K.width * 4 + 3] !== 0) {
                        P = true;
                    } else if (L < K.width - 1 && I[H + 7] !== 0) {
                        P = true;
                    } else if (F < K.height - 1 && I[H + K.width * 4 + 3] !== 0) {
                        P = true;
                    }
                }
                if (P) {
                    N[H++] = G;
                    N[H++] = O;
                    N[H++] = J;
                    N[H++] = M;
                } else {
                    H += 4;
                }
            }
        }
    };
    var B = function (I, E) {
        m(I, 1);
        var L = new Uint8Array(I.member546);
        var G = E >>> 16 & 255;
        var N = E >>> 8 & 255;
        var J = E & 255;
        var M = 255;
        var H;
        for (var F = I.height - 1; F > 0; F--) {
            for (var K = I.width - 1; K > 0; K--) {
                H = (K + F * I.width) * 4;
                if (L[H + 3] === 0 && L[H - 4 - 4 * I.width + 3] !== 0) {
                    L[H] = G;
                    L[H + 1] = N;
                    L[H + 2] = J;
                    L[H + 3] = M;
                }
            }
        }
    };
    var o = function (E) {
        var G = E & 65535;
        var I = s.getFile(Class95.member811, G, 0, Class96.member841, Class93.member796);
        if (I === member47) {
            return member47;
        }
        var H = Class80.member605(I);
        var J = {
            width: H.member556(),
            height: H.member557(),
            member546: H.member600(),
            member1295: H.member595(),
            member1294: a
        };
        m(J, false);
        var F = E >> 17 & 3;
        if (F > 0) {
            c(J, 255);
            if (F === 2) {
                c(J, 4294967295);
            }
        }
        var K = Math.floor(E / Math.pow(2, 19));
        if (K > 0) {
            B(J, K);
        }
        return h(J, E);
    };
    u.member1495 = function (J, I, E, H) {
        var K = {
            width: I,
            height: E,
            member546: J,
            member1295: {
                left: 0,
                member596: 0,
                top: 0,
                member597: 0
            },
            member1294: H
        };
        var G = -++r;
        var F = h(K, G);
        return D(F, G);
    };
    var h = function (I, H) {
        var G = null;
        var E;
        for (var F = 0; F < j.length && G === null; F++) {
            E = j[F];
            G = E.member1284(I.width, I.height);
        }
        if (G === null) {
            var F = x++;
            E = Class135({
                member433: y,
                member1300: b,
                id: F
            });
            j.push(E);
            G = E.member1284(I.width, I.height);
            if (G === null) {
                throw new Error('893 ' + I.width + '893 ' + I.height + '893 ');
            }
        }
        E.member1289(G, H, I);
        return E;
    };
    var g = function (I) {
        for (var E = 0; E < k.length; E++) {
            var H = k[E].member1280;
            var F = A(H);
            if (F === member47) {
                F = o(H);
            }
            if (F !== member47) {
                for (var G = 0; G < n.length; G++) {
                    if (n[G].member1494() === H) {
                        n[G].member1496(F);
                        n.splice(G, 1);
                        G--;
                    }
                }
                k.splice(E, 1);
                E--;
            }
        }
    };
    u.member1497 = function (E) {
        return j[E];
    };
    u.member1498 = function (E) {
        return j[E].member1297();
    };
    u.member487 = function () {
        var F = Date.now();
        for (var E = 0; E < j.length; E++) {
            j[E].member487(F);
        }
        if (F - C > q) {
            C = F;
            v();
        }
    };
    u.member486 = function () {
        g(s);
    };
    u.member1499 = function () {
        C = Date.now();
        v();
    };
    u.member1500 = function (E) {
        d.push(E);
    };
    u.member1501 = function (E) {
        e.push(E);
    };
    var v = function () {
        var H = true;
        for (var Y = 0; Y < e.length; Y++) {
            if (e[Y]() === false) {
                if (false) {
                }
                return;
            }
        }
        for (var Y = 0; Y < d.length; Y++) {
            d[Y]();
        }
        var I = j;
        var R = new Array(0);
        var G = new Array(0);
        for (var Y = 0; Y < I.length; Y++) {
            var E = I[Y].member1286();
            var P = I[Y].member1277();
            var L = y.member580(P.member556(), P.member557(), false, false, false);
            L.member510();
            y.member581(L);
            L.member1340(I[Y].member1277());
            y.member581(null);
            y.gl.bindFramebuffer(y.gl.FRAMEBUFFER, L.member1502());
            y.gl.framebufferTexture2D(y.gl.FRAMEBUFFER, y.gl.COLOR_ATTACHMENT0, y.gl.TEXTURE_2D, I[Y].member1277().member558(), 0);
            y.member582(0, 0, P.member556(), P.member557());
            var S = new Uint8Array(P.member556() * P.member557() * 4);
            y.gl.readPixels(0, 0, P.member556(), P.member557(), y.gl.RGBA, y.gl.UNSIGNED_BYTE, S);
            y.gl.bindFramebuffer(y.gl.FRAMEBUFFER, null);
            R.push({
                member546: S,
                width: P.member556(),
                height: P.member557()
            });
            L.member511();
            for (var U = 0; U < E.length; U++) {
                E[U].member1503 = Y;
                G.push(E[U]);
            }
        }
        G.sort(function (aa, Z) {
            return Math.max(Z.member1287.member1292, Z.member1287.member1293) - Math.max(aa.member1287.member1292, aa.member1287.member1293);
        });
        j = new Array(0);
        x = 0;
        for (var Y = 0; Y < G.length; Y++) {
            var W = G[Y].member1280;
            var F = G[Y].member1503;
            var M = G[Y].member1287;
            var X = R[F].member546;
            var T = R[F].width;
            var S = new Uint8Array(M.member1292 * M.member1293 * 4);
            var V = 0;
            for (var K = M.member1291 + M.member1293 - 1; K >= M.member1291; K--) {
                for (var O = M.member1290; O < M.member1290 + M.member1292; O++) {
                    var Q = (K * T + O) * 4;
                    S[V++] = X[Q];
                    S[V++] = X[Q + 1];
                    S[V++] = X[Q + 2];
                    S[V++] = X[Q + 3];
                }
            }
            var J = {
                width: M.member1292,
                height: M.member1293,
                member546: S.buffer,
                member1295: M.member1295,
                member1294: M.member1294
            };
            var N = h(J, W);
            if (G[Y].member1288 !== undefined) {
                for (var U = 0; U < G[Y].member1288.length; U++) {
                    G[Y].member1288[U].member1496(N, true);
                }
            }
        }
    };
    return u;
}();