import { Class681 } from 'Class681.js';
export var Class683 = function () {
    var d = 3;
    var e = 1;
    var c = 1;
    var j = 2;
    var h = 3;
    var m = 4;
    var b = 5;
    var g = 6;
    var i = 7;
    var n = 8;
    var a = 100;
    var k = 60 * 60 * 1000;
    return function (u) {
        var y = {};
        var v = [];
        y.member8848 = function (F) {
            return v[F];
        };
        var s = 0;
        y.member8286 = function () {
            return s;
        };
        var t = undefined;
        y.member9598 = function (G) {
            if (t === undefined) {
                t = new Array(s);
                for (var F = 0; F < s; F++) {
                    t[F] = {
                        member7233: v[F].member3009(),
                        member8538: F
                    };
                }
                t.sort(function (I, H) {
                    return I.member7233.localeCompare(H.member7233);
                });
            }
            return t[G].member8538;
        };
        var B;
        y.member8525 = function () {
            return B;
        };
        y.member8526 = function () {
            B++;
        };
        var A;
        y.member2798 = function () {
            return A;
        };
        var r = false;
        y.member8529 = function () {
            return r;
        };
        var q;
        y.member8530 = function () {
            return q;
        };
        var E;
        y.member8531 = function () {
            return E;
        };
        var D = function (G) {
            if (G === undefined || G === '') {
                return -1;
            }
            for (var F = 0; F < s; F++) {
                if (v[F].member3009() === G) {
                    return F;
                }
            }
            return -1;
        };
        y.member9599 = D;
        var C = function (I, J, H, F) {
            var G = Class681(I, J, H, F);
            v[s++] = G;
            t = undefined;
        };
        y.member9874 = C;
        var z = function (F) {
            s--;
            v.splice(F, 1);
            t = undefined;
        };
        y.member9875 = z;
        var x = function (I, H, G, F) {
            A = I;
            r = H;
            q = G;
            E = F;
        };
        y.member8556 = x;
        var o = function (G) {
            var H = G.g1();
            if ((H & 1) !== 0) {
                if (false) {
                } else {
                    throw new Error();
                }
            }
            if ((H & 2) === 0) {
                if (false) {
                } else {
                    throw new Error();
                }
            }
            var K = 2;
            if ((H & 4) !== 0) {
                K = G.g1();
            }
            G.g8();
            var N = G.g8();
            B = N.high * Math.pow(2, 32) + N.low;
            A = G.gjstr();
            r = G.g1() === 1;
            E = G.g1s();
            q = G.g1s();
            s = G.g2();
            v = [];
            for (var I = 0; I < s; I++) {
                var L = G.gjstr();
                var J = G.g1s();
                var M = G.g2();
                var F;
                if (K >= 3) {
                    F = G.g1() === 1;
                } else {
                    F = false;
                }
                v[I] = Class681(L, J, M, 0, F);
            }
        };
        if (u !== undefined) {
            o(u);
        } else {
            throw new Error('1699 ');
        }
        return y;
    };
}();