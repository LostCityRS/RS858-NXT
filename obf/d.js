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
var ckn = function() {
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
            throw new Error("869 " + j + "869 ")
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
            throw new Error("870 " + j + "870 ")
        }
        var n = m;
        if (l !== undefined) {
            n = m[l]
        }
        if (n === undefined) {
            throw new Error("871 " + j + "871 " + l + "871 ")
        }
        if (!n._crj) {
            throw new Error("872 " + j + ((l !== undefined) ? ("872 " + l) : "872 ") + "872 ")
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
var ccj = function() {
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
            throw new Error("892 " + s)
        }
        if (s + j > k) {
            throw new Error("893 ")
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
        var w = h(t);
        m[w._ddl] = u._dee;
        var q = 0;
        for (var s in u) {
            var v = u[s];
            if (v._dei !== undefined) {
                m[w._ddl + 1 + q * 2] = v._ddl;
                m[w._ddl + 1 + q * 2 + 1] = v._dei;
                q++
            }
        }
        return w
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
var cew = function() {
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
        a._qkj = ccj;
        a._ktx = ckn
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
var cvn = function() {
    var a = {
        _bo: 0
    };
    return a
}();
var console = {};
var run = function() {
    self.postMessage = _qkm(self, "postMessage");
    var d = {
        supported: true
    };
    var c = {
        supported: false
    };
    var a = function(f, g) {
        var e = g();
        self.postMessage({
            _cr: f,
            supported: e.supported,
            data: e.data
        })
    };
    self.onmessage = function(f) {
        if (f.data === undefined || f.data === null) {
            return
        }
        try {
            switch (f.data) {
                case cvn._bo:
                    a(f.data, b);
                    break;
                default:
            }
        } catch (g) {
            self.postMessage({
                _cr: f.data,
                error: g.message,
                supported: false
            })
        }
    };
    var b = function() {
        if (!self.WebSocket) {
            return c
        }
        if ("binaryType" in WebSocket.prototype) {
            return d
        }
        try {
            if (!(new WebSocket(("https:" == location.protocol ? "wss" : "ws") + "://.").binaryType)) {
                return c
            } else {
                return d
            }
        } catch (f) {
            return c
        }
    }
}();