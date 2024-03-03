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
export var Class77 = function () {
    var a = function (s) {
        var k = null;
        var b;
        var c = 0;
        if (s.member433 !== undefined) {
            k = Class74({ member526: Class72.member117 });
            b = s.member433;
        } else {
            throw new Error('944 ');
        }
        var j = -1, t = -1;
        k.member572 = function () {
            return j;
        };
        k.member573 = function () {
            return t;
        };
        var o = null;
        k.member574 = function () {
            if (o === null) {
                return null;
            }
            return o.member575();
        };
        k.member576 = function () {
            return o;
        };
        var d = null;
        var n = null;
        var i = undefined;
        var m = undefined;
        var r = false;
        k.member577 = function () {
            return r;
        };
        var e = Class29([]);
        k.member578 = function () {
            return e.member291(Class5.member99);
        };
        k.member579 = function (u) {
            if (u) {
                e.enable(Class5.member99);
            } else {
                e.disable(Class5.member99);
            }
        };
        k.member487 = function (u) {
            c = u;
        };
        var h = function (z, x, y) {
            var v = Math.floor(z);
            var u = Math.floor(x);
            var A = o === null;
            if (j !== v || t !== u) {
                j = v;
                t = u;
                A = true;
            }
            if (A) {
                k.member515();
                o = b.member580(j, t, false, false, false);
                o.member510();
                d = Class49.member351(0, j, 0, t, 0.1, 5000, d);
                if (i === undefined) {
                    i = Class71(b);
                }
                i.set(0, 0, j, t);
            }
        };
        k.member519 = function (u) {
            if (!k.member291()) {
                throw new Error('945 ');
            }
            h(b.viewportWidth, b.viewportHeight);
            b.member581(o);
            b.member582(0, 0, j, t);
            b.gl.clearColor(0, 0, 0, 0);
            b.gl.clear(b.gl.COLOR_BUFFER_BIT);
            b.gl.depthFunc(b.gl.LEQUAL);
            r = true;
        };
        k.member521 = function (u) {
            if (!k.member291()) {
                throw new Error('946 ');
            }
            b.gl.depthFunc(b.gl.LESS);
            b.member581(null);
            r = false;
        };
        k.member514 = function () {
        };
        k.member515 = function () {
            k.member523();
            if (o !== null) {
                o.member511();
                o = null;
            }
        };
        k.member523 = function () {
            r = false;
        };
        k.member583 = function () {
            r = false;
        };
        k.member584 = function (v, x, u, y) {
            b.member585();
            g(v, this.member574(), x);
            b.member586();
        };
        var g = function (x, A, y) {
            var u = Class68.member421(Class63.member117.id, e);
            Class68.member483(u, true);
            var z = b.bindTexture(Class75.member539, x.member558(), b.gl.TEXTURE_2D);
            b.gl.uniform1i(u.member457(Class7.member189.id), z);
            var v = b.bindTexture(Class75.member540, A.member558(), b.gl.TEXTURE_2D);
            b.gl.uniform1i(u.member457(Class7.member190.id), v);
            b.gl.uniform1f(u.member457(Class7.member226.id), c);
            q(u, y, d);
            b.member587();
        };
        var q = function (B, z, A, E, v) {
            b.member581(z);
            var I = b.member588();
            var y = b.member589();
            b.member582(0, 0, I, y);
            if (v !== undefined) {
                if (m === undefined) {
                    m = Class71(b);
                }
                var C = j;
                var u = t;
                v[1] = y - (v[1] + v[3]);
                var x;
                if (E !== undefined && (E[0] !== 0 || E[1] !== 0 || E[2] !== C || E[3] !== u)) {
                    E[1] = u - (E[1] + E[3]);
                    var H = E[0] / C;
                    var G = E[1] / u;
                    var F = (E[0] + E[2]) / C;
                    var D = (E[1] + E[3]) / u;
                    m.set(v[0], v[1], v[2], v[3], H, G, F, D);
                } else {
                    m.set(v[0], v[1], v[2], v[3]);
                }
                m.bind();
                A = Class49.member351(0, I, 0, y, 0.1, 5000, n);
            } else {
                i.bind();
            }
            b.member590(false);
            b.gl.uniformMatrix4fv(B.member457(Class7.member142.id), false, A);
            b.gl.vertexAttribPointer(B.member459(Class7.member262.id), 2, b.gl.FLOAT, false, 16, 0);
            b.gl.vertexAttribPointer(B.member459(Class7.member270.id), 2, b.gl.FLOAT, false, 16, 8);
            b.gl.drawElements(b.gl.TRIANGLES, 6, b.gl.UNSIGNED_SHORT, 0);
        };
        s = undefined;
        return k;
    };
    return a;
}();