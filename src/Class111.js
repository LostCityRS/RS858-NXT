import { Class74 } from 'Class74.js';
import { Class72 } from 'Class72.js';
import { Class29 } from 'Class29.js';
import { Class102 } from 'Class102.js';
import { Class5 } from 'Class5.js';
import { Class49 } from 'Class49.js';
import { Class68 } from 'Class68.js';
import { Class63 } from 'Class63.js';
import { Class75 } from 'Class75.js';
import { Class7 } from 'Class7.js';
import { Class71 } from 'Class71.js';
export var Class111 = function () {
    var a = function (e) {
        var n = null;
        var q;
        var k = 0;
        if (e.member433 !== undefined) {
            n = Class74({ member526: Class72.member406 });
            q = e.member433;
        } else {
            throw new Error('1718 ');
        }
        var g = [1];
        var t = {
            member466: g,
            member873: -1,
            member874: g,
            member875: -1,
            member876: g
        };
        var o = -1, i = -1;
        var d = new Float32Array(2);
        var b = null;
        var j = null;
        var m = undefined;
        var h = Class29();
        var u = Class102.member797;
        n.member927 = function (x) {
            u = x;
            h.member301();
            switch (u) {
            default:
            case Class102.member797:
                break;
            case Class102.member881:
                h.enable(Class5.member119);
                break;
            case Class102.member796:
                h.enable(Class5.member120);
                break;
            case Class102.member882:
                h.enable(Class5.member119);
                h.enable(Class5.member120);
                break;
            }
        };
        n.member928 = function (y, x) {
            r(t, y.slice(0), x);
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
            c(t, k);
        };
        var c = function (z, A) {
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
            if (m !== undefined) {
                m.member497();
                m = undefined;
            }
        };
        n.member523 = function () {
        };
        n.member583 = function () {
        };
        var s = function (A, z) {
            var y = A;
            var x = z;
            if (o !== y || i !== x) {
                o = y;
                i = x;
                d[0] = 1 / o;
                d[1] = 1 / i;
                b = Class49.member351(0, o, 0, i, 0.1, 5000, b);
            }
        };
        n.member584 = function (A, B, z, E) {
            var y = A.member556();
            var C = A.member557();
            s(y, C);
            q.member585();
            var x = Class68.member421(Class63.member406.id, h);
            Class68.member483(x, true);
            var D = q.bindTexture(Class75.member539, A.member558(), q.gl.TEXTURE_2D);
            q.gl.uniform1i(x.member457(Class7.member189.id), D);
            q.gl.uniform2f(x.member457(Class7.member171.id), d[0], d[1]);
            q.gl.uniform1f(x.member457(Class7.member172.id), 0.75);
            q.gl.uniform1f(x.member457(Class7.member173.id), 0.166);
            q.gl.uniform1f(x.member457(Class7.member174.id), 0);
            v(x, B, b, z, E);
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
        e = undefined;
        return n;
    };
    return a;
}();