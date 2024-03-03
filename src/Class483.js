import { Class140 } from 'Class140.js';
import { Class394 } from 'Class394.js';
import { Class41 } from 'Class41.js';
export var Class483 = function () {
    var a = function (m) {
        var v = {};
        var n = Class140.create();
        var s = Class140.create();
        v.member7691 = function (y) {
            Class140.set(s, y);
        };
        v.member7692 = function () {
            Class140.member318(s, t, u);
            return Class394.member4543(u[0], u[2]);
        };
        var o = 0;
        var i = 0;
        v.member7693 = function () {
            return i;
        };
        var e = 0;
        var c = true;
        v.member7694 = function () {
            return c;
        };
        var g = Class41.create();
        var q = Class41.create();
        var h = Class140.create();
        var b = Class41.create([
            0,
            1,
            0
        ]);
        var t = Class41.create([
            0,
            0,
            -1
        ]);
        var u = Class41.create();
        var d = function (A) {
            Class140.member318(n, t, u);
            var y = Class394.member4543(u[0], u[2]);
            var z = A - y;
            while (z > Math.PI) {
                z -= Math.PI * 2;
            }
            while (z <= -Math.PI) {
                z += Math.PI * 2;
            }
            Class140.member1353(b, z, s);
            Class140.member323(s, n);
            c = z < 0;
            o = Math.abs(z / e);
            i = 0;
        };
        v.member7695 = function (y, A, z) {
            if (A === undefined && z === undefined) {
                throw new Error('1712 ');
            }
            if (e > 0) {
                var C = false;
                if (y !== undefined) {
                    if (q[0] - g[0] !== y[0] - A[0] || q[2] - g[2] !== y[2] - A[2]) {
                        Class41.set(y, q);
                        Class41.set(A, g);
                        C = true;
                    }
                } else if (g[0] !== A[0] || g[2] !== A[2]) {
                    Class41.set(A, g);
                    C = true;
                }
                if (C) {
                    if (q[0] !== g[0] || q[2] !== g[2]) {
                        Class140.set(z, n);
                        var B = Class394.member4543(q[0] - g[0], q[2] - g[2]);
                        d(B);
                    }
                }
            }
            return x();
        };
        var k = v.member7695;
        v.rotate = function () {
            if (r()) {
                return s;
            }
            i++;
            var y = i / o;
            if (y > 1) {
                return s;
            }
            Class140.member1356(n, s, y, h);
            return h;
        };
        var x = v.rotate;
        v.member1999 = function () {
            return i >= o;
        };
        var r = v.member1999;
        v.member7696 = function (y) {
            if (y.member7697 === undefined || y.member7698 === undefined) {
                throw new Error('1713 ');
            }
            Class140.set(y.member7697, n);
            e = y.member7698;
            if (e <= 0) {
                Class140.set(y.member7697, s);
                e = 0;
                return v;
            }
            if (y.member7699 !== undefined && y.member7700 !== undefined) {
                Class41.set(y.member7700, q);
                Class41.set(y.member7699, g);
                if (q[0] === g[0] && q[2] === g[2]) {
                    Class140.set(y.member7697, s);
                    return;
                }
                y.member7701 = Class394.member4543(q[0] - g[0], q[2] - g[2]);
            }
            if (y.member7701 !== undefined) {
                d(y.member7701, e);
            } else {
                throw new Error('1714 ');
            }
        };
        var j = v.member7696;
        j(m);
        m = undefined;
        return v;
    };
    return a;
}();