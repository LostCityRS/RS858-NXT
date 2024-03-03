import { Class74 } from 'Class74.js';
import { Class72 } from 'Class72.js';
import { Class105 } from 'Class105.js';
import { Class49 } from 'Class49.js';
import { Class71 } from 'Class71.js';
import { Class95 } from 'Class95.js';
import { Priority } from 'Class96.js';
import { Class93 } from 'Class93.js';
import { Class80 } from 'Class80.js';
import { Class76 } from 'Class76.js';
import { Class68 } from 'Class68.js';
import { Class63 } from 'Class63.js';
import { Class75 } from 'Class75.js';
import { Class7 } from 'Class7.js';
export var Class117 = function () {
    var a = function (i) {
        var s = null;
        var u;
        var r;
        var q = 0;
        if (i.member433 !== undefined && i.member995 != undefined) {
            s = Class74({ member526: Class72.member503 });
            u = i.member433;
            r = i.member995;
        } else {
            throw new Error('1001 ');
        }
        var k = Class105({
            member895: 12,
            member898: function (A) {
                A.member510();
            },
            member897: function (A) {
                A.member511();
            }
        });
        var e = [
            [
                -1,
                0
            ],
            [
                -1,
                0
            ],
            [
                -1,
                0
            ]
        ];
        var y = {
            member466: e,
            member873: -1,
            member874: e,
            member875: -1,
            member876: e
        };
        var b = true, h = true;
        var t = -1, m = -1;
        var c = null;
        var n = null;
        var o = undefined;
        var z = undefined;
        if (false) {
        }
        s.member996 = function (B, A, C) {
            v(y, [
                [
                    B[0],
                    A[0]
                ],
                [
                    B[1],
                    A[1]
                ],
                [
                    B[2],
                    A[2]
                ]
            ], C);
        };
        var v = function (B, C, A) {
            if (A < 1) {
                B.member466 = C;
            } else if (j(B.member466, C)) {
                A = 0;
            } else {
                B.member874 = B.member466.slice(0);
                B.member873 = q;
                B.member876 = C;
                B.member875 = q + A;
                b = j(B.member874, e);
                h = j(B.member876, e);
            }
        };
        var j = function (B, A) {
            return !(B[0][0] !== A[0][0] || B[0][1] !== A[0][1] || B[1][0] !== A[1][0] || B[1][1] !== A[1][1] || B[2][0] !== A[2][0] || B[2][1] !== A[2][1]);
        };
        s.member487 = function (A) {
            q = A;
            d(y, q);
            k.member905(100);
        };
        var d = function (K, B) {
            if (K.member875 >= B) {
                var C = (B - K.member873) / (K.member875 - K.member873);
                if (h) {
                    C = 1 - C;
                    K.member466 = K.member874;
                    K.member466[0][1] *= C;
                    K.member466[1][1] *= C;
                    K.member466[2][1] *= C;
                } else if (b) {
                    K.member466 = K.member876;
                    K.member466[0][1] *= C;
                    K.member466[1][1] *= C;
                    K.member466[2][1] *= C;
                } else {
                    var L = 1 - C;
                    var D = new Array(0);
                    for (var I = 0; I < 3; I++) {
                        if (K.member874[I][0] > -1) {
                            D[D.length] = [
                                K.member874[I][0],
                                K.member874[I][1] * L
                            ];
                        }
                    }
                    for (var I = 0; I < 3; I++) {
                        if (K.member876[I * 2] > -1) {
                            var H = K.member876[I][1] * C;
                            for (var F = 0; F < 3; F++) {
                                if (D[F][0] === K.member876[I][0]) {
                                    D[F][1] += H;
                                    break;
                                } else if (F === 2) {
                                    D[D.length] = [
                                        K.member876[I][0],
                                        H
                                    ];
                                }
                            }
                        }
                    }
                    var J = 0;
                    if (D.length < 4) {
                        for (var I = 0; I < D.length; I++) {
                            K.member466[I] = D[I];
                            J++;
                        }
                        for (var I = J; I < 3; I++) {
                            K.member466[I][0] = -1;
                            K.member466[I][1] = 0;
                        }
                    } else {
                        var G = 0;
                        for (var I = 0; I < D.length; I++) {
                            G += D[I];
                        }
                        D.sort(function (N, M) {
                            return N[1] - M[1];
                        });
                        var E = 0;
                        for (var I = 0; I < 3; I++) {
                            E += D[I];
                        }
                        var A = member997 / E;
                        for (var I = 0; I < 3; I++) {
                            K.member466[I][0] = D[I][0];
                            K.member466[I][1] = D[I][0] * A;
                        }
                    }
                }
                return true;
            } else {
                return false;
            }
        };
        s.member514 = function () {
        };
        s.member515 = function () {
            if (o !== undefined) {
                o.member497();
                o = undefined;
            }
            if (z !== undefined) {
                z.member497();
                z = undefined;
            }
        };
        s.member523 = function () {
        };
        s.member583 = function () {
        };
        s.member517 = function () {
            var A = y.member466;
            if (false) {
            }
            if (A[0][0] !== -1 || A[1][0] !== -1 || A[2][0] !== -1) {
                return false;
            }
            if (A[0][1] !== 0 || A[1][1] !== 0 || A[2][1] !== 0) {
                return false;
            }
            return true;
        };
        var x = function (D, C) {
            var B = D;
            var A = C;
            if (t !== B || m !== A) {
                t = B;
                m = A;
                c = Class49.member351(0, t, 0, m, 0.1, 5000, c);
                if (o === undefined) {
                    o = Class71(u);
                }
                o.set(0, 0, t, m);
            } else if (o === undefined) {
                o = Class71(u);
                o.set(0, 0, t, m);
            }
        };
        var g = function (B) {
            if (B === -1) {
                return null;
            }
            var A = k.find(B);
            if (A !== null) {
                return A;
            }
            var E = r.getFile(Class95.member811, B, 0, Priority.member840, Class93.member796);
            if (E === undefined) {
                return null;
            }
            if (E === null) {
                return null;
            }
            var D = Class80.member605(E);
            var C = Class76(u, D.member556(), D.member557(), D.getColour(), false, true, false);
            D = null;
            E = null;
            if (C === null) {
                return null;
            }
            C.member563();
            k.put(C, 1, B);
            return C;
        };
        s.member584 = function (C, P, G, R) {
            var N = C.member556();
            var D = C.member557();
            x(N, D);
            u.member585();
            var B = y.member466;
            if (false) {
            }
            var S = null;
            if (B[2][0] > -1) {
                S = Class68.member421(Class63.member413.id, undefined);
            } else if (B[1][0] > -1) {
                S = Class68.member421(Class63.member412.id, undefined);
            } else {
                S = Class68.member421(Class63.member411.id, undefined);
            }
            Class68.member483(S, true);
            var L = u.bindTexture(Class75.member539, C.member558(), u.gl.TEXTURE_2D);
            u.gl.uniform1i(S.member457(Class7.member189.id), L);
            if (B[0][0] > -1) {
                var O = g(B[0][0]);
                if (O !== null) {
                    var L = u.bindTexture(Class75.member541, O.member558(), u.gl.TEXTURE_2D);
                    u.gl.uniform1i(S.member457(Class7.member198.id), L);
                }
            }
            if (B[1][0] > -1) {
                var O = g(B[1][0]);
                if (O !== null) {
                    var L = u.bindTexture(Class75.member542, O.member558(), u.gl.TEXTURE_2D);
                    u.gl.uniform1i(S.member457(Class7.member199.id), L);
                }
            }
            if (B[2][0] > -1) {
                var O = g(B[2][0]);
                if (O !== null) {
                    var L = u.bindTexture(Class75.member543, O.member558(), u.gl.TEXTURE_2D);
                    u.gl.uniform1i(S.member457(Class7.member200.id), L);
                }
            }
            var A = 1 - (B[0][1] + B[1][1] + B[2][1]);
            u.gl.uniform4f(S.member457(Class7.member197.id), A, B[0][1], B[1][1], B[2][1]);
            u.member581(P);
            var I = u.member588();
            var M = u.member589();
            u.member582(0, 0, I, M);
            var Q = c;
            if (R !== undefined) {
                if (z === undefined) {
                    z = Class71(u);
                }
                R[1] = M - (R[1] + R[3]);
                var E;
                if (G !== undefined && (G[0] !== 0 || G[1] !== 0 || G[2] !== N || G[3] !== D)) {
                    G[1] = D - (G[1] + G[3]);
                    var K = G[0] / N;
                    var J = G[1] / D;
                    var H = (G[0] + G[2]) / N;
                    var F = (G[1] + G[3]) / D;
                    z.set(R[0], R[1], R[2], R[3], K, J, H, F);
                } else {
                    z.set(R[0], R[1], R[2], R[3]);
                }
                z.bind();
                Q = Class49.member351(0, I, 0, M, 0.1, 5000, n);
            } else {
                o.bind();
            }
            u.member590(false);
            u.gl.uniformMatrix4fv(S.member457(Class7.member142.id), false, Q);
            u.gl.vertexAttribPointer(S.member459(Class7.member262.id), 2, u.gl.FLOAT, false, 16, 0);
            u.gl.vertexAttribPointer(S.member459(Class7.member270.id), 2, u.gl.FLOAT, false, 16, 8);
            u.gl.drawElements(u.gl.TRIANGLES, 6, u.gl.UNSIGNED_SHORT, 0);
            u.member586();
        };
        i = undefined;
        return s;
    };
    return a;
}();