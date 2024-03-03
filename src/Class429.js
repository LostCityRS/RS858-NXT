import { Class140 } from 'Class140.js';
import { Class49 } from 'Class49.js';
import { Class37 } from 'Class37.js';
import { Class41 } from 'Class41.js';
import { Class415 } from 'Class415.js';
import { Class86 } from 'Class86.js';
export var Class429 = function () {
    var a = function () {
        var z = {};
        var c = Class140.create();
        var v = Class140.create();
        var b = Class140.member313();
        z.member6205 = function () {
            return b;
        };
        var i = false;
        var m = 0;
        var e = 0;
        var A = 0;
        z.member6206 = function (B) {
            A = B;
        };
        var k = 0;
        z.member6207 = function (B) {
            k = B;
        };
        var u = -1;
        var r = -1;
        var q = -1;
        var o = -1;
        var n = -1;
        var h = -1;
        var y = new Float64Array(3);
        var s = Class49.member313();
        var t = Class37.member313();
        var j = Class41.create();
        z.member6208 = function (B) {
            Class41.set(j, B);
        };
        z.member6209 = function (B) {
            Class41.set(B, j);
        };
        var g = Class41.create();
        z.member6210 = function (B) {
            e = B;
        };
        z.member6211 = function (B) {
            m = B;
        };
        z.member6212 = function (B, D, C) {
            Class140.member313(b);
            Class37.member315(B, D, C, 0, 1, 0, t);
            Class37.member317(v, t);
            Class140.member1355(v);
            Class140.member323(b, v);
            i = true;
        };
        z.member78 = function () {
            if (m !== 0 || e !== 0) {
                y[0] = 1;
                y[1] = 0;
                y[2] = 0;
                Class140.member1353(y, Class415.member4772(m), v);
                Class140.member323(b, v);
                y[0] = 0;
                y[1] = 1;
                y[2] = 0;
                Class140.member1357(y, b);
                Class41.normalize(y);
                Class140.member1353(y, -Class415.member4772(e), v);
                Class140.member323(b, v);
                m = 0;
                e = 0;
            }
            if (k !== 0 || A !== 0) {
                var B = Class41.create();
                y[0] = 0;
                y[1] = 0;
                y[2] = k;
                Class140.member1355(b);
                Class140.member1357(y, b);
                Class41.add(B, y);
                y[0] = A;
                y[1] = 0;
                y[2] = 0;
                Class140.member1357(y, b);
                Class140.member1355(b);
                y[1] *= -1;
                Class41.add(B, y);
                Class41.set(j, g);
                Class41.add(g, B);
                x(g);
                k = 0;
                A = 0;
                return true;
            }
            return false;
        };
        var x = function (B) {
            if (u != -1 && B[0] < u) {
                B[0] = u;
            }
            if (r != -1 && B[0] > r) {
                B[0] = r;
            }
            if (q != -1 && B[1] < q) {
                B[1] = q;
            }
            if (o != -1 && B[1] > o) {
                B[1] = o;
            }
            if (n != -1 && B[2] < n) {
                B[2] = n;
            }
            if (h != -1 && B[2] > h) {
                B[2] = h;
            }
        };
        z.member6213 = function (C, H, E, G, D, B, F) {
            u = H == -1 ? -1 : C[0] - H * Class86.member718;
            r = E == -1 ? -1 : C[0] + E * Class86.member718;
            q = B == -1 ? -1 : C[1] - B * Class86.member718;
            o = F == -1 ? -1 : C[1] + F * Class86.member718;
            n = G == -1 ? -1 : C[2] - G * Class86.member718;
            h = D == -1 ? -1 : C[2] + D * Class86.member718;
        };
        z.member6214 = function () {
            return undefined;
        };
        z.member6215 = function (B) {
            Class41.set(j, B);
        };
        z.member6216 = function (B) {
            Class41.set(g, B);
        };
        z.member6217 = function (B) {
            z.member6208(B.member3454);
        };
        z.member6218 = function () {
            return 0;
        };
        z.readyanim = function () {
            return i;
        };
        var d = z.readyanim;
        z.member6219 = function (C, B) {
            C.gFloatArray(b);
            i = true;
        };
        return z;
    };
    return a;
}();