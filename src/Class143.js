export var Class143 = function () {
    var e = {};
    var c = null;
    var i = function (m) {
        if (c === null) {
            j();
        }
        return c[m];
    };
    e.member1441 = i;
    var d = null;
    var h = function (m) {
        if (d === null) {
            k();
        }
        return d[m];
    };
    e.member1442 = h;
    var g = function (s) {
        var n = (s >> 16 & 255) / 256;
        var z = (s >> 8 & 255) / 256;
        var t = (s & 255) / 256;
        var q = n;
        if (z < q) {
            q = z;
        }
        if (t < q) {
            q = t;
        }
        var r = n;
        if (z > r) {
            r = z;
        }
        if (t > r) {
            r = t;
        }
        var x = 0, u = 0, o = (q + r) / 2;
        if (q !== r) {
            if (o < 0.5) {
                u = (r - q) / (r + q);
            }
            if (o >= 0.5) {
                u = (r - q) / (2 - r - q);
            }
            if (n === r) {
                x = (z - t) / (r - q);
            } else if (z === r) {
                x = 2 + (t - n) / (r - q);
            } else if (t === r) {
                x = 4 + (n - z) / (r - q);
            }
        }
        x /= 6;
        var y = Math.floor(x * 256), m = Math.floor(u * 256), v = Math.floor(o * 256);
        if (m < 0) {
            m = 0;
        } else if (m > 255) {
            m = 255;
        }
        if (v < 0) {
            v = 0;
        } else if (v > 255) {
            v = 255;
        }
        if (v > 243) {
            m >>= 4;
        } else if (v > 217) {
            m >>= 3;
        } else if (v > 192) {
            m >>= 2;
        } else if (v > 179) {
            m >>= 1;
        }
        return ((y & 255) >> 2 << 10) + (m >> 5 << 7) + (v >> 1);
    };
    e.member1443 = g;
    var b = function (m, n, o) {
        return m << 10 | n << 7 | o;
    };
    e.member1444 = b;
    var j = function () {
        c = new Uint32Array(512 * 128);
        var u = 0.7 + (Math.random() * 0.03 - 0.015);
        for (var C = 0; C < 65536; C++) {
            var D = (C >> 10 & 63) / 64 + 1 / 128;
            var B = (C >> 7 & 7) / 8 + 1 / 16;
            var t = (C & 127) / 128;
            var r = t, E = t, A = t;
            if (B != 0) {
                var m;
                if (t < 0.5) {
                    m = t * (1 + B);
                } else {
                    m = t + B - t * B;
                }
                var o = 2 * t - m;
                var s = D + 1 / 3;
                if (s > 1) {
                    s -= 1;
                }
                var z = D;
                var n = D - 1 / 3;
                if (n < 0) {
                    n += 1;
                }
                if (6 * s < 1) {
                    r = o + (m - o) * 6 * s;
                } else if (2 * s < 1) {
                    r = m;
                } else if (3 * s < 2) {
                    r = o + (m - o) * (2 / 3 - s) * 6;
                } else {
                    r = o;
                }
                if (6 * z < 1) {
                    E = o + (m - o) * 6 * z;
                } else if (2 * z < 1) {
                    E = m;
                } else if (3 * z < 2) {
                    E = o + (m - o) * (2 / 3 - z) * 6;
                } else {
                    E = o;
                }
                if (6 * n < 1) {
                    A = o + (m - o) * 6 * n;
                } else if (2 * n < 1) {
                    A = m;
                } else if (3 * n < 2) {
                    A = o + (m - o) * (2 / 3 - n) * 6;
                } else {
                    A = o;
                }
            }
            r = Math.pow(r, u);
            E = Math.pow(E, u);
            A = Math.pow(A, u);
            var v = Math.floor(r * 256), q = Math.floor(E * 256), y = Math.floor(A * 256);
            var x = (v << 16) + (q << 8) + y;
            c[C] = x & 16777215;
        }
    };
    var k = function () {
        d = new Uint32Array(512 * 128);
        var u = 0.7 + (Math.random() * 0.03 - 0.015);
        var D = 0;
        for (var E = 0; E < 512; E++) {
            var G = ((E >> 3) / 64 + 1 / 128) * 360;
            var m = (E & 7) / 8 + 1 / 16;
            for (var t = 0; t < 128; t++) {
                var F = t / 128;
                var v = 0, r = 0, L = 0;
                var K = G / 60;
                var I = Math.floor(K);
                var q = I % 6;
                var H = K - I;
                var A = F * (1 - m);
                var z = F * (1 - H * m);
                var s = F * (1 - (1 - H) * m);
                if (q == 0) {
                    v = F;
                    r = s;
                    L = A;
                } else if (q == 1) {
                    v = z;
                    r = F;
                    L = A;
                } else if (q == 2) {
                    v = A;
                    r = F;
                    L = s;
                } else if (q == 3) {
                    v = A;
                    r = z;
                    L = F;
                } else if (q == 4) {
                    v = s;
                    r = A;
                    L = F;
                } else if (q == 5) {
                    v = F;
                    r = A;
                    L = z;
                }
                v = Math.pow(v, u);
                r = Math.pow(r, u);
                L = Math.pow(L, u);
                var C = Math.floor(v * 256), J = Math.floor(r * 256), o = Math.floor(L * 256);
                var B = 4278190080 + (C << 16) + (J << 8) + o;
                d[D++] = B;
            }
        }
    };
    var a = function (q, m, v, o) {
        if (v !== 0) {
            var r;
            if (m < 0) {
                r = 0;
            } else if (m > 127) {
                r = 16777215;
            } else {
                r = 131586 * m;
            }
            if (v === 256) {
                q = r;
            } else {
                var u = v, t = 256 - v;
                q = ((r & 16711935) * u + (q & 16711935) * t & 4278255360) + ((r & 65280) * u + (q & 65280) * t & 16711680) >> 8;
            }
        }
        if (o !== 0) {
            o += 256;
            var n = ((q & 16711680) >> 16) * o;
            if (n > 65535) {
                n = 65535;
            }
            var x = ((q & 65280) >> 8) * o;
            if (x > 65535) {
                x = 65535;
            }
            var s = (q & 255) * o;
            if (s > 65535) {
                s = 65535;
            }
            q = (n << 8 & 16711680) + (x & 65280) + (s >> 8);
        }
        return q;
    };
    e.member1445 = a;
    e.member1446 = function (q, u, n) {
        var s = (q & 4278190080) >> 24;
        var y = s + (((u & 4278190080) >> 24) - s) * n & 255;
        var o = (q & 16711680) >> 16;
        var t = o + (((u & 16711680) >> 16) - o) * n & 255;
        var v = (q & 65280) >> 8;
        var r = v + (((u & 65280) >> 8) - v) * n & 255;
        var x = q & 255;
        var m = x + ((u & 255) - x) * n & 255;
        return y << 24 | t << 16 | r << 8 | m;
    };
    return e;
}();