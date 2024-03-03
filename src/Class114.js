import { Class74 } from 'Class74.js';
import { Class72 } from 'Class72.js';
import { Class104 } from 'Class104.js';
import { Class49 } from 'Class49.js';
import { Class75 } from 'Class75.js';
import { Class7 } from 'Class7.js';
import { Class71 } from 'Class71.js';
import { Class68 } from 'Class68.js';
import { Class63 } from 'Class63.js';
export var Class114 = function () {
    var a = function (k) {
        var t = null;
        var v;
        var q;
        if (k.member433 !== undefined) {
            t = Class74({ member526: Class72.member499 });
            v = k.member433;
            q = k.member953;
        } else {
            throw new Error('987 ');
        }
        var i = 2048;
        t.member954 = function () {
            return i;
        };
        t.member955 = function (B) {
            i = B;
            this.member956();
            this.member957();
        };
        var u;
        var n = null;
        var h = 0.5;
        t.member958 = function (B) {
            h = B;
        };
        var z;
        t.member959 = function (B) {
            z = B;
        };
        t.member960 = function () {
            return z;
        };
        var j;
        t.member961 = function (B) {
            j = B;
        };
        t.member962 = function () {
            return j;
        };
        var c = 0.008;
        t.member963 = function (B) {
            c = B;
        };
        var r = 1.1;
        t.member964 = function (B) {
            r = B;
        };
        var g = 4;
        t.member965 = function (B) {
            g = B;
        };
        var A = new Float32Array(4);
        t.member966 = function () {
            return Class104.member892;
        };
        var o = Class104.member892;
        t.member967 = function () {
            return o;
        };
        t.member927 = function (B) {
            switch (B) {
            case Class104.member797:
                t.member955(1024);
                break;
            case Class104.member892:
            case Class104.member796:
                t.member955(2048);
                break;
            case Class104.member968:
                t.member955(4096);
                break;
            default:
                o = Class104.member892;
                t.member955(2048);
                break;
            }
            o = B;
        };
        t.member969 = 0;
        t.member970 = 1;
        t.member971 = 2;
        var m = t.member971;
        t.member972 = function () {
            return m;
        };
        t.member973 = function (B) {
            m = B;
        };
        var s = false;
        t.member974 = function () {
            return s;
        };
        var e;
        t.member975 = function () {
            return e;
        };
        var x;
        t.member976 = function () {
            return x;
        };
        var b = Class49.create();
        t.member977 = function () {
            return b;
        };
        var d = null;
        t.member957 = function () {
            if (i !== u) {
                this.member956();
                u = i;
                n = v.member580(u, u, true, false, false);
                n.member510();
            }
        };
        t.member956 = function () {
            u = -1;
            if (n !== null) {
                n.member511();
                n = null;
            }
        };
        t.member514 = function () {
            this.member957();
        };
        t.member515 = function () {
            this.member956();
            t.member523();
        };
        t.member523 = function () {
            d = null;
        };
        t.member583 = function () {
            d = null;
        };
        t.member519 = function (B) {
            if (!t.member291() || s) {
                throw new Error('988 ');
            }
            v.member978();
            v.member581(n);
            v.member582(0, 0, u, u);
            v.gl.clearColor(1, 1, 1, 1);
            v.gl.clear(v.gl.COLOR_BUFFER_BIT | v.gl.DEPTH_BUFFER_BIT);
            q.member979();
            e = B.member980;
            x = B.member981;
            Class49.member323(x, e, b);
            s = true;
            v.gl.enable(v.gl.POLYGON_OFFSET_FILL);
            v.gl.polygonOffset(r, g);
            v.gl.enable(v.gl.DEPTH_TEST);
            if (v.member860()) {
                v.gl.colorMask(false, false, false, false);
            }
        };
        t.member982 = function (B) {
            if (B !== d) {
                var C = this.member983();
                var D = v.bindTexture(Class75.member95, C ? C.member558() : undefined, v.gl.TEXTURE_2D);
                B.member467(Class7.member166, D);
                B.member467(Class7.member164, h);
                A[0] = z;
                A[1] = 1 / j;
                A[2] = c;
                A[3] = 1 / i;
                B.member467(Class7.member167, A);
                d = B;
            }
        };
        var y = function (P, F, E, S, B, Q, M, H, R) {
            P.member581(B);
            var J = P.member588();
            var N = P.member589();
            P.member582(0, 0, J, N);
            if (R !== undefined) {
                if (clippedQuadBuffer === undefined) {
                    clippedQuadBuffer = Class71(P);
                }
                var O = member984;
                var C = member985;
                R[1] = N - (R[1] + R[3]);
                var D;
                if (H !== undefined && (H[0] !== 0 || H[1] !== 0 || H[2] !== O || H[3] !== C)) {
                    H[1] = C - (H[1] + H[3]);
                    var L = H[0] / O;
                    var K = H[1] / C;
                    var I = (H[0] + H[2]) / O;
                    var G = (H[1] + H[3]) / C;
                    clippedQuadBuffer.set(R[0], R[1], R[2], R[3], L, K, I, G);
                } else {
                    clippedQuadBuffer.set(R[0], R[1], R[2], R[3]);
                }
                clippedQuadBuffer.bind();
                Q = Class49.member351(0, J, 0, N, 0.1, 5000, clippedProjectionMatrix);
            } else {
                baseQuadBuffer.bind();
            }
            P.member590(false);
            P.gl.uniformMatrix4fv(S.member457(Class7.member142.id), false, Q);
            P.gl.vertexAttribPointer(S.member459(Class7.member262.id), 2, P.gl.FLOAT, false, 16, 0);
            P.gl.vertexAttribPointer(S.member459(Class7.member270.id), 2, P.gl.FLOAT, false, 16, 8);
            P.gl.drawElements(P.gl.TRIANGLES, 6, P.gl.UNSIGNED_SHORT, 0);
        };
        t.member986 = function (B, J, E, C, H, I, G) {
            var F = Class68.member421(Class63.member410.id, undefined);
            Class68.member483(F, true);
            var D = B.bindTexture(Class75.member539, J.member558(), B.gl.TEXTURE_2D);
            B.gl.uniform1i(F.member457(Class7.member189.id), D);
            B.gl.uniform4f(F.member457(Class7.member222.id), H, C, I, G);
            y(B, this.fullScreenVertexBufferID, this.fullScreenIndexBufferID, F, E, fullscreenQuadProjMat, false);
            B.member587();
        };
        t.member521 = function () {
            if (!t.member291() || !s) {
                throw new Error('989 ');
            }
            v.member581(null);
            s = false;
            if (v.member860()) {
                v.gl.colorMask(true, true, true, true);
            }
            v.gl.enable(v.gl.POLYGON_OFFSET_FILL);
            v.gl.polygonOffset(0, 0);
        };
        t.member983 = function () {
            if (n === null) {
                return null;
            } else {
                var B = n.member847();
                if (B === undefined) {
                    B = n.member575();
                }
                return B;
            }
        };
        k = undefined;
        return t;
    };
    return a;
}();