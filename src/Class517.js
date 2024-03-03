import { Class513 } from 'Class513.js';
import { Class295 } from 'Class295.js';
import { Class345 } from 'Class345.js';
import { Class299 } from 'Class299.js';
import { Class336 } from 'Class336.js';
import { Class300 } from 'Class300.js';
import { Class516 } from 'Class516.js';
import { Class392 } from 'Class392.js';
import { Class427 } from 'Class427.js';
import { Class86 } from 'Class86.js';
import { Class95 } from 'Class95.js';
import { Class124 } from 'Class124.js';
import { Class103 } from 'Class103.js';
export var Class517 = function () {
    var H = new Float32Array(3);
    var L = {};
    var N;
    var R;
    var G;
    var Q;
    var M;
    var D;
    var J;
    L.member4480 = function () {
        return J;
    };
    var B = undefined;
    L.member8382 = function (S) {
        B = S;
    };
    var y = new Array(0);
    var i = -1;
    var c = undefined;
    var F = undefined;
    var z;
    L.member25 = function (Z, W, Y, V, X, T, U) {
        N = Z;
        R = W;
        G = Y;
        Q = V;
        M = X;
        D = T;
        J = U;
        Class513.member25(N);
        var S;
        if (Class295.isFileSystemSupported()) {
            S = Class345(N.member3998() + '-scenecache', Class299.member3584().member3474());
        } else if (Class295.isWebSQLSupported()) {
            S = Class336(N.member3998() + '-scenecache', Class299.member3584().member3474());
        } else {
            throw new Error('1152 ');
        }
        z = Class300(S);
    };
    L.member8383 = function () {
        for (var S = 0; S < y.length; S++) {
            y[S].member512();
        }
        y = new Array(0);
        i = -1;
        c = undefined;
    };
    var I = L.member8383;
    L.member8384 = function () {
        for (var S = 0; S < y.length; S++) {
            if (y[S].member8347()) {
                y[S].member512();
                y.splice(S, 1);
                if (i >= S) {
                    i--;
                }
                if (c !== undefined && c >= S) {
                    c--;
                }
                S--;
            }
        }
    };
    L.member8385 = function () {
        c = i;
    };
    L.member8386 = function () {
        i = c;
        c = undefined;
    };
    L.member8387 = function (W, S, U, Y) {
        if (U === undefined) {
            U = true;
        }
        if (Y === undefined) {
            Y = false;
        }
        var V = Class513.member8333(W);
        if (V === undefined) {
            throw new Error('1153 ' + W + '1153 ');
        }
        if (V === member47) {
            return false;
        }
        if (U) {
            I();
        }
        var T = undefined;
        if (Y) {
            T = V.member6200();
        }
        var X = y.length;
        y[X] = Class516({
            member6444: L,
            member433: R,
            member995: N,
            member2970: G,
            member4409: Q,
            member8364: V,
            member6154: T,
            member953: S,
            member8365: Class392.member1448,
            member8367: B,
            member8388: Y
        });
        q(X);
        return true;
    };
    L.member8389 = function (T, S, V, Y) {
        if (V === undefined) {
            V = true;
        }
        if (Y === undefined) {
            Y = false;
        }
        var W = Class513.member8332(T);
        if (W === member47) {
            return false;
        }
        if (W === undefined) {
            throw new Error('1154 ' + T + '1154 ');
        }
        if (V) {
            I();
        }
        var U = undefined;
        if (Y) {
            U = W.member6200();
        }
        var X = y.length;
        y[X] = Class516({
            member6444: L,
            member433: R,
            member995: N,
            member2970: G,
            member4409: Q,
            member8366: M,
            member8364: W,
            member6154: U,
            member953: S,
            member8365: Class392.member1448,
            member8367: B,
            member8388: Y
        });
        q(X);
        return true;
    };
    L.member8390 = function (T, S, V, Y) {
        if (V === undefined) {
            V = true;
        }
        if (Y === undefined) {
            Y = false;
        }
        var W = Class513.member8331(T);
        if (W === member47) {
            return false;
        }
        if (W === undefined) {
            if (false) {
            }
            W = Class427({
                member6188: T.x,
                member6189: T.member756,
                member6190: Class86.member729 * 2
            });
        }
        if (V) {
            I();
        }
        var U = undefined;
        if (Y) {
            U = W.member6200();
        }
        var X = y.length;
        y[X] = Class516({
            member6444: L,
            member433: R,
            member995: N,
            member2970: G,
            member4409: Q,
            member8366: M,
            member8364: W,
            member6154: U,
            member953: S,
            member8365: Class392.member1448,
            member8367: B,
            member8388: Y
        });
        q(X);
        return true;
    };
    var x = L.member8390;
    L.member8391 = function (S, V, Z, U, W, X, Y) {
        if (Y === undefined) {
            Y = true;
        }
        var aa = Class427({
            member6188: S.x + V * Class86.member717 / 2,
            member6189: S.member756 + Z * Class86.member717 / 2,
            member6190: Math.max(V, Z) * Class86.member717
        });
        if (Y) {
            I();
        }
        var T = y.length;
        y[T] = Class516({
            member6444: L,
            member433: R,
            member995: N,
            member2970: G,
            member4409: Q,
            member8366: M,
            member8364: aa,
            member6154: U,
            member953: W,
            member8365: X,
            member8367: B
        });
        q(T);
        return true;
    };
    L.member8392 = function () {
        return y;
    };
    L.member6445 = function () {
        if (i === -1) {
            return null;
        } else {
            return y[i];
        }
    };
    L.member8393 = function (S) {
        i = S;
    };
    var q = L.member8393;
    L.member8394 = function (U, T) {
        if (T === undefined) {
            T = false;
        }
        for (var S = 0; S < y.length; S++) {
            if (y[S].member4695().member6191() === U) {
                if (T === false || y[S].member8347()) {
                    q(S);
                    return true;
                }
            }
        }
        return false;
    };
    L.member8395 = function (U, T) {
        if (T === undefined) {
            T = false;
        }
        for (var S = 0; S < y.length; S++) {
            if (y[S].member4695().member6201(U)) {
                if (T === false || y[S].member8347()) {
                    q(S);
                    return true;
                }
            }
        }
        return false;
    };
    L.member487 = function () {
        E();
        if (i === -1) {
            return;
        }
        y[i].member487();
    };
    L.member486 = function (T, X, U, W, Y, S, V) {
        if (i === -1) {
            return 0;
        }
        return y[i].member486(T, X, U, W, Y, S, V);
    };
    L.member7395 = function (T, W, S, V) {
        if (F === undefined || F !== S) {
            if (i === -1) {
                x(S, V);
            } else {
                var U = Class513.member8331(S);
                if (U !== y[i].member4695()) {
                    x(S, V);
                }
            }
            if (i === -1) {
                return 0;
            }
            F = S;
        }
        return L.load(T, W, S);
    };
    L.load = function (T, U, S) {
        if (i === -1) {
            return 0;
        }
        H[0] = S.x * Class86.member718;
        H[1] = 0;
        H[2] = S.member756 * Class86.member718;
        return y[i].member7395(T, U, H);
    };
    var C = false;
    var s = false;
    var k = 2;
    var A = [
        Class95.member816,
        Class95.member809,
        Class95.member810,
        Class95.member826,
        Class95.member829,
        Class95.member827
    ];
    var K = 1 + 4 + 4 + A.length * 8;
    var t = Class124(K);
    var P = false;
    var v = undefined;
    var r = Class103();
    var m = 0;
    var a = 0;
    var e = 1000;
    var E = function () {
        if (P) {
            var S = Date.now();
            if (S - a > e) {
                u();
                a = S;
            }
            return;
        }
        if (!z.member3590()) {
            return;
        }
        if (v === undefined) {
            z.member3586(O, j);
            v = {};
        }
    };
    var u = function () {
        if (m > Class95.member804) {
            var S = r.member891();
            r.unlink(S);
            v[S.name] = undefined;
            z.deleteFile(S.name);
            m -= S.size;
            if (false) {
            }
        }
    };
    var O = function (U) {
        v = U;
        for (var T in v) {
            var V = v[T];
            var W = false;
            if (V.member3810 !== undefined) {
                for (var S = r.member776(); S !== null; S = r.member777()) {
                    if (S.member3810 !== undefined && V.member3810.getTime() > S.member3810.getTime()) {
                        r.member888(V, S);
                        m += V.size;
                        W = true;
                        break;
                    }
                }
            }
            if (!W) {
                r.member887(V);
                m += V.size;
            }
        }
        if (false) {
        }
        u();
        P = true;
    };
    var j = function () {
        if (false) {
        }
        P = true;
    };
    L.member4590 = function (T, V) {
        if (false) {
        }
        if (!P || v[T] !== undefined || Class95.member804 === 0) {
            return;
        }
        t.member607(0);
        t.member1051(k);
        t.member1056(D);
        t.member1056(J.member3954.member3763());
        for (var S = 0; S < A.length; S++) {
            var U = N.member1439(A[S]);
            if (U === member47) {
                return;
            }
            t.member1056(U.member3895());
            t.member1056(U.member3897());
        }
        z.writeFile(T, t.getData(), false, undefined, undefined);
        z.writeFile(T, V, true, g, b);
        v[T] = {
            name: T,
            member3810: new Date(),
            size: V.byteLength
        };
        m += V.byteLength;
        r.member886(v[T]);
        u();
    };
    var b = function (S) {
        if (false) {
        }
    };
    var g = function (S) {
        if (false) {
        }
    };
    L.member4585 = function (S, U, T) {
        if (false) {
        }
        if (!P) {
            T(S);
            return;
        }
        if (v[S] === undefined) {
            if (false) {
            }
            T(S);
            return;
        }
        z.readFile(S, function (W, X) {
            var V = d(W, X);
            if (V === undefined) {
                T(W);
            } else {
                U(W, V);
            }
        }, T);
    };
    var d = function (aa, X) {
        var ab = Class124(undefined, X);
        var V = ab.member609();
        if (V !== k) {
            if (false) {
            }
            h(aa);
            return undefined;
        }
        var Z = ab.member1073();
        if (Z !== D) {
            if (false) {
            }
            h(aa);
            return undefined;
        }
        var U = ab.member1073();
        if (U !== J.member3954.member3763()) {
            if (false) {
            }
            h(aa);
            return undefined;
        }
        for (var Y = 0; Y < A.length; Y++) {
            var W = N.member1439(A[Y]);
            if (W === member47) {
                if (false) {
                }
                h(aa);
                return undefined;
            }
            var S = ab.member1073();
            var T = ab.member1074();
            if (S !== W.member3895() || T !== W.member3897()) {
                if (false) {
                }
                h(aa);
                return undefined;
            }
        }
        return ab;
    };
    L.member4586 = function (S) {
        r.unlink[v[S]];
        v[S] = undefined;
        z.deleteFile(S, o, n);
    };
    var h = L.member4586;
    var o = function (S) {
        if (false) {
        }
    };
    var n = function (S) {
        if (false) {
        }
    };
    return L;
}();