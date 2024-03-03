import { CoordFine } from 'Class290.js';
import { Class32 } from 'Class32.js';
import { Class304 } from 'Class304.js';
import { Class121 } from 'Class121.js';
import { Class37 } from 'Class37.js';
import { Class63 } from 'Class63.js';
import { Class372 } from 'Class372.js';
import { Class374 } from 'Class374.js';
import { Class387 } from 'Class387.js';
import { Class406 } from 'Class406.js';
import { Class86 } from 'Class86.js';
import { Class157 } from 'Class157.js';
import { Class49 } from 'Class49.js';
import { Class132 } from 'Class132.js';
import { Class72 } from 'Class72.js';
import { Class376 } from 'Class376.js';
export var Class413 = function () {
    var c = new Float32Array(16);
    var b = CoordFine();
    var a = new Array(Class32.member311);
    var e = Class304(undefined, Class32.member311);
    var d = function (j, n, h, i, g, k, m) {
        this.member1643 = undefined;
        this.member1642 = undefined;
        this.member1644 = undefined;
        this.member1566 = null;
        this.member4752 = null;
        this.member4753 = Class121.member778;
        this.member4754 = null;
        this.member4755 = false;
        this.member4756 = null;
        this.member4757 = undefined;
        this.member4758 = null;
        this.member4759 = null;
        this.member1611 = Class37.create();
        this.member4210 = 0;
        this.member4760 = Class63.member390;
        this.member1612 = new Float32Array(4);
        if (j !== undefined && n !== undefined && h !== undefined && i !== undefined && g !== undefined && k !== undefined) {
            member46(this, Class372, j, n, h, Class374.member390, -1);
            this.member1643 = i;
            this.member1642 = g;
            this.member1644 = m;
            this.member1566 = k;
            this.member1612[3] = -1;
        } else {
            throw new Error('1195 ');
        }
    };
    member45(Class372, d);
    d.prototype.member4380 = function (k, i, z, y, r, m, q) {
        var t = this.member4087();
        var s = this.member4089();
        if (s <= Class121.member796 && t <= Class121.member796) {
            this.member4088(s);
            return;
        }
        if (s !== Class121.member778) {
            if (this.member4752 === null) {
                var v = Class387.member390;
                if (this.member3320().member4192() === k) {
                    v += Class387.member4405;
                }
                if (m <= 1) {
                    v += Class387.member4406;
                } else if (m <= 3) {
                    v += Class387.member4407;
                }
                if (!Class121.member1033(s) && s > t) {
                    v += Class387.member4408;
                }
                this.member4752 = Class406(v, this.member1643, this.member1642, s, this.member1644, this.member1566, q);
                this.member4753 = s;
                if (!r.member2939(this.member4752)) {
                    this.member4752 = null;
                }
                return;
            }
            var n = this.member4752.member2723();
            if (!n.member2859) {
                return;
            } else if (!n.member2863) {
                this.member4752 = null;
                return;
            }
            var o = this.member4752.member2893();
            if (o !== null) {
                this.member512();
                this.member4754 = new Array(Class86.member414);
                this.member4756 = new Array(Class86.member414);
                this.member4759 = new Array(Class86.member414);
                for (var h = 0; h < Class86.member414; h++) {
                    if (o[h] !== undefined) {
                        this.member4754[h] = Class157({
                            member433: i,
                            member680: o[h].member1607
                        });
                        this.member4754[h].member510();
                        this.member4756[h] = o[h].member4624;
                        if (h === 0) {
                            this.member4758 = o[h].member4761;
                        }
                        this.member4759[h] = o[h].member4762;
                    } else {
                        var g = this.member4756[h] = new Array(Class86.member729 + 2);
                        if (h === 0) {
                            this.member4758 = new Array(Class86.member729 + 2);
                        }
                        for (var u = 0; u < Class86.member729 + 2; u++) {
                            g[u] = new Float32Array(Class86.member729 + 2);
                            if (h === 0) {
                                this.member4758[u] = new Float32Array(Class86.member729 + 2);
                            }
                        }
                        if (h > 0) {
                            for (var u = 0; u < Class86.member729; u++) {
                                for (var j = 0; j < Class86.member729; j++) {
                                    g[u + 1][j + 1] = this.member4763(h - 1, u, j, true) + 240 * 4;
                                }
                            }
                        }
                    }
                }
            } else {
                this.member4755 = true;
            }
            this.member4752.member2885();
            this.member4752 = null;
            this.member4210 = Date.now();
            if (this.member4753 !== s) {
                return;
            }
        } else {
            this.member512();
        }
        this.member4088(s);
    };
    d.prototype.member4764 = function (g) {
        this.member4760 = g === true ? Class63.member405 : Class63.member390;
    };
    d.prototype.member4765 = function () {
        if (this.member1612 !== undefined) {
            this.member1612[3] = 0;
        }
    };
    d.prototype.member512 = function () {
        if (this.member4754 !== null) {
            for (var g = 0; g < Class86.member414; g++) {
                if (this.member4754[g] !== undefined) {
                    this.member4754[g].member511();
                }
            }
            this.member4754 = null;
        }
        this.member4756 = null;
        this.member4758 = null;
        this.member4759 = null;
    };
    d.prototype.member3437 = function (g, i, j, k, h) {
        if (this.member4103(g)) {
            if (this.member4754 === null) {
                this.member4105(false);
                return;
            }
            if (this.member1612 !== undefined && this.member1612[3] < 0) {
                this.member1612[3] = (Date.now() - this.member4210) / 1000 - 1;
                if (this.member1612[3] >= 0) {
                    this.member1612 = undefined;
                }
            }
            Class49.member334(i, this.member1611);
            this.member4102();
            this.member4105(true);
        } else if (!this.member4104()) {
            return;
        }
        this.member4107(true);
    };
    d.prototype.member952 = function (i, z, x, v, u) {
        var s = Class132.member1266();
        var n = this.member4085();
        var t = n.member4225();
        var q = n.member4227();
        var j = n.member4766();
        var r = s.member522(Class72.member499);
        var g = s.member941(Class72.POINTLIGHT);
        var y = !r && g.member291();
        if (this.member4087() >= Class121.member797 || this.member1643 < j[0] - 1 || this.member1643 > j[0] + 1 || this.member1642 < j[1] - 1 || this.member1642 > j[1] + 1) {
            t = 0;
        }
        for (var h = 0; h < Class86.member414; h++) {
            if (this.member4754[h] !== undefined) {
                var B = Class304(undefined, Class32.member311);
                if (y) {
                    b.level = h;
                    var m = n.member4485(b, a, true);
                    if (m > 0) {
                        for (var k = 0; k < m; k++) {
                            var o = a[k];
                            o.member4224(v, false);
                            B.member3647(o);
                        }
                    }
                    g.member990(B);
                }
                var A = undefined;
                if (!r && h > t) {
                    A = 0;
                }
                this.member4754[h].member952(i, B, z, x, this.member1611, this.member1612, h > q, A, this.member4760);
            }
        }
        if (y) {
            g.member991();
        }
    };
    d.prototype.member486 = function (k, z, y, x) {
        var h = Class132.member1266();
        var i = this.member4085();
        var t = i.member4225();
        var u = i.member4227();
        var n = i.member4766();
        var j = h.member522(Class72.member499);
        var q = h.member941(Class72.POINTLIGHT);
        var o = !j && q.member291();
        if (this.member4087() >= Class121.member797 || this.member1643 < n[0] - 1 || this.member1643 > n[0] + 1 || this.member1642 < n[1] - 1 || this.member1642 > n[1] + 1) {
            t = 0;
        }
        for (var g = 0; g < Class86.member414; g++) {
            if (this.member4754[g] !== undefined) {
                if (o) {
                    b.level = g;
                    e.member3648();
                    var r = i.member4485(b, a, true);
                    if (r > 0) {
                        for (var m = 0; m < r; m++) {
                            var v = a[m];
                            v.member4224(y, false);
                            e.member3647(v);
                        }
                    }
                    q.member990(e);
                }
                var s = undefined;
                if (!j && g > t) {
                    s = 0;
                }
                this.member4754[g].member1630(k, z, this.member1611, this.member1612, g > u, s, this.member4760);
            }
        }
        if (o) {
            q.member991();
        }
    };
    d.prototype.member4102 = function () {
        if (this.member1612 !== undefined && this.member1612[3] < 0) {
            this.member4101(Class376.member4170);
        } else {
            this.member4101(Class376.member4169);
        }
    };
    d.prototype.member4230 = function (i, h, k) {
        if (this.member4754 !== null) {
            Class49.member334(h, this.member1611);
            var j = k;
            var g = k;
            if (k === undefined) {
                j = 0;
                g = Class86.member414 - 1;
            }
            for (k = j; k <= g; k++) {
                if (this.member4754[k] !== undefined) {
                    this.member4754[k].member1630(i, h, this.member1611, undefined, false, undefined, Class63.member390);
                }
            }
        }
    };
    d.prototype.member4162 = function (h, g, q, i, k, n) {
        if (n === 0) {
            return;
        }
        if (this.member4757 === undefined) {
            this.member4757 = new Array(Class86.member414);
        }
        var m = this.member4757[h];
        if (m === undefined) {
            m = new Array(Class86.member729);
            this.member4757[h] = m;
            for (var o = 0; o < Class86.member729; o++) {
                m[o] = new Int32Array(Class86.member729);
                for (var j = 0; j < Class86.member729; j++) {
                    m[o][j] = 0;
                }
            }
        }
        for (var o = g; o < g + i && o < Class86.member729; o++) {
            for (var j = q; j < q + k && j < Class86.member729; j++) {
                m[o][j] += n;
            }
        }
    };
    d.prototype.member4163 = function (h, g, q, i, k, n) {
        if (n === 0) {
            return;
        }
        if (this.member4757 === undefined) {
            this.member4757 = new Array(Class86.member414);
        }
        var m = this.member4757[h];
        if (m === undefined) {
            m = new Array(Class86.member729);
            this.member4757[h] = m;
            for (var o = 0; o < Class86.member729; o++) {
                m[o] = new Int32Array(Class86.member729);
                for (var j = 0; j < Class86.member729; j++) {
                    m[o][j] = 0;
                }
            }
        }
        for (var o = g; o < g + i && o < Class86.member729; o++) {
            for (var j = q; j < q + k && j < Class86.member729; j++) {
                m[o][j] -= n;
            }
        }
    };
    d.prototype.member4763 = function (m, k, j, i, h) {
        if (this.member4755) {
            return 0;
        }
        if (this.member4756 === null || this.member4756[m] === undefined) {
            return -1;
        } else {
            var g;
            if (i && m === 0) {
                g = this.member4758[k + 1][j + 1];
                if (h) {
                    return g + this.getLocationOffset(m, k, j);
                }
            } else {
                g = this.member4756[m][k + 1][j + 1];
                if (h) {
                    return g + this.getLocationOffset(m, k, j);
                }
            }
            return g;
        }
    };
    d.prototype.member4767 = function () {
        return this.member4755;
    };
    d.prototype.member4768 = function (j, i, g) {
        var h = this.member4757 && this.member4757[j];
        if (h !== undefined) {
            return h[Math.max(0, Math.min(Class86.member729 - 1, i))][Math.max(0, Math.min(Class86.member729 - 1, g))];
        }
        return 0;
    };
    d.prototype.member4115 = function (h, m, k, v, t) {
        if (this.member4755) {
            return 0;
        }
        if (this.member4756 === null || this.member4756[h] === undefined) {
            return -1;
        } else {
            var q = Class86.member718;
            var g = Math.floor(m / q) + 1;
            var u = Math.floor(k / q) + 1;
            var j = m & q - 1;
            var i = k & q - 1;
            var r;
            if (v && h === 0) {
                r = this.member4758;
            } else {
                r = this.member4756[h];
            }
            var o = r[g][u];
            if (j !== 0) {
                o = (o * (q - j) + r[g + 1][u] * j) / q;
            }
            if (i === 0) {
                if (t) {
                    return o + this.member4768(h, g - 1, u - 1);
                }
                return o;
            }
            var n = r[g][u + 1];
            if (j !== 0) {
                n = (n * (q - j) + r[g + 1][u + 1] * j) / q;
            }
            var s = (o * (q - i) + n * i) / q;
            if (t) {
                s += this.member4768(h, g - 1, u - 1);
            }
            return s;
        }
    };
    d.prototype.member4637 = function (i, n, k) {
        if (this.member4755) {
            return 0;
        }
        if (this.member4756 === null || this.member4756[i] === undefined) {
            return -1;
        } else {
            var r = Class86.member718;
            var g = Math.floor(n / r) + 1;
            var t = Math.floor(k / r) + 1;
            var m = n & r - 1;
            var j = k & r - 1;
            var s = this.member4758;
            var h = this.member4756[i];
            var q = ((s[g][t] - h[g][t]) * (r - m) + (s[g + 1][t] - h[g + 1][t]) * m) / r;
            var o = ((s[g][t + 1] - h[g][t + 1]) * (r - m) + (s[g + 1][t + 1] - h[g + 1][t + 1]) * m) / r;
            return (q * (r - j) + o * j) / r;
        }
    };
    d.prototype.member4570 = function (i, h, g) {
        if (this.member4759 === null || this.member4759[i] === undefined) {
            return -1;
        } else {
            return this.member4759[i][h + 1][g + 1];
        }
    };
    d.prototype.member4114 = function (g) {
        if (this.member4756 === null || this.member4756[g] === undefined) {
            return null;
        } else {
            return this.member4756[g];
        }
    };
    return function (j, n, h, i, g, k, m) {
        return new d(j, n, h, i, g, k, m);
    };
}();