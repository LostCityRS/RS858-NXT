import { Class131 } from 'Class131.js';
import { Class154 } from 'Class154.js';
import { Class41 } from 'Class41.js';
export var Class272 = function (g) {
    var u = {};
    var k = 4294967295;
    u.member1471 = function () {
        return k;
    };
    var e = new Float32Array([
        -50,
        60,
        -60
    ]);
    u.member3215 = function () {
        return e;
    };
    var a = 1.1523438;
    u.member3216 = function () {
        return a;
    };
    var h = 0.69921875;
    u.member3217 = function () {
        return h;
    };
    var n = 1.2;
    u.member3218 = function () {
        return n;
    };
    var d = 3368069375;
    u.member3219 = function () {
        return d;
    };
    var b = 0;
    u.member3220 = function () {
        return b;
    };
    var A = 0;
    u.member3221 = function () {
        return A;
    };
    var y = 0;
    u.member3222 = function () {
        return y;
    };
    var q = 0;
    u.member3223 = function () {
        return q;
    };
    var s = -1;
    u.member3224 = function () {
        return s;
    };
    u.member3225 = function (B) {
        s = B;
        z = member47;
        skyBoxTextures = new Array(6);
    };
    var z = member47;
    u.member3226 = function (D, E) {
        if (s === -1) {
            return undefined;
        }
        if (z === member47) {
            z = D.member3227(Class131.member1223.member1204, s);
        }
        if (z === member47) {
            return member47;
        }
        var C = z.member3228();
        if (C === undefined) {
            return undefined;
        }
        var B = Class154.member1549(C);
        if (B !== member47 && B !== undefined) {
            B.member563();
        }
        return B;
    };
    var j = false;
    u.member3229 = function () {
        return j;
    };
    var r = 1;
    u.member3230 = function () {
        return r;
    };
    var i = 0, m = 1, v = 0, x = 1;
    u.member3231 = function () {
        return i;
    };
    u.member3232 = function () {
        return m;
    };
    u.member3233 = function () {
        return v;
    };
    u.member3234 = function () {
        return x;
    };
    var t = [
        -1,
        -1,
        -1
    ];
    var c = [
        0,
        0,
        0
    ];
    u.member3235 = function () {
        return t;
    };
    u.member3236 = function () {
        return c;
    };
    var o = undefined;
    u.member1403 = function () {
        return o;
    };
    u.member3237 = function (E, C) {
        if (o === undefined && C === undefined) {
            return undefined;
        }
        var D = C;
        if (o !== undefined) {
            D = o;
        }
        var B = Class154.member1549(D);
        if (B !== member47 && B !== undefined) {
            B.member563();
        }
        return B;
    };
    u.member3238 = function (C) {
        if (!C.member3239()) {
            return;
        }
        if (C.member1014() !== -1) {
            k = C.member1014() << 8 | 255;
        }
        if (C.member3240() !== -1) {
            a = C.member3240();
        }
        if (C.member3217() !== -1) {
            h = C.member3217();
        }
        if (C.member3218() !== -1) {
            n = C.member3218();
        }
        if (C.member3215() !== undefined) {
            e = Class41.create(C.member3215());
        }
        if (C.member3241() !== -1) {
            d = C.member3241() << 8 | 255;
        }
        if (C.member3220() !== -1) {
            b = C.member3220();
        }
        if (C.member3242() !== -1) {
            o = C.member3242();
        }
        if (C.member3222() !== -1) {
            y = C.member3222();
        }
        if (C.member3223() !== -1) {
            q = C.member3223();
        }
        if (C.member3243() !== -1) {
            A = C.member3243();
        }
        if (C.member3244() !== -1) {
            s = C.member3244();
        }
        for (var B = 0; B < t.length; B++) {
            if (C.member3245(B) !== -1) {
                t[B] = C.member3245(B);
                c[B] = C.member3246(B);
            }
        }
    };
    u.member2969 = function (C) {
        if (C === undefined || C === member47) {
            return false;
        }
        if (k !== C.member1471()) {
            return false;
        }
        var E = C.member3215();
        if (e[0] !== E[0] || e[1] !== E[1] || e[2] !== E[2]) {
            return false;
        }
        if (a !== C.member3216()) {
            return false;
        }
        if (h !== C.member3217()) {
            return false;
        }
        if (n !== C.member3218()) {
            return false;
        }
        if (d !== C.member3219()) {
            return false;
        }
        if (b !== C.member3220()) {
            return false;
        }
        if (A !== C.member3221()) {
            return false;
        }
        if (y !== C.member3222()) {
            return false;
        }
        if (q !== C.member3223()) {
            return false;
        }
        if (s !== C.member3224()) {
            return false;
        }
        if (o !== C.member1403()) {
            return false;
        }
        if (j !== C.member3229()) {
            return false;
        }
        var F = C.member3235();
        var D = C.member3236();
        for (var B = 0; B < t.length; B++) {
            if (t[B] !== F[B] || c[B] !== D[B]) {
                return false;
            }
        }
        return true;
    };
    u.member3247 = function (B) {
        k = B.member1471();
        e = new Float32Array(B.member3215());
        a = B.member3216();
        h = B.member3217();
        n = B.member3218();
        d = B.member3219();
        b = B.member3220();
        A = B.member3221();
        y = B.member3222();
        q = B.member3223();
        s = B.member3224();
        o = B.member1403();
        j = B.member3229();
        t = B.member3235().slice(0);
        c = B.member3236().slice(0);
    };
    if (g.data !== undefined) {
        k = g.data.member1073() << 8 | 255;
        e = new Float32Array([
            g.data.member1071(),
            -g.data.member1071(),
            g.data.member1071()
        ]);
        a = g.data.member608() / 256;
        h = g.data.member608() / 256;
        n = g.data.member608() / 256;
        d = g.data.member1073() << 8 | 255;
        b = g.data.member608() * 4;
        A = g.data.member320();
        y = g.data.member320();
        q = g.data.member320();
        s = g.data.member1071();
        if (g.data.member1047() !== g.data.getSize()) {
            o = g.data.member1071();
            if (o === -1) {
                o = undefined;
            }
        }
        j = g.data.member609() === 1 ? true : false;
        t[0] = g.data.member1071();
        c[0] = g.data.member320();
    } else if (g.member3248 !== undefined) {
    } else {
        throw new Error('1054 ');
    }
    g = undefined;
    return u;
};