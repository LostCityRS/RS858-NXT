import { Class86 } from 'Class86.js';
import { Class423 } from 'Class423.js';
import { Class486 } from 'Class486.js';
export var Class813 = function () {
    var x = {};
    var E;
    var c = new Float32Array(3);
    var d = 0;
    var o = 1;
    var z = 2;
    var F = 3;
    var s = 4;
    var B = 5;
    var C = 6;
    var i = 7;
    var j = 8;
    var y = 0;
    var e = 1;
    var r = 2;
    var g = y;
    x.member10535 = function () {
        return g;
    };
    x.member9172 = function () {
        return g !== r;
    };
    x.member9178 = function () {
        return g !== y;
    };
    x.member9998 = function (I) {
        g = I;
    };
    var n = -1, k = -1;
    var h = false;
    var b;
    var m;
    var A = function (I) {
        E = I;
    };
    x.member25 = A;
    var G = function (J, I) {
        g = y;
        n = -1;
        k = -1;
        h = false;
    };
    x.member7183 = G;
    x.member9532 = function (J, I, K) {
        n = J;
        k = I;
        h = K;
    };
    x.member10536 = function () {
        n = k = -1;
        h = false;
    };
    var v = x.member10536;
    var t = function (I, M) {
        b = I;
        m = M;
        a();
        E.member6450.member6457(q);
        E.member6452.member6456(u);
        E.member8733.member10417(H);
        if (n !== -1) {
            var N = E.member7135().member6453();
            if (N !== null) {
                N.member2026(c);
                if (Math.abs(c[0] - n) < Class86.member718 && Math.abs(c[2] - k) < Class86.member718) {
                    v();
                    E.member7620.member9533(false);
                }
            }
            if (n !== -1) {
                var O = Class423.member6130(Class423.member6115.member6109);
                if (O !== member47) {
                    var K = E.member6116.member6117();
                    var L, J;
                    if (K !== member47) {
                        L = K.member8777();
                        J = K.member8778();
                    }
                    if (h) {
                        b.member9126(O[1].member3606, n, k, L, J);
                    } else {
                        b.member9126(O[0].member3606, n, k, L, J);
                    }
                }
            }
        }
    };
    x.member9177 = t;
    var D = function (J, I) {
        var K = Class423.member6130(Class423.member6115.member6110);
        if (K !== member47) {
            b.member9126(K[J].member3606, I[0], I[2]);
        }
    };
    var H = function (J) {
        if (E.member6116.member7139() % 20 > 10) {
            return;
        }
        var M = J.member3320().member4099();
        var L = Math.atan2(M[0] - m.member3454[0], M[2] - m.member3454[2]);
        if (!b.member9134(M, L)) {
            var I = Class423.member6130(Class423.member6115.member6114);
            if (I !== member47) {
                b.member9132(L, I[J.member8574].member3606, I[J.member8574].width, I[J.member8574].height, M);
            }
        } else {
            var K = Class423.member6130(Class423.member6115.member6113);
            if (K !== member47) {
                b.member9126(K[J.member8580()].member3606, M[0], M[2]);
            }
        }
    };
    var a = function () {
        for (var I = E.member9078.member776(); I !== undefined; I = E.member9078.member777()) {
            if (I.member4081() !== m.level) {
                continue;
            }
            I.member2026(c);
            D(d, c);
        }
    };
    var q = function (K) {
        var J = K.member9627();
        if (J === null || J === undefined) {
            return;
        }
        if (!J.member8671() || K.member4081() !== m.level || !J.member2985()) {
            return;
        }
        K.member2026(c);
        var I = J.member8672();
        if (I !== -1) {
            b.member9118(I, c[0], c[2]);
        } else {
            D(o, c);
        }
    };
    var u = function (M) {
        if (M.member4081() !== m.level) {
            return;
        }
        if (M.member7831() === true) {
            return;
        }
        var L = false;
        var I = false;
        var N = E.member7135().member6453().member3018();
        if (N !== 0 && N === M.member3018()) {
            I = true;
        }
        var K = z;
        if (M !== E.member7135().member6453()) {
            var J = M.member8020();
            if (J !== undefined && J !== member47 && J.member8685()) {
                K = o;
            } else if (M.member7798() == Class486.member7730) {
                K = j;
            } else if (M.member7798() == Class486.member7731) {
                K = C;
            } else if (I) {
                K = s;
            } else if (M.member7799()) {
                K = i;
            } else if (M.member8015()) {
                K = F;
            } else if (L) {
                K = B;
            }
        }
        M.member2026(c);
        D(K, c);
    };
    return x;
}();