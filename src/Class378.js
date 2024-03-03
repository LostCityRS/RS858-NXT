import { Class41 } from 'Class41.js';
import { Class166 } from 'Class166.js';
import { Class140 } from 'Class140.js';
import { Class49 } from 'Class49.js';
import { Class37 } from 'Class37.js';
import { Class372 } from 'Class372.js';
import { Class374 } from 'Class374.js';
import { Class304 } from 'Class304.js';
import { Class377 } from 'Class377.js';
import { Class375 } from 'Class375.js';
import { Class288 } from 'Class288.js';
import { Class86 } from 'Class86.js';
import { Class129 } from 'Class129.js';
import { Class130 } from 'Class130.js';
import { Class132 } from 'Class132.js';
import { Class72 } from 'Class72.js';
import { Class121 } from 'Class121.js';
import { Class376 } from 'Class376.js';
import { Class155 } from 'Class155.js';
import { Class133 } from 'Class133.js';
import { Class371 } from 'Class371.js';
import { Class332 } from 'Class332.js';
import { Class347 } from 'Class347.js';
export var Class378 = function () {
    var g = Class41.create();
    var a = Class166(new Float32Array(3), new Float32Array(3));
    var e = Class140.create();
    var d = [
        0,
        1,
        0
    ];
    var c = Class49.create();
    var b = 1;
    var i = 2;
    var j = 4;
    var h = function (y, r, B, q, v, A, o, n, z, m, k, x, t, u) {
        this.member2568;
        this.member2567;
        this.member2526;
        this.member2522;
        this.member1611 = Class37.create();
        this.member2285 = undefined;
        this.member4203 = undefined;
        this.member4204 = {};
        this.member4205 = false;
        this.member4206 = false;
        this.member4207 = false;
        this.member4208 = false;
        this.member2565;
        this.member2566;
        this.member4209;
        this.member2621 = null;
        this.member4210 = 0;
        this.member1612 = new Float32Array(4);
        this.member3434 = undefined;
        this.member4211 = undefined;
        this.member4212 = false;
        this.member4213 = undefined;
        if (y !== undefined && r !== undefined && B !== undefined && q !== undefined && v !== undefined && A !== undefined && o !== undefined && n !== undefined && z !== undefined && m !== undefined) {
            member46(this, Class372, r, B, q, Class374.member4138, -1);
            this.member2567 = v;
            this.member2568 = A;
            this.member2526 = o;
            this.member2522 = n;
            if (x !== undefined) {
                this.member4211 = Class304(x);
            }
            this.member2621 = z;
            this.member2621.member563();
            this.member2621.member510();
            this.member2285 = t;
            this.member4203 = u;
            this.member2565 = m;
            this.member2566 = k;
            this.member4209 = new Array(k.length);
            for (var D = 0; D < this.member4209.length; D++) {
                this.member4209[D] = 0;
            }
            for (var D = 0; D < this.member4203.length; D++) {
                var C = this.member4203[D];
                this.member4204[C.member2079] = 0;
                if (!C.member2524) {
                    C.member1794.translate(this.member3320().member4099());
                    continue;
                }
                Class41.set(C.member2581, g);
                Class41.member324(g);
                C.member1794.translate(g);
                Class140.member1353(d, -C.member2520 * Math.PI / 2, e);
                Class140.member316(e, c);
                C.member1794.transform(c);
                var E = Class377();
                r.member2013(E);
                var s = Class375(E, this, q, C.level, C.member2514, C.member2515, C.member4148, C.member2519, C.member2520, C.member2522, C.member2518, C.member1794);
                C.member4179 = s;
                E.member4198(C.member2520 * Math.PI / 2);
                E.member4193(C.member2581);
                E.member4185(s);
            }
            this.member4093(Class166(this.member2621.member2098()));
            this.member4094(true);
            if (this.member2621.member2101() !== undefined) {
                if (this.member3434 === undefined) {
                    this.member3434 = Class288({ member433: y });
                }
            } else if (this.member3434 !== undefined) {
                this.member3434.member512();
                this.member3434 = undefined;
            }
            this.member4210 = Date.now();
            this.member1612[3] = -1;
        } else {
            throw new Error('1188 ');
        }
    };
    member45(Class372, h);
    h.prototype.member512 = function () {
        this.member2621.member511();
        this.member2621 = null;
        this.member4123();
        if (this.member3434 !== undefined) {
            this.member3434.member512();
            this.member3434 = undefined;
        }
    };
    h.prototype.member4214 = function (m, k) {
        if ((this.member4204[m.member2079] & k) === 0) {
            this.member4204[m.member2079] |= k;
            if (m.member4179 !== undefined) {
                if ((k & j) !== 0) {
                    m.member4179.member4156();
                } else if ((k & ~j) !== 0) {
                    m.member4179.hide();
                }
            }
        }
    };
    h.prototype.member4215 = function (m, k) {
        if ((this.member4204[m.member2079] & k) !== 0) {
            this.member4204[m.member2079] &= ~k;
            if (m.member4179 !== undefined) {
                if ((k & j) !== 0) {
                    m.member4179.member4157();
                } else if ((k & ~j) !== 0) {
                    m.member4179.member4155();
                }
            }
        }
    };
    h.prototype.member4216 = function (r, s, q, o, n) {
        for (var k = 0; k < this.member4203.length; k++) {
            var m = this.member4203[k];
            if (!m.member2524) {
                continue;
            }
            if (!m.member4179.member4159() && (r === -1 || m.member2506 === r) && m.level === s && m.member2514 === q && m.member2515 === o && m.member2519 === n) {
                this.member4214(m, b);
                this.member4205 = true;
                return true;
            }
        }
        return false;
    };
    h.prototype.member4217 = function (s, t, r, o, n) {
        this.member4205 = false;
        var q = undefined;
        for (var k = 0; k < this.member4203.length; k++) {
            var m = this.member4203[k];
            if (!m.member2524) {
                continue;
            }
            if (m.member4179.member4159() && (s === -1 || m.member2506 === s) && m.level === t && m.member2514 === r && m.member2515 === o && m.member2519 === n) {
                if ((this.member4204[m.member2079] & b) === b) {
                    this.member4215(m, b);
                    q = m.member4179;
                }
            } else if ((this.member4204[m.member2079] & b) === b) {
                this.member4205 = true;
            }
        }
        return q;
    };
    h.prototype.member4218 = function (n, o) {
        this.member4205 = false;
        for (var k = 0; k < this.member4203.length; k++) {
            var m = this.member4203[k];
            if (!m.member2524) {
                continue;
            }
            m.member4179.member3320().member344(g);
            if (g[0] >= n.member3454[0] && g[0] <= o.member3454[0] && g[2] >= n.member3454[2] && g[2] <= o.member3454[2] && m.level === n.level) {
                this.member4215(m, b);
            } else if ((this.member4204[m.member2079] & b) === b) {
                this.member4205 = true;
            }
        }
    };
    h.prototype.member4219 = function (r, q, o, n) {
        for (var k = 0; k < this.member4203.length; k++) {
            var m = this.member4203[k];
            if (!m.member2524) {
                continue;
            }
            if (m.level === r && m.member2514 === q && m.member2515 === o && m.member2519 === n) {
                return m.member4179;
            }
        }
        return undefined;
    };
    h.prototype.member4220 = function () {
        for (var k = 0; k < this.member4203.length; k++) {
            if (this.member4203[k].member2582) {
                this.member4214(this.member4203[k], i);
            }
        }
        this.member4206 = true;
    };
    h.prototype.member4221 = function () {
        for (var k = 0; k < this.member4203.length; k++) {
            if (this.member4203[k].member2582) {
                this.member4215(this.member4203[k], i);
            }
        }
        this.member4206 = false;
    };
    h.prototype.member4222 = function (n, q, r, t, o, m) {
        Class49.member334(q, this.member1611);
        var s = m;
        if (s !== Class86.member414 || this.member4207) {
            for (var k = 0; k < this.member4203.length; k++) {
                if (this.member4203[k].member2523 !== undefined) {
                    if (Class129.member1178(this.member4203[k].member2507, this.member4203[k].member2523, s)) {
                        this.member4214(this.member4203[k], j);
                        this.member4207 = true;
                    } else {
                        this.member4215(this.member4203[k], j);
                    }
                }
            }
            if (s === Class86.member414) {
                this.member4207 = false;
            }
        }
        this.member4213 = undefined;
        if (this.member4205 || this.member4206 || this.member4207) {
            this.member4213 = this.member4204;
        }
    };
    h.prototype.member3437 = function (q, B, x, k, A) {
        if (this.member4103(q)) {
            for (var v = 0; v < this.member2566.length; v++) {
                --this.member4209[v];
            }
            Class49.member334(B, this.member1611);
            if (this.member1612 !== undefined && this.member1612[3] < 0) {
                this.member1612[3] = (Date.now() - this.member4210) / 1000 - 1;
                if (this.member1612[3] >= 0) {
                    this.member1612 = undefined;
                }
            }
            this.member4102();
            this.member4105(true);
        } else if (!this.member4104()) {
            return;
        }
        if (Class130.member1194()) {
            if (this.member2522) {
                this.member4107(false);
                return;
            }
            if (!this.member4208) {
                this.member4208 = this.member4085().member4223(this);
            }
            if (!this.member4108()) {
                this.member4107(false);
                return;
            }
        }
        var o = Class132.member1266();
        var s = o.member522(Class72.member499);
        if (s) {
            var r = o.member941(Class72.member499);
            if (!this.member2526 || this.member4087() > Class121.member881 || r.member972() < r.member970) {
                this.member4107(false);
                return;
            }
        }
        var n = o.member522(Class72.member96);
        if (n) {
            if (!this.member2526) {
                this.member4107(false);
                return;
            }
        }
        var z = o.member522(Class72.member416);
        if (z) {
            if (!this.member2526) {
                this.member4107(false);
                return;
            }
        }
        var u = o.member941(Class72.member498);
        this.member4212 = this.member4211 !== undefined && u.member291() && !s;
        if (this.member4212) {
            var y = this.member4211.member427();
            for (var t = 0; t < y.length; t++) {
                y[t].member4224(A, false);
            }
        }
        var m = Class86.member414;
        if (!s && !Class130.member1194()) {
            m = this.member4085().member4225();
        }
        if (m !== Class86.member414 || this.member4207) {
            for (var v = 0; v < this.member4203.length; v++) {
                if (this.member4203[v].member2523 !== undefined) {
                    if (Class129.member1178(this.member4203[v].member2507, this.member4203[v].member2523, m)) {
                        this.member4214(this.member4203[v], j);
                        this.member4207 = true;
                    } else {
                        this.member4215(this.member4203[v], j);
                    }
                }
            }
            if (m === Class86.member414) {
                this.member4207 = false;
            }
        }
        this.member4213 = undefined;
        if (this.member4205 || this.member4206 || this.member4207) {
            this.member4213 = this.member4204;
        }
        this.member4107(true);
    };
    h.prototype.member4102 = function () {
        if (this.member1612 !== undefined && this.member1612[3] < 0) {
            this.member4101(Class376.member4172);
            return;
        }
        var k = 0;
        if (this.member2568) {
            k |= Class376.member4171;
        }
        if (this.member2567) {
            k |= Class376.member4169;
        }
        if (this.member3434 !== undefined) {
            k |= Class376.member4171;
        }
        this.member4101(k);
    };
    h.prototype.member1805 = function (q, o, s) {
        var n = s.member4226;
        var t = this.member3320().member4167();
        var r = t.member1805(q, o);
        if (!r || n === undefined) {
            return r;
        }
        for (var k = 0; k < this.member4203.length; k++) {
            var m = this.member4203[k];
            if (m.member2523 === undefined || n > m.member2523) {
                continue;
            }
            if (m.member4179 !== undefined) {
                t = m.member4179.member3320().member4167();
            } else {
                t = m.member1794;
            }
            if (t.member1805(q, o)) {
                return true;
            }
        }
        return false;
    };
    h.prototype.member952 = function (m, q, v, u, t) {
        var n = Class132.member1266();
        var o = n.member522(Class72.member499);
        var r = n.member941(Class72.member498);
        var s = this.member4085().member4227();
        var k = this.member4087() >= Class121.member881;
        if (this.member4212) {
            r.member990(this.member4211);
        }
        m.member4228(Class155.member96, this.member2526);
        m.member4228(Class155.member416, this.member2526);
        this.member2621.member952(m, u, q, v, this.member1611, null, k, t, this.member1612, this.member4081() >= s, this.member4213);
        if (this.member3434 !== undefined && !o && !Class130.member1194() && (t === undefined || t === Class133.member1270)) {
            this.member2621.member2128(this.member3434, v, undefined, this.member4213);
            this.member3434.member952(m, q);
        }
        m.member4229(Class155.member416);
        m.member4229(Class155.member96);
        if (this.member4212) {
            r.member991();
        }
    };
    h.prototype.member4230 = function (s, r, q, n) {
        var m = true;
        var o = false;
        var k = false;
        this.member2621.member1630(q, s, r, this.member1611, null, m, n, undefined, k, this.member4213);
    };
    h.prototype.member486 = function (o, u, t, s) {
        var m = Class132.member1266();
        var n = m.member522(Class72.member499);
        var q = m.member941(Class72.member498);
        var r = this.member4085().member4227();
        var k = this.member4087() >= Class121.member881;
        if (this.member4212) {
            q.member990(this.member4211);
        }
        this.member2621.member1630(t, o, u, this.member1611, null, k, s, this.member1612, this.member4081() >= r, this.member4213);
        if (this.member3434 !== undefined && !n && !Class130.member1194() && (s === undefined || s === Class133.member1270)) {
            this.member2621.member2128(this.member3434, u, undefined, this.member4213);
            this.member3434.member486(o);
        }
        if (this.member4212) {
            q.member991();
        }
    };
    h.prototype.member4122 = function () {
        this.member4125();
        for (var q = 0; q < this.member2565.length; q++) {
            var v = this.member2565[q];
            if (this.member4126(v.member2573)) {
                continue;
            }
            var r = Class371.member4059(Class332.member3782, v.member2573, -1, v.member2542, Class347.member3914, this, v.member2575, {
                member4014: 0,
                maxDistance: v.member2543 + v.member2544
            }, v.member2574, this.member4081());
            if (r !== undefined) {
                r.member3335(v.member2576, v.member2577, v.member2578, v.member2579);
                r.start();
                this.member4128(r, v.member2573);
            }
        }
        for (var q = 0; q < this.member2566.length; q++) {
            var u = this.member2566[q];
            if (u === undefined || this.member4209[q] > 0) {
                continue;
            }
            var o = this.member2566[q].member2549;
            if (o !== undefined && o.length > 0) {
                var s = true;
                for (var n = 0; n < o.length; n++) {
                    if (this.member4126(o[n])) {
                        s = false;
                        break;
                    }
                }
                if (s) {
                    var m = o[Math.floor(Math.random() * o.length)];
                    if (m >= 0) {
                        var r = Class371.member4059(Class332.member3783, m, 0, u.member2542, Class347.member3913, this, u.member2575, {
                            member4014: 0,
                            maxDistance: u.member2543 + u.member2544
                        }, u.member2574, this.member4081());
                        if (r !== undefined) {
                            r.member3335(u.member2576, u.member2577, u.member2578, u.member2579);
                            r.start();
                            this.member4128(r, m);
                            var k = u.member2550;
                            var t = u.member2551;
                            this.member4209[q] = Math.floor(k + Math.random() * (t - k));
                        }
                    }
                }
            }
        }
    };
    return function (y, A, r, v, n, x, t, m, u, q, s, k, z, o) {
        return new h(y, A, r, v, n, x, t, m, u, q, s, k, z, o);
    };
}();