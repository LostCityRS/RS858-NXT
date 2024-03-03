import { Class182 } from 'Class182.js';
import { Class183 } from 'Class183.js';
import { Class85 } from 'Class85.js';
import { Class184 } from 'Class184.js';
import { Class181 } from 'Class181.js';
import { Class147 } from 'Class147.js';
import { Class84 } from 'Class84.js';
export var Class185 = function () {
    var o = {};
    var n;
    var j;
    var h;
    var e;
    var t;
    var d;
    o.member2039 = function () {
        return d;
    };
    var c;
    var b = null;
    var a;
    var s = null;
    o.member2045 = 4096;
    var i = o.member2045;
    var u = 0;
    var k = new Array(i);
    var m = Class182();
    var q = 0;
    var d = 0;
    var r = new Uint32Array(i);
    var g = 0;
    o.member2046 = function () {
        return g;
    };
    o.member25 = function (x) {
        if (x.member995 !== undefined) {
            n = x.member995;
            j = x.member2047;
            h = x.member2048;
            e = x.member2049;
            t = Class183;
            t.member25(n, j, h, e);
        } else {
            d = x.member2050;
            c = x.member2051;
            b = x.member2052;
            for (var v = 0; v < c; v++) {
                if (b[v] !== undefined) {
                    b[v] = Class85({ member680: b[v] });
                }
            }
            a = x.member2053;
            s = x.member2054;
            for (var v = 0; v < a; v++) {
                if (s[v] !== undefined) {
                    s[v] = Class184({ member680: s[v] });
                }
            }
        }
    };
    o.member681 = function () {
        var y = new Array(c);
        var x = new Array(a);
        for (var v = 0; v < c; v++) {
            if (b[v] !== undefined) {
                y[v] = b[v].member681();
            }
        }
        for (var v = 0; v < a; v++) {
            if (s[v] !== undefined) {
                x[v] = s[v].member681();
            }
        }
        return {
            member2050: d,
            member2051: c,
            member2052: y,
            member2053: a,
            member2054: x
        };
    };
    o.member2055 = function () {
        return b !== null && s !== null;
    };
    o.member2030 = function (v) {
        if (b === null) {
            throw new Error('1331 ');
        }
        return b[v];
    };
    o.member2056 = function (v) {
        if (s === null) {
            throw new Error('1332 ');
        }
        return s[v];
    };
    o.member2057 = function (v) {
        m.member2038(v);
    };
    o.member2058 = function (v) {
        m.removeItem(v);
    };
    o.member2059 = function (v) {
        return k[v];
    };
    o.member2060 = function () {
        if (g > 0) {
            var v = r[--g];
            return k[v];
        } else {
            if (u === i) {
                return undefined;
            }
            var x = u++;
            var y = k[x] = Class181(x);
            return y;
        }
    };
    o.member2061 = function (v) {
        r[g++] = v.member444();
    };
    o.member487 = function () {
        q = 0;
        d = 0;
        for (var D = m.member776(); D !== undefined; D = m.member777()) {
            D.member487();
            q += D.member2062();
            d += D.member2039();
        }
        if (b === null) {
            var I = t.member78() && Class147.member1483();
            if (I) {
                c = t.member2040();
                d = t.member2039();
                var B = t.member2041();
                b = new Array(c);
                for (var aa = 0; aa < c; aa++) {
                    var K = B[aa];
                    if (K !== undefined) {
                        var Y = K.member1767();
                        var J = Y << 8 & 4294967040 | Y >> 24 & 255;
                        var Z = K.member1768();
                        var H = Z << 8 & 4294967040 | Z >> 24 & 255;
                        if ((J & 255) === 0 && (H & 255) === 0) {
                            J |= 255;
                            H |= 255;
                        }
                        var Q = K.member1770();
                        var z = undefined;
                        if (Q !== undefined) {
                            if (Y !== Z || Y !== Q) {
                                z = Q << 8 & 4294967040 | Q >> 24 & 255;
                            }
                        }
                        var O = K.member1774() * 50 / 64;
                        var M = K.member1775() * 50 / 64;
                        var A = K.member1772();
                        var y = K.member1773();
                        var F = K.member698() * 4;
                        var E = K.member699() * 4;
                        var V = K.member696();
                        if (V !== undefined) {
                            V *= 4;
                            if (F === E && F === V) {
                                V = undefined;
                            }
                        }
                        var N = K.member1763() * 4 * 50 / 1048576;
                        var G = K.member1764() * 4 * 50 / 1048576;
                        var X = K.member691();
                        if (X !== undefined) {
                            X = X * 4 * 50 / 1048576;
                            if (N === G && N === X) {
                                X = undefined;
                            }
                        }
                        var L = K.member1766();
                        if (L !== undefined) {
                            L = L * 4 * 2 / (4096 * 50);
                            if (K.member1765() !== Class84.member621) {
                                L = L * 4 / 1024;
                            }
                        }
                        var x = K.member1777() * 50;
                        var v = K.member1778() * 50;
                        var W = undefined;
                        if (X !== undefined) {
                            W = y * K.member692() / 100;
                        }
                        var U = undefined;
                        if (V !== undefined) {
                            U = y * K.member697() / 100;
                        }
                        var S = undefined;
                        var R = undefined;
                        if (z !== undefined) {
                            S = y * K.member1771() / 100;
                            R = y * K.member704() / 100;
                        }
                        b[aa] = Class85({
                            member625: aa,
                            member626: K.member1759(),
                            member627: K.member1760(),
                            member628: K.member1761(),
                            member629: K.member1762(),
                            member630: O,
                            member631: M,
                            member632: K.member688(),
                            member633: A,
                            member634: y,
                            member635: N,
                            member636: G,
                            member637: X,
                            member638: W,
                            member639: K.member1765(),
                            member640: L,
                            member641: F,
                            member642: E,
                            member643: V,
                            member644: U,
                            member645: J,
                            member646: H,
                            member647: K.member1769(),
                            member648: z,
                            member649: S,
                            member650: R,
                            member651: K.member1484(),
                            member652: K.member1776(),
                            member653: K.member1782(),
                            member654: K.member1783(),
                            member655: x,
                            member656: v,
                            member657: K.member1779(),
                            member658: K.member1780(),
                            member659: K.member1781(),
                            member678: K.member1784()
                        });
                    }
                }
                a = t.member2042();
                var C = t.member2043();
                s = new Array(a);
                for (var aa = 0; aa < a; aa++) {
                    var T = C[aa];
                    if (T !== undefined) {
                        var P = T.member1953();
                        P[0] = P[0] * 50 * 50 * 0.5 / 1048576;
                        P[1] = -(P[1] * 50 * 50 * 0.5) / 1048576;
                        P[2] = P[2] * 50 * 50 * 0.5 / 1048576;
                        s[aa] = Class184({
                            member625: aa,
                            member1947: P,
                            member1950: T.member1954()
                        });
                    }
                }
                t.member512();
                t = null;
            }
        }
    };
    return o;
}();