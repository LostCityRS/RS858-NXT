import { Class87 } from 'Class87.js';
export var Class125 = function () {
    var h = 0;
    var m = 1;
    var c = 2;
    var b = 3;
    var g = { member757: new Float32Array(3) };
    var i = new Array(4);
    for (var k = 0; k < i.length; k++) {
        i[k] = new Array(3);
        for (var e = 0; e < i[k].length; e++) {
            i[k][e] = { member757: new Float32Array(3) };
        }
    }
    var l = new Array(4);
    var d = new Array(4);
    var a = function (u) {
        var q = {};
        var j;
        var s = new Array(4);
        var v = 0;
        var r = 0;
        if (u.id === undefined) {
            throw new Error('2185 ');
        }
        j = q.id = u.id;
        s[c] = u.member1154;
        s[h] = u.member1155;
        s[m] = u.member1156;
        s[b] = u.member1157;
        if (false) {
        }
        if (u.member1158 !== undefined) {
            v = u.member1158;
        }
        if (u.member1159 !== undefined) {
            r = u.member1159;
        }
        q.member767 = function (G, y, J, E) {
            for (var C = h; C <= b; C++) {
                d[C] = Class87.member761(s[C], G.member768, G.member769);
                if (d[C] === undefined) {
                    continue;
                }
                d[C].member760 = G.member766 === Class87.member750 && !s[C];
            }
            var H = v;
            var x = r;
            if (G.member763 === 1) {
                var I = d[h];
                d[h] = d[m];
                d[m] = d[c];
                d[c] = d[b];
                d[b] = I;
                var z = x;
                x = -H;
                H = z;
            } else if (G.member763 === 2) {
                var I = d[h];
                d[h] = d[c];
                d[c] = I;
                I = d[b];
                d[b] = d[m];
                d[m] = I;
                x = -x;
                H = -H;
            } else if (G.member763 === 3) {
                var I = d[h];
                d[h] = d[b];
                d[b] = d[c];
                d[c] = d[m];
                d[m] = I;
                var z = x;
                x = H;
                H = -z;
            }
            for (var C = h; C <= b; C++) {
                if (d[C] === undefined) {
                    continue;
                }
                d[C].member746 = G.member746;
                d[C].member747 = G.member747;
            }
            var F = Class87.member762(false, Class87.member742, G.member768, G.member769);
            E.member764(G, y, J, H, x, g, F);
            for (var C = h; C <= b; C++) {
                if (d[C] === undefined || (d[C].member546 & 255) === 0) {
                    l[C] = undefined;
                    continue;
                }
                var B = d[C];
                i[C].member760 = d[C].member760;
                var A = l[C] = i[C];
                var D = A[0];
                Class87.member755(g, D);
                Class87.member753(B.member759 ? g : B, D);
                if (C == h) {
                    E.member765(A[1], y, J, y, J, B);
                    E.member765(A[2], y + 1, J, y, J, B);
                } else if (C == m) {
                    E.member765(A[1], y + 1, J, y, J, B);
                    E.member765(A[2], y + 1, J + 1, y, J, B);
                } else if (C == c) {
                    E.member765(A[1], y + 1, J + 1, y, J, B);
                    E.member765(A[2], y, J + 1, y, J, B);
                } else if (C == b) {
                    E.member765(A[1], y, J + 1, y, J, B);
                    E.member765(A[2], y, J, y, J, B);
                }
            }
            return l;
        };
        var t = q.member767;
        var n = function (x, y) {
            return s[x + y & 3];
        };
        var o = function (x, y) {
            return n(y, x.member763) ? x.member768 : x.member769;
        };
        q.member762 = function (y, B, x) {
            var A, z;
            switch (B) {
            case Class87.member738:
                A = o(y, h);
                z = o(y, b);
                break;
            case Class87.member741:
                A = o(y, h);
                z = o(y, m);
                break;
            case Class87.member739:
                A = o(y, c);
                z = o(y, b);
                break;
            case Class87.member740:
                A = o(y, c);
                z = o(y, m);
                break;
            default:
                throw new Error('2186 ' + member328);
            }
            return Class87.member762(false, A, z);
        };
        var p = q.member762;
        u = undefined;
        return q;
    };
    return a;
}();