import { Class86 } from 'Class86.js';
import { Class49 } from 'Class49.js';
import { Class41 } from 'Class41.js';
export var Class512 = function (t) {
    var i = {};
    var m = null;
    var k, j;
    var g, c;
    if (t.member8296 !== undefined && t.member8297 !== undefined && t.member8298 !== undefined && t.member8299 !== undefined && t.member8300 !== undefined) {
        m = t.member8296;
        k = t.member8297;
        j = t.member8298;
        g = t.member8299;
        c = t.member8300;
    } else {
        throw new Error('1335 ');
    }
    i.member4763 = function (z, y, x, v, u) {
        return e(z, y * Class86.member718, x * Class86.member718, v, u);
    };
    var h = i.member4763;
    i.member4115 = function (A, y, x, v, u) {
        if (!n(Math.floor(y / Class86.member730), Math.floor(x / Class86.member730), y % Class86.member730, x % Class86.member730)) {
            return -1;
        }
        var z = m[d.member1643 - k];
        if (z === undefined) {
            return -1;
        }
        z = z[d.member1642 - g];
        if (z === undefined) {
            return -1;
        }
        return z.member4115(A, d.member8326, d.member8327, v, u);
    };
    var e = i.member4115;
    i.member4637 = function (y, v, u) {
        if (!n(Math.floor(v / Class86.member730), Math.floor(u / Class86.member730), v % Class86.member730, u % Class86.member730)) {
            return -1;
        }
        var x = m[d.member1643 - k];
        if (x === undefined) {
            return -1;
        }
        x = x[d.member1642 - g];
        if (x === undefined) {
            return -1;
        } else {
            return x.member4637(y, d.member8326, d.member8327);
        }
    };
    var b = b;
    i.member4114 = function (A, y, x) {
        var v = Math.floor(y * Class86.member718 / Class86.member730);
        if (v < k || v > j) {
            return null;
        }
        var u = Math.floor(x * Class86.member718 / Class86.member730);
        if (u < g || u > c) {
            return null;
        }
        var z = m[v - k][u - g];
        if (z === undefined) {
            return null;
        } else {
            return z.member4114(A);
        }
    };
    var a = i.member4114;
    var d = {
        member1643: 0,
        member1642: 0,
        member8326: 0,
        member8327: 0
    };
    var n = function (v, u, y, x) {
        var A = false;
        if (v > j) {
            A = true;
            v--;
            y = Class86.member730;
        } else if (v < k) {
            A = true;
            v++;
            y = -1;
        }
        if (u > c) {
            A = true;
            u--;
            x = Class86.member730;
        } else if (u < g) {
            A = true;
            u++;
            x = -1;
        }
        if (!A) {
            var z = m[v - k][u - g];
            if (z === undefined || z.member4830() === undefined || z.member4830() !== NULL && z.member4830().member4767()) {
                if (y === 0) {
                    v--;
                    y = Class86.member730;
                } else if (y === Class86.member730 - 1) {
                    v++;
                    y = -1;
                }
                if (x === 0) {
                    u--;
                    x = Class86.member730;
                } else if (x === Class86.member730 - 1) {
                    u++;
                    x = -1;
                }
            }
        }
        var z = m[v - k];
        if (z === undefined) {
            return false;
        }
        z = z[u - g];
        if (z === undefined) {
            return false;
        }
        d.member1643 = v;
        d.member1642 = u;
        d.member8326 = y;
        d.member8327 = x;
        return true;
    };
    var q = new Float32Array(3);
    var o = new Float32Array(3);
    var s = new Float32Array(3);
    var r = function (v, x, y, u) {
        Class49.member318(x, v);
        v[1] = e(y, v[0], v[2], u);
        if (v[1] === -1) {
            return false;
        }
        return true;
    };
    i.member8328 = function (A, x, z, v) {
        var u = x.member1793(), y = x.member1792();
        Class41.set(y, o);
        if (!r(o, z, A, v)) {
            return false;
        }
        s[0] = y[0], s[1] = y[1], s[2] = u[2];
        if (!r(s, z, A, v)) {
            return false;
        }
        q[0] = u[0], q[1] = y[1], q[2] = y[2];
        if (!r(q, z, A, v)) {
            return false;
        }
        Class41.member322(q, o, q);
        Class41.member322(s, o, s);
        Class41.member325(s, q, o);
        Class41.normalize(q);
        Class41.normalize(o);
        Class41.normalize(s);
        z[0] = q[0], z[1] = q[1], z[2] = q[2], z[3] = 0;
        z[4] = o[0], z[5] = o[1], z[6] = o[2], z[7] = 0;
        z[8] = s[0], z[9] = s[1], z[10] = s[2], z[11] = 0;
        return true;
    };
    i.member4162 = function (x, u, J, y, z, D) {
        var E = Math.floor(u * Class86.member718 / Class86.member730);
        if (E < k || E > j) {
            return;
        }
        var C = Math.floor(J * Class86.member718 / Class86.member730);
        if (C < g || C > c) {
            return;
        }
        var I = u - E * Class86.member729, G = u + y - E * Class86.member729;
        var H = J - C * Class86.member729, F = J + z - C * Class86.member729;
        var B = m[E - k][C - g];
        if (B !== undefined) {
            B.member4162(x, I, H, y, z, D);
        }
        var A = false;
        if (G >= Class86.member729 && E + 1 <= j && m[E - k + 1][C - g] !== undefined) {
            m[E - k + 1][C - g].member4162(x, 0, J % Class86.member729, G - Class86.member729, z, D);
            A = true;
        }
        var v = false;
        if (F >= Class86.member729 && C + 1 <= c && m[E - k][C - g + 1] !== undefined) {
            m[E - k][C - g + 1].member4162(x, u % Class86.member729, 0, y, F - Class86.member729, D);
            v = true;
        }
        if (A && v && m[E - k + 1][C - g + 1] !== undefined) {
            m[E - k + 1][C - g + 1].member4162(x, 0, 0, G - Class86.member729, F - Class86.member729, D);
        }
    };
    i.member4163 = function (x, u, J, y, z, D) {
        var E = Math.floor(u * Class86.member718 / Class86.member730);
        if (E < k || E > j) {
            return;
        }
        var C = Math.floor(J * Class86.member718 / Class86.member730);
        if (C < g || C > c) {
            return;
        }
        var I = u - E * Class86.member729, G = u + y - E * Class86.member729;
        var H = J - C * Class86.member729, F = J + z - C * Class86.member729;
        var B = m[E - k][C - g];
        if (B !== undefined) {
            B.member4163(x, I, H, y, z, D);
        }
        var A = false;
        if (G >= Class86.member729 && E + 1 <= j && m[E - k + 1][C - g] !== undefined) {
            m[E - k + 1][C - g].member4163(x, 0, J % Class86.member729, G - Class86.member729, z, D);
            A = true;
        }
        var v = false;
        if (F >= Class86.member729 && C + 1 <= c && m[E - k][C - g + 1] !== undefined) {
            m[E - k][C - g + 1].member4163(x, u % Class86.member729, 0, y, F - Class86.member729, D);
            v = true;
        }
        if (A && v && m[E - k + 1][C - g + 1] !== undefined) {
            m[E - k + 1][C - g + 1].member4163(x, 0, 0, G - Class86.member729, F - Class86.member729, D);
        }
    };
    t = undefined;
    return i;
};