import { Class74 } from 'Class74.js';
import { Class72 } from 'Class72.js';
import { Class29 } from 'Class29.js';
import { Class5 } from 'Class5.js';
import { Class49 } from 'Class49.js';
import { Class71 } from 'Class71.js';
import { Class41 } from 'Class41.js';
import { Class76 } from 'Class76.js';
import { Class68 } from 'Class68.js';
import { Class63 } from 'Class63.js';
import { Class75 } from 'Class75.js';
import { Class7 } from 'Class7.js';
export var Class118 = function () {
    var a = function (g) {
        var r = null;
        var t;
        var o = 0;
        if (g.member433 !== undefined) {
            r = Class74({ member526: Class72.member96 });
            t = g.member433;
        } else {
            throw new Error('1204 ');
        }
        var s = -1, j = -1;
        r.member998 = function () {
            return s;
        };
        r.member999 = function () {
            return j;
        };
        var A = null;
        var q = null;
        var e = null;
        var d = null;
        var v = null;
        r.member1000 = function () {
            if (A === null) {
                return null;
            }
            return A.member575();
        };
        r.member1001 = function () {
            return A;
        };
        r.member1002 = function () {
            if (q === null) {
                return null;
            }
            return q.member575();
        };
        r.member1003 = function () {
            if (e === null) {
                return null;
            }
            return e.member575();
        };
        var b = null;
        var k = null;
        var n = undefined;
        var x = undefined;
        var h = false;
        r.member1004 = function () {
            return h;
        };
        var c = Class29([]);
        r.member578 = function () {
            return c.member291(Class5.member97);
        };
        r.member579 = function (B) {
            if (B) {
                c.enable(Class5.member97);
            } else {
                c.disable(Class5.member97);
            }
        };
        r.member487 = function (B) {
            o = B;
        };
        var u = function (B, I, H) {
            var F = Math.floor(B);
            var C = Math.floor(I);
            var D = A === null || q === null || e === null || d === null;
            if (s !== F || j !== C) {
                s = F;
                j = C;
                D = true;
            }
            if (D) {
                r.member515();
                A = t.member580(s, j, true, false, true);
                A.member510();
                q = t.member580(s, j, true, false, false);
                q.member510();
                e = t.member580(s * 0.75, j * 0.75, true, false, false);
                e.member510();
                d = t.member580(s * 0.75, j * 0.75, true, false, false);
                d.member510();
                b = Class49.member351(0, s, 0, j, 0.1, 5000, b);
                if (n === undefined) {
                    n = Class71(t);
                }
                n.set(0, 0, s, j);
            }
            if (v === null) {
                var J = new Uint8Array(128 * 128 * 4);
                var E = Class41.create();
                for (var G = 0; G < 128 * 128; G++) {
                    E[0] = Math.random();
                    E[1] = Math.random();
                    E[2] = Math.random();
                    Class41.normalize(E);
                    J[G * 4 + 0] = E[0] * 255;
                    J[G * 4 + 1] = E[1] * 255;
                    J[G * 4 + 2] = E[2] * 255;
                    J[G * 4 + 3] = 255;
                }
                v = Class76(t, 128, 128, J, false);
                v.member563(t.gl.member288);
            }
        };
        r.member519 = function () {
            if (!r.member291()) {
                throw new Error('1205 ');
            }
            u(t.viewportWidth, t.viewportHeight);
            t.member581(A);
            t.member582(0, 0, s, j);
            t.gl.clearColor(0, 0, 0, 0);
            t.gl.clear(t.gl.COLOR_BUFFER_BIT);
            t.gl.depthFunc(t.gl.LEQUAL);
            h = true;
        };
        r.member521 = function (B) {
            if (!r.member291()) {
                throw new Error('1206 ');
            }
            t.gl.depthFunc(t.gl.LESS);
            t.member581(null);
            h = false;
        };
        r.member514 = function () {
        };
        r.member515 = function () {
            r.member523();
            if (A !== null) {
                A.member511();
                A = null;
                q.member511();
                q = null;
                e.member511();
                e = null;
                d.member511();
                d = null;
            }
        };
        r.member523 = function () {
            h = false;
        };
        r.member583 = function () {
            h = false;
        };
        r.member584 = function (C, D, B, E) {
            t.member585();
            m(A.member575(), q);
            z(q.member575(), e, 1 / q.member575().member556(), 0);
            z(e.member575(), d, 0, 1 / e.member575().member557());
            i(C, d.member575(), D);
            t.member586();
        };
        var m = function (D, E) {
            var B = Class68.member421(Class63.member96.id, undefined);
            Class68.member483(B, true);
            var G = t.bindTexture(Class75.member539, D.member558(), t.gl.TEXTURE_2D);
            t.gl.uniform1i(B.member457(Class7.member189.id), G);
            var C = t.bindTexture(Class75.member540, v.member558(), t.gl.TEXTURE_2D);
            t.gl.uniform1i(B.member457(Class7.member190.id), C);
            var F = 1 / Math.max(D.member556(), D.member557());
            t.gl.uniform1f(B.member457(Class7.member175.id), F);
            y(B, E, b);
            t.member587();
        };
        var z = function (C, D, G, E) {
            var B = Class68.member421(Class63.member396.id, undefined);
            Class68.member483(B, true);
            var F = t.bindTexture(Class75.member539, C.member558(), t.gl.TEXTURE_2D);
            t.gl.uniform1i(B.member457(Class7.member189.id), F);
            t.gl.uniform2f(B.member457(Class7.member192.id), G, E);
            y(B, D, b);
            t.member587();
        };
        var i = function (E, C, F) {
            var B = Class68.member421(Class63.member415.id, c);
            Class68.member483(B, true);
            var G = t.bindTexture(Class75.member539, E.member558(), t.gl.TEXTURE_2D);
            t.gl.uniform1i(B.member457(Class7.member189.id), G);
            var D = t.bindTexture(Class75.member540, C.member558(), t.gl.TEXTURE_2D);
            t.gl.uniform1i(B.member457(Class7.member190.id), D);
            y(B, F, b);
            t.member587();
        };
        var y = function (H, F, G, K, C) {
            t.member581(F);
            var O = t.member588();
            var E = t.member589();
            t.member582(0, 0, O, E);
            if (C !== undefined) {
                if (x === undefined) {
                    x = Class71(t);
                }
                var I = s;
                var B = j;
                C[1] = E - (C[1] + C[3]);
                var D;
                if (K !== undefined && (K[0] !== 0 || K[1] !== 0 || K[2] !== I || K[3] !== B)) {
                    K[1] = B - (K[1] + K[3]);
                    var N = K[0] / I;
                    var M = K[1] / B;
                    var L = (K[0] + K[2]) / I;
                    var J = (K[1] + K[3]) / B;
                    x.set(C[0], C[1], C[2], C[3], N, M, L, J);
                } else {
                    x.set(C[0], C[1], C[2], C[3]);
                }
                x.bind();
                G = Class49.member351(0, O, 0, E, 0.1, 5000, k);
            } else {
                n.bind();
            }
            t.member590(false);
            t.gl.uniformMatrix4fv(H.member457(Class7.member142.id), false, G);
            t.gl.vertexAttribPointer(H.member459(Class7.member262.id), 2, t.gl.FLOAT, false, 16, 0);
            t.gl.vertexAttribPointer(H.member459(Class7.member270.id), 2, t.gl.FLOAT, false, 16, 8);
            t.gl.drawElements(t.gl.TRIANGLES, 6, t.gl.UNSIGNED_SHORT, 0);
        };
        g = undefined;
        return r;
    };
    return a;
}();