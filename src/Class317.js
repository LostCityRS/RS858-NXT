import { Class316 } from 'Class316.js';
export var Class317 = function () {
    var s = {};
    var m = 'A'.charCodeAt(0);
    var o = 'Z'.charCodeAt(0);
    var t = 'a'.charCodeAt(0);
    var u = 'z'.charCodeAt(0);
    var r = '0'.charCodeAt(0);
    var g = '9'.charCodeAt(0);
    var q = {
        member3709: 1,
        member3710: 12,
        member3711: 20,
        member3712: {
            member3713: 0,
            member3714: 1 << 0
        }
    };
    s.member3715 = q;
    s.member3716 = '<br>';
    var n = function (C) {
        var B = C.length;
        var D = 0;
        for (var A = 0; A < B; A++) {
            D = (D << 5) - D + C.charCodeAt(A);
            D &= 4294967295;
        }
        return D;
    };
    s.member3717 = n;
    var k = function (E, C) {
        if (E === undefined) {
            return undefined;
        }
        var D = 0;
        var B = E.length;
        while (D < B && z(E.charAt(D))) {
            D++;
        }
        while (B > D && z(E.charAt(B - 1))) {
            B--;
        }
        E = E.slice(D, B);
        if (E.length < q.member3709 || E.length > i(C)) {
            return undefined;
        }
        for (var A = 0; A < E.length; A++) {
            E = E.replace(E.charAt(A), j(E.charAt(A)));
        }
        if (E.length <= 0) {
            return undefined;
        } else {
            return E.toLowerCase();
        }
    };
    s.member3718 = k;
    var z = function (A) {
        return A === '\xA0' || A === ' ' || A === '_' || A === '-';
    };
    s.member3719 = function (A) {
        switch (A) {
        case ' ':
        case '\xA0':
        case '_':
        case '-':
            return '_';
        case '[':
        case ']':
        case '#':
            return A;
        case 'à':
        case 'á':
        case 'â':
        case 'ä':
        case 'ã':
        case 'À':
        case 'Á':
        case 'Â':
        case 'Ä':
        case 'Ã':
            return 'a';
        case 'è':
        case 'é':
        case 'ê':
        case 'ë':
        case 'È':
        case 'É':
        case 'Ê':
        case 'Ë':
            return 'e';
        case 'í':
        case 'î':
        case 'ï':
        case 'Í':
        case 'Î':
        case 'Ï':
            return 'i';
        case 'ò':
        case 'ó':
        case 'ô':
        case 'ö':
        case 'õ':
        case 'Ò':
        case 'Ó':
        case 'Ô':
        case 'Ö':
        case 'Õ':
            return 'o';
        case 'ù':
        case 'ú':
        case 'û':
        case 'ü':
        case 'Ù':
        case 'Ú':
        case 'Û':
        case 'Ü':
            return 'u';
        case 'ç':
        case 'Ç':
            return 'c';
        case 'ÿ':
        case 'Ÿ':
            return 'y';
        case 'ñ':
        case 'Ñ':
            return 'n';
        case 'ß':
            return 'b';
        default:
            return A;
        }
    };
    var j = s.member3719;
    s.member3720 = function (A) {
        switch (A) {
        case q.member3712.member3714:
            return q.TU_MAX_DISPLAY_LEN;
        default:
            return q.RS_MAX_DISPLAY_LEN;
        }
    };
    var i = s.member3720;
    var h = function (A) {
        return A >= m && A <= o || A >= t && A <= u;
    };
    s.member3721 = h;
    var e = function (A) {
        return A >= r && A <= g;
    };
    s.member3722 = e;
    var d = function (A) {
        return A >= r && A <= g || A >= m && A <= o || A >= t && A <= u;
    };
    s.member3723 = d;
    var c = function (A) {
        return '<img=' + A + '>';
    };
    s.member3724 = c;
    var b = function (A) {
        if (A >= 32 && A <= 126) {
            return true;
        }
        if (A >= 160 && A <= 255) {
            return true;
        }
        if (A === '\u20AC'.charCodeAt(0) || A === 'Œ'.charCodeAt(0) || A === '\u2014'.charCodeAt(0) || A === 'œ'.charCodeAt(0) || A === 'Ÿ'.charCodeAt(0)) {
            return true;
        }
        return false;
    };
    s.member3725 = b;
    var a = function (C, F, B, A) {
        var G = '';
        var E = ',';
        var D = '.';
        if (A === Class316.member3699.id) {
            E = '.';
            D = ',';
        }
        if (A === Class316.member3704.id) {
            D = '\xA0';
        }
        if (F > 0) {
            var H = Math.pow(10, F);
            G = E + C % H;
            C = Math.floor(intput / H);
        }
        while (C > 1000) {
            G = C % 1000 + G;
            if (C % 1000 < 10) {
                G = '00' + G;
            } else if (C % 1000 < 100) {
                G = '0' + G;
            }
            G = D + G;
            C = Math.floor(C / 1000);
        }
        return G = C + G;
    };
    s.member3726 = a;
    var y = function (C) {
        if (C.high === undefined || C.low === undefined) {
            throw new Error();
        }
        var E = C.high, D = C.low;
        var B = '';
        while (E !== 0 || D !== 0) {
            var A = E % 36 * Math.pow(2, 32) + D;
            E = Math.floor(E / 36);
            D = Math.floor(A / 36);
            B = (A % 36).toString(36) + B;
        }
        return B;
    };
    s.member3727 = y;
    var x = function (C) {
        var B = new Uint8Array(C.length);
        for (var A = 0; A < C.length; A++) {
            B[A] = C.charCodeAt(A);
        }
        return B;
    };
    s.member3728 = x;
    var v = function (H, G) {
        var C = H.length;
        var A = G.length;
        if (C === 0) {
            return A;
        }
        if (A === 0) {
            return C;
        }
        var B = Array(C + 1);
        var D = Array(C + 1);
        for (var F = 0; F <= C; F++) {
            B[F] = F;
        }
        for (var E = 1; E <= A; E++) {
            D[0] = E;
            var J = G.charCodeAt(E - 1);
            for (var F = 1; F <= C; F++) {
                D[F] = Math.min(Math.min(D[F - 1] + 1, B[F] + 1), B[F - 1] + (H.charCodeAt(F - 1) === J ? 0 : 1));
            }
            var I = B;
            B = D;
            D = I;
        }
        return B[C];
    };
    s.member3729 = v;
    s.member3730 = function (A) {
        return (A >> 24 & 255) + '.' + (A >> 16 & 255) + '.' + (A >> 8 & 255) + '.' + (A & 255);
    };
    return s;
}();