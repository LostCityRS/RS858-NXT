import { Class220 } from 'Class220.js';
import { Class182 } from 'Class182.js';
import { Class124 } from 'Class124.js';
import { Class224 } from 'Class224.js';
import { Class218 } from 'Class218.js';
import { Class227 } from 'Class227.js';
export var Class229 = function (i) {
    var v = {};
    var t = false;
    var G = false;
    var g = 3;
    var K = 100;
    var s = 20;
    var H = 512;
    var o = 5;
    var u = 5;
    var J = Class220(false);
    var r = Class182();
    var d = Class220(false);
    var h = Class182();
    var a = null;
    var e;
    var m = Class124(6);
    var F = Class124(o);
    var D = Class124(u);
    var x = 0;
    var z = undefined;
    var c = undefined;
    var L = 0;
    var b = function (M, O) {
        a = M;
        e = Date.now();
        m.member607(0);
        m.member1051(Class224.member2734);
        m.member1055(g);
        a.write(m.getData());
        m.member607(0);
        if (O) {
            m.member1051(Class224.member2731);
        } else {
            m.member1051(Class224.member2732);
        }
        a.write(m.getData());
        a.member2601();
        F.member607(0);
        z = undefined;
        c = undefined;
        var N;
        for (N = r.member776(); N !== undefined; N = r.member777()) {
            r.remove();
            N.member2706();
            J.member2715(N);
        }
        for (N = h.member776(); N !== undefined; N = h.member777()) {
            h.remove();
            N.member2706();
            d.member2715(N);
        }
    };
    v.member2755 = b;
    var E = function (T, S, R, Q, N, M, O) {
        if (Q) {
            if (C()) {
                return false;
            } else {
                var P = Class218({
                    member2693: T,
                    member1204: S,
                    member2695: R,
                    member2694: Q,
                    member2696: N,
                    member2697: M,
                    priority: O
                });
                J.member2715(P);
                return true;
            }
        } else if (B()) {
            return false;
        } else {
            var P = Class218({
                member2693: T,
                member1204: S,
                member2695: R,
                member2694: Q,
                member2696: N,
                member2697: M,
                priority: O
            });
            d.member2715(P);
            return true;
        }
    };
    v.member2741 = E;
    var C = function () {
        return A() >= K;
    };
    v.member2756 = C;
    var B = function () {
        return y() >= s;
    };
    v.member2757 = B;
    var A = function () {
        return J.member890() + r.getSize();
    };
    v.member2758 = A;
    var y = function () {
        return d.member890() + h.getSize();
    };
    v.member2759 = y;
    var q = function () {
        L++;
        if (false) {
        }
        if (a !== null) {
            a.close();
        }
        a = null;
    };
    v.member2760 = q;
    var n = function () {
        L = 0;
    };
    v.member2761 = n;
    var k = function () {
        a = null;
    };
    v.member2762 = k;
    var j = function () {
        if (e < Date.now() - 30000) {
            if (a !== null) {
                a.close();
            }
            a = null;
        }
        if (a === null) {
            if (A() === 0 && y() === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            var aa;
            for (aa = J.member2716(); aa != undefined; aa = J.member2716()) {
                if (false) {
                }
                I(aa, Class224.member2730);
                r.member2038(aa);
            }
            for (aa = d.member2716(); aa != undefined; aa = d.member2716()) {
                I(aa, Class224.member2729);
                h.member2038(aa);
            }
            a.member2601();
            try {
                for (var Y = 0; Y < 500; Y++) {
                    var P = a.member2718();
                    if (P <= 0) {
                        break;
                    }
                    e = Date.now();
                    if (z === undefined) {
                        var ab = o - F.member1047();
                        if (ab > P) {
                            ab = P;
                        }
                        a.read(F, ab);
                        if (F.member1047() < o) {
                            continue;
                        }
                        F.member607(0);
                        var S = F.member609();
                        var T = F.member1073();
                        var Z = (T & 2147483648) != 0;
                        var ac = T & 2147483647;
                        if (Z) {
                            for (var R = h.member776(); R !== undefined; R = h.member777()) {
                                if (R.member2699() === S && R.member2700() === ac) {
                                    z = R;
                                    c = h;
                                    break;
                                }
                            }
                        } else {
                            for (var R = r.member776(); R !== undefined; R = r.member777()) {
                                if (R.member2699() === S && R.member2700() === ac) {
                                    z = R;
                                    c = r;
                                    break;
                                }
                            }
                        }
                        if (z === undefined) {
                            throw new Error('867 ' + S + '867 ' + ac);
                        } else if (false) {
                        }
                        x = o;
                        F.member607(0);
                        D.member607(0);
                        continue;
                    }
                    var X = z.member2704();
                    if (X === null) {
                        var M = u - D.member1047();
                        if (M > P) {
                            M = P;
                        }
                        a.read(D, M);
                        if (D.member1047() < u) {
                            continue;
                        }
                        D.member607(0);
                        var O = D.member609();
                        var N = D.member1074();
                        var W = 5;
                        if (O != Class227.member2746) {
                            W = 9;
                        }
                        z.member2705(N + W + z.member2702());
                        X = z.member2704();
                        X.member1051(O);
                        X.member1056(N);
                        x += u;
                        continue;
                    }
                    var Q = X.getSize() - z.member2702();
                    var V = H - x;
                    if (V > Q - X.member1047()) {
                        V = Q - X.member1047();
                    }
                    if (V > P) {
                        V = P;
                    }
                    a.read(X, V);
                    x += V;
                    if (X.member1047() == Q) {
                        if (false) {
                        }
                        c.remove();
                        z.member2707();
                        z = undefined;
                        c = undefined;
                    } else if (x === H) {
                        x = 0;
                        z = undefined;
                        c = undefined;
                    }
                    continue;
                }
                return true;
            } catch (U) {
                if (false) {
                }
                if (a !== null) {
                    a.close();
                }
                a = null;
                z = undefined;
                c = undefined;
                F.member607(0);
                D.member607(0);
                return true;
            }
        }
    };
    v.member78 = j;
    var I = function (M, N) {
        m.member607(0);
        m.member1051(N & 15 | (M.member2703() & 15) << 4);
        m.member1051(M.member2699());
        m.member1056(M.member2700());
        a.write(m.getData());
    };
    i = undefined;
    return v;
};