export var Class458 = function () {
    var a = function (k) {
        var r = {};
        var t = 8;
        var z = 1 << t;
        var d = z - 1 << 2;
        var D = 0;
        var B = null;
        var m = null;
        var j = 0;
        var q = 0;
        var n = 0;
        r.next = function () {
            if (D === 0) {
                s();
                D = z;
            }
            return B[--D];
        };
        var h = r.next;
        r.peek = function () {
            if (D === 0) {
                s();
                D = z;
            }
            return B[D - 1];
        };
        var g = r.peek;
        var s = function () {
            var c, b, e;
            q = q + ++n | 0;
            for (c = 0; c < z; ++c) {
                b = m[c];
                if ((c & 2) === 0) {
                    if ((c & 1) === 0) {
                        j ^= j << 13;
                    } else {
                        j ^= j >>> 6;
                    }
                } else if ((c & 1) === 0) {
                    j ^= j << 2;
                } else {
                    j ^= j >>> 16;
                }
                j = j + m[c + z / 2 & z - 1] | 0;
                m[c] = e = m[(b & d) >> 2] + j + q | 0;
                B[c] = q = m[(e >> t & d) >> 2] + b | 0;
            }
        };
        if (k.member7265 !== undefined) {
            m = new Array(z);
            B = new Array(z);
            for (var E = 0; E < z; E++) {
                m[E] = 0;
                B[E] = 0;
            }
            for (var E = 0; E < k.member7265.length; E++) {
                B[E] = k.member7265[E];
            }
            var E;
            var C, A, y, o, x, v, i, u;
            C = A = y = o = x = v = i = u = 2654435769 | 0;
            for (E = 0; E < 4; ++E) {
                C ^= A << 11;
                o = o + C | 0;
                A = A + y | 0;
                A ^= y >>> 2;
                x = x + A | 0;
                y = y + o | 0;
                y ^= o << 8;
                v = v + y | 0;
                o = o + x | 0;
                o ^= x >>> 16;
                i = i + o | 0;
                x = x + v | 0;
                x ^= v << 10;
                u = u + x | 0;
                v = v + i | 0;
                v ^= i >>> 4;
                C = C + v | 0;
                i = i + u | 0;
                i ^= u << 8;
                A = A + i | 0;
                u = u + C | 0;
                u ^= C >>> 9;
                y = y + u | 0;
                C = C + A | 0;
            }
            for (E = 0; E < z; E += 8) {
                C = C + B[E] | 0;
                A = A + B[E + 1] | 0;
                y = y + B[E + 2] | 0;
                o = o + B[E + 3] | 0;
                x = x + B[E + 4] | 0;
                v = v + B[E + 5] | 0;
                i = i + B[E + 6] | 0;
                u = u + B[E + 7] | 0;
                C ^= A << 11;
                o = o + C | 0;
                A = A + y | 0;
                A ^= y >>> 2;
                x = x + A | 0;
                y = y + o | 0;
                y ^= o << 8;
                v = v + y | 0;
                o = o + x | 0;
                o ^= x >>> 16;
                i = i + o | 0;
                x = x + v | 0;
                x ^= v << 10;
                u = u + x | 0;
                v = v + i | 0;
                v ^= i >>> 4;
                C = C + v | 0;
                i = i + u | 0;
                i ^= u << 8;
                A = A + i | 0;
                u = u + C | 0;
                u ^= C >>> 9;
                y = y + u | 0;
                C = C + A | 0;
                m[E] = C;
                m[E + 1] = A;
                m[E + 2] = y;
                m[E + 3] = o;
                m[E + 4] = x;
                m[E + 5] = v;
                m[E + 6] = i;
                m[E + 7] = u;
            }
            for (E = 0; E < z; E += 8) {
                C = C + m[E] | 0;
                A = A + m[E + 1] | 0;
                y = y + m[E + 2] | 0;
                o = o + m[E + 3] | 0;
                x = x + m[E + 4] | 0;
                v = v + m[E + 5] | 0;
                i = i + m[E + 6] | 0;
                u = u + m[E + 7] | 0;
                C ^= A << 11;
                o = o + C | 0;
                A = A + y | 0;
                A ^= y >>> 2;
                x = x + A | 0;
                y = y + o | 0;
                y ^= o << 8;
                v = v + y | 0;
                o = o + x | 0;
                o ^= x >>> 16;
                i = i + o | 0;
                x = x + v | 0;
                x ^= v << 10;
                u = u + x | 0;
                v = v + i | 0;
                v ^= i >>> 4;
                C = C + v | 0;
                i = i + u | 0;
                i ^= u << 8;
                A = A + i | 0;
                u = u + C | 0;
                u ^= C >>> 9;
                y = y + u | 0;
                C = C + A | 0;
                m[E] = C;
                m[E + 1] = A;
                m[E + 2] = y;
                m[E + 3] = o;
                m[E + 4] = x;
                m[E + 5] = v;
                m[E + 6] = i;
                m[E + 7] = u;
            }
            s();
            D = z;
        } else {
            throw new Error('1283 ');
        }
        k = undefined;
        return r;
    };
    return a;
}();