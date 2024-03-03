import { Class74 } from 'Class74.js';
import { Class72 } from 'Class72.js';
import { Class108 } from 'Class108.js';
import { Class49 } from 'Class49.js';
import { Class71 } from 'Class71.js';
import { Class68 } from 'Class68.js';
import { Class63 } from 'Class63.js';
import { Class75 } from 'Class75.js';
import { Class7 } from 'Class7.js';
export var Class109 = function () {
    var a = function (k) {
        var u = null;
        var y;
        var s = 0;
        if (k.member433 !== undefined) {
            u = Class74({ member526: Class72.member502 });
            y = k.member433;
        } else {
            throw new Error('1563 ');
        }
        var b = [
            1,
            1,
            1
        ];
        var D = {
            member466: b,
            member873: -1,
            member874: b,
            member875: -1,
            member876: b
        };
        var x = [
            [
                0.5,
                0.25,
                0.125,
                0.125
            ],
            [
                0.5,
                0,
                0.25,
                0.25
            ],
            [
                1,
                0.5,
                0.5,
                0.5
            ],
            [
                1,
                1,
                1,
                1
            ],
            [
                1,
                1,
                1,
                1
            ]
        ];
        var v = -1, o = -1;
        var m = Class108.member882;
        var t = false;
        var j = null;
        var n = null;
        var h = null;
        var d = null;
        var F = false;
        u.member915 = function (H) {
            F = true;
            m = H;
        };
        u.member916 = function (H) {
            return t;
        };
        u.member917 = function (H) {
            F = true;
            t = H;
        };
        u.member918 = function (H) {
            return x[4];
        };
        u.member919 = function (H) {
            F = true;
            x[4] = H;
        };
        var e = null;
        var q = null;
        var r = undefined;
        var E = undefined;
        u.member920 = function () {
            if (j !== null) {
                return j.member575();
            } else {
                return null;
            }
        };
        u.member921 = function () {
            if (n !== null) {
                return n.member575();
            } else {
                return null;
            }
        };
        u.member922 = function () {
            if (h !== null) {
                return h.member575();
            } else {
                return null;
            }
        };
        u.member923 = function () {
            if (d !== null) {
                return d.member575();
            } else {
                return null;
            }
        };
        u.member924 = function (I, H) {
            A(D, I.slice(0), H);
        };
        var A = function (I, J, H) {
            if (H < 1) {
                I.member466 = J;
                I.member875 = -1;
                I.member873 = -1;
                I.member874 = J;
                I.member876 = J;
            } else {
                I.member874 = I.member466.slice(0);
                I.member873 = s;
                I.member876 = J;
                I.member875 = s + H;
            }
        };
        u.member487 = function (H) {
            s = H;
            i(D, s);
        };
        var i = function (J, K) {
            if (J.member875 >= K) {
                var I = (K - J.member873) / (J.member875 - J.member873);
                for (var H = 0; H < J.member874.length; H++) {
                    J.member466[H] = J.member874[H] + I * (J.member876[H] - J.member874[H]);
                }
                return true;
            } else {
                return false;
            }
        };
        u.member514 = function () {
        };
        u.member515 = function () {
            v = o = -1;
            if (j !== null) {
                j.member511();
                j = null;
            }
            if (n !== null) {
                n.member511();
                n = null;
            }
            if (h !== null) {
                h.member511();
                h = null;
            }
            if (d !== null) {
                d.member511();
                d = null;
            }
            if (r !== undefined) {
                r.member497();
                r = undefined;
            }
            if (E !== undefined) {
                E.member497();
                E = undefined;
            }
        };
        u.member523 = function () {
        };
        u.member583 = function () {
        };
        var C = function (N, J, M) {
            var I = N;
            var H = J;
            var O = M;
            var L = v !== I || o !== H;
            if (L || F) {
                u.member515();
                v = I;
                o = H;
                F = false;
                var K = undefined;
                if (t) {
                    K = x[4];
                } else if (m === Class108.member797) {
                    K = x[0];
                } else if (m === Class108.member881) {
                    K = x[1];
                } else if (m === Class108.member796) {
                    K = x[2];
                } else if (m === Class108.member882) {
                    K = x[3];
                }
                j = y.member580(v * K[0], o * K[0], false, false, true);
                j.member510();
                if (m === Class108.member797 || m === Class108.member796) {
                    n = y.member580(v * K[1], o * K[1], false, false, false);
                    n.member510();
                }
                h = y.member580(v * K[2], o * K[2], false, false, false);
                h.member510();
                d = y.member580(v * K[3], o * K[3], false, false, false);
                d.member510();
                e = Class49.member351(0, v, 0, o, 0.1, 5000, e);
                if (r === undefined) {
                    r = Class71(y);
                }
                r.set(0, 0, v, o);
            }
        };
        u.member584 = function (J, K, I, N) {
            var H = J.member556();
            var L = J.member557();
            C(H, L);
            y.member585();
            c(J, j);
            var M;
            if (m === Class108.member797 || m === Class108.member796) {
                g(j.member575(), n, 1 / j.member575().member556(), 1 / j.member575().member557());
                M = n;
            } else {
                M = j;
            }
            z(M.member575(), h, 1 / M.member575().member556(), 0);
            z(h.member575(), d, 0, 1 / h.member575().member556());
            B(d.member575(), J, K, I, N);
            y.member586();
        };
        var c = function (I, J) {
            var H = Class68.member421(Class63.member398.id, undefined);
            Class68.member483(H, true);
            var K = y.bindTexture(Class75.member539, I.member558(), y.gl.TEXTURE_2D);
            y.gl.uniform1i(H.member457(Class7.member189.id), K);
            y.gl.uniform1f(H.member457(Class7.member191.id), D.member466[0]);
            G(H, J, e);
            y.member587();
        };
        var g = function (I, J, M, K) {
            var H = Class68.member421(Class63.member400.id, undefined);
            Class68.member483(H, true);
            var L = y.bindTexture(Class75.member539, I.member558(), y.gl.TEXTURE_2D);
            y.gl.uniform1i(H.member457(Class7.member189.id), L);
            y.gl.uniform2f(H.member457(Class7.member192.id), M, K);
            G(H, J, e);
            y.member587();
        };
        var z = function (I, J, M, K) {
            var H;
            if (m === Class108.member796 || m === Class108.member882) {
                H = Class68.member421(Class63.member397.id, undefined);
            } else {
                H = Class68.member421(Class63.member396.id, undefined);
            }
            Class68.member483(H, true);
            var L = y.bindTexture(Class75.member539, I.member558(), y.gl.TEXTURE_2D);
            y.gl.uniform1i(H.member457(Class7.member189.id), L);
            y.gl.uniform2f(H.member457(Class7.member192.id), M, K);
            G(H, J, e);
            y.member587();
        };
        var B = function (L, J, K, I, N) {
            var H = Class68.member421(Class63.member399.id, undefined);
            Class68.member483(H, true);
            var M = y.bindTexture(Class75.member539, L.member558(), y.gl.TEXTURE_2D);
            y.gl.uniform1i(H.member457(Class7.member189.id), M);
            M = y.bindTexture(Class75.member540, J.member558(), y.gl.TEXTURE_2D);
            y.gl.uniform1i(H.member457(Class7.member190.id), M);
            y.gl.uniform1f(H.member457(Class7.member193.id), D.member466[1]);
            y.gl.uniform1f(H.member457(Class7.member194.id), D.member466[2]);
            G(H, K, e, I, N);
            y.member587();
        };
        var G = function (N, L, M, Q, I) {
            y.member581(L);
            var U = y.member588();
            var K = y.member589();
            y.member582(0, 0, U, K);
            if (I !== undefined) {
                if (E === undefined) {
                    E = Class71(y);
                }
                var O = v;
                var H = o;
                I[1] = K - (I[1] + I[3]);
                var J;
                if (Q !== undefined && (Q[0] !== 0 || Q[1] !== 0 || Q[2] !== O || Q[3] !== H)) {
                    Q[1] = H - (Q[1] + Q[3]);
                    var T = Q[0] / O;
                    var S = Q[1] / H;
                    var R = (Q[0] + Q[2]) / O;
                    var P = (Q[1] + Q[3]) / H;
                    E.set(I[0], I[1], I[2], I[3], T, S, R, P);
                } else {
                    E.set(I[0], I[1], I[2], I[3]);
                }
                E.bind();
                M = Class49.member351(0, U, 0, K, 0.1, 5000, q);
            } else {
                r.bind();
            }
            y.member590(false);
            y.gl.uniformMatrix4fv(N.member457(Class7.member142.id), false, M);
            y.gl.vertexAttribPointer(N.member459(Class7.member262.id), 2, y.gl.FLOAT, false, 16, 0);
            y.gl.vertexAttribPointer(N.member459(Class7.member270.id), 2, y.gl.FLOAT, false, 16, 8);
            y.gl.drawElements(y.gl.TRIANGLES, 6, y.gl.UNSIGNED_SHORT, 0);
        };
        k = undefined;
        return u;
    };
    return a;
}();