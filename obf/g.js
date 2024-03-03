/*!
 * This software uses a number of 3rd party libraries and
 * algorithms under various license terms. We are grateful
 * for the contributions of these 3rd parties and are happy
 * to include their licenses and acknowledgements below:
 */
/*!
 * General thanks to:
 * 
 * Webkit/Chromium/Chrome teams and contributors
 * Mozilla and FireFox teams and contributors
 * Khronos Group, particularly the WebGL authors and contributors
 *	- Brandon Jones
 * 	- Florian Boesch
 * The W3C, particularly the games working group
 * Anyone on StackOverflow who has answered any obscure WebGL or HTML5 question :)
 *
 * Without their ideas, code or input this project would not have been possible! 
 */
/*!
 * require.js deployment system (removed from final builds, but invaluable during development!):
 *
 * @license RequireJS 2.0.6 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
/*!
 * GLMatrix maths library (with modifications):
 *
 * Copyright (c) 2011 Brandon Jones
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 * 1. The origin of this software must not be misrepresented; you must not
 * claim that you wrote the original software. If you use this software
 * in a product, an acknowledgment in the product documentation would be
 * appreciated but is not required.
 *
 * 2. Altered source versions must be plainly marked as such, and must not
 * be misrepresented as being the original software.
 *
 * 3. This notice may not be removed or altered from any source
 * distribution.
 */
/*!
 * ZLib decompression library:
 *
 * Copyright (c) 2011 Mozilla Foundation
 *
 * Contributors: Andreas Gal <gal@mozilla.com>
 * Chris G Jones <cjones@mozilla.com>
 * Shaon Barman <shaon.barman@gmail.com>
 * Vivien Nicolas <21@vingtetun.org>
 * Justin D'Arcangelo <justindarc@gmail.com>
 * Yury Delendik
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
/*!
 * Leemon Baird's BigInt Javascript library (with modifications):
 *
 * Big Integer Library v. 5.4
 * Created 2000, last modified 2009
 * Leemon Baird
 * www.leemon.com
 *
 * This file is public domain.   You can use it for any purpose without restriction.
 * I do not guarantee that it is correct, so use it at your own risk.  If you use 
 * it for something interesting, I'd appreciate hearing about it.  If you find 
 * any bugs or make any improvements, I'd appreciate hearing about those too.
 * It would also be nice if my name and URL were left in the comments.  But none 
 * of that is required.
 */
/*!
 * FXAA algorithm and shader code:
 *
 * Based on standard FXAA algorithm by Timothy Lottes at NVIDIA, WebGL GLSL port from 
 * Florian Boesch:
 * https://github.com/pyalot/webgl-deferred-irradiance-volumes/blob/master/README.md
 * 
 * MIT Licensed:
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this 
 * software and associated documentation files (the "Software"), to deal in the Software 
 * without restriction, including without limitation the rights to use, copy, modify, 
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
 * permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies 
 * or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE 
 * OR OTHER DEALINGS IN THE SOFTWARE.
 */
"use strict";
var fjp = function() {
    var b = {};
    var j = false;
    var i = {};
    var h = false;
    var c = false;
    var a = function() {
        var k = self;
        if (k === undefined) {
            k = window
        }
        if (k.performance !== undefined) {
            if (k.performance.now !== undefined && k.performance.timing !== undefined) {
                return k.performance.now() + k.performance.timing.navigationStart
            }
            if (k.performance.webkitNow !== undefined && k.performance.timing !== undefined) {
                return k.performance.webkitNow() + k.performance.timing.navigationStart
            }
        }
        if (!h) {
            if (false) {}
            h = true
        }
        return Date.now()
    };
    var e = false;
    var d = function(k, l) {
        return k + (l !== undefined ? "(" + l + ")" : "")
    };
    var g = function(k, l) {
        var m = i[k];
        if (m === undefined) {
            m = i[k] = {
                name: k,
                _crf: 0,
                _crh: 0,
                _crj: false,
                _crl: 0,
                _crm: {}
            }
        }
        var n = m;
        if (l !== undefined) {
            if (m[l] !== undefined) {
                n = m[l]
            } else {
                n = m[l] = {
                    _crj: false,
                    _crl: 0
                }
            }
        }
        return n
    };
    b._crn = function(k, l) {
        if (e && console.time) {
            console.time(d(k, l))
        }
        var m = g(k, l);
        if (m._crj) {
            throw new Error("2317 " + k + "2317 ")
        }
        m._crj = true;
        m._crl = a()
    };
    b._crp = function(k, m) {
        if (e && console.timeEnd) {
            console.timeEnd(d(k, m))
        }
        var n = i[k];
        if (n === undefined) {
            throw new Error("2318 " + k + "2318 ")
        }
        var o = n;
        if (m !== undefined) {
            o = n[m]
        }
        if (o === undefined) {
            throw new Error("2319 " + k + "2319 " + m + "2319 ")
        }
        if (!o._crj) {
            throw new Error("2320 " + k + ((m !== undefined) ? ("2320 " + m) : "2320 ") + "2320 ")
        }
        o._crj = false;
        var p = a() - o._crl;
        n._crf += p;
        n._crh++;
        if (c) {
            var l = 10 * Math.floor(p / 10);
            if (n._crm[l] === undefined) {
                n._crm[l] = 1
            } else {
                n._crm[l]++
            }
        }
        if (m !== undefined) {
            delete n[m]
        }
    };
    b._crq = function(k, l) {
        var m = i[k];
        if (m === undefined) {
            return false
        }
        var n = m;
        if (l !== undefined) {
            n = m[l]
        }
        if (n === undefined) {
            return false
        }
        return n._crj
    };
    b._crs = function(k, n) {
        var m = g(k);
        m._crh++;
        m._crf += n;
        if (c) {
            var l = 10 * Math.floor(n / 10);
            if (m._crm[l] === undefined) {
                m._crm[l] = 1
            } else {
                m._crm[l]++
            }
        }
    };
    b._crt = function() {
        if (false) {}
    };
    return b
}();
var elo = function() {
    var g = {};
    var q = false;
    var a = g._dcf = {
        _dch: Float32Array
    };
    var o = g._dcj = {
        _dch: Int32Array
    };
    var m = g._dcl = {
        _dch: Uint32Array
    };
    g._dcm = -3.4 * Math.pow(10, 38);
    g._dco = 3.4 * Math.pow(10, 38);
    g._dcq = 2147483648 - 1;
    g._dcr = -2147483648;
    g._dcs = 4294967296 - 1;
    g._dcu = 0;
    g._dcw = 1;
    g.BOOLEAN_FALSE;
    var d = 16777216;
    var j = new Uint32Array([32, 64, 128, 256, 1024, 4096, 16384, 65536, 1048576, d]);
    var e = 524288;
    var l;
    var c = g._dcy = undefined;
    var k = 0;
    var b = g._dcz = undefined;
    var p = g._dda = undefined;
    var n = g._ddb = undefined;
    var h = new Array(j.length);
    g._bg = function(t) {
        l = t;
        c = g._dcy = new ArrayBuffer(l);
        b = g._dcz = new Float32Array(c);
        p = g._dda = new Int32Array(c);
        n = g._ddb = new Uint32Array(c);
        for (var r = 0; r < j.length; r++) {
            var u = e / j[r];
            if (u < 1) {
                u = 1
            }
            h[r] = {
                _ddd: j[r],
                _dde: new Array(u),
                _ddg: 0
            }
        }
        var s = new Float32Array(2);
        s[0] = g._dcm;
        s[1] = g._dco;
        g._dcm = s[0];
        g._dco = s[1]
    };
    g._ddh = function(t) {
        if (t > d) {
            throw new Error("2340 " + t)
        }
        if (t + k > l) {
            throw new Error("2341 ")
        }
        var r = 0;
        var x = j[r];
        while (x < t) {
            x = j[++r]
        }
        var s = h[r];
        if (s._ddg === s._dde.length) {
            var v = e / x;
            if (v < 1) {
                v = 1
            }
            s._dde = s._dde.concat(new Array(v));
            if (false) {}
        }
        var u = s._dde[s._ddg++] = {
            _ddj: x,
            _ddl: k / 4,
            _ji: true
        };
        if (false) {}
        k += x;
        return u
    };
    var i = g._ddh;
    g._ddr = function(r) {
        r._ji = false
    };
    g._dds = function(v, t) {
        var u = 0;
        if (t !== undefined) {
            u += 4;
            u += t._dee * 8
        }
        var r = u;
        for (var s in v) {
            var x = v[s];
            x._ddl = r / 4;
            if (x._dei === undefined) {
                r += 4
            } else {
                r += x._dei * 4
            }
            if (x.type === a) {
                x._dcy = b
            } else {
                if (x.type === o) {
                    x._dcy = p
                } else {
                    if (x.type === m) {
                        x._dcy = n
                    }
                }
            }
        }
        return r
    };
    g._ddu = function(t, v) {
        for (var s in t) {
            var u = t[s];
            if (u._dei === undefined) {
                u._dcy[v._ddl + u._ddl] = u._ddw
            } else {
                for (var r = 0; r < u._dei; r++) {
                    u._dcy[v._ddl + u._ddl + r] = u._ddw
                }
            }
        }
    };
    g._ddy = function(t) {
        var s = 0;
        for (var r in t) {
            var u = t[r];
            u._dea = s++;
            u._deb = 1 + (2 * u._dea);
            u._ded = 1 + (2 * u._dea) + 1;
            if (u.type === a) {
                u._dcy = b
            } else {
                if (u.type === o) {
                    u._dcy = p
                } else {
                    if (u.type === m) {
                        u._dcy = n
                    }
                }
            }
        }
        t._dee = s
    };
    g._deg = function(s, v) {
        var u = s;
        for (var t in v) {
            var x = v[t];
            if (x._dei !== undefined) {
                x._ddl = u / 4;
                u += x._dei * 4
            }
        }
        var y = i(u);
        n[y._ddl] = v._dee;
        var r = 0;
        for (var t in v) {
            var x = v[t];
            if (x._dei !== undefined) {
                n[y._ddl + 1 + r * 2] = x._ddl;
                n[y._ddl + 1 + r * 2 + 1] = x._dei;
                r++
            }
        }
        return y
    };
    g._dej = function(t, v) {
        for (var s in t) {
            var u = t[s];
            if (u._dei !== undefined) {
                for (var r = 0; r < u._dei; r++) {
                    u._dcy[v._ddl + u._ddl + r] = u._ddw
                }
            }
        }
    };
    return g
}();
var exv = function() {
    var a;
    if (self !== undefined) {
        a = self
    } else {
        a = window
    }
    a._qjz = function(b, d) {
        var c = function() {};
        c.prototype = b.prototype;
        d.prototype = new c();
        d.prototype._dch = d
    };
    a._qkb = function(c, b) {
        b.apply(c, Array.prototype.slice.call(arguments, 2))
    };
    a._gkf = null;
    a._qkd = false;
    a._qke = true;
    a._qkf = true;
    a._qkg = true;
    a._qkh = true;
    if (self.location.href.indexOf("client") === -1 && self.location.href.indexOf("bestiary") === -1 && self.location.href.indexOf("worldviewer") === -1) {
        a._qkf = false;
        a._qkg = false;
        a._qkh = false
    }
    if (true) {
        a._qkj = elo;
        a._ktx = fjp
    } else {}
    if (false) {}
    if (false) {}
    a._qkm = function(d, b) {
        var e = d[b];
        if (e) {
            return e
        }
        var c = b.charAt(0).toUpperCase() + b.slice(1);
        e = d["webkit" + c];
        if (e) {
            return e
        }
        e = d["moz" + c];
        if (e) {
            return e
        }
        e = d["ms" + c];
        if (e) {
            return e
        }
        return undefined
    };
    String.prototype._qkn = function(b) {
        return this.indexOf(b, this.length - b.length) !== -1
    };
    String.prototype._qko = function(b) {
        return this.indexOf(b) === 0
    };
    if (!ArrayBuffer.prototype.slice) {
        ArrayBuffer.prototype.slice = function(d, c) {
            if (d === void 0) {
                d = 0
            }
            if (c === void 0) {
                c = this.byteLength
            }
            d = Math.floor(d);
            c = Math.floor(c);
            if (d < 0) {
                d += this.byteLength
            }
            if (c < 0) {
                c += this.byteLength
            }
            d = Math.min(Math.max(0, d), this.byteLength);
            c = Math.min(Math.max(0, c), this.byteLength);
            if (c - d <= 0) {
                return new ArrayBuffer(0)
            }
            var b = new ArrayBuffer(c - d);
            var g = new Uint8Array(b);
            var e = new Uint8Array(this, d, c - d);
            g.set(e);
            return b
        }
    }
}();
var ewd = function() {
    var e = {};
    var g = function(o) {
        var n = new Float32Array(9);
        if (o) {
            n[0] = o[0];
            n[1] = o[1];
            n[2] = o[2];
            n[3] = o[3];
            n[4] = o[4];
            n[5] = o[5];
            n[6] = o[6];
            n[7] = o[7];
            n[8] = o[8]
        }
        return n
    };
    e.create = g;
    var l = function(o, n) {
        n[0] = o[0];
        n[1] = o[1];
        n[2] = o[2];
        n[3] = o[3];
        n[4] = o[4];
        n[5] = o[5];
        n[6] = o[6];
        n[7] = o[7];
        n[8] = o[8];
        return n
    };
    e.set = l;
    var b = function(n) {
        if (!n) {
            n = g()
        }
        n[0] = 1;
        n[1] = 0;
        n[2] = 0;
        n[3] = 0;
        n[4] = 1;
        n[5] = 0;
        n[6] = 0;
        n[7] = 0;
        n[8] = 1;
        return n
    };
    e._eii = b;
    var h = function(p, o) {
        if (!o || p === o) {
            var r = p[1],
                q = p[2],
                n = p[5];
            p[1] = p[3];
            p[2] = p[6];
            p[3] = r;
            p[5] = p[7];
            p[6] = q;
            p[7] = n;
            return p
        }
        o[0] = p[0];
        o[1] = p[3];
        o[2] = p[6];
        o[3] = p[1];
        o[4] = p[4];
        o[5] = p[7];
        o[6] = p[2];
        o[7] = p[5];
        o[8] = p[8];
        return o
    };
    e._goh = h;
    var k = function(s, r, q, p, o, z, v) {
        if (!v) {
            v = g()
        }
        var n = o * q - z * r;
        var y = z * s - p * q;
        var x = p * r - o * s;
        var u = (1 / Math.sqrt(n * n + y * y + x * x));
        var t = (1 / Math.sqrt(s * s + r * r + q * q));
        v[0] = n * u;
        v[3] = y * u;
        v[6] = x * u;
        v[2] = s * t;
        v[4] = r * t;
        v[8] = q * t;
        v[1] = v[4] * v[3] - v[8] * v[3];
        v[4] = v[8] * v[0] - v[2] * v[6];
        v[7] = v[2] * v[3] - v[5] * v[0];
        return v
    };
    e._qgy = k;
    var i = function(o, n) {
        if (!n) {
            n = new Float32Array(16)
        }
        n[15] = 1;
        n[14] = 0;
        n[13] = 0;
        n[12] = 0;
        n[11] = 0;
        n[10] = o[8];
        n[9] = o[7];
        n[8] = o[6];
        n[7] = 0;
        n[6] = o[5];
        n[5] = o[4];
        n[4] = o[3];
        n[3] = 0;
        n[2] = o[2];
        n[1] = o[1];
        n[0] = o[0];
        return n
    };
    e._gnn = i;
    var j = function(o, q) {
        if (o === undefined) {
            o = new Float32Array(4)
        }
        var p = 1 + q[0] + q[4] + q[8];
        if (p > 1e-8) {
            var n = Math.sqrt(p) * 2;
            o[0] = (q[7] - q[5]) / n;
            o[1] = (q[2] - q[6]) / n;
            o[2] = (q[3] - q[1]) / n;
            o[3] = 0.25 * n
        } else {
            if (q[0] > q[4] && q[0] > q[8]) {
                var n = Math.sqrt(1 + f[0] - f[4] - f[8]) * 2;
                o[1] = 0.25 * n;
                o[1] = (q[3] + q[1]) / n;
                o[2] = (q[2] + q[6]) / n;
                o[3] = (q[7] - q[5]) / n
            } else {
                if (q[4] > q[8]) {
                    var n = Math.sqrt(1 + q[4] - q[0] - q[8]) * 2;
                    o[0] = (q[3] + q[1]) / n;
                    o[1] = 0.25 * n;
                    o[2] = (q[7] + q[5]) / n;
                    o[3] = (q[2] - q[6]) / n
                } else {
                    var n = Math.sqrt(1 + q[8] - q[0] - q[4]) * 2;
                    o[0] = (q[2] + q[6]) / n;
                    o[1] = (q[7] + q[5]) / n;
                    o[2] = 0.25 * n;
                    o[3] = (q[3] - q[1]) / n
                }
            }
        }
        return o
    };
    e._qgz = j;
    var a = function(n) {
        return "[" + n[0] + ", " + n[1] + ", " + n[2] + ", " + n[3] + ", " + n[4] + ", " + n[5] + ", " + n[6] + ", " + n[7] + ", " + n[8] + "]"
    };
    e._eja = a;
    var d = function(B, z) {
        var r = B[0],
            q = B[1],
            p = B[2],
            D = B[3],
            C = B[4],
            A = B[5],
            x = B[6],
            v = B[7],
            u = B[8],
            t = u * C - A * v,
            o = -u * D + A * x,
            y = v * D - C * x,
            s = r * t + q * o + p * y,
            n;
        if (!s) {
            return null
        }
        n = 1 / s;
        if (!z) {
            z = mat3.create()
        }
        z[0] = t * n;
        z[1] = (-u * q + p * v) * n;
        z[2] = (A * q - p * C) * n;
        z[3] = o * n;
        z[4] = (u * r - p * x) * n;
        z[5] = (-A * r + p * D) * n;
        z[6] = y * n;
        z[7] = (-v * r + q * x) * n;
        z[8] = (C * r - q * D) * n;
        return z
    };
    e.inverse = d;
    var m = function(o, r, q) {
        if (!q) {
            q = r
        }
        var n = r[0],
            s = r[1],
            p = r[2];
        q[0] = n * o[0] + s * o[3] + p * o[6];
        q[1] = n * o[1] + s * o[4] + p * o[7];
        q[2] = n * o[2] + s * o[5] + p * o[8];
        return q
    };
    e._gnd = m;
    var c = function(n) {
        return n[0] * n[4] * n[8] + n[1] * n[5] * n[6] + n[2] * n[3] * n[7] - n[2] * n[4] * n[6] - n[1] * n[3] * n[8] - n[0] * n[5] * n[7]
    };
    e._gok = c;
    return e
}();
var fqv = function() {
    var t = {};
    var n = function(y) {
        var x = new Float32Array(3);
        if (y) {
            x[0] = y[0];
            x[1] = y[1];
            x[2] = y[2]
        } else {
            x[0] = x[1] = x[2] = 0
        }
        return x
    };
    t.create = n;
    var r = function(y) {
        var x = new Float32Array(3);
        x[0] = y._lpt();
        x[1] = y._lpt();
        x[2] = y._lpt();
        return x
    };
    t._eih = r;
    var q = function(x) {
        x[0] = 0;
        x[1] = 0;
        x[2] = 0;
        return x
    };
    t._eii = q;
    var p = function(y, x) {
        x[0] = y[0];
        x[1] = y[1];
        x[2] = y[2];
        return x
    };
    t.set = p;
    var s = function(z, y, x) {
        if (!x || z === x) {
            z[0] += y[0];
            z[1] += y[1];
            z[2] += y[2];
            return z
        }
        x[0] = z[0] + y[0];
        x[1] = z[1] + y[1];
        x[2] = z[2] + y[2];
        return x
    };
    t.add = s;
    var o = function(z, y, x) {
        if (!x || z === x) {
            z[0] -= y[0];
            z[1] -= y[1];
            z[2] -= y[2];
            return z
        }
        x[0] = z[0] - y[0];
        x[1] = z[1] - y[1];
        x[2] = z[2] - y[2];
        return x
    };
    t._eij = o;
    var m = function(z, y, x) {
        if (!x || z === x) {
            z[0] *= y[0];
            z[1] *= y[1];
            z[2] *= y[2];
            return z
        }
        x[0] = z[0] * y[0];
        x[1] = z[1] * y[1];
        x[2] = z[2] * y[2];
        return x
    };
    t._eil = m;
    var l = function(y, x) {
        if (!x) {
            x = y
        }
        x[0] = -y[0];
        x[1] = -y[1];
        x[2] = -y[2];
        return x
    };
    t._eim = l;
    var v = function(y, z, x) {
        if (!x || y === x) {
            y[0] *= z;
            y[1] *= z;
            y[2] *= z;
            return y
        }
        x[0] = y[0] * z;
        x[1] = y[1] * z;
        x[2] = y[2] * z;
        return x
    };
    t.scale = v;
    var u = function(D, B) {
        if (!B) {
            B = D
        }
        var z = D[0],
            E = D[1],
            A = D[2],
            C = Math.sqrt(z * z + E * E + A * A);
        if (!C) {
            B[0] = 0;
            B[1] = 0;
            B[2] = 0;
            return B
        } else {
            if (C === 1) {
                B[0] = z;
                B[1] = E;
                B[2] = A;
                return B
            }
        }
        C = 1 / C;
        B[0] = z * C;
        B[1] = E * C;
        B[2] = A * C;
        return B
    };
    t.normalize = u;
    var k = function(D, E, H) {
        if (!H) {
            H = D
        }
        var G = D[0],
            F = D[1],
            z = D[2],
            B = E[0],
            C = E[1],
            A = E[2];
        H[0] = F * A - z * C;
        H[1] = z * B - G * A;
        H[2] = G * C - F * B;
        return H
    };
    t._eip = k;
    var d = function(B) {
        var z = B[0],
            C = B[1],
            A = B[2];
        return Math.sqrt(z * z + C * C + A * A)
    };
    t.length = d;
    var j = function(B) {
        var z = B[0],
            C = B[1],
            A = B[2];
        return (z * z + C * C + A * A)
    };
    t._eiq = j;
    var i = function(y, x) {
        return y[0] * x[0] + y[1] * x[1] + y[2] * x[2]
    };
    t._eir = i;
    var h = function(E, D, B) {
        if (!B) {
            B = E
        }
        var z = E[0] - D[0],
            F = E[1] - D[1],
            A = E[2] - D[2],
            C = Math.sqrt(z * z + F * F + A * A);
        if (!C) {
            B[0] = 0;
            B[1] = 0;
            B[2] = 0;
            return B
        }
        C = 1 / C;
        B[0] = z * C;
        B[1] = F * C;
        B[2] = A * C;
        return B
    };
    t._eis = h;
    var g = function(z, y, A, x) {
        if (!x) {
            x = z
        }
        x[0] = z[0] + A * (y[0] - z[0]);
        x[1] = z[1] + A * (y[1] - z[1]);
        x[2] = z[2] + A * (y[2] - z[2]);
        return x
    };
    t._eiu = g;
    var e = function(C, B) {
        var z = B[0] - C[0],
            D = B[1] - C[1],
            A = B[2] - C[2];
        return Math.sqrt(z * z + D * D + A * A)
    };
    t._eiw = e;
    var c = function(D, B, C, y, A) {
        if (!A) {
            A = D
        }
        var x = mat4.create();
        var z = new Float32Array(4);
        z[0] = (D[0] - y[0]) * 2 / y[2] - 1;
        z[1] = (D[1] - y[1]) * 2 / y[3] - 1;
        z[2] = 2 * D[2] - 1;
        z[3] = 1;
        mat4._eil(C, B, x);
        if (!mat4.inverse(x)) {
            return null
        }
        mat4._qyr(x, z);
        if (z[3] === 0) {
            return null
        }
        A[0] = z[0] / z[3];
        A[1] = z[1] / z[3];
        A[2] = z[2] / z[3];
        return A
    };
    t._eiy = c;
    var b = function(x) {
        return "[" + x[0] + ", " + x[1] + ", " + x[2] + "]"
    };
    t._eja = b;
    var a = function(z, y, x) {
        if (!x || z === x) {
            z[0] /= y[0];
            z[1] /= y[1];
            z[2] /= y[2];
            return z
        }
        x[0] = z[0] / y[0];
        x[1] = z[1] / y[1];
        x[2] = z[2] / y[2];
        return x
    };
    t._ejb = a;
    return t
}();
var evs = function() {
    var E = {};
    var k = function(N) {
        var M = new Float32Array(16);
        if (N) {
            M[0] = N[0];
            M[1] = N[1];
            M[2] = N[2];
            M[3] = N[3];
            M[4] = N[4];
            M[5] = N[5];
            M[6] = N[6];
            M[7] = N[7];
            M[8] = N[8];
            M[9] = N[9];
            M[10] = N[10];
            M[11] = N[11];
            M[12] = N[12];
            M[13] = N[13];
            M[14] = N[14];
            M[15] = N[15]
        }
        return M
    };
    E.create = k;
    var z = function(N, M) {
        M[0] = N[0];
        M[1] = N[1];
        M[2] = N[2];
        M[3] = N[3];
        M[4] = N[4];
        M[5] = N[5];
        M[6] = N[6];
        M[7] = N[7];
        M[8] = N[8];
        M[9] = N[9];
        M[10] = N[10];
        M[11] = N[11];
        M[12] = N[12];
        M[13] = N[13];
        M[14] = N[14];
        M[15] = N[15];
        return M
    };
    E.set = z;
    var I = function(M) {
        if (!M) {
            M = k()
        }
        M[0] = 1;
        M[1] = 0;
        M[2] = 0;
        M[3] = 0;
        M[4] = 0;
        M[5] = 1;
        M[6] = 0;
        M[7] = 0;
        M[8] = 0;
        M[9] = 0;
        M[10] = 1;
        M[11] = 0;
        M[12] = 0;
        M[13] = 0;
        M[14] = 0;
        M[15] = 1;
        return M
    };
    E._eii = I;
    var D = function(P, O) {
        if (!O || P === O) {
            var T = P[1],
                R = P[2],
                Q = P[3],
                M = P[6],
                S = P[7],
                N = P[11];
            P[1] = P[4];
            P[2] = P[8];
            P[3] = P[12];
            P[4] = T;
            P[6] = P[9];
            P[7] = P[13];
            P[8] = R;
            P[9] = M;
            P[11] = P[14];
            P[12] = Q;
            P[13] = S;
            P[14] = N;
            return P
        }
        O[0] = P[0];
        O[1] = P[4];
        O[2] = P[8];
        O[3] = P[12];
        O[4] = P[1];
        O[5] = P[5];
        O[6] = P[9];
        O[7] = P[13];
        O[8] = P[2];
        O[9] = P[6];
        O[10] = P[10];
        O[11] = P[14];
        O[12] = P[3];
        O[13] = P[7];
        O[14] = P[11];
        O[15] = P[15];
        return O
    };
    E._goh = D;
    var C = function(aa) {
        var T = aa[0],
            S = aa[1],
            Q = aa[2],
            O = aa[3],
            ac = aa[4],
            ab = aa[5],
            Z = aa[6],
            Y = aa[7],
            X = aa[8],
            W = aa[9],
            V = aa[10],
            U = aa[11],
            R = aa[12],
            P = aa[13],
            N = aa[14],
            M = aa[15];
        return (R * W * Z * O - X * P * Z * O - R * ab * V * O + ac * P * V * O + X * ab * N * O - ac * W * N * O - R * W * Q * Y + X * P * Q * Y + R * S * V * Y - T * P * V * Y - X * S * N * Y + T * W * N * Y + R * ab * Q * U - ac * P * Q * U - R * S * Z * U + T * P * Z * U + ac * S * N * U - T * ab * N * U - X * ab * Q * M + ac * W * Q * M + X * S * Z * M - T * W * Z * M - ac * S * V * M + T * ab * V * M)
    };
    E._gok = C;
    var H = ewd.create();
    var v = function(N, M) {
        if (!M) {
            M = fqv.create()
        }
        E._gnl(N, H);
        ewd._goh(H);
        M[0] = N[12];
        M[1] = N[13];
        M[2] = N[14];
        fqv.scale(M, -1);
        ewd._gnd(H, M);
        return M
    };
    E._qyd = v;
    var x = function(ah, W) {
        if (!W) {
            W = ah
        }
        var ap = ah[0],
            am = ah[1],
            al = ah[2],
            aj = ah[3],
            P = ah[4],
            O = ah[5],
            N = ah[6],
            M = ah[7],
            ae = ah[8],
            ad = ah[9],
            ac = ah[10],
            ab = ah[11],
            ar = ah[12],
            aq = ah[13],
            an = ah[14],
            ak = ah[15],
            aa = ap * O - am * P,
            Z = ap * N - al * P,
            Y = ap * M - aj * P,
            X = am * N - al * O,
            V = am * M - aj * O,
            U = al * M - aj * N,
            T = ae * aq - ad * ar,
            S = ae * an - ac * ar,
            R = ae * ak - ab * ar,
            Q = ad * an - ac * aq,
            ai = ad * ak - ab * aq,
            ag = ac * ak - ab * an,
            ao = (aa * ag - Z * ai + Y * Q + X * R - V * S + U * T),
            af;
        if (!ao) {
            return null
        }
        af = 1 / ao;
        W[0] = (O * ag - N * ai + M * Q) * af;
        W[1] = (-am * ag + al * ai - aj * Q) * af;
        W[2] = (aq * U - an * V + ak * X) * af;
        W[3] = (-ad * U + ac * V - ab * X) * af;
        W[4] = (-P * ag + N * R - M * S) * af;
        W[5] = (ap * ag - al * R + aj * S) * af;
        W[6] = (-ar * U + an * Y - ak * Z) * af;
        W[7] = (ae * U - ac * Y + ab * Z) * af;
        W[8] = (P * ai - O * R + M * T) * af;
        W[9] = (-ap * ai + am * R - aj * T) * af;
        W[10] = (ar * V - aq * Y + ak * aa) * af;
        W[11] = (-ae * V + ad * Y - ab * aa) * af;
        W[12] = (-P * Q + O * S - N * T) * af;
        W[13] = (ap * Q - am * S + al * T) * af;
        W[14] = (-ar * X + aq * Z - an * aa) * af;
        W[15] = (ae * X - ad * Z + ac * aa) * af;
        return W
    };
    E.inverse = x;
    var u = function(N, M) {
        if (!M) {
            M = k()
        }
        M[0] = N[0];
        M[1] = N[1];
        M[2] = N[2];
        M[3] = N[3];
        M[4] = N[4];
        M[5] = N[5];
        M[6] = N[6];
        M[7] = N[7];
        M[8] = N[8];
        M[9] = N[9];
        M[10] = N[10];
        M[11] = N[11];
        M[12] = 0;
        M[13] = 0;
        M[14] = 0;
        M[15] = 1;
        return M
    };
    E._qyg = u;
    var b = function(N, M) {
        if (!M) {
            M = ewd.create()
        }
        M[0] = N[0];
        M[1] = N[1];
        M[2] = N[2];
        M[3] = N[4];
        M[4] = N[5];
        M[5] = N[6];
        M[6] = N[8];
        M[7] = N[9];
        M[8] = N[10];
        return M
    };
    E._gnl = b;
    var t = function(Z, X) {
        var Q = Z[0],
            P = Z[1],
            O = Z[2],
            ab = Z[4],
            aa = Z[5],
            Y = Z[6],
            V = Z[8],
            U = Z[9],
            T = Z[10],
            S = T * aa - Y * U,
            N = -T * ab + Y * V,
            W = U * ab - aa * V,
            R = Q * S + P * N + O * W,
            M;
        if (!R) {
            return null
        }
        M = 1 / R;
        if (!X) {
            X = ewd.create()
        }
        X[0] = S * M;
        X[1] = (-T * P + O * U) * M;
        X[2] = (Y * P - O * aa) * M;
        X[3] = N * M;
        X[4] = (T * Q - O * V) * M;
        X[5] = (-Y * Q + O * ab) * M;
        X[6] = W * M;
        X[7] = (-U * Q + P * V) * M;
        X[8] = (aa * Q - P * ab) * M;
        return X
    };
    E._qyh = t;
    var F = function(al, U, V) {
        if (!V) {
            V = al
        }
        var at = al[0],
            ar = al[1],
            ap = al[2],
            an = al[3],
            T = al[4],
            S = al[5],
            R = al[6],
            Q = al[7],
            ah = al[8],
            ag = al[9],
            af = al[10],
            ae = al[11],
            av = al[12],
            au = al[13],
            aq = al[14],
            ao = al[15],
            ac = U[0],
            aa = U[1],
            Y = U[2],
            W = U[3],
            am = U[4],
            ak = U[5],
            aj = U[6],
            ai = U[7],
            P = U[8],
            O = U[9],
            N = U[10],
            M = U[11],
            ad = U[12],
            ab = U[13],
            Z = U[14],
            X = U[15];
        V[0] = ac * at + aa * T + Y * ah + W * av;
        V[1] = ac * ar + aa * S + Y * ag + W * au;
        V[2] = ac * ap + aa * R + Y * af + W * aq;
        V[3] = ac * an + aa * Q + Y * ae + W * ao;
        V[4] = am * at + ak * T + aj * ah + ai * av;
        V[5] = am * ar + ak * S + aj * ag + ai * au;
        V[6] = am * ap + ak * R + aj * af + ai * aq;
        V[7] = am * an + ak * Q + aj * ae + ai * ao;
        V[8] = P * at + O * T + N * ah + M * av;
        V[9] = P * ar + O * S + N * ag + M * au;
        V[10] = P * ap + O * R + N * af + M * aq;
        V[11] = P * an + O * Q + N * ae + M * ao;
        V[12] = ad * at + ab * T + Z * ah + X * av;
        V[13] = ad * ar + ab * S + Z * ag + X * au;
        V[14] = ad * ap + ab * R + Z * af + X * aq;
        V[15] = ad * an + ab * Q + Z * ae + X * ao;
        return V
    };
    E._eil = F;
    var s = function(ad, O, am, ac) {
        if (!am) {
            am = ad
        }
        var aj = ad[0],
            ah = ad[1],
            ag = ad[2],
            af = ad[3],
            U = ad[4],
            T = ad[5],
            S = ad[6],
            R = ad[7],
            aw = ad[8],
            av = ad[9],
            au = ad[10],
            at = ad[11],
            an = ad[12],
            al = ad[13],
            ak = ad[14],
            ai = ad[15],
            Z = O[ac + 0],
            Y = O[ac + 1],
            W = O[ac + 2],
            V = O[ac + 3],
            Q = O[ac + 4],
            P = O[ac + 5],
            N = O[ac + 6],
            M = O[ac + 7],
            ar = O[ac + 8],
            aq = O[ac + 9],
            ap = O[ac + 10],
            ao = O[ac + 11],
            ae = O[ac + 12],
            ab = O[ac + 13],
            aa = O[ac + 14],
            X = O[ac + 15];
        am[ac + 0] = Z * aj + Y * U + W * aw + V * an;
        am[ac + 1] = Z * ah + Y * T + W * av + V * al;
        am[ac + 2] = Z * ag + Y * S + W * au + V * ak;
        am[ac + 3] = Z * af + Y * R + W * at + V * ai;
        am[ac + 4] = Q * aj + P * U + N * aw + M * an;
        am[ac + 5] = Q * ah + P * T + N * av + M * al;
        am[ac + 6] = Q * ag + P * S + N * au + M * ak;
        am[ac + 7] = Q * af + P * R + N * at + M * ai;
        am[ac + 8] = ar * aj + aq * U + ap * aw + ao * an;
        am[ac + 9] = ar * ah + aq * T + ap * av + ao * al;
        am[ac + 10] = ar * ag + aq * S + ap * au + ao * ak;
        am[ac + 11] = ar * af + aq * R + ap * at + ao * ai;
        am[ac + 12] = ae * aj + ab * U + aa * aw + X * an;
        am[ac + 13] = ae * ah + ab * T + aa * av + X * al;
        am[ac + 14] = ae * ag + ab * S + aa * au + X * ak;
        am[ac + 15] = ae * af + ab * R + aa * at + X * ai;
        return am
    };
    E._qyj = s;
    var r = function(ad, O, am, ac) {
        if (!am) {
            am = ad
        }
        var aj = ad[0],
            ah = ad[1],
            ag = ad[2],
            af = ad[3],
            U = ad[4],
            T = ad[5],
            S = ad[6],
            R = ad[7],
            aw = ad[8],
            av = ad[9],
            au = ad[10],
            at = ad[11],
            an = ad[12],
            al = ad[13],
            ak = ad[14],
            ai = ad[15],
            Z = O[ac + 0],
            Y = O[ac + 1],
            W = O[ac + 2],
            V = 0,
            Q = O[ac + 3],
            P = O[ac + 4],
            N = O[ac + 5],
            M = 0,
            ar = O[ac + 6],
            aq = O[ac + 7],
            ap = O[ac + 8],
            ao = 0,
            ae = O[ac + 9],
            ab = O[ac + 10],
            aa = O[ac + 11],
            X = 1;
        am[ac + 0] = Z * aj + Y * U + W * aw + V * an;
        am[ac + 1] = Z * ah + Y * T + W * av + V * al;
        am[ac + 2] = Z * ag + Y * S + W * au + V * ak;
        am[ac + 3] = Q * aj + P * U + N * aw + M * an;
        am[ac + 4] = Q * ah + P * T + N * av + M * al;
        am[ac + 5] = Q * ag + P * S + N * au + M * ak;
        am[ac + 6] = ar * aj + aq * U + ap * aw + ao * an;
        am[ac + 7] = ar * ah + aq * T + ap * av + ao * al;
        am[ac + 8] = ar * ag + aq * S + ap * au + ao * ak;
        am[ac + 9] = ae * aj + ab * U + aa * aw + X * an;
        am[ac + 10] = ae * ah + ab * T + aa * av + X * al;
        am[ac + 11] = ae * ag + ab * S + aa * au + X * ak;
        return am
    };
    E._qyk = r;
    var h = function(P, Q, O) {
        if (!O) {
            O = Q
        }
        var M = Q[0],
            R = Q[1],
            N = Q[2];
        O[0] = P[0] * M + P[4] * R + P[8] * N + P[12];
        O[1] = P[1] * M + P[5] * R + P[9] * N + P[13];
        O[2] = P[2] * M + P[6] * R + P[10] * N + P[14];
        return O
    };
    E._gnd = h;
    var q = function(P, Q, O) {
        if (!O) {
            O = Q
        }
        var M = Q[0],
            R = Q[1],
            N = Q[2];
        O[0] = P[0] * M + P[4] * R + P[8] * N;
        O[1] = P[1] * M + P[5] * R + P[9] * N;
        O[2] = P[2] * M + P[6] * R + P[10] * N;
        return O
    };
    E._qym = q;
    var p = function(P, Q, O) {
        if (!O) {
            O = Q
        }
        var M = Q[0],
            R = Q[1],
            N = Q[2];
        O[0] = P[0] * M + P[3] * R + P[6] * N + P[9];
        O[1] = P[1] * M + P[4] * R + P[7] * N + P[10];
        O[2] = P[2] * M + P[5] * R + P[8] * N + P[11];
        return O
    };
    E._qyn = p;
    var o = function(P, R, O, Q) {
        if (!O) {
            O = R
        }
        var M = R[0],
            S = R[1],
            N = R[2];
        O[0] = P[Q + 0] * M + P[Q + 4] * S + P[Q + 8] * N + P[Q + 12];
        O[1] = P[Q + 1] * M + P[Q + 5] * S + P[Q + 9] * N + P[Q + 13];
        O[2] = P[Q + 2] * M + P[Q + 6] * S + P[Q + 10] * N + P[Q + 14];
        return O
    };
    E._qyo = o;
    var n = function(P, R, O, Q) {
        if (!O) {
            O = R
        }
        var M = R[0],
            S = R[1],
            N = R[2];
        O[0] = P[Q + 0] * M + P[Q + 3] * S + P[Q + 6] * N + P[Q + 9];
        O[1] = P[Q + 1] * M + P[Q + 4] * S + P[Q + 7] * N + P[Q + 10];
        O[2] = P[Q + 2] * M + P[Q + 5] * S + P[Q + 8] * N + P[Q + 11];
        return O
    };
    E._qyq = n;
    var m = function(Q, R, P) {
        if (!P) {
            P = R
        }
        var M = R[0],
            S = R[1],
            O = R[2],
            N = R[3];
        P[0] = Q[0] * M + Q[4] * S + Q[8] * O + Q[12] * N;
        P[1] = Q[1] * M + Q[5] * S + Q[9] * O + Q[13] * N;
        P[2] = Q[2] * M + Q[6] * S + Q[10] * O + Q[14] * N;
        P[3] = Q[3] * M + Q[7] * S + Q[11] * O + Q[15] * N;
        return P
    };
    E._qyr = m;
    var e = function(Z, U, R) {
        var S = U[0],
            Q = U[1],
            T = U[2],
            ad, ac, ab, aa, P, O, N, M, Y, X, W, V;
        if (!R || Z === R) {
            Z[12] = Z[0] * S + Z[4] * Q + Z[8] * T + Z[12];
            Z[13] = Z[1] * S + Z[5] * Q + Z[9] * T + Z[13];
            Z[14] = Z[2] * S + Z[6] * Q + Z[10] * T + Z[14];
            Z[15] = Z[3] * S + Z[7] * Q + Z[11] * T + Z[15];
            return Z
        }
        ad = Z[0];
        ac = Z[1];
        ab = Z[2];
        aa = Z[3];
        P = Z[4];
        O = Z[5];
        N = Z[6];
        M = Z[7];
        Y = Z[8];
        X = Z[9];
        W = Z[10];
        V = Z[11];
        R[0] = ad;
        R[1] = ac;
        R[2] = ab;
        R[3] = aa;
        R[4] = P;
        R[5] = O;
        R[6] = N;
        R[7] = M;
        R[8] = Y;
        R[9] = X;
        R[10] = W;
        R[11] = V;
        R[12] = ad * S + P * Q + Y * T + Z[12];
        R[13] = ac * S + O * Q + X * T + Z[13];
        R[14] = ab * S + N * Q + W * T + Z[14];
        R[15] = aa * S + M * Q + V * T + Z[15];
        return R
    };
    E.translate = e;
    E._mek = function(N, M) {
        if (M === undefined) {
            M = new Float32Array(3)
        }
        M[0] = N[12];
        M[1] = N[13];
        M[2] = N[14];
        return M
    };
    var A = function(P, Q, O) {
        var M = Q[0],
            R = Q[1],
            N = Q[2];
        if (!O || P === O) {
            P[0] *= M;
            P[1] *= M;
            P[2] *= M;
            P[3] *= M;
            P[4] *= R;
            P[5] *= R;
            P[6] *= R;
            P[7] *= R;
            P[8] *= N;
            P[9] *= N;
            P[10] *= N;
            P[11] *= N;
            return P
        }
        O[0] = P[0] * M;
        O[1] = P[1] * M;
        O[2] = P[2] * M;
        O[3] = P[3] * M;
        O[4] = P[4] * R;
        O[5] = P[5] * R;
        O[6] = P[6] * R;
        O[7] = P[7] * R;
        O[8] = P[8] * N;
        O[9] = P[9] * N;
        O[10] = P[10] * N;
        O[11] = P[11] * N;
        O[12] = P[12];
        O[13] = P[13];
        O[14] = P[14];
        O[15] = P[15];
        return O
    };
    E.scale = A;
    var G = function(am, U, M, Z) {
        var aa = M[0],
            Y = M[1],
            ac = M[2],
            X = Math.sqrt(aa * aa + Y * Y + ac * ac),
            W, V, af, ar, aq, ap, ao, T, S, R, Q, aj, ai, ah, ag, ae, ad, ab, an, al, ak, P, O, N;
        if (!X) {
            return null
        }
        if (X !== 1) {
            X = 1 / X;
            aa *= X;
            Y *= X;
            ac *= X
        }
        W = Math.sin(U);
        V = Math.cos(U);
        af = 1 - V;
        ar = am[0];
        aq = am[1];
        ap = am[2];
        ao = am[3];
        T = am[4];
        S = am[5];
        R = am[6];
        Q = am[7];
        aj = am[8];
        ai = am[9];
        ah = am[10];
        ag = am[11];
        ae = aa * aa * af + V;
        ad = Y * aa * af + ac * W;
        ab = ac * aa * af - Y * W;
        an = aa * Y * af - ac * W;
        al = Y * Y * af + V;
        ak = ac * Y * af + aa * W;
        P = aa * ac * af + Y * W;
        O = Y * ac * af - aa * W;
        N = ac * ac * af + V;
        if (!Z) {
            Z = am
        } else {
            if (am !== Z) {
                Z[12] = am[12];
                Z[13] = am[13];
                Z[14] = am[14];
                Z[15] = am[15]
            }
        }
        Z[0] = ar * ae + T * ad + aj * ab;
        Z[1] = aq * ae + S * ad + ai * ab;
        Z[2] = ap * ae + R * ad + ah * ab;
        Z[3] = ao * ae + Q * ad + ag * ab;
        Z[4] = ar * an + T * al + aj * ak;
        Z[5] = aq * an + S * al + ai * ak;
        Z[6] = ap * an + R * al + ah * ak;
        Z[7] = ao * an + Q * al + ag * ak;
        Z[8] = ar * P + T * O + aj * N;
        Z[9] = aq * P + S * O + ai * N;
        Z[10] = ap * P + R * O + ah * N;
        Z[11] = ao * P + Q * O + ag * N;
        return Z
    };
    E.rotate = G;
    var l = function(V, O, S) {
        var W = Math.sin(O),
            T = Math.cos(O),
            Y = V[4],
            X = V[5],
            U = V[6],
            R = V[7],
            Q = V[8],
            P = V[9],
            N = V[10],
            M = V[11];
        if (!S) {
            S = V
        } else {
            if (V !== S) {
                S[0] = V[0];
                S[1] = V[1];
                S[2] = V[2];
                S[3] = V[3];
                S[12] = V[12];
                S[13] = V[13];
                S[14] = V[14];
                S[15] = V[15]
            }
        }
        S[4] = Y * T + Q * W;
        S[5] = X * T + P * W;
        S[6] = U * T + N * W;
        S[7] = R * T + M * W;
        S[8] = Y * -W + Q * T;
        S[9] = X * -W + P * T;
        S[10] = U * -W + N * T;
        S[11] = R * -W + M * T;
        return S
    };
    E._qyt = l;
    var j = function(X, S, V) {
        var Y = Math.sin(S),
            W = Math.cos(S),
            P = X[0],
            O = X[1],
            N = X[2],
            M = X[3],
            U = X[8],
            T = X[9],
            R = X[10],
            Q = X[11];
        if (!V) {
            V = X
        } else {
            if (X !== V) {
                V[4] = X[4];
                V[5] = X[5];
                V[6] = X[6];
                V[7] = X[7];
                V[12] = X[12];
                V[13] = X[13];
                V[14] = X[14];
                V[15] = X[15]
            }
        }
        V[0] = P * W + U * -Y;
        V[1] = O * W + T * -Y;
        V[2] = N * W + R * -Y;
        V[3] = M * W + Q * -Y;
        V[8] = P * Y + U * W;
        V[9] = O * Y + T * W;
        V[10] = N * Y + R * W;
        V[11] = M * Y + Q * W;
        return V
    };
    E._qyu = j;
    var i = function(W, Q, S) {
        var X = Math.sin(Q),
            U = Math.cos(Q),
            P = W[0],
            O = W[1],
            N = W[2],
            M = W[3],
            Y = W[4],
            V = W[5],
            T = W[6],
            R = W[7];
        if (!S) {
            S = W
        } else {
            if (W !== S) {
                S[8] = W[8];
                S[9] = W[9];
                S[10] = W[10];
                S[11] = W[11];
                S[12] = W[12];
                S[13] = W[13];
                S[14] = W[14];
                S[15] = W[15]
            }
        }
        S[0] = P * U + Y * X;
        S[1] = O * U + V * X;
        S[2] = N * U + T * X;
        S[3] = M * U + R * X;
        S[4] = P * -X + Y * U;
        S[5] = O * -X + V * U;
        S[6] = N * -X + T * U;
        S[7] = M * -X + R * U;
        return S
    };
    E._qyw = i;
    var g = function(M, T, S, U, R, O, V) {
        if (!V) {
            V = k()
        }
        var P = (T - M),
            N = (U - S),
            Q = (O - R);
        V[0] = (R * 2) / P;
        V[1] = 0;
        V[2] = 0;
        V[3] = 0;
        V[4] = 0;
        V[5] = (R * 2) / N;
        V[6] = 0;
        V[7] = 0;
        V[8] = (T + M) / P;
        V[9] = (U + S) / N;
        V[10] = -(O + R) / Q;
        V[11] = -1;
        V[12] = 0;
        V[13] = 0;
        V[14] = -(O * R * 2) / Q;
        V[15] = 0;
        return V
    };
    E._qza = g;
    var d = function(P, O, R, N, Q) {
        var S = R * Math.tan(P * Math.PI / 360),
            M = S * O;
        return g(-M, M, -S, S, R, N, Q)
    };
    E._qzc = d;
    var c = function(W, V, Q, N, O, M, R, P, U) {
        var T = R * Math.tan(O * Math.PI / 360);
        var S = T * M;
        var Y = -2 * W * S / Q;
        var X = -2 * V * T / N;
        return g(-S + Y, S + Y, -T + X, T + X, R, P, U)
    };
    E._qze = c;
    var a = function(M, T, S, U, R, O, V) {
        if (!V) {
            V = k()
        }
        var P = (T - M),
            N = (U - S),
            Q = (O - R);
        V[0] = 2 / P;
        V[1] = 0;
        V[2] = 0;
        V[3] = 0;
        V[4] = 0;
        V[5] = 2 / N;
        V[6] = 0;
        V[7] = 0;
        V[8] = 0;
        V[9] = 0;
        V[10] = -2 / Q;
        V[11] = 0;
        V[12] = -(M + T) / P;
        V[13] = -(U + S) / N;
        V[14] = -(O + R) / Q;
        V[15] = 1;
        return V
    };
    E._qzg = a;
    var y = function(ao, aq, at, V) {
        if (!V) {
            V = k()
        }
        var am, al, ap, M, ar, an, Z, X, W, U, ak = ao[0],
            aj = ao[1],
            ai = ao[2],
            Q = at[0],
            P = at[1],
            O = at[2],
            ah = aq[0],
            ag = aq[1],
            af = aq[2];
        if (ak === ah && aj === ag && ai === af) {
            return I(V)
        }
        var ae = ah - ak;
        var ad = ag - aj;
        var ac = af - ai;
        var N = Math.sqrt(ae * ae + ad * ad + ac * ac);
        ae /= N;
        ad /= N;
        ac /= N;
        var T = ac * P - ad * O;
        var S = ae * O - ac * Q;
        var R = ad * Q - ae * P;
        var N = Math.sqrt(T * T + S * S + R * R);
        T /= N;
        S /= N;
        R /= N;
        var ab = ad * R - ac * S;
        var aa = ac * T - ae * R;
        var Y = ae * S - ad * T;
        var N = Math.sqrt(ab * ab + aa * aa + Y * Y);
        ab /= N;
        aa /= N;
        Y /= N;
        V[0] = T;
        V[1] = S;
        V[2] = R;
        V[3] = 0;
        V[4] = ab;
        V[5] = aa;
        V[6] = Y;
        V[7] = 0;
        V[8] = ae;
        V[9] = ad;
        V[10] = ac;
        V[11] = 0;
        V[12] = ak;
        V[13] = aj;
        V[14] = ai;
        V[15] = 1;
        return V
    };
    E._qry = y;
    var L = function(N, M) {
        if (N === undefined) {
            N = ewd.create()
        }
        N[0] = M[0];
        N[1] = M[4];
        N[2] = M[8];
        N[3] = M[1];
        N[4] = M[5];
        N[5] = M[9];
        N[6] = M[2];
        N[7] = M[6];
        N[8] = M[10];
        return N
    };
    E._qzi = L;
    var K = function(M, Z, U) {
        if (!U) {
            U = k()
        }
        var V = M[0],
            T = M[1],
            Y = M[2],
            W = M[3],
            ad = V + V,
            ac = T + T,
            X = Y + Y,
            P = V * ad,
            O = V * ac,
            N = V * X,
            ab = T * ac,
            aa = T * X,
            ae = Y * X,
            Q = W * ad,
            R = W * ac,
            S = W * X;
        U[0] = 1 - (ab + ae);
        U[1] = O + S;
        U[2] = N - R;
        U[3] = 0;
        U[4] = O - S;
        U[5] = 1 - (P + ae);
        U[6] = aa + Q;
        U[7] = 0;
        U[8] = N + R;
        U[9] = aa - Q;
        U[10] = 1 - (P + ab);
        U[11] = 0;
        U[12] = Z[0];
        U[13] = Z[1];
        U[14] = Z[2];
        U[15] = 1;
        return U
    };
    E._qzk = K;
    var J = function(O, N, M) {
        if (!M) {
            M = k()
        }
        M[0] = -2 * O[0] * O[0] + 1;
        M[1] = -2 * O[1] * O[0];
        M[2] = -2 * O[2] * O[0];
        M[3] = 0;
        M[4] = -2 * O[0] * O[1];
        M[5] = -2 * O[1] * O[1] + 1;
        M[6] = -2 * O[2] * O[1];
        M[7] = 0;
        M[8] = -2 * O[0] * O[2];
        M[9] = -2 * O[1] * O[2];
        M[10] = -2 * O[2] * O[2] + 1;
        M[11] = 0;
        M[12] = -2 * O[0] * N;
        M[13] = -2 * O[1] * N;
        M[14] = -2 * O[2] * N;
        M[15] = 1;
        return M
    };
    E._qzn = J;
    var B = function(M) {
        return "[" + M[0] + ", " + M[1] + ", " + M[2] + ", " + M[3] + ", " + M[4] + ", " + M[5] + ", " + M[6] + ", " + M[7] + ", " + M[8] + ", " + M[9] + ", " + M[10] + ", " + M[11] + ", " + M[12] + ", " + M[13] + ", " + M[14] + ", " + M[15] + "]"
    };
    E._eja = B;
    E._qzo = function(S, R, P, U, Q, O, N, M, T) {
        if (!T) {
            T = k()
        }
        T[0] = (P * 2) / N;
        T[1] = 0;
        T[2] = 0;
        T[3] = 0;
        T[4] = 0;
        T[5] = (U * 2) / M;
        T[6] = 0;
        T[7] = 0;
        T[8] = -((S * 2 / N) - 1);
        T[9] = (R * 2 / M) - 1;
        T[10] = -(O + Q) / (O - Q);
        T[11] = -1;
        T[12] = 0;
        T[13] = 0;
        T[14] = (2 * O * Q) / (Q - O);
        T[15] = 0;
        return T
    };
    E._qzt = function(W, U, Q, Y, R, P, O, N, Z, X) {
        var M = -(W * Z) / Q;
        var T = (Z * (O - W)) / Q;
        var S = (-(U * Z) / Y);
        var V = ((Z * (N - U)) / Y);
        X = a(M, T, S, V, R, P, X);
        X[13] = -X[13];
        return X
    };
    return E
}();
var ese = function() {
    var a = function(d, c, e, b) {
        this._sqz = d;
        this._srb = c;
        this._srd = e;
        this._tu = b || 50;
        this._srf = new Array(this._tu);
        this._srh = 0
    };
    a.prototype.get = function() {
        if (this._srh > 0) {
            var b = this._srf[this._srh--];
            if (this._srd !== undefined) {
                this._srd.apply(b, arguments)
            }
            return b
        } else {
            var c = this._sqz.apply(undefined, arguments);
            return c
        }
    };
    a.prototype._ddr = function(b) {
        if (this._srf.length < this._tu) {
            if (this._srb !== undefined) {
                this._srb.call(b)
            }
            this._srf[this._srh++] = b
        }
    };
    return function(d, c, e, b) {
        return new a(d, c, e, b)
    }
}();
var eqd = function() {
    var i = new Float32Array(3);
    var r = new Float32Array(3);
    var p = new Float32Array(3);
    var n = new Float32Array(3);
    var l = new Float32Array(3);
    var j = new Float32Array(3);
    var g = new Float32Array(3);
    var h = new Float32Array(4);
    var q = new Float32Array(4);
    var b = new Float32Array(16);
    var e = {
        point: new Float32Array(3),
        _oso: 0
    };
    var c = {
        point: new Float32Array(3),
        _oso: 0
    };
    var k = Math.pow(2, 32) - 1;
    var d = function(s, t) {
        this._hjn = undefined;
        this._hjp = undefined;
        this._osq = undefined;
        this._bg(s, t)
    };
    d.prototype._bg = function(s, t) {
        if (s instanceof d) {
            this._hjn = fqv.create(s._hjq());
            this._hjp = fqv.create(s._hjr())
        } else {
            if (s instanceof Float32Array && t instanceof Float32Array) {
                this._hjn = s;
                this._hjp = t
            } else {
                if (s._hjn !== undefined && s._hjp !== undefined) {
                    this._hjn = s._hjn;
                    this._hjp = s._hjp
                } else {
                    if (s._daw !== undefined) {
                        this._hjn = fqv.create(s._daw._hjq());
                        this._hjp = fqv.create(s._daw._hjr())
                    } else {
                        if (s._hqh !== undefined) {
                            this._hjn = s._hqh._hjn;
                            this._hjp = s._hqh._hjp
                        } else {
                            if (s._dax !== undefined) {
                                this._hjn = new Float32Array(3);
                                this._hjn[0] = s._dax._lpt();
                                this._hjn[1] = s._dax._lpt();
                                this._hjn[2] = s._dax._lpt();
                                this._hjp = new Float32Array(3);
                                this._hjp[0] = s._dax._lpt();
                                this._hjp[1] = s._dax._lpt();
                                this._hjp[2] = s._dax._lpt()
                            } else {
                                if (s._mlv !== undefined) {
                                    this._hjn = new Float32Array(3);
                                    this._hjn[0] = s._mlv._ozt();
                                    this._hjn[1] = -s._mlv._ozt();
                                    this._hjn[2] = s._mlv._ozt();
                                    this._hjp = new Float32Array(3);
                                    this._hjp[0] = s._mlv._ozt();
                                    this._hjp[1] = -s._mlv._ozt();
                                    this._hjp[2] = s._mlv._ozt()
                                } else {
                                    throw new Error("2741 ")
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    d.prototype._oss = function() {
        this._osq = undefined
    };
    d.prototype._rv = function() {
        return this
    };
    d.prototype._dsf = function(s) {
        s._lpb(this._hjn[0]);
        s._lpb(this._hjn[1]);
        s._lpb(this._hjn[2]);
        s._lpb(this._hjp[0]);
        s._lpb(this._hjp[1]);
        s._lpb(this._hjp[2])
    };
    d.prototype._yh = function() {
        this._hjn[0] = +k;
        this._hjn[1] = +k;
        this._hjn[2] = +k;
        this._hjp[0] = -k;
        this._hjp[1] = -k;
        this._hjp[2] = -k;
        this._oss()
    };
    d.prototype._osu = function(s) {
        fqv.set(s._hjq(), this._hjn);
        fqv.set(s._hjr(), this._hjp);
        this._oss()
    };
    d.prototype.translate = function(s) {
        fqv.add(this._hjn, s);
        fqv.add(this._hjp, s);
        this._oss()
    };
    d.prototype.scale = function(s) {
        this._hjs(i);
        fqv._eij(this._hjn, i, r);
        fqv._eij(this._hjp, i, p);
        fqv.scale(r, s);
        fqv.scale(p, s);
        fqv.add(i, r, this._hjn);
        fqv.add(i, p, this._hjp);
        this._oss()
    };
    d.prototype.transform = function(y) {
        fqv.set(this._hjn, i);
        fqv.set(this._hjp, r);
        this._hjn[0] = this._hjp[0] = y[12];
        this._hjn[1] = this._hjp[1] = y[13];
        this._hjn[2] = this._hjp[2] = y[14];
        for (var x = 0; x < 3; x++) {
            for (var t = 0; t < 3; t++) {
                var v = y[x + (t * 4)];
                var u = v * i[t];
                var s = v * r[t];
                if (u < s) {
                    this._hjn[x] += u;
                    this._hjp[x] += s
                } else {
                    this._hjn[x] += s;
                    this._hjp[x] += u
                }
            }
        }
        this._oss()
    };
    d.prototype._osw = function(t) {
        for (var s = 0; s < 3; s++) {
            if (t[s] < this._hjn[s]) {
                this._hjn[s] = t[s]
            }
            if (t[s] > this._hjp[s]) {
                this._hjp[s] = t[s]
            }
        }
        this._oss()
    };
    d.prototype._osy = function(u) {
        var t = u._hjq();
        var v = u._hjr();
        for (var s = 0; s < 3; s++) {
            if (t[s] < this._hjn[s]) {
                this._hjn[s] = t[s]
            }
            if (v[s] > this._hjp[s]) {
                this._hjp[s] = v[s]
            }
        }
        this._oss()
    };
    d.prototype._hjq = function() {
        return this._hjn
    };
    d.prototype._hjr = function() {
        return this._hjp
    };
    d.prototype._ke = function() {
        return this._hjp[0] - this._hjn[0]
    };
    d.prototype._kg = function() {
        return this._hjp[1] - this._hjn[1]
    };
    d.prototype._bum = function() {
        return this._hjp[2] - this._hjn[2]
    };
    d.prototype._ota = function() {
        if (this._osq === undefined) {
            i[0] = Math.max(Math.abs(this._hjn[0]), Math.abs(this._hjp[0]));
            i[1] = Math.max(Math.abs(this._hjn[1]), Math.abs(this._hjp[1]));
            i[2] = Math.max(Math.abs(this._hjn[2]), Math.abs(this._hjp[2]));
            this._osq = fqv.length(i)
        }
        return this._osq
    };
    d.prototype._hjs = function(s) {
        if (s === undefined) {
            s = new Float32Array(3)
        }
        s[0] = this._hjn[0] + (this._hjp[0] - this._hjn[0]) / 2, s[1] = this._hjn[1] + (this._hjp[1] - this._hjn[1]) / 2, s[2] = this._hjn[2] + (this._hjp[2] - this._hjn[2]) / 2;
        return s
    };
    d.prototype._otb = function(s) {
        if (s[0] >= this._hjn[0] && s[0] <= this._hjp[0] && s[1] >= this._hjn[1] && s[1] <= this._hjp[1] && s[2] >= this._hjn[2] && s[2] <= this._hjp[2]) {
            return true
        } else {
            return false
        }
    };
    d.prototype._eup = function(t) {
        var u = t._hjq();
        var s = t._hjr();
        if (this._hjn[0] > s[0] || this._hjp[0] < u[0]) {
            return false
        }
        if (this._hjn[2] > s[2] || this._hjp[2] < u[2]) {
            return false
        }
        if (this._hjn[1] > s[1] || this._hjp[1] < u[1]) {
            return false
        }
        return true
    };
    d.prototype._otc = function(t) {
        var u = t._hjq();
        var s = t._hjr();
        if (this._hjn[0] < u[0] || this._hjp[0] > s[0]) {
            return false
        }
        if (this._hjn[1] < u[1] || this._hjp[1] > s[1]) {
            return false
        }
        if (this._hjn[2] < u[2] || this._hjp[2] > s[2]) {
            return false
        }
        return true
    };
    d.prototype._ela = function(u, s) {
        this._hjs(i);
        var x = r;
        fqv._eij(i, u, x);
        var v = p;
        fqv._eij(i, s, v);
        var y = n;
        fqv.add(x, v, y);
        fqv.scale(y, 0.5);
        var A = l;
        fqv._eij(x, y, A);
        var z = j;
        z[0] = Math.abs(A[0]);
        z[1] = Math.abs(A[1]);
        z[2] = Math.abs(A[2]);
        var t = g;
        fqv._eij(this._hjp, this._hjn, t);
        fqv.scale(t, 0.5);
        if (Math.abs(y[0]) > t[0] + z[0]) {
            return false
        }
        if (Math.abs(y[1]) > t[1] + z[1]) {
            return false
        }
        if (Math.abs(y[2]) > t[2] + z[2]) {
            return false
        }
        if (Math.abs(y[1] * A[2] - y[2] * A[1]) > t[1] * z[2] + t[2] * z[1]) {
            return false
        }
        if (Math.abs(y[0] * A[2] - y[2] * A[0]) > t[0] * z[2] + t[2] * z[0]) {
            return false
        }
        if (Math.abs(y[0] * A[1] - y[1] * A[0]) > t[0] * z[1] + t[1] * z[0]) {
            return false
        }
        return true
    };
    d.prototype._hjw = function(u, t) {
        var s = u[0];
        if (s < this._hjn[0]) {
            s = this._hjn[0]
        } else {
            if (s > this._hjp[0]) {
                s = this._hjp[0]
            }
        }
        t[0] = s;
        var z = u[1];
        if (z < this._hjn[1]) {
            z = this._hjn[1]
        } else {
            if (z > this._hjp[1]) {
                z = this._hjp[1]
            }
        }
        t[1] = z;
        var v = u[2];
        if (v < this._hjn[2]) {
            v = this._hjn[2]
        } else {
            if (v > this._hjp[2]) {
                v = this._hjp[2]
            }
        }
        t[2] = v
    };
    d.prototype._ote = function(s) {
        if (this._otb(s)) {
            return 0
        } else {
            this._hjw(s, i);
            fqv._eij(s, i, r);
            return fqv.length(r)
        }
    };
    d.prototype._otf = function(s) {
        if (this._otb(s)) {
            return 0
        } else {
            this._hjw(s, i);
            fqv._eij(s, i, r);
            r[1] = 0;
            return fqv.length(r)
        }
    };
    d.prototype._oth = function(s) {
        if (this._otb(s)) {
            return 0
        } else {
            this._hjw(s, i);
            fqv._eij(s, i, r);
            r[1] = 0;
            return fqv._eir(r, r)
        }
    };
    var m = function(u, t, s) {
        var x = i;
        fqv._eij(u, t, x);
        var v = r;
        fqv._eij(u, s, v);
        var y = p;
        fqv._eip(x, v, y);
        h[0] = y[0];
        h[1] = y[1];
        h[2] = y[2];
        h[3] = y[0] * -u[0] + y[1] * -u[1] + y[2] * -u[2];
        return h
    };
    var o = function(u, s, C, B, z, v) {
        var x = m(C, B, z);
        var A = -(x[0] * u[0] + x[1] * u[1] + x[2] * u[2] + x[3]) / (x[0] * s[0] + x[1] * s[1] + x[2] * s[2]);
        var y = i;
        fqv.scale(s, A, y);
        fqv.add(u, y, v.point);
        v._oso = Math.asin(Math.abs(x[0] * s[0] + x[1] * s[1] + x[2] * s[2]) / (Math.sqrt(x[0] * x[0] + x[1] * x[1] + x[2] * x[2]) * Math.sqrt(s[0] * s[0] + s[1] * s[1] + s[2] * s[2])));
        return v
    };
    d.prototype._oti = function(v, x) {
        var u = this._hjp;
        var t = r;
        t[0] = this._hjp[0] - this._ke();
        t[1] = this._hjp[1];
        t[2] = this._hjp[2];
        var s = p;
        s[0] = this._hjp[0];
        s[1] = this._hjp[1];
        s[2] = this._hjp[2] - this._bum();
        return o(v, x, u, t, s, e)
    };
    d.prototype._otj = function(v, x) {
        var u = this._hjn;
        var t = r;
        t[0] = this._hjn[0] + this._ke();
        t[1] = this._hjn[1];
        t[2] = this._hjn[2];
        var s = p;
        s[0] = this._hjn[0];
        s[1] = this._hjn[1];
        s[2] = this._hjn[2] + this._bum();
        return o(v, x, u, t, s, c)
    };
    d.prototype._otk = function(z, B, A, y, t) {
        var x = this._hjs(i);
        h[0] = x[0];
        h[1] = this._hjn[1];
        h[2] = x[2];
        h[3] = 1;
        q[0] = x[0];
        q[1] = this._hjp[1];
        q[2] = x[2];
        q[3] = 1;
        var C = this._ke() / 2;
        var s = this._bum() / 2;
        if (s > C) {
            C = s
        }
        evs._eil(z, B, b);
        evs._qyr(b, h);
        evs._qyr(b, q);
        if (h[2] < -h[3] || q[2] < -q[3]) {
            return false
        }
        if (h[2] / h[3] > q[2] / q[3]) {
            var u = h[0] + z[0] * C + z[12];
            var v = h[3] + z[3] * C + z[15];
            h[0] = Math.floor((h[0] / h[3] + 1) / 2 * A);
            h[1] = Math.floor((h[1] / h[3] + 1) / 2 * y);
            q[0] = Math.floor((q[0] / q[3] + 1) / 2 * A);
            q[1] = Math.floor((q[1] / q[3] + 1) / 2 * y);
            C = Math.floor((u / v + 1) / 2 * A) - h[0]
        } else {
            var u = q[0] + z[0] * C + z[12];
            var v = q[3] + z[3] * C + z[15];
            h[0] = Math.floor((h[0] / h[3] + 1) / 2 * A);
            h[1] = Math.floor((h[1] / h[3] + 1) / 2 * y);
            q[0] = Math.floor((q[0] / q[3] + 1) / 2 * A);
            q[1] = Math.floor((q[1] / q[3] + 1) / 2 * y);
            C = Math.floor((u / v + 1) / 2 * A) - q[0]
        }
        var E = t._lhk();
        E[0] = h[0];
        E[1] = h[1];
        E[2] = h[2];
        var D = t._lhm();
        D[0] = q[0];
        D[1] = q[1];
        D[2] = q[2];
        t._lhp(C);
        return true
    };
    d.prototype._eja = function() {
        return "([" + this._hjn[0] + ", " + this._hjn[1] + ", " + this._hjn[2] + "] -> [" + this._hjp[0] + ", " + this._hjp[1] + ", " + this._hjp[2] + "])"
    };
    d.prototype._hs = function() {
        a._ddr(this)
    };
    var a = ese(function(t, s) {
        return new d(t, s)
    }, undefined, d.prototype._bg, 50);
    return function(t, s) {
        return a.get(t, s)
    }
}();
var fnl = function() {
    var I = 0;
    var V = 1;
    var Q = 2;
    var P = 3;
    var s = 4;
    var i = 0;
    var ap = 1;
    var J = 2;
    var t = 0;
    var m = 1;
    var o = 2;
    var X = 0;
    var G = 1;
    var d = 2;
    var j = 3;
    var ah = 4;
    var Z = 5;
    var af = 0;
    var b = 1;
    var aa = 2;
    var ad = 3;
    var y = 4;
    var an = 5;
    var ac = 1;
    var Y = 2;
    var O = 4;
    var q = 8;
    var v = 16;
    var H = 1;
    var D = 2;
    var ao = 4;
    var ag = 8;
    var z = 16;
    var W = 32;
    var k = 64;
    var u = 128;
    var L = 256;
    var n = 512;
    var N = 0;
    var h = 1;
    var F = 2;
    var g = 3;
    var K = 1;
    var B = 2;
    var T = 0;
    var c = 1;
    var l = 2;
    var am = 3;
    var ab = 4;
    var U = 5;
    var x = 6;
    var ae = 7;
    var e = 8;
    var aj = 9;
    var E = 10;
    var r = 11;
    var ak = 12;
    var p = 13;
    var M = 14;
    var A = 15;
    var S = 16;
    var a = 0;
    var C = 1;
    var ai = 2;
    var al = function(ar, aq) {
        this._dsh = ar;
        this._dsi = false;
        this._dsj = false;
        this._dsl = false;
        this._dsn = false;
        this._dso = false;
        this.size = 64;
        this._dsp = false;
        this._dsr = false;
        this._dsv = 0;
        this._dsx = 0;
        this._dsz = 0;
        this._dtb = 0;
        this._dtc = 0;
        this._dte = 0;
        this._dtf = 0;
        this._dth = 0;
        this._dti = 0;
        this._dtj = -1;
        this._dtk = false;
        this._dtl = t;
        this._cyc = G;
        this._dcd = i;
        this._dtm = 255;
        this._dtn = N;
        this._dtp = N;
        this._dtr = false;
        this._dtt = false;
        this._dtu = false;
        this._dtv = 0;
        this._dtx = 0;
        this._dtz = 0;
        this._dub = false;
        this._dud = 0;
        this._duf = false;
        this._dug = false;
        this._duh = 0;
        this._dui = 0;
        this._duk = 0;
        this._dul = 0;
        if (aq !== undefined) {
            if (aq !== null) {
                R.call(this, aq)
            }
        } else {
            throw new Error("2397 ")
        }
    };
    var R = function(aw) {
        var av = aw._lpi();
        if (av === I) {
            this.size = 64
        } else {
            if (av === V) {
                this.size = 128
            } else {
                if (av === Q) {
                    this.size = 256
                } else {
                    if (av === P) {
                        this.size = 512
                    } else {
                        if (av === s) {
                            this.size = 1024
                        } else {
                            throw new Error("2398 " + av)
                        }
                    }
                }
            }
        }
        var at = aw._lpp();
        if ((at & ac) !== 0) {
            this._dsi = true
        }
        if ((at & Y) !== 0) {
            this._dsj = true
        }
        if ((at & O) !== 0) {
            this._dsl = true
        }
        if ((at & q) !== 0) {
            this._dsn = true
        }
        if ((at & v) !== 0) {
            this._dso = true
        }
        var au = aw._lpi();
        this._dtn = au & 7;
        this._dtp = (au >> 3) & 7;
        var ar = aw._lpp();
        this._dsp = ((ar & H) !== 0);
        this._dsr = ((ar & D) !== 0);
        this._dtr = ((ar & ao) !== 0);
        this._dtt = ((ar & ag) !== 0);
        if ((ar & z) !== 0) {
            this._dsz = aw._lpt();
            this._dtb = aw._lpt()
        }
        if ((ar & W) !== 0) {
            this._dtc = aw._lpp()
        }
        if ((ar & k) !== 0) {
            this._dte = aw._lpp()
        }
        if ((ar & u) !== 0) {
            this._dtf = aw._lpp()
        }
        if ((ar & L) !== 0) {
            this._dth = aw._lpp()
        }
        if ((ar & n) !== 0) {
            this._dti = aw._lpp()
        }
        this._dtk = (aw._lpi() === 1);
        this._dtl = aw._lpi();
        this._cyc = aw._lpi();
        this._dcd = aw._lpi();
        if (this._dcd === ap) {
            this._dtm = aw._lpi()
        }
        var aq = aw._lpi();
        if ((aq & K) !== 0) {
            this._dsv = aw._lpj()
        }
        if ((aq & B) !== 0) {
            this._dsx = aw._lpj()
        }
        if (aw._lpi() === 1) {
            this._dtu = true;
            this._dtv = aw._lpj();
            this._dtx = aw._lpj();
            this._dtz = aw._lpr();
            this._duk = aw._lpi();
            this._dub = (aw._lpi() === 1);
            this._dud = aw._lpi();
            this._duf = (aw._lpi() === 1);
            this._dug = (aw._lpi() === 1);
            this._duh = aw._lpi();
            this._dui = aw._lpi();
            this._dul = aw._lpl()
        }
    };
    al.prototype._bjx = function() {
        return this._dsh
    };
    al.prototype.getSize = function() {
        return this.size
    };
    al.prototype._dum = function() {
        return this._dsi
    };
    al.prototype._duo = function() {
        return this._dsj
    };
    al.prototype._duq = function() {
        return this._dsl
    };
    al.prototype._dus = function() {
        return this._dsn
    };
    al.prototype._duu = function() {
        return this._dso
    };
    al.prototype._duw = function() {
        return this._dtj
    };
    al.prototype._duy = function() {
        return this._dsv
    };
    al.prototype._duz = function() {
        return this._dsx
    };
    al.prototype._dvb = function() {
        return this._dsp
    };
    al.prototype._dvd = function() {
        return this._dsr
    };
    al.prototype._dve = function() {
        return this._dtr
    };
    al.prototype._dvf = function() {
        return this._dtt
    };
    al.prototype._dvh = function() {
        return this._dtk
    };
    al.prototype._dvi = function() {
        return this._dsz
    };
    al.prototype._dvj = function() {
        return this._dtb
    };
    al.prototype._dvk = function() {
        return this._dtc
    };
    al.prototype._dvl = function() {
        return this._dte
    };
    al.prototype._dvm = function() {
        return this._dtf
    };
    al.prototype._dvo = function() {
        return this._dth
    };
    al.prototype._dvq = function() {
        return this._dti
    };
    al.prototype._dvs = function() {
        return this._dtl
    };
    al.prototype._cyl = function() {
        return this._cyc
    };
    al.prototype._dvt = function() {
        return this._dcd
    };
    al.prototype._dvu = function() {
        return this._dtm
    };
    al.prototype._dvv = function() {
        return this._dtn
    };
    al.prototype._dvw = function() {
        return this._dtp
    };
    al.prototype._dvy = function() {
        return this._dtu
    };
    al.prototype._dwa = function() {
        return this._dtv
    };
    al.prototype._dwb = function() {
        return this._dtx
    };
    al.prototype._dwc = function() {
        return this._dtz
    };
    al.prototype._dwe = function() {
        return this._dub
    };
    al.prototype._dwg = function() {
        return this._dud
    };
    al.prototype._dwh = function() {
        return this._duf
    };
    al.prototype._dwi = function() {
        return this._dug
    };
    al.prototype._dwk = function() {
        return this._duh
    };
    al.prototype._dwl = function() {
        return this._dui
    };
    al.prototype._dwm = function() {
        return this._duk
    };
    al.prototype._dwn = function() {
        return this._dul
    };
    return function(ar, aq) {
        return new al(ar, aq)
    }
}();
var feg = function() {
    var a = {
        _cix: 0,
        _ciy: 1,
        _cja: 2
    };
    return a
}();
var fum = function() {
    var e = {};
    var c;
    var a;
    var i = 65535;
    var h = 0;
    e._lkn = function() {
        return h
    };
    var g = 0;
    e._lkp = function() {
        return g
    };
    var d = null;
    var b = null;
    e._bg = function(k, j) {
        c = k;
        a = j
    };
    e._kb = function() {
        h = 0;
        g = 0;
        d = null;
        b = null
    };
    e._lkr = function() {
        return d
    };
    e._lks = function() {
        return b
    };
    e._qf = function() {
        if (!c._lja(a)) {
            return false
        }
        if (d === null) {
            var l = c._lje(a, 0);
            if (l) {
                g = c._hcc(a)._cqh(0);
                d = new Array(g + 1);
                for (var k = 0; k < g; k++) {
                    var j = c.getFile(a, 0, k, feg._ciy);
                    if (j !== undefined) {
                        d[k] = fnl(k, j);
                        h++
                    }
                }
                b = fnl(-1, null);
                if (false) {}
                return true
            }
        }
        return false
    };
    return e
}();
var fnf = {
    _nge: {
        id: 0,
        _ngf: function() {
            return new Float32Array(9)
        },
        _ngh: function(b, c) {
            for (var a = 0; a < 9; a++) {
                b[a] = c[a]
            }
        },
        _ngj: function(b, c) {
            var d = true;
            for (var a = 0; a < 9; a++) {
                if (b[a] !== c[a]) {
                    b[a] = c[a];
                    d = false
                }
            }
            return d
        }
    },
    _ngk: {
        id: 1,
        _ngf: function() {
            return undefined
        },
        _ngh: function() {},
        _ngj: function() {
            return false
        }
    },
    _ngm: {
        id: 2,
        _ngf: function() {
            return new Float32Array(16)
        },
        _ngh: function(b, c) {
            for (var a = 0; a < 16; a++) {
                b[a] = c[a]
            }
        },
        _ngj: function(b, c) {
            var d = true;
            for (var a = 0; a < 16; a++) {
                if (b[a] !== c[a]) {
                    b[a] = c[a];
                    d = false
                }
            }
            return d
        }
    },
    _ngn: {
        id: 3,
        _ngf: function() {
            return undefined
        },
        _ngh: function() {},
        _ngj: function() {
            return false
        }
    },
    _ngo: {
        id: 10,
        _ngp: new Float32Array(1),
        _ngf: function() {
            return new Float32Array(1)
        },
        _ngh: function(a, b) {
            a[0] = b
        },
        _ngj: function(a, b) {
            this._ngp[0] = b;
            if (a[0] !== this._ngp[0]) {
                a[0] = this._ngp[0];
                return false
            } else {
                return true
            }
        }
    },
    _ngq: {
        id: 11,
        _ngf: function() {
            return new Float32Array(2)
        },
        _ngh: function(a, b) {
            a[0] = b[0];
            a[1] = b[1]
        },
        _ngj: function(a, b) {
            var c = true;
            if (a[0] !== b[0]) {
                a[0] = b[0];
                c = false
            }
            if (a[1] !== b[1]) {
                a[1] = b[1];
                c = false
            }
            return c
        }
    },
    _ngr: {
        id: 12,
        _ngf: function() {
            return new Float32Array(3)
        },
        _ngh: function(a, b) {
            a[0] = b[0];
            a[1] = b[1];
            a[2] = b[2]
        },
        _ngj: function(a, b) {
            var c = true;
            if (a[0] !== b[0]) {
                a[0] = b[0];
                c = false
            }
            if (a[1] !== b[1]) {
                a[1] = b[1];
                c = false
            }
            if (a[2] !== b[2]) {
                a[2] = b[2];
                c = false
            }
            return c
        }
    },
    _ngt: {
        id: 13,
        _ngf: function() {
            return new Float32Array(4)
        },
        _ngh: function(a, b) {
            a[0] = b[0];
            a[1] = b[1];
            a[2] = b[2];
            a[3] = b[3]
        },
        _ngj: function(a, b) {
            var c = true;
            if (a[0] !== b[0]) {
                a[0] = b[0];
                c = false
            }
            if (a[1] !== b[1]) {
                a[1] = b[1];
                c = false
            }
            if (a[2] !== b[2]) {
                a[2] = b[2];
                c = false
            }
            if (a[3] !== b[3]) {
                a[3] = b[3];
                c = false
            }
            return c
        }
    },
    _ngv: {
        id: 14,
        _ngf: function() {
            return undefined
        },
        _ngh: function() {},
        _ngj: function() {
            return false
        }
    },
    _ngx: {
        id: 15,
        _ngf: function() {
            return undefined
        },
        _ngh: function() {},
        _ngj: function() {
            return false
        }
    },
    _ngy: {
        id: 20,
        _ngp: new Int32Array(1),
        _ngf: function() {
            return new Int32Array(1)
        },
        _ngh: function(a, b) {
            a[0] = b
        },
        _ngj: function(a, b) {
            this._ngp[0] = b;
            if (a[0] !== this._ngp[0]) {
                a[0] = this._ngp[0];
                return false
            } else {
                return true
            }
        }
    },
    _ngz: {
        id: 21,
        _ngf: function() {
            return undefined
        },
        _ngh: function() {},
        _ngj: function() {
            return false
        }
    }
};
var elp = {
    _dxc: {
        id: 0,
        name: "_b",
        type: fnf._ngm
    },
    _dxe: {
        id: 1,
        name: "_d",
        type: fnf._ngm
    },
    _dxf: {
        id: 2,
        name: "_f",
        type: fnf._ngm
    },
    _dxh: {
        id: 3,
        name: "_h",
        type: fnf._nge
    },
    _dxi: {
        id: 4,
        name: "_i",
        type: fnf._ngm
    },
    _dxj: {
        id: 5,
        name: "_k",
        type: fnf._nge
    },
    _dxk: {
        id: 6,
        name: "_l",
        type: fnf._nge
    },
    _dxm: {
        id: 10,
        name: "_m",
        type: fnf._ngr
    },
    _dxn: {
        id: 11,
        name: "_n",
        type: fnf._ngr
    },
    _dxp: {
        id: 12,
        name: "_o",
        type: fnf._ngr
    },
    _dxr: {
        id: 13,
        name: "_p",
        type: fnf._ngr
    },
    _dxt: {
        id: 14,
        name: "_q",
        type: fnf._ngo
    },
    _dxv: {
        id: 20,
        name: "_s",
        type: fnf._ngy
    },
    _dxx: {
        id: 21,
        name: "_t",
        type: fnf._ngy
    },
    _dxz: {
        id: 22,
        name: "_u",
        type: fnf._ngr
    },
    _dya: {
        id: 23,
        name: "_w",
        type: fnf._ngy
    },
    _dyb: {
        id: 24,
        name: "_x",
        type: fnf._ngr
    },
    _dyd: {
        id: 25,
        name: "_y"
    },
    _dye: {
        id: 26,
        name: "_ba",
        type: fnf._ngo
    },
    _dyf: {
        id: 40,
        name: "_bb",
        type: fnf._ngv
    },
    _dyg: {
        id: 41,
        name: "_bc",
        type: fnf._ngv
    },
    _dyi: {
        id: 42,
        name: "_be",
        type: fnf._ngv
    },
    _dyj: {
        id: 50,
        name: "_bg",
        type: fnf._ngo
    },
    _dyl: {
        id: 51,
        name: "_bh",
        type: fnf._ngm
    },
    _dyn: {
        id: 52,
        name: "_bi",
        type: fnf._ngy
    },
    _dyp: {
        id: 53,
        name: "_bk",
        type: fnf._ngt
    },
    _dyr: {
        id: 60,
        name: "_bm",
        type: fnf._ngo
    },
    _dys: {
        id: 61,
        name: "_bo",
        type: fnf._ngv
    },
    _dyt: {
        id: 62,
        name: "_bp",
        type: fnf._ngz
    },
    _dyv: {
        id: 70,
        name: "_bq",
        type: fnf._ngq
    },
    _dyw: {
        id: 71,
        name: "_br",
        type: fnf._ngo
    },
    _dyy: {
        id: 72,
        name: "_bt",
        type: fnf._ngo
    },
    _dyz: {
        id: 73,
        name: "_bu",
        type: fnf._ngo
    },
    _dza: {
        id: 70,
        name: "_bw",
        type: fnf.FLOAT
    },
    _dzc: {
        id: 110,
        name: "_by"
    },
    _dze: {
        id: 111,
        name: "_ca"
    },
    _dzg: {
        id: 112,
        name: "_cc"
    },
    _dzh: {
        id: 120,
        name: "_ce",
        type: fnf._ngt
    },
    _dzi: {
        id: 121,
        name: "_cf",
        type: fnf._ngo
    },
    _dzk: {
        id: 122,
        name: "_ch",
        type: fnf._ngo
    },
    _dzl: {
        id: 123,
        name: "_cj",
        type: fnf._ngt
    },
    _dzn: {
        id: 124,
        name: "_ck",
        type: fnf._ngr
    },
    _dzp: {
        id: 125,
        name: "_cm",
        type: fnf._ngr
    },
    _dzq: {
        id: 126,
        name: "_cn",
        type: fnf._ngr
    },
    _dzr: {
        id: 127,
        name: "_co",
        type: fnf._ngt
    },
    _dzt: {
        id: 130,
        name: "_cq",
        type: fnf._ngy
    },
    _dzu: {
        id: 131,
        name: "_cr",
        type: fnf._ngy
    },
    _dzw: {
        id: 140,
        name: "_cs"
    },
    _dzy: {
        id: 141,
        name: "_cu"
    },
    _eaa: {
        id: 150,
        name: "_cv"
    },
    _eab: {
        id: 151,
        name: "_cw"
    },
    _eac: {
        id: 152,
        name: "_cy"
    },
    _eae: {
        id: 153,
        name: "_da"
    },
    _eaf: {
        id: 160,
        name: "_db"
    },
    _eag: {
        id: 161,
        name: "_dd"
    },
    _eah: {
        id: 170,
        name: "_df"
    },
    _eaj: {
        id: 171,
        name: "_dh"
    },
    _eal: {
        id: 172,
        name: "_dj"
    },
    _eam: {
        id: 173,
        name: "_dk"
    },
    _eao: {
        id: 180,
        name: "_dl"
    },
    _eap: {
        id: 181,
        name: "_dn"
    },
    _eaq: {
        id: 182,
        name: "_dp"
    },
    _ear: {
        id: 183,
        name: "_dr"
    },
    _eat: {
        id: 184,
        name: "_ds"
    },
    _eau: {
        id: 190,
        name: "_dt"
    },
    _eav: {
        id: 191,
        name: "_du"
    },
    _eaw: {
        id: 192,
        name: "_dv",
        type: fnf._ngq
    },
    _eax: {
        id: 193,
        name: "_dw"
    },
    _eaz: {
        id: 200,
        name: "_dy",
        type: fnf._ngr
    },
    _eba: {
        id: 201,
        name: "_dz",
        type: fnf._ngo
    },
    _ebb: {
        id: 202,
        name: "_ea",
        type: fnf._ngo
    },
    _ebd: {
        id: 210,
        name: "_ec",
        type: fnf._ngo
    },
    _ebf: {
        id: 211,
        name: "_ed",
        type: fnf._ngo
    },
    _ebh: {
        id: 215,
        name: "_ef",
        type: fnf._ngo
    },
    _ebj: {
        id: 220,
        name: "_eh",
        type: fnf._ngr
    },
    _ebl: {
        id: 230,
        name: "_ei",
        type: fnf._ngt
    },
    _ebm: {
        id: 231,
        name: "_ej",
        type: fnf._ngq
    },
    _ebn: {
        id: 240,
        name: "_ek",
        type: fnf._ngo
    },
    _ebo: {
        id: 250,
        name: "_el",
        type: fnf._ngq
    },
    _ebq: {
        id: 251,
        name: "_en",
        type: fnf._ngt
    },
    _ebr: {
        id: 252,
        name: "_ep",
        type: fnf._ngt
    },
    _ebs: {
        id: 260,
        name: "_er",
        type: fnf._ngq
    },
    _ebt: {
        id: 261,
        name: "_et",
        type: fnf._ngq
    },
    _ebv: {
        id: 262,
        name: "_ev",
        type: fnf._ngt
    },
    _ebx: {
        id: 270,
        name: "_ew",
        type: fnf._ngo
    },
    _eby: {
        id: 271,
        name: "_ex",
        type: fnf._ngr
    },
    _eca: {
        id: 272,
        name: "_ey",
        type: fnf._ngo
    },
    _ecc: {
        id: 273,
        name: "_ez",
        type: fnf._ngr
    },
    _ece: {
        id: 274,
        name: "_fa",
        type: fnf._ngt
    },
    _ecg: {
        id: 280,
        name: "_fb",
        type: fnf._ngq
    },
    _ech: {
        id: 281,
        name: "_fc",
        type: fnf._ngo
    },
    _ecj: {
        id: 282,
        name: "_fe",
        type: fnf._ngy
    },
    _eck: {
        id: 283,
        name: "_fg",
        type: fnf._ngo
    },
    _ecm: {
        id: 284,
        name: "_fh",
        type: fnf._ngt
    },
    _ecn: {
        id: 285,
        name: "_fj",
        type: fnf._ngt
    },
    _ecp: {
        id: 286,
        name: "_fl",
        type: fnf._ngt
    },
    _ecq: {
        id: 287,
        name: "_fn",
        type: fnf._ngo
    },
    _ecr: {
        id: 288,
        name: "_fo",
        type: fnf._ngo
    },
    _ecs: {
        id: 289,
        name: "_fp",
        type: fnf._ngo
    },
    _ect: {
        id: 290,
        name: "_fr",
        type: fnf._ngt
    },
    _ecv: {
        id: 291,
        name: "_fs",
        type: fnf._ngo
    },
    _ecx: {
        id: 292,
        name: "_ft",
        type: fnf._ngo
    },
    _ecz: {
        id: 293,
        name: "_fu",
        type: fnf._ngo
    },
    _edb: {
        id: 294,
        name: "_fw",
        type: fnf._ngo
    },
    _edc: {
        id: 295,
        name: "_fy",
        type: fnf._ngo
    },
    _edd: {
        id: 296,
        name: "_ga",
        type: fnf._ngo
    },
    _ede: {
        id: 297,
        name: "_gc",
        type: fnf._ngo
    },
    _edf: {
        id: 298,
        name: "_gd",
        type: fnf._ngt
    },
    _edg: {
        id: 299,
        name: "_ge",
        type: fnf._ngo
    },
    _edh: {
        id: 300,
        name: "_gf",
        type: fnf._ngo
    },
    _edi: {
        id: 301,
        name: "_gh",
        type: fnf._ngr
    },
    _edk: {
        id: 302,
        name: "_gj",
        type: fnf._ngo
    },
    _edm: {
        id: 303,
        name: "_gl",
        type: fnf._ngo
    },
    _edo: {
        id: 304,
        name: "_gm",
        type: fnf._ngo
    },
    _edp: {
        id: 310,
        name: "_gn"
    },
    _edr: {
        id: 311,
        name: "_go"
    },
    _eds: {
        id: 312,
        name: "_gp"
    },
    _edt: {
        id: 313,
        name: "_gr"
    },
    _edv: {
        id: 320,
        name: "_gt",
        type: fnf._ngr
    },
    _edw: {
        id: 321,
        name: "_gv",
        type: fnf._ngt
    },
    _edy: {
        id: 0,
        name: "_gx",
        _edz: true
    },
    _eea: {
        id: 1,
        name: "_gz",
        _edz: true
    },
    _eeb: {
        id: 2,
        name: "_ha",
        _edz: true
    },
    _eed: {
        id: 3,
        name: "_hc",
        _edz: true
    },
    _eef: {
        id: 4,
        name: "_he",
        _edz: true
    },
    _eeh: {
        id: 5,
        name: "_hf",
        _edz: true
    },
    _eej: {
        id: 6,
        name: "_hh",
        _edz: true
    },
    _eek: {
        id: 7,
        name: "_hi",
        _edz: true
    },
    _eem: {
        id: 8,
        name: "_hk",
        _edz: true
    },
    _eeo: {
        id: 9,
        name: "_hm",
        _edz: true
    },
    _eep: {
        id: 10,
        name: "_hn",
        _edz: true
    },
    _eeq: {
        id: 11,
        name: "_hp",
        _edz: true
    },
    _eer: {
        id: 12,
        name: "_hq",
        _edz: true
    },
    _ees: {
        id: 13,
        name: "_hs",
        _edz: true
    },
    _eeu: {
        id: 14,
        name: "_ht",
        _edz: true
    },
    _eev: {
        id: 15,
        name: "_hu",
        _edz: true
    },
    _eex: {
        id: 16,
        name: "_hw",
        _edz: true
    },
    _eez: {
        id: 17,
        name: "_hy",
        _edz: true
    },
    _efb: {
        id: 18,
        name: "_hz",
        _edz: true
    },
    _efd: {
        id: 19,
        name: "_ib",
        _edz: true
    }
};
var fct = {
    _dpn: 0,
    _dpp: 1,
    _dpr: 2,
    _dps: 3,
    _dpu: 4,
    _dpw: 5,
    _dpx: 6,
    _dpz: 7,
    _nv: 8,
    _dqa: 9,
    _dqb: 9,
    _dqd: 9,
    _dqf: 9,
    _dqh: 10,
    _dqj: 11,
    _dql: 12,
    _dqn: 13,
    _dqo: 14,
    _dqq: 15,
    _dqs: 16,
    _dqu: 17,
    _dqv: 18,
    _dqw: 19,
    _dqy: 20,
    _dra: 21,
    _drb: 22,
    _drd: 23,
    _drf: 24,
    _drg: 25,
    _od: 26,
    _drh: 27,
    _dri: 28,
    _drj: 29,
    _drk: 30,
    _drl: 31,
    _drn: 32,
    _dro: 33,
    _drq: 34
};
var elu = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "";
        b += "precision mediump float;\n";
        b += "varying vec4 _jg;\n";
        b += "void main(void) {\n";
        b += "gl_FragColor=_jg;\n";
        b += "}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        return c
    };
    return a
}();
var fqr = function() {
    var u = {};
    var o = function(y) {
        var x = new Float32Array(4);
        if (y) {
            x[0] = y[0];
            x[1] = y[1];
            x[2] = y[2];
            x[3] = y[3]
        }
        return x
    };
    u.create = o;
    var r = function(x) {
        if (!x) {
            x = o()
        }
        x[0] = 0;
        x[1] = 0;
        x[2] = 0;
        x[3] = 1;
        return x
    };
    u._eii = r;
    var t = function(A, z, y) {
        var x = Math.sin(z * 0.5);
        var B = Math.cos(z * 0.5);
        y[0] = A[0] * x;
        y[1] = A[1] * x;
        y[2] = A[2] * x;
        y[3] = B;
        return y
    };
    u._gmx = t;
    var q = function(y, x) {
        x[0] = y[0];
        x[1] = y[1];
        x[2] = y[2];
        x[3] = y[3];
        return x
    };
    u.set = q;
    var s = function(C, B) {
        var z = C[0],
            D = C[1],
            A = C[2];
        if (!B || C === B) {
            C[3] = -Math.sqrt(Math.abs(1 - z * z - D * D - A * A));
            return C
        }
        B[0] = z;
        B[1] = D;
        B[2] = A;
        B[3] = -Math.sqrt(Math.abs(1 - z * z - D * D - A * A));
        return B
    };
    u._gmy = s;
    var k = function(x, y) {
        return x[0] * y[0] + x[1] * y[1] + x[2] * y[2] + x[3] * y[3]
    };
    u._eir = k;
    var e = function(C, B) {
        var z = C[0],
            y = C[1],
            E = C[2],
            D = C[3],
            x = z * z + y * y + E * E + D * D,
            A = x ? 1 / x : 0;
        if (!B || C === B) {
            C[0] *= -A;
            C[1] *= -A;
            C[2] *= -A;
            C[3] *= A;
            return C
        }
        B[0] = -C[0] * A;
        B[1] = -C[1] * A;
        B[2] = -C[2] * A;
        B[3] = C[3] * A;
        return B
    };
    u.inverse = e;
    var p = function(y, x) {
        if (!x || y === x) {
            y[0] *= -1;
            y[1] *= -1;
            y[2] *= -1;
            return y
        }
        x[0] = -y[0];
        x[1] = -y[1];
        x[2] = -y[2];
        x[3] = y[3];
        return x
    };
    u._gnb = p;
    var m = function(y, x) {
        if (!x || y === x) {
            y[0] *= -1;
            y[1] *= -1;
            y[2] *= -1;
            y[3] *= -1;
            return y
        }
        x[0] = -y[0];
        x[1] = -y[1];
        x[2] = -y[2];
        x[3] = -y[3];
        return x
    };
    u._eim = m;
    var h = function(C) {
        var z = C[0],
            D = C[1],
            B = C[2],
            A = C[3];
        return Math.sqrt(z * z + D * D + B * B + A * A)
    };
    u.length = h;
    var v = function(E, C) {
        if (!C) {
            C = E
        }
        var z = E[0],
            F = E[1],
            B = E[2],
            A = E[3],
            D = Math.sqrt(z * z + F * F + B * B + A * A);
        if (D === 0) {
            C[0] = 0;
            C[1] = 0;
            C[2] = 0;
            C[3] = 0;
            return C
        }
        D = 1 / D;
        C[0] = z * D;
        C[1] = F * D;
        C[2] = B * D;
        C[3] = A * D;
        return C
    };
    u.normalize = v;
    var n = function(y, A, H) {
        if (!H) {
            H = y
        }
        var F = y[0],
            E = y[1],
            D = y[2],
            G = y[3],
            B = A[0],
            z = A[1],
            x = A[2],
            C = A[3];
        H[0] = F * C + G * B + E * x - D * z;
        H[1] = E * C + G * z + D * B - F * x;
        H[2] = D * C + G * x + F * z - E * B;
        H[3] = G * C - F * B - E * z - D * x;
        return H
    };
    u._eil = n;
    var l = function(A, G, M) {
        if (!M) {
            M = G
        }
        var L = G[0],
            K = G[1],
            B = G[2],
            I = A[0],
            H = A[1],
            F = A[2],
            J = A[3],
            D = J * L + H * B - F * K,
            C = J * K + F * L - I * B,
            z = J * B + I * K - H * L,
            E = -I * L - H * K - F * B;
        M[0] = D * J + E * -I + C * -F - z * -H;
        M[1] = C * J + E * -H + z * -I - D * -F;
        M[2] = z * J + E * -F + D * -H - C * -I;
        return M
    };
    u._gnd = l;
    var j = function(z, H) {
        if (!H) {
            H = ewd.create()
        }
        var I = z[0],
            G = z[1],
            L = z[2],
            J = z[3],
            P = I + I,
            O = G + G,
            K = L + L,
            C = I * P,
            B = I * O,
            A = I * K,
            N = G * O,
            M = G * K,
            Q = L * K,
            D = J * P,
            E = J * O,
            F = J * K;
        H[0] = 1 - (N + Q);
        H[1] = B + F;
        H[2] = A - E;
        H[3] = B - F;
        H[4] = 1 - (C + Q);
        H[5] = M + D;
        H[6] = A + E;
        H[7] = M - D;
        H[8] = 1 - (C + N);
        return H
    };
    u._gnl = j;
    var i = function(z, H) {
        if (!H) {
            H = evs.create()
        }
        var I = z[0],
            G = z[1],
            L = z[2],
            J = z[3],
            P = I + I,
            O = G + G,
            K = L + L,
            C = I * P,
            B = I * O,
            A = I * K,
            N = G * O,
            M = G * K,
            Q = L * K,
            D = J * P,
            E = J * O,
            F = J * K;
        H[0] = 1 - (N + Q);
        H[1] = B + F;
        H[2] = A - E;
        H[3] = 0;
        H[4] = B - F;
        H[5] = 1 - (C + Q);
        H[6] = M + D;
        H[7] = 0;
        H[8] = A + E;
        H[9] = M - D;
        H[10] = 1 - (C + N);
        H[11] = 0;
        H[12] = 0;
        H[13] = 0;
        H[14] = 0;
        H[15] = 1;
        return H
    };
    u._gnn = i;
    var g = function(x, y, B, F) {
        if (!F) {
            F = x
        }
        var z = x[0] * y[0] + x[1] * y[1] + x[2] * y[2] + x[3] * y[3],
            A, C, E, D;
        if (Math.abs(z) >= 1) {
            if (F !== x) {
                F[0] = x[0];
                F[1] = x[1];
                F[2] = x[2];
                F[3] = x[3]
            }
            return F
        }
        A = Math.acos(z);
        C = Math.sqrt(1 - z * z);
        if (Math.abs(C) < 0.001) {
            F[0] = (x[0] * 0.5 + y[0] * 0.5);
            F[1] = (x[1] * 0.5 + y[1] * 0.5);
            F[2] = (x[2] * 0.5 + y[2] * 0.5);
            F[3] = (x[3] * 0.5 + y[3] * 0.5);
            return F
        }
        E = Math.sin((1 - B) * A) / C;
        D = Math.sin(B * A) / C;
        F[0] = (x[0] * E + y[0] * D);
        F[1] = (x[1] * E + y[1] * D);
        F[2] = (x[2] * E + y[2] * D);
        F[3] = (x[3] * E + y[3] * D);
        return F
    };
    u._gnp = g;
    var d = function(z, A) {
        var x = [z[0], z[1], z[2], 1];
        var y = r();
        p(A, y);
        var B = r();
        n(y, x, B);
        n(B, A);
        z[0] = B[0];
        z[1] = B[1];
        z[2] = B[2];
        return z
    };
    u._gnr = d;
    var c = function(z, A, y, x) {
        if (!x) {
            x = z
        } else {
            q(z, x)
        }
        if (k(z, A) < 0) {
            m(x)
        }
        x[0] *= 1 - y;
        x[1] *= 1 - y;
        x[2] *= 1 - y;
        x[3] *= 1 - y;
        x[0] += A[0] * y;
        x[1] += A[1] * y;
        x[2] += A[2] * y;
        x[3] += A[3] * y;
        v(x);
        return x
    };
    u._gnt = c;
    var a = function(x) {
        return "[" + x[0] + ", " + x[1] + ", " + x[2] + ", " + x[3] + "]"
    };
    u._eja = a;
    var b = function(C) {
        var z = C[0],
            D = C[1],
            B = C[2],
            A = C[3];
        return (z * z + D * D + B * B + A * A)
    };
    u._gnv = b;
    return u
}();
var enc = function() {
    var a = function(e, b, c, g, d) {
        this._ccl = e;
        this._ewx = b;
        this._cdr = 0;
        this._fem = false;
        if (c !== undefined) {
            this._fem = c
        }
        this._fen = -1;
        if (g !== undefined) {
            this._fen = g
        }
        this._fep = true;
        if (d !== undefined) {
            this._fep = d
        }
    };
    a.prototype._cdf = function() {
        throw new Error("2480 ")
    };
    return a
}();
var fmd = function() {
    var a = {};
    a._brg = function() {
        var b = window.navigator.userAgent.indexOf("Mac OS X") >= 0;
        return b
    };
    a._brh = function() {
        var b = window.navigator.userAgent.indexOf("Windows") >= 0;
        return b
    };
    a._brj = function() {
        var b = window.navigator.userAgent.indexOf("Linux") >= 0;
        return b
    };
    return a
}();
var fqi = function() {
    var b = {};
    b._gol = 1;
    b._gom = 2;
    b._gon = 3;
    b._gop = 10;
    b._goq = 11;
    b._gor = 20;
    var e = false;
    var d = 1;
    var h = 0;
    b._gos = function() {
        return h
    };
    var g = null;
    b._ekd = function() {
        return g !== null
    };
    var a = {
        _gou: 0,
        _gow: 0,
        _gox: 0,
        _goz: 0,
        _gpa: 0,
        _gpb: 0,
        _gpd: 0,
        _gpe: 0,
        _gpg: 0,
        _gpi: 0
    };
    b._bg = function(i) {
        g = new Array(10000)
    };
    var c = function() {};
    b._qf = c;
    b._gpj = function(i) {
        g[d] = i;
        h++;
        return d++
    };
    b._gpl = function(i) {
        g[i] = undefined;
        h--
    };
    b._gpm = function() {
        a._gpo = h;
        a._gow = 0;
        a._gox = 0;
        a._goz = 0;
        a._gpa = 0;
        a._gpb = 0;
        a._gpd = 0;
        a._gpe = 0;
        a._gpg = 0;
        a._gpi = 0;
        a._gpq = 0;
        for (var j = 0; j < d; j++) {
            var k = g[j];
            if (k !== undefined) {
                var m = k._gxd();
                var i = k._cak();
                var l = k._kp();
                a._gox += m;
                if (k._hre() === b._gop) {
                    a._goz += m
                } else {
                    if (k._hre() === b._goq) {
                        a._gpa += m
                    }
                }
                a._gpb += i;
                if (k._hre() === b._gol) {
                    a._gpd += i
                } else {
                    if (k._hre() === b._gom) {
                        a._gpe += i
                    } else {
                        if (k._hre() === b._gon) {
                            a._gpg += i
                        }
                    }
                }
                if (k._hre() === b._gor) {
                    a._gpq++
                }
                a._gpi += l;
                a._gow += m + i + l
            }
        }
        return a
    };
    return b
}();
var fnv = function() {
    var a = function(b) {
        this._qco = undefined;
        if (fqi._ekd()) {
            this._qco = fqi._gpj(this)
        }
        this._qcp = 0;
        this._hqj = b;
        this._llj = false
    };
    a.prototype._hre = function() {
        return this._hqj
    };
    a.prototype._qcr = function() {
        if (this._llj) {
            throw new Error("2778 ")
        }
        this._qcp++
    };
    a.prototype._qcs = function() {
        if (this._qcp < 1) {
            throw new Error("2779 ")
        }
        this._qcp--;
        if (this._qcp < 1) {
            this._kb();
            this._llj = true;
            fqi._gpl(this._qco)
        }
    };
    a.prototype._qct = function() {
        return this._qcp
    };
    a.prototype._kb = function() {
        throw new Error("2780 ")
    };
    a.prototype._gxd = function() {
        return 0
    };
    a.prototype._cak = function() {
        return 0
    };
    a.prototype._kp = function() {
        return 0
    };
    return a
}();
var fce = {
    _mav: 16,
    _maw: 4,
    _maz: {
        _mbb: 0,
        _mbd: true
    },
    _mbf: {
        _mbb: 1,
        _mbd: true
    },
    _mbh: {
        _mbb: 2,
        _mbd: true,
        _mbj: true,
        _mbl: true
    },
    _ly: {
        _mbb: 3,
        _mbd: true
    },
    _mbm: {
        _mbb: 4
    },
    _mbo: {
        _mbb: 5
    },
    _mbq: {
        _mbb: 6
    },
    _mbr: {
        _mbb: 7
    },
    _dpz: {
        _mbb: 8
    },
    _mbt: {
        _mbb: 9
    },
    _mbu: {
        _mbb: 10
    },
    _mbv: {
        _mbb: 11
    },
    _mbw: {
        _mbb: 12
    },
    _mbx: {
        _mbb: 13
    },
    _mby: {
        _mbb: 14
    },
    _mbz: {
        _mbb: 15
    }
};
var ffk = function() {
    var g = {};
    var k;
    var o;
    g._bg = function(q, r) {
        o = q;
        k = new Array(o.length);
        for (var p = 0; p < o.length; p++) {
            k[p] = {
                cache: new Array(r[p]),
                available: 0
            }
        }
    };
    var a = g._bg;
    g._hfl = function(s) {
        if (o === undefined) {
            return new ArrayBuffer(s)
        }
        for (var p = 0; p < o.length; p++) {
            if (o[p] >= s) {
                var r = k[p];
                if (r.available > 0) {
                    var q = r.cache[--r.available];
                    delete r.cache[r.available];
                    return q
                } else {
                    return new ArrayBuffer(o[p])
                }
            }
        }
        throw new Error("2550 " + s)
    };
    var l = g._hfl;
    g._hfm = function(r) {
        if (o === undefined) {
            return
        }
        for (var p = 0; p < o.length; p++) {
            if (r.byteLength === o[p]) {
                var q = k[p];
                if (q.available < q.cache.length) {
                    q.cache[q.available++] = r
                }
                return
            }
        }
        throw new Error("2551 " + r.byteLength)
    };
    var j = g._hfm;
    var b = null;
    var d = null;
    var c = 1000;
    var e = 1001;
    var i = function(p) {
        d = p
    };
    var h = function(p) {
        if (b === null) {
            b = new Array(1);
            b[0] = p
        } else {
            b[b.length] = p
        }
    };
    var m = function(x) {
        var q = x.data._cr;
        if (q === c) {} else {
            if (q === e) {
                var v = x.data.suppliedBuffers;
                for (var p = 0; p < v.length; p++) {
                    var u = v[p].size;
                    for (var t = 0; t < o.length; t++) {
                        if (u === o[t]) {
                            var s = k[t];
                            for (var r = 0; r < v[p].buffers.length; r++) {
                                s.cache[s.available++] = v[p].buffers[r]
                            }
                            break
                        }
                    }
                }
            } else {
                throw new Error("2552 " + q)
            }
        }
    };
    var n = function() {};
    return g
}();
var erp = function() {
    var a = function(j, e, g, b, i, h, c, d, k) {
        if (j === undefined || e === undefined || g === undefined || b === undefined) {
            throw new Error("2533 ")
        }
        this._bi = j;
        this._wu = b;
        this.width = e;
        this.height = g;
        this._gxi;
        this._gwx = -1;
        this._gwy = 0;
        this._gwz = true;
        if (c !== undefined) {
            this._gwz = c
        }
        this._gxa = true;
        if (i !== undefined) {
            this._gxa = i
        }
        if (this.width !== this.height && this._gxa) {
            throw new Error("2534 ")
        }
        this.filter = true;
        if (h !== undefined) {
            this.filter = h
        }
        this._jq = false;
        if (d !== undefined) {
            this._jq = d
        }
        if (this._jq && !this._bi._djc()) {
            throw new Error("2535 ")
        }
        this._gxb = false;
        if (k === undefined) {
            k = false
        }
        this._jz = k;
        if (this._wu === undefined) {
            this._gxa = false;
            this._gwz = false
        }
        _qkb(this, fnv, fqi._gop)
    };
    _qjz(fnv, a);
    a.prototype._kb = function() {
        if (this._gwx !== -1) {
            this._bi.gl.deleteTexture(this._gwx);
            this._gwx = -1
        } else {
            ffk._hfm(this._wu);
            this._wu = null
        }
    };
    a.prototype._gxd = function() {
        return this._gwy
    };
    a.prototype.getData = function() {
        return this._wu
    };
    a.prototype._ke = function() {
        return this.width
    };
    a.prototype._kg = function() {
        return this.height
    };
    a.prototype._gbs = function() {
        if (this._gwx === -1) {
            throw new Error("2536 ")
        }
        return this._gwx
    };
    a.prototype._kd = function() {
        return this._jq
    };
    a.prototype._gxe = function() {
        return this._gxb
    };
    a.prototype._gxg = function() {
        if (this._gxi === undefined) {
            this._gxi = this._bi._die(this.width, this.height, this._wu)
        }
        return this._gxi
    };
    a.prototype._ccj = function(c) {
        if (this._bi.gl === undefined) {
            if (false) {}
            return
        }
        var e = this._bi.gl;
        this._gwx = e.createTexture();
        this._bi.bindTexture(fce._mbh, this._gwx, e.TEXTURE_2D);
        e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, this._gwz);
        if (!this._jz) {
            var b = null;
            if (this._wu !== null) {
                this._gwy = this._wu.byteLength;
                if (this._jq) {
                    b = new Float32Array(this._wu)
                } else {
                    b = new Uint8Array(this._wu)
                }
            }
            var d;
            if (this._jq) {
                d = e.FLOAT
            } else {
                d = e.UNSIGNED_BYTE
            }
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, this.width, this.height, 0, e.RGBA, d, b);
            if (this.filter) {
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR)
            } else {
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST)
            }
            if (this._gxa) {
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR);
                e.hint(e.GENERATE_MIPMAP_HINT, e.NICEST);
                e.generateMipmap(e.TEXTURE_2D)
            } else {
                if (this.filter) {
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR)
                } else {
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST)
                }
            }
            if (this._bi._djn() && this._bi._djg()) {
                e.texParameterf(e.TEXTURE_2D, this._bi._djq().TEXTURE_MAX_ANISOTROPY_EXT, this._bi._djh())
            }
        } else {
            e.texImage2D(e.TEXTURE_2D, 0, e.DEPTH_COMPONENT, this.width, this.height, 0, e.DEPTH_COMPONENT, e.UNSIGNED_INT, null);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR)
        }
        this._gxo(false);
        if (c !== undefined) {
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, c);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, c)
        } else {
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)
        }
        this._wu = null
    };
    a.prototype._gxk = function(b, g, p, o, d, k) {
        if (this._bi.gl !== undefined) {
            if (this._gwx === -1) {
                throw new Error("2537 ")
            }
            var l = this._bi.gl;
            var n;
            if (this._jq) {
                n = l.FLOAT
            } else {
                n = l.UNSIGNED_BYTE
            }
            this._bi.bindTexture(fce._mbh, this._gwx, l.TEXTURE_2D);
            l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL, this._gwz);
            l.texSubImage2D(l.TEXTURE_2D, 0, b, g, p, o, l.RGBA, n, k);
            if (this._gxa) {
                if (this._gxm) {
                    l.hint(l.GENERATE_MIPMAP_HINT, l.NICEST);
                    l.generateMipmap(l.TEXTURE_2D)
                } else {
                    this._gxb = true
                }
            }
        } else {
            var c = new Uint32Array(this._wu);
            var i = new Uint32Array(k.buffer);
            for (var m = 0; m < o; m++) {
                var e = m;
                if (this._gwz) {
                    e = o - m - 1
                }
                for (var h = 0; h < p; h++) {
                    c[(b + h) + (g + m) * this.width] = i[h + e * p]
                }
            }
            this._gxi = undefined
        }
    };
    a.prototype._gxm = function() {
        if (this._gxb && this._gxa) {
            var b = this._bi.gl;
            this._bi.bindTexture(fce._mbh, this._gwx, b.TEXTURE_2D);
            b.hint(b.GENERATE_MIPMAP_HINT, b.NICEST);
            b.generateMipmap(b.TEXTURE_2D);
            this._gxb = false
        }
    };
    a.prototype._gxo = function(b) {
        if (!this._bi._djg()) {
            return
        }
        if (b) {
            this._bi.bindTexture(fce._mbh, this._gbs(), this._bi.gl.TEXTURE_2D)
        }
        var c = this._bi._djn() ? this._bi._djk() : 1;
        this._bi.gl.texParameterf(this._bi.gl.TEXTURE_2D, this._bi._djq().TEXTURE_MAX_ANISOTROPY_EXT, c)
    };
    return function(k, e, h, b, j, i, c, d, g) {
        return new a(k, e, h, b, j, i, c, d, g)
    }
}();
var fvk = function() {
    var d = {
        _qk: 0,
        _ql: 1,
        _qn: 2
    };
    var c = {
        _pvj: 1,
        _poz: 16,
        _pou: 256,
        _poq: 128
    };
    var e = {
        _pvj: 0.75,
        _poz: 8,
        _pou: 256,
        _poq: 128
    };
    var b = {
        _pvj: 0.5,
        _poz: 8,
        _pou: 256,
        _poq: 128
    };
    var a = undefined;
    d._pvk = function(i, g) {
        var h;
        if (i === d._qn) {
            h = c
        } else {
            if (i === d._ql) {
                h = e
            } else {
                if (i === d._qk) {
                    h = b
                } else {
                    throw new Error("2772 " + i)
                }
            }
        }
        a = i;
        d._pvj = h._pvj;
        d._poz = h._poz;
        d._pou = h._pou;
        d._poq = h._poq;
        while (d._pou * d._poz > g || d._poq * d._poz > g) {
            d._pou /= 2;
            d._poq /= 2
        }
    };
    d._pvm = function() {
        return a
    };
    d._pvn = function() {
        return a !== undefined
    };
    d._rv = function() {
        return {
            _pvp: a,
            _xb: d._pvj,
            _pvq: d._poz,
            _pvr: d._pou,
            _pvs: d._poq
        }
    };
    d._bg = function(g) {
        a = g._pvp;
        d._pvj = g._xb;
        d._poz = g._pvq;
        d._pou = g._pvr;
        d._poq = g._pvs
    };
    return d
}();
var fds = {
    _byg: 0,
    _nyl: 1,
    _lmj: 2
};
var fcg = function() {
    var r = 3;
    var b = 0;
    var o = 1;
    var l = 2;
    var i = -1;
    var c = -2;
    var q = new Array(5);
    var d = new Array(5);
    var h;
    var p;
    var k = undefined;
    var g = function() {
        if (k === undefined) {
            k = fmd._brg()
        }
        return k
    };
    var j = new Array(5);
    var n = new Array(5);
    var e = function(t, s) {
        var v = t / fvk._poz;
        if (!s) {
            if (j[v] !== undefined) {
                return j[v]
            } else {
                var u = new Uint8Array(t * t * 4);
                j[v] = u;
                return u
            }
        } else {
            if (n[v] !== undefined) {
                return n[v]
            } else {
                var u = new Float32Array(t * t * 4);
                n[v] = u;
                return u
            }
        }
    };
    var m = function(t, s, u, v) {
        if (v !== undefined) {
            this._pnp = v._lpl();
            this._pnr = v._lpl();
            this._cbg = v._lpl();
            this._pns = 0;
            this._pnu = v._lpi() === 1
        } else {
            this._pnp = t;
            this._pnr = s;
            this._cbg = u;
            this._pns = 0;
            this._pnu = true
        }
    };
    m.prototype._dsf = function(s) {
        s._lhi(this._pnp);
        s._lhi(this._pnr);
        s._lhi(this._cbg);
        s._lhh(this._pnu ? 1 : 0)
    };
    m.prototype._pla = function() {
        return {
            _pnp: this._pnp,
            _pnr: this._pnr,
            _cbg: this._cbg,
            _pns: this._pns,
            _pnu: this._pnu
        }
    };
    var a = function(D) {
        var ah = {};
        var ao;
        var Q;
        var R;
        ah._pnw = function() {
            return R
        };
        var U;
        var Y;
        ah._pnx = function() {
            return Y
        };
        var X;
        ah._bjx = function() {
            return X
        };
        var z = false;
        ah._kd = function() {
            return z
        };
        var af;
        var ae = {};
        var T = {};
        var N = false;
        var I;
        var al;
        var ap = 0;
        var C = [];
        var G = false;
        var A = 0;
        ah._pny = function(av) {
            var ar = {
                id: X,
                _jq: z
            };
            if (av === undefined) {
                ar._poa = af;
                ar._pob = ae
            } else {
                var at = {};
                for (var aq = 0; aq < av.length; aq++) {
                    var au = ae[av[aq]._say];
                    at[av[aq]._say] = au._pla()
                }
                if (ae[-1] !== undefined) {
                    at[-1] = ae[-1]._pla()
                }
                ar._pob = at
            }
            return ar
        };
        ah._pod = function(av, az) {
            av._lhi(X);
            av._lhh(z ? 1 : 0);
            var ay = av._loi();
            av._loj(ay + 8);
            var aw = 0,
                aA = 0;
            if (az === undefined) {
                for (var ar = 0; ar < U; ar++) {
                    var au = ar * r;
                    if (af[au + b] !== c) {
                        av._loz(ar);
                        av._loz(af[au + b]);
                        av._lhi(af[au + o]);
                        av._lhh(af[au + l]);
                        aw++
                    }
                }
                for (var at in ae) {
                    av._loz(at);
                    ae[at]._dsf(av);
                    aA++
                }
            } else {
                for (var ax = 0; ax < az.length; ax++) {
                    av._loz(az[ax]._say);
                    ae[az[ax]._say]._dsf(av);
                    aA++
                }
                av._loz(-1);
                ae[-1]._dsf(av);
                aA++
            }
            var aq = av._loi();
            av._loj(ay);
            av._loz(aw);
            av._loz(aA);
            av._loj(aq)
        };
        ah._poe = function(av, ar) {
            if (ar) {
                var at = {};
                for (var aq = 0; aq < av.length; aq++) {
                    var au = aa(av[aq]._say);
                    at[av[aq]._sax] = au;
                    av[aq]._saz(au)
                }
                return at
            } else {
                for (var aq = 0; aq < av.length; aq++) {
                    av[aq]._saz(aa(av[aq]._say))
                }
            }
        };
        var aa = function(ar) {
            var aq = ae[ar];
            if (aq === undefined) {
                if (false) {}
                return 0
            } else {
                return (aq._pnr + 1) * R + aq._pnp + 1
            }
        };
        ah._pog = aa;
        var H = function(ar) {
            var aq = ae[ar];
            if (aq === undefined) {
                if (false) {}
                return 64
            } else {
                return aq._cbg * fvk._pvj
            }
        };
        ah._cbt = H;
        ah._hdl = function(ar) {
            for (var aq = 0; aq < ar.length; aq++) {
                var at = ar[aq]._say;
                if (at !== -1) {
                    if (ae[at] === undefined) {
                        if (false) {}
                    }
                    ae[at]._pns++
                }
            }
        };
        ah._poh = function(ar) {
            for (var aq = 0; aq < ar.length; aq++) {
                var au = ar[aq]._say;
                if (au !== -1) {
                    var at = ae[au];
                    at._pns--;
                    if (at._pns < 1) {
                        C.push(au)
                    }
                }
            }
        };
        var Z = function(ar) {
            for (var aq = 0; aq < ar.length; aq++) {
                if (ae[ar[aq]._say] === undefined) {
                    return false
                }
            }
            return true
        };
        ah._poj = Z;
        ah._hdv = function(ar) {
            for (var aq = 0; aq < ar.length; aq++) {
                if (ae[ar[aq]._say] === undefined) {
                    return false
                }
                if (T[ar[aq]._say] === true) {
                    return false
                }
            }
            return true
        };
        ah._pol = function() {
            for (var aq = 0; aq < U; aq++) {
                var ar = af[(aq * r) + b];
                if (ar !== c && ae[ar]._pns > 0) {
                    return true
                }
            }
            return false
        };
        var W = function(aw) {
            var av = new Array(aw.length);
            for (var ar = 0; ar < aw.length; ar++) {
                var ax = aw[ar]._say;
                var au = aw[ar]._cbg;
                if (ae[ax] === undefined) {
                    av[ar] = aj(ax, au);
                    if (av[ar] === null) {
                        for (var ay = 0; ay < R; ay++) {
                            for (var at = 0; at < R; at++) {
                                var aq = (ay * R + at) * r;
                                if (af[aq + b] !== c && af[aq + l] === 1) {
                                    af[aq + b] = c;
                                    af[aq + l] = 0
                                }
                            }
                        }
                        for (var ax in ae) {
                            if (ae[ax]._pnu) {
                                delete ae[ax]
                            }
                        }
                        return false
                    } else {
                        O(ax, au, av[ar])
                    }
                }
            }
            for (var ar = 0; ar < aw.length; ar++) {
                var ax = aw[ar]._say;
                if (ae[ax]._pnu) {
                    an(ax, aw[ar]._cbg, aw[ar]._rrg, aw[ar]._dcd, av[ar])
                }
            }
            return true
        };
        ah._pon = W;
        var aj = function(aw, au) {
            var av = (au * fvk._pvj / fvk._poz) + 2;
            for (var ax = 0; ax < R; ax++) {
                slotFind: for (var aq = 0; aq < R; aq++) {
                    if (af[((ax * R + aq) * r) + b] === c) {
                        if (aq + av > R) {
                            continue slotFind
                        }
                        if (ax + av > R) {
                            continue slotFind
                        }
                        for (var ar = ax; ar < ax + av; ar++) {
                            for (var at = aq; at < aq + av; at++) {
                                if (af[((ar * R + at) * r) + b] !== c) {
                                    continue slotFind
                                }
                            }
                        }
                        return {
                            _pnp: aq,
                            _pnr: ax
                        }
                    }
                }
            }
            return null
        };
        var O = function(aw, at, av) {
            var au = (at * fvk._pvj / fvk._poz) + 2;
            for (var ax = av._pnr; ax < av._pnr + au; ax++) {
                for (var ar = av._pnp; ar < av._pnp + au; ar++) {
                    var aq = (ax * R + ar) * r;
                    af[aq + b] = aw;
                    af[aq + o] = at;
                    af[aq + l] = 1
                }
            }
            ae[aw] = new m(av._pnp, av._pnr, at)
        };
        var ab = function() {
            var aq;
            if (z) {
                if (p === undefined) {
                    p = ao._dkz(Y, Y, false, false, true, true)
                }
                aq = p
            } else {
                if (h === undefined) {
                    h = ao._dkz(Y, Y, false, false, false, true)
                }
                aq = h
            }
            return aq
        };
        var v = function() {
            if (!g() || A === 0) {
                return
            }
            var aq = ab();
            if (!G) {
                ao._dld(aq)
            }
            aq._fpw(I);
            if (!G) {
                ao._dld(null)
            }
            ao._dlc(al, aq, false, 1, undefined, undefined);
            ao._dld(null);
            A = 0
        };
        var E = function() {
            if (!G) {
                var aq = ab();
                ao._dld(aq);
                aq._fpw(al);
                ao._dij();
                G = true
            }
        };
        var J = function() {
            if (G) {
                ao._dld(null);
                ao._dil();
                G = false
            }
        };
        var ad = function(at, ax, av, au, aw, aq, ar) {
            ao._dif(at * fvk._poz, Y - (ax * fvk._poz) - av, av, av);
            ao.enableScissorTest();
            ao.gl.clearColor(au, aw, aq, ar);
            ao.gl.clear(ao.gl.COLOR_BUFFER_BIT);
            ao._dkq()
        };
        var an = function(au, ar, aw, aq, av) {
            var aB = ar * fvk._pvj;
            var aC = (aB / fvk._poz) + 2;
            var az = aB + (fvk._poz * 2);
            for (var ax = av._pnr; ax < av._pnr + aC; ax++) {
                for (var ay = av._pnp; ay < av._pnp + aC; ay++) {
                    af[((ax * R + ay) * r) + l] = 0
                }
            }
            ae[au]._pnu = false;
            var at = Q._lie(au, ar, z);
            if (at === _gkf) {
                if (aw && aq !== fds._byg) {
                    E();
                    ad(av._pnp, av._pnr, az, 1, 1, 1, 0);
                    J()
                }
                T[au] = true;
                N = true
            } else {
                if (at !== undefined) {
                    var aA = P(at.getData(), ar, ar, z);
                    aA = S(aA, aB, aB, z);
                    ag(av._pnp * fvk._poz, av._pnr * fvk._poz, az, az, false, aA)
                }
            }
        };
        var M = function(aw) {
            var av = ae[aw];
            var at = (av._cbg * fvk._pvj) + (fvk._poz * 2);
            ad(av._pnp, av._pnr, at, 1, 1, 1, 1);
            delete ae[aw];
            var au = (av._cbg * fvk._pvj / fvk._poz) + 2;
            for (var ax = av._pnr; ax < av._pnr + au; ax++) {
                for (var ar = av._pnp; ar < av._pnp + au; ar++) {
                    var aq = (ax * R + ar) * r;
                    af[aq + b] = c;
                    af[aq + l] = 0
                }
            }
            delete T[aw]
        };
        var ag = function(ar, aw, au, av, at, aq) {
            A++;
            al._gxk(ar, aw, au, av, at, aq)
        };
        var P = function(aA, ar, au, aE) {
            if (fvk._pvj === 1) {
                return aA
            }
            var aF = ar * fvk._pvj;
            var at = au * fvk._pvj;
            var aw, aB;
            if (aE) {
                aB = new Float32Array(aA);
                aw = new Float32Array(aF * at * 4)
            } else {
                aB = new Uint8Array(aA);
                aw = new Uint8Array(aF * at * 4)
            }
            for (var aC = 0; aC < at; aC++) {
                for (var aD = 0; aD < aF; aD++) {
                    var ay = aC / (at - 1) * (au - 1);
                    var az = aD / (aF - 1) * (ar - 1);
                    var ax = ((Math.floor(ay) * ar) + Math.floor(az)) * 4;
                    var av = ((aC * aF) + aD) * 4;
                    for (var aq = 0; aq < 4; aq++) {
                        aw[av + aq] = aB[ax + aq]
                    }
                }
            }
            return aw
        };
        var S = function(aM, aq, aJ, ay) {
            var aT = fvk._poz;
            var aG = aq + (aT * 2);
            var aP = aJ + (aT * 2);
            var az, aV;
            if (ay) {
                az = new Float32Array(aM);
                aV = new Float32Array(aG * aP * 4)
            } else {
                az = new Uint8Array(aM);
                aV = new Uint8Array(aG * aP * 4)
            }
            for (var aD = 0; aD < aJ; aD++) {
                for (var aF = 0; aF < aq; aF++) {
                    var ar = (aD * aq) + aF;
                    var aQ = ((aD + aT) * aG) + (aF + aT);
                    for (var aK = 0; aK < 4; aK++) {
                        aV[aQ * 4 + aK] = az[ar * 4 + aK]
                    }
                }
            }
            var au = (aG * aT) + aT;
            var aN = au + ((aJ - 1) * aG);
            var at = au;
            var aS = au + aq - 1;
            for (var aW = 0; aW < aT; aW++) {
                for (var aR = 0; aR < aq; aR++) {
                    var aA = au - ((aW + 1) * aG) + aR;
                    var aw = aN - (aW * aG) + aR;
                    for (var aK = 0; aK < 4; aK++) {
                        aV[aA * 4 + aK] = aV[aw * 4 + aK]
                    }
                    var aL = aN + ((aW + 1) * aG) + aR;
                    var ax = au + (aW * aG) + aR;
                    for (var aK = 0; aK < 4; aK++) {
                        aV[aL * 4 + aK] = aV[ax * 4 + aK]
                    }
                }
                for (var aR = 0; aR < aJ; aR++) {
                    var av = at - (aW + 1) + (aR * aG);
                    var aU = aS - aW + (aR * aG);
                    for (var aK = 0; aK < 4; aK++) {
                        aV[av * 4 + aK] = aV[aU * 4 + aK]
                    }
                    var aE = aS + (aW + 1) + (aR * aG);
                    var aB = at + aW + (aR * aG);
                    for (var aK = 0; aK < 4; aK++) {
                        aV[aE * 4 + aK] = aV[aB * 4 + aK]
                    }
                }
            }
            var aO = au;
            var aI = aO + aJ - (aT + 1);
            var aH = aO + ((aJ - aT) * aG);
            var aC = aH + aJ - (aT + 1);
            for (var aD = 0; aD < aT; aD++) {
                for (var aF = 0; aF < aT; aF++) {
                    for (var aK = 0; aK < 4; aK++) {
                        aV[((aD * aG) + aF) * 4 + aK] = aV[(aC + (aD * aG) + aF) * 4 + aK];
                        aV[(((aD + 1) * aG) - aT + aF) * 4 + aK] = aV[(aH + (aD * aG) + aF) * 4 + aK];
                        aV[(aG * (aP - aT + aD) + aF) * 4 + aK] = aV[(aI + (aD * aG) + aF) * 4 + aK];
                        aV[(aG * (aP - aT + aD + 1) - aT + aF) * 4 + aK] = aV[(aO + (aD * aG) + aF) * 4 + aK]
                    }
                }
            }
            return aV
        };
        ah._qf = function() {
            if (N) {
                var aw = true;
                for (var av in T) {
                    var ar = parseInt(av);
                    var at = Q._lie(ar, ae[ar]._cbg, z);
                    if (at === _gkf) {
                        aw = false
                    } else {
                        if (at !== undefined) {
                            var aq = ae[ar];
                            var az = aq._cbg * fvk._pvj;
                            var au = az + (fvk._poz * 2);
                            var ay = P(at.getData(), aq._cbg, aq._cbg, z);
                            ay = S(ay, az, az, z);
                            ag(aq._pnp * fvk._poz, aq._pnr * fvk._poz, au, au, false, ay);
                            delete T[ar]
                        }
                    }
                }
                if (aw) {
                    N = false
                }
            }
            if (I._gxe() && ap < Date.now() - 1000) {
                I._gxm();
                ap = Date.now()
            }
            if (C.length > 0) {
                for (var ax = 0; ax < C.length; ax++) {
                    var ar = C[ax];
                    if (ae[ar] === undefined || ae[ar]._pns > 0) {
                        continue
                    }
                    E();
                    M(ar)
                }
                J();
                C.length = 0
            }
            v()
        };
        var K = function() {};
        var V = function(aq) {
            console.log("Texture atlas entries for atlas " + aq + ":");
            for (var at in ae) {
                var ar = ae[at];
                console.log(at + " === x " + ar._pnp + ", y " + ar._pnr + ", size " + (ar._cbg * fvk._pvj) + " (source " + ar._cbg + "), referencers " + ar._pns + ", provisional " + ar._pnu)
            }
        };
        ah._poo = V;
        var u = function() {
            al._gxo(true)
        };
        ah._lij = u;
        var am = function() {
            return I._gbs()
        };
        ah._gbs = am;
        var s = function() {
            I._qcs()
        };
        ah._kb = s;
        var B = function() {
            if (z) {
                R = fvk._poq
            } else {
                R = fvk._pou
            }
            U = R * R;
            Y = R * fvk._poz;
            var au = Math.ceil(Math.log(Y) / Math.log(2));
            Y = Math.pow(2, au);
            if (af === undefined) {
                af = new Int32Array(U * r);
                for (var ar = 0; ar < U; ar++) {
                    af[ar * r + b] = c
                }
            }
            for (var av = 0; av < 3; av++) {
                for (var at = 0; at < 3; at++) {
                    var aq = (av * R + at) * r;
                    af[aq + b] = i;
                    af[aq + o] = fvk._poz;
                    af[aq + l] = 0
                }
            }
            ae[-1] = new m(1, 1, fvk._poz);
            ae[-1]._pnu = false
        };
        if (D._bi !== undefined && D._cee !== undefined && D.id !== undefined) {
            ao = D._bi;
            Q = D._cee;
            X = D.id;
            if (D._jq !== undefined) {
                z = D._jq
            }
            if (z && !ao._djc()) {
                throw new Error("2767 ")
            }
            B();
            var t;
            if (z) {
                t = new Float32Array(Y * Y * 4)
            } else {
                t = new Uint32Array(Y * Y)
            }
            var ai = Y * Y;
            if (z) {
                for (var x = 0; x < ai; x++) {
                    t[x * 4 + 0] = 1;
                    t[x * 4 + 1] = 1;
                    t[x * 4 + 2] = 1;
                    t[x * 4 + 3] = 1
                }
            } else {
                for (var x = 0; x < ai; x++) {
                    t[x] = 4294967295
                }
            }
            I = erp(ao, Y, Y, t.buffer, true, true, false, z);
            I._qcr();
            I._ccj();
            if (g()) {
                al = erp(ao, Y, Y, t.buffer, true, true, false, z);
                al._qcr();
                al._ccj()
            } else {
                al = I;
                al._qcr()
            }
        } else {
            if (D._hcw !== undefined) {
                X = D._hcw.id;
                z = D._hcw._jq;
                if (D._hcw._poa !== undefined) {
                    af = D._hcw._poa
                }
                ae = D._hcw._pob;
                B()
            } else {
                if (D._hcx !== undefined) {
                    X = D._hcx._lpl();
                    z = D._hcx._lpi() === 1;
                    B();
                    var y = D._hcx._lpp();
                    var L = D._hcx._lpp();
                    for (var ak = 0; ak < y; y++) {
                        var ak = D._hcx._lpp();
                        af[(ak * r) + b] = D._hcx._lpr();
                        af[(ak * r) + o] = D._hcx._lpl();
                        af[(ak * r) + l] = D._hcx._lpi()
                    }
                    for (var F = 0; F < L; F++) {
                        var ac = D._hcx._lpr();
                        ae[ac] = new m(undefined, undefined, undefined, D._hcx)
                    }
                } else {
                    throw new Error("2768 ")
                }
            }
        }
        D = undefined;
        return ah
    };
    return a
}();
var fow = function() {
    var q = {};
    var a, d;
    var u = 16384;
    var h = u - 1;
    var x = 14;
    var y = u / (Math.PI * 2);
    var g = x - 11;
    var e = 16384;
    var l = e - 1;
    var o = 14;
    q._ssk = o;
    var m = u >> 4;
    var r = u >> 3;
    var s = r + r;
    var t = s + r;
    var v = s + s;
    var j = v + r;
    var k = v + s;
    var b = k + r;
    var c = u;
    d = new Array(u);
    a = new Array(u);
    var i = (Math.PI * 2) / u;
    for (var p = 0; p < u; p++) {
        d[p] = Math.floor(e * Math.sin(p * i));
        a[p] = Math.floor(e * Math.cos(p * i))
    }
    q.sin = function(z) {
        return d[z]
    };
    q.cos = function(z) {
        return a[z]
    };
    return q
}();
var fnh = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec2 _iw;\n\nuniform sampler2D _cs;\nuniform sampler2D _dh;\nuniform vec4 _df;\n\nvec3 _pa(sampler2D _pc, vec3 _pb) {\n\tvec2 _js=vec2(0.5/256.0, 0.5/16.0);\n\tfloat _pd=15.0/16.0;\n\tfloat _pf=floor(_pb.b*14.9999)/16.0;\n\tfloat _ph=(_pb.b*15.0)-(_pf*16.0);\n\tfloat _pj=_pf+(_pb.r*_pd/16.0);\n\tfloat _pk=_pb.g*_pd;\n\tvec3 _pm=texture2D(_pc,_js+vec2(_pj,_pk) ).rgb;\n\tvec3 _po=texture2D(_pc,_js+vec2(_pj+(1.0/16.0),_pk) ).rgb;\n\treturn mix(_pm,_po,_ph);\n}\n\nvoid main(void) {\n\tvec3 _pq=clamp(texture2D(_cs,_iw).rgb,0.0,1.0);\n\tvec3 _ps=_pq*_df.x;\n\t_ps+=_pa(_dh,_pq)*_df.y;\n\tgl_FragColor=vec4(_ps,1.0);\n}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        c.push(elp._eaj);
        c.push(elp._eah);
        return c
    };
    return a
}();
var eqa = function() {
    var a = {
        _cgm: 0,
        _cgo: 1,
        _lhd: 2,
        _lhe: 4
    };
    return a
}();
var ezn = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec2 _iw;\n\nuniform sampler2D _cs;\nuniform sampler2D _cu;\nuniform vec2 _gn;\nuniform vec2 _go;\nuniform float _gp;\nuniform float _gr;\n\nvoid main(void) {\n\tvec2 _mz=_gn/_go;\n\t_mz=vec2(_iw.x*_mz.x, _iw.y*_mz.y+1.0-_mz.y);\n\tvec2 _zi=vec2(1.0,1.0)/_go;\n\tvec2 _zk=_zi*0.5;\n\tvec4 _zl=vec4(0,0,0,0);\n\t_zl+=texture2D(_cs,_mz-_zk*_gp)*8.0;\n\t_zl+=texture2D(_cs,_mz-_zk*_gp+_zi*vec2(-1.0,0.0))*(-1.0);\n\t_zl+=texture2D(_cs,_mz-_zk*_gp+_zi*vec2(1.0,0.0))*(-1.0);\n\t_zl+=texture2D(_cs,_mz-_zk*_gp+_zi*vec2(0.0,-1.0))*(-1.0);\n\t_zl+=texture2D(_cs,_mz-_zk*_gp+_zi*vec2(0.0,1.0))*(-1.0);\n\t_zl/=4.0;\n\tvec4 _zn=vec4(0,0,0,0);\n\t_zn+=texture2D(_cu,_mz+_zk*_gp)*8.0;\n\t_zn+=texture2D(_cu,_mz+_zk*_gp+_zi*vec2(-1.0,0.0))*(-1.0);\n\t_zn+=texture2D(_cu,_mz+_zk*_gp+_zi*vec2(1.0,0.0))*(-1.0);\n\t_zn+=texture2D(_cu,_mz+_zk*_gp+_zi*vec2(0.0,-1.0))*(-1.0);\n\t_zn+=texture2D(_cu,_mz+_zk*_gp+_zi*vec2(0.0,1.0))*(-1.0);\n\t_zn/=4.0;\n\tgl_FragColor=vec4(mix(_zl.rgb, _zn.rgb, _gr),1.0);\n}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        c.push(elp._dzy);
        c.push(elp._edp);
        c.push(elp._edr);
        c.push(elp._eds);
        c.push(elp._edt);
        return c
    };
    return a
}();
var eva = {
    _gae: 0,
    _gaf: 1,
    _gag: 2,
    _lt: 3,
    _lv: 4,
    _gah: 5,
    _ml: 6,
    _gaj: 7,
    _gak: 8
};
var fdh = function() {
    var b = {};
    var a = new Array(eva._gak);
    b._bg = function(d) {
        for (var c = 0; c < a.length; c++) {
            a[c] = {
                data: new Array(),
                size: 0,
                _ji: 0
            }
        }
    };
    b._jl = function() {};
    b._pqe = function() {
        for (var c = 0; c < a.length; c++) {
            a[c]._ji = 0
        }
    };
    b._jn = function(c) {
        a[c]._ji = 0
    };
    b._jp = function(e, c) {
        var d = a[e];
        if (d._ji < d.size) {
            return d.data[d._ji++]
        }
        d.data[d.size++] = c();
        return d.data[d._ji++]
    };
    return b
}();
var eqs = {
    _mgf: 0,
    _nv: 1,
    _mgg: 2,
    _mgh: 3,
    _mbr: 4,
    _mgj: 5,
    _nq: 6,
    _mgk: 7,
    _ml: 8,
    _mgm: 9,
    _mgn: 10,
    _dqj: 11,
    _mx: 12,
    _my: 13,
    _ob: 14,
    _od: 15,
    _drh: 16
};
var fdd = function() {
    var a = function(c) {
        this._qhf = false;
        this._qhg = true;
        this._qhh = true;
        this._eja = "";
        this.flags = new Uint32Array(((fct._drq / 32) | 0) + 1);
        this._ejo = new Array(fct._drq);
        this._yh();
        if (c !== undefined) {
            for (var b = 0; b < c.length; b++) {
                this.enable(c[b])
            }
        }
    };
    a.prototype._qhj = function(c) {
        for (var b = 0; b < this._ejo.length; b++) {
            c._ejo[b] = this._ejo[b]
        }
    };
    a.prototype._qhl = function(c) {
        var e = this._bga();
        var d = c._bga();
        for (var b = 0; b < e.length; b++) {
            if (e[b] !== d[b]) {
                return false
            }
        }
        return true
    };
    if (false) {}
    a.prototype._qho = function() {
        for (var b = 0; b < this.flags.length; b++) {
            this.flags[b] = 0
        }
        for (var b = 0; b < this._ejo.length; b++) {
            var c = (b / 32) | 0;
            var d = b - (c * 32);
            if (this._xv(b)) {
                this.flags[c] |= (1 << d)
            }
        }
    };
    a.prototype.toString = function() {
        if (this._qhg) {
            this._eja = this._ejo.join("");
            this._qhg = false
        }
        return this._eja
    };
    a.prototype._bga = function() {
        if (this._qhh) {
            this._qho();
            this._qhh = false
        }
        return this.flags
    };
    a.prototype._qhp = function(d) {
        for (var b = 0; b < d.length; b++) {
            var c = d.charAt(b);
            if (c === "1") {
                this._ejo[b] = 1
            } else {
                this._ejo[b] = 0
            }
        }
        return true
    };
    a.prototype._qhq = function(d, c) {
        var e = new a();
        for (var b = 0; b < this._ejo.length; b++) {
            e._ejo[b] = this._ejo[b]
        }
        if (d !== undefined) {
            for (var b = 0; b < d.length; b++) {
                e.enable(d[b])
            }
        }
        if (c === true) {
            e._qhf = true
        }
        return e
    };
    a.prototype.enable = function(b) {
        if (false) {}
        this._ejo[b] = 1;
        this._qhg = true;
        this._qhh = true
    };
    a.prototype.disable = function(b) {
        if (false) {}
        this._ejo[b] = 0;
        this._qhg = true;
        this._qhh = true
    };
    a.prototype._xv = function(b) {
        if (this._ejo[b] === 1) {
            return true
        }
        return false
    };
    a.prototype._qhr = function(b) {
        if (this._ejo[b] === 0) {
            return true
        }
        return false
    };
    a.prototype._yh = function() {
        for (var b = 0; b < this._ejo.length; b++) {
            this.disable(b)
        }
    };
    return function(b) {
        return new a(b)
    }
}();
var eoc = function() {
    var a = {};
    a._qk = 0;
    a._evd = 1;
    a._qn = 2;
    a._evf = 3;
    a._evg = function(b, c) {
        switch (c) {
            case this._qk:
                b.enable(fct._drd);
                break;
            case this._evd:
                b.enable(fct._drf);
                break;
            case this._qn:
            case this._evf:
                b.enable(fct._drg);
                break;
            default:
                b.enable(fct._drf);
                break
        }
    };
    return a
}();
var fos = function() {
    var a = {
        _ctr: 0,
        _cts: 1,
        _ctt: 2,
        _ctu: 0,
        _ctw: 1
    };
    return a
}();
var fpz = function() {
    var d = {
        _hw: {
            type: _qkj._dcl,
            _ddw: _qkj._dcs
        },
        _lah: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lai: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _laj: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lal: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lam: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lan: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lap: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _laq: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _las: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lat: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lav: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _law: {
            type: _qkj._dcf,
            _ddw: _qkj._dcm
        },
        _lax: {
            type: _qkj._dcf,
            _ddw: _qkj._dcm
        },
        _laz: {
            type: _qkj._dcf,
            _ddw: fos._ctr
        },
        _lba: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lbc: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lbe: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lbf: {
            type: _qkj._dcf,
            _ddw: _qkj._dcm
        },
        _lbh: {
            type: _qkj._dcf,
            _ddw: _qkj._dcm
        },
        _lbi: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _lbj: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _lbl: {
            type: _qkj._dcl,
            _ddw: _qkj._dcw
        },
        _lbm: {
            type: _qkj._dcl,
            _ddw: _qkj._dcu
        },
        _lbo: {
            type: _qkj._dcf,
            _ddw: _qkj._dcm
        },
        _lbp: {
            type: _qkj._dcf,
            _ddw: _qkj._dcm
        },
        _ww: {
            type: _qkj._dcj,
            _ddw: -1
        },
        _lbr: {
            type: _qkj._dcl,
            _ddw: _qkj._dcw
        },
        _lbs: {
            type: _qkj._dcl,
            _ddw: _qkj._dcw
        },
        _cyg: {
            type: _qkj._dcl,
            _ddw: _qkj.BOOLEAN_FALSE
        },
        _lbu: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lbw: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lby: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lbz: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lca: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lcc: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lcd: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lcf: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lch: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lci: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lcj: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lck: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lcm: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lco: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lcp: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lcq: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lcr: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _lcs: {
            type: _qkj._dcf,
            _ddw: _qkj._dcm
        },
        _lcu: {
            type: _qkj._dcf,
            _ddw: _qkj._dcm
        },
        _lcv: {
            type: _qkj._dcf,
            _ddw: _qkj._dcm
        },
        _lcx: {
            type: _qkj._dcf,
            _ddw: _qkj._dcm
        },
        _lcy: {
            type: _qkj._dcf,
            _ddw: _qkj._dcm
        },
        _lcz: {
            type: _qkj._dcf,
            _ddw: 0
        }
    };
    var c = {
        _ldb: {
            type: _qkj._dcj,
            _ddw: -1,
            _dea: undefined
        }
    };
    var a = undefined;
    var b = function(e) {
        if (a === undefined) {
            _qkj._ddy(c);
            a = _qkj._dds(d, c)
        }
        if (e._hw !== undefined) {
            c._ldb._dei = 0;
            if (e._ldb !== undefined) {
                c._ldb._dei = e._ldb.length
            }
            this._ldc = _qkj._deg(a, c);
            _qkj._ddu(d, this._ldc);
            _qkj._dej(c, this._ldc);
            this._bg(e)
        } else {
            if (e._hqh !== undefined) {
                this._ldc = _qkj._ddh(e._hqh.byteLength);
                _qkj._ddb.set(e._hqh, this._ldc._ddl)
            } else {
                throw new Error("2590 " + e._hw)
            }
        }
    };
    b.prototype.set = function(g, e) {
        g._dcy[this._ldc._ddl + g._ddl] = e
    };
    b.prototype.get = function(e) {
        return e._dcy[this._ldc._ddl + e._ddl]
    };
    b.prototype._bg = function(g) {
        this.set(d._hw, g._hw);
        this.set(d._lah, g._lah);
        this.set(d._lai, g._lai);
        this.set(d._laj, g._laj);
        this.set(d._lal, g._lal);
        this.set(d._lam, g._lam);
        this.set(d._lan, g._lan);
        this.set(d._lap, g._lap);
        this.set(d._laq, g._laq);
        this.set(d._las, g._las);
        this.set(d._lat, g._lat);
        this.set(d._lav, g._lav);
        if (g._law !== undefined) {
            this.set(d._law, g._law)
        } else {
            this.set(d._law, d._law._ddw)
        }
        if (g._lax !== undefined) {
            this.set(d._lax, g._lax / 50)
        } else {
            this.set(d._lax, d._lax._ddw / 50)
        }
        this.set(d._laz, g._laz);
        this.set(d._lba, g._lba);
        this.set(d._lbc, g._lbc);
        this.set(d._lbe, g._lbe);
        if (g._lbf !== undefined) {
            this.set(d._lbf, g._lbf)
        } else {
            this.set(d._lbf, d._lbf._ddw)
        }
        if (g._lbh !== undefined) {
            this.set(d._lbh, g._lbh)
        } else {
            this.set(d._lbh, d._lbh._ddw)
        }
        this.set(d._lbi, g._lbi);
        this.set(d._lbj, g._lbj);
        this.set(d._lbl, g._lbl ? 1 : 0);
        if (g._lbm !== undefined) {
            this.set(d._lbm, g._lbm)
        } else {
            this.set(d._lbm, d._lbm._ddw)
        }
        if (g._lbo !== undefined) {
            this.set(d._lbo, g._lbo)
        } else {
            this.set(d._lbo, d._lbo._ddw)
        }
        if (g._lbp !== undefined) {
            this.set(d._lbp, g._lbp)
        } else {
            this.set(d._lbp, d._lbp._ddw)
        }
        this.set(d._ww, g._ww);
        this.set(d._lbr, g._lbr ? 1 : 0);
        this.set(d._lbs, g._lbs ? 1 : 0);
        this.set(d._cyg, g._cyg ? 1 : 0);
        this.set(d._lbu, g._lbu);
        this.set(d._lbw, g._lbw);
        this.set(d._lby, g._lby);
        this.set(d._lbz, g._lbz);
        this.set(d._lca, g._lca);
        if (g._ldb !== undefined) {
            var h = _qkj._ddb[this._ldc._ddl + c._ldb._deb];
            for (var e = 0; e < g._ldb.length; e++) {
                c._ldb._dcy[this._ldc._ddl + h + e] = g._ldb[e]
            }
        }
        this.set(d._lcc, (g._lbi >> 24) & 255);
        this.set(d._lcd, (g._lbj >> 24) & 255);
        this.set(d._lcf, this.get(d._lcd) - this.get(d._lcc));
        this.set(d._lch, (g._lbi >> 16) & 255);
        this.set(d._lci, (g._lbj >> 16) & 255);
        this.set(d._lcj, this.get(d._lci) - this.get(d._lch));
        this.set(d._lck, (g._lbi >> 8) & 255);
        this.set(d._lcm, (g._lbj >> 8) & 255);
        this.set(d._lco, this.get(d._lcm) - this.get(d._lck));
        this.set(d._lcp, (g._lbi >> 0) & 255);
        this.set(d._lcq, (g._lbj >> 0) & 255);
        this.set(d._lcr, this.get(d._lcq) - this.get(d._lcp));
        if (g._lbm !== undefined) {
            if (g._lbm === g._lbi && g._lbm === g._lbj) {
                this.set(d._lbm, d._lbm._ddw)
            } else {
                this.set(d._lcs, ((((g._lbm >> 24) & 255) - (this.get(d._lcc) + this.get(d._lcf) / 2)) / g._lbo) * 50);
                this.set(d._lcu, ((((g._lbm >> 16) & 255) - (this.get(d._lch) + this.get(d._lcj) / 2)) / g._lbo) * 50);
                this.set(d._lcv, ((((g._lbm >> 8) & 255) - (this.get(d._lck) + this.get(d._lco) / 2)) / g._lbo) * 50);
                this.set(d._lcx, ((((g._lbm >> 0) & 255) - (this.get(d._lcp) + this.get(d._lcr) / 2)) / g._lbp) * 50)
            }
        }
        if (g._law !== undefined) {
            this.set(d._lcy, ((g._law - (g._lat + (g._lav - g._lat) / 2)) / g._lax) * 50)
        } else {
            this.set(d._lcy, d._lcy._ddw)
        }
        if (g._lbf !== undefined) {
            this.set(d._lcz, ((g._lbf - (g._lbc + (g._lbe - g._lbc) / 2)) / g._lbh) * 50)
        } else {
            this.set(d._lcz, d._lcz._ddw)
        }
    };
    b.prototype._rv = function() {
        return new Uint32Array(_qkj._dcy.slice(this._ldc._ddl * 4, this._ldc._ddl * 4 + this._ldc._ddj))
    };
    b.prototype._ih = function() {
        return this.get(d._hw)
    };
    b.prototype._ldd = function() {
        return this.get(d._lah)
    };
    b.prototype._lde = function() {
        return this.get(d._lai)
    };
    b.prototype._ldg = function() {
        return this.get(d._laj)
    };
    b.prototype._ldi = function() {
        return this.get(d._lal)
    };
    b.prototype._ldj = function() {
        return this.get(d._lam) + Math.random() * (this.get(d._lan) - this.get(d._lam))
    };
    b.prototype._ldk = function() {
        return this.get(d._lap)
    };
    b.prototype._ldm = function() {
        return this.get(d._laq) + Math.random() * (this.get(d._las) - this.get(d._laq))
    };
    b.prototype._ldo = function() {
        return this.get(d._lat) + Math.random() * (this.get(d._lav) - this.get(d._lat))
    };
    b.prototype._ldq = function() {
        return this.get(d._law)
    };
    b.prototype._lds = function() {
        return this.get(d._lax)
    };
    b.prototype._ldt = function() {
        return this.get(d._laz)
    };
    b.prototype._ldv = function() {
        return this.get(d._lba)
    };
    b.prototype._ldw = function() {
        return this.get(d._lbc) + Math.random() * (this.get(d._lbe) - this.get(d._lbc))
    };
    b.prototype._ldy = function() {
        return this.get(d._lbf)
    };
    b.prototype._lea = function() {
        return this.get(d._lbh)
    };
    b.prototype._leb = function() {
        return this.get(d._lbc)
    };
    b.prototype._led = function() {
        return this.get(d._lbe)
    };
    b.prototype._lef = function() {
        return this.get(d._lbl) === 1
    };
    b.prototype._wr = function() {
        return this.get(d._ww)
    };
    b.prototype._cyp = function() {
        return this.get(d._cyg) === 1
    };
    b.prototype._leh = function() {
        return this.get(d._lbo)
    };
    b.prototype._lei = function() {
        return this.get(d._lbp)
    };
    b.prototype._lej = function() {
        return this.get(d._lbu) + Math.random() * (this.get(d._lbw) - this.get(d._lbu))
    };
    b.prototype._lek = function() {
        var e = this.get(d._lby);
        var h = this.get(d._lbz);
        if (e === h) {
            return e
        } else {
            var g = this.get(d._lca);
            if (g === 0) {
                return e + (Math.random() * (h - e))
            } else {
                return e + (Math.floor(Math.random() * (g + 1)) * ((h - e) / g))
            }
        }
    };
    b.prototype._lem = function() {
        return _qkj._ddb[this._ldc._ddl + c._ldb._ded]
    };
    b.prototype._lep = function(e) {
        return c._ldb._dcy[_qkj._ddb[this._ldc._ddl + c._ldb._deb] + this._ldc._ddl + e]
    };
    b.prototype._ler = function() {
        if (this.get(d._lbl)) {
            var e = Math.random();
            return ((this.get(d._lcc) + Math.floor(e * this.get(d._lcf))) << 24) | ((this.get(d._lch) + Math.floor(e * this.get(d._lcj))) << 16) | ((this.get(d._lck) + Math.floor(e * this.get(d._lco))) << 8) | ((this.get(d._lcp) + Math.floor(e * this.get(d._lcr))) << 0)
        } else {
            return ((this.get(d._lcc) + Math.floor(Math.random() * this.get(d._lcf))) << 24) | ((this.get(d._lch) + Math.floor(Math.random() * this.get(d._lcj))) << 16) | ((this.get(d._lck) + Math.floor(Math.random() * this.get(d._lco))) << 8) | ((this.get(d._lcp) + Math.floor(Math.random() * this.get(d._lcr))) << 0)
        }
    };
    b.prototype._les = function() {
        return this.get(d._lcs)
    };
    b.prototype._leu = function() {
        return this.get(d._lcu)
    };
    b.prototype._lev = function() {
        return this.get(d._lcv)
    };
    b.prototype._lew = function() {
        return this.get(d._lcx)
    };
    b.prototype._lex = function() {
        return this.get(d._lcy)
    };
    b.prototype._lez = function() {
        return this.get(d._lcz)
    };
    return function(e) {
        return new b(e)
    }
}();
var eqq = function() {
    var b = false;
    var a = function(c) {
        this._bi;
        this._ejo;
        this._nkl;
        this.vertexShader;
        this._nkm;
        this.fragmentShader;
        this._nko;
        this._ewz = 0;
        this._nix = 0;
        this._niz = 0;
        this._ejm;
        this._nja = new Array(0);
        this._ccr = undefined;
        this._njb = new Array(0);
        this._njd = -1;
        if (false) {}
        if (c._ejm !== undefined && c._bi !== undefined && c._ln !== undefined && c._lo !== undefined && c._ejo !== undefined) {
            this._bg(c)
        } else {
            throw new Error("2670 ")
        }
    };
    a.prototype._bjx = function() {
        return this._ejm
    };
    a.prototype._njk = function() {
        return this._ejo
    };
    a.prototype._njm = function() {
        return this._nko
    };
    a.prototype._njn = function() {
        return this._nkl
    };
    a.prototype._njp = function() {
        return this._nkm
    };
    a.prototype._njr = function() {
        this._ewz = Date.now()
    };
    a.prototype._njs = function(c) {
        this._ewz = c
    };
    a.prototype._nju = function() {
        return this._ewz
    };
    a.prototype._njw = function() {
        this._nix = 0;
        this._niz = 0
    };
    a.prototype._njy = function() {
        return this._nix
    };
    a.prototype._nka = function() {
        this._nix++
    };
    a.prototype._nkb = function() {
        return this._niz
    };
    a.prototype._nkc = function() {
        this._niz++
    };
    a.prototype._nke = function(c) {
        if (this._nja[c] === undefined) {
            return undefined
        } else {
            return this._nja[c].uniformLocation
        }
    };
    a.prototype._nkf = function() {
        return this._njb
    };
    a.prototype._nkh = function(c) {
        return this._njb[c]
    };
    a.prototype._nkj = function() {
        return this._njd
    };
    a.prototype._bg = function(r) {
        this._ejm = r._ejm;
        this._bi = r._bi;
        var k = r._ln;
        var j = r._lo;
        this._ejo = r._ejo;
        var p = this._bi.gl;
        var o = p.createShader(p.VERTEX_SHADER);
        var i = k._om(this._ejo);
        p.shaderSource(o, i);
        p.compileShader(o);
        if (false) {}
        if (false) {}
        var h = p.createShader(p.FRAGMENT_SHADER);
        var g = j._om(this._ejo);
        p.shaderSource(h, g);
        p.compileShader(h);
        if (false) {}
        if (false) {}
        this._nko = p.createProgram();
        p.attachShader(this._nko, o);
        p.attachShader(this._nko, h);
        p.linkProgram(this._nko);
        if (false) {}
        p.deleteShader(o);
        p.deleteShader(h);
        var e = k._oq(this._ejo);
        for (var n = 0; n < e.length; n++) {
            var l = e[n];
            if (!l._edz) {
                var m = p.getUniformLocation(this._nko, l.name);
                if (m === undefined) {
                    if (false) {}
                    throw new Error("2674 " + l.name + "2674 " + k._oi())
                }
                this._nja[l.id] = {
                    uniformLocation: m,
                    _nkq: l.type,
                    _nks: this._nkw(l),
                    _nku: this._nkx(l),
                    _gej: l.type !== undefined ? l.type._ngf() : undefined
                }
            } else {
                var c = p.getAttribLocation(this._nko, l.name);
                if (c === -1) {
                    if (false) {}
                    throw new Error("2675 " + l.name + "2675 " + k._oi())
                }
                this._njb[l.id] = c;
                if (c > this._njd) {
                    this._njd = c
                }
            }
        }
        var q = j._oq(this._ejo);
        for (var d = 0; d < q.length; d++) {
            var l = q[d];
            if (l === undefined) {
                if (false) {}
                throw new Error("2676 " + d + "2676 " + j._oi())
            }
            if (!l._edz) {
                var m = p.getUniformLocation(this._nko, l.name);
                if (m === undefined) {
                    if (false) {}
                    throw new Error("2677 " + l.name + "2677 " + j._oi())
                }
                this._nja[l.id] = {
                    uniformLocation: m,
                    _nkq: l.type,
                    _nks: this._nkw(l),
                    _nku: this._nkx(l),
                    _gej: l.type !== undefined ? l.type._ngf() : undefined
                };
                if (m === null) {
                    if (false) {}
                }
            } else {
                if (false) {}
                throw new Error("2678 " + l.name + "2678 " + j._oi())
            }
        }
    };
    a.prototype._nkw = function(c) {
        if (c.type === fnf._nge || c.type === fnf._ngk) {
            return this._bi.gl.uniformMatrix3fv
        }
        if (c.type === fnf._ngm || c.type === fnf._ngn) {
            return this._bi.gl.uniformMatrix4fv
        }
        if (c.type === fnf._ngo) {
            return this._bi.gl.uniform1f
        }
        if (c.type === fnf._ngq) {
            return this._bi.gl.uniform2fv
        }
        if (c.type === fnf._ngr || c.type === fnf._ngx) {
            return this._bi.gl.uniform3fv
        }
        if (c.type === fnf._ngt || c.type === fnf._ngv) {
            return this._bi.gl.uniform4fv
        }
        if (c.type === fnf._ngy) {
            return this._bi.gl.uniform1i
        }
        if (c.type === fnf._ngz) {
            return this._bi.gl.uniform1iv
        }
    };
    a.prototype._nkx = function(c) {
        if (c.type === fnf._nge || c.type === fnf._ngm) {
            return true
        }
        if (c.type === fnf._ngk || c.type === fnf._ngn) {
            return true
        } else {
            return false
        }
    };
    a.prototype._nky = function(c, e) {
        var d = this._nja[c.id];
        if (d === undefined || d.uniformLocation === null) {
            if (false) {}
            return
        }
        if (d._nkq._ngj(d._gej, e)) {
            return
        }
        if (d._nku) {
            d._nks.call(this._bi.gl, d.uniformLocation, false, e)
        } else {
            d._nks.call(this._bi.gl, d.uniformLocation, e)
        }
        this._bi._dlh()
    };
    a.prototype._nla = function(c, e) {
        var d = this._nja[c.id];
        if (d === undefined || d.uniformLocation === null) {
            if (false) {}
            return
        }
        d._nkq._ngh(d._gej, e);
        if (d._nku) {
            d._nks.call(this._bi.gl, d.uniformLocation, false, e)
        } else {
            d._nks.call(this._bi.gl, d.uniformLocation, e)
        }
        this._bi._dlh()
    };
    return function(c) {
        return new a(c)
    }
}();
var fgm = function() {
    var a = {};
    a._ske = function(c) {
        var b = "";
        b += "uniform vec4 _cj;\n";
        b += "uniform vec3 _ck;\n";
        b += "uniform vec3 _cm;\n";
        b += "uniform vec3 _cn;\n";
        b += "uniform vec4 _co;\n";
        return b
    };
    a._skf = function(c) {
        var b = "";
        b += "varying vec3 _zt;\n";
        b += "varying vec3 _zv;\n";
        return b
    };
    a._skg = function(c) {
        var b = "\n";
        b += "float _zx(float _zz) {\n";
        b += "\treturn 1.0 + (_zz * _zz);\n";
        b += "}\n";
        b += "\n";
        b += "float _bab(float _zz, vec4 _bac) {\n";
        b += "\tfloat _bad = inversesqrt(_bac.z - _bac.w * _zz);\n";
        b += "\treturn _bac.y * (_bad * _bad * _bad);\n";
        b += "}\n";
        b += "\n";
        b += "vec3 _bah(float _baf, vec3 _bai) {\n";
        b += "\treturn vec3(exp(-_bai * _baf).x);\n";
        b += "}\n";
        b += "\n";
        b += "vec3 _bak(vec3 _bal, vec3 _ban, vec3 _bao, vec3 _bap, vec3 _baq, vec3 _bas, vec4 _bau) {\n";
        b += "\tfloat _zz=dot(_ban, _bao);\n";
        b += "\tfloat _bav=_zx(_zz);\n";
        b += "\tfloat _bax=_bab(_zz, _bau);\n";
        b += "\t//Not using _bav will make that scattering look the same in all directions\n";
        b += "\tvec3 _baz=_bap * (1.0 - _bal.xyz) * (/*_baq * _bav + _bas **/ _bax);\n";
        b += "\treturn _baz;\n";
        b += "}\n";
        b += "\n";
        b += "void ComputeInOutScattering(vec3 _io, float _yb, vec3 _bba, out vec3 _bbb, out vec3 _baz) {\n";
        b += "\tvec3 _bbd=normalize(_io);\n";
        b += "\t\n";
        b += "\t_bbb=_bah(_yb, _cn);\n";
        b += "\t_baz=_bak(_bbb, _bbd, _bba, _cj.xyz, _ck, _cm, _co);\n";
        b += "}\n\n";
        return b
    };
    a._ski = function(c) {
        var b = "\n";
        b += "vec3 _bbf(vec3 _ik, vec3 _iq, vec3 _baz) {\n";
        b += "\treturn vec3(_ik*_iq+_baz);\n";
        b += "}\n\n";
        return b
    };
    return a
}();
var elr = function() {
    var b = {
        _ssm: 400,
        _ssn: 400,
        _sso: 400,
        _ssp: 56,
        _ssr: 32,
        _sss: 10,
        _sst: evs._eii(),
        _ssu: new Float32Array(4),
        _ssw: 8,
        _ssy: new Float32Array([0, 0, 1, 1, 0, 0, 0, 0]),
        _bvb: 0,
        _npj: 1,
        _sta: 2,
        _stc: 0,
        _std: 1,
        _ste: 2,
        _stg: 0,
        _sti: 1,
        _stk: 2,
        _stm: 3
    };
    b._sto = new Float32Array(12);
    b._sto[0] = 1;
    b._sto[4] = 1;
    b._sto[8] = 1;
    b._rz = new Float32Array(b._ssm * 12);
    for (var a = 0; a < b._ssm; a++) {
        b._rz[a * 12] = 1;
        b._rz[a * 12 + 4] = 1;
        b._rz[a * 12 + 8] = 1
    }
    b._kuy = new Float32Array(b._ssn * 4);
    b._kvc = new Float32Array(b._sso * b._ssw);
    for (var a = 0; a < b._sso; a++) {
        b._kvc[a * b._ssw + 2] = 1;
        b._kvc[a * b._ssw + 3] = 1
    }
    b._sd = new Uint8Array(b._ssm);
    b._stq = new Uint8Array(b._ssn);
    b._stt = new Uint8Array(b._sso);
    return b
}();
var fab = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(d) {
        var b = "";
        b += "precision mediump float;\n";
        b += "attribute vec3 _gx;\n";
        if (d._xv(fct._dqv)) {
            b += "attribute vec4 _ha;\n"
        }
        if (d._xv(fct._nv) || (!d._xv(fct._od) && !d._xv(fct._dqw) && (d._xv(fct._dpn) || d._xv(fct._dpp) || d._xv(fct._dql)))) {
            b += "attribute vec2 _gz;\n"
        }
        if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && d._xv(fct._dpp) && d._xv(fct._dpr)) {
            b += "attribute float _hz;\n"
        }
        if (d._xv(fct._dpw)) {
            b += "attribute vec2 _hh;\n";
            b += "attribute vec4 _hi;\n";
            b += "attribute vec4 _hy;\n"
        }
        if (d._xv(fct._dpx) || d._xv(fct._dqn)) {
            b += "attribute vec4 _hc;\n"
        }
        if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv)) {
            b += "uniform vec3 _ez;\n"
        }
        b += "uniform mat4 _f;\n";
        b += "uniform mat4 _d;\n";
        b += "uniform mat4 _b;\n";
        if (d._xv(fct._nv) || (!d._xv(fct._od) && !d._xv(fct._dqw) && (d._xv(fct._dpn) || d._xv(fct._dpp) || d._xv(fct._dql)))) {
            b += "uniform mat3 _h;\n"
        }
        if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv)) {
            if (d._xv(fct._drh) || d._xv(fct._dpn)) {
                b += "uniform vec3 _n;\n"
            }
            if (d._xv(fct._dpn) && !d._xv(fct._dql)) {
                b += "uniform vec3 _m;\n";
                b += "uniform vec3 _o;\n";
                b += "uniform vec3 _p;\n"
            }
        }
        if (d._xv(fct._dqv)) {
            b += "uniform vec4 _fa;\n"
        }
        if (d._xv(fct._dpw)) {
            b += "uniform float _ba;\n"
        }
        if (d._xv(fct._dqn)) {
            b += "uniform vec4 _bb[" + 3 * elr._ssp + "];\n";
            if (d._xv(fct._dqv)) {
                b += "uniform vec4 _bc[" + elr._ssr + "];\n"
            }
        }
        if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && d._xv(fct._dpz)) {
            b += "uniform mat4 _bh;\n";
            b += "const mat4 _vr=mat4(0.5,0.0,0.0,0.0,0.0,0.5,0.0,0.0,0.0,0.0,0.5,0.0,0.5,0.5,0.5,1.0);\n"
        }
        if (d._xv(fct._dqq)) {
            b += "uniform float _ef;\n"
        }
        if (d._xv(fct._drh)) {
            b += fgm._ske(d)
        }
        if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && (d._xv(fct._dps) || d._xv(fct._dqh))) {
            b += "varying vec4 _lc;\n"
        }
        if (d._xv(fct._dqv)) {
            b += "varying vec4 _jg;\n"
        }
        var c = false;
        if (d._xv(fct._dpw)) {
            b += "varying vec4 _le;\n";
            b += "varying vec4 _nu;\n";
            if (d._xv(fct._dpx)) {
                c = true
            }
        }
        if (d._xv(fct._nv)) {
            b += "varying vec4 _lg;\n"
        } else {
            if (!d._xv(fct._od) && !d._xv(fct._dqw) && (d._xv(fct._dpp) || d._xv(fct._dql))) {
                b += "varying vec3 _lg;\n"
            }
        }
        var g = false;
        if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && d._xv(fct._dpp) && d._xv(fct._dpr)) {
            g = true
        }
        var e = false;
        if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && d._xv(fct._dpz)) {
            b += "varying vec4 _li;\n";
            e = true
        }
        if (c || g || e) {
            b += "varying vec3 _lj;\n"
        }
        if (d._xv(fct._drh)) {
            b += fgm._skf(d)
        }
        if (d._xv(fct._drh)) {
            b += fgm._skg(d)
        }
        b += "void main(void) {\n";
        if (d._xv(fct._dqn)) {
            b += "int _vt=int(_hc.y*3.0);\n";
            b += "mat4 _vu=mat4(";
            b += "vec4(_bb[_vt].xyz,0.0),";
            b += "vec4(_bb[_vt].w,_bb[_vt+1].xy,0.0),";
            b += "vec4(_bb[_vt+1].zw,_bb[_vt+2].x,0.0),";
            b += "vec4(_bb[_vt+2].yzw,1.0));\n";
            if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && (d._xv(fct._dps) || d._xv(fct._dqh))) {
                b += "vec4 _vw=_f*_vu*vec4(_gx,1.0);\n";
                if (d._xv(fct._dqq)) {
                    b += "_vw.y=clamp(_vw.y,_ef,999999.99);\n"
                }
                b += "_lc=_vw;\n";
                b += "gl_Position=_b*_d*_vw;\n";
                if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && d._xv(fct._dpz)) {
                    b += "_li=_vr*_bh*_vw;\n"
                }
            } else {
                b += "vec4 _vw=_f*_vu*vec4(_gx,1.0);\n";
                if (d._xv(fct._dqq)) {
                    b += "_vw.y=clamp(_vw.y,_ef,999999.99);\n"
                }
                b += "gl_Position=_b*_d*_vw;\n";
                if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && d._xv(fct._dpz)) {
                    b += "_li=_vr*_bh*_vw;\n"
                }
            }
        } else {
            if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && (d._xv(fct._dps) || d._xv(fct._dqh))) {
                b += "vec4 _vw=_f*vec4(_gx,1.0);\n";
                if (d._xv(fct._dqq)) {
                    b += "_vw.y=clamp(_vw.y,_ef,999999.99);\n"
                }
                b += "_lc=_vw;\n";
                b += "gl_Position=_b*_d*_vw;\n";
                if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && d._xv(fct._dpz)) {
                    b += "_li=_vr*_bh*_vw;\n"
                }
            } else {
                b += "vec4 _vw=_f*vec4(_gx,1.0);\n";
                if (d._xv(fct._dqq)) {
                    b += "_vw.y=clamp(_vw.y,_ef,999999.99);\n"
                }
                b += "gl_Position=_b*_d*_vw;\n";
                if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && d._xv(fct._dpz)) {
                    b += "_li=_vr*_bh*_vw;\n"
                }
            }
        }
        if (d._xv(fct._dqv)) {
            b += "_jg=_ha;\n";
            if (d._xv(fct._dqn)) {
                b += "_jg.a+=_bc[int(_hc.z)].a;\n"
            }
            b += "_jg+=_fa;\n"
        }
        if (d._xv(fct._nv) || (!d._xv(fct._od) && !d._xv(fct._dqw) && (d._xv(fct._dpp) || d._xv(fct._dpn) || d._xv(fct._dql)))) {
            b += "vec2 _vy=vec2(_gz.x,_gz.y)/16384.0-2.0;\n";
            b += "float _wa=dot(_vy,_vy);\n";
            b += "float _wc=sqrt(1.0-_wa/4.0);\n";
            b += "vec3 _we=vec3(_vy.xy*_wc,1.0-_wa/2.0);\n"
        }
        if (d._xv(fct._nv)) {
            if (d._xv(fct._dqn)) {
                b += "_lg.xyz=_h*mat3(_vu)*_we;\n"
            } else {
                b += "_lg.xyz=_h*_we;\n"
            }
        } else {
            if (!d._xv(fct._od) && !d._xv(fct._dqw)) {
                if (d._xv(fct._dpp) || d._xv(fct._dql)) {
                    if (d._xv(fct._dqn)) {
                        b += "_lg.xyz=_h*mat3(_vu)*_we;\n"
                    } else {
                        b += "_lg.xyz=_h*_we;\n"
                    }
                } else {
                    if (d._xv(fct._dpn)) {
                        if (d._xv(fct._dqn)) {
                            b += "vec3 _wf=_h*mat3(_vu)*_we;\n"
                        } else {
                            b += "vec3 _wf=_h*_we;\n"
                        }
                        b += "float _lp=dot(_wf,_n);\n";
                        b += "vec3 _rn=_m+_o*clamp(_lp,0.0,1.0)+_p*clamp(_lp,-1.0,0.0);\n";
                        b += "_jg=vec4(_jg.rgb*_rn,_jg.a);\n"
                    }
                }
            }
        }
        if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && d._xv(fct._dpp) && d._xv(fct._dpr)) {
            b += "_lj.y=_hz;\n"
        }
        if (d._xv(fct._dpw)) {
            b += "_le.pq=_hi.st;\n";
            b += "_le.st=_hh.st+((_hi.pq-32768.0)/8192.0*_ba);\n";
            b += "_nu=_hy;\n";
            if (d._xv(fct._dpx)) {
                b += "_lj.x=_hc.x;\n"
            }
        }
        if (d._xv(fct._nv)) {
            b += "_lg=_d*_lg;\n";
            b += "_vw=_b*_d*_vw;\n";
            b += "_lg.w=_vw.z/_vw.w;\n"
        } else {
            if (d._xv(fct._od) || d._xv(fct._dqw)) {
                b += "const float _wh=-1.0;\n";
                b += "gl_Position.z=max(_wh, gl_Position.z);\n"
            } else {
                if (d._xv(fct._dps) || d._xv(fct._dqh)) {
                    b += "vec3 _io=_lc.xyz-_ez;\n"
                } else {
                    b += "vec3 _io=_vw.xyz-_ez;\n"
                }
                if (d._xv(fct._dpz)) {
                    b += "_lj.z=length(_io.xyz);\n"
                }
                if (d._xv(fct._drh)) {
                    b += "ComputeInOutScattering(_io, length(_io), _n, _zt, _zv);\n"
                }
            }
        }
        b += "}\n";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._edy);
        if (b._xv(fct._dqv)) {
            c.push(elp._eeb)
        }
        if (b._xv(fct._nv) || (!b._xv(fct._od) && !b._xv(fct._dqw) && (b._xv(fct._dpn) || b._xv(fct._dpp) || b._xv(fct._dql)))) {
            c.push(elp._eea)
        }
        if (!b._xv(fct._od) && !b._xv(fct._dqw) && !b._xv(fct._nv) && b._xv(fct._dpp) && b._xv(fct._dpr)) {
            c.push(elp._efb)
        }
        if (b._xv(fct._dpw)) {
            c.push(elp._eej);
            c.push(elp._eek)
        }
        if (b._xv(fct._dpx) || b._xv(fct._dqn)) {
            c.push(elp._eed)
        }
        if (b._xv(fct._dpw)) {
            c.push(elp._eez)
        }
        if (!b._xv(fct._od) && !b._xv(fct._dqw) && !b._xv(fct._nv)) {
            c.push(elp._ecc)
        }
        c.push(elp._dxe);
        c.push(elp._dxf);
        c.push(elp._dxc);
        if (b._xv(fct._nv) || (!b._xv(fct._od) && !b._xv(fct._dqw) && (b._xv(fct._dpn) || b._xv(fct._dpp)))) {
            c.push(elp._dxh)
        }
        if (!b._xv(fct._od) && !b._xv(fct._dqw) && !b._xv(fct._nv)) {
            if (b._xv(fct._drh) || b._xv(fct._dpn)) {
                c.push(elp._dxn)
            }
            if (b._xv(fct._dpn) && !b._xv(fct._dql)) {
                c.push(elp._dxm);
                c.push(elp._dxp);
                c.push(elp._dxr)
            }
        }
        if (b._xv(fct._dqv)) {
            c.push(elp._ece)
        }
        if (b._xv(fct._dpw)) {
            c.push(elp._dye)
        }
        if (b._xv(fct._dqn)) {
            c.push(elp._dyf);
            if (b._xv(fct._dqv)) {
                c.push(elp._dyg)
            }
        }
        if (!b._xv(fct._od) && !b._xv(fct._dqw) && !b._xv(fct._nv) && b._xv(fct._dpz)) {
            c.push(elp._dyl)
        }
        if (b._xv(fct._dqq)) {
            c.push(elp._ebh)
        }
        if (b._xv(fct._drh)) {
            c.push(elp._dzl);
            c.push(elp._dzn);
            c.push(elp._dzp);
            c.push(elp._dzq);
            c.push(elp._dzr)
        }
        return c
    };
    return a
}();
var epp = function() {
    var a = {
        _cgk: 0,
        _cgm: 1,
        _cgo: 2
    };
    return a
}();
var fmx = function() {
    var b = {};
    var a = 0.5;
    b._cny = function(c) {
        a = c
    };
    b._cnz = function() {
        return a
    };
    b._om = function(e, c) {
        var d = "\n";
        d += "#extension GL_OES_standard_derivatives : enable\n";
        d += "const float _mh=" + a.toFixed(3) + ";\n";
        d += "float _mj(float _ml, float _mm, float _mo) {\n";
        d += "\treturn (clamp(_mo,_ml,_mm)-_ml)/(_mm-_ml);\n";
        d += "}\n";
        d += "float _mp(vec2 _mr) {\n";
        d += "\tvec2 _ms = dFdx(_mr);\n";
        d += "\tvec2 _mt = dFdy(_mr);\n";
        d += "\tfloat _mv = max(dot(_ms,_ms),dot(_mt,_mt));\n";
        d += "\treturn 0.5 * log2(_mv);\n";
        d += "}\n";
        d += "float _mx(vec2 _mz, float _js) {\n";
        d += "\tfloat _nb=0.0;\n";
        d += "\t_nb+=1.0-_mj(0.0, _js, _mz.x);\n";
        d += "\t_nb+=1.0-_mj(0.0, _js, _mz.y);\n";
        d += "\t_nb+=_mj(1.0-_js, 1.0, _mz.x);\n";
        d += "\t_nb+=_mj(1.0-_js, 1.0, _mz.y);\n";
        d += "\treturn 1.0+clamp(_nb,0.0,1.0);\n";
        d += "}\n";
        if (c === epp._cgm) {
            d += "vec3 _nm(float _nd, float _nf, float _nh, float _ni, float _nj, float _nk, float _nl) {\n";
            d += "\tfloat _nn = 0.5/_nl;\n";
            d += "\tvec2 _no = vec2(1,1);\n";
            d += "\tvec2 _nq = vec2(_nn,_nn);\n";
            d += "\tvec2 _mz = clamp(vec2(_nd, _nf), _nq, _no - _nq);\n";
            d += "\tfloat _ns=_mx(_mz,_nn*2.0);\n";
            d += "\t_mz = vec2(_nh, _ni) * vec2(_nk,_nk) + _mz * vec2(_nl,_nl);\n";
            d += "\tfloat _nt = _mp(_mz)*_ns;\n";
            d += "\treturn vec3(_mz.xy/_nj, _nt);\n";
            d += "}\n"
        } else {
            if (c === epp._cgo) {
                d += "vec3 _nm(float _nd, float _nf, float _nh, float _ni, float _nj, float _nk, float _nl) {\n";
                d += "\tvec2 _no = vec2(1,1);\n";
                d += "\tvec2 _mz = mod(vec2(_nd, _nf), _no);\n";
                d += "\tfloat _ns=_mx(_mz,2.0/_nl);\n";
                d += "\t_mz = vec2(_nh, _ni) * vec2(_nk,_nk) + _mz * vec2(_nl,_nl);\n";
                d += "\tfloat _nt = _mp(_mz)*_ns;\n";
                d += "\treturn vec3(_mz.xy/_nj, _nt);\n";
                d += "}\n"
            } else {
                d += "varying vec4 _nu;\n";
                d += "vec3 _nm(float _nd, float _nf, float _nh, float _ni, float _nj, float _nk, float _nl) {\n";
                d += "\tfloat _nn = 0.5/_nl;\n";
                d += "\tvec2 _no = vec2(1,1);\n";
                d += "\tvec2 _nv = vec2(0.5,0.5);\n";
                d += "\tvec2 _nx = vec2(2.0,2.0);\n";
                d += "\tvec2 _nq = vec2(_nn,_nn);\n";
                d += "\tvec2 _mz = vec2(_nd, _nf);\n";
                d += "\tvec2 _ny = clamp(_mz, _nq, _no - _nq);\n";
                d += "\tvec2 _oa = mod(_mz, _no);\n";
                d += "\tvec2 _oc = _mz - _nx * floor(_nv * _mz);\n";
                d += "\tvec2 _oe = _no - abs(_no - _oc);\n";
                d += "\t_mz = _nu.xy * _ny + _nu.zw * _oa + (_no - _nu.xy - _nu.zw) * _oe;\n";
                d += "\tfloat _ns=_mx(_mz,_nn*4.0);\n";
                d += "\t_mz = vec2(_nh, _ni) * vec2(_nk,_nk) + _mz * vec2(_nl,_nl);\n";
                d += "\tfloat _nt = _mp(_mz)*_ns;\n";
                d += "\treturn vec3(_mz.xy/_nj, _nt);\n";
                d += "}\n"
            }
        }
        if (e._xv(fct._dpx)) {
            d += "vec4 _om(vec4 _on, sampler2D _oo, sampler2D _op, float _og, vec3 _oj, vec3 _ol, float _oh) {\n"
        } else {
            d += "vec4 _om(vec4 _on, sampler2D _oo, vec3 _oj, float _oh) {\n"
        }
        d += "\tfloat _oq=_on.z;\n";
        d += "\tfloat _nl=_on.w;\n";
        d += "\tfloat _or;\n";
        d += "\tfloat _nk;\n";
        d += "\tfloat _nj;\n";
        if (e._xv(fct._dpx)) {
            d += "\tif (_og>0.5) {\n";
            d += "\t\t_or=_ol.x;\n";
            d += "\t\t_nk=_ol.y;\n";
            d += "\t\t_nj=_ol.z;\n";
            d += "\t}\n";
            d += "\telse {\n";
            d += "\t\t_or=_oj.x;\n";
            d += "\t\t_nk=_oj.y;\n";
            d += "\t\t_nj=_oj.z;\n";
            d += "\t}\n"
        } else {
            d += "\t_or=_oj.x;\n";
            d += "\t_nk=_oj.y;\n";
            d += "\t_nj=_oj.z;\n"
        }
        d += "\tif (fract(_oq)>0.99) _oq=ceil(_oq);\n";
        d += "\telse _oq=floor(_oq);\n";
        d += "\tfloat _ot=mod(_oq,_or);\n";
        d += "\tfloat _ou=floor(_oq/_or);\n";
        d += "\tvec3 _ow=_nm(_on.s,_on.t,_ot,_ou,_nj,_nk,_nl);\n";
        if (e._xv(fct._dpx)) {
            d += "\tif (_og>0.5) {\n";
            d += "   \treturn texture2D(_op,_ow.xy,-_ow.z*_oh);\n";
            d += "\t} else {\n";
            d += "   \treturn texture2D(_oo,_ow.xy,-_ow.z*_oh);\n";
            d += "\t}\n"
        } else {
            d += "\treturn texture2D(_oo,_ow.xy,-_ow.z*_oh);\n"
        }
        d += "}\n";
        if (e._xv(fct._dpx)) {
            d += "vec4 _oy(vec4 _on, sampler2D _oo, sampler2D _op, float _og, vec3 _oj, vec3 _ol) { \n";
            d += "\treturn _om(_on, _oo, _op, _og, _oj, _ol, _mh);\n";
            d += "}\n"
        } else {
            d += "vec4 _oy(vec4 _on, sampler2D _oo, vec3 _oj) {\n";
            d += "\treturn _om(_on, _oo, _oj, _mh);\n";
            d += "}\n"
        }
        return d
    };
    return b
}();
var eyq = function() {
    var a = function(b, c) {
        this.options = b;
        this.value;
        if (c !== undefined && !isNaN(c)) {
            this.value = c
        } else {
            this.value = this._qh()
        }
    };
    a.prototype.getValue = function() {
        return this.value
    };
    a.prototype.setValue = function(b, c, d) {
        this.value = d;
        this._qg(b, c)
    };
    a.prototype._qg = function(b, c) {};
    a.prototype._brk = function(b) {
        return true
    };
    a.prototype._qh = function() {
        throw new Error("2801 ")
    };
    return a
}();
var fpa = function() {
    var b = function(c, d) {
        _qkb(this, eyq, c, d)
    };
    _qjz(eyq, b);
    b.prototype._qh = function() {
        return a._rdm
    };
    var a = function(c, d) {
        return new b(c, d)
    };
    a._rdl = -3;
    a._rdm = -2;
    a._rdo = -1;
    a._rdq = 512;
    a._rds = 2 * 1024;
    a._rdt = 4 * 1024;
    return a
}();
var fkz = function() {
    var a = {
        _ij: 1,
        _lhv: 2
    };
    return a
}();
var eyy = function() {
    var a = function() {
        var d = {};
        var e = -1;
        var c = [];
        var g;
        var h = [];
        var b;
        d._lhx = function() {
            return e
        };
        d._lhz = function(i) {
            h.push(i)
        };
        d._lib = function() {
            for (var i = 0; i < h.length; i++) {
                h[i](g)
            }
        };
        d._csy = function(i) {
            g = i;
            d._lib()
        };
        d._csw = function() {
            return g
        };
        d.add = function(i) {
            if (i === undefined) {
                throw new Error("2606 ")
            }
            var j = i._bjx();
            if (c[j] !== undefined) {
                throw new Error("2607 " + i._bjx())
            }
            if (e < j) {
                e = j;
                c.length = e + 1
            }
            c[j] = i;
            return i
        };
        d.getByID = function(i) {
            return c[i]
        };
        d._bup = function() {
            b = -1;
            return d._bur()
        };
        d._bur = function() {
            if (b === undefined) {
                throw new Error("2608 ")
            }
            for (var i = b + 1; i < c.length; i++) {
                if (c[i] !== undefined) {
                    b = i;
                    return c[i]
                }
            }
            b = undefined;
            return undefined
        };
        return d
    };
    return a
}();
var flx = function() {
    var a = {
        _nlc: 0,
        _qn: 1,
        _qk: 2
    };
    return a
}();
var fcm = function() {
    var a = function(p, d, i, j, m, s) {
        var l = {};
        if (p === undefined) {
            throw new Error("2321 ")
        }
        var h = p;
        var n = d;
        var g = i !== undefined ? i : false;
        var e = j !== undefined ? j : fkz._ij;
        var k = m !== undefined ? m : false;
        var q = s !== undefined ? s : undefined;
        var c;
        var b;
        var r;
        var o = false;
        l._bjx = function() {
            return h
        };
        l._cso = function() {
            return n
        };
        l._csp = function() {
            return g
        };
        l._csq = function() {
            return e
        };
        l._csr = function() {
            return k
        };
        l._cst = function() {
            return q
        };
        l._csu = function() {
            return c
        };
        l._csv = function(t) {
            c = t
        };
        l._csw = function() {
            return b
        };
        l._csy = function(t) {
            b = t
        };
        l._csz = function() {
            return r
        };
        l._cta = function(t) {
            r = t
        };
        l._ctb = function(t) {
            o = t
        };
        l._ctc = function() {
            return o
        };
        l._ctd = function() {
            if (r === undefined) {
                return 0
            }
            if (b === undefined) {
                return r
            }
            if (b < r) {
                return 0
            }
            return b
        };
        return l
    };
    return a
}();
var fqn = function() {
    var c = 1024 * 1024;
    var e = 200 * c;
    var b = 0.25;
    var a = 2 * 512 * c;
    var d = eyy();
    d._sbb = 0;
    d._sbc = d.add(fcm(0, flx._qk));
    d._sbe = d.add(fcm(1, flx._qk));
    d._sbg = d.add(fcm(2, flx._nlc, true));
    d._sbi = d.add(fcm(3, flx._qn, true));
    d._sbk = d.add(fcm(5, flx._qn));
    d._sbm = d.add(fcm(7, flx._qk));
    d._sbo = d.add(fcm(8, flx._qk, true));
    d._sbq = d.add(fcm(10, flx._nlc));
    d._sbr = d.add(fcm(12, flx._nlc, true, undefined, false, 1 << 16));
    d._sbt = d.add(fcm(13, flx._nlc));
    d._qts = d.add(fcm(14));
    d._sbu = d.add(fcm(16, flx._nlc, true));
    d._sbw = d.add(fcm(17, flx._nlc, true));
    d._sbx = d.add(fcm(18, flx._nlc, true));
    d._sby = d.add(fcm(19, flx._nlc, true));
    d._sca = d.add(fcm(20, flx._nlc, true));
    d._scb = d.add(fcm(21, flx._nlc, true));
    d._scd = d.add(fcm(22, flx._nlc, true));
    d._scf = d.add(fcm(23, undefined, true));
    d._scg = d.add(fcm(24, flx._qn, true));
    d._sci = d.add(fcm(25, flx._qn, true));
    d._sck = d.add(fcm(26, flx._qn));
    d._scm = d.add(fcm(27, flx._qn));
    d._sco = d.add(fcm(28, flx._nlc));
    d._scp = d.add(fcm(29, flx._qn));
    d._scr = d.add(fcm(30));
    d._sct = d.add(fcm(31));
    d._scu = d.add(fcm(32));
    d._scw = d.add(fcm(33, undefined, true));
    d._scx = d.add(fcm(34));
    d._scy = d.add(fcm(35, undefined, true));
    d._qtr = d.add(fcm(40, undefined, false, undefined, true));
    d._scz = d.add(fcm(42, undefined, false));
    d._sdb = d.add(fcm(43, flx._qk, false, fkz._lhv));
    d._sdc = d.add(fcm(44, flx._qk, false, fkz._lhv));
    d._qtr._csv(150000);
    d._qtr._cta(2048 * c);
    d._lhz(function(g) {
        if (g === undefined) {
            return
        }
        if (d.getByID(0)._csz() === undefined) {
            return
        }
        d._scr._cta(0);
        d._sct._cta(0);
        d._scu._cta(0);
        d._scw._cta(0);
        d._scx._cta(0);
        d._scy._cta(0);
        var h = 4294967295;
        var m = 0;
        var j = {};
        for (var i = d._bup(); i !== undefined; i = d._bur()) {
            i._csy(undefined);
            if (i === d._qtr) {
                continue
            }
            var q = i._csz();
            if (q === undefined || q === 0) {
                continue
            }
            m += q;
            var n = i._cso();
            if (n === undefined) {
                n = h
            }
            if (j[n] === undefined) {
                j[n] = q
            } else {
                j[n] += q
            }
        }
        d._qtr._csy(0);
        d._sbb = 0;
        var k = 0;
        for (var n = flx._qn; n <= flx._qk; n++) {
            k += j[n]
        }
        k += j[h];
        fpa._rdq = Math.ceil((j[flx._nlc] + (k * b)) / c);
        fpa._rds = Math.ceil((m + e + a) / c);
        if (fpa._rdt < fpa._rds) {
            fpa._rdt = fpa._rds
        }
        if (g === fpa._rdl) {
            g = fpa._rdq
        } else {
            if (g === fpa._rdm) {
                g = fpa._rds
            } else {
                if (g === fpa._rdo) {
                    g = fpa._rdt
                }
            }
        }
        var p = g * c;
        if (p > m) {
            var o = p - m;
            if (o > a) {
                d._sbb = a
            }
            p -= d._sbb;
            var o = p - m;
            if (o > e) {
                d._qtr._csy(o)
            }
            return
        }
        var r = 0;
        var l = (p - j[flx._nlc]) / k;
        if (l < b) {
            if (false) {}
            l = b
        }
        for (var i = d._bup(); i !== undefined; i = d._bur()) {
            if (i === d._qtr || i._csz() === undefined) {
                continue
            }
            if (i._cso() !== flx._nlc) {
                i._csy(Math.floor(i._csz() * l))
            }
        }
    });
    return d
}();
var ewn = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nattribute vec2 _gx;\nattribute vec3 _gz;\n";
        if (c._xv(fct._drh)) {
            b += "attribute vec3 _ha;\n"
        }
        b += "\nuniform mat4 _b;\n\nvarying vec3 _id;\n";
        if (c._xv(fct._drh)) {
            b += "varying vec3 _ie;\n"
        }
        b += "\nvoid main(void) {\n\tgl_Position=_b*vec4(_gx,-9999.99,1.0);\n\t_id=_gz;\n\t//World _vw is actually stored in vertex _px attribute\n";
        if (c._xv(fct._drh)) {
            b += "_ie=_ha.xyz;\n"
        }
        b += "}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._edy);
        c.push(elp._eea);
        if (b._xv(fct._drh)) {
            c.push(elp._eeb)
        }
        c.push(elp._dxc);
        return c
    };
    return a
}();
var ewt = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(d) {
        var c = "";
        c += "precision mediump float;\n";
        if (d._xv(fct._nv)) {
            c += "attribute vec3 _gx;\n";
            c += "attribute vec3 _gz;\n";
            c += "uniform mat4 _f;\n";
            c += "uniform mat4 _d;\n";
            c += "uniform mat4 _b;\n";
            if (d._xv(fct._dpn) || d._xv(fct._dpp)) {
                c += "uniform mat3 _h;\n"
            }
            if (d._xv(fct._dqs)) {
                c += "uniform float _ec;\n"
            }
            if (d._xv(fct._dqu)) {
                c += "uniform float _ed;\n"
            }
            c += "varying vec4 _lg;\n";
            c += "void main(void) {\n";
            c += "vec4 _xz=_f*vec4(_gx,1.0);\n";
            if (d._xv(fct._dqs)) {
                c += "_xz.y=clamp(_xz.y,_ec,999999.99);\n"
            }
            if (d._xv(fct._dqu)) {
                c += "_xz.y=clamp(_xz.y,-999999.99,_ed);\n"
            }
            c += "_xz=_b*_d*_xz;\n";
            c += "_lg.xyz=_h*_gz;\n";
            c += "_lg=_d*_lg;\n";
            c += "_lg.w=_xz.z/_xz.w;\n";
            c += "gl_Position=_xz;\n";
            c += "}\n"
        } else {
            c += "attribute vec3 _gx;\n";
            if (d._xv(fct._dqv)) {
                c += "attribute vec4 _ha;\n"
            }
            if (d._xv(fct._dpn) || d._xv(fct._dpp)) {
                c += "attribute vec3 _gz;\n"
            }
            if (d._xv(fct._dpw)) {
                c += "attribute vec4 _hi;\n";
                c += "attribute vec4 _hm;\n";
                c += "attribute vec4 _hp;\n";
                c += "attribute vec3 _hf;\n"
            }
            if (d._xv(fct._dqh)) {
                c += "attribute vec4 _hu;\n"
            }
            if (!d._xv(fct._od) && !d._xv(fct._dqw) && d._xv(fct._drh)) {
                c += "uniform vec3 _ez;\n";
                c += "uniform vec3 _n;\n"
            }
            c += "uniform mat4 _f;\n";
            c += "uniform mat4 _d;\n";
            c += "uniform mat4 _b;\n";
            if (d._xv(fct._dpn) || d._xv(fct._dpp)) {
                c += "uniform mat3 _h;\n"
            }
            if (d._xv(fct._dqv)) {
                c += "uniform vec4 _fa;\n"
            }
            if (d._xv(fct._dqs)) {
                c += "uniform float _ec;\n"
            }
            if (d._xv(fct._dqu)) {
                c += "uniform float _ed;\n"
            }
            if (d._xv(fct._drh)) {
                c += fgm._ske(d)
            }
            if (d._xv(fct._dqv)) {
                c += "varying vec4 _jg;\n"
            }
            var b = false;
            if (d._xv(fct._dpp)) {
                b = true
            }
            if (d._xv(fct._dpw)) {
                c += "varying mat4 _le;\n"
            }
            if (d._xv(fct._dqh)) {
                c += "varying vec4 _qu;\n"
            }
            if (d._xv(fct._drh)) {
                c += fgm._skf(d)
            }
            var e = false;
            if (d._xv(fct._dpz)) {
                e = true
            }
            if (b || e) {
                c += "varying vec3 _lg;\n";
                c += "varying vec4 _ya;\n"
            }
            if (d._xv(fct._drh)) {
                c += fgm._skg(d)
            }
            c += "void main(void) {\n";
            c += "vec4 _xz=_f*vec4(_gx,1.0);\n";
            if (d._xv(fct._dpp)) {
                c += "_lg=_h*_gz;\n";
                c += "_ya.xyz=_xz.xyz;\n"
            }
            if (d._xv(fct._dqv)) {
                c += "_jg=_ha;\n";
                c += "_jg+=_fa;\n"
            }
            if (d._xv(fct._dqs)) {
                c += "_xz.y=clamp(_xz.y,_ec,999999.99);\n"
            }
            if (d._xv(fct._dqu)) {
                c += "_xz.y=clamp(_xz.y,-999999.99,_ed);\n"
            }
            c += "gl_Position=_b*_d*_xz;\n";
            if (d._xv(fct._dpw)) {
                c += "_le=mat4(_hi,_hm,_hp,vec4(_hf,0));\n"
            }
            if (d._xv(fct._dqh)) {
                c += "_qu=_hu/256.0;\n"
            }
            if (!d._xv(fct._od) && !d._xv(fct._dqw) && d._xv(fct._drh)) {
                c += "vec3 _io=_ya.xyz-_ez;\n";
                c += "ComputeInOutScattering(_io, length(_io), _n, _zt, _zv);\n"
            }
            if (d._xv(fct._dqw)) {
                c += "const float _wh=-1.0;\n";
                c += "gl_Position.z=max(_wh, gl_Position.z);\n"
            }
            if (d._xv(fct._dpz)) {
                c += "float _yb=length(_d*_xz);\n";
                c += "_ya.w=_yb;\n"
            }
            c += "}\n"
        }
        return c
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._edy);
        if (!b._xv(fct._nv) && b._xv(fct._dqv)) {
            c.push(elp._eeb)
        }
        if (b._xv(fct._nv) || b._xv(fct._dpn) || b._xv(fct._dpp)) {
            c.push(elp._eea)
        }
        if (!b._xv(fct._nv)) {
            if (b._xv(fct._dpw)) {
                c.push(elp._eek);
                c.push(elp._eeo);
                c.push(elp._eeq);
                c.push(elp._eeh)
            }
            if (b._xv(fct._dqh)) {
                c.push(elp._eev)
            }
        }
        if (!b._xv(fct._nv) && !b._xv(fct._od) && !b._xv(fct._dqw) && b._xv(fct._drh)) {
            c.push(elp._ecc);
            c.push(elp._dxn)
        }
        c.push(elp._dxe);
        c.push(elp._dxf);
        c.push(elp._dxc);
        if (b._xv(fct._nv) || b._xv(fct._dpn) || b._xv(fct._dpp)) {
            c.push(elp._dxh)
        }
        if (!b._xv(fct._nv) && b._xv(fct._dqv)) {
            c.push(elp._ece)
        }
        if (b._xv(fct._dqs)) {
            c.push(elp._ebd)
        }
        if (b._xv(fct._dqu)) {
            c.push(elp._ebf)
        }
        if (b._xv(fct._drh)) {
            c.push(elp._dzl);
            c.push(elp._dzn);
            c.push(elp._dzp);
            c.push(elp._dzq);
            c.push(elp._dzr)
        }
        return c
    };
    return a
}();
var fey = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "";
        b += "attribute vec2 _gx;\n";
        b += "attribute vec4 _ha;\n";
        b += "uniform mat4 _b;\n";
        b += "varying vec4 _jg;\n";
        b += "void main(void) {\n";
        b += "gl_Position=_b*vec4(_gx,-1.0,1.0);\n";
        b += "_jg=_ha/255.0;\n";
        b += "}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._edy);
        c.push(elp._eeb);
        c.push(elp._dxc);
        return c
    };
    return a
}();
var fkh = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec2 _iw;\n\nuniform sampler2D _cs;\nuniform sampler2D _dh;\nuniform sampler2D _dj;\nuniform sampler2D _dk;\nuniform vec4 _sm;\n\nvec3 _pa(sampler2D _pc, vec3 _pb) {\n\tvec2 _js=vec2(0.5/256.0, 0.5/16.0);\n\tfloat _pd=15.0/16.0;\n\tfloat _pf=floor(_pb.b*14.9999)/16.0;\n\tfloat _ph=(_pb.b*15.0)-(_pf*16.0);\n\tfloat _pj=_pf+(_pb.r*_pd/16.0);\n\tfloat _pk=_pb.g*_pd;\n\tvec3 _pm=texture2D(_pc,_js+vec2(_pj,_pk) ).rgb;\n\tvec3 _po=texture2D(_pc,_js+vec2(_pj+(1.0/16.0),_pk) ).rgb;\n\treturn mix(_pm,_po,_ph);\n}\n\nvoid main(void) {\n\tvec3 _pq=clamp(texture2D(_cs,_iw).rgb,0.0,1.0);\n\tvec3 _ps=_pq*_df.x;\n\t_ps+=_pa(_dh,_pq)*_df.y;\n\t_ps+=_pa(_dj,_pq)*_df.z;\n\t_ps+=_pa(_dk,_pq)*_df.w;\n\tgl_FragColor=vec4(_ps,1.0);\n}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        c.push(elp._eaj);
        c.push(elp._eal);
        c.push(elp._eam);
        c.push(elp._eah);
        return c
    };
    return a
}();
var esa = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec2 _iw;\n\nuniform sampler2D _cs;\nuniform vec2 _er;\nuniform vec2 _et;\nuniform vec4 _ev;\n\nvoid main(void) {\n   vec4 _vq=texture2D(_cs,_iw);\n   float _bbg=_vq.a;\n   if (_bbg==0.0) {\n       _bbg+=texture2D(_cs,_iw+(1.0*_er)).a;\n       _bbg+=texture2D(_cs,_iw+(-1.0*_er)).a;\n       _bbg+=texture2D(_cs,_iw+(1.0*_et)).a;\n       _bbg+=texture2D(_cs,_iw+(-1.0*_et)).a;\n       if (_bbg!=0.0) {\n           _vq=_ev;\n       }\n   }\n   gl_FragColor=_vq;\n}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        c.push(elp._ebs);
        c.push(elp._ebt);
        c.push(elp._ebv);
        return c
    };
    return a
}();
var fkl = function() {
    var a = {};
    a._om = function(c) {
        var b = "";
        b += "float _yn(vec4 _yp) {\n";
        b += "\tconst vec4 _qv=vec4(1.0/(256.0*256.0*256.0),1.0/(256.0*256.0),1.0/256.0,1.0);\n";
        b += "\treturn dot(_yp,_qv);\n";
        b += "}\n";
        b += "vec3 _yq(float _px) {\n";
        b += "    vec3 _yr;\n";
        b += "    _yr.r=floor(_px/256.0/256.0);\n";
        b += "    _yr.g=floor((_px-_yr.r*256.0*256.0)/256.0);\n";
        b += "    _yr.b=floor(_px-_yr.r*256.0*256.0-_yr.g*256.0);\n";
        b += "    return _yr/256.0;\n";
        b += "}\n";
        return b
    };
    return a
}();
var fid = function() {
    var c = {};
    var b = 2;
    var a = b / 2 - 0.5;
    var d = 1 / (b * b);
    c._cfb = function(g) {
        var e = "\nfloat _jh(sampler2D _jk, vec2 _ji) {\n";
        if (g._xv(fct._dqy)) {
            e += "\treturn texture2D(_jk,_ji).r;\n"
        } else {
            e += "\treturn _yn(texture2D(_jk,_ji));\n"
        }
        e += "}\n";
        return e
    };
    c._om = function(i) {
        var h = "\n";
        h += "precision mediump float;\nfloat _jl(vec2 _jm){\n    return fract(sin(dot(_jm.xy,vec2(12.9898,78.233)))*43758.5453);\n}\n" + c._cfb(i) + "float _jo(sampler2D _jk, vec4 _ju, vec2 _js, float _jq) {\n\tvec4 _jv = vec4(\n\t\t_ju.x + (_js.x * _jq * _ju.w),\n\t\t_ju.y + (_js.y * _jq * _ju.w),\n\t\t_ju.z, _ju.w);\n";
        if (i._xv(fct._dqy)) {
            h += "\treturn texture2DProj(_jk, _jv).r;\n"
        } else {
            h += "\treturn _yn(texture2DProj(_jk, _jv));\n"
        }
        h += "}\nfloat _jw(vec4 _ka, sampler2D _jk, float _jx, vec2 _jz) {\n\tfloat _kb;\n\tvec3 _ju=_ka.xyz/_ka.w;\n\t_ju.z-=_ju.z*_jz.x;\n\tif (_ju.x<0.0 || _ju.x>1.0 || _ju.y<0.0 || _ju.y>1.0 || _ju.z<0.0 || _ju.z>0.45) {\n\t\t_kb=1.0;\n\t}\n\telse {\n\t\tfloat _kd=0.0, _ki = 0.0;\n\t\t_kd=_jh(_jk,_ju.xy);\n";
        h += "\t\tfloat _ke=30.0;\n\t\t_ki = clamp(exp(-_ke * (_ju.z - _kd)), 0.0, 1.0);\n\t\t_kb=max(_ki, 0.0);\n\t}\n\treturn _kb;\n}\nfloat _kf(vec4 _ka, sampler2D _jk, float _jx, vec2 _jz) {\n\tfloat _kb;\n\tvec3 _ju=_ka.xyz/_ka.w;\n\t_ju.z-=_ju.z*_jz.x;\n\tif (_ju.x<0.0 || _ju.x>1.0 || _ju.y<0.0 || _ju.y>1.0 || _ju.z<0.0 || _ju.z>0.45) {\n\t\t_kb=1.0;\n\t}\n\telse {\n\t\tfloat _kd=0.0, _ki = 0.0;\n\t\t_kd=_jh(_jk,_ju.xy);\n\t\t_ki+=step(_kd,_ju.z)*_jx;\n\t\t_kb=max(1.0-_ki, 0.0);\n\t}\n\treturn _kb;\n}\nfloat _kg(vec4 _ka, sampler2D _jk, float _jx, vec2 _jz) {\n\tfloat _kb;\n\tvec3 _ju=_ka.xyz/_ka.w;\n\t_ju.z-=_ju.z*_jz.x;\n\tif (_ju.x<0.0 || _ju.x>1.0 || _ju.y<0.0 || _ju.y>1.0 || _ju.z<0.0 || _ju.z>0.45) {\n\t\t_kb=1.0;\n\t}\n\telse {\n\t\tfloat _ki=0.0, _kd=0.0;\n\t\tvec2 _ji = vec2(_ju.xy);\n\t\t_kd=_jh(_jk,_ji.xy);\n\t\t_ki+=step(_kd,_ju.z);\n\t\t_kd=_jh(_jk,_ji.xy+(vec2(-1.0, -1.0)*_jz.y));\n\t\t_ki+=step(_kd,_ju.z);\n\t\t_kd=_jh(_jk,_ji.xy+(vec2(0.0, -1.0)*_jz.y));\n\t\t_ki+=step(_kd,_ju.z);\n\t\t_kd=_jh(_jk,_ji.xy+(vec2(-1.0, 0.0)*_jz.y));\n\t\t_ki+=step(_kd,_ju.z);\n\t\t_kb = max(1.0-((_ki*_jx)*0.25), 0.0);\n\t}\n\treturn _kb;\n}\nfloat _kj(vec4 _ka, sampler2D _jk, float _jx, vec2 _jz) {\n\tfloat _kb;\n\tvec3 _ju=_ka.xyz/_ka.w;\n\t_ju.z-=_ju.z*_jz.x;\n\tif (_ju.x<0.0 || _ju.x>1.0 || _ju.y<0.0 || _ju.y>1.0 || _ju.z<0.0 || _ju.z>0.45) _kb=1.0;\n\telse {\n\t\tfloat _ki=0.0, _kd=0.0;\n\t\tvec2 _ji;\n";
        for (var g = -a; g <= a; g += 1) {
            for (var e = -a; e <= a; e += 1) {
                h += "\t\t_ji=_ju.xy+_jz.y*( vec2(cos(_jl(_ka.xy))+(" + g + "),sin(_jl(_ka.yx))+(" + e + ")) );\n\t\t_kd=_jh(_jk,_ji);\n\t\t_ki+=step(_kd,_ju.z);\n"
            }
        }
        h += "\t\t_kb=max(1.0-((_ki*_jx)*" + d + "),0.0);\n\t}\n\treturn _kb;\n}\nfloat _kl(vec4 _ka, sampler2D _jk, float _jx, vec4 _kp, float _kn) {\n";
        if (i._xv(fct._drd)) {
            h += "\tfloat _kr=_kf(_ka,_jk,_jx,_kp.zw);\n"
        } else {
            if (i._xv(fct._drg)) {
                h += "\tfloat _kr=_kj(_ka,_jk,_jx,_kp.zw);\n"
            } else {
                h += "\tfloat _kr=_kg(_ka,_jk,_jx,_kp.zw);\n"
            }
        }
        h += "\tfloat _ks=clamp((_kn-_kp.x)*_kp.y,0.0,1.0);\n\t_kr=mix(_kr,1.0,_ks);\n\treturn _kr;\n}\n";
        return h
    };
    return c
}();
var fhq = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nuniform mat4 _i;\nuniform float _gt;\nuniform vec4 _gv;//near start,near start _baf, far start, far start distance\nvarying vec2 _iw;\n\n";
        b += fkl._om(c);
        b += fid._cfb(c);
        b += "uniform sampler2D _cs;\nuniform sampler2D _cu;\nuniform sampler2D _dh;\nvoid main(void) {\n\tvec4 _sq=texture2D(_cs,_iw);\n\tvec4 _sr=texture2D(_cu,_iw);\n\tvec4 _so=vec4(_iw.x*2.0-1.0,_iw.y*2.0-1.0,_jh(_dh,_iw)*2.0-1.0,1.0);\n\t_so=_i*_so;\n\t_so.z=-_so.z/_so.w;\n   float _ss = _so.z-_gt;\n   float _su = (_ss-_gv.z)/_gv.w;\n   float _sv = (-_ss-_gv.x)/_gv.y;\n   float _sx = ( _ss > 0.0) ? _su : _sv;\n";
        if (c._xv(fct._dqb)) {
            b += "\tgl_FragColor=vec4(_sq.rgb*(1.0-min(_sx, 1.0)), 1.0);\n"
        } else {
            b += "\tgl_FragColor=vec4(mix(_sq.rgb, _sr.rgb, min(_sx, 1.0)), 1.0);\n"
        }
        b += "}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        c.push(elp._dzy);
        c.push(elp._eaj);
        c.push(elp._dxi);
        c.push(elp._edv);
        c.push(elp._edw);
        return c
    };
    return a
}();
var epg = function() {
    var a = {};
    a._om = function(b) {
        return "\nvec4 _ws(vec4 _wt, vec4 _wu, float _wo, float _wq) {\n\tfloat _wv=gl_FragCoord.z/gl_FragCoord.w;\n\tfloat _wx=(_wq-_wv)/(_wq-_wo);\n\t_wx=1.0-clamp(_wx,0.0,1.0);\n\treturn vec4(_wt.rgb*(1.0-_wx*_wu.a)+_wu.rgb*(_wx*_wu.a),_wt.a*(1.0-(_wx*(1.0-_wu.a))));\n}\n"
    };
    return a
}();
var fjb = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "";
        b += "precision mediump float;\n";
        if (c._xv(fct._dqv)) {
            b += "varying vec4 _jg;\n"
        }
        if (c._xv(fct._dpp)) {
            b += "varying vec3 _lg;\n"
        }
        if (c._xv(fct._dpz)) {
            b += "varying vec4 _li;\n"
        }
        if (c._xv(fct._dpw)) {
            b += "varying vec4 _le;\n";
            b += "varying vec4 _qp;\n";
            b += "varying vec4 _qr;\n";
            b += "varying vec3 _qt;\n"
        }
        if (c._xv(fct._dqh)) {
            b += "varying vec4 _qu;\n"
        }
        if (c._xv(fct._dpp)) {
            b += "uniform vec3 _m;\n";
            b += "uniform vec3 _n;\n";
            b += "uniform vec3 _o;\n";
            b += "uniform vec3 _p;\n"
        }
        if (c._xv(fct._dpw)) {
            b += "uniform sampler2D _t;\n";
            b += "uniform vec3 _u;\n";
            if (c._xv(fct._dpx)) {
                b += "uniform sampler2D _w;\n";
                b += "uniform vec3 _x;\n"
            }
        }
        if (c._xv(fct._dpz)) {
            b += "uniform sampler2D _bi;\n";
            b += "uniform float _bg;\n";
            b += "uniform vec4 _bk;\n";
            b += "const vec4 _qv=vec4(1.0 / (256.0 * 256.0 * 256.0),1.0 / (256.0 * 256.0),1.0 / 256.0,1.0);\n"
        }
        if (c._xv(fct._nv)) {
            b += "uniform sampler2D _qw;\n";
            b += "uniform vec2 _qx;\n"
        }
        if (c._xv(fct._dqf)) {
            b += "uniform vec4 _ce;\n";
            b += "uniform float _cf;\n";
            b += "uniform float _ch;\n"
        }
        if (c._xv(fct._dqj)) {
            b += "uniform vec4 _ei;\n"
        }
        if (c._xv(fct._dqw)) {
            b += "const vec4 _qn=vec4(256*256*256,256*256,256,1.0);\n";
            b += "const vec4 _qo=vec4(0,1.0/256.0,1.0/256.0,1.0/256.0);\n"
        }
        if (c._xv(fct._dpw)) {
            b += fmx._om(c)
        }
        if (c._xv(fct._dpz)) {
            b += fid._om(c)
        }
        if (c._xv(fct._dqf)) {
            b += epg._om(c)
        }
        b += "void main(void) {\n";
        if (c._xv(fct._dqj)) {
            b += "float _lk=_baf(gl_FragCoord.xy,_ei.xy);\n";
            b += "if (_lk<_ei.z && (1.0/gl_FragCoord.w)<_ei.w) {\n";
            b += "   discard;\n";
            b += "   return;\n";
            b += "}\n"
        }
        if (c._xv(fct._dpw)) {
            if (c._xv(fct._dpx)) {
                b += "vec4 _on=_le;\n";
                b += "float _qz=step(32768.0,_on.w);\n";
                b += "_on.w=_on.w-_qz*65536.0;\n";
                b += "vec4 _rb=_oy(_on,_t,_w,_qz,_u,_x);\n";
                b += "vec4 _rc=_qp;\n";
                b += "float _re=step(32768.0,_rc.w);\n";
                b += "_rc.w=_rc.w-_re*65536.0;\n";
                b += "vec4 _rf=_oy(_rc,_t,_w,_re,_u,_x);\n";
                b += "vec4 _rg=_qr;\n";
                b += "float _ri=step(32768.0,_rg.w);\n";
                b += "_rg.w=_rg.w-_ri*65536.0;\n";
                b += "vec4 _rj=_oy(_rg,_t,_w,_ri,_u,_x);\n"
            } else {
                b += "vec4 _rb=_oy(_le,_t,_u);\n";
                b += "vec4 _rf=_oy(_qp,_t,_u);\n";
                b += "vec4 _rj=_oy(_qr,_t,_u);\n"
            }
            b += "vec4 _rl=vec4(_rb*_qt.x+_rf*_qt.y+_rj*_qt.z);\n";
            b += "vec4 _ik=vec4(_rl.rgb*_jg.rgb,_jg.a);\n"
        } else {
            if (c._xv(fct._dqv)) {
                b += "vec4 _ik=_jg;\n"
            } else {
                if (c._xv(fct._dqw)) {
                    b += "vec4 _ik=fract(gl_FragCoord.z*_qn);\n";
                    b += "_ik-=_ik.xxyz*_qo;\n"
                }
            }
        }
        if (c._xv(fct._dpp)) {
            b += "float _lp=max(dot(_lg,_n),0.0);\n";
            b += "vec3 _rn=_m+_o*_lp-_p*_lp;\n"
        } else {
            if (c._xv(fct._dpn)) {
                b += "vec3 _rn=vec3(1.0,1.0,1.0);\n"
            }
        }
        if (c._xv(fct._dpz)) {
            b += "_rn*=_kl(_li,_bi,_bg,_bk,vViewSpaceDepth);\n"
        }
        if (c._xv(fct._nv)) {
            b += "_rn*=texture2D(_qw,gl_FragCoord.xy*_qx).x;\n"
        }
        if (c._xv(fct._dpp) || c._xv(fct._dpn)) {
            b += "_ik=vec4(_lg.xzy*0.5+0.5,_ik.a);\n"
        }
        if (c._xv(fct._dqf)) {
            b += "_ik=_ws(_ik,_ce,_ch,_cf);\n"
        }
        if (c._xv(fct._dqh)) {
            b += "_ik=_ik*(1.0-_qu.w)+vec4(_qu.rgb,1.0)*_qu.w;\n"
        }
        b += "gl_FragColor=_ik;\n";
        b += "}\n";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        if (b._xv(fct._dpp)) {
            c.push(elp._dxm);
            c.push(elp._dxn);
            c.push(elp._dxp);
            c.push(elp._dxr)
        }
        if (b._xv(fct._dpw)) {
            c.push(elp._dxx);
            c.push(elp._dxz);
            if (b._xv(fct._dpx)) {
                c.push(elp._dya);
                c.push(elp._dyb)
            }
        }
        if (b._xv(fct._dpz)) {
            c.push(elp._dyn);
            c.push(elp._dyj);
            c.push(elp._dyp)
        }
        if (b._xv(fct._dqf)) {
            c.push(elp._dzh);
            c.push(elp._dzi);
            c.push(elp._dzk)
        }
        if (b._xv(fct._dqj)) {
            c.push(elp._ebl)
        }
        return c
    };
    return a
}();
var fbs = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec3 _id;\n\n";
        if (c._xv(fct._drh)) {
            b += "varying vec3 _ie;\nuniform vec3 _ez;\nuniform vec3 _n;\n"
        }
        b += "uniform samplerCube _dl;\nuniform samplerCube _dn;\nuniform bool _dr;\nuniform bool _ds;\nuniform float _dp;\n";
        if (c._xv(fct._drh)) {
            b += fgm._ske(c)
        }
        if (c._xv(fct._drh)) {
            b += fgm._skg(c);
            b += fgm._ski(c)
        }
        b += "\nvoid main(void) {\n\tvec3 _if=normalize(_id);\n\tvec4 _ig=textureCube(_dl,_if,0.0);\n\tvec4 _ii=textureCube(_dn,_if,0.0);\n\tif (!_dr) {\n\t\t_ig=vec4(_ii.xyz,0.0);\n\t}\n\tif (!_ds) {\n\t\t_ii=vec4(_ig.xyz,0.0);\n\t}\n\tvec4 _ik=mix(_ig,_ii,_dp);\n";
        if (c._xv(fct._drh)) {
            b += "\tconst vec3 _im=vec3(0.0, 1.0, 0.0);\n\tvec3 _io=_ie-_ez;\n\tvec3 _iq, _baz;\n\t//Compute cosine between world up and world pos view vector.\n\t//Subtracting 1.0 from the cosine gives us the sine (_sd.e. height).\n\tfloat _is=1.0-max(0.0, dot(_im, normalize(_io)));\n\t_is=max(0.0, pow(_is, _cj.w));\n\tComputeInOutScattering(_io, length(_io), _n, _iq, _baz);\n\tvec3 _iu=_bbf(_ik.xyz, _iq, _baz)*_is;\n\t_ik.xyz=mix(_ik.xyz, _iu, _is);\n"
        }
        b += "\tgl_FragColor=_ik;\n";
        b += "}\n";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        if (b._xv(fct._drh)) {
            c.push(elp._ecc);
            c.push(elp._dxn)
        }
        c.push(elp._eao);
        c.push(elp._eap);
        c.push(elp._ear);
        c.push(elp._eat);
        c.push(elp._eaq);
        if (b._xv(fct._drh)) {
            c.push(elp._dzl);
            c.push(elp._dzn);
            c.push(elp._dzp);
            c.push(elp._dzq);
            c.push(elp._dzr)
        }
        return c
    };
    return a
}();
var eoj = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "";
        b += "attribute vec3 _gx;\n";
        if (c._xv(fct._dqv)) {
            b += "attribute vec4 _ha;\n"
        }
        if (c._xv(fct._dpw)) {
            b += "attribute vec2 _hi;\n"
        }
        b += "uniform mat4 _b;\n";
        if (c._xv(fct._dqv)) {
            b += "varying vec4 _jg;\n"
        }
        if (c._xv(fct._dpw)) {
            b += "varying vec2 _le;\n"
        }
        b += "void main(void) {\n";
        b += "gl_Position=_b*vec4(_gx,1.0);\n";
        if (c._xv(fct._dqv)) {
            b += "_jg=_ha/255.0;\n"
        }
        if (c._xv(fct._dpw)) {
            b += "_le=_hi/32767.0;\n"
        }
        b += "}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._edy);
        if (b._xv(fct._dqv)) {
            c.push(elp._eeb)
        }
        if (b._xv(fct._dpw)) {
            c.push(elp._eek)
        }
        c.push(elp._dxc);
        return c
    };
    return a
}();
var ffz = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec2 _iw;\n\nuniform sampler2D _cs;\nuniform sampler2D _dh;\nuniform sampler2D _dj;\nuniform vec4 _sm;\n\nvec3 _pa(sampler2D _pc, vec3 _pb) {\n\tvec2 _js=vec2(0.5/256.0, 0.5/16.0);\n\tfloat _pd=15.0/16.0;\n\tfloat _pf=floor(_pb.b*14.9999)/16.0;\n\tfloat _ph=(_pb.b*15.0)-(_pf*16.0);\n\tfloat _pj=_pf+(_pb.r*_pd/16.0);\n\tfloat _pk=_pb.g*_pd;\n\tvec3 _pm=texture2D(_pc,_js+vec2(_pj,_pk) ).rgb;\n\tvec3 _po=texture2D(_pc,_js+vec2(_pj+(1.0/16.0),_pk) ).rgb;\n\treturn mix(_pm,_po,_ph);\n}\n\nvoid main(void) {\n\tvec3 _pq=clamp(texture2D(_cs,_iw).rgb,0.0,1.0);\n\tvec3 _ps=_pq*_df.x;\n\t_ps+=_pa(_dh,_pq)*_df.y;\n\t_ps+=_pa(_dj,_pq)*_df.z;\n\tgl_FragColor=vec4(_ps,1.0);\n}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        c.push(elp._eaj);
        c.push(elp._eal);
        c.push(elp._eah);
        return c
    };
    return a
}();
var ftu = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "";
        b += "precision mediump float;\n";
        b += "attribute vec4 _gx;\n";
        b += "attribute vec4 _hq;\n";
        b += "attribute vec4 _hs;\n";
        b += "attribute float _ht;\n";
        if (!c._xv(fct._od) && !c._xv(fct._dqw) && !c._xv(fct._nv)) {
            b += "uniform vec3 _ez;\n"
        }
        b += "uniform mat4 _f;\n";
        b += "uniform mat4 _d;\n";
        b += "uniform mat3 _h;\n";
        b += "uniform mat3 _k;\n";
        b += "uniform mat4 _b;\n";
        b += "uniform mat3 _l;\n";
        b += "uniform float _gm;\n";
        b += "uniform float _ew;\n";
        b += "uniform vec4 _fa;\n";
        if (c._xv(fct._dpz)) {
            b += "uniform mat4 _bh;\n";
            b += "const mat4 _vr=mat4(0.5,0.0,0.0,0.0,0.0,0.5,0.0,0.0,0.0,0.0,0.5,0.0,0.5,0.5,0.5,1.0);\n"
        }
        b += "uniform vec2 _fb;\n";
        b += "uniform float _fc;\n";
        b += "uniform float _ft;\n";
        b += "uniform int _fe;\n";
        b += "uniform float _fg;\n";
        b += "uniform float _fn;\n";
        b += "uniform float _fo;\n";
        b += "uniform float _fu;\n";
        b += "uniform float _gj;\n";
        b += "uniform vec4 _fh;\n";
        if (!c._xv(fct._od) && !c._xv(fct._dqw) && !c._xv(fct._nv)) {
            if (c._xv(fct._drh)) {
                b += "uniform vec3 _n;\n";
                b += fgm._ske(c)
            }
        }
        b += "varying vec4 _sy;\n";
        b += "varying vec4 _jg;\n";
        b += "varying vec3 _ta;\n";
        if (c._xv(fct._dpz)) {
            b += "varying vec4 _li;\n"
        }
        b += "varying vec4 _lc;\n";
        b += "varying vec4 _tb;\n";
        if (c._xv(fct._drh)) {
            b += fgm._skf(c)
        }
        b += "vec3 _xa(vec4 _vw, float _wz) {\n";
        b += "float _xc=(_vw.x-_fb.x*_ew)*(_fb.x/_wz);\n";
        b += "float _xe=(_vw.z-_fb.y*_ew)*(_fb.y/_wz);\n";
        b += "float _xg=_fc*min((_vw.w/_fu),1.0);\n";
        b += "float _xi=_vw.y+sin((_xc+_xe)/_ft)*_xg;\n";
        b += "return vec3(_vw.x,_xi,_vw.z);\n";
        b += "}\n";
        if (c._xv(fct._drh)) {
            b += fgm._skg(c)
        }
        b += fkl._om(c);
        b += "void main(void) {\n";
        b += "vec4 _xk=_gx*vec4(_fg,1.0,_fg,1.0);\n";
        b += "_xk.xyz=_l*_xk.xyz+vec3(0.0,_gm,0.0);\n";
        b += "float _wz=length(_fb);\n";
        b += "vec3 _xm=_xa(_xk,_wz);\n";
        b += "_lc=_f*vec4(_xm,1.0);\n";
        b += "gl_Position=_b*_d*_lc;\n";
        if (c._xv(fct._dpz)) {
            b += "_li=_vr*_bh*_lc;\n"
        }
        b += "vec3 _xn=_xa(vec4(_xk.x-_fg,_hs.z,_xk.z,_hs.w-_gj),_wz);\n";
        b += "vec3 _xo=_xa(vec4(_xk.x+_fg,_hq.z,_xk.z,_hq.w-_gj),_wz);\n";
        b += "vec3 _xp=_xa(vec4(_xk.x,_hs.x,_xk.z-_fg,_hs.y-_gj),_wz);\n";
        b += "vec3 _xq=_xa(vec4(_xk.x,_hq.x,_xk.z+_fg,_hq.y-_gj),_wz);\n";
        b += "float _xs=_xn.y-_xo.y;\n";
        b += "float _xu=_xp.y-_xq.y;\n";
        b += "vec3 _wf=normalize(vec3(_xs,_fg*2.0,_xu));\n";
        b += "_ta=_wf;\n";
        b += "_jg=vec4(_yq(float(_fe)),1.0);\n";
        b += "float _xv=_xk.w+(_xm.y-_xk.y)-_gj;\n";
        b += "_jg.a-=(1.0-min(_xv/_fo,1.0));\n";
        b += "float _xx=smoothstep(0.0,_fn,_ht);\n";
        b += "_jg.a*=_xx;\n";
        b += "_jg+=_fa;\n";
        b += "vec2 _mz=vec2(_xk.x/(_fh.x*_fh.w),_xk.z/(_fh.x*_fh.w));\n";
        b += "vec3 _xy=_k*vec3(_mz.x+(_ew/_fh.x)*-_fb.x,0.0,_mz.y+(_ew/_fh.x)*-_fb.y);\n";
        b += "_tb=vec4(_mz.s,_mz.t,_xy.x,_xy.z);\n";
        b += "_lc.w=_xv;\n";
        b += "_sy.w=_fa.a+_xx;\n";
        b += "_sy.xyz=-_d[3].xyz*mat3(_d);\n";
        if (!c._xv(fct._od) && !c._xv(fct._dqw) && !c._xv(fct._nv)) {
            if (c._xv(fct._drh)) {
                b += "vec3 _io=_lc.xyz-_sy.xyz;\n";
                b += "ComputeInOutScattering(_io, length(_io), _n, _zt, _zv);\n"
            }
        }
        b += "}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._edy);
        c.push(elp._eer);
        c.push(elp._ees);
        c.push(elp._eeu);
        c.push(elp._ecc);
        c.push(elp._dxe);
        c.push(elp._dxf);
        c.push(elp._dxc);
        c.push(elp._dxh);
        c.push(elp._dxj);
        c.push(elp._dxk);
        c.push(elp._edo);
        c.push(elp._ecg);
        c.push(elp._ech);
        c.push(elp._ecx);
        c.push(elp._ecj);
        c.push(elp._eck);
        c.push(elp._ecm);
        c.push(elp._ecq);
        c.push(elp._ecr);
        c.push(elp._ecz);
        c.push(elp._edk);
        c.push(elp._ece);
        if (b._xv(fct._dpz)) {
            c.push(elp._dyl)
        }
        if (!b._xv(fct._od) && !b._xv(fct._dqw) && !b._xv(fct._nv)) {
            if (b._xv(fct._drh)) {
                c.push(elp._dxn);
                c.push(elp._dzl);
                c.push(elp._dzn);
                c.push(elp._dzp);
                c.push(elp._dzq);
                c.push(elp._dzr)
            }
        }
        c.push(elp._ebx);
        return c
    };
    return a
}();
var fty = {
    _nvy: 8,
    _nvz: 16,
    _nwb: 16
};
var exq = function() {
    var a = {};
    a._om = function(c) {
        var b = "";
        b += "vec4 _ql(float _qj) {\n";
        b += "const vec4 _qn=vec4(256*256*256,256*256,256,1.0);\n";
        b += "const vec4 _qo=vec4(0,1.0/256.0,1.0/256.0,1.0/256.0);\n";
        b += "vec4 _ik=fract(_qj*_qn);\n";
        b += "return _ik-(_ik.xxyz*_qo);\n";
        b += "}\n";
        return b
    };
    return a
}();
var fjc = function() {
    var b = {};
    b._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    var c = "";
    var a = function(e) {
        c += "vec3 _kz;\n";
        c += "float _la;\n";
        for (var d = 0; d < e; ++d) {
            c += "_kz=_bo[" + d + "].xyz-_lc.xyz;\n";
            c += "_la=clamp(dot(_ln,normalize(_kz)),0.0,1.0);\n";
            c += "_la*=1.0-clamp(length(_kz)*_bo[" + d + "].w,0.0,1.0);\n";
            c += "_la*=clamp(_bm-" + d + ".0, 0.0, 1.0);\n";
            c += "_lr=_lr+_yq(float(_bp[" + d + "]))*_la;\n"
        }
    };
    b._om = function(g) {
        var d = "";
        d += "precision mediump float;\n";
        if (!g._xv(fct._od) && !g._xv(fct._dqw) && !g._xv(fct._nv) && (g._xv(fct._dps) || g._xv(fct._dqh))) {
            d += "varying vec4 _lc;\n"
        }
        if (g._xv(fct._dqv)) {
            d += "varying vec4 _jg;\n"
        }
        var e = false;
        if (g._xv(fct._dpw)) {
            d += "varying vec4 _le;\n";
            if (g._xv(fct._dpx)) {
                e = true
            }
        }
        if (g._xv(fct._nv)) {
            d += "varying vec4 _lg;\n"
        } else {
            if (!g._xv(fct._od) && !g._xv(fct._dqw) && (g._xv(fct._dpp) || g._xv(fct._dql))) {
                d += "varying vec3 _lg;\n"
            }
        }
        var i = false;
        if (!g._xv(fct._od) && !g._xv(fct._dqw) && !g._xv(fct._nv) && g._xv(fct._dpp) && g._xv(fct._dpr)) {
            i = true
        }
        var h = false;
        if (!g._xv(fct._od) && !g._xv(fct._dqw) && !g._xv(fct._nv) && g._xv(fct._dpz)) {
            d += "varying vec4 _li;\n";
            h = true
        }
        if (e || i || h) {
            d += "varying vec3 _lj;\n"
        }
        if (g._xv(fct._drh)) {
            d += fgm._skf(g)
        }
        if (!g._xv(fct._od) && !g._xv(fct._dqw) && !g._xv(fct._nv) && g._xv(fct._dpp)) {
            d += "uniform vec3 _m;\n";
            d += "uniform vec3 _n;\n";
            d += "uniform vec3 _o;\n";
            d += "uniform vec3 _p;\n";
            if (g._xv(fct._dps)) {
                d += "uniform vec4 _bo[" + fty._nvy + "];\n";
                d += "uniform int _bp[" + fty._nvy + "];\n";
                d += "uniform float _bm;\n"
            }
        }
        if (!g._xv(fct._od) && !g._xv(fct._dqw) && !g._xv(fct._nv) && (g._xv(fct._dpr) || g._xv(fct._dql))) {
            d += "uniform vec3 _ex;\n"
        }
        if (g._xv(fct._dpw)) {
            d += "uniform sampler2D _t;\n";
            d += "uniform vec3 _u;\n";
            if (g._xv(fct._dpx)) {
                d += "uniform sampler2D _w;\n";
                d += "uniform vec3 _x;\n"
            }
        }
        if (!g._xv(fct._od) && !g._xv(fct._dqw) && !g._xv(fct._nv) && g._xv(fct._dpz)) {
            d += "uniform sampler2D _bi;\n";
            d += "uniform float _bg;\n";
            d += "uniform vec4 _bk;\n"
        }
        if (!g._xv(fct._od) && !g._xv(fct._dqw) && !g._xv(fct._nv) && g._xv(fct._dqf)) {
            d += "uniform vec4 _ce;\n";
            d += "uniform float _cf;\n";
            d += "uniform float _ch;\n"
        }
        if (!g._xv(fct._od) && !g._xv(fct._dqw) && !g._xv(fct._nv) && g._xv(fct._dqh)) {
            d += "uniform vec4 _dy;\n";
            d += "uniform float _dz;\n";
            d += "uniform float _ea;\n"
        }
        if (!g._xv(fct._od) && !g._xv(fct._dqw) && !g._xv(fct._nv) && g._xv(fct._dql)) {
            d += "uniform samplerCube _cr;\n"
        }
        if (g._xv(fct._dqj)) {
            d += "uniform vec4 _ei;\n"
        }
        if (g._xv(fct._drk)) {
            d += "uniform float _ek;\n"
        }
        d += exq._om(g);
        d += fkl._om(g);
        if (g._xv(fct._dpw)) {
            d += fmx._om(g)
        }
        if (!g._xv(fct._od) && !g._xv(fct._dqw) && !g._xv(fct._nv) && g._xv(fct._dpz)) {
            d += fid._om(g)
        }
        if (!g._xv(fct._od) && !g._xv(fct._dqw) && !g._xv(fct._nv) && g._xv(fct._dqf)) {
            d += epg._om(g)
        }
        if (g._xv(fct._drh)) {
            d += fgm._ski(g)
        }
        d += "void main(void) {\n";
        if (g._xv(fct._dqj)) {
            d += "float _lk=_baf(gl_FragCoord.xy,_ei.xy);\n";
            d += "if (_lk<_ei.z && (1.0/gl_FragCoord.w)<_ei.w) {\n";
            d += "\tdiscard;\n";
            d += "\treturn;\n";
            d += "}\n"
        }
        if (g._xv(fct._dpw)) {
            if (g._xv(fct._dpx)) {
                d += "vec4 _lm=_oy(_le,_t,_w,_lj.x,_u,_x);\n"
            } else {
                d += "vec4 _lm=_oy(_le,_t,_u);\n"
            }
            if (g._xv(fct._dqv)) {
                d += "vec4 _ik=_lm*_jg;\n"
            } else {
                d += "vec4 _ik=_lm;\n"
            }
        } else {
            if (g._xv(fct._dqv)) {
                d += "vec4 _ik=_jg;\n"
            } else {
                d += "vec4 _ik=vec4(0.0,0.0,0.0,1.0);\n"
            }
        }
        if (!g._xv(fct._od) && !g._xv(fct._dqw) && !g._xv(fct._nv)) {
            if (g._xv(fct._dpp) || g._xv(fct._dql)) {
                d += "vec3 _ln=normalize(_lg.xyz);\n"
            }
            if (g._xv(fct._dpp)) {
                d += "float _lp=dot(_ln,_n);\n";
                d += "vec3 _lr=_m+_o*clamp(_lp,0.0,1.0)+_p*clamp(_lp,-1.0,0.0);\n";
                if (g._xv(fct._dpr)) {
                    d += "vec3 _ls=reflect(-_n,_ln);\n";
                    d += "float _lu=pow(max(dot(_ls,-_ex),0.0),_lj.y)*_ik.a;\n";
                    d += "vec3 _lw=_lu*_o;\n";
                    if (g._xv(fct._dqv)) {
                        d += "_ik.a=_jg.a;\n"
                    }
                } else {
                    d += "vec3 _lw=vec3(0.0,0.0,0.0);\n"
                }
                if (g._xv(fct._dps)) {
                    if (c.length === 0) {
                        a(fty._nvy)
                    }
                    d += c
                }
            } else {
                d += "vec3 _lr=vec3(1.0,1.0,1.0);\n"
            }
            if (g._xv(fct._dpz)) {
                d += "float _kb=_kl(_li,_bi,_bg,_bk,_lj.z);\n"
            } else {
                d += "float _kb=1.0;\n"
            }
            if (g._xv(fct._dql)) {
                d += "vec3 _ly=reflect(-_ex,-_ln);\n";
                d += "_ly.x=-_ly.x;\n";
                d += "_ly.y=-_ly.y;\n";
                d += "_ik.rgb=textureCube(_cr,_ly).rgb*_ik.a+_ik.rgb*(1.0-_ik.a);\n";
                if (g._xv(fct._dqv)) {
                    d += "_ik.a=_jg.a;\n"
                }
            }
        }
        if (g._xv(fct._dqv) && g._xv(fct._drn)) {
            d += "_ik.a=_jg.a;\n"
        }
        if (g._xv(fct._drk)) {
            d += "if (_ik.a<=_ek) {\n";
            d += "\tdiscard;\n";
            d += "\treturn;\n";
            d += "}\n";
            d += "else _ik.a=1.0;\n"
        } else {
            if (g._xv(fct._drl)) {
                d += "if (_ik.a<=0.0) {\n";
                d += "\tdiscard;\n";
                d += "\treturn;\n";
                d += "}\n"
            }
        }
        if (g._xv(fct._nv)) {
            d += "gl_FragColor=_lg*0.5+0.5;\n"
        } else {
            if (g._xv(fct._od)) {
                d += "_ik.xyz=vec3(1.0,1.0,1.0);\n";
                d += "gl_FragColor=_ik;\n"
            } else {
                if (g._xv(fct._dqw)) {
                    if (g._xv(fct._dqy)) {
                        d += "_ik=vec4(0.0,0.0,0.0,1.0);\n"
                    } else {
                        d += "_ik=_ql(gl_FragCoord.z);\n"
                    }
                    d += "gl_FragColor=_ik;\n"
                } else {
                    if (g._xv(fct._dpp)) {
                        d += "_ik=vec4(_ik.rgb*_lr*_kb+step(1.0,_kb)*_lw,_ik.a);\n"
                    } else {
                        if (g._xv(fct._dpn)) {
                            d += "_ik=vec4(_ik.rgb*_lr,_ik.a);\n"
                        }
                    }
                    if (g._xv(fct._drh)) {
                        d += "_ik.xyz=_bbf(_ik.xyz, _zt, _zv);\n"
                    }
                    if (g._xv(fct._dqf)) {
                        d += "_ik=_ws(_ik,_ce,_ch,_cf);\n"
                    }
                    if (g._xv(fct._dqh)) {
                        d += "float _lz=_dz-_lc.y;\n";
                        d += "float _mb=0.0;\n";
                        d += "if (_lz>0.0) {\n";
                        d += "\t_mb=_lz/(_dz-_ea);\n";
                        d += "\t_mb=clamp(_mb,0.0,1.0);\n";
                        d += "\t_ik=_ik*(1.0-_mb)+vec4(_dy,1.0)*_mb;\n";
                        d += "}\n"
                    }
                    d += "gl_FragColor=_ik;\n"
                }
            }
        }
        d += "}\n";
        return d
    };
    b._oq = function(d) {
        var e = new Array(0);
        if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && d._xv(fct._dpp)) {
            e.push(elp._dxm);
            e.push(elp._dxn);
            e.push(elp._dxp);
            e.push(elp._dxr);
            if (d._xv(fct._dps)) {
                e.push(elp._dys);
                e.push(elp._dyt);
                e.push(elp._dyr)
            }
        }
        if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && (d._xv(fct._dpr) || d._xv(fct._dql))) {
            e.push(elp._eby)
        }
        if (d._xv(fct._dpw)) {
            e.push(elp._dxx);
            e.push(elp._dxz);
            if (d._xv(fct._dpx)) {
                e.push(elp._dya);
                e.push(elp._dyb)
            }
        }
        if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && d._xv(fct._dpz)) {
            e.push(elp._dyn);
            e.push(elp._dyj);
            e.push(elp._dyp)
        }
        if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && d._xv(fct._dqf)) {
            e.push(elp._dzh);
            e.push(elp._dzi);
            e.push(elp._dzk)
        }
        if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && d._xv(fct._dqh)) {
            e.push(elp._eaz);
            e.push(elp._eba);
            e.push(elp._ebb)
        }
        if (!d._xv(fct._od) && !d._xv(fct._dqw) && !d._xv(fct._nv) && d._xv(fct._dql)) {
            e.push(elp._dzu)
        }
        if (d._xv(fct._dqj)) {
            e.push(elp._ebl)
        }
        if (d._xv(fct._drk)) {
            e.push(elp._ebn)
        }
        return e
    };
    return b
}();
var fro = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "attribute vec2 _gx;\nattribute vec2 _hi;\n\nuniform mat4 _b;\n\nvarying vec2 _iw;\n\nvoid main(void) {\n\tgl_Position=_b*vec4(_gx,-1.0,1.0);\n\t_iw=_hi;\n}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._edy);
        c.push(elp._eek);
        c.push(elp._dxc);
        return c
    };
    return a
}();
var ewv = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "";
        b += "precision mediump float;\n";
        b += "varying vec4 _jg;\n";
        b += "varying vec4 _le;\n";
        if (c._xv(fct._dpx)) {
            b += "varying float _md;\n"
        }
        b += "uniform sampler2D _t;\n";
        b += "uniform vec3 _u;\n";
        if (c._xv(fct._dpx)) {
            b += "uniform sampler2D _w;\n";
            b += "uniform vec3 _x;\n"
        }
        if (c._xv(fct._dqf)) {
            b += "uniform vec4 _ce;\n";
            b += "uniform float _cf;\n";
            b += "uniform float _ch;\n"
        }
        if (c._xv(fct._drk)) {
            b += "uniform float _ek;\n"
        }
        b += fmx._om(c);
        if (c._xv(fct._dqf)) {
            b += epg._om(c)
        }
        b += "void main(void) {\n";
        if (c._xv(fct._dpx)) {
            b += "vec4 _lm=_oy(_le,_t,_w,_md,_u,_x);\n"
        } else {
            b += "vec4 _lm=_oy(_le,_t,_u);\n"
        }
        b += "vec4 _ik=_lm*_jg;\n";
        if (c._xv(fct._drk)) {
            b += "if (_ik.a<=_ek) {\n";
            b += "\tdiscard;\n";
            b += "\treturn;\n";
            b += "}\n";
            b += "else _ik.a=1.0;\n"
        } else {
            if (c._xv(fct._drl)) {
                b += "if (_ik.a<=0.0) {\n";
                b += "\tdiscard;\n";
                b += "\treturn;\n";
                b += "}\n"
            }
        }
        if (c._xv(fct._od)) {
            b += "_ik.rgb=vec3(1.0,1.0,1.0);\n"
        } else {
            if (c._xv(fct._dqf)) {
                b += "_ik=_ws(_ik,_ce,_ch,_cf);\n"
            }
        }
        b += "gl_FragColor=_ik;\n";
        b += "}\n";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dxx);
        c.push(elp._dxz);
        if (b._xv(fct._dpx)) {
            c.push(elp._dya);
            c.push(elp._dyb)
        }
        if (b._xv(fct._dqf)) {
            c.push(elp._dzh);
            c.push(elp._dzi);
            c.push(elp._dzk)
        }
        if (b._xv(fct._drk)) {
            c.push(elp._ebn)
        }
        return c
    };
    return a
}();
var emw = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "";
        b += "precision mediump float;\n";
        if (c._xv(fct._dqv)) {
            b += "varying vec4 _jg;\n"
        }
        if (c._xv(fct._dpw)) {
            b += "varying vec2 _le;\n";
            b += "uniform sampler2D _y;\n"
        }
        b += "void main(void) {\n";
        if (c._xv(fct._dpw)) {
            if (c._xv(fct._dqv)) {
                b += "gl_FragColor=texture2D(_y,vec2(_le.s,_le.t))*_jg;\n"
            } else {
                b += "gl_FragColor=texture2D(_y,vec2(_le.s,_le.t));\n"
            }
        } else {
            if (c._xv(fct._dqv)) {
                b += "gl_FragColor=_jg;\n"
            }
        }
        b += "}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        if (b._xv(fct._dpw)) {
            c.push(elp._dyd)
        }
        return c
    };
    return a
}();
var frx = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec2 _iw;\n\nuniform sampler2D _cs;\n\nvoid main(void) {\n\tgl_FragColor=texture2D(_cs,_iw);\n}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        return c
    };
    return a
}();
var fba = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec2 _iw;\n\nuniform sampler2D _cs;\nuniform sampler2D _cu;\nuniform float _bw;\n\n#define SAMPLES 16\nconst float _rp = 1.38;\nconst float _rq = -_rp/16.0;\nconst float _js = 18.0;\nconst float _rr = 0.007;\nconst float _rs = 0.0000002;\nconst float _rt = 40.;\nvoid main(void) {\n\tvec3 _ru[16];\n\t\t_ru[0]=vec3(0.53812504, 0.18565957, -0.43192);\n\t\t_ru[1]=vec3(0.13790712, 0.24864247, 0.44301823);\n\t\t_ru[2]=vec3(0.33715037, 0.56794053, -0.005789503);\n\t\t_ru[3]=vec3(-0.6999805, -0.04511441, -0.0019965635);\n\t\t_ru[4]=vec3(0.06896307, -0.15983082, -0.85477847);\n\t\t_ru[5]=vec3(0.056099437, 0.006954967, -0.1843352);\n\t\t_ru[6]=vec3(-0.014653638, 0.14027752, 0.0762037);\n\t\t_ru[7]=vec3(0.010019933, -0.1924225, -0.034443386);\n\t\t_ru[8]=vec3(-0.35775623, -0.5301969, -0.43581226);\n\t\t_ru[9]=vec3(-0.3169221, 0.106360726, 0.015860917);\n\t\t_ru[10]=vec3(0.010350345, -0.58698344, 0.0046293875);\n\t\t_ru[11]=vec3(-0.08972908, -0.49408212, 0.3287904);\n\t\t_ru[12]=vec3(0.7119986, -0.0154690035, -0.09183723);\n\t\t_ru[13]=vec3(-0.053382345, 0.059675813, -0.5411899);\n\t\t_ru[14]=vec3(0.035267662, -0.063188605, 0.54602677);\n\t\t_ru[15]=vec3(-0.47761092, 0.2847911, -0.0271716);\n\tvec3 _rw = normalize((texture2D(_cu,_iw*_js).xyz*2.0) - vec3(1.0, 1.0, 1.0));\n\tvec4 _rx=texture2D(_cs,_iw);\n\t_rx.xyz=_rx.xyz*2.0 - vec3(1.0, 1.0, 1.0);\n\tvec3 _ry=vec3(_iw.xy, _rx.a);\n\tfloat _sa=_bw*_rt/_rx.a;\n\tfloat _sb=0.0;\n\tfor(int _sd = 0; _sd < SAMPLES; ++_sd) {\n\t\tvec3 _se=_sa*reflect(_ru[_sd], _rw);\n\t\tvec4 _sf=texture2D(_cs, _ry.xy + sign(dot(_se,_rx.xyz) )*_se.xy);\n\t\t_sf.xyz=_sf.xyz*2.0 - vec3(1.0, 1.0, 1.0);\n\t\tfloat _sh = _rx.a-_sf.a;\n\t\t_sb+=step(_rs,_sh)*(1.0-dot(_sf.xyz,_rx.xyz))*(1.0-smoothstep(_rs,_rr,_sh));\n\t}\n\t_sb=max(0.3, 1.0+_sb*_rq);\n\tgl_FragColor=vec4(_sb, _sb, _sb, 1.0);\n}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        c.push(elp._dzy);
        c.push(elp._dza);
        return c
    };
    return a
}();
var eth = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec2 _iw;\n\nuniform sampler2D _cs;\nuniform vec2 _cw;\n\nvoid main(void) {\n\tvec4 _je=vec4(0.0,0.0,0.0,0.0);\n\t_je+=texture2D(_cs,_iw+_cw*0.5);\n\tgl_FragColor=vec4(_je.rgb,1.0);\n}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        c.push(elp._eab);
        return c
    };
    return a
}();
var enh = function() {
    var b = {};
    b._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    var a = "#ifndef FXAA_GREEN_AS_LUMA\n    #define FXAA_GREEN_AS_LUMA 1\n#endif\n#ifndef FXAA_EARLY_EXIT\n    #define FXAA_EARLY_EXIT 1\n#endif\n#ifndef FXAA_DISCARD\n    #define FXAA_DISCARD 0\n#endif\n#ifndef FXAA_FAST_PIXEL_OFFSET\n    #ifdef GL_EXT_gpu_shader4\n        #define FXAA_FAST_PIXEL_OFFSET 1\n    #endif\n    #ifdef GL_NV_gpu_shader5\n        #define FXAA_FAST_PIXEL_OFFSET 1\n    #endif\n    #ifdef GL_ARB_gpu_shader5\n        #define FXAA_FAST_PIXEL_OFFSET 1\n    #endif\n    #ifndef FXAA_FAST_PIXEL_OFFSET\n        #define FXAA_FAST_PIXEL_OFFSET 0\n    #endif\n#endif\n#ifndef FXAA_GATHER4_ALPHA\n    #ifdef GL_ARB_gpu_shader5\n        #define FXAA_GATHER4_ALPHA 1\n    #endif\n    #ifdef GL_NV_gpu_shader5\n        #define FXAA_GATHER4_ALPHA 1\n    #endif\n    #ifndef FXAA_GATHER4_ALPHA\n        #define FXAA_GATHER4_ALPHA 0\n    #endif\n#endif\n#ifndef FXAA_QUALITY_PRESET\n    #define FXAA_QUALITY_PRESET 12\n#endif\n\n#if (FXAA_QUALITY_PRESET == 10)\n    #define FXAA_QUALITY_PS 3\n    #define FXAA_QUALITY_P0 1.5\n    #define FXAA_QUALITY_P1 3.0\n    #define FXAA_QUALITY_P2 12.0\n#endif\n#if (FXAA_QUALITY_PRESET == 11)\n    #define FXAA_QUALITY_PS 4\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 3.0\n    #define FXAA_QUALITY_P3 12.0\n#endif\n#if (FXAA_QUALITY_PRESET == 12)\n    #define FXAA_QUALITY_PS 5\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 4.0\n    #define FXAA_QUALITY_P4 12.0\n#endif\n#if (FXAA_QUALITY_PRESET == 13)\n    #define FXAA_QUALITY_PS 6\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 4.0\n    #define FXAA_QUALITY_P5 12.0\n#endif\n#if (FXAA_QUALITY_PRESET == 14)\n    #define FXAA_QUALITY_PS 7\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 4.0\n    #define FXAA_QUALITY_P6 12.0\n#endif\n#if (FXAA_QUALITY_PRESET == 15)\n    #define FXAA_QUALITY_PS 8\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 2.0\n    #define FXAA_QUALITY_P6 4.0\n    #define FXAA_QUALITY_P7 12.0\n#endif\n\n#if (FXAA_QUALITY_PRESET == 20)\n    #define FXAA_QUALITY_PS 3\n    #define FXAA_QUALITY_P0 1.5\n    #define FXAA_QUALITY_P1 2.0\n    #define FXAA_QUALITY_P2 8.0\n#endif\n#if (FXAA_QUALITY_PRESET == 21)\n    #define FXAA_QUALITY_PS 4\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 8.0\n#endif\n#if (FXAA_QUALITY_PRESET == 22)\n    #define FXAA_QUALITY_PS 5\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 8.0\n#endif\n#if (FXAA_QUALITY_PRESET == 23)\n    #define FXAA_QUALITY_PS 6\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 8.0\n#endif\n#if (FXAA_QUALITY_PRESET == 24)\n    #define FXAA_QUALITY_PS 7\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 3.0\n    #define FXAA_QUALITY_P6 8.0\n#endif\n#if (FXAA_QUALITY_PRESET == 25)\n    #define FXAA_QUALITY_PS 8\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 2.0\n    #define FXAA_QUALITY_P6 4.0\n    #define FXAA_QUALITY_P7 8.0\n#endif\n#if (FXAA_QUALITY_PRESET == 26)\n    #define FXAA_QUALITY_PS 9\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 2.0\n    #define FXAA_QUALITY_P6 2.0\n    #define FXAA_QUALITY_P7 4.0\n    #define FXAA_QUALITY_P8 8.0\n#endif\n#if (FXAA_QUALITY_PRESET == 27)\n    #define FXAA_QUALITY_PS 10\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 2.0\n    #define FXAA_QUALITY_P6 2.0\n    #define FXAA_QUALITY_P7 2.0\n    #define FXAA_QUALITY_P8 4.0\n    #define FXAA_QUALITY_P9 8.0\n#endif\n#if (FXAA_QUALITY_PRESET == 28)\n    #define FXAA_QUALITY_PS 11\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 2.0\n    #define FXAA_QUALITY_P6 2.0\n    #define FXAA_QUALITY_P7 2.0\n    #define FXAA_QUALITY_P8 2.0\n    #define FXAA_QUALITY_P9 4.0\n    #define FXAA_QUALITY_P10 8.0\n#endif\n#if (FXAA_QUALITY_PRESET == 29)\n    #define FXAA_QUALITY_PS 12\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.5\n    #define FXAA_QUALITY_P2 2.0\n    #define FXAA_QUALITY_P3 2.0\n    #define FXAA_QUALITY_P4 2.0\n    #define FXAA_QUALITY_P5 2.0\n    #define FXAA_QUALITY_P6 2.0\n    #define FXAA_QUALITY_P7 2.0\n    #define FXAA_QUALITY_P8 2.0\n    #define FXAA_QUALITY_P9 2.0\n    #define FXAA_QUALITY_P10 4.0\n    #define FXAA_QUALITY_P11 8.0\n#endif\n\n#if (FXAA_QUALITY_PRESET == 39)\n    #define FXAA_QUALITY_PS 12\n    #define FXAA_QUALITY_P0 1.0\n    #define FXAA_QUALITY_P1 1.0\n    #define FXAA_QUALITY_P2 1.0\n    #define FXAA_QUALITY_P3 1.0\n    #define FXAA_QUALITY_P4 1.0\n    #define FXAA_QUALITY_P5 1.5\n    #define FXAA_QUALITY_P6 2.0\n    #define FXAA_QUALITY_P7 2.0\n    #define FXAA_QUALITY_P8 2.0\n    #define FXAA_QUALITY_P9 2.0\n    #define FXAA_QUALITY_P10 4.0\n    #define FXAA_QUALITY_P11 8.0\n#endif\n\n\n#define FxaaBool bool\n#define FxaaDiscard discard\n#define FxaaFloat float\n#define FxaaFloat2 vec2\n#define FxaaFloat3 vec3\n#define FxaaFloat4 vec4\n#define FxaaHalf float\n#define FxaaHalf2 vec2\n#define FxaaHalf3 vec3\n#define FxaaHalf4 vec4\n#define FxaaInt2 ivec2\n#define FxaaSat(x) clamp(x, 0.0, 1.0)\n#define FxaaTex sampler2D\n\n#define FxaaTexTop(t, p) texture2D(t, p, 0.0)\n#define FxaaTexOff(t, p, o, r) texture2D(t, p + (vec2(o) * r), 0.0)\n\n#if (FXAA_GREEN_AS_LUMA == 0)\n    FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.w; }\n#else\n    FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.y; }\n#endif\n\nFxaaFloat4 FxaaPixelShader(\n    // Use noperspective interpolation here (turn off perspective interpolation).\n    // {xy} = center of pixel\n    FxaaFloat2 pos\n\n    // Input color texture.\n    // {rgb_} = color in linear or perceptual color space\n    // if (FXAA_GREEN_AS_LUMA == 0)\n    // {___a} = luma in perceptual color space (not linear)\n    ,FxaaTex tex\n\n    //\n    // Only used on FXAA Quality.\n    // This must be from a constant/uniform.\n    // {x_} = 1.0/screenWidthInPixels\n    // {_y} = 1.0/screenHeightInPixels\n    ,FxaaFloat2 fxaaQualityRcpFrame\n\n    // Only used on FXAA Quality.\n    // This used to be the FXAA_QUALITY__SUBPIX define.\n    // It is here now to allow easier tuning.\n    // Choose the amount of sub-pixel aliasing removal.\n    // This can effect sharpness.\n    // 1.00 - upper limit (softer)\n    // 0.75 - default amount of filtering\n    // 0.50 - lower limit (sharper, less sub-pixel aliasing removal)\n    // 0.25 - almost off\n    // 0.00 - completely off\n    ,FxaaFloat fxaaQualitySubpix\n    //\n    // Only used on FXAA Quality.\n    // This used to be the FXAA_QUALITY__EDGE_THRESHOLD define.\n    // It is here now to allow easier tuning.\n    // The minimum amount of local contrast required to apply algorithm.\n    // 0.333 - too little (faster)\n    // 0.250 - low quality\n    // 0.166 - default\n    // 0.125 - high quality\n    // 0.063 - overkill (slower)\n    ,FxaaFloat fxaaQualityEdgeThreshold\n    //\n    // Only used on FXAA Quality.\n    // This used to be the FXAA_QUALITY__EDGE_THRESHOLD_MIN define.\n    // It is here now to allow easier tuning.\n    // Trims the algorithm from processing darks.\n    // 0.0833 - upper limit (default, the start of visible unfiltered edges)\n    // 0.0625 - high quality (faster)\n    // 0.0312 - visible limit (slower)\n    // Special notes when using FXAA_GREEN_AS_LUMA,\n    // Likely want to set this to zero.\n    // As colors that are mostly not-green\n    // will appear very dark in the green channel!\n    // Tune by looking at mostly non-green content,\n    // then start at zero and increase until aliasing is a problem.\n    ,FxaaFloat fxaaQualityEdgeThresholdMin\n) {\n    FxaaFloat2 posM;\n    posM.x = pos.x;\n    posM.y = pos.y;\n    #if (FXAA_GATHER4_ALPHA == 1)\n        #if (FXAA_DISCARD == 0)\n            FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);\n            #if (FXAA_GREEN_AS_LUMA == 0)\n                #define lumaM rgbyM.w\n            #else\n                #define lumaM rgbyM.y\n            #endif\n        #endif\n        #if (FXAA_GREEN_AS_LUMA == 0)\n            FxaaFloat4 luma4A = FxaaTexAlpha4(tex, posM);\n            FxaaFloat4 luma4B = FxaaTexOffAlpha4(tex, posM, FxaaInt2(-1, -1));\n        #else\n            FxaaFloat4 luma4A = FxaaTexGreen4(tex, posM);\n            FxaaFloat4 luma4B = FxaaTexOffGreen4(tex, posM, FxaaInt2(-1, -1));\n        #endif\n        #if (FXAA_DISCARD == 1)\n            #define lumaM luma4A.w\n        #endif\n        #define lumaE luma4A.z\n        #define lumaS luma4A.x\n        #define lumaSE luma4A.y\n        #define lumaNW luma4B.w\n        #define lumaN luma4B.z\n        #define lumaW luma4B.x\n    #else\n        FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);\n        #if (FXAA_GREEN_AS_LUMA == 0)\n            #define lumaM rgbyM.w\n        #else\n            #define lumaM rgbyM.y\n        #endif\n        FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0, 1), fxaaQualityRcpFrame.xy));\n        FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 0), fxaaQualityRcpFrame.xy));\n        FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0,-1), fxaaQualityRcpFrame.xy));\n        FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 0), fxaaQualityRcpFrame.xy));\n    #endif\n    FxaaFloat maxSM = max(lumaS, lumaM);\n    FxaaFloat minSM = min(lumaS, lumaM);\n    FxaaFloat maxESM = max(lumaE, maxSM);\n    FxaaFloat minESM = min(lumaE, minSM);\n    FxaaFloat maxWN = max(lumaN, lumaW);\n    FxaaFloat minWN = min(lumaN, lumaW);\n    FxaaFloat rangeMax = max(maxWN, maxESM);\n    FxaaFloat rangeMin = min(minWN, minESM);\n    FxaaFloat rangeMaxScaled = rangeMax * fxaaQualityEdgeThreshold;\n    FxaaFloat range = rangeMax - rangeMin;\n    FxaaFloat rangeMaxClamped = max(fxaaQualityEdgeThresholdMin, rangeMaxScaled);\n    FxaaBool earlyExit = range < rangeMaxClamped;\n    if(earlyExit)\n        #if (FXAA_DISCARD == 1)\n            FxaaDiscard;\n        #else\n            return rgbyM;\n        #endif\n    #if (FXAA_GATHER4_ALPHA == 0)\n        FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1,-1), fxaaQualityRcpFrame.xy));\n        FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 1), fxaaQualityRcpFrame.xy));\n        FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1,-1), fxaaQualityRcpFrame.xy));\n        FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));\n    #else\n        FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(1, -1), fxaaQualityRcpFrame.xy));\n        FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));\n    #endif\n    FxaaFloat lumaNS = lumaN + lumaS;\n    FxaaFloat lumaWE = lumaW + lumaE;\n    FxaaFloat subpixRcpRange = 1.0/range;\n    FxaaFloat subpixNSWE = lumaNS + lumaWE;\n    FxaaFloat edgeHorz1 = (-2.0 * lumaM) + lumaNS;\n    FxaaFloat edgeVert1 = (-2.0 * lumaM) + lumaWE;\n    FxaaFloat lumaNESE = lumaNE + lumaSE;\n    FxaaFloat lumaNWNE = lumaNW + lumaNE;\n    FxaaFloat edgeHorz2 = (-2.0 * lumaE) + lumaNESE;\n    FxaaFloat edgeVert2 = (-2.0 * lumaN) + lumaNWNE;\n    FxaaFloat lumaNWSW = lumaNW + lumaSW;\n    FxaaFloat lumaSWSE = lumaSW + lumaSE;\n    FxaaFloat edgeHorz4 = (abs(edgeHorz1) * 2.0) + abs(edgeHorz2);\n    FxaaFloat edgeVert4 = (abs(edgeVert1) * 2.0) + abs(edgeVert2);\n    FxaaFloat edgeHorz3 = (-2.0 * lumaW) + lumaNWSW;\n    FxaaFloat edgeVert3 = (-2.0 * lumaS) + lumaSWSE;\n    FxaaFloat edgeHorz = abs(edgeHorz3) + edgeHorz4;\n    FxaaFloat edgeVert = abs(edgeVert3) + edgeVert4;\n    FxaaFloat subpixNWSWNESE = lumaNWSW + lumaNESE;\n    FxaaFloat lengthSign = fxaaQualityRcpFrame.x;\n    FxaaBool horzSpan = edgeHorz >= edgeVert;\n    FxaaFloat subpixA = subpixNSWE * 2.0 + subpixNWSWNESE;\n    if(!horzSpan) lumaN = lumaW;\n    if(!horzSpan) lumaS = lumaE;\n    if(horzSpan) lengthSign = fxaaQualityRcpFrame.y;\n    FxaaFloat subpixB = (subpixA * (1.0/12.0)) - lumaM;\n    FxaaFloat gradientN = lumaN - lumaM;\n    FxaaFloat gradientS = lumaS - lumaM;\n    FxaaFloat lumaNN = lumaN + lumaM;\n    FxaaFloat lumaSS = lumaS + lumaM;\n    FxaaBool pairN = abs(gradientN) >= abs(gradientS);\n    FxaaFloat gradient = max(abs(gradientN), abs(gradientS));\n    if(pairN) lengthSign = -lengthSign;\n    FxaaFloat subpixC = FxaaSat(abs(subpixB) * subpixRcpRange);\n    FxaaFloat2 posB;\n    posB.x = posM.x;\n    posB.y = posM.y;\n    FxaaFloat2 offNP;\n    offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;\n    offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;\n    if(!horzSpan) posB.x += lengthSign * 0.5;\n    if( horzSpan) posB.y += lengthSign * 0.5;\n    FxaaFloat2 posN;\n    posN.x = posB.x - offNP.x * FXAA_QUALITY_P0;\n    posN.y = posB.y - offNP.y * FXAA_QUALITY_P0;\n    FxaaFloat2 posP;\n    posP.x = posB.x + offNP.x * FXAA_QUALITY_P0;\n    posP.y = posB.y + offNP.y * FXAA_QUALITY_P0;\n    FxaaFloat subpixD = ((-2.0)*subpixC) + 3.0;\n    FxaaFloat lumaEndN = FxaaLuma(FxaaTexTop(tex, posN));\n    FxaaFloat subpixE = subpixC * subpixC;\n    FxaaFloat lumaEndP = FxaaLuma(FxaaTexTop(tex, posP));\n    if(!pairN) lumaNN = lumaSS;\n    FxaaFloat gradientScaled = gradient * 1.0/4.0;\n    FxaaFloat lumaMM = lumaM - lumaNN * 0.5;\n    FxaaFloat subpixF = subpixD * subpixE;\n    FxaaBool lumaMLTZero = lumaMM < 0.0;\n    lumaEndN -= lumaNN * 0.5;\n    lumaEndP -= lumaNN * 0.5;\n    FxaaBool doneN = abs(lumaEndN) >= gradientScaled;\n    FxaaBool doneP = abs(lumaEndP) >= gradientScaled;\n    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P1;\n    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P1;\n    FxaaBool doneNP = (!doneN) || (!doneP);\n    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P1;\n    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P1;\n    if(doneNP) {\n        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n        doneN = abs(lumaEndN) >= gradientScaled;\n        doneP = abs(lumaEndP) >= gradientScaled;\n        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P2;\n        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P2;\n        doneNP = (!doneN) || (!doneP);\n        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P2;\n        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P2;\n        #if (FXAA_QUALITY_PS > 3)\n        if(doneNP) {\n            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n            doneN = abs(lumaEndN) >= gradientScaled;\n            doneP = abs(lumaEndP) >= gradientScaled;\n            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P3;\n            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P3;\n            doneNP = (!doneN) || (!doneP);\n            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P3;\n            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P3;\n            #if (FXAA_QUALITY_PS > 4)\n            if(doneNP) {\n                if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n                if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n                if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n                if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n                doneN = abs(lumaEndN) >= gradientScaled;\n                doneP = abs(lumaEndP) >= gradientScaled;\n                if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P4;\n                if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P4;\n                doneNP = (!doneN) || (!doneP);\n                if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P4;\n                if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P4;\n                #if (FXAA_QUALITY_PS > 5)\n                if(doneNP) {\n                    if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n                    if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n                    if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n                    if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n                    doneN = abs(lumaEndN) >= gradientScaled;\n                    doneP = abs(lumaEndP) >= gradientScaled;\n                    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P5;\n                    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P5;\n                    doneNP = (!doneN) || (!doneP);\n                    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P5;\n                    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P5;\n                    #if (FXAA_QUALITY_PS > 6)\n                    if(doneNP) {\n                        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n                        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n                        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n                        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n                        doneN = abs(lumaEndN) >= gradientScaled;\n                        doneP = abs(lumaEndP) >= gradientScaled;\n                        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P6;\n                        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P6;\n                        doneNP = (!doneN) || (!doneP);\n                        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P6;\n                        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P6;\n                        #if (FXAA_QUALITY_PS > 7)\n                        if(doneNP) {\n                            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n                            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n                            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n                            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n                            doneN = abs(lumaEndN) >= gradientScaled;\n                            doneP = abs(lumaEndP) >= gradientScaled;\n                            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P7;\n                            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P7;\n                            doneNP = (!doneN) || (!doneP);\n                            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P7;\n                            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P7;\n    #if (FXAA_QUALITY_PS > 8)\n    if(doneNP) {\n        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n        doneN = abs(lumaEndN) >= gradientScaled;\n        doneP = abs(lumaEndP) >= gradientScaled;\n        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P8;\n        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P8;\n        doneNP = (!doneN) || (!doneP);\n        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P8;\n        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P8;\n        #if (FXAA_QUALITY_PS > 9)\n        if(doneNP) {\n            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n            doneN = abs(lumaEndN) >= gradientScaled;\n            doneP = abs(lumaEndP) >= gradientScaled;\n            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P9;\n            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P9;\n            doneNP = (!doneN) || (!doneP);\n            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P9;\n            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P9;\n            #if (FXAA_QUALITY_PS > 10)\n            if(doneNP) {\n                if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n                if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n                if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n                if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n                doneN = abs(lumaEndN) >= gradientScaled;\n                doneP = abs(lumaEndP) >= gradientScaled;\n                if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P10;\n                if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P10;\n                doneNP = (!doneN) || (!doneP);\n                if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P10;\n                if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P10;\n                #if (FXAA_QUALITY_PS > 11)\n                if(doneNP) {\n                    if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n                    if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n                    if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n                    if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n                    doneN = abs(lumaEndN) >= gradientScaled;\n                    doneP = abs(lumaEndP) >= gradientScaled;\n                    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P11;\n                    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P11;\n                    doneNP = (!doneN) || (!doneP);\n                    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P11;\n                    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P11;\n                    #if (FXAA_QUALITY_PS > 12)\n                    if(doneNP) {\n                        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\n                        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\n                        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\n                        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\n                        doneN = abs(lumaEndN) >= gradientScaled;\n                        doneP = abs(lumaEndP) >= gradientScaled;\n                        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P12;\n                        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P12;\n                        doneNP = (!doneN) || (!doneP);\n                        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P12;\n                        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P12;\n                    }\n                    #endif\n                }\n                #endif\n            }\n            #endif\n        }\n        #endif\n    }\n    #endif\n                        }\n                        #endif\n                    }\n                    #endif\n                }\n                #endif\n            }\n            #endif\n        }\n        #endif\n    }\n    FxaaFloat dstN = posM.x - posN.x;\n    FxaaFloat dstP = posP.x - posM.x;\n    if(!horzSpan) dstN = posM.y - posN.y;\n    if(!horzSpan) dstP = posP.y - posM.y;\n    FxaaBool goodSpanN = (lumaEndN < 0.0) != lumaMLTZero;\n    FxaaFloat spanLength = (dstP + dstN);\n    FxaaBool goodSpanP = (lumaEndP < 0.0) != lumaMLTZero;\n    FxaaFloat spanLengthRcp = 1.0/spanLength;\n    FxaaBool directionN = dstN < dstP;\n    FxaaFloat dst = min(dstN, dstP);\n    FxaaBool goodSpan = directionN ? goodSpanN : goodSpanP;\n    FxaaFloat subpixG = subpixF * subpixF;\n    FxaaFloat pixelOffset = (dst * (-spanLengthRcp)) + 0.5;\n    FxaaFloat subpixH = subpixG * fxaaQualitySubpix;\n    FxaaFloat pixelOffsetGood = goodSpan ? pixelOffset : 0.0;\n    FxaaFloat pixelOffsetSubpix = max(pixelOffsetGood, subpixH);\n    if(!horzSpan) posM.x += pixelOffsetSubpix * lengthSign;\n    if( horzSpan) posM.y += pixelOffsetSubpix * lengthSign;\n    #if (FXAA_DISCARD == 1)\n        return FxaaTexTop(tex, posM);\n    #else\n        return FxaaFloat4(FxaaTexTop(tex, posM).xyz, lumaM);\n    #endif\n}\n";
    b._om = function(e) {
        var c;
        if (e._xv(fct._dri) && e._xv(fct._drj)) {
            c = 39
        } else {
            if (e._xv(fct._drj)) {
                c = 29
            } else {
                if (e._xv(fct._dri)) {
                    c = 12
                } else {
                    c = 10
                }
            }
        }
        var d = "precision mediump float;\n#define FXAA_QUALITY_PRESET " + c + "\n" + a + "\nuniform sampler2D _cs;\nuniform vec2 _bq;\nuniform float _br;\nuniform float _bt;\nuniform float _bu;\n\nvarying vec2 _iw;\n\nvoid main(void) {\n\tvec4 _mg = FxaaPixelShader(_iw, _cs, _bq.xy, _br, _bt, _bu);\n\tgl_FragColor = vec4(_mg.rgb, 1.0);\n}";
        return d
    };
    b._oq = function(c) {
        var d = new Array(0);
        d.push(elp._dzw);
        d.push(elp._dyv);
        d.push(elp._dyw);
        d.push(elp._dyy);
        d.push(elp._dyz);
        return d
    };
    return b
}();
var exz = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "";
        b += "precision mediump float;\n";
        if ((c._xv(fct._dpz))) {
            b += "const vec4 _qv=vec4(1.0/(256.0*256.0*256.0),1.0/(256.0*256.0),1.0/256.0,1.0);\n"
        }
        if (c._xv(fct._dqv)) {
            b += "varying vec4 _jg;\n"
        }
        if (c._xv(fct._dpw)) {
            b += "varying vec2 _le;\n";
            b += "uniform sampler2D _y;\n"
        }
        b += "void main(void) {\n";
        if (c._xv(fct._dpw)) {
            if (c._xv(fct._dqv)) {
                b += "vec4 _sn=texture2D(_y,vec2(_le.s,_le.t))*_jg;\n"
            } else {
                b += "vec4 _sn=texture2D(_y,vec2(_le.s,_le.t));\n"
            }
            if ((c._xv(fct._dpz))) {
                b += "float _so=dot(_sn,_qv);\n";
                b += "_sn=vec4(_so,_so,_so,1);\n;"
            }
            b += "gl_FragColor=_sn;"
        } else {
            if (c._xv(fct._dqv)) {
                b += "gl_FragColor=_jg;\n"
            }
        }
        b += "}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        if (b._xv(fct._dpw)) {
            c.push(elp._dyd)
        }
        return c
    };
    return a
}();
var eua = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "";
        b += "precision mediump float;\n";
        b += "varying vec4 _sy;\n";
        b += "varying vec4 _jg;\n";
        b += "varying vec3 _ta;\n";
        if (c._xv(fct._dpz)) {
            b += "varying vec4 _li;\n"
        }
        b += "varying vec4 _lc;\n";
        b += "varying vec4 _tb;\n";
        if (c._xv(fct._drh)) {
            b += fgm._skf(c)
        }
        if (c._xv(fct._dpp)) {
            if (c._xv(fct._dpr)) {
                b += "uniform vec3 _n;\n";
                b += "uniform float _q;\n";
                b += "uniform float _gf;\n";
                b += "uniform vec3 _gh;\n"
            }
        }
        if (c._xv(fct._dpw)) {
            b += "uniform sampler2D _t;\n";
            b += "uniform vec3 _u;\n";
            if (c._xv(fct._dpx)) {
                b += "uniform sampler2D _w;\n";
                b += "uniform vec3 _x;\n"
            }
        }
        if (c._xv(fct._dpz)) {
            b += "uniform sampler2D _bi;\n";
            b += "uniform float _bg;\n";
            b += "uniform vec4 _bk;\n"
        }
        b += "uniform vec4 _fh;\n";
        b += "uniform vec4 _fj;\n";
        b += "uniform vec4 _fl;\n";
        b += "uniform vec4 _gd;\n";
        b += "uniform float _fp;\n";
        b += "uniform float _fs;\n";
        if (c._xv(fct._dra) || c._xv(fct._drb)) {
            b += "uniform float _fw;\n";
            b += "uniform float _gl;\n"
        } else {
            b += "uniform float _fy;\n"
        }
        b += "uniform float _ga;\n";
        b += "uniform vec4 _fr;\n";
        b += "uniform float _fg;\n";
        b += "uniform float _gc;\n";
        if (c._xv(fct._dra)) {
            b += "uniform sampler2D _du;\n";
            b += "uniform vec2 _dv;\n"
        }
        if (c._xv(fct._drb)) {
            b += "uniform sampler2D _dw;\n"
        }
        if (c._xv(fct._dqf)) {
            b += "uniform vec4 _ce;\n";
            b += "uniform float _cf;\n";
            b += "uniform float _ch;\n"
        }
        b += "uniform vec3 _dy;\n";
        b += "uniform float _dz;\n";
        b += "uniform float _ea;\n";
        if (c._xv(fct._dql)) {
            b += "uniform samplerCube _cr;\n"
        }
        b += "const float _td=-0.1137254901960784;\n";
        b += "const float _te=0.30;\n";
        b += "const vec3 _tg=vec3(-0.5,0.0,-0.5);\n";
        b += "const vec3 _ti=vec3(2.0,1.0,2.0);\n";
        "\n";
        b += exq._om(c);
        b += fkl._om(c);
        if (c._xv(fct._dpw)) {
            b += fmx._om(c, epp._cgo)
        }
        if (c._xv(fct._dpz)) {
            b += fid._om(c)
        }
        if (c._xv(fct._dqf)) {
            b += epg._om(c)
        }
        if (c._xv(fct._drh)) {
            b += fgm._ski(c)
        }
        b += "float _tj(float _tl, float _tm, float _ke) {\n";
        b += "\t_ke=clamp((_ke-_tl)/(_tm-_tl),0.0,1.0);\n";
        b += "\treturn _ke*_ke*_ke*(_ke*(_ke*6.0-15.0)+10.0);\n";
        b += "}";
        b += "float _to(vec3 _tt, vec3 _tu, float _tp, float _tr) {\n";
        b += "\tfloat _tv=1.0-clamp(dot(_tt,_tu),0.0,1.0);\n";
        b += "\tfloat _tw=_tv*_tv;\n";
        b += "\t_tw*=_tw;\n";
        b += "\t_tw*=_tv;\n";
        b += "\treturn clamp(_tw*(1.0-clamp(_tp,0.0,1.0))+_tp-_tr,0.0,1.0);\n";
        b += "}";
        b += "void main(void) {\n";
        b += "vec3 _io=_sy.xyz-_lc.xyz;\n";
        b += "float _mb=0.0;\n";
        b += "_mb=(_dz-_lc.w)/(_dz-_ea);\n";
        b += "_mb=clamp(_mb,0.0,1.0);\n";
        b += "vec4 _px=vec4(mix(_jg.rgb,_dy,_mb),_jg.a);\n";
        if (c._xv(fct._dro)) {
            if (c._xv(fct._dpx)) {
                b += "vec4 _tx=_oy(vec4(_tb.pq,_fh.y,_fh.x),_t,_w,0.0,_u,_x).rgba;\n";
                b += "vec4 _ty=_oy(vec4(_tb.pq,_fj.y,_fj.x),_t,_w,0.0,_u,_x).rgba;\n"
            } else {
                b += "vec4 _tx=_oy(vec4(_tb.pq,_fh.y,_fh.x),_t,_u).rgba;\n";
                b += "vec4 _ty=_oy(vec4(_tb.pq,_fj.y,_fj.x),_t,_u).rgba;\n"
            }
            b += "float _tz=_sy.w;\n";
            b += "_tx.a*=_tz;\n";
            b += "_ty.a*=_tz;\n";
            b += "vec4 _ua=mix(_px,_tx,clamp(_fh.y,0.0,1.0));\n";
            b += "vec4 _uc=mix(_px,_ty,clamp(_fj.y,0.0,1.0));\n"
        } else {
            b += "vec4 _ua=_px;\n";
            b += "vec4 _uc=_px;\n"
        }
        if (c._xv(fct._dpx)) {
            b += "float _ue=_oy(vec4(_tb.st,_gd.y,_gd.x),_t,_w,0.0,_u,_x).r;\n";
            b += "vec3 _ug=_om(vec4(_tb.pq,_fh.z,_fh.x),_t,_w,0.0,_u,_x,1.0).rgb;\n";
            b += "vec3 _uh=_om(vec4(_tb.pq,_fj.z,_fj.x),_t,_w,0.0,_u,_x,1.0).rgb;\n"
        } else {
            b += "float _ue=_oy(vec4(_tb.st,_gd.y,_gd.x),_t,_u).r;\n";
            b += "vec3 _ug=_om(vec4(_tb.pq,_fh.z,_fh.x),_t,_u,1.0).rgb;\n";
            b += "vec3 _uh=_om(vec4(_tb.pq,_fj.z,_fj.x),_t,_u,1.0).rgb;\n"
        }
        b += "_ug.rg+=_td;\n";
        b += "_ug.rgb=_ug.rgb*2.0-1.0;\n";
        b += "_ug.xyz=_ug.xzy;\n";
        b += "_uh.rg+=_td;\n";
        b += "_uh.rgb=_uh.rgb*2.0-1.0;\n";
        b += "_uh.xyz=_uh.xzy;\n";
        b += "float _ui=mix(1.0,0.0,smoothstep(0.0,0.5,_gc));\n";
        b += "float _uk=mix(0.0,1.0,smoothstep(0.5,1.0,_gc));\n";
        b += "float _ul=mix(_ui,_uk,step(0.5,_gc));\n";
        b += "float _um=mix(_ul,_ue*_ul,smoothstep(0.0,0.5,_gc));\n";
        b += "float _un=mix((1.0-_ue)*_ul,_ul,smoothstep(0.5,1.0,_gc));\n";
        b += "float _up=mix(_um,_un,step(0.5,_gc));\n";
        b += "_ug=mix(_ug,_uh,_up);\n";
        if (c._xv(fct._dra) || c._xv(fct._drb)) {
            b += "vec3 _tt=normalize(mix(_ta,_ug,_fw));\n"
        } else {
            b += "vec3 _tt=normalize(mix(_ta,_ug,_fy));\n"
        }
        b += "_ua=mix(_ua,_uc,_up);\n";
        if (c._xv(fct._dpz)) {
            b += "float _kn=length(_io);\n";
            b += "float _kb=_kl(vec4(_li.xy+_tt.xz*0.009,_li.zw),_bi,_bg,_bk,_kn);\n"
        } else {
            b += "float _kb=1.0;\n"
        }
        b += "_io=normalize(_io);\n";
        if (c._xv(fct._dra) || c._xv(fct._drb)) {
            b += "float _uq=min(_lc.w,64.0)/4.0;\n";
            if (c._xv(fct._dra)) {
                b += "vec4 _ur=texture2D(_du,(gl_FragCoord.xy+(_tt.xz*_uq+vec2(0.0,-6.0)))*_dv);\n";
                b += "vec3 _us=reflect(vec3(-_io.x,-_io.y,_io.z),vec3(0.0,1.0,0.0));\n";
                b += "_ur=_ur*(_gl)+textureCube(_cr,_us)*(1.0-_gl);\n";
                b += "_ur=_ur*_fs+_ua*max(0.0,1.0-(_fs)); _ur.a=0.0;\n"
            } else {
                b += "vec4 _ur=vec4(0.0,0.0,0.0,0.0);\n"
            }
            if (c._xv(fct._drb)) {
                b += "vec4 _ut=texture2D(_dw,(gl_FragCoord.xy+(_tt.xz*_uq+vec2(0.0,-6.0)))*_dv);\n"
            } else {
                b += "vec4 _ut=vec4(0.0,0.0,0.0,0.0);\n"
            }
        } else {
            if (c._xv(fct._dql)) {
                b += "vec3 _us=reflect(vec3(-_io.x,-_io.y,_io.z),vec3(0.0,1.0,0.0));\n";
                b += "vec4 _ur=textureCube(_cr,_us);\n";
                b += "_ur=_ur*_fs+_ua*max(0.0,1.0-(_fs)); _ur.a=0.0;\n";
                b += "vec4 _ut=vec4(0.0,0.0,0.0,1.0);\n"
            } else {
                b += "vec4 _ur=vec4(0.0,0.0,0.0,0.0);\n";
                b += "vec4 _ut=vec4(0.0,0.0,0.0,0.0);\n"
            }
        }
        b += "float _uu=max(0.0,sign(_fp))*min(1.0, 1.0-min(_lc.w/_fp,1.0));\n";
        if (c._xv(fct._dpx)) {
            b += "vec4 _uw=(_fr/255.0)*_oy(vec4(_tb.pq*_fl.w,_fl.y,_fl.x),_t,_w,0.0,_u,_x)*_uu;\n"
        } else {
            b += "vec4 _uw=(_fr/255.0)*_oy(vec4(_tb.pq*_fl.w,_fl.y,_fl.x),_t,_u)*_uu;\n"
        }
        b += "float _uy=-clamp(_ga,0.0,1.0);\n";
        b += "float _uz=1.0-_to(_tt,_io,_te,_uy);\n";
        b += "_uz=_tj(0.0,1.0,_uz);\n";
        if (c._xv(fct._dpr)) {
            b += "vec3 _vb=normalize(_n);\n";
            b += "vec3 _vd=normalize(_vb+_io);\n";
            b += "float _ve=dot(_vd,_tt);\n";
            b += "float _vg=clamp(_ve*0.5+0.5,0.0,1.0);\n";
            b += "vec3 _vh=_uz*clamp(_vb.y,0.0,1.0)*(pow(_vg,_q)*(_gf*1.8+0.2))*_gh;\n";
            b += "_vh+=_vh*25.0*clamp(_gf-0.05,0.0,1.0)*_gh;\n";
            b += "vec3 _vj=(1.0-_uu)*clamp(_ua.a,0.0,1.0)*_vh.rgb;\n"
        } else {
            b += "vec3 _vj=vec3(0.0,0.0,0.0);\n"
        }
        b += "float _vl=950.0;\n";
        b += "float _vn=min(1.0,1.0-min(_lc.w/_vl,1.0));\n";
        b += "_vn=pow(clamp(_vn*_vn*_vn*(_vn*(_vn*6.0-15.0)+10.0),0.0,1.0),15.0);";
        b += "vec3 _vo=mix(_ur.rgb,_ua.rgb*0.5,_uz);\n";
        b += "vec3 _vp=mix(_ur.rgb,_ut.rgb,_uz);\n";
        b += "vec4 _ik=vec4(mix(_vo,_vp,_vn)*_ua.rgb*_kb,_ua.a);\n";
        if (c._xv(fct._dql) && c._qhr(fct._dra)) {
            b += "_ik.a*=(1.0-_vn*0.5);\n"
        }
        b += "_ik=clamp(_ik,0.0,1.0);\n";
        b += "_ik+=clamp(vec4(_uw.rgb,_uw.a),0.0,1.0);\n";
        b += "_ik+=step(1.0,_kb)*vec4(_vj,0.0);\n";
        if (c._xv(fct._drh)) {
            b += "_ik.xyz=_bbf(_ik.xyz, _zt, _zv);\n"
        }
        if (c._xv(fct._dqf)) {
            b += "_ik=_ws(_ik,_ce,_ch,_cf);\n"
        }
        b += "gl_FragColor=_ik;\n";
        b += "}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        if (b._xv(fct._dpp)) {
            if (b._xv(fct._dpr)) {
                c.push(elp._dxn);
                c.push(elp._dxt);
                c.push(elp._edh);
                c.push(elp._edi)
            }
        }
        if (b._xv(fct._dpw)) {
            c.push(elp._dxx);
            c.push(elp._dxz);
            if (b._xv(fct._dpx)) {
                c.push(elp._dya);
                c.push(elp._dyb)
            }
        }
        if (b._xv(fct._dpz)) {
            c.push(elp._dyn);
            c.push(elp._dyj);
            c.push(elp._dyp)
        }
        if (b._xv(fct._dqf)) {
            c.push(elp._dzh);
            c.push(elp._dzi);
            c.push(elp._dzk)
        }
        c.push(elp._eaz);
        c.push(elp._eba);
        c.push(elp._ebb);
        if (b._xv(fct._dra)) {
            c.push(elp._eav);
            c.push(elp._eaw)
        }
        if (b._xv(fct._drb)) {
            c.push(elp._eax)
        }
        if (b._xv(fct._dql)) {
            c.push(elp._dzu)
        }
        c.push(elp._ecm);
        c.push(elp._ecn);
        c.push(elp._ecp);
        c.push(elp._edf);
        c.push(elp._ecs);
        c.push(elp._ect);
        c.push(elp._eck);
        c.push(elp._ede);
        c.push(elp._ecv);
        if (b._xv(fct._dra) || b._xv(fct._drb)) {
            c.push(elp._edb);
            c.push(elp._edm)
        } else {
            c.push(elp._edc)
        }
        c.push(elp._edd);
        return c
    };
    return a
}();
var eud = function() {
    var b = {};
    b._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    var c = "";
    var a = function(e) {
        c += "vec3 _kz;\n";
        c += "float _la;\n";
        for (var d = 0; d < e; ++d) {
            c += "_kz=_bo[" + d + "].xyz-_ya.xyz;\n";
            c += "_la=clamp(dot(_ln,normalize(_kz)),0.0,1.0);\n";
            c += "_la*=1.0-clamp(length(_kz)*_bo[" + d + "].w,0.0,1.0);\n";
            c += "_la*=clamp(_bm-" + d + ".0, 0.0, 1.0);\n";
            c += "_rn=_rn+_yq(float(_bp[" + d + "]))*_la;\n"
        }
    };
    b._om = function(g) {
        var e = "";
        e += "precision mediump float;\n";
        if (g._xv(fct._nv)) {
            e += "varying vec4 _lg;\n";
            if (g._xv(fct._dqj)) {
                e += "uniform vec4 _ei;\n"
            }
            e += "void main(void) {\n";
            if (g._xv(fct._dqj)) {
                e += "float _lk=_baf(gl_FragCoord.xy,_ei.xy);\n";
                e += "if (_lk<_ei.z && (1.0/gl_FragCoord.w)<_ei.w) {\n";
                e += "   discard;\n";
                e += "   return;\n"
            }
            e += "gl_FragColor=_lg*0.5+0.5;\n";
            e += "}\n"
        } else {
            if (g._xv(fct._dqv)) {
                e += "varying vec4 _jg;\n"
            }
            var d = false;
            if (g._xv(fct._dpp)) {
                d = true
            }
            if (g._xv(fct._dpw)) {
                e += "varying mat4 _le;\n"
            }
            if (g._xv(fct._dqh)) {
                e += "varying vec4 _qu;\n"
            }
            if (g._xv(fct._drh)) {
                e += fgm._skf(g)
            }
            var h = false;
            if (g._xv(fct._dpz)) {
                h = true
            }
            if (d || h) {
                e += "varying vec3 _lg;\n";
                e += "varying vec4 _ya;\n"
            }
            if (g._xv(fct._dpp)) {
                e += "uniform vec3 _m;\n";
                e += "uniform vec3 _n;\n";
                e += "uniform vec3 _o;\n";
                e += "uniform vec3 _p;\n";
                if (g._xv(fct._dps)) {
                    e += "uniform vec4 _bo[" + fty._nvz + "];\n";
                    e += "uniform int _bp[" + fty._nvz + "];\n";
                    e += "uniform float _bm;\n"
                }
            }
            if (g._xv(fct._dpw)) {
                e += "uniform sampler2D _t;\n";
                e += "uniform vec3 _u;\n";
                if (g._xv(fct._dpx)) {
                    e += "uniform sampler2D _w;\n";
                    e += "uniform vec3 _x;\n"
                }
            }
            if (g._xv(fct._dpz)) {
                e += "uniform sampler2D _bi;\n";
                e += "uniform float _bg;\n";
                e += "uniform mat4 _bh;\n";
                e += "uniform vec4 _bk;\n";
                e += "const mat4 _vr=mat4(0.5,0.0,0.0,0.0,0.0,0.5,0.0,0.0,0.0,0.0,0.5,0.0,0.5,0.5,0.5,1.0);\n"
            }
            if (g._xv(fct._dqf)) {
                e += "uniform vec4 _ce;\n";
                e += "uniform float _cf;\n";
                e += "uniform float _ch;\n"
            }
            if (g._xv(fct._dqj)) {
                e += "uniform vec4 _ei;\n"
            }
            e += exq._om(g);
            e += fkl._om(g);
            if (g._xv(fct._dpw)) {
                e += fmx._om(g, epp._cgo)
            }
            if (g._xv(fct._dpz)) {
                e += fid._om(g)
            }
            if (g._xv(fct._dqf)) {
                e += epg._om(g)
            }
            if (g._xv(fct._drh)) {
                e += fgm._ski(g)
            }
            e += "void main(void) {\n";
            if (g._xv(fct._dqj)) {
                e += "float _lk=_baf(gl_FragCoord.xy,_ei.xy);\n";
                e += "if (_lk<_ei.z && (1.0/gl_FragCoord.w)<_ei.w) {\n";
                e += "   discard;\n";
                e += "   return;\n";
                e += "}\n"
            }
            if (g._xv(fct._dpw)) {
                if (g._xv(fct._dpx)) {
                    e += "vec4 _on=_le[0];\n";
                    e += "float _qz=step(32768.0,_on.w);\n";
                    e += "_on.w=_on.w-_qz*65536.0;\n";
                    e += "vec4 _rb=_oy(_on,_t,_w,_qz,_u,_x);\n";
                    e += "vec4 _rc=_le[1];\n";
                    e += "float _re=step(32768.0,_rc.w);\n";
                    e += "_rc.w=_rc.w-_re*65536.0;\n";
                    e += "vec4 _rf=_oy(_rc,_t,_w,_re,_u,_x);\n";
                    e += "vec4 _rg=_le[2];\n";
                    e += "float _ri=step(32768.0,_rg.w);\n";
                    e += "_rg.w=_rg.w-_ri*65536.0;\n";
                    e += "vec4 _rj=_oy(_rg,_t,_w,_ri,_u,_x);\n"
                } else {
                    e += "vec4 _rb=_oy(_le[0],_t,_u);\n";
                    e += "vec4 _rf=_oy(_le[1],_t,_u);\n";
                    e += "vec4 _rj=_oy(_le[2],_t,_u);\n"
                }
                e += "vec4 _rl=vec4(_rb*_le[3].x+_rf*_le[3].y+_rj*_le[3].z);\n";
                e += "vec4 _ik=vec4(_rl.rgb*_jg.rgb,_jg.a);\n"
            } else {
                if (g._xv(fct._dqv)) {
                    e += "vec4 _ik=_jg;\n"
                } else {
                    if (g._xv(fct._od)) {
                        e += "vec4 _ik=vec4(1.0,1.0,1.0,1.0);\n"
                    } else {
                        if (g._xv(fct._dqw)) {
                            if (g._xv(fct._dqy)) {
                                e += "vec4 _ik=vec4(0.0,0.0,0.0,1.0);\n"
                            } else {
                                e += "vec4 _ik=_ql(gl_FragCoord.z);\n"
                            }
                        }
                    }
                }
            }
            if (g._xv(fct._dpp)) {
                e += "vec3 _ln=normalize(_lg);\n";
                e += "float _lp=dot(_ln,_n);\n";
                e += "vec3 _rn=_m+_o*clamp(_lp,0.0,1.0)+_p*clamp(_lp,-1.0,0.0);\n";
                if (g._xv(fct._dps)) {
                    if (c.length === 0) {
                        a(fty._nvz)
                    }
                    e += c
                }
            } else {
                if (g._xv(fct._dpn)) {
                    e += "vec3 _rn=vec3(1.0,1.0,1.0);\n"
                }
            }
            if (g._xv(fct._dpz)) {
                e += "float _yd = _kl(_vr*_bh*vec4(_ya.xyz,1.0),_bi,_bg,_bk,_ya.w);\n";
                e += "_rn*=_yd;\n"
            }
            if (g._xv(fct._nv)) {
                e += "_rn*=texture2D(_qw,gl_FragCoord.xy*_qx).x;\n"
            }
            if (g._xv(fct._dpp) || g._xv(fct._dpn)) {
                e += "_ik=vec4(_ik.rgb*_rn,_ik.a);\n"
            }
            if (g._xv(fct._drh)) {
                e += "_ik.xyz=_bbf(_ik.xyz, _zt, _zv);\n"
            }
            if (g._xv(fct._dqf)) {
                e += "_ik=_ws(_ik,_ce,_ch,_cf);\n"
            }
            if (g._xv(fct._dqh)) {
                e += "_ik=_ik*(1.0-_qu.w)+vec4(_qu.rgb,1.0)*_qu.w;\n"
            }
            e += "gl_FragColor=_ik;\n";
            e += "}\n"
        }
        return e
    };
    b._oq = function(d) {
        var e = new Array(0);
        if (d._xv(fct._dqj)) {
            e.push(elp._ebl)
        }
        if (d._xv(fct._nv)) {} else {
            if (d._xv(fct._dpp)) {
                e.push(elp._dxm);
                e.push(elp._dxn);
                e.push(elp._dxp);
                e.push(elp._dxr);
                if (d._xv(fct._dps)) {
                    e.push(elp._dys);
                    e.push(elp._dyt);
                    e.push(elp._dyr)
                }
            }
            if (d._xv(fct._dpw)) {
                e.push(elp._dxx);
                e.push(elp._dxz);
                if (d._xv(fct._dpx)) {
                    e.push(elp._dya);
                    e.push(elp._dyb)
                }
            }
            if (d._xv(fct._dpz)) {
                e.push(elp._dyn);
                e.push(elp._dyj);
                e.push(elp._dyl);
                e.push(elp._dyp)
            }
            if (d._xv(fct._dqf)) {
                e.push(elp._dzh);
                e.push(elp._dzi);
                e.push(elp._dzk)
            }
        }
        return e
    };
    return b
}();
var fgc = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "";
        b += "attribute vec4 _gx;\n";
        b += "attribute vec4 _ha;\n";
        b += "attribute vec4 _hi;\n";
        b += "attribute vec4 _hy;\n";
        if (c._xv(fct._dqo) || c._xv(fct._dpx)) {
            b += "attribute vec4 _he;\n"
        }
        b += "attribute vec4 _ib;\n";
        b += "const float _wi=3.14159265358979323846264;\n";
        b += "uniform mat4 _f;\n";
        b += "uniform mat4 _d;\n";
        b += "uniform mat4 _b;\n";
        b += "uniform vec4 _fa;\n";
        if (c._xv(fct._dqo)) {
            b += "uniform vec4 _bb[" + 3 * elr._ssp + "];\n";
            b += "uniform vec4 _bc[" + elr._ssr + "];\n";
            b += "uniform vec4 _be[" + (elr._sss * 2) + "];\n"
        }
        b += "varying vec4 _jg;\n";
        b += "varying vec4 _le;\n";
        b += "varying vec4 _nu;\n";
        if (c._xv(fct._dpx)) {
            b += "varying float _md;\n"
        }
        b += "void main(void) {\n";
        b += "vec2 _js=_hi.xy;\n";
        b += "float _wk=_ib.x;\n";
        if (c._xv(fct._dqo)) {
            b += "int _vt=int(_he.y*3.0);\n";
            b += "mat4 _wm=mat4(";
            b += "vec4(_bb[_vt].xyz,0.0),";
            b += "vec4(_bb[_vt].w,_bb[_vt+1].xy,0.0),";
            b += "vec4(_bb[_vt+1].zw,_bb[_vt+2].x,0.0),";
            b += "vec4(_bb[_vt+2].yzw,1.0));\n";
            b += "vec4 _wn=_d*_f*_wm*vec4(_gx.xyz,1.0);\n";
            b += "_wn.xy+=_be[int(_he.w)].xy;\n";
            b += "_js.xy*=_be[int(_he.w)].zw;\n";
            b += "_wk+=_be[int(_he.w)+1].x;\n"
        } else {
            b += "vec4 _wn=_d*_f*vec4(_gx.xyz,1.0);\n"
        }
        b += "_wk=(_wk*2.0*_wi)/256.0;\n";
        b += "_js.x*=cos(_wk);\n";
        b += "_js.y*=sin(_wk);\n";
        b += "_wn.xy+=_js.xy;\n";
        b += "_wn.z+=_gx.w;\n";
        b += "gl_Position=_b*_wn;\n";
        b += "_jg=_ha;\n";
        if (c._xv(fct._dqo)) {
            b += "_jg.a+=_bc[int(_he.z)].a;\n";
            b += "_jg.a=clamp(_jg.a,0.0,1.0);\n"
        }
        b += "_jg+=_fa;\n";
        b += "_le=_hi;\n";
        b += "_le.x=_ib.y;\n";
        b += "_le.y=_ib.z;\n";
        b += "_nu=_hy;\n";
        if (c._xv(fct._dpx)) {
            b += "_md=_he.x;\n"
        }
        b += "}\n";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._edy);
        c.push(elp._eeb);
        c.push(elp._eek);
        c.push(elp._eez);
        if (b._xv(fct._dqo) || b._xv(fct._dpx)) {
            c.push(elp._eef)
        }
        c.push(elp._efd);
        c.push(elp._dxe);
        c.push(elp._dxf);
        c.push(elp._dxc);
        c.push(elp._ece);
        if (b._xv(fct._dqo)) {
            c.push(elp._dyf);
            c.push(elp._dyg);
            c.push(elp._dyi)
        }
        return c
    };
    return a
}();
var euh = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec2 _iw;\n\nuniform float _ew;\nuniform sampler2D _cs;\nuniform sampler2D _cu;\nconst float _bbh=0.003;\nconst float _bbj=100.0;\nconst float _bbk=0.2;\nconst float _bbm=0.003;\nconst float _bbn=13.0;\nconst float _bbp=0.4;\nvoid main(void) {\n\tvec4 _bbq=texture2D(_cu,_iw);\n\tvec2 _mz=_iw;\n\tfloat _bbr =  _bbh * sin(_bbj * _mz.x) * sin(_bbk * _ew);\n\tfloat _bbs =  _bbm * sin(_bbn * _mz.y) * sin(_bbp * _ew);\n\tvec2 _bbu = _mz + vec2(_bbr, _bbs)*_bbq.r*_bbq.a;\n\tvec4 _sq=texture2D(_cs,_bbu);\n";
        if (c._xv(fct._dqd)) {
            b += "\tgl_FragColor=vec4(_bbq.rrr*_bbq.a, 1.0);\n"
        } else {
            b += "\tgl_FragColor=vec4(_sq.rgb, 1.0);\n"
        }
        b += "}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._ebx);
        c.push(elp._dzw);
        c.push(elp._dzy);
        return c
    };
    return a
}();
var euj = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec2 _iw;\n\nuniform sampler2D _cs;\nuniform sampler2D _cu;\nvoid main(void) {\n\tvec4 _sj=texture2D(_cs,_iw);\n\tvec4 _sl=texture2D(_cu,_iw);\n";
        if (c._xv(fct._dqa)) {
            b += "\tgl_FragColor=vec4(_sl.rgb, 1.0);\n"
        } else {
            b += "\tgl_FragColor=vec4(_sj.rgb*_sl.rgb, 1.0);\n"
        }
        b += "}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        c.push(elp._dzy);
        return c
    };
    return a
}();
var fts = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nuniform sampler2D _cs;\nuniform vec4 _ep;\n\nvarying vec2 _iw;\n\nfloat _yt[10];\n\n\nfloat _yu ( float _yv, float _yw, float _yx, float _yz ) {\n\treturn ( _yw + log( _yv + (_yx * exp(_yz - _yw) ) ) );\n}\n\nvec4 _za() {\n\t_yt[0] = 0.0882357;\n\t_yt[1] = 0.0957407;\n\t_yt[2] = 0.101786;\n\t_yt[3] = 0.106026;\n\t_yt[4] = 0.108212;\n\t_yt[5] = 0.108212;\n\t_yt[6] = 0.106026;\n\t_yt[7] = 0.101786;\n\t_yt[8] = 0.0957407;\n\t_yt[9] = 0.0882357;\n\n\tfloat _zc[10];\n\n\tfor (int _sd = 0; _sd < 10; _sd++) {\n\t\tfloat _ze = float(_sd) - 4.5;\n\t\tvec2 _zg = vec2(_iw.x + _ze * _ep.x, _iw.y + _ze * _ep.y);\n";
        if (c._xv(fct._dqy)) {
            b += "\t\t_zc[_sd] = texture2D(_cs, _zg).r;\n"
        } else {
            b += "\t\t_zc[_sd] = dot(texture2D(_cs, _zg),_qv);\n"
        }
        b += "\t}\n\n\tfloat _zh;\n\t_zh = _yu(_yt[0], _zc[0], _yt[1], _zc[1]);\n\tfor (int _sd = 2; _sd < 10; _sd++) {\n\t\t_zh = _yu(1.0, _zh, _yt[_sd], _zc[_sd]);\n\t}\n\n\treturn vec4(_zh, 0.0, 0.0, 0.0);\n}\n\nvoid main() {\n\tgl_FragColor = _za();\n}\n";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        c.push(elp._ebr);
        return c
    };
    return a
}();
var ewg = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec2 _iw;\n\nuniform sampler2D _cs;\nuniform float _cv;\n\nconst vec3 _ix=vec3(0.2126,0.7152,0.0722);\n\nvoid main(void) {\n\tvec4 _pq=texture2D(_cs,_iw);\n\tgl_FragColor=_pq*step(_cv,dot(_ix,_pq.rgb));\n}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        c.push(elp._eaa);
        return c
    };
    return a
}();
var eph = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec2 _iw;\n\nuniform sampler2D _cs;\nuniform float _db;\nuniform vec4 _dd;\n\nvec3 _pw(vec3 _px, float _pu, float _pv) {\n\treturn clamp((_px - _pu) / (_pv - _pu),0.0,1.0);\n}\nvec3 _qc(vec3 _px, float _py, float _qa) {\n\treturn mix(vec3(_py,_py,_py), vec3(_qa,_qa,_qa), _px);\n}\nvec3 _qe(vec3 _px, float _qd, float _pu, float _pv, float _py, float _qa) {\n\tvec3 _qf = _pw(_px, _pu, _pv);\n\tvec3 _qh = clamp(pow(_qf, vec3(_qd,_qd,_qd)),0.0,1.0);\n\treturn _qc(_qh, _py, _qa);\n}\n\nvoid main(void) {\n\tvec3 _px=clamp(texture2D(_cs,_iw).rgb,0.0,1.0);\n\t_px=_qe(_px,_db,_dd.x,_dd.y,_dd.z,_dd.w);\n\tgl_FragColor=vec4(_px,1.0);\n}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        c.push(elp._eaf);
        c.push(elp._eag);
        return c
    };
    return a
}();
var fdt = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "";
        b += "precision mediump float;\n";
        b += "varying vec4 _jg;\n";
        if (c._xv(fct._dpw)) {
            b += "varying vec4 _le;\n";
            b += "varying float _md;\n"
        }
        if (c._xv(fct._dpw)) {
            b += "uniform sampler2D _t;\n";
            b += "uniform vec3 _u;\n";
            if (c._xv(fct._dpx)) {
                b += "uniform sampler2D _w;\n";
                b += "uniform vec3 _x;\n"
            }
        }
        if (!c._xv(fct._od) && c._xv(fct._dqf)) {
            b += "uniform vec4 _ce;\n";
            b += "uniform float _cf;\n";
            b += "uniform float _ch;\n"
        }
        if (c._xv(fct._drk)) {
            b += "uniform float _ek;\n"
        }
        if (c._xv(fct._dpw)) {
            b += fmx._om(c, epp._cgm)
        }
        if (c._xv(fct._dqf)) {
            b += epg._om(c)
        }
        b += "void main(void) {\n";
        if (c._xv(fct._dpw)) {
            if (c._xv(fct._dpx)) {
                b += "vec4 _mf=_oy(_le,_t,_w,_md,_u,_x);\n"
            } else {
                b += "vec4 _mf=_oy(_le,_t,_u);\n"
            }
            b += "vec4 _ik=_jg*clamp(_mf,0.0,1.0);\n"
        } else {
            b += "vec4 _ik=_jg;\n"
        }
        if (c._xv(fct._drk)) {
            b += "if (_ik.a<=_ek) {\n";
            b += "\tdiscard;\n";
            b += "\treturn;\n";
            b += "}\n"
        }
        if (!c._xv(fct._od) && c._xv(fct._dqf)) {
            b += "_ik=_ws(_ik,_ce,_ch,_cf);\n"
        }
        if (c._xv(fct._od)) {
            b += "_ik.rgb=vec3(1.0, 1.0, 1.0);\n"
        }
        b += "gl_FragColor=_ik;\n";
        b += "}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        if (b._xv(fct._dpw)) {
            c.push(elp._dxx);
            c.push(elp._dxz);
            if (b._xv(fct._dpx)) {
                c.push(elp._dya);
                c.push(elp._dyb)
            }
        }
        if (!b._xv(fct._od) && b._xv(fct._dqf)) {
            c.push(elp._dzh);
            c.push(elp._dzi);
            c.push(elp._dzk)
        }
        if (b._xv(fct._drk)) {
            c.push(elp._ebn)
        }
        return c
    };
    return a
}();
var fnk = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec2 _iw;\n\nuniform sampler2D _cs;\nuniform vec2 _el;\nuniform vec4 _en;\n\nvoid main(void) {\n   vec4 _vq=texture2D(_cs,_iw);\n   if (_vq.a<1.0) {\n       vec4 _je=vec4(0.0,0.0,0.0,0.0);\n       _je+=texture2D(_cs,_iw)*0.091396265;\n       _je+=texture2D(_cs,_iw+(-1.0*_el))*0.088584304;\n       _je+=texture2D(_cs,_iw+( 1.0*_el))*0.088584304;\n       _je+=texture2D(_cs,_iw+(-2.0*_el))*0.08065692;\n       _je+=texture2D(_cs,_iw+( 2.0*_el))*0.08065692;\n       _je+=texture2D(_cs,_iw+(-3.0*_el))*0.068989515;\n       _je+=texture2D(_cs,_iw+( 3.0*_el))*0.068989515;\n       _je+=texture2D(_cs,_iw+(-4.0*_el))*0.055434637;\n       _je+=texture2D(_cs,_iw+( 4.0*_el))*0.055434637;\n       _je+=texture2D(_cs,_iw+(-5.0*_el))*0.04184426;\n       _je+=texture2D(_cs,_iw+( 5.0*_el))*0.04184426;\n       _je+=texture2D(_cs,_iw+(-6.0*_el))*0.029672023;\n       _je+=texture2D(_cs,_iw+( 6.0*_el))*0.029672023;\n       _je+=texture2D(_cs,_iw+(-7.0*_el))*0.019765828;\n       _je+=texture2D(_cs,_iw+( 7.0*_el))*0.019765828;\n       _je+=texture2D(_cs,_iw+(-8.0*_el))*0.012369139;\n       _je+=texture2D(_cs,_iw+( 8.0*_el))*0.012369139;\n       _je*=2.0;\n       gl_FragColor=_je*_en;\n   }\n   else {\n       gl_FragColor=_vq;\n   }\n}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        c.push(elp._ebo);
        c.push(elp._ebq);
        return c
    };
    return a
}();
var fay = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "";
        b += "attribute vec3 _gx;\n";
        b += "attribute vec4 _ha;\n";
        if (c._xv(fct._dpw)) {
            b += "attribute vec4 _hi;\n";
            b += "attribute vec4 _hw;\n"
        }
        b += "uniform mat4 _d;\n";
        b += "uniform mat4 _b;\n";
        b += "const float _wi=3.14159265358979323846264;\n";
        b += "varying vec4 _jg;\n";
        if (c._xv(fct._dpw)) {
            b += "varying vec4 _le;\n";
            b += "varying float _md;\n"
        }
        b += "void main(void) {\n";
        b += "vec4 _wn=_d*vec4(_gx.xyz,1.0);\n";
        if (c._xv(fct._dpw)) {
            b += "float _zp=(_hw.y*2.0*_wi)/256.0;\n";
            b += "float _zr=_hi.x*cos(_zp);\n";
            b += "float _zs=_hi.y*sin(_zp);\n";
            b += "_wn.x-=_zr;\n";
            b += "_wn.y-=_zs;\n";
            b += "_le=_hi;\n";
            b += "_le.x=_hw.z;\n";
            b += "_le.y=_hw.w;\n";
            b += "_md=_hw.x;\n"
        }
        b += "gl_Position=_b*_wn;\n";
        b += "_jg=_ha;\n";
        b += "}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._edy);
        c.push(elp._eeb);
        if (b._xv(fct._dpw)) {
            c.push(elp._eek);
            c.push(elp._eex)
        }
        c.push(elp._dxe);
        c.push(elp._dxc);
        return c
    };
    return a
}();
var fej = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec2 _iw;\n\nuniform sampler2D _cs;\nuniform vec2 _cw;\n\nvoid main(void) {\n\tvec4 _je=vec4(0.0,0.0,0.0,0.0);\n\t_je+=texture2D(_cs,_iw-_cw*4.0)*0.05;\n\t_je+=texture2D(_cs,_iw-_cw*3.0)*0.09;\n\t_je+=texture2D(_cs,_iw-_cw*2.0)*0.12;\n\t_je+=texture2D(_cs,_iw-_cw)*0.15;\n\t_je+=texture2D(_cs,_iw)*0.16;\n\t_je+=texture2D(_cs,_iw+_cw*1.0)*0.15;\n\t_je+=texture2D(_cs,_iw+_cw*2.0)*0.12;\n\t_je+=texture2D(_cs,_iw+_cw*3.0)*0.09;\n\t_je+=texture2D(_cs,_iw+_cw*4.0)*0.05;\n\tgl_FragColor=vec4(_je.rgb,1.0);\n}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        c.push(elp._eab);
        return c
    };
    return a
}();
var fac = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "";
        b += "precision mediump float;\n";
        b += "varying vec4 _jg;\n";
        b += "void main(void) {\n";
        b += "gl_FragColor=_jg;\n";
        b += "}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        return c
    };
    return a
}();
var fob = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec2 _iw;\n\nuniform sampler2D _cs;\nuniform sampler2D _cu;\nuniform float _cy;\nuniform float _da;\n\nconst vec3 _ix=vec3(0.2126,0.7152,0.0722);\n\nvoid main(void) {\n\tvec4 _iy=texture2D(_cs,_iw);\n\tvec4 _ja=texture2D(_cu,_iw);\n\tfloat _jb=0.99*dot(_ix,_ja.rgb)+0.01;\n\tfloat _jc=_jb*(1.0+(_jb/_da))/(_jb+1.0);\n\tgl_FragColor=_ja*(_jc/_jb)+_iy*_cy;\n}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        c.push(elp._dzy);
        c.push(elp._eac);
        c.push(elp._eae);
        return c
    };
    return a
}();
var fhz = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec2 _iw;\n\nuniform sampler2D _cs;\nuniform vec2 _cw;\n\nvoid main(void) {\n\tvec4 _je=vec4(0.0,0.0,0.0,0.0);\n   _je+=texture2D(_cs,_iw)*0.091396265;\n   _je+=texture2D(_cs,_iw+(-1.0*_cw))*0.088584304;\n   _je+=texture2D(_cs,_iw+( 1.0*_cw))*0.088584304;\n   _je+=texture2D(_cs,_iw+(-2.0*_cw))*0.08065692;\n   _je+=texture2D(_cs,_iw+( 2.0*_cw))*0.08065692;\n   _je+=texture2D(_cs,_iw+(-3.0*_cw))*0.068989515;\n   _je+=texture2D(_cs,_iw+( 3.0*_cw))*0.068989515;\n   _je+=texture2D(_cs,_iw+(-4.0*_cw))*0.055434637;\n   _je+=texture2D(_cs,_iw+( 4.0*_cw))*0.055434637;\n   _je+=texture2D(_cs,_iw+(-5.0*_cw))*0.04184426;\n   _je+=texture2D(_cs,_iw+( 5.0*_cw))*0.04184426;\n   _je+=texture2D(_cs,_iw+(-6.0*_cw))*0.029672023;\n   _je+=texture2D(_cs,_iw+( 6.0*_cw))*0.029672023;\n   _je+=texture2D(_cs,_iw+(-7.0*_cw))*0.019765828;\n   _je+=texture2D(_cs,_iw+( 7.0*_cw))*0.019765828;\n   _je+=texture2D(_cs,_iw+(-8.0*_cw))*0.012369139;\n   _je+=texture2D(_cs,_iw+( 8.0*_cw))*0.012369139;\n\tgl_FragColor=vec4(_je.rgb,1.0);\n}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        c.push(elp._eab);
        return c
    };
    return a
}();
var fml = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "";
        b += "attribute vec2 _gx;\n";
        if (c._xv(fct._dqv)) {
            b += "attribute vec4 _ha;\n"
        }
        if (c._xv(fct._dpw)) {
            b += "attribute vec2 _hi;\n"
        }
        b += "uniform mat4 _b;\n";
        if (c._xv(fct._dqv)) {
            b += "varying vec4 _jg;\n"
        }
        if (c._xv(fct._dpw)) {
            b += "varying vec2 _le;\n"
        }
        b += "void main(void) {\n";
        b += "gl_Position=_b*vec4(_gx,-1.0,1.0);\n";
        if (c._xv(fct._dqv)) {
            b += "_jg=_ha/255.0;\n"
        }
        if (c._xv(fct._dpw)) {
            b += "_le=_hi/32767.0;\n"
        }
        b += "}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._edy);
        if (b._xv(fct._dqv)) {
            c.push(elp._eeb)
        }
        if (b._xv(fct._dpw)) {
            c.push(elp._eek)
        }
        c.push(elp._dxc);
        return c
    };
    return a
}();
var eqz = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "precision mediump float;\n\nvarying vec2 _iw;\n\nuniform sampler2D _cs;\nuniform vec2 _ej;\nuniform vec4 _ei;\n\nvoid main(void) {\n\tfloat _ku=_baf(gl_FragCoord.xy,_ei.xy);\n\tfloat _kw=_ku-_ei.z;\n\tfloat _kx=clamp(((_ei.w-abs(_kw))/_ei.w),0.0,1.0);\n\tvec4 _je=vec4(0.0,0.0,0.0,0.0);\n\tif (_kw>-_ei.w && _kw<_ei.w) {\n\t\tvec2 _ky=_kx*_ej;\n   \t_je+=texture2D(_cs,_iw)*0.091396265;\n   \t_je+=texture2D(_cs,_iw+(-1.0*_ky))*0.088584304;\n   \t_je+=texture2D(_cs,_iw+( 1.0*_ky))*0.088584304;\n   \t_je+=texture2D(_cs,_iw+(-2.0*_ky))*0.08065692;\n   \t_je+=texture2D(_cs,_iw+( 2.0*_ky))*0.08065692;\n   \t_je+=texture2D(_cs,_iw+(-3.0*_ky))*0.068989515;\n   \t_je+=texture2D(_cs,_iw+( 3.0*_ky))*0.068989515;\n   \t_je+=texture2D(_cs,_iw+(-4.0*_ky))*0.055434637;\n   \t_je+=texture2D(_cs,_iw+( 4.0*_ky))*0.055434637;\n   \t_je+=texture2D(_cs,_iw+(-5.0*_ky))*0.04184426;\n   \t_je+=texture2D(_cs,_iw+( 5.0*_ky))*0.04184426;\n   \t_je+=texture2D(_cs,_iw+(-6.0*_ky))*0.029672023;\n   \t_je+=texture2D(_cs,_iw+( 6.0*_ky))*0.029672023;\n   \t_je+=texture2D(_cs,_iw+(-7.0*_ky))*0.019765828;\n   \t_je+=texture2D(_cs,_iw+( 7.0*_ky))*0.019765828;\n   \t_je+=texture2D(_cs,_iw+(-8.0*_ky))*0.012369139;\n   \t_je+=texture2D(_cs,_iw+( 8.0*_ky))*0.012369139;\n\t}\n\tgl_FragColor=(1.0-_kx)*texture2D(_cs,_iw)+_kx*_je;\n}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._dzw);
        c.push(elp._ebm);
        c.push(elp._ebl);
        return c
    };
    return a
}();
var fnd = function() {
    var a = {};
    a._oi = function() {
        if (false) {} else {
            return ""
        }
    };
    a._om = function(c) {
        var b = "";
        b += "attribute vec3 _gx;\n";
        b += "attribute vec4 _ha;\n";
        b += "uniform mat4 _b;\n";
        b += "varying vec4 _jg;\n";
        b += "void main(void) {\n";
        b += "gl_Position=_b*vec4(_gx,1);\n";
        b += "_jg=_ha/255.0;\n";
        b += "}";
        return b
    };
    a._oq = function(b) {
        var c = new Array(0);
        c.push(elp._edy);
        c.push(elp._eeb);
        c.push(elp._dxc);
        return c
    };
    return a
}();
var fpu = function() {
    var g = fdd([fct._dpw, fct.TEXTUREWRAP_REPEAT_U, fct.TEXTUREWRAP_REPEAT_V]);
    var d = {
        _lj: {
            id: 0,
            _ln: fab,
            _lo: fjc,
            _lq: g._qhq([fct._dqv, fct._dpn])
        },
        _lr: {
            id: 1,
            _ln: fgc,
            _lo: ewv,
            _lq: g
        },
        _lt: {
            id: 2,
            _ln: ewt,
            _lo: eud,
            _lq: g._qhq([fct._dqv, fct._dpp])
        },
        _lv: {
            id: 3,
            _ln: ftu,
            _lo: eua,
            _lq: g._qhq([fct._dpp, fct._dql])
        },
        _lw: {
            id: 4,
            _ln: fay,
            _lo: fdt,
            _lq: g
        },
        _ly: {
            id: 5,
            _ln: fml,
            _lo: exz,
            _lq: g._qhq([fct._dqv])
        },
        _lz: {
            id: 6,
            _ln: fro,
            _lo: frx
        },
        _mb: {
            id: 7,
            _ln: fro,
            _lo: eqz
        },
        _md: {
            id: 8,
            _ln: fro,
            _lo: fej
        },
        _mf: {
            id: 9,
            _ln: fro,
            _lo: fhz
        },
        _mg: {
            id: 10,
            _ln: fro,
            _lo: ewg
        },
        _mh: {
            id: 11,
            _ln: fro,
            _lo: fob
        },
        _mj: {
            id: 12,
            _ln: fro,
            _lo: eth
        },
        _ml: {
            id: 13,
            _ln: ewn,
            _lo: fbs
        },
        _mn: {
            id: 14,
            _ln: fey,
            _lo: fac
        },
        _mp: {
            id: 15,
            _ln: fro,
            _lo: fnk
        },
        _mt: {
            id: 16,
            _ln: fro,
            _lo: esa
        },
        _mv: {
            id: 17,
            _ln: ewt,
            _lo: fjb
        },
        _mx: {
            id: 18,
            _ln: fro,
            _lo: enh
        },
        _my: {
            id: 19,
            _ln: fro,
            _lo: ezn
        },
        _mz: {
            id: 20,
            _ln: fnd,
            _lo: elu
        },
        _na: {
            id: 21,
            _ln: eoj,
            _lo: emw
        },
        _nf: {
            id: 22,
            _ln: fro,
            _lo: fts
        },
        _nh: {
            id: 23,
            _ln: fro,
            _lo: fnh
        },
        _ni: {
            id: 24,
            _ln: fro,
            _lo: ffz
        },
        _nk: {
            id: 25,
            _ln: fro,
            _lo: fkh
        },
        _nq: {
            id: 26,
            _ln: fro,
            _lo: eph
        },
        _nu: {
            id: 27,
            _ln: fro,
            _lo: euj
        },
        _nv: {
            id: 28,
            _ln: fro,
            _lo: fba
        },
        _ob: {
            id: 29,
            _ln: fro,
            _lo: fhq
        },
        _od: {
            id: 30,
            _ln: fro,
            _lo: euh
        }
    };
    var c = -1;
    var b = {};
    for (var e in d) {
        var a = d[e];
        if (a !== undefined && a.id !== undefined) {
            b[a.id] = a;
            if (a.id > c) {
                c = a.id
            }
        }
    }
    d._of = function() {
        return c
    };
    d._og = function(h) {
        return b[h]
    };
    return d
}();
var eoz = function() {
    var b = {};
    var a;
    b._npw = function(d, c) {
        return "jagex." + d.id + "." + c + "."
    };
    b._bg = function(d, c) {
        a = b._npw(d, c)
    };
    b._npx = function(c) {
        if (a === undefined) {
            throw new Error("2701 ")
        }
        if (c === undefined) {
            return a
        }
        return a + c + "."
    };
    return b
}();
var esq = function() {
    var a = function() {
        this.clear()
    };
    a.prototype.clear = function() {
        this._fpg = new Array(fpu._of());
        this._fpi = new Array(0)
    };
    a.prototype._ejp = function(e, c) {
        var d = c._bga();
        var g = this._fpg[e];
        if (g === undefined) {
            return undefined
        }
        for (var b = 0; b < d.length; b++) {
            g = g[d[b]];
            if (g == undefined) {
                return undefined
            }
        }
        return g
    };
    a.prototype._exb = function(g, c, e) {
        var d = c._bga();
        var h = this._fpg[g];
        if (h === undefined) {
            h = this._fpg[g] = {}
        }
        for (var b = 0; b < d.length - 1; b++) {
            if (h[d[b]] === undefined) {
                h = h[d[b]] = {}
            } else {
                h = h[d[b]]
            }
        }
        h[d[b]] = e;
        this._fpi.push(e)
    };
    a.prototype._fpk = function() {
        return this._fpi
    };
    return function() {
        return new a()
    }
}();
var fsa = function() {
    var b = function(l) {
        this.list = new Array(0);
        if (l !== undefined) {
            try {
                var c = 0;
                while (true) {
                    var i = l.indexOf(":", c);
                    var j = parseInt(l.substring(c, i));
                    c = i + 1;
                    i = l.indexOf(":", c);
                    var g = fdd();
                    var m = g._qhp(l.substring(c, i));
                    c = i + 1;
                    var d = l.indexOf(",", c);
                    var k = parseInt(l.substring(c, d));
                    c = d + 1;
                    if (!isNaN(j) && m) {
                        this._exb(fpu._og(j), g, k)
                    }
                    if (c >= l.length) {
                        break
                    }
                }
            } catch (h) {
                if (false) {}
            }
        }
    };
    var a = function(d, c, e) {
        this._ewv = d;
        this._ewx = c;
        this._ewz = e
    };
    b.prototype._dpg = function() {
        return this.list
    };
    b.prototype.getSize = function() {
        return this.list.length
    };
    b.prototype._exb = function(d, c, e) {
        this.list.push(new a(d, c, e))
    };
    b.prototype._exc = function(d) {
        for (var c = 0; c < this.list.length; c++) {
            var e = this.list[c];
            if (e._ewx._xv(d)) {
                this.list.splice(c, 1);
                c--
            }
        }
    };
    b.prototype._exd = function(e) {
        for (var c = 0; c < this.list.length; c++) {
            var d = this.list[c];
            if (d._ewz < e) {
                this.list.splice(c, 1);
                c--
            }
        }
    };
    b.prototype._exf = function() {
        var e = "";
        for (var c = 0; c < this.list.length; c++) {
            var d = this.list[c];
            e += d._ewv.id + ":" + d._ewx.toString() + ":" + d._ewz + ","
        }
        return e
    };
    if (false) {}
    return function(c) {
        return new b(c)
    }
}();
var esi = function() {
    var r = {};
    var t = false;
    var o;
    var i = esq();
    var j = false;
    var h = 0;
    var c = 250;
    var k = fdd();
    var x = true;
    r._ejd = function(F) {
        x = F
    };
    var E = 1000 * 60 * 60 * 24 * 3;
    var d = 500;
    r._ejf = function(F) {
        d = F
    };
    var g;
    var m = undefined;
    var D = 0;
    var n = undefined;
    var e = "0.3";
    var v = undefined;
    var C = undefined;
    var a = undefined;
    var q = -1;
    if (false) {}
    r._bg = function(F) {
        o = F._bi;
        u();
        if (F._taf) {
            b(F._tah, F._taj)
        }
    };
    r._jl = function() {
        if (o !== undefined) {
            var F = y();
            var G = eoz._npx();
            localStorage[G + "usedShaders"] = F._exf();
            localStorage[G + "usedShadersVersion"] = e
        }
    };
    r._ejg = function() {
        var G = fsa();
        var K = i._fpk();
        for (var F = 0; F < K.length; F++) {
            var H = K[F];
            try {
                var I = H._nju();
                if (I > Date.now() - E) {
                    G._exb(fpu._og(H._bjx()), H._njk(), I)
                }
            } catch (J) {
                if (false) {}
            }
        }
        return G
    };
    var y = r._ejg;
    var b = function(G, I) {
        var H = eoz._npx();
        g = localStorage[H + "usedShaders"];
        var J = localStorage[H + "usedShadersVersion"];
        if (g !== undefined && J === e) {
            m = fsa(g);
            if (m.getSize() < 1) {
                m = G
            }
        } else {
            m = G
        }
        if (m === undefined) {
            return
        }
        m._exd(Date.now() - E);
        if (I !== undefined) {
            for (var F = 0; F < I.length; F++) {
                m._exc(I[F])
            }
        }
        if (false) {}
        z()
    };
    var z = function() {
        var F = Date.now();
        var H = m._dpg();
        while (D < H.length) {
            if (!x) {
                n = setTimeout(z, 1000);
                return
            }
            var I = H[D++];
            if (i._ejp(I._ewv.id, I._ewx) === undefined) {
                var G = l(I._ewv.id, I._ewx, true);
                if (I._ewz !== undefined) {
                    G._njs(I._ewz)
                }
            }
            if (Date.now() - F >= d) {
                n = setTimeout(z, 1000);
                return
            }
        }
        n = undefined;
        m = undefined;
        if (false) {}
    };
    r._ejh = function() {
        return n !== undefined
    };
    r._eji = function() {
        return Math.floor((D * 100) / m.getSize())
    };
    r._ejj = function() {
        return h > Date.now() - c
    };
    var u = function() {
        if (false) {}
        var G = 0;
        for (var H in fpu) {
            var F = fpu[H];
            var I = F._lq;
            if (I !== undefined) {
                l(F.id, I, true);
                G++
            }
        }
        if (false) {}
    };
    r._ejk = u;
    var l = function(I, J, F) {
        var H = fpu._og(I);
        if (H === undefined) {
            throw new Error("2433 " + I)
        }
        if (h > Date.now() - c && H._lq !== undefined && !F) {
            var G = i._ejp(I, H._lq);
            if (G === undefined) {
                var K = Date.now();
                G = eqq({
                    _ejm: I,
                    _bi: o,
                    _ln: H._ln,
                    _lo: H._lo,
                    _ejo: J._qhq(H._lq, true)
                });
                h = Date.now();
                if (false) {}
                i._exb(I, H._lq, G)
            }
            return G
        } else {
            var K = Date.now();
            var G = eqq({
                _ejm: I,
                _bi: o,
                _ln: H._ln,
                _lo: H._lo,
                _ejo: J._qhq(undefined, true)
            });
            h = Date.now();
            if (false) {}
            i._exb(I, J, G);
            return G
        }
    };
    var s = function(G, H) {
        if (H === undefined) {
            H = k
        }
        if (G !== v || H._qhl(C) === false) {
            var F = i._ejp(G, H);
            if (F === undefined) {
                F = l(G, H, false)
            }
            return F
        } else {
            return a
        }
    };
    r._ejp = s;
    var p = function(I, H) {
        if (I !== a || H) {
            if (H) {
                var G = -1;
                if (q !== -1) {
                    G = q
                } else {
                    if (a !== undefined) {
                        G = a._nkj()
                    }
                }
                var F = I._nkj();
                for (var J = F + 1; J <= G; J++) {
                    o._dmm();
                    o.gl.disableVertexAttribArray(J)
                }
                if (q !== -1) {
                    G = -1;
                    q = -1
                }
                if (I !== a) {
                    o.gl.useProgram(I._njm());
                    I._nkc()
                }
                for (var J = G + 1; J <= F; J++) {
                    o._dmk();
                    o.gl.enableVertexAttribArray(J)
                }
            } else {
                if (a !== undefined) {
                    q = Math.max(q, a._nkj())
                }
                o.gl.useProgram(I._njm());
                I._nkc()
            }
            I._njr();
            v = I._bjx();
            C = I._njk();
            a = I
        }
        if (I !== undefined) {
            I._nka()
        }
    };
    r._ejq = p;
    r._ejs = function() {
        v = undefined;
        C = undefined;
        a = undefined
    };
    r._eju = function() {
        i.clear();
        r._ejs()
    };
    if (false) {}
    var A = function() {
        r._ejs();
        if (false) {}
    };
    r._bfd = A;
    var B = function() {};
    r._bfc = B;
    return r
}();
var enl = function() {
    var a = function(c) {
        var e = {};
        var d;
        var g = false;
        e.enable = function() {
            if (!g) {
                g = true;
                if (e._efk !== undefined) {
                    e._efk()
                }
            }
        };
        e.disable = function() {
            if (g) {
                g = false;
                if (e._efm !== undefined) {
                    e._efm()
                }
            }
        };
        e._xv = function() {
            return g
        };
        e._xw = function() {
            if (e._goe !== undefined) {
                return e._goe()
            } else {
                return false
            }
        };
        var b = false;
        e._yd = function(h) {
            b = true;
            if (e._efo !== undefined) {
                e._efo(h)
            }
        };
        e._ye = function(h) {
            b = false;
            if (e._efq !== undefined) {
                e._efq(h)
            }
        };
        e._yg = function() {
            return b
        };
        e._yh = function() {
            g = false;
            b = false;
            if (e._cjr !== undefined) {
                e._cjr()
            }
        };
        e.saveState = function(i) {
            var h = {};
            h._yj = g;
            if (e.saveStateInner !== undefined) {
                e.saveStateInner(h)
            }
            i[d] = h
        };
        e._yk = function(i) {
            var h = i[d];
            g = h._yj;
            if (e.loadStateInner !== undefined) {
                e.loadStateInner(h)
            }
        };
        if (c._yl !== undefined) {
            d = c._yl
        } else {
            throw new Error("2259 ")
        }
        c = undefined;
        return e
    };
    return a
}();
var eug = function() {
    var a = function(c) {
        var e = null;
        var h;
        if (c._bi !== undefined) {
            e = enl({
                _yl: eqs._mgn
            });
            h = c._bi
        } else {
            throw new Error("2405 ")
        }
        var j, g;
        var i = null;
        e._efe = function() {
            return i
        };
        var d = null;
        e._efg = function() {
            return d
        };
        var b = new Float32Array([0, 0, 0]);
        e._efi = function() {
            b[0]++;
            if (b[0] === 255) {
                b[0] = 0;
                b[1]++;
                if (b[1] === 255) {
                    b[1] = 0;
                    b[2]++
                }
            }
            return b
        };
        e._efk = function() {};
        e._efm = function() {
            e._cjr()
        };
        e._cjr = function() {
            i._qcs();
            i = null
        };
        e._cjs = function() {};
        e._efo = function(k) {
            if (!e._xv()) {
                throw new Error("2406 ")
            }
            j = Math.floor(h.viewportWidth / 4);
            g = Math.floor(h.viewportHeight / 4);
            if (i === null || i._ke() !== j || i._kg() !== g) {
                if (i !== null) {
                    i._qcs()
                }
                i = h._dkz(j, g, true, false, false);
                i._qcr();
                d = new Uint8Array(j * g * 4)
            }
            h._dld(i);
            h._dkr(0, 0, i._ke(), i._kg());
            h.gl.clear(h.gl.COLOR_BUFFER_BIT | h.gl.DEPTH_BUFFER_BIT);
            b[0] = 0;
            b[1] = 0;
            b[2] = 0
        };
        e._efq = function() {
            if (!e._xv()) {
                throw new Error("2407 ")
            }
            h.gl.readPixels(0, 0, j, g, h.gl.RGBA, h.gl.UNSIGNED_BYTE, d);
            h._dld(null)
        };
        e._efr = function() {
            if (i === null) {
                return null
            } else {
                return i._fpv()
            }
        };
        c = undefined;
        return e
    };
    return a
}();
var etb = function() {
    var a = {
        _ljx: 0,
        _ml: 1,
        _cds: 2
    };
    return a
}();
var fsk = function() {
    var a = {};
    a._ch = function(r, m, l, h, g, q, e, p, b) {
        if (q === undefined) {
            q = 0
        }
        if (e === undefined) {
            e = 0
        }
        if (p === undefined) {
            p = 1
        }
        if (b === undefined) {
            b = 1
        }
        var d = r.gl.createBuffer();
        var i = new ArrayBuffer(4 * (4 + 4 + 4 + 4));
        var k = new Float32Array(i);
        var o = 0;
        k[o++] = m;
        k[o++] = l;
        k[o++] = q;
        k[o++] = e;
        k[o++] = m + h;
        k[o++] = l;
        k[o++] = p;
        k[o++] = e;
        k[o++] = m + h;
        k[o++] = l + g;
        k[o++] = p;
        k[o++] = b;
        k[o++] = m;
        k[o++] = l + g;
        k[o++] = q;
        k[o++] = b;
        r.gl.bindBuffer(r.gl.ARRAY_BUFFER, d);
        r.gl.bufferData(r.gl.ARRAY_BUFFER, i, r.gl.STATIC_DRAW);
        var c = r.gl.createBuffer();
        var n = new ArrayBuffer(6 * 2);
        var j = new Uint16Array(n);
        j[0] = 0;
        j[1] = 1;
        j[2] = 3;
        j[3] = 1;
        j[4] = 2;
        j[5] = 3;
        r.gl.bindBuffer(r.gl.ELEMENT_ARRAY_BUFFER, c);
        r.gl.bufferData(r.gl.ELEMENT_ARRAY_BUFFER, n, r.gl.STATIC_DRAW);
        return {
            _cn: d,
            _cq: c
        }
    };
    return a
}();
var eon = function() {
    var a = function(b) {
        this._bi = b
    };
    a.prototype.set = function(i, h, e, g, c, b, k, j) {
        if (this.x !== i || this.y !== h || this.width !== e || this.height !== g || this._gbi !== c || this._dhz !== b || this._gbj !== k || this._dib !== j) {
            this._ljv();
            this.x = i;
            this.y = h;
            this.width = e;
            this.height = g;
            this._gbi = c;
            this._dhz = b;
            this._gbj = k;
            this._dib = j;
            var d = fsk._ch(this._bi, i, h, e, g, c, b, k, j);
            this._cn = d._cn;
            this._cq = d._cq
        }
    };
    a.prototype.bind = function() {
        this._bi.gl.bindBuffer(this._bi.gl.ARRAY_BUFFER, this._cn);
        this._bi.gl.bindBuffer(this._bi.gl.ELEMENT_ARRAY_BUFFER, this._cq)
    };
    a.prototype._ljv = function() {
        if (this._cn !== undefined) {
            this._bi.gl.deleteBuffer(this._cn)
        }
        if (this._cq !== undefined) {
            this._bi.gl.deleteBuffer(this._cq)
        }
        this._cn = undefined;
        this._cq = undefined
    };
    return function(b) {
        return new a(b)
    }
}();
var eyj = function() {
    var a = function(h) {
        var o = null;
        var n;
        var l = 0;
        if (h._bi !== undefined) {
            o = enl({
                _yl: eqs._ob
            });
            n = h._bi
        } else {
            throw new Error("2703 ")
        }
        var y = -1,
            v = -1;
        o._nrl = function() {
            return y
        };
        o._nrn = function() {
            return v
        };
        var p = null;
        var b = null;
        var j = null;
        var r = undefined;
        var g = new Float32Array(1);
        g[0] = 10000;
        var d = new Float32Array(4);
        d[0] = 2000;
        d[1] = 8000;
        d[2] = 2000;
        d[3] = 8000;
        o._nrp = function() {
            if (p === null) {
                return null
            }
            var z = p._kj();
            if (z === undefined) {
                z = p._fpv()
            }
            return z
        };
        o._nrr = function() {
            return p
        };
        o._nrt = function() {
            return g[0]
        };
        o._nru = function(z) {
            g[0] = z
        };
        o._nrv = function() {
            return d[0]
        };
        o._nrw = function(z) {
            d[0] = z
        };
        o._nry = function() {
            return d[1]
        };
        o._nrz = function(z) {
            d[1] = z
        };
        o._nsa = function() {
            return d[2]
        };
        o._nsb = function(z) {
            d[2] = z
        };
        o._nsc = function() {
            return d[3]
        };
        o._nse = function(z) {
            d[3] = z
        };
        var c = null;
        var i = null;
        var k = undefined;
        var t = undefined;
        var m = false;
        o._nsf = function() {
            return m
        };
        var e = fdd([]);
        o._ehy = function() {
            return e._xv(fct._dqb)
        };
        o._ehz = function(z) {
            if (z) {
                e.enable(fct._dqb)
            } else {
                e.disable(fct._dqb)
            }
        };
        o._bfc = function(z) {
            l = z
        };
        var q = function(C, B, D) {
            var A = Math.floor(C);
            var z = Math.floor(B);
            var E = p === null || b === null || j === null;
            if (y !== A || v !== z) {
                y = A;
                v = z;
                E = true
            }
            if (E) {
                o._efm();
                if (n._dje()) {
                    e.enable(fct._dqy)
                } else {
                    e.disable(fct._dqy)
                }
                p = n._dkz(y, v, true, false, false);
                p._qcr();
                b = n._dkz(y * 0.5, v * 0.5, true, false, false);
                b._qcr();
                j = n._dkz(y * 0.5, v * 0.5, true, false, false);
                j._qcr();
                c = evs._qzg(0, y, 0, v, 0.1, 5000, c);
                if (k === undefined) {
                    k = eon(n)
                }
                k.set(0, 0, y, v)
            }
        };
        o._efo = function(z) {
            if (!o._xv()) {
                throw new Error("2704 ")
            }
            q(n.viewportWidth, n.viewportHeight);
            n._dld(p);
            n._dkr(0, 0, y, v);
            n.gl.clearColor(1, 1, 1, 1);
            n.gl.clear(n.gl.COLOR_BUFFER_BIT | n.gl.DEPTH_BUFFER_BIT);
            m = true;
            r = z._nsg;
            if (n._dje()) {
                n.gl.colorMask(false, false, false, false)
            }
        };
        o._efq = function(z) {
            if (!o._xv()) {
                throw new Error("2705 ")
            }
            if (n._dje()) {
                n.gl.colorMask(true, true, true, true)
            }
            n._dld(null);
            m = false
        };
        o._efk = function() {};
        o._efm = function() {
            o._cjr();
            if (p !== null) {
                p._qcs();
                p = null
            }
        };
        o._cjr = function() {
            m = false
        };
        o._cjs = function() {
            m = false
        };
        o._cju = function(A, B, z, C) {
            n._dkf();
            x(A, b, 1 / A._ke(), 0);
            x(b._fpv(), j, 0, 1 / b._fpv()._kg());
            s(A, j._fpv(), this._nrp(), B);
            n._dkd()
        };
        var x = function(A, B, E, C) {
            var z = esi._ejp(fpu._md.id, undefined);
            esi._ejq(z, true);
            var D = n.bindTexture(fce._mbt, A._gbs(), n.gl.TEXTURE_2D);
            n.gl.uniform1i(z._nke(elp._dzw.id), D);
            n.gl.uniform2f(z._nke(elp._eab.id), E, C);
            u(z, B, c);
            n._dle()
        };
        var s = function(D, A, F, E) {
            var z = esi._ejp(fpu._ob.id, e);
            esi._ejq(z, true);
            var G = n.bindTexture(fce._mbt, D._gbs(), n.gl.TEXTURE_2D);
            n.gl.uniform1i(z._nke(elp._dzw.id), G);
            var C = n.bindTexture(fce._mbu, A._gbs(), n.gl.TEXTURE_2D);
            n.gl.uniform1i(z._nke(elp._dzy.id), C);
            var B = n.bindTexture(fce._mbv, F._gbs(), n.gl.TEXTURE_2D);
            n.gl.uniform1i(z._nke(elp._eaj.id), B);
            if (r !== null && r !== undefined) {
                n.gl.uniformMatrix4fv(z._nke(elp._dxi.id), false, r)
            }
            n.gl.uniform1f(z._nke(elp._edv.id), g[0]);
            n.gl.uniform4f(z._nke(elp._edw.id), d[0], d[1], d[2], d[3]);
            u(z, E, c);
            n._dle()
        };
        var u = function(F, E, J, I, A) {
            n._dld(E);
            var L = n._bff();
            var D = n._bfh();
            n._dkr(0, 0, L, D);
            if (A !== undefined) {
                if (t === undefined) {
                    t = eon(n)
                }
                var H = y;
                var z = v;
                A[1] = D - (A[1] + A[3]);
                var C;
                if (I !== undefined && (I[0] !== 0 || I[1] !== 0 || I[2] !== H || I[3] !== z)) {
                    I[1] = z - (I[1] + I[3]);
                    var M = I[0] / H;
                    var G = I[1] / z;
                    var K = (I[0] + I[2]) / H;
                    var B = (I[1] + I[3]) / z;
                    t.set(A[0], A[1], A[2], A[3], M, G, K, B)
                } else {
                    t.set(A[0], A[1], A[2], A[3])
                }
                t.bind();
                J = evs._qzg(0, L, 0, D, 0.1, 5000, i)
            } else {
                k.bind()
            }
            n._dkc(false);
            n.gl.uniformMatrix4fv(F._nke(elp._dxc.id), false, J);
            n.gl.vertexAttribPointer(F._nkh(elp._edy.id), 2, n.gl.FLOAT, false, 16, 0);
            n.gl.vertexAttribPointer(F._nkh(elp._eek.id), 2, n.gl.FLOAT, false, 16, 8);
            n.gl.drawElements(n.gl.TRIANGLES, 6, n.gl.UNSIGNED_SHORT, 0)
        };
        h = undefined;
        return o
    };
    return a
}();
var fgr = function() {
    var a = function(k) {
        var o = null;
        var t = 20;
        var n;
        var h = new Float32Array(4);
        var l = new Float32Array(4);
        var u = new Float32Array(4);
        var i = undefined;
        var d = undefined;
        var c = undefined;
        var b = evs.create();
        var v = evs.create();
        var r = undefined;
        var g = undefined;
        var j = undefined;
        var m;
        if (k._bi !== undefined) {
            o = enl({
                _yl: eqs._dqj
            });
            n = k._bi
        } else {
            throw new Error("2307 ")
        }
        o._cjq = function(y, x, A, z) {
            l[0] = y;
            l[1] = x;
            l[2] = A;
            l[3] = z
        };
        o._cjr = function() {};
        o._cjs = function() {};
        o.bind = function(x) {
            if (o._xv()) {
                x._nky(elp._ebl, l)
            } else {
                x._nky(elp._ebl, h)
            }
        };
        o._cju = function(z, y) {
            if (true) {
                throw new Error("2308 ")
            } else {}
            var D = l[2] * 2 + t * 2;
            if (i !== D) {
                i = D;
                u[0] = i / 2;
                u[1] = i / 2;
                u[2] = l[2];
                u[3] = t / 2;
                d = n._dkz(i, i, false, false, false);
                d._qcr();
                c = n._dkz(i, i, false, false, false);
                c._qcr();
                var C = n.viewportWidth;
                var B = n.viewportHeight;
                evs._qzg(0, i, 0, i, 0.1, 5000, b);
                evs._qzg(0, C, 0, B, 0.1, 5000, v);
                var F = (l[0] - l[2] - t) / C;
                var A = (l[1] - l[2] - t) / B;
                var E = (l[0] + l[2] + t) / C;
                var x = (l[1] + l[2] + t) / B;
                r = fsk._ch(n, 0, 0, i, i, F, A, E, x);
                g = fsk._ch(n, 0, 0, i, i);
                j = fsk._ch(n, 0, 0, C, B);
                m = fsk._ch(n, l[0] - l[2] - t, l[1] - l[2] - t, i, i)
            }
            n._dkf();
            e(z, d);
            p(d._fpv(), c, 1 / i, 0);
            p(c._fpv(), d, 0, 1 / i);
            q(d._fpv(), z, y);
            n._dkd()
        };
        var e = function(y, z) {
            var x = esi._ejp(fpu._lz.id, undefined);
            esi._ejq(x, true);
            var A = n.bindTexture(fce._mbt, y._gbs(), n.gl.TEXTURE_2D);
            n.gl.uniform1i(x._nke(elp._dzw.id), A);
            s(x, z, b, r, true);
            n._dle()
        };
        var p = function(y, z, C, A) {
            var x = esi._ejp(fpu._mb.id, undefined);
            esi._ejq(x, true);
            var B = n.bindTexture(fce._mbt, y._gbs(), n.gl.TEXTURE_2D);
            n.gl.uniform1i(x._nke(elp._dzw.id), B);
            n.gl.uniform2f(x._nke(elp._ebm.id), C, A);
            x._nky(elp._ebl, u);
            s(x, z, b, g, true);
            n._dle()
        };
        var q = function(A, y, z) {
            var x = esi._ejp(fpu._lz.id, undefined);
            esi._ejq(x, true);
            var B = n.bindTexture(fce._mbt, y._gbs(), n.gl.TEXTURE_2D);
            n.gl.uniform1i(x._nke(elp._dzw.id), B);
            s(x, z, v, j, false);
            n._dle();
            var B = n.bindTexture(fce._mbt, A._gbs(), n.gl.TEXTURE_2D);
            n.gl.uniform1i(x._nke(elp._dzw.id), B);
            s(x, z, v, m, false);
            n._dle()
        };
        var s = function(A, D, z, C, B) {
            n._dld(D);
            var x, y;
            if (D !== null) {
                x = D._ke();
                y = D._kg()
            } else {
                x = n.viewportWidth;
                y = n.viewportHeight
            }
            n._dkr(0, 0, x, y);
            if (B) {
                n.gl.clear(n.gl.COLOR_BUFFER_BIT)
            }
            n._dkc(false);
            n.gl.bindBuffer(n.gl.ARRAY_BUFFER, C._cn);
            n.gl.bindBuffer(n.gl.ELEMENT_ARRAY_BUFFER, C._cq);
            n.gl.uniformMatrix4fv(A._nke(elp._dxc.id), false, z);
            n.gl.vertexAttribPointer(A._nkh(elp._edy.id), 2, n.gl.FLOAT, false, 16, 0);
            n.gl.vertexAttribPointer(A._nkh(elp._eek.id), 2, n.gl.FLOAT, false, 16, 8);
            n.gl.drawElements(n.gl.TRIANGLES, 6, n.gl.UNSIGNED_SHORT, 0)
        };
        o._bfc = function(x) {};
        k = undefined;
        return o
    };
    return a
}();
var fvj = function() {
    var a = function(b) {
        this.width;
        this.height;
        this._ehb = 0, this._ehd = 0, this._ehf = 0, this._ehh = 0;
        this.image;
        if (b.width !== undefined && b.height !== undefined && b.image !== undefined) {
            this.width = b.width;
            this.height = b.height;
            if (b._ehb !== undefined) {
                this._ehb = b._ehb
            }
            if (b._ehd !== undefined) {
                this._ehd = b._ehd
            }
            if (b._ehf !== undefined) {
                this._ehf = b._ehf
            }
            if (b._ehh !== undefined) {
                this._ehh = b._ehh
            }
            this.image = new Uint8Array(b.image)
        } else {
            throw new Error("2428 ")
        }
    };
    a.prototype._ke = function() {
        return this.width
    };
    a.prototype._kg = function() {
        return this.height
    };
    a.prototype._ehj = function() {
        return {
            left: this._ehb,
            _cer: this._ehd,
            top: this._ehf,
            _ces: this._ehh
        }
    };
    a.prototype._ehk = function() {
        return this._ehb + this.width + this._ehd
    };
    a.prototype._ehl = function() {
        return this._ehh + this.height + this._ehf
    };
    a.prototype._wq = function() {
        return this.image.buffer
    };
    a.prototype._ehm = function() {
        var c;
        var h = new Uint32Array(this.image.buffer);
        for (var g = (this.height >> 1) - 1; g >= 0; g--) {
            var e = g * this.width;
            var d = (this.height - g - 1) * this.width;
            for (var b = -this.width; b < 0; b++) {
                c = h[e];
                h[e] = h[d];
                h[d] = c;
                ++e;
                ++d
            }
        }
        c = this._ehf;
        this._ehf = this._ehh;
        this._ehh = c
    };
    a.prototype._eho = function() {
        var d = new Uint32Array(this.width * this.height);
        var h = new Uint32Array(this.image.buffer);
        var c = 0;
        for (var b = 0; b < this.width; b++) {
            for (var g = this.height - 1; g >= 0; g--) {
                d[c++] = h[b + g * this.width]
            }
        }
        this.image = new Uint8Array(d.buffer);
        var e = this._ehf;
        this._ehf = this._ehb;
        this._ehb = this._ehh;
        this._ehh = this._ehd;
        this._ehd = e;
        e = this.height;
        this.height = this.width;
        this.width = e
    };
    return function(b) {
        return new a(b)
    }
}();
var ftv = function() {
    var a = new Float32Array(3);
    var b = function(l) {
        var g = null;
        var n;
        var d = 0;
        var i = new Float32Array([100000, 100000]);
        var c = {
            _gej: i,
            _gel: -1,
            _gem: i,
            _gen: -1,
            _geo: i
        };
        var j = new Float32Array([0, 0, 0, 1]);
        var e = {
            _gej: j,
            _gel: -1,
            _gem: j,
            _gen: -1,
            _geo: j
        };
        if (l._bi !== undefined) {
            g = enl({
                _yl: eqs._mgh
            });
            n = l._bi
        } else {
            throw new Error("2868 ")
        }
        g._cjr = function() {
            h(i, 0)
        };
        g._cjs = function() {};
        g._rhc = function() {
            return c._gej
        };
        g._rhe = function(o, p) {
            k(c, new Float32Array(o), p)
        };
        var h = g._rhe;
        g._rhg = function(o, p) {
            k(e, new Float32Array(o), p)
        };
        g._rhi = function(q, o, p) {
            a[0] = q[12];
            a[1] = q[13];
            a[2] = q[14];
            evs._gnd(p, a);
            if (-a[2] > c._gej[0] - o) {
                return true
            } else {
                return false
            }
        };
        var k = function(o, p, q) {
            if (q < 1) {
                o._gej = p
            } else {
                o._gem = new Float32Array(o._gej);
                o._gel = d;
                o._geo = p;
                o._gen = d + q
            }
        };
        g.bind = function(o) {
            if (g._xv()) {
                o._nky(elp._dzh, e._gej);
                o._nky(elp._dzk, c._gej[0]);
                o._nky(elp._dzi, c._gej[1])
            } else {
                o._nky(elp._dzh, j);
                o._nky(elp._dzk, i[0]);
                o._nky(elp._dzi, i[1])
            }
        };
        g._bfc = function(o) {
            d = o;
            m(c, d);
            m(e, d)
        };
        var m = function(p, r) {
            if (p._gen >= r) {
                var q = (r - p._gel) / (p._gen - p._gel);
                for (var o = 0; o < p._gem.length; o++) {
                    p._gej[o] = p._gem[o] + (q * (p._geo[o] - p._gem[o]))
                }
                return true
            } else {
                return false
            }
        };
        l = undefined;
        return g
    };
    return b
}();
var fqk = function() {
    var a = function(g) {
        var n = null;
        var m;
        var b = null;
        if (g._bi !== undefined) {
            n = enl({
                _yl: eqs._drh
            });
            m = g._bi
        } else {
            throw new Error("2538 ")
        }
        var t = new Float32Array([0.4, 0.6588, 0.747]);
        var o = t;
        var l = 1.5;
        var s = l;
        var u = 0.3;
        var i = u;
        var v = 0.0008;
        var c = v;
        var d = 0.0001;
        var k = d;
        var r = false;
        var e = new Float32Array(4);
        var q = new Float32Array(3);
        var p = new Float32Array(3);
        var j = new Float32Array(3);
        var h = new Float32Array(4);
        n._efk = function() {
            r = false
        };
        n._efm = function() {
            r = false
        };
        n._cjr = function() {
            _gza(t);
            _gzc(l);
            setG(G_DEFAULT);
            _gzf(v);
            _gzg(d);
            b = null
        };
        n._cjs = function() {
            r = false;
            b = null
        };
        n._gza = function(x) {
            if (o != x) {
                o = x;
                r = false
            }
        };
        n._gzc = function(x) {
            if (s != x) {
                s = x;
                r = false
            }
        };
        n._gzd = function(x) {
            if (i !== x) {
                i = x;
                r = false
            }
        };
        n._gzf = function(x) {
            if (c !== x) {
                c = Math.max(0, x);
                r = false
            }
        };
        n._gzg = function(x) {
            if (k !== x) {
                k = Math.max(0, x);
                r = false
            }
        };
        n.bind = function(z) {
            if (n._xv() && (b !== z)) {
                var C = Math.max(0, c / 256);
                var x = Math.max(0, k / 256);
                var B = C + x;
                var A = 1 / B;
                var D = C * (3 / (16 * Math.PI) * A);
                var y = x * (1 / (4 * Math.PI) * A);
                e[0] = o[0];
                e[1] = o[1];
                e[2] = o[2];
                e[3] = s;
                z._nky(elp._dzl, e);
                q[0] = D;
                q[1] = D;
                q[2] = D;
                z._nky(elp._dzn, q);
                p[0] = y;
                p[1] = y;
                p[2] = y;
                z._nky(elp._dzp, p);
                j[0] = B;
                j[1] = B;
                j[2] = B;
                z._nky(elp._dzq, j);
                h[0] = i;
                h[1] = 1 - i * i;
                h[2] = 1 + i * i;
                h[3] = 2 * i;
                z._nky(elp._dzr, h);
                b = z
            }
        };
        g = undefined;
        return n
    };
    return a
}();
var fft = {
    _qk: 0,
    _ql: 1,
    _qn: 2,
    _qo: 3
};
var eps = function() {
    var a = function(e) {
        var m = null;
        var l;
        var j = 0;
        if (e._bi !== undefined) {
            m = enl({
                _yl: eqs._mx
            });
            l = e._bi
        } else {
            throw new Error("2740 ")
        }
        var g = [1];
        var p = {
            _gej: g,
            _gel: -1,
            _gem: g,
            _gen: -1,
            _geo: g
        };
        var t = -1,
            s = -1;
        var d = new Float32Array(2);
        var b = null;
        var i = null;
        var k = undefined;
        var h = fdd();
        var q = fft._qk;
        m._gco = function(u) {
            q = u;
            h._yh();
            switch (q) {
                default:
                    case fft._qk:
                    break;
                case fft._ql:
                        h.enable(fct._dri);
                    break;
                case fft._qn:
                        h.enable(fct._drj);
                    break;
                case fft._qo:
                        h.enable(fct._dri);h.enable(fct._drj);
                    break
            }
        };
        m._orq = function(u, v) {
            n(p, u.slice(0), v)
        };
        var n = function(u, v, x) {
            if (x < 1) {
                u._gej = v
            } else {
                u._gem = u._gej.slice(0);
                u._gel = j;
                u._geo = v;
                u._gen = j + x
            }
        };
        m._bfc = function(u) {
            j = u;
            c(p, j)
        };
        var c = function(v, y) {
            if (v._gen >= y) {
                var x = (y - v._gel) / (v._gen - v._gel);
                for (var u = 0; u < v._gem.length; u++) {
                    v._gej[u] = v._gem[u] + (x * (v._geo[u] - v._gem[u]))
                }
                return true
            } else {
                return false
            }
        };
        m._efk = function() {};
        m._efm = function() {
            t = s = -1;
            if (k !== undefined) {
                k._ljv();
                k = undefined
            }
        };
        m._cjr = function() {};
        m._cjs = function() {};
        var o = function(y, x) {
            var v = y;
            var u = x;
            if (t !== v || s !== u) {
                t = v;
                s = u;
                d[0] = 1 / t;
                d[1] = 1 / s;
                b = evs._qzg(0, t, 0, s, 0.1, 5000, b)
            }
        };
        m._cju = function(y, z, x, C) {
            var v = y._ke();
            var A = y._kg();
            o(v, A);
            l._dkf();
            var u = esi._ejp(fpu._mx.id, h);
            esi._ejq(u, true);
            var B = l.bindTexture(fce._mbt, y._gbs(), l.gl.TEXTURE_2D);
            l.gl.uniform1i(u._nke(elp._dzw.id), B);
            l.gl.uniform2f(u._nke(elp._dyv.id), d[0], d[1]);
            l.gl.uniform1f(u._nke(elp._dyw.id), 0.75);
            l.gl.uniform1f(u._nke(elp._dyy.id), 0.166);
            l.gl.uniform1f(u._nke(elp._dyz.id), 0);
            r(u, z, b, x, C);
            l._dle();
            l._dkd()
        };
        var r = function(A, z, E, D, v) {
            l._dld(z);
            var G = l._bff();
            var y = l._bfh();
            l._dkr(0, 0, G, y);
            if (k === undefined) {
                k = eon(l)
            }
            if (v !== undefined) {
                var C = t;
                var u = s;
                v[1] = y - (v[1] + v[3]);
                if (D !== undefined && (D[0] !== 0 || D[1] !== 0 || D[2] !== C || D[3] !== u)) {
                    D[1] = u - (D[1] + D[3]);
                    var H = D[0] / C;
                    var B = D[1] / u;
                    var F = (D[0] + D[2]) / C;
                    var x = (D[1] + D[3]) / u;
                    k.set(v[0], v[1], v[2], v[3], H, B, F, x)
                } else {
                    k.set(v[0], v[1], v[2], v[3])
                }
                E = evs._qzg(0, G, 0, y, 0.1, 5000, i)
            } else {
                k.set(0, 0, t, s)
            }
            l._dkc(false);
            k.bind();
            l.gl.uniformMatrix4fv(A._nke(elp._dxc.id), false, E);
            l.gl.vertexAttribPointer(A._nkh(elp._edy.id), 2, l.gl.FLOAT, false, 16, 0);
            l.gl.vertexAttribPointer(A._nkh(elp._eek.id), 2, l.gl.FLOAT, false, 16, 8);
            l.gl.drawElements(l.gl.TRIANGLES, 6, l.gl.UNSIGNED_SHORT, 0)
        };
        e = undefined;
        return m
    };
    return a
}();
var few = function() {
    var a = function(b) {
        var c = null;
        var d;
        var e = undefined;
        if (b._bi !== undefined) {
            c = enl({
                _yl: eqs._mbr
            });
            d = b._bi
        } else {
            throw new Error("2395 ")
        }
        c._cjr = function() {
            e = undefined
        };
        c._cjs = function() {};
        c._doj = function(g) {
            if (e !== undefined) {
                e._qcs()
            }
            e = g;
            if (e !== undefined) {
                e._qcr()
            }
        };
        c.bind = function(g) {
            if (c._xv() && e !== undefined) {
                var h = d.bindTexture(fce._mbr, e._gbs(), d.gl.TEXTURE_CUBE_MAP);
                g._nky(elp._dzu, h)
            } else {
                var h = d.bindTexture(fce._mbr, undefined, d.gl.TEXTURE_CUBE_MAP);
                g._nky(elp._dzu, h)
            }
        };
        b = undefined;
        return c
    };
    return a
}();
var fnq = function() {
    var a = function(h) {
        var q = null;
        var o;
        var m = 0;
        var v = {
            _lqc: undefined,
            _lqd: undefined,
            _gel: -1,
            _gen: -1
        };
        var g = undefined;
        if (h._bi !== undefined) {
            q = enl({
                _yl: eqs._ml
            });
            o = h._bi
        } else {
            throw new Error("2638 ")
        }
        var r;
        var t;
        var u;
        var s, k;
        var c = evs.create();
        var p;
        var j;
        var i = fdd();
        var n = fqv.create();
        q._efk = function() {
            if (s === undefined) {
                u = o.gl.createBuffer();
                r = new ArrayBuffer(4 * (4 + 4 + 4 + 4 + 4 + 4 + 4 + 4));
                t = new Float32Array(r);
                s = o.gl.createBuffer();
                var x = new ArrayBuffer(6 * 2);
                var y = new Uint16Array(x);
                y[0] = 0;
                y[1] = 1;
                y[2] = 3;
                y[3] = 1;
                y[4] = 2;
                y[5] = 3;
                o.gl.bindBuffer(o.gl.ELEMENT_ARRAY_BUFFER, s);
                o.gl.bufferData(o.gl.ELEMENT_ARRAY_BUFFER, x, o.gl.STATIC_DRAW);
                k = o.gl.createBuffer();
                x = new ArrayBuffer(6 * 2);
                y = new Uint16Array(x);
                y[0] = 0;
                y[1] = 3;
                y[2] = 1;
                y[3] = 1;
                y[4] = 3;
                y[5] = 2;
                o.gl.bindBuffer(o.gl.ELEMENT_ARRAY_BUFFER, k);
                o.gl.bufferData(o.gl.ELEMENT_ARRAY_BUFFER, x, o.gl.STATIC_DRAW)
            }
        };
        var l = function(z, A) {
            var C = o.viewportWidth;
            var B = o.viewportHeight;
            if (C !== p || B !== j) {
                p = C;
                j = B;
                c = evs._qzg(0, C, 0, B, 0.1, 10000, c)
            }
            var x = 1.5;
            var y = 0;
            t[y++] = 0;
            t[y++] = 0;
            z._eut(n);
            fqv._eij(n, A);
            t[y++] = n[0];
            t[y++] = n[1];
            t[y++] = -n[2];
            z._eva(n);
            fqv._eij(n, A);
            fqv.scale(n, x, n);
            t[y++] = n[0];
            t[y++] = n[1];
            t[y++] = n[2];
            t[y++] = C;
            t[y++] = 0;
            z._euv(n);
            fqv._eij(n, A);
            t[y++] = n[0];
            t[y++] = n[1];
            t[y++] = -n[2];
            z._evb(n);
            fqv._eij(n, A);
            fqv.scale(n, x, n);
            t[y++] = n[0];
            t[y++] = n[1];
            t[y++] = n[2];
            t[y++] = C;
            t[y++] = B;
            z._eus(n);
            fqv._eij(n, A);
            t[y++] = n[0];
            t[y++] = n[1];
            t[y++] = -n[2];
            z._euz(n);
            fqv._eij(n, A);
            fqv.scale(n, x, n);
            t[y++] = n[0];
            t[y++] = n[1];
            t[y++] = n[2];
            t[y++] = 0;
            t[y++] = B;
            z._eur(n);
            fqv._eij(n, A);
            t[y++] = n[0];
            t[y++] = n[1];
            t[y++] = -n[2];
            z._eux(n);
            fqv._eij(n, A);
            fqv.scale(n, x, n);
            t[y++] = n[0];
            t[y++] = n[1];
            t[y++] = n[2];
            o.gl.bindBuffer(o.gl.ARRAY_BUFFER, u);
            o.gl.bufferData(o.gl.ARRAY_BUFFER, r, o.gl.DYNAMIC_DRAW)
        };
        q._ejp = function(x) {
            i._yh();
            if (x) {
                i.enable(fct._drh)
            }
            return esi._ejp(fpu._ml.id, i)
        };
        q._cju = function(D, A, E, G) {
            var C = D._qow(eqs._drh);
            var H = C._xv();
            var y = d();
            var z = v._lqc,
                x = v._lqd;
            if (g !== undefined) {
                z = x = g
            }
            if (z === undefined && x === undefined) {
                return
            }
            l(A, E);
            var F = this._ejp(H);
            esi._ejq(F, true);
            o._dkm();
            o._dkc(y > 0 && (z === undefined || x === undefined));
            o.gl.bindBuffer(o.gl.ARRAY_BUFFER, u);
            if (G) {
                o.gl.bindBuffer(o.gl.ELEMENT_ARRAY_BUFFER, k)
            } else {
                o.gl.bindBuffer(o.gl.ELEMENT_ARRAY_BUFFER, s)
            }
            o.gl.uniformMatrix4fv(F._nke(elp._dxc.id), false, c);
            if (z !== undefined) {
                o.gl.uniform1i(F._nke(elp._ear.id), true);
                var B = o.bindTexture(fce._mby, z._gbs(), o.gl.TEXTURE_CUBE_MAP);
                o.gl.uniform1i(F._nke(elp._eao.id), B)
            } else {
                o.gl.uniform1i(F._nke(elp._ear.id), false)
            }
            if (x !== undefined) {
                o.gl.uniform1i(F._nke(elp._eat.id), true);
                var B = o.bindTexture(fce._mbz, x._gbs(), o.gl.TEXTURE_CUBE_MAP);
                o.gl.uniform1i(F._nke(elp._eap.id), B)
            } else {
                o.gl.uniform1i(F._nke(elp._eat.id), false)
            }
            if (H && C !== undefined) {
                C.bind(F)
            }
            if (D !== undefined) {
                D._rxy(F)
            }
            o.gl.uniform1f(F._nke(elp._eaq.id), d());
            o.gl.vertexAttribPointer(F._nkh(elp._edy.id), 2, o.gl.FLOAT, false, 32, 0);
            o.gl.vertexAttribPointer(F._nkh(elp._eea.id), 3, o.gl.FLOAT, true, 32, 8);
            o.gl.vertexAttribPointer(F._nkh(elp._eeb.id), 3, o.gl.FLOAT, true, 32, 20);
            o.gl.drawElements(o.gl.TRIANGLES, 6, o.gl.UNSIGNED_SHORT, 0);
            o._dki();
            o._dle()
        };
        q._cjr = function() {};
        q._cjs = function() {};
        var d = function() {
            if (v._gel < 0) {
                return 0
            }
            return (m - v._gel) / (v._gen - v._gel)
        };
        q._lqh = function(y, x) {
            if (x < 1) {
                if (v._lqc !== undefined) {
                    v._lqc._qcs()
                }
                v._lqc = y;
                if (v._lqc !== undefined) {
                    v._lqc._qcr()
                }
                if (v._lqd !== undefined) {
                    v._lqd._qcs()
                }
                v._lqd = undefined;
                v._gel = v._gen = -1
            } else {
                if (v._lqd !== undefined) {
                    if (v._lqc !== undefined) {
                        v._lqc._qcs()
                    }
                    v._lqc = v._lqd
                }
                v._lqd = y;
                if (v._lqd !== undefined) {
                    v._lqd._qcr()
                }
                v._gel = m;
                v._gen = m + x
            }
        };
        q._lqf = function(x) {
            g = x
        };
        q._bfc = function(x) {
            m = x;
            if (v._gen > 0 && m >= v._gen) {
                v._gen = v._gel = -1;
                if (v._lqc !== undefined) {
                    v._lqc._qcs()
                }
                v._lqc = v._lqd;
                v._lqd = undefined
            }
        };
        var b = function() {
            _qkb(this, enc);
            this._lqi = undefined;
            this._lqk = undefined;
            this._lql = undefined;
            this._hwu = undefined
        };
        _qjz(enc, b);
        b.prototype._cdf = function() {
            this._lqn._cju(this._hwu, this._lqi, this._lqk, this._lql)
        };
        var e = function() {
            return new b()
        };
        q._cdp = function(C, x, B, A, z) {
            var y = fdh._jp(eva._ml, e);
            y._lqn = q;
            y.priority = etb._ml;
            y._lqi = B;
            y._lqk = A;
            y._lql = z;
            y._hwu = x;
            C.append(y)
        };
        h = undefined;
        return q
    };
    return a
}();
var ftf = function() {
    var a = function(o) {
        var h = null;
        var q;
        var b = 0;
        if (o._bi !== undefined) {
            h = enl({
                _yl: eqs._nq
            });
            q = o._bi
        } else {
            throw new Error("2946 ")
        }
        var m = [1, 0, 1, 0, 1];
        var g = {
            _gej: m,
            _gel: -1,
            _gem: m,
            _gen: -1,
            _geo: m
        };
        var j = -1,
            i = -1;
        var c = null;
        var l = null;
        var e = undefined;
        var k = undefined;
        if (false) {}
        h._sri = function(r, s) {
            n(g, r.slice(0), s)
        };
        var n = function(r, s, t) {
            if (t < 1) {
                r._gej = s
            } else {
                r._gem = r._gej.slice(0);
                r._gel = b;
                r._geo = s;
                r._gen = b + t
            }
        };
        h._bfc = function(r) {
            b = r;
            p(g, b)
        };
        var p = function(s, u) {
            if (s._gen >= u) {
                var t = (u - s._gel) / (s._gen - s._gel);
                for (var r = 0; r < s._gem.length; r++) {
                    s._gej[r] = s._gem[r] + (t * (s._geo[r] - s._gem[r]))
                }
                return true
            } else {
                return false
            }
        };
        h._efk = function() {};
        h._efm = function() {
            if (e !== undefined) {
                e._ljv();
                e = undefined
            }
            if (k !== undefined) {
                k._ljv();
                k = undefined
            }
        };
        h._cjr = function() {};
        h._cjs = function() {};
        h._goe = function() {
            var s = g._gej;
            if (false) {}
            for (var r = 0; r < m.length; r++) {
                if (s[r] !== m[r]) {
                    return false
                }
            }
            return true
        };
        var d = function(u, t) {
            var s = u;
            var r = t;
            if (j !== s || i !== r) {
                j = s;
                i = r;
                c = evs._qzg(0, j, 0, i, 0.1, 5000, c);
                if (e === undefined) {
                    e = eon(q)
                }
                e.set(0, 0, j, i)
            } else {
                if (e === undefined) {
                    e = eon(q);
                    e.set(0, 0, j, i)
                }
            }
        };
        h._cju = function(A, z, E, r) {
            var s = A._ke();
            var y = A._kg();
            d(s, y);
            q._dkf();
            var F = g._gej;
            if (false) {}
            var B = esi._ejp(fpu._nq.id, undefined);
            esi._ejq(B, true);
            var u = q.bindTexture(fce._mbt, A._gbs(), q.gl.TEXTURE_2D);
            q.gl.uniform1i(B._nke(elp._dzw.id), u);
            q.gl.uniform1f(B._nke(elp._eaf.id), F[0]);
            q.gl.uniform4f(B._nke(elp._eag.id), F[1], F[2], F[3], F[4]);
            q._dld(z);
            var H = q._bff();
            var x = q._bfh();
            q._dkr(0, 0, H, x);
            var D = c;
            if (r !== undefined) {
                if (k === undefined) {
                    k = eon(q)
                }
                r[1] = x - (r[1] + r[3]);
                var v;
                if (E !== undefined && (E[0] !== 0 || E[1] !== 0 || E[2] !== s || E[3] !== y)) {
                    E[1] = y - (E[1] + E[3]);
                    var I = E[0] / s;
                    var C = E[1] / y;
                    var G = (E[0] + E[2]) / s;
                    var t = (E[1] + E[3]) / y;
                    k.set(r[0], r[1], r[2], r[3], I, C, G, t)
                } else {
                    k.set(r[0], r[1], r[2], r[3])
                }
                k.bind();
                D = evs._qzg(0, H, 0, x, 0.1, 5000, l)
            } else {
                e.bind()
            }
            q._dkc(false);
            q.gl.uniformMatrix4fv(B._nke(elp._dxc.id), false, D);
            q.gl.vertexAttribPointer(B._nkh(elp._edy.id), 2, q.gl.FLOAT, false, 16, 0);
            q.gl.vertexAttribPointer(B._nkh(elp._eek.id), 2, q.gl.FLOAT, false, 16, 8);
            q.gl.drawElements(q.gl.TRIANGLES, 6, q.gl.UNSIGNED_SHORT, 0);
            q._dkd()
        };
        o = undefined;
        return h
    };
    return a
}();
var eov = function() {
    var a = function(i) {
        var o = null;
        var n;
        var y;
        if (i._bi !== undefined) {
            o = enl({
                _yl: eqs._mgg
            });
            n = i._bi;
            y = i._gbu
        } else {
            throw new Error("2503 ")
        }
        var s = 2048;
        o._gbv = function() {
            return s
        };
        o._gbx = function(z) {
            s = z;
            this._gdc();
            this._gdb()
        };
        var p;
        var k = null;
        var h = 0.5;
        o._gby = function(z) {
            h = z
        };
        var v;
        o._gbz = function(z) {
            v = z
        };
        o._gcb = function() {
            return v
        };
        var u;
        o._gcd = function(z) {
            u = z
        };
        o._gce = function() {
            return u
        };
        var c = 0.008;
        o._gcg = function(z) {
            c = z
        };
        var l = 1.1;
        o._gch = function(z) {
            l = z
        };
        var g = 4;
        o._gcj = function(z) {
            g = z
        };
        var x = new Float32Array(4);
        o._gck = function() {
            return eoc._evd
        };
        var q = eoc._evd;
        o._gcm = function() {
            return q
        };
        o._gco = function(z) {
            switch (z) {
                case eoc._qk:
                    o._gbx(1024);
                    break;
                case eoc._evd:
                case eoc._qn:
                    o._gbx(2048);
                    break;
                case eoc._dgn:
                    o._gbx(4096);
                    break;
                default:
                    q = eoc._evd;
                    o._gbx(2048);
                    break
            }
            q = z
        };
        o._gcq = 0;
        o._gcr = 1;
        o._gcs = 2;
        var j = o._gcs;
        o._gct = function() {
            return j
        };
        o._gcu = function(z) {
            j = z
        };
        var m = false;
        o._gcv = function() {
            return m
        };
        var e;
        o._gcx = function() {
            return e
        };
        var r;
        o._gcz = function() {
            return r
        };
        var b = evs.create();
        o._gda = function() {
            return b
        };
        var d = null;
        o._gdb = function() {
            if (s !== p) {
                this._gdc();
                p = s;
                k = n._dkz(p, p, true, false, false);
                k._qcr()
            }
        };
        o._gdc = function() {
            p = -1;
            if (k !== null) {
                k._qcs();
                k = null
            }
        };
        o._efk = function() {
            this._gdb()
        };
        o._efm = function() {
            this._gdc();
            o._cjr()
        };
        o._cjr = function() {
            d = null
        };
        o._cjs = function() {
            d = null
        };
        o._efo = function(z) {
            if (!o._xv() || m) {
                throw new Error("2504 ")
            }
            n._dkq();
            n._dld(k);
            n._dkr(0, 0, p, p);
            n.gl.clearColor(1, 1, 1, 1);
            n.gl.clear(n.gl.COLOR_BUFFER_BIT | n.gl.DEPTH_BUFFER_BIT);
            y._rxp();
            e = z._gde;
            r = z._gdf;
            evs._eil(r, e, b);
            m = true;
            n.gl.enable(n.gl.POLYGON_OFFSET_FILL);
            n.gl.polygonOffset(l, g);
            n.gl.enable(n.gl.DEPTH_TEST);
            if (n._dje()) {
                n.gl.colorMask(false, false, false, false)
            }
        };
        o._gdg = function(z) {
            if (z !== d) {
                var A = this._gdm();
                var B = n.bindTexture(fce._dpz, A ? A._gbs() : undefined, n.gl.TEXTURE_2D);
                z._nky(elp._dyn, B);
                z._nky(elp._dyj, h);
                x[0] = v;
                x[1] = 1 / u;
                x[2] = c;
                x[3] = 1 / s;
                z._nky(elp._dyp, x);
                d = z
            }
        };
        var t = function(L, N, M, Q, z, P, I, E, O) {
            L._dld(z);
            var H = L._bff();
            var J = L._bfh();
            L._dkr(0, 0, H, J);
            if (O !== undefined) {
                if (clippedQuadBuffer === undefined) {
                    clippedQuadBuffer = eon(L)
                }
                var K = _ck;
                var B = _cl;
                O[1] = J - (O[1] + O[3]);
                var C;
                if (E !== undefined && (E[0] !== 0 || E[1] !== 0 || E[2] !== K || E[3] !== B)) {
                    E[1] = B - (E[1] + E[3]);
                    var F = E[0] / K;
                    var G = E[1] / B;
                    var D = (E[0] + E[2]) / K;
                    var A = (E[1] + E[3]) / B;
                    clippedQuadBuffer.set(O[0], O[1], O[2], O[3], F, G, D, A)
                } else {
                    clippedQuadBuffer.set(O[0], O[1], O[2], O[3])
                }
                clippedQuadBuffer.bind();
                P = evs._qzg(0, H, 0, J, 0.1, 5000, clippedProjectionMatrix)
            } else {
                baseQuadBuffer.bind()
            }
            L._dkc(false);
            L.gl.uniformMatrix4fv(Q._nke(elp._dxc.id), false, P);
            L.gl.vertexAttribPointer(Q._nkh(elp._edy.id), 2, L.gl.FLOAT, false, 16, 0);
            L.gl.vertexAttribPointer(Q._nkh(elp._eek.id), 2, L.gl.FLOAT, false, 16, 8);
            L.gl.drawElements(L.gl.TRIANGLES, 6, L.gl.UNSIGNED_SHORT, 0)
        };
        o._gdk = function(H, G, B, z, E, F, D) {
            var C = esi._ejp(fpu._nf.id, undefined);
            esi._ejq(C, true);
            var A = H.bindTexture(fce._mbt, G._gbs(), H.gl.TEXTURE_2D);
            H.gl.uniform1i(C._nke(elp._dzw.id), A);
            H.gl.uniform4f(C._nke(elp._ebr.id), E, z, F, D);
            t(H, this.fullScreenVertexBufferID, this.fullScreenIndexBufferID, C, B, fullscreenQuadProjMat, false);
            H._dle()
        };
        o._efq = function() {
            if (!o._xv() || !m) {
                throw new Error("2505 ")
            }
            n._dld(null);
            m = false;
            if (n._dje()) {
                n.gl.colorMask(true, true, true, true)
            }
            n.gl.enable(n.gl.POLYGON_OFFSET_FILL);
            n.gl.polygonOffset(0, 0)
        };
        o._gdm = function() {
            if (k === null) {
                return null
            } else {
                var z = k._kj();
                if (z === undefined) {
                    z = k._fpv()
                }
                return z
            }
        };
        i = undefined;
        return o
    };
    return a
}();
var exk = function() {
    var a = function(g) {
        var m = null;
        var l;
        var j = 0;
        if (g._bi !== undefined) {
            m = enl({
                _yl: eqs._my
            });
            l = g._bi
        } else {
            throw new Error("2875 ")
        }
        var h = [1];
        var q = {
            _gej: h,
            _gel: -1,
            _gem: h,
            _gen: -1,
            _geo: h
        };
        var t = -1,
            s = -1;
        var e = new Float32Array(2);
        var b = null;
        var i = null;
        var k = undefined;
        var c = null;
        var o = true;
        m._rpz = function(u) {
            o = u
        };
        m._rqa = function(u, v) {
            n(q, u.slice(0), v)
        };
        var n = function(u, v, x) {
            if (x < 1) {
                u._gej = v
            } else {
                u._gem = u._gej.slice(0);
                u._gel = j;
                u._geo = v;
                u._gen = j + x
            }
        };
        m._bfc = function(u) {
            j = u;
            d(q, j)
        };
        var d = function(v, y) {
            if (v._gen >= y) {
                var x = (y - v._gel) / (v._gen - v._gel);
                for (var u = 0; u < v._gem.length; u++) {
                    v._gej[u] = v._gem[u] + (x * (v._geo[u] - v._gem[u]))
                }
                return true
            } else {
                return false
            }
        };
        m._efk = function() {};
        m._efm = function() {
            t = s = -1;
            if (c !== null) {
                c._qcs();
                c = null
            }
            if (k !== undefined) {
                k._ljv();
                k = undefined
            }
        };
        m._cjr = function() {};
        m._cjs = function() {};
        var p = function(y, x) {
            var v = y;
            var u = x;
            if (t !== v || s !== u) {
                t = v;
                s = u;
                e[0] = 1 / t;
                e[1] = 1 / s;
                b = evs._qzg(0, t, 0, s, 0.1, 5000, b)
            }
        };
        m._cju = function(D, A, G, u) {
            var v = D._ke();
            var z = D._kg();
            var F, y;
            if (A !== null) {
                F = v;
                y = z
            } else {
                F = u[2];
                y = u[3]
            }
            p(v, z);
            l._dkf();
            var C = esi._ejp(fpu._my.id, undefined);
            esi._ejq(C, true);
            var x = l.bindTexture(fce._mbt, D._gbs(), l.gl.TEXTURE_2D);
            l.gl.uniform1i(C._nke(elp._dzw.id), x);
            if (c === null) {
                c = D;
                c._qcr()
            }
            var B = l.bindTexture(fce._mbu, c._gbs(), l.gl.TEXTURE_2D);
            l.gl.uniform1i(C._nke(elp._dzy.id), B);
            if (c !== null) {
                c._qcs()
            }
            c = D;
            if (c !== null) {
                c._qcr()
            }
            l.gl.uniform2f(C._nke(elp._edp.id), v, z);
            l.gl.uniform2f(C._nke(elp._edr.id), F, y);
            l.gl.uniform1f(C._nke(elp._eds.id), (o) ? 1 : -1);
            var E = 0.35;
            if (!o) {
                E = 1 - E
            }
            l.gl.uniform1f(C._nke(elp._edt.id), E);
            r(C, A, b, G, u);
            l._dle();
            l._dkd()
        };
        var r = function(A, z, E, D, v) {
            l._dld(z);
            var G = l._bff();
            var y = l._bfh();
            l._dkr(0, 0, G, y);
            if (k === undefined) {
                k = eon(l)
            }
            if (v !== undefined) {
                var C = t;
                var u = s;
                v[1] = y - (v[1] + v[3]);
                if (D !== undefined && (D[0] !== 0 || D[1] !== 0 || D[2] !== C || D[3] !== u)) {
                    D[1] = u - (D[1] + D[3]);
                    var H = D[0] / C;
                    var B = D[1] / u;
                    var F = (D[0] + D[2]) / C;
                    var x = (D[1] + D[3]) / u;
                    k.set(v[0], v[1], v[2], v[3], H, B, F, x)
                } else {
                    k.set(v[0], v[1], v[2], v[3])
                }
                E = evs._qzg(0, G, 0, y, 0.1, 5000, i)
            } else {
                k.set(0, 0, t, s)
            }
            l._dkc(false);
            k.bind();
            l.gl.uniformMatrix4fv(A._nke(elp._dxc.id), false, E);
            l.gl.vertexAttribPointer(A._nkh(elp._edy.id), 2, l.gl.FLOAT, false, 16, 0);
            l.gl.vertexAttribPointer(A._nkh(elp._eek.id), 2, l.gl.FLOAT, false, 16, 8);
            l.gl.drawElements(l.gl.TRIANGLES, 6, l.gl.UNSIGNED_SHORT, 0)
        };
        g = undefined;
        return m
    };
    return a
}();
var emp = {
    _brm: 0,
    _qk: 1,
    _ql: 2,
    _qn: 3,
    _qo: 4
};
var emr = function() {
    var a = function(b) {
        this.width;
        this.height;
        this._ehb = 0, this._ehd = 0, this._ehf = 0, this._ehh = 0;
        this._ibd;
        this.image;
        this.alpha;
        if (b.width !== undefined && b.height !== undefined && b._ibd !== undefined && b.image !== undefined) {
            this.width = b.width;
            this.height = b.height;
            if (b._ehb !== undefined) {
                this._ehb = b._ehb
            }
            if (b._ehd !== undefined) {
                this._ehd = b._ehd
            }
            if (b._ehf !== undefined) {
                this._ehf = b._ehf
            }
            if (b._ehh !== undefined) {
                this._ehh = b._ehh
            }
            this._ibd = b._ibd;
            this.image = b.image;
            if (b.alpha !== undefined) {
                this.alpha = b.alpha
            }
        } else {
            throw new Error("2577 ")
        }
    };
    a.prototype._ke = function() {
        return this.width
    };
    a.prototype._kg = function() {
        return this.height
    };
    a.prototype._ehj = function() {
        return {
            left: this._ehb,
            _cer: this._ehd,
            top: this._ehf,
            _ces: this._ehh
        }
    };
    a.prototype._ibe = function() {
        this._ehb = this._ehd = this._ehf = this._ehh = 0
    };
    a.prototype._ehk = function() {
        return this._ehb + this.width + this._ehd
    };
    a.prototype._ehl = function() {
        return this._ehh + this.height + this._ehf
    };
    a.prototype._wq = function() {
        var b = new Uint8Array(this.width * this.height * 4);
        for (var c = 0; c < this.width * this.height; c++) {
            b[c * 4] = (this._ibd[this.image[c]] & 16711680) >>> 16;
            b[c * 4 + 1] = (this._ibd[this.image[c]] & 65280) >>> 8;
            b[c * 4 + 2] = (this._ibd[this.image[c]] & 255);
            if (this.alpha !== undefined) {
                b[c * 4 + 3] = this.alpha[c]
            } else {
                if (this.image[c] === 0) {
                    b[c * 4 + 3] = 0
                } else {
                    b[c * 4 + 3] = 255
                }
            }
        }
        return b.buffer
    };
    a.prototype._ehm = function() {
        var c;
        for (var g = (this.height >> 1) - 1; g >= 0; g--) {
            var e = g * this.width;
            var d = (this.height - g - 1) * this.width;
            for (var b = -this.width; b < 0; b++) {
                c = this.image[e];
                this.image[e] = this.image[d];
                this.image[d] = c;
                if (this.alpha !== undefined) {
                    c = this.alpha[e];
                    this.alpha[e] = this.alpha[d];
                    this.alpha[d] = c
                }++e;
                ++d
            }
        }
        c = this._ehf;
        this._ehf = this._ehh;
        this._ehh = c
    };
    a.prototype._eho = function() {
        var d = new Uint8Array(this.width * this.height);
        var c = 0;
        for (var b = 0; b < this.width; b++) {
            for (var h = this.height - 1; h >= 0; h--) {
                d[c++] = this.image[b + h * this.width]
            }
        }
        var g = this.image;
        this.image = d;
        if (this.alpha !== undefined) {
            c = 0;
            for (var b = 0; b < this.width; b++) {
                for (var h = this.height - 1; h >= 0; h--) {
                    g[c++] = this.alpha[b + h * this.width]
                }
            }
            this.alpha = g
        }
        var e = this._ehf;
        this._ehf = this._ehb;
        this._ehb = this._ehh;
        this._ehh = this._ehd;
        this._ehd = e;
        e = this.height;
        this.height = this.width;
        this.width = e
    };
    return function(b) {
        return new a(b)
    }
}();
var fao = function() {
    var b = {};
    var e = 65535;
    var c = 0;
    var d = 1;
    var a = 0;
    var g = 1;
    var j = function(k) {
        return h(k)[0]
    };
    b._nsx = j;
    var i = function(k) {
        return h(k)
    };
    b._nsy = i;
    var h = function(r) {
        r._loj(r.getSize() - 2);
        var K = r._lpl();
        var v = K & 32767;
        var m = K >> 15;
        var k = new Array(v);
        if (m === a) {
            var q = new Array(v);
            for (var H = 0; H < v; H++) {
                q[H] = {}
            }
            r._loj(r.getSize() - 7 - v * 8);
            var F = r._lpl(),
                l = r._lpl();
            var s = (r._lpi() & 255) + 1;
            for (H = 0; H < v; H++) {
                q[H]._ehb = r._lpl()
            }
            for (H = 0; H < v; H++) {
                q[H]._ehf = r._lpl()
            }
            for (H = 0; H < v; H++) {
                q[H].width = r._lpl()
            }
            for (H = 0; H < v; H++) {
                q[H].height = r._lpl()
            }
            for (H = 0; H < v; H++) {
                var J = q[H];
                J._ehd = F - J.width - J._ehb;
                J._ehh = l - J.height - J._ehf
            }
            r._loj(r.getSize() - 7 - v * 8 - (s - 1) * 3);
            var z = new Array(s);
            for (var N = 1; N < s; N++) {
                z[N] = r.g3();
                if (z[N] === 0) {
                    z[N] = 1
                }
            }
            for (H = 0; H < v; H++) {
                q[H]._ibd = z
            }
            r._loj(0);
            for (H = 0; H < v; H++) {
                var J = q[H];
                var E = J.width * J.height;
                J.image = new Uint8Array(E);
                var p = r._lpi();
                if ((p & 2) == 0) {
                    if ((p & 1) == 0) {
                        for (var A = 0; A < E; A++) {
                            J.image[A] = r._lpi()
                        }
                    } else {
                        for (var u = 0; u < J.width; u++) {
                            for (var t = 0; t < J.height; t++) {
                                J.image[u + t * J.width] = r._lpi()
                            }
                        }
                    }
                } else {
                    var B = false;
                    J.alpha = new Uint8Array(E);
                    if ((p & 1) == 0) {
                        for (A = 0; A < E; A++) {
                            J.image[A] = r._lpi()
                        }
                        for (A = 0; A < E; A++) {
                            var o = J.alpha[A] = r._lpi();
                            B |= (o != -1)
                        }
                    } else {
                        for (u = 0; u < J.width; u++) {
                            for (t = 0; t < J.height; t++) {
                                J.image[u + t * J.width] = r._lpi()
                            }
                        }
                        for (u = 0; u < J.width; u++) {
                            for (t = 0; t < J.height; t++) {
                                var o = J.alpha[u + t * J.width] = r._lpi();
                                B |= (o != -1)
                            }
                        }
                    }
                    if (!B) {
                        J.alpha = undefined
                    }
                }
                k[H] = emr(J)
            }
        } else {
            r._loj(0);
            var M = r._lpi();
            if (M == c) {
                var I = r._lpi() === 1;
                var G = r._lpl();
                var D = r._lpl();
                for (var H = 0; H < v; H++) {
                    var C = new Uint8Array(G * D * 4);
                    for (var N = 0; N < G * D; N++) {
                        var L = r.g3();
                        C[(N * 4) + 0] = ((L >> 16) & 255);
                        C[(N * 4) + 1] = ((L >> 8) & 255);
                        C[(N * 4) + 2] = (L & 255);
                        C[(N * 4) + 3] = 255
                    }
                    if (I) {
                        for (var N = 0; N < G * D; N++) {
                            C[(N * 4) + 3] = r._lpi()
                        }
                    }
                    k[H] = fvj({
                        width: G,
                        height: D,
                        image: C
                    })
                }
            } else {
                if (M == d) {
                    throw new Error("2706 ")
                } else {
                    throw new Error("2707 " + M)
                }
            }
        }
        return k
    };
    return b
}();
var fsu = function() {
    var a = function() {
        this._ghl = {};
        this._ghl._ghm = this._ghl;
        this._ghl.next = this._ghl;
        this._ghn = this._ghl;
        this.length = 0
    };
    a.prototype._cnv = function(b) {
        if (b.next !== undefined) {
            throw new Error("2512 " + b + "2512 " + (b.__linked_list_root || "2512 "))
        }
        this._ghl.next._ghm = b;
        b.next = this._ghl.next;
        this._ghl.next = b;
        b._ghm = this._ghl;
        this.length++;
        if (false) {}
    };
    a.prototype._cnx = function(b) {
        if (b.next !== undefined) {
            throw new Error("2513 " + b + "2513 " + (b.__linked_list_root || "2513 "))
        }
        this._ghl._ghm.next = b;
        b._ghm = this._ghl._ghm;
        this._ghl._ghm = b;
        b.next = this._ghl;
        this.length++;
        if (false) {}
    };
    a.prototype._ghp = function(c, b) {
        if (c.next !== undefined) {
            throw new Error("2514 " + c + "2514 " + (c.__linked_list_root || "2514 "))
        }
        c._ghm = b;
        c.next = b.next;
        c.next._ghm = c;
        b.next = c;
        this.length++;
        if (false) {}
    };
    a.prototype._ghq = function(c, b) {
        if (c.next !== undefined) {
            throw new Error("2515 " + c + "2515 " + (c.__linked_list_root || "2515 "))
        }
        c._ghm = b._ghm;
        c.next = b;
        b._ghm.next = c;
        b._ghm = c;
        this.length++;
        if (false) {}
    };
    a.prototype.unlink = function(b) {
        if (b.next === undefined) {
            throw new Error("2516 " + b + "2516 ")
        }
        if (false) {}
        b._ghm.next = b.next;
        b.next._ghm = b._ghm;
        b._ghm = undefined;
        b.next = undefined;
        this.length--
    };
    if (false) {}
    a.prototype._yh = function() {
        for (var b = this._bup(); b !== null; b = this._bur()) {
            this.unlink(b)
        }
        this._ghl.next = this._ghl;
        this._ghl._ghm = this._ghl;
        this.length = 0
    };
    a.prototype._bum = function() {
        return this.length
    };
    a.prototype._bup = function() {
        if (this._ghl.next === this._ghl) {
            return null
        } else {
            this._ghn = this._ghl.next.next;
            return this._ghl.next
        }
    };
    a.prototype._bur = function() {
        if (this._ghn === this._ghl) {
            return null
        } else {
            var b = this._ghn;
            this._ghn = this._ghn.next;
            return b
        }
    };
    a.prototype._but = function() {
        if (this._ghl._ghm === this._ghl) {
            return null
        } else {
            return this._ghl._ghm
        }
    };
    return function() {
        return new a()
    }
}();
var fub = function() {
    var a = function(g) {
        var p = null;
        var o;
        var m = 0;
        if (g._bi !== undefined) {
            p = enl({
                _yl: eqs._nv
            });
            o = g._bi
        } else {
            throw new Error("2781 ")
        }
        var x = -1,
            u = -1;
        p._qcu = function() {
            return x
        };
        p._qcw = function() {
            return u
        };
        var y = null;
        var n = null;
        var e = null;
        var d = null;
        var r = null;
        p._qcx = function() {
            if (y === null) {
                return null
            }
            return y._fpv()
        };
        p._qcy = function() {
            return y
        };
        p._qcz = function() {
            if (n === null) {
                return null
            }
            return n._fpv()
        };
        p._qdb = function() {
            if (e === null) {
                return null
            }
            return e._fpv()
        };
        var b = null;
        var j = null;
        var l = undefined;
        var s = undefined;
        var h = false;
        p._qdd = function() {
            return h
        };
        var c = fdd([]);
        p._ehy = function() {
            return c._xv(fct._dqa)
        };
        p._ehz = function(z) {
            if (z) {
                c.enable(fct._dqa)
            } else {
                c.disable(fct._dqa)
            }
        };
        p._bfc = function(z) {
            m = z
        };
        var q = function(z, G, F) {
            var C = Math.floor(z);
            var A = Math.floor(G);
            var B = y === null || n === null || e === null || d === null;
            if (x !== C || u !== A) {
                x = C;
                u = A;
                B = true
            }
            if (B) {
                p._efm();
                y = o._dkz(x, u, true, false, true);
                y._qcr();
                n = o._dkz(x, u, true, false, false);
                n._qcr();
                e = o._dkz(x * 0.75, u * 0.75, true, false, false);
                e._qcr();
                d = o._dkz(x * 0.75, u * 0.75, true, false, false);
                d._qcr();
                b = evs._qzg(0, x, 0, u, 0.1, 5000, b);
                if (l === undefined) {
                    l = eon(o)
                }
                l.set(0, 0, x, u)
            }
            if (r === null) {
                var H = new Uint8Array(128 * 128 * 4);
                var D = fqv.create();
                for (var E = 0; E < 128 * 128; E++) {
                    D[0] = Math.random();
                    D[1] = Math.random();
                    D[2] = Math.random();
                    fqv.normalize(D);
                    H[E * 4 + 0] = D[0] * 255;
                    H[E * 4 + 1] = D[1] * 255;
                    H[E * 4 + 2] = D[2] * 255;
                    H[E * 4 + 3] = 255
                }
                r = erp(o, 128, 128, H, false);
                r._ccj(o.gl._cgo)
            }
        };
        p._efo = function() {
            if (!p._xv()) {
                throw new Error("2782 ")
            }
            q(o.viewportWidth, o.viewportHeight);
            o._dld(y);
            o._dkr(0, 0, x, u);
            o.gl.clearColor(0, 0, 0, 0);
            o.gl.clear(o.gl.COLOR_BUFFER_BIT);
            o.gl.depthFunc(o.gl.LEQUAL);
            h = true
        };
        p._efq = function(z) {
            if (!p._xv()) {
                throw new Error("2783 ")
            }
            o.gl.depthFunc(o.gl.LESS);
            o._dld(null);
            h = false
        };
        p._efk = function() {};
        p._efm = function() {
            p._cjr();
            if (y !== null) {
                y._qcs();
                y = null;
                n._qcs();
                n = null;
                e._qcs();
                e = null;
                d._qcs();
                d = null
            }
        };
        p._cjr = function() {
            h = false
        };
        p._cjs = function() {
            h = false
        };
        p._cju = function(A, B, z, C) {
            o._dkf();
            k(y._fpv(), n);
            v(n._fpv(), e, 1 / n._fpv()._ke(), 0);
            v(e._fpv(), d, 0, 1 / e._fpv()._kg());
            i(A, d._fpv(), B);
            o._dkd()
        };
        var k = function(B, C) {
            var z = esi._ejp(fpu._nv.id, undefined);
            esi._ejq(z, true);
            var E = o.bindTexture(fce._mbt, B._gbs(), o.gl.TEXTURE_2D);
            o.gl.uniform1i(z._nke(elp._dzw.id), E);
            var A = o.bindTexture(fce._mbu, r._gbs(), o.gl.TEXTURE_2D);
            o.gl.uniform1i(z._nke(elp._dzy.id), A);
            var D = 1 / Math.max(B._ke(), B._kg());
            o.gl.uniform1f(z._nke(elp._dza.id), D);
            t(z, C, b);
            o._dle()
        };
        var v = function(A, B, E, C) {
            var z = esi._ejp(fpu._md.id, undefined);
            esi._ejq(z, true);
            var D = o.bindTexture(fce._mbt, A._gbs(), o.gl.TEXTURE_2D);
            o.gl.uniform1i(z._nke(elp._dzw.id), D);
            o.gl.uniform2f(z._nke(elp._eab.id), E, C);
            t(z, B, b);
            o._dle()
        };
        var i = function(C, A, D) {
            var z = esi._ejp(fpu._nu.id, c);
            esi._ejq(z, true);
            var E = o.bindTexture(fce._mbt, C._gbs(), o.gl.TEXTURE_2D);
            o.gl.uniform1i(z._nke(elp._dzw.id), E);
            var B = o.bindTexture(fce._mbu, A._gbs(), o.gl.TEXTURE_2D);
            o.gl.uniform1i(z._nke(elp._dzy.id), B);
            t(z, D, b);
            o._dle()
        };
        var t = function(F, E, J, I, A) {
            o._dld(E);
            var L = o._bff();
            var D = o._bfh();
            o._dkr(0, 0, L, D);
            if (A !== undefined) {
                if (s === undefined) {
                    s = eon(o)
                }
                var H = x;
                var z = u;
                A[1] = D - (A[1] + A[3]);
                var C;
                if (I !== undefined && (I[0] !== 0 || I[1] !== 0 || I[2] !== H || I[3] !== z)) {
                    I[1] = z - (I[1] + I[3]);
                    var M = I[0] / H;
                    var G = I[1] / z;
                    var K = (I[0] + I[2]) / H;
                    var B = (I[1] + I[3]) / z;
                    s.set(A[0], A[1], A[2], A[3], M, G, K, B)
                } else {
                    s.set(A[0], A[1], A[2], A[3])
                }
                s.bind();
                J = evs._qzg(0, L, 0, D, 0.1, 5000, j)
            } else {
                l.bind()
            }
            o._dkc(false);
            o.gl.uniformMatrix4fv(F._nke(elp._dxc.id), false, J);
            o.gl.vertexAttribPointer(F._nkh(elp._edy.id), 2, o.gl.FLOAT, false, 16, 0);
            o.gl.vertexAttribPointer(F._nkh(elp._eek.id), 2, o.gl.FLOAT, false, 16, 8);
            o.gl.drawElements(o.gl.TRIANGLES, 6, o.gl.UNSIGNED_SHORT, 0)
        };
        g = undefined;
        return p
    };
    return a
}();
var evj = function() {
    var a = function(d) {
        var g = null;
        var h;
        var j;
        var e;
        var b;
        var i = false;
        var c = null;
        if (d._bi !== undefined) {
            g = enl({
                _yl: eqs._mgm
            });
            h = d._bi
        } else {
            throw new Error("2792 ")
        }
        g._efk = function() {
            i = false
        };
        g._efm = function() {
            i = false
        };
        g._cjr = function() {
            c = null;
            i = false
        };
        g._cjs = function() {
            c = null;
            i = false
        };
        g._qhs = function(k) {
            if (j !== k) {
                j = k;
                i = false
            }
        };
        g._qhu = function(l, k) {
            if (e !== l || b !== k) {
                e = l;
                b = k;
                i = false
            }
        };
        g.bind = function(k) {
            if (g._xv()) {
                if (k !== c || !i) {
                    h.gl.uniform3f(k._nke(elp._eaz.id), ((j >> 16) & 255) / 255, ((j >> 8) & 255) / 255, (j & 255) / 255);
                    h.gl.uniform1f(k._nke(elp._eba.id), e);
                    h.gl.uniform1f(k._nke(elp._ebb.id), b);
                    c = k;
                    i = true
                }
            } else {
                if (k !== c || !i) {
                    h.gl.uniform1f(k._nke(elp._eba.id), -999999999);
                    h.gl.uniform1f(k._nke(elp._ebb.id), -999999999);
                    c = k;
                    i = true
                }
            }
        };
        d = undefined;
        return g
    };
    return a
}();
var frf = function() {
    var a = function(b) {
        this._tu = 0;
        this._era = 0;
        this._tw = null;
        this._tv = null;
        this.data = {};
        this._erb = fsu();
        this._erc = 0;
        if (b._tu !== undefined) {
            this._tu = b._tu;
            this._era = this._tu;
            if (b._tw !== undefined && b._tw !== null) {
                this._tw = b._tw
            }
            if (b._tv !== undefined && b._tv !== null) {
                this._tv = b._tv
            }
        } else {
            throw new Error("2451 ")
        }
    };
    a.prototype.find = function(c) {
        var b = this.data[c];
        if (b !== undefined && b !== null) {
            this._erb.unlink(b);
            this._erb._cnx(b);
            b._erd = this._erc
        }
        if (b === undefined) {
            return null
        } else {
            return b
        }
    };
    a.prototype.remove = function(b) {
        this._erf(this.find(b))
    };
    a.prototype._erf = function(b) {
        if (b !== null) {
            this.data[b._erg] = null;
            this._erb.unlink(b);
            if (this._tw !== null) {
                this._tw(b)
            }
            this._era += b._eri
        }
    };
    a.prototype.put = function(b, d, e) {
        if (d > this._tu) {
            throw new Error("2452 " + d + "2452 ")
        }
        this.remove(e);
        this._era -= d;
        while (this._era < 0) {
            var c = this._erb._bup();
            this._erf(c)
        }
        b._erg = e;
        b._eri = d;
        b._erd = this._erc;
        this.data[e] = b;
        this._erb._cnx(b);
        if (this._tv !== null) {
            this._tv(b)
        }
    };
    a.prototype._erk = function(b) {
        this._erc++;
        for (var c = this._erb._bup(); c !== null; c = this._erb._bur()) {
            if (this._erc - c._erd > b) {
                this._erf(c)
            } else {
                break
            }
        }
    };
    a.prototype._yh = function() {
        for (var b = this._erb._bup(); b !== null; b = this._erb._bur()) {
            this._erf(b)
        }
        this._erb._yh();
        this._era = this._tu
    };
    a.prototype._erm = function() {
        return this._era
    };
    a.prototype._ern = function() {
        return this._tu
    };
    a.prototype._dpg = function() {
        return this._erb
    };
    return function(b) {
        return new a(b)
    }
}();
var fuo = function() {
    var a = function(i) {
        var q = null;
        var p;
        var o;
        var n = 0;
        if (i._bi !== undefined && i._bk != undefined) {
            q = enl({
                _yl: eqs._mgk
            });
            p = i._bi;
            o = i._bk
        } else {
            throw new Error("2523 ")
        }
        var k = frf({
            _tu: 12,
            _tv: function(y) {
                y._qcr()
            },
            _tw: function(y) {
                y._qcs()
            }
        });
        var e = [
            [-1, 0],
            [-1, 0],
            [-1, 0]
        ];
        var t = {
            _gej: e,
            _gel: -1,
            _gem: e,
            _gen: -1,
            _geo: e
        };
        var b = true,
            h = true;
        var x = -1,
            v = -1;
        var c = null;
        var l = null;
        var m = undefined;
        var u = undefined;
        if (false) {}
        q._goa = function(z, y, A) {
            r(t, [
                [z[0], y[0]],
                [z[1], y[1]],
                [z[2], y[2]]
            ], A)
        };
        var r = function(y, z, A) {
            if (A < 1) {
                y._gej = z
            } else {
                if (j(y._gej, z)) {
                    A = 0
                } else {
                    y._gem = y._gej.slice(0);
                    y._gel = n;
                    y._geo = z;
                    y._gen = n + A;
                    b = j(y._gem, e);
                    h = j(y._geo, e)
                }
            }
        };
        var j = function(z, y) {
            return !(z[0][0] !== y[0][0] || z[0][1] !== y[0][1] || z[1][0] !== y[1][0] || z[1][1] !== y[1][1] || z[2][0] !== y[2][0] || z[2][1] !== y[2][1])
        };
        q._bfc = function(y) {
            n = y;
            d(t, n);
            k._erk(100)
        };
        var d = function(I, y) {
            if (I._gen >= y) {
                var E = (y - I._gel) / (I._gen - I._gel);
                if (h) {
                    E = 1 - E;
                    I._gej = I._gem;
                    I._gej[0][1] *= E;
                    I._gej[1][1] *= E;
                    I._gej[2][1] *= E
                } else {
                    if (b) {
                        I._gej = I._geo;
                        I._gej[0][1] *= E;
                        I._gej[1][1] *= E;
                        I._gej[2][1] *= E
                    } else {
                        var J = 1 - E;
                        var z = new Array(0);
                        for (var F = 0; F < 3; F++) {
                            if (I._gem[F][0] > -1) {
                                z[z.length] = [I._gem[F][0], I._gem[F][1] * J]
                            }
                        }
                        for (var F = 0; F < 3; F++) {
                            if (I._geo[F * 2] > -1) {
                                var D = I._geo[F][1] * E;
                                for (var B = 0; B < 3; B++) {
                                    if (z[B][0] === I._geo[F][0]) {
                                        z[B][1] += D;
                                        break
                                    } else {
                                        if (B === 2) {
                                            z[z.length] = [I._geo[F][0], D]
                                        }
                                    }
                                }
                            }
                        }
                        var H = 0;
                        if (z.length < 4) {
                            for (var F = 0; F < z.length; F++) {
                                I._gej[F] = z[F];
                                H++
                            }
                            for (var F = H; F < 3; F++) {
                                I._gej[F][0] = -1;
                                I._gej[F][1] = 0
                            }
                        } else {
                            var C = 0;
                            for (var F = 0; F < z.length; F++) {
                                C += z[F]
                            }
                            z.sort(function(L, K) {
                                return L[1] - K[1]
                            });
                            var A = 0;
                            for (var F = 0; F < 3; F++) {
                                A += z[F]
                            }
                            var G = _sjh / A;
                            for (var F = 0; F < 3; F++) {
                                I._gej[F][0] = z[F][0];
                                I._gej[F][1] = z[F][0] * G
                            }
                        }
                    }
                }
                return true
            } else {
                return false
            }
        };
        q._efk = function() {};
        q._efm = function() {
            if (m !== undefined) {
                m._ljv();
                m = undefined
            }
            if (u !== undefined) {
                u._ljv();
                u = undefined
            }
        };
        q._cjr = function() {};
        q._cjs = function() {};
        q._goe = function() {
            var y = t._gej;
            if (false) {}
            if (y[0][0] !== -1 || y[1][0] !== -1 || y[2][0] !== -1) {
                return false
            }
            if (y[0][1] !== 0 || y[1][1] !== 0 || y[2][1] !== 0) {
                return false
            }
            return true
        };
        var s = function(B, A) {
            var z = B;
            var y = A;
            if (x !== z || v !== y) {
                x = z;
                v = y;
                c = evs._qzg(0, x, 0, v, 0.1, 5000, c);
                if (m === undefined) {
                    m = eon(p)
                }
                m.set(0, 0, x, v)
            } else {
                if (m === undefined) {
                    m = eon(p);
                    m.set(0, 0, x, v)
                }
            }
        };
        var g = function(y) {
            if (y === -1) {
                return null
            }
            var z = k.find(y);
            if (z !== null) {
                return z
            }
            var C = o.getFile(fqn._sbo, y, 0, feg._cix, flx._qn);
            if (C === undefined) {
                return null
            }
            if (C === null) {
                return null
            }
            var B = fao._nsx(C);
            var A = erp(p, B._ke(), B._kg(), B._wq(), false, true, false);
            B = null;
            C = null;
            if (A === null) {
                return null
            }
            A._ccj();
            k.put(A, 1, y);
            return A
        };
        q._cju = function(B, N, F, O) {
            var L = B._ke();
            var C = B._kg();
            s(L, C);
            p._dkf();
            var z = t._gej;
            if (false) {}
            var Q = null;
            if (z[2][0] > -1) {
                Q = esi._ejp(fpu._nk.id, undefined)
            } else {
                if (z[1][0] > -1) {
                    Q = esi._ejp(fpu._ni.id, undefined)
                } else {
                    Q = esi._ejp(fpu._nh.id, undefined)
                }
            }
            esi._ejq(Q, true);
            var J = p.bindTexture(fce._mbt, B._gbs(), p.gl.TEXTURE_2D);
            p.gl.uniform1i(Q._nke(elp._dzw.id), J);
            if (z[0][0] > -1) {
                var M = g(z[0][0]);
                if (M !== null) {
                    var J = p.bindTexture(fce._mbv, M._gbs(), p.gl.TEXTURE_2D);
                    p.gl.uniform1i(Q._nke(elp._eaj.id), J)
                }
            }
            if (z[1][0] > -1) {
                var M = g(z[1][0]);
                if (M !== null) {
                    var J = p.bindTexture(fce._mbw, M._gbs(), p.gl.TEXTURE_2D);
                    p.gl.uniform1i(Q._nke(elp._eal.id), J)
                }
            }
            if (z[2][0] > -1) {
                var M = g(z[2][0]);
                if (M !== null) {
                    var J = p.bindTexture(fce._mbx, M._gbs(), p.gl.TEXTURE_2D);
                    p.gl.uniform1i(Q._nke(elp._eam.id), J)
                }
            }
            var y = 1 - (z[0][1] + z[1][1] + z[2][1]);
            p.gl.uniform4f(Q._nke(elp._eah.id), y, z[0][1], z[1][1], z[2][1]);
            p._dld(N);
            var I = p._bff();
            var K = p._bfh();
            p._dkr(0, 0, I, K);
            var P = c;
            if (O !== undefined) {
                if (u === undefined) {
                    u = eon(p)
                }
                O[1] = K - (O[1] + O[3]);
                var D;
                if (F !== undefined && (F[0] !== 0 || F[1] !== 0 || F[2] !== L || F[3] !== C)) {
                    F[1] = C - (F[1] + F[3]);
                    var G = F[0] / L;
                    var H = F[1] / C;
                    var E = (F[0] + F[2]) / L;
                    var A = (F[1] + F[3]) / C;
                    u.set(O[0], O[1], O[2], O[3], G, H, E, A)
                } else {
                    u.set(O[0], O[1], O[2], O[3])
                }
                u.bind();
                P = evs._qzg(0, I, 0, K, 0.1, 5000, l)
            } else {
                m.bind()
            }
            p._dkc(false);
            p.gl.uniformMatrix4fv(Q._nke(elp._dxc.id), false, P);
            p.gl.vertexAttribPointer(Q._nkh(elp._edy.id), 2, p.gl.FLOAT, false, 16, 0);
            p.gl.vertexAttribPointer(Q._nkh(elp._eek.id), 2, p.gl.FLOAT, false, 16, 8);
            p.gl.drawElements(p.gl.TRIANGLES, 6, p.gl.UNSIGNED_SHORT, 0);
            p._dkd()
        };
        i = undefined;
        return q
    };
    return a
}();
var fva = function() {
    var a = function(d) {
        var g = null;
        var i;
        var e = new Float32Array(fty._nwb * 4);
        var c = new Int32Array(fty._nwb);
        var h = undefined;
        if (d._bi !== undefined) {
            g = enl({
                _yl: eqs._mgf
            });
            i = d._bi
        } else {
            throw new Error("2758 ")
        }
        var b = undefined;
        g._efm = function() {
            g._cjr()
        };
        g._cjr = function() {
            j()
        };
        g._cjs = function() {
            j()
        };
        g._peh = function() {
            return b
        };
        g._pei = function() {
            if (b === undefined) {
                return 0
            } else {
                return b._dph()
            }
        };
        g._pek = function(k) {
            if (b === k) {
                return
            }
            b = k;
            if (b !== undefined && b._dph() > fty._nwb) {
                throw new Error("2759 " + b._dph() + "2759 " + fty._nwb)
            }
            h = undefined
        };
        g._pem = function() {
            b = undefined
        };
        var j = g._pem;
        g.bind = function(m) {
            if (h === m) {
                return
            }
            if (b !== undefined) {
                var o = b._dpg();
                var p = b._dph();
                for (var l = 0; l < p; l++) {
                    var n = o[l];
                    var k = n.getWorldPosition();
                    e[(4 * l) + 0] = k[0];
                    e[(4 * l) + 1] = k[1];
                    e[(4 * l) + 2] = k[2];
                    e[(4 * l) + 3] = 1 / n._lhn();
                    c[l] = n._gvl()
                }
                m._nky(elp._dys, e);
                m._nky(elp._dyt, c);
                m._nky(elp._dyr, p)
            } else {
                m._nky(elp._dyr, 0)
            }
            h = m
        };
        d = undefined;
        return g
    };
    return a
}();
var ffy = function() {
    var a = function(q) {
        var i = null;
        var r;
        var b = 0;
        if (q._bi !== undefined) {
            i = enl({
                _yl: eqs._od
            });
            r = q._bi
        } else {
            throw new Error("2430 ")
        }
        var k = -1,
            j = -1;
        i._ehp = function() {
            return k
        };
        i._ehr = function() {
            return j
        };
        var n = null;
        i._eht = function() {
            if (n === null) {
                return null
            }
            return n._fpv()
        };
        i._ehv = function() {
            return n
        };
        var c = null;
        var m = null;
        var h = undefined;
        var l = undefined;
        var p = false;
        i._ehw = function() {
            return p
        };
        var d = fdd([]);
        i._ehy = function() {
            return d._xv(fct._dqd)
        };
        i._ehz = function(s) {
            if (s) {
                d.enable(fct._dqd)
            } else {
                d.disable(fct._dqd)
            }
        };
        i._bfc = function(s) {
            b = s
        };
        var g = function(v, u, x) {
            var t = Math.floor(v);
            var s = Math.floor(u);
            var y = n === null;
            if (k !== t || j !== s) {
                k = t;
                j = s;
                y = true
            }
            if (y) {
                i._efm();
                n = r._dkz(k, j, false, false, false);
                n._qcr();
                c = evs._qzg(0, k, 0, j, 0.1, 5000, c);
                if (h === undefined) {
                    h = eon(r)
                }
                h.set(0, 0, k, j)
            }
        };
        i._efo = function(s) {
            if (!i._xv()) {
                throw new Error("2431 ")
            }
            g(r.viewportWidth, r.viewportHeight);
            r._dld(n);
            r._dkr(0, 0, k, j);
            r.gl.clearColor(0, 0, 0, 0);
            r.gl.clear(r.gl.COLOR_BUFFER_BIT);
            r.gl.depthFunc(r.gl.LEQUAL);
            p = true
        };
        i._efq = function(s) {
            if (!i._xv()) {
                throw new Error("2432 ")
            }
            r.gl.depthFunc(r.gl.LESS);
            r._dld(null);
            p = false
        };
        i._efk = function() {};
        i._efm = function() {
            i._cjr();
            if (n !== null) {
                n._qcs();
                n = null
            }
        };
        i._cjr = function() {
            p = false
        };
        i._cjs = function() {
            p = false
        };
        i._cju = function(t, u, s, v) {
            r._dkf();
            e(t, this._eht(), u);
            r._dkd()
        };
        var e = function(u, y, v) {
            var s = esi._ejp(fpu._od.id, d);
            esi._ejq(s, true);
            var x = r.bindTexture(fce._mbt, u._gbs(), r.gl.TEXTURE_2D);
            r.gl.uniform1i(s._nke(elp._dzw.id), x);
            var t = r.bindTexture(fce._mbu, y._gbs(), r.gl.TEXTURE_2D);
            r.gl.uniform1i(s._nke(elp._dzy.id), t);
            r.gl.uniform1f(s._nke(elp._ebx.id), b);
            o(s, v, c);
            r._dle()
        };
        var o = function(z, y, D, C, t) {
            r._dld(y);
            var F = r._bff();
            var x = r._bfh();
            r._dkr(0, 0, F, x);
            if (t !== undefined) {
                if (l === undefined) {
                    l = eon(r)
                }
                var B = k;
                var s = j;
                t[1] = x - (t[1] + t[3]);
                var v;
                if (C !== undefined && (C[0] !== 0 || C[1] !== 0 || C[2] !== B || C[3] !== s)) {
                    C[1] = s - (C[1] + C[3]);
                    var G = C[0] / B;
                    var A = C[1] / s;
                    var E = (C[0] + C[2]) / B;
                    var u = (C[1] + C[3]) / s;
                    l.set(t[0], t[1], t[2], t[3], G, A, E, u)
                } else {
                    l.set(t[0], t[1], t[2], t[3])
                }
                l.bind();
                D = evs._qzg(0, F, 0, x, 0.1, 5000, m)
            } else {
                h.bind()
            }
            r._dkc(false);
            r.gl.uniformMatrix4fv(z._nke(elp._dxc.id), false, D);
            r.gl.vertexAttribPointer(z._nkh(elp._edy.id), 2, r.gl.FLOAT, false, 16, 0);
            r.gl.vertexAttribPointer(z._nkh(elp._eek.id), 2, r.gl.FLOAT, false, 16, 8);
            r.gl.drawElements(r.gl.TRIANGLES, 6, r.gl.UNSIGNED_SHORT, 0)
        };
        q = undefined;
        return i
    };
    return a
}();
var fea = function() {
    var a = function(k) {
        var s = null;
        var q;
        var p = 0;
        if (k._bi !== undefined) {
            s = enl({
                _yl: eqs._mgj
            });
            q = k._bi
        } else {
            throw new Error("2506 ")
        }
        var b = [1, 1, 1];
        var z = {
            _gej: b,
            _gel: -1,
            _gem: b,
            _gen: -1,
            _geo: b
        };
        var t = [
            [0.5, 0.25, 0.125, 0.125],
            [0.5, 0, 0.25, 0.25],
            [1, 0.5, 0.5, 0.5],
            [1, 1, 1, 1],
            [1, 1, 1, 1]
        ];
        var E = -1,
            D = -1;
        var l = emp._qo;
        var r = false;
        var j = null;
        var m = null;
        var h = null;
        var d = null;
        var B = false;
        s._gep = function(F) {
            B = true;
            l = F
        };
        s._ger = function(F) {
            return r
        };
        s._ges = function(F) {
            B = true;
            r = F
        };
        s._geu = function(F) {
            return t[4]
        };
        s._gew = function(F) {
            B = true;
            t[4] = F
        };
        var e = null;
        var n = null;
        var o = undefined;
        var A = undefined;
        s._gey = function() {
            if (j !== null) {
                return j._fpv()
            } else {
                return null
            }
        };
        s._gez = function() {
            if (m !== null) {
                return m._fpv()
            } else {
                return null
            }
        };
        s._gfa = function() {
            if (h !== null) {
                return h._fpv()
            } else {
                return null
            }
        };
        s._gfc = function() {
            if (d !== null) {
                return d._fpv()
            } else {
                return null
            }
        };
        s._gfe = function(F, G) {
            v(z, F.slice(0), G)
        };
        var v = function(F, G, H) {
            if (H < 1) {
                F._gej = G;
                F._gen = -1;
                F._gel = -1;
                F._gem = G;
                F._geo = G
            } else {
                F._gem = F._gej.slice(0);
                F._gel = p;
                F._geo = G;
                F._gen = p + H
            }
        };
        s._bfc = function(F) {
            p = F;
            i(z, p)
        };
        var i = function(G, I) {
            if (G._gen >= I) {
                var H = (I - G._gel) / (G._gen - G._gel);
                for (var F = 0; F < G._gem.length; F++) {
                    G._gej[F] = G._gem[F] + (H * (G._geo[F] - G._gem[F]))
                }
                return true
            } else {
                return false
            }
        };
        s._efk = function() {};
        s._efm = function() {
            E = D = -1;
            if (j !== null) {
                j._qcs();
                j = null
            }
            if (m !== null) {
                m._qcs();
                m = null
            }
            if (h !== null) {
                h._qcs();
                h = null
            }
            if (d !== null) {
                d._qcs();
                d = null
            }
            if (o !== undefined) {
                o._ljv();
                o = undefined
            }
            if (A !== undefined) {
                A._ljv();
                A = undefined
            }
        };
        s._cjr = function() {};
        s._cjs = function() {};
        var y = function(K, H, L) {
            var G = K;
            var F = H;
            var M = L;
            var J = E !== G || D !== F;
            if (J || B) {
                s._efm();
                E = G;
                D = F;
                B = false;
                var I = undefined;
                if (r) {
                    I = t[4]
                } else {
                    if (l === emp._qk) {
                        I = t[0]
                    } else {
                        if (l === emp._ql) {
                            I = t[1]
                        } else {
                            if (l === emp._qn) {
                                I = t[2]
                            } else {
                                if (l === emp._qo) {
                                    I = t[3]
                                }
                            }
                        }
                    }
                }
                j = q._dkz(E * I[0], D * I[0], false, false, true);
                j._qcr();
                if (l === emp._qk || l === emp._qn) {
                    m = q._dkz(E * I[1], D * I[1], false, false, false);
                    m._qcr()
                }
                h = q._dkz(E * I[2], D * I[2], false, false, false);
                h._qcr();
                d = q._dkz(E * I[3], D * I[3], false, false, false);
                d._qcr();
                e = evs._qzg(0, E, 0, D, 0.1, 5000, e);
                if (o === undefined) {
                    o = eon(q)
                }
                o.set(0, 0, E, D)
            }
        };
        s._cju = function(H, I, G, L) {
            var F = H._ke();
            var J = H._kg();
            y(F, J);
            q._dkf();
            c(H, j);
            var K;
            if (l === emp._qk || l === emp._qn) {
                g(j._fpv(), m, 1 / j._fpv()._ke(), 1 / j._fpv()._kg());
                K = m
            } else {
                K = j
            }
            u(K._fpv(), h, 1 / K._fpv()._ke(), 0);
            u(h._fpv(), d, 0, 1 / h._fpv()._ke());
            x(d._fpv(), H, I, G, L);
            q._dkd()
        };
        var c = function(G, H) {
            var F = esi._ejp(fpu._mg.id, undefined);
            esi._ejq(F, true);
            var I = q.bindTexture(fce._mbt, G._gbs(), q.gl.TEXTURE_2D);
            q.gl.uniform1i(F._nke(elp._dzw.id), I);
            q.gl.uniform1f(F._nke(elp._eaa.id), z._gej[0]);
            C(F, H, e);
            q._dle()
        };
        var g = function(G, H, K, I) {
            var F = esi._ejp(fpu._mj.id, undefined);
            esi._ejq(F, true);
            var J = q.bindTexture(fce._mbt, G._gbs(), q.gl.TEXTURE_2D);
            q.gl.uniform1i(F._nke(elp._dzw.id), J);
            q.gl.uniform2f(F._nke(elp._eab.id), K, I);
            C(F, H, e);
            q._dle()
        };
        var u = function(G, H, K, I) {
            var F;
            if (l === emp._qn || l === emp._qo) {
                F = esi._ejp(fpu._mf.id, undefined)
            } else {
                F = esi._ejp(fpu._md.id, undefined)
            }
            esi._ejq(F, true);
            var J = q.bindTexture(fce._mbt, G._gbs(), q.gl.TEXTURE_2D);
            q.gl.uniform1i(F._nke(elp._dzw.id), J);
            q.gl.uniform2f(F._nke(elp._eab.id), K, I);
            C(F, H, e);
            q._dle()
        };
        var x = function(J, H, I, G, L) {
            var F = esi._ejp(fpu._mh.id, undefined);
            esi._ejq(F, true);
            var K = q.bindTexture(fce._mbt, J._gbs(), q.gl.TEXTURE_2D);
            q.gl.uniform1i(F._nke(elp._dzw.id), K);
            K = q.bindTexture(fce._mbu, H._gbs(), q.gl.TEXTURE_2D);
            q.gl.uniform1i(F._nke(elp._dzy.id), K);
            q.gl.uniform1f(F._nke(elp._eac.id), z._gej[1]);
            q.gl.uniform1f(F._nke(elp._eae.id), z._gej[2]);
            C(F, I, e, G, L);
            q._dle()
        };
        var C = function(L, K, P, O, G) {
            q._dld(K);
            var R = q._bff();
            var J = q._bfh();
            q._dkr(0, 0, R, J);
            if (G !== undefined) {
                if (A === undefined) {
                    A = eon(q)
                }
                var N = E;
                var F = D;
                G[1] = J - (G[1] + G[3]);
                var I;
                if (O !== undefined && (O[0] !== 0 || O[1] !== 0 || O[2] !== N || O[3] !== F)) {
                    O[1] = F - (O[1] + O[3]);
                    var S = O[0] / N;
                    var M = O[1] / F;
                    var Q = (O[0] + O[2]) / N;
                    var H = (O[1] + O[3]) / F;
                    A.set(G[0], G[1], G[2], G[3], S, M, Q, H)
                } else {
                    A.set(G[0], G[1], G[2], G[3])
                }
                A.bind();
                P = evs._qzg(0, R, 0, J, 0.1, 5000, n)
            } else {
                o.bind()
            }
            q._dkc(false);
            q.gl.uniformMatrix4fv(L._nke(elp._dxc.id), false, P);
            q.gl.vertexAttribPointer(L._nkh(elp._edy.id), 2, q.gl.FLOAT, false, 16, 0);
            q.gl.vertexAttribPointer(L._nkh(elp._eek.id), 2, q.gl.FLOAT, false, 16, 8);
            q.gl.drawElements(q.gl.TRIANGLES, 6, q.gl.UNSIGNED_SHORT, 0)
        };
        k = undefined;
        return s
    };
    return a
}();
var emt = function() {
    var a = function(g) {
        var n = {};
        var m;
        var q = false;
        var h = null;
        var y = false;
        var l = 0;
        var c = true;
        var u = true;
        var d = new Float32Array([0, 0, 0, 1]);
        var b = new Float32Array([0.7, 0.7, 0.7]);
        var o = new Float32Array([0.9, 0.9, 0.9]);
        var i = new Float32Array([0, 0, 0]);
        var j = new Float32Array([0.3, 1, 0.3]);
        var x = {
            _gej: d,
            _gel: -1,
            _gem: d,
            _gen: -1,
            _geo: d
        };
        var r = {
            _gej: b,
            _gel: -1,
            _gem: b,
            _gen: -1,
            _geo: b
        };
        var v = {
            _gej: o,
            _gel: -1,
            _gem: o,
            _gen: -1,
            _geo: o
        };
        var t = {
            _gej: i,
            _gel: -1,
            _gem: i,
            _gen: -1,
            _geo: i
        };
        var k = {
            _gej: j,
            _gel: -1,
            _gem: j,
            _gen: -1,
            _geo: j
        };
        var p = new Array(0);
        if (g._bi !== undefined && g._bk !== undefined) {
            m = g._bi;
            p[eqs._my] = exk({
                _bi: m
            });
            p[eqs._mbr] = few({
                _bi: m
            });
            p[eqs._mgh] = ftv({
                _bi: m
            });
            p[eqs._mx] = eps({
                _bi: m
            });
            p[eqs._mgf] = fva({
                _bi: m
            });
            p[eqs._nv] = fub({
                _bi: m
            });
            p[eqs._mgg] = eov({
                _bi: m,
                _gbu: n
            });
            p[eqs._mgj] = fea({
                _bi: m
            });
            p[eqs._ob] = eyj({
                _bi: m
            });
            p[eqs._od] = ffy({
                _bi: m
            });
            p[eqs._nq] = ftf({
                _bi: m
            });
            p[eqs._mgk] = fuo({
                _bi: m,
                _bk: g._bk
            });
            p[eqs._ml] = fnq({
                _bi: m
            });
            p[eqs._mgm] = evj({
                _bi: m
            });
            p[eqs._mgn] = eug({
                _bi: m
            });
            p[eqs._dqj] = fgr({
                _bi: m
            });
            p[eqs._drh] = fqk({
                _bi: m
            })
        } else {
            throw new Error("2894 ")
        }
        n._rxj = function() {
            q = true;
            m.gl.clearColor(x._gej[0], x._gej[1], x._gej[2], x._gej[3]);
            h = null;
            y = false;
            for (var z = 0; z < p.length; z++) {
                p[z]._cjs()
            }
        };
        n._rxl = function() {
            q = false
        };
        n._yh = function() {
            _rxn(d, 0);
            _rxq(b, 0);
            _rxs(o, 0);
            _rxt(i, 0);
            _rxu(j, 0);
            c = true;
            for (var z = 0; z < p.length; z++) {
                p[z]._yh()
            }
        };
        n._rxn = function(z, A) {
            s(x, new Float32Array(z), A);
            if (A === 0) {
                m.gl.clearColor(x._gej[0], x._gej[1], x._gej[2], x._gej[3])
            }
        };
        n._rxp = function() {
            m.gl.clearColor(x._gej[0], x._gej[1], x._gej[2], x._gej[3])
        };
        n._rxq = function(A, z) {
            s(r, new Float32Array(A), z)
        };
        n._dvo = function() {
            return r._gej
        };
        n._rxs = function(z, A) {
            s(v, new Float32Array(z), A)
        };
        n._dvl = function() {
            return v._gej
        };
        n._rxt = function(A, z) {
            s(t, new Float32Array(A), z)
        };
        n._dvm = function() {
            return t._gej
        };
        n._rxu = function(z, A) {
            fqv.normalize(z);
            s(k, new Float32Array(z), A)
        };
        n._rxw = function() {
            return k._gej
        };
        var s = function(z, A, B) {
            if (B < 1) {
                z._gej = A;
                y = false;
                z._gen = 0
            } else {
                z._gem = new Float32Array(z._gej);
                z._gel = l;
                z._geo = A;
                z._gen = l + B
            }
        };
        n._rxy = function(z) {
            if (z._nke(elp._dxm.id) !== undefined) {
                z._nky(elp._dxm, r._gej)
            }
            if (z._nke(elp._dxp.id) !== undefined) {
                z._nky(elp._dxp, v._gej)
            }
            if (z._nke(elp._dxr.id) !== undefined) {
                z._nky(elp._dxr, t._gej)
            }
            z._nky(elp._dxn, k._gej)
        };
        n._rxz = function() {
            return c
        };
        n._ryb = function() {
            c = true
        };
        n._ryc = function() {
            c = false
        };
        n._nig = function() {
            return u
        };
        n._nie = function() {
            u = true
        };
        n._nic = function() {
            u = false
        };
        n._rye = function(z) {
            p[z].enable()
        };
        n._ryg = function(z) {
            p[z].disable()
        };
        n._ryh = function(z) {
            return p[z]._xv()
        };
        n._yd = function(z, A) {
            p[z]._yd(A)
        };
        n._ye = function(z, A) {
            p[z]._ye(A)
        };
        n._yg = function(z) {
            return p[z]._yg()
        };
        n._qow = function(z) {
            return p[z]
        };
        n._ryi = function(A, z) {
            p[A].bind(z)
        };
        n._ryk = function() {
            var z = new Array(0);
            if (p[eqs._my]._xv() && !p[eqs._my]._xw()) {
                z.push(p[eqs._my])
            }
            if (p[eqs._dqj]._xv() && !p[eqs._dqj]._xw()) {
                z.push(p[eqs._dqj])
            }
            if (p[eqs._nv]._xv() && !p[eqs._nv]._xw()) {
                z.push(p[eqs._nv])
            }
            if (p[eqs._mgj]._xv() && !p[eqs._mgj]._xw()) {
                z.push(p[eqs._mgj])
            }
            if (p[eqs._ob]._xv() && !p[eqs._ob]._xw()) {
                z.push(p[eqs._ob])
            }
            if (p[eqs._od]._xv() && !p[eqs._od]._xw()) {
                z.push(p[eqs._od])
            }
            if (p[eqs._nq]._xv() && !p[eqs._nq]._xw()) {
                z.push(p[eqs._nq])
            }
            if (p[eqs._mgk]._xv() && !p[eqs._mgk]._xw()) {
                z.push(p[eqs._mgk])
            }
            if (p[eqs._mx]._xv() && !p[eqs._mx]._xw()) {
                z.push(p[eqs._mx])
            }
            return z
        };
        n._bfc = function() {
            l++;
            e(x);
            if (e(r)) {
                y = false
            }
            if (e(v)) {
                y = false
            }
            if (e(t)) {
                y = false
            }
            if (e(k)) {
                y = false
            }
            p[eqs._mgh]._bfc(l);
            p[eqs._nq]._bfc(l);
            p[eqs._mgk]._bfc(l);
            p[eqs._nv]._bfc(l);
            p[eqs._mgj]._bfc(l);
            p[eqs._ob]._bfc(l);
            p[eqs._od]._bfc(l);
            p[eqs._ml]._bfc(l)
        };
        var e = function(A) {
            if (A._gen >= l) {
                var B = (l - A._gel) / (A._gen - A._gel);
                for (var z = 0; z < A._gem.length; z++) {
                    A._gej[z] = A._gem[z] + (B * (A._geo[z] - A._gem[z]))
                }
                return true
            } else {
                return false
            }
        };
        g = undefined;
        return n
    };
    return a
}();
var fij = function() {
    var d = {};
    var e;
    var c;
    var a = null;
    d._ba = function() {
        return a
    };
    var b = null;
    d._bc = function() {
        return b
    };
    d._be = function(g) {
        if (g !== b) {
            b._rxl();
            b = g;
            b._rxj()
        }
    };
    d._bg = function(g) {
        e = g._bi;
        c = g._bk;
        a = b = emt({
            _bi: e,
            _bk: c
        });
        b._rxj()
    };
    return d
}();
var fpq = function() {
    var a = {
        _evf: 0,
        _qn: 1,
        _ql: 2,
        _qk: 3,
        _dgp: 4,
        _rvy: 5,
        _rwa: 6,
        _rwc: 7,
        _ij: 8,
        _rwe: [64, 64, 32, 16, 8, 64, 32, 16, 0]
    };
    a._rwg = function(b) {
        if (b === a._rvy || b === a._rwa || b === a._rwc) {
            return true
        }
        return false
    };
    return a
}();
var frb = function(n) {
    var e = 0;
    var a = 1;
    var g = 2;
    var k = 3;
    var i = {};
    var b;
    var o;
    var d;
    var h = -1;
    var m = new Array(0);
    var c = new Array(0);
    if (n.width !== undefined && n.height !== undefined) {
        b = n.width;
        o = n.height;
        d = n.width * n.height;
        m.push([0, 0, n.width, n.height])
    } else {
        throw new Error("2908 ")
    }
    var j = function(p, x) {
        var r = Infinity;
        var q = -1;
        for (var t = 0; t < m.length; t++) {
            var u = m[t];
            var v = u[g] - p;
            var y = u[k] - x;
            if (v === 0 && y === 0) {
                return t
            }
            var s = Math.min(v, y);
            if (s < 0) {
                continue
            }
            if (s < r) {
                r = s;
                q = t
            }
        }
        return q
    };
    i._sdd = function(u, p) {
        var r = j(u, p);
        if (r === -1) {
            return null
        }
        var v = m[r];
        var x = v[g] - u;
        var t = v[k] - p;
        var s = undefined,
            q = undefined;
        if (x < t) {
            if (x > 0) {
                s = [v[e] + u, v[a], v[g] - u, p]
            }
            if (t > 0) {
                q = [v[e], v[a] + p, v[g], v[k] - p]
            }
        } else {
            if (x > 0) {
                s = [v[e] + u, v[a], v[g] - u, v[k]]
            }
            if (t > 0) {
                q = [v[e], v[a] + p, u, v[k] - p]
            }
        }
        m.splice(r, 1);
        if (s !== undefined) {
            m.push(s)
        }
        if (q !== undefined) {
            m.push(q)
        }
        v[g] = u;
        v[k] = p;
        c[++h] = v;
        d -= u * p;
        return {
            x: v[e],
            y: v[a],
            w: v[g],
            _sdf: v[k],
            id: h
        }
    };
    i._sdh = function(p) {
        m.unshift([c[p][e], c[p][a], c[p][g], c[p][k]]);
        d += (c[p][g] * c[p][k]);
        delete c[p]
    };
    i._sdj = function() {
        var t = new Array(0);
        for (var q = 0; q < m.length; q++) {
            var s = m[q][g] / b;
            var r = m[q][k] / o;
            var p = m[q][e] / b;
            var u = (o - m[q][a]) / o - r;
            t.push({
                x: p,
                y: u,
                w: s,
                _sdf: r
            })
        }
        return t
    };
    i._sdk = function(u) {
        var t = new Array(0);
        for (var q = 0; q < u.length; q++) {
            var s = c[u[q]][g] / b;
            var r = c[u[q]][k] / o;
            var p = c[u[q]][e] / b;
            var v = (o - c[u[q]][a]) / o - r;
            t.push({
                x: p,
                y: v,
                w: s,
                _sdf: r
            })
        }
        return t
    };
    var l = function() {
        return d / (b * o)
    };
    i._gan = function() {
        var v = 0,
            s = 0;
        for (var p = 0; p < m.length; p++) {
            if (m[p] !== undefined) {
                var r = m[p][g];
                var q = m[p][k];
                v += r * q;
                s += (r * q) * Math.min(r, q)
            }
        }
        var u = 0;
        for (var p = 0; p < c.length; p++) {
            if (c[p] !== undefined) {
                var r = c[p][g];
                var q = c[p][k];
                u += (r * q)
            }
        }
        var t = (v) * Math.min(b, o);
        return (t / s) * l()
    };
    n = undefined;
    return i
};
var frv = function() {
    var a = function(h) {
        var t = {};
        var r;
        var e;
        var l = 2048;
        var d = 15000;
        var k;
        var q;
        t._bjx = function() {
            return q
        };
        var n = {};
        var i = {};
        var g = {};
        var m;
        t._gal = function() {
            return m
        };
        t._gam = function() {
            return false
        };
        t._gan = function() {
            return k._gan()
        };
        t._gao = function(x) {
            var y = x._cej;
            if (i[y] === undefined) {
                i[y] = new Array(0)
            } else {
                if (i[y].length === 0 && g[y] !== undefined) {
                    delete g[y]
                }
            }
            i[y].push(x)
        };
        t._gaq = function(y) {
            var z = y._cej;
            if (--n[z]._pns < 1) {
                u(z)
            }
            for (var x = 0; x < i[z].length; x++) {
                if (i[z][x] === y) {
                    i[z].splice(x, 1);
                    break
                }
            }
            if (i[z].length === 0) {
                u(z)
            }
        };
        var s = function(x) {
            return (n[x] !== undefined)
        };
        t._gas = s;
        t._gau = function(y, x) {
            return k._sdd(y, x)
        };
        t._gaw = function(x) {
            return n[x]
        };
        t._gax = function() {
            var y = new Array(0);
            for (var x in n) {
                if (g[x] === undefined) {
                    y.push({
                        _cej: x,
                        _gay: n[x],
                        _gba: i[x]
                    })
                }
            }
            return y
        };
        t._gbb = function(x, z, y) {
            m._gxk(x.x, x.y, x.w, x._sdf, false, new Uint8Array(y._wu));
            n[z] = {
                _gbd: x.x,
                _gbe: x.y,
                _gbg: x.w,
                _gbh: x._sdf,
                _gbi: (x.x + y._ceo) / l,
                _gbj: (x.x + x.w - y._ceo) / l,
                _dhz: (x.y + y._ceo) / l,
                _dib: (x.y + x._sdf - y._ceo) / l,
                _cen: y._cen,
                _ceo: y._ceo,
                _gbl: x.id
            }
        };
        var u = function(x) {
            g[x] = Date.now() + d
        };
        var j = function(y) {
            var x = n[y];
            k._sdh(x._gbl);
            delete n[y]
        };
        t._gbp = function() {
            var z = new Array(0);
            var x = new Array(0);
            for (var y in n) {
                if (g[y] !== undefined) {
                    z.push(n[y]._gbl)
                } else {
                    x.push(n[y]._gbl)
                }
            }
            return {
                available: k._sdj(),
                _gbq: k._sdk(x),
                _gbr: k._sdk(z)
            }
        };
        t._bfc = function(x) {
            for (var y in g) {
                if (g[y] < x) {
                    j(y);
                    delete g[y]
                }
            }
        };
        var p = function() {};
        var c = function() {
            return m._gbs()
        };
        t._gbs = c;
        var b = function() {
            k = frb({
                width: l,
                height: l
            })
        };
        t._kb = function() {
            m._kb()
        };
        if (h._bi !== undefined && h._cee !== undefined && h.id !== undefined) {
            r = h._bi;
            e = h._cee;
            q = h.id;
            b();
            var v = l * l;
            var o = new Uint32Array(v);
            m = erp(r, l, l, o.buffer, false, true, true, false);
            m._ccj()
        } else {
            throw new Error("2502 ")
        }
        h = undefined;
        return t
    };
    return a
}();
var fff = function(b) {
    var d = {};
    var g = new Float32Array(3);
    var c;
    d._drs = function() {
        return c
    };
    var a, i, h;
    d._dru = function() {
        return a
    };
    d._drw = function() {
        return i
    };
    d._drx = function() {
        return h
    };
    var e = undefined;
    d._dry = function() {
        return e
    };
    if (b._drz !== undefined && b._cbl !== undefined && b._cbm !== undefined && b._cbn !== undefined) {
        c = b._drz;
        a = b._cbl;
        i = b._cbm;
        h = b._cbn;
        e = b._dsb
    } else {
        if (b._dax !== undefined) {
            c = b._dax._lpl();
            a = {
                _dsd: new Float32Array([b._dax._lpt(), b._dax._lpt(), b._dax._lpt()]),
                _bif: b._dax._lpm()
            };
            i = {
                _dsd: new Float32Array([b._dax._lpt(), b._dax._lpt(), b._dax._lpt()]),
                _bif: b._dax._lpm()
            };
            h = {
                _dsd: new Float32Array([b._dax._lpt(), b._dax._lpt(), b._dax._lpt()]),
                _bif: b._dax._lpm()
            };
            if (a._bif === -1) {
                a._bif = undefined
            }
            if (i._bif === -1) {
                i._bif = undefined
            }
            if (h._bif === -1) {
                h._bif = undefined
            }
            e = b._dax._lpp()
        } else {
            throw new Error("2396 ")
        }
    }
    d._rv = function() {
        return {
            _drz: c,
            _cbl: {
                _dsd: new Float32Array(a._dsd.buffer.slice(0)),
                _bif: a._bif === undefined ? -1 : a._bif
            },
            _cbm: {
                _dsd: new Float32Array(i._dsd.buffer.slice(0)),
                _bif: i._bif === undefined ? -1 : i._bif
            },
            _cbn: {
                _dsd: new Float32Array(h._dsd.buffer.slice(0)),
                _bif: h._bif === undefined ? -1 : h._bif
            },
            _dsb: e
        }
    };
    d._dsf = function(j) {
        j._lhi(c);
        j._lpb(a._dsd[0]);
        j._lpb(a._dsd[1]);
        j._lpb(a._dsd[2]);
        j._lhi(a._bif === undefined ? -1 : a._bif);
        j._lpb(i._dsd[0]);
        j._lpb(i._dsd[1]);
        j._lpb(i._dsd[2]);
        j._lhi(i._bif === undefined ? -1 : i._bif);
        j._lpb(h._dsd[0]);
        j._lpb(h._dsd[1]);
        j._lpb(h._dsd[2]);
        j._lhi(h._bif === undefined ? -1 : h._bif);
        j._loz(e)
    };
    d.transform = function(j) {
        evs._gnd(j, a._dsd);
        evs._gnd(j, i._dsd);
        evs._gnd(j, h._dsd)
    };
    d.translate = function(j) {
        fqv.add(a._dsd, j);
        fqv.add(i._dsd, j);
        fqv.add(h._dsd, j)
    };
    d.rotate = function(j) {
        fqr._gnd(j, a._dsd);
        fqr._gnd(j, i._dsd);
        fqr._gnd(j, h._dsd)
    };
    d._dsg = function(j) {
        g[0] = a._dsd[0];
        g[2] = a._dsd[2];
        if (j == 1) {
            a._dsd[0] = g[2];
            a._dsd[2] = -g[0]
        } else {
            if (j == 2) {
                a._dsd[0] = -g[0];
                a._dsd[2] = -g[2]
            } else {
                if (j == 3) {
                    a._dsd[0] = -g[2];
                    a._dsd[2] = g[0]
                }
            }
        }
        g[0] = i._dsd[0];
        g[2] = i._dsd[2];
        if (j == 1) {
            i._dsd[0] = g[2];
            i._dsd[2] = -g[0]
        } else {
            if (j == 2) {
                i._dsd[0] = -g[0];
                i._dsd[2] = -g[2]
            } else {
                if (j == 3) {
                    i._dsd[0] = -g[2];
                    i._dsd[2] = g[0]
                }
            }
        }
        g[0] = h._dsd[0];
        g[2] = h._dsd[2];
        if (j == 1) {
            h._dsd[0] = g[2];
            h._dsd[2] = -g[0]
        } else {
            if (j == 2) {
                h._dsd[0] = -g[0];
                h._dsd[2] = -g[2]
            } else {
                if (j == 3) {
                    h._dsd[0] = -g[2];
                    h._dsd[2] = g[0]
                }
            }
        }
    };
    b = undefined;
    return d
};
var evu = {
    _bjd: 0,
    _bje: 1,
    _bjf: 2,
    _bjg: 3,
    _bji: 4,
    _bjk: 5
};
var fqa = {
    _cjn: 0,
    _cjo: 1,
    _cjp: 2
};
var eyu = function() {
    var h = {};
    var d = null;
    var i = function(l) {
        if (d === null) {
            j()
        }
        return d[l]
    };
    h._mzt = i;
    var g = null;
    var e = function(l) {
        if (g === null) {
            k()
        }
        return g[l]
    };
    h._mzv = e;
    var c = function(q) {
        var t = ((q >> 16) & 255) / 256;
        var r = ((q >> 8) & 255) / 256;
        var s = (q & 255) / 256;
        var o = t;
        if (r < o) {
            o = r
        }
        if (s < o) {
            o = s
        }
        var p = t;
        if (r > p) {
            p = r
        }
        if (s > p) {
            p = s
        }
        var y = 0,
            v = 0,
            n = (o + p) / 2;
        if (o !== p) {
            if (n < 0.5) {
                v = (p - o) / (p + o)
            }
            if (n >= 0.5) {
                v = (p - o) / (2 - p - o)
            }
            if (t === p) {
                y = (r - s) / (p - o)
            } else {
                if (r === p) {
                    y = 2 + (s - t) / (p - o)
                } else {
                    if (s === p) {
                        y = 4 + (t - r) / (p - o)
                    }
                }
            }
        }
        y /= 6;
        var x = Math.floor(y * 256),
            m = Math.floor(v * 256),
            u = Math.floor(n * 256);
        if (m < 0) {
            m = 0
        } else {
            if (m > 255) {
                m = 255
            }
        }
        if (u < 0) {
            u = 0
        } else {
            if (u > 255) {
                u = 255
            }
        }
        if (u > 243) {
            m >>= 4
        } else {
            if (u > 217) {
                m >>= 3
            } else {
                if (u > 192) {
                    m >>= 2
                } else {
                    if (u > 179) {
                        m >>= 1
                    }
                }
            }
        }
        return ((((x & 255)) >> 2) << 10) + ((m >> 5) << 7) + (u >> 1)
    };
    h._mzw = c;
    var b = function(l, m, n) {
        return (l << 10) | (m << 7) | n
    };
    h._mzx = b;
    var j = function() {
        d = new Uint32Array(512 * 128);
        var s = 0.7 + (Math.random() * 0.03 - 0.015);
        for (var C = 0; C < 65536; C++) {
            var D = ((C >> 10) & 63) / 64 + (1 / 128);
            var B = ((C >> 7) & 7) / 8 + (1 / 16);
            var r = (C & 127) / 128;
            var A = r,
                x = r,
                z = r;
            if (B != 0) {
                var m;
                if (r < 0.5) {
                    m = r * (1 + B)
                } else {
                    m = r + B - r * B
                }
                var o = 2 * r - m;
                var q = (D + (1 / 3));
                if (q > 1) {
                    q -= 1
                }
                var y = D;
                var n = (D - (1 / 3));
                if (n < 0) {
                    n += 1
                }
                if (6 * q < 1) {
                    A = o + (m - o) * 6 * q
                } else {
                    if (2 * q < 1) {
                        A = m
                    } else {
                        if (3 * q < 2) {
                            A = o + (m - o) * ((2 / 3) - q) * 6
                        } else {
                            A = o
                        }
                    }
                }
                if (6 * y < 1) {
                    x = o + (m - o) * 6 * y
                } else {
                    if (2 * y < 1) {
                        x = m
                    } else {
                        if (3 * y < 2) {
                            x = o + (m - o) * ((2 / 3) - y) * 6
                        } else {
                            x = o
                        }
                    }
                }
                if (6 * n < 1) {
                    z = o + (m - o) * 6 * n
                } else {
                    if (2 * n < 1) {
                        z = m
                    } else {
                        if (3 * n < 2) {
                            z = o + (m - o) * ((2 / 3) - n) * 6
                        } else {
                            z = o
                        }
                    }
                }
            }
            A = Math.pow(A, s);
            x = Math.pow(x, s);
            z = Math.pow(z, s);
            var t = Math.floor(A * 256),
                p = Math.floor(x * 256),
                v = Math.floor(z * 256);
            var u = (t << 16) + (p << 8) + v;
            d[C] = u & 16777215
        }
    };
    var k = function() {
        g = new Uint32Array(512 * 128);
        var r = 0.7 + (Math.random() * 0.03 - 0.015);
        var C = 0;
        for (var E = 0; E < 512; E++) {
            var D = ((E >> 3) / 64 + (1 / 128)) * 360;
            var s = (E & 7) / 8 + (1 / 16);
            for (var q = 0; q < 128; q++) {
                var l = q / 128;
                var B = 0,
                    t = 0,
                    J = 0;
                var I = D / 60;
                var G = Math.floor(I);
                var o = G % 6;
                var F = I - G;
                var v = l * (1 - s);
                var u = l * (1 - (F * s));
                var z = l * (1 - (1 - F) * s);
                if (o == 0) {
                    B = l;
                    t = z;
                    J = v
                } else {
                    if (o == 1) {
                        B = u;
                        t = l;
                        J = v
                    } else {
                        if (o == 2) {
                            B = v;
                            t = l;
                            J = z
                        } else {
                            if (o == 3) {
                                B = v;
                                t = u;
                                J = l
                            } else {
                                if (o == 4) {
                                    B = z;
                                    t = v;
                                    J = l
                                } else {
                                    if (o == 5) {
                                        B = l;
                                        t = v;
                                        J = u
                                    }
                                }
                            }
                        }
                    }
                }
                B = Math.pow(B, r);
                t = Math.pow(t, r);
                J = Math.pow(J, r);
                var A = Math.floor(B * 256),
                    H = Math.floor(t * 256),
                    m = Math.floor(J * 256);
                var K = 4278190080 + (A << 16) + (H << 8) + m;
                g[C++] = K
            }
        }
    };
    var a = function(n, l, u, m) {
        if (u !== 0) {
            var p;
            if (l < 0) {
                p = 0
            } else {
                if (l > 127) {
                    p = 16777215
                } else {
                    p = 131586 * l
                }
            }
            if (u === 256) {
                n = p
            } else {
                var t = u,
                    r = 256 - u;
                n = ((((p & 16711935) * t + (n & 16711935) * r) & 4278255360) + (((p & 65280) * t + (n & 65280) * r) & 16711680)) >> 8
            }
        }
        if (m !== 0) {
            m += 256;
            var s = ((n & 16711680) >> 16) * m;
            if (s > 65535) {
                s = 65535
            }
            var o = ((n & 65280) >> 8) * m;
            if (o > 65535) {
                o = 65535
            }
            var q = (n & 255) * m;
            if (q > 65535) {
                q = 65535
            }
            n = ((s << 8) & 16711680) + (o & 65280) + (q >> 8)
        }
        return n
    };
    h._naa = a;
    h._nab = function(o, s, m) {
        var q = (o & 4278190080) >> 24;
        var v = (q + (((s & 4278190080) >> 24) - q) * m) & 255;
        var n = (o & 16711680) >> 16;
        var r = (n + (((s & 16711680) >> 16) - n) * m) & 255;
        var t = (o & 65280) >> 8;
        var p = (t + (((s & 65280) >> 8) - t) * m) & 255;
        var u = o & 255;
        var l = (u + ((s & 255) - u) * m) & 255;
        return (v << 24) | (r << 16) | (p << 8) | l
    };
    return h
}();
var fhv = function() {
    var c = {
        _dsh: {
            type: _qkj._dcj,
            _ddw: -1
        },
        size: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _dsi: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _dsj: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _dsl: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _dsn: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _dso: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _dsv: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _dsx: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _dsp: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _dsr: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _dtr: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _dtt: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _dtk: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _dsz: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _dtb: {
            type: _qkj._dcf,
            _ddw: 0
        },
        _rqd: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _dtl: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _cyc: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _dcd: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _dtm: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _dtn: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _dtp: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _rqf: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _rqh: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _rqi: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _rqj: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _rql: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _rqn: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _rqo: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _rqp: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _dui: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _duh: {
            type: _qkj._dcl,
            _ddw: 0
        },
        _rqr: {
            type: _qkj._dcl,
            _ddw: 0
        }
    };
    var a = undefined;
    var b = function(e, d) {
        if (a === undefined) {
            a = _qkj._dds(c)
        }
        if (e !== undefined) {
            this._ldc = _qkj._ddh(a);
            _qkj._ddu(c, this._ldc);
            this._bg(e)
        } else {
            if (d !== undefined) {
                this._ldc = _qkj._ddh(d.byteLength);
                _qkj._ddb.set(d, this._ldc._ddl)
            } else {
                throw new Error("2876 ")
            }
        }
    };
    b.prototype.set = function(e, d) {
        e._dcy[this._ldc._ddl + e._ddl] = d
    };
    b.prototype.get = function(d) {
        return d._dcy[this._ldc._ddl + d._ddl]
    };
    b.prototype._bg = function(d) {
        this.set(c._dsh, d._bjx());
        this.set(c.size, d.getSize());
        this.set(c._dsi, d._dum() ? 1 : 0);
        this.set(c._dsj, d._duo() ? 1 : 0);
        this.set(c._dsl, d._duq() ? 1 : 0);
        this.set(c._dsn, d._dus() ? 1 : 0);
        this.set(c._dso, d._duu() ? 1 : 0);
        this.set(c._dsv, d._duy() / 64);
        this.set(c._dsx, d._duz() / 64);
        this.set(c._dsp, d._dvb() ? 1 : 0);
        this.set(c._dsr, d._dvd() ? 1 : 0);
        this.set(c._dtr, d._dve() ? 1 : 0);
        this.set(c._dtt, d._dvf() ? 1 : 0);
        this.set(c._dtk, d._dvh() ? 1 : 0);
        this.set(c._dsz, d._dvi());
        this.set(c._dtb, d._dvj());
        this.set(c._rqd, ((d._dvk() & 16777215) << 8) | ((d._dvk() >> 24) & 255));
        this.set(c._rqi, ((d._dvl() & 16777215) << 8) | ((d._dvl() >> 24) & 255));
        this.set(c._rqj, ((d._dvm() & 16777215) << 8) | ((d._dvm() >> 24) & 255));
        this.set(c._rql, ((d._dvo() & 16777215) << 8) | ((d._dvo() >> 24) & 255));
        this.set(c._rqn, ((d._dvq() & 16777215) << 8) | ((d._dvq() >> 24) & 255));
        this.set(c._dtl, d._dvs());
        this.set(c._cyc, d._cyl());
        this.set(c._dcd, d._dvt());
        this.set(c._dtm, d._dvu());
        this.set(c._dtn, d._dvv());
        this.set(c._dtp, d._dvw());
        this.set(c._rqf, d._dwi() ? 0 : 1);
        this.set(c._rqh, 0);
        this.set(c._rqo, d._dvy() ? 1 : 0);
        this.set(c._rqp, ((eyu._mzt(d._dwn()) << 8) | 255));
        this.set(c._dui, d._dwl());
        this.set(c._duh, d._dwk());
        this.set(c._rqr, d._dwh() ? 1 : 0)
    };
    b.prototype._rv = function() {
        return new Uint32Array(_qkj._dcy.slice(this._ldc._ddl * 4, this._ldc._ddl * 4 + this._ldc._ddj))
    };
    b.prototype._bjx = function() {
        return this.get(c._dsh)
    };
    b.prototype.getSize = function() {
        return this.get(c.size)
    };
    b.prototype._dsi = function() {
        return this.get(c._dsi) === 1
    };
    b.prototype._dsj = function() {
        return this.get(c._dsj) === 1
    };
    b.prototype._dsl = function() {
        return this.get(c._dsl) === 1
    };
    b.prototype._dsn = function() {
        return this.get(c._dsn) === 1
    };
    b.prototype._dso = function() {
        return this.get(c._dso) === 1
    };
    b.prototype._duy = function() {
        return this.get(c._dsv)
    };
    b.prototype._duz = function() {
        return this.get(c._dsx)
    };
    b.prototype._rqs = function() {
        return this.get(c._dsp) === 1
    };
    b.prototype._rqt = function() {
        return this.get(c._dsr) === 1
    };
    b.prototype._rqu = function() {
        return this.get(c._dtr) === 1
    };
    b.prototype._rqw = function() {
        return this.get(c._dtt) === 1
    };
    b.prototype._rqy = function() {
        return this.get(c._dtk) === 1
    };
    b.prototype._dvi = function() {
        return this.get(c._dsz)
    };
    b.prototype._dvj = function() {
        return this.get(c._dtb)
    };
    b.prototype._rqz = function() {
        return this.get(c._rqd)
    };
    b.prototype._hyc = function() {
        return this.get(c._rqi)
    };
    b.prototype._rrb = function() {
        return this.get(c._rqj)
    };
    b.prototype._rrd = function() {
        return this.get(c._rql)
    };
    b.prototype._rrf = function() {
        return this.get(c._rqn)
    };
    b.prototype._dvs = function() {
        return this.get(c._dtl)
    };
    b.prototype._cyl = function() {
        return this.get(c._cyc)
    };
    b.prototype._dvt = function() {
        return this.get(c._dcd)
    };
    b.prototype._dvu = function() {
        return this.get(c._dtm)
    };
    b.prototype._dvv = function() {
        return this.get(c._dtn)
    };
    b.prototype._dvw = function() {
        return this.get(c._dtp)
    };
    b.prototype._rrg = function() {
        return this.get(c._rqf) === 1
    };
    b.prototype._rrh = function() {
        return this.get(c._rqh) === 1
    };
    b.prototype._dtu = function() {
        return this.get(c._rqo) === 1
    };
    b.prototype._rrj = function() {
        return this.get(c._rqp)
    };
    b.prototype._dwl = function() {
        return this.get(c._dui)
    };
    b.prototype._dwk = function() {
        return this.get(c._duh)
    };
    b.prototype._rrl = function() {
        return this.get(c._rqr) === 1
    };
    return function(e, d) {
        return new b(e, d)
    }
}();
var fjf = function() {
    var d = {};
    var n;
    var o;
    var j = 65535;
    var m;
    var c;
    var a;
    var p = null;
    var b = function(r) {
        if (r._bk !== undefined) {
            n = r._bk;
            o = r._beg;
            m = fum;
            m._bg(n, o)
        } else {
            c = r._sxe;
            a = r._sxf;
            p = r._sxh;
            for (var q = 0; q < a; q++) {
                if (p[q] !== undefined) {
                    p[q] = fhv(undefined, p[q])
                }
            }
            if (p[a] !== undefined) {
                p[j] = fhv(undefined, p[a])
            }
        }
    };
    d._bg = b;
    var l = function() {
        var r = new Array(a + 1);
        for (var q = 0; q < a; q++) {
            if (p[q] !== undefined) {
                r[q] = p[q]._rv()
            }
        }
        if (p[j] !== undefined) {
            r[a] = p[j]._rv()
        }
        return {
            _sxe: c,
            _sxf: a,
            _sxh: r
        }
    };
    d._rv = l;
    var g = function() {
        return c
    };
    d._lkn = g;
    var k = function() {
        return p
    };
    d._sxj = k;
    var i = function() {
        return p !== null
    };
    d._sxk = i;
    var e = function(q) {
        if (p === null) {
            throw new Error("2952 ")
        }
        return p[q]
    };
    d._nuq = e;
    var h = function() {
        if (p === null) {
            var r = m._qf();
            if (r) {
                a = m._lkp();
                c = m._lkn();
                var s = m._lkr();
                p = new Array(a);
                for (var q = 0; q < a; q++) {
                    if (s[q] !== undefined) {
                        p[q] = fhv(s[q])
                    } else {
                        s[q] = null
                    }
                }
                p[j] = fhv(m._lks());
                m._kb();
                m = null
            }
        }
    };
    d._bfc = h;
    return d
}();
var etf = function() {
    var B = {};
    var L;
    var J;
    var n = 0;
    var H = 2;
    var j = null;
    var m = undefined;
    var l = undefined;
    var x = undefined;
    var a = false;
    var t = null;
    var u = null;
    var z = false;
    var O = null;
    var o = -1,
        b = -1;
    B._nhn = function() {
        return o
    };
    B._nhp = function() {
        return b
    };
    var h = null;
    var i = null;
    var r = false;
    var c = false;
    var g = 0;
    B._nhq = function(R) {
        g = R
    };
    B._nhr = function() {
        return g
    };
    var e = 0;
    B._nhs = function(R) {
        e = R
    };
    B._nht = function() {
        return e
    };
    var p = 1;
    B._nhv = function(R) {
        p = R
    };
    B._nhw = function() {
        return (p)
    };
    B._nhy = function(R) {
        H = parseInt(R);
        P()
    };
    B._nhz = function() {
        return (H)
    };
    var N = function(R) {
        L = R._bi
    };
    B._bg = N;
    var Q = function(U, V) {
        var T = Math.floor(U / H);
        var S = Math.floor(V / H);
        if (o !== T || b !== S) {
            q();
            o = T;
            b = S;
            t = L._dkz(o, b, true, false, false);
            t._qcr();
            u = L._dkz(o, b, true, false, false);
            u._qcr();
            O = L._dkz(o, b, true, false, false);
            O._qcr();
            j = evs._qzg(0, o, 0, b, 0.1, 5000, j);
            var R = fsk._ch(L, 0, 0, o, b);
            m = R._cn;
            l = R._cq
        }
    };
    B._nia = Q;
    var P = function() {
        q();
        a = false;
        z = false;
        o = b = -1;
        if (t !== null) {
            t._qcs();
            t = null
        }
        if (u !== null) {
            u._qcs();
            u = null
        }
        if (O !== null) {
            O._qcs();
            O = null
        }
        h = null;
        i = null
    };
    B._nic = P;
    var q = function() {
        if (x !== undefined) {
            L._diz().deleteVertexArrayOES(x);
            x = undefined
        }
        if (m !== undefined) {
            L.gl.deleteBuffer(m);
            m = undefined
        }
        if (l !== undefined) {
            L.gl.deleteBuffer(l);
            l = undefined
        }
    };
    B._nie = function() {
        a = true
    };
    var M = function() {
        return a
    };
    B._nig = M;
    var K = function() {
        L._dld(t);
        L._dkr(0, 0, o, b);
        L.gl.clear(L.gl.COLOR_BUFFER_BIT | L.gl.DEPTH_BUFFER_BIT);
        L.gl.cullFace(L.gl.FRONT);
        r = true
    };
    B._nih = K;
    var I = function() {
        L._dld(O);
        L._dkr(0, 0, o, b);
        L.gl.clear(L.gl.COLOR_BUFFER_BIT | L.gl.DEPTH_BUFFER_BIT);
        L.gl.cullFace(L.gl.BACK);
        c = true
    };
    B._nij = I;
    var G = function(T) {
        L._dkf();
        var R = esi._ejp(fpu._mf.id, undefined);
        esi._ejq(R, true);
        var S = L.bindTexture(fce._mbt, T._fpv()._gbs(), L.gl.TEXTURE_2D);
        L.gl.uniform1i(R._nke(elp._dzw.id), S);
        L.gl.uniform2f(R._nke(elp._eab.id), 0, 0);
        k(R, O, j);
        L._dkd();
        L._dle()
    };
    B._nil = G;
    var F = function() {
        return r
    };
    B._nim = F;
    var E = function() {
        return c
    };
    B._nin = E;
    var D = function(R) {
        var S = L.bindTexture(fce._mbo, t._fpv()._gbs(), L.gl.TEXTURE_2D);
        L.gl.uniform1i(R._nke(elp._eav.id), S)
    };
    B._nio = D;
    var C = function(R) {
        var S = L.bindTexture(fce._mbm, O._fpv()._gbs(), L.gl.TEXTURE_2D);
        L.gl.uniform1i(R._nke(elp._eax.id), S)
    };
    B._nip = C;
    var d = function(V, W, S, R) {
        var T = esi._ejp(fpu._mf.id, undefined);
        esi._ejq(T, true);
        var U = L.bindTexture(fce._mbt, V._gbs(), L.gl.TEXTURE_2D);
        L.gl.uniform1i(T._nke(elp._dzw.id), U);
        L.gl.uniform2f(T._nke(elp._eab.id), S, R);
        k(T, W, j);
        L._dle()
    };
    var k = function(S, T, R) {
        L._dld(T);
        L._dkr(0, 0, o, b);
        L.gl.clear(L.gl.COLOR_BUFFER_BIT);
        L._dkc(false);
        L.gl.uniformMatrix4fv(S._nke(elp._dxc.id), false, j);
        var U = L._diz();
        if (x !== undefined) {
            U.bindVertexArrayOES(x)
        } else {
            if (U !== undefined) {
                x = U.createVertexArrayOES();
                U.bindVertexArrayOES(x);
                L.gl.enableVertexAttribArray(S._nkh(elp._edy.id));
                L.gl.enableVertexAttribArray(S._nkh(elp._eek.id))
            }
            L.gl.bindBuffer(L.gl.ARRAY_BUFFER, m);
            L.gl.bindBuffer(L.gl.ELEMENT_ARRAY_BUFFER, l);
            L.gl.vertexAttribPointer(S._nkh(elp._edy.id), 2, L.gl.FLOAT, false, 16, 0);
            L.gl.vertexAttribPointer(S._nkh(elp._eek.id), 2, L.gl.FLOAT, false, 16, 8)
        }
        L.gl.drawElements(L._szw, 6, L.gl.UNSIGNED_SHORT, 0);
        if (U !== undefined) {
            U.bindVertexArrayOES(null)
        }
    };
    var A = function(R, S) {
        if (!r) {
            throw new Error("2668 ")
        }
        L._dld(null);
        L.gl.cullFace(L.gl.BACK);
        r = false;
        L._dkf();
        d(t._fpv(), u, p / R, 0);
        d(u._fpv(), t, 0, p / S);
        L._dkd()
    };
    B._niq = A;
    var y = function() {
        if (!c) {
            throw new Error("2669 ")
        }
        L._dld(null);
        L.gl.cullFace(L.gl.BACK);
        c = false
    };
    B._nis = y;
    var v = function() {
        if (t !== null) {
            return t._fpv()
        }
        return null
    };
    B._nit = v;
    var s = function() {
        if (O !== null) {
            return O._fpv()
        }
        return null
    };
    B._niv = s;
    return B
}();
var fqw = function() {
    var k = 0;
    var h = 1;
    var c = 2;
    var j = 0;
    var l = 1;
    var i = 2;
    var d = 0;
    var b = 1;
    var m = 0;
    var g = 1;
    var e = function(n) {
        this._hw;
        this.type;
        this._bap;
        this._bat;
        this._bai = new Array(3);
        this._bau;
        this._baw;
        this._bak = d;
        this._bam = m;
        this._ban = false;
        if (n !== undefined) {
            a.call(this, n)
        } else {
            throw new Error("2260 ")
        }
    };
    var a = function(o) {
        while (true) {
            var n = o._lpi();
            if (n === 0) {
                break
            } else {
                if (n === 1) {
                    this._bap = o._lpl()
                } else {
                    if (n === 2) {
                        this._bat = o._lpi()
                    } else {
                        if (n === 3) {
                            this._bai[0] = o._lpr();
                            this._bai[1] = o._lpr();
                            this._bai[2] = o._lpr()
                        } else {
                            if (n === 4) {
                                this._bau = o._lpi();
                                this._baw = o._lpr()
                            } else {
                                if (n === 6) {
                                    this.type = o._lpi()
                                } else {
                                    if (n === 8) {
                                        this._bak = b
                                    } else {
                                        if (n === 9) {
                                            this._bam = g
                                        } else {
                                            if (n === 10) {
                                                this._ban = true
                                            } else {
                                                throw new Error("2261 " + type)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    e.prototype._bax = function() {
        return this._bai
    };
    e.prototype._baz = function() {
        return this._bak
    };
    return function(n) {
        return new e(n)
    }
}();
var fuh = {
    _cv: {
        _cy: 1,
        priority: flx._qn
    },
    _cz: {
        _cy: 2,
        priority: flx._qn
    },
    _de: {
        _cy: 3,
        priority: flx._qn
    },
    _df: {
        _cy: 4,
        priority: flx._qn
    },
    _dg: {
        _cy: 5,
        priority: flx._qn
    },
    _di: {
        _cy: 6,
        _dj: 8,
        priority: flx._qn
    },
    _dl: {
        _cy: 7,
        priority: flx._qn
    },
    _dm: {
        _cy: 8,
        _dj: 8,
        priority: flx._nlc
    },
    _dn: {
        _cy: 9,
        _dj: 7,
        priority: flx._qn
    },
    _dr: {
        _cy: 10,
        _dj: 8,
        priority: flx._nlc
    },
    _dv: {
        _cy: 11,
        priority: flx._nlc
    },
    _dw: {
        _cy: 12,
        _dj: 7,
        priority: flx._qn
    },
    _dz: {
        _cy: 13,
        _dj: 8,
        priority: flx._qn
    },
    _ea: {
        _cy: 17,
        priority: flx._nlc
    },
    _ec: {
        _cy: 18,
        priority: flx._qn
    },
    _ed: {
        _cy: 26,
        _dj: 5,
        priority: flx._nlc
    },
    _eh: {
        _cy: 27,
        priority: flx._nlc
    },
    _ej: {
        _cy: 28,
        priority: flx._nlc
    },
    _ek: {
        _cy: 29,
        priority: flx._qn
    },
    _eo: {
        _cy: 30,
        priority: flx._qn
    },
    _ep: {
        _cy: 31,
        priority: flx._qn
    },
    _er: {
        _cy: 32,
        priority: flx._nlc
    },
    _et: {
        _cy: 33,
        priority: flx._nlc
    },
    _eu: {
        _cy: 34,
        priority: flx._qn
    },
    _ew: {
        _cy: 35,
        priority: flx._nlc
    },
    _ey: {
        _cy: 36,
        priority: flx._qn
    },
    _ez: {
        _cy: 40,
        priority: flx._qn
    },
    _fb: {
        _cy: 41,
        priority: flx._qn
    },
    _fe: {
        _cy: 42,
        priority: flx._qn
    },
    _fg: {
        _cy: 46,
        priority: flx._qn
    },
    _fi: {
        _cy: 47,
        priority: flx._nlc
    },
    _fk: {
        _cy: 48,
        priority: flx._qn
    },
    _fm: {
        _cy: 49,
        priority: flx._qn
    },
    _fo: {
        _cy: 52,
        priority: flx._qn
    },
    _fq: {
        _cy: 54,
        priority: flx._qn
    },
    _ft: {
        _cy: 55,
        priority: flx._qn
    },
    _fu: {
        _cy: 56,
        priority: flx._qn
    },
    _fw: {
        _cy: 57,
        priority: flx._qn
    },
    _ga: {
        _cy: 58,
        priority: flx._qn
    },
    _gb: {
        _cy: 59,
        priority: flx._qn
    },
    _gd: {
        _cy: 60,
        priority: flx._nlc
    },
    _gf: {
        _cy: 61,
        priority: flx._qn
    },
    _gh: {
        _cy: 62,
        priority: flx._nlc
    },
    _gj: {
        _cy: 63,
        priority: flx._qn
    },
    _gm: {
        _cy: 64,
        priority: flx._qn
    },
    _go: {
        _cy: 65,
        priority: flx._qn
    },
    _gp: {
        _cy: 66,
        priority: flx._nlc
    },
    _gr: {
        _cy: 67,
        priority: flx._nlc
    },
    _gu: {
        _cy: 68,
        priority: flx._qn
    },
    _gv: {
        _cy: 69,
        priority: flx._nlc
    },
    _gx: {
        _cy: 70,
        priority: flx._qn
    },
    _gz: {
        _cy: 72,
        priority: flx._qn
    },
    _hb: {
        _cy: 75,
        priority: flx._qn
    },
    _hd: {
        _cy: 76,
        priority: flx._qn
    },
    _he: {
        _cy: 77,
        priority: flx._qn
    },
    _hg: {
        _cy: 80,
        priority: flx._nlc
    },
    _hj: 80,
    _hk: function(a) {
        return 1 << a
    },
    _hl: function(a, b) {
        return a >>> b
    },
    _hm: function(a, b) {
        return a & ((1 << b) - 1)
    }
};
var fra = function() {
    var v = {};
    var a = 1;
    var r = 300000;
    var A = Date.now();
    var t;
    var d;
    var q;
    var c;
    var x = 0;
    var k = new Array(0);
    v._cdv = function() {
        return k.length
    };
    var m = new Array(0);
    var o = new Array(0);
    var s = 0;
    var e = new Array(0);
    var g = new Array(0);
    var y = false;
    var u = false;
    v._cdx = function() {
        return y
    };
    v._cdz = function(C) {
        y = C
    };
    v._ceb = function() {
        return u
    };
    v._cec = function(C) {
        u = C
    };
    v._bg = function(C) {
        t = C._bi;
        d = C._cee;
        q = C._bk;
        c = C._ceg
    };
    v._ceh = function(E) {
        var C = l(E);
        if (C === _gkf) {
            C = p(E)
        }
        var D = c(C, E);
        if (C === _gkf) {
            j(E, D)
        }
        return D
    };
    var j = function(E, D) {
        o.push(D);
        for (var C = 0; C < m.length; C++) {
            if (m[C]._cej === E) {
                m[C]._cek++;
                return
            }
        }
        m.push({
            _cej: E,
            _cek: 1
        })
    };
    v._cem = function(E) {
        var F = E._ict();
        var D = o.indexOf(E);
        o.splice(D, 1);
        for (var C = 0; C < m.length; C++) {
            if (m[C]._cej === F) {
                if (--m[C]._cek === 0) {
                    m.splice(C, 1)
                }
                return
            }
        }
    };
    var l = function(D) {
        for (var C = 0; C < k.length; C++) {
            if (k[C]._gas(D)) {
                return k[C]
            }
        }
        return _gkf
    };
    var n = function(J, G) {
        var P = new Uint32Array(J._wu);
        var T = J._ceo;
        var O = J.width;
        var R = J.height;
        var N = O + T + T;
        var I = R + T + T;
        var V = O * R;
        var H = N * I;
        J._wu = new ArrayBuffer(H * 4);
        var M = new Uint32Array(J._wu);
        J.width = N;
        J.height = I;
        for (var U = (N * T) + T, E = 0; E < V; U += N, E += O) {
            for (var S = 0; S < O; S++) {
                M[U + S] = P[E + S]
            }
        }
        if (G) {
            return
        }
        for (var U = 0; U < T; U++) {
            for (S = 0; S < O; S++) {
                M[T + (N * U) + S] = P[S];
                M[(T + ((T + R + U) * N)) + S] = P[((R - 1) * O) + S]
            }
            for (S = 0; S < R; S++) {
                M[(T + S) * N + U] = P[S * O];
                M[(T + O) + ((T + S) * N) + U] = P[((S + 1) * O) - 1]
            }
        }
        var F = P[0];
        var C = P[O - 1];
        var D = P[O * (R - 1)];
        var Q = P[(O * R) - 1];
        for (var K = 0; K < T; K++) {
            for (var L = 0; L < T; L++) {
                M[(K * N) + L] = F;
                M[((K + 1) * N) - T + L] = C;
                M[N * (I - K - 1) + L] = D;
                M[N * (I - K) - T + L] = Q
            }
        }
    };
    var B = function(J, C) {
        n(J, 1);
        var F = 0;
        var E = new Uint8Array(J._wu);
        var G = new Uint8Array(E);
        var N;
        var M = C >>> 24;
        var H = (C >>> 16) & 255;
        var I = (C >>> 8) & 255;
        var L = C & 255;
        for (var D = 0; D < J.height; D++) {
            for (var K = 0; K < J.width; K++) {
                N = false;
                if (G[F + 3] === 0) {
                    if (K > 0 && G[F - 1] !== 0) {
                        N = true
                    } else {
                        if (D > 0 && G[F - (J.width * 4) + 3] !== 0) {
                            N = true
                        } else {
                            if (K < J.width - 1 && G[F + 7] !== 0) {
                                N = true
                            } else {
                                if (D < J.height - 1 && G[F + (J.width * 4) + 3] !== 0) {
                                    N = true
                                }
                            }
                        }
                    }
                }
                if (N) {
                    E[F++] = M;
                    E[F++] = H;
                    E[F++] = I;
                    E[F++] = L
                } else {
                    F += 4
                }
            }
        }
    };
    var z = function(H, C) {
        n(H, 1);
        var E = new Uint8Array(H._wu);
        var L = (C >>> 16) & 255;
        var G = (C >>> 8) & 255;
        var I = C & 255;
        var K = 255;
        var F;
        for (var D = H.height - 1; D > 0; D--) {
            for (var J = H.width - 1; J > 0; J--) {
                F = (J + (D * H.width)) * 4;
                if (E[F + 3] === 0 && E[F - 4 - (4 * H.width) + 3] !== 0) {
                    E[F] = L;
                    E[F + 1] = G;
                    E[F + 2] = I;
                    E[F + 3] = K
                }
            }
        }
    };
    var p = function(I) {
        var C = (I & 65535);
        var F = q.getFile(fqn._sbo, C, 0, feg._ciy, flx._qn);
        if (F === _gkf) {
            return _gkf
        }
        var E = fao._nsx(F);
        var H = {
            width: E._ke(),
            height: E._kg(),
            _wu: E._wq(),
            _cen: E._ehj(),
            _ceo: a
        };
        n(H, false);
        var D = (I >> 17) & 3;
        if (D > 0) {
            B(H, 255);
            if (D === 2) {
                B(H, 4294967295)
            }
        }
        var G = Math.floor(I / Math.pow(2, 19));
        if (G > 0) {
            z(H, G)
        }
        return i(H, I)
    };
    v._ceq = function(G, F, C, E) {
        var I = {
            width: F,
            height: C,
            _wu: G,
            _cen: {
                left: 0,
                _cer: 0,
                top: 0,
                _ces: 0
            },
            _ceo: E
        };
        var H = -(++s);
        var D = i(I, H);
        return c(D, H)
    };
    var i = function(G, F) {
        var E = null;
        var C;
        for (var D = 0;
            (D < k.length && E === null); D++) {
            C = k[D];
            E = C._gau(G.width, G.height)
        }
        if (E === null) {
            var D = x++;
            C = frv({
                _bi: t,
                _cee: d,
                id: D
            });
            k.push(C);
            E = C._gau(G.width, G.height);
            if (E === null) {
                throw new Error("2301 " + G.width + "2301 " + G.height + "2301 ")
            }
        }
        C._gbb(E, F, G);
        return C
    };
    var h = function(F) {
        for (var C = 0; C < m.length; C++) {
            var G = m[C]._cej;
            var D = l(G);
            if (D === _gkf) {
                D = p(G)
            }
            if (D !== _gkf) {
                for (var E = 0; E < o.length; E++) {
                    if (o[E]._ict() === G) {
                        o[E]._icw(D);
                        o.splice(E, 1);
                        E--
                    }
                }
                m.splice(C, 1);
                C--
            }
        }
    };
    v._cet = function(C) {
        return k[C]
    };
    v._cev = function(C) {
        return k[C]._gbp()
    };
    v._bfc = function() {
        var D = Date.now();
        for (var C = 0; C < k.length; C++) {
            k[C]._bfc(D)
        }
        if (D - A > r) {
            A = D;
            b()
        }
    };
    v._bfd = function() {
        h(q)
    };
    v._cex = function() {
        A = Date.now();
        b()
    };
    v._cey = function(C) {
        e.push(C)
    };
    v._cez = function(C) {
        g.push(C)
    };
    var b = function() {
        var G = true;
        for (var V = 0; V < g.length; V++) {
            if (g[V]() === false) {
                if (false) {}
                return
            }
        }
        for (var V = 0; V < e.length; V++) {
            e[V]()
        }
        var H = k;
        var S = new Array(0);
        var F = new Array(0);
        for (var V = 0; V < H.length; V++) {
            var D = H[V]._gax();
            var P = H[V]._gal();
            var K = t._dkz(P._ke(), P._kg(), false, false, false);
            K._qcr();
            t._dld(K);
            K._fpw(H[V]._gal());
            t._dld(null);
            t.gl.bindFramebuffer(t.gl.FRAMEBUFFER, K._fpq());
            t.gl.framebufferTexture2D(t.gl.FRAMEBUFFER, t.gl.COLOR_ATTACHMENT0, t.gl.TEXTURE_2D, H[V]._gal()._gbs(), 0);
            t._dkr(0, 0, P._ke(), P._kg());
            var R = new Uint8Array(P._ke() * P._kg() * 4);
            t.gl.readPixels(0, 0, P._ke(), P._kg(), t.gl.RGBA, t.gl.UNSIGNED_BYTE, R);
            t.gl.bindFramebuffer(t.gl.FRAMEBUFFER, null);
            S.push({
                _wu: R,
                width: P._ke(),
                height: P._kg()
            });
            K._qcs();
            for (var U = 0; U < D.length; U++) {
                D[U]._cfa = V;
                F.push(D[U])
            }
        }
        F.sort(function(Y, X) {
            return Math.max(X._gay._gbg, X._gay._gbh) - Math.max(Y._gay._gbg, Y._gay._gbh)
        });
        k = new Array(0);
        x = 0;
        for (var V = 0; V < F.length; V++) {
            var C = F[V]._cej;
            var E = F[V]._cfa;
            var L = F[V]._gay;
            var W = S[E]._wu;
            var T = S[E].width;
            var R = new Uint8Array(L._gbg * L._gbh * 4);
            var O = 0;
            for (var J = L._gbe + L._gbh - 1; J >= L._gbe; J--) {
                for (var N = L._gbd; N < L._gbd + L._gbg; N++) {
                    var Q = (J * T + N) * 4;
                    R[O++] = W[Q];
                    R[O++] = W[Q + 1];
                    R[O++] = W[Q + 2];
                    R[O++] = W[Q + 3]
                }
            }
            var I = {
                width: L._gbg,
                height: L._gbh,
                _wu: R.buffer,
                _cen: L._cen,
                _ceo: L._ceo
            };
            var M = i(I, C);
            if (F[V]._gba !== undefined) {
                for (var U = 0; U < F[V]._gba.length; U++) {
                    F[V]._gba[U]._icw(M, true)
                }
            }
        }
    };
    return v
}();
var fbu = function() {
    var a = function(e, d, c, b, g) {
        this._sax = undefined;
        if (g !== undefined) {
            this._say = g._lpl();
            this._cbg = g._lpl();
            this._rrg = g._lpi() === 1;
            this._dcd = g._lpi();
            this._sax = g._lpr()
        } else {
            this._say = e;
            this._cbg = d;
            this._rrg = c;
            this._dcd = b
        }
    };
    a.prototype._saz = function(b) {
        this._sax = b
    };
    a.prototype._dsf = function(b) {
        b._lhi(this._say);
        b._lhi(this._cbg);
        b._lhh(this._rrg ? 1 : 0);
        b._lhh(this._dcd);
        if (this._sax === undefined) {
            b._loz(-1)
        } else {
            b._loz(this._sax)
        }
    };
    return function(e, d, c, b, g) {
        return new a(e, d, c, b, g)
    }
}();
var fbl = function() {
    var c = {};
    var k = new Float32Array(3);
    var l;
    var b;
    var i;
    var d = {};
    c._swt = function() {
        return d
    };
    var h = false;
    c._swv = function() {
        return h
    };
    c._swx = function(m) {
        h = m
    };
    c._bg = function(m) {
        l = m._bi;
        b = m._cee;
        i = m._lic
    };
    var j = function(p, m) {
        if (p.length === 0 && m.length === 0) {
            return undefined
        } else {
            var o = a(p, false);
            if (o !== undefined) {
                o._poe(p)
            }
            var n = a(m, true);
            if (n !== undefined) {
                n._poe(m)
            }
            return i({
                _hcm: o,
                _hcp: p,
                _hcn: n,
                _hcr: m
            })
        }
    };
    c._swz = function(o) {
        var p = new Array(0),
            n = new Array(0);
        for (var m = 0; m < o.length; m++) {
            if (o[m] === undefined) {
                continue
            }
            g(o[m], p, n)
        }
        return j(p, n)
    };
    c._sxb = function(n) {
        var r = new Array(0),
            q = new Array(0);
        for (var m = 0; m < n.length; m++) {
            var p = n[m];
            if (p === undefined) {
                continue
            }
            if (p === -1) {
                r.push(fbu(-1, fvk._poz, true, fds._byg));
                continue
            }
            var o = fjf._nuq(p);
            if (o === undefined) {
                if (false) {}
                continue
            }
            g(o, r, q)
        }
        return j(r, q)
    };
    var g = function(m, p, n) {
        var o = m.getSize();
        var q = m._rrg();
        if (m._dsi()) {
            if (m._rqy() && l._djc()) {
                n.push(fbu(m._bjx(), o, q, m._dvt()))
            } else {
                p.push(fbu(m._bjx(), o, q, m._dvt()))
            }
        }
    };
    c._sxc = function(r, q) {
        if (r.length === 0) {
            return undefined
        }
        for (var o in d) {
            var m = d[o];
            if (q !== m._kd()) {
                continue
            }
            if (m._poj(r)) {
                return m
            }
        }
        for (var o in d) {
            var m = d[o];
            if (q !== m._kd()) {
                continue
            }
            if (m._pon(r)) {
                return m
            }
        }
        var p = 0;
        while (d[p] !== undefined) {
            p++
        }
        var n = fcg({
            _bi: l,
            _cee: b,
            id: p,
            _jq: q
        });
        if (!n._pon(r)) {
            throw new Error("2951 " + (q ? "2951 " : "2951 ") + "2951 ")
        }
        d[p] = n;
        return n
    };
    var a = c._sxc;
    c._cet = function(m) {
        return d[m]
    };
    c._sxd = function(p, m) {
        var o = undefined,
            n = undefined;
        if (p !== undefined && p !== _gkf) {
            o = p._hdd();
            n = p._hde()
        }
        if (o !== undefined) {
            var q = l.bindTexture(fce._maz, o._gbs(), l.gl.TEXTURE_2D);
            m._nky(elp._dxx, q);
            k[0] = o._pnw();
            k[1] = fvk._poz;
            k[2] = o._pnx();
            m._nky(elp._dxz, k)
        }
        if (n !== undefined && m._njk()._xv(fct._dpx)) {
            var q = l.bindTexture(fce._mbf, n._gbs(), l.gl.TEXTURE_2D);
            m._nky(elp._dya, q);
            k[0] = n._pnw();
            k[1] = fvk._poz;
            k[2] = n._pnx();
            m._nky(elp._dyb, k)
        }
    };
    c._bfc = function() {};
    c._poo = function() {
        for (var m in d) {
            d[m]._poo(m)
        }
    };
    c._bfd = function() {
        for (var m in d) {
            d[m]._qf();
            if (!d[m]._pol()) {
                d[m]._kb();
                delete d[m]
            }
        }
    };
    var e = function() {
        for (var m in d) {
            d[m]._lij()
        }
    };
    c._lij = e;
    return c
}();
var epn = function() {
    var a = function(b) {
        this._hcj = -1;
        this._hcl = -1;
        this._hcm = undefined;
        this._hcn = undefined;
        this._hcp = undefined;
        this._hcr = undefined;
        this._hcs = undefined;
        this._hcu = undefined;
        this._bg(b)
    };
    a.prototype._bg = function(d) {
        if ((d._hcm !== undefined || d._hcn !== undefined) && (d._hcp !== undefined || d._hcr !== undefined)) {
            this._hcm = d._hcm;
            this._hcn = d._hcn;
            if (this._hcm !== undefined) {
                this._hcj = this._hcm._bjx()
            }
            if (this._hcn !== undefined) {
                this._hcl = this._hcn._bjx()
            }
            this._hcp = d._hcp;
            this._hcr = d._hcr;
            this._hdl()
        } else {
            if (d._hcj !== undefined && d._hcl !== undefined && (d._hcp !== undefined || d._hcr !== undefined)) {
                this._hcj = d._hcj;
                this._hcl = d._hcl;
                this._hcm = fbl._cet(this._hcj);
                this._hcn = fbl._cet(this._hcl);
                this._hcp = d._hcp;
                this._hcr = d._hcr;
                this._hdl()
            } else {
                if ((d._hdm !== undefined || d._hdn !== undefined) && (d._hcp !== undefined || d._hcr !== undefined)) {
                    if (d._hdm !== undefined) {
                        this._hcm = fcg({
                            _hcw: d._hdm
                        });
                        this._hcj = this._hcm._bjx()
                    }
                    if (d._hdn !== undefined) {
                        this._hcn = fcg({
                            _hcw: d._hdn
                        });
                        this._hcl = this._hcn._bjx()
                    }
                    this._hcp = d._hcp;
                    this._hcr = d._hcr;
                    this._hdl()
                } else {
                    if (d._dax !== undefined) {
                        var c = d._dax._lpi() === 0;
                        if (c) {
                            if (d._dax._lpi() === 1) {
                                this._hcm = fcg({
                                    _hcx: d._dax
                                });
                                this._hcj = this._hcm._bjx()
                            }
                            if (d._dax._lpi() === 1) {
                                this._hcn = fcg({
                                    _hcx: d._dax
                                });
                                this._hcl = this._hcn._bjx()
                            }
                        } else {
                            this._hcj = d._dax._lpm();
                            if (this._hcj !== -1) {
                                this._hcm = fbl._cet(this._hcj)
                            }
                            this._hcl = d._dax._lpm();
                            if (this._hcl !== -1) {
                                this._hcn = fbl._cet(this._hcl)
                            }
                        }
                        this._hcp = new Array(d._dax._lpl());
                        for (var b = 0; b < this._hcp.length; b++) {
                            this._hcp[b] = fbu(undefined, undefined, undefined, undefined, d._dax)
                        }
                        this._hcr = new Array(d._dax._lpl());
                        for (var b = 0; b < this._hcr.length; b++) {
                            this._hcr[b] = fbu(undefined, undefined, undefined, undefined, d._dax)
                        }
                        if (d._llu) {
                            this._hdx()
                        } else {
                            this._hdl()
                        }
                    } else {
                        if (d.empty !== undefined) {
                            this._hcp = new Array(0);
                            this._hcr = new Array(0)
                        } else {
                            throw new Error("2543 ")
                        }
                    }
                }
            }
        }
    };
    a.prototype._hcz = function() {
        return this._hcj
    };
    a.prototype._hdb = function() {
        return this._hcl
    };
    a.prototype._hdd = function() {
        return this._hcm
    };
    a.prototype._hde = function() {
        return this._hcn
    };
    a.prototype._hdg = function() {
        return this._hcp
    };
    a.prototype._hdh = function() {
        return this._hcr
    };
    a.prototype._hdj = function() {
        return this._hcr !== undefined && this._hcr.length > 0
    };
    a.prototype._hdl = function() {
        if (this._hcm !== undefined) {
            this._hcm._hdl(this._hcp)
        }
        if (this._hcn !== undefined) {
            this._hcn._hdl(this._hcr)
        }
    };
    a.prototype._kb = function() {
        if (this._hcm !== undefined) {
            this._hcm._poh(this._hcp)
        }
        if (this._hcn !== undefined) {
            this._hcn._poh(this._hcr)
        }
    };
    a.prototype._rv = function(b, c) {
        if (b) {
            return {
                _hdm: this._hcm === undefined ? undefined : this._hcm._pny(c ? this._hcp : undefined),
                _hdn: this._hcn === undefined ? undefined : this._hcn._pny(c ? this._hcr : undefined),
                _hcp: this._hcp,
                _hcr: this._hcr
            }
        } else {
            return {
                _hcj: this._hcj,
                _hcl: this._hcl,
                _hcp: this._hcp,
                _hcr: this._hcr
            }
        }
    };
    a.prototype._dsf = function(d, c, e) {
        if (c) {
            d._lhh(0);
            if (this._hcm === undefined) {
                d._lhh(0)
            } else {
                d._lhh(1);
                this._hcm._pod(d, e ? this._hcp : undefined)
            }
            if (this._hcn === undefined) {
                d._lhh(0)
            } else {
                d._lhh(1);
                this._hcn._pod(d, e ? this._hcr : undefined)
            }
        } else {
            d._lhh(1);
            d._lhi(this._hcj);
            d._lhi(this._hcl)
        }
        d._lhi(this._hcp.length);
        for (var b = 0; b < this._hcp.length; b++) {
            this._hcp[b]._dsf(d)
        }
        d._lhi(this._hcr.length);
        for (var b = 0; b < this._hcr.length; b++) {
            this._hcr[b]._dsf(d)
        }
    };
    a.prototype._hdp = function(g) {
        var d = g._hcz();
        var h = g._hdb();
        if (this._hcj === -1) {
            this._hcm = g._hdd();
            this._hcj = d
        }
        if (this._hcl === -1) {
            this._hcn = g._hde();
            this._hcl = h
        }
        if (d !== -1 && d !== this._hcj) {
            throw new Error("2544 " + d + "2544 " + _hcj)
        }
        if (h !== -1 && h !== this._hcl) {
            throw new Error("2545 " + h + "2545 " + _hcl)
        }
        if (d !== -1) {
            var i = g._hdg();
            _hdt: for (var b = 0; b < i.length; b++) {
                for (var c = 0; c < this._hcp.length; c++) {
                    if (this._hcp[c]._say === i[b]._say) {
                        continue _hdt
                    }
                }
                this._hcp.push(i[b])
            }
        }
        if (h !== -1) {
            var e = g._hdh();
            _hdu: for (var b = 0; b < e.length; b++) {
                for (var c = 0; c < this._hcr.length; c++) {
                    if (this._hcr[c]._say === e[b]._say) {
                        continue _hdu
                    }
                }
                this._hcr.push(e[b])
            }
        }
    };
    a.prototype._hdv = function() {
        var b = true;
        if (this._hcm !== undefined) {
            b = b && this._hcm._hdv(this._hcp)
        }
        if (this._hcn !== undefined) {
            b = b && this._hcn._hdv(this._hcr)
        }
        return b
    };
    a.prototype._hdx = function() {
        if (this._hcp.length > 0) {
            this._hcm = fbl._sxc(this._hcp, false)
        }
        if (this._hcr.length > 0) {
            this._hcn = fbl._sxc(this._hcr, true)
        }
        if (this._hcm !== undefined) {
            this._hcs = this._hcm._poe(this._hcp, true);
            this._hcj = this._hcm._bjx()
        } else {
            this._hcj = -1
        }
        if (this._hcn !== undefined) {
            this._hcu = this._hcn._poe(this._hcr, true);
            this._hcl = this._hcn._bjx()
        } else {
            this._hcl = -1
        }
        this._hdl()
    };
    a.prototype._hdz = function() {
        this._hcs = undefined;
        this._hcu = undefined
    };
    return function(b) {
        return new a(b)
    }
}();
var ezh = function() {
    var a = function(b) {
        var g = {};
        var e;
        g._ih = function() {
            return e
        };
        var d;
        g._bax = function() {
            return d
        };
        var c;
        g._baz = function() {
            return c
        };
        if (b._hw !== undefined && b._bai !== undefined && b._bak !== undefined) {
            e = b._hw;
            d = b._bai;
            c = b._bak
        } else {
            if (b._hqh !== undefined) {
                e = b._hqh._hw;
                d = b._hqh._bai;
                c = b._hqh._bak
            } else {
                throw new Error("2639 ")
            }
        }
        g._rv = function() {
            return {
                _hw: e,
                _bai: d,
                _bak: c
            }
        };
        b = undefined;
        return g
    };
    return a
}();
var flb = function() {
    var g = 0;
    var h = 1;
    var j = 0;
    var k = 1;
    var i = 2;
    var l = -2;
    var e = -1;
    var d = -1;
    var c = 2048 / (2 * Math.PI);
    var b = function(m) {
        this._hw;
        this.type = g;
        this._nvn, this._nvq;
        this._nvr, this._nvs;
        this._bat = j;
        this._lat, this._lav;
        this._nta = j;
        this._ntc = undefined;
        this._law = undefined;
        this._lax = 100;
        this._lbc, this._lbe;
        this._lbf = undefined;
        this._lbh = 100;
        this._nvu, this._nvv;
        this._ntd = true;
        this._ntf = undefined;
        this._ntg = 100;
        this._lbp = 100;
        this._cnm = -1;
        this._laq, this._las;
        this._nvw, this._nvx;
        this._nth = -2;
        this._nti = -2;
        this._lap = 0;
        this._ntj = true;
        this.loop = true;
        this._ntk = -1;
        this._gen = -1;
        this._ntm = 0;
        this._ntn = true;
        this._lby = 0, this._lbz = 0;
        this._lca = 0;
        this._lbu = 0, this._lbw = 0;
        this._nto = true;
        this._ntq = false;
        this._nts = true;
        this._cyg = false;
        this._ldb = undefined;
        if (m !== undefined) {
            a.call(this, m)
        } else {
            throw new Error("2710 ")
        }
    };
    b.prototype._ntu = function() {
        return this._nvn
    };
    b.prototype._ntw = function() {
        return this._nvq
    };
    b.prototype._ntx = function() {
        return this._nvr
    };
    b.prototype._ntz = function() {
        return this._nvs
    };
    b.prototype._nua = function() {
        return this._lat
    };
    b.prototype._nub = function() {
        return this._lav
    };
    b.prototype._nud = function() {
        return this._nta
    };
    b.prototype._nue = function() {
        return this._ntc
    };
    b.prototype._ldq = function() {
        return this._law
    };
    b.prototype._lds = function() {
        return this._lax
    };
    b.prototype._leb = function() {
        return this._lbc
    };
    b.prototype._led = function() {
        return this._lbe
    };
    b.prototype._ldy = function() {
        return this._lbf
    };
    b.prototype._lea = function() {
        return this._lbh
    };
    b.prototype._nug = function() {
        return this._nvu
    };
    b.prototype._nui = function() {
        return this._nvv
    };
    b.prototype._nuk = function() {
        return this._ntd
    };
    b.prototype._nul = function() {
        return this._ntf
    };
    b.prototype._nuo = function() {
        return this._ntg
    };
    b.prototype._lei = function() {
        return this._lbp
    };
    b.prototype._nuq = function() {
        return this._cnm
    };
    b.prototype._nur = function() {
        return this._laq
    };
    b.prototype._nus = function() {
        return this._las
    };
    b.prototype._nuu = function() {
        return this._nvw
    };
    b.prototype._nuw = function() {
        return this._nvx
    };
    b.prototype._ldk = function() {
        return this._lap
    };
    b.prototype._nuy = function() {
        return this._ntn
    };
    b.prototype._nva = function() {
        return this._lbu
    };
    b.prototype._nvc = function() {
        return this._lbw
    };
    b.prototype._nvd = function() {
        return this._lby
    };
    b.prototype._nve = function() {
        return this._lbz
    };
    b.prototype._nvg = function() {
        return this._lca
    };
    b.prototype._nvi = function() {
        return this._nto
    };
    b.prototype._nvj = function() {
        return this._cyg
    };
    b.prototype._nvl = function() {
        return this._ldb
    };
    var a = function(p) {
        while (true) {
            var o = p._lpi();
            if (o === 0) {
                break
            } else {
                if (o === 1) {
                    this._nvn = p._lpl() / c;
                    this._nvq = p._lpl() / c;
                    this._nvr = p._lpl() / c;
                    this._nvs = p._lpl() / c
                } else {
                    if (o === 2) {
                        this._bat = p._lpi()
                    } else {
                        if (o === 3) {
                            this._lat = p._lpr();
                            this._lav = p._lpr()
                        } else {
                            if (o === 4) {
                                this._nta = p._lpi();
                                this._ntc = p._lpj()
                            } else {
                                if (o === 5) {
                                    this._lbc = this._lbe = p._lpl()
                                } else {
                                    if (o === 6) {
                                        this._nvu = p._lpr();
                                        this._nvv = p._lpr()
                                    } else {
                                        if (o === 7) {
                                            this._laq = p._lpl();
                                            this._las = p._lpl()
                                        } else {
                                            if (o === 8) {
                                                this._nvw = p._lpl();
                                                this._nvx = p._lpl()
                                            } else {
                                                if (o === 9) {
                                                    var n = p._lpi();
                                                    p._loj(p._loi() + n * 2)
                                                } else {
                                                    if (o === 10) {
                                                        var n = p._lpi();
                                                        this._ldb = new Array(n);
                                                        for (var m = 0; m < n; m++) {
                                                            this._ldb[m] = p._lpl()
                                                        }
                                                    } else {
                                                        if (o === 12) {
                                                            this._nth = p._lpj()
                                                        } else {
                                                            if (o === 13) {
                                                                this._nti = p._lpj()
                                                            } else {
                                                                if (o === 14) {
                                                                    this._lap = p._lpl()
                                                                } else {
                                                                    if (o === 15) {
                                                                        this._cnm = p._lpl()
                                                                    } else {
                                                                        if (o === 16) {
                                                                            this._ntj = p._lpi() === 1;
                                                                            this._ntk = p._lpl();
                                                                            this._gen = p._lpl();
                                                                            this.loop = p._lpi() === 1
                                                                        } else {
                                                                            if (o === 17) {
                                                                                p._lpl()
                                                                            } else {
                                                                                if (o === 18) {
                                                                                    this._ntf = p._lpr()
                                                                                } else {
                                                                                    if (o === 19) {
                                                                                        this._ntm = p._lpi()
                                                                                    } else {
                                                                                        if (o === 20) {
                                                                                            this._ntg = p._lpi()
                                                                                        } else {
                                                                                            if (o === 21) {
                                                                                                this._lbp = p._lpi()
                                                                                            } else {
                                                                                                if (o === 22) {
                                                                                                    this._law = p._lpr();
                                                                                                    if (this._law === -1) {
                                                                                                        this._law = undefined
                                                                                                    }
                                                                                                } else {
                                                                                                    if (o === 23) {
                                                                                                        this._lax = p._lpi()
                                                                                                    } else {
                                                                                                        if (o === 24) {
                                                                                                            this._ntd = false
                                                                                                        } else {
                                                                                                            if (o === 25) {
                                                                                                                var n = p._lpi();
                                                                                                                p._loj(p._loi() + n * 2)
                                                                                                            } else {
                                                                                                                if (o === 26) {
                                                                                                                    this._ntn = false
                                                                                                                } else {
                                                                                                                    if (o === 27) {
                                                                                                                        this._lbf = p._lpl()
                                                                                                                    } else {
                                                                                                                        if (o === 28) {
                                                                                                                            this._lbh = p._lpi()
                                                                                                                        } else {
                                                                                                                            if (o === 29) {
                                                                                                                                if (p._lpi() === 0) {
                                                                                                                                    this._lbu = this._lbw = p._lpm() / c
                                                                                                                                } else {
                                                                                                                                    this._lbu = p._lpm() / c;
                                                                                                                                    this._lbw = p._lpm() / c
                                                                                                                                }
                                                                                                                            } else {
                                                                                                                                if (o === 30) {} else {
                                                                                                                                    if (o === 31) {
                                                                                                                                        this._lbc = p._lpl();
                                                                                                                                        this._lbe = p._lpl()
                                                                                                                                    } else {
                                                                                                                                        if (o === 32) {
                                                                                                                                            this._nto = false
                                                                                                                                        } else {
                                                                                                                                            if (o === 33) {
                                                                                                                                                this._ntq = true
                                                                                                                                            } else {
                                                                                                                                                if (o === 34) {
                                                                                                                                                    this._nts = false
                                                                                                                                                } else {
                                                                                                                                                    if (o === 35) {
                                                                                                                                                        if (p._lpi() === 0) {
                                                                                                                                                            this._lby = this._lbz = p._lpm() / c
                                                                                                                                                        } else {
                                                                                                                                                            this._lby = p._lpm() / c;
                                                                                                                                                            this._lbz = p._lpm() / c;
                                                                                                                                                            this._lca = p._lpi()
                                                                                                                                                        }
                                                                                                                                                    } else {
                                                                                                                                                        if (o === 36) {
                                                                                                                                                            this._cyg = true
                                                                                                                                                        } else {
                                                                                                                                                            throw new Error("2711 " + o)
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    return function(m) {
        return new b(m)
    }
}();
var fpe = {
    _qgj: 0,
    _qgl: 1,
    _qgm: 2,
    _dgc: 3,
    _qgn: 4,
    _qgp: 5,
    _qgr: 0,
    _pfb: 1,
    _qgt: 2
};
var fib = function() {
    var a = function(c) {
        this._ww = -1;
        this._cxz = 64, this._cya = 64;
        this._cyc = 2;
        this._cye = 1;
        this._cyf = false;
        this._cyg = false;
        if (c !== undefined) {
            b.call(this, c)
        } else {
            throw new Error("2765 ")
        }
    };
    var b = function(d) {
        while (true) {
            var c = d._lpi();
            if (c === 0) {
                break
            } else {
                if (c === 1) {
                    this._ww = d._lpl();
                    if (this._ww === 65535) {
                        this._ww = -1
                    }
                } else {
                    if (c === 2) {
                        this._cxz = d._lpl() + 1;
                        this._cya = d._lpl() + 1
                    } else {
                        if (c === 3) {
                            d._lpj()
                        } else {
                            if (c === 4) {
                                this._cyc = d._lpi()
                            } else {
                                if (c === 5) {
                                    this._cye = d._lpi()
                                } else {
                                    if (c === 6) {
                                        this._cyf = true
                                    } else {
                                        if (c === 7) {
                                            this._cyg = true
                                        } else {
                                            throw new Error("2766 " + c)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    a.prototype._wr = function() {
        return this._ww
    };
    a.prototype._cyi = function() {
        return this._cxz
    };
    a.prototype._cyj = function() {
        return this._cya
    };
    a.prototype._cyl = function() {
        return this._cyc
    };
    a.prototype._cyn = function() {
        return this._cye
    };
    a.prototype._pno = function() {
        return this._cyf
    };
    a.prototype._nvj = function() {
        return this._cyg
    };
    return function(c) {
        return new a(c)
    }
}();
var fju = function() {
    var d = {};
    var b;
    var a;
    var c = 0;
    d._gmv = function() {
        return c
    };
    var g = 0;
    d._sdl = function() {
        return g
    };
    var e = null;
    d._sdn = function() {
        return e
    };
    d._bg = function(i, h) {
        b = i;
        a = h
    };
    d._kb = function() {
        c = 0;
        g = 0;
        e = null
    };
    d._sdp = function(h) {
        return e[h]
    };
    d._qf = function() {
        if (!b._lja(a)) {
            return false
        }
        if (e === null) {
            var j = b._lje(a, 0);
            if (j) {
                g = b._hcc(a)._cqh(0);
                e = new Array(g + 1);
                for (var i = 0; i < g; i++) {
                    var h = b.getFile(a, 0, i, feg._ciy);
                    if (h !== undefined) {
                        e[i] = fib(h);
                        c++
                    }
                }
                if (false) {}
                return true
            }
        }
        return false
    };
    return d
}();
var flq = function() {
    var a = function(b) {
        this._hw;
        this._ww = -1;
        this._cxz = 64;
        this._cya = 64;
        this._cyc = 2;
        this._cye = 1;
        this._cyf = false;
        this._cyg = false;
        if (b._hw !== undefined && b._ww !== undefined && b._cxz !== undefined && b._cya !== undefined && b._cyc !== undefined && b._cye !== undefined && b._cyf !== undefined && b._cyg !== undefined) {
            this._hw = b._hw;
            this._ww = b._ww;
            this._cxz = b._cxz;
            this._cya = b._cya;
            this._cyc = b._cyc;
            this._cye = b._cye;
            this._cyf = b._cyf;
            this._cyg = b._cyg
        } else {
            if (b._hqh !== undefined) {
                this._hw = b._hqh._hw;
                this._ww = b._hqh._ww;
                this._cxz = b._hqh._cxz;
                this._cya = b._hqh._cya;
                this._cyc = b._hqh._cyc;
                this._cye = b._hqh._cye;
                this._cyf = b._hqh._cyf;
                this._cyg = b._hqh._cyg
            } else {
                throw new Error("2337 ")
            }
        }
    };
    a.prototype._ih = function() {
        return this._hw
    };
    a.prototype._wr = function() {
        return this._ww
    };
    a.prototype._cyi = function() {
        return this._cxz
    };
    a.prototype._cyj = function() {
        return this._cya
    };
    a.prototype._cyl = function() {
        return this._cyc
    };
    a.prototype._cyn = function() {
        return this._cye
    };
    a.prototype._cyp = function() {
        return this._cyg
    };
    a.prototype._rv = function() {
        return {
            _hw: this._hw,
            _ww: this._ww,
            _cxz: this._cxz,
            _cya: this._cya,
            _cyc: this._cyc,
            _cye: this._cye,
            _cyf: this._cyf,
            _cyg: this._cyg
        }
    };
    return function(b) {
        return new a(b)
    }
}();
var fkw = function() {
    var d = {};
    var b;
    var a;
    var g;
    var c;
    d._gmv = function() {
        return c
    };
    var h;
    var e = null;
    d._bg = function(j) {
        if (j._bk !== undefined) {
            b = j._bk;
            a = j._bei;
            g = fju;
            g._bg(b, a)
        } else {
            c = j._hvd;
            h = j._pys;
            e = j._pyu;
            for (var i = 0; i < h; i++) {
                if (e[i] !== undefined) {
                    e[i] = flq({
                        _hqh: e[i]
                    })
                }
            }
        }
    };
    d._rv = function() {
        var j = new Array(h);
        for (var i = 0; i < h; i++) {
            if (e[i] !== undefined) {
                j[i] = e[i]._rv()
            }
        }
        return {
            _hvd: c,
            _pys: h,
            _pyu: j
        }
    };
    d._pyv = function() {
        return e !== null
    };
    d._bhw = function(i) {
        if (e === null) {
            throw new Error("2773 ")
        }
        return e[i]
    };
    d._bfc = function() {
        if (e === null) {
            var j = g._qf();
            if (j) {
                h = g._sdl();
                c = g._gmv();
                var k = g._sdn();
                e = new Array(h);
                for (var i = 0; i < h; i++) {
                    if (k[i] !== undefined) {
                        e[i] = flq({
                            _hw: i,
                            _ww: k[i]._wr(),
                            _cxz: k[i]._cyi(),
                            _cya: k[i]._cyj(),
                            _cyc: k[i]._cyl(),
                            _cye: k[i]._cyn(),
                            _cyf: k[i]._pno(),
                            _cyg: k[i]._nvj()
                        })
                    } else {
                        e[i] = null
                    }
                }
                g._kb();
                g = null
            }
        }
    };
    return d
}();
var fvh = function() {
    var a = function(q) {
        var h = {};
        var l = null;
        h._bhw = function() {
            return l
        };
        var c = null;
        h._bhy = function() {
            return c
        };
        var k = undefined;
        h._bhz = function() {
            return k
        };
        var i = 4294967295;
        var g = undefined;
        h._bib = function() {
            return g
        };
        var e = undefined;
        h._bic = function() {
            return e
        };
        var d = 0;
        h._bid = function() {
            return d
        };
        var b = 4294967295;
        h._wq = function() {
            return b
        };
        var p = 1,
            o = 1;
        var n = 0,
            m = 0;
        var j = 0;
        if (q._bie !== undefined && q._cbl !== undefined && q._cbm !== undefined && q._cbn !== undefined && q._bii !== undefined && q._bim !== undefined) {
            l = q._bie;
            c = new Float32Array(3);
            fqv.add(q._cbl, q._cbm, c);
            fqv.add(c, q._cbn, c);
            fqv.scale(c, 1 / 3);
            k = q._bif;
            i = q._bii;
            g = q._bik;
            e = q._bil;
            d = q._bim;
            b = i
        } else {
            if (q._hqh !== undefined) {
                l = fkw._bhw(q._hqh._biq);
                c = q._hqh._bio;
                k = q._hqh._bif === -1 ? undefined : q._hqh._bif;
                i = q._hqh._bii;
                g = q._hqh._bik;
                e = q._hqh._bil;
                b = i
            } else {
                throw new Error("2267 ")
            }
        }
        h._rv = function() {
            return {
                _biq: l._ih(),
                _bio: c,
                _bif: k === undefined ? -1 : k,
                _bii: i,
                _bik: g,
                _bil: e
            }
        };
        q = undefined;
        return h
    };
    return a
}();
var eql = function() {
    var a = function(b, c) {
        this._cfa = -1;
        this._ico = undefined;
        this._cej = undefined;
        this._icp = false;
        if (b !== undefined && c !== undefined) {
            this._ico = b;
            this._cej = c;
            if (this._ico !== _gkf) {
                this._cfa = b._bjx();
                this._gao();
                this._icp = true
            }
        } else {
            throw new Error("2580 ")
        }
    };
    a.prototype._icq = function() {
        return this._cfa
    };
    a.prototype._icr = function() {
        return this._ico
    };
    a.prototype._ict = function() {
        return this._cej
    };
    a.prototype._gao = function() {
        this._ico._gao(this)
    };
    a.prototype._bwa = function() {
        if (this._ico === undefined || this._ico === _gkf || this._cej === undefined) {
            return false
        }
        return true
    };
    a.prototype._icu = function(b) {
        if (!this._icp) {
            return false
        }
        if (b) {
            this._icp = false
        }
        return true
    };
    a.prototype._kb = function() {
        if (this._bwa()) {
            this._ico._gaq(this)
        } else {
            fra._cem(this)
        }
    };
    a.prototype._icw = function(b) {
        this._ico = b;
        this._cfa = b._bjx();
        this._ico._gao(this);
        this._icp = true
    };
    return function(b, c) {
        return new a(b, c)
    }
}();
var eub = function() {
    var a = function(g, b, e, d, c, i, h) {
        if (g === undefined || b === undefined || e === undefined || d === undefined) {
            throw new Error("2691 ")
        }
        this._bi = g;
        if (d.byteLength !== b * e * 6 * 4) {
            throw new Error("2692 ")
        }
        this._nng = d;
        this.width = b;
        this.height = e;
        this._gwx = -1;
        this._gwy = 0;
        this._gxa = true;
        if (c !== undefined) {
            this._gxa = c
        }
        if (this._gxa && this.width !== this.height) {
            throw new Error("2693 ")
        }
        this.filter = true;
        if (i !== undefined) {
            this.filter = i
        }
        this._gwz = false;
        if (h !== undefined) {
            this._gwz = h
        }
        _qkb(this, fnv, fqi._goq)
    };
    _qjz(fnv, a);
    a.prototype._kb = function() {
        if (this._gwx !== -1) {
            this._bi.gl.deleteTexture(this._gwx);
            this._gwx = -1
        } else {
            ArrayBufferRecycler._hfm(this._nng);
            this._nng = undefined
        }
    };
    a.prototype._gxd = function() {
        return this._gwy
    };
    a.prototype._ccj = function() {
        var e = this._bi.gl;
        this._gwx = e.createTexture();
        this._bi.bindTexture(fce._mbh, this._gwx, e.TEXTURE_CUBE_MAP);
        e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, this._gwz);
        var d = this._nng.byteLength / 6;
        for (var b = 0; b < 6; b++) {
            var c = new Uint8Array(this._nng, d * b, d);
            this._gwy += d;
            e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + b, 0, e.RGBA, this.width, this.height, 0, e.RGBA, e.UNSIGNED_BYTE, c)
        }
        if (this.filter) {
            e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAG_FILTER, e.LINEAR)
        } else {
            _bi.gl.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAG_FILTER, e.NEAREST)
        }
        if (this._gxa) {
            e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_NEAREST);
            e.generateMipmap(e.TEXTURE_CUBE_MAP)
        } else {
            if (this.filter) {
                e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MIN_FILTER, e.LINEAR)
            } else {
                e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MIN_FILTER, e.NEAREST)
            }
        }
        e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
        e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
        this._nng = undefined
    };
    a.prototype._gbs = function() {
        if (this._gwx === -1) {
            throw new Error("2694 ")
        }
        return this._gwx
    };
    return function(g, b, e, d, c, i, h) {
        return new a(g, b, e, d, c, i, h)
    }
}();
var euu = function() {
    var k = {};
    var i;
    var g;
    var n = 0;
    var a = 1;
    var b = 2;
    var h = 3;
    var v = 4;
    var r;
    var q;
    var o;
    var m = false;
    k._djc = function() {
        return m
    };
    var j;
    var s = frf({
        _tu: 16384 * 512,
        _tv: function(x) {
            x._qcr()
        },
        _tw: function(x) {
            x._qcs()
        }
    });
    var l = function(x) {
        if (x._bi !== undefined) {
            i = x._bi;
            g = x._bk;
            r = x._bdu;
            q = x._bdv;
            o = x._bdy;
            m = i._djc()
        } else {
            m = x._gpt
        }
        fbl._bg({
            _bi: i,
            _cee: k,
            _lic: epn
        });
        fra._bg({
            _bi: i,
            _cee: k,
            _bk: g,
            _ceg: eql
        })
    };
    k._bg = l;
    k._lie = function(x, B, y) {
        var D = x + Math.pow(2, 36 + n) + ((y ? 1 : 0) * Math.pow(2, 35));
        var A = s.find(D);
        if (A !== null) {
            return A
        } else {
            var z = d(n, x, B, y);
            if (z === _gkf) {
                return _gkf
            }
            if (z !== undefined) {
                if (y && !z._lii) {
                    throw new Error("2609 " + x + "2609 ")
                }
                var C = erp(i, B, B, z._lih, true, true, true, z._lii);
                s.put(C, z.width * z.height, D);
                return C
            }
            return undefined
        }
    };
    var p = k._gal;
    k._lif = function(z) {
        if (!fjf._sxk()) {
            return _gkf
        }
        var y = fjf._nuq(z);
        if (y === undefined) {
            throw new Error("2610 " + z)
        }
        if (!y._dso()) {
            throw new Error("2611 " + z + "2611 ")
        }
        var B = y._rqy();
        var x = y.getSize();
        var A = d(v, z, x, B);
        if (A === _gkf) {
            return _gkf
        }
        if (A === undefined) {
            return undefined
        }
        if (A._lih.byteLength !== x * x * 6 * 4) {
            throw new Error("2612 " + z + "2612 ")
        }
        return eub(i, x, x, A._lih, false)
    };
    var e = k._lif;
    k._lig = function(R, J, z, M) {
        var P = undefined;
        if (R === n || R === v) {
            P = r
        } else {
            if (R === h) {
                P = q
            }
        }
        if (!g._lja(P)) {
            return _gkf
        }
        var Q = g._ljc(P, J, 0, flx._qk);
        if (R !== n && M) {
            throw new Error("2613 ")
        }
        var A = undefined;
        if (M && i._djc()) {
            A = g._ljc(q, J, 0, flx._qk)
        }
        if (Q === undefined) {
            return undefined
        }
        if (!Q || A === false) {
            return _gkf
        }
        var y = g.getFile(P, J, 0, feg._ciy);
        var G = y.getData();
        var F = false;
        if (A) {
            var S = g.getFile(q, J, 0, feg._ciy);
            var N = new Uint32Array(S.getData());
            var O = new Uint8Array(G);
            var x = new Float32Array(z * z * 4);
            var I = 0;
            var T = z * z;
            for (var C = 0; C < T; C++) {
                var E = O[C * 4 + 0];
                var H = O[C * 4 + 1];
                var K = O[C * 4 + 2];
                var L = O[C * 4 + 3];
                var D = N[C] & 4095;
                var B = 1 + (31 * D) / 4096;
                x[C * 4 + 0] = (E * B) / 255;
                x[C * 4 + 1] = (H * B) / 255;
                x[C * 4 + 2] = (K * B) / 255;
                x[C * 4 + 3] = L / 255
            }
            G = x.buffer;
            F = true
        }
        return {
            _lih: G,
            _lii: F,
            width: z,
            height: z
        }
    };
    var d = k._lig;
    var u = function() {
        fbl._bfc();
        fra._bfc()
    };
    k._bfc = u;
    var t = function() {
        fbl._bfd();
        fra._bfd();
        s._erk(100)
    };
    k._bfd = t;
    var c = function() {
        fbl._lij()
    };
    k._lij = c;
    return k
}();
var erd = function() {
    var g = new Float32Array(3);
    var k = new Float32Array(4);
    var l = fdd();
    var c = new Float32Array(elr._ssp * 12);
    for (var d = 0; d < 12; d++) {
        c[d] = elr._rz[d]
    }
    var b = new Float32Array(elr._ssr * 4);
    for (var d = 0; d < 4; d++) {
        b[d] = elr._ssu[d]
    }
    var a = 0;
    a += 3 * 4;
    a += 2 * 2;
    a += 1 * 4;
    a += 4 * 1;
    a += 2 * 4;
    a += 4 * 2;
    a += 4 * 1;
    a += 1 * 1;
    a += 2 * 1;
    a += 1;
    var i = function(p, o, q, r, j, n, s) {
        this._cab = 0;
        this._sot = new Array(0);
        this._sou = 0;
        this._sov = new Array(0);
        this._hvf = 1;
        this._hvh = new Array(0);
        this._sow = undefined;
        this._soy = 1;
        this._spa = new Array(0);
        this._dcd;
        this._dtm;
        this._cyc;
        this._spc;
        this._dsr;
        this._dsp;
        this._cad;
        this._cah;
        this._caf;
        this._hvq;
        this._hwn;
        this._hvr;
        this._cai = {};
        this._hva = undefined;
        this._hvb = undefined;
        this._bg(p, o, q, r, j, n, s)
    };
    i.prototype._bg = function(r, s, u, p, n, t, o) {
        if (r !== undefined) {
            if (u !== undefined) {
                this._dcd = u
            } else {
                this._dcd = r._dvt()
            }
            this._dtm = r._dvu();
            this._cyc = r._cyl();
            this._spc = r._dvj() > 0;
            this._dsr = r._rqt();
            this._dsp = r._rqs()
        } else {
            if (s !== undefined) {
                if (u !== undefined) {
                    this._dcd = u
                }
                this._dtm = 0;
                this._cyc = evu._bje;
                this._spc = false;
                this._dsr = false;
                this._dsp = false
            } else {
                if (n !== undefined) {
                    this._cab = n._cab;
                    this._sou = n._sou;
                    this._hvf = n._hvf;
                    this._hvh = n._hvh;
                    this._soy = n._soy;
                    this._spa = n._spa;
                    this._dcd = n._dcd;
                    this._dtm = n._dtm;
                    this._cyc = n._cyc;
                    this._spc = n._spc;
                    this._dsr = n._dsr;
                    this._dsp = n._dsp;
                    this._cad = n._cad;
                    this._caf = n._caf;
                    this._hvq = n._hvq;
                    this._hvr = n._hvr;
                    this._hvb = n._hvb
                } else {
                    if (o !== undefined) {
                        this._cab = o._lpl();
                        this._sou = o._lpl();
                        this._hvf = o._lpl();
                        this._hvh = [];
                        for (var q = 0; q < this._hvf - 1; q++) {
                            this._hvh[o._lpl()] = o._lpl()
                        }
                        this._soy = o._lpl();
                        this._spa = [];
                        for (var q = 0; q < this._soy - 1; q++) {
                            this._spa[o._lpl()] = o._lpl()
                        }
                        this._dcd = o._lpi();
                        this._dtm = o._lpi();
                        this._cyc = o._lpi();
                        this._hvn = o._lpi();
                        this._hvo = o._lpi();
                        this._spc = o._lpi() === 1;
                        this._dsr = o._lpi() === 1;
                        this._dsp = o._lpi() === 1;
                        var j = o._lpl();
                        if (j > 0) {
                            this._hvb = new Array(j);
                            for (var q = 0; q < this._hvb.length; q++) {
                                this._hvb[q] = {
                                    _dsb: o._lpp(),
                                    _cas: o._lpp(),
                                    _hvt: o._lpp()
                                }
                            }
                        }
                        this._cad = new ArrayBuffer(o._lpp());
                        o._lpw(this._cad, 0, this._cad.byteLength);
                        this._hvq = new ArrayBuffer(o._lpp());
                        o._lpw(this._hvq, 0, this._hvq.byteLength)
                    } else {
                        if (p !== undefined) {
                            this._dcd = p._dvt();
                            this._dtm = p._dvu();
                            this._cyc = p._cyl();
                            this._spc = p._spg();
                            this._dsr = p._rqt();
                            this._dsp = p._rqs();
                            this._hva = new Array(0);
                            this._hwb(p, t)
                        } else {
                            throw new Error("2944 ")
                        }
                    }
                }
            }
        }
    };
    i.prototype._glw = function() {
        return this._cab
    };
    i.prototype._spd = function(j) {
        return this._sot[j]
    };
    i.prototype._spf = function() {
        return this._sou
    };
    i.prototype._dvt = function() {
        return this._dcd
    };
    i.prototype._dvu = function() {
        return this._dtm
    };
    i.prototype._cyl = function() {
        return this._cyc
    };
    i.prototype._spg = function() {
        return this._spc
    };
    i.prototype._rqt = function() {
        return this._dsr
    };
    i.prototype._rqs = function() {
        return this._dsp
    };
    i.prototype._hvy = function() {
        return this._cad
    };
    i.prototype._hwa = function() {
        return this._hvq
    };
    i.prototype._hwb = function(n, j) {
        this._cab += n._glw();
        this._sou += n._spf();
        this._hva.push({
            _sph: n,
            _dsb: j
        })
    };
    i.prototype._rv = function(o, p) {
        var n = o ? this._cad.slice(0) : this._cad;
        var j = o ? this._hvq.slice(0) : this._hvq;
        if (p !== undefined) {
            p.push(n);
            p.push(j)
        }
        return {
            _cab: this._cab,
            _sou: this._sou,
            _hvf: this._hvf,
            _hvh: this._hvh,
            _soy: this._soy,
            _spa: this._spa,
            _dcd: this._dcd,
            _dtm: this._dtm,
            _cyc: this._cyc,
            _spc: this._spc,
            _dsr: this._dsr,
            _dsp: this._dsp,
            _cad: n,
            _caf: this._caf,
            _hvq: j,
            _hvr: this._hvr,
            _hvb: this._hvb
        }
    };
    i.prototype._dsf = function(n) {
        n._lhi(this._cab);
        n._lhi(this._sou);
        n._lhi(this._hvf);
        for (var j = 0; j < this._hvh.length; j++) {
            if (this._hvh[j] !== undefined) {
                n._lhi(j);
                n._lhi(this._hvh[j])
            }
        }
        n._lhi(this._soy);
        for (var j = 0; j < this._spa.length; j++) {
            if (this._spa[j] !== undefined) {
                n._lhi(j);
                n._lhi(this._spa[j])
            }
        }
        n._lhh(this._dcd);
        n._lhh(this._dtm);
        n._lhh(this._cyc);
        n._lhh(this._hvn);
        n._lhh(this._hvo);
        n._lhh(this._spc ? 1 : 0);
        n._lhh(this._dsr ? 1 : 0);
        n._lhh(this._dsp ? 1 : 0);
        if (this._hvb !== undefined) {
            n._lhi(this._hvb.length);
            for (var j = 0; j < this._hvb.length; j++) {
                n._loz(this._hvb[j]._dsb);
                n._loz(this._hvb[j]._cas);
                n._loz(this._hvb[j]._hvt)
            }
        } else {
            n._lhi(0)
        }
        n._loz(this._cad.byteLength);
        n._lpe(this._cad, 0, this._cad.byteLength);
        n._loz(this._hvq.byteLength);
        n._lpe(this._hvq, 0, this._hvq.byteLength)
    };
    i.prototype._hwe = function() {
        if (this._hvf > 1 || this._soy > 1) {
            return true
        } else {
            return false
        }
    };
    i.prototype._hwg = function() {
        return this._caf + this._hvr
    };
    i.prototype._hwi = function(j) {
        if (this._dcd !== j._dvt()) {
            return false
        }
        if (this._cyc !== j._cyl()) {
            return false
        }
        if (this._spc !== j._spg()) {
            return false
        }
        if (this._dsr !== j._rqt()) {
            return false
        }
        if (this._dsp !== j._rqs()) {
            return false
        }
        if ((this._cab + j._glw()) * 3 > 65535) {
            return false
        }
        if (this._dcd === fds._nyl && this._dtm !== j._dvu()) {
            return false
        }
        return true
    };
    i.prototype._hwj = function() {
        this._hva.sort(m);
        this._cad = new ArrayBuffer(this._sou * a);
        var x = new Uint8Array(this._cad);
        var o = 0;
        this._hvq = new ArrayBuffer(this._cab * 3 * 2);
        var r = new Uint16Array(this._hvq);
        var p = 0;
        var s = p;
        var y = 0;
        for (var n = 0; n < this._hva.length; n++) {
            var z = this._hva[n]._sph;
            var t = this._hva[n]._dsb;
            var j = new Uint16Array(z._hwa());
            var v = o / a;
            if (t !== undefined && (n === 0 || this._hva[n - 1]._dsb !== t)) {
                s = p;
                y = n
            }
            for (var u = 0; u < j.length; u++) {
                r[p++] = j[u] + v
            }
            if (t !== undefined && (n === this._hva.length - 1 || this._hva[n + 1]._dsb !== t)) {
                if (this._hvb === undefined) {
                    this._hvb = new Array(0)
                }
                this._hvb.push({
                    _dsb: t,
                    _cas: s,
                    _hvt: p
                })
            }
            var q = new Uint8Array(z._hvy());
            x.set(q, o);
            o += q.length
        }
        this._hvf = 1;
        this._hvh = [];
        this._soy = 1;
        this._spa = [];
        this._hva = undefined
    };
    var m = function(n, j) {
        if (n._dsb === undefined) {
            return -1
        }
        if (j._dsb === undefined) {
            return 1
        }
        return n._dsb - j._dsb
    };
    i.prototype._spj = function(j, n, o, r, p) {
        if (p !== undefined && this._dcd !== p) {
            return false
        }
        if (n !== undefined) {
            if (this._cyc !== n._cyl()) {
                return false
            }
            if (p === undefined && this._dcd !== n._dvt()) {
                return false
            }
            if (this._spc !== (n._dvj() > 0)) {
                return false
            }
            if (this._dsr !== n._rqt()) {
                return false
            }
            if (this._dsp !== n._rqs()) {
                return false
            }
            if (this._dcd === fds._nyl && this._dtm !== n._dvu()) {
                return false
            }
        }
        if (o !== undefined) {
            var q = 0;
            if (o[0] !== undefined && this._hvh[o[0]] === undefined) {
                q++
            }
            if (o[1] !== undefined && this._hvh[o[1]] === undefined) {
                q++
            }
            if (o[2] !== undefined && this._hvh[o[2]] === undefined) {
                q++
            }
            if (this._hvf + q > elr._ssp) {
                return false
            }
        }
        if (r !== undefined) {
            if (this._spa[r] === undefined && this._soy + 1 > elr._ssr) {
                return false
            }
        }
        if ((this._cab + 1) * 3 > 65535) {
            return false
        }
        this._sot.push(j);
        this._cab++;
        if (o !== undefined) {
            if (o[0] !== undefined && this._hvh[o[0]] === undefined) {
                this._hvh[o[0]] = this._hvf++
            }
            if (o[1] !== undefined && this._hvh[o[1]] === undefined) {
                this._hvh[o[1]] = this._hvf++
            }
            if (o[2] !== undefined && this._hvh[o[2]] === undefined) {
                this._hvh[o[2]] = this._hvf++
            }
        }
        if (r !== undefined) {
            if (this._spa[r] === undefined) {
                this._spa[r] = this._soy++
            }
        }
        return true
    };
    i.prototype._spl = function(j) {
        if (j._gmu()) {
            this._sot.sort(function(n, o) {
                return j._pii(n) - j._pii(o)
            })
        }
    };
    i.prototype._spn = function(A, j, J, N) {
        var r = this._sot.length * 3;
        this._hvq = new ArrayBuffer(r * 2);
        var s = new Uint16Array(this._hvq);
        var T = new Float32Array(6);
        for (var M = 0; M < this._sot.length; M++) {
            var z = this._sot[M];
            var W = A._gms(z);
            var V = A._gmg(z);
            var G;
            var F = 0;
            var E = 0;
            var K = 0;
            var I = 0;
            var H = 0;
            if (V !== undefined) {
                var o = fjf._nuq(V);
                if (o !== undefined) {
                    F = o._duy();
                    E = o._duz();
                    if (N !== undefined) {
                        if (o._dsi()) {
                            if (o._rqy() && euu._djc()) {
                                K = N._hde()._pog(V);
                                G = N._hde()._cbt(V);
                                I = 1
                            } else {
                                K = N._hdd()._pog(V);
                                G = N._hdd()._cbt(V)
                            }
                        }
                        if (o._dsj()) {
                            H = N._hdd()._pog(V);
                            if (G === undefined) {
                                G = N._hdd()._cbt(V)
                            }
                        }
                    }
                }
            } else {
                o = undefined
            }
            if (G === undefined) {
                G = 64
            }
            var x = (K !== 0 || H !== 0);
            var p;
            if (A._gmq(z)) {
                p = 0
            } else {
                p = A._gmo(z, o)
            }
            var Q = A._gmp(z);
            j[z] = A._glz(z);
            A._gmb(z, T);
            var U = A._bib(z);
            var S = 0,
                R = 0,
                O = 0,
                L = 0;
            var y = 0;
            if (o !== undefined) {
                S = (o._dvv() === eqa._cgm || o._dvv() === eqa._lhe) ? 1 : 0;
                O = (o._dvv() === eqa._cgo) ? 1 : 0;
                R = (o._dvw() === eqa._cgm || o._dvw() === eqa._lhe) ? 1 : 0;
                L = (o._dvw() === eqa._cgo) ? 1 : 0;
                y = o._dvj()
            }
            for (var t = 0; t < 3; t++) {
                var B = A._glx(z, t);
                if (J[B] === undefined) {
                    J[B] = {
                        _spo: fqv.create(j[z]),
                        _dpe: 1
                    }
                } else {
                    fqv.add(J[B]._spo, j[z]);
                    J[B]._dpe++
                }
                var C = A._glq(B);
                var v = 0.01,
                    u = 0.01;
                if (N !== undefined && x) {
                    v = T[t];
                    u = T[t + 3]
                }
                var D = undefined;
                if (Q === true) {
                    D = z
                }
                var X = undefined;
                var q = this._sov[B];
                var P = false;
                if (q === undefined) {
                    this._sov[B] = q = new Array(0);
                    X = this._sou++
                } else {
                    for (var Y = 0; Y < q.length; Y++) {
                        var n = q[Y];
                        if (n._sps === W && n._spu === V && n._spw === S && n._spx === R && n._spz === O && n._sqa === L && n._gmc === v && n._gmd === u && n._bii === p && n._spv === U && n._sqk === D && n._sql === C && n._hlt === y) {
                            X = n._spq;
                            P = true;
                            break
                        }
                    }
                    if (!P) {
                        X = this._sou++
                    }
                }
                if (!P) {
                    q.push({
                        _spq: X,
                        _sps: W,
                        _spu: V,
                        _bii: p,
                        _spv: U,
                        _gmc: v,
                        _gmd: u,
                        _spw: S,
                        _spx: R,
                        _spz: O,
                        _sqa: L,
                        _sqb: K,
                        _sqc: I,
                        _sqd: H,
                        _sqf: G,
                        _sqg: F,
                        _sqi: E,
                        _sqk: D,
                        _sql: C,
                        _hlt: y
                    })
                }
                s[M * 3 + t] = X
            }
        }
    };
    i.prototype._hwm = function(H, F, J, x, v) {
        this._cad = new ArrayBuffer(this._sou * a);
        var s = new Float32Array(this._cad);
        var D = new Uint16Array(this._cad);
        var r = new Int16Array(this._cad);
        var o = new Uint8Array(this._cad);
        for (var I = 0; I < this._sov.length; I++) {
            var G = this._sov[I];
            if (G === undefined) {
                continue
            }
            for (var z = 0; z < G.length; z++) {
                var j = G[z];
                var n = j._spq * a;
                var y = n / 4;
                var u = H._gll(I);
                s[y++] = u;
                var t = H._gln(I);
                s[y++] = t;
                var q = H._glp(I);
                s[y++] = q;
                var p;
                if (j._sqk > -1) {
                    p = J[j._sqk]
                } else {
                    p = F[I]._spo
                }
                this._sqm(D, 2 * (y++), p[0], p[1], p[2]);
                s[y++] = j._hlt;
                n = 4 * (y++);
                var A;
                if (j._bii !== undefined) {
                    A = j._bii
                } else {
                    A = j._sql
                }
                o[n++] = (A >> 24) & 255;
                o[n++] = (A >> 16) & 255;
                o[n++] = (A >> 8) & 255;
                o[n++] = A & 255;
                s[y++] = j._gmc;
                s[y++] = j._gmd;
                var E = y * 2;
                D[E++] = j._sqb;
                D[E++] = j._sqf;
                var C = j._sqg * 8192;
                C += 32768;
                var B = j._sqi * 8192;
                B += 32768;
                D[E++] = C;
                D[E++] = B;
                n = E * 2;
                o[n++] = j._spw;
                o[n++] = j._spx;
                o[n++] = j._spz;
                o[n++] = j._sqa;
                o[n++] = j._sqc;
                if (H._bhz(I) !== undefined) {
                    o[n++] = this._hvh[H._bhz(I)]
                } else {
                    o[n++] = 0
                }
                if (j._spv !== undefined) {
                    o[n++] = this._spa[j._spv]
                } else {
                    o[n++] = 0
                }
                n++;
                if (n % a !== 0) {
                    throw new Error("2945 ")
                }
                if (u < x[0]) {
                    x[0] = u
                }
                if (u > v[0]) {
                    v[0] = u
                }
                if (t < x[1]) {
                    x[1] = t
                }
                if (t > v[1]) {
                    v[1] = t
                }
                if (q < x[2]) {
                    x[2] = q
                }
                if (q > v[2]) {
                    v[2] = q
                }
            }
        }
        s = undefined;
        D = undefined;
        r = undefined;
        o = undefined;
        this._sot = undefined;
        this._sov = undefined
    };
    i.prototype._sqm = function(v, r, s, q, o) {
        var n = Math.sqrt(s * s + q * q + o * o);
        var j = Math.sqrt(o * 8 / n + 8);
        var u = (s / (n * j)) + 0.5;
        var t = (q / (n * j)) + 0.5;
        v[r++] = (u * 65535);
        v[r++] = (t * 65535)
    };
    i.prototype._ccj = function(j) {
        var n = j.gl;
        this._cah = n.createBuffer();
        n.bindBuffer(n.ARRAY_BUFFER, this._cah);
        n.bufferData(n.ARRAY_BUFFER, this._cad, n.DYNAMIC_DRAW);
        this._hwn = n.createBuffer();
        n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, this._hwn);
        n.bufferData(n.ELEMENT_ARRAY_BUFFER, this._hvq, n.DYNAMIC_DRAW);
        this._caf = this._cad.byteLength;
        this._cad = undefined;
        this._hvr = this._hvq.byteLength;
        this._hvq = undefined
    };
    i.prototype._kb = function(n) {
        if (n !== undefined) {
            var o = n._diz();
            if (o !== undefined) {
                for (var j in this._cai) {
                    o.deleteVertexArrayOES(this._cai[j])
                }
                this._cai = {}
            }
        }
        if (this._cad !== undefined) {
            this._cad = undefined
        }
        if (this._cah !== undefined) {
            n.gl.deleteBuffer(this._cah);
            this._cah = undefined
        }
        if (this._hvq !== undefined) {
            this._hvq = undefined
        }
        if (this._hwn !== undefined) {
            n.gl.deleteBuffer(this._hwn);
            this._hwn = undefined
        }
    };
    i.prototype.transform = function(o) {
        var p = a / 4;
        var j = new Float32Array(this._cad);
        for (var n = 0; n < this._sou; n++) {
            g[0] = j[n * p + 0];
            g[1] = j[n * p + 1];
            g[2] = j[n * p + 2];
            evs._gnd(o, g);
            j[n * p + 0] = g[0];
            j[n * p + 1] = g[1];
            j[n * p + 2] = g[2]
        }
    };
    i.prototype.translate = function(o) {
        var p = a / 4;
        var j = new Float32Array(this._cad);
        for (var n = 0; n < this._sou; n++) {
            j[n * p + 0] += o[0];
            j[n * p + 1] += o[1];
            j[n * p + 2] += o[2]
        }
    };
    i.prototype.rotate = function(p, u) {
        var t = a / 4;
        var s = a / 2;
        var j = new Float32Array(this._cad);
        var r;
        if (u) {
            r = new Uint16Array(this._cad)
        }
        for (var n = 0; n < this._sou; n++) {
            g[0] = j[n * t + 0];
            g[1] = j[n * t + 1];
            g[2] = j[n * t + 2];
            fqr._gnd(p, g);
            j[n * t + 0] = g[0];
            j[n * t + 1] = g[1];
            j[n * t + 2] = g[2];
            if (u) {
                g[0] = r[n * s + 6] / 16384 - 2;
                g[1] = r[n * s + 7] / 16384 - 2;
                g[2] = 0;
                var o = fqv._eir(g, g);
                var q = Math.sqrt(1 - o / 4);
                g[0] *= q;
                g[1] *= q;
                g[2] = 1 - o / 2;
                fqr._gnd(p, g);
                this._sqm(r, n * s + 6, g[0], g[1], g[2])
            }
        }
    };
    i.prototype._dsg = function(q, v) {
        var u = a / 4;
        var t = a / 2;
        var j = new Float32Array(this._cad);
        var s;
        if (v) {
            s = new Uint16Array(this._cad)
        }
        for (var n = 0; n < this._sou; n++) {
            g[0] = j[n * u + 0];
            g[2] = j[n * u + 2];
            if (q == 1) {
                j[n * u + 0] = g[2];
                j[n * u + 2] = -g[0]
            } else {
                if (q == 2) {
                    j[n * u + 0] = -g[0];
                    j[n * u + 2] = -g[2]
                } else {
                    if (q == 3) {
                        j[n * u + 0] = -g[2];
                        j[n * u + 2] = g[0]
                    }
                }
            }
            if (v) {
                g[0] = s[n * t + 6] / 16384 - 2;
                g[1] = s[n * t + 7] / 16384 - 2;
                g[2] = 0;
                var o = fqv._eir(g, g);
                var r = Math.sqrt(1 - o / 4);
                g[0] *= r;
                g[1] *= r;
                g[2] = 1 - o / 2;
                if (q == 1) {
                    var p = g[2];
                    g[2] = -g[0];
                    g[0] = p
                } else {
                    if (q == 2) {
                        g[0] = -g[0];
                        g[2] = -g[2]
                    } else {
                        if (q == 3) {
                            var p = -g[2];
                            g[2] = g[0];
                            g[0] = p
                        }
                    }
                }
                this._sqm(s, n * t + 6, g[0], g[1], g[2])
            }
        }
    };
    i.prototype._hwp = function(n, v, t, q, o, r, s) {
        var u = a / 4;
        var j = new Float32Array(this._cad);
        for (var p = 0; p < this._sou; p++) {
            j[p * u + 1] = s(n, v, t, q, o, r, j[p * u + 0], j[p * u + 1], j[p * u + 2])
        }
    };
    i.prototype._hwr = function(r) {
        var n = a / 2;
        var q = new Uint8Array(this._cad);
        var j = new Uint16Array(this._cad);
        for (var o = 0; o < this._sou; o++) {
            var t = j[o * n + 16];
            var p = q[o * a + 44] === 1;
            var s;
            if (t === 0) {
                s = 0
            } else {
                if (!p) {
                    s = r._hcs[t]
                } else {
                    s = r._hcu[t]
                }
            }
            j[o * n + 16] = s
        }
    };
    var h = function() {
        _qkb(this, enc);
        this._sph = undefined;
        this._cco = undefined;
        this._hws = undefined;
        this._cdc = undefined;
        this._sqn = undefined;
        this._bi = undefined;
        this._hwu = undefined;
        this._ewv = undefined;
        this._dtm = undefined;
        this._ccr = undefined;
        this._cct = undefined;
        this._ccu = undefined;
        this._cac = undefined;
        this._ccw = undefined;
        this._sqo = undefined;
        this._hoh = undefined;
        this._hwv = undefined
    };
    _qjz(enc, h);
    h.prototype._cdf = function() {
        this._cco._pek(this._hws);
        this._sph._cdu(this._cdc, this._sqn, this._bi, this._hwu, this._ewv, this._ewx, this._dtm, this._ccr, this._cct, this._ccu, this._cac, this._ccw, this._sqo, this._hoh, this._hwv);
        this._bi._dle()
    };
    var e = function() {
        return new h()
    };
    i.prototype._cdp = function(s, A, C, j, o, u, r, q, E, n, G, x, B) {
        l._yh();
        o._qhj(l);
        var I = false;
        var H = etb._ljx;
        if ((l._xv(fct._dqv) || l._xv(fct._dpw)) && (this._dcd === fds._lmj || (l._xv(fct._dqf)) || (n !== undefined && n[3] < 0) || (x !== undefined && x._rm()))) {
            I = true;
            H = etb._cds
        }
        if (this._dsp || !C._rxz()) {
            l.disable(fct._dpn);
            l.disable(fct._dpp);
            l.disable(fct._dpr);
            l.disable(fct._dps);
            l.disable(fct._dpz);
            l.enable(fct._dpu)
        }
        if ((l._xv(fct._dqv) || l._xv(fct._dpw)) && l._qhr(fct._od) && l._qhr(fct._dqw)) {
            if (this._spc === true) {
                if (l._xv(fct._dpp)) {
                    l.enable(fct._dpr)
                } else {
                    l.enable(fct._drn)
                }
            }
            if (this._dsr) {
                if (C._ryh(eqs._mbr)) {
                    l.enable(fct._dql)
                } else {
                    l.enable(fct._drn)
                }
            }
        }
        var z = this._dtm;
        if (this._dcd === fds._nyl) {
            l.enable(fct._drk)
        } else {
            if (I) {
                l.enable(fct._drl)
            }
        }
        var F = esi._ejp(j.id, l);
        var t = F._njk();
        var p = fdh._jp(eva._gae, e);
        var J = fij._bc();
        var v = J._qow(eqs._mgf);
        var D = v._peh();
        var y = -1;
        if (I) {
            y = s._gyx()
        }
        p._fem = I;
        p._fen = y;
        p._ccl = F._bjx();
        p._ewx = t;
        p._cdr = s._cdr;
        p._sph = this;
        p._cco = v;
        p._hws = D;
        p._cdc = F;
        p._sqn = I;
        p._bi = A;
        p.priority = H;
        p._hwu = C;
        p._ewv = j;
        p._dtm = z;
        p._ccr = u;
        p._cct = r;
        p._ccu = q;
        p._cac = E;
        p._ccw = n;
        p._sqo = G;
        p._hoh = x;
        p._hwv = B;
        return p
    };
    i.prototype._cdt = function(D, v, z, j, u, s, q, B, p, n, A, t) {
        l._yh();
        j._qhj(l);
        var o = false;
        if ((l._xv(fct._dqv) || l._xv(fct._dpw)) && (this._dcd === fds._lmj || (l._xv(fct._dqf)) || (p !== undefined && p[3] < 0) || (A !== undefined && A._rm()))) {
            o = true
        }
        if (this._dsp || !v._rxz()) {
            l.disable(fct._dpn);
            l.disable(fct._dpp);
            l.disable(fct._dpr);
            l.disable(fct._dps);
            l.disable(fct._dpz);
            l.enable(fct._dpu)
        }
        if ((l._xv(fct._dqv) || l._xv(fct._dpw)) && l._qhr(fct._dqw) && l._qhr(fct._od)) {
            if (this._spc === true) {
                if (l._xv(fct._dpp)) {
                    l.enable(fct._dpr)
                } else {
                    l.enable(fct._drn)
                }
            }
            if (this._dsr) {
                if (v._ryh(eqs._mbr)) {
                    l.enable(fct._dql)
                } else {
                    l.enable(fct._drn)
                }
            }
        }
        var C = this._dtm;
        if (this._dcd === fds._nyl) {
            l.enable(fct._drk)
        } else {
            if (o) {
                l.enable(fct._drl)
            }
        }
        var y = esi._ejp(z.id, l);
        var r = y._njk();
        var x = r._qhl(l);
        this._cdu(y, o, D, v, z, r, C, u, s, q, B, p, n, A, t);
        return x
    };
    i.prototype._sqq = function() {
        var n = 0;
        for (var j = 0; j < this._hvh.length; j++) {
            if (this._hvh[j] !== undefined) {
                n++
            }
        }
        this._sow = new Int32Array(n * 2);
        var o = 0;
        for (var j = 0; j < this._hvh.length; j++) {
            if (this._hvh[j] == undefined) {
                continue
            }
            this._sow[o++] = j;
            this._sow[o++] = this._hvh[j]
        }
        this._hvh._sow = this._sow
    };
    i.prototype._sqs = function(p, j, o, q) {
        if (j._xv(fct._nv)) {} else {
            if (j._xv(fct._od)) {} else {
                if (j._xv(fct._dqw)) {} else {
                    if ((!j._xv(fct._dql) && j._xv(fct._dpn)) || j._xv(fct._dpp)) {
                        o._rxy(p)
                    }
                    if (j._xv(fct._dps)) {
                        o._ryi(eqs._mgf, p)
                    }
                    if (j._xv(fct._dpz)) {
                        var n = o._qow(eqs._mgg);
                        p._nky(elp._dyl, n._gda());
                        n._gdg(p)
                    }
                    if (j._xv(fct._dqf)) {
                        o._ryi(eqs._mgh, p)
                    }
                    if (j._xv(fct._dqh)) {
                        o._ryi(eqs._mgm, p)
                    }
                    if (j._xv(fct._drh)) {
                        o._ryi(eqs._drh, p)
                    }
                    if (j._xv(fct._dqj)) {
                        o._ryi(eqs._dqj, p)
                    }
                    if (j._xv(fct._dql)) {
                        o._ryi(eqs._mbr, p)
                    }
                }
            }
        }
        if (j._xv(fct._dqq)) {
            p._nky(elp._ebh, etf._nhr())
        }
    };
    i.prototype._squ = function(o, j, s, q, p, r, n, t) {
        o._nky(elp._dxf, q);
        if (j._xv(fct._nv) || (!j._xv(fct._od) && !j._xv(fct._dqw) && (j._xv(fct._dpn) || j._xv(fct._dpp) || j._xv(fct._dql)))) {
            o._nky(elp._dxh, p)
        }
        if (j._xv(fct._dpw)) {
            fbl._sxd(s, o);
            o._nky(elp._dye, r / 50)
        }
        if (j._xv(fct._dqv)) {
            if (n !== undefined) {
                o._nky(elp._ece, n)
            } else {
                o._nky(elp._ece, k)
            }
        }
    };
    i.prototype._sqw = function(n, j, o) {
        if (j._xv(fct._dqn)) {
            if (this._hvh !== undefined && this._sow === undefined) {
                this._sqq()
            }
            if (this._hvf > 1) {
                o._rh(this._hvh, -1, c)
            }
            n._nky(elp._dyf, c);
            if (j._xv(fct._dqv)) {
                if (this._soy > 1) {
                    o._ri(this._spa, b)
                }
                n._nky(elp._dyg, b)
            }
        }
    };
    i.prototype._sqy = function(n, j, o) {
        if (j._xv(fct._drk)) {
            n._nky(elp._ebn, Math.max(0, o - 0.5) / 255)
        }
    };
    i.prototype._cdu = function(E, H, y, A, j, J, x, q, p, o, C, n, G, r, z) {
        var B = y.gl;
        y._dkc(H);
        var D = y._diz();
        var v = this._cai[J];
        esi._ejq(E, (D === undefined || v === undefined));
        if (v !== undefined) {
            D.bindVertexArrayOES(v)
        } else {
            if (D !== undefined) {
                v = this._cai[J] = D.createVertexArrayOES();
                D.bindVertexArrayOES(v);
                y._dmk();
                B.enableVertexAttribArray(E._nkh(elp._edy.id));
                if (J._xv(fct._nv)) {
                    y._dmk();
                    B.enableVertexAttribArray(E._nkh(elp._eea.id))
                } else {
                    if (J._xv(fct._od)) {} else {
                        if (J._xv(fct._dqw)) {} else {
                            if (J._xv(fct._dpn) || J._xv(fct._dpp) || J._xv(fct._dql)) {
                                y._dmk();
                                B.enableVertexAttribArray(E._nkh(elp._eea.id));
                                if (J._xv(fct._dpr)) {
                                    y._dmk();
                                    B.enableVertexAttribArray(E._nkh(elp._efb.id))
                                }
                            }
                        }
                    }
                }
                if (J._xv(fct._dqv)) {
                    y._dmk();
                    B.enableVertexAttribArray(E._nkh(elp._eeb.id))
                }
                if (J._xv(fct._dpw)) {
                    y._dmk();
                    y._dmk();
                    y._dmk();
                    B.enableVertexAttribArray(E._nkh(elp._eej.id));
                    B.enableVertexAttribArray(E._nkh(elp._eek.id));
                    B.enableVertexAttribArray(E._nkh(elp._eez.id))
                }
                if (J._xv(fct._dpx) || J._xv(fct._dqn)) {
                    y._dmk();
                    B.enableVertexAttribArray(E._nkh(elp._eed.id))
                }
            }
            B.bindBuffer(B.ARRAY_BUFFER, this._cah);
            B.bindBuffer(B.ELEMENT_ARRAY_BUFFER, this._hwn);
            B.vertexAttribPointer(E._nkh(elp._edy.id), 3, B.FLOAT, false, a, 0);
            if (J._xv(fct._dqn)) {
                B.vertexAttribPointer(E._nkh(elp._eed.id), 4, B.UNSIGNED_BYTE, false, a, 44)
            }
            if (J._xv(fct._nv)) {
                B.vertexAttribPointer(E._nkh(elp._eea.id), 2, B.UNSIGNED_SHORT, false, a, 12)
            } else {
                if (J._xv(fct._od)) {} else {
                    if (J._xv(fct._dqw)) {} else {
                        if (J._xv(fct._dpn) || J._xv(fct._dpp) || J._xv(fct._dql)) {
                            B.vertexAttribPointer(E._nkh(elp._eea.id), 2, B.UNSIGNED_SHORT, false, a, 12);
                            if (J._xv(fct._dpr)) {
                                B.vertexAttribPointer(E._nkh(elp._efb.id), 1, B.FLOAT, false, a, 16)
                            }
                        }
                    }
                }
            }
            if (J._xv(fct._dqv)) {
                B.vertexAttribPointer(E._nkh(elp._eeb.id), 4, B.UNSIGNED_BYTE, true, a, 20)
            }
            if (J._xv(fct._dpw)) {
                B.vertexAttribPointer(E._nkh(elp._eej.id), 2, B.FLOAT, false, a, 24);
                B.vertexAttribPointer(E._nkh(elp._eek.id), 4, B.UNSIGNED_SHORT, false, a, 32);
                B.vertexAttribPointer(E._nkh(elp._eez.id), 4, B.UNSIGNED_BYTE, false, a, 40)
            }
            if (J._xv(fct._dpx) || J._xv(fct._dqn)) {
                B.vertexAttribPointer(E._nkh(elp._eed.id), 4, B.UNSIGNED_BYTE, false, a, 44)
            }
        }
        q._pes(E, J);
        this._sqs(E, J, A, y._dkx());
        this._squ(E, J, C, p, o, G, n);
        this._sqw(E, J, r);
        this._sqy(E, J, x);
        if (z !== undefined && this._hvb !== undefined) {
            var u = 0;
            var s = 0;
            for (var I = 0; I < this._hvb.length; I++) {
                var F = this._hvb[I];
                var t = z[F._dsb] === 0;
                if (!t) {
                    if (s > 0) {
                        B.drawElements(y._szw, F._cas - u, B.UNSIGNED_SHORT, u * 2);
                        y._dln();
                        y._dlr((F._cas - u) / 3)
                    }
                    u = F._hvt;
                    s = 0
                } else {
                    if (t) {
                        if (I === this._hvb.length - 1) {
                            B.drawElements(y._szw, F._hvt - u, B.UNSIGNED_SHORT, u * 2);
                            y._dln();
                            y._dlr((F._hvt - u) / 3)
                        } else {
                            s++
                        }
                    }
                }
            }
        } else {
            B.drawElements(y._szw, this._cab * 3, B.UNSIGNED_SHORT, 0);
            y._dln();
            y._dlr(this._cab)
        }
        if (D !== undefined) {
            D.bindVertexArrayOES(null)
        }
    };
    return function(p, o, q, r, j, n, s) {
        return new i(p, o, q, r, j, n, s)
    }
}();
var ewy = function() {
    var b = {};
    var a = {
        data: new Array(),
        size: 0,
        _ji: 0
    };
    b._bg = function(c) {
        a = {
            data: new Array(),
            size: 0,
            _ji: 0
        }
    };
    b._jl = function() {
        a = {
            data: new Array(),
            size: 0,
            _ji: 0
        }
    };
    b._jn = function() {
        a._ji = 0
    };
    b._jp = function(c) {
        if (a._ji < a.size) {
            return a.data[a._ji++]
        }
        a.data[a.size++] = fdd();
        return a.data[a._ji++]
    };
    return b
}();
var ezv = function() {
    var b = {};
    var l;
    var k;
    var i;
    var e;
    var j = 0;
    b._kze = function() {
        return j
    };
    var h = 0;
    b._oqn = function() {
        return h
    };
    var g = null;
    b._oqo = function() {
        return g
    };
    var a = 0;
    var d = 0;
    b._oqp = function() {
        return d
    };
    var c = null;
    b._oqq = function() {
        return c
    };
    b._bg = function(p, n, o, m) {
        l = p;
        k = n;
        i = o;
        e = m
    };
    b._kb = function() {
        j = 0;
        h = 0;
        g = null;
        a = 0;
        d = 0;
        c = null
    };
    b._oqs = function(m) {
        return g[m]
    };
    b._qf = function() {
        if (!l._lja(k)) {
            return false
        }
        var n = true;
        if (g === null) {
            var p = l._lje(k, i);
            if (p) {
                h = l._hcc(k)._cqh(i);
                g = new Array(h + 1);
                for (var o = 0; o < h; o++) {
                    var m = l.getFile(k, i, o, feg._ciy);
                    if (m !== undefined) {
                        g[o] = flb(m);
                        j++
                    }
                }
                if (false) {}
            } else {
                n = false
            }
        }
        if (c === null) {
            var p = l._lje(k, e);
            if (p) {
                d = l._hcc(k)._cqh(e);
                c = new Array(d + 1);
                for (var o = 0; o < d; o++) {
                    var m = l.getFile(k, e, o, feg._ciy);
                    if (m !== undefined) {
                        c[o] = fqw(m);
                        a++
                    }
                }
                if (false) {}
            } else {
                n = false
            }
        }
        return n
    };
    return b
}();
var fly = function() {
    var b = new Float32Array(3);
    var a = function(c) {
        this._hw = c;
        this._ovs;
        this.lifetime = 0;
        this._ovf = 0;
        this.position = new Float32Array(3);
        this._eis = new Float32Array(3);
        this._ovg = 0;
        this.size = 0;
        this._ovi = 0;
        this._ovk = 0;
        this._ovm = false;
        this._ovn = false;
        this._npz = 0;
        this._nqa = 0;
        this.b = 0;
        this.a = 0;
        this._wu = 0;
        this._kzx = 0
    };
    a.prototype._bjx = function() {
        return this._hw
    };
    a.prototype._ovo = function() {
        return this._ovs
    };
    a.prototype._bix = function() {
        return this.position
    };
    a.prototype._ovp = function() {
        return this._eis
    };
    a.prototype._ovr = function() {
        return this._ovg
    };
    a.prototype.getSize = function() {
        return this.size
    };
    a.prototype._mer = function() {
        return this._ovk
    };
    a.prototype._wq = function() {
        return this._wu
    };
    a.prototype.fill = function(m, h, g, c, k, l, d, i, e) {
        this._ovs = m;
        this.lifetime = h;
        this._ovf = 0;
        this._ovg = g;
        this._ovi = c;
        this.size = k;
        this._ovk = l;
        this._wu = d;
        var j = this._ovs._srx();
        if (i && j._les() !== _qkj._dcm) {
            this._ovm = true
        } else {
            this._ovm = false
        }
        this._npz = (this._wu >> 24) & 255;
        this._nqa = (this._wu >> 16) & 255;
        this.b = (this._wu >> 8) & 255;
        if (e && j._lew() !== _qkj._dcm) {
            this._ovn = true
        } else {
            this._ovn = false
        }
        this.a = (this._wu & 255)
    };
    a.prototype._bfc = function(d) {
        this._ovf += d;
        if (this._ovf >= this.lifetime) {
            return false
        }
        var c = this._ovs._srx();
        this._ovt(d, c);
        this._bsv(d);
        this._ovw(d);
        this._ovv(d, c);
        this.size += c._lez() * d;
        fqv.add(this.position, fqv.scale(this._eis, this._ovg * d, b));
        return true
    };
    a.prototype._ovt = function(g, c) {
        if (c._ldq() !== _qkj._dcm && this._ovf < c._lds()) {
            this._ovg += c._lex() * g
        }
        var d = c._ldt();
        var e = c._ldv();
        if (d !== fos._ctr && e !== 0) {
            fqv._eij(this.position, this._ovs._tbo(), b);
            var h = (b[0] * b[0] + b[1] * b[1] + b[2] * b[2]);
            if (d === fos._cts) {
                h = Math.sqrt(h)
            }
            this._ovg -= (this._ovg * h * g * e)
        }
    };
    a.prototype._bsv = function(c) {
        if (this._ovi === 0) {
            return
        }
        this._ovk = (this._ovk + (this._ovi / 2048) * c) % (2 * Math.PI)
    };
    a.prototype._ovv = function(d, c) {
        if (this._ovm) {
            if (this._ovf > c._leh()) {
                this._ovm = false
            } else {
                this._npz += c._les() * d;
                this._nqa += c._leu() * d;
                this.b += c._lev() * d;
                if (this._npz < 0) {
                    this._npz = 0
                } else {
                    if (this._npz > 255) {
                        this._npz = 255
                    }
                }
                if (this._nqa < 0) {
                    this._nqa = 0
                } else {
                    if (this._nqa > 255) {
                        this._nqa = 255
                    }
                }
                if (this.b < 0) {
                    this.b = 0
                } else {
                    if (this.b > 255) {
                        this.b = 255
                    }
                }
                this._wu = ((this._npz & 255) << 24) | ((this._nqa & 255) << 16) | ((this.b & 255) << 8) | (this._wu & 255)
            }
        }
        if (this._ovn) {
            if (this._ovf > c._lei()) {
                this._ovn = false
            } else {
                this.a += c._lew() * d;
                if (this.a < 0) {
                    this.a = 0
                } else {
                    if (this.a > 255) {
                        this.a = 255
                    }
                }
                this._wu = (this._wu & 4294967040) | (this.a & 255)
            }
        }
    };
    a.prototype._ovw = function(h) {
        var g = this._ovs._tbw();
        if (g === null) {
            return
        }
        for (var c = 0; c < g.length; c++) {
            var d = g[c];
            var e = d._bax();
            if (d._baz() === fos._ctu) {
                this._eis[0] += e[0] * h;
                this._eis[1] += e[1] * h;
                this._eis[2] += e[2] * h
            } else {
                this.position[0] += e[0] * h;
                this.position[1] += e[1] * h;
                this.position[2] += e[2] * h
            }
        }
    };
    return function(c) {
        return new a(c)
    }
}();
var ewi = function() {
    var i = new Float32Array(3);
    var l = new Float32Array(4);
    var e = new Float32Array(elr._ssp * 12);
    for (var g = 0; g < 16; g++) {
        e[g] = elr._rz[g]
    }
    var c = new Float32Array(elr._ssr * 4);
    for (var g = 0; g < 4; g++) {
        c[g] = elr._ssu[g]
    }
    var k = new Float32Array(elr._sss * elr._ssw);
    for (var g = 0; g < elr._ssw; g++) {
        k[g] = elr._ssy[g]
    }
    var a = 0;
    a += 4 * 4;
    a += 4 * 1;
    a += 4 * 4;
    a += 4 * 1;
    a += 1 * 1;
    a += 3 * 1;
    a += 4 * 1;
    var d = function(o, p, j, n, q) {
        this._baf = false;
        this._hvd;
        this._hve;
        this._hvf;
        this._hvh;
        this._hvi;
        this._hvj;
        this._hvk;
        this._hvm;
        this._dcd;
        this._dtm;
        this._cyc;
        this._hvn;
        this._hvo;
        this._cad;
        this._cah;
        this._caf;
        this._hvq;
        this._hwn;
        this._hvr;
        this._hva = undefined;
        this._hvb = undefined;
        this._cai = {};
        this._bg(o, p, j, n, q)
    };
    d.prototype._bg = function(q, r, n, p, s) {
        if (q !== undefined) {
            this._hvd = 0;
            this._hve = new Array(0);
            this._hvf = 1;
            this._hvh = [];
            this._hvi = 1;
            this._hvj = [];
            this._hvk = 1;
            this._hvm = [];
            this._dcd = q._dvt();
            this._dtm = q._dvu();
            this._cyc = q._cyl();
            this._hvn = q._dvv();
            this._hvo = q._dvw()
        } else {
            if (n !== undefined) {
                this._hvd = n._hvd;
                this._hvf = n._hvf;
                this._hvh = n._hvh;
                this._hvi = n._hvi;
                this._hvj = n._hvj;
                this._hvk = n._hvk;
                this._hvm = n._hvm;
                this._dcd = n._dcd;
                this._dtm = n._dtm;
                this._cyc = n._cyc;
                this._hvn = n._hvn;
                this._hvo = n._hvo;
                this._cad = n._cad;
                this._caf = n._caf;
                this._hvq = n._hvq;
                this._hvr = n._hvr;
                this._hvb = n._hvb
            } else {
                if (s !== undefined) {
                    this._hvd = s._lpl();
                    this._hvf = s._lpl();
                    this._hvh = [];
                    for (var j = 0; j < this._hvf - 1; j++) {
                        this._hvh[s._lpl()] = s._lpl()
                    }
                    this._hvi = s._lpl();
                    this._hvj = [];
                    for (var j = 0; j < this._hvi - 1; j++) {
                        this._hvj[s._lpl()] = s._lpl()
                    }
                    this._hvk = s._lpl();
                    this._hvm = [];
                    for (var j = 0; j < this._hvk - 1; j++) {
                        this._hvm[s._lpl()] = s._lpl()
                    }
                    this._dcd = s._lpi();
                    this._dtm = s._lpi();
                    this._cyc = s._lpi();
                    this._hvn = s._lpi();
                    this._hvo = s._lpi();
                    var o = s._lpl();
                    if (o > 0) {
                        this._hvb = new Array(o);
                        for (var j = 0; j < this._hvb.length; j++) {
                            this._hvb[j] = {
                                _dsb: s._lpp(),
                                _cas: s._lpp(),
                                _hvt: s._lpp()
                            }
                        }
                    }
                    this._cad = new ArrayBuffer(s._lpp());
                    s._lpw(this._cad, 0, this._cad.byteLength);
                    this._hvq = new ArrayBuffer(s._lpp());
                    s._lpw(this._hvq, 0, this._hvq.byteLength)
                } else {
                    if (r !== undefined) {
                        this._hvd = 0;
                        this._hve = new Array(0);
                        this._hvf = 1;
                        this._hvh = [];
                        this._hvi = 1;
                        this._hvj = [];
                        this._hvk = 1;
                        this._hvm = [];
                        this._dcd = r._dvt();
                        this._dtm = r._dvu();
                        this._cyc = r._cyl();
                        this._hvn = r._hvu();
                        this._hvo = r._hvw();
                        this._hva = new Array(0);
                        this._hwb(r, p)
                    } else {
                        throw new Error("2570 ")
                    }
                }
            }
        }
    };
    d.prototype._gmv = function() {
        return this._hvd
    };
    d.prototype._dvt = function() {
        return this._dcd
    };
    d.prototype._dvu = function() {
        return this._dtm
    };
    d.prototype._cyl = function() {
        return this._cyc
    };
    d.prototype._hvu = function() {
        return this._hvn
    };
    d.prototype._hvw = function() {
        return this._hvo
    };
    d.prototype._hvy = function() {
        return this._cad
    };
    d.prototype._hwa = function() {
        return this._hvq
    };
    d.prototype._hwb = function(j, n) {
        this._hvd += j._gmv();
        if (this._hva === undefined) {
            this._hva = new Array(0)
        }
        this._hva.push({
            _hwc: j,
            _dsb: n
        })
    };
    d.prototype._rv = function(o, p) {
        var n = o ? this._cad.slice(0) : this._cad;
        var j = o ? this._hvq.slice(0) : this._hvq;
        if (p !== undefined) {
            p.push(n);
            p.push(j)
        }
        return {
            _hvd: this._hvd,
            _hvf: this._hvf,
            _hvh: this._hvh,
            _hvi: this._hvi,
            _hvj: this._hvj,
            _hvk: this._hvk,
            _hvm: this._hvm,
            _dcd: this._dcd,
            _dtm: this._dtm,
            _cyc: this._cyc,
            _hvn: this._hvn,
            _hvo: this._hvo,
            _cad: n,
            _caf: this._caf,
            _hvq: j,
            _hvr: this._hvr,
            _hvb: this._hvb
        }
    };
    d.prototype._dsf = function(n) {
        n._lhi(this._hvd);
        n._lhi(this._hvf);
        for (var j = 0; j < this._hvh.length; j++) {
            if (this._hvh[j] !== undefined) {
                n._lhi(j);
                n._lhi(this._hvh[j])
            }
        }
        n._lhi(this._hvi);
        for (var j = 0; j < this._hvj.length; j++) {
            if (this._hvj[j] !== undefined) {
                n._lhi(j);
                n._lhi(this._hvj[j])
            }
        }
        n._lhi(this._hvk);
        for (var j = 0; j < this._hvm.length; j++) {
            if (this._hvm[j] !== undefined) {
                n._lhi(j);
                n._lhi(this._hvm[j])
            }
        }
        n._lhh(this._dcd);
        n._lhh(this._dtm);
        n._lhh(this._cyc);
        n._lhh(this._hvn);
        n._lhh(this._hvo);
        if (this._hvb !== undefined) {
            n._lhi(this._hvb.length);
            for (var j = 0; j < this._hvb.length; j++) {
                n._loz(this._hvb[j]._dsb);
                n._loz(this._hvb[j]._cas);
                n._loz(this._hvb[j]._hvt)
            }
        } else {
            n._lhi(0)
        }
        n._loz(this._cad.byteLength);
        n._lpe(this._cad, 0, this._cad.byteLength);
        n._loz(this._hvq.byteLength);
        n._lpe(this._hvq, 0, this._hvq.byteLength)
    };
    d.prototype._hwe = function() {
        if (this._hvf > 1 || this._hvi > 1 || this._hvk > 1) {
            return true
        } else {
            return false
        }
    };
    d.prototype._hwg = function() {
        return this._caf + this._hvr
    };
    d.prototype._hwi = function(j) {
        if (this._dcd !== j._dvt()) {
            return false
        }
        if (this._cyc !== j._cyl()) {
            return false
        }
        if (this._hvn !== j._hvu()) {
            return false
        }
        if (this._hvo !== j._hvw()) {
            return false
        }
        if ((this._hvd + j._gmv()) * 6 > 65535) {
            return false
        }
        if (this._dcd === fds._nyl && this._dtm !== j._dvu()) {
            return false
        }
        return true
    };
    d.prototype._hwj = function() {
        this._hva.sort(m);
        this._hve = new Array(this._hvd);
        this._cad = new ArrayBuffer(this._hvd * 4 * a);
        var x = new Uint8Array(this._cad);
        var o = 0;
        this._hvq = new ArrayBuffer(this._hvd * 6 * 2);
        var r = new Uint16Array(this._hvq);
        var p = 0;
        var s = p;
        var y = 0;
        for (var n = 0; n < this._hva.length; n++) {
            var z = this._hva[n]._hwc;
            var t = this._hva[n]._dsb;
            var j = new Uint16Array(z._hwa());
            var v = o / a;
            if (t !== undefined && (n === 0 || this._hva[n - 1]._dsb !== t)) {
                s = p;
                y = n
            }
            for (var u = 0; u < j.length; u++) {
                r[p++] = j[u] + v
            }
            if (t !== undefined && (n === this._hva.length - 1 || this._hva[n + 1]._dsb !== t)) {
                if (this._hvb === undefined) {
                    this._hvb = new Array(0)
                }
                this._hvb.push({
                    _dsb: t,
                    _cas: s,
                    _hvt: p
                })
            }
            var q = new Uint8Array(z._hvy());
            for (var u = 0; u < q.length; u++) {
                x[o++] = q[u]
            }
        }
        this._hvf = 1;
        this._hvh = [];
        this._hvi = 1;
        this._hvj = [];
        this._hvk = 1;
        this._hvm = [];
        this._hva = undefined
    };
    var m = function(n, j) {
        if (n._dsb === undefined) {
            return -1
        }
        if (j._dsb === undefined) {
            return 1
        }
        return n._dsb - j._dsb
    };
    d.prototype._hwl = function(q, j, o, n, p) {
        if (j !== undefined) {
            if (this._cyc !== j._cyl()) {
                return false
            }
            if (this._dcd !== j._dvt()) {
                return false
            }
            if (this._dcd === fds._nyl && this._dtm !== j._dvu()) {
                return false
            }
        }
        if (o !== undefined) {
            if (this._hvh[o] === undefined && this._hvf + 1 > elr._ssp) {
                return false
            }
        }
        if (n !== undefined) {
            if (this._hvj[n] === undefined && this._hvi + 1 > elr._ssr) {
                return false
            }
        }
        if (p !== undefined) {
            if (this._hvm[p] === undefined && this._hvk + 1 > elr._sss) {
                return false
            }
        }
        this._hve.push(q);
        this._hvd++;
        if (o !== undefined) {
            if (this._hvh[o] === undefined) {
                this._hvh[o] = this._hvf++
            }
        }
        if (n !== undefined) {
            if (this._hvj[n] === undefined) {
                this._hvj[n] = this._hvi++
            }
        }
        if (p !== undefined) {
            if (this._hvm[p] === undefined) {
                this._hvm[p] = this._hvk++
            }
        }
        return true
    };
    d.prototype._hwm = function(L, C, B) {
        this._cad = new ArrayBuffer(this._hve.length * 4 * a);
        var t = new Float32Array(this._cad);
        var q = new Uint8Array(this._cad);
        var H = this._hve.length * 6;
        this._hvq = new ArrayBuffer(H * 2);
        var G = new Uint16Array(this._hvq);
        var z = (this._hvn === eqa._cgm || this._hvn === eqa._lhe) ? 1 : 0;
        var x = (this._hvn === eqa._cgo) ? 1 : 0;
        var y = (this._hvo === eqa._cgm || this._hvo === eqa._lhe) ? 1 : 0;
        var p = (this._hvo === eqa._cgo) ? 1 : 0;
        for (var s = 0; s < this._hve.length; s++) {
            var r = this._hve[s];
            var O = r._bhw();
            var N = r._wq();
            var A = O._wr();
            var M = fjf._nuq(A);
            var v = 0;
            var j = -1,
                F = -1;
            if (L !== undefined && M._dsi()) {
                var K;
                if (M._rqy() && euu._djc()) {
                    K = L._hde();
                    v = 1
                } else {
                    K = L._hdd()
                }
                j = K._pog(A);
                F = K._cbt(A)
            }
            var E = O._cyi();
            var n = O._cyj();
            var u = r._bhy();
            for (var J = 0; J < 4; J++) {
                var o = (s * 4 + J) * a;
                var D = o / 4;
                t[D++] = u[0];
                t[D++] = u[1];
                t[D++] = u[2];
                t[D++] = r._bid();
                t[D++] = E;
                t[D++] = n;
                t[D++] = j;
                t[D++] = F;
                o += 32;
                q[o++] = (N >> 24) & 255;
                q[o++] = (N >> 16) & 255;
                q[o++] = (N >> 8) & 255;
                q[o++] = N & 255;
                q[o++] = z;
                q[o++] = y;
                q[o++] = x;
                q[o++] = p;
                q[o++] = v;
                if (r._bhz() !== undefined) {
                    q[o++] = this._hvh[r._bhz()]
                } else {
                    q[o++] = 0
                }
                if (r._bib() !== undefined) {
                    q[o++] = this._hvj[r._bib()]
                } else {
                    q[o++] = 0
                }
                if (r._bic() !== undefined) {
                    q[o++] = this._hvm[r._bic()] * 2
                } else {
                    q[o++] = 0
                }
                if (J === 0) {
                    q[o++] = 160;
                    q[o++] = 0;
                    q[o++] = 1
                } else {
                    if (J === 1) {
                        q[o++] = 224;
                        q[o++] = 1;
                        q[o++] = 1
                    } else {
                        if (J === 2) {
                            q[o++] = 32;
                            q[o++] = 1;
                            q[o++] = 0
                        } else {
                            if (J === 3) {
                                q[o++] = 96;
                                q[o++] = 0;
                                q[o++] = 0
                            }
                        }
                    }
                }
                q[o] = 0
            }
            G[s * 6 + 0] = s * 4 + 0;
            G[s * 6 + 1] = s * 4 + 1;
            G[s * 6 + 2] = s * 4 + 2;
            G[s * 6 + 3] = s * 4 + 0;
            G[s * 6 + 4] = s * 4 + 2;
            G[s * 6 + 5] = s * 4 + 3;
            var I = Math.max(Math.abs(E), Math.abs(n));
            fqv.set(u, i);
            i[0] -= I;
            i[1] -= I;
            i[2] -= I;
            if (i[0] < C[0]) {
                C[0] = i[0]
            }
            if (i[1] < C[1]) {
                C[1] = i[1]
            }
            if (i[2] < C[2]) {
                C[2] = i[2]
            }
            I *= 2;
            i[0] += I;
            i[1] += I;
            i[2] += I;
            if (i[0] > B[0]) {
                B[0] = i[0]
            }
            if (i[1] > B[1]) {
                B[1] = i[1]
            }
            if (i[2] > B[2]) {
                B[2] = i[2]
            }
        }
        t = null;
        q = null;
        G = null;
        this._hve = null
    };
    d.prototype._ccj = function(j) {
        var n = j.gl;
        this._cah = n.createBuffer();
        n.bindBuffer(n.ARRAY_BUFFER, this._cah);
        n.bufferData(n.ARRAY_BUFFER, this._cad, n.DYNAMIC_DRAW);
        this._hwn = n.createBuffer();
        n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, this._hwn);
        n.bufferData(n.ELEMENT_ARRAY_BUFFER, this._hvq, n.DYNAMIC_DRAW);
        this._caf = this._cad.byteLength;
        this._cad = undefined;
        this._hvr = this._hvq.byteLength;
        this._hvq = undefined
    };
    d.prototype._kb = function(n) {
        if (n !== undefined) {
            var o = n._diz();
            if (o !== undefined) {
                for (var j in this._cai) {
                    o.deleteVertexArrayOES(this._cai[j])
                }
                this._cai = {}
            }
        }
        if (this._cad !== undefined) {
            this._cad = undefined
        }
        if (this._cah !== undefined) {
            n.gl.deleteBuffer(this._cah);
            this._cah = undefined
        }
        if (this._hvq !== undefined) {
            this._hvq = undefined
        }
        if (this._hwn !== undefined) {
            n.gl.deleteBuffer(this._hwn);
            this._hwn = undefined
        }
    };
    d.prototype.transform = function(n) {
        var p = this._hvd * 4;
        var o = a / 4;
        var q = new Float32Array(this._cad);
        for (var j = 0; j < p; j++) {
            i[0] = q[j * o + 0];
            i[1] = q[j * o + 1];
            i[2] = q[j * o + 2];
            evs._gnd(n, i);
            q[j * o + 0] = i[0];
            q[j * o + 1] = i[1];
            q[j * o + 2] = i[2]
        }
    };
    d.prototype.translate = function(n) {
        var p = this._hvd * 4;
        var o = a / 4;
        var q = new Float32Array(this._cad);
        for (var j = 0; j < p; j++) {
            q[j * o + 0] += n[0];
            q[j * o + 1] += n[1];
            q[j * o + 2] += n[2]
        }
    };
    d.prototype.rotate = function(q) {
        var o = this._hvd * 4;
        var n = a / 4;
        var p = new Float32Array(this._cad);
        for (var j = 0; j < o; j++) {
            i[0] = p[j * n + 0];
            i[1] = p[j * n + 1];
            i[2] = p[j * n + 2];
            fqr._gnd(q, i);
            p[j * n + 0] = i[0];
            p[j * n + 1] = i[1];
            p[j * n + 2] = i[2]
        }
    };
    d.prototype._dsg = function(j) {
        var p = this._hvd * 4;
        var o = a / 4;
        var q = new Float32Array(this._cad);
        for (var n = 0; n < p; n++) {
            i[0] = q[n * o + 0];
            i[2] = q[n * o + 2];
            if (j == 1) {
                q[n * o + 0] = i[2];
                q[n * o + 2] = -i[0]
            } else {
                if (j == 2) {
                    q[n * o + 0] = -i[0];
                    q[n * o + 2] = -i[2]
                } else {
                    if (j == 3) {
                        q[n * o + 0] = -i[2];
                        q[n * o + 2] = i[0]
                    }
                }
            }
        }
    };
    d.prototype._hwp = function(j, x, u, p, n, q, s) {
        var t = this._hvd * 4;
        var v = a / 4;
        var r = new Float32Array(this._cad);
        for (var o = 0; o < t; o++) {
            r[o * v + 1] = s(j, x, u, p, n, q, r[o * v + 0], r[o * v + 1], r[o * v + 2])
        }
    };
    d.prototype._hwr = function(s) {
        var t = this._hvd * 4;
        var u = a / 4;
        var o = new Uint8Array(this._cad);
        var j = new Float32Array(this._cad);
        for (var p = 0; p < t; p++) {
            var r = j[p * u + 6];
            var n = o[p * a + 40] === 1;
            var q;
            if (r === 0) {
                q = 0
            } else {
                if (!n) {
                    q = s._hcs[r]
                } else {
                    q = s._hcu[r]
                }
            }
            j[p * u + 6] = q
        }
    };
    var b = function() {
        _qkb(this, enc);
        this._hwc = undefined;
        this._cco = undefined;
        this._hws = undefined;
        this._bi = undefined;
        this._hwu = undefined;
        this._ewv = undefined;
        this._ccr = undefined;
        this._cct = undefined;
        this._cac = undefined;
        this._ccw = undefined;
        this._hoh = undefined;
        this._hwv = undefined
    };
    _qjz(enc, b);
    b.prototype._cdf = function() {
        this._cco._pek(this._hws);
        var j = this._bi._dka();
        var n = this._bi._dkn();
        this._bi._dkc(this._fem);
        this._bi._dkp(this._fep);
        this._hwc._cdt(this._bi, this._hwu, this._ewv, this._ewx, this._ccr, this._cct, this._cac, this._ccw, this._hoh, this._hwv);
        this._bi._dkp(n);
        this._bi._dkc(j);
        this._bi._dle()
    };
    var h = function() {
        return new b()
    };
    d.prototype._cdp = function(j, y, t, D, s, A, z, r, o, C, n, B, q) {
        var p = fdh._jp(eva._gaf, h);
        p._hwc = this;
        var v = fij._bc();
        var x = v._qow(eqs._mgf);
        var u = x._peh();
        p._fem = y;
        p._fep = t;
        p._ccl = A.id;
        p._cdr = j._cdr;
        p._cco = x;
        p._hws = u;
        p._bi = D;
        p._hwu = s;
        p._ewv = A;
        p._ewx = z;
        p._ccr = r;
        p._cct = o;
        p._cac = C;
        p._ccw = n;
        p._hoh = B;
        p._hwv = q;
        return p
    };
    d.prototype._cdt = function(x, z, j, H, p, o, B, n, q, y) {
        var A = x.gl;
        if (this._dcd === fds._nyl) {
            H.enable(fct._drk)
        }
        var D = esi._ejp(j.id, H);
        var F = D._njk();
        if (H._xv(fct._dpx) && !F._xv(fct._dpx)) {
            return false
        }
        var r = F._qhl(H);
        H = F;
        var C = x._diz();
        var u = this._cai[F];
        esi._ejq(D, (C === undefined || u === undefined));
        if (u !== undefined) {
            C.bindVertexArrayOES(u)
        } else {
            if (C !== undefined) {
                u = this._cai[F] = C.createVertexArrayOES();
                C.bindVertexArrayOES(u);
                A.enableVertexAttribArray(D._nkh(elp._edy.id));
                A.enableVertexAttribArray(D._nkh(elp._efd.id));
                A.enableVertexAttribArray(D._nkh(elp._eek.id));
                A.enableVertexAttribArray(D._nkh(elp._eeb.id));
                A.enableVertexAttribArray(D._nkh(elp._eez.id));
                if (F._xv(fct._dqo) || F._xv(fct._dpx)) {
                    A.enableVertexAttribArray(D._nkh(elp._eef.id))
                }
            }
            A.bindBuffer(A.ARRAY_BUFFER, this._cah);
            A.bindBuffer(A.ELEMENT_ARRAY_BUFFER, this._hwn);
            A.vertexAttribPointer(D._nkh(elp._edy.id), 4, A.FLOAT, false, a, 0);
            A.vertexAttribPointer(D._nkh(elp._eek.id), 4, A.FLOAT, false, a, 16);
            A.vertexAttribPointer(D._nkh(elp._eeb.id), 4, A.UNSIGNED_BYTE, true, a, 32);
            A.vertexAttribPointer(D._nkh(elp._eez.id), 1, A.UNSIGNED_BYTE, false, a, 36);
            if (F._xv(fct._dqo) || F._xv(fct._dpx)) {
                A.vertexAttribPointer(D._nkh(elp._eef.id), 4, A.UNSIGNED_BYTE, false, a, 40)
            }
            A.vertexAttribPointer(D._nkh(elp._efd.id), 4, A.UNSIGNED_BYTE, false, a, 44)
        }
        p._pes(D);
        D._nky(elp._dxf, o);
        fbl._sxd(B, D);
        if (F._xv(fct._dqo)) {
            D._nky(elp._dyf, q._rh(this._hvh, -1, e));
            D._nky(elp._dyg, q._ri(this._hvj, c));
            D._nky(elp._dyi, q._kva(this._hvm, k))
        }
        if (n !== undefined) {
            D._nky(elp._ece, n)
        } else {
            D._nky(elp._ece, l)
        }
        if (F._xv(fct._dqf)) {
            z._ryi(eqs._mgh, D)
        }
        if (F._xv(fct._drk)) {
            D._nky(elp._ebn, Math.max(0, this._dtm - 0.5) / 255)
        }
        if (y !== undefined && this._hvb !== undefined) {
            var v = 0;
            var s = 0;
            for (var G = 0; G < this._hvb.length; G++) {
                var E = this._hvb[G];
                var t = y[E._dsb] === 0;
                if (!t) {
                    if (s > 0) {
                        A.drawElements(x._szw, E._cas - v, A.UNSIGNED_SHORT, v * 2);
                        x._dln();
                        x._dlr((E._cas - v) / 3)
                    }
                    v = E._hvt;
                    s = 0
                } else {
                    if (t) {
                        if (G === this._hvb.length - 1) {
                            A.drawElements(x._szw, E._hvt - v, A.UNSIGNED_SHORT, v * 2);
                            x._dln();
                            x._dlr((E._hvt - v) / 3)
                        } else {
                            s++
                        }
                    }
                }
            }
        } else {
            A.drawElements(x._szw, this._hvd * 6, A.UNSIGNED_SHORT, 0);
            x._dln();
            x._dlr(this._hvd * 2)
        }
        if (C !== undefined) {
            C.bindVertexArrayOES(null)
        }
        return r
    };
    return function(o, p, j, n, q) {
        return new d(o, p, j, n, q)
    }
}();
var fqh = function() {
    var a = {
        _fcu: 0,
        _dra: 1,
        _fcw: 2,
        _nv: 3,
        _ob: 4,
        _od: 5,
        _byl: 6
    };
    return a
}();
var fta = function() {
    var c = 0;
    var a = function(d) {
        this.data = new Array(d === undefined ? 10 : d);
        this.size = 0;
        this._dog = 0
    };
    a.prototype._doh = function(d) {
        var e = this.data;
        if (this.size === e.length) {
            e.push(d)
        } else {
            e[this.size] = d
        }
        this.size++
    };
    var b = function(i, h) {
        var g = i.data;
        var d = g[h];
        var e = --i.size;
        g[h] = g[e];
        g[e] = undefined;
        return d
    };
    a.prototype.removeItem = function(e) {
        for (var d = 0; d < this.size; d++) {
            if (e === this.data[d]) {
                return b(this, d)
            }
        }
    };
    a.prototype.getSize = function() {
        return this.size
    };
    a.prototype._bup = function() {
        this._dog = 0;
        return this._bur()
    };
    a.prototype._bur = function() {
        if (this._dog === this.size) {
            return undefined
        }
        return this.data[this._dog++]
    };
    a.prototype.remove = function() {
        return b(this, --this._dog)
    };
    a.prototype._yh = function() {
        var e = this.data;
        for (var d = 0; d < this.size; d++) {
            e[d] = undefined
        }
        this.size = 0;
        this._dog = 0
    };
    return function(d) {
        return new a(d)
    }
}();
var eru = function() {
    var o = {};
    var l;
    var i;
    var h;
    var g;
    var r;
    var e;
    o._kze = function() {
        return e
    };
    var d;
    var c = null;
    var b;
    var a = null;
    o._srl = 4096;
    var k = o._srl;
    var s = 0;
    var m = new Array(k);
    var n = fta();
    var p = 0;
    var e = 0;
    var q = new Uint32Array(k);
    var j = 0;
    o._dmj = function() {
        return j
    };
    o._bg = function(u) {
        if (u._bk !== undefined) {
            l = u._bk;
            i = u._bej;
            h = u._bek;
            g = u._bem;
            r = ezv;
            r._bg(l, i, h, g)
        } else {
            e = u._srn;
            d = u._sro;
            c = u._srp;
            for (var t = 0; t < d; t++) {
                if (c[t] !== undefined) {
                    c[t] = fpz({
                        _hqh: c[t]
                    })
                }
            }
            b = u._srr;
            a = u._srt;
            for (var t = 0; t < b; t++) {
                if (a[t] !== undefined) {
                    a[t] = ezh({
                        _hqh: a[t]
                    })
                }
            }
        }
    };
    o._rv = function() {
        var v = new Array(d);
        var u = new Array(b);
        for (var t = 0; t < d; t++) {
            if (c[t] !== undefined) {
                v[t] = c[t]._rv()
            }
        }
        for (var t = 0; t < b; t++) {
            if (a[t] !== undefined) {
                u[t] = a[t]._rv()
            }
        }
        return {
            _srn: e,
            _sro: d,
            _srp: v,
            _srr: b,
            _srt: u
        }
    };
    o._srv = function() {
        return c !== null && a !== null
    };
    o._srx = function(t) {
        if (c === null) {
            throw new Error("2947 ")
        }
        return c[t]
    };
    o._srz = function(t) {
        if (a === null) {
            throw new Error("2948 ")
        }
        return a[t]
    };
    o._ssb = function(t) {
        n._doh(t)
    };
    o._ssc = function(t) {
        n.removeItem(t)
    };
    o._ssd = function(t) {
        return m[t]
    };
    o._ssf = function() {
        if (j > 0) {
            var t = q[--j];
            return m[t]
        } else {
            if (s === k) {
                return undefined
            }
            var u = s++;
            var v = m[u] = fly(u);
            return v
        }
    };
    o._ssg = function(t) {
        q[j++] = t._bjx()
    };
    o._bfc = function() {
        p = 0;
        e = 0;
        for (var C = n._bup(); C !== undefined; C = n._bur()) {
            C._bfc();
            p += C._dlx();
            e += C._kze()
        }
        if (c === null) {
            var L = r._qf() && fjf._sxk();
            if (L) {
                d = r._oqn();
                e = r._kze();
                var y = r._oqo();
                c = new Array(d);
                for (var X = 0; X < d; X++) {
                    var F = y[X];
                    if (F !== undefined) {
                        var U = F._nug();
                        var t = ((U << 8) & 4294967040) | ((U >> 24) & 255);
                        var W = F._nui();
                        var Y = ((W << 8) & 4294967040) | ((W >> 24) & 255);
                        if ((t & 255) === 0 && (Y & 255) === 0) {
                            t |= 255;
                            Y |= 255
                        }
                        var N = F._nul();
                        var V = undefined;
                        if (N !== undefined) {
                            if (U !== W || U !== N) {
                                V = ((N << 8) & 4294967040) | ((N >> 24) & 255)
                            }
                        }
                        var P = (F._nuu() * 50) / 64;
                        var O = (F._nuw() * 50) / 64;
                        var M = F._nur();
                        var K = F._nus();
                        var B = F._leb() * 4;
                        var x = F._led() * 4;
                        var v = F._ldy();
                        if (v !== undefined) {
                            v *= 4;
                            if (B === x && B === v) {
                                v = undefined
                            }
                        }
                        var J = (F._nua() * 4 * 50) / 1048576;
                        var I = (F._nub() * 4 * 50) / 1048576;
                        var H = F._ldq();
                        if (H !== undefined) {
                            H = (H * 4 * 50) / 1048576;
                            if (J === I && J === H) {
                                H = undefined
                            }
                        }
                        var D = F._nue();
                        if (D !== undefined) {
                            D = (D * 4 * 2) / (4096 * 50);
                            if (F._nud() !== fos._cts) {
                                D = (D * 4) / 1024
                            }
                        }
                        var S = F._nva() * 50;
                        var R = F._nvc() * 50;
                        var G = undefined;
                        if (H !== undefined) {
                            G = (K * F._lds()) / 100
                        }
                        var u = undefined;
                        if (v !== undefined) {
                            u = (K * F._lea()) / 100
                        }
                        var E = undefined;
                        var T = undefined;
                        if (V !== undefined) {
                            E = (K * F._nuo()) / 100;
                            T = (K * F._lei()) / 100
                        }
                        c[X] = fpz({
                            _hw: X,
                            _lah: F._ntu(),
                            _lai: F._ntw(),
                            _laj: F._ntx(),
                            _lal: F._ntz(),
                            _lam: P,
                            _lan: O,
                            _lap: F._ldk(),
                            _laq: M,
                            _las: K,
                            _lat: J,
                            _lav: I,
                            _law: H,
                            _lax: G,
                            _laz: F._nud(),
                            _lba: D,
                            _lbc: B,
                            _lbe: x,
                            _lbf: v,
                            _lbh: u,
                            _lbi: t,
                            _lbj: Y,
                            _lbl: F._nuk(),
                            _lbm: V,
                            _lbo: E,
                            _lbp: T,
                            _ww: F._nuq(),
                            _lbr: F._nuy(),
                            _lbs: F._nvi(),
                            _cyg: F._nvj(),
                            _lbu: S,
                            _lbw: R,
                            _lby: F._nvd(),
                            _lbz: F._nve(),
                            _lca: F._nvg(),
                            _ldb: F._nvl()
                        })
                    }
                }
                b = r._oqp();
                var A = r._oqq();
                a = new Array(b);
                for (var X = 0; X < b; X++) {
                    var Q = A[X];
                    if (Q !== undefined) {
                        var z = Q._bax();
                        z[0] = (z[0] * 50 * 50 * 0.5) / 1048576;
                        z[1] = -(z[1] * 50 * 50 * 0.5) / 1048576;
                        z[2] = (z[2] * 50 * 50 * 0.5) / 1048576;
                        a[X] = ezh({
                            _hw: X,
                            _bai: z,
                            _bak: Q._baz()
                        })
                    }
                }
                r._kb();
                r = null
            }
        }
    };
    return o
}();
var eog = function() {
    var l = 1;
    var n = 2;
    var g = 3;
    var k = new Float32Array(3);
    var r = new Float32Array(3);
    var p = new Float32Array(3);
    var j = new Float32Array(4);
    var q = new Float32Array(4);
    var b = evs.create();
    var h = evs.create();
    var a = new Array(3);
    var d = function(x, y, A, B, t, C, s, v, u, z) {
        this._bi = A;
        this._lku = true;
        this._lkv = false;
        this._lkx = null;
        this._das = v;
        this._cac = undefined;
        this._lkz = undefined;
        this._lla = fdd();
        this._llc = undefined;
        this._lld = fdd();
        this._lle = false;
        this._llg = false;
        this._daw = null;
        this._hwe = false;
        this._hoh = undefined;
        this._llh = null;
        this._bzy = null;
        this._bzz = false;
        this._llj = false;
        this._llk = undefined;
        this._llm = 0;
        this._lln = undefined;
        this._llo = undefined;
        this._llp = 0;
        this._llq = 0;
        this._llr = 0;
        this._llt = undefined;
        this._bg(x, y, A, B, t, C, s, u, z)
    };
    _qjz(fnv, d);
    d.prototype._bg = function(W, C, P, M, t, I, L, x, E) {
        if (P !== undefined && (W !== undefined || C !== undefined)) {
            if (W !== undefined) {
                e.call(this, W)
            } else {
                if (C !== undefined) {
                    e.call(this, C)
                }
            }
            c.call(this)
        } else {
            if ((W !== undefined || C !== undefined) && M !== undefined) {
                if (W !== undefined) {
                    e.call(this, W, M)
                } else {
                    if (C !== undefined) {
                        e.call(this, C, M)
                    }
                }
                c.call(this)
            } else {
                if (L !== undefined) {
                    this._cac = epn(L._cac);
                    this._daw = eqd({
                        _hqh: L._lnc
                    });
                    this._llg = true;
                    this._llm = L._llo.length;
                    this._llo = new Array(this._llm);
                    for (var Y = 0; Y < this._llm; Y++) {
                        this._llo[Y] = erd(undefined, undefined, undefined, undefined, L._llo[Y])
                    }
                    this._llr = L._llt.length;
                    this._llt = new Array(this._llr);
                    for (var Y = 0; Y < this._llr; Y++) {
                        this._llt[Y] = ewi(undefined, undefined, L._llt[Y], undefined)
                    }
                    this._llk = L._llk;
                    if (this._llk !== undefined) {
                        for (var Y = 0; Y < this._llk.length; Y++) {
                            this._llk[Y] = fff(this._llk[Y])
                        }
                    }
                    c.call(this)
                } else {
                    if (x !== undefined) {
                        this._llm = x._lpi();
                        this._llo = new Array(this._llm);
                        for (var U = 0; U < this._llm; U++) {
                            this._llo[U] = erd(undefined, undefined, undefined, undefined, undefined, undefined, x)
                        }
                        this._llr = x._lpi();
                        this._llt = new Array(this._llr);
                        for (var D = 0; D < this._llr; D++) {
                            this._llt[D] = ewi(undefined, undefined, undefined, undefined, x)
                        }
                        var K = x._lpl();
                        if (K > 0) {
                            this._llk = new Array(K);
                            for (var Y = 0; Y < K; Y++) {
                                this._llk[Y] = fff({
                                    _dax: x
                                })
                            }
                        }
                        var H = x._lpi() === 1;
                        if (H) {
                            this._cac = epn({
                                _dax: x,
                                _llu: E
                            });
                            if (E) {
                                for (var Y = 0; Y < this._llm; Y++) {
                                    this._llo[Y]._hwr(this._cac)
                                }
                                for (var Y = 0; Y < this._llr; Y++) {
                                    this._llt[Y]._hwr(this._cac)
                                }
                                this._cac._hdz()
                            }
                        }
                        this._daw = eqd({
                            _dax: x
                        });
                        c.call(this)
                    } else {
                        if (t !== undefined) {
                            if (t._lly()) {
                                throw new Error("2624 ")
                            }
                            this._cac = epn(t._llx()._rv());
                            this._daw = eqd(t._euq());
                            this._llg = true;
                            var R = t._lme();
                            this._llm = R.length;
                            this._llo = new Array(this._llm);
                            for (var Y = 0; Y < this._llm; Y++) {
                                this._llo[Y] = erd(undefined, undefined, undefined, undefined, R[Y]._rv(true, undefined))
                            }
                            var N = t._lmg();
                            this._llr = N.length;
                            this._llt = new Array(this._llr);
                            for (var Y = 0; Y < this._llr; Y++) {
                                this._llt[Y] = ewi(undefined, undefined, N[Y]._rv(true, undefined), undefined)
                            }
                            var X = t._lmb();
                            if (X !== undefined) {
                                this._llk = i(X)
                            }
                            c.call(this)
                        } else {
                            if (I !== undefined) {
                                this._llo = new Array(0);
                                this._llt = new Array(0);
                                this._daw = eqd(new Float32Array([0, 0, 0]), new Float32Array([0, 0, 0]));
                                this._llg = true;
                                this._cac = epn({
                                    empty: true
                                });
                                var y = 0;
                                for (var Y = 0; Y < I.length; Y++) {
                                    var V = I[Y];
                                    this._daw._osy(V._euq());
                                    this._cac._hdp(V._llx());
                                    var O = V._lmb();
                                    y += O === undefined ? 0 : O.length;
                                    var T = V._lme();
                                    for (var S = 0; S < T.length; S++) {
                                        var G = T[S];
                                        var F = false;
                                        for (var U = 0; U < this._llo.length; U++) {
                                            var J = this._llo[U];
                                            if (!J._hwi(G)) {
                                                continue
                                            }
                                            J._hwb(G, V._llw());
                                            F = true;
                                            break
                                        }
                                        if (!F) {
                                            this._llo.push(erd(undefined, undefined, undefined, G, undefined, V._llw()));
                                            this._llm++
                                        }
                                    }
                                    var B = V._lmg();
                                    for (var s = 0; s < B.length; s++) {
                                        var v = B[s];
                                        var F = false;
                                        for (var D = 0; D < this._llt.length; D++) {
                                            var u = this._llt[D];
                                            if (!u._hwi(v)) {
                                                continue
                                            }
                                            u._hwb(v, V._llw());
                                            F = true;
                                            break
                                        }
                                        if (!F) {
                                            this._llt.push(ewi(undefined, v, undefined, V._llw()));
                                            this._llr++
                                        }
                                    }
                                }
                                for (var U = 0; U < this._llo.length; U++) {
                                    this._llo[U]._hwj()
                                }
                                for (var D = 0; D < this._llt.length; D++) {
                                    this._llt[D]._hwj()
                                }
                                if (y > 0) {
                                    this._llk = new Array(y);
                                    var A = 0;
                                    for (var Y = 0; Y < I.length; Y++) {
                                        var V = I[Y];
                                        var O = V._lmb();
                                        if (O === undefined) {
                                            continue
                                        }
                                        for (var Q = 0; Q < O.length; Q++) {
                                            var z = O[Q]._rv();
                                            z._dsb = V._llw();
                                            this._llk[A++] = fff(z)
                                        }
                                    }
                                }
                                this._cac._hdl();
                                c.call(this)
                            } else {
                                throw new Error("2625 ")
                            }
                        }
                    }
                }
            }
        }
    };
    var c = function() {
        var t = new Array(this._llm);
        this._lln = this._lmk(this._llo, t, this._llm);
        this._llo = t;
        for (var s = 0; s < this._llm; s++) {
            if (this._llo[s]._hwe()) {
                this._hwe = true;
                break
            }
        }
        if (!this._hwe) {
            for (var s = 0; s < this._llr; s++) {
                if (this._llt[s]._hwe()) {
                    this._hwe = true;
                    break
                }
            }
        }
        _qkb(this, fnv, fqi._gol)
    };
    d.prototype._llv = function(s) {
        this._bi = s
    };
    d.prototype._llw = function() {
        return this._das
    };
    d.prototype._llx = function() {
        return this._cac
    };
    d.prototype._euq = function() {
        return this._daw
    };
    d.prototype._lly = function() {
        return this._bzz
    };
    d.prototype._lma = function() {
        return this._llj
    };
    d.prototype._lmb = function() {
        return this._llk
    };
    d.prototype._lmd = function() {
        return this._llm + this._llr
    };
    d.prototype._lme = function() {
        return this._llo
    };
    d.prototype._lmg = function() {
        return this._llt
    };
    d.prototype._lmh = function() {
        return (this._llm + this._llr === 0) && this._llk === undefined
    };
    d.prototype._lmi = function() {
        this._lku = true;
        this.constructFromModelRaw(_lkx)
    };
    var e = function(R, X) {
        this._lkx = R;
        var v, ad, S;
        if (!fjf._sxk() || !fkw._pyv()) {
            this._lku = false;
            return
        }
        var H = {};
        this._llr = 0;
        this._llt = new Array(0);
        var L = R._gmv();
        for (var Z = 0; Z < L; Z++) {
            var J = fkw._bhw(R._pkb(Z));
            var P = fjf._nuq(J._wr());
            if (J._cyp()) {
                H[R._pkd(Z)] = true
            }
            var I = R._pki(Z);
            var G = R._pkk(Z);
            var E = R._pkl(Z);
            var C = fvh({
                _bie: J,
                _cbl: R._pkf(Z, 0),
                _cbm: R._pkf(Z, 1),
                _cbn: R._pkf(Z, 2),
                _bii: R._gmo(R._pkd(Z)),
                _bif: I,
                _bik: G,
                _bil: E,
                _bim: R._pkg(Z)
            });
            var A = false;
            for (var T = 0; T < this._llr; T++) {
                A = this._llt[T]._hwl(C, P, I, G, E);
                if (A) {
                    break
                }
            }
            if (!A) {
                this._llt[this._llr] = ewi(P, undefined, undefined, undefined);
                this._llt[this._llr]._hwl(C, P, I, G, E);
                this._llr++
            }
        }
        var U = R._dmh();
        if (U > 0) {
            this._llk = new Array(U);
            for (var W = 0; W < U; W++) {
                var ag = R._pjo(W);
                var af = eru._srx(ag);
                if (af._cyp()) {
                    H[R._pjr(W)] = true
                }
                var N = {
                    _dsd: R._pjt(W, 0),
                    _bif: R._pju(W, 0)
                };
                var M = {
                    _dsd: R._pjt(W, 1),
                    _bif: R._pju(W, 1)
                };
                var K = {
                    _dsd: R._pjt(W, 2),
                    _bif: R._pju(W, 2)
                };
                this._llk[W] = fff({
                    _drz: ag,
                    _cbl: N,
                    _cbm: M,
                    _cbn: K
                })
            }
        }
        var t = 0;
        var ah = new Array(0);
        var ac = R._glw();
        var V = R._glj();
        for (var Q = 0; Q < ac; Q++) {
            if (H[Q] === true) {
                continue
            }
            var F = undefined;
            var ae = R._gmg(Q);
            if (ae !== undefined) {
                F = fjf._nuq(ae);
                if (F !== undefined && F._rrl()) {
                    continue
                }
            }
            var s = R._glu(Q, a);
            var G = R._bib(Q);
            var Y = undefined;
            if (R._gls(Q)) {
                Y = fds._lmj
            }
            var A = false;
            for (var T = 0; T < t; T++) {
                A = ah[T]._spj(Q, F, s, G, Y);
                if (A) {
                    break
                }
            }
            if (!A) {
                if (F !== undefined) {
                    ah[t] = erd(F, undefined, Y)
                } else {
                    ah[t] = erd(undefined, true, Y)
                }
                if (!ah[t]._spj(Q, F, s, G, Y)) {
                    throw new Error("2626 ")
                }
                t++
            }
        }
        if (X !== undefined) {
            this._cac = X
        } else {
            var aa = R._gmk(fkw);
            this._cac = fbl._sxb(aa)
        }
        this._llm = t;
        this._llo = new Array(this._llm);
        this._lln = this._lmk(ah, this._llo, this._llm, R);
        var u = new Array(ac);
        var ab = new Array(V);
        for (T = 0; T < this._llm; T++) {
            this._llo[T]._spn(R, u, ab, this._cac)
        }
        for (var z = 0; z < V; z++) {
            var D = ab[z];
            if (D !== undefined) {
                D._spo[0] /= D._dpe;
                D._spo[1] /= D._dpe;
                D._spo[2] /= D._dpe;
                fqv.normalize(D._spo)
            }
        }
        var y = new Float32Array([9999999999, 9999999999, 9999999999]);
        var x = new Float32Array([-9999999999, -9999999999, -9999999999]);
        for (T = 0; T < this._llm; T++) {
            this._llo[T]._hwm(R, ab, u, y, x)
        }
        for (var B = 0; B < this._llr; B++) {
            this._llt[B]._hwm(this._cac, y, x)
        }
        this._daw = eqd(y, x);
        if (this._llk !== undefined) {
            for (var v = 0; v < this._llk.length; v++) {
                var O = this._llk[v];
                this._daw._osw(O._dru()._dsd);
                this._daw._osw(O._drw()._dsd);
                this._daw._osw(O._drx()._dsd)
            }
        }
        this._llg = true;
        if (this._bi !== undefined) {
            this._ccj(true)
        }
        u = undefined;
        ab = undefined;
        this._lkv = true
    };
    d.prototype._lmk = function(z, B, y, A) {
        var x = 0,
            v = 0;
        for (var t = 0; t < y; t++) {
            var u = z[t];
            var s = u._dvt();
            if (s !== fds._lmj) {
                B[x++] = u
            } else {
                B[y - 1 - (v++)] = u;
                if (A !== undefined) {
                    u._spl(A)
                }
            }
        }
        return x
    };
    d.prototype.transform = function(u) {
        if (this._bzz) {
            throw new Error("2627 ")
        }
        for (var v = 0; v < this._llm; v++) {
            this._llo[v].transform(u)
        }
        for (var t = 0; t < this._llr; t++) {
            this._llt[t].transform(u)
        }
        if (this._llk !== undefined) {
            for (var s = 0; s < this._llk.length; s++) {
                this._llk[s].transform(u)
            }
        }
        this._daw.transform(u)
    };
    d.prototype.translate = function(t) {
        if (this._bzz) {
            throw new Error("2628 ")
        }
        for (var v = 0; v < this._llm; v++) {
            this._llo[v].translate(t)
        }
        for (var u = 0; u < this._llr; u++) {
            this._llt[u].translate(t)
        }
        if (this._llk !== undefined) {
            for (var s = 0; s < this._llk.length; s++) {
                this._llk[s].translate(t)
            }
        }
        this._daw.translate(t)
    };
    d.prototype.rotate = function(x, t) {
        if (this._bzz) {
            throw new Error("2629 ")
        }
        for (var v = 0; v < this._llm; v++) {
            this._llo[v].rotate(x, t)
        }
        for (var u = 0; u < this._llr; u++) {
            this._llt[u].rotate(x)
        }
        if (this._llk !== undefined) {
            for (var s = 0; s < this._llk.length; s++) {
                this._llk[s].rotate(x)
            }
        }
        fqr._gnn(x, b);
        this._daw.transform(b)
    };
    d.prototype._dsg = function(t, u) {
        if (this._bzz) {
            throw new Error("2630 ")
        }
        for (var x = 0; x < this._llm; x++) {
            this._llo[x]._dsg(t, u)
        }
        for (var v = 0; v < this._llr; v++) {
            this._llt[v]._dsg(t)
        }
        if (this._llk !== undefined) {
            for (var s = 0; s < this._llk.length; s++) {
                this._llk[s]._dsg(t)
            }
        }
        evs._eii(b);
        evs._qyu(b, (Math.PI * 2) * t / 4);
        this._daw.transform(b)
    };
    d.prototype._hwp = function(s, E, A, v) {
        if (this._bzz) {
            throw new Error("2631 ")
        }
        var t = this._daw._hjr()[1];
        var x = this._daw._kg();
        for (var u = 0; u < this._llm; u++) {
            this._llo[u]._hwp(s, E, A, v, t, x, m)
        }
        for (var C = 0; C < this._llr; C++) {
            this._llt[C]._hwp(s, E, A, v, t, x, m)
        }
        if (this._llk !== undefined) {
            for (var y = 0; y < this._llk.length; y++) {
                var D = this._llk[y]._dru()._dsd;
                D[1] = m(s, E, A, v, t, x, D[0], D[1], D[2]);
                var B = this._llk[y]._drw()._dsd;
                B[1] = m(s, E, A, v, t, x, B[0], B[1], B[2]);
                var z = this._llk[y]._drx()._dsd;
                z[1] = m(s, E, A, v, t, x, z[0], z[1], z[2])
            }
        }
    };
    d.prototype._lmm = function(v, E, H, G, z) {
        var M = undefined;
        var s = Math.PI * 2;
        var x = z(v, 0);
        var C = z(0, 0);
        var F = z(v, E);
        var t = z(0, E);
        var D = (x > C) ? x : C;
        var J = (F > t) ? F : t;
        var B = (C > t) ? C : t;
        var L = (x > F) ? x : F;
        if (E !== 0) {
            var A = Math.atan2(D - J, E) % s;
            if (A !== 0) {
                if (H !== 0) {
                    if (A > Math.PI) {
                        var K = s - H;
                        if (A < K) {
                            A = K
                        }
                    } else {
                        if (A > H) {
                            A = H
                        }
                    }
                }
                M = evs._eii();
                evs._qyt(M, A)
            }
        }
        if (v !== 0) {
            var y = Math.atan2(L - B, v) % s;
            if (y !== 0) {
                if (G !== 0) {
                    if (y > Math.PI) {
                        var I = s - G;
                        if (y < I) {
                            y = I
                        }
                    } else {
                        if (y > G) {
                            y = G
                        }
                    }
                }
                if (M === undefined) {
                    M = evs._eii()
                }
                evs._qyw(M, y)
            }
        }
        var u = x + t;
        if (C + F > u) {
            u = C + F
        }
        if (u !== 0) {
            k[0] = k[2] = 0;
            k[1] = u / 2;
            if (M === undefined) {
                M = evs._eii()
            }
            evs.translate(M, k)
        }
        return M
    };
    var m = function(s, F, C, u, t, v, z, y, x) {
        if (s === fpe._qgl) {
            return y + C(z, x)
        } else {
            if (s === fpe._qgm) {
                var E = y * 65535 / t;
                if (E < F) {
                    return y + (C(z, x) * (F - E)) / F
                } else {
                    return y
                }
            } else {
                if (s === fpe._qgn) {
                    var D = u(z, x);
                    if (D === undefined) {
                        return y
                    } else {
                        return y + D - v
                    }
                } else {
                    if (s === fpe._qgp) {
                        var A = C(z, x);
                        var D = u(z, x);
                        if (D === undefined) {
                            return y
                        } else {
                            var B = D - A - F;
                            return y / v * B + A
                        }
                    }
                }
            }
        }
    };
    d.prototype._lmq = function() {
        if (this._llr > 0) {
            return true
        }
        for (var s = 0; s < this._llm; s++) {
            if (this._llo[s]._dvt() === fds._lmj) {
                return true
            }
        }
        return false
    };
    d.prototype._lmr = function() {
        for (var s = 0; s < this._llm; s++) {
            if (this._llo[s]._dvt() !== fds._lmj) {
                return true
            }
        }
        return false
    };
    d.prototype._ccj = function(s) {
        if (this._bzz && !s) {
            return
        }
        for (var u = 0; u < this._llm; u++) {
            this._llo[u]._ccj(this._bi)
        }
        for (var t = 0; t < this._llr; t++) {
            this._llt[t]._ccj(this._bi)
        }
        this._bzz = true
    };
    d.prototype._lms = function() {
        if (!this._lku) {
            this._lmi()
        }
        if (!this._lku) {
            return false
        }
    };
    d.prototype._lmu = function(s) {
        this._hoh = s;
        if (this._hoh === _gkf || !this._hwe) {
            this._hoh = undefined
        }
    };
    d.prototype._lmv = function(v, u) {
        this._lle = false;
        var t = fij._bc();
        if (t._ryh(eqs._mgh)) {
            var s = t._qow(eqs._mgh);
            if (s._rhi(u, this._daw._ota(), v._npc)) {
                this._lle = true
            }
        }
    };
    d.prototype._lmx = function(t, s) {
        this._llp = 0;
        this._llq = this._llm;
        if (t !== undefined) {
            if ((s !== undefined && s[3] < 0) || (this._hoh !== undefined && this._hoh._rm())) {
                if (t !== fds._lmj) {
                    return false
                }
            } else {
                if (t === fds._lmj) {
                    this._llp = this._lln
                } else {
                    this._llq = this._lln
                }
            }
        }
        return true
    };
    d.prototype._cdh = function(u) {
        var s = fij._bc();
        this._lkz = fpu._lj;
        this._lla.enable(fct._dqw);
        if (this._bi._dje()) {
            this._lla.enable(fct._dqy)
        }
        if (this._hoh !== undefined) {
            this._lla.enable(fct._dqn)
        }
        var t = s._qow(eqs._mgg);
        if (t._gcm() >= eoc._qn && this._cac !== undefined) {
            this._lla.enable(fct._dpw);
            if (this._cac._hdj()) {
                this._lla.enable(fct._dpx)
            }
        }
        if (u) {
            this._llc = fpu._lr;
            this._lld = fdd([fct._dpw]);
            if (this._cac !== undefined && this._cac._hdj()) {
                this._lld.enable(fct._dpx)
            }
            if (this._lle) {
                this._lld.enable(fct._dqf)
            }
            if (this._hoh !== undefined) {
                this._lld.enable(fct._dqo)
            }
        }
    };
    d.prototype._cdi = function(t, u, s) {
        this._cdn(t, u, s);
        this._lla.enable(fct._nv);
        this._lld.enable(fct._nv)
    };
    d.prototype._cdj = function(u) {
        var s = fij._bc();
        this._lkz = fpu._lj;
        this._lla.enable(fct._dqv);
        this._lla.enable(fct._dqw);
        if (this._bi._dje()) {
            this._lla.enable(fct._dqy)
        }
        if (this._hoh !== undefined) {
            this._lla.enable(fct._dqn)
        }
        var t = s._qow(eqs._mgg);
        if (this._cac !== undefined) {
            this._lla.enable(fct._dpw);
            if (this._cac._hdj()) {
                this._lla.enable(fct._dpx)
            }
        }
        if (u) {
            this._llc = fpu._lr;
            this._lld = fdd([fct._dpw]);
            if (this._cac !== undefined && this._cac._hdj()) {
                this._lld.enable(fct._dpx)
            }
            if (this._lle) {
                this._lld.enable(fct._dqf)
            }
            if (this._hoh !== undefined) {
                this._lld.enable(fct._dqo)
            }
        }
    };
    d.prototype._cdl = function(u, v, s) {
        var t = fij._bc();
        this._lkz = fpu._lj;
        this._lla.enable(fct._dqv);
        if (this._cac !== undefined) {
            this._lla.enable(fct._dpw);
            if (this._cac._hdj()) {
                this._lla.enable(fct._dpx)
            }
        }
        if (!v) {
            if (this._hoh !== undefined) {
                this._lla.enable(fct._dqn)
            }
            if (s && t._ryh(eqs._dqj)) {
                this._lla.enable(fct._dqj)
            }
        }
        if (u) {
            this._llc = fpu._lr;
            this._lld = fdd([fct._dpw]);
            if (this._cac !== undefined && this._cac._hdj()) {
                this._lld.enable(fct._dpx)
            }
            if (this._hoh !== undefined) {
                this._lld.enable(fct._dqo)
            }
        }
        this._lla.enable(fct._od);
        this._lld.enable(fct._od)
    };
    d.prototype._cdn = function(v, x, s) {
        var t = fij._bc();
        this._lkz = fpu._lj;
        this._lla.enable(fct._dqv);
        if (this._cac !== undefined) {
            this._lla.enable(fct._dpw);
            if (this._cac._hdj()) {
                this._lla.enable(fct._dpx)
            }
        }
        if (x) {
            this._lla.enable(fct._dpn)
        } else {
            this._lla.enable(fct._dpp)
        }
        if (this._lle) {
            this._lla.enable(fct._dqf)
        }
        if (!x) {
            var y = t._qow(eqs._mgf);
            if (y._xv() && y._pei() > 0) {
                this._lla.enable(fct._dps)
            }
            if (t._ryh(eqs._mgg)) {
                this._lla.enable(fct._dpz);
                if (this._bi._dje()) {
                    this._lla.enable(fct._dqy)
                }
                var u = t._qow(eqs._mgg);
                eoc._evg(this._lla, u._gcm())
            }
            if (this._hoh !== undefined) {
                this._lla.enable(fct._dqn)
            }
            if (s && t._ryh(eqs._dqj)) {
                this._lla.enable(fct._dqj)
            }
        }
        if (etf._nim()) {
            this._lla.enable(fct._dqq)
        }
        if (t._ryh(eqs._drh)) {
            this._lla.enable(fct._drh)
        }
        if (v) {
            this._llc = fpu._lr;
            this._lld = fdd([fct._dpw]);
            if (this._cac !== undefined && this._cac._hdj()) {
                this._lld.enable(fct._dpx)
            }
            if (this._lle) {
                this._lld.enable(fct._dqf)
            }
            if (this._hoh !== undefined) {
                this._lld.enable(fct._dqo)
            }
        }
    };
    d.prototype._cdt = function(H, C, B, A, J, t, s, y, v, F) {
        this._lms();
        if (etf._nin()) {
            return
        }
        this._lmu(J);
        this._lmv(C, B);
        if (!this._lmx(s, y)) {
            return
        }
        var G = fij._bc();
        var L = G._yg(eqs._mgn);
        var D = G._yg(eqs._mgg);
        var E = G._yg(eqs._nv);
        var I = G._yg(eqs._ob);
        var z = G._yg(eqs._od);
        var x = !t && !D && !L && !E && this._llr > 0 && (s === undefined || s === fds._lmj);
        this._lla._yh();
        this._lld._yh();
        if (L) {
            return
        } else {
            if (D) {
                this._cdh(x)
            } else {
                if (E) {
                    this._cdi(x, t, v)
                } else {
                    if (I) {
                        this._cdj(x)
                    } else {
                        if (z) {
                            this._cdl(x, t, v)
                        } else {
                            this._cdn(x, t, v);
                            if (this._bi._tac()) {
                                this._lla.enable(fct._nv)
                            }
                        }
                    }
                }
            }
        }
        var u = true;
        for (var K = this._llp; K < this._llq; K++) {
            u &= this._llo[K]._cdt(this._bi, G, this._lkz, this._lla, C, B, A, this._cac, y, H, this._hoh, F)
        }
        if (x) {
            this._bi._dkc(true);
            this._bi._dkm();
            for (var K = 0; K < this._llr; K++) {
                u &= this._llt[K]._cdt(this._bi, G, this._llc, this._lld, C, B, this._cac, y, this._hoh, F)
            }
            this._bi._dki()
        }
        this._bi._dlf();
        this._bi._dle();
        return u
    };
    d.prototype._cdp = function(B, H, C, A, z, J, t, s, x, u, F) {
        this._lms();
        if (etf._nin()) {
            return
        }
        this._lmu(J);
        this._lmv(C, A);
        if (!this._lmx(s, x)) {
            return
        }
        var G = fij._bc();
        var K = G._yg(eqs._mgn);
        var D = G._yg(eqs._mgg);
        var E = G._yg(eqs._nv);
        var I = G._yg(eqs._ob);
        var y = G._yg(eqs._od);
        var v = !t && !D && !K && !E && this._llr > 0 && (s === undefined || s === fds._lmj);
        this._lla._yh();
        this._lld._yh();
        if (K) {
            return
        } else {
            if (D) {
                this._cdh(v)
            } else {
                if (E) {
                    this._cdi(v, t, u)
                } else {
                    if (I) {
                        this._cdj(v)
                    } else {
                        if (y) {
                            this._cdl(v, t, u)
                        } else {
                            this._cdn(v, t, u);
                            if (this._bi._tac()) {
                                this._lla.enable(fct._nv)
                            }
                        }
                    }
                }
            }
        }
        if (B._bzd(B._gyr)) {
            this._cdq(B, v, B._gyr, C, A, z, x, H, F)
        }
        if (B._gyr !== fqh._od && B._bzd(fqh._od)) {
            this._lla._yh();
            this._lld._yh();
            this._cdl(v, t, u);
            this._cdq(B, v, fqh._od, C, A, z, x, H, F)
        }
        if (B._gyr !== fqh._ob && B._bzd(fqh._ob)) {
            this._lla._yh();
            this._lld._yh();
            this._cdj(v);
            this._cdq(B, v, fqh._ob, C, A, z, x, H, F)
        }
        if (B._gyr !== fqh._nv && B._bzd(fqh._nv)) {
            v = false;
            this._lla._yh();
            this._lld._yh();
            this._cdi(v, t, u);
            this._cdq(B, v, fqh._nv, C, A, z, x, H, F)
        }
        this._bi._dlf()
    };
    d.prototype._cdq = function(s, E, G, B, x, v, u, t, z) {
        var A = fij._bc();
        var F = ewy._jp();
        F._yh();
        this._lla._qhj(F);
        for (var D = this._llp; D < this._llq; D++) {
            var y = this._llo[D]._cdp(s, this._bi, A, this._lkz, F, B, x, v, this._cac, u, t, this._hoh, z);
            s._gyy(G, y)
        }
        if (E) {
            var C = ewy._jp();
            C._yh();
            this._lld._qhj(C);
            for (var D = 0; D < this._llr; D++) {
                var y = this._llt[D]._cdp(s, true, false, this._bi, A, this._llc, C, B, x, this._cac, u, this._hoh, z);
                s._gyy(G, y)
            }
        }
    };
    d.prototype._lmz = function(A, u, C, y, s) {
        if (this._llk === undefined) {
            return
        }
        if (C === _gkf || !this._hwe) {
            C = undefined
        }
        for (var B = 0; B < this._llk.length; B++) {
            var x = this._llk[B];
            var t = y === undefined || y[x._dry()] === 0;
            if (!t) {
                continue
            }
            var F = x._dru(),
                E = x._drw(),
                D = x._drx();
            fqv.set(F._dsd, k);
            fqv.set(E._dsd, r);
            fqv.set(D._dsd, p);
            if (C !== undefined) {
                var z;
                if (F._bif !== undefined) {
                    z = C._rh(null, F._bif, h);
                    evs._qyn(z, k)
                }
                if (E._bif !== undefined) {
                    var G;
                    if (E._bif === F._bif) {
                        G = z
                    } else {
                        G = C._rh(null, E._bif, h)
                    }
                    evs._qyn(G, r)
                }
                if (D._bif !== undefined) {
                    var v;
                    if (D._bif === F._bif) {
                        v = z
                    } else {
                        v = C._rh(null, D._bif, h)
                    }
                    evs._qyn(v, p)
                }
            }
            evs._gnd(u, k);
            evs._gnd(u, r);
            evs._gnd(u, p);
            A._lab(this._llk[B], k, r, p, s)
        }
    };
    d.prototype._lna = function() {
        return this._cac === undefined || this._cac._hdv()
    };
    d.prototype._rv = function(t, v) {
        if (this._bzz) {
            throw new Error("2632 ")
        }
        if (this._llj) {
            throw new Error("2633 ")
        }
        var s = {
            _llo: new Array(this._llo.length),
            _llt: new Array(this._llt.length),
            _llk: o(this._llk),
            _cac: this._cac === undefined ? undefined : this._cac._rv(false),
            _lnc: this._daw._rv()
        };
        for (var x = 0; x < this._llm; x++) {
            s._llo[x] = this._llo[x]._rv(t, v)
        }
        for (var u = 0; u < this._llr; u++) {
            s._llt[u] = this._llt[u]._rv(t, v)
        }
        return s
    };
    d.prototype._dsf = function(t) {
        if (this._bzz) {
            throw new Error("2634 ")
        }
        if (this._llj) {
            throw new Error("2635 ")
        }
        t._lhh(this._llo.length);
        for (var v = 0; v < this._llm; v++) {
            this._llo[v]._dsf(t)
        }
        t._lhh(this._llt.length);
        for (var u = 0; u < this._llr; u++) {
            this._llt[u]._dsf(t)
        }
        if (this._llk !== undefined) {
            t._lhi(this._llk.length);
            for (var s = 0; s < this._llk.length; s++) {
                this._llk[s]._dsf(t)
            }
        } else {
            t._lhi(0)
        }
        if (this._cac !== undefined) {
            t._lhh(1);
            this._cac._dsf(t, false, false)
        } else {
            t._lhh(0)
        }
        this._daw._dsf(t)
    };
    d.prototype._kb = function() {
        if (this._cac !== undefined) {
            this._cac._kb()
        }
        for (var s = 0; s < this._llm; s++) {
            this._llo[s]._kb(this._bi)
        }
        for (var s = 0; s < this._llr; s++) {
            this._llt[s]._kb(this._bi)
        }
        this._llk = undefined;
        this._llj = true
    };
    d.prototype._cak = function() {
        if (this._bzz) {
            var t = 0;
            for (var s = 0; s < this._llm; s++) {
                t += this._llo[s]._hwg()
            }
            for (var s = 0; s < this._llr; s++) {
                t += this._llt[s]._hwg()
            }
            return t
        } else {
            return 0
        }
    };
    var o = function(u) {
        if (u === undefined) {
            return undefined
        }
        var t = new Array(u.length);
        for (var s = 0; s < u.length; s++) {
            t[s] = u[s]._rv()
        }
        return t
    };
    var i = function(t) {
        var u = new Array(t.length);
        for (var s = 0; s < t.length; s++) {
            u[s] = fff(t[s]._rv())
        }
        return u
    };
    return function(x, y, A, B, t, C, s, v, u, z) {
        return new d(x, y, A, B, t, C, s, v, u, z)
    }
}();
var fht = function() {
    var a = {};
    a._nq = 4;
    a._cfc = 8;
    a._cfe = 8;
    a._cfg = 512;
    a._cfi = 2;
    a._cfj = 7 + a._cfi;
    a._cfl = 200;
    a._cfn = 200;
    a._cfp = a._cfl * a._cfc;
    a._cfq = a._cfn * a._cfc;
    a._cfu = a._cfp * a._cfe;
    a._cfw = a._cfq * a._cfe;
    a._cfy = a._cfu * a._cfg;
    a._cga = a._cfw * a._cfg;
    a._cgc = a._cfc * a._cfe;
    a._cge = a._cgc * a._cfg;
    a._cgf = a._cfe * a._cfg;
    a._cgh = a._cfg - 1;
    a._cgi = a._cfg / 2;
    return a
}();
var ftb = function() {
    var d = {};
    d._qvz = 0;
    d._qwa = 1;
    d._qwc = 2;
    d._qwe = 3;
    d._qwg = 9;
    d._qwi = 4;
    d._qwj = 5;
    d._qwl = 6;
    d._qwm = 7;
    d._qwo = 8;
    d._qwq = 12;
    d._qwr = 13;
    d._qws = 14;
    d._qwt = 15;
    d._qwu = 16;
    d._qww = 17;
    d._qwx = 18;
    d._qwz = 19;
    d._qxb = 20;
    d._qxc = 21;
    d._qxe = 10;
    d._qxg = 11;
    d._qxi = 22;
    d._qxk = function(g) {
        return (g >= d._qvz && g <= d._qwe) || g === d._qwg
    };
    d._qxm = function(g) {
        return g >= d._qwi && g <= d._qwo
    };
    d._qxn = function(g) {
        return g >= d._qwq && g <= d._qxc
    };
    d._qxp = function(g) {
        return g >= d._qwx && g <= d._qxc
    };
    d._qxq = function(g) {
        return g === d._qwj || g === d._qwl
    };
    d._qxr = function(g) {
        return g === d._qwo || g === d._qwm || g === d._qwl
    };
    d._qxs = function(g) {
        return g === d._qxe || g === d._qxg
    };
    d._qxt = function(g) {
        if (g <= d._qwe) {
            return 0
        }
        if (g <= d._qwo) {
            return 1
        }
        if (g <= d._qxc) {
            return 2
        }
        return 3
    };
    var b = [1, 0, -1, 0],
        e = [0, -1, 0, 1];
    var c = [1, -1, -1, 1],
        a = [-1, -1, 1, 1];
    d._qxv = function(m, l, r, j, s) {
        if (s === undefined) {
            s = {}
        }
        var h = 0,
            g = 0;
        var k = 0,
            i = 0;
        var q = 0;
        var p = l * Math.PI / 2;
        if (d._qxm(m)) {
            if (m === d._qwj) {
                if (r !== -1) {
                    q = r + 1
                } else {
                    q = 65
                }
                h = q * b[l];
                g = q * e[l]
            } else {
                if (m === d._qwl || j) {
                    if (r !== -1) {
                        q = (r / 2) + 1
                    } else {
                        q = 33
                    }
                    h = q * c[l];
                    g = q * a[l]
                }
            }
            if (d._qxr(m)) {
                if (m === d._qwm) {
                    p += Math.PI
                }
                var o = 180,
                    n = -180;
                k = o * Math.cos(-p) - n * Math.sin(-p);
                i = o * Math.sin(-p) + n * Math.cos(-p);
                p += (Math.PI / 4)
            }
        }
        if (m === d._qxg) {
            p += Math.PI / 4
        }
        s._qxx = p;
        s._qxz = h + k;
        s._qyb = g + i;
        return s
    };
    return d
}();
var fih = function() {
    var a8 = {};
    var y = 0;
    var ar = 0;
    var E = ar + 1;
    var a4 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_=!@#$%^&*()[]{}|;:,.<>/?`~ \\'\"+-";
    for (y = 0;
        (1 << (y + 1)) > (1 << y); y++) {}
    y >>= 1;
    ar = (1 << y) - 1;
    E = ar + 1;
    var U = new Array(0);
    var aL = U;
    var o = U;
    var l = U;
    var k = U;
    var j = U;
    var i = U;
    var h = U;
    var g = U;
    var e = U;
    var an = U;
    var aT = U;
    var aJ = U;
    var F = U;
    var P = U;
    var Q = U;
    var S = U;
    var aB = U;
    var aA = U;
    var ay = U;
    var aw = U;
    var af = U;
    var ae = U;
    var ad = U;
    var aF = U;
    var O = U;
    var N = U;
    var aC = U;
    var M = U;
    var ah = U;
    var Y = U;
    var aI = U;
    var aj = U;
    var a6 = U;
    var R = U;
    var a0 = U;
    var ac = U;
    var H = U;
    var V = U;
    var ab = U;
    var Z = U;
    var L = U;
    var K = U;
    var aN = U;
    var aZ = U;
    var a2 = function(bc) {
        var t, ba, bb, T;
        ba = new Array(bc);
        for (t = 0; t < bc; t++) {
            ba[t] = 0
        }
        ba[0] = 2;
        bb = 0;
        for (; ba[bb] < bc;) {
            for (t = ba[bb] * ba[bb]; t < bc; t += ba[bb]) {
                ba[t] = 1
            }
            bb++;
            ba[bb] = ba[bb - 1] + 1;
            for (; ba[bb] < bc && ba[ba[bb]]; ba[bb]++) {}
        }
        T = new Array(bb);
        for (t = 0; t < bb; t++) {
            T[t] = ba[t]
        }
        return T
    };
    var m = function(T, t) {
        if (aJ.length != T.length) {
            aJ = J(T);
            F = J(T);
            P = J(T)
        }
        z(P, t);
        return aG(T, P)
    };
    var aG = function(ba, T) {
        var t, bc, bd, bb;
        if (aJ.length != ba.length) {
            aJ = J(ba);
            F = J(ba);
            P = J(ba)
        }
        at(P, T);
        at(F, ba);
        at(aJ, ba);
        ao(F, -1);
        ao(aJ, -1);
        bd = 0;
        for (t = 0; t < F.length; t++) {
            for (bc = 1; bc < ar; bc <<= 1) {
                if (ba[t] & bc) {
                    bb = (bd < F.length + y ? bd : 0);
                    t = F.length;
                    bc = ar
                } else {
                    bd++
                }
            }
        }
        if (bb) {
            G(F, bb)
        }
        aK(P, F, ba);
        if (!A(P, 1) && !am(P, aJ)) {
            bc = 1;
            while (bc <= bb - 1 && !am(P, aJ)) {
                aE(P, ba);
                if (A(P, 1)) {
                    return 0
                }
                bc++
            }
            if (!am(P, aJ)) {
                return 0
            }
        }
        return 1
    };
    var au = function(t) {
        var bb, ba, T;
        for (bb = t.length - 1;
            (t[bb] == 0) && (bb > 0); bb--) {}
        for (ba = 0, T = t[bb]; T;
            (T >>= 1), ba++) {}
        ba += y * bb;
        return ba
    };
    var az = function(t, ba) {
        var T = aR(0, (t.length > ba ? t.length : ba) * y, 0);
        at(T, t);
        return T
    };
    var ag = function(T) {
        var t = aR(0, T, 0);
        al(t, T);
        return aV(t, 1)
    };
    var D = function(t) {
        if (t >= 600) {
            return r(t, 2)
        }
        if (t >= 550) {
            return r(t, 4)
        }
        if (t >= 500) {
            return r(t, 5)
        }
        if (t >= 400) {
            return r(t, 6)
        }
        if (t >= 350) {
            return r(t, 7)
        }
        if (t >= 300) {
            return r(t, 9)
        }
        if (t >= 250) {
            return r(t, 12)
        }
        if (t >= 200) {
            return r(t, 15)
        }
        if (t >= 150) {
            return r(t, 18)
        }
        if (t >= 100) {
            return r(t, 27)
        }
        return r(t, 40)
    };
    var r = function(bb, bd) {
        var ba, T, t, bc;
        bc = 30000;
        ba = aR(0, bb, 0);
        if (M.length == 0) {
            M = a2(30000)
        }
        if (aZ.length != ba.length) {
            aZ = J(ba)
        }
        for (;;) {
            aS(ba, bb, 0);
            ba[0] |= 1;
            t = 0;
            for (T = 0;
                (T < M.length) && (M[T] <= bc); T++) {
                if (a5(ba, M[T]) == 0 && !A(ba, M[T])) {
                    t = 1;
                    break
                }
            }
            for (T = 0; T < bd && !t; T++) {
                aS(aZ, bb, 0);
                while (!C(ba, aZ)) {
                    aS(aZ, bb, 0)
                }
                if (!aG(ba, aZ)) {
                    t = 1
                }
            }
            if (!t) {
                return ba
            }
        }
    };
    var b = function(t, ba) {
        var T = J(t);
        ax(T, ba);
        return aV(T, 1)
    };
    var q = function(t, ba) {
        var T = az(t, t.length + 1);
        ao(T, ba);
        return aV(T, 1)
    };
    var d = function(t, ba) {
        var T = az(t, t.length + ba.length);
        aP(T, ba);
        return aV(T, 1)
    };
    a8._plo = function(t, bb, ba) {
        var T = az(t, ba.length);
        aK(T, aV(bb, 2), aV(ba, 2), 0);
        return aV(T, 1)
    };
    var aX = aX;
    var aY = function(t, ba) {
        var T = az(t, (t.length > ba.length ? t.length + 1 : ba.length + 1));
        a3(T, ba);
        return aV(T, 1)
    };
    var x = function(t, ba) {
        var T = az(t, (t.length > ba.length ? t.length + 1 : ba.length + 1));
        aD(T, ba);
        return aV(T, 1)
    };
    var a7 = function(t, bb) {
        var T = az(t, bb.length);
        var ba;
        ba = X(T, bb);
        return ba ? aV(T, 1) : null
    };
    var ai = function(t, bb, ba) {
        var T = az(t, ba.length);
        aM(T, bb, ba);
        return aV(T, 1)
    };
    var al = function(bh, t) {
        var bj, bc, bd, bk, be, bi, T, bg, ba, bb, bf;
        if (M.length == 0) {
            M = a2(30000)
        }
        if (ah.length == 0) {
            ah = new Array(512);
            for (be = 0; be < 512; be++) {
                ah[be] = Math.pow(2, be / 511 - 1)
            }
        }
        bj = 0.1;
        bc = 20;
        recLimit = 20;
        if (aI.length != bh.length) {
            aI = J(bh);
            aj = J(bh);
            a0 = J(bh);
            H = J(bh);
            Z = J(bh);
            L = J(bh);
            K = J(bh);
            ab = J(bh);
            V = J(bh);
            Y = J(bh);
            a6 = J(bh);
            R = J(bh);
            ac = J(bh);
            aN = J(bh)
        }
        if (t <= recLimit) {
            bd = (1 << ((t + 2) >> 1)) - 1;
            z(bh, 0);
            for (bk = 1; bk;) {
                bk = 0;
                bh[0] = 1 | (1 << (t - 1)) | Math.floor(Math.random() * (1 << t));
                for (be = 1;
                    (be < M.length) && ((M[be] & bd) == M[be]); be++) {
                    if (0 == (bh[0] % M[be])) {
                        bk = 1;
                        break
                    }
                }
            }
            W(bh);
            return
        }
        T = bj * t * t;
        if (t > 2 * bc) {
            for (bi = 1; t - t * bi <= bc;) {
                bi = ah[Math.floor(Math.random() * 512)]
            }
        } else {
            bi = 0.5
        }
        bf = Math.floor(bi * t) + 1;
        al(R, bf);
        z(aI, 0);
        aI[Math.floor((t - 2) / y)] |= (1 << ((t - 2) % y));
        c(aI, R, Y, a6);
        ba = au(Y);
        for (;;) {
            for (;;) {
                aS(aj, ba, 0);
                if (C(Y, aj)) {
                    break
                }
            }
            ao(aj, 1);
            aD(aj, Y);
            at(V, R);
            aP(V, aj);
            n(V, 2);
            ao(V, 1);
            at(H, aj);
            n(H, 2);
            for (bg = 0, be = 0;
                (be < M.length) && (M[be] < T); be++) {
                if (a5(V, M[be]) == 0 && !A(V, M[be])) {
                    bg = 1;
                    break
                }
            }
            if (!bg) {
                if (!m(V, 2)) {
                    bg = 1
                }
            }
            if (!bg) {
                ao(V, -3);
                for (be = V.length - 1;
                    (V[be] == 0) && (be > 0); be--) {}
                for (bb = 0, w = V[be]; w;
                    (w >>= 1), bb++) {}
                bb += y * be;
                for (;;) {
                    aS(ac, bb, 0);
                    if (C(V, ac)) {
                        break
                    }
                }
                ao(V, 3);
                ao(ac, 2);
                at(ab, ac);
                at(a0, V);
                ao(a0, -1);
                aK(ab, a0, V);
                ao(ab, -1);
                if (aQ(ab)) {
                    at(ab, ac);
                    aK(ab, H, V);
                    ao(ab, -1);
                    at(aN, V);
                    at(Z, ab);
                    B(Z, V);
                    if (A(Z, 1)) {
                        at(bh, aN);
                        return
                    }
                }
            }
        }
    };
    var aH = function(bb, ba) {
        var T, t;
        T = Math.floor((bb - 1) / y) + 2;
        t = aR(0, 0, T);
        aS(t, bb, ba);
        return t
    };
    var aS = function(T, bc, bb) {
        var t, ba;
        for (t = 0; t < T.length; t++) {
            T[t] = 0
        }
        ba = Math.floor((bc - 1) / y) + 1;
        for (t = 0; t < ba; t++) {
            T[t] = Math.floor(Math.random() * (1 << (y - 1)))
        }
        T[ba - 1] &= (2 << ((bc - 1) % y)) - 1;
        if (bb == 1) {
            T[ba - 1] |= (1 << ((bc - 1) % y))
        }
    };
    var ak = function(t, bb) {
        var T, ba;
        T = J(t);
        ba = J(bb);
        B(T, ba);
        return T
    };
    var B = function(bi, bh) {
        var bg, bf, T, be, bd, bc, t, bb, ba;
        if (an.length != bi.length) {
            an = J(bi)
        }
        ba = 1;
        while (ba) {
            ba = 0;
            for (bg = 1; bg < bh.length; bg++) {
                if (bh[bg]) {
                    ba = 1;
                    break
                }
            }
            if (!ba) {
                break
            }
            for (bg = bi.length; !bi[bg] && bg >= 0; bg--) {}
            bf = bi[bg];
            T = bh[bg];
            be = 1;
            bd = 0;
            bc = 0;
            t = 1;
            while ((T + bc) && (T + t)) {
                bb = Math.floor((bf + be) / (T + bc));
                qp = Math.floor((bf + bd) / (T + t));
                if (bb != qp) {
                    break
                }
                U = be - bb * bc;
                be = bc;
                bc = U;
                U = bd - bb * t;
                bd = t;
                t = U;
                U = bf - bb * T;
                bf = T;
                T = U
            }
            if (bd) {
                at(an, bi);
                I(bi, bh, be, bd);
                I(bh, an, t, bc)
            } else {
                ax(bi, bh);
                at(an, bi);
                at(bi, bh);
                at(bh, an)
            }
        }
        if (bh[0] == 0) {
            return
        }
        U = a5(bi, bh[0]);
        z(bi, bh[0]);
        bh[0] = U;
        while (bh[0]) {
            bi[0] %= bh[0];
            U = bi[0];
            bi[0] = bh[0];
            bh[0] = U
        }
    };
    var X = function(t, ba) {
        var T = 1 + 2 * Math.max(t.length, ba.length);
        if (!(t[0] & 1) && !(ba[0] & 1)) {
            z(t, 0);
            return 0
        }
        if (S.length != T) {
            S = new Array(T);
            Q = new Array(T);
            aB = new Array(T);
            aA = new Array(T);
            ay = new Array(T);
            aw = new Array(T)
        }
        at(S, t);
        at(Q, ba);
        z(aB, 1);
        z(aA, 0);
        z(ay, 0);
        z(aw, 1);
        for (;;) {
            while (!(S[0] & 1)) {
                u(S);
                if (!(aB[0] & 1) && !(aA[0] & 1)) {
                    u(aB);
                    u(aA)
                } else {
                    aD(aB, ba);
                    u(aB);
                    a3(aA, t);
                    u(aA)
                }
            }
            while (!(Q[0] & 1)) {
                u(Q);
                if (!(ay[0] & 1) && !(aw[0] & 1)) {
                    u(ay);
                    u(aw)
                } else {
                    aD(ay, ba);
                    u(ay);
                    a3(aw, t);
                    u(aw)
                }
            }
            if (!C(Q, S)) {
                a3(S, Q);
                a3(aB, ay);
                a3(aA, aw)
            } else {
                a3(Q, S);
                a3(ay, aB);
                a3(aw, aA)
            }
            if (A(S, 0)) {
                if (s(ay)) {
                    aD(ay, ba)
                }
                at(t, ay);
                if (!A(Q, 1)) {
                    z(t, 0);
                    return 0
                }
                return 1
            }
        }
    };
    var aO = function(ba, bd) {
        var bb = 1,
            T = 0,
            bc;
        for (;;) {
            if (ba == 1) {
                return bb
            }
            if (ba == 0) {
                return 0
            }
            T -= bb * Math.floor(bd / ba);
            bd %= ba;
            if (bd == 1) {
                return T
            }
            if (bd == 0) {
                return 0
            }
            bb -= T * Math.floor(ba / bd);
            ba %= bd
        }
    };
    var v = function(T, be, bb, ba, t) {
        var bd = 0;
        var bc = Math.max(T.length, be.length);
        if (S.length != bc) {
            S = new Array(bc);
            aB = new Array(bc);
            aA = new Array(bc);
            ay = new Array(bc);
            aw = new Array(bc)
        }
        while (!(T[0] & 1) && !(be[0] & 1)) {
            u(T);
            u(be);
            bd++
        }
        at(S, T);
        at(bb, be);
        z(aB, 1);
        z(aA, 0);
        z(ay, 0);
        z(aw, 1);
        for (;;) {
            while (!(S[0] & 1)) {
                u(S);
                if (!(aB[0] & 1) && !(aA[0] & 1)) {
                    u(aB);
                    u(aA)
                } else {
                    aD(aB, be);
                    u(aB);
                    a3(aA, T);
                    u(aA)
                }
            }
            while (!(bb[0] & 1)) {
                u(bb);
                if (!(ay[0] & 1) && !(aw[0] & 1)) {
                    u(ay);
                    u(aw)
                } else {
                    aD(ay, be);
                    u(ay);
                    a3(aw, T);
                    u(aw)
                }
            }
            if (!C(bb, S)) {
                a3(S, bb);
                a3(aB, ay);
                a3(aA, aw)
            } else {
                a3(bb, S);
                a3(ay, aB);
                a3(aw, aA)
            }
            if (A(S, 0)) {
                if (s(ay)) {
                    aD(ay, be);
                    a3(aw, T)
                }
                n(aw, -1);
                at(ba, ay);
                at(t, aw);
                a9(bb, bd);
                return
            }
        }
    };
    var s = function(t) {
        return ((t[t.length - 1] >> (y - 1)) & 1)
    };
    var a = function(T, be, ba) {
        var t, bc = T.length,
            bb = be.length;
        var bd = ((bc + ba) < bb) ? (bc + ba) : bb;
        for (t = bb - 1 - ba; t < bc && t >= 0; t++) {
            if (T[t] > 0) {
                return 1
            }
        }
        for (t = bc - 1 + ba; t < bb; t++) {
            if (be[t] > 0) {
                return 0
            }
        }
        for (t = bd - 1; t >= ba; t--) {
            if (T[t - ba] > be[t]) {
                return 1
            } else {
                if (T[t - ba] < be[t]) {
                    return 0
                }
            }
        }
        return 0
    };
    var C = function(T, bb) {
        var t;
        var ba = (T.length < bb.length) ? T.length : bb.length;
        for (t = T.length; t < bb.length; t++) {
            if (bb[t]) {
                return 0
            }
        }
        for (t = bb.length; t < T.length; t++) {
            if (T[t]) {
                return 1
            }
        }
        for (t = ba - 1; t >= 0; t--) {
            if (T[t] > bb[t]) {
                return 1
            } else {
                if (T[t] < bb[t]) {
                    return 0
                }
            }
        }
        return 0
    };
    var c = function(bi, bg, t, bk) {
        var bd, bc;
        var be, T, bb, ba, bj, bh, bf;
        at(bk, bi);
        for (bc = bg.length; bg[bc - 1] == 0; bc--) {}
        bf = bg[bc - 1];
        for (bh = 0; bf; bh++) {
            bf >>= 1
        }
        bh = y - bh;
        a9(bg, bh);
        a9(bk, bh);
        for (bd = bk.length; bk[bd - 1] == 0 && bd > bc; bd--) {}
        z(t, 0);
        while (!a(bg, bk, bd - bc)) {
            av(bk, bg, bd - bc);
            t[bd - bc]++
        }
        for (be = bd - 1; be >= bc; be--) {
            if (bk[be] == bg[bc - 1]) {
                t[be - bc] = ar
            } else {
                t[be - bc] = Math.floor((bk[be] * E + bk[be - 1]) / bg[bc - 1])
            }
            for (;;) {
                ba = (bc > 1 ? bg[bc - 2] : 0) * t[be - bc];
                bj = ba >> y;
                ba = ba & ar;
                bb = bj + t[be - bc] * bg[bc - 1];
                bj = bb >> y;
                bb = bb & ar;
                if (bj == bk[be] ? bb == bk[be - 1] ? ba > (be > 1 ? bk[be - 2] : 0) : bb > bk[be - 1] : bj > bk[be]) {
                    t[be - bc]--
                } else {
                    break
                }
            }
            aq(bk, bg, -t[be - bc], be - bc);
            if (s(bk)) {
                a1(bk, bg, be - bc);
                t[be - bc]--
            }
        }
        G(bg, bh);
        G(bk, bh)
    };
    var W = function(ba) {
        var T, bc, bb, t;
        bc = ba.length;
        bb = 0;
        for (T = 0; T < bc; T++) {
            bb += ba[T];
            t = 0;
            if (bb < 0) {
                t = -(bb >> y);
                bb += t * E
            }
            ba[T] = bb & ar;
            bb = (bb >> y) - t
        }
    };
    var a5 = function(T, bb) {
        var t, ba = 0;
        for (t = T.length - 1; t >= 0; t--) {
            ba = (ba * E + T[t]) % bb
        }
        return ba
    };
    var aR = function(ba, bc, bd) {
        var T, bb;
        bb = Math.ceil(bc / y) + 1;
        bb = bd > bb ? bd : bb;
        var be = new Array(bb);
        z(be, ba);
        return be
    };
    a8._plr = function(bh, be, ba) {
        var bb, bd, bc, bg, bf, T;
        var t = bh.length;
        if (be == -1) {
            bg = new Array(0);
            for (;;) {
                bf = new Array(bg.length + 1);
                for (bd = 0; bd < bg.length; bd++) {
                    bf[bd + 1] = bg[bd]
                }
                bf[0] = parseInt(bh, 10);
                bg = bf;
                bb = bh.indexOf(",", 0);
                if (bb < 1) {
                    break
                }
                bh = bh.substring(bb + 1);
                if (bh.length == 0) {
                    break
                }
            }
            if (bg.length < ba) {
                bf = new Array(ba);
                at(bf, bg);
                return bf
            }
            return bg
        }
        bg = aR(0, be * t, 0);
        for (bd = 0; bd < t; bd++) {
            bb = a4.indexOf(bh.substring(bd, bd + 1), 0);
            if (be <= 36 && bb >= 36) {
                bb -= 26
            }
            if (bb >= be || bb < 0) {
                break
            }
            n(bg, be);
            ao(bg, bb)
        }
        for (t = bg.length; t > 0 && !bg[t - 1]; t--) {}
        t = ba > t + 1 ? ba : t + 1;
        bf = new Array(t);
        T = t < bg.length ? t : bg.length;
        for (bd = 0; bd < T; bd++) {
            bf[bd] = bg[bd]
        }
        for (; bd < t; bd++) {
            bf[bd] = 0
        }
        return bf
    };
    var aW = a8._plr;
    var A = function(T, ba) {
        var t;
        if (T[0] != ba) {
            return 0
        }
        for (t = 1; t < T.length; t++) {
            if (T[t]) {
                return 0
            }
        }
        return 1
    };
    var am = function(T, bb) {
        var t;
        var ba = T.length < bb.length ? T.length : bb.length;
        for (t = 0; t < ba; t++) {
            if (T[t] != bb[t]) {
                return 0
            }
        }
        if (T.length > bb.length) {
            for (; t < T.length; t++) {
                if (T[t]) {
                    return 0
                }
            }
        } else {
            for (; t < bb.length; t++) {
                if (bb[t]) {
                    return 0
                }
            }
        }
        return 1
    };
    var aQ = function(T) {
        var t;
        for (t = 0; t < T.length; t++) {
            if (T[t]) {
                return 0
            }
        }
        return 1
    };
    a8._plt = function(ba, bb) {
        var T, bd, bc = "";
        if (g.length != ba.length) {
            g = J(ba)
        } else {
            at(g, ba)
        }
        if (bb == -1) {
            for (T = ba.length - 1; T > 0; T--) {
                bc += ba[T] + ","
            }
            bc += ba[0]
        } else {
            while (!aQ(g)) {
                bd = aa(g, bb);
                bc = a4.substring(bd, bd + 1) + bc
            }
        }
        if (bc.length == 0) {
            bc = "0"
        }
        return bc
    };
    var aU = a8._plt;
    var J = function(T) {
        var t;
        var ba = new Array(T.length);
        at(ba, T);
        return ba
    };
    var at = function(T, bb) {
        var t;
        var ba = T.length < bb.length ? T.length : bb.length;
        for (t = 0; t < ba; t++) {
            T[t] = bb[t]
        }
        for (t = ba; t < T.length; t++) {
            T[t] = 0
        }
    };
    var z = function(T, bb) {
        var t, ba;
        for (ba = bb, t = 0; t < T.length; t++) {
            T[t] = ba & ar;
            ba >>= y
        }
    };
    var ao = function(ba, bd) {
        var T, bc, bb, t;
        ba[0] += bd;
        bc = ba.length;
        bb = 0;
        for (T = 0; T < bc; T++) {
            bb += ba[T];
            t = 0;
            if (bb < 0) {
                t = -(bb >> y);
                bb += t * E
            }
            ba[T] = bb & ar;
            bb = (bb >> y) - t;
            if (!bb) {
                return
            }
        }
    };
    var G = function(T, bb) {
        var t;
        var ba = Math.floor(bb / y);
        if (ba) {
            for (t = 0; t < T.length - ba; t++) {
                T[t] = T[t + ba]
            }
            for (; t < T.length; t++) {
                T[t] = 0
            }
            bb %= y
        }
        for (t = 0; t < T.length - 1; t++) {
            T[t] = ar & ((T[t + 1] << (y - bb)) | (T[t] >> bb))
        }
        T[t] >>= bb
    };
    var u = function(T) {
        var t;
        for (t = 0; t < T.length - 1; t++) {
            T[t] = ar & ((T[t + 1] << (y - 1)) | (T[t] >> 1))
        }
        T[t] = (T[t] >> 1) | (T[t] & (E >> 1))
    };
    var a9 = function(T, bb) {
        var t;
        var ba = Math.floor(bb / y);
        if (ba) {
            for (t = T.length; t >= ba; t--) {
                T[t] = T[t - ba]
            }
            for (; t >= 0; t--) {
                T[t] = 0
            }
            bb %= y
        }
        if (!bb) {
            return
        }
        for (t = T.length - 1; t > 0; t--) {
            T[t] = ar & ((T[t] << bb) | (T[t - 1] >> (y - bb)))
        }
        T[t] = ar & (T[t] << bb)
    };
    var n = function(ba, bd) {
        var T, bc, bb, t;
        if (!bd) {
            return
        }
        bc = ba.length;
        bb = 0;
        for (T = 0; T < bc; T++) {
            bb += ba[T] * bd;
            t = 0;
            if (bb < 0) {
                t = -(bb >> y);
                bb += t * E
            }
            ba[T] = bb & ar;
            bb = (bb >> y) - t
        }
    };
    var aa = function(T, bc) {
        var t, bb = 0,
            ba;
        for (t = T.length - 1; t >= 0; t--) {
            ba = bb * E + T[t];
            T[t] = Math.floor(ba / bc);
            bb = ba % bc
        }
        return bb
    };
    var I = function(ba, bf, bb, T) {
        var t, bc, be, bd;
        be = ba.length < bf.length ? ba.length : bf.length;
        bd = ba.length;
        for (bc = 0, t = 0; t < be; t++) {
            bc += bb * ba[t] + T * bf[t];
            ba[t] = bc & ar;
            bc >>= y
        }
        for (t = be; t < bd; t++) {
            bc += bb * ba[t];
            ba[t] = bc & ar;
            bc >>= y
        }
    };
    var aq = function(ba, bf, T, bc) {
        var t, bb, be, bd;
        be = ba.length < bc + bf.length ? ba.length : bc + bf.length;
        bd = ba.length;
        for (bb = 0, t = bc; t < be; t++) {
            bb += ba[t] + T * bf[t - bc];
            ba[t] = bb & ar;
            bb >>= y
        }
        for (t = be; bb && t < bd; t++) {
            bb += ba[t];
            ba[t] = bb & ar;
            bb >>= y
        }
    };
    var a1 = function(T, be, bb) {
        var t, ba, bd, bc;
        bd = T.length < bb + be.length ? T.length : bb + be.length;
        bc = T.length;
        for (ba = 0, t = bb; t < bd; t++) {
            ba += T[t] + be[t - bb];
            T[t] = ba & ar;
            ba >>= y
        }
        for (t = bd; ba && t < bc; t++) {
            ba += T[t];
            T[t] = ba & ar;
            ba >>= y
        }
    };
    var av = function(T, be, bb) {
        var t, ba, bd, bc;
        bd = T.length < bb + be.length ? T.length : bb + be.length;
        bc = T.length;
        for (ba = 0, t = bb; t < bd; t++) {
            ba += T[t] - be[t - bb];
            T[t] = ba & ar;
            ba >>= y
        }
        for (t = bd; ba && t < bc; t++) {
            ba += T[t];
            T[t] = ba & ar;
            ba >>= y
        }
    };
    var a3 = function(T, bd) {
        var t, ba, bc, bb;
        bc = T.length < bd.length ? T.length : bd.length;
        for (ba = 0, t = 0; t < bc; t++) {
            ba += T[t] - bd[t];
            T[t] = ba & ar;
            ba >>= y
        }
        for (t = bc; ba && t < T.length; t++) {
            ba += T[t];
            T[t] = ba & ar;
            ba >>= y
        }
    };
    var aD = function(T, bd) {
        var t, ba, bc, bb;
        bc = T.length < bd.length ? T.length : bd.length;
        for (ba = 0, t = 0; t < bc; t++) {
            ba += T[t] + bd[t];
            T[t] = ba & ar;
            ba >>= y
        }
        for (t = bc; ba && t < T.length; t++) {
            ba += T[t];
            T[t] = ba & ar;
            ba >>= y
        }
    };
    var aP = function(T, ba) {
        var t;
        if (aL.length != 2 * T.length) {
            aL = new Array(2 * T.length)
        }
        z(aL, 0);
        for (t = 0; t < ba.length; t++) {
            if (ba[t]) {
                aq(aL, T, ba[t], t)
            }
        }
        at(T, aL)
    };
    var ax = function(t, T) {
        if (i.length != t.length) {
            i = J(t)
        } else {
            at(i, t)
        }
        if (h.length != t.length) {
            h = J(t)
        }
        c(i, T, h, t)
    };
    var aM = function(T, bb, ba) {
        var t;
        if (o.length != 2 * T.length) {
            o = new Array(2 * T.length)
        }
        z(o, 0);
        for (t = 0; t < bb.length; t++) {
            if (bb[t]) {
                aq(o, T, bb[t], t)
            }
        }
        ax(o, ba);
        at(T, o)
    };
    var aE = function(be, T) {
        var bd, bb, ba, bf, bc, bg, t;
        for (bc = be.length; bc > 0 && !be[bc - 1]; bc--) {}
        t = bc > T.length ? 2 * bc : 2 * T.length;
        if (o.length != t) {
            o = new Array(t)
        }
        z(o, 0);
        for (bd = 0; bd < bc; bd++) {
            bf = o[2 * bd] + be[bd] * be[bd];
            o[2 * bd] = bf & ar;
            bf >>= y;
            for (bb = bd + 1; bb < bc; bb++) {
                bf = o[bd + bb] + 2 * be[bd] * be[bb] + bf;
                o[bd + bb] = (bf & ar);
                bf >>= y
            }
            o[bd + bc] = bf
        }
        ax(o, T);
        at(be, o)
    };
    var aV = function(T, ba) {
        var t, bb;
        for (t = T.length; t > 0 && !T[t - 1]; t--) {}
        bb = new Array(t + ba);
        at(bb, T);
        return bb
    };
    var aK = function(t, be, bd) {
        var bc, bb, T, ba;
        if (e.length != bd.length) {
            e = J(bd)
        }
        if ((bd[0] & 1) == 0) {
            at(e, t);
            z(t, 1);
            while (!A(be, 0)) {
                if (be[0] & 1) {
                    aM(t, e, bd)
                }
                aa(be, 2);
                aE(e, bd)
            }
            return
        }
        z(e, 0);
        for (T = bd.length; T > 0 && !bd[T - 1]; T--) {}
        ba = E - aO(a5(bd, E), E);
        e[T] = 1;
        aM(t, e, bd);
        if (j.length != t.length) {
            j = J(t)
        } else {
            at(j, t)
        }
        for (bc = be.length - 1; bc > 0 & !be[bc]; bc--) {}
        if (be[bc] == 0) {
            z(t, 1);
            return
        }
        for (bb = 1 << (y - 1); bb && !(be[bc] & bb); bb >>= 1) {}
        for (;;) {
            if (!(bb >>= 1)) {
                bc--;
                if (bc < 0) {
                    ap(t, p, bd, ba);
                    return
                }
                bb = 1 << (y - 1)
            }
            ap(t, t, bd, ba);
            if (bb & be[bc]) {
                ap(t, j, bd, ba)
            }
        }
    };
    var ap = function(bg, bd, T, bh) {
        var bc, ba, bi, be, bj, bf;
        var bk = T.length;
        var bb = bd.length;
        if (aT.length != bk) {
            aT = new Array(bk)
        }
        z(aT, 0);
        for (; bk > 0 && T[bk - 1] == 0; bk--) {}
        for (; bb > 0 && bd[bb - 1] == 0; bb--) {}
        bf = aT.length - 1;
        for (bc = 0; bc < bk; bc++) {
            bj = aT[0] + bg[bc] * bd[0];
            be = ((bj & ar) * bh) & ar;
            bi = (bj + be * T[0]) >> y;
            bj = bg[bc];
            ba = 1;
            for (; ba < bb - 4;) {
                bi += aT[ba] + be * T[ba] + bj * bd[ba];
                aT[ba - 1] = bi & ar;
                bi >>= y;
                ba++;
                bi += aT[ba] + be * T[ba] + bj * bd[ba];
                aT[ba - 1] = bi & ar;
                bi >>= y;
                ba++;
                bi += aT[ba] + be * T[ba] + bj * bd[ba];
                aT[ba - 1] = bi & ar;
                bi >>= y;
                ba++;
                bi += aT[ba] + be * T[ba] + bj * bd[ba];
                aT[ba - 1] = bi & ar;
                bi >>= y;
                ba++;
                bi += aT[ba] + be * T[ba] + bj * bd[ba];
                aT[ba - 1] = bi & ar;
                bi >>= y;
                ba++
            }
            for (; ba < bb;) {
                bi += aT[ba] + be * T[ba] + bj * bd[ba];
                aT[ba - 1] = bi & ar;
                bi >>= y;
                ba++
            }
            for (; ba < bk - 4;) {
                bi += aT[ba] + be * T[ba];
                aT[ba - 1] = bi & ar;
                bi >>= y;
                ba++;
                bi += aT[ba] + be * T[ba];
                aT[ba - 1] = bi & ar;
                bi >>= y;
                ba++;
                bi += aT[ba] + be * T[ba];
                aT[ba - 1] = bi & ar;
                bi >>= y;
                ba++;
                bi += aT[ba] + be * T[ba];
                aT[ba - 1] = bi & ar;
                bi >>= y;
                ba++;
                bi += aT[ba] + be * T[ba];
                aT[ba - 1] = bi & ar;
                bi >>= y;
                ba++
            }
            for (; ba < bk;) {
                bi += aT[ba] + be * T[ba];
                aT[ba - 1] = bi & ar;
                bi >>= y;
                ba++
            }
            for (; ba < bf;) {
                bi += aT[ba];
                aT[ba - 1] = bi & ar;
                bi >>= y;
                ba++
            }
            aT[ba - 1] = bi & ar
        }
        if (!C(T, aT)) {
            a3(aT, T)
        }
        at(bg, aT)
    };
    var p = aR(1, 1, 1);
    return a8
}();
var exh = function() {
    var l = {};
    var k = "?".charCodeAt(0);
    var e = "A".charCodeAt(0);
    var g = "a".charCodeAt(0);
    var c = "F".charCodeAt(0);
    var a = "f".charCodeAt(0);
    var t = "Z".charCodeAt(0);
    var i = "z".charCodeAt(0);
    var d = "0".charCodeAt(0);
    var b = "9".charCodeAt(0);
    var s = {};
    s["\u20ac".charCodeAt(0)] = 128;
    s["\u201a".charCodeAt(0)] = 130;
    s["\u0192".charCodeAt(0)] = 131;
    s["\u201e".charCodeAt(0)] = 132;
    s["\u2026".charCodeAt(0)] = 133;
    s["\u2020".charCodeAt(0)] = 134;
    s["\u2021".charCodeAt(0)] = 135;
    s["\u02c6".charCodeAt(0)] = 136;
    s["\u2030".charCodeAt(0)] = 137;
    s["\u0160".charCodeAt(0)] = 138;
    s["\u2039".charCodeAt(0)] = 139;
    s["\u0152".charCodeAt(0)] = 140;
    s["\u017d".charCodeAt(0)] = 142;
    s["\u2018".charCodeAt(0)] = 145;
    s["\u2019".charCodeAt(0)] = 146;
    s["\u201c".charCodeAt(0)] = 147;
    s["\u201d".charCodeAt(0)] = 148;
    s["\u2022".charCodeAt(0)] = 149;
    s["\u2013".charCodeAt(0)] = 150;
    s["\u2014".charCodeAt(0)] = 151;
    s["\u02dc".charCodeAt(0)] = 152;
    s["\u2122".charCodeAt(0)] = 153;
    s["\u0161".charCodeAt(0)] = 154;
    s["\u203a".charCodeAt(0)] = 155;
    s["\u0153".charCodeAt(0)] = 156;
    s["\u017e".charCodeAt(0)] = 158;
    s["\u0178".charCodeAt(0)] = 159;
    var p = ["\u20ac".charCodeAt(0), 0, "\u201a".charCodeAt(0), "\u0192".charCodeAt(0), "\u201e".charCodeAt(0), "\u2026".charCodeAt(0), "\u2020".charCodeAt(0), "\u2021".charCodeAt(0), "\u02c6".charCodeAt(0), "\u2030".charCodeAt(0), "\u0160".charCodeAt(0), "\u2039".charCodeAt(0), "\u0152".charCodeAt(0), 0, "\u017d".charCodeAt(0), 0, 0, "\u2018".charCodeAt(0), "\u2019".charCodeAt(0), "\u201c".charCodeAt(0), "\u201d".charCodeAt(0), "\u2022".charCodeAt(0), "\u2013".charCodeAt(0), "\u2014".charCodeAt(0), "\u02dc".charCodeAt(0), "\u2122".charCodeAt(0), "\u0161".charCodeAt(0), "\u203a".charCodeAt(0), "\u0153".charCodeAt(0), 0, "\u017e".charCodeAt(0), "\u0178".charCodeAt(0)];
    var r = function(u) {
        u = u & 255;
        if (u >= 128 && u < 160) {
            if (p[u - 128] === 0) {
                return false
            }
        }
        return true
    };
    l._etx = r;
    var q = function(u) {
        var v;
        if ((u > 0 && u < 128) || (u >= 160 && u <= 255)) {
            v = u
        } else {
            v = s[u]
        }
        if (v === undefined) {
            v = k
        }
        return v
    };
    l._etz = q;
    var o = function(u) {
        var v = u & 255;
        if (v === 0) {
            throw new Error("2457 " + u)
        }
        if (v >= 128 && v < 160) {
            var x = p[v - 128];
            if (x === 0) {
                x = k
            }
            v = x
        }
        return v
    };
    l._eub = o;
    l._euc = function(v) {
        var z = v.length;
        var y = new Array(z);
        for (var u = 0; u < z; u++) {
            var x = v.charCodeAt(u);
            if ((x > 0 && x < 128) || (x >= 160 && x <= 255)) {
                y[u] = x;
                continue
            }
            y[u] = s[x];
            if (y[u] === undefined) {
                y[u] = k
            }
        }
        return y
    };
    var n = l._euc;
    l._eud = function(v) {
        var z = v.length;
        var y = new Uint16Array(z);
        var x = 0;
        for (var u = 0; u < z; u++) {
            var A = v[u] & 255;
            if (A === 0) {
                continue
            }
            if (A >= 128 && A < 160) {
                var B = p[A - 128];
                if (B === 0) {
                    B = k
                }
                A = B
            }
            y[x++] = A
        }
        return String.fromCharCode.apply(undefined, y.subarray(0, x))
    };
    var m = l._eud;
    l._euf = function(A) {
        var y = "";
        var x;
        var z;
        var v;
        var B;
        for (var u = 0; u < A.length; u++) {
            x = A.charAt(u);
            z = x.charCodeAt(0);
            if ((z >= g && z <= i) || (z >= e && z <= t) || x === "." || x === "-" || x === "*" || x === "_") {
                y += x
            } else {
                if (x === " ") {
                    y += "+"
                } else {
                    v = n(x);
                    y += "%";
                    B = (v >> 4) & 15;
                    if (B >= 10) {
                        y += String.fromCharCode(e - 10 + B)
                    } else {
                        y += String.fromCharCode(d + B)
                    }
                    B = v & 15;
                    if (B >= 10) {
                        y += String.fromCharCode(e - 10 + B)
                    } else {
                        y += String.fromCharCode(d + B)
                    }
                }
            }
        }
        return y
    };
    var j = l._euf;
    l._eug = function(B) {
        var x = "";
        var v;
        var A;
        var z;
        var y = B.length;
        for (var u = 0; u < y; u++) {
            v = B.charAt(u);
            if (v === "%" && y > u + 2) {
                v = B.charAt(u + 1);
                A = v.charCodeAt(0);
                z = 0;
                if (A >= g && A <= a) {
                    z = 10 + A - g
                } else {
                    if (A >= e && A <= c) {
                        z = 10 + A - e
                    } else {
                        if (A >= d && A <= b) {
                            z = A - d
                        } else {
                            x += "%";
                            continue
                        }
                    }
                }
                A = A << 4;
                v = B.charAt(u + 2);
                A = v.charCodeAt(0);
                if (A >= g && A <= a) {
                    z += 10 + A - g
                } else {
                    if (A >= e && A <= c) {
                        z += 10 + A - e
                    } else {
                        if (A >= d && A <= b) {
                            z += A - d
                        } else {
                            x += "%";
                            continue
                        }
                    }
                }
                if (z !== 0 && r(z)) {
                    x += (o(z))
                }
            } else {
                if (v === "+") {
                    x += " "
                } else {
                    x += v
                }
            }
        }
        return x
    };
    var h = l._eug;
    return l
}();
var emz = function() {
    var b = 0;
    var h = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215, 33554431, 67108863, 134217727, 268435455, 536870911, 1073741823, 2147483647, 4294967295 | 0];
    var e = function(i, j, k) {
        this.data = undefined;
        this._oyq = undefined;
        this._oys = 0;
        this._oyt = undefined;
        if (i !== undefined) {
            this.data = new ArrayBuffer(i);
            this._oyq = new Uint8Array(this.data)
        } else {
            if (j !== undefined) {
                this.data = j;
                this._oyq = new Uint8Array(this.data)
            } else {
                throw new Error("2748 ")
            }
        }
        if (k !== undefined) {
            this._oyt = k
        }
    };
    e.prototype.getSize = function() {
        return this.data.byteLength
    };
    e.prototype._erm = function() {
        return this.data.byteLength - this._oys
    };
    e.prototype._loj = function(i) {
        this._oys = i
    };
    e.prototype._loi = function() {
        return this._oys
    };
    e.prototype.getData = function() {
        return this.data
    };
    e.prototype._oyv = function() {
        return this._oyq
    };
    e.prototype._oyx = function(i) {
        this._oyt = i
    };
    e.prototype._oyz = function(j) {
        for (var i = j; i < this._oys; i++) {
            if (i >= this.data.byteLength) {
                break
            }
            this._oyq[i - j] = this._oyq[i]
        }
        this._oys -= j
    };
    e.prototype._lhh = function(i) {
        this._oyq[this._oys++] = i & 255
    };
    e.prototype._oza = function(i) {
        this._oyq[this._oys++] = (i + this._oyt._rkj()) & 255
    };
    e.prototype._lhi = function(i) {
        this._oyq[this._oys++] = (i >> 8) & 255;
        this._oyq[this._oys++] = i & 255
    };
    e.prototype._lox = function(i) {
        this._oyq[this._oys++] = (i >> 16) & 255;
        this._oyq[this._oys++] = (i >> 8) & 255;
        this._oyq[this._oys++] = i & 255
    };
    e.prototype._loz = function(i) {
        this._oyq[this._oys++] = (i >> 24) & 255;
        this._oyq[this._oys++] = (i >> 16) & 255;
        this._oyq[this._oys++] = (i >> 8) & 255;
        this._oyq[this._oys++] = i & 255
    };
    e.prototype._ozb = function(i) {
        this._loz(i._ncz);
        this._loz(i._nda)
    };
    e.prototype._ozc = function(i) {
        if (i >= 0 && i < 128) {
            this._lhh(i);
            return
        }
        if (i >= 0 && i < 32768) {
            this._lhi(i + 32768);
            return
        }
        throw new Error("2749 " + i)
    };
    e.prototype._oze = function(i) {
        if (i < 64 && i >= -64) {
            this._lhh(i + 64);
            return
        }
        if (i < 16384 && i >= 16384) {
            this._lhi(i + 49152);
            return
        }
        throw new Error("2750 " + i)
    };
    e.prototype._ozg = function(k, j) {
        if (j < 1 || j > 4) {
            throw new Error("2751 " + j)
        }
        j--;
        var i = j * 8;
        while (i >= 0) {
            this._oyq[this._oys++] = k >> i;
            i -= 8
        }
    };
    e.prototype._lpb = function(j) {
        var i = new DataView(this.data);
        var j = i.setFloat32(this._oys, j);
        this._oys += 4
    };
    e.prototype._ozh = function(k, m, j) {
        if (m === undefined) {
            m = 0
        }
        if (j === undefined) {
            j = k.length - m
        }
        if (m + j > k.length) {
            throw new Error("2752 ")
        }
        var l = new DataView(this.data);
        for (var i = m; i < m + j; i++) {
            l.setFloat32(this._oys, k[i]);
            this._oys += 4
        }
    };
    e.prototype._lpd = function(k, j) {
        if (j) {
            this._oyq[this._oys++] = b
        }
        for (var i = 0; i < k.length; i++) {
            this._oyq[this._oys++] = k.charCodeAt(i) & 255
        }
        this._oyq[this._oys++] = 0
    };
    e.prototype._ozj = function(k) {
        var j;
        for (var i = 0; i < k.length; i++) {
            character = k.charCodeAt(i);
            this._oyq[this._oys++] = (character >> 8) & 255;
            this._oyq[this._oys++] = character & 255
        }
        this._oyq[this._oys++] = 0;
        this._oyq[this._oys++] = 0
    };
    e.prototype._lpe = function(l, k, j) {
        var i = new Uint8Array(l, k, j);
        this._oyq.set(i, this._oys);
        this._oys += j
    };
    e.prototype._ozk = function(i) {
        this._oyq[this._oys - i - 1] = i
    };
    e.prototype._ozl = function(i) {
        this._oyq[this._oys - i - 2] = (i >> 8) & 255;
        this._oyq[this._oys - i - 1] = i & 255
    };
    e.prototype._lpi = function() {
        return this._oyq[this._oys++]
    };
    e.prototype._lpj = function() {
        var i = this._oyq[this._oys++];
        return i > 127 ? i - 256 : i
    };
    e.prototype._lpl = function() {
        this._oys += 2;
        return (this._oyq[this._oys - 2] << 8) + this._oyq[this._oys - 1]
    };
    e.prototype._lpm = function() {
        this._oys += 2;
        var i = (this._oyq[this._oys - 2] << 8) + this._oyq[this._oys - 1];
        return i > 32767 ? i - 65536 : i
    };
    e.prototype.g3 = function() {
        this._oys += 3;
        return (this._oyq[this._oys - 3] << 16) + (this._oyq[this._oys - 2] << 8) + this._oyq[this._oys - 1]
    };
    e.prototype._lpn = function() {
        this._oys += 3;
        var i = (this._oyq[this._oys - 3] << 16) + (this._oyq[this._oys - 2] << 8) + this._oyq[this._oys - 1];
        return i > 16777215 ? i - 16777216 : i
    };
    var g = Math.pow(2, 24);
    var a = Math.pow(2, 32);
    var c = Math.pow(2, 40);
    e.prototype._lpp = function() {
        this._oys += 4;
        return (this._oyq[this._oys - 4] * g) + (this._oyq[this._oys - 3] << 16) + (this._oyq[this._oys - 2] << 8) + this._oyq[this._oys - 1]
    };
    e.prototype._lpr = function() {
        this._oys += 4;
        var i = (this._oyq[this._oys - 4] * g) + (this._oyq[this._oys - 3] << 16) + (this._oyq[this._oys - 2] << 8) + this._oyq[this._oys - 1];
        return i > 2147483647 ? i - 4294967296 : i
    };
    e.prototype._ozn = function() {
        this._oys += 5;
        return (this._oyq[this._oys - 5] * a) + (this._oyq[this._oys - 4] * g) + (this._oyq[this._oys - 3] << 16) + (this._oyq[this._oys - 2] << 8) + this._oyq[this._oys - 1]
    };
    e.prototype._ozo = function() {
        this._oys += 6;
        return (this._oyq[this._oys - 6] * c) + (this._oyq[this._oys - 5] * a) + (this._oyq[this._oys - 4] * g) + (this._oyq[this._oys - 3] << 16) + (this._oyq[this._oys - 2] << 8) + this._oyq[this._oys - 1]
    };
    e.prototype._ozq = function() {
        return {
            _ncz: this._lpp(),
            _nda: this._lpp()
        }
    };
    e.prototype._ozr = function() {
        var i = this._oyq[this._oys];
        if (i < 128) {
            return this._lpi()
        } else {
            return this._lpl() - 32768
        }
    };
    e.prototype._ozs = function() {
        var i = (this._oyq[this._oys]) & 255;
        if (i < 128) {
            return false
        }
        return true
    };
    e.prototype._ozt = function() {
        var i = this._oyq[this._oys];
        if (i < 128) {
            return this._lpi() - 64
        } else {
            return this._lpl() - 49152
        }
    };
    e.prototype._ozu = function() {
        var i = this._oyq[this._oys] & 255;
        if (i < 128) {
            return this._lpi() - 1
        } else {
            return this._lpl() - 32769
        }
    };
    e.prototype._ozv = function() {
        var i = (this._oyq[this._oys++] - this._oyt._rkj()) & 255;
        if (i < 128) {
            return i
        }
        return ((i - 128) << 8) + ((this._oyq[this._oys++] - this._oyt._rkj()) & 255)
    };
    e.prototype._ozw = function() {
        var i = (this._oyq[this._oys] - this._oyt._rkk()) & 255;
        if (i < 128) {
            return false
        }
        return true
    };
    e.prototype._ozx = function() {
        if (this._oyq[this._oys] > 127) {
            return this._lpp() & 2147483647
        } else {
            return this._lpl()
        }
    };
    e.prototype._ozy = function() {
        if (this._oyq[this._oys] > 127) {
            return this._lpp() & 2147483647
        }
        var i = this._lpl();
        if (i === 32767) {
            return -1
        } else {
            return i
        }
    };
    e.prototype._paa = function(j) {
        if (j < 1 || j > 4) {
            throw new Error("2753 " + j)
        }
        j--;
        var i = j * 8;
        var k = 0;
        while (i >= 0) {
            k += (this._oyq[this._oys++] & 255) << i;
            i -= 8
        }
        return k
    };
    e.prototype._lpt = function() {
        var j = new DataView(this.data);
        var i = j.getFloat32(this._oys);
        this._oys += 4;
        return i
    };
    e.prototype._pac = function(k, m, j) {
        if (m === undefined) {
            m = 0
        }
        if (j === undefined) {
            j = k.length - m
        }
        var l = new DataView(this.data);
        for (var i = m; i < m + j; i++) {
            k[i] = l.getFloat32(this._oys);
            this._oys += 4
        }
    };
    e.prototype._lpu = function(k) {
        if (k) {
            var i = this._lpi();
            if (i !== b) {
                throw new Error("2754 " + i)
            }
        }
        var j = this._oys;
        while (true) {
            if (this._lpi() === 0) {
                break
            }
        }
        return exh._eud(new Uint8Array(this.data, j, this._oys - j - 1))
    };
    e.prototype._pae = function(l) {
        if (l) {
            var j = this._lpi();
            if (j !== b) {
                throw new Error("2755 " + j)
            }
        }
        var k = this._oys;
        var m = 0;
        while (true) {
            if (this._lpl() === 0) {
                break
            } else {
                m++
            }
        }
        this._oys = k;
        var n = new Array(m);
        for (var i = 0; i < m; i++) {
            n[i] = String.fromCharCode(exh._eub(this._lpl()))
        }
        this._oys += 2;
        return n.join("")
    };
    e.prototype._pag = function(l) {
        var j = "";
        var k;
        for (var i = 0; i < l; i++) {
            k = (this._lpi() - this._oyt._rkj()) & 255;
            if (k === 0) {
                return j
            }
            j = j + String.fromCharCode(exh._eub(k))
        }
        return j
    };
    e.prototype._lpw = function(l, k, j) {
        var i = new Uint8Array(l, k, j);
        i.set(new Uint8Array(this.data, this._oys, j));
        this._oys += j
    };
    e.prototype._pah = function(m, l, k) {
        var j = new Uint8Array(m, l, k);
        for (var i = 0; i < k; i++) {
            j[l + i] = (this._lpi() - this._oyt._rkj()) & 255
        }
    };
    e.prototype._pai = function() {
        return this._lpi()
    };
    e.prototype._paj = function() {
        return this._lpl()
    };
    e.prototype._pak = function() {
        this._pam = this._oys * 8
    };
    e.prototype._pao = function(k) {
        if (k > 31) {
            throw new Error("2756 ")
        }
        var i = this._pam >> 3,
            j = 8 - (this._pam & 7),
            l = 0;
        this._pam += k;
        while (k > j) {
            l += (this._oyq[i++] & h[j]) << (k - j);
            k -= j;
            j = 8
        }
        if (k === j) {
            l += this._oyq[i] & h[j]
        } else {
            l += (this._oyq[i] >> (j - k)) & h[k]
        }
        return l
    };
    e.prototype._pap = function(i) {
        return i * 8 - this._pam
    };
    e.prototype._par = function() {
        this._oys = Math.floor((this._pam + 7) / 8)
    };
    e.prototype._pas = function(r, s) {
        var n = "";
        for (var p = 0; p < this._oys; p++) {
            n += ((this._oyq[p] >> 4) & 15).toString(16);
            n += (this._oyq[p] & 15).toString(16)
        }
        var k = fih._plr(n, 16, 0);
        var i = fih._plo(k, r, s);
        var j = fih._plt(i, 16);
        this._oys = 0;
        if ((j.length % 2) !== 0) {
            j = "0" + j
        } else {
            if (j.length > 0 && parseInt(j[0], 16) >= 8) {
                j = "00" + j
            }
        }
        var q = j.length / 2;
        this._lhi(q);
        for (var p = 0; p < q; p++) {
            var o = j.charAt(p * 2);
            var l = j.charAt(p * 2 + 1);
            this._lhh((parseInt(o, 16) << 4) | parseInt(l, 16))
        }
    };
    e.prototype._pau = function(s, i, l) {
        var m = this._oys;
        this._oys = i;
        var t = Math.floor((l - i) / 8);
        for (var k = 0; k < t; k++) {
            var q = this._lpr();
            var j = this._lpr();
            var o = 0;
            var r = 2654435769;
            var p = 32;
            while (p-- > 0) {
                q += (j << 4 ^ j >>> 5) + j ^ o + s[o & 3];
                o += r;
                j += (q << 4 ^ q >>> 5) + q ^ o + s[o >>> 11 & 3]
            }
            this._oys -= 8;
            this._loz(q);
            this._loz(j)
        }
        this._oys = m
    };
    e.prototype._paw = function(s, i, l) {
        var m = this._oys;
        this._oys = i;
        var t = Math.floor((l - i) / 8);
        for (var k = 0; k < t; k++) {
            var q = this._lpr();
            var j = this._lpr();
            var o = 3337565984;
            var r = 2654435769;
            var p = 32;
            while (p-- > 0) {
                j -= (q << 4 ^ q >>> 5) + q ^ o + s[o >>> 11 & 3];
                o -= r;
                q -= (j << 4 ^ j >>> 5) + j ^ o + s[o & 3]
            }
            this._oys -= 8;
            this._loz(q);
            this._loz(j)
        }
        this._oys = m
    };
    e.prototype.print = function() {
        for (var i = 0; i < this._oys; i++) {
            console.log(i + ": " + this._oyq[i])
        }
    };
    e.prototype._pax = function(i) {
        this._oyq[this._oys++] = (i + 128) & 255
    };
    e.prototype._pay = function(i) {
        this._oyq[this._oys++] = (0 - i) & 255
    };
    e.prototype._pba = function(i) {
        this._oyq[this._oys++] = (128 - i) & 255
    };
    e.prototype._pbb = function() {
        return (this._oyq[this._oys++] - 128) & 255
    };
    e.prototype._pbd = function() {
        return (0 - this._oyq[this._oys++]) & 255
    };
    e.prototype._pbe = function() {
        return (128 - this._oyq[this._oys++]) & 255
    };
    e.prototype._pbf = function() {
        var i = (this._oyq[this._oys++] - 128) & 255;
        return i > 127 ? i - 256 : i
    };
    e.prototype._pbh = function() {
        var i = (0 - this._oyq[this._oys++]) & 255;
        return i > 127 ? i - 256 : i
    };
    e.prototype._pbi = function() {
        var i = (128 - this._oyq[this._oys++]) & 255;
        return i > 127 ? i - 256 : i
    };
    e.prototype._pbk = function(i) {
        this._oyq[this._oys++] = i & 255;
        this._oyq[this._oys++] = (i >> 8) & 255
    };
    e.prototype._pbl = function(i) {
        this._oyq[this._oys++] = (i >> 8) & 255;
        this._oyq[this._oys++] = (i + 128) & 255
    };
    e.prototype._pbn = function(i) {
        this._oyq[this._oys++] = (i + 128) & 255;
        this._oyq[this._oys++] = (i >> 8) & 255
    };
    e.prototype._pbp = function() {
        this._oys += 2;
        return (this._oyq[this._oys - 1] << 8) + this._oyq[this._oys - 2]
    };
    e.prototype._pbr = function() {
        this._oys += 2;
        return (this._oyq[this._oys - 2] << 8) + ((this._oyq[this._oys - 1] - 128) & 255)
    };
    e.prototype._pbt = function() {
        this._oys += 2;
        return (this._oyq[this._oys - 1] << 8) + ((this._oyq[this._oys - 2] - 128) & 255)
    };
    e.prototype._pbv = function() {
        this._oys += 2;
        var i = (this._oyq[this._oys - 1] << 8) + this._oyq[this._oys - 2];
        return i > 32767 ? i - 65536 : i
    };
    e.prototype._pbx = function() {
        this._oys += 2;
        var i = (this._oyq[this._oys - 2] << 8) + ((this._oyq[this._oys - 1] - 128) & 255);
        return i > 32767 ? i - 65536 : i
    };
    e.prototype._pbz = function() {
        this._oys += 2;
        var i = (this._oyq[this._oys - 1] << 8) + ((this._oyq[this._oys - 2] - 128) & 255);
        return i > 32767 ? i - 65536 : i
    };
    e.prototype._pca = function(i) {
        this._oyq[this._oys++] = (i) & 255;
        this._oyq[this._oys++] = (i >> 8) & 255;
        this._oyq[this._oys++] = (i >> 16) & 255
    };
    e.prototype._pcc = function(i) {
        this._oyq[this._oys++] = (i >> 16) & 255;
        this._oyq[this._oys++] = (i) & 255;
        this._oyq[this._oys++] = (i >> 8) & 255
    };
    e.prototype._pcd = function(i) {
        this._oyq[this._oys++] = (i >> 8) & 255;
        this._oyq[this._oys++] = (i >> 16) & 255;
        this._oyq[this._oys++] = (i) & 255
    };
    e.prototype._pcf = function() {
        this._oys += 3;
        return ((this._oyq[this._oys - 1] & 255) << 16) + ((this._oyq[this._oys - 2] & 255) << 8) + (this._oyq[this._oys - 3] & 255)
    };
    e.prototype._pch = function() {
        this._oys += 3;
        return ((this._oyq[this._oys - 3] & 255) << 16) + ((this._oyq[this._oys - 1] & 255) << 8) + (this._oyq[this._oys - 2] & 255)
    };
    e.prototype._pci = function() {
        this._oys += 3;
        return ((this._oyq[this._oys - 2] & 255) << 16) + ((this._oyq[this._oys - 3] & 255) << 8) + (this._oyq[this._oys - 1] & 255)
    };
    e.prototype._pck = function() {
        this._oys += 3;
        var i = ((this._oyq[this._oys - 1] & 255) << 16) + ((this._oyq[this._oys - 2] & 255) << 8) + (this._oyq[this._oys - 3] & 255);
        return i > 16777215 ? i - 16777216 : i
    };
    e.prototype._pcm = function() {
        this._oys += 3;
        var i = ((this._oyq[this._oys - 3] & 255) << 16) + ((this._oyq[this._oys - 1] & 255) << 8) + (this._oyq[this._oys - 2] & 255);
        return i > 16777215 ? i - 16777216 : i
    };
    e.prototype._pco = function() {
        this._oys += 3;
        var i = ((this._oyq[this._oys - 2] & 255) << 16) + ((this._oyq[this._oys - 3] & 255) << 8) + (this._oyq[this._oys - 1] & 255);
        return i > 16777215 ? i - 16777216 : i
    };
    e.prototype._pcp = function(i) {
        this._oyq[this._oys++] = (i) & 255;
        this._oyq[this._oys++] = (i >> 8) & 255;
        this._oyq[this._oys++] = (i >> 16) & 255;
        this._oyq[this._oys++] = (i >> 24) & 255
    };
    e.prototype._pcq = function(i) {
        this._oyq[this._oys++] = (i >> 8) & 255;
        this._oyq[this._oys++] = (i) & 255;
        this._oyq[this._oys++] = (i >> 24) & 255;
        this._oyq[this._oys++] = (i >> 16) & 255
    };
    e.prototype._pcs = function(i) {
        this._oyq[this._oys++] = (i >> 16) & 255;
        this._oyq[this._oys++] = (i >> 24) & 255;
        this._oyq[this._oys++] = (i) & 255;
        this._oyq[this._oys++] = (i >> 8) & 255
    };
    e.prototype._pcu = function() {
        this._oys += 4;
        return ((this._oyq[this._oys - 1] & 255) << 24) + ((this._oyq[this._oys - 2] & 255) << 16) + ((this._oyq[this._oys - 3] & 255) << 8) + (this._oyq[this._oys - 4] & 255)
    };
    e.prototype._pcw = function() {
        this._oys += 4;
        return ((this._oyq[this._oys - 2] & 255) << 24) + ((this._oyq[this._oys - 1] & 255) << 16) + ((this._oyq[this._oys - 4] & 255) << 8) + (this._oyq[this._oys - 3] & 255)
    };
    e.prototype._pcy = function() {
        this._oys += 4;
        return ((this._oyq[this._oys - 3] & 255) << 24) + ((this._oyq[this._oys - 4] & 255) << 16) + ((this._oyq[this._oys - 1] & 255) << 8) + (this._oyq[this._oys - 2] & 255)
    };
    e.prototype._pcz = function() {
        this._oys += 4;
        var i = ((this._oyq[this._oys - 1] & 255) << 24) + ((this._oyq[this._oys - 2] & 255) << 16) + ((this._oyq[this._oys - 3] & 255) << 8) + (this._oyq[this._oys - 4] & 255);
        return i > 2147483647 ? i - 4294967296 : i
    };
    e.prototype._pda = function() {
        this._oys += 4;
        var i = ((this._oyq[this._oys - 2] & 255) << 24) + ((this._oyq[this._oys - 1] & 255) << 16) + ((this._oyq[this._oys - 4] & 255) << 8) + (this._oyq[this._oys - 3] & 255);
        return i > 2147483647 ? i - 4294967296 : i
    };
    e.prototype._pdc = function() {
        this._oys += 4;
        var i = ((this._oyq[this._oys - 3] & 255) << 24) + ((this._oyq[this._oys - 4] & 255) << 16) + ((this._oyq[this._oys - 1] & 255) << 8) + (this._oyq[this._oys - 2] & 255);
        return i > 2147483647 ? i - 4294967296 : i
    };
    e.prototype._pdd = function(i) {
        this._pcp(i._ncz);
        this._pcp(i._nda)
    };
    e.prototype._pdf = function(i) {
        this._pcq(i._ncz);
        this._pcq(i._nda)
    };
    e.prototype._pdh = function(i) {
        this._pcs(i._ncz);
        this._pcs(i._nda)
    };
    e.prototype._pdj = function() {
        return {
            _ncz: this._pcu(),
            _nda: this._pcu()
        }
    };
    e.prototype._pdk = function() {
        return {
            _ncz: this._pcw(),
            _nda: this._pcw()
        }
    };
    e.prototype._pdm = function() {
        return {
            _ncz: this._pcy(),
            _nda: this._pcy()
        }
    };
    e.prototype._pdn = function(l, k, j) {
        var i = new Uint8Array(l);
        for (var m = k + j - 1; m >= k; m--) {
            this._oyq[this._oys++] = i[m]
        }
    };
    e.prototype._pdo = function(l, k, j) {
        var i = new Uint8Array(l);
        for (var m = k; m < k + j; m++) {
            this._oyq[this._oys++] = (i[m] + 128) & 255
        }
    };
    e.prototype._pdp = function(l, k, j) {
        var i = new Uint8Array(l);
        for (var m = k + j - 1; m >= k; m--) {
            this._oyq[this._oys++] = (i[m] + 128) & 255
        }
    };
    e.prototype._pdq = function(m, l, k) {
        var j = new Uint8Array(m, l, k);
        for (var i = k - 1; i >= 0; i--) {
            j[i] = this._oyq[this._oys++]
        }
    };
    e.prototype._pdr = function(m, l, k) {
        var j = new Uint8Array(m, l, k);
        for (var i = 0; i < k; i++) {
            j[i] = (this._oyq[this._oys++] - 128) & 255
        }
    };
    e.prototype._pds = function(m, l, k) {
        var j = new Uint8Array(m, l, k);
        for (var i = k - 1; i >= 0; i--) {
            j[i] = (this._oyq[this._oys++] - 128) & 255
        }
    };
    var d = function(i, j, k) {
        return new e(i, j, k)
    };
    d._lqa = function(j, i) {
        return j.length + (i ? 1 : 0) + 1
    };
    d._pdt = function(i) {
        return i.length * 2 + 2
    };
    return d
}();
var fcw = function() {
    var h = {};
    var i = function(t, o, q, v) {
        if (q < v) {
            var x = Math.floor((q + v) / 2);
            var u = q;
            var r = t[x];
            t[x] = t[v];
            t[v] = r;
            var p = o[x];
            o[x] = o[v];
            o[v] = p;
            var s = (r === Number.MAX_VALUE) ? 0 : 1;
            for (var j = q; j < v; j++) {
                if (t[j] < r + (j & s)) {
                    var y = t[j];
                    t[j] = t[u];
                    t[u] = y;
                    var n = o[j];
                    o[j] = o[u];
                    o[u++] = n;
                    continue
                }
            }
            t[v] = t[u];
            t[u] = r;
            o[v] = o[u];
            o[u] = p;
            i(t, o, q, u - 1);
            i(t, o, u + 1, v)
        }
    };
    h._hbz = i;
    var c = function(x, r, p, t, z) {
        if (t < z) {
            var A = Math.floor((t + z) / 2);
            var y = t;
            var u = x[A];
            x[A] = x[z];
            x[z] = u;
            var s = r[A];
            r[A] = r[z];
            r[z] = s;
            var q = p[A];
            p[A] = p[z];
            p[z] = q;
            var v = (u === Number.MAX_VALUE) ? 0 : 1;
            for (var o = t; o < z; o++) {
                if (x[o] < u + (o & v)) {
                    var B = x[o];
                    x[o] = x[y];
                    x[y] = B;
                    var n = r[o];
                    r[o] = r[y];
                    r[y] = n;
                    var j = p[o];
                    p[o] = p[y];
                    p[y] = j;
                    ++y;
                    continue
                }
            }
            x[z] = x[y];
            x[y] = u;
            r[z] = r[y];
            r[y] = s;
            p[z] = p[y];
            p[y] = q;
            c(x, r, p, t, y - 1);
            c(x, r, p, y + 1, z)
        }
    };
    h._hca = c;
    var b = function(j, n) {
        l = 0;
        d = j;
        n.sort(g);
        for (var o = 2; o < arguments.length; o++) {
            arguments[o].sort(a())
        }
        k = [];
        d = undefined
    };
    h._hcb = b;
    var k = [];
    var l = 0;
    var d;
    var g = function(n, j) {
        return k[l++] = d(n, j)
    };
    var e = 0;
    var a = function() {
        e = 0;
        return m
    };
    var m = function() {
        return k[e++]
    };
    return h
}();
var fau = function() {
    var m = 0;
    var A = -1;
    var G = -1;
    var u = 65535;
    var D = 65535;
    var H = 65535;
    var r = 32766;
    var i = 65535;
    var h = new Float32Array(3);
    var e = new Float32Array(3);
    var c = new Float32Array(3);
    var y = new Float32Array(3);
    var x = new Float32Array(3);
    var q = new Float32Array(3);
    var t = new Float32Array(3);
    var a = new Float32Array(3);
    var d = new Float32Array(3);
    var g = new Float32Array(3);
    var C = ewd.create();
    var z = ewd.create();
    var b = ewd.create();
    var p = 1;
    var I = 3;
    var F = 26;
    var J = function(M, S, L, Q) {
        this._pex = -1;
        this._pez = fpe._pfb;
        this._pfc = undefined;
        this._pfe = 12;
        this._pff = 0;
        this._pfh = 0;
        this._pfj = undefined, this._pfl = undefined, this._pfm = undefined;
        this._pfn = undefined;
        this._pfo = undefined;
        this._nkl = undefined;
        this._pfp = undefined;
        this._cab = 0;
        this._pfq = undefined, this._pfr = undefined, this._pfs = undefined;
        this._pfu = undefined;
        this._pfw = undefined;
        this._pfy = 0;
        this._pga = undefined;
        this._pgc = undefined;
        this._pge = undefined;
        this._cwn = 127;
        this._pgg = undefined;
        this._pgh = undefined;
        this._pgi = undefined;
        this._pgj = undefined;
        this._pgl = undefined;
        this._pgn = undefined;
        this._pgp = undefined;
        this._pgr = 0;
        this._pgs = undefined;
        this._pgt = undefined;
        this._pgv = undefined;
        this._pgw = undefined;
        this._pgy = undefined;
        this._pgz = undefined;
        this._pha = undefined;
        this._phc = undefined;
        this._phe = undefined;
        this._phg = undefined;
        this._phi = undefined;
        this._phj = undefined;
        this._phk = undefined;
        this._phl = undefined;
        this._phm = 0;
        this._gmc = undefined;
        this._gmd = undefined;
        this._llk = undefined;
        this._phn = undefined;
        this._llh = undefined;
        if (M !== undefined) {
            K.call(this, M);
            j.call(this);
            E.call(this)
        } else {
            if (L !== undefined) {
                this._pfe = L._pfe;
                this._pff = L._pff;
                this._pfh = L._pfh;
                this._pfj = L._pfj;
                this._pfl = L._pfl;
                this._pfm = L._pfm;
                this._pfn = L._pfn;
                this._pfo = L._pfo;
                this._nkl = L._nkl;
                this._pfp = L._pfp;
                this._cab = L._cab;
                this._pfq = L._pfq;
                this._pfr = L._pfr;
                this._pfs = L._pfs;
                this._pfu = L._pfu;
                this._pfw = L._pfw;
                this._pfy = L._pfy;
                this._pga = L._pga;
                this._pgc = L._pgc;
                this._pge = L._pge;
                this._cwn = L._cwn;
                this._pgg = L._pgg;
                this._pgh = L._pgh;
                this._pgi = L._pgi;
                this._pgj = L._pgj;
                this._pgl = L._pgl;
                this._pgn = L._pgn;
                this._pgp = L._pgp;
                this._pgr = L._pgr;
                this._pgs = L._pgs;
                this._pgt = L._pgt;
                this._pgv = L._pgv;
                this._pgw = L._pgw;
                this._pgy = L._pgy;
                this._pgz = L._pgz;
                this._pha = L._pha;
                this._phc = L._phc;
                this._phe = L._phe;
                this._phg = L._phg;
                this._phi = L._phi;
                this._phj = L._phj;
                this._phm = L._phm;
                this._gmc = L._gmc;
                this._gmd = L._gmd;
                this._llk = L._llk;
                this._phn = L._phn;
                this._llh = L._llh
            } else {
                if (Q !== undefined) {
                    this._pez = Q._lpi();
                    this._pfe = Q._lpi();
                    this._pff = Q._lpl();
                    this._pfh = Q._lpl();
                    this._pfj = new Int32Array(this._pff);
                    Q._lpw(this._pfj.buffer, 0, this._pfj.buffer.byteLength);
                    this._pfl = new Int32Array(this._pff);
                    Q._lpw(this._pfl.buffer, 0, this._pfl.buffer.byteLength);
                    this._pfm = new Int32Array(this._pff);
                    Q._lpw(this._pfm.buffer, 0, this._pfm.buffer.byteLength);
                    this._pfn = this._pkz(Q, Int32Array);
                    var W = Q._lpl();
                    if (W > 0) {
                        this._pfo = new Array(W);
                        for (var R = 0; R < W; R++) {
                            var P = Q._lpl();
                            var X = Q._lpp();
                            this._pfo[P] = new Int32Array(X / 4);
                            _btl._lpw(this._pfo[P], 0, X)
                        }
                    }
                    this._nkl = this._pkz(Q, Int16Array);
                    this._pfp = this._pkz(Q, Uint16Array);
                    this._cab = Q._lpl();
                    this._pfq = this._pkz(Q, Int16Array);
                    this._pfr = this._pkz(Q, Int16Array);
                    this._pfs = this._pkz(Q, Int16Array);
                    this._pfu = this._pkz(Q, Int8Array);
                    this._pfw = this._pkz(Q, Int8Array);
                    this._pfy = Q._lpm();
                    this._pga = this._pkz(Q, Uint16Array);
                    this._pgc = this._pkz(Q, Uint16Array);
                    this._pge = this._pkz(Q, Int8Array);
                    this._cwn = Q._lpl();
                    this._pgg = this._pkz(Q, Uint16Array);
                    this._pgh = this._pkz(Q, Int32Array);
                    this._pgi = this._pkz(Q, Int16Array);
                    this._pgj = this._pkz(Q, Uint8Array);
                    this._pgl = this._pkz(Q, Uint8Array);
                    this._pgn = this._pkz(Q, Uint8Array);
                    this._pgp = this._pkz(Q, Float32Array);
                    this._pgr = Q._lpl();
                    this._pgs = this._pkz(Q, Int8Array);
                    this._pgt = this._pkz(Q, Int16Array);
                    this._pgv = this._pkz(Q, Int16Array);
                    this._pgw = this._pkz(Q, Int16Array);
                    this._pgy = this._pkz(Q, Int32Array);
                    this._pgz = this._pkz(Q, Int32Array);
                    this._pha = this._pkz(Q, Int32Array);
                    this._phc = this._pkz(Q, Int8Array);
                    this._phe = this._pkz(Q, Int8Array);
                    this._phg = this._pkz(Q, Int8Array);
                    this._phi = this._pkz(Q, Int8Array);
                    this._phj = this._pkz(Q, Int8Array);
                    this._phm = Q._lpl();
                    this._gmc = this._pkz(Q, Float32Array);
                    this._gmd = this._pkz(Q, Float32Array);
                    var V = Q._lpl();
                    if (V > 0) {
                        this._llk = new Array(V);
                        for (var R = 0; R < this._llk.length; R++) {
                            var U = this._llk[R] = {};
                            U._pho = Q._lpl();
                            U._php = Q._lpl();
                            U._cbl = Q._lpl();
                            U._cbm = Q._lpl();
                            U._cbn = Q._lpl();
                            U._phq = Q._lpl()
                        }
                    }
                    var N = Q._lpl();
                    if (N > 0) {
                        this._phn = new Array(N);
                        for (var R = 0; R < this._phn.length; R++) {
                            var U = this._phn[R] = {};
                            U._phs = Q._lpl();
                            U._phu = Q._lpl()
                        }
                    }
                    var O = Q._lpl();
                    if (O > 0) {
                        this._llh = new Array(O);
                        for (var R = 0; R < this._llh.length; R++) {
                            var T = this._llh[R] = {};
                            T._bie = Q._lpl();
                            T._phv = Q._lpl();
                            T._phx = Q._lpl();
                            T._bim = Q._lpl()
                        }
                    }
                } else {
                    if (S !== undefined) {
                        k.call(this, S);
                        j.call(this);
                        E.call(this)
                    } else {
                        throw new Error("2761 ")
                    }
                }
            }
        }
        v.call(this)
    };
    J.prototype._gmm = function() {
        return fpe._pfb
    };
    J.prototype._phy = function() {
        return this._pfe
    };
    var v = function() {
        this._pex = m++
    };
    J.prototype._pia = function() {
        return this._pex
    };
    J.prototype._glj = function() {
        return this._pff
    };
    J.prototype._gll = function(L) {
        return this._pfj[L]
    };
    J.prototype._gln = function(L) {
        return this._pfl[L]
    };
    J.prototype._glp = function(L) {
        return this._pfm[L]
    };
    J.prototype._pib = function(M, L) {
        L[0] = this._pfj[M];
        L[1] = this._pfl[M];
        L[2] = this._pfm[M];
        return L
    };
    J.prototype._pic = function() {
        return this._pfn !== undefined
    };
    J.prototype._bhz = function(L) {
        if (this._pfn === undefined) {
            return undefined
        } else {
            if (this._pfn[L] === A) {
                return undefined
            } else {
                return this._pfn[L]
            }
        }
    };
    J.prototype._glu = function(L, M) {
        if (this._pfn === undefined) {
            return undefined
        } else {
            M[0] = (this._pfn[this._pfq[L]] === A ? undefined : this._pfn[this._pfq[L]]);
            M[1] = (this._pfn[this._pfr[L]] === A ? undefined : this._pfn[this._pfr[L]]);
            M[2] = (this._pfn[this._pfs[L]] === A ? undefined : this._pfn[this._pfs[L]]);
            return M
        }
    };
    J.prototype._pie = function(L) {
        return this._pfo[L]
    };
    J.prototype._glw = function() {
        return this._cab
    };
    J.prototype._glx = function(L, N) {
        var M;
        if (N === 0) {
            M = this._pfq[L]
        } else {
            if (N === 1) {
                M = this._pfr[L]
            } else {
                if (N === 2) {
                    M = this._pfs[L]
                }
            }
        }
        if (M === i) {
            M = undefined
        }
        return M
    };
    J.prototype._glz = function(O) {
        var T = this._pfq[O];
        var R = this._pfs[O];
        var Q = this._pfr[O];
        var S = this._pfj[T];
        var N = this._pfl[T];
        var M = this._pfm[T];
        var L = new Float32Array(3);
        L[0] = S - this._pfj[R];
        L[1] = N - this._pfl[R];
        L[2] = M - this._pfm[R];
        g[0] = S - this._pfj[Q];
        g[1] = N - this._pfl[Q];
        g[2] = M - this._pfm[Q];
        var P = L;
        fqv._eip(P, g);
        fqv.normalize(P);
        return P
    };
    J.prototype._pig = function() {
        return this._pfu !== undefined
    };
    J.prototype._pih = function(L) {
        return this._pfu[L]
    };
    J.prototype._gmq = function(L) {
        if (this._pfu === undefined) {
            return false
        } else {
            if (this._pfu[L] === 2) {
                return true
            } else {
                return false
            }
        }
    };
    J.prototype._gmp = function(L) {
        if (this._pfu === undefined) {
            return false
        } else {
            if (this._pfu[L] === 1) {
                return true
            } else {
                return false
            }
        }
    };
    J.prototype._gmu = function() {
        return this._pfw !== undefined
    };
    J.prototype._pii = function(L) {
        if (this._pfw === undefined) {
            return this._pfy
        } else {
            return this._pfw[L]
        }
    };
    J.prototype._pik = function() {
        return this._pfy
    };
    J.prototype._pim = function() {
        return this._pga !== undefined
    };
    J.prototype._gms = function(L) {
        if (this._pga !== undefined) {
            if (this._pga[L] === r || this._pga[L] === H) {
                return undefined
            } else {
                return this._pga[L]
            }
        } else {
            return undefined
        }
    };
    J.prototype._pio = function(L) {
        return this._pgc[L]
    };
    J.prototype._piq = function() {
        return this._pge !== undefined
    };
    J.prototype._pir = function(L) {
        return this._pge[L]
    };
    J.prototype._gmo = function(M, O) {
        var N = this._pgc[M];
        var L = eyu._mzt(N);
        if (O !== undefined) {
            L = eyu._naa(L, this._cwn, O._dwl(), O._dwk())
        }
        var P = L << 8;
        if (this._pge !== undefined) {
            P |= (255 - this._pge[M])
        } else {
            P |= 255
        }
        return P
    };
    J.prototype._gls = function(L) {
        if (this._pge === undefined) {
            return false
        } else {
            return this._pge[L] !== 0
        }
    };
    J.prototype._gmf = function() {
        return this._pgg !== undefined
    };
    J.prototype._gmg = function(L) {
        if (this._pgg !== undefined) {
            return this._pgg[L]
        } else {
            return undefined
        }
    };
    J.prototype._pis = function() {
        return this._pgh !== undefined
    };
    J.prototype._bib = function(L) {
        if (this._pgh !== undefined) {
            if (this._pgh[L] === G) {
                return undefined
            } else {
                return this._pgh[L]
            }
        } else {
            return undefined
        }
    };
    J.prototype._gmb = function(M, N) {
        if (this._pgp === undefined) {
            return undefined
        }
        for (var L = 0; L < 6; L++) {
            N[L] = this._pgp[M * 6 + L]
        }
    };
    J.prototype._pit = function() {
        return this._pgr
    };
    J.prototype._piv = function(L) {
        return this._pgs[L]
    };
    J.prototype._pix = function(L) {
        return this._pgt[L]
    };
    J.prototype._piy = function(L) {
        return this._pgv[L]
    };
    J.prototype._piz = function(L) {
        return this._pgw[L]
    };
    J.prototype._pja = function(L) {
        return this._pgy[L]
    };
    J.prototype._pjc = function(L) {
        return this._pgz[L]
    };
    J.prototype._pje = function(L) {
        return this._pha[L]
    };
    J.prototype._pjg = function(L) {
        return this._phc[L]
    };
    J.prototype._pji = function(L) {
        return this._phe[L]
    };
    J.prototype._pjj = function(L) {
        return this._phg[L]
    };
    J.prototype._pjk = function(L) {
        return this._phi[L]
    };
    J.prototype._pjm = function(L) {
        return this._phj[L]
    };
    J.prototype._dmh = function() {
        if (this._llk === undefined) {
            return 0
        } else {
            return this._llk.length
        }
    };
    J.prototype._pjo = function(L) {
        if (this._llk === undefined) {
            return undefined
        } else {
            return this._llk[L]._pho
        }
    };
    J.prototype._pjq = function(L) {
        if (this._llk === undefined) {
            return undefined
        } else {
            return this._llk[L]._phq
        }
    };
    J.prototype._pjr = function(L) {
        if (this._llk === undefined) {
            return undefined
        } else {
            return this._llk[L]._php
        }
    };
    J.prototype._pjs = function(L, M) {
        if (this._llk === undefined) {
            return undefined
        } else {
            if (M === 0) {
                return this._llk[L]._cbl
            } else {
                if (M === 1) {
                    return this._llk[L]._cbm
                } else {
                    if (M === 2) {
                        return this._llk[L]._cbn
                    }
                }
            }
        }
    };
    J.prototype._pjt = function(M, N) {
        if (this._llk === undefined) {
            return undefined
        } else {
            var L;
            if (N === 0) {
                L = this._llk[M]._cbl
            } else {
                if (N === 1) {
                    L = this._llk[M]._cbm
                } else {
                    if (N === 2) {
                        L = this._llk[M]._cbn
                    }
                }
            }
            return new Float32Array([this._pfj[L], this._pfl[L], this._pfm[L]])
        }
    };
    J.prototype._pju = function(M, N) {
        if (this._llk === undefined || this._pfn === undefined) {
            return undefined
        } else {
            var L;
            if (N === 0) {
                L = this._llk[M]._cbl
            } else {
                if (N === 1) {
                    L = this._llk[M]._cbm
                } else {
                    if (N === 2) {
                        L = this._llk[M]._cbn
                    }
                }
            }
            if (this._pfn[L] === A) {
                return undefined
            }
            return this._pfn[L]
        }
    };
    J.prototype._pjv = function() {
        if (this._phn === undefined) {
            return 0
        } else {
            return this._phn.length
        }
    };
    J.prototype._pjx = function(L) {
        if (this._phn === undefined) {
            return undefined
        } else {
            return this._phn[L]._phs
        }
    };
    J.prototype._pjz = function(L) {
        if (this._phn === undefined) {
            return undefined
        } else {
            return this._phn[L]._phu
        }
    };
    J.prototype._gmv = function() {
        if (this._llh === undefined) {
            return 0
        } else {
            return this._llh.length
        }
    };
    J.prototype._pkb = function(L) {
        if (this._llh === undefined) {
            return undefined
        } else {
            return this._llh[L]._bie
        }
    };
    J.prototype._pkd = function(L) {
        if (this._llh === undefined) {
            return undefined
        } else {
            return this._llh[L]._phv
        }
    };
    J.prototype._pkf = function(N, O) {
        if (this._llh === undefined) {
            return undefined
        } else {
            var M = this._llh[N]._phv;
            var L;
            if (O === 0) {
                L = this._pfq[M]
            } else {
                if (O === 1) {
                    L = this._pfr[M]
                } else {
                    if (O === 2) {
                        L = this._pfs[M]
                    }
                }
            }
            return new Float32Array([this._pfj[L], this._pfl[L], this._pfm[L]])
        }
    };
    J.prototype._pkg = function(L) {
        if (this._llh === undefined) {
            return undefined
        } else {
            return this._llh[L]._bim
        }
    };
    J.prototype._pki = function(L) {
        if (this._llh === undefined || this._pfn === undefined) {
            return undefined
        }
        var M = this._pfn[this._pfq[this._llh[L]._phv]];
        if (M === A) {
            return undefined
        } else {
            return M
        }
    };
    J.prototype._pkk = function(M) {
        if (this._llh === undefined || this._pgh === undefined) {
            return undefined
        } else {
            var L = this._pgh[this._llh[M]._phv];
            if (L === G) {
                return undefined
            } else {
                return L
            }
        }
    };
    J.prototype._pkl = function(L) {
        if (this._llh === undefined) {
            return undefined
        } else {
            return this._llh[L]._phx
        }
    };
    var K = function(ah) {
        var a0;
        var Y = emz(undefined, ah.getData());
        var X = emz(undefined, ah.getData());
        var V = emz(undefined, ah.getData());
        var U = emz(undefined, ah.getData());
        var T = emz(undefined, ah.getData());
        var Q = emz(undefined, ah.getData());
        var O = emz(undefined, ah.getData());
        var bq = Y._lpi();
        if (bq !== fpe._pfb) {
            throw new Error("2762 " + bq)
        }
        this._pfc = Y._lpi();
        this._pfe = Y._lpi();
        Y._loj(ah.getSize() - F);
        this._pff = Y._lpl();
        this._cab = Y._lpl();
        this._pgr = Y._lpl();
        var aj = Y._lpi();
        var at = (aj & 1) === 1;
        var bp = (aj & 2) === 2;
        var ar = (aj & 4) === 4;
        var aI = (aj & 16) === 16;
        var an = (aj & 32) === 32;
        var Z = (aj & 64) === 64;
        var ax = (aj & 128) === 128;
        var ac = Y._lpi();
        var ao = Y._lpi();
        var ap = Y._lpi();
        var aJ = Y._lpi();
        var R = Y._lpi();
        var ba = Y._lpl();
        var be = Y._lpl();
        var bk = Y._lpl();
        var aZ = Y._lpl();
        var bb = Y._lpl();
        var bo = Y._lpl();
        var a5 = Y._lpl();
        if (!aI) {
            if (R === 1) {
                bo = this._pff
            } else {
                bo = 0
            }
        }
        if (!an) {
            if (ap === 1) {
                a5 = this._cab
            } else {
                a5 = 0
            }
        }
        var a3 = 0,
            aM = 0,
            a2 = 0;
        if (this._pgr > 0) {
            this._pgs = new Int8Array(this._pgr);
            Y._loj(I);
            for (a0 = 0; a0 < this._pgr; a0++) {
                var aK = this._pgs[a0] = Y._lpj();
                if (aK === 0) {
                    a3++
                }
                if (aK >= 1 && aK <= 3) {
                    aM++
                }
                if (aK === 2) {
                    a2++
                }
            }
        }
        var a1 = I + this._pgr;
        var aV = a1;
        a1 += this._pff;
        var ak = a1;
        if (at) {
            a1 += this._cab
        }
        var aX = a1;
        a1 += this._cab;
        var ai = a1;
        if (ac === 255) {
            a1 += this._cab
        }
        var af = a1;
        a1 += a5;
        var aR = a1;
        a1 += bo;
        var ag = a1;
        if (ao === 1) {
            a1 += this._cab
        }
        var aY = a1;
        a1 += aZ;
        var ae = a1;
        if (aJ === 1) {
            a1 += this._cab * 2
        }
        var ad = a1;
        a1 += bb;
        var am = a1;
        a1 += this._cab * 2;
        var aU = a1;
        a1 += ba;
        var aT = a1;
        a1 += be;
        var aS = a1;
        a1 += bk;
        var bj = a1;
        a1 += a3 * 6;
        var bi = a1;
        a1 += aM * 6;
        var aa = 6;
        if (this._pfe === 14) {
            aa = 7
        } else {
            if (this._pfe >= 15) {
                aa = 9
            }
        }
        var bh = a1;
        a1 += aM * aa;
        var bg = a1;
        a1 += aM;
        var bf = a1;
        a1 += aM;
        var bd = a1;
        a1 += aM + a2 * 2;
        var W = a1;
        var aW = ah.getSize();
        var aQ = ah.getSize();
        var aP = ah.getSize();
        var aN = ah.getSize();
        if (ax) {
            var bc = emz(undefined, ah.getData());
            bc._oys = ah.getSize() - F - 1;
            bc._oys -= bc._lpi() - 1;
            this._phm = bc._lpl();
            var S = bc._lpl();
            var P = bc._lpl();
            aW = W + S;
            aQ = aW + P;
            aP = aQ + this._pff;
            aN = aP + (this._phm * 2)
        }
        this._pfj = new Int32Array(this._pff);
        this._pfl = new Int32Array(this._pff);
        this._pfm = new Int32Array(this._pff);
        this._pfq = new Int16Array(this._cab);
        this._pfr = new Int16Array(this._cab);
        this._pfs = new Int16Array(this._cab);
        if (R === 1) {
            this._pfn = new Int32Array(this._pff)
        }
        if (at) {
            this._pfu = new Int8Array(this._cab)
        }
        if (ac === 255) {
            this._pfw = new Int8Array(this._cab)
        } else {
            this._pfy = ac
        }
        if (ao) {
            this._pge = new Int8Array(this._cab)
        }
        if (ap) {
            this._pgh = new Int32Array(this._cab)
        }
        if (aJ === 1) {
            this._pgg = new Uint16Array(this._cab);
            if (this._pgr > 0 || this._phm > 0) {
                this._pga = new Uint16Array(this._cab)
            }
        }
        this._pgc = new Uint16Array(this._cab);
        if (this._pgr > 0) {
            this._pgt = new Int16Array(this._pgr);
            this._pgv = new Int16Array(this._pgr);
            this._pgw = new Int16Array(this._pgr);
            if (aM > 0) {
                this._pgy = new Int32Array(this._pgr);
                this._pgz = new Int32Array(this._pgr);
                this._pha = new Int32Array(this._pgr);
                this._phi = new Int8Array(this._pgr);
                this._phj = new Int8Array(this._pgr);
                this._phc = new Int8Array(this._pgr)
            }
            if (a2 > 0) {
                this._phe = new Int8Array(this._pgr);
                this._phg = new Int8Array(this._pgr)
            }
        }
        Y._loj(aV);
        X._loj(aU);
        V._loj(aT);
        U._loj(aS);
        T._loj(aR);
        var a8 = 0,
            a7 = 0,
            a6 = 0;
        for (a0 = 0; a0 < this._pff; a0++) {
            var al = Y._lpi();
            var N = 0;
            if ((al & 1) !== 0) {
                N = X._ozt()
            }
            var M = 0;
            if ((al & 2) !== 0) {
                M = -V._ozt()
            }
            var br = 0;
            if ((al & 4) !== 0) {
                br = U._ozt()
            }
            a8 = this._pfj[a0] = a8 + N;
            a7 = this._pfl[a0] = a7 + M;
            a6 = this._pfm[a0] = a6 + br;
            if (R === 1) {
                if (aI) {
                    this._pfn[a0] = T._ozu()
                } else {
                    this._pfn[a0] = T._lpi();
                    if (this._pfn[a0] === 255) {
                        this._pfn[a0] = A
                    }
                }
            }
        }
        if (this._phm > 0) {
            Y._loj(aQ);
            X._loj(aP);
            V._loj(aN);
            this._pfp = new Uint16Array(this._pff);
            for (var aw = 0, av = 0; aw < this._pff; ++aw) {
                this._pfp[aw] = av;
                av += Y._lpi()
            }
            this._pgj = new Uint8Array(this._cab);
            this._pgl = new Uint8Array(this._cab);
            this._pgn = new Uint8Array(this._cab);
            this._gmc = new Float32Array(this._phm);
            this._gmd = new Float32Array(this._phm);
            for (var aw = 0; aw < this._phm; ++aw) {
                this._gmc[aw] = X._lpm() / 4096;
                this._gmd[aw] = V._lpm() / 4096
            }
        }
        Y._loj(am);
        X._loj(ak);
        V._loj(ai);
        U._loj(ag);
        T._loj(af);
        Q._loj(ae);
        O._loj(ad);
        for (a0 = 0; a0 < this._cab; a0++) {
            this._pgc[a0] = Y._lpl();
            if (at) {
                this._pfu[a0] = X._lpi()
            }
            if (ac === 255) {
                this._pfw[a0] = V._lpi()
            }
            if (ao === 1) {
                this._pge[a0] = U._lpi()
            }
            if (ap === 1) {
                if (an) {
                    this._pgh[a0] = T._ozu()
                } else {
                    this._pgh[a0] = T._lpi();
                    if (this._pgh[a0] === 255) {
                        this._pgh[a0] = -1
                    }
                }
            }
            if (aJ === 1) {
                this._pgg[a0] = Q._lpl() - 1
            }
            if (this._pga !== undefined) {
                if (this._pgg[a0] !== D) {
                    if (this._pfe >= 16) {
                        this._pga[a0] = O._ozr() - 1
                    } else {
                        this._pga[a0] = O._lpi() - 1
                    }
                } else {
                    this._pga[a0] = H
                }
            }
        }
        this._pfh = -1;
        Y._loj(aY);
        X._loj(aX);
        V._loj(aW);
        var bn = 0,
            bm = 0,
            bl = 0;
        var aH = 0,
            aG = 0,
            aF = 0;
        var L = 0;
        for (a0 = 0; a0 < this._cab; a0++) {
            var aK = X._lpi();
            var au = aK & 7;
            if (au === 1) {
                aH = Y._ozt() + L;
                L = aH;
                aG = Y._ozt() + L;
                L = aG;
                aF = Y._ozt() + L;
                L = aF;
                this._pfq[a0] = aH;
                this._pfr[a0] = aG;
                this._pfs[a0] = aF;
                if (aH > this._pfh) {
                    this._pfh = aH
                }
                if (aG > this._pfh) {
                    this._pfh = aG
                }
                if (aF > this._pfh) {
                    this._pfh = aF
                }
            } else {
                if (au === 2) {
                    aG = aF;
                    aF = Y._ozt() + L;
                    L = aF;
                    this._pfq[a0] = aH;
                    this._pfr[a0] = aG;
                    this._pfs[a0] = aF;
                    if (aF > this._pfh) {
                        this._pfh = aF
                    }
                } else {
                    if (au === 3) {
                        aH = aF;
                        aF = Y._ozt() + L;
                        L = aF;
                        this._pfq[a0] = aH;
                        this._pfr[a0] = aG;
                        this._pfs[a0] = aF;
                        if (aF > this._pfh) {
                            this._pfh = aF
                        }
                    } else {
                        if (au === 4) {
                            var aO = aH;
                            aH = aG;
                            aG = aO;
                            aF = Y._ozt() + L;
                            L = aF;
                            this._pfq[a0] = aH;
                            this._pfr[a0] = aG;
                            this._pfs[a0] = aF;
                            if (aF > this._pfh) {
                                this._pfh = aF
                            }
                        }
                    }
                }
            }
            if (this._phm > 0) {
                if ((aK & 8) !== 0) {
                    this._pgj[a0] = V._lpi();
                    this._pgl[a0] = V._lpi();
                    this._pgn[a0] = V._lpi()
                }
            }
        }
        this._pfh++;
        Y._loj(bj);
        X._loj(bi);
        V._loj(bh);
        U._loj(bg);
        T._loj(bf);
        Q._loj(bd);
        for (a0 = 0; a0 < this._pgr; a0++) {
            var aK = this._pgs[a0];
            if (aK === 0) {
                this._pgt[a0] = Y._lpm();
                this._pgv[a0] = Y._lpm();
                this._pgw[a0] = Y._lpm()
            } else {
                this._pgt[a0] = X._lpm();
                this._pgv[a0] = X._lpm();
                this._pgw[a0] = X._lpm();
                if (this._pfe < 15) {
                    this._pgy[a0] = V._lpl();
                    if (this._pfe < 14) {
                        this._pgz[a0] = V._lpl()
                    } else {
                        this._pgz[a0] = V.g3()
                    }
                    this._pha[a0] = V._lpl()
                } else {
                    this._pgy[a0] = V.g3();
                    this._pgz[a0] = V.g3();
                    this._pha[a0] = V.g3()
                }
                this._phi[a0] = U._lpi();
                this._phj[a0] = T._lpj();
                this._phc[a0] = Q._lpj();
                if (aK === 2) {
                    this._phe[a0] = Q._lpj();
                    this._phg[a0] = Q._lpj()
                }
            }
        }
        Y._loj(W);
        if (bp) {
            var aq = Y._lpi();
            if (aq > 0) {
                this._llk = new Array(aq);
                for (var a0 = 0; a0 < aq; a0++) {
                    var aE = Y._lpl();
                    var aD = Y._lpl();
                    var aC = ac;
                    if (ac === 255) {
                        aC = this._pfw[aD]
                    }
                    this._llk[a0] = {
                        _pho: aE,
                        _php: aD,
                        _cbl: this._pfq[aD],
                        _cbm: this._pfr[aD],
                        _cbn: this._pfs[aD],
                        _phq: aC
                    }
                }
            }
            var ab = Y._lpi();
            if (ab > 0) {
                this._phn = new Array(ab);
                for (var a0 = 0; a0 < ab; a0++) {
                    var aB = Y._lpl();
                    var aA = Y._lpl();
                    this._phn[a0] = {
                        _phs: aB,
                        _phu: aA
                    }
                }
            }
        }
        if (ar) {
            var aL = Y._lpi();
            if (aL > 0) {
                this._llh = new Array(aL);
                for (var a0 = 0; a0 < aL; a0++) {
                    var a9 = Y._lpl();
                    var az = Y._lpl();
                    var ay;
                    if (Z) {
                        ay = Y._ozu();
                        if (ay === -1) {
                            ay = undefined
                        }
                    } else {
                        ay = Y._lpi();
                        if (ay === 255) {
                            ay = undefined
                        }
                    }
                    var a4 = Y._lpj();
                    this._llh[a0] = {
                        _bie: a9,
                        _phv: az,
                        _phx: ay,
                        _bim: a4
                    }
                }
            }
        }
    };
    var k = function(P) {
        var ah = false,
            an = false,
            aa = false,
            M = false,
            S = false,
            ac = false;
        var ad = 0,
            ar = 0,
            V = 0;
        this._pfy = undefined;
        for (var O = 0; O < P.length; O++) {
            var Y = P[O];
            if (Y !== null && Y !== undefined) {
                this._pff += Y._glj();
                this._cab += Y._glw();
                this._pgr += Y._pit();
                this._phm += Y._phm;
                ad += Y._dmh();
                ar += Y._pjv();
                V += Y._gmv();
                ah |= Y._pig();
                if (Y._gmu()) {
                    an = true
                } else {
                    if (this._pfy === undefined) {
                        this._pfy = Y._pik()
                    }
                    if (this._pfy !== Y._pik()) {
                        an = true
                    }
                }
                aa |= Y._piq();
                M |= Y._pim();
                S |= Y._gmf();
                ac |= Y._pis()
            }
        }
        this._pfj = new Int32Array(this._pff);
        this._pfl = new Int32Array(this._pff);
        this._pfm = new Int32Array(this._pff);
        this._pfn = new Int32Array(this._pff);
        this._nkl = new Int16Array(this._pff);
        this._pfq = new Int16Array(this._cab);
        this._pfr = new Int16Array(this._cab);
        this._pfs = new Int16Array(this._cab);
        if (ah) {
            this._pfu = new Int8Array(this._cab)
        }
        if (an) {
            this._pfw = new Int8Array(this._cab)
        }
        if (aa) {
            this._pge = new Int8Array(this._cab)
        }
        if (M) {
            this._pga = new Uint16Array(this._cab)
        }
        this._pgc = new Uint16Array(this._cab);
        if (S) {
            this._pgg = new Uint16Array(this._cab)
        }
        if (ac) {
            this._pgh = new Int32Array(this._cab)
        }
        this._pgi = new Int16Array(this._cab);
        if (this._pgr > 0) {
            this._pgs = new Int8Array(this._pgr);
            this._pgt = new Int16Array(this._pgr);
            this._pgv = new Int16Array(this._pgr);
            this._pgw = new Int16Array(this._pgr);
            this._pgy = new Int32Array(this._pgr);
            this._pgz = new Int32Array(this._pgr);
            this._pha = new Int32Array(this._pgr);
            this._phi = new Int8Array(this._pgr);
            this._phj = new Int8Array(this._pgr);
            this._phc = new Int8Array(this._pgr);
            this._phe = new Int8Array(this._pgr);
            this._phg = new Int8Array(this._pgr)
        }
        if (V > 0) {
            this._llh = new Array(V)
        }
        if (ad > 0) {
            this._llk = new Array(ad)
        }
        if (ar > 0) {
            this._phn = new Array(ar)
        }
        if (this._phm > 0) {
            this._gmc = new Float32Array(this._phm);
            this._gmd = new Float32Array(this._phm);
            this._pfp = new Uint16Array(this._pff);
            this._pgj = new Uint8Array(this._cab);
            this._pgl = new Uint8Array(this._cab);
            this._pgn = new Uint8Array(this._cab)
        }
        var aC = new Uint8Array(this._pff);
        var av = new Uint32Array(this._phm);
        var Q = new Uint16Array(this._pff);
        var al = new Uint8Array(this._pff);
        var aq = new Uint16Array(3);
        this._pff = 0;
        this._cab = 0;
        this._pgr = 0;
        this._phm = 0;
        ad = 0;
        ar = 0;
        V = 0;
        for (O = 0; O < P.length; O++) {
            var af = (1 << O);
            Y = P[O];
            if (Y !== null && Y !== undefined) {
                var N = new Uint8Array(Y._pff);
                var L = Y._gmv();
                for (var az = 0; az < L; az++) {
                    this._llh[V++] = {
                        _bie: Y._pkb(az),
                        _phv: Y._pkd(az) + this._cab,
                        _phx: Y._pkl(az),
                        _bim: Y._pkg(az)
                    }
                }
                for (var ax = 0; ax < Y._cab; ax++) {
                    aq[0] = Y._pfq[ax];
                    aq[1] = Y._pfr[ax];
                    aq[2] = Y._pfs[ax];
                    for (var au = 0; au < 3; au++) {
                        var X = aq[au];
                        var am = Y._pfj[X];
                        var ak = Y._pfl[X];
                        var ae = Y._pfm[X];
                        var ai;
                        for (ai = 0; ai < this._pff; ai++) {
                            if (am == this._pfj[ai] && ak == this._pfl[ai] && ae == this._pfm[ai]) {
                                this._nkl[ai] |= af;
                                Q[X] = ai;
                                break
                            }
                        }
                        if (Y._phm > 0 && N[X] === 0) {
                            var U = (X < (Y._pff - 1) ? Y._pfp[X + 1] : Y._phm) - Y._pfp[X];
                            for (var ab = 0; ab < U; ++ab) {
                                this._gmc[this._phm] = Y._gmc[Y._pfp[X] + ab];
                                this._gmd[this._phm] = Y._gmd[Y._pfp[X] + ab];
                                av[this._phm] = (ai << 16) | (aC[ai] + ab);
                                this._phm++
                            }
                            al[X] = aC[ai];
                            aC[ai] += U;
                            N[X] = 1
                        }
                        if (ai >= this._pff) {
                            this._pfj[this._pff] = am;
                            this._pfl[this._pff] = ak;
                            this._pfm[this._pff] = ae;
                            this._nkl[this._pff] = af;
                            this._pfn[this._pff] = Y._pfn != null ? Y._pfn[X] : A;
                            Q[X] = this._pff;
                            this._pff++
                        }
                    }
                }
                var aj = Y._glw();
                for (var R = 0; R < aj; R++) {
                    if (ah) {
                        if (Y._pig()) {
                            this._pfu[this._cab] = Y._pih(R)
                        }
                    }
                    if (an) {
                        if (Y._gmu()) {
                            this._pfw[this._cab] = Y._pii(R)
                        } else {
                            this._pfw[this._cab] = Y._pik()
                        }
                    }
                    if (aa) {
                        if (Y._piq()) {
                            this._pge[this._cab] = Y._pir(R)
                        } else {
                            this._pge[this._cab] = 0
                        }
                    }
                    if (S) {
                        if (Y._gmf() && Y._gmg(R) !== undefined) {
                            this._pgg[this._cab] = Y._gmg(R)
                        } else {
                            this._pgg[this._cab] = D
                        }
                    }
                    if (ac) {
                        if (Y._pis() && Y._bib(R) !== undefined) {
                            this._pgh[this._cab] = Y._bib(R)
                        } else {
                            this._pgh[this._cab] = G
                        }
                    }
                    if (Y._phm > 0) {
                        this._pgj[this._cab] = Y._pgj[R] + al[Y._pfq[R]];
                        this._pgl[this._cab] = Y._pgl[R] + al[Y._pfr[R]];
                        this._pgn[this._cab] = Y._pgn[R] + al[Y._pfs[R]]
                    }
                    this._pfq[this._cab] = Q[Y._pfq[R]];
                    this._pfr[this._cab] = Q[Y._pfr[R]];
                    this._pfs[this._cab] = Q[Y._pfs[R]];
                    this._pgi[this._cab] = af;
                    this._pgc[this._cab] = Y._pio(R);
                    this._cab++
                }
                var at = Y._dmh();
                for (var aw = 0; aw < at; aw++) {
                    this._llk[ad] = {
                        _pho: Y._pjo(aw),
                        _cbl: Q[Y._pjs(aw, 0)],
                        _cbm: Q[Y._pjs(aw, 1)],
                        _cbn: Q[Y._pjs(aw, 2)],
                        _phq: Y._pjq(aw)
                    };
                    ad++
                }
                var W = Y._pjv();
                for (var ay = 0; ay < W; ay++) {
                    this._phn[ar] = {
                        _phs: Y._pjx(ay),
                        _phu: Q[Y._pjz(ay)]
                    };
                    ar++
                }
            }
        }
        if (this._phm > 0) {
            fcw._hca(av, this._gmc, this._gmd, 0, this._phm - 1);
            for (var ap = 0, ao = 0; ap < this._pff; ++ap) {
                this._pfp[ap] = ao;
                ao += aC[ap]
            }
        }
        var ag = 0;
        this._pfh = this._pff;
        for (var O = 0; O < P.length; O++) {
            var af = (1 << O);
            var Y = P[O];
            if (Y !== null && Y !== undefined) {
                if (M) {
                    var aj = Y._glw();
                    for (R = 0; R < aj; R++) {
                        var aB = Y._pim() ? Y._pga[R] : H;
                        this._pga[ag++] = (aB !== r && aB !== H) ? aB + this._pgr : aB
                    }
                }
                var T = Y._pit();
                for (var Z = 0; Z < T; Z++) {
                    var aA = this._pgs[this._pgr] = Y._piv(Z);
                    if (aA === 0) {
                        this._pgt[this._pgr] = n.call(this, Y, Y._pix(Z), af);
                        this._pgv[this._pgr] = n.call(this, Y, Y._piy(Z), af);
                        this._pgw[this._pgr] = n.call(this, Y, Y._piz(Z), af)
                    }
                    if (aA >= 1 && aA <= 3) {
                        this._pgt[this._pgr] = Y._pix(Z);
                        this._pgv[this._pgr] = Y._piy(Z);
                        this._pgw[this._pgr] = Y._piz(Z);
                        this._pgy[this._pgr] = Y._pja(Z);
                        this._pgz[this._pgr] = Y._pjc(Z);
                        this._pha[this._pgr] = Y._pje(Z);
                        this._phi[this._pgr] = Y._pjk(Z);
                        this._phj[this._pgr] = Y._pjm(Z);
                        this._phc[this._pgr] = Y._pjg(Z)
                    }
                    if (aA === 2) {
                        this._phe[this._pgr] = Y._pji(Z);
                        this._phg[this._pgr] = Y._pjj(Z)
                    }
                    this._pgr++
                }
            }
        }
    };
    var n = function(R, N, Q) {
        var L = R._gll(N),
            S = R._gln(N),
            P = R._glp(N);
        for (var O = 0; O < this._pff; O++) {
            if (L === this._pfj[O] && S === this._pfl[O] && P === this._pfm[O]) {
                this._nkl[O] |= Q;
                return O
            }
        }
        this._pfj[this._pff] = L;
        this._pfl[this._pff] = S;
        this._pfm[this._pff] = P;
        this._nkl[this._pff] = Q;
        var M = R._bhz(N);
        if (M === undefined) {
            M = A
        }
        this._pfn[this._pff] = M;
        return this._pff++
    };
    var j = function() {
        if (this._pga !== undefined) {
            var U = new Array(this._pgr),
                T = new Array(this._pgr);
            var S = new Array(this._pgr),
                R = new Array(this._pgr);
            var Q = new Array(this._pgr),
                P = new Array(this._pgr);
            for (var ac = 0; ac < this._pgr; ac++) {
                U[ac] = Number.MAX_VALUE;
                T[ac] = -Number.MAX_VALUE;
                S[ac] = Number.MAX_VALUE;
                R[ac] = -Number.MAX_VALUE;
                Q[ac] = Number.MAX_VALUE;
                P[ac] = -Number.MAX_VALUE
            }
            for (var ag = 0; ag < this._cab; ag++) {
                if (this._pga[ag] !== r && this._pga[ag] !== H) {
                    var N = this._pga[ag];
                    for (var ae = 0; ae < 3; ae++) {
                        var ad;
                        if (ae === 0) {
                            ad = this._pfq[ag]
                        } else {
                            if (ae === 1) {
                                ad = this._pfr[ag]
                            } else {
                                ad = this._pfs[ag]
                            }
                        }
                        var Z = this._pfj[ad],
                            X = -this._pfl[ad],
                            W = this._pfm[ad];
                        if (Z < U[N]) {
                            U[N] = Z
                        }
                        if (Z > T[N]) {
                            T[N] = Z
                        }
                        if (X < S[N]) {
                            S[N] = X
                        }
                        if (X > R[N]) {
                            R[N] = X
                        }
                        if (W < Q[N]) {
                            Q[N] = W
                        }
                        if (W > P[N]) {
                            P[N] = W
                        }
                    }
                }
            }
            this._phk = new Array(this._pgr);
            this._phl = new Array(this._pgr);
            for (var ac = 0; ac < this._pgr; ac++) {
                var ab = this._pgs[ac];
                if (ab > 0) {
                    this._phk[ac] = new Float32Array([Math.floor((U[ac] + T[ac]) / 2), Math.floor((S[ac] + R[ac]) / 2), Math.floor((Q[ac] + P[ac]) / 2)]);
                    if (ab === 1) {
                        var af = this._pgy[ac];
                        if (af === 0) {
                            a[0] = 1;
                            a[2] = 1
                        } else {
                            if (af > 0) {
                                a[0] = 1;
                                a[2] = af / 1024
                            } else {
                                a[2] = 1;
                                a[0] = -af / 1024
                            }
                        }
                        a[1] = 64 / this._pgz[ac]
                    } else {
                        if (ab === 2) {
                            a[0] = 64 / this._pgy[ac];
                            a[1] = 64 / this._pgz[ac];
                            a[2] = 64 / this._pha[ac]
                        } else {
                            a[0] = this._pgy[ac] / 1024;
                            a[1] = this._pgz[ac] / 1024;
                            a[2] = this._pha[ac] / 1024
                        }
                    }
                    var aa = (this._phi[ac] / 256) * (Math.PI * 2);
                    var O = Math.cos(aa);
                    var L = Math.sin(aa);
                    z[0] = O;
                    z[1] = 0;
                    z[2] = L;
                    z[3] = 0;
                    z[4] = 1;
                    z[5] = 0;
                    z[6] = -L;
                    z[7] = 0;
                    z[8] = O;
                    var Y = 1,
                        V = 0;
                    O = this._pgv[ac] / 32767;
                    L = -Math.sqrt(1 - O * O);
                    var ah = 1 - O;
                    var M = Math.sqrt(this._pgt[ac] * this._pgt[ac] + this._pgw[ac] * this._pgw[ac]);
                    if (M === 0 && O === 0) {
                        ewd.set(z, b)
                    } else {
                        if (M != 0) {
                            Y = -this._pgw[ac] / M;
                            V = this._pgt[ac] / M
                        }
                        C[0] = O + Y * Y * ah;
                        C[1] = V * L;
                        C[2] = V * Y * ah;
                        C[3] = -V * L;
                        C[4] = O;
                        C[5] = Y * L;
                        C[6] = Y * V * ah;
                        C[7] = -Y * L;
                        C[8] = O + V * V * ah;
                        b[0] = z[0] * C[0] + z[1] * C[3] + z[2] * C[6];
                        b[1] = z[0] * C[1] + z[1] * C[4] + z[2] * C[7];
                        b[2] = z[0] * C[2] + z[1] * C[5] + z[2] * C[8];
                        b[3] = z[3] * C[0] + z[4] * C[3] + z[5] * C[6];
                        b[4] = z[3] * C[1] + z[4] * C[4] + z[5] * C[7];
                        b[5] = z[3] * C[2] + z[4] * C[5] + z[5] * C[8];
                        b[6] = z[6] * C[0] + z[7] * C[3] + z[8] * C[6];
                        b[7] = z[6] * C[1] + z[7] * C[4] + z[8] * C[7];
                        b[8] = z[6] * C[2] + z[7] * C[5] + z[8] * C[8]
                    }
                    b[0] *= a[0];
                    b[1] *= a[0];
                    b[2] *= a[0];
                    b[3] *= a[1];
                    b[4] *= a[1];
                    b[5] *= a[1];
                    b[6] *= a[2];
                    b[7] *= a[2];
                    b[8] *= a[2];
                    ewd._goh(b);
                    this._phl[ac] = ewd._gnn(b)
                }
            }
        }
    };
    var E = function() {
        this._pgp = new Float32Array(this._cab * 6);
        var ay;
        for (var aL = 0; aL < this._cab; aL++) {
            var aF = 0,
                al = 0,
                aE = 0,
                ak = 0,
                aD = 0,
                aj = 0;
            if (this._pgg !== undefined && this._pgg[aL] !== D) {
                var aM = H;
                if (this._pga !== undefined) {
                    aM = this._pga[aL]
                }
                if (aM === H) {
                    aF = 0;
                    al = 1;
                    aE = 1;
                    ak = 1;
                    aD = 0;
                    aj = 0
                } else {
                    if (aM === r) {
                        var ar = this._pfp[this._pfq[aL]] + this._pgj[aL];
                        var aq = this._pfp[this._pfr[aL]] + this._pgl[aL];
                        var ao = this._pfp[this._pfs[aL]] + this._pgn[aL];
                        aF = this._gmc[ar];
                        al = this._gmd[ar];
                        aE = this._gmc[aq];
                        ak = this._gmd[aq];
                        aD = this._gmc[ao];
                        aj = this._gmd[ao]
                    } else {
                        var ah = this._pgs[aM];
                        if (ah === 0) {
                            var ai = this._pfq[aL],
                                ag = this._pfr[aL],
                                M = this._pfs[aL];
                            var az = this._pgt[aM],
                                ax = this._pgv[aM],
                                aw = this._pgw[aM];
                            var aJ = this._pfj[az],
                                ap = this._pfl[az],
                                W = this._pfm[az];
                            var aI = this._pfj[ax] - aJ,
                                an = this._pfl[ax] - ap,
                                U = this._pfm[ax] - W;
                            var aG = this._pfj[aw] - aJ,
                                am = this._pfl[aw] - ap,
                                S = this._pfm[aw] - W;
                            var ae = this._pfj[ai] - aJ,
                                O = this._pfl[ai] - ap,
                                aC = this._pfm[ai] - W;
                            var ad = this._pfj[ag] - aJ,
                                N = this._pfl[ag] - ap,
                                aB = this._pfm[ag] - W;
                            var ac = this._pfj[M] - aJ,
                                L = this._pfl[M] - ap,
                                aA = this._pfm[M] - W;
                            var V = an * S - U * am;
                            var aK = U * aG - aI * S;
                            var av = aI * am - an * aG;
                            var R = am * av - S * aK;
                            var Q = S * V - aG * av;
                            var P = aG * aK - am * V;
                            var aH = 1 / (R * aI + Q * an + P * U);
                            aF = (R * ae + Q * O + P * aC) * aH;
                            aE = (R * ad + Q * N + P * aB) * aH;
                            aD = (R * ac + Q * L + P * aA) * aH;
                            R = an * av - U * aK;
                            Q = U * V - aI * av;
                            P = aI * aK - an * V;
                            aH = 1 / (R * aG + Q * am + P * S);
                            al = (R * ae + Q * O + P * aC) * aH;
                            ak = (R * ad + Q * N + P * aB) * aH;
                            aj = (R * ac + Q * L + P * aA) * aH
                        } else {
                            var ai = this._pfq[aL],
                                ag = this._pfr[aL],
                                M = this._pfs[aL];
                            h[0] = this._pfj[ai];
                            h[1] = -this._pfl[ai];
                            h[2] = this._pfm[ai];
                            e[0] = this._pfj[ag];
                            e[1] = -this._pfl[ag];
                            e[2] = this._pfm[ag];
                            c[0] = this._pfj[M];
                            c[1] = -this._pfl[M];
                            c[2] = this._pfm[M];
                            var af = this._phk[aM];
                            var au = this._phl[aM];
                            var Y = this._phj[aM];
                            var ab = this._phc[aM] / 256;
                            if (ah === 1) {
                                var at = this._pha[aM] / 1024;
                                ay = s(h, af, au, at, Y, ab);
                                aF = ay._gmc;
                                al = ay._gmd;
                                ay = s(e, af, au, at, Y, ab);
                                aE = ay._gmc;
                                ak = ay._gmd;
                                ay = s(c, af, au, at, Y, ab);
                                aD = ay._gmc;
                                aj = ay._gmd;
                                var T = at / 2;
                                if ((Y & 1) === 0) {
                                    if (aE - aF > T) {
                                        aE -= at
                                    } else {
                                        if (aF - aE > T) {
                                            aE += at
                                        }
                                    }
                                    if (aD - aF > T) {
                                        aD -= at
                                    } else {
                                        if (aF - aD > T) {
                                            aD += at
                                        }
                                    }
                                } else {
                                    if (ak - al > T) {
                                        ak -= at
                                    } else {
                                        if (al - ak > T) {
                                            ak += at
                                        }
                                    }
                                    if (aj - al > T) {
                                        aj -= at
                                    } else {
                                        if (al - aj > T) {
                                            aj += at
                                        }
                                    }
                                }
                            } else {
                                if (ah === 2) {
                                    var aa = this._phe[aM] / 256;
                                    var Z = this._phg[aM] / 256;
                                    fqv._eij(e, h, y);
                                    fqv._eij(c, h, x);
                                    fqv._eip(x, y, q);
                                    evs._gnd(au, q, t);
                                    a[0] = 1 / (64 / this._pgy[aM]);
                                    a[1] = 1 / (64 / this._pgz[aM]);
                                    a[2] = 1 / (64 / this._pha[aM]);
                                    fqv._eil(t, a);
                                    var X = B(t);
                                    ay = l(h, af, X, au, Y, ab, aa, Z);
                                    aF = ay._gmc;
                                    al = ay._gmd;
                                    ay = l(e, af, X, au, Y, ab, aa, Z);
                                    aE = ay._gmc;
                                    ak = ay._gmd;
                                    ay = l(c, af, X, au, Y, ab, aa, Z);
                                    aD = ay._gmc;
                                    aj = ay._gmd
                                } else {
                                    if (ah === 3) {
                                        ay = o(h, af, au, Y, ab);
                                        aF = ay._gmc;
                                        al = ay._gmd;
                                        ay = o(e, af, au, Y, ab);
                                        aE = ay._gmc;
                                        ak = ay._gmd;
                                        ay = o(c, af, au, Y, ab);
                                        aD = ay._gmc;
                                        aj = ay._gmd;
                                        if ((Y & 1) === 0) {
                                            if (aE - aF > 0.5) {
                                                aE -= 1
                                            } else {
                                                if (aF - aE > 0.5) {
                                                    aE += 1
                                                }
                                            }
                                            if (aD - aF > 0.5) {
                                                aD -= 1
                                            } else {
                                                if (aF - aD > 0.5) {
                                                    aD += 1
                                                }
                                            }
                                        } else {
                                            if (ak - al > 0.5) {
                                                ak -= 1
                                            } else {
                                                if (al - ak > 0.5) {
                                                    ak += 1
                                                }
                                            }
                                            if (aj - al > 0.5) {
                                                aj -= 1
                                            } else {
                                                if (al - aj > 0.5) {
                                                    aj += 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this._pgp[aL * 6] = aF;
            this._pgp[aL * 6 + 1] = aE;
            this._pgp[aL * 6 + 2] = aD;
            this._pgp[aL * 6 + 3] = al;
            this._pgp[aL * 6 + 4] = ak;
            this._pgp[aL * 6 + 5] = aj
        }
    };
    var o = function(L, S, N, P, R) {
        fqv._eij(L, S);
        evs._gnd(N, L);
        fqv.normalize(L);
        var Q = ((Math.atan2(L[0], L[2])) / (Math.PI * 2)) + 0.5;
        var O = ((Math.asin(L[1])) / Math.PI) + 0.5 + R;
        if (P === 1) {
            var M = Q;
            Q = -O;
            O = M
        } else {
            if (P === 2) {
                Q = -Q;
                O = -O
            } else {
                if (P === 3) {
                    var M = Q;
                    Q = O;
                    O = -M
                }
            }
        }
        return {
            _gmc: Q,
            _gmd: O
        }
    };
    var s = function(S, Q, R, M, L, P) {
        fqv._eij(S, Q);
        evs._gnd(R, S);
        var O = ((Math.atan2(S[0], S[2])) / (Math.PI * 2)) + 0.5;
        if (M !== 1) {
            O *= M
        }
        var N = S[1] + 0.5 + P;
        if (L === 1) {
            var T = O;
            O = -N;
            N = T
        } else {
            if (L === 2) {
                O = -O;
                N = -N
            } else {
                if (L === 3) {
                    var T = O;
                    O = N;
                    N = -T
                }
            }
        }
        return {
            _gmc: O,
            _gmd: N
        }
    };
    var B = function(O) {
        var N = O[0] < 0 ? -O[0] : O[0];
        var M = O[1] < 0 ? -O[1] : O[1];
        var L = O[2] < 0 ? -O[2] : O[2];
        if (M > N && M > L) {
            if (O[1] < 0) {
                return 0
            } else {
                return 1
            }
        } else {
            if (L > N && L > M) {
                if (O[2] > 0) {
                    return 2
                } else {
                    return 3
                }
            } else {
                if (O[0] > 0) {
                    return 4
                } else {
                    return 5
                }
            }
        }
    };
    var l = function(U, S, R, T, L, Q, P, O) {
        fqv._eij(U, S);
        evs._gnd(T, U);
        var N, M;
        if (R === 0) {
            N = U[0] + Q + 0.5;
            M = -U[2] + O + 0.5
        } else {
            if (R === 1) {
                N = U[0] + Q + 0.5;
                M = U[2] + O + 0.5
            } else {
                if (R === 2) {
                    N = U[0] + Q + 0.5;
                    M = -U[1] + P + 0.5
                } else {
                    if (R === 3) {
                        N = -U[0] + Q + 0.5;
                        M = -U[1] + P + 0.5
                    } else {
                        if (R === 4) {
                            N = -U[2] + O + 0.5;
                            M = -U[1] + P + 0.5
                        } else {
                            N = U[2] + O + 0.5;
                            M = -U[1] + P + 0.5
                        }
                    }
                }
            }
        }
        if (L === 1) {
            var V = N;
            N = -M;
            M = V
        } else {
            if (L === 2) {
                N = -N;
                M = -M
            } else {
                if (L == 3) {
                    var V = N;
                    N = M;
                    M = -V
                }
            }
        }
        return {
            _gmc: N,
            _gmd: M
        }
    };
    J.prototype._rv = function(O, P) {
        var M = this;
        if (O) {
            M = this._pla()
        }
        var N = {
            _pfe: M._pfe,
            _pff: M._pff,
            _pfh: M._pfh,
            _pfj: M._pfj,
            _pfl: M._pfl,
            _pfm: M._pfm,
            _pfn: M._pfn,
            _pfo: M._pfo,
            _nkl: M._nkl,
            _pfp: M._pfp,
            _cab: M._cab,
            _pfq: M._pfq,
            _pfr: M._pfr,
            _pfs: M._pfs,
            _pfu: M._pfu,
            _pfw: M._pfw,
            _pfy: M._pfy,
            _pga: M._pga,
            _pgc: M._pgc,
            _pge: M._pge,
            _cwn: M._cwn,
            _pgg: M._pgg,
            _pgh: M._pgh,
            _pgi: M._pgi,
            _pgj: M._pgj,
            _pgl: M._pgl,
            _pgn: M._pgn,
            _pgp: M._pgp,
            _pgr: M._pgr,
            _pgs: M._pgs,
            _pgt: M._pgt,
            _pgv: M._pgv,
            _pgw: M._pgw,
            _pgy: M._pgy,
            _pgz: M._pgz,
            _pha: M._pha,
            _phc: M._phc,
            _phe: M._phe,
            _phg: M._phg,
            _phi: M._phi,
            _phj: M._phj,
            _phm: M._phm,
            _gmc: M._gmc,
            _gmd: M._gmd,
            _llk: M._llk,
            _phn: M._phn,
            _llh: M._llh
        };
        if (P !== undefined) {
            P.push(M._pfj.buffer);
            P.push(M._pfl.buffer);
            P.push(M._pfm.buffer);
            if (M._pfn !== undefined) {
                P.push(M._pfn.buffer)
            }
            if (M._pfo !== undefined) {
                for (var L = 0; L < M._pfo.length; L++) {
                    if (M._pfo[L] !== undefined) {
                        P.push(M._pfo[L].buffer)
                    }
                }
            }
            if (M._nkl !== undefined) {
                P.push(M._nkl.buffer)
            }
            if (M._pfq !== undefined) {
                P.push(M._pfq.buffer)
            }
            if (M._pfr !== undefined) {
                P.push(M._pfr.buffer)
            }
            if (M._pfs !== undefined) {
                P.push(M._pfs.buffer)
            }
            if (M._pfu !== undefined) {
                P.push(M._pfu.buffer)
            }
            if (M._pfw !== undefined) {
                P.push(M._pfw.buffer)
            }
            if (M._pga !== undefined) {
                P.push(M._pga.buffer)
            }
            if (M._pgc !== undefined) {
                P.push(M._pgc.buffer)
            }
            if (M._pge !== undefined) {
                P.push(M._pge.buffer)
            }
            if (M._pgg !== undefined) {
                P.push(M._pgg.buffer)
            }
            if (M._pgh !== undefined) {
                P.push(M._pgh.buffer)
            }
            if (M._pgi !== undefined) {
                P.push(M._pgi.buffer)
            }
            if (M._pgs !== undefined) {
                P.push(M._pgs.buffer)
            }
            if (M._pgt !== undefined) {
                P.push(M._pgt.buffer)
            }
            if (M._pgv !== undefined) {
                P.push(M._pgv.buffer)
            }
            if (M._pgw !== undefined) {
                P.push(M._pgw.buffer)
            }
            if (M._pgy !== undefined) {
                P.push(M._pgy.buffer)
            }
            if (M._pgz !== undefined) {
                P.push(M._pgz.buffer)
            }
            if (M._pha !== undefined) {
                P.push(M._pha.buffer)
            }
            if (M._phc !== undefined) {
                P.push(M._phc.buffer)
            }
            if (M._phe !== undefined) {
                P.push(M._phe.buffer)
            }
            if (M._phg !== undefined) {
                P.push(M._phg.buffer)
            }
            if (M._phi !== undefined) {
                P.push(M._phi.buffer)
            }
            if (M._phj !== undefined) {
                P.push(M._phj.buffer)
            }
            if (M._pgp !== undefined) {
                P.push(M._pgp.buffer)
            }
        }
        return N
    };
    J.prototype._dsf = function(Q) {
        Q._lhh(this._pez);
        Q._lhh(this._pfe);
        Q._lhi(this._pff);
        Q._lhi(this._pfh);
        Q._lpe(this._pfj.buffer, 0, this._pff * 4);
        Q._lpe(this._pfl.buffer, 0, this._pff * 4);
        Q._lpe(this._pfm.buffer, 0, this._pff * 4);
        this._pkx(Q, this._pfn);
        if (this._pfo !== undefined) {
            var N = Q._loi();
            Q._loj(N + 2);
            var O = 0;
            for (var L = 0; L < this._pfo.length; L++) {
                if (this._pfo[L] !== undefined) {
                    Q._lhi(L);
                    Q._loz(this._pfo[L].buffer.byteLength);
                    Q.pArrayBufffer(this._pfo[L].buffer, 0, this._pfo[L].buffer.byteLength);
                    O++
                }
            }
            var M = Q._loi();
            Q._loj(N);
            Q._lhi(O);
            Q._loj(M)
        } else {
            Q._lhi(0)
        }
        this._pkx(Q, this._nkl);
        this._pkx(Q, this._pfp);
        Q._lhi(this._cab);
        this._pkx(Q, this._pfq);
        this._pkx(Q, this._pfr);
        this._pkx(Q, this._pfs);
        this._pkx(Q, this._pfu);
        this._pkx(Q, this._pfw);
        Q._lhi(this._pfy);
        this._pkx(Q, this._pga);
        this._pkx(Q, this._pgc);
        this._pkx(Q, this._pge);
        Q._lhi(this._cwn);
        this._pkx(Q, this._pgg);
        this._pkx(Q, this._pgh);
        this._pkx(Q, this._pgi);
        this._pkx(Q, this._pgj);
        this._pkx(Q, this._pgl);
        this._pkx(Q, this._pgn);
        this._pkx(Q, this._pgp);
        Q._lhi(this._pgr);
        this._pkx(Q, this._pgs);
        this._pkx(Q, this._pgt);
        this._pkx(Q, this._pgv);
        this._pkx(Q, this._pgw);
        this._pkx(Q, this._pgy);
        this._pkx(Q, this._pgz);
        this._pkx(Q, this._pha);
        this._pkx(Q, this._phc);
        this._pkx(Q, this._phe);
        this._pkx(Q, this._phg);
        this._pkx(Q, this._phi);
        this._pkx(Q, this._phj);
        Q._lhi(this._phm);
        this._pkx(Q, this._gmc);
        this._pkx(Q, this._gmd);
        if (this._llk !== undefined) {
            Q._lhi(this._llk.length);
            for (var L = 0; L < this._llk.length; L++) {
                var R = this._llk[L];
                Q._lhi(R._pho);
                Q._lhi(R._php);
                Q._lhi(R._cbl);
                Q._lhi(R._cbm);
                Q._lhi(R._cbn);
                Q._lhi(R._phq)
            }
        } else {
            Q._lhi(0)
        }
        if (this._phn !== undefined) {
            Q._lhi(this._phn.length);
            for (var L = 0; L < this._phn.length; L++) {
                var R = this._phn[L];
                Q._lhi(R._phs);
                Q._lhi(R._phu)
            }
        } else {
            Q._lhi(0)
        }
        if (this._llh !== undefined) {
            Q._lhi(this._llh.length);
            for (var L = 0; L < this._llh.length; L++) {
                var P = this._llh[L];
                Q._lhi(P._bie);
                Q._lhi(P._phv);
                Q._lhi(P._phx);
                Q._lhi(P._bim)
            }
        } else {
            Q._lhi(0)
        }
    };
    J.prototype._pkx = function(L, M) {
        if (M !== undefined) {
            L._lhh(1);
            L._loz(M.buffer.byteLength);
            L._lpe(M.buffer, 0, M.buffer.byteLength)
        } else {
            L._lhh(0)
        }
    };
    J.prototype._pkz = function(M, N) {
        var L = M._lpi() === 1;
        if (L) {
            var O = new N(new ArrayBuffer(M._lpp()));
            M._lpw(O.buffer, 0, O.buffer.byteLength);
            return O
        } else {
            return undefined
        }
    };
    J.prototype._pla = function() {
        var N;
        if (this._llk !== undefined) {
            N = new Array(this._llk.length);
            for (var M = 0; M < N.length; M++) {
                var P = this._llk[M];
                N[M] = {
                    _pho: P._pho,
                    _php: P._php,
                    _cbl: P._cbl,
                    _cbm: P._cbm,
                    _cbn: P._cbn,
                    _phq: P._phq
                }
            }
        }
        var R;
        if (this._phn !== undefined) {
            R = new Array(this._phn.length);
            for (var M = 0; M < R.length; M++) {
                var P = this._phn[M];
                R[M] = {
                    _phs: P._phs,
                    _phu: P._phu
                }
            }
        }
        var L;
        if (this._llh !== undefined) {
            L = new Array(this._llh.length);
            for (var M = 0; M < L.length; M++) {
                var O = this._llh[M];
                L[M] = {
                    _bie: O._bie,
                    _phv: O._phv,
                    _phx: O._phx,
                    _bim: O._bim
                }
            }
        }
        var Q;
        if (this._pfo !== undefined) {
            Q = [];
            for (var M = 0; M < this._pfo.length; M++) {
                if (this._pfo[M] !== undefined) {
                    Q[M] = new Int32Array(this._pfo[M].buffer.slice(0))
                }
            }
        }
        return new J(undefined, undefined, {
            _pfe: this._pfe,
            _pff: this._pff,
            _pfh: this._pfh,
            _pfj: new Int32Array(this._pfj.buffer.slice(0)),
            _pfl: new Int32Array(this._pfl.buffer.slice(0)),
            _pfm: new Int32Array(this._pfm.buffer.slice(0)),
            _pfn: this._pfn === undefined ? undefined : new Int32Array(this._pfn.buffer.slice(0)),
            _pfo: Q,
            _nkl: this._nkl === undefined ? undefined : new Int16Array(this._nkl.buffer.slice(0)),
            _pfp: this._pfp === undefined ? undefined : new Uint16Array(this._pfp.buffer.slice(0)),
            _cab: this._cab,
            _pfq: this._pfq === undefined ? undefined : new Int16Array(this._pfq.buffer.slice(0)),
            _pfr: this._pfr === undefined ? undefined : new Int16Array(this._pfr.buffer.slice(0)),
            _pfs: this._pfs === undefined ? undefined : new Int16Array(this._pfs.buffer.slice(0)),
            _pfu: this._pfu === undefined ? undefined : new Int8Array(this._pfu.buffer.slice(0)),
            _pfw: this._pfw === undefined ? undefined : new Int8Array(this._pfw.buffer.slice(0)),
            _pfy: this._pfy,
            _pga: this._pga === undefined ? undefined : new Uint16Array(this._pga.buffer.slice(0)),
            _pgc: this._pgc === undefined ? undefined : new Uint16Array(this._pgc.buffer.slice(0)),
            _pge: this._pge === undefined ? undefined : new Int8Array(this._pge.buffer.slice(0)),
            _cwn: this._cwn,
            _pgg: this._pgg === undefined ? undefined : new Uint16Array(this._pgg.buffer.slice(0)),
            _pgh: this._pgh === undefined ? undefined : new Int32Array(this._pgh.buffer.slice(0)),
            _pgi: this._pgi === undefined ? undefined : new Int16Array(this._pgi.buffer.slice(0)),
            _pgj: this._pgj === undefined ? undefined : new Uint8Array(this._pgj.buffer.slice(0)),
            _pgl: this._pgl === undefined ? undefined : new Uint8Array(this._pgl.buffer.slice(0)),
            _pgn: this._pgn === undefined ? undefined : new Uint8Array(this._pgn.buffer.slice(0)),
            _pgp: this._pgp === undefined ? undefined : new Float32Array(this._pgp.buffer.slice(0)),
            _pgr: this._pgr,
            _pgs: this._pgs === undefined ? undefined : new Int8Array(this._pgs.buffer.slice(0)),
            _pgt: this._pgt === undefined ? undefined : new Int16Array(this._pgt.buffer.slice(0)),
            _pgv: this._pgv === undefined ? undefined : new Int16Array(this._pgv.buffer.slice(0)),
            _pgw: this._pgw === undefined ? undefined : new Int16Array(this._pgw.buffer.slice(0)),
            _pgy: this._pgy === undefined ? undefined : new Int32Array(this._pgy.buffer.slice(0)),
            _pgz: this._pgz === undefined ? undefined : new Int32Array(this._pgz.buffer.slice(0)),
            _pha: this._pha === undefined ? undefined : new Int32Array(this._pha.buffer.slice(0)),
            _phc: this._phc === undefined ? undefined : new Int8Array(this._phc.buffer.slice(0)),
            _phe: this._phe === undefined ? undefined : new Int8Array(this._phe.buffer.slice(0)),
            _phg: this._phg === undefined ? undefined : new Int8Array(this._phg.buffer.slice(0)),
            _phi: this._phi === undefined ? undefined : new Int8Array(this._phi.buffer.slice(0)),
            _phj: this._phj === undefined ? undefined : new Int8Array(this._phj.buffer.slice(0)),
            _phm: this._phm,
            _gmc: this._gmc === undefined ? undefined : new Float32Array(this._gmc.buffer.slice(0)),
            _gmd: this._gmd === undefined ? undefined : new Float32Array(this._gmd.buffer.slice(0)),
            _llk: N,
            _phn: R,
            _llh: L
        })
    };
    J.prototype._gmk = function(N) {
        var O = 0;
        var S = {};
        var Q = new Array(0);
        if (this._pgg !== undefined) {
            for (var P = 0; P < this._cab; P++) {
                var L = this._pgg[P];
                if (L !== D) {
                    if (S[L] === undefined) {
                        Q[O++] = L;
                        S[L] = 1
                    }
                }
            }
        }
        if (this._llh !== undefined) {
            for (var R = 0; R < this._llh.length; R++) {
                var M = N._bhw(this._llh[R]._bie);
                var L = M._wr();
                if (L !== undefined) {
                    if (S[L] === undefined) {
                        Q[O++] = L;
                        S[L] = 1
                    }
                }
            }
        }
        return Q
    };
    J.prototype.translate = function(L) {
        if (L[0] === 0 && L[1] === 0 && L[2] === 0) {
            return
        }
        for (var M = 0; M < this._pff; M++) {
            this._pfj[M] += L[0];
            this._pfl[M] += L[1];
            this._pfm[M] += L[2]
        }
        v.call(this)
    };
    J.prototype.rotate = function(P) {
        if (P[2] != 0) {
            var N = fow.sin(P[2]);
            var L = fow.cos(P[2]);
            for (var O = 0; O < this._pff; O++) {
                var M = (this._pfj[O] * L - this._pfl[O] * N) >> fow._ssk;
                this._pfl[O] = (this._pfl[O] * L + this._pfj[O] * N) >> fow._ssk;
                this._pfj[O] = M
            }
        }
        if (P[0] != 0) {
            var N = fow.sin(P[0]);
            var L = fow.cos(P[0]);
            for (var O = 0; O < this._pff; O++) {
                var M = (this._pfl[O] * L + this._pfm[O] * N) >> fow._ssk;
                this._pfm[O] = (this._pfm[O] * L - this._pfl[O] * N) >> fow._ssk;
                this._pfl[O] = M
            }
        }
        if (P[1] != 0) {
            var N = fow.sin(P[1]);
            var L = fow.cos(P[1]);
            for (var O = 0; O < this._pff; O++) {
                var M = (this._pfm[O] * N + this._pfj[O] * L) >> fow._ssk;
                this._pfm[O] = (this._pfm[O] * L - this._pfj[O] * N) >> fow._ssk;
                this._pfj[O] = M
            }
        }
    };
    J.prototype._plb = function(N) {
        if (N === 0) {
            return
        }
        for (var M = 0; M < this._pff; M++) {
            this._pfj[M] <<= N;
            this._pfl[M] <<= N;
            this._pfm[M] <<= N
        }
        if (this._pgr > 0) {
            if (this._pgy !== undefined) {
                for (var L = 0; L < this._pgy.length; L++) {
                    this._pgy[L] <<= N;
                    this._pgz[L] <<= N;
                    if (this._pgs[L] !== 1) {
                        this._pha[L] <<= N
                    }
                }
            }
        }
        v.call(this)
    };
    J.prototype.scale = function(N, M, L) {
        if (N === 1 && M === 1 && L === 1) {
            return
        }
        for (var P = 0; P < this._pff; P++) {
            this._pfj[P] *= N;
            this._pfl[P] *= M;
            this._pfm[P] *= L
        }
        if (this._pgr > 0) {
            if (this._pgy !== undefined) {
                for (var O = 0; O < this._pgy.length; O++) {
                    this._pgy[O] *= N;
                    this._pgz[O] *= M;
                    if (this._pgs[O] !== 1) {
                        this._pha[O] *= L
                    }
                }
            }
        }
        v.call(this)
    };
    J.prototype._plc = function() {
        for (var O = 0; O < this._pff; O++) {
            this._pfm[O] = -this._pfm[O]
        }
        var L = this._pfr;
        this._pfr = this._pfs;
        this._pfs = L;
        if (this._pgp !== undefined) {
            for (var P = 0; P < this._cab; P++) {
                var N = this._pgp[P * 6 + 1];
                this._pgp[P * 6 + 1] = this._pgp[P * 6 + 2];
                this._pgp[P * 6 + 2] = N;
                var M = this._pgp[P * 6 + 4];
                this._pgp[P * 6 + 4] = this._pgp[P * 6 + 5];
                this._pgp[P * 6 + 5] = M
            }
        }
        v.call(this)
    };
    J.prototype._ple = function(Q, L) {
        var O = false;
        for (var N = 0; N < this._cab; N++) {
            var M = this._pgc[N];
            for (var P = 0; P < Q.length; P++) {
                if (M === Q[P]) {
                    this._pgc[N] = L[P];
                    O = true;
                    break
                }
            }
        }
        if (O) {
            v.call(this)
        }
    };
    J.prototype._plg = function(P, O) {
        var N = false;
        for (var M = 0; M < this._cab; M++) {
            var L = this._pgc[M];
            if (L === P) {
                this._pgc[M] = O;
                N = true
            }
        }
        if (N) {
            v.call(this)
        }
    };
    J.prototype._pli = function(O, M) {
        if (this._pgg === undefined) {
            return
        }
        var R = false;
        for (var Q = 0; Q < this._cab; Q++) {
            var P = this._pgg[Q];
            for (var L = 0; L < O.length; L++) {
                if (P === O[L]) {
                    var N = M[L];
                    if (N === undefined) {
                        N = D
                    }
                    this._pgg[Q] = N;
                    R = true;
                    break
                }
            }
        }
        if (R) {
            v.call(this)
        }
    };
    J.prototype._plk = function(O) {
        for (var N = 0; N < this._cab; N++) {
            var M = this._pgc[N];
            var L = ((M & 127) * O) >> 7;
            if (L < 0) {
                L = 0
            } else {
                if (L > 127) {
                    L = 127
                }
            }
            this._pgc[N] = (M & ~127) | L
        }
        this._cwn = O;
        v.call(this)
    };
    J.prototype._pln = function() {
        if (this._pfn === undefined || this._pfo !== undefined) {
            return
        }
        var O = new Array(400);
        var L = 0;
        var N = this._pfh;
        for (var P = 0; P < N; P++) {
            var M = this._pfn[P];
            if (M !== A) {
                if (O[M] === undefined) {
                    O[M] = 0
                }
                O[M]++;
                if (M > L) {
                    L = M
                }
            }
        }
        this._pfo = new Array(L + 1);
        for (P = 0; P <= L; P++) {
            if (O[P] !== undefined) {
                this._pfo[P] = new Int32Array(O[P]);
                O[P] = 0
            }
        }
        for (P = 0; P < N; P++) {
            var M = this._pfn[P];
            if (M !== A) {
                this._pfo[M][O[M]++] = P
            }
        }
    };
    J.prototype._glq = function(L) {
        return undefined
    };
    return function(M, N, L, O) {
        return new J(M, N, L, O)
    }
}();
var erc = function() {
    var d = {};
    var c = fqr.create();
    var b = fqv.create();
    var a = new Float32Array([0, 1, 0]);
    var e = function(g) {
        this._rhr;
        this._rjf;
        this._czf = fpq._ij;
        this._cwf(g)
    };
    e.prototype._cwf = function(j) {
        this._czf = j._lpi();
        var p = j._lpl();
        this._rhr = new Array(p);
        for (var n = 0; n < p; n++) {
            var r = this._rhr[n] = {};
            r._bfl = j._lpp();
            r.level = j._lpi();
            r._dau = j._lpi();
            r._rhs = j._lpi();
            r._rhu = j._lpi();
            r._rhw = j._lpm();
            r._rhy = j._lpm();
            r._ria = j._lpm();
            r._rib = j._lpm();
            r._dbe = j._lpl();
            r._dbg = j._lpl();
            r._ric = j.g3();
            r._rie = j.g3();
            r._nfy = j._lpl();
            r._nga = j._lpl();
            r._dbi = j._lpl();
            r._cvs = j._lpi();
            r._cvu = j._lpi();
            r._cvx = j._lpi() === 1;
            r._dbh = !r._cvx;
            r._cvr = j._lpj();
            if (r._cvr === -1) {
                r._cvr = undefined
            }
            r._dbc = j._lpi() === 1;
            r._rig = j._lpi() === 1;
            r._xe = j._lpi() === 1;
            r._cvv = j._lpi() === 1;
            r._rii = j._lpi() === 1;
            r._hoe = j._lpi();
            r._ngb = j._lpi();
            r._ngd = j._lpm();
            r._hph = j._lpi() === 1;
            if (j._lpi() === 1) {
                r._nfw = {};
                r._nfw._rik = new Array(j._lpi());
                var o = j._lpi();
                for (var q = 0; q < r._nfw._rik.length; q++) {
                    r._nfw._rik[q] = new Int32Array(o);
                    for (var g = 0; g < o; g++) {
                        r._nfw._rik[q][g] = j._lpm()
                    }
                }
            }
            if (j._lpi() === 1) {
                if (r._nfw === undefined) {
                    r._nfw = {}
                }
                r._nfw._ril = new Array(j._lpi());
                var o = j._lpi();
                for (var q = 0; q < r._nfw._ril.length; q++) {
                    r._nfw._ril[q] = new Int32Array(o);
                    for (var g = 0; g < o; g++) {
                        r._nfw._ril[q][g] = j._lpm()
                    }
                }
            }
            r._cvp = j._lpl();
            r._cvz = j._lpi() === 1;
            var m = j._lpi();
            if (m > 0) {
                r._rin = new Array(m);
                for (var i = 0; i < m; i++) {
                    r._rin[i] = j._lpl()
                }
            }
            r._czw = j._lpl();
            r._czy = j._lpl();
            r._rip = j._lpl();
            r._riq = j._lpi();
            r._daa = j._lpl();
            r._dac = j._lpl();
            r._dad = j._lpl();
            r._rir = j._lpi();
            r._ris = j._lpl();
            r._riu = j._lpl();
            r._riw = j._lpt();
            var l = j._lpi();
            if (l > 0) {
                r._dan = new Int32Array(l);
                for (var h = 0; h < l; h++) {
                    r._dan[h] = j._lpl()
                }
                r._dao = j.g3();
                r._daq = j.g3();
                r._rix = j._lpi();
                r._riy = j._lpi();
                r._rja = j._lpl();
                r._rjc = j._lpl();
                r._rje = j._lpt()
            }
        }
        var k = j._lpl();
        this._rjf = new Array(k);
        for (var n = 0; n < k; n++) {
            var s = j._lpp();
            this._rjf[s] = eog(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, j)
        }
        if (false) {} else {
            this.name = ""
        }
    };
    e.prototype._cwq = function(h, i, g) {};
    e.prototype._cws = function(g, h) {};
    e.prototype._qf = function(h, g) {
        return true
    };
    e.prototype._rjh = function(g) {
        return g._cvs | ((g._cvv ? 1 : 0) << 8) | (g._bfl << 9)
    };
    e.prototype._cwu = function(t) {
        var j = new Array(0);
        var r = new Array(0);
        for (var D = 0; D < this._rhr.length; D++) {
            var g = this._rhr[D];
            var v = this._rjh(g);
            var y = this._rjf[v];
            if (y === undefined) {
                throw new Error("2870 ")
            }
            var i = y._llx()._hcz();
            var h = y._llx()._hdb();
            var A = 0;
            var m = false;
            var o = y._lme();
            for (var u = 0; u < o.length; u++) {
                if (o[u]._sqn) {
                    m = true
                }
                A += o[u]._cab
            }
            g._rjj = true;
            if (g._rig) {
                r.push(g);
                g._rjj = false
            }
            var n = false;
            for (var x = 0; x < j.length; x++) {
                var p = j[x];
                if (i !== -1 && p._hcj !== -1 && i !== p._hcj) {
                    continue
                }
                if (h !== -1 && p._hcl !== -1 && h !== p._hcl) {
                    continue
                }
                if (g._xe !== p._xe) {
                    continue
                }
                if (g._dbh !== p._dbh) {
                    continue
                }
                if (g._rin !== undefined) {
                    var z = new Array(0);
                    _rjk: for (var q = 0; q < g._rin.length; q++) {
                        if (p._rin !== undefined) {
                            for (var l = 0; l < p._rin.length; l++) {
                                if (p._rin[l] === g._rin[q]) {
                                    continue _rjk
                                }
                            }
                        }
                        z.push(g._rin[q])
                    }
                    if (z.length > 0) {
                        if (p._rin !== undefined && z.length > (fty._nvy - p._rin.length)) {
                            continue
                        }
                        for (var s = 0; s < z.length; s++) {
                            if (p._rin === undefined) {
                                p._rin = new Array(1);
                                p._rin[0] = z[s]
                            } else {
                                p._rin.push(z[s])
                            }
                        }
                    }
                }
                if ((A + p._cab) * 3 > 65535) {
                    continue
                }
                p._cab += A;
                if (p._hcj === -1) {
                    p._hcj = i
                }
                if (p._hcl === -1) {
                    p._hcl = h
                }
                p._cvg.push(g);
                this._rjn(g, p._pmi, p._pmj);
                n = true;
                break
            }
            if (!n) {
                var C = new Array(0);
                var B = new Array(0);
                this._rjn(g, C, B);
                var k = {
                    level: g.level,
                    _dau: g._dau,
                    _cvr: g._cvr,
                    _hcj: i,
                    _hcl: h,
                    _pmf: y._lmr(),
                    _pmg: y._lmq(),
                    _xe: g._xe,
                    _dbh: g._dbh,
                    _rin: g._rin,
                    _cab: A,
                    _cvg: [g],
                    _pmi: C,
                    _pmj: B,
                    _rjl: g._dbc ? 1 : 0,
                    _rjm: g._rjj ? 0 : 1
                };
                j.push(k)
            }
        }
        this._rjp(j, t);
        this._rju(r, t)
    };
    e.prototype._rjn = function(g, k, j) {
        if (g._rip >= 0) {
            var l = fqv.create();
            l[0] = g._ric;
            l[1] = g._rhy;
            l[2] = g._rie;
            var i = {
                _czt: g._rip,
                _czu: l,
                _czw: g._czw,
                _czy: g._czy,
                _daa: g._daa,
                _dac: g._dac,
                _dad: g._dad,
                _daf: g._riq,
                _dah: g._rir,
                _dai: g._ris,
                _dak: g._riu,
                _dam: g._riw
            };
            k.push(i)
        }
        if (g._dan !== undefined && g._dan.length > 0) {
            var l = fqv.create();
            l[0] = g._ric;
            l[1] = g._rhy;
            l[2] = g._rie;
            var h = {
                _dan: g._dan,
                _dao: g._dao,
                _daq: g._daq,
                _czu: l,
                _czw: g._czw,
                _czy: g._czy,
                _daa: g._daa,
                _dac: g._dac,
                _dad: g._dad,
                _daf: g._riq,
                _dah: g._riy,
                _dai: g._rja,
                _dak: g._rjc,
                _dam: g._rje
            };
            j.push(h)
        }
    };
    e.prototype._rjp = function(j, u) {
        var D = u._loi();
        u._loj(D + 2);
        var k = 0;
        for (var x = 0; x < j.length; x++) {
            var s = j[x];
            var A = new Array(s._cvg.length);
            var p = new Array(s._cvg.length);
            var o = 0;
            for (var C = 0; C < s._cvg.length; C++) {
                var g = s._cvg[C];
                if (g._rii) {
                    A.length--;
                    p.length--;
                    o++;
                    continue
                }
                var z = this._rjf[this._rjh(g)];
                var h = g.level + 1;
                var i = h | (g._rhs << 3) | (g._rhu << 9) | (g._cvu << 15) | (g._cvs << 17) | ((g.inRemoveRoofArea ? 1 : 0) << 22) | ((g._rjj ? 1 : 0) << 23);
                var B = eog(undefined, undefined, undefined, undefined, z, undefined, undefined, i);
                ftb._qxv(g._cvs, g._cvu, g._cvp, g._cvz, d);
                if (d._qxx !== g._cvu * Math.PI / 2) {
                    B.rotate(fqr._gmx(a, d._qxx, c), true)
                } else {
                    if (g._cvu !== 0) {
                        B._dsg(g._cvu, true)
                    }
                }
                if (g._hph === false && g._ngb !== fpe._qgj && g._nfw !== undefined) {
                    this._rjv(g, B, 0)
                }
                b[0] = g._rhw + d._qxz;
                b[1] = g._rhy + g._ria;
                b[2] = g._rib + d._qyb;
                B.translate(b);
                A[C - o] = B;
                p[C - o] = {
                    _das: i,
                    level: g.level,
                    _dau: g._dau,
                    _cvr: g._cvr,
                    _dbi: g._dbi,
                    _dbe: g._dbe,
                    _dbg: g._dbg,
                    _daw: B._euq()._rv(),
                    _dba: fqv.create(b),
                    _rjr: g._nfy / fht._cfg,
                    _rjs: g._nga / fht._cfg
                };
                if (g._dbc) {
                    p[C - o]._dbc = true;
                    p[C - o]._bfl = g._bfl;
                    p[C - o]._cvs = g._cvs;
                    p[C - o]._cvu = g._cvu;
                    p[C - o]._dbh = g._dbh
                }
                if (!g._rjj) {
                    p[C - o]._dbk = true
                }
            }
            if (A.length === 0) {
                continue
            }
            var n = eog(undefined, undefined, undefined, undefined, undefined, A);
            u._lhh(n._lmr() ? 1 : 0);
            u._lhh(n._lmq() ? 1 : 0);
            u._lhh(s._xe ? 1 : 0);
            u._lhh(s._dbh ? 1 : 0);
            if (s._rin !== undefined) {
                u._lhi(s._rin.length);
                for (var l = 0; l < s._rin.length; l++) {
                    u._lhi(s._rin[l])
                }
            } else {
                u._lhi(0)
            }
            u._lhi(s._pmi.length);
            for (var t = 0; t < s._pmi.length; t++) {
                var m = s._pmi[t];
                u._lhi(m._czt);
                u._lox(m._czu[0]);
                u._lox(m._czu[1]);
                u._lox(m._czu[2]);
                u._lhi(m._czw);
                u._lhi(m._czy);
                u._lhi(m._daa);
                u._lhi(m._dac);
                u._lhi(m._dad);
                u._lhh(m._daf);
                u._lhh(m._dah);
                u._lhi(m._dai);
                u._lhi(m._dak);
                u._lpb(m._dam)
            }
            u._lhi(s._pmj.length);
            for (var t = 0; t < s._pmj.length; t++) {
                var m = s._pmj[t];
                u._lhh(m._dan.length);
                for (var r = 0; r < m._dan.length; r++) {
                    u._lhi(m._dan[r])
                }
                u._lox(m._dao);
                u._lox(m._daq);
                u._lox(m._czu[0]);
                u._lox(m._czu[1]);
                u._lox(m._czu[2]);
                u._lhi(m._czw);
                u._lhi(m._czy);
                u._lhi(m._daa);
                u._lhi(m._dac);
                u._lhi(m._dad);
                u._lhh(m._daf);
                u._lhh(m._dah);
                u._lhi(m._dai);
                u._lhi(m._dak);
                u._lpb(m._dam)
            }
            u._lhi(p.length);
            for (var v = 0; v < p.length; v++) {
                var q = p[v];
                u._loz(q._das);
                u._lhh(q.level);
                u._lhh(q._dau);
                u._lhh(q._cvr === undefined ? -1 : q._cvr);
                u._lhi(q._dbi);
                u._lhi(q._dbe);
                u._lhi(q._dbg);
                q._daw._dsf(u);
                u._lhi(q._dba[0]);
                u._lhi(q._dba[1]);
                u._lhi(q._dba[2]);
                u._lhh(q._rjr);
                u._lhh(q._rjs);
                if (q._dbc) {
                    u._lhh(1);
                    u._loz(q._bfl);
                    u._lhh(q._cvs);
                    u._lhh(q._cvu);
                    u._lhh(q._dbh ? 1 : 0)
                } else {
                    u._lhh(0)
                }
                if (q._dbk) {
                    u._lhh(1)
                } else {
                    u._lhh(0)
                }
            }
            n._dsf(u);
            k++;
            for (var C = 0; C < A.length; C++) {
                A[C]._kb()
            }
            n._kb()
        }
        var y = u._loi();
        u._loj(D);
        u._lhi(k);
        u._loj(y)
    };
    e.prototype._rju = function(k, l) {
        l._lhi(k.length);
        for (var h = 0; h < k.length; h++) {
            var j = k[h];
            var g = this._rjf[this._rjh(j)];
            g = eog(undefined, undefined, undefined, undefined, g);
            if (j._hph === false && j._ngb !== fpe._qgj && j._nfw !== undefined) {
                this._rjv(j, g, j._cvu)
            }
            l._lhh(j.level);
            l._lhh(j._cvr === undefined ? -1 : j._cvr);
            l._loz(j._bfl);
            l._lhh(j._dbh ? 1 : 0);
            l._lhh(j._cvs);
            l._lhh(j._cvu);
            l._lhh(j._cvv ? 1 : 0);
            l._lhi(j._cvp);
            l._lhh(j._cvz ? 1 : 0);
            l._lhi(j._dbe);
            l._lhi(j._dbg);
            l._lhh(j._hoe);
            if (j._rin !== undefined) {
                l._lhh(j._rin.length);
                for (var i = 0; i < j._rin.length; i++) {
                    l._lhi(j._rin[i])
                }
            } else {
                l._lhh(0)
            }
            g._dsf(l);
            g._kb()
        }
    };
    e.prototype._rjv = function(n, p, k) {
        var m = function(A, z) {
            var y = n._nfy;
            var r = n._nga;
            if (k === 1) {
                var C = A;
                A = z;
                z = -C
            } else {
                if (k === 2) {
                    A = -A;
                    z = -z
                } else {
                    if (k === 3) {
                        var C = A;
                        A = -z;
                        z = C
                    }
                }
            }
            A += y / 2;
            if (A < 0) {
                A = 0
            } else {
                if (A > y) {
                    A = y
                }
            }
            z += r / 2;
            if (z < 0) {
                z = 0
            } else {
                if (z > r) {
                    z = r
                }
            }
            var D = 512;
            var q = Math.floor(A / D);
            var B = Math.floor(z / D);
            var u = A & (D - 1);
            var s = z & (D - 1);
            if (u === 0 && s === 0) {
                return n._nfw._rik[q][B] - n._rhy
            }
            var x, v;
            if (u === 0) {
                x = n._nfw._rik[q][B];
                v = n._nfw._rik[q][B + 1];
                return (x * (D - s) + v * s) / D - n._rhy
            } else {
                if (s === 0) {
                    return (n._nfw._rik[q][B] * (D - u) + n._nfw._rik[q + 1][B] * u) / D - n._rhy
                } else {
                    x = (n._nfw._rik[q][B] * (D - u) + n._nfw._rik[q + 1][B] * u) / D;
                    v = (n._nfw._rik[q][B + 1] * (D - u) + n._nfw._rik[q + 1][B + 1] * u) / D;
                    return (x * (D - s) + v * s) / D - n._rhy
                }
            }
        };
        var i = function(A, z) {
            if (n._nfw._ril === undefined) {
                return undefined
            }
            var y = n._nfy;
            var r = n._nga;
            if (k === 1) {
                var C = A;
                A = z;
                z = -C
            } else {
                if (k === 2) {
                    A = -A;
                    z = -z
                } else {
                    if (k === 3) {
                        var C = A;
                        A = -z;
                        z = C
                    }
                }
            }
            A += y / 2;
            if (A < 0) {
                A = 0
            } else {
                if (A > y) {
                    A = y
                }
            }
            z += r / 2;
            if (z < 0) {
                z = 0
            } else {
                if (z > r) {
                    z = r
                }
            }
            var D = 512;
            var q = Math.floor(A / D);
            var B = Math.floor(z / D);
            var u = A & (D - 1);
            var s = z & (D - 1);
            if (u === 0 && s === 0) {
                return n._nfw._ril[q][B] - n._rhy
            }
            var x, v;
            if (u === 0) {
                x = n._nfw._ril[q][B];
                v = n._nfw._ril[q][B + 1];
                return (x * (D - s) + v * s) / D - n._rhy
            } else {
                if (s === 0) {
                    return (n._nfw._ril[q][B] * (D - u) + n._nfw._ril[q + 1][B] * u) / D - n._rhy
                } else {
                    x = (n._nfw._ril[q][B] * (D - u) + n._nfw._ril[q + 1][B] * u) / D;
                    v = (n._nfw._ril[q][B + 1] * (D - u) + n._nfw._ril[q + 1][B + 1] * u) / D;
                    return (x * (D - s) + v * s) / D - n._rhy
                }
            }
        };
        if (n._ngb === fpe._dgc) {
            var j = (n._ngd & 255) * 4;
            var g = ((n._ngd >> 8) & 255) * 4;
            var o = ((n._ngd >> 16) & 255) << 2;
            var l = ((n._ngd >> 24) & 255) << 2;
            var h = p._lmm(j, g, o, l, m);
            if (h !== undefined) {
                p.transform(h)
            }
        } else {
            p._hwp(n._ngb, n._ngd, m, i)
        }
    };
    e.prototype.tidyup = function() {
        for (var h in this._rjf) {
            var g = this._rjf[h];
            if (g !== undefined) {
                g._kb()
            }
        }
    };
    return function(g) {
        return new e(g)
    }
}();
var ezy = function() {
    var a = 1;
    var b = new Float32Array(3);
    return function(Z) {
        var aG = {};
        var aD = fpe._qgt;
        var ay = 0;
        aG._glj = function() {
            return ay
        };
        var ao = undefined;
        aG._gll = function(aL) {
            return ao[aL][0]
        };
        aG._gln = function(aL) {
            return ao[aL][1]
        };
        aG._glp = function(aL) {
            return ao[aL][2]
        };
        var I = undefined;
        aG._glq = function(aL) {
            if (I === undefined) {
                return 0
            } else {
                return I[aL]
            }
        };
        aG._gls = function(aL) {
            if (I === undefined) {
                return false
            }
            if ((I[aK[aL][0]] & 255) !== 255) {
                return true
            }
            if ((I[aK[aL][1]] & 255) !== 255) {
                return true
            }
            if ((I[aK[aL][2]] & 255) !== 255) {
                return true
            }
            return false
        };
        var l = undefined;
        var u = undefined;
        aG._bhz = function(aL) {
            if (u === undefined) {
                return undefined
            } else {
                return u[aL]
            }
        };
        aG._glu = function(aL, aM) {
            if (u === undefined) {
                return undefined
            } else {
                aM[0] = u[aK[aL][0]];
                aM[1] = u[aK[aL][1]];
                aM[2] = u[aK[aL][2]];
                return aM
            }
        };
        var s = 0;
        aG._glw = function() {
            return s
        };
        var aK = undefined;
        aG._glx = function(aL, aM) {
            return aK[aL][aM]
        };
        aG._glz = function(aM) {
            var aL = aK[aM][0];
            var aS = aK[aM][1];
            var aR = aK[aM][2];
            var aN = ao[aL][0];
            var aO = ao[aL][1];
            var aQ = ao[aL][2];
            b[0] = aN - ao[aS][0];
            b[1] = aO - ao[aS][1];
            b[2] = aQ - ao[aS][2];
            b[0] = aN - ao[aR][0];
            b[1] = aO - ao[aR][1];
            b[2] = aQ - ao[aR][2];
            var aP = b;
            fqv._eip(aP, b);
            fqv.normalize(aP);
            return aP
        };
        var ai = undefined;
        aG._gmb = function(aL) {
            if (ai === undefined) {
                return undefined
            } else {
                return {
                    _gmc: [l[aK[aL][0]][ai[aL][0]][0], l[aK[aL][1]][ai[aL][1]][0], l[aK[aL][2]][ai[aL][2]][0]],
                    _gmd: [l[aK[aL][0]][ai[aL][0]][1], l[aK[aL][1]][ai[aL][1]][1], l[aK[aL][2]][ai[aL][2]][1]]
                }
            }
        };
        var al = undefined;
        aG._gmf = function() {
            return al !== undefined
        };
        aG._gmg = function(aL) {
            if (al !== undefined) {
                return al[aL]
            } else {
                return undefined
            }
        };
        if (Z.data !== undefined) {
            var z = Z.data;
            var ad = emz(undefined, z.getData());
            var aB = emz(undefined, z.getData());
            var aA = emz(undefined, z.getData());
            var az = emz(undefined, z.getData());
            var ax = emz(undefined, z.getData());
            var aF = emz(undefined, z.getData());
            var p = emz(undefined, z.getData());
            var W = emz(undefined, z.getData());
            var aK = emz(undefined, z.getData());
            var an = emz(undefined, z.getData());
            var at = emz(undefined, z.getData());
            ao = new Array(0);
            I = new Array(0);
            l = new Array(0);
            u = new Array(0);
            aK = new Array(0);
            ai = new Array(0);
            al = new Array(0);
            var aD = ad._lpi();
            if (aD !== fpe._qgt) {
                throw new Error("2520 " + aD)
            }
            var D = ad._lpi();
            if (D > a) {
                throw new Error("2521 " + D)
            }
            var J = ad.g3();
            var aE = ad.g3();
            var r = ad.g3();
            var B = ad.g3();
            var av = ad.g3();
            var x = ad.g3();
            var F = ad.g3();
            var A = ad.g3();
            var G = ad.g3();
            var ag = ad.g3();
            var X = ad._lpi();
            for (var Y = 0; Y < X; Y++) {
                var ae = ad._lpl();
                var g = ad._lpl();
                var o = ad._lpm();
                aB._loj(J + ad._ozy());
                aA._loj(aE + ad._ozy());
                az._loj(r + ad._ozy());
                ax._loj(B + ad._ozy());
                aF._loj(av + ad._ozy());
                W._loj(x + ad._ozy());
                p._loj(F + ad._ozy());
                aK._loj(A + ad._ozy());
                an._loj(G + ad._ozy());
                at._loj(ag + ad._ozy());
                var af = new Float32Array(3);
                var i = 0;
                var aJ = new Array(ae);
                var ah = new Array(ae);
                var ar = new Array(ae);
                var t = new Array(ae);
                for (var aq = 0; aq < ae; aq++) {
                    var m = aB._lpi();
                    var e = 0;
                    if ((m & 1) === 1) {
                        e = aA._ozt()
                    }
                    var c = 0;
                    if ((m & 2) === 2) {
                        c = az._ozt()
                    }
                    var aI = 0;
                    if ((m & 4) === 4) {
                        aI = ax._ozt()
                    }
                    var q = 0;
                    if ((m & 8) === 8) {
                        q = aF._lpr()
                    }
                    af[0] += e;
                    af[1] += c;
                    af[2] += aI;
                    i += q;
                    aJ[aq] = new Float32Array([af[0], af[1], af[2]]);
                    ah[aq] = i;
                    var am = p._lpi();
                    ar[aq] = new Array(am);
                    for (var H = 0; H < am; H++) {
                        var k = 1 - (W._lpm() / (32767 / 8));
                        var j = 1 - (W._lpm() / (32767 / 8));
                        ar[aq][H] = new Float32Array([k, j])
                    }
                    t[aq] = -1
                }
                ao = ao.concat(aJ);
                I = I.concat(ah);
                l = l.concat(ar);
                u = u.concat(t);
                var ak = new Array(g);
                var n = new Array(g);
                var E = new Array(g);
                var O = 0,
                    M = 0,
                    L = 0;
                var S = 0,
                    P = 0,
                    N = 0;
                var d = 0;
                for (var h = 0; h < g; h++) {
                    var R = an._lpi();
                    if (R === 1) {
                        O = aK._ozt() + d;
                        d = O;
                        S = at._lpi();
                        M = aK._ozt() + d;
                        d = M;
                        P = at._lpi();
                        L = aK._ozt() + d;
                        d = L;
                        N = at._lpi()
                    } else {
                        if (R === 2) {
                            M = L;
                            L = aK._ozt() + d;
                            d = L;
                            P = N;
                            N = at._lpi()
                        } else {
                            if (R === 3) {
                                O = L;
                                L = aK._ozt() + d;
                                d = L;
                                S = N;
                                N = at._lpi()
                            } else {
                                if (R === 4) {
                                    var ac = O;
                                    O = M;
                                    M = ac;
                                    L = aK._ozt() + d;
                                    d = L;
                                    ac = S;
                                    S = P;
                                    P = ac;
                                    N = at._lpi()
                                }
                            }
                        }
                    }
                    ak[h] = [O + ay, M + ay, L + ay];
                    E[h] = o;
                    n[h] = [S, P, N];
                    for (var au = 0; au < 3; au++) {
                        var ab = ak[h][au];
                        var V = n[h][au];
                        var H = l[ab][V]
                    }
                }
                aK = aK.concat(ak);
                al = al.concat(E);
                ai = ai.concat(n);
                ay += ae;
                s += g
            }
        } else {
            if (Z._hqh !== undefined) {} else {
                if (Z._bco !== undefined) {
                    for (var aC = 0; aC < Z._bco.length; aC++) {
                        var aa = Z._bco[aC];
                        ay += aa._glj();
                        s += aa._glw()
                    }
                    ao = new Array(ay);
                    I = new Array(ay);
                    l = new Array(ay);
                    u = new Array(ay);
                    aK = new Array(s);
                    ai = new Array(s);
                    al = new Array(s);
                    var ap = 0;
                    var aw = 0;
                    for (var aC = 0; aC < Z._bco.length; aC++) {
                        var aa = Z._bco[aC];
                        for (var h = 0; h < aa._glw(); h++) {
                            definition.faceVertices[aw] = [aa.faceVertices[h][0] + ap, aa.faceVertices[h][1] + ap, aa.faceVertices[h][2] + ap];
                            definition._pgg[aw] = aa._pgg[h];
                            definition._pgp[aw] = [aa._pgp[h][0], aa._pgp[h][1], aa._pgp[h][2]];
                            aw++
                        }
                        for (var aq = 0; aq < aa._pff; aq++) {
                            definition.vertexPositions[ap] = new Float32Array([aa.vertexPositions[aq][0], aa.vertexPositions[aq][1], aa.vertexPositions[aq][2]]);
                            definition.vertexRGBAs[ap] = aa.vertexRGBAs[aq];
                            definition.vertexUVs[ap] = new Array(aa.vertexUVs.length);
                            for (var H = 0; H < aa.vertexUVs[aq].length; H++) {
                                definition.vertexUVs[ap][H] = new Float32Array([aa.vertexUVs[aq][H][0], aa.vertexUVs[aq][H][1]])
                            }
                            definition.vertexBoneIDs[ap] = aa.vertexBoneIDs[aq];
                            ap++
                        }
                    }
                } else {
                    if (Z._cpb !== undefined) {
                        var v = Z._cpb._coq();
                        var U = Z._cpb._cor();
                        var C = Z._cpb._cot();
                        var T = Z._cpb._wq();
                        var y = Z._cpb._cov();
                        var aj = new Float32Array([0, 0]);
                        var Q = [0, 0, 0];
                        ay = v.length;
                        ao = v;
                        u = U;
                        I = new Array(ay);
                        l = new Array(ay);
                        for (var j = 0; j < ay; j++) {
                            if (y !== undefined) {
                                I[j] = y[j]
                            } else {
                                I[j] = T
                            }
                            l[j] = aj
                        }
                        s = C.length;
                        aK = C;
                        ai = new Array(s);
                        al = new Array(s);
                        for (var K = 0; K < s; K++) {
                            ai[K] = Q;
                            al[K] = -1
                        }
                    } else {
                        throw new Error("2522 ")
                    }
                }
            }
        }
        var aH = function(aM) {
            var aN = 0;
            var aQ = {};
            var aP = new Array(0);
            if (al !== undefined) {
                for (var aO = 0; aO < s; aO++) {
                    var aL = al[aO];
                    if (aL !== -1) {
                        if (aQ[aL] === undefined) {
                            aP[aN++] = aL;
                            aQ[aL] = 1
                        }
                    }
                }
            }
            return aP
        };
        aG._gmk = aH;
        aG._gmm = function() {
            return fpe._qgt
        };
        aG._gmo = function(aL) {
            return undefined
        };
        aG._gmp = function(aL) {
            return false
        };
        aG._gmq = function(aL) {
            return false
        };
        aG._gms = function(aL) {
            return 0
        };
        aG._gmu = function() {
            return false
        };
        aG._bib = function(aL) {
            return undefined
        };
        aG._gmv = function() {
            return 0
        };
        aG._dmh = function() {
            return 0
        };
        Z = undefined;
        return aG
    }
}();
var etk = {
    LOG: 1,
    _rym: 2,
    _dgt: 3,
    _dgv: 4,
    COMPLETE: 5,
    _dgw: 6,
    _dgy: 7,
    _dha: 8,
    _dhc: 9,
    _dhe: 10,
    ERROR: 11,
    _dhf: 12,
    _dhg: 13,
    _dhh: 14,
    _vi: 100,
    _dhi: 102,
    _dhj: 103,
    _vg: 104,
    _ve: 105,
    _vn: 106,
    _vo: 107,
    _vk: 108,
    _dhk: 109
};
var fso = function() {
    var j = emz(10 * 1024);
    var a = 1 * 1024 * 1024;
    var c = 4;
    var e = 2;
    var g = new Array(10);
    var h = 0;
    var d = 0;
    var k = function() {
        if (h === 0) {
            if (false) {}
            d++;
            return emz(a)
        } else {
            return g[--h]
        }
    };
    var l = function(m) {
        g[h++] = m
    };
    var b = function(m) {
        this._lnh = m;
        this._lnj = new Array(10);
        this._lnl = 0;
        this._lnn = 0;
        this._lor();
        this._lot();
        this._lnq = false;
        this._lns = 0;
        this._lnt = 0;
        this._lnv = undefined;
        this._lnw = undefined;
        this._lnx = new Array(10);
        this._lnz = 0
    };
    b.prototype._qf = function() {
        if (h > d + e) {
            var m = k();
            m._loj(0);
            m._loz(-1);
            this._lnh(m.getData())
        }
    };
    b.prototype._eze = function() {
        if (this._lou._loi() === c) {
            return
        }
        if (this._lnn === this._lnl - 1) {
            var m = this._lou._loi() - c;
            this._lou._loj(0);
            this._lou._loz(m);
            this._lou._loj(c + m);
            if (this._lnq) {
                this._lor();
                this._lnn++;
                this._lot()
            } else {
                this._loa()
            }
        } else {
            this._lnn++;
            this._lot()
        }
    };
    b.prototype._loa = function() {
        this._lnh(this._lou.getData());
        for (var m = 1; m < this._lnl; m++) {
            this._lnj[m - 1] = this._lnj[m]
        }
        this._lnl--;
        this._lor();
        this._lot()
    };
    b.prototype._lob = function(n) {
        var m = emz(undefined, n);
        var o = m._lpr();
        if (o === -1) {
            l(m);
            return
        }
        this._lnx[this._lnz++] = m;
        this._lnt += o;
        if (this._lnw === undefined) {
            this._lnw = m;
            this._lnv = this._lnt
        }
    };
    b.prototype._lof = function(m) {
        if (m <= this._lnt) {
            return true
        } else {
            return false
        }
    };
    b.prototype._loh = function() {
        this._lnq = true
    };
    b.prototype._loi = function() {
        return this._lns
    };
    b.prototype._loj = function(m) {
        this._lom(m - this._lns)
    };
    b.prototype._lok = function() {
        return this._lns
    };
    b.prototype._lom = function(n) {
        this._lns += n;
        if (n < 0) {
            while (true) {
                var p = this._lou._loi() - c;
                if (p > -n) {
                    this._lou._loj(this._lou._loi() + n);
                    return
                } else {
                    n += p;
                    this._lou._loj(c);
                    this._lnn--;
                    this._lot()
                }
            }
        } else {
            while (true) {
                var o = this._lou._loi();
                var m;
                if (this._lnn === this._lnl - 1) {
                    m = a - c
                } else {
                    this._lou._loj(0);
                    m = this._lou._lpp()
                }
                var p = m - (o - c);
                if (p >= n) {
                    this._lou._loj(o + n);
                    return
                } else {
                    this._lou._loj(c + m);
                    n -= p;
                    this._lnn++;
                    this._lot()
                }
            }
        }
        throw new Error("2637 ")
    };
    b.prototype._lop = function() {
        this._lnq = false;
        for (var m = 0; m < this._lnl - 1; m++) {
            this._lnh(this._lnj[m].getData())
        }
        this._lnj[0] = this._lnj[this._lnl - 1];
        this._lnl = 1;
        this._lnn = 0;
        this._lot()
    };
    b.prototype._lor = function() {
        this._lnj[this._lnl] = k();
        this._lnj[this._lnl]._loj(c);
        this._lnl++
    };
    b.prototype._lot = function() {
        this._lou = this._lnj[this._lnn]
    };
    b.prototype._lov = function(m) {
        var p = this._lnv - (this._lnw._loi() - c);
        if (p >= m) {
            this._lpg(m);
            this._lnw._loj(this._lnw._loi() + m);
            return
        } else {
            var o = 0;
            while (true) {
                var n = m - o;
                var q = p > n ? n : p;
                this._lpg(q);
                this._lnw._loj(this._lnw._loi() + q);
                o += q;
                if (o === m) {
                    return
                }
                this._lph(m - o);
                p = this._lnv - (this._lnw._loi() - c)
            }
        }
    };
    b.prototype._low = function(m) {
        this._lns += m;
        if (this._lou._loi() + m >= a) {
            this._eze()
        }
    };
    b.prototype._lhh = function(m) {
        this._low(1);
        this._lou._lhh(m)
    };
    b.prototype._lhi = function(m) {
        this._low(2);
        this._lou._lhi(m)
    };
    b.prototype._lox = function(m) {
        this._low(3);
        this._lou._lox(m)
    };
    b.prototype._loz = function(m) {
        this._low(4);
        this._lou._loz(m)
    };
    b.prototype._lpb = function(m) {
        this._low(4);
        this._lou._lpb(m)
    };
    b.prototype._lpd = function(n) {
        var m = emz._lqa(n);
        this._low(m + 2);
        this._lou._lhi(m);
        this._lou._lpd(n)
    };
    b.prototype._lpe = function(s, r, p) {
        var n = this._lou._erm();
        if (n >= p) {
            this._lou._lpe(s, r, p);
            this._low(0)
        } else {
            var o = 0;
            while (o < p) {
                var q = p - o;
                var m = q > n ? n : q;
                this._lou._lpe(s, r + o, m);
                this._low(0);
                o += m;
                n = this._lou._erm()
            }
        }
        this._lns += p
    };
    b.prototype._lpg = function(m) {
        if (this._lnw._loi() - c + m > this._lnv) {
            this._lph(m)
        }
        this._lnt -= m
    };
    b.prototype._lph = function(n) {
        l(this._lnw);
        for (var m = 1; m < this._lnz; m++) {
            this._lnx[m - 1] = this._lnx[m]
        }
        this._lnz--;
        if (this._lnz > 0) {
            this._lnw = this._lnx[0];
            this._lnw._loj(0);
            this._lnv = this._lnw._lpp()
        } else {
            this._lnw = this._lnv = undefined
        }
    };
    b.prototype._lpi = function() {
        this._lpg(1);
        return this._lnw._lpi()
    };
    b.prototype._lpj = function() {
        this._lpg(1);
        return this._lnw._lpj()
    };
    b.prototype._lpl = function() {
        this._lpg(2);
        return this._lnw._lpl()
    };
    b.prototype._lpm = function() {
        this._lpg(2);
        return this._lnw._lpm()
    };
    b.prototype.g3 = function() {
        this._lpg(3);
        return this._lnw.g3()
    };
    b.prototype._lpn = function() {
        this._lpg(3);
        return this._lnw._lpn()
    };
    b.prototype._lpp = function() {
        this._lpg(4);
        return this._lnw._lpp()
    };
    b.prototype._lpr = function() {
        this._lpg(4);
        return this._lnw._lpr()
    };
    b.prototype._lpt = function() {
        this._lpg(4);
        return this._lnw._lpt()
    };
    b.prototype._lpu = function() {
        this._lpg(2);
        var m = this._lnw._lpl();
        this._lpg(m);
        return this._lnw._lpu()
    };
    b.prototype._lpw = function(s, r, m) {
        var p = this._lnv - (this._lnw._loi() - c);
        if (p >= m) {
            this._lpg(m);
            this._lnw._lpw(s, r, m);
            return
        } else {
            var o = 0;
            while (true) {
                var n = m - o;
                var q = p > n ? n : p;
                this._lpg(q);
                this._lnw._lpw(s, r + o, q);
                o += q;
                if (o === m) {
                    return
                }
                this._lph(m - o);
                p = this._lnv - (this._lnw._loi() - c)
            }
        }
    };
    var i = function(m) {
        return new b(m)
    };
    i._lqa = function(m) {
        return emz._lqa(m) + 2
    };
    return i
}();
var fns = function() {
    var a = function(b) {
        this._cwg;
        this._cwp;
        this._cwh;
        this._cwi;
        this._cwj;
        this._cwk;
        this._cwm;
        this.resize;
        this._cwn;
        this._ou = _gkf;
        this._cwd = false;
        this._cac = _gkf;
        this._ot = _gkf;
        this._cwf(b)
    };
    a.prototype._cwf = function(e) {
        this._cwg = e._lpi() === 1;
        this._cwh = e._lpi() === 1;
        var i = e._lpi();
        if (i > 0) {
            this._cwi = new Uint32Array(i);
            for (var b = 0; b < i; b++) {
                this._cwi[b] = e._lpl()
            }
        }
        var c = e._lpi();
        if (c > 0) {
            this._cwj = new Uint32Array(c);
            for (var b = 0; b < c; b++) {
                this._cwj[b] = e._lpl()
            }
        }
        var h = e._lpi();
        if (h > 0) {
            this._cwk = new Uint32Array(h);
            for (var b = 0; b < h; b++) {
                this._cwk[b] = e._lpl()
            }
        }
        var g = e._lpi();
        if (g > 0) {
            this._cwm = new Uint32Array(g);
            for (var b = 0; b < g; b++) {
                this._cwm[b] = e._lpl()
            }
        }
        if (e._lpi() === 1) {
            this.resize = new Float32Array(3);
            this.resize[0] = e._lpm();
            this.resize[1] = e._lpm();
            this.resize[2] = e._lpm()
        }
        this._cwn = e._lpm();
        this._cwp = new Array(e._lpi());
        for (var b = 0; b < this._cwp.length; b++) {
            var d = e._lpp();
            this._cwp[b] = new ArrayBuffer(d);
            e._lpw(this._cwp[b], 0, d)
        }
        if (false) {} else {
            this.name = ""
        }
    };
    a.prototype._cwq = function(c, d, b) {};
    a.prototype._cws = function(b, c) {
        this._cac = b;
        this._cwd = false
    };
    a.prototype._qf = function(j, k) {
        if (this._ou === _gkf) {
            var d = new Array(0);
            var h = 0;
            for (var g = 0; g < this._cwp.length; g++) {
                var e = emz(undefined, this._cwp[g]);
                var b = e._lpi();
                e._loj(0);
                var c;
                if (b === fpe._pfb) {
                    c = fau(e);
                    if (c._phy() < 13) {
                        c._plb(2)
                    }
                } else {
                    if (b === fpe._qgt) {
                        c = ezy({
                            data: e
                        })
                    } else {
                        throw new Error("2325 " + b + "2325 " + this._cwp.length)
                    }
                }
                d.push(c);
                h++
            }
            if (d.length === 1) {
                this._ou = d[0]
            } else {
                if (d[0]._gmm() === fpe._pfb) {
                    this._ou = fau(undefined, d)
                } else {
                    this._ou = ezy({
                        _bco: d
                    })
                }
            }
            if (this._cwh) {
                this._ou._plc()
            }
            if (this._cwi !== undefined && this._cwj !== undefined) {
                this._ou._ple(this._cwi, this._cwj)
            }
            if (this._cwk !== undefined && this._cwm !== undefined) {
                this._ou._pli(this._cwk, this._cwm)
            }
            if (this._cwn !== undefined) {
                this._ou._plk(this._cwn)
            }
            if (this.resize !== undefined) {
                this._ou.scale(this.resize[0] / 128, this.resize[1] / 128, this.resize[2] / 128)
            }
        }
        if (this._cac === _gkf) {
            var i = this._ou._gmk(fkw);
            if (i.length > 0) {
                if (!this._cwd) {
                    this._cac = j._btp(i, k);
                    this._cwd = true
                }
                return null
            } else {
                this._cac = epn({
                    empty: true
                })
            }
        }
        if (this._ou._gmm() === fpe._pfb) {
            this._ot = eog(this._ou, undefined, undefined, this._cac)
        } else {
            this._ot = eog(undefined, this._ou, undefined, this._cac)
        }
        return true
    };
    a.prototype._cwu = function(b) {
        this._ot._dsf(b);
        if (this._cwg) {
            b._lhh(1);
            this._ou._dsf(b)
        } else {
            b._lhh(0)
        }
    };
    a.prototype.tidyup = function() {
        this._ot._kb()
    };
    return function(b) {
        return new a(b)
    }
}();
var console = {};
var run = function() {
    _qkj._bg(10 * 1024 * 1024);
    var c;
    self.postMessage = _qkm(self, "postMessage");
    self.onmessage = function(d) {
        c._nwt(d)
    };
    console.log = function(d) {
        if (c !== undefined) {
            c.log(d)
        }
    };
    console._nwd = function(d) {
        if (c !== undefined) {
            c._nwd(d)
        }
    };
    console.error = function(d) {
        if (c !== undefined) {
            c._nwd(d)
        }
    };
    var a = function() {
        this._nwe = {};
        this._nwg = Date.now();
        this._nwi = 0;
        this._nwj = fso(function(d) {
            self.postMessage(d, [d])
        });
        this._nwl = undefined;
        this._nwn = undefined;
        this._nwp = new Array(20);
        this._nwr = 0;
        setInterval(b, 20)
    };
    var b = function() {
        c._nws()
    };
    a.prototype._nws = function() {
        if (Date.now() - this._nwg > 1000) {
            for (var d = 0; d < this._nwr; d++) {
                var e = this._nwp[d];
                if (typeof e !== String) {
                    e = String(e)
                }
                this._nwj._lhh(etk.LOG);
                this._nwj._loz(fso._lqa(e));
                this._nwj._lpd(e)
            }
        }
        this._nwr = 0;
        this._nwv();
        this._nwj._qf();
        this._nwj._eze()
    };
    a.prototype.log = function(d) {
        this._nwp[this._nwr++] = d
    };
    a.prototype._nwd = function(d) {
        this._nwp[this._nwr++] = d
    };
    a.prototype._nwt = function(d) {
        if (d.data._cr !== undefined) {
            if (d.data._cr === etk._dgw) {
                fjf._bg(d.data._mml);
                euu._bg({
                    _gpt: d.data._gpt
                });
                this._nwi++
            } else {
                if (d.data._cr === etk._dhc) {
                    fkw._bg(d.data._mmm);
                    this._nwi++
                } else {
                    if (d.data._cr === etk._dhg) {
                        eru._bg(d.data._mmo);
                        this._nwi++
                    } else {
                        if (d.data._cr === etk._dhh) {
                            fvk._bg(d.data._mmq);
                            this._nwi++
                        } else {
                            throw new Error("2712 " + d._cr)
                        }
                    }
                }
            }
            return
        }
        this._nwj._lob(d.data)
    };
    a.prototype._nwv = function() {
        if (this._nwi < 4) {
            return
        }
        while (true) {
            if (this._nwl === undefined) {
                if (!this._nwj._lof(5)) {
                    break
                }
                this._nwl = this._nwj._lpi();
                this._nwn = this._nwj._lpp()
            }
            if (!this._nwj._lof(this._nwn)) {
                break
            }
            if (this._nwl === etk._vi) {
                var e = this._nwj._lpl();
                this._nww(e, fns(this._nwj));
                this._nwx(e)
            } else {
                if (this._nwl === etk._vg) {
                    var e = this._nwj._lpl();
                    this._nww(e, erc(this._nwj));
                    this._nwx(e)
                } else {
                    if (this._nwl === etk._dgy) {
                        var e = this._nwj._lpl();
                        var d = epn({
                            _dax: this._nwj
                        });
                        this._nwe[e]._cws(d);
                        this._nwx(e)
                    } else {
                        throw new Error("2713 " + this._nwl)
                    }
                }
            }
            this._nwl = undefined;
            this._nwn = undefined
        }
    };
    a.prototype._nww = function(e, d) {
        this._nwe[e] = d
    };
    a.prototype._nwx = function(e) {
        var h = this._nwe[e];
        var g = h._qf(this, e);
        if (g === _gkf) {
            return
        } else {
            if (g === undefined) {
                this._nwj._lhh(etk.ERROR);
                this._nwj._loz(2);
                this._nwj._lhi(e);
                this._nwe[e] = undefined;
                return
            } else {
                this._nwj._loh();
                this._nwj._lhh(etk.COMPLETE);
                this._nwj._lom(4);
                var i = this._nwj._lok();
                this._nwj._lhi(e);
                h._cwu(this._nwj);
                var d = this._nwj._lok() - i;
                this._nwj._lom(-(d + 4));
                this._nwj._loz(d);
                this._nwj._lom(d);
                this._nwj._lop();
                this._nwe[e] = undefined;
                return
            }
        }
    };
    a.prototype._btp = function(e, g) {
        this._nwj._lhh(etk._dgy);
        this._nwj._loz(2 + 2 + 2 * e.length);
        this._nwj._lhi(g);
        this._nwj._lhi(e.length);
        for (var d = 0; d < e.length; d++) {
            this._nwj._lhi(e[d])
        }
    };
    c = new a();
    if (false) {}
}();