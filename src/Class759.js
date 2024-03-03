export var Class759 = function (h) {
    var I = {};
    var a;
    var c = -1;
    if (h.member625 !== undefined && h.member2896 !== undefined) {
        c = h.member625;
        a = h.member2896;
    } else {
        throw new Error('1706 ');
    }
    var O = -1, N = -1;
    I.member4680 = function () {
        return O;
    };
    I.member4681 = function () {
        return N;
    };
    var L = 1;
    I.member4682 = function () {
        return L;
    };
    var K = -1, J = -1;
    I.member4683 = function () {
        return K;
    };
    I.member4684 = function () {
        return J;
    };
    var H = 1;
    I.member4685 = function () {
        return H;
    };
    var G = 0;
    I.member4686 = function () {
        return G;
    };
    var M = -1;
    I.member4689 = function () {
        return M;
    };
    var e = 1;
    I.member4690 = function () {
        return e;
    };
    var d = 0;
    I.member4691 = function () {
        return d;
    };
    var F = -1;
    I.member4687 = function () {
        return F;
    };
    var g = 1;
    I.member4688 = function () {
        return g;
    };
    var o = 0.7;
    I.member4676 = function () {
        return o;
    };
    var n = 0.9;
    I.member4677 = function () {
        return n;
    };
    var k = 0.9;
    I.member4678 = function () {
        return k;
    };
    var j = 0.17;
    I.member4679 = function () {
        return j;
    };
    var E = 16777215;
    I.member4675 = function () {
        return E;
    };
    var D = 0, y = 0;
    I.member4673 = function () {
        return D;
    };
    I.member4674 = function () {
        return y;
    };
    var B = 0;
    I.member4663 = function () {
        return B;
    };
    var A = 1;
    I.member4664 = function () {
        return A;
    };
    var z = 0;
    I.member4665 = function () {
        return z;
    };
    var x = 128;
    I.member4666 = function () {
        return x;
    };
    var v = 256;
    I.member4667 = function () {
        return v;
    };
    var C = 1365822685;
    I.member4662 = function () {
        return C;
    };
    var u = 32;
    I.member4668 = function () {
        return u;
    };
    var t = 4294967043;
    I.member4669 = function () {
        return t;
    };
    var s = 0;
    I.member4670 = function () {
        return s;
    };
    var r = 0.5;
    I.member4671 = function () {
        return r;
    };
    var i = [
        0,
        0,
        0
    ];
    I.member1413 = function () {
        return i;
    };
    var q = 800;
    I.member4672 = function () {
        return q;
    };
    var P = function () {
        return {
            member625: c,
            member10251: O,
            member10252: N,
            member10253: L,
            member10254: K,
            member10255: J,
            member10256: H,
            member10257: G,
            member10258: F,
            member2271: g,
            member2294: o,
            member2298: n,
            member2292: k,
            member2295: j,
            member10259: E,
            member10260: D,
            member10261: y,
            member2280: B,
            member2289: A,
            member2282: z,
            member2281: x,
            member2290: v,
            member1591: C,
            member2291: u,
            member2245: t,
            member2278: s,
            member2293: r,
            member1372: i,
            member1928: q
        };
    };
    I.member681 = P;
    var b = function (R) {
        while (true) {
            var Q = R.member609();
            if (Q === undefined) {
                throw new Error('1707 ');
                break;
            }
            if (Q === 0) {
                break;
            }
            m(R, Q);
        }
    };
    I.decode = b;
    var m = function (R, Q) {
        if (Q === 1) {
            O = R.member608();
        } else if (Q === 2) {
            L = R.member608() / 256;
        } else if (Q === 3) {
            K = R.member608();
        } else if (Q === 4) {
            H = R.member608() / 256;
        } else if (Q === 5) {
            o = R.member608() / 256;
        } else if (Q === 6) {
            E = R.g3();
        } else if (Q === 7) {
            D = R.member608();
            y = R.member608();
        } else if (Q === 8) {
            B = R.member608();
        } else if (Q === 9) {
            F = R.member608();
        } else if (Q === 10) {
            g = R.member608() / 256;
        } else if (Q === 11) {
            z = R.member608();
        } else if (Q === 12) {
            C = R.member1073();
        } else if (Q === 13) {
            x = R.member608();
        } else if (Q === 14) {
            u = R.member608();
        } else if (Q === 15) {
            t = R.member1073();
        } else if (Q === 16) {
            A = R.member608();
        } else if (Q === 17) {
            v = R.member608();
        } else if (Q === 18) {
            n = R.member609() / 32;
        } else if (Q === 19) {
            k = R.member609() / 32;
        } else if (Q === 20) {
            j = R.member608() / 256;
        } else if (Q === 21) {
            G = R.member608();
        } else if (Q === 22) {
            M = R.member608();
        } else if (Q === 23) {
            e = R.member609();
        } else if (Q === 24) {
            d = R.member609() / 100;
        } else if (Q === 25) {
            r = R.member608() / 256;
        } else if (Q === 26) {
            i = [
                R.member608() / 256,
                R.member608() / 256,
                R.member608() / 256
            ];
        } else if (Q === 27) {
            q = R.member608();
        } else if (Q === 28) {
            s = R.member1071();
        } else if (Q === 29) {
            N = R.member608();
        } else if (Q === 30) {
            J = R.member608();
        } else if (false) {
        }
    };
    h = undefined;
    return I;
};