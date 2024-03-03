import { Class72 } from 'Class72.js';
import { Class112 } from 'Class112.js';
import { Class119 } from 'Class119.js';
import { Class101 } from 'Class101.js';
import { Class111 } from 'Class111.js';
import { Class115 } from 'Class115.js';
import { Class118 } from 'Class118.js';
import { Class114 } from 'Class114.js';
import { Class109 } from 'Class109.js';
import { Class98 } from 'Class98.js';
import { Class77 } from 'Class77.js';
import { Class116 } from 'Class116.js';
import { Class117 } from 'Class117.js';
import { Class113 } from 'Class113.js';
import { Class107 } from 'Class107.js';
import { Class106 } from 'Class106.js';
import { Class97 } from 'Class97.js';
import { Class100 } from 'Class100.js';
import { Class41 } from 'Class41.js';
import { Class7 } from 'Class7.js';
export var Class120 = function () {
    var a = function (g) {
        var s = {};
        var v;
        var j = false;
        var h = null;
        var A = false;
        var q = 0;
        var c = true;
        var y = true;
        var d = new Float32Array([
            0,
            0,
            0,
            1
        ]);
        var b = new Float32Array([
            0.7,
            0.7,
            0.7
        ]);
        var t = new Float32Array([
            0.9,
            0.9,
            0.9
        ]);
        var i = new Float32Array([
            0,
            0,
            0
        ]);
        var k = new Float32Array([
            0.3,
            1,
            0.3
        ]);
        var z = {
            member466: d,
            member873: -1,
            member874: d,
            member875: -1,
            member876: d
        };
        var m = {
            member466: b,
            member873: -1,
            member874: b,
            member875: -1,
            member876: b
        };
        var r = {
            member466: t,
            member873: -1,
            member874: t,
            member875: -1,
            member876: t
        };
        var n = {
            member466: i,
            member873: -1,
            member874: i,
            member875: -1,
            member876: i
        };
        var o = {
            member466: k,
            member873: -1,
            member874: k,
            member875: -1,
            member876: k
        };
        var u = new Array(0);
        if (g.member433 !== undefined && g.member995 !== undefined) {
            v = g.member433;
            u[Class72.member407] = Class112({ member433: v });
            u[Class72.member501] = Class119({ member433: v });
            u[Class72.member500] = Class101({ member433: v });
            u[Class72.member406] = Class111({ member433: v });
            u[Class72.POINTLIGHT] = Class115({ member433: v });
            u[Class72.member96] = Class118({ member433: v });
            u[Class72.member499] = Class114({
                member433: v,
                member953: s
            });
            u[Class72.member502] = Class109({ member433: v });
            u[Class72.member416] = Class98({ member433: v });
            u[Class72.member117] = Class77({ member433: v });
            u[Class72.member414] = Class116({ member433: v });
            u[Class72.member503] = Class117({
                member433: v,
                member995: g.member995
            });
            u[Class72.member401] = Class113({ member433: v });
            u[Class72.member504] = Class107({ member433: v });
            u[Class72.member505] = Class106({ member433: v });
            u[Class72.member102] = Class97({ member433: v });
            u[Class72.member118] = Class100({ member433: v });
        } else {
            throw new Error('1794 ');
        }
        s.member1006 = function () {
            j = true;
            v.gl.clearColor(z.member466[0], z.member466[1], z.member466[2], z.member466[3]);
            h = null;
            A = false;
            for (var B = 0; B < u.length; B++) {
                u[B].member583();
            }
        };
        s.member1007 = function () {
            j = false;
        };
        s.member301 = function () {
            member1008(d, 0);
            member1009(b, 0);
            member1010(t, 0);
            member1011(i, 0);
            member1012(k, 0);
            c = true;
            for (var B = 0; B < u.length; B++) {
                u[B].member301();
            }
        };
        s.member1008 = function (C, B) {
            x(z, new Float32Array(C), B);
            if (B === 0) {
                v.gl.clearColor(z.member466[0], z.member466[1], z.member466[2], z.member466[3]);
            }
        };
        s.member979 = function () {
            v.gl.clearColor(z.member466[0], z.member466[1], z.member466[2], z.member466[3]);
        };
        s.member1009 = function (C, B) {
            x(m, new Float32Array(C), B);
        };
        s.member1013 = function () {
            return m.member466;
        };
        s.member1010 = function (C, B) {
            x(r, new Float32Array(C), B);
        };
        s.member1014 = function () {
            return r.member466;
        };
        s.member1011 = function (C, B) {
            x(n, new Float32Array(C), B);
        };
        s.member1015 = function () {
            return n.member466;
        };
        s.member1012 = function (B, C) {
            Class41.normalize(B);
            x(o, new Float32Array(B), C);
        };
        s.member1016 = function () {
            return o.member466;
        };
        var x = function (C, D, B) {
            if (B < 1) {
                C.member466 = D;
                A = false;
                C.member875 = 0;
            } else {
                C.member874 = new Float32Array(C.member466);
                C.member873 = q;
                C.member876 = D;
                C.member875 = q + B;
            }
        };
        s.member943 = function (B) {
            if (B.member457(Class7.member149.id) !== undefined) {
                B.member467(Class7.member149, m.member466);
            }
            if (B.member457(Class7.member151.id) !== undefined) {
                B.member467(Class7.member151, r.member466);
            }
            if (B.member457(Class7.member152.id) !== undefined) {
                B.member467(Class7.member152, n.member466);
            }
            B.member467(Class7.member150, o.member466);
        };
        s.member1017 = function () {
            return c;
        };
        s.member1018 = function () {
            c = true;
        };
        s.member1019 = function () {
            c = false;
        };
        s.member1020 = function () {
            return y;
        };
        s.member1021 = function () {
            y = true;
        };
        s.member1022 = function () {
            y = false;
        };
        s.member1023 = function (B) {
            u[B].enable();
        };
        s.member1024 = function (B) {
            u[B].disable();
        };
        s.member1025 = function (B) {
            return u[B].member291();
        };
        s.member518 = function (C, B) {
            u[C].member518(B);
        };
        s.member520 = function (C, B) {
            u[C].member520(B);
        };
        s.member522 = function (B) {
            return u[B].member522();
        };
        s.member941 = function (B) {
            return u[B];
        };
        s.member1026 = function (C, B) {
            u[C].bind(B);
        };
        s.member1027 = function () {
            var B = new Array(0);
            if (u[Class72.member407].member291() && !u[Class72.member407].member516()) {
                B.push(u[Class72.member407]);
            }
            if (u[Class72.member102].member291() && !u[Class72.member102].member516()) {
                B.push(u[Class72.member102]);
            }
            if (u[Class72.member96].member291() && !u[Class72.member96].member516()) {
                B.push(u[Class72.member96]);
            }
            if (u[Class72.member502].member291() && !u[Class72.member502].member516()) {
                B.push(u[Class72.member502]);
            }
            if (u[Class72.member416].member291() && !u[Class72.member416].member516()) {
                B.push(u[Class72.member416]);
            }
            if (u[Class72.member117].member291() && !u[Class72.member117].member516()) {
                B.push(u[Class72.member117]);
            }
            if (u[Class72.member414].member291() && !u[Class72.member414].member516()) {
                B.push(u[Class72.member414]);
            }
            if (u[Class72.member503].member291() && !u[Class72.member503].member516()) {
                B.push(u[Class72.member503]);
            }
            if (u[Class72.member406].member291() && !u[Class72.member406].member516()) {
                B.push(u[Class72.member406]);
            }
            return B;
        };
        s.member487 = function () {
            q++;
            e(z);
            if (e(m)) {
                A = false;
            }
            if (e(r)) {
                A = false;
            }
            if (e(n)) {
                A = false;
            }
            if (e(o)) {
                A = false;
            }
            u[Class72.member500].member487(q);
            u[Class72.member414].member487(q);
            u[Class72.member503].member487(q);
            u[Class72.member96].member487(q);
            u[Class72.member502].member487(q);
            u[Class72.member416].member487(q);
            u[Class72.member117].member487(q);
            u[Class72.member401].member487(q);
        };
        var e = function (D) {
            if (D.member875 >= q) {
                var C = (q - D.member873) / (D.member875 - D.member873);
                for (var B = 0; B < D.member874.length; B++) {
                    D.member466[B] = D.member874[B] + C * (D.member876[B] - D.member874[B]);
                }
                return true;
            } else {
                return false;
            }
        };
        g = undefined;
        return s;
    };
    return a;
}();