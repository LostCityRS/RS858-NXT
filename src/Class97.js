import { Class49 } from 'Class49.js';
import { Class74 } from 'Class74.js';
import { Class72 } from 'Class72.js';
import { Class7 } from 'Class7.js';
import { Class70 } from 'Class70.js';
import { Class68 } from 'Class68.js';
import { Class63 } from 'Class63.js';
import { Class75 } from 'Class75.js';
export var Class97 = function () {
    var a = function (j) {
        var o = null;
        var v = 20;
        var q;
        var g = new Float32Array(4);
        var m = new Float32Array(4);
        var x = new Float32Array(4);
        var h = undefined;
        var d = undefined;
        var c = undefined;
        var b = Class49.create();
        var y = Class49.create();
        var t = undefined;
        var e = undefined;
        var i = undefined;
        var n;
        if (j.member433 !== undefined) {
            o = Class74({ member526: Class72.member102 });
            q = j.member433;
        } else {
            throw new Error('1395 ');
        }
        o.member843 = function (A, z, C, B) {
            m[0] = A;
            m[1] = z;
            m[2] = C;
            m[3] = B;
        };
        o.member523 = function () {
        };
        o.member583 = function () {
        };
        o.bind = function (z) {
            if (o.member291()) {
                z.member467(Class7.member217, m);
            } else {
                z.member467(Class7.member217, g);
            }
        };
        o.member584 = function (A, z) {
            if (true) {
                throw new Error('1396 ');
            } else {
            }
            var D = m[2] * 2 + v * 2;
            if (h !== D) {
                h = D;
                x[0] = h / 2;
                x[1] = h / 2;
                x[2] = m[2];
                x[3] = v / 2;
                d = q.member580(h, h, false, false, false);
                d.member510();
                c = q.member580(h, h, false, false, false);
                c.member510();
                var C = q.viewportWidth;
                var B = q.viewportHeight;
                Class49.member351(0, h, 0, h, 0.1, 5000, b);
                Class49.member351(0, C, 0, B, 0.1, 5000, y);
                var H = (m[0] - m[2] - v) / C;
                var G = (m[1] - m[2] - v) / B;
                var F = (m[0] + m[2] + v) / C;
                var E = (m[1] + m[2] + v) / B;
                t = Class70.member490(q, 0, 0, h, h, H, G, F, E);
                e = Class70.member490(q, 0, 0, h, h);
                i = Class70.member490(q, 0, 0, C, B);
                n = Class70.member490(q, m[0] - m[2] - v, m[1] - m[2] - v, h, h);
            }
            q.member585();
            k(A, d);
            r(d.member575(), c, 1 / h, 0);
            r(c.member575(), d, 0, 1 / h);
            s(d.member575(), A, z);
            q.member586();
        };
        var k = function (A, B) {
            var z = Class68.member421(Class63.member394.id, undefined);
            Class68.member483(z, true);
            var C = q.bindTexture(Class75.member539, A.member558(), q.gl.TEXTURE_2D);
            q.gl.uniform1i(z.member457(Class7.member189.id), C);
            u(z, B, b, t, true);
            q.member587();
        };
        var r = function (A, B, E, C) {
            var z = Class68.member421(Class63.member395.id, undefined);
            Class68.member483(z, true);
            var D = q.bindTexture(Class75.member539, A.member558(), q.gl.TEXTURE_2D);
            q.gl.uniform1i(z.member457(Class7.member189.id), D);
            q.gl.uniform2f(z.member457(Class7.member218.id), E, C);
            z.member467(Class7.member217, x);
            u(z, B, b, e, true);
            q.member587();
        };
        var s = function (C, A, B) {
            var z = Class68.member421(Class63.member394.id, undefined);
            Class68.member483(z, true);
            var D = q.bindTexture(Class75.member539, A.member558(), q.gl.TEXTURE_2D);
            q.gl.uniform1i(z.member457(Class7.member189.id), D);
            u(z, B, y, i, false);
            q.member587();
            var D = q.bindTexture(Class75.member539, C.member558(), q.gl.TEXTURE_2D);
            q.gl.uniform1i(z.member457(Class7.member189.id), D);
            u(z, B, y, n, false);
            q.member587();
        };
        var u = function (C, F, z, E, D) {
            q.member581(F);
            var A, B;
            if (F !== null) {
                A = F.member556();
                B = F.member557();
            } else {
                A = q.viewportWidth;
                B = q.viewportHeight;
            }
            q.member582(0, 0, A, B);
            if (D) {
                q.gl.clear(q.gl.COLOR_BUFFER_BIT);
            }
            q.member590(false);
            q.gl.bindBuffer(q.gl.ARRAY_BUFFER, E.member491);
            q.gl.bindBuffer(q.gl.ELEMENT_ARRAY_BUFFER, E.member492);
            q.gl.uniformMatrix4fv(C.member457(Class7.member142.id), false, z);
            q.gl.vertexAttribPointer(C.member459(Class7.member262.id), 2, q.gl.FLOAT, false, 16, 0);
            q.gl.vertexAttribPointer(C.member459(Class7.member270.id), 2, q.gl.FLOAT, false, 16, 8);
            q.gl.drawElements(q.gl.TRIANGLES, 6, q.gl.UNSIGNED_SHORT, 0);
        };
        o.member487 = function (z) {
        };
        j = undefined;
        return o;
    };
    return a;
}();