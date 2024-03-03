import { Class140 } from 'Class140.js';
import { Class41 } from 'Class41.js';
import { Class416 } from 'Class416.js';
import { Class86 } from 'Class86.js';
import { Class394 } from 'Class394.js';
import { Class415 } from 'Class415.js';
import { Class567 } from 'Class567.js';
export var Class581 = function () {
    var a = function () {
        var z = {};
        var j = Class140.create();
        var y = Class41.create();
        var h = Class41.create();
        var s = [
            1,
            0,
            0
        ];
        var b = [
            0,
            1,
            0
        ];
        var x = [
            0,
            0,
            1
        ];
        var g = true;
        z.member8921 = function () {
            return g;
        };
        z.member8922 = function () {
            g = true;
        };
        z.member8923 = function () {
            g = false;
        };
        var C;
        var o = false;
        var r = Class41.create();
        z.member8924 = function (D) {
            Class41.set(r, D);
        };
        z.member8925 = function (D) {
            Class41.set(D, r);
        };
        var n = Class140.create();
        n[3] = 1;
        var d = new Float32Array(2);
        d[0] = undefined;
        d[1] = undefined;
        z.member8926 = function (E, D) {
            Class140.set(n, E);
            if (D !== undefined) {
                var F = Class416.member4790(E);
                D[0] = F.member4791;
                D[1] = F.member4792;
                if (!isNaN(d[0]) && !isNaN(d[1])) {
                    if (Math.abs(D[0] - d[0]) < 3 && Math.abs(D[1] - d[1]) < 3) {
                        D[0] = d[0];
                        D[1] = d[1];
                    } else {
                        d[0] = undefined;
                        d[1] = undefined;
                    }
                }
            }
        };
        z.member8927 = function (E, F, D) {
            Class140.set(E, n);
            if (isNaN(F) || isNaN(D)) {
                d[0] = undefined;
                d[1] = undefined;
            } else {
                d[0] = F;
                d[1] = D;
            }
        };
        var v = false;
        var u = 200;
        var e = Class41.create();
        z.member8928 = function (D) {
            Class41.set(e, D);
        };
        z.member8929 = function (D) {
            Class41.set(D, e);
        };
        var t = Class41.create();
        var i = -1;
        var m = Class41.create();
        var c = Class140.create();
        c[3] = 1;
        z.member8930 = function (D) {
            if (D.member4179 === undefined || D.member8859 === undefined || D.member8931 === undefined || D.member8860 === undefined || D.member8932 === undefined) {
                throw new Error('1027 ');
            }
            o = true;
            C = D.member4179;
            Class41.set(D.member8859, r);
            Class140.set(D.member8931, n);
            v = D.member8860;
            u = D.member8932;
            i = C.member4110();
        };
        z.member8933 = function () {
            return C;
        };
        z.member8934 = function (E) {
            if (!k()) {
                return undefined;
            }
            if (v) {
                Class140.member318(C.member3320().member2029(j), x, y);
                var D = Math.atan2(y[0], y[2]);
                Class140.member1353(b, D, j);
                Class140.member323(n, j, j);
            } else {
                Class140.set(n, j);
            }
            if (E !== undefined) {
                if (E === 1) {
                    Class140.set(j, c);
                } else if (E > 0) {
                    Class140.member1358(c, j, E);
                }
            } else {
                Class140.set(j, c);
            }
            C.member2026(t);
            return {
                member7699: e,
                member8935: t,
                member8863: m
            };
        };
        z.member2026 = function (D) {
            Class140.member318(c, r, D);
            Class41.add(D, e);
        };
        z.member8936 = function (D) {
            Class140.member318(n, r, D);
            Class41.add(D, t);
        };
        var q = z.member8936;
        z.member7838 = function (D) {
            D.level = i;
            z.member2026(D.member3454);
        };
        var B = null;
        z.member8937 = function (D) {
            Class140.member323(D, n, j);
            B = Class416.member4790(j);
            if (!g || B.member4791 >= Class416.member4777 && B.member4791 <= Class416.member4778) {
                Class140.set(j, n);
                Class140.normalize(n);
            }
        };
        z.member8938 = function (E, N, J, K) {
            if (!k()) {
                return;
            }
            if (E === undefined) {
                return;
            }
            if (!J) {
                return;
            }
            i = C.member4110();
            var L = i === C.member4081() && i < Class86.member414 - 1;
            var M = A(E, N, K, L);
            if (M === undefined) {
                return;
            }
            if (M > 0) {
                var D = Math.PI / 2;
                Class140.member318(n, x, y);
                h[0] = y[0];
                h[1] = 0;
                h[2] = y[2];
                Class41.normalize(h);
                var H = Class41.member327(y, h);
                for (var I = 0; I < 10; I++) {
                    var G = (D + H) / 2 - H;
                    var F = G;
                    if (M < 0) {
                        F *= -1;
                    }
                    if (Class41.member327(r, x) > 0) {
                        F *= -1;
                    }
                    Class140.member318(n, s, y);
                    Class140.member1353(y, F, j);
                    Class140.member323(j, n, n);
                    M = A(E, N, K, L);
                    if (M === undefined) {
                        return;
                    }
                    if (M > 0) {
                        H += G;
                    } else {
                        D -= G;
                    }
                }
            }
        };
        var A = function (E, D, J, G) {
            C.member2026(t);
            q(y);
            var I = i;
            if (G && D.member4112(y[0] >> Class86.member720, y[2] >> Class86.member720)) {
                I = i + 1;
            }
            var H = E.member4115(I, y[0], y[2], true, J);
            if (H === -1) {
                return undefined;
            }
            H += 2 * Class86.member718;
            var F = H - y[1];
            return F;
        };
        z.member8939 = function (D) {
            if (D !== undefined) {
                D[0] = d[0];
                D[1] = d[1];
            }
            Class140.member318(c, r, y);
            return -Class394.member4543(y[0], y[2]);
        };
        z.member8940 = function () {
            B = Class416.member4790(c);
            return Class415.member4773(B.member4791);
        };
        z.member3590 = function () {
            return o && C !== undefined;
        };
        var k = z.member3590;
        z.member6219 = function (F, D) {
            var E = F.member609();
            var G = F.member608();
            if (E === Class567.member4134) {
                C = D.member6452.member6453(G);
            } else {
                C = D.member6450.member6451(G);
            }
            F.member1088(r);
            F.member1088(n);
            v = F.member609() === 1;
            u = F.member608();
            o = true;
        };
        z.member8864 = function (D) {
            C = D.member6452.member6453(D.member7135().member7649());
        };
        return z;
    };
    return a;
}();