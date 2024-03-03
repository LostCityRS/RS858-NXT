import { Class74 } from 'Class74.js';
import { Class72 } from 'Class72.js';
import { Class49 } from 'Class49.js';
import { Class71 } from 'Class71.js';
import { Class68 } from 'Class68.js';
import { Class63 } from 'Class63.js';
import { Class75 } from 'Class75.js';
import { Class7 } from 'Class7.js';
export var Class116 = function () {
    var a = function (q) {
        var j = null;
        var b;
        var c = 0;
        if (q.member433 !== undefined) {
            j = Class74({ member526: Class72.member414 });
            b = q.member433;
        } else {
            throw new Error('1822 ');
        }
        var n = [
            1,
            0,
            1,
            0,
            1
        ];
        var h = {
            member466: n,
            member873: -1,
            member874: n,
            member875: -1,
            member876: n
        };
        var i = -1, s = -1;
        var d = null;
        var m = null;
        var g = undefined;
        var k = undefined;
        if (false) {
        }
        j.member994 = function (u, t) {
            o(h, u.slice(0), t);
        };
        var o = function (u, v, t) {
            if (t < 1) {
                u.member466 = v;
            } else {
                u.member874 = u.member466.slice(0);
                u.member873 = c;
                u.member876 = v;
                u.member875 = c + t;
            }
        };
        j.member487 = function (t) {
            c = t;
            r(h, c);
        };
        var r = function (v, x) {
            if (v.member875 >= x) {
                var u = (x - v.member873) / (v.member875 - v.member873);
                for (var t = 0; t < v.member874.length; t++) {
                    v.member466[t] = v.member874[t] + u * (v.member876[t] - v.member874[t]);
                }
                return true;
            } else {
                return false;
            }
        };
        j.member514 = function () {
        };
        j.member515 = function () {
            if (g !== undefined) {
                g.member497();
                g = undefined;
            }
            if (k !== undefined) {
                k.member497();
                k = undefined;
            }
        };
        j.member523 = function () {
        };
        j.member583 = function () {
        };
        j.member517 = function () {
            var u = h.member466;
            if (false) {
            }
            for (var t = 0; t < n.length; t++) {
                if (u[t] !== n[t]) {
                    return false;
                }
            }
            return true;
        };
        var e = function (x, v) {
            var u = x;
            var t = v;
            if (i !== u || s !== t) {
                i = u;
                s = t;
                d = Class49.member351(0, i, 0, s, 0.1, 5000, d);
                if (g === undefined) {
                    g = Class71(b);
                }
                g.set(0, 0, i, s);
            } else if (g === undefined) {
                g = Class71(b);
                g.set(0, 0, i, s);
            }
        };
        j.member584 = function (C, A, F, t) {
            var u = C.member556();
            var z = C.member557();
            e(u, z);
            b.member585();
            var I = h.member466;
            if (false) {
            }
            var D = Class68.member421(Class63.member414.id, undefined);
            Class68.member483(D, true);
            var v = b.bindTexture(Class75.member539, C.member558(), b.gl.TEXTURE_2D);
            b.gl.uniform1i(D.member457(Class7.member189.id), v);
            b.gl.uniform1f(D.member457(Class7.member195.id), I[0]);
            b.gl.uniform4f(D.member457(Class7.member196.id), I[1], I[2], I[3], I[4]);
            b.member581(A);
            var K = b.member588();
            var y = b.member589();
            b.member582(0, 0, K, y);
            var B = d;
            if (t !== undefined) {
                if (k === undefined) {
                    k = Class71(b);
                }
                t[1] = y - (t[1] + t[3]);
                var x;
                if (F !== undefined && (F[0] !== 0 || F[1] !== 0 || F[2] !== u || F[3] !== z)) {
                    F[1] = z - (F[1] + F[3]);
                    var J = F[0] / u;
                    var H = F[1] / z;
                    var G = (F[0] + F[2]) / u;
                    var E = (F[1] + F[3]) / z;
                    k.set(t[0], t[1], t[2], t[3], J, H, G, E);
                } else {
                    k.set(t[0], t[1], t[2], t[3]);
                }
                k.bind();
                B = Class49.member351(0, K, 0, y, 0.1, 5000, m);
            } else {
                g.bind();
            }
            b.member590(false);
            b.gl.uniformMatrix4fv(D.member457(Class7.member142.id), false, B);
            b.gl.vertexAttribPointer(D.member459(Class7.member262.id), 2, b.gl.FLOAT, false, 16, 0);
            b.gl.vertexAttribPointer(D.member459(Class7.member270.id), 2, b.gl.FLOAT, false, 16, 8);
            b.gl.drawElements(b.gl.TRIANGLES, 6, b.gl.UNSIGNED_SHORT, 0);
            b.member586();
        };
        q = undefined;
        return j;
    };
    return a;
}();