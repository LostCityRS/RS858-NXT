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
var gpr = function() {
    var f = {};
    var p = false;
    var a = f._dcf = {
        _dch: Float32Array
    };
    var n = f._dcj = {
        _dch: Int32Array
    };
    var l = f._dcl = {
        _dch: Uint32Array
    };
    f._dcm = -3.4 * Math.pow(10, 38);
    f._dco = 3.4 * Math.pow(10, 38);
    f._dcq = 2147483648 - 1;
    f._dcr = -2147483648;
    f._dcs = 4294967296 - 1;
    f._dcu = 0;
    f._dcw = 1;
    f.BOOLEAN_FALSE;
    var d = 16777216;
    var i = new Uint32Array([32, 64, 128, 256, 1024, 4096, 16384, 65536, 1048576, d]);
    var e = 524288;
    var k;
    var c = f._dcy = undefined;
    var j = 0;
    var b = f._dcz = undefined;
    var o = f._dda = undefined;
    var m = f._ddb = undefined;
    var g = new Array(i.length);
    f._bg = function(s) {
        k = s;
        c = f._dcy = new ArrayBuffer(k);
        b = f._dcz = new Float32Array(c);
        o = f._dda = new Int32Array(c);
        m = f._ddb = new Uint32Array(c);
        for (var q = 0; q < i.length; q++) {
            var t = e / i[q];
            if (t < 1) {
                t = 1
            }
            g[q] = {
                _ddd: i[q],
                _dde: new Array(t),
                _ddg: 0
            }
        }
        var r = new Float32Array(2);
        r[0] = f._dcm;
        r[1] = f._dco;
        f._dcm = r[0];
        f._dco = r[1]
    };
    f._ddh = function(s) {
        if (s > d) {
            throw new Error("3064 " + s)
        }
        if (s + j > k) {
            throw new Error("3065 ")
        }
        var q = 0;
        var v = i[q];
        while (v < s) {
            v = i[++q]
        }
        var r = g[q];
        if (r._ddg === r._dde.length) {
            var u = e / v;
            if (u < 1) {
                u = 1
            }
            r._dde = r._dde.concat(new Array(u));
            if (false) {}
        }
        var t = r._dde[r._ddg++] = {
            _ddj: v,
            _ddl: j / 4,
            _ji: true
        };
        if (false) {}
        j += v;
        return t
    };
    var h = f._ddh;
    f._ddr = function(q) {
        q._ji = false
    };
    f._dds = function(u, s) {
        var t = 0;
        if (s !== undefined) {
            t += 4;
            t += s._dee * 8
        }
        var q = t;
        for (var r in u) {
            var v = u[r];
            v._ddl = q / 4;
            if (v._dei === undefined) {
                q += 4
            } else {
                q += v._dei * 4
            }
            if (v.type === a) {
                v._dcy = b
            } else {
                if (v.type === n) {
                    v._dcy = o
                } else {
                    if (v.type === l) {
                        v._dcy = m
                    }
                }
            }
        }
        return q
    };
    f._ddu = function(s, u) {
        for (var r in s) {
            var t = s[r];
            if (t._dei === undefined) {
                t._dcy[u._ddl + t._ddl] = t._ddw
            } else {
                for (var q = 0; q < t._dei; q++) {
                    t._dcy[u._ddl + t._ddl + q] = t._ddw
                }
            }
        }
    };
    f._ddy = function(s) {
        var r = 0;
        for (var q in s) {
            var t = s[q];
            t._dea = r++;
            t._deb = 1 + (2 * t._dea);
            t._ded = 1 + (2 * t._dea) + 1;
            if (t.type === a) {
                t._dcy = b
            } else {
                if (t.type === n) {
                    t._dcy = o
                } else {
                    if (t.type === l) {
                        t._dcy = m
                    }
                }
            }
        }
        s._dee = r
    };
    f._deg = function(r, u) {
        var t = r;
        for (var s in u) {
            var v = u[s];
            if (v._dei !== undefined) {
                v._ddl = t / 4;
                t += v._dei * 4
            }
        }
        var x = h(t);
        m[x._ddl] = u._dee;
        var q = 0;
        for (var s in u) {
            var v = u[s];
            if (v._dei !== undefined) {
                m[x._ddl + 1 + q * 2] = v._ddl;
                m[x._ddl + 1 + q * 2 + 1] = v._dei;
                q++
            }
        }
        return x
    };
    f._dej = function(s, u) {
        for (var r in s) {
            var t = s[r];
            if (t._dei !== undefined) {
                for (var q = 0; q < t._dei; q++) {
                    t._dcy[u._ddl + t._ddl + q] = t._ddw
                }
            }
        }
    };
    return f
}();
var hcv = function() {
    var b = {};
    var i = false;
    var h = {};
    var g = false;
    var c = false;
    var a = function() {
        var j = self;
        if (j === undefined) {
            j = window
        }
        if (j.performance !== undefined) {
            if (j.performance.now !== undefined && j.performance.timing !== undefined) {
                return j.performance.now() + j.performance.timing.navigationStart
            }
            if (j.performance.webkitNow !== undefined && j.performance.timing !== undefined) {
                return j.performance.webkitNow() + j.performance.timing.navigationStart
            }
        }
        if (!g) {
            if (false) {}
            g = true
        }
        return Date.now()
    };
    var e = false;
    var d = function(j, k) {
        return j + (k !== undefined ? "(" + k + ")" : "")
    };
    var f = function(j, k) {
        var l = h[j];
        if (l === undefined) {
            l = h[j] = {
                name: j,
                _crf: 0,
                _crh: 0,
                _crj: false,
                _crl: 0,
                _crm: {}
            }
        }
        var m = l;
        if (k !== undefined) {
            if (l[k] !== undefined) {
                m = l[k]
            } else {
                m = l[k] = {
                    _crj: false,
                    _crl: 0
                }
            }
        }
        return m
    };
    b._crn = function(j, k) {
        if (e && console.time) {
            console.time(d(j, k))
        }
        var l = f(j, k);
        if (l._crj) {
            throw new Error("3041 " + j + "3041 ")
        }
        l._crj = true;
        l._crl = a()
    };
    b._crp = function(j, l) {
        if (e && console.timeEnd) {
            console.timeEnd(d(j, l))
        }
        var m = h[j];
        if (m === undefined) {
            throw new Error("3042 " + j + "3042 ")
        }
        var n = m;
        if (l !== undefined) {
            n = m[l]
        }
        if (n === undefined) {
            throw new Error("3043 " + j + "3043 " + l + "3043 ")
        }
        if (!n._crj) {
            throw new Error("3044 " + j + ((l !== undefined) ? ("3044 " + l) : "3044 ") + "3044 ")
        }
        n._crj = false;
        var o = a() - n._crl;
        m._crf += o;
        m._crh++;
        if (c) {
            var k = 10 * Math.floor(o / 10);
            if (m._crm[k] === undefined) {
                m._crm[k] = 1
            } else {
                m._crm[k]++
            }
        }
        if (l !== undefined) {
            delete m[l]
        }
    };
    b._crq = function(j, k) {
        var l = h[j];
        if (l === undefined) {
            return false
        }
        var m = l;
        if (k !== undefined) {
            m = l[k]
        }
        if (m === undefined) {
            return false
        }
        return m._crj
    };
    b._crs = function(j, m) {
        var l = f(j);
        l._crh++;
        l._crf += m;
        if (c) {
            var k = 10 * Math.floor(m / 10);
            if (l._crm[k] === undefined) {
                l._crm[k] = 1
            } else {
                l._crm[k]++
            }
        }
    };
    b._crt = function() {
        if (false) {}
    };
    return b
}();
var hbb = function() {
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
        a._qkj = gpr;
        a._ktx = hcv
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
            var f = new Uint8Array(b);
            var e = new Uint8Array(this, d, c - d);
            f.set(e);
            return b
        }
    }
}();
var guj = function() {
    var a7 = {};
    var x = 0;
    var aq = 0;
    var D = aq + 1;
    var a3 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_=!@#$%^&*()[]{}|;:,.<>/?`~ \\'\"+-";
    for (x = 0;
        (1 << (x + 1)) > (1 << x); x++) {}
    x >>= 1;
    aq = (1 << x) - 1;
    D = aq + 1;
    var S = new Array(0);
    var aK = S;
    var n = S;
    var k = S;
    var j = S;
    var i = S;
    var h = S;
    var g = S;
    var f = S;
    var e = S;
    var am = S;
    var aS = S;
    var aI = S;
    var E = S;
    var O = S;
    var P = S;
    var R = S;
    var aA = S;
    var az = S;
    var ax = S;
    var av = S;
    var ae = S;
    var ad = S;
    var ac = S;
    var aE = S;
    var N = S;
    var M = S;
    var aB = S;
    var L = S;
    var ag = S;
    var X = S;
    var aH = S;
    var ai = S;
    var a5 = S;
    var Q = S;
    var aZ = S;
    var ab = S;
    var G = S;
    var U = S;
    var aa = S;
    var Y = S;
    var K = S;
    var J = S;
    var aM = S;
    var aY = S;
    var a1 = function(bb) {
        var t, a9, ba, T;
        a9 = new Array(bb);
        for (t = 0; t < bb; t++) {
            a9[t] = 0
        }
        a9[0] = 2;
        ba = 0;
        for (; a9[ba] < bb;) {
            for (t = a9[ba] * a9[ba]; t < bb; t += a9[ba]) {
                a9[t] = 1
            }
            ba++;
            a9[ba] = a9[ba - 1] + 1;
            for (; a9[ba] < bb && a9[a9[ba]]; a9[ba]++) {}
        }
        T = new Array(ba);
        for (t = 0; t < ba; t++) {
            T[t] = a9[t]
        }
        return T
    };
    var l = function(T, t) {
        if (aI.length != T.length) {
            aI = I(T);
            E = I(T);
            O = I(T)
        }
        y(O, t);
        return aF(T, O)
    };
    var aF = function(a9, T) {
        var t, bb, bc, ba;
        if (aI.length != a9.length) {
            aI = I(a9);
            E = I(a9);
            O = I(a9)
        }
        ar(O, T);
        ar(E, a9);
        ar(aI, a9);
        an(E, -1);
        an(aI, -1);
        bc = 0;
        for (t = 0; t < E.length; t++) {
            for (bb = 1; bb < aq; bb <<= 1) {
                if (a9[t] & bb) {
                    ba = (bc < E.length + x ? bc : 0);
                    t = E.length;
                    bb = aq
                } else {
                    bc++
                }
            }
        }
        if (ba) {
            F(E, ba)
        }
        aJ(O, E, a9);
        if (!z(O, 1) && !al(O, aI)) {
            bb = 1;
            while (bb <= ba - 1 && !al(O, aI)) {
                aD(O, a9);
                if (z(O, 1)) {
                    return 0
                }
                bb++
            }
            if (!al(O, aI)) {
                return 0
            }
        }
        return 1
    };
    var at = function(t) {
        var ba, a9, T;
        for (ba = t.length - 1;
            (t[ba] == 0) && (ba > 0); ba--) {}
        for (a9 = 0, T = t[ba]; T;
            (T >>= 1), a9++) {}
        a9 += x * ba;
        return a9
    };
    var ay = function(t, a9) {
        var T = aQ(0, (t.length > a9 ? t.length : a9) * x, 0);
        ar(T, t);
        return T
    };
    var af = function(T) {
        var t = aQ(0, T, 0);
        ak(t, T);
        return aU(t, 1)
    };
    var C = function(t) {
        if (t >= 600) {
            return q(t, 2)
        }
        if (t >= 550) {
            return q(t, 4)
        }
        if (t >= 500) {
            return q(t, 5)
        }
        if (t >= 400) {
            return q(t, 6)
        }
        if (t >= 350) {
            return q(t, 7)
        }
        if (t >= 300) {
            return q(t, 9)
        }
        if (t >= 250) {
            return q(t, 12)
        }
        if (t >= 200) {
            return q(t, 15)
        }
        if (t >= 150) {
            return q(t, 18)
        }
        if (t >= 100) {
            return q(t, 27)
        }
        return q(t, 40)
    };
    var q = function(ba, bc) {
        var a9, T, t, bb;
        bb = 30000;
        a9 = aQ(0, ba, 0);
        if (L.length == 0) {
            L = a1(30000)
        }
        if (aY.length != a9.length) {
            aY = I(a9)
        }
        for (;;) {
            aR(a9, ba, 0);
            a9[0] |= 1;
            t = 0;
            for (T = 0;
                (T < L.length) && (L[T] <= bb); T++) {
                if (a4(a9, L[T]) == 0 && !z(a9, L[T])) {
                    t = 1;
                    break
                }
            }
            for (T = 0; T < bc && !t; T++) {
                aR(aY, ba, 0);
                while (!B(a9, aY)) {
                    aR(aY, ba, 0)
                }
                if (!aF(a9, aY)) {
                    t = 1
                }
            }
            if (!t) {
                return a9
            }
        }
    };
    var b = function(t, a9) {
        var T = I(t);
        aw(T, a9);
        return aU(T, 1)
    };
    var p = function(t, a9) {
        var T = ay(t, t.length + 1);
        an(T, a9);
        return aU(T, 1)
    };
    var d = function(t, a9) {
        var T = ay(t, t.length + a9.length);
        aO(T, a9);
        return aU(T, 1)
    };
    a7._plo = function(t, ba, a9) {
        var T = ay(t, a9.length);
        aJ(T, aU(ba, 2), aU(a9, 2), 0);
        return aU(T, 1)
    };
    var aW = aW;
    var aX = function(t, a9) {
        var T = ay(t, (t.length > a9.length ? t.length + 1 : a9.length + 1));
        a2(T, a9);
        return aU(T, 1)
    };
    var v = function(t, a9) {
        var T = ay(t, (t.length > a9.length ? t.length + 1 : a9.length + 1));
        aC(T, a9);
        return aU(T, 1)
    };
    var a6 = function(t, ba) {
        var T = ay(t, ba.length);
        var a9;
        a9 = W(T, ba);
        return a9 ? aU(T, 1) : null
    };
    var ah = function(t, ba, a9) {
        var T = ay(t, a9.length);
        aL(T, ba, a9);
        return aU(T, 1)
    };
    var ak = function(bg, t) {
        var bi, bb, bc, bj, bd, bh, T, bf, a9, ba, be;
        if (L.length == 0) {
            L = a1(30000)
        }
        if (ag.length == 0) {
            ag = new Array(512);
            for (bd = 0; bd < 512; bd++) {
                ag[bd] = Math.pow(2, bd / 511 - 1)
            }
        }
        bi = 0.1;
        bb = 20;
        recLimit = 20;
        if (aH.length != bg.length) {
            aH = I(bg);
            ai = I(bg);
            aZ = I(bg);
            G = I(bg);
            Y = I(bg);
            K = I(bg);
            J = I(bg);
            aa = I(bg);
            U = I(bg);
            X = I(bg);
            a5 = I(bg);
            Q = I(bg);
            ab = I(bg);
            aM = I(bg)
        }
        if (t <= recLimit) {
            bc = (1 << ((t + 2) >> 1)) - 1;
            y(bg, 0);
            for (bj = 1; bj;) {
                bj = 0;
                bg[0] = 1 | (1 << (t - 1)) | Math.floor(Math.random() * (1 << t));
                for (bd = 1;
                    (bd < L.length) && ((L[bd] & bc) == L[bd]); bd++) {
                    if (0 == (bg[0] % L[bd])) {
                        bj = 1;
                        break
                    }
                }
            }
            V(bg);
            return
        }
        T = bi * t * t;
        if (t > 2 * bb) {
            for (bh = 1; t - t * bh <= bb;) {
                bh = ag[Math.floor(Math.random() * 512)]
            }
        } else {
            bh = 0.5
        }
        be = Math.floor(bh * t) + 1;
        ak(Q, be);
        y(aH, 0);
        aH[Math.floor((t - 2) / x)] |= (1 << ((t - 2) % x));
        c(aH, Q, X, a5);
        a9 = at(X);
        for (;;) {
            for (;;) {
                aR(ai, a9, 0);
                if (B(X, ai)) {
                    break
                }
            }
            an(ai, 1);
            aC(ai, X);
            ar(U, Q);
            aO(U, ai);
            m(U, 2);
            an(U, 1);
            ar(G, ai);
            m(G, 2);
            for (bf = 0, bd = 0;
                (bd < L.length) && (L[bd] < T); bd++) {
                if (a4(U, L[bd]) == 0 && !z(U, L[bd])) {
                    bf = 1;
                    break
                }
            }
            if (!bf) {
                if (!l(U, 2)) {
                    bf = 1
                }
            }
            if (!bf) {
                an(U, -3);
                for (bd = U.length - 1;
                    (U[bd] == 0) && (bd > 0); bd--) {}
                for (ba = 0, w = U[bd]; w;
                    (w >>= 1), ba++) {}
                ba += x * bd;
                for (;;) {
                    aR(ab, ba, 0);
                    if (B(U, ab)) {
                        break
                    }
                }
                an(U, 3);
                an(ab, 2);
                ar(aa, ab);
                ar(aZ, U);
                an(aZ, -1);
                aJ(aa, aZ, U);
                an(aa, -1);
                if (aP(aa)) {
                    ar(aa, ab);
                    aJ(aa, G, U);
                    an(aa, -1);
                    ar(aM, U);
                    ar(Y, aa);
                    A(Y, U);
                    if (z(Y, 1)) {
                        ar(bg, aM);
                        return
                    }
                }
            }
        }
    };
    var aG = function(ba, a9) {
        var T, t;
        T = Math.floor((ba - 1) / x) + 2;
        t = aQ(0, 0, T);
        aR(t, ba, a9);
        return t
    };
    var aR = function(T, bb, ba) {
        var t, a9;
        for (t = 0; t < T.length; t++) {
            T[t] = 0
        }
        a9 = Math.floor((bb - 1) / x) + 1;
        for (t = 0; t < a9; t++) {
            T[t] = Math.floor(Math.random() * (1 << (x - 1)))
        }
        T[a9 - 1] &= (2 << ((bb - 1) % x)) - 1;
        if (ba == 1) {
            T[a9 - 1] |= (1 << ((bb - 1) % x))
        }
    };
    var aj = function(t, ba) {
        var T, a9;
        T = I(t);
        a9 = I(ba);
        A(T, a9);
        return T
    };
    var A = function(bh, bg) {
        var bf, be, T, bd, bc, bb, t, ba, a9;
        if (am.length != bh.length) {
            am = I(bh)
        }
        a9 = 1;
        while (a9) {
            a9 = 0;
            for (bf = 1; bf < bg.length; bf++) {
                if (bg[bf]) {
                    a9 = 1;
                    break
                }
            }
            if (!a9) {
                break
            }
            for (bf = bh.length; !bh[bf] && bf >= 0; bf--) {}
            be = bh[bf];
            T = bg[bf];
            bd = 1;
            bc = 0;
            bb = 0;
            t = 1;
            while ((T + bb) && (T + t)) {
                ba = Math.floor((be + bd) / (T + bb));
                qp = Math.floor((be + bc) / (T + t));
                if (ba != qp) {
                    break
                }
                S = bd - ba * bb;
                bd = bb;
                bb = S;
                S = bc - ba * t;
                bc = t;
                t = S;
                S = be - ba * T;
                be = T;
                T = S
            }
            if (bc) {
                ar(am, bh);
                H(bh, bg, bd, bc);
                H(bg, am, t, bb)
            } else {
                aw(bh, bg);
                ar(am, bh);
                ar(bh, bg);
                ar(bg, am)
            }
        }
        if (bg[0] == 0) {
            return
        }
        S = a4(bh, bg[0]);
        y(bh, bg[0]);
        bg[0] = S;
        while (bg[0]) {
            bh[0] %= bg[0];
            S = bh[0];
            bh[0] = bg[0];
            bg[0] = S
        }
    };
    var W = function(t, a9) {
        var T = 1 + 2 * Math.max(t.length, a9.length);
        if (!(t[0] & 1) && !(a9[0] & 1)) {
            y(t, 0);
            return 0
        }
        if (R.length != T) {
            R = new Array(T);
            P = new Array(T);
            aA = new Array(T);
            az = new Array(T);
            ax = new Array(T);
            av = new Array(T)
        }
        ar(R, t);
        ar(P, a9);
        y(aA, 1);
        y(az, 0);
        y(ax, 0);
        y(av, 1);
        for (;;) {
            while (!(R[0] & 1)) {
                s(R);
                if (!(aA[0] & 1) && !(az[0] & 1)) {
                    s(aA);
                    s(az)
                } else {
                    aC(aA, a9);
                    s(aA);
                    a2(az, t);
                    s(az)
                }
            }
            while (!(P[0] & 1)) {
                s(P);
                if (!(ax[0] & 1) && !(av[0] & 1)) {
                    s(ax);
                    s(av)
                } else {
                    aC(ax, a9);
                    s(ax);
                    a2(av, t);
                    s(av)
                }
            }
            if (!B(P, R)) {
                a2(R, P);
                a2(aA, ax);
                a2(az, av)
            } else {
                a2(P, R);
                a2(ax, aA);
                a2(av, az)
            }
            if (z(R, 0)) {
                if (r(ax)) {
                    aC(ax, a9)
                }
                ar(t, ax);
                if (!z(P, 1)) {
                    y(t, 0);
                    return 0
                }
                return 1
            }
        }
    };
    var aN = function(a9, bc) {
        var ba = 1,
            T = 0,
            bb;
        for (;;) {
            if (a9 == 1) {
                return ba
            }
            if (a9 == 0) {
                return 0
            }
            T -= ba * Math.floor(bc / a9);
            bc %= a9;
            if (bc == 1) {
                return T
            }
            if (bc == 0) {
                return 0
            }
            ba -= T * Math.floor(a9 / bc);
            a9 %= bc
        }
    };
    var u = function(T, bd, ba, a9, t) {
        var bc = 0;
        var bb = Math.max(T.length, bd.length);
        if (R.length != bb) {
            R = new Array(bb);
            aA = new Array(bb);
            az = new Array(bb);
            ax = new Array(bb);
            av = new Array(bb)
        }
        while (!(T[0] & 1) && !(bd[0] & 1)) {
            s(T);
            s(bd);
            bc++
        }
        ar(R, T);
        ar(ba, bd);
        y(aA, 1);
        y(az, 0);
        y(ax, 0);
        y(av, 1);
        for (;;) {
            while (!(R[0] & 1)) {
                s(R);
                if (!(aA[0] & 1) && !(az[0] & 1)) {
                    s(aA);
                    s(az)
                } else {
                    aC(aA, bd);
                    s(aA);
                    a2(az, T);
                    s(az)
                }
            }
            while (!(ba[0] & 1)) {
                s(ba);
                if (!(ax[0] & 1) && !(av[0] & 1)) {
                    s(ax);
                    s(av)
                } else {
                    aC(ax, bd);
                    s(ax);
                    a2(av, T);
                    s(av)
                }
            }
            if (!B(ba, R)) {
                a2(R, ba);
                a2(aA, ax);
                a2(az, av)
            } else {
                a2(ba, R);
                a2(ax, aA);
                a2(av, az)
            }
            if (z(R, 0)) {
                if (r(ax)) {
                    aC(ax, bd);
                    a2(av, T)
                }
                m(av, -1);
                ar(a9, ax);
                ar(t, av);
                a8(ba, bc);
                return
            }
        }
    };
    var r = function(t) {
        return ((t[t.length - 1] >> (x - 1)) & 1)
    };
    var a = function(T, bd, a9) {
        var t, bb = T.length,
            ba = bd.length;
        var bc = ((bb + a9) < ba) ? (bb + a9) : ba;
        for (t = ba - 1 - a9; t < bb && t >= 0; t++) {
            if (T[t] > 0) {
                return 1
            }
        }
        for (t = bb - 1 + a9; t < ba; t++) {
            if (bd[t] > 0) {
                return 0
            }
        }
        for (t = bc - 1; t >= a9; t--) {
            if (T[t - a9] > bd[t]) {
                return 1
            } else {
                if (T[t - a9] < bd[t]) {
                    return 0
                }
            }
        }
        return 0
    };
    var B = function(T, ba) {
        var t;
        var a9 = (T.length < ba.length) ? T.length : ba.length;
        for (t = T.length; t < ba.length; t++) {
            if (ba[t]) {
                return 0
            }
        }
        for (t = ba.length; t < T.length; t++) {
            if (T[t]) {
                return 1
            }
        }
        for (t = a9 - 1; t >= 0; t--) {
            if (T[t] > ba[t]) {
                return 1
            } else {
                if (T[t] < ba[t]) {
                    return 0
                }
            }
        }
        return 0
    };
    var c = function(bh, bf, t, bj) {
        var bc, bb;
        var bd, T, ba, a9, bi, bg, be;
        ar(bj, bh);
        for (bb = bf.length; bf[bb - 1] == 0; bb--) {}
        be = bf[bb - 1];
        for (bg = 0; be; bg++) {
            be >>= 1
        }
        bg = x - bg;
        a8(bf, bg);
        a8(bj, bg);
        for (bc = bj.length; bj[bc - 1] == 0 && bc > bb; bc--) {}
        y(t, 0);
        while (!a(bf, bj, bc - bb)) {
            au(bj, bf, bc - bb);
            t[bc - bb]++
        }
        for (bd = bc - 1; bd >= bb; bd--) {
            if (bj[bd] == bf[bb - 1]) {
                t[bd - bb] = aq
            } else {
                t[bd - bb] = Math.floor((bj[bd] * D + bj[bd - 1]) / bf[bb - 1])
            }
            for (;;) {
                a9 = (bb > 1 ? bf[bb - 2] : 0) * t[bd - bb];
                bi = a9 >> x;
                a9 = a9 & aq;
                ba = bi + t[bd - bb] * bf[bb - 1];
                bi = ba >> x;
                ba = ba & aq;
                if (bi == bj[bd] ? ba == bj[bd - 1] ? a9 > (bd > 1 ? bj[bd - 2] : 0) : ba > bj[bd - 1] : bi > bj[bd]) {
                    t[bd - bb]--
                } else {
                    break
                }
            }
            ap(bj, bf, -t[bd - bb], bd - bb);
            if (r(bj)) {
                a0(bj, bf, bd - bb);
                t[bd - bb]--
            }
        }
        F(bf, bg);
        F(bj, bg)
    };
    var V = function(a9) {
        var T, bb, ba, t;
        bb = a9.length;
        ba = 0;
        for (T = 0; T < bb; T++) {
            ba += a9[T];
            t = 0;
            if (ba < 0) {
                t = -(ba >> x);
                ba += t * D
            }
            a9[T] = ba & aq;
            ba = (ba >> x) - t
        }
    };
    var a4 = function(T, ba) {
        var t, a9 = 0;
        for (t = T.length - 1; t >= 0; t--) {
            a9 = (a9 * D + T[t]) % ba
        }
        return a9
    };
    var aQ = function(a9, bb, bc) {
        var T, ba;
        ba = Math.ceil(bb / x) + 1;
        ba = bc > ba ? bc : ba;
        var bd = new Array(ba);
        y(bd, a9);
        return bd
    };
    a7._plr = function(bg, bd, a9) {
        var ba, bc, bb, bf, be, T;
        var t = bg.length;
        if (bd == -1) {
            bf = new Array(0);
            for (;;) {
                be = new Array(bf.length + 1);
                for (bc = 0; bc < bf.length; bc++) {
                    be[bc + 1] = bf[bc]
                }
                be[0] = parseInt(bg, 10);
                bf = be;
                ba = bg.indexOf(",", 0);
                if (ba < 1) {
                    break
                }
                bg = bg.substring(ba + 1);
                if (bg.length == 0) {
                    break
                }
            }
            if (bf.length < a9) {
                be = new Array(a9);
                ar(be, bf);
                return be
            }
            return bf
        }
        bf = aQ(0, bd * t, 0);
        for (bc = 0; bc < t; bc++) {
            ba = a3.indexOf(bg.substring(bc, bc + 1), 0);
            if (bd <= 36 && ba >= 36) {
                ba -= 26
            }
            if (ba >= bd || ba < 0) {
                break
            }
            m(bf, bd);
            an(bf, ba)
        }
        for (t = bf.length; t > 0 && !bf[t - 1]; t--) {}
        t = a9 > t + 1 ? a9 : t + 1;
        be = new Array(t);
        T = t < bf.length ? t : bf.length;
        for (bc = 0; bc < T; bc++) {
            be[bc] = bf[bc]
        }
        for (; bc < t; bc++) {
            be[bc] = 0
        }
        return be
    };
    var aV = a7._plr;
    var z = function(T, a9) {
        var t;
        if (T[0] != a9) {
            return 0
        }
        for (t = 1; t < T.length; t++) {
            if (T[t]) {
                return 0
            }
        }
        return 1
    };
    var al = function(T, ba) {
        var t;
        var a9 = T.length < ba.length ? T.length : ba.length;
        for (t = 0; t < a9; t++) {
            if (T[t] != ba[t]) {
                return 0
            }
        }
        if (T.length > ba.length) {
            for (; t < T.length; t++) {
                if (T[t]) {
                    return 0
                }
            }
        } else {
            for (; t < ba.length; t++) {
                if (ba[t]) {
                    return 0
                }
            }
        }
        return 1
    };
    var aP = function(T) {
        var t;
        for (t = 0; t < T.length; t++) {
            if (T[t]) {
                return 0
            }
        }
        return 1
    };
    a7._plt = function(a9, ba) {
        var T, bc, bb = "";
        if (f.length != a9.length) {
            f = I(a9)
        } else {
            ar(f, a9)
        }
        if (ba == -1) {
            for (T = a9.length - 1; T > 0; T--) {
                bb += a9[T] + ","
            }
            bb += a9[0]
        } else {
            while (!aP(f)) {
                bc = Z(f, ba);
                bb = a3.substring(bc, bc + 1) + bb
            }
        }
        if (bb.length == 0) {
            bb = "0"
        }
        return bb
    };
    var aT = a7._plt;
    var I = function(T) {
        var t;
        var a9 = new Array(T.length);
        ar(a9, T);
        return a9
    };
    var ar = function(T, ba) {
        var t;
        var a9 = T.length < ba.length ? T.length : ba.length;
        for (t = 0; t < a9; t++) {
            T[t] = ba[t]
        }
        for (t = a9; t < T.length; t++) {
            T[t] = 0
        }
    };
    var y = function(T, ba) {
        var t, a9;
        for (a9 = ba, t = 0; t < T.length; t++) {
            T[t] = a9 & aq;
            a9 >>= x
        }
    };
    var an = function(a9, bc) {
        var T, bb, ba, t;
        a9[0] += bc;
        bb = a9.length;
        ba = 0;
        for (T = 0; T < bb; T++) {
            ba += a9[T];
            t = 0;
            if (ba < 0) {
                t = -(ba >> x);
                ba += t * D
            }
            a9[T] = ba & aq;
            ba = (ba >> x) - t;
            if (!ba) {
                return
            }
        }
    };
    var F = function(T, ba) {
        var t;
        var a9 = Math.floor(ba / x);
        if (a9) {
            for (t = 0; t < T.length - a9; t++) {
                T[t] = T[t + a9]
            }
            for (; t < T.length; t++) {
                T[t] = 0
            }
            ba %= x
        }
        for (t = 0; t < T.length - 1; t++) {
            T[t] = aq & ((T[t + 1] << (x - ba)) | (T[t] >> ba))
        }
        T[t] >>= ba
    };
    var s = function(T) {
        var t;
        for (t = 0; t < T.length - 1; t++) {
            T[t] = aq & ((T[t + 1] << (x - 1)) | (T[t] >> 1))
        }
        T[t] = (T[t] >> 1) | (T[t] & (D >> 1))
    };
    var a8 = function(T, ba) {
        var t;
        var a9 = Math.floor(ba / x);
        if (a9) {
            for (t = T.length; t >= a9; t--) {
                T[t] = T[t - a9]
            }
            for (; t >= 0; t--) {
                T[t] = 0
            }
            ba %= x
        }
        if (!ba) {
            return
        }
        for (t = T.length - 1; t > 0; t--) {
            T[t] = aq & ((T[t] << ba) | (T[t - 1] >> (x - ba)))
        }
        T[t] = aq & (T[t] << ba)
    };
    var m = function(a9, bc) {
        var T, bb, ba, t;
        if (!bc) {
            return
        }
        bb = a9.length;
        ba = 0;
        for (T = 0; T < bb; T++) {
            ba += a9[T] * bc;
            t = 0;
            if (ba < 0) {
                t = -(ba >> x);
                ba += t * D
            }
            a9[T] = ba & aq;
            ba = (ba >> x) - t
        }
    };
    var Z = function(T, bb) {
        var t, ba = 0,
            a9;
        for (t = T.length - 1; t >= 0; t--) {
            a9 = ba * D + T[t];
            T[t] = Math.floor(a9 / bb);
            ba = a9 % bb
        }
        return ba
    };
    var H = function(a9, be, ba, T) {
        var t, bb, bd, bc;
        bd = a9.length < be.length ? a9.length : be.length;
        bc = a9.length;
        for (bb = 0, t = 0; t < bd; t++) {
            bb += ba * a9[t] + T * be[t];
            a9[t] = bb & aq;
            bb >>= x
        }
        for (t = bd; t < bc; t++) {
            bb += ba * a9[t];
            a9[t] = bb & aq;
            bb >>= x
        }
    };
    var ap = function(a9, be, T, bb) {
        var t, ba, bd, bc;
        bd = a9.length < bb + be.length ? a9.length : bb + be.length;
        bc = a9.length;
        for (ba = 0, t = bb; t < bd; t++) {
            ba += a9[t] + T * be[t - bb];
            a9[t] = ba & aq;
            ba >>= x
        }
        for (t = bd; ba && t < bc; t++) {
            ba += a9[t];
            a9[t] = ba & aq;
            ba >>= x
        }
    };
    var a0 = function(T, bd, ba) {
        var t, a9, bc, bb;
        bc = T.length < ba + bd.length ? T.length : ba + bd.length;
        bb = T.length;
        for (a9 = 0, t = ba; t < bc; t++) {
            a9 += T[t] + bd[t - ba];
            T[t] = a9 & aq;
            a9 >>= x
        }
        for (t = bc; a9 && t < bb; t++) {
            a9 += T[t];
            T[t] = a9 & aq;
            a9 >>= x
        }
    };
    var au = function(T, bd, ba) {
        var t, a9, bc, bb;
        bc = T.length < ba + bd.length ? T.length : ba + bd.length;
        bb = T.length;
        for (a9 = 0, t = ba; t < bc; t++) {
            a9 += T[t] - bd[t - ba];
            T[t] = a9 & aq;
            a9 >>= x
        }
        for (t = bc; a9 && t < bb; t++) {
            a9 += T[t];
            T[t] = a9 & aq;
            a9 >>= x
        }
    };
    var a2 = function(T, bc) {
        var t, a9, bb, ba;
        bb = T.length < bc.length ? T.length : bc.length;
        for (a9 = 0, t = 0; t < bb; t++) {
            a9 += T[t] - bc[t];
            T[t] = a9 & aq;
            a9 >>= x
        }
        for (t = bb; a9 && t < T.length; t++) {
            a9 += T[t];
            T[t] = a9 & aq;
            a9 >>= x
        }
    };
    var aC = function(T, bc) {
        var t, a9, bb, ba;
        bb = T.length < bc.length ? T.length : bc.length;
        for (a9 = 0, t = 0; t < bb; t++) {
            a9 += T[t] + bc[t];
            T[t] = a9 & aq;
            a9 >>= x
        }
        for (t = bb; a9 && t < T.length; t++) {
            a9 += T[t];
            T[t] = a9 & aq;
            a9 >>= x
        }
    };
    var aO = function(T, a9) {
        var t;
        if (aK.length != 2 * T.length) {
            aK = new Array(2 * T.length)
        }
        y(aK, 0);
        for (t = 0; t < a9.length; t++) {
            if (a9[t]) {
                ap(aK, T, a9[t], t)
            }
        }
        ar(T, aK)
    };
    var aw = function(t, T) {
        if (h.length != t.length) {
            h = I(t)
        } else {
            ar(h, t)
        }
        if (g.length != t.length) {
            g = I(t)
        }
        c(h, T, g, t)
    };
    var aL = function(T, ba, a9) {
        var t;
        if (n.length != 2 * T.length) {
            n = new Array(2 * T.length)
        }
        y(n, 0);
        for (t = 0; t < ba.length; t++) {
            if (ba[t]) {
                ap(n, T, ba[t], t)
            }
        }
        aw(n, a9);
        ar(T, n)
    };
    var aD = function(bd, T) {
        var bc, ba, a9, be, bb, bf, t;
        for (bb = bd.length; bb > 0 && !bd[bb - 1]; bb--) {}
        t = bb > T.length ? 2 * bb : 2 * T.length;
        if (n.length != t) {
            n = new Array(t)
        }
        y(n, 0);
        for (bc = 0; bc < bb; bc++) {
            be = n[2 * bc] + bd[bc] * bd[bc];
            n[2 * bc] = be & aq;
            be >>= x;
            for (ba = bc + 1; ba < bb; ba++) {
                be = n[bc + ba] + 2 * bd[bc] * bd[ba] + be;
                n[bc + ba] = (be & aq);
                be >>= x
            }
            n[bc + bb] = be
        }
        aw(n, T);
        ar(bd, n)
    };
    var aU = function(T, a9) {
        var t, ba;
        for (t = T.length; t > 0 && !T[t - 1]; t--) {}
        ba = new Array(t + a9);
        ar(ba, T);
        return ba
    };
    var aJ = function(t, bd, bc) {
        var bb, ba, T, a9;
        if (e.length != bc.length) {
            e = I(bc)
        }
        if ((bc[0] & 1) == 0) {
            ar(e, t);
            y(t, 1);
            while (!z(bd, 0)) {
                if (bd[0] & 1) {
                    aL(t, e, bc)
                }
                Z(bd, 2);
                aD(e, bc)
            }
            return
        }
        y(e, 0);
        for (T = bc.length; T > 0 && !bc[T - 1]; T--) {}
        a9 = D - aN(a4(bc, D), D);
        e[T] = 1;
        aL(t, e, bc);
        if (i.length != t.length) {
            i = I(t)
        } else {
            ar(i, t)
        }
        for (bb = bd.length - 1; bb > 0 & !bd[bb]; bb--) {}
        if (bd[bb] == 0) {
            y(t, 1);
            return
        }
        for (ba = 1 << (x - 1); ba && !(bd[bb] & ba); ba >>= 1) {}
        for (;;) {
            if (!(ba >>= 1)) {
                bb--;
                if (bb < 0) {
                    ao(t, o, bc, a9);
                    return
                }
                ba = 1 << (x - 1)
            }
            ao(t, t, bc, a9);
            if (ba & bd[bb]) {
                ao(t, i, bc, a9)
            }
        }
    };
    var ao = function(bf, bc, T, bg) {
        var bb, a9, bh, bd, bi, be;
        var bj = T.length;
        var ba = bc.length;
        if (aS.length != bj) {
            aS = new Array(bj)
        }
        y(aS, 0);
        for (; bj > 0 && T[bj - 1] == 0; bj--) {}
        for (; ba > 0 && bc[ba - 1] == 0; ba--) {}
        be = aS.length - 1;
        for (bb = 0; bb < bj; bb++) {
            bi = aS[0] + bf[bb] * bc[0];
            bd = ((bi & aq) * bg) & aq;
            bh = (bi + bd * T[0]) >> x;
            bi = bf[bb];
            a9 = 1;
            for (; a9 < ba - 4;) {
                bh += aS[a9] + bd * T[a9] + bi * bc[a9];
                aS[a9 - 1] = bh & aq;
                bh >>= x;
                a9++;
                bh += aS[a9] + bd * T[a9] + bi * bc[a9];
                aS[a9 - 1] = bh & aq;
                bh >>= x;
                a9++;
                bh += aS[a9] + bd * T[a9] + bi * bc[a9];
                aS[a9 - 1] = bh & aq;
                bh >>= x;
                a9++;
                bh += aS[a9] + bd * T[a9] + bi * bc[a9];
                aS[a9 - 1] = bh & aq;
                bh >>= x;
                a9++;
                bh += aS[a9] + bd * T[a9] + bi * bc[a9];
                aS[a9 - 1] = bh & aq;
                bh >>= x;
                a9++
            }
            for (; a9 < ba;) {
                bh += aS[a9] + bd * T[a9] + bi * bc[a9];
                aS[a9 - 1] = bh & aq;
                bh >>= x;
                a9++
            }
            for (; a9 < bj - 4;) {
                bh += aS[a9] + bd * T[a9];
                aS[a9 - 1] = bh & aq;
                bh >>= x;
                a9++;
                bh += aS[a9] + bd * T[a9];
                aS[a9 - 1] = bh & aq;
                bh >>= x;
                a9++;
                bh += aS[a9] + bd * T[a9];
                aS[a9 - 1] = bh & aq;
                bh >>= x;
                a9++;
                bh += aS[a9] + bd * T[a9];
                aS[a9 - 1] = bh & aq;
                bh >>= x;
                a9++;
                bh += aS[a9] + bd * T[a9];
                aS[a9 - 1] = bh & aq;
                bh >>= x;
                a9++
            }
            for (; a9 < bj;) {
                bh += aS[a9] + bd * T[a9];
                aS[a9 - 1] = bh & aq;
                bh >>= x;
                a9++
            }
            for (; a9 < be;) {
                bh += aS[a9];
                aS[a9 - 1] = bh & aq;
                bh >>= x;
                a9++
            }
            aS[a9 - 1] = bh & aq
        }
        if (!B(T, aS)) {
            a2(aS, T)
        }
        ar(bf, aS)
    };
    var o = aQ(1, 1, 1);
    return a7
}();
var gdb = function() {
    var k = {};
    var j = "?".charCodeAt(0);
    var e = "A".charCodeAt(0);
    var f = "a".charCodeAt(0);
    var c = "F".charCodeAt(0);
    var a = "f".charCodeAt(0);
    var s = "Z".charCodeAt(0);
    var h = "z".charCodeAt(0);
    var d = "0".charCodeAt(0);
    var b = "9".charCodeAt(0);
    var r = {};
    r["\u20ac".charCodeAt(0)] = 128;
    r["\u201a".charCodeAt(0)] = 130;
    r["\u0192".charCodeAt(0)] = 131;
    r["\u201e".charCodeAt(0)] = 132;
    r["\u2026".charCodeAt(0)] = 133;
    r["\u2020".charCodeAt(0)] = 134;
    r["\u2021".charCodeAt(0)] = 135;
    r["\u02c6".charCodeAt(0)] = 136;
    r["\u2030".charCodeAt(0)] = 137;
    r["\u0160".charCodeAt(0)] = 138;
    r["\u2039".charCodeAt(0)] = 139;
    r["\u0152".charCodeAt(0)] = 140;
    r["\u017d".charCodeAt(0)] = 142;
    r["\u2018".charCodeAt(0)] = 145;
    r["\u2019".charCodeAt(0)] = 146;
    r["\u201c".charCodeAt(0)] = 147;
    r["\u201d".charCodeAt(0)] = 148;
    r["\u2022".charCodeAt(0)] = 149;
    r["\u2013".charCodeAt(0)] = 150;
    r["\u2014".charCodeAt(0)] = 151;
    r["\u02dc".charCodeAt(0)] = 152;
    r["\u2122".charCodeAt(0)] = 153;
    r["\u0161".charCodeAt(0)] = 154;
    r["\u203a".charCodeAt(0)] = 155;
    r["\u0153".charCodeAt(0)] = 156;
    r["\u017e".charCodeAt(0)] = 158;
    r["\u0178".charCodeAt(0)] = 159;
    var o = ["\u20ac".charCodeAt(0), 0, "\u201a".charCodeAt(0), "\u0192".charCodeAt(0), "\u201e".charCodeAt(0), "\u2026".charCodeAt(0), "\u2020".charCodeAt(0), "\u2021".charCodeAt(0), "\u02c6".charCodeAt(0), "\u2030".charCodeAt(0), "\u0160".charCodeAt(0), "\u2039".charCodeAt(0), "\u0152".charCodeAt(0), 0, "\u017d".charCodeAt(0), 0, 0, "\u2018".charCodeAt(0), "\u2019".charCodeAt(0), "\u201c".charCodeAt(0), "\u201d".charCodeAt(0), "\u2022".charCodeAt(0), "\u2013".charCodeAt(0), "\u2014".charCodeAt(0), "\u02dc".charCodeAt(0), "\u2122".charCodeAt(0), "\u0161".charCodeAt(0), "\u203a".charCodeAt(0), "\u0153".charCodeAt(0), 0, "\u017e".charCodeAt(0), "\u0178".charCodeAt(0)];
    var q = function(t) {
        t = t & 255;
        if (t >= 128 && t < 160) {
            if (o[t - 128] === 0) {
                return false
            }
        }
        return true
    };
    k._etx = q;
    var p = function(t) {
        var u;
        if ((t > 0 && t < 128) || (t >= 160 && t <= 255)) {
            u = t
        } else {
            u = r[t]
        }
        if (u === undefined) {
            u = j
        }
        return u
    };
    k._etz = p;
    var n = function(t) {
        var u = t & 255;
        if (u === 0) {
            throw new Error("3181 " + t)
        }
        if (u >= 128 && u < 160) {
            var v = o[u - 128];
            if (v === 0) {
                v = j
            }
            u = v
        }
        return u
    };
    k._eub = n;
    k._euc = function(u) {
        var y = u.length;
        var x = new Array(y);
        for (var t = 0; t < y; t++) {
            var v = u.charCodeAt(t);
            if ((v > 0 && v < 128) || (v >= 160 && v <= 255)) {
                x[t] = v;
                continue
            }
            x[t] = r[v];
            if (x[t] === undefined) {
                x[t] = j
            }
        }
        return x
    };
    var m = k._euc;
    k._eud = function(u) {
        var y = u.length;
        var x = new Uint16Array(y);
        var v = 0;
        for (var t = 0; t < y; t++) {
            var z = u[t] & 255;
            if (z === 0) {
                continue
            }
            if (z >= 128 && z < 160) {
                var A = o[z - 128];
                if (A === 0) {
                    A = j
                }
                z = A
            }
            x[v++] = z
        }
        return String.fromCharCode.apply(undefined, x.subarray(0, v))
    };
    var l = k._eud;
    k._euf = function(z) {
        var x = "";
        var v;
        var y;
        var u;
        var A;
        for (var t = 0; t < z.length; t++) {
            v = z.charAt(t);
            y = v.charCodeAt(0);
            if ((y >= f && y <= h) || (y >= e && y <= s) || v === "." || v === "-" || v === "*" || v === "_") {
                x += v
            } else {
                if (v === " ") {
                    x += "+"
                } else {
                    u = m(v);
                    x += "%";
                    A = (u >> 4) & 15;
                    if (A >= 10) {
                        x += String.fromCharCode(e - 10 + A)
                    } else {
                        x += String.fromCharCode(d + A)
                    }
                    A = u & 15;
                    if (A >= 10) {
                        x += String.fromCharCode(e - 10 + A)
                    } else {
                        x += String.fromCharCode(d + A)
                    }
                }
            }
        }
        return x
    };
    var i = k._euf;
    k._eug = function(A) {
        var v = "";
        var u;
        var z;
        var y;
        var x = A.length;
        for (var t = 0; t < x; t++) {
            u = A.charAt(t);
            if (u === "%" && x > t + 2) {
                u = A.charAt(t + 1);
                z = u.charCodeAt(0);
                y = 0;
                if (z >= f && z <= a) {
                    y = 10 + z - f
                } else {
                    if (z >= e && z <= c) {
                        y = 10 + z - e
                    } else {
                        if (z >= d && z <= b) {
                            y = z - d
                        } else {
                            v += "%";
                            continue
                        }
                    }
                }
                z = z << 4;
                u = A.charAt(t + 2);
                z = u.charCodeAt(0);
                if (z >= f && z <= a) {
                    y += 10 + z - f
                } else {
                    if (z >= e && z <= c) {
                        y += 10 + z - e
                    } else {
                        if (z >= d && z <= b) {
                            y += z - d
                        } else {
                            v += "%";
                            continue
                        }
                    }
                }
                if (y !== 0 && q(y)) {
                    v += (n(y))
                }
            } else {
                if (u === "+") {
                    v += " "
                } else {
                    v += u
                }
            }
        }
        return v
    };
    var g = k._eug;
    return k
}();
var hdo = function() {
    var b = 0;
    var g = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215, 33554431, 67108863, 134217727, 268435455, 536870911, 1073741823, 2147483647, 4294967295 | 0];
    var e = function(h, i, j) {
        this.data = undefined;
        this._oyq = undefined;
        this._oys = 0;
        this._oyt = undefined;
        if (h !== undefined) {
            this.data = new ArrayBuffer(h);
            this._oyq = new Uint8Array(this.data)
        } else {
            if (i !== undefined) {
                this.data = i;
                this._oyq = new Uint8Array(this.data)
            } else {
                throw new Error("3472 ")
            }
        }
        if (j !== undefined) {
            this._oyt = j
        }
    };
    e.prototype.getSize = function() {
        return this.data.byteLength
    };
    e.prototype._erm = function() {
        return this.data.byteLength - this._oys
    };
    e.prototype._loj = function(h) {
        this._oys = h
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
    e.prototype._oyx = function(h) {
        this._oyt = h
    };
    e.prototype._oyz = function(i) {
        for (var h = i; h < this._oys; h++) {
            if (h >= this.data.byteLength) {
                break
            }
            this._oyq[h - i] = this._oyq[h]
        }
        this._oys -= i
    };
    e.prototype._lhh = function(h) {
        this._oyq[this._oys++] = h & 255
    };
    e.prototype._oza = function(h) {
        this._oyq[this._oys++] = (h + this._oyt._rkj()) & 255
    };
    e.prototype._lhi = function(h) {
        this._oyq[this._oys++] = (h >> 8) & 255;
        this._oyq[this._oys++] = h & 255
    };
    e.prototype._lox = function(h) {
        this._oyq[this._oys++] = (h >> 16) & 255;
        this._oyq[this._oys++] = (h >> 8) & 255;
        this._oyq[this._oys++] = h & 255
    };
    e.prototype._loz = function(h) {
        this._oyq[this._oys++] = (h >> 24) & 255;
        this._oyq[this._oys++] = (h >> 16) & 255;
        this._oyq[this._oys++] = (h >> 8) & 255;
        this._oyq[this._oys++] = h & 255
    };
    e.prototype._ozb = function(h) {
        this._loz(h._ncz);
        this._loz(h._nda)
    };
    e.prototype._ozc = function(h) {
        if (h >= 0 && h < 128) {
            this._lhh(h);
            return
        }
        if (h >= 0 && h < 32768) {
            this._lhi(h + 32768);
            return
        }
        throw new Error("3473 " + h)
    };
    e.prototype._oze = function(h) {
        if (h < 64 && h >= -64) {
            this._lhh(h + 64);
            return
        }
        if (h < 16384 && h >= 16384) {
            this._lhi(h + 49152);
            return
        }
        throw new Error("3474 " + h)
    };
    e.prototype._ozg = function(j, i) {
        if (i < 1 || i > 4) {
            throw new Error("3475 " + i)
        }
        i--;
        var h = i * 8;
        while (h >= 0) {
            this._oyq[this._oys++] = j >> h;
            h -= 8
        }
    };
    e.prototype._lpb = function(i) {
        var h = new DataView(this.data);
        var i = h.setFloat32(this._oys, i);
        this._oys += 4
    };
    e.prototype._ozh = function(j, l, i) {
        if (l === undefined) {
            l = 0
        }
        if (i === undefined) {
            i = j.length - l
        }
        if (l + i > j.length) {
            throw new Error("3476 ")
        }
        var k = new DataView(this.data);
        for (var h = l; h < l + i; h++) {
            k.setFloat32(this._oys, j[h]);
            this._oys += 4
        }
    };
    e.prototype._lpd = function(j, i) {
        if (i) {
            this._oyq[this._oys++] = b
        }
        for (var h = 0; h < j.length; h++) {
            this._oyq[this._oys++] = j.charCodeAt(h) & 255
        }
        this._oyq[this._oys++] = 0
    };
    e.prototype._ozj = function(j) {
        var i;
        for (var h = 0; h < j.length; h++) {
            character = j.charCodeAt(h);
            this._oyq[this._oys++] = (character >> 8) & 255;
            this._oyq[this._oys++] = character & 255
        }
        this._oyq[this._oys++] = 0;
        this._oyq[this._oys++] = 0
    };
    e.prototype._lpe = function(k, j, i) {
        var h = new Uint8Array(k, j, i);
        this._oyq.set(h, this._oys);
        this._oys += i
    };
    e.prototype._ozk = function(h) {
        this._oyq[this._oys - h - 1] = h
    };
    e.prototype._ozl = function(h) {
        this._oyq[this._oys - h - 2] = (h >> 8) & 255;
        this._oyq[this._oys - h - 1] = h & 255
    };
    e.prototype._lpi = function() {
        return this._oyq[this._oys++]
    };
    e.prototype._lpj = function() {
        var h = this._oyq[this._oys++];
        return h > 127 ? h - 256 : h
    };
    e.prototype._lpl = function() {
        this._oys += 2;
        return (this._oyq[this._oys - 2] << 8) + this._oyq[this._oys - 1]
    };
    e.prototype._lpm = function() {
        this._oys += 2;
        var h = (this._oyq[this._oys - 2] << 8) + this._oyq[this._oys - 1];
        return h > 32767 ? h - 65536 : h
    };
    e.prototype.g3 = function() {
        this._oys += 3;
        return (this._oyq[this._oys - 3] << 16) + (this._oyq[this._oys - 2] << 8) + this._oyq[this._oys - 1]
    };
    e.prototype._lpn = function() {
        this._oys += 3;
        var h = (this._oyq[this._oys - 3] << 16) + (this._oyq[this._oys - 2] << 8) + this._oyq[this._oys - 1];
        return h > 16777215 ? h - 16777216 : h
    };
    var f = Math.pow(2, 24);
    var a = Math.pow(2, 32);
    var c = Math.pow(2, 40);
    e.prototype._lpp = function() {
        this._oys += 4;
        return (this._oyq[this._oys - 4] * f) + (this._oyq[this._oys - 3] << 16) + (this._oyq[this._oys - 2] << 8) + this._oyq[this._oys - 1]
    };
    e.prototype._lpr = function() {
        this._oys += 4;
        var h = (this._oyq[this._oys - 4] * f) + (this._oyq[this._oys - 3] << 16) + (this._oyq[this._oys - 2] << 8) + this._oyq[this._oys - 1];
        return h > 2147483647 ? h - 4294967296 : h
    };
    e.prototype._ozn = function() {
        this._oys += 5;
        return (this._oyq[this._oys - 5] * a) + (this._oyq[this._oys - 4] * f) + (this._oyq[this._oys - 3] << 16) + (this._oyq[this._oys - 2] << 8) + this._oyq[this._oys - 1]
    };
    e.prototype._ozo = function() {
        this._oys += 6;
        return (this._oyq[this._oys - 6] * c) + (this._oyq[this._oys - 5] * a) + (this._oyq[this._oys - 4] * f) + (this._oyq[this._oys - 3] << 16) + (this._oyq[this._oys - 2] << 8) + this._oyq[this._oys - 1]
    };
    e.prototype._ozq = function() {
        return {
            _ncz: this._lpp(),
            _nda: this._lpp()
        }
    };
    e.prototype._ozr = function() {
        var h = this._oyq[this._oys];
        if (h < 128) {
            return this._lpi()
        } else {
            return this._lpl() - 32768
        }
    };
    e.prototype._ozs = function() {
        var h = (this._oyq[this._oys]) & 255;
        if (h < 128) {
            return false
        }
        return true
    };
    e.prototype._ozt = function() {
        var h = this._oyq[this._oys];
        if (h < 128) {
            return this._lpi() - 64
        } else {
            return this._lpl() - 49152
        }
    };
    e.prototype._ozu = function() {
        var h = this._oyq[this._oys] & 255;
        if (h < 128) {
            return this._lpi() - 1
        } else {
            return this._lpl() - 32769
        }
    };
    e.prototype._ozv = function() {
        var h = (this._oyq[this._oys++] - this._oyt._rkj()) & 255;
        if (h < 128) {
            return h
        }
        return ((h - 128) << 8) + ((this._oyq[this._oys++] - this._oyt._rkj()) & 255)
    };
    e.prototype._ozw = function() {
        var h = (this._oyq[this._oys] - this._oyt._rkk()) & 255;
        if (h < 128) {
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
        var h = this._lpl();
        if (h === 32767) {
            return -1
        } else {
            return h
        }
    };
    e.prototype._paa = function(i) {
        if (i < 1 || i > 4) {
            throw new Error("3477 " + i)
        }
        i--;
        var h = i * 8;
        var j = 0;
        while (h >= 0) {
            j += (this._oyq[this._oys++] & 255) << h;
            h -= 8
        }
        return j
    };
    e.prototype._lpt = function() {
        var i = new DataView(this.data);
        var h = i.getFloat32(this._oys);
        this._oys += 4;
        return h
    };
    e.prototype._pac = function(j, l, i) {
        if (l === undefined) {
            l = 0
        }
        if (i === undefined) {
            i = j.length - l
        }
        var k = new DataView(this.data);
        for (var h = l; h < l + i; h++) {
            j[h] = k.getFloat32(this._oys);
            this._oys += 4
        }
    };
    e.prototype._lpu = function(j) {
        if (j) {
            var h = this._lpi();
            if (h !== b) {
                throw new Error("3478 " + h)
            }
        }
        var i = this._oys;
        while (true) {
            if (this._lpi() === 0) {
                break
            }
        }
        return gdb._eud(new Uint8Array(this.data, i, this._oys - i - 1))
    };
    e.prototype._pae = function(k) {
        if (k) {
            var i = this._lpi();
            if (i !== b) {
                throw new Error("3479 " + i)
            }
        }
        var j = this._oys;
        var l = 0;
        while (true) {
            if (this._lpl() === 0) {
                break
            } else {
                l++
            }
        }
        this._oys = j;
        var m = new Array(l);
        for (var h = 0; h < l; h++) {
            m[h] = String.fromCharCode(gdb._eub(this._lpl()))
        }
        this._oys += 2;
        return m.join("")
    };
    e.prototype._pag = function(k) {
        var i = "";
        var j;
        for (var h = 0; h < k; h++) {
            j = (this._lpi() - this._oyt._rkj()) & 255;
            if (j === 0) {
                return i
            }
            i = i + String.fromCharCode(gdb._eub(j))
        }
        return i
    };
    e.prototype._lpw = function(k, j, i) {
        var h = new Uint8Array(k, j, i);
        h.set(new Uint8Array(this.data, this._oys, i));
        this._oys += i
    };
    e.prototype._pah = function(l, k, j) {
        var i = new Uint8Array(l, k, j);
        for (var h = 0; h < j; h++) {
            i[k + h] = (this._lpi() - this._oyt._rkj()) & 255
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
    e.prototype._pao = function(j) {
        if (j > 31) {
            throw new Error("3480 ")
        }
        var h = this._pam >> 3,
            i = 8 - (this._pam & 7),
            k = 0;
        this._pam += j;
        while (j > i) {
            k += (this._oyq[h++] & g[i]) << (j - i);
            j -= i;
            i = 8
        }
        if (j === i) {
            k += this._oyq[h] & g[i]
        } else {
            k += (this._oyq[h] >> (i - j)) & g[j]
        }
        return k
    };
    e.prototype._pap = function(h) {
        return h * 8 - this._pam
    };
    e.prototype._par = function() {
        this._oys = Math.floor((this._pam + 7) / 8)
    };
    e.prototype._pas = function(q, r) {
        var l = "";
        for (var o = 0; o < this._oys; o++) {
            l += ((this._oyq[o] >> 4) & 15).toString(16);
            l += (this._oyq[o] & 15).toString(16)
        }
        var j = guj._plr(l, 16, 0);
        var h = guj._plo(j, q, r);
        var i = guj._plt(h, 16);
        this._oys = 0;
        if ((i.length % 2) !== 0) {
            i = "0" + i
        } else {
            if (i.length > 0 && parseInt(i[0], 16) >= 8) {
                i = "00" + i
            }
        }
        var p = i.length / 2;
        this._lhi(p);
        for (var o = 0; o < p; o++) {
            var n = i.charAt(o * 2);
            var k = i.charAt(o * 2 + 1);
            this._lhh((parseInt(n, 16) << 4) | parseInt(k, 16))
        }
    };
    e.prototype._pau = function(r, h, k) {
        var l = this._oys;
        this._oys = h;
        var s = Math.floor((k - h) / 8);
        for (var j = 0; j < s; j++) {
            var p = this._lpr();
            var i = this._lpr();
            var m = 0;
            var q = 2654435769;
            var o = 32;
            while (o-- > 0) {
                p += (i << 4 ^ i >>> 5) + i ^ m + r[m & 3];
                m += q;
                i += (p << 4 ^ p >>> 5) + p ^ m + r[m >>> 11 & 3]
            }
            this._oys -= 8;
            this._loz(p);
            this._loz(i)
        }
        this._oys = l
    };
    e.prototype._paw = function(r, h, k) {
        var l = this._oys;
        this._oys = h;
        var s = Math.floor((k - h) / 8);
        for (var j = 0; j < s; j++) {
            var p = this._lpr();
            var i = this._lpr();
            var m = 3337565984;
            var q = 2654435769;
            var o = 32;
            while (o-- > 0) {
                i -= (p << 4 ^ p >>> 5) + p ^ m + r[m >>> 11 & 3];
                m -= q;
                p -= (i << 4 ^ i >>> 5) + i ^ m + r[m & 3]
            }
            this._oys -= 8;
            this._loz(p);
            this._loz(i)
        }
        this._oys = l
    };
    e.prototype.print = function() {
        for (var h = 0; h < this._oys; h++) {
            console.log(h + ": " + this._oyq[h])
        }
    };
    e.prototype._pax = function(h) {
        this._oyq[this._oys++] = (h + 128) & 255
    };
    e.prototype._pay = function(h) {
        this._oyq[this._oys++] = (0 - h) & 255
    };
    e.prototype._pba = function(h) {
        this._oyq[this._oys++] = (128 - h) & 255
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
        var h = (this._oyq[this._oys++] - 128) & 255;
        return h > 127 ? h - 256 : h
    };
    e.prototype._pbh = function() {
        var h = (0 - this._oyq[this._oys++]) & 255;
        return h > 127 ? h - 256 : h
    };
    e.prototype._pbi = function() {
        var h = (128 - this._oyq[this._oys++]) & 255;
        return h > 127 ? h - 256 : h
    };
    e.prototype._pbk = function(h) {
        this._oyq[this._oys++] = h & 255;
        this._oyq[this._oys++] = (h >> 8) & 255
    };
    e.prototype._pbl = function(h) {
        this._oyq[this._oys++] = (h >> 8) & 255;
        this._oyq[this._oys++] = (h + 128) & 255
    };
    e.prototype._pbn = function(h) {
        this._oyq[this._oys++] = (h + 128) & 255;
        this._oyq[this._oys++] = (h >> 8) & 255
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
        var h = (this._oyq[this._oys - 1] << 8) + this._oyq[this._oys - 2];
        return h > 32767 ? h - 65536 : h
    };
    e.prototype._pbx = function() {
        this._oys += 2;
        var h = (this._oyq[this._oys - 2] << 8) + ((this._oyq[this._oys - 1] - 128) & 255);
        return h > 32767 ? h - 65536 : h
    };
    e.prototype._pbz = function() {
        this._oys += 2;
        var h = (this._oyq[this._oys - 1] << 8) + ((this._oyq[this._oys - 2] - 128) & 255);
        return h > 32767 ? h - 65536 : h
    };
    e.prototype._pca = function(h) {
        this._oyq[this._oys++] = (h) & 255;
        this._oyq[this._oys++] = (h >> 8) & 255;
        this._oyq[this._oys++] = (h >> 16) & 255
    };
    e.prototype._pcc = function(h) {
        this._oyq[this._oys++] = (h >> 16) & 255;
        this._oyq[this._oys++] = (h) & 255;
        this._oyq[this._oys++] = (h >> 8) & 255
    };
    e.prototype._pcd = function(h) {
        this._oyq[this._oys++] = (h >> 8) & 255;
        this._oyq[this._oys++] = (h >> 16) & 255;
        this._oyq[this._oys++] = (h) & 255
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
        var h = ((this._oyq[this._oys - 1] & 255) << 16) + ((this._oyq[this._oys - 2] & 255) << 8) + (this._oyq[this._oys - 3] & 255);
        return h > 16777215 ? h - 16777216 : h
    };
    e.prototype._pcm = function() {
        this._oys += 3;
        var h = ((this._oyq[this._oys - 3] & 255) << 16) + ((this._oyq[this._oys - 1] & 255) << 8) + (this._oyq[this._oys - 2] & 255);
        return h > 16777215 ? h - 16777216 : h
    };
    e.prototype._pco = function() {
        this._oys += 3;
        var h = ((this._oyq[this._oys - 2] & 255) << 16) + ((this._oyq[this._oys - 3] & 255) << 8) + (this._oyq[this._oys - 1] & 255);
        return h > 16777215 ? h - 16777216 : h
    };
    e.prototype._pcp = function(h) {
        this._oyq[this._oys++] = (h) & 255;
        this._oyq[this._oys++] = (h >> 8) & 255;
        this._oyq[this._oys++] = (h >> 16) & 255;
        this._oyq[this._oys++] = (h >> 24) & 255
    };
    e.prototype._pcq = function(h) {
        this._oyq[this._oys++] = (h >> 8) & 255;
        this._oyq[this._oys++] = (h) & 255;
        this._oyq[this._oys++] = (h >> 24) & 255;
        this._oyq[this._oys++] = (h >> 16) & 255
    };
    e.prototype._pcs = function(h) {
        this._oyq[this._oys++] = (h >> 16) & 255;
        this._oyq[this._oys++] = (h >> 24) & 255;
        this._oyq[this._oys++] = (h) & 255;
        this._oyq[this._oys++] = (h >> 8) & 255
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
        var h = ((this._oyq[this._oys - 1] & 255) << 24) + ((this._oyq[this._oys - 2] & 255) << 16) + ((this._oyq[this._oys - 3] & 255) << 8) + (this._oyq[this._oys - 4] & 255);
        return h > 2147483647 ? h - 4294967296 : h
    };
    e.prototype._pda = function() {
        this._oys += 4;
        var h = ((this._oyq[this._oys - 2] & 255) << 24) + ((this._oyq[this._oys - 1] & 255) << 16) + ((this._oyq[this._oys - 4] & 255) << 8) + (this._oyq[this._oys - 3] & 255);
        return h > 2147483647 ? h - 4294967296 : h
    };
    e.prototype._pdc = function() {
        this._oys += 4;
        var h = ((this._oyq[this._oys - 3] & 255) << 24) + ((this._oyq[this._oys - 4] & 255) << 16) + ((this._oyq[this._oys - 1] & 255) << 8) + (this._oyq[this._oys - 2] & 255);
        return h > 2147483647 ? h - 4294967296 : h
    };
    e.prototype._pdd = function(h) {
        this._pcp(h._ncz);
        this._pcp(h._nda)
    };
    e.prototype._pdf = function(h) {
        this._pcq(h._ncz);
        this._pcq(h._nda)
    };
    e.prototype._pdh = function(h) {
        this._pcs(h._ncz);
        this._pcs(h._nda)
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
    e.prototype._pdn = function(k, j, i) {
        var h = new Uint8Array(k);
        for (var l = j + i - 1; l >= j; l--) {
            this._oyq[this._oys++] = h[l]
        }
    };
    e.prototype._pdo = function(k, j, i) {
        var h = new Uint8Array(k);
        for (var l = j; l < j + i; l++) {
            this._oyq[this._oys++] = (h[l] + 128) & 255
        }
    };
    e.prototype._pdp = function(k, j, i) {
        var h = new Uint8Array(k);
        for (var l = j + i - 1; l >= j; l--) {
            this._oyq[this._oys++] = (h[l] + 128) & 255
        }
    };
    e.prototype._pdq = function(l, k, j) {
        var i = new Uint8Array(l, k, j);
        for (var h = j - 1; h >= 0; h--) {
            i[h] = this._oyq[this._oys++]
        }
    };
    e.prototype._pdr = function(l, k, j) {
        var i = new Uint8Array(l, k, j);
        for (var h = 0; h < j; h++) {
            i[h] = (this._oyq[this._oys++] - 128) & 255
        }
    };
    e.prototype._pds = function(l, k, j) {
        var i = new Uint8Array(l, k, j);
        for (var h = j - 1; h >= 0; h--) {
            i[h] = (this._oyq[this._oys++] - 128) & 255
        }
    };
    var d = function(h, i, j) {
        return new e(h, i, j)
    };
    d._lqa = function(i, h) {
        return i.length + (h ? 1 : 0) + 1
    };
    d._pdt = function(h) {
        return h.length * 2 + 2
    };
    return d
}();
var gcc = function() {
    var b = 1;
    var a = {};
    a._rdi = function(o, f, h, d) {
        o._loj(h - 1);
        var l = o._lpi();
        var e = h - 1 - (d * l * 4);
        o._loj(e);
        var p = new Array(d);
        var s;
        for (var m = 0; m < l; m++) {
            s = 0;
            for (var k = 0; k < d; k++) {
                s += o._lpr();
                if (p[k] === undefined) {
                    p[k] = s
                } else {
                    p[k] += s
                }
            }
        }
        var n = 1;
        n += 4 * d;
        n += 4;
        var q = n;
        for (var m = 0; m < d; m++) {
            q += p[m]
        }
        var r = hdo(q);
        var c = new Int32Array(d);
        r._lhh(b);
        var g = n;
        for (var m = 0; m < d; m++) {
            c[m] = g;
            r._loz(g);
            g += p[m]
        }
        r._loz(g);
        o._loj(e);
        var i = f;
        for (m = 0; m < l; m++) {
            s = 0;
            for (k = 0; k < d; k++) {
                s += o._lpr();
                r._loj(c[k]);
                r._lpe(o.getData(), i, s);
                c[k] += s;
                i += s
            }
        }
        return r.getData()
    };
    a._rdk = function(f, j) {
        var i = f._loi();
        var e = f._lpi();
        if (e > b) {
            throw new Error("3591 " + e)
        }
        f._loj(i + 1 + 4 * j);
        var g = f._lpp();
        var d = f._lpp();
        var h = d - g;
        var c = new ArrayBuffer(h);
        f._loj(i + g);
        f._lpw(c, 0, h);
        return c
    };
    return a
}();
var hak = function() {
    var a = {};
    a._ryn = (function() {
        function j() {
            this._oys = 0;
            this._ryo = 0;
            this._ryq = false;
            this.buffer = null
        }
        j.prototype = {
            _rys: function h(p) {
                var m = this.buffer;
                var o = m ? m.byteLength : 0;
                if (p < o) {
                    return m
                }
                var n = 512;
                while (n < p) {
                    n <<= 1
                }
                var l = new Uint8Array(n);
                for (var k = 0; k < o; ++k) {
                    l[k] = m[k]
                }
                return this.buffer = l
            },
            _ryu: function b() {
                var k = this._oys;
                while (this._ryo <= k) {
                    if (this._ryq) {
                        return null
                    }
                    this._rzk()
                }
                return this.buffer[this._oys++]
            },
            _ryw: function i(n) {
                var m = this._oys;
                if (n) {
                    this._rys(m + n);
                    var l = m + n;
                    while (!this._ryq && this._ryo < l) {
                        this._rzk()
                    }
                    var k = this._ryo;
                    if (l > k) {
                        l = k
                    }
                } else {
                    while (!this._ryq) {
                        this._rzk()
                    }
                    var l = this._ryo
                }
                this._oys = l;
                return this.buffer.subarray(m, l)
            },
            _ryy: function f() {
                var k = this._oys;
                while (this._ryo <= k) {
                    if (this._ryq) {
                        return null
                    }
                    this._rzk()
                }
                return String.fromCharCode(this.buffer[this._oys])
            },
            _rza: function c() {
                var k = this._oys;
                while (this._ryo <= k) {
                    if (this._ryq) {
                        return null
                    }
                    this._rzk()
                }
                return String.fromCharCode(this.buffer[this._oys++])
            },
            _rzb: function e(n, l, m) {
                var k = n + l;
                while (this._ryo <= k && !this._ryq) {
                    this._rzk()
                }
                return new Stream(this.buffer, n, l, m)
            },
            skip: function d(k) {
                if (!k) {
                    k = 1
                }
                this._oys += k
            },
            _yh: function g() {
                this._oys = 0
            }
        };
        return j
    })();
    a._rzd = (function() {
        var g = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
        var c = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]);
        var e = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]);
        var b = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 590000, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9];
        var f = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];

        function d(i) {
            var k = 0;
            var j = i[k++];
            var h = i[k++];
            if (j == -1 || h == -1) {
                throw new Error("3619 ")
            }
            if ((j & 15) != 8) {
                throw new Error("3620 ")
            }
            if ((((j << 8) + h) % 31) != 0) {
                throw new Error("3621 ")
            }
            if (h & 32) {
                throw new Error("3622 ")
            }
            this.bytes = i;
            this.bytesPos = k;
            this.codeSize = 0;
            this.codeBuf = 0;
            return a._ryn.call(this)
        }
        d.prototype = Object.create(a._ryn.prototype);
        d.prototype._rzf = function(l) {
            var j = this.codeSize;
            var k = this.codeBuf;
            var i = this.bytes;
            var m = this.bytesPos;
            var h;
            while (j < l) {
                if (typeof(h = i[m++]) == "undefined") {
                    throw new Error("3623 ")
                }
                k |= h << j;
                j += 8
            }
            h = k & ((1 << l) - 1);
            this.codeBuf = k >> l;
            this.codeSize = j -= l;
            this.bytesPos = m;
            return h
        };
        d.prototype._rzh = function(o) {
            var h = o[0];
            var i = o[1];
            var l = this.codeSize;
            var p = this.codeBuf;
            var r = this.bytes;
            var m = this.bytesPos;
            while (l < i) {
                var n;
                if (typeof(n = r[m++]) == "undefined") {
                    throw new Error("3624 ")
                }
                p |= (n << l);
                l += 8
            }
            var k = h[p & ((1 << i) - 1)];
            var j = k >> 16;
            var q = k & 65535;
            if (l == 0 || l < j || j == 0) {
                throw new Error("3625 ")
            }
            this.codeBuf = (p >> j);
            this.codeSize = (l - j);
            this.bytesPos = m;
            return q
        };
        d.prototype._rzi = function(k) {
            var j = k.length;
            var l = 0;
            for (var o = 0; o < j; ++o) {
                if (k[o] > l) {
                    l = k[o]
                }
            }
            var u = 1 << l;
            var h = new Uint32Array(u);
            for (var r = 1, m = 0, q = 2; r <= l; ++r, m <<= 1, q <<= 1) {
                for (var i = 0; i < j; ++i) {
                    if (k[i] == r) {
                        var p = 0;
                        var s = m;
                        for (var o = 0; o < r; ++o) {
                            p = (p << 1) | (s & 1);
                            s >>= 1
                        }
                        for (var o = p; o < u; o += q) {
                            h[o] = (r << 16) | i
                        }++m
                    }
                }
            }
            return [h, l]
        };
        d.prototype._rzk = function() {
            function v(P, Q, n, O, N) {
                var M = P._rzf(n) + O;
                while (M-- > 0) {
                    Q[L++] = N
                }
            }
            var j = this._rzf(3);
            if (j & 1) {
                this._ryq = true
            }
            j >>= 1;
            if (j == 0) {
                var B = this.bytes;
                var t = this.bytesPos;
                var J;
                if (typeof(J = B[t++]) == "undefined") {
                    throw new Error("3626 ")
                }
                var E = J;
                if (typeof(J = B[t++]) == "undefined") {
                    throw new Error("3627 ")
                }
                E |= (J << 8);
                if (typeof(J = B[t++]) == "undefined") {
                    throw new Error("3628 ")
                }
                var I = J;
                if (typeof(J = B[t++]) == "undefined") {
                    throw new Error("3629 ")
                }
                I |= (J << 8);
                if (I != (~E & 65535)) {
                    throw new Error("3630 ")
                }
                this.codeBuf = 0;
                this.codeSize = 0;
                var i = this._ryo;
                var F = this._rys(i + E);
                var k = i + E;
                this._ryo = k;
                for (var C = i; C < k; ++C) {
                    if (typeof(J = B[t++]) == "undefined") {
                        this._ryq = true;
                        break
                    }
                    F[C] = J
                }
                this.bytesPos = t;
                return
            }
            var r;
            var s;
            if (j == 1) {
                r = b;
                s = f
            } else {
                if (j == 2) {
                    var K = this._rzf(5) + 257;
                    var y = this._rzf(5) + 1;
                    var h = this._rzf(4) + 4;
                    var l = Array(g.length);
                    var L = 0;
                    while (L < h) {
                        l[g[L++]] = this._rzf(3)
                    }
                    var A = this._rzi(l);
                    var u = 0;
                    var L = 0;
                    var H = K + y;
                    var G = new Array(H);
                    while (L < H) {
                        var D = this._rzh(A);
                        if (D == 16) {
                            v(this, G, 2, 3, u)
                        } else {
                            if (D == 17) {
                                v(this, G, 3, 3, u = 0)
                            } else {
                                if (D == 18) {
                                    v(this, G, 7, 11, u = 0)
                                } else {
                                    G[L++] = u = D
                                }
                            }
                        }
                    }
                    r = this._rzi(G.slice(0, K));
                    s = this._rzi(G.slice(K, H))
                } else {
                    throw new Error("3631 ")
                }
            }
            var F = this.buffer;
            var z = F ? F.length : 0;
            var q = this._ryo;
            while (true) {
                var p = this._rzh(r);
                if (p < 256) {
                    if (q + 1 >= z) {
                        F = this._rys(q + 1);
                        z = F.length
                    }
                    F[q++] = p;
                    continue
                }
                if (p == 256) {
                    this._ryo = q;
                    return
                }
                p -= 257;
                p = c[p];
                var o = p >> 16;
                if (o > 0) {
                    o = this._rzf(o)
                }
                var u = (p & 65535) + o;
                p = this._rzh(s);
                p = e[p];
                o = p >> 16;
                if (o > 0) {
                    o = this._rzf(o)
                }
                var m = (p & 65535) + o;
                if (q + u >= z) {
                    F = this._rys(q + u);
                    z = F.length
                }
                for (var x = 0; x < u; ++x, ++q) {
                    F[q] = F[q - m]
                }
            }
        };
        return d
    })();
    return a
}();
var has = function() {
    var a = function() {
        var L = {};
        var E = 4096;
        var l = 16;
        var C = 258;
        var b = 6;
        var x = 50;
        var M = (2 + (900000 / x));
        L._gil = null;
        var G = L._gil;
        L._gin = 0;
        var F = L._gin;
        L._gis = null;
        var A = L._gis;
        L._giy = null;
        var u = L._giy;
        L._giz = null;
        var t = L._giz;
        L._gip = null;
        var D = L._gip;
        L._gir = 0;
        var B = L._gir;
        L._git = null;
        var z = L._git;
        L._gjb = null;
        var s = L._gjb;
        L._gjc = null;
        var r = L._gjc;
        L._gjn = null;
        var j = L._gjn;
        L._gjm = null;
        var k = L._gjm;
        L._gjg = null;
        var n = L._gjg;
        L._gix = null;
        var v = L._gix;
        L._giv = null;
        var y = L._giv;
        L._gje = null;
        var p = L._gje;
        L._gjd = null;
        var q = L._gjd;
        L._gji = null;
        var m = L._gji;
        L._gjp = null;
        var i = L._gjp;
        L._gjs = null;
        var f = L._gjs;
        L._mci = new Uint32Array(new ArrayBuffer(256 * 4));
        var W = L._mci;
        L._gjq = null;
        var h = L._gjq;
        L._mcj = new Uint32Array(new ArrayBuffer(257 * 4));
        var V = L._mcj;
        L._mck = new Uint32Array(new ArrayBuffer(257 * 4));
        var U = L._mck;
        L._gjf = null;
        var o = L._gjf;
        L._gjy = null;
        var d = L._gjy;
        L._mcl = new Uint8Array(new ArrayBuffer(256));
        var T = L._mcl;
        L._mcn = new Uint8Array(new ArrayBuffer(16));
        var S = L._mcn;
        L._mcp = new Uint8Array(new ArrayBuffer(256));
        var R = L._mcp;
        var c;
        L._mcq = new Uint8Array(new ArrayBuffer(E));
        var Q = L._mcq;
        L._mcs = new Uint32Array(new ArrayBuffer(4 * 256 / l));
        var O = L._mcs;
        L._mcu = new Uint8Array(new ArrayBuffer(M));
        var N = L._mcu;
        L._mcw = new Uint8Array(new ArrayBuffer(M));
        var K = L._mcw;
        L._ein = new Array(b);
        for (c = 0; c < b; c++) {
            L._ein[c] = new Uint8Array(new ArrayBuffer(C))
        }
        var P = L._ein;
        L._mcy = new Array(b);
        for (c = 0; c < b; c++) {
            L._mcy[c] = new Uint32Array(new ArrayBuffer(C * 4))
        }
        var J = L._mcy;
        L._cue = new Array(b);
        for (c = 0; c < b; c++) {
            L._cue[c] = new Uint32Array(new ArrayBuffer(C * 4))
        }
        var g = L._cue;
        L._mcz = new Array(b);
        for (c = 0; c < b; c++) {
            L._mcz[c] = new Uint32Array(new ArrayBuffer(C * 4))
        }
        var I = L._mcz;
        L._mdb = new Uint32Array(new ArrayBuffer(b * 4));
        var H = L._mdb;
        L._gju = null;
        var e = L._gju;
        return L
    };
    return a
}();
var hec = function() {
    var p = {};
    var u = 1;
    var i = 2;
    var l = 10;
    var n = 14;
    var A = 0;
    var o = 4;
    var g = 4096;
    var z = 16;
    var v = 258;
    var k = 23;
    var f = 0;
    var d = 1;
    var t = 6;
    var m = 50;
    var c = 4;
    var x = (2 + (900000 / m));
    var a = has();
    p._fqk = function(C, D, F, B, E) {
        a._gil = new Uint8Array(F);
        a._gin = E;
        a._gip = new Uint8Array(C);
        a._gir = 0;
        a._gis = B;
        a._git = D;
        a._giv = 0;
        a._gix = 0;
        a._giy = 0;
        a._giz = 0;
        a._gjb = 0;
        a._gjc = 0;
        a._gjd = 0;
        b(a);
        D -= a._git;
        a._gil = null;
        a._gip = null;
        return D
    };
    var s = p._fqk;
    var b = function(T) {
        var aa;
        var Z, C;
        var F = 0;
        var ag = 0;
        var ab = 0;
        var I = 0;
        var al = 0;
        var ac = 0;
        var S = 0;
        var G = 0;
        var ah = 0;
        var ai = 0;
        var am = 0;
        var af = 0;
        var L = 0;
        var Y = 0;
        var B = 0;
        var O = 0;
        var D = 0;
        var U = 0;
        var ad = 0;
        var N = null;
        var E = null;
        var V = null;
        T._gje = 1;
        if (T._gjf === null) {
            T._gjf = new Uint32Array(new ArrayBuffer((T._gje * 100000) * 4))
        }
        var H = true;
        while (H) {
            aa = y(T);
            if (aa == 23) {
                return
            }
            aa = y(T);
            aa = y(T);
            aa = y(T);
            aa = y(T);
            aa = y(T);
            T._gjd++;
            aa = y(T);
            aa = y(T);
            aa = y(T);
            aa = y(T);
            aa = q(T);
            if (aa != 0) {
                T._gjg = true
            } else {
                T._gjg = false
            }
            if (false) {}
            T._gji = 0;
            aa = y(T);
            T._gji = (T._gji << 8) | (aa & 255);
            aa = y(T);
            T._gji = (T._gji << 8) | (aa & 255);
            aa = y(T);
            T._gji = (T._gji << 8) | (aa & 255);
            for (F = 0; F < 16; F++) {
                aa = q(T);
                if (aa == 1) {
                    T._mcn[F] = true
                } else {
                    T._mcn[F] = false
                }
            }
            for (F = 0; F < 256; F++) {
                T._mcl[F] = false
            }
            for (F = 0; F < 16; F++) {
                if (T._mcn[F]) {
                    for (ag = 0; ag < 16; ag++) {
                        aa = q(T);
                        if (aa == 1) {
                            T._mcl[F * 16 + ag] = true
                        }
                    }
                }
            }
            h(T);
            I = T._gjy + 2;
            al = j(3, T);
            ac = j(15, T);
            for (F = 0; F < ac; F++) {
                ag = 0;
                while (true) {
                    aa = q(T);
                    if (aa == 0) {
                        break
                    }
                    ag++
                }
                T._mcw[F] = ag & 255
            }
            var Q = new Uint8Array(new ArrayBuffer(t));
            var ae, R;
            for (R = 0; R < al; R++) {
                Q[R] = R
            }
            for (F = 0; F < ac; F++) {
                R = T._mcw[F];
                ae = Q[R];
                while (R > 0) {
                    Q[R] = Q[R - 1];
                    R--
                }
                Q[0] = ae;
                T._mcu[F] = ae
            }
            for (ab = 0; ab < al; ab++) {
                Y = j(5, T);
                for (F = 0; F < I; F++) {
                    while (true) {
                        aa = q(T);
                        if (aa == 0) {
                            break
                        }
                        aa = q(T);
                        if (aa == 0) {
                            Y++
                        } else {
                            Y--
                        }
                    }
                    T._ein[ab][F] = Y
                }
            }
            for (ab = 0; ab < al; ab++) {
                Z = 32;
                C = 0;
                for (F = 0; F < I; F++) {
                    if (T._ein[ab][F] > C) {
                        C = T._ein[ab][F]
                    }
                    if (T._ein[ab][F] < Z) {
                        Z = T._ein[ab][F]
                    }
                }
                e(T._mcy[ab], T._cue[ab], T._mcz[ab], T._ein[ab], Z, C, I);
                T._mdb[ab] = Z
            }
            S = T._gjy + 1;
            G = -1;
            ah = 0;
            for (F = 0; F <= 255; F++) {
                T._mci[F] = 0
            }
            var W, K, ak;
            ak = g - 1;
            for (W = 256 / z - 1; W >= 0; W--) {
                for (K = z - 1; K >= 0; K--) {
                    T._mcq[ak] = (W * z + K) & 255;
                    ak--
                }
                T._mcs[W] = ak + 1
            }
            am = 0;
            if (ah == 0) {
                G++;
                ah = m;
                U = T._mcu[G];
                ad = T._mdb[U];
                N = T._mcy[U];
                V = T._mcz[U];
                E = T._cue[U]
            }
            ah--;
            B = ad;
            O = j(B, T);
            while (true) {
                if (O <= N[B]) {
                    break
                }
                B++;
                D = q(T);
                O = (O << 1) | D
            }
            ai = V[O - E[B]];
            while (true) {
                if (ai == S) {
                    break
                }
                if (ai == f || ai == d) {
                    af = -1;
                    L = 1;
                    do {
                        if (ai == f) {
                            af = af + (0 + 1) * L
                        } else {
                            if (ai == d) {
                                af = af + (1 + 1) * L
                            }
                        }
                        L = L * 2;
                        if (ah == 0) {
                            G++;
                            ah = m;
                            U = T._mcu[G];
                            ad = T._mdb[U];
                            N = T._mcy[U];
                            V = T._mcz[U];
                            E = T._cue[U]
                        }
                        ah--;
                        B = ad;
                        O = j(B, T);
                        while (true) {
                            if (O <= N[B]) {
                                break
                            }
                            B++;
                            D = q(T);
                            O = (O << 1) | D
                        }
                        ai = V[O - E[B]]
                    } while (ai == f || ai == d);
                    af++;
                    aa = T._mcp[T._mcq[T._mcs[0]] & 255];
                    T._mci[aa & 255] += af;
                    while (af > 0) {
                        T._gjf[am] = aa & 255;
                        am++;
                        af--
                    }
                    continue
                } else {
                    var W, K, ak, J, P, M;
                    var aj;
                    aj = ai - 1;
                    if (aj < z) {
                        J = T._mcs[0];
                        aa = T._mcq[J + aj];
                        while (aj > 3) {
                            var X = J + aj;
                            T._mcq[X] = T._mcq[X - 1];
                            T._mcq[X - 1] = T._mcq[X - 2];
                            T._mcq[X - 2] = T._mcq[X - 3];
                            T._mcq[X - 3] = T._mcq[X - 4];
                            aj -= 4
                        }
                        while (aj > 0) {
                            T._mcq[(J + aj)] = T._mcq[(J + aj) - 1];
                            aj--
                        }
                        T._mcq[J] = aa
                    } else {
                        P = Math.floor(aj / z);
                        M = aj % z;
                        J = T._mcs[P] + M;
                        aa = T._mcq[J];
                        while (J > T._mcs[P]) {
                            T._mcq[J] = T._mcq[J - 1];
                            J--
                        }
                        T._mcs[P]++;
                        while (P > 0) {
                            T._mcs[P]--;
                            T._mcq[T._mcs[P]] = T._mcq[T._mcs[P - 1] + z - 1];
                            P--
                        }
                        T._mcs[0]--;
                        T._mcq[T._mcs[0]] = aa;
                        if (T._mcs[0] == 0) {
                            ak = g - 1;
                            for (W = 256 / z - 1; W >= 0; W--) {
                                for (K = z - 1; K >= 0; K--) {
                                    T._mcq[ak] = T._mcq[T._mcs[W] + K];
                                    ak--
                                }
                                T._mcs[W] = ak + 1
                            }
                        }
                    }
                    T._mci[T._mcp[aa & 255] & 255]++;
                    T._gjf[am] = T._mcp[aa & 255] & 255;
                    am++;
                    if (ah == 0) {
                        G++;
                        ah = m;
                        U = T._mcu[G];
                        ad = T._mdb[U];
                        N = T._mcy[U];
                        V = T._mcz[U];
                        E = T._cue[U]
                    }
                    ah--;
                    B = ad;
                    O = j(B, T);
                    while (true) {
                        if (O <= N[B]) {
                            break
                        }
                        B++;
                        D = q(T);
                        O = (O << 1) | D
                    }
                    ai = V[O - E[B]];
                    continue
                }
            }
            T._gjm = 0;
            T._gjn = 0;
            T._mcj[0] = 0;
            for (F = 1; F <= 256; F++) {
                T._mcj[F] = T._mci[F - 1]
            }
            for (F = 1; F <= 256; F++) {
                T._mcj[F] += T._mcj[F - 1]
            }
            for (F = 0; F < am; F++) {
                aa = (T._gjf[F] & 255);
                T._gjf[T._mcj[aa & 255]] |= (F << 8);
                T._mcj[aa & 255]++
            }
            T._gjp = T._gjf[T._gji] >> 8;
            T._gjq = 0;
            T._gjp = T._gjf[T._gjp];
            T._gjs = (T._gjp & 255);
            T._gjp >>= 8;
            T._gjq++;
            T._gju = am;
            r(T);
            if (T._gjq == T._gju + 1 && T._gjm == 0) {
                H = true
            } else {
                H = false
            }
        }
        return
    };
    var r = function(N) {
        var I;
        var G = N._gjn;
        var B = N._gjm;
        var D = N._gjq;
        var F = N._gjs;
        var E = N._gjf;
        var J = N._gjp;
        var M = N._gip;
        var K = N._gir;
        var C = N._git;
        var L = C;
        var O = N._gju + 1;
        var H;
        _gjw: while (true) {
            if (B > 0) {
                while (true) {
                    if (C == 0) {
                        break _gjw
                    }
                    if (B == 1) {
                        break
                    }
                    M[K] = G;
                    B--;
                    K++;
                    C--
                }
                if (C == 0) {
                    B = 1;
                    break _gjw
                }
                M[K] = G;
                K++;
                C--
            }
            while (true) {
                if (D == O) {
                    B = 0;
                    break _gjw
                }
                G = F & 255;
                J = E[J];
                I = J & 255;
                J >>= 8;
                D++;
                if (I != F) {
                    F = I;
                    if (C == 0) {
                        B = 1;
                        break _gjw
                    }
                    M[K] = G;
                    K++;
                    C--;
                    continue
                }
                if (D == O) {
                    if (C == 0) {
                        B = 1;
                        break _gjw
                    }
                    M[K] = G;
                    K++;
                    C--;
                    continue
                }
                break
            }
            B = 2;
            J = E[J];
            I = J & 255;
            J >>= 8;
            D++;
            if (D == O) {
                continue
            }
            if (I != F) {
                F = I;
                continue
            }
            B = 3;
            J = E[J];
            I = J & 255;
            J >>= 8;
            D++;
            if (D == O) {
                continue
            }
            if (I != F) {
                F = I;
                continue
            }
            J = E[J];
            I = J & 255;
            J >>= 8;
            D++;
            B = (I & 255) + 4;
            J = E[J];
            F = J & 255;
            J >>= 8;
            D++
        }
        H = N._gjb;
        N._gjb += (L - C);
        if (N._gjb < H) {
            N._gjc++
        }
        N._gjn = G;
        N._gjm = B;
        N._gjq = D;
        N._gjs = F;
        N._gjf = E;
        N._gjp = J;
        N._gip = M;
        N._gir = K;
        N._git = C
    };
    var y = function(B) {
        return j(8, B)
    };
    var q = function(B) {
        return j(1, B)
    };
    var j = function(D, C) {
        while (true) {
            if (C._giv >= D) {
                var B;
                B = (C._gix >> (C._giv - D)) & ((1 << D) - 1);
                C._giv -= D;
                return B
            }
            C._gix = (C._gix << 8) | (C._gil[C._gin] & 255);
            C._giv += 8;
            C._gin++;
            C._gis--;
            C._giy++;
            if (C._giy == 0) {
                C._giz++
            }
        }
    };
    var h = function(C) {
        var B;
        C._gjy = 0;
        for (B = 0; B < 256; B++) {
            if (C._mcl[B]) {
                C._mcp[C._gjy] = B & 255;
                C._gjy++
            }
        }
    };
    var e = function(F, L, D, C, G, H, B) {
        var E, K, I, J;
        E = 0;
        for (K = G; K <= H; K++) {
            for (I = 0; I < B; I++) {
                if (C[I] == K) {
                    D[E] = I;
                    E++
                }
            }
        }
        for (K = 0; K < k; K++) {
            L[K] = 0
        }
        for (K = 0; K < B; K++) {
            L[C[K] + 1]++
        }
        for (K = 1; K < k; K++) {
            L[K] += L[K - 1]
        }
        for (K = 0; K < k; K++) {
            F[K] = 0
        }
        J = 0;
        for (K = G; K <= H; K++) {
            J += (L[K + 1] - L[K]);
            F[K] = J - 1;
            J <<= 1
        }
        for (K = G + 1; K <= H; K++) {
            L[K] = ((F[K - 1] + 1) << 1) - L[K]
        }
    };
    return p
}();
var gim = function() {
    var a = function(b) {
        if (b === undefined || b._pf === undefined || b._cy === undefined || b._ph === undefined || b._pg === undefined || b._pi === undefined) {
            throw new Error("3235 ")
        }
        this._pf = b._pf;
        this._cy = b._cy;
        this._ph = b._ph;
        this._pg = b._pg;
        this._pi = b._pi;
        this._pk = b._pk;
        this.priority = b.priority;
        if (this.priority === undefined) {
            this.priority = 0
        }
        this._fyc = _gkf
    };
    a.prototype._ggz = function() {
        return this._pf
    };
    a.prototype._cqp = function() {
        return this._cy
    };
    a.prototype._gha = function() {
        return this._ph
    };
    a.prototype._ghb = function() {
        return this._pg
    };
    a.prototype._eib = function() {
        return this.priority
    };
    a.prototype._ghd = function() {
        return this._fyc
    };
    a.prototype._ghf = function(b) {
        this._fyc = hdo(b)
    };
    a.prototype._ghh = function() {
        this._fyc = _gkf
    };
    a.prototype._ghj = function() {
        this._pi(this._pf, this._cy, this._fyc, this._ph, this._pk)
    };
    a.prototype._ghk = function() {
        if (this._fyc === _gkf) {
            return 0
        } else {
            return (this._fyc._loi() * 100) / (this._fyc.getSize() - this._pg)
        }
    };
    return function(b) {
        return new a(b)
    }
}();
var gew = function() {
    var L = {};
    var n = 32768;
    var x = 0;
    var F = 1;
    var i = 2;
    var S = 9;
    var h = 6;
    var t = 32768;
    var a = 64;
    var C = null;
    var k;
    var Q = null;
    var b;
    var K, O;
    var s;
    var r;
    var U;
    var M;
    var T;
    var y;
    var m, o;
    var f, j;
    var B;
    var D;
    var q;
    var P = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
    var c = new Array(3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0);
    var J = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99);
    var G = new Array(1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577);
    var z = new Array(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13);
    var p = new Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15);
    L._dgh = function(Y, ab, aa) {
        N();
        B = new Uint8Array(ab);
        D = aa;
        if (B[aa] != 31 || B[aa + 1] != 139) {
            throw new Error("3068 ")
        }
        D += 10;
        q = ab.byteLength - 4;
        var ac = new Array(1024);
        var Z = new Uint8Array(Y);
        var V = E(ac, 0, ac.length),
            X = 0;
        var W = 0;
        while (V > 0) {
            for (X = 0; X < V; X++) {
                Z[W++] = ac[X]
            }
            V = E(ac, 0, ac.length)
        }
        B = null
    };
    var I = L._dgh;
    var l = function(aw, aq, ab, az, av, at) {
        var ah = {
            _dgj: 16,
            _dgl: 288,
            status: 0,
            root: null,
            m: 0
        };
        var ax;
        var aa = new Array(ah._dgj + 1);
        var V;
        var au;
        var ac;
        var ap;
        var ay;
        var ar;
        var ai;
        var Y = new Array(ah._dgj + 1);
        var an;
        var Z;
        var al;
        var ak = {
            e: 0,
            b: 0,
            n: 0,
            t: null
        };
        var X = new Array(ah._dgj);
        var W = new Array(ah._dgl);
        var ag;
        var ae = new Array(ah._dgj + 1);
        var af;
        var ad;
        var aj;
        var ao;
        var am;
        am = ah.root = null;
        for (ay = 0; ay < aa.length; ay++) {
            aa[ay] = 0
        }
        for (ay = 0; ay < Y.length; ay++) {
            Y[ay] = 0
        }
        for (ay = 0; ay < X.length; ay++) {
            X[ay] = null
        }
        for (ay = 0; ay < W.length; ay++) {
            W[ay] = 0
        }
        for (ay = 0; ay < ae.length; ay++) {
            ae[ay] = 0
        }
        V = aq > 256 ? aw[256] : ah._dgj;
        an = aw;
        Z = 0;
        ay = aq;
        do {
            aa[an[Z]]++;
            Z++
        } while (--ay > 0);
        if (aa[0] == aq) {
            ah.root = null;
            ah.m = 0;
            ah.status = 0;
            return
        }
        for (ar = 1; ar <= ah._dgj; ar++) {
            if (aa[ar] != 0) {
                break
            }
        }
        ai = ar;
        if (at < ar) {
            at = ar
        }
        for (ay = ah._dgj; ay != 0; ay--) {
            if (aa[ay] != 0) {
                break
            }
        }
        ac = ay;
        if (at > ay) {
            at = ay
        }
        for (ad = 1 << ar; ar < ay; ar++, ad <<= 1) {
            if ((ad -= aa[ar]) < 0) {
                ah.status = 2;
                ah.m = at;
                return
            }
        }
        if ((ad -= aa[ay]) < 0) {
            ah.status = 2;
            ah.m = at;
            return
        }
        aa[ay] += ad;
        ae[1] = ar = 0;
        an = aa;
        Z = 1;
        af = 2;
        while (--ay > 0) {
            ae[af++] = (ar += an[Z++])
        }
        an = aw;
        Z = 0;
        ay = 0;
        do {
            if ((ar = an[Z++]) != 0) {
                W[ae[ar]++] = ay
            }
        } while (++ay < aq);
        aq = ae[ac];
        ae[0] = ay = 0;
        an = W;
        Z = 0;
        ap = -1;
        ag = Y[0] = 0;
        al = null;
        aj = 0;
        for (; ai <= ac; ai++) {
            ax = aa[ai];
            while (ax-- > 0) {
                while (ai > ag + Y[1 + ap]) {
                    ag += Y[1 + ap];
                    ap++;
                    aj = (aj = ac - ag) > at ? at : aj;
                    if ((au = 1 << (ar = ai - ag)) > ax + 1) {
                        au -= ax + 1;
                        af = ai;
                        while (++ar < aj) {
                            if ((au <<= 1) <= aa[++af]) {
                                break
                            }
                            au -= aa[af]
                        }
                    }
                    if (ag + ar > V && ag < V) {
                        ar = V - ag
                    }
                    aj = 1 << ar;
                    Y[1 + ap] = ar;
                    al = new Array(aj);
                    for (ao = 0; ao < aj; ao++) {
                        al[ao] = {
                            e: 0,
                            b: 0,
                            n: 0,
                            t: null
                        }
                    }
                    if (am == null) {
                        am = ah.root = {
                            next: null,
                            list: null
                        }
                    } else {
                        am = am.next = {
                            next: null,
                            list: null
                        }
                    }
                    am.next = null;
                    am.list = al;
                    X[ap] = al;
                    if (ap > 0) {
                        ae[ap] = ay;
                        ak.b = Y[ap];
                        ak.e = 16 + ar;
                        ak.t = al;
                        ar = (ay & ((1 << ag) - 1)) >> (ag - Y[ap]);
                        X[ap - 1][ar].e = ak.e;
                        X[ap - 1][ar].b = ak.b;
                        X[ap - 1][ar].n = ak.n;
                        X[ap - 1][ar].t = ak.t
                    }
                }
                ak.b = ai - ag;
                if (Z >= aq) {
                    ak.e = 99
                } else {
                    if (an[Z] < ab) {
                        ak.e = (an[Z] < 256 ? 16 : 15);
                        ak.n = an[Z++]
                    } else {
                        ak.e = av[an[Z] - ab];
                        ak.n = az[an[Z++] - ab]
                    }
                }
                au = 1 << (ai - ag);
                for (ar = ay >> ag; ar < aj; ar += au) {
                    al[ar].e = ak.e;
                    al[ar].b = ak.b;
                    al[ar].n = ak.n;
                    al[ar].t = ak.t
                }
                for (ar = 1 << (ai - 1);
                    (ay & ar) != 0; ar >>= 1) {
                    ay ^= ar
                }
                ay ^= ar;
                while ((ay & ((1 << ag) - 1)) != ae[ap]) {
                    ag -= Y[ap];
                    ap--
                }
            }
        }
        ah.m = Y[1];
        ah.status = ((ad != 0 && ac != 1) ? 1 : 0);
        return ah
    };
    var e = function() {
        if (q == D) {
            return -1
        }
        return B[D++] & 255
    };
    var R = function(V) {
        while (r < V) {
            s |= e() << r;
            r += 8
        }
    };
    var u = function(V) {
        return s & P[V]
    };
    var d = function(V) {
        s >>= V;
        r -= V
    };
    var g = function(aa, V, X) {
        var Y;
        var W;
        var Z;
        if (X == 0) {
            return 0
        }
        Z = 0;
        for (;;) {
            R(f);
            W = m.list[u(f)];
            Y = W.e;
            while (Y > 16) {
                if (Y == 99) {
                    return -1
                }
                d(W.b);
                Y -= 16;
                R(Y);
                W = W.t[u(Y)];
                Y = W.e
            }
            d(W.b);
            if (Y == 16) {
                k &= n - 1;
                aa[V + Z++] = C[k++] = W.n;
                if (Z == X) {
                    return X
                }
                continue
            }
            if (Y == 15) {
                break
            }
            R(Y);
            T = W.n + u(Y);
            d(Y);
            R(j);
            W = o.list[u(j)];
            Y = W.e;
            while (Y > 16) {
                if (Y == 99) {
                    return -1
                }
                d(W.b);
                Y -= 16;
                R(Y);
                W = W.t[u(Y)];
                Y = W.e
            }
            d(W.b);
            R(Y);
            y = k - W.n - u(Y);
            d(Y);
            while (T > 0 && Z < X) {
                T--;
                y &= n - 1;
                k &= n - 1;
                aa[V + Z++] = C[k++] = C[y++]
            }
            if (Z == X) {
                return X
            }
        }
        U = -1;
        return Z
    };
    var v = function(Y, V, W) {
        var X;
        X = r & 7;
        d(X);
        R(16);
        X = u(16);
        d(16);
        R(16);
        if (X != ((~s) & 65535)) {
            return -1
        }
        d(16);
        T = X;
        X = 0;
        while (T > 0 && X < W) {
            T--;
            k &= n - 1;
            R(8);
            Y[V + X++] = C[k++] = u(8);
            d(8)
        }
        if (T == 0) {
            U = -1
        }
        return X
    };
    var H = function(aa, W, Z) {
        if (Q == null) {
            var V;
            var Y = new Array(288);
            var X;
            for (V = 0; V < 144; V++) {
                Y[V] = 8
            }
            for (; V < 256; V++) {
                Y[V] = 9
            }
            for (; V < 280; V++) {
                Y[V] = 7
            }
            for (; V < 288; V++) {
                Y[V] = 8
            }
            K = 7;
            X = l(Y, 288, 257, c, J, K);
            if (X.status != 0) {
                if (false) {}
                return -1
            }
            Q = X.root;
            K = X.m;
            for (V = 0; V < 30; V++) {
                Y[V] = 5
            }
            O = 5;
            X = l(Y, 30, 0, G, z, O);
            if (X.status > 1) {
                Q = null;
                if (false) {}
                return -1
            }
            b = X.root;
            O = X.m
        }
        m = Q;
        o = b;
        f = K;
        j = O;
        return g(aa, W, Z)
    };
    var A = function(ae, W, ah) {
        var ac;
        var aa;
        var Y;
        var X;
        var af;
        var ab;
        var V;
        var Z;
        var ad = new Array(286 + 30);
        var ag;
        for (ac = 0; ac < ad.length; ac++) {
            ad[ac] = 0
        }
        R(5);
        V = 257 + u(5);
        d(5);
        R(5);
        Z = 1 + u(5);
        d(5);
        R(4);
        ab = 4 + u(4);
        d(4);
        if (V > 286 || Z > 30) {
            return -1
        }
        for (aa = 0; aa < ab; aa++) {
            R(3);
            ad[p[aa]] = u(3);
            d(3)
        }
        for (; aa < 19; aa++) {
            ad[p[aa]] = 0
        }
        f = 7;
        ag = l(ad, 19, 19, null, null, f);
        if (ag.status != 0) {
            return -1
        }
        m = ag.root;
        f = ag.m;
        X = V + Z;
        ac = Y = 0;
        while (ac < X) {
            R(f);
            af = m.list[u(f)];
            aa = af.b;
            d(aa);
            aa = af.n;
            if (aa < 16) {
                ad[ac++] = Y = aa
            } else {
                if (aa == 16) {
                    R(2);
                    aa = 3 + u(2);
                    d(2);
                    if (ac + aa > X) {
                        return -1
                    }
                    while (aa-- > 0) {
                        ad[ac++] = Y
                    }
                } else {
                    if (aa == 17) {
                        R(3);
                        aa = 3 + u(3);
                        d(3);
                        if (ac + aa > X) {
                            return -1
                        }
                        while (aa-- > 0) {
                            ad[ac++] = 0
                        }
                        Y = 0
                    } else {
                        R(7);
                        aa = 11 + u(7);
                        d(7);
                        if (ac + aa > X) {
                            return -1
                        }
                        while (aa-- > 0) {
                            ad[ac++] = 0
                        }
                        Y = 0
                    }
                }
            }
        }
        f = S;
        ag = l(ad, V, 257, c, J, f);
        if (f == 0) {
            ag.status = 1
        }
        if (ag.status != 0) {
            if (ag.status == 1) {}
            return -1
        }
        m = ag.root;
        f = ag.m;
        for (ac = 0; ac < Z; ac++) {
            ad[ac] = ad[ac + V]
        }
        j = h;
        ag = l(ad, Z, 0, G, z, j);
        o = ag.root;
        j = ag.m;
        if (j == 0 && V > 257) {
            return -1
        }
        if (ag.status == 1) {}
        if (ag.status != 0) {
            return -1
        }
        return g(ae, W, ah)
    };
    var N = function() {
        var V;
        if (C === null) {
            C = new Uint8Array(new ArrayBuffer(2 * n))
        }
        k = 0;
        s = 0;
        r = 0;
        U = -1;
        M = false;
        T = y = 0;
        m = null
    };
    var E = function(Z, W, X) {
        var Y, V;
        Y = 0;
        while (Y < X) {
            if (M && U == -1) {
                return Y
            }
            if (T > 0) {
                if (U != x) {
                    while (T > 0 && Y < X) {
                        T--;
                        y &= n - 1;
                        k &= n - 1;
                        Z[W + Y++] = C[k++] = C[y++]
                    }
                } else {
                    while (T > 0 && Y < X) {
                        T--;
                        k &= n - 1;
                        R(8);
                        Z[W + Y++] = C[k++] = u(8);
                        d(8)
                    }
                    if (T == 0) {
                        U = -1
                    }
                }
                if (Y == X) {
                    return Y
                }
            }
            if (U == -1) {
                if (M) {
                    break
                }
                R(1);
                if (u(1) != 0) {
                    M = true
                }
                d(1);
                R(2);
                U = u(2);
                d(2);
                m = null;
                T = 0
            }
            switch (U) {
                case 0:
                    V = v(Z, W + Y, X - Y);
                    break;
                case 1:
                    if (m != null) {
                        V = g(Z, W + Y, X - Y)
                    } else {
                        V = H(Z, W + Y, X - Y)
                    }
                    break;
                case 2:
                    if (m != null) {
                        V = g(Z, W + Y, X - Y)
                    } else {
                        V = A(Z, W + Y, X - Y)
                    }
                    break;
                default:
                    V = -1;
                    break
            }
            if (V == -1) {
                if (M) {
                    return 0
                }
                return -1
            }
            Y += V
        }
        return Y
    };
    return L
}();
var fzv = function() {
    var a = function(b) {
        this.data = [];
        this._hbp = 0;
        this._hbr = 0;
        this._hbt = ((b === undefined) ? true : b)
    };
    a.prototype._hbu = function(b) {
        if (this._hbr === this.data.length) {
            this.data.push(b)
        } else {
            this.data[this._hbr] = b
        }
        this._hbr++
    };
    a.prototype._hbw = function() {
        var e = this.data;
        var c = e.length;
        var d = this._hbr;
        var f = this._hbp;
        if (d === f) {
            return undefined
        }
        var b = e[f];
        this._hbp++;
        f = this._hbp;
        if (this._hbt) {
            if (((c - f) << 1) <= c) {
                this.data = e.slice(f);
                this._hbp = 0;
                this._hbr = this.data.length
            } else {
                e[this._hbp - 1] = undefined
            }
        } else {
            e[this._hbp - 1] = undefined;
            if (this._hbp === d) {
                this._hbp = 0;
                this._hbr = 0
            }
        }
        return b
    };
    a.prototype._hby = function() {
        return this._hbp === this._hbr ? undefined : this.data[this._hbp]
    };
    a.prototype.getItem = function(b) {
        if (b < 0) {
            throw new Error("3264 ")
        }
        if (b >= this._bum()) {
            throw new Error("3265 ")
        }
        return this.data[this._hbp + b]
    };
    a.prototype._bum = function() {
        return this._hbr - this._hbp
    };
    return function(b) {
        return new a(b)
    }
}();
var ghv = function() {
    var a = function(k) {
        var d = {};
        var l;
        var h;
        var j = 0,
            i = 0;
        var c = 0;
        if (k.size !== undefined) {
            l = k.size;
            h = hdo(l)
        } else {
            throw new Error("3603 ")
        }
        d._bpt = function() {
            return c
        };
        var g = d._bpt;
        d._bpv = function(n, m) {
            if (m > l) {
                throw new Error("3604 " + m)
            }
            if (l - c < m) {
                throw new Error("3605 ")
            }
            if (i >= j) {
                if (i + m > l) {
                    h._lpe(n, 0, l - i);
                    h._loj(0);
                    h._lpe(n, l - i, m - (l - i));
                    i = m - (l - i)
                } else {
                    h._lpe(n, 0, m);
                    i += m
                }
            } else {
                h._lpe(n, 0, m);
                i += m
            }
            c += m
        };
        var f = d._bpv;
        d.getData = function(m, n) {
            if (c < n) {
                throw new Error("3606 ")
            }
            if (j > i) {
                if (j + n > l) {
                    m._lpe(h.getData(), j, l - j);
                    m._lpe(h.getData(), 0, n - (l - j));
                    j = n - (l - j)
                } else {
                    m._lpe(h.getData(), j, n);
                    j += n
                }
            } else {
                m._lpe(h.getData(), j, n);
                j += n
            }
            c -= n
        };
        var e = d.getData;
        d._yh = function() {
            j = i = c = 0;
            h._loj(0)
        };
        var b = d._yh;
        k = undefined;
        return d
    };
    return a
}();
var gue = function() {
    var a = function() {
        var g = {};
        var d = new fzv(false);
        var f = 0;
        var h = 0;
        g._bpt = function() {
            return h
        };
        var e = g._bpt;
        g._bpv = function(j) {
            d._hbu(j);
            h += j.byteLength
        };
        var c = g._bpv;
        g.getData = function(j, l) {
            if (h < l) {
                throw new Error("2998 ")
            }
            var k = l;
            while (k > 0) {
                var n = d._hby();
                var m = n.byteLength - f;
                if (k <= m) {
                    j._lpe(n, f, k);
                    f += k;
                    k = 0
                } else {
                    j._lpe(n, f, m);
                    f += m;
                    k -= m
                }
                if (f === n.byteLength) {
                    d._hbw();
                    f = 0
                }
            }
            h -= l
        };
        var b = g.getData;
        g._yh = function() {
            d = fzv(false);
            f = 0;
            h = 0
        };
        var i = g._yh;
        return g
    };
    return a
}();
var gdd = function() {
    var a = function(j) {
        var r = {};
        var h = false;
        var c = false;
        var q = 1;
        r._qzv = q;
        var o = 2;
        r._qzx = o;
        var n = 3;
        r._qzy = n;
        var i = q;
        var k;
        var m;
        var l;
        var e = true;
        var s = 0;
        var t = 0;
        var g = 0;
        var d = 0;
        var u = 0;
        var p = 0;
        m = gue();
        l = ghv({
            size: j.outBufferSize
        });
        if (j.bufferWrites !== undefined) {
            e = j.bufferWrites
        }
        k = new WebSocket(j.url, j.protocol);
        k.binaryType = "arraybuffer";
        k.onopen = function() {
            if (false) {}
            i = o;
            m._yh();
            l._yh()
        };
        k.onmessage = function(v) {
            if (false) {}
            if (m !== undefined) {
                m._bpv(v.data);
                s++;
                d += v.data.byteLength;
                if (false) {}
            }
        };
        k.onerror = function() {
            if (false) {}
            f()
        };
        k.onclose = function() {
            if (false) {}
            f()
        };
        var f = function() {
            if (m !== undefined && m._bpt() === 0) {
                m._yh();
                m = undefined
            }
            if (l !== undefined) {
                l._yh();
                l = undefined
            }
            if (k !== undefined) {
                k.close();
                k = undefined
            }
            i = n
        };
        r._epl = function() {
            return i
        };
        r._bpt = function() {
            if (m === undefined) {
                return -1
            }
            return m._bpt()
        };
        var b = r._bpt;
        r.read = function(v, y) {
            if (m === undefined) {
                return -1
            }
            t++;
            var x = m._bpt();
            var z = 0;
            if (x >= y) {
                m.getData(v, y);
                z = y
            } else {
                m.getData(v, x);
                z = x
            }
            if (i === n && m._bpt() === 0) {
                m._yh();
                m = undefined
            }
            return z
        };
        r.write = function(v) {
            if (i === n) {
                return
            } else {
                if (e) {
                    l._bpv(v, v.byteLength)
                } else {
                    k.send(v)
                }
            }
        };
        r._raa = function(x, v) {
            if (i === n) {
                return
            } else {
                if (e) {
                    l._bpv(x, v)
                } else {
                    throw new Error("3590 ")
                }
            }
        };
        r.close = function() {
            f()
        };
        r._rab = function() {
            k = undefined;
            i = n
        };
        r._loa = function() {
            if (i === n) {
                return
            } else {
                var y = l._bpt();
                if (y > 0) {
                    var v = hdo(y);
                    l.getData(v, y);
                    var x = Date.now();
                    k.send(v.getData());
                    p += (Date.now() - x);
                    g++;
                    u += y
                }
            }
        };
        r._rae = function() {
            return {
                available: b(),
                writesFromServer: s,
                readsFromClient: t,
                writesFromClient: g,
                sendTime: p,
                _rag: (p / g),
                _rai: k === undefined ? 0 : k.bufferedAmount,
                totalBytesRead: d,
                totalBytesWritten: u
            }
        };
        j = undefined;
        return r
    };
    return a
}();
var hbi = function() {
    var a = {
        _bbq: 0,
        _bbs: 1,
        _bbu: 2,
        _bbv: 3,
        _bbw: 4,
        _bbx: 6,
        _bby: 7
    };
    return a
}();
var fvn = function() {
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
    var b = function(h, g) {
        var f = h.data;
        var d = f[g];
        var e = --h.size;
        f[g] = f[e];
        f[e] = undefined;
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
var gcm = function(l) {
    var f = {};
    var m;
    var a;
    var b = 10;
    var h = 10000;
    var k = 100;
    var j = 0;
    var g = new Array(b);
    var i = new Array(b);
    var c = function() {
        for (var n = 0; n < i.length; n++) {
            var o = i[n];
            if (o !== undefined) {
                o._oqd -= k;
                if (o._oqd <= 0) {
                    i.splice(n, 1);
                    n--;
                    j--
                }
            }
        }
    };
    f._opy = c;
    if (l._ktw !== undefined && l._ty !== undefined) {
        m = l._ktw;
        a = l._ty;
        setInterval(c, k)
    } else {
        throw new Error("3462 ")
    }
    f._opz = function(n) {
        m = n
    };
    f._pn = function(t, z, r, q, o, n, s, p) {
        if (j >= b) {
            return false
        }
        for (var x = 0; x < i.length; x++) {
            var u = i[x];
            if (u !== undefined) {
                if (u._pf === t && u._cy === z) {
                    return
                }
            }
        }
        var y = new XMLHttpRequest();
        var u = {
            _oqb: y,
            _pf: t,
            _cy: z,
            _pi: o,
            _pk: n,
            _ph: q,
            _oqd: h
        };
        g.push(u);
        i.push(u);
        y.onreadystatechange = function() {
            if (y.readyState !== 4) {
                return
            }
            if (y.status === 200) {
                d(u)
            } else {
                u._pi(t, z, _gkf, q, n);
                e(u, false)
            }
        };
        var v;
        if (s !== undefined && p !== undefined) {
            v = "&c=" + s + "&v=" + p
        } else {
            v = "&cb=" + Date.now()
        }
        y.open("GET", m + "/ms?m=" + a.id + "&a=" + t + "&g=" + z + v, true);
        y.overrideMimeType("text/plain;charset=x-user-defined");
        y.responseType = "arraybuffer";
        y.send(null);
        j++;
        return true
    };
    var d = function(o) {
        var n = o._oqb.response;
        if (n !== null && n !== undefined) {
            var p = hdo(undefined, n);
            o._pi(o._pf, o._cy, p, o._ph, o._pk);
            e(o, true)
        } else {
            o._pi(o._pf, o._cy, _gkf, o._ph, o._pk);
            e(o, false)
        }
    };
    var e = function(o, p) {
        if (p !== undefined && p === true) {
            for (var n = 0; n < i.length; n++) {
                if (o === i[n]) {
                    i.splice(n, 1);
                    break
                }
            }
        }
        for (var n = 0; n < g.length; n++) {
            if (o === g[n]) {
                g.splice(n, 1);
                j--;
                return
            }
        }
        throw new Error("3463 ")
    };
    l = undefined;
    return f
};
var hbr = function() {
    var a = function(u) {
        var ac = {};
        var m;
        ac._lhc = function() {
            return m
        };
        var z;
        var d;
        ac._ke = function() {
            return d
        };
        var i;
        ac._kg = function() {
            return i
        };
        var W;
        var R;
        var T = 0;
        var U = 2;
        var D = 3;
        var aa = 4;
        var g = 6;
        var Q;
        var r = 0;
        var s;
        var h = 0;
        var k;
        var x = 0;
        var ag = 1;
        var V;
        var E;
        var j = 0;
        var ad = 1;
        var A = 2;
        var H = 3;
        var c = 4;
        var B = false;
        if (u._kuf !== undefined) {
            var ai = hdo(undefined, u._kuf);
            if (u._kuh) {
                B = true
            }
            ai._lpi();
            var o = ai._lpi();
            var q = ai._lpi();
            var v = ai._lpi();
            if (o !== 80 || q !== 78 || v !== 71) {
                throw new Error("3315 ")
            }
            ai._lpp();
            var X = null;
            while (true) {
                var J = ai._lpp();
                var aj = "";
                for (var n = 0; n < 4; n++) {
                    aj += String.fromCharCode(ai._lpi())
                }
                var Y = ai._loi();
                if (aj === "IHDR") {
                    d = ai._lpp();
                    i = ai._lpp();
                    W = ai._lpi();
                    if (W !== 8) {
                        throw new Error("3316 " + W)
                    }
                    R = ai._lpi();
                    Q = ai._lpi();
                    if (Q !== r) {
                        throw new Error("3317 " + Q)
                    }
                    s = ai._lpi();
                    if (s !== h) {
                        throw new Error("3318 " + s)
                    }
                    k = ai._lpi();
                    if (k !== x && k !== ag) {
                        throw new Error("3319 " + k)
                    }
                    m = new Uint8Array(d * i * 4);
                    var e;
                    if (R === T) {
                        e = 1
                    } else {
                        if (R === U) {
                            e = 3
                        } else {
                            if (R === D) {
                                e = 1
                            } else {
                                if (R === aa) {
                                    e = 2
                                } else {
                                    if (R === g) {
                                        e = 4
                                    }
                                }
                            }
                        }
                    }
                    V = e * W;
                    E = V / 8
                } else {
                    if (aj === "PLTE") {
                        var O = J / 3;
                        z = new Array(O);
                        for (var n = 0; n < O; n++) {
                            var C = ai.g3();
                            if (B && C === 0) {
                                z[n] = 0
                            } else {
                                z[n] = (C << 8) | 255
                            }
                        }
                    } else {
                        if (aj === "IDAT") {
                            if (X === null) {
                                X = hdo(J)
                            } else {
                                var M = X;
                                X = hdo(M.getSize() + J);
                                X._lpe(M.getData(), 0, M.getSize())
                            }
                            X._lpe(ai.getData(), ai._loi(), J);
                            ai._loj(ai._loi() + J)
                        } else {
                            if (aj === "tRNS") {
                                if (R === D) {
                                    for (var n = 0; n < z.length; n++) {
                                        z[n] &= 4294967040;
                                        z[n] |= ai._lpi()
                                    }
                                } else {
                                    if (R === U) {
                                        throw new Error("3320 ")
                                    } else {
                                        if (R === T) {
                                            throw new Error("3321 ")
                                        } else {
                                            throw new Error("3322 ")
                                        }
                                    }
                                }
                            } else {
                                if (aj === "IEND") {
                                    break
                                } else {
                                    ai._loj(ai._loi() + J);
                                    if (false) {}
                                }
                            }
                        }
                    }
                }
                if (Y + J !== ai._loi()) {
                    throw new Error("3323 " + aj)
                }
                var al = ai._lpp()
            }
            var f = new hak._rzd(new Uint8Array(X.getData()));
            var S = hdo(undefined, f._ryw());
            var Z = new Uint8Array(d * i * (V / 8));
            var y = 0;
            var P = 0;
            while (y < i) {
                var t = S._lpi();
                if (t === j) {
                    for (var n = 0; n < d * E; n++) {
                        Z[P++] = S._lpi()
                    }
                } else {
                    if (t === ad) {
                        for (var n = 0; n < d * E; n++) {
                            var ak = S._lpi();
                            var l = n < E ? 0 : Z[P - E];
                            Z[P++] = (ak + l) & 255
                        }
                    } else {
                        if (t === A) {
                            for (var n = 0; n < d * E; n++) {
                                var ak = S._lpi();
                                var af = y <= 0 ? 0 : Z[P - d * E];
                                Z[P++] = (ak + af) & 255
                            }
                        } else {
                            if (t === H) {
                                for (var n = 0; n < d * E; n++) {
                                    var ak = S._lpi();
                                    var l = n < E ? 0 : Z[P - E];
                                    var af = y <= 0 ? 0 : Z[P - d * E];
                                    var G = Math.floor((l + af) / 2);
                                    Z[P++] = (ak + G) & 255
                                }
                            } else {
                                if (t === c) {
                                    for (var n = 0; n < d * E; n++) {
                                        var ak = S._lpi();
                                        var l = n < E ? 0 : Z[P - E];
                                        var af = y <= 0 ? 0 : Z[P - d * E];
                                        var ae = y <= 0 || n < E ? 0 : Z[P - d * E - E];
                                        var ab = l + af - ae;
                                        var L = Math.abs(ab - l);
                                        var K = Math.abs(ab - af);
                                        var I = Math.abs(ab - ae);
                                        var N;
                                        if (L <= K && L <= I) {
                                            N = l
                                        } else {
                                            if (K <= I) {
                                                N = af
                                            } else {
                                                N = ae
                                            }
                                        }
                                        Z[P++] = (ak + N) & 255
                                    }
                                } else {
                                    throw new Error("3324 " + t)
                                }
                            }
                        }
                    }
                }
                y++
            }
            if (P !== d * i * (V / 8)) {
                throw new Error("3325 " + P)
            }
            Z = hdo(undefined, Z.buffer);
            if (R === T) {
                for (var n = 0; n < d * i; n++) {
                    var F = Z._lpi();
                    m[n * 4 + 0] = F;
                    m[n * 4 + 1] = F;
                    m[n * 4 + 2] = F;
                    m[n * 4 + 3] = 255
                }
            } else {
                if (R === U) {
                    for (var n = 0; n < d * i; n++) {
                        m[n * 4 + 0] = Z._lpi();
                        m[n * 4 + 1] = Z._lpi();
                        m[n * 4 + 2] = Z._lpi();
                        if (B && m[n * 4 + 0] === m[n * 4 + 1] === m[n * 4 + 2] === 0) {
                            m[n * 4 + 3] = 0
                        } else {
                            m[n * 4 + 3] = 255
                        }
                    }
                } else {
                    if (R === D) {
                        for (var n = 0; n < d * i; n++) {
                            var ah = z[Z._lpi()];
                            if (ah === undefined) {
                                throw new Error("3326 ")
                            }
                            m[n * 4 + 0] = (ah >> 24) & 255;
                            m[n * 4 + 1] = (ah >> 16) & 255;
                            m[n * 4 + 2] = (ah >> 8) & 255;
                            m[n * 4 + 3] = ah & 255
                        }
                    } else {
                        if (R === aa) {
                            for (var n = 0; n < d * i; n++) {
                                var F = Z._lpi();
                                m[n * 4 + 0] = F;
                                m[n * 4 + 1] = F;
                                m[n * 4 + 2] = F;
                                m[n * 4 + 3] = Z._lpi()
                            }
                        } else {
                            if (R === g) {
                                for (var n = 0; n < d * i; n++) {
                                    m[n * 4 + 0] = Z._lpi();
                                    m[n * 4 + 1] = Z._lpi();
                                    m[n * 4 + 2] = Z._lpi();
                                    m[n * 4 + 3] = Z._lpi()
                                }
                            }
                        }
                    }
                }
            }
            if (Z._loi() !== Z.getSize()) {
                throw new Error("3327 ")
            }
        } else {
            throw new Error("3328 ")
        }
        u = undefined;
        return ac
    };
    return a
}();
var gzq = function() {
    var a = {
        _ij: 1,
        _lhv: 2
    };
    return a
}();
var gij = function() {
    var c = {};
    var d = false;
    var b = 0;
    c._fqe = b;
    var a = 1;
    c._fqg = a;
    var g = 2;
    c._fqi = g;
    var f = 3;
    c._fqj = f;
    var e = function(k) {
        k._loj(0);
        var l = k._lpi();
        var j = k._lpr();
        if (l === b) {
            if (false) {}
            var h = hdo(j);
            h._lpe(k.getData(), k._loi(), j);
            return h
        } else {
            var i = k._lpr();
            var h = new ArrayBuffer(i);
            if (l === a) {
                if (false) {}
                hec._fqk(h, i, k.getData(), j, 9)
            } else {
                if (l === g) {
                    if (false) {}
                    gew._dgh(h, k.getData(), 9)
                } else {
                    if (l === f) {
                        if (false) {}
                        throw new Error("3212 ")
                    }
                }
            }
            return hdo(undefined, h)
        }
    };
    c._fqk = e;
    return c
}();
var gsr = function(e) {
    var l = {};
    var r = 1;
    if (e !== undefined && e._buj !== undefined) {
        r = e._buj
    }
    var f = "next";
    var s = "prev";
    var k = "unlink";
    if (r !== 1) {
        f = f + r;
        s = s + r;
        k = k + r
    }
    var d = {};
    d[s] = d;
    d[f] = d;
    var b = d;
    var c = 0;
    var q = -1;
    if (e !== undefined && e._buk !== undefined) {
        q = e._buk
    }
    var h = function(x, v) {
        var t = d;
        for (var y = o(); y !== null; y = n()) {
            if (v > y.priority) {
                a(x, y, v);
                if (q !== -1 && c > q) {
                    var u = m();
                    if (u._eps !== undefined) {
                        u._eps()
                    }
                    u[k]()
                }
                return true
            }
        }
        if (q === -1 || c < q) {
            a(x, d, v);
            return true
        } else {
            return false
        }
    };
    l.add = h;
    var a = function(t, v, u) {
        v[s][f] = t;
        t[s] = v[s];
        v[s] = t;
        t[f] = v;
        t.priority = u;
        j(t);
        c++
    };
    var g = function() {
        for (var t = o(); t !== null; t = n()) {
            t[k]()
        }
        d[f] = d;
        d[s] = d;
        c = 0
    };
    l._yh = g;
    var p = function() {
        return c
    };
    l._bum = p;
    l._bun = function() {
        return c === q
    };
    l._buo = function(u) {
        if (c === q) {
            var t = m();
            if (t !== null) {
                return u > t.priority
            }
        } else {
            return true
        }
    };
    var o = function() {
        if (d[f] === d) {
            return null
        } else {
            b = d[f][f];
            return d[f]
        }
    };
    l._bup = o;
    var n = function() {
        if (b === d) {
            return null
        } else {
            var t = b;
            b = b[f];
            return t
        }
    };
    l._bur = n;
    var m = function() {
        if (d[s] === d) {
            return null
        } else {
            return d[s]
        }
    };
    l._but = m;
    var j = function(t) {
        if (t[k] !== undefined) {
            throw new Error("3021 ")
        }
        t[k] = i
    };
    var i = function() {
        this[s][f] = this[f];
        this[f][s] = this[s];
        this[s] = undefined;
        this[f] = undefined;
        c--;
        this[k] = undefined
    };
    e = undefined;
    return l
};
var fyo = function(l) {
    var t = {};
    var r = false;
    var C = false;
    var i = 3;
    var H = 100;
    var q = 20;
    var D = 512;
    var n = 5;
    var s = 5;
    var G = fzv(false);
    var p = fvn();
    var f = fzv(false);
    var j = fvn();
    var a = null;
    var g;
    var m = hdo(6);
    var A = hdo(n);
    var y = hdo(s);
    var u = 0;
    var v = undefined;
    var e = undefined;
    var I = 0;
    var o = function(J, L) {
        a = J;
        g = Date.now();
        m._loj(0);
        m._lhh(hbi._bbx);
        m._lox(i);
        a.write(m.getData());
        m._loj(0);
        if (L) {
            m._lhh(hbi._bbu)
        } else {
            m._lhh(hbi._bbv)
        }
        a.write(m.getData());
        a._loa();
        A._loj(0);
        v = undefined;
        e = undefined;
        var K;
        for (K = p._bup(); K !== undefined; K = p._bur()) {
            p.remove();
            K._ghh();
            G._hbu(K)
        }
        for (K = j._bup(); K !== undefined; K = j._bur()) {
            j.remove();
            K._ghh();
            f._hbu(K)
        }
    };
    t._pd = o;
    var k = function(Q, O, N, L, K, J, M) {
        if (L) {
            if (h()) {
                return false
            } else {
                var P = gim({
                    _pf: Q,
                    _cy: O,
                    _pg: N,
                    _ph: L,
                    _pi: K,
                    _pk: J,
                    priority: M
                });
                G._hbu(P);
                return true
            }
        } else {
            if (d()) {
                return false
            } else {
                var P = gim({
                    _pf: Q,
                    _cy: O,
                    _pg: N,
                    _ph: L,
                    _pi: K,
                    _pk: J,
                    priority: M
                });
                f._hbu(P);
                return true
            }
        }
    };
    t._pn = k;
    var h = function() {
        return c() >= H
    };
    t._pr = h;
    var d = function() {
        return b() >= q
    };
    t._pv = d;
    var c = function() {
        return G._bum() + p.getSize()
    };
    t._pw = c;
    var b = function() {
        return f._bum() + j.getSize()
    };
    t._pz = b;
    var F = function() {
        I++;
        if (false) {}
        if (a !== null) {
            a.close()
        }
        a = null
    };
    t._qb = F;
    var B = function() {
        I = 0
    };
    t._qd = B;
    var z = function() {
        a = null
    };
    t._qe = z;
    var x = function() {
        if (g < Date.now() - 30000) {
            if (a !== null) {
                a.close()
            }
            a = null
        }
        if (a === null) {
            if (c() === 0 && b() === 0) {
                return true
            } else {
                return false
            }
        } else {
            var W;
            for (W = G._hbw(); W != undefined; W = G._hbw()) {
                if (false) {}
                E(W, hbi._bbs);
                p._doh(W)
            }
            for (W = f._hbw(); W != undefined; W = f._hbw()) {
                E(W, hbi._bbq);
                j._doh(W)
            }
            a._loa();
            try {
                for (var U = 0; U < 500; U++) {
                    var M = a._bpt();
                    if (M <= 0) {
                        break
                    }
                    g = Date.now();
                    if (v === undefined) {
                        var X = n - A._loi();
                        if (X > M) {
                            X = M
                        }
                        a.read(A, X);
                        if (A._loi() < n) {
                            continue
                        }
                        A._loj(0);
                        var P = A._lpi();
                        var Q = A._lpp();
                        var V = (Q & 2147483648) != 0;
                        var Y = Q & 2147483647;
                        if (V) {
                            for (var O = j._bup(); O !== undefined; O = j._bur()) {
                                if (O._ggz() === P && O._cqp() === Y) {
                                    v = O;
                                    e = j;
                                    break
                                }
                            }
                        } else {
                            for (var O = p._bup(); O !== undefined; O = p._bur()) {
                                if (O._ggz() === P && O._cqp() === Y) {
                                    v = O;
                                    e = p;
                                    break
                                }
                            }
                        }
                        if (v === undefined) {
                            throw new Error("2974 " + P + "2974 " + Y)
                        } else {
                            if (false) {}
                        }
                        u = n;
                        A._loj(0);
                        y._loj(0);
                        continue
                    }
                    var Z = v._ghd();
                    if (Z === null) {
                        var J = s - y._loi();
                        if (J > M) {
                            J = M
                        }
                        a.read(y, J);
                        if (y._loi() < s) {
                            continue
                        }
                        y._loj(0);
                        var L = y._lpi();
                        var K = y._lpr();
                        var T = 5;
                        if (L != gij._fqe) {
                            T = 9
                        }
                        v._ghf(K + T + v._ghb());
                        Z = v._ghd();
                        Z._lhh(L);
                        Z._loz(K);
                        u += s;
                        continue
                    }
                    var N = Z.getSize() - v._ghb();
                    var S = D - u;
                    if (S > N - Z._loi()) {
                        S = N - Z._loi()
                    }
                    if (S > M) {
                        S = M
                    }
                    a.read(Z, S);
                    u += S;
                    if (Z._loi() == N) {
                        if (false) {}
                        e.remove();
                        v._ghj();
                        v = undefined;
                        e = undefined
                    } else {
                        if (u === D) {
                            u = 0;
                            v = undefined;
                            e = undefined
                        }
                    }
                    continue
                }
                return true
            } catch (R) {
                if (false) {}
                if (a !== null) {
                    a.close()
                }
                a = null;
                v = undefined;
                e = undefined;
                A._loj(0);
                y._loj(0);
                return true
            }
        }
    };
    t._qf = x;
    var E = function(J, K) {
        m._loj(0);
        m._lhh((K & 15) | ((J._eib() & 15) << 4));
        m._lhh(J._ggz());
        m._loz(J._cqp());
        a.write(m.getData())
    };
    l = undefined;
    return t
};
var gbe = function() {
    var a = {
        LOG: 1,
        _dgr: 2,
        _dgt: 3,
        _dha: 4,
        _dhe: 5,
        _mca: 6,
        _mcc: 7,
        _mce: 10,
        _mcf: 20,
        _mcg: 30,
        _mch: 40
    };
    return a
}();
var gjh = function() {
    var e = {};
    var g = new Array(256);
    var c = 3988292384;
    var f = 0,
        b = 0,
        d = 0;
    for (b = 0; b < 256; b++) {
        f = b;
        for (d = 0; d < 8; d++) {
            if ((f & 1) === 1) {
                f = (f >>> 1) ^ c
            } else {
                f >>>= 1
            }
        }
        g[b] = f
    }
    e._sdr = function(k, l, h) {
        var j = 4294967295;
        k._loj(l);
        for (var i = 0; i < h; i++) {
            j = (j >>> 8) ^ g[(j ^ k._lpi()) & 255]
        }
        j ^= 4294967295;
        return j
    };
    var a = e._sdr;
    return e
}();
var het = function() {
    var M = {};
    var D;
    var k = 0,
        l = 0;
    var t = 0;
    var p = 0;
    var C = 0;
    var r = 0;
    var z = true ? 5 : {};
    var A;
    var y;
    var W;
    var T;
    var G = 0;
    var d = 1;
    var I = 2;
    var U = 3;
    var V = 5000;
    var K = 0;
    var h = 0;
    var v = false;
    var o = true;
    var u = undefined;
    var q = G;
    var O = false;
    var Q = hdo(1000);
    var F = undefined;
    var s = undefined;
    var B = [];
    var L = 2;
    var m = 0;
    var g;
    M._ktu = function(X) {
        g = X
    };
    M.onmessage = function(Y) {
        var X = Y.data._cr;
        if (X === gbe._dgr) {
            R(Y.data._ktv, Y.data._ktw, Y.data._ty, Y.data._liw, Y.data._liy)
        } else {
            if (X === gbe._mcc) {
                if (Y.data._ktv !== undefined) {
                    A = Y.data._ktv;
                    u.close()
                }
                if (Y.data._ktw !== undefined) {
                    y = Y.data._ktw;
                    s._opz(y)
                }
            } else {
                if (X === gbe._dha) {
                    self.gc()
                } else {
                    if (X === gbe._dhe) {
                        console.log(requireJS_logConstructionCounts())
                    } else {
                        if (X === gbe._mce) {
                            J()
                        } else {
                            if (X === gbe._mcf) {
                                j(Y.data._pf, Y.data._xo)
                            } else {
                                if (X === gbe._mcg) {
                                    b(Y.data._pf, Y.data._cy, Y.data._kuj, Y.data._kuk, Y.data._kul, Y.data._ph, Y.data.priority, Y.data._ljj, Y.data._ljl)
                                } else {
                                    if (X === gbe._mch) {
                                        N()
                                    } else {
                                        throw new Error("3305 " + X)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    var R = function(Y, ab, X, Z, aa) {
        if (false) {}
        if (false) {}
        A = Y;
        y = ab;
        W = Z;
        T = aa;
        F = fyo();
        if (y !== undefined) {
            s = gcm({
                _ktw: y,
                _ty: X
            })
        }
        p = Date.now();
        D = t = Math.floor(p / 1000);
        setInterval(a, z)
    };
    var P = function(Z, Y, aa) {
        if (aa !== _gkf) {
            var X = aa.getData();
            g({
                _cr: gbe._mce,
                _ktz: X
            }, [X])
        } else {
            g({
                _cr: gbe._mce,
                _ktz: _gkf
            })
        }
    };
    var J = function() {
        if (!e()) {
            o = true;
            P(255, 255, _gkf)
        } else {
            if (!F._pn(255, 255, m, true, P)) {
                P(255, 255, _gkf)
            }
        }
    };
    var n = function(Z, Y, aa) {
        if (aa !== _gkf) {
            var X = aa.getData();
            g({
                _cr: gbe._mch,
                _ktz: X
            }, [X])
        } else {
            g({
                _cr: gbe._mch,
                _ktz: _gkf
            })
        }
    };
    var N = function() {
        if (!s._pn(255, 255, m, true, n)) {
            n(255, 255, _gkf)
        }
    };
    var S = function(aa, Z, ac) {
        if (ac !== _gkf) {
            var Y = gjh._sdr(ac, 0, ac.getSize());
            var ab = gij._fqk(ac);
            var X = ab.getData();
            g({
                _cr: gbe._mcf,
                _pf: Z,
                _kub: Y,
                _kud: X
            }, [X])
        } else {
            g({
                _cr: gbe._mcf,
                _pf: Z,
                _kud: _gkf
            })
        }
    };
    var j = function(X) {
        if (!e()) {
            o = true;
            S(255, X, _gkf)
        } else {
            if (!F._pn(255, X, m, true, S)) {
                S(255, X, _gkf)
            }
        }
    };
    var x = function(ah, aj, ai, ad, aa) {
        if (ai !== _gkf) {
            if (ai.getSize() <= 2) {
                throw new Error("3306 ")
            }
            var al = aa._kul === true ? ai.getSize() : ai.getSize() - 2;
            var ac = gjh._sdr(ai, 0, al);
            var ag = gij._fqk(ai);
            var ae;
            if (aa._kuj > 1) {
                ae = gcc._rdi(ag, 0, ag.getSize(), aa._kuj);
                if (aa._kuk === gzq._lhv) {
                    throw new Error("3307 ")
                }
            } else {
                if (aa._kuk === gzq._lhv) {
                    var ao = hdo(undefined, ag.getData());
                    var ak = ao._lpi();
                    var af = 0;
                    var X;
                    for (var an = 0; an < ak; an++) {
                        var Z = ao._lpp();
                        var ap = new ArrayBuffer(Z);
                        ao._lpw(ap, 0, Z);
                        var Y = hbr({
                            _kuf: ap,
                            _kuh: true
                        });
                        var ab = Y._lhc();
                        if (ae === undefined) {
                            ae = new ArrayBuffer(ab.length * ak);
                            X = new Uint8Array(ae)
                        }
                        X.set(ab, af);
                        af += ab.length
                    }
                } else {
                    ae = ag.getData()
                }
            }
            var am = [ae];
            g({
                _cr: gbe._mcg,
                _pf: ah,
                _cy: aj,
                _kub: ac,
                _ph: ad,
                _kui: am
            }, am)
        } else {
            g({
                _cr: gbe._mcg,
                _pf: ah,
                _cy: aj,
                _ph: ad,
                _kui: _gkf
            })
        }
    };
    var b = function(ae, ag, ab, aa, Y, ac, af, ad, Z) {
        var X = {
            _kuj: ab,
            _kuk: aa,
            _kul: Y
        };
        if (!e()) {
            o = true;
            x(ae, ag, _gkf, ac, X)
        } else {
            if (Y) {
                if (!s._pn(ae, ag, L, true, x, X, ad, Z)) {
                    x(ae, ag, _gkf, ac, X)
                }
            } else {
                if (!F._pn(ae, ag, L, ac, x, X, af)) {
                    x(ae, ag, _gkf, ac, X)
                }
            }
        }
    };
    var E = function(ad) {
        var ab;
        var Z;
        var X;
        var ae;
        for (var ac = 0; ac < B.length; ac++) {
            var aa = B[ac];
            if (aa.request === ad) {
                ab = aa._kum;
                Z = aa._kuo;
                X = aa._pk;
                ae = aa._kup;
                B.splice(ac, 1);
                break
            }
        }
        if (ab !== undefined) {
            var Y = ad.response;
            if (Y !== null && Y !== undefined) {
                var af = hdo(undefined, Y);
                x(ae, ab, af, true, X)
            }
        }
    };
    var c = function() {
        return u !== undefined && u._epl() === u._qzx
    };
    var e = function() {
        return q === U
    };
    var a = function() {
        var X = Date.now();
        if (D !== Math.floor(X / 1000)) {
            k = l;
            l = 0;
            D = Math.floor(X / 1000);
            if (t < D - 10) {
                p = X;
                C = 0;
                r = 0;
                t = D
            }
        }
        if (u !== undefined && l % 10 === 0) {
            var Z = u._rae();
            var aa = r + C;
            var Y = Math.floor(aa / (Date.now() - p) * 100);
            g({
                _cr: gbe._dgt,
                _kur: Z,
                _gpv: k,
                getGroupTime: C,
                serviceTime: r,
                activity: Y
            })
        }
        if (v && u !== undefined && u._epl() === u._qzy) {
            i(h + 1)
        }
        if (c()) {
            H()
        } else {
            if (u === undefined || u._epl() === u._qzy) {
                f()
            }
        }
        l++;
        r += (Date.now() - X)
    };
    M._qf = a;
    var f = function() {
        if (o && K < Date.now() - V) {
            if (false) {}
            u = gdd({
                url: A,
                protocol: "jagex",
                inBufferSize: 4000000,
                outBufferSize: 10000
            });
            K = Date.now();
            o = false;
            q = G;
            v = true
        } else {
            if (u !== undefined) {
                F._qe();
                u = undefined;
                q = G
            }
        }
    };
    var H = function() {
        if (q === G) {
            u.write(W);
            u._loa();
            q = d
        } else {
            if (q === d) {
                Q._loj(0);
                var ad = u.read(Q, 1);
                if (ad === 1) {
                    Q._loj(0);
                    var Y = Q._lpi();
                    if (Y == 0) {
                        q = I
                    } else {
                        if (false) {}
                    }
                }
            } else {
                if (q === I) {
                    var ac = T * 4;
                    var ab = u._bpt(ac);
                    if (ab >= ac) {
                        if (ac > 0) {
                            Q._loj(0);
                            u.read(Q, ac);
                            Q._loj(0);
                            for (var X = 0; X < T; X++) {
                                var aa = Q._lpp()
                            }
                        }
                        F._pd(u, false);
                        q = U;
                        o = false;
                        v = false;
                        i(0);
                        if (false) {}
                    }
                } else {
                    var Z = F._qf();
                    if (!Z) {
                        o = true
                    }
                }
            }
        }
    };
    var i = function(X) {
        h = X;
        if (false) {}
        g({
            _cr: gbe._mca,
            _kus: h
        })
    };
    return M
}();
var console = {};
var run = function() {
    self.postMessage = _qkm(self, "postMessage");
    self.onmessage = het.onmessage;
    het._ktu(self.postMessage);
    console.log = function(a) {
        self.postMessage({
            _cr: gbe.LOG,
            logMessage: a
        })
    }
}();