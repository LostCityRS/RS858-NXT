import { Priority } from 'Class96.js';
export var Class805 = function () {
    var g = {};
    var k;
    var d;
    var b;
    var i;
    var m;
    var e;
    g.member25 = function (q, n, o) {
        k = q;
        d = n;
        b = o;
    };
    var c = g.member25;
    g.readyanim = function () {
        if (i !== undefined) {
            return true;
        }
        if (!k.member1437(d)) {
            return false;
        }
        var t = k.member1439(d).member2700(b);
        var z = k.getFile(d, t, 0, Priority.member841);
        if (z === undefined) {
            throw new Error('1301 ');
        }
        if (z === null) {
            return false;
        }
        m = [];
        while (z.getPos() < z.getSize()) {
            m.push(z.g1());
        }
        var C = m.length;
        i = new Array(C);
        e = [0];
        var q = 0;
        var n = [];
        for (var A = 0; A <= 32; A++) {
            n[A] = 0;
        }
        for (var v = 0; v < C; v++) {
            var E = m[v];
            if (E === 0) {
                continue;
            }
            var s = n[E];
            i[v] = s;
            var D = 1 << 32 - E;
            var o;
            if ((s & D) !== 0) {
                o = n[E - 1];
            } else {
                o = s | D;
                for (var r = E - 1; r >= 1; r--) {
                    var u = n[r];
                    if (u === s) {
                        var B = 1 << 32 - r;
                        if ((u & B) !== 0) {
                            n[r] = n[r - 1];
                            break;
                        } else {
                            n[r] = u | B;
                        }
                    } else {
                        break;
                    }
                }
            }
            n[E] = o;
            for (var r = E + 1; r <= 32; r++) {
                if (n[r] === s) {
                    n[r] = o;
                }
            }
            var x = 0;
            var y = 1 << 31;
            for (var r = 0; r < E; r++) {
                if ((s & y) !== 0) {
                    if (e[x] === undefined || e[x] === 0) {
                        e[x] = q;
                    }
                    x = e[x];
                } else {
                    x++;
                }
                y >>>= 1;
            }
            e[x] = ~v;
            if (x >= q) {
                q = x + 1;
            }
        }
        for (var r = 0; r < q; r++) {
            if (e[r] === undefined) {
                e[r] = 0;
            }
        }
        return true;
    };
    g.member10527 = function (o, r, n) {
        var q = 0;
        n += r;
        for (; r < n; r++) {
            q += codeWordLength[o[r]];
        }
        return q + 7 >> 3;
    };
    var j = g.member10527;
    g.member10528 = function (o, z, n, B, s) {
        var v = 0;
        var x = s << 3;
        n += z;
        var u = 0;
        for (; z < n; z++) {
            x += u;
            var q = o[z];
            var r = i[q];
            u = m[q];
            if (r === undefined) {
                throw new Error('1302 ' + q);
            }
            var y = x >> 3;
            var t = x & 7;
            v &= -t >> 31;
            var A = y + (t + u - 1 >> 3);
            t += 24;
            B[y] = 255 & (v |= r >>> t);
            if (y >= A) {
                continue;
            }
            y++;
            t -= 8;
            B[y] = 255 & (v = r >>> t);
            if (y >= A) {
                continue;
            }
            y++;
            t -= 8;
            B[y] = 255 & (v = r >>> t);
            if (y >= A) {
                continue;
            }
            y++;
            t -= 8;
            B[y] = 255 & (v = r >>> t);
            if (y >= A) {
                continue;
            }
            y++;
            t -= 8;
            B[y] = 255 & (v = r << -t);
        }
        x += u;
        return (x + 7 >> 3) - s;
    };
    var h = g.member10528;
    g.decode = function (x, r, o, v, n) {
        if (n === 0) {
            return 0;
        }
        var t = 0;
        n += v;
        var s;
        for (s = r;; s++) {
            var u = x[s];
            var q;
            if (u & 128) {
                t = e[t];
            } else {
                t++;
            }
            if ((q = e[t]) < 0) {
                o[v++] = 255 & ~q;
                if (v >= n) {
                    break;
                }
                t = 0;
            }
            if ((u & 64) !== 0) {
                t = e[t];
            } else {
                t++;
            }
            if ((q = e[t]) < 0) {
                o[v++] = 255 & ~q;
                if (v >= n) {
                    break;
                }
                t = 0;
            }
            if ((u & 32) !== 0) {
                t = e[t];
            } else {
                t++;
            }
            if ((q = e[t]) < 0) {
                o[v++] = 255 & ~q;
                if (v >= n) {
                    break;
                }
                t = 0;
            }
            if ((u & 16) !== 0) {
                t = e[t];
            } else {
                t++;
            }
            if ((q = e[t]) < 0) {
                o[v++] = 255 & ~q;
                if (v >= n) {
                    break;
                }
                t = 0;
            }
            if ((u & 8) !== 0) {
                t = e[t];
            } else {
                t++;
            }
            if ((q = e[t]) < 0) {
                o[v++] = 255 & ~q;
                if (v >= n) {
                    break;
                }
                t = 0;
            }
            if ((u & 4) !== 0) {
                t = e[t];
            } else {
                t++;
            }
            if ((q = e[t]) < 0) {
                o[v++] = 255 & ~q;
                if (v >= n) {
                    break;
                }
                t = 0;
            }
            if ((u & 2) !== 0) {
                t = e[t];
            } else {
                t++;
            }
            if ((q = e[t]) < 0) {
                o[v++] = 255 & ~q;
                if (v >= n) {
                    break;
                }
                t = 0;
            }
            if ((u & 1) !== 0) {
                t = e[t];
            } else {
                t++;
            }
            if ((q = e[t]) < 0) {
                o[v++] = 255 & ~q;
                if (v >= n) {
                    break;
                }
                t = 0;
            }
        }
        return s + 1 - r;
    };
    var a = g.decode;
    return g;
}();