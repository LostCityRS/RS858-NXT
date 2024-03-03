import { Class299 } from 'Class299.js';
import { Class41 } from 'Class41.js';
export var Class701 = function () {
    var e = 1 << 0;
    var g = 1 << 1;
    var r = 1 << 2;
    var j = 1 << 3;
    var b = 1 << 4;
    var m = 1 << 5;
    var q = 1 << 6;
    var i = 1 << 7;
    var d = 1 << 8;
    var o = 1 << 9;
    var a = 1 << 10;
    var c = 1 << 11;
    var n = 1 << 12;
    var k = 1 << 13;
    var h = 1 << 14;
    return function (I) {
        var F = {};
        var C = -1;
        var y = -1;
        var x = -1;
        var z = -1;
        var v;
        var G = -1;
        var s = -1;
        var B = -1;
        var H = -1;
        var A = -1;
        var J = -1;
        var L = -1;
        var E = [
            -1,
            -1,
            -1
        ];
        var t = [
            0,
            0,
            0
        ];
        var D = -1;
        F.member1014 = function () {
            return C;
        };
        F.member3240 = function () {
            return y;
        };
        F.member3217 = function () {
            return x;
        };
        F.member3218 = function () {
            return z;
        };
        F.member3215 = function () {
            return v;
        };
        F.member3241 = function () {
            return G;
        };
        F.member3220 = function () {
            return s;
        };
        F.member3242 = function () {
            return B;
        };
        F.member3222 = function () {
            return H;
        };
        F.member3223 = function () {
            return A;
        };
        F.member3243 = function () {
            return J;
        };
        F.member3244 = function () {
            return L;
        };
        F.member3245 = function (M) {
            return E[M];
        };
        F.member3246 = function (M) {
            return t[M];
        };
        F.member9926 = function () {
            return D;
        };
        var K = true;
        F.member3239 = function () {
            return K;
        };
        if (I !== undefined) {
            var u = I.member608();
            if (u === 0) {
                D = I.member608() / Class299.member3570;
                K = false;
            } else {
                if ((u & e) !== 0) {
                    C = I.member1073();
                }
                if ((u & g) !== 0) {
                    y = I.member320();
                }
                if ((u & r) !== 0) {
                    x = I.member320();
                }
                if ((u & j) !== 0) {
                    z = I.member320();
                }
                if ((u & b) !== 0) {
                    v = Class41.member321(I);
                }
                if ((u & m) !== 0) {
                    G = I.member1073();
                }
                if ((u & q) !== 0) {
                    s = I.member608();
                }
                if ((u & i) !== 0) {
                    B = I.member608();
                }
                if ((u & d) !== 0) {
                    H = I.member320();
                }
                if ((u & o) !== 0) {
                    A = I.member320();
                }
                if ((u & a) !== 0) {
                    J = I.member320();
                }
                if ((u & c) !== 0) {
                    L = I.member608();
                    I.member1071();
                    I.member1071();
                    I.member1071();
                    I.member608();
                }
                if ((u & n) !== 0) {
                    E[0] = I.member608();
                    t[0] = I.member320();
                }
                if ((u & k) !== 0) {
                    E[1] = I.member608();
                    t[1] = I.member320();
                }
                if ((u & h) !== 0) {
                    E[2] = I.member608();
                    t[2] = I.member320();
                }
                D = I.member608() / Class299.member3570;
            }
        } else {
            throw new Error('1190 ');
        }
        return F;
    };
}();