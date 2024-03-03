import { Class41 } from 'Class41.js';
import { Class49 } from 'Class49.js';
import { Class162 } from 'Class162.js';
export var Cuboid = function () {
    var i = new Float32Array(3);
    var t = new Float32Array(3);
    var r = new Float32Array(3);
    var o = new Float32Array(3);
    var m = new Float32Array(3);
    var j = new Float32Array(3);
    var g = new Float32Array(3);
    var h = new Float32Array(4);
    var s = new Float32Array(4);
    var b = new Float32Array(16);
    var e = {
        point: new Float32Array(3),
        member1788: 0
    };
    var c = {
        point: new Float32Array(3),
        member1788: 0
    };
    var k = Math.pow(2, 32) - 1;
    var d = function (u, v) {
        this.member1789 = undefined;
        this.member1790 = undefined;
        this.member1791 = undefined;
        this.member25(u, v);
    };
    d.prototype.member25 = function (u, v) {
        if (u instanceof d) {
            this.member1789 = Class41.create(u.member1792());
            this.member1790 = Class41.create(u.member1793());
        } else if (u instanceof Float32Array && v instanceof Float32Array) {
            this.member1789 = u;
            this.member1790 = v;
        } else if (u.member1789 !== undefined && u.member1790 !== undefined) {
            this.member1789 = u.member1789;
            this.member1790 = u.member1790;
        } else if (u.member1794 !== undefined) {
            this.member1789 = Class41.create(u.member1794.member1792());
            this.member1790 = Class41.create(u.member1794.member1793());
        } else if (u.member680 !== undefined) {
            this.member1789 = u.member680.member1789;
            this.member1790 = u.member680.member1790;
        } else if (u.member1524 !== undefined) {
            this.member1789 = new Float32Array(3);
            this.member1789[0] = u.member1524.gFloat();
            this.member1789[1] = u.member1524.gFloat();
            this.member1789[2] = u.member1524.gFloat();
            this.member1790 = new Float32Array(3);
            this.member1790[0] = u.member1524.gFloat();
            this.member1790[1] = u.member1524.gFloat();
            this.member1790[2] = u.member1524.gFloat();
        } else if (u.member1795 !== undefined) {
            this.member1789 = new Float32Array(3);
            this.member1789[0] = u.member1795.gSmart1or2s();
            this.member1789[1] = -u.member1795.gSmart1or2s();
            this.member1789[2] = u.member1795.gSmart1or2s();
            this.member1790 = new Float32Array(3);
            this.member1790[0] = u.member1795.gSmart1or2s();
            this.member1790[1] = -u.member1795.gSmart1or2s();
            this.member1790[2] = u.member1795.gSmart1or2s();
        } else {
            throw new Error('1719 ');
        }
    };
    d.prototype.member1796 = function () {
        this.member1791 = undefined;
    };
    d.prototype.member681 = function () {
        return this;
    };
    d.prototype.member1318 = function (u) {
        u.pFloat(this.member1789[0]);
        u.pFloat(this.member1789[1]);
        u.pFloat(this.member1789[2]);
        u.pFloat(this.member1790[0]);
        u.pFloat(this.member1790[1]);
        u.pFloat(this.member1790[2]);
    };
    d.prototype.member301 = function () {
        this.member1789[0] = +k;
        this.member1789[1] = +k;
        this.member1789[2] = +k;
        this.member1790[0] = -k;
        this.member1790[1] = -k;
        this.member1790[2] = -k;
        this.member1796();
    };
    d.prototype.member1797 = function (u) {
        Class41.set(u.member1792(), this.member1789);
        Class41.set(u.member1793(), this.member1790);
        this.member1796();
    };
    d.prototype.translate = function (u) {
        Class41.add(this.member1789, u);
        Class41.add(this.member1790, u);
        this.member1796();
    };
    d.prototype.scale = function (u) {
        this.member1798(i);
        Class41.member322(this.member1789, i, t);
        Class41.member322(this.member1790, i, r);
        Class41.scale(t, u);
        Class41.scale(r, u);
        Class41.add(i, t, this.member1789);
        Class41.add(i, r, this.member1790);
        this.member1796();
    };
    d.prototype.transform = function (A) {
        Class41.set(this.member1789, i);
        Class41.set(this.member1790, t);
        this.member1789[0] = this.member1790[0] = A[12];
        this.member1789[1] = this.member1790[1] = A[13];
        this.member1789[2] = this.member1790[2] = A[14];
        for (var z = 0; z < 3; z++) {
            for (var v = 0; v < 3; v++) {
                var y = A[z + v * 4];
                var x = y * i[v];
                var u = y * t[v];
                if (x < u) {
                    this.member1789[z] += x;
                    this.member1790[z] += u;
                } else {
                    this.member1789[z] += u;
                    this.member1790[z] += x;
                }
            }
        }
        this.member1796();
    };
    d.prototype.member1799 = function (v) {
        for (var u = 0; u < 3; u++) {
            if (v[u] < this.member1789[u]) {
                this.member1789[u] = v[u];
            }
            if (v[u] > this.member1790[u]) {
                this.member1790[u] = v[u];
            }
        }
        this.member1796();
    };
    d.prototype.member1800 = function (x) {
        var v = x.member1792();
        var y = x.member1793();
        for (var u = 0; u < 3; u++) {
            if (v[u] < this.member1789[u]) {
                this.member1789[u] = v[u];
            }
            if (y[u] > this.member1790[u]) {
                this.member1790[u] = y[u];
            }
        }
        this.member1796();
    };
    d.prototype.member1792 = function () {
        return this.member1789;
    };
    d.prototype.member1793 = function () {
        return this.member1790;
    };
    d.prototype.member556 = function () {
        return this.member1790[0] - this.member1789[0];
    };
    d.prototype.member557 = function () {
        return this.member1790[1] - this.member1789[1];
    };
    d.prototype.member890 = function () {
        return this.member1790[2] - this.member1789[2];
    };
    d.prototype.member1801 = function () {
        if (this.member1791 === undefined) {
            i[0] = Math.max(Math.abs(this.member1789[0]), Math.abs(this.member1790[0]));
            i[1] = Math.max(Math.abs(this.member1789[1]), Math.abs(this.member1790[1]));
            i[2] = Math.max(Math.abs(this.member1789[2]), Math.abs(this.member1790[2]));
            this.member1791 = Class41.length(i);
        }
        return this.member1791;
    };
    d.prototype.member1798 = function (u) {
        if (u === undefined) {
            u = new Float32Array(3);
        }
        u[0] = this.member1789[0] + (this.member1790[0] - this.member1789[0]) / 2, u[1] = this.member1789[1] + (this.member1790[1] - this.member1789[1]) / 2, u[2] = this.member1789[2] + (this.member1790[2] - this.member1789[2]) / 2;
        return u;
    };
    d.prototype.member1802 = function (u) {
        if (u[0] >= this.member1789[0] && u[0] <= this.member1790[0] && u[1] >= this.member1789[1] && u[1] <= this.member1790[1] && u[2] >= this.member1789[2] && u[2] <= this.member1790[2]) {
            return true;
        } else {
            return false;
        }
    };
    d.prototype.member1803 = function (v) {
        var x = v.member1792();
        var u = v.member1793();
        if (this.member1789[0] > u[0] || this.member1790[0] < x[0]) {
            return false;
        }
        if (this.member1789[2] > u[2] || this.member1790[2] < x[2]) {
            return false;
        }
        if (this.member1789[1] > u[1] || this.member1790[1] < x[1]) {
            return false;
        }
        return true;
    };
    d.prototype.member1804 = function (v) {
        var x = v.member1792();
        var u = v.member1793();
        if (this.member1789[0] < x[0] || this.member1790[0] > u[0]) {
            return false;
        }
        if (this.member1789[1] < x[1] || this.member1790[1] > u[1]) {
            return false;
        }
        if (this.member1789[2] < x[2] || this.member1790[2] > u[2]) {
            return false;
        }
        return true;
    };
    d.prototype.member1805 = function (x, u) {
        this.member1798(i);
        var z = t;
        Class41.member322(i, x, z);
        var y = r;
        Class41.member322(i, u, y);
        var A = o;
        Class41.add(z, y, A);
        Class41.scale(A, 0.5);
        var C = m;
        Class41.member322(z, A, C);
        var B = j;
        B[0] = Math.abs(C[0]);
        B[1] = Math.abs(C[1]);
        B[2] = Math.abs(C[2]);
        var v = g;
        Class41.member322(this.member1790, this.member1789, v);
        Class41.scale(v, 0.5);
        if (Math.abs(A[0]) > v[0] + B[0]) {
            return false;
        }
        if (Math.abs(A[1]) > v[1] + B[1]) {
            return false;
        }
        if (Math.abs(A[2]) > v[2] + B[2]) {
            return false;
        }
        if (Math.abs(A[1] * C[2] - A[2] * C[1]) > v[1] * B[2] + v[2] * B[1]) {
            return false;
        }
        if (Math.abs(A[0] * C[2] - A[2] * C[0]) > v[0] * B[2] + v[2] * B[0]) {
            return false;
        }
        if (Math.abs(A[0] * C[1] - A[1] * C[0]) > v[0] * B[1] + v[1] * B[0]) {
            return false;
        }
        return true;
    };
    d.prototype.member1806 = function (z, v) {
        var u = z[0];
        if (u < this.member1789[0]) {
            u = this.member1789[0];
        } else if (u > this.member1790[0]) {
            u = this.member1790[0];
        }
        v[0] = u;
        var B = z[1];
        if (B < this.member1789[1]) {
            B = this.member1789[1];
        } else if (B > this.member1790[1]) {
            B = this.member1790[1];
        }
        v[1] = B;
        var A = z[2];
        if (A < this.member1789[2]) {
            A = this.member1789[2];
        } else if (A > this.member1790[2]) {
            A = this.member1790[2];
        }
        v[2] = A;
    };
    d.prototype.member1807 = function (u) {
        if (this.member1802(u)) {
            return 0;
        } else {
            this.member1806(u, i);
            Class41.member322(u, i, t);
            return Class41.length(t);
        }
    };
    d.prototype.member1808 = function (u) {
        if (this.member1802(u)) {
            return 0;
        } else {
            this.member1806(u, i);
            Class41.member322(u, i, t);
            t[1] = 0;
            return Class41.length(t);
        }
    };
    d.prototype.member1809 = function (u) {
        if (this.member1802(u)) {
            return 0;
        } else {
            this.member1806(u, i);
            Class41.member322(u, i, t);
            t[1] = 0;
            return Class41.member327(t, t);
        }
    };
    var n = function (A, y, x) {
        var v = i;
        Class41.member322(A, y, v);
        var u = t;
        Class41.member322(A, x, u);
        var z = r;
        Class41.member325(v, u, z);
        h[0] = z[0];
        h[1] = z[1];
        h[2] = z[2];
        h[3] = z[0] * -A[0] + z[1] * -A[1] + z[2] * -A[2];
        return h;
    };
    var q = function (v, u, C, A, B, x) {
        var y = n(C, A, B);
        var D = -(y[0] * v[0] + y[1] * v[1] + y[2] * v[2] + y[3]) / (y[0] * u[0] + y[1] * u[1] + y[2] * u[2]);
        var z = i;
        Class41.scale(u, D, z);
        Class41.add(v, z, x.point);
        x.member1788 = Math.asin(Math.abs(y[0] * u[0] + y[1] * u[1] + y[2] * u[2]) / (Math.sqrt(y[0] * y[0] + y[1] * y[1] + y[2] * y[2]) * Math.sqrt(u[0] * u[0] + u[1] * u[1] + u[2] * u[2])));
        return x;
    };
    d.prototype.member1810 = function (u, y) {
        var z = this.member1790;
        var x = t;
        x[0] = this.member1790[0] - this.member556();
        x[1] = this.member1790[1];
        x[2] = this.member1790[2];
        var v = r;
        v[0] = this.member1790[0];
        v[1] = this.member1790[1];
        v[2] = this.member1790[2] - this.member890();
        return q(u, y, z, x, v, e);
    };
    d.prototype.member1811 = function (u, y) {
        var z = this.member1789;
        var x = t;
        x[0] = this.member1789[0] + this.member556();
        x[1] = this.member1789[1];
        x[2] = this.member1789[2];
        var v = r;
        v[0] = this.member1789[0];
        v[1] = this.member1789[1];
        v[2] = this.member1789[2] + this.member890();
        return q(u, y, z, x, v, c);
    };
    d.prototype.member1812 = function (A, y, v, u, z) {
        var D = this.member1798(i);
        h[0] = D[0];
        h[1] = this.member1789[1];
        h[2] = D[2];
        h[3] = 1;
        s[0] = D[0];
        s[1] = this.member1790[1];
        s[2] = D[2];
        s[3] = 1;
        var E = this.member556() / 2;
        var x = this.member890() / 2;
        if (x > E) {
            E = x;
        }
        Class49.member323(A, y, b);
        Class49.member331(b, h);
        Class49.member331(b, s);
        if (h[2] < -h[3] || s[2] < -s[3]) {
            return false;
        }
        if (h[2] / h[3] > s[2] / s[3]) {
            var B = h[0] + A[0] * E + A[12];
            var C = h[3] + A[3] * E + A[15];
            h[0] = Math.floor((h[0] / h[3] + 1) / 2 * v);
            h[1] = Math.floor((h[1] / h[3] + 1) / 2 * u);
            s[0] = Math.floor((s[0] / s[3] + 1) / 2 * v);
            s[1] = Math.floor((s[1] / s[3] + 1) / 2 * u);
            E = Math.floor((B / C + 1) / 2 * v) - h[0];
        } else {
            var B = s[0] + A[0] * E + A[12];
            var C = s[3] + A[3] * E + A[15];
            h[0] = Math.floor((h[0] / h[3] + 1) / 2 * v);
            h[1] = Math.floor((h[1] / h[3] + 1) / 2 * u);
            s[0] = Math.floor((s[0] / s[3] + 1) / 2 * v);
            s[1] = Math.floor((s[1] / s[3] + 1) / 2 * u);
            E = Math.floor((B / C + 1) / 2 * v) - s[0];
        }
        var G = z.member1813();
        G[0] = h[0];
        G[1] = h[1];
        G[2] = h[2];
        var F = z.member1814();
        F[0] = s[0];
        F[1] = s[1];
        F[2] = s[2];
        z.member1815(E);
        return true;
    };
    d.prototype.member299 = function () {
        return '([' + this.member1789[0] + ', ' + this.member1789[1] + ', ' + this.member1789[2] + '] -> [' + this.member1790[0] + ', ' + this.member1790[1] + ', ' + this.member1790[2] + '])';
    };
    d.prototype.member1816 = function () {
        a.member33(this);
    };
    var a = Class162(function (v, u) {
        return new d(v, u);
    }, undefined, d.prototype.member25, 50);
    return function (v, u) {
        return a.get(v, u);
    };
}();