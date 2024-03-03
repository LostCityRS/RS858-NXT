import { Class124 } from 'Class124.js';
export var Class322 = function () {
    var a = 1;
    var h = {
        id: undefined,
        crc: undefined,
        version: undefined,
        bytes: undefined
    };
    var n = 1;
    var j = 0;
    var b = 0;
    var o = b + 4;
    var m = o + 4;
    var c = m + 4;
    var e = c + 4;
    var k = e + 4;
    var d = k;
    var g = 2;
    var i = function (F, E) {
        var x = {};
        var y;
        var C;
        var H;
        var v;
        var s;
        var z = d;
        var D = function (I, K, J) {
            if (I === d) {
                if (K === c) {
                    v = J;
                } else if (K === e) {
                    s = J;
                } else {
                    throw new Error('1799 ');
                }
            }
            y.member607(I + K);
            y.member1056(J);
        };
        var u = function (I, J) {
            if (I === d && J !== e && J !== c) {
                throw new Error('1800 ');
            }
            y.member607(I + J);
            return y.member1074();
        };
        var t = function (I, J) {
            if (I === d && J !== e && J !== c) {
                throw new Error('1801 ');
            }
            y.member607(I + J);
            return y.member1073();
        };
        var q = function (K) {
            if (K === d) {
                throw new Error('1802 ');
            }
            var J = t(K, c);
            var I = y.member1073();
            if (J === j || I === j) {
                return;
            }
            D(K, c, j);
            y.member1056(j);
            D(J, e, I);
            D(I, c, J);
        };
        var B = function (K, J) {
            var I = t(J, e);
            D(K, c, J);
            y.member1056(I);
            D(I, c, K);
            D(J, e, K);
        };
        var A = function (I) {
            if (I < 0 || I > 4294967295) {
                throw new Error('1803 ');
            }
            H = I;
            y.member607(n);
            y.member1056(H);
        };
        if (F === undefined) {
            if (E === undefined) {
                throw new Error('1804 ');
            }
            y = Class124((E + g) * k);
            y.member1051(a);
            y.member1056(0);
            D(d, c, d);
            D(d, e, d);
            var v = d;
        } else if (E === undefined) {
            y = Class124(undefined, F);
        } else {
            if (E < F.byteLength / k - g) {
                throw new Error('1805 ');
            }
            y = Class124((E + g) * k);
            y.member1067(F, 0, F.byteLength);
        }
        y.member607(0);
        C = y.member609();
        if (C > a) {
            throw new Error('1806 ' + C);
        }
        if (y.getSize() % k !== 0) {
            throw new Error('1807 ');
        }
        H = y.member1073();
        v = t(d, c);
        s = y.member1073();
        var G = function (I) {
            q(I);
            B(I, v);
        };
        var r = function (I) {
            h.id = I / k - g;
            h.crc = u(I, b);
            h.version = y.member1074();
            h.bytes = y.member1073();
            return h;
        };
        x.member3741 = function (M) {
            var L = (M + g) * k;
            if (L > y.getSize() || L < 0) {
                throw new Error('1808 ' + M);
            }
            var K = t(L, c);
            var J = y.member1073();
            if (K === j || J === j) {
                return undefined;
            }
            var I = r(L);
            G(L);
            return I;
        };
        x.member3742 = function (O, P, J, I) {
            var M = (O + g) * k;
            if (M > y.getSize() || M < 0) {
                throw new Error('1809 ' + O);
            }
            D(M, b, P);
            y.member1056(J);
            var N = y.member1073();
            y.member607(y.member1047() - 4);
            y.member1056(I);
            var L = y.member1073();
            var K = y.member1073();
            if (L !== j && K !== j) {
                A(H + (I - N));
            } else {
                A(H + I);
            }
            G(M);
        };
        x.member3743 = function (N) {
            var M = (N + g) * k;
            if (M > y.getSize() || M < 0) {
                throw new Error('1810 ' + N);
            }
            var L = t(M, c);
            var K = y.member1073();
            if (L === j || K === j) {
                return;
            }
            var I = t(M, m);
            var J = H - I;
            if (J < 0) {
                throw new Error('1811 ' + I + '1811 ' + H + '1811 ' + J + '1811 ' + N);
            }
            A(J);
            q(M);
        };
        x.member681 = function () {
            return y.getData();
        };
        x.member3744 = function () {
            return y.getSize() / k - g;
        };
        x.getSize = function () {
            return H;
        };
        x.member776 = function () {
            if (t(d, e) === d) {
                return undefined;
            } else {
                var I = t(d, e);
                z = t(I, e);
                return r(I);
            }
        };
        x.member777 = function () {
            if (z === d) {
                return undefined;
            } else {
                var I = z;
                z = t(z, e);
                return r(I);
            }
        };
        return x;
    };
    return i;
}();