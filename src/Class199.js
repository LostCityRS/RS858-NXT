import { Class188 } from 'Class188.js';
import { HillChange } from 'Class170.js';
export var Class199 = function (m) {
    var d = {};
    var i;
    var j;
    var e, b;
    var k;
    var a, n;
    var h;
    if (m.request.member2365 !== undefined && m.request.member2366 !== undefined && m.request.member2367 !== undefined) {
        i = m.request.member2365;
        a = m.request.member2366;
        n = m.request.member2367;
        j = m.request.member2368;
        e = m.request.member2241;
        b = m.request.member2242;
        k = m.request.member2369;
        h = m.request.member2370;
        if (false) {
        } else {
            d.name = '';
        }
    } else {
        throw new Error('2064 ');
    }
    var g = function (p, q, o) {
    };
    d.member2236 = g;
    var c = function (o, p) {
    };
    d.member1648 = c;
    var l = function (y) {
        var A = Class188(undefined, undefined, undefined, undefined, undefined, undefined, i);
        var r = undefined;
        if (h !== null && a !== HillChange.member1852) {
            var x = function (H, G) {
                if (j === 1) {
                    var J = H;
                    H = G;
                    G = -J;
                } else if (j === 2) {
                    H = -H;
                    G = -G;
                } else if (j === 3) {
                    var J = H;
                    H = -G;
                    G = J;
                }
                H += e / 2;
                if (H < 0) {
                    H = 0;
                } else if (H >= e) {
                    H = e - 1;
                }
                G += b / 2;
                if (G < 0) {
                    G = 0;
                } else if (G >= b) {
                    G = b - 1;
                }
                var K = 512;
                var B = Math.floor(H / K);
                var I = Math.floor(G / K);
                var D = H & K - 1;
                var C = G & K - 1;
                var F = (h.member1644[B][I] * (K - D) + h.member1644[B + 1][I] * D) / K;
                var E = (h.member1644[B][I + 1] * (K - D) + h.member1644[B + 1][I + 1] * D) / K;
                return (F * (K - C) + E * C) / K - k;
            };
            var s = function (H, G) {
                if (h.member2371 === undefined) {
                    return undefined;
                }
                if (j === 1) {
                    var J = H;
                    H = G;
                    G = -J;
                } else if (j === 2) {
                    H = -H;
                    G = -G;
                } else if (j === 3) {
                    var J = H;
                    H = -G;
                    G = J;
                }
                H += e / 2;
                if (H < 0) {
                    H = 0;
                } else if (H >= e) {
                    H = e - 1;
                }
                G += b / 2;
                if (G < 0) {
                    G = 0;
                } else if (G >= b) {
                    G = b - 1;
                }
                var K = 512;
                var B = Math.floor(H / K);
                var I = Math.floor(G / K);
                var D = H & K - 1;
                var C = G & K - 1;
                var F = (h.member2371[B][I] * (K - D) + h.member2371[B + 1][I] * D) / K;
                var E = (h.member2371[B][I + 1] * (K - D) + h.member2371[B + 1][I + 1] * D) / K;
                return (F * (K - C) + E * C) / K - k;
            };
            if (a === HillChange.ROTATE) {
                var t = (n & 255) * 4;
                var q = (n >> 8 & 255) * 4;
                var z = (n >> 16 & 255) << 2;
                var v = (n >> 24 & 255) << 2;
                r = A.member2120(t, q, z, v, x);
            } else {
                A.member1725(a, n, x, s);
            }
        }
        var o = [];
        var u = A.member681(false, o);
        var p = {
            member2372: r,
            member2373: u
        };
        if (r !== undefined && r.arrayBuffer !== undefined) {
            o.push(r.arrayBuffer);
        }
        return {
            member1658: p,
            member1659: o
        };
    };
    d.member78 = l;
    m = undefined;
    return d;
};