export var Class41 = function () {
    var t = {};
    var e = function (z) {
        var A = new Float32Array(3);
        if (z) {
            A[0] = z[0];
            A[1] = z[1];
            A[2] = z[2];
        } else {
            A[0] = A[1] = A[2] = 0;
        }
        return A;
    };
    t.create = e;
    var q = function (z) {
        var A = new Float32Array(3);
        A[0] = z.gFloat();
        A[1] = z.gFloat();
        A[2] = z.gFloat();
        return A;
    };
    t.member321 = q;
    var v = function (z) {
        z[0] = 0;
        z[1] = 0;
        z[2] = 0;
        return z;
    };
    t.member313 = v;
    var j = function (z, A) {
        A[0] = z[0];
        A[1] = z[1];
        A[2] = z[2];
        return A;
    };
    t.set = j;
    var n = function (z, A, B) {
        if (!B || z === B) {
            z[0] += A[0];
            z[1] += A[1];
            z[2] += A[2];
            return z;
        }
        B[0] = z[0] + A[0];
        B[1] = z[1] + A[1];
        B[2] = z[2] + A[2];
        return B;
    };
    t.add = n;
    var o = function (z, A, B) {
        if (!B || z === B) {
            z[0] -= A[0];
            z[1] -= A[1];
            z[2] -= A[2];
            return z;
        }
        B[0] = z[0] - A[0];
        B[1] = z[1] - A[1];
        B[2] = z[2] - A[2];
        return B;
    };
    t.member322 = o;
    var g = function (z, A, B) {
        if (!B || z === B) {
            z[0] *= A[0];
            z[1] *= A[1];
            z[2] *= A[2];
            return z;
        }
        B[0] = z[0] * A[0];
        B[1] = z[1] * A[1];
        B[2] = z[2] * A[2];
        return B;
    };
    t.member323 = g;
    var i = function (z, A) {
        if (!A) {
            A = z;
        }
        A[0] = -z[0];
        A[1] = -z[1];
        A[2] = -z[2];
        return A;
    };
    t.member324 = i;
    var x = function (z, A, B) {
        if (!B || z === B) {
            z[0] *= A;
            z[1] *= A;
            z[2] *= A;
            return z;
        }
        B[0] = z[0] * A;
        B[1] = z[1] * A;
        B[2] = z[2] * A;
        return B;
    };
    t.scale = x;
    var u = function (A, E) {
        if (!E) {
            E = A;
        }
        var z = A[0], D = A[1], C = A[2], B = Math.sqrt(z * z + D * D + C * C);
        if (!B) {
            E[0] = 0;
            E[1] = 0;
            E[2] = 0;
            return E;
        } else if (B === 1) {
            E[0] = z;
            E[1] = D;
            E[2] = C;
            return E;
        }
        B = 1 / B;
        E[0] = z * B;
        E[1] = D * B;
        E[2] = C * B;
        return E;
    };
    t.normalize = u;
    var m = function (A, E, H) {
        if (!H) {
            H = A;
        }
        var G = A[0], F = A[1], B = A[2], z = E[0], D = E[1], C = E[2];
        H[0] = F * C - B * D;
        H[1] = B * z - G * C;
        H[2] = G * D - F * z;
        return H;
    };
    t.member325 = m;
    var a = function (A) {
        var z = A[0], C = A[1], B = A[2];
        return Math.sqrt(z * z + C * C + B * B);
    };
    t.length = a;
    var k = function (A) {
        var z = A[0], C = A[1], B = A[2];
        return z * z + C * C + B * B;
    };
    t.member326 = k;
    var s = function (z, A) {
        return z[0] * A[0] + z[1] * A[1] + z[2] * A[2];
    };
    t.member327 = s;
    var b = function (A, C, F) {
        if (!F) {
            F = A;
        }
        var z = A[0] - C[0], E = A[1] - C[1], D = A[2] - C[2], B = Math.sqrt(z * z + E * E + D * D);
        if (!B) {
            F[0] = 0;
            F[1] = 0;
            F[2] = 0;
            return F;
        }
        B = 1 / B;
        F[0] = z * B;
        F[1] = E * B;
        F[2] = D * B;
        return F;
    };
    t.member328 = b;
    var r = function (z, B, A, C) {
        if (!C) {
            C = z;
        }
        C[0] = z[0] + A * (B[0] - z[0]);
        C[1] = z[1] + A * (B[1] - z[1]);
        C[2] = z[2] + A * (B[2] - z[2]);
        return C;
    };
    t.member329 = r;
    var h = function (A, B) {
        var z = B[0] - A[0], D = B[1] - A[1], C = B[2] - A[2];
        return Math.sqrt(z * z + D * D + C * C);
    };
    t.member330 = h;
    var d = function (B, D, C, A, F) {
        if (!F) {
            F = B;
        }
        var z = member2840.create();
        var E = new Float32Array(4);
        E[0] = (B[0] - A[0]) * 2 / A[2] - 1;
        E[1] = (B[1] - A[1]) * 2 / A[3] - 1;
        E[2] = 2 * B[2] - 1;
        E[3] = 1;
        member2840.member323(C, D, z);
        if (!member2840.inverse(z)) {
            return null;
        }
        member2840.member331(z, E);
        if (E[3] === 0) {
            return null;
        }
        F[0] = E[0] / E[3];
        F[1] = E[1] / E[3];
        F[2] = E[2] / E[3];
        return F;
    };
    t.member332 = d;
    var y = function (z) {
        return '[' + z[0] + ', ' + z[1] + ', ' + z[2] + ']';
    };
    t.member299 = y;
    var c = function (z, A, B) {
        if (!B || z === B) {
            z[0] /= A[0];
            z[1] /= A[1];
            z[2] /= A[2];
            return z;
        }
        B[0] = z[0] / A[0];
        B[1] = z[1] / A[1];
        B[2] = z[2] / A[2];
        return B;
    };
    t.member333 = c;
    return t;
}();