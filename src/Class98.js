import { Class74 } from 'Class74.js';
import { Class72 } from 'Class72.js';
import { Class29 } from 'Class29.js';
import { Class5 } from 'Class5.js';
import { Class49 } from 'Class49.js';
import { Class71 } from 'Class71.js';
import { Class68 } from 'Class68.js';
import { Class63 } from 'Class63.js';
import { Class75 } from 'Class75.js';
import { Class7 } from 'Class7.js';
export var Class98 = function () {
    var a = function (h) {
        var q = null;
        var t;
        var n = 0;
        if (h.member433 !== undefined) {
            q = Class74({ member526: Class72.member416 });
            t = h.member433;
        } else {
            throw new Error('1144 ');
        }
        var r = -1, i = -1;
        q.member844 = function () {
            return r;
        };
        q.member845 = function () {
            return i;
        };
        var s = null;
        var b = null;
        var k = null;
        var v = undefined;
        var g = new Float32Array(1);
        g[0] = 10000;
        var d = new Float32Array(4);
        d[0] = 2000;
        d[1] = 8000;
        d[2] = 2000;
        d[3] = 8000;
        q.member846 = function () {
            if (s === null) {
                return null;
            }
            var B = s.member847();
            if (B === undefined) {
                B = s.member575();
            }
            return B;
        };
        q.member848 = function () {
            return s;
        };
        q.member849 = function () {
            return g[0];
        };
        q.member850 = function (B) {
            g[0] = B;
        };
        q.member851 = function () {
            return d[0];
        };
        q.member852 = function (B) {
            d[0] = B;
        };
        q.member853 = function () {
            return d[1];
        };
        q.member854 = function (B) {
            d[1] = B;
        };
        q.member855 = function () {
            return d[2];
        };
        q.member856 = function (B) {
            d[2] = B;
        };
        q.member857 = function () {
            return d[3];
        };
        q.member858 = function (B) {
            d[3] = B;
        };
        var c = null;
        var j = null;
        var m = undefined;
        var y = undefined;
        var o = false;
        q.member859 = function () {
            return o;
        };
        var e = Class29([]);
        q.member578 = function () {
            return e.member291(Class5.member98);
        };
        q.member579 = function (B) {
            if (B) {
                e.enable(Class5.member98);
            } else {
                e.disable(Class5.member98);
            }
        };
        q.member487 = function (B) {
            n = B;
        };
        var u = function (F, D, E) {
            var C = Math.floor(F);
            var B = Math.floor(D);
            var G = s === null || b === null || k === null;
            if (r !== C || i !== B) {
                r = C;
                i = B;
                G = true;
            }
            if (G) {
                q.member515();
                if (t.member860()) {
                    e.enable(Class5.member111);
                } else {
                    e.disable(Class5.member111);
                }
                s = t.member580(r, i, true, false, false);
                s.member510();
                b = t.member580(r * 0.5, i * 0.5, true, false, false);
                b.member510();
                k = t.member580(r * 0.5, i * 0.5, true, false, false);
                k.member510();
                c = Class49.member351(0, r, 0, i, 0.1, 5000, c);
                if (m === undefined) {
                    m = Class71(t);
                }
                m.set(0, 0, r, i);
            }
        };
        q.member519 = function (B) {
            if (!q.member291()) {
                throw new Error('1145 ');
            }
            u(t.viewportWidth, t.viewportHeight);
            t.member581(s);
            t.member582(0, 0, r, i);
            t.gl.clearColor(1, 1, 1, 1);
            t.gl.clear(t.gl.COLOR_BUFFER_BIT | t.gl.DEPTH_BUFFER_BIT);
            o = true;
            v = B.member861;
            if (t.member860()) {
                t.gl.colorMask(false, false, false, false);
            }
        };
        q.member521 = function (B) {
            if (!q.member291()) {
                throw new Error('1146 ');
            }
            if (t.member860()) {
                t.gl.colorMask(true, true, true, true);
            }
            t.member581(null);
            o = false;
        };
        q.member514 = function () {
        };
        q.member515 = function () {
            q.member523();
            if (s !== null) {
                s.member511();
                s = null;
            }
        };
        q.member523 = function () {
            o = false;
        };
        q.member583 = function () {
            o = false;
        };
        q.member584 = function (C, D, B, E) {
            t.member585();
            A(C, b, 1 / C.member556(), 0);
            A(b.member575(), k, 0, 1 / b.member575().member557());
            x(C, k.member575(), this.member846(), D);
            t.member586();
        };
        var A = function (C, D, G, E) {
            var B = Class68.member421(Class63.member396.id, undefined);
            Class68.member483(B, true);
            var F = t.bindTexture(Class75.member539, C.member558(), t.gl.TEXTURE_2D);
            t.gl.uniform1i(B.member457(Class7.member189.id), F);
            t.gl.uniform2f(B.member457(Class7.member192.id), G, E);
            z(B, D, c);
            t.member587();
        };
        var x = function (G, D, B, H) {
            var C = Class68.member421(Class63.member416.id, e);
            Class68.member483(C, true);
            var I = t.bindTexture(Class75.member539, G.member558(), t.gl.TEXTURE_2D);
            t.gl.uniform1i(C.member457(Class7.member189.id), I);
            var F = t.bindTexture(Class75.member540, D.member558(), t.gl.TEXTURE_2D);
            t.gl.uniform1i(C.member457(Class7.member190.id), F);
            var E = t.bindTexture(Class75.member541, B.member558(), t.gl.TEXTURE_2D);
            t.gl.uniform1i(C.member457(Class7.member198.id), E);
            if (v !== null && v !== undefined) {
                t.gl.uniformMatrix4fv(C.member457(Class7.member146.id), false, v);
            }
            t.gl.uniform1f(C.member457(Class7.member260.id), g[0]);
            t.gl.uniform4f(C.member457(Class7.member261.id), d[0], d[1], d[2], d[3]);
            z(C, H, c);
            t.member587();
        };
        var z = function (H, F, G, K, C) {
            t.member581(F);
            var O = t.member588();
            var E = t.member589();
            t.member582(0, 0, O, E);
            if (C !== undefined) {
                if (y === undefined) {
                    y = Class71(t);
                }
                var I = r;
                var B = i;
                C[1] = E - (C[1] + C[3]);
                var D;
                if (K !== undefined && (K[0] !== 0 || K[1] !== 0 || K[2] !== I || K[3] !== B)) {
                    K[1] = B - (K[1] + K[3]);
                    var N = K[0] / I;
                    var M = K[1] / B;
                    var L = (K[0] + K[2]) / I;
                    var J = (K[1] + K[3]) / B;
                    y.set(C[0], C[1], C[2], C[3], N, M, L, J);
                } else {
                    y.set(C[0], C[1], C[2], C[3]);
                }
                y.bind();
                G = Class49.member351(0, O, 0, E, 0.1, 5000, j);
            } else {
                m.bind();
            }
            t.member590(false);
            t.gl.uniformMatrix4fv(H.member457(Class7.member142.id), false, G);
            t.gl.vertexAttribPointer(H.member459(Class7.member262.id), 2, t.gl.FLOAT, false, 16, 0);
            t.gl.vertexAttribPointer(H.member459(Class7.member270.id), 2, t.gl.FLOAT, false, 16, 8);
            t.gl.drawElements(t.gl.TRIANGLES, 6, t.gl.UNSIGNED_SHORT, 0);
        };
        h = undefined;
        return q;
    };
    return a;
}();