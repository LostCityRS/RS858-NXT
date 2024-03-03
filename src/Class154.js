import { Class105 } from 'Class105.js';
import { Class150 } from 'Class150.js';
import { Class151 } from 'Class151.js';
import { Class148 } from 'Class148.js';
import { Class152 } from 'Class152.js';
import { Class76 } from 'Class76.js';
import { Class147 } from 'Class147.js';
import { Class153 } from 'Class153.js';
import { Class93 } from 'Class93.js';
import { Priority } from 'Class96.js';
export var Class154 = function () {
    var k = {};
    var m;
    var i;
    var q = 0;
    var a = 1;
    var d = 2;
    var h = 3;
    var y = 4;
    var v;
    var t;
    var s;
    var b = false;
    k.member553 = function () {
        return b;
    };
    var j;
    var u = Class105({
        member895: 16384 * 512,
        member898: function (z) {
            z.member510();
        },
        member897: function (z) {
            z.member511();
        }
    });
    var n = function (z) {
        if (z.member433 !== undefined) {
            m = z.member433;
            i = z.member995;
            v = z.member1543;
            t = z.member1544;
            s = z.member1545;
            b = m.member553();
        } else {
            b = z.member1546;
        }
        Class150.member25({
            member433: m,
            member1300: k,
            member1507: Class151
        });
        Class148.member25({
            member433: m,
            member1300: k,
            member995: i,
            member1490: Class152
        });
    };
    k.member25 = n;
    k.member1345 = function (A, D, z) {
        var F = A + Math.pow(2, 36 + q) + (z ? 1 : 0) * Math.pow(2, 35);
        var C = u.find(F);
        if (C !== null) {
            return C;
        } else {
            var B = e(q, A, D, z);
            if (B === NULL) {
                return NULL;
            }
            if (B !== undefined) {
                if (z && !B.member1547) {
                    throw new Error('1621 ' + A + '1621 ');
                }
                var E = Class76(m, D, D, B.member1548, true, true, true, B.member1547);
                u.put(E, B.width * B.height, F);
                return E;
            }
            return undefined;
        }
    };
    var o = k.member1277;
    k.member1549 = function (A) {
        if (!Class147.member1483()) {
            return NULL;
        }
        var D = Class147.member1484(A);
        if (D === undefined) {
            throw new Error('1622 ' + A);
        }
        if (!D.member1365()) {
            throw new Error('1623 ' + A + '1623 ');
        }
        var C = D.member1469();
        var z = D.getSize();
        var B = e(y, A, z, C);
        if (B === NULL) {
            return NULL;
        }
        if (B === undefined) {
            return undefined;
        }
        if (B.member1548.byteLength !== z * z * 6 * 4) {
            throw new Error('1624 ' + A + '1624 ');
        }
        return Class153(m, z, z, B.member1548, false);
    };
    var g = k.member1549;
    k.member1550 = function (S, V, B, N) {
        var Q = undefined;
        if (S === q || S === y) {
            Q = v;
        } else if (S === h) {
            Q = t;
        }
        if (!i.member1437(Q)) {
            return NULL;
        }
        var R = i.member1551(Q, V, 0, Class93.member797);
        if (S !== q && N) {
            throw new Error('1625 ');
        }
        var C = undefined;
        if (N && m.member553()) {
            C = i.member1551(t, V, 0, Class93.member797);
        }
        if (R === undefined) {
            return undefined;
        }
        if (!R || C === false) {
            return NULL;
        }
        var A = i.getFile(Q, V, 0, Priority.member841);
        var I = A.getData();
        var H = false;
        if (C) {
            var T = i.getFile(t, V, 0, Priority.member841);
            var O = new Uint32Array(T.getData());
            var P = new Uint8Array(I);
            var z = new Float32Array(B * B * 4);
            var K = 0;
            var U = B * B;
            for (var E = 0; E < U; E++) {
                var G = P[E * 4 + 0];
                var J = P[E * 4 + 1];
                var L = P[E * 4 + 2];
                var M = P[E * 4 + 3];
                var F = O[E] & 4095;
                var D = 1 + 31 * F / 4096;
                z[E * 4 + 0] = G * D / 255;
                z[E * 4 + 1] = J * D / 255;
                z[E * 4 + 2] = L * D / 255;
                z[E * 4 + 3] = M / 255;
            }
            I = z.buffer;
            H = true;
        }
        return {
            member1548: I,
            member1547: H,
            width: B,
            height: B
        };
    };
    var e = k.member1550;
    var r = function () {
        Class150.member487();
        Class148.member487();
    };
    k.member487 = r;
    var x = function () {
        Class150.member486();
        Class148.member486();
        u.member905(100);
    };
    k.member486 = x;
    var c = function () {
        Class150.member1347();
    };
    k.member1347 = c;
    return k;
}();