export var Class122 = function () {
    var k = {};
    var i = '?'.charCodeAt(0);
    var m = 'A'.charCodeAt(0);
    var n = 'a'.charCodeAt(0);
    var g = 'F'.charCodeAt(0);
    var d = 'f'.charCodeAt(0);
    var v = 'Z'.charCodeAt(0);
    var h = 'z'.charCodeAt(0);
    var j = '0'.charCodeAt(0);
    var e = '9'.charCodeAt(0);
    var u = {};
    u['\u20AC'.charCodeAt(0)] = 128;
    u['\u201A'.charCodeAt(0)] = 130;
    u['ƒ'.charCodeAt(0)] = 131;
    u['\u201E'.charCodeAt(0)] = 132;
    u['\u2026'.charCodeAt(0)] = 133;
    u['\u2020'.charCodeAt(0)] = 134;
    u['\u2021'.charCodeAt(0)] = 135;
    u['ˆ'.charCodeAt(0)] = 136;
    u['\u2030'.charCodeAt(0)] = 137;
    u['Š'.charCodeAt(0)] = 138;
    u['\u2039'.charCodeAt(0)] = 139;
    u['Œ'.charCodeAt(0)] = 140;
    u['Ž'.charCodeAt(0)] = 142;
    u['\u2018'.charCodeAt(0)] = 145;
    u['\u2019'.charCodeAt(0)] = 146;
    u['\u201C'.charCodeAt(0)] = 147;
    u['\u201D'.charCodeAt(0)] = 148;
    u['\u2022'.charCodeAt(0)] = 149;
    u['\u2013'.charCodeAt(0)] = 150;
    u['\u2014'.charCodeAt(0)] = 151;
    u['\u02DC'.charCodeAt(0)] = 152;
    u['\u2122'.charCodeAt(0)] = 153;
    u['š'.charCodeAt(0)] = 154;
    u['\u203A'.charCodeAt(0)] = 155;
    u['œ'.charCodeAt(0)] = 156;
    u['ž'.charCodeAt(0)] = 158;
    u['Ÿ'.charCodeAt(0)] = 159;
    var s = [
        '\u20AC'.charCodeAt(0),
        0,
        '\u201A'.charCodeAt(0),
        'ƒ'.charCodeAt(0),
        '\u201E'.charCodeAt(0),
        '\u2026'.charCodeAt(0),
        '\u2020'.charCodeAt(0),
        '\u2021'.charCodeAt(0),
        'ˆ'.charCodeAt(0),
        '\u2030'.charCodeAt(0),
        'Š'.charCodeAt(0),
        '\u2039'.charCodeAt(0),
        'Œ'.charCodeAt(0),
        0,
        'Ž'.charCodeAt(0),
        0,
        0,
        '\u2018'.charCodeAt(0),
        '\u2019'.charCodeAt(0),
        '\u201C'.charCodeAt(0),
        '\u201D'.charCodeAt(0),
        '\u2022'.charCodeAt(0),
        '\u2013'.charCodeAt(0),
        '\u2014'.charCodeAt(0),
        '\u02DC'.charCodeAt(0),
        '\u2122'.charCodeAt(0),
        'š'.charCodeAt(0),
        '\u203A'.charCodeAt(0),
        'œ'.charCodeAt(0),
        0,
        'ž'.charCodeAt(0),
        'Ÿ'.charCodeAt(0)
    ];
    var c = function (x) {
        x = x & 255;
        if (x >= 128 && x < 160) {
            if (s[x - 128] === 0) {
                return false;
            }
        }
        return true;
    };
    k.member1034 = c;
    var b = function (x) {
        var y;
        if (x > 0 && x < 128 || x >= 160 && x <= 255) {
            y = x;
        } else {
            y = u[x];
        }
        if (y === undefined) {
            y = i;
        }
        return y;
    };
    k.member1035 = b;
    var a = function (x) {
        var y = x & 255;
        if (y === 0) {
            throw new Error('963 ' + x);
        }
        if (y >= 128 && y < 160) {
            var z = s[y - 128];
            if (z === 0) {
                z = i;
            }
            y = z;
        }
        return y;
    };
    k.member1036 = a;
    k.member1037 = function (y) {
        var z = y.length;
        var A = new Array(z);
        for (var x = 0; x < z; x++) {
            var B = y.charCodeAt(x);
            if (B > 0 && B < 128 || B >= 160 && B <= 255) {
                A[x] = B;
                continue;
            }
            A[x] = u[B];
            if (A[x] === undefined) {
                A[x] = i;
            }
        }
        return A;
    };
    var t = k.member1037;
    k.member1038 = function (y) {
        var z = y.length;
        var A = new Uint16Array(z);
        var C = 0;
        for (var x = 0; x < z; x++) {
            var B = y[x] & 255;
            if (B === 0) {
                continue;
            }
            if (B >= 128 && B < 160) {
                var D = s[B - 128];
                if (D === 0) {
                    D = i;
                }
                B = D;
            }
            A[C++] = B;
        }
        return String.fromCharCode.apply(undefined, A.subarray(0, C));
    };
    var r = k.member1038;
    k.member1039 = function (C) {
        var A = '';
        var z;
        var B;
        var y;
        var D;
        for (var x = 0; x < C.length; x++) {
            z = C.charAt(x);
            B = z.charCodeAt(0);
            if (B >= n && B <= h || B >= m && B <= v || z === '.' || z === '-' || z === '*' || z === '_') {
                A += z;
            } else if (z === ' ') {
                A += '+';
            } else {
                y = t(z);
                A += '%';
                D = y >> 4 & 15;
                if (D >= 10) {
                    A += String.fromCharCode(m - 10 + D);
                } else {
                    A += String.fromCharCode(j + D);
                }
                D = y & 15;
                if (D >= 10) {
                    A += String.fromCharCode(m - 10 + D);
                } else {
                    A += String.fromCharCode(j + D);
                }
            }
        }
        return A;
    };
    var q = k.member1039;
    k.member1040 = function (D) {
        var z = '';
        var y;
        var C;
        var B;
        var A = D.length;
        for (var x = 0; x < A; x++) {
            y = D.charAt(x);
            if (y === '%' && A > x + 2) {
                y = D.charAt(x + 1);
                C = y.charCodeAt(0);
                B = 0;
                if (C >= n && C <= d) {
                    B = 10 + C - n;
                } else if (C >= m && C <= g) {
                    B = 10 + C - m;
                } else if (C >= j && C <= e) {
                    B = C - j;
                } else {
                    z += '%';
                    continue;
                }
                C = C << 4;
                y = D.charAt(x + 2);
                C = y.charCodeAt(0);
                if (C >= n && C <= d) {
                    B += 10 + C - n;
                } else if (C >= m && C <= g) {
                    B += 10 + C - m;
                } else if (C >= j && C <= e) {
                    B += C - j;
                } else {
                    z += '%';
                    continue;
                }
                if (B !== 0 && c(B)) {
                    z += a(B);
                }
            } else if (y === '+') {
                z += ' ';
            } else {
                z += y;
            }
        }
        return z;
    };
    var o = k.member1040;
    return k;
}();