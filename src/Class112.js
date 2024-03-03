import { Class74 } from 'Class74.js';
import { Class72 } from 'Class72.js';
import { Class49 } from 'Class49.js';
import { Class68 } from 'Class68.js';
import { Class63 } from 'Class63.js';
import { Class75 } from 'Class75.js';
import { Class7 } from 'Class7.js';
import { Class71 } from 'Class71.js';
export var Class112 = function () {
    var a = function (g) {
        var n = null;
        var q;
        var k = 0;
        if (g.member433 !== undefined) {
            n = Class74({ member526: Class72.member407 });
            q = g.member433;
        } else {
            throw new Error('1287 ');
        }
        var h = [1];
        var u = {
            member466: h,
            member873: -1,
            member874: h,
            member875: -1,
            member876: h
        };
        var o = -1, i = -1;
        var e = new Float32Array(2);
        var b = null;
        var j = null;
        var m = undefined;
        var c = null;
        var s = true;
        n.member929 = function (x) {
            s = x;
        };
        n.member930 = function (y, x) {
            r(u, y.slice(0), x);
        };
        var r = function (y, z, x) {
            if (x < 1) {
                y.member466 = z;
            } else {
                y.member874 = y.member466.slice(0);
                y.member873 = k;
                y.member876 = z;
                y.member875 = k + x;
            }
        };
        n.member487 = function (x) {
            k = x;
            d(u, k);
        };
        var d = function (z, A) {
            if (z.member875 >= A) {
                var y = (A - z.member873) / (z.member875 - z.member873);
                for (var x = 0; x < z.member874.length; x++) {
                    z.member466[x] = z.member874[x] + y * (z.member876[x] - z.member874[x]);
                }
                return true;
            } else {
                return false;
            }
        };
        n.member514 = function () {
        };
        n.member515 = function () {
            o = i = -1;
            if (c !== null) {
                c.member511();
                c = null;
            }
            if (m !== undefined) {
                m.member497();
                m = undefined;
            }
        };
        n.member523 = function () {
        };
        n.member583 = function () {
        };
        var t = function (A, z) {
            var y = A;
            var x = z;
            if (o !== y || i !== x) {
                o = y;
                i = x;
                e[0] = 1 / o;
                e[1] = 1 / i;
                b = Class49.member351(0, o, 0, i, 0.1, 5000, b);
            }
        };
        n.member584 = function (F, C, H, x) {
            var y = F.member556();
            var B = F.member557();
            var G, A;
            if (C !== null) {
                G = y;
                A = B;
            } else {
                G = x[2];
                A = x[3];
            }
            t(y, B);
            q.member585();
            var E = Class68.member421(Class63.member407.id, undefined);
            Class68.member483(E, true);
            var z = q.bindTexture(Class75.member539, F.member558(), q.gl.TEXTURE_2D);
            q.gl.uniform1i(E.member457(Class7.member189.id), z);
            if (c === null) {
                c = F;
                c.member510();
            }
            var D = q.bindTexture(Class75.member540, c.member558(), q.gl.TEXTURE_2D);
            q.gl.uniform1i(E.member457(Class7.member190.id), D);
            if (c !== null) {
                c.member511();
            }
            c = F;
            if (c !== null) {
                c.member510();
            }
            q.gl.uniform2f(E.member457(Class7.member256.id), y, B);
            q.gl.uniform2f(E.member457(Class7.member257.id), G, A);
            q.gl.uniform1f(E.member457(Class7.member258.id), s ? 1 : -1);
            var I = 0.35;
            if (!s) {
                I = 1 - I;
            }
            q.gl.uniform1f(E.member457(Class7.member259.id), I);
            v(E, C, b, H, x);
            q.member587();
            q.member586();
        };
        var v = function (C, A, B, F, y) {
            q.member581(A);
            var J = q.member588();
            var z = q.member589();
            q.member582(0, 0, J, z);
            if (m === undefined) {
                m = Class71(q);
            }
            if (y !== undefined) {
                var D = o;
                var x = i;
                y[1] = z - (y[1] + y[3]);
                if (F !== undefined && (F[0] !== 0 || F[1] !== 0 || F[2] !== D || F[3] !== x)) {
                    F[1] = x - (F[1] + F[3]);
                    var I = F[0] / D;
                    var H = F[1] / x;
                    var G = (F[0] + F[2]) / D;
                    var E = (F[1] + F[3]) / x;
                    m.set(y[0], y[1], y[2], y[3], I, H, G, E);
                } else {
                    m.set(y[0], y[1], y[2], y[3]);
                }
                B = Class49.member351(0, J, 0, z, 0.1, 5000, j);
            } else {
                m.set(0, 0, o, i);
            }
            q.member590(false);
            m.bind();
            q.gl.uniformMatrix4fv(C.member457(Class7.member142.id), false, B);
            q.gl.vertexAttribPointer(C.member459(Class7.member262.id), 2, q.gl.FLOAT, false, 16, 0);
            q.gl.vertexAttribPointer(C.member459(Class7.member270.id), 2, q.gl.FLOAT, false, 16, 8);
            q.gl.drawElements(q.gl.TRIANGLES, 6, q.gl.UNSIGNED_SHORT, 0);
        };
        g = undefined;
        return n;
    };
    return a;
}();