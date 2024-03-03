import { Class74 } from 'Class74.js';
import { Class72 } from 'Class72.js';
import { Class49 } from 'Class49.js';
import { Class29 } from 'Class29.js';
import { Class41 } from 'Class41.js';
import { Class5 } from 'Class5.js';
import { Class68 } from 'Class68.js';
import { Class63 } from 'Class63.js';
import { Class7 } from 'Class7.js';
import { Class75 } from 'Class75.js';
import { Class99 } from 'Class99.js';
import { Class83 } from 'Class83.js';
import { Class82 } from 'Class82.js';
import { Class110 } from 'Class110.js';
export var Class113 = function () {
    var a = function (i) {
        var t = null;
        var u;
        var q = 0;
        var y = {
            member931: undefined,
            member932: undefined,
            member873: -1,
            member875: -1
        };
        var j = undefined;
        if (i.member433 !== undefined) {
            t = Class74({ member526: Class72.member401 });
            u = i.member433;
        } else {
            throw new Error('1659 ');
        }
        var v;
        var x;
        var h;
        var g, n;
        var c = Class49.create();
        var s;
        var m;
        var k = Class29();
        var r = Class41.create();
        t.member514 = function () {
            if (g === undefined) {
                h = u.gl.createBuffer();
                v = new ArrayBuffer(4 * (4 + 4 + 4 + 4 + 4 + 4 + 4 + 4));
                x = new Float32Array(v);
                g = u.gl.createBuffer();
                var A = new ArrayBuffer(6 * 2);
                var z = new Uint16Array(A);
                z[0] = 0;
                z[1] = 1;
                z[2] = 3;
                z[3] = 1;
                z[4] = 2;
                z[5] = 3;
                u.gl.bindBuffer(u.gl.ELEMENT_ARRAY_BUFFER, g);
                u.gl.bufferData(u.gl.ELEMENT_ARRAY_BUFFER, A, u.gl.STATIC_DRAW);
                n = u.gl.createBuffer();
                A = new ArrayBuffer(6 * 2);
                z = new Uint16Array(A);
                z[0] = 0;
                z[1] = 3;
                z[2] = 1;
                z[3] = 1;
                z[4] = 3;
                z[5] = 2;
                u.gl.bindBuffer(u.gl.ELEMENT_ARRAY_BUFFER, n);
                u.gl.bufferData(u.gl.ELEMENT_ARRAY_BUFFER, A, u.gl.STATIC_DRAW);
            }
        };
        var o = function (E, D) {
            var A = u.viewportWidth;
            var C = u.viewportHeight;
            if (A !== s || C !== m) {
                s = A;
                m = C;
                c = Class49.member351(0, A, 0, C, 0.1, 10000, c);
            }
            var z = 1.5;
            var B = 0;
            x[B++] = 0;
            x[B++] = 0;
            E.member933(r);
            Class41.member322(r, D);
            x[B++] = r[0];
            x[B++] = r[1];
            x[B++] = -r[2];
            E.member934(r);
            Class41.member322(r, D);
            Class41.scale(r, z, r);
            x[B++] = r[0];
            x[B++] = r[1];
            x[B++] = r[2];
            x[B++] = A;
            x[B++] = 0;
            E.member935(r);
            Class41.member322(r, D);
            x[B++] = r[0];
            x[B++] = r[1];
            x[B++] = -r[2];
            E.member936(r);
            Class41.member322(r, D);
            Class41.scale(r, z, r);
            x[B++] = r[0];
            x[B++] = r[1];
            x[B++] = r[2];
            x[B++] = A;
            x[B++] = C;
            E.member937(r);
            Class41.member322(r, D);
            x[B++] = r[0];
            x[B++] = r[1];
            x[B++] = -r[2];
            E.member938(r);
            Class41.member322(r, D);
            Class41.scale(r, z, r);
            x[B++] = r[0];
            x[B++] = r[1];
            x[B++] = r[2];
            x[B++] = 0;
            x[B++] = C;
            E.member939(r);
            Class41.member322(r, D);
            x[B++] = r[0];
            x[B++] = r[1];
            x[B++] = -r[2];
            E.member940(r);
            Class41.member322(r, D);
            Class41.scale(r, z, r);
            x[B++] = r[0];
            x[B++] = r[1];
            x[B++] = r[2];
            u.gl.bindBuffer(u.gl.ARRAY_BUFFER, h);
            u.gl.bufferData(u.gl.ARRAY_BUFFER, v, u.gl.DYNAMIC_DRAW);
        };
        t.member421 = function (z) {
            k.member301();
            if (z) {
                k.enable(Class5.member118);
            }
            return Class68.member421(Class63.member401.id, k);
        };
        t.member584 = function (D, J, z, E) {
            var C = D.member941(Class72.member118);
            var F = C.member291();
            var A = d();
            var H = y.member931, G = y.member932;
            if (j !== undefined) {
                H = G = j;
            }
            if (H === undefined && G === undefined) {
                return;
            }
            o(J, z);
            var I = this.member421(F);
            Class68.member483(I, true);
            u.member942();
            u.member590(A > 0 && (H === undefined || G === undefined));
            u.gl.bindBuffer(u.gl.ARRAY_BUFFER, h);
            if (E) {
                u.gl.bindBuffer(u.gl.ELEMENT_ARRAY_BUFFER, n);
            } else {
                u.gl.bindBuffer(u.gl.ELEMENT_ARRAY_BUFFER, g);
            }
            u.gl.uniformMatrix4fv(I.member457(Class7.member142.id), false, c);
            if (H !== undefined) {
                u.gl.uniform1i(I.member457(Class7.member204.id), true);
                var B = u.bindTexture(Class75.member544, H.member558(), u.gl.TEXTURE_CUBE_MAP);
                u.gl.uniform1i(I.member457(Class7.member201.id), B);
            } else {
                u.gl.uniform1i(I.member457(Class7.member204.id), false);
            }
            if (G !== undefined) {
                u.gl.uniform1i(I.member457(Class7.member205.id), true);
                var B = u.bindTexture(Class75.member545, G.member558(), u.gl.TEXTURE_CUBE_MAP);
                u.gl.uniform1i(I.member457(Class7.member202.id), B);
            } else {
                u.gl.uniform1i(I.member457(Class7.member205.id), false);
            }
            if (F && C !== undefined) {
                C.bind(I);
            }
            if (D !== undefined) {
                D.member943(I);
            }
            u.gl.uniform1f(I.member457(Class7.member203.id), d());
            u.gl.vertexAttribPointer(I.member459(Class7.member262.id), 2, u.gl.FLOAT, false, 32, 0);
            u.gl.vertexAttribPointer(I.member459(Class7.member264.id), 3, u.gl.FLOAT, true, 32, 8);
            u.gl.vertexAttribPointer(I.member459(Class7.member265.id), 3, u.gl.FLOAT, true, 32, 20);
            u.gl.drawElements(u.gl.TRIANGLES, 6, u.gl.UNSIGNED_SHORT, 0);
            u.member944();
            u.member587();
        };
        t.member523 = function () {
        };
        t.member583 = function () {
        };
        var d = function () {
            if (y.member873 < 0) {
                return 0;
            }
            return (q - y.member873) / (y.member875 - y.member873);
        };
        t.member945 = function (A, z) {
            if (z < 1) {
                if (y.member931 !== undefined) {
                    y.member931.member511();
                }
                y.member931 = A;
                if (y.member931 !== undefined) {
                    y.member931.member510();
                }
                if (y.member932 !== undefined) {
                    y.member932.member511();
                }
                y.member932 = undefined;
                y.member873 = y.member875 = -1;
            } else {
                if (y.member932 !== undefined) {
                    if (y.member931 !== undefined) {
                        y.member931.member511();
                    }
                    y.member931 = y.member932;
                }
                y.member932 = A;
                if (y.member932 !== undefined) {
                    y.member932.member510();
                }
                y.member873 = q;
                y.member875 = q + z;
            }
        };
        t.member946 = function (z) {
            j = z;
        };
        t.member487 = function (z) {
            q = z;
            if (y.member875 > 0 && q >= y.member875) {
                y.member875 = y.member873 = -1;
                if (y.member931 !== undefined) {
                    y.member931.member511();
                }
                y.member931 = y.member932;
                y.member932 = undefined;
            }
        };
        var b = function () {
            member46(this, Class99);
            this.member947 = undefined;
            this.member948 = undefined;
            this.member949 = undefined;
            this.member950 = undefined;
        };
        member45(Class99, b);
        b.prototype.member867 = function () {
            this.member951.member584(this.member950, this.member947, this.member948, this.member949);
        };
        var e = function () {
            return new b();
        };
        t.member952 = function (E, B, D, A, z) {
            var C = Class83.member619(Class82.member401, e);
            C.member951 = t;
            C.priority = Class110.member401;
            C.member947 = D;
            C.member948 = A;
            C.member949 = z;
            C.member950 = B;
            E.append(C);
        };
        i = undefined;
        return t;
    };
    return a;
}();