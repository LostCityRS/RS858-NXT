export var Class335 = function () {
    var b = {};
    var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    b.member3808 = function (m) {
        var g = a.indexOf(m.charAt(m.length - 1));
        var e = a.indexOf(m.charAt(m.length - 2));
        var u = m.length / 4 * 3;
        if (g == 64) {
            u--;
        }
        if (e == 64) {
            u--;
        }
        var k = new ArrayBuffer(u);
        var i;
        var t, r, o;
        var s, q, n, c;
        var h = 0;
        var d = 0;
        i = new Uint8Array(k);
        m = m.replace(/[^A-Za-z0-9\+\/\=]/g, '');
        for (h = 0; h < u; h += 3) {
            s = a.indexOf(m.charAt(d++));
            q = a.indexOf(m.charAt(d++));
            n = a.indexOf(m.charAt(d++));
            c = a.indexOf(m.charAt(d++));
            t = s << 2 | q >> 4;
            r = (q & 15) << 4 | n >> 2;
            o = (n & 3) << 6 | c;
            i[h] = t;
            if (n != 64) {
                i[h + 1] = r;
            }
            if (c != 64) {
                i[h + 2] = o;
            }
        }
        return i.buffer;
    };
    b.member3809 = function (i) {
        var h = '';
        var j = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        var s = new Uint8Array(i);
        var q = s.byteLength;
        var g = q % 3;
        var r = q - g;
        var o, m, k, d;
        var n;
        for (var e = 0; e < r; e = e + 3) {
            n = s[e] << 16 | s[e + 1] << 8 | s[e + 2];
            o = (n & 16515072) >> 18;
            m = (n & 258048) >> 12;
            k = (n & 4032) >> 6;
            d = n & 63;
            h += j[o] + j[m] + j[k] + j[d];
        }
        if (g == 1) {
            n = s[r];
            o = (n & 252) >> 2;
            m = (n & 3) << 4;
            h += j[o] + j[m] + '==';
        } else if (g == 2) {
            n = s[r] << 8 | s[r + 1];
            o = (n & 64512) >> 10;
            m = (n & 1008) >> 4;
            k = (n & 15) << 2;
            h += j[o] + j[m] + j[k] + '=';
        }
        return h;
    };
    return b;
}();