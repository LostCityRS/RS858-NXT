import { Class310 } from 'Class310.js';
import { Class309 } from 'Class309.js';
export var Class311 = function () {
    var a = function (F) {
        var B = {};
        var n = [];
        var z;
        B.member3328 = function () {
            return z;
        };
        var t = Class310.member3304;
        B.member3665 = function () {
            return t;
        };
        var q;
        B.member3317 = function (J) {
            q = J;
        };
        var y;
        var e;
        B.member3666 = function (J) {
            e = J;
        };
        B.member3667 = function () {
            return e;
        };
        var g;
        var u;
        B.member3668 = function (K, J) {
            g = K;
            u = J;
        };
        B.member3669 = function () {
            return g;
        };
        var s;
        var k;
        B.member3350 = function (K, J) {
            s = K;
            k = J;
        };
        var c;
        B.member3670 = function (J) {
            c = J;
        };
        B.member3671 = function () {
            return c;
        };
        var C;
        B.setPosition = function (J) {
            C = J;
        };
        B.member2026 = function () {
            return C;
        };
        var G;
        B.setVelocity = function (J) {
            G = J;
        };
        var o;
        var v;
        B.member3362 = function (K, J) {
            o = K;
            v = J;
        };
        var E;
        var I;
        var r;
        var m;
        B.member3672 = function (J) {
            m = J;
        };
        var b;
        B.member3673 = function (J) {
            b = J;
        };
        B.member3674 = function () {
            return b;
        };
        var A;
        B.member3675 = function (J) {
            A = J;
        };
        B.member3676 = function () {
            return A;
        };
        var j = false;
        var i = 3000;
        var h = 0;
        var d = 1;
        B.getPriority = function () {
            var M = -1;
            for (var J = 0; J < n.length; J++) {
                var L = n[J];
                var K = L.getPriority();
                if (K > M) {
                    M = K;
                }
            }
            return M;
        };
        B.member3331 = function (J) {
            z = J;
            q = 1;
            y = false;
            e = false;
            g = false;
            u = -1;
            o = 10;
            v = 100;
            m = 1;
            s = undefined;
            k = undefined;
            c = undefined;
            C = undefined;
            G = undefined;
            b = undefined;
            t = Class310.member3662;
        };
        var H = function () {
            n = [];
            z = undefined;
            t = Class310.member3304;
            q = 1;
            y = false;
            e = undefined;
            g = false;
            u = 0;
            s = undefined;
            k = undefined;
            c = undefined;
            C = undefined;
            G = undefined;
            o = 0;
            v = 0;
            E = 0;
            I = false;
            m = 1;
            b = undefined;
            j = false;
            i = 3000;
            h = 0;
            d = 1;
        };
        B.start = function () {
            y = true;
            if (t >= Class310.member3662 && t < Class310.member3307) {
                t = Class310.member3307;
            }
        };
        var D = function (K) {
            if (K === undefined || K <= 0) {
                for (var J = 0; J < n.length; J++) {
                    var L = n[J];
                    L.member3327();
                }
                t = Class310.member3310;
                y = false;
            } else {
                t = Class310.member3663;
                for (var J = 0; J < n.length; J++) {
                    var L = n[J];
                    L.member3317(0, K);
                }
            }
        };
        B.member3327 = D;
        B.member3677 = function (K) {
            r = K;
            if (K > 0) {
                for (var J = 0; J < n.length; J++) {
                    var L = n[J];
                    L.member3322();
                }
            }
        };
        B.member3678 = function () {
            if (t >= Class310.member3662 && t < Class310.member3307) {
                t = Class310.member3307;
            }
        };
        B.member3679 = function () {
            if (t !== Class310.member3310 && t !== Class310.member3311) {
                D();
            }
            H();
            t = Class310.member3664;
        };
        B.member3295 = function () {
            x();
        };
        B.member3335 = function (J, L, K, M) {
            j = J;
            i = L;
            h = K;
            d = M;
        };
        var x = function () {
            for (var M = 0; M < n.length; M++) {
                var N = n[M];
                if (N.member3333() !== B) {
                    n.splice(M, 1);
                    --M;
                    if (n.length <= 0) {
                        t = Class310.member3311;
                    }
                }
            }
            if (t === Class310.member3663) {
                if (B.member3315() === false) {
                    D();
                }
            }
            if (t === Class310.member3307) {
                var L = z.member3665();
                if (L === Class309.member3661) {
                    t = Class310.member3308;
                }
            }
            if (t === Class310.member3308 && y) {
                var N = F.member3375(z.member2794(), B);
                if (N !== undefined) {
                    var K = F.member3374().member3303(A);
                    var J = z.member3680();
                    var O = N.member3316(J ? undefined : z.getData(), J ? z.getData : undefined, K, 1, e, g, u, m);
                    if (O === true) {
                        t = Class310.member3309;
                        N.member3350(s, k);
                        N.setPosition(C);
                        N.setVelocity(G);
                        N.member3362(o, v);
                        N.member3317(q);
                        N.start();
                        n.push(N);
                        y = false;
                    } else {
                        N.member33();
                    }
                }
            }
            for (var M = 0; M < n.length; M++) {
                var N = n[M];
                N.member3335(j, i, h, d);
                if (N.member1999() || N.member3332()) {
                    t = Class310.member3311;
                    y = false;
                    N.member33();
                    n.splice(M, 1);
                    --M;
                }
            }
        };
        B.member3315 = function () {
            for (var J = 0; J < n.length; J++) {
                var K = n[J];
                if (K.member3315()) {
                    return true;
                }
            }
            return false;
        };
        B.member3681 = function (J, K) {
            I = K;
            E = J;
        };
        B.member3682 = function () {
            I = false;
            return E !== 0;
        };
        B.member3683 = function () {
            if (E > -1 && !I) {
                E--;
            }
            if (E === 0) {
                this.start();
            }
        };
        B.member3684 = function () {
            if (r > -1) {
                r--;
            }
            if (r === 0) {
                for (var J = 0; J < n.length; J++) {
                    var K = n[J];
                    K.member3324();
                }
            }
        };
        return B;
    };
    return a;
}();