import { Class37 } from 'Class37.js';
import { Class49 } from 'Class49.js';
export var Class140 = function () {
    var s = {};
    var j = function (z) {
        var A = new Float32Array(4);
        if (z) {
            A[0] = z[0];
            A[1] = z[1];
            A[2] = z[2];
            A[3] = z[3];
        }
        return A;
    };
    s.create = j;
    var v = function (z) {
        if (!z) {
            z = j();
        }
        z[0] = 0;
        z[1] = 0;
        z[2] = 0;
        z[3] = 1;
        return z;
    };
    s.member313 = v;
    var t = function (B, A, D) {
        var z = Math.sin(A * 0.5);
        var C = Math.cos(A * 0.5);
        D[0] = B[0] * z;
        D[1] = B[1] * z;
        D[2] = B[2] * z;
        D[3] = C;
        return D;
    };
    s.member1353 = t;
    var n = function (z, A) {
        A[0] = z[0];
        A[1] = z[1];
        A[2] = z[2];
        A[3] = z[3];
        return A;
    };
    s.set = n;
    var r = function (A, D) {
        var z = A[0], C = A[1], B = A[2];
        if (!D || A === D) {
            A[3] = -Math.sqrt(Math.abs(1 - z * z - C * C - B * B));
            return A;
        }
        D[0] = z;
        D[1] = C;
        D[2] = B;
        D[3] = -Math.sqrt(Math.abs(1 - z * z - C * C - B * B));
        return D;
    };
    s.member1354 = r;
    var q = function (z, A) {
        return z[0] * A[0] + z[1] * A[1] + z[2] * A[2] + z[3] * A[3];
    };
    s.member327 = q;
    var d = function (C, G) {
        var A = C[0], z = C[1], F = C[2], E = C[3], D = A * A + z * z + F * F + E * E, B = D ? 1 / D : 0;
        if (!G || C === G) {
            C[0] *= -B;
            C[1] *= -B;
            C[2] *= -B;
            C[3] *= B;
            return C;
        }
        G[0] = -C[0] * B;
        G[1] = -C[1] * B;
        G[2] = -C[2] * B;
        G[3] = C[3] * B;
        return G;
    };
    s.inverse = d;
    var o = function (z, A) {
        if (!A || z === A) {
            z[0] *= -1;
            z[1] *= -1;
            z[2] *= -1;
            return z;
        }
        A[0] = -z[0];
        A[1] = -z[1];
        A[2] = -z[2];
        A[3] = z[3];
        return A;
    };
    s.member1355 = o;
    var m = function (z, A) {
        if (!A || z === A) {
            z[0] *= -1;
            z[1] *= -1;
            z[2] *= -1;
            z[3] *= -1;
            return z;
        }
        A[0] = -z[0];
        A[1] = -z[1];
        A[2] = -z[2];
        A[3] = -z[3];
        return A;
    };
    s.member324 = m;
    var e = function (B) {
        var z = B[0], D = B[1], C = B[2], A = B[3];
        return Math.sqrt(z * z + D * D + C * C + A * A);
    };
    s.length = e;
    var u = function (C, F) {
        if (!F) {
            F = C;
        }
        var z = C[0], E = C[1], D = C[2], A = C[3], B = Math.sqrt(z * z + E * E + D * D + A * A);
        if (B === 0) {
            F[0] = 0;
            F[1] = 0;
            F[2] = 0;
            F[3] = 0;
            return F;
        }
        B = 1 / B;
        F[0] = z * B;
        F[1] = E * B;
        F[2] = D * B;
        F[3] = A * B;
        return F;
    };
    s.normalize = u;
    var k = function (A, C, J) {
        if (!J) {
            J = A;
        }
        var H = A[0], G = A[1], F = A[2], I = A[3], D = C[0], B = C[1], z = C[2], E = C[3];
        J[0] = H * E + I * D + G * z - F * B;
        J[1] = G * E + I * B + F * D - H * z;
        J[2] = F * E + I * z + H * B - G * D;
        J[3] = I * E - H * D - G * B - F * z;
        return J;
    };
    s.member323 = k;
    var i = function (C, z, M) {
        if (!M) {
            M = z;
        }
        var L = z[0], K = z[1], B = z[2], I = C[0], H = C[1], G = C[2], J = C[3], E = J * L + H * B - G * K, D = J * K + G * L - I * B, A = J * B + I * K - H * L, F = -I * L - H * K - G * B;
        M[0] = E * J + F * -I + D * -G - A * -H;
        M[1] = D * J + F * -H + A * -I - E * -G;
        M[2] = A * J + F * -G + E * -H - D * -I;
        return M;
    };
    s.member318 = i;
    var h = function (z, O) {
        if (!O) {
            O = Class37.create();
        }
        var J = z[0], I = z[1], F = z[2], K = z[3], P = J + J, C = I + I, L = F + F, D = J * P, B = J * C, A = J * L, N = I * C, M = I * L, Q = F * L, E = K * P, G = K * C, H = K * L;
        O[0] = 1 - (N + Q);
        O[1] = B + H;
        O[2] = A - G;
        O[3] = B - H;
        O[4] = 1 - (D + Q);
        O[5] = M + E;
        O[6] = A + G;
        O[7] = M - E;
        O[8] = 1 - (D + N);
        return O;
    };
    s.member334 = h;
    var g = function (z, O) {
        if (!O) {
            O = Class49.create();
        }
        var J = z[0], I = z[1], F = z[2], K = z[3], P = J + J, C = I + I, L = F + F, D = J * P, B = J * C, A = J * L, N = I * C, M = I * L, Q = F * L, E = K * P, G = K * C, H = K * L;
        O[0] = 1 - (N + Q);
        O[1] = B + H;
        O[2] = A - G;
        O[3] = 0;
        O[4] = B - H;
        O[5] = 1 - (D + Q);
        O[6] = M + E;
        O[7] = 0;
        O[8] = A + G;
        O[9] = M - E;
        O[10] = 1 - (D + N);
        O[11] = 0;
        O[12] = 0;
        O[13] = 0;
        O[14] = 0;
        O[15] = 1;
        return O;
    };
    s.member316 = g;
    var c = function (A, B, z, H) {
        if (!H) {
            H = A;
        }
        var C = A[0] * B[0] + A[1] * B[1] + A[2] * B[2] + A[3] * B[3], E, D, G, F;
        if (Math.abs(C) >= 1) {
            if (H !== A) {
                H[0] = A[0];
                H[1] = A[1];
                H[2] = A[2];
                H[3] = A[3];
            }
            return H;
        }
        E = Math.acos(C);
        D = Math.sqrt(1 - C * C);
        if (Math.abs(D) < 0.001) {
            H[0] = A[0] * 0.5 + B[0] * 0.5;
            H[1] = A[1] * 0.5 + B[1] * 0.5;
            H[2] = A[2] * 0.5 + B[2] * 0.5;
            H[3] = A[3] * 0.5 + B[3] * 0.5;
            return H;
        }
        G = Math.sin((1 - z) * E) / D;
        F = Math.sin(z * E) / D;
        H[0] = A[0] * G + B[0] * F;
        H[1] = A[1] * G + B[1] * F;
        H[2] = A[2] * G + B[2] * F;
        H[3] = A[3] * G + B[3] * F;
        return H;
    };
    s.member1356 = c;
    var b = function (z, C) {
        var A = [
            z[0],
            z[1],
            z[2],
            1
        ];
        var B = v();
        o(C, B);
        var D = v();
        k(B, A, D);
        k(D, C);
        z[0] = D[0];
        z[1] = D[1];
        z[2] = D[2];
        return z;
    };
    s.member1357 = b;
    var a = function (A, C, z, B) {
        if (!B) {
            B = A;
        } else {
            n(A, B);
        }
        if (q(A, C) < 0) {
            m(B);
        }
        B[0] *= 1 - z;
        B[1] *= 1 - z;
        B[2] *= 1 - z;
        B[3] *= 1 - z;
        B[0] += C[0] * z;
        B[1] += C[1] * z;
        B[2] += C[2] * z;
        B[3] += C[3] * z;
        u(B);
        return B;
    };
    s.member1358 = a;
    var y = function (z) {
        return '[' + z[0] + ', ' + z[1] + ', ' + z[2] + ', ' + z[3] + ']';
    };
    s.member299 = y;
    var x = function (B) {
        var z = B[0], D = B[1], C = B[2], A = B[3];
        return z * z + D * D + C * C + A * A;
    };
    s.member1359 = x;
    return s;
}();