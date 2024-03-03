import { Class95 } from 'Class95.js';
import { Class96 } from 'Class96.js';
import { Class209 } from 'Class209.js';
export var Class479 = function () {
    var a = function (k) {
        var u = {};
        var x;
        var b = -1;
        if (k.member625 !== undefined && k.member2896 !== undefined) {
            b = k.member625;
            x = k.member2896;
        } else {
            throw new Error('1214 ');
        }
        var i = null;
        var q = [
            -1,
            -1,
            -1,
            -1,
            -1
        ];
        var v = null;
        var e = null;
        var t = null;
        var r = null;
        u.member7661 = function () {
            return r;
        };
        var n = null;
        u.member7608 = function () {
            return n;
        };
        var m = null;
        var j = function () {
            return {
                member625: b,
                member546: member546,
                texture: texture,
                member743: member743,
                member2526: member2526
            };
        };
        u.member681 = j;
        var s = function (z) {
            while (true) {
                var y = z.member609();
                if (y === undefined) {
                    throw new Error('1215 ');
                    break;
                }
                if (y === 0) {
                    break;
                }
                o(z, y);
            }
        };
        u.decode = s;
        var o = function (A, H) {
            if (H === 1) {
                A.member609();
            } else if (H === 2) {
                var F = A.member609();
                i = new Array(F);
                for (var B = 0; B < F; B++) {
                    i[B] = A.member1086();
                }
            } else if (H === 40) {
                var z = A.member609();
                v = new Array(z);
                e = new Array(z);
                for (var y = 0; y < z; y++) {
                    v[y] = A.member608();
                    e[y] = A.member608();
                }
            } else if (H === 41) {
                var I = A.member609();
                r = new Array(I);
                n = new Array(I);
                for (var E = 0; E < I; E++) {
                    r[E] = A.member1071();
                    n[E] = A.member1071();
                }
            } else if (H === 44) {
                var G = A.member608();
                var J = 0;
                for (var B = G; B > 0; B = B >> 1) {
                    J++;
                }
                t = new Array(J);
                var C = 0;
                for (var B = 0; B < J; B++) {
                    if ((G & 1 << B) > 0) {
                        t[B] = C++;
                    } else {
                        t[B] = -1;
                    }
                }
            } else if (H === 45) {
                var K = A.member608();
                var D = 0;
                for (var B = K; B > 0; B = B >> 1) {
                    D++;
                }
                m = new Array(D);
                var C = 0;
                for (var B = 0; B < D; B++) {
                    if ((K & 1 << B) > 0) {
                        m[B] = C++;
                    } else {
                        m[B] = -1;
                    }
                }
            } else if (H >= 60 && H < 65) {
                q[H - 60] = A.member1086();
            } else if (false) {
            }
        };
        if (true) {
            var h = function () {
                if (i === null) {
                    return true;
                }
                var z = true;
                var y = x.member7535();
                for (var A = 0; A < i.length; A++) {
                    if (y.getFile(Class95.member810, i[A], 0, Class96.member840) === null) {
                        z = false;
                    }
                }
                return z;
            };
            u.member7662 = h;
            var g = function () {
                if (i == null) {
                    return null;
                }
                var z = x.member7535();
                var C = new Array(i.length);
                for (var B = 0; B < i.length; B++) {
                    var y = z.getFile(Class95.member810, i[B], 0, Class96.member840);
                    if (y === null) {
                        return null;
                    }
                    C[B] = Class209(y);
                }
                for (var B = 0; B < i.length; B++) {
                    if (C[B].member2463() < 13) {
                        C[B].member2495(2);
                    }
                }
                var A = null;
                if (C.length === 1) {
                    A = C[0];
                } else {
                    A = Class209(undefined, C);
                }
                if (A === null) {
                    return null;
                }
                if (v !== undefined && v !== null) {
                    A.member2497(v, e);
                }
                if (r !== null) {
                    A.member2499(r, n);
                }
                return A;
            };
            u.member7546 = g;
            var d = function () {
                var z = x.member7535();
                var y = true;
                for (var A = 0; A < q.length; A++) {
                    if (q[A] != -1 && z.getFile(Class95.member810, q[A], 0, Class96.member840) === null) {
                        y = false;
                    }
                }
                return y;
            };
            u.member7663 = d;
            var c = function () {
                var z = x.member7535();
                var C = new Array(0);
                for (var B = 0; B < q.length; B++) {
                    if (q[B] === -1) {
                        continue;
                    }
                    var y = z.getFile(Class95.member810, q[B], 0, Class96.member840);
                    if (y === null) {
                        return null;
                    }
                    C[C.length] = Class209(y);
                }
                for (var B = 0; B < C.length; B++) {
                    if (C[B].member2463() < 13) {
                        C[B].member2495(2);
                    }
                }
                var A = null;
                if (C.length === 1) {
                    A = C[0];
                } else {
                    A = Class209(undefined, C);
                }
                if (A === null) {
                    return null;
                }
                if (v !== undefined && v !== null) {
                    A.member2497(v, e);
                }
                if (r !== null) {
                    A.member2499(r, n);
                }
                return A;
            };
            u.member7544 = c;
        } else {
        }
        k = undefined;
        return u;
    };
    a.member7664 = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        14
    ];
    a.member7665 = [
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        15
    ];
    return a;
}();