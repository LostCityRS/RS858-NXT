import { Class140 } from 'Class140.js';
import { Class291 } from 'Class291.js';
import { Class41 } from 'Class41.js';
import { Class307 } from 'Class307.js';
import { Class594 } from 'Class594.js';
import { Class595 } from 'Class595.js';
import { Class496 } from 'Class496.js';
import { Class290 } from 'Class290.js';
import { Class120 } from 'Class120.js';
import { Class72 } from 'Class72.js';
import { Class453 } from 'Class453.js';
import { Class394 } from 'Class394.js';
import { Class86 } from 'Class86.js';
import { Class333 } from 'Class333.js';
import { Class129 } from 'Class129.js';
import { Class588 } from 'Class588.js';
import { Class501 } from 'Class501.js';
export var Class596 = function () {
    var O = {};
    var F = 128;
    var X;
    var L;
    var E = Class140.create();
    var K = new Float32Array(3);
    var u = new Float32Array(3);
    var e = new Float32Array(3);
    var d = Class291();
    var P = new Float32Array([
        0,
        0,
        -1
    ]);
    var g = new Float32Array([
        0,
        1,
        0
    ]);
    var U = new Float32Array([
        0,
        -1,
        0
    ]);
    var T = new Float32Array(3);
    var I = 2 * F + 1;
    var G = new Int32Array(I * I);
    var y = new Int32Array(I * I);
    var s = new Int32Array(1000);
    var m = 0;
    var V;
    O.member6102 = function () {
        return V;
    };
    var h = false;
    O.member9065 = function () {
        return h;
    };
    O.member9066 = function () {
        h = !h;
        if (h) {
            var Y = Class41.create();
            c().member3650(Y);
            H.setPosition(Y);
            H.member3656(c().member3655());
            H.member3658(c().member3657() * 4);
        }
    };
    var H = Class307();
    O.member9067 = function () {
        return H;
    };
    var S = false;
    O.member9068 = function () {
        return S;
    };
    var D = Class594();
    O.member9069 = function () {
        return D;
    };
    var i = Class594({ member9058: true });
    O.member9070 = function () {
        return i;
    };
    O.member9071 = function () {
        if (S) {
            return D;
        }
        return i;
    };
    var c = O.member9071;
    O.member9072 = function (Y) {
        if (Y === S) {
            return;
        }
        if (!Y) {
            b(false);
        }
        S = Y;
        if (S) {
            i.member9020();
        } else {
            D.member9020();
        }
    };
    var A = false;
    O.member3959 = function (Y) {
        A = Y;
    };
    var B = Math.PI / 8;
    var C = Class595;
    O.member9073 = function () {
        return C;
    };
    O.member7844 = function (Y) {
        var Z = X.member7135().member6453();
        if (Z !== undefined) {
            i.member9052(Z, false);
            i.member9005();
        } else {
            i = Class594({ member9058: true });
        }
        S = Y;
        if (S) {
            D.member8994(true);
        }
    };
    var b = O.member7844;
    O.member9074 = function () {
        if (S) {
            return;
        }
        if (!i.member3590() || !D.member3590()) {
            return;
        }
        i.member3650(K);
        i.member9024(u);
        D.member9056(K, u, X.member6116.member7139());
        S = true;
        D.member8994(true);
    };
    var z = null;
    O.member4583 = function () {
        return z;
    };
    var J = {
        x: 0,
        member756: 0
    };
    O.member6430 = function () {
        return J;
    };
    var R = 168;
    O.member8498 = function () {
        return R;
    };
    var a = false;
    var x = Class496.member7933;
    O.member8044 = function () {
        return x;
    };
    O.member9075 = function (Y) {
        x = Y;
    };
    var q = Class290();
    var k = undefined;
    O.member8787 = function (Y) {
        k = Y;
    };
    O.member9076 = function () {
        return k !== undefined;
    };
    var n = 0;
    O.member8788 = function () {
        return Math.floor(n);
    };
    var W = function (Y) {
        X = Y;
        if (true) {
            V = Class120({
                member433: X.member433,
                member995: X.member995
            });
            V.member1018();
            V.member1023(Class72.member500);
            V.member1023(Class72.member501);
            V.member1023(Class72.member401);
            V.member1023(Class72.member503);
            V.member1023(Class72.member414);
            L = X.member4480();
            L.member3973(X.member433, V);
        } else {
        }
    };
    O.member25 = W;
    var o = function (Z, Y) {
        J = {
            x: 0,
            member756: 0
        };
        if (Y === Class453.member7201 && Z !== Class453.member7202) {
            i = Class594({ member9058: true });
            D = Class594();
        }
        if (Z === Class453.member7201) {
            X.member6444.member8383();
            n = 0;
        }
    };
    O.member7183 = o;
    O.member9077 = function (Y, Z) {
        z = Y;
        J = Z;
        a = true;
        X.member9078.member8491(z);
        X.member6429.member8491(z);
        X.member9078.member8497();
        X.member6429.member8497();
    };
    var N = function () {
        var Y = Class291(0, J.x + R / 2, J.member756 + R / 2);
        X.member6444.member8390(Y, V);
        n = 0;
    };
    O.member9079 = N;
    O.member9080 = function (Y) {
        var Z = X.member7135().member6453();
        if (Z !== undefined) {
            Y.level = Z.member4081();
        } else {
            Y.level = 0;
        }
        if (!c().member3590()) {
            return null;
        }
        c().member9025(Y.member3454);
        return Y;
    };
    O.member8939 = function (Y) {
        return c().member8939(Y);
    };
    var r = O.member8939;
    O.member9081 = function () {
        var Y = r();
        if (Y === null) {
            return null;
        }
        Class140.member1353(g, Y, E);
        Class140.member318(E, P, K);
        c().member8926(E);
        Class140.member318(E, K);
        Class140.member1353(g, -Y, E);
        Class140.member318(E, K);
        if (K[2] >= 0) {
            K[2] = -K[2];
            K[1] = -K[1];
        }
        return Class394.member4543(K[1], K[2]);
    };
    O.member487 = function (ac) {
        X.member6444.member487();
        X.member6452.member487();
        X.member6450.member487();
        X.member6431.member487();
        X.member9078.member487();
        X.member6429.member487();
        X.member8733.member487();
        if (X.member7135() !== undefined) {
            var Z = X.member7135().member6453();
            if (!i.member3590() && Z !== undefined) {
                i.member9052(Z);
            }
        }
        var Y = undefined;
        var ae = undefined;
        var af = X.member6444.member6445();
        if (af !== null) {
            Y = af.member4114();
            ae = af.member4111();
        }
        var ad = c();
        var aa = X.member7619.member7654();
        var ag, ab;
        if (aa !== undefined) {
            ag = aa.member6752();
            ab = aa.member6754();
        } else {
            ag = X.member433.member588();
            ab = X.member433.member589();
        }
        ad.member4224(ac, Y, ae, ab, ag);
        if (ad.member9002()) {
            X.member7187.member9082();
        }
    };
    O.member486 = function (aj, ah, ao, ak) {
        k = undefined;
        X.member6452.member486();
        X.member6450.member486();
        X.member9078.member486();
        X.member6431.member486();
        X.member6446.member486();
        t();
        X.member8733.member486();
        X.member8735.member486();
        var ag = c();
        if (!ag.member3590()) {
            return;
        }
        ag.member9025(q.member3454);
        if (h) {
            ag = H;
        }
        var ai = Class86.member414;
        var ad = X.member7135().member6453();
        var al = L.member3960();
        if (ad !== undefined) {
            var ac = ad.member4110();
            var at = ad.member4081();
            q.level = at;
            if (false) {
            }
            if (ac < Class86.member414 - 1) {
                var af = X.member6444.member6445();
                if (al === Class333.member3794 || A) {
                    ai = ac;
                } else if (al === Class333.member3792 && af !== null) {
                    var ab = af.member4111();
                    if (!h) {
                        ag.member3650(K);
                        ag.member9024(u);
                        var aa = K[0] >> Class86.member720;
                        var Z = K[2] >> Class86.member720;
                        var ar = u[0] >> Class86.member720;
                        var ap = u[2] >> Class86.member720;
                        var aq = ab.member4570(at, ar, ap);
                        if ((aq & Class129.member1176) !== 0) {
                            ai = ac;
                        } else {
                            aq = ab.member4570(at, aa, Z);
                            if ((aq & Class129.member1174) !== 0) {
                                if (af.member4114().member4115(3, K[0], K[2], false) > K[1]) {
                                    ai = ac;
                                }
                            } else if ((aq & Class129.member1176) !== 0) {
                                ag.member3649(e);
                                var am = Math.acos(Class41.member327(e, U));
                                if (am > B) {
                                    ai = ac;
                                }
                            }
                        }
                        if (ai > ac && (ag.member8991() === Class588.member8985 || ag.member8991() === Class588.member8980)) {
                            ag.member3649(e);
                            var am = Math.acos(Class41.member327(e, U));
                            if (am > B) {
                                var an = { member4226: ac };
                                if (af.member7842().member1805(K, u, -1, -1, an)) {
                                    ai = ac;
                                }
                            }
                        }
                    } else {
                        ag.member3650(K);
                        var aa = Math.floor(K[0] / Class86.member718);
                        var Z = Math.floor(K[2] / Class86.member718);
                        aq = ab.member4570(at, aa, Z);
                        if ((aq & Class129.member1176) !== 0) {
                            ai = ac;
                        }
                    }
                }
            }
        }
        n = X.member6444.member486(aj, ah, ag, q, ai, ao, ak);
        if (a && n === 100) {
            var Y = X.member8252.member9083();
            if (Y.member8239()) {
                if (false) {
                }
                var ae = Y.member8260(Class501.member8127);
                Y.member8261(ae);
            }
            a = false;
        }
    };
    O.load = function (Y, Z) {
        var aa = X.member7135().member6453();
        if (aa !== undefined) {
            aa.member7836(d, false);
            n = X.member6444.load(Y, Z, d, V);
        }
    };
    O.member7395 = function (Y, Z) {
        if (k !== undefined) {
            n = X.member6444.member7395(Y, Z, k, V);
            if (n >= 100) {
                k = undefined;
            }
        }
    };
    O.member9084 = function (ab, aa) {
        var Z = X.member7135();
        var ad = 0;
        if (Z !== undefined) {
            var ac = Z.member6453();
            if (ac !== undefined) {
                ad = ac.member4110();
            }
        }
        var Y = X.member6444.member6445();
        if (Y !== null) {
            return Y.member4114().member4115(ad, ab, aa, true);
        } else {
            return 0;
        }
    };
    O.member9085 = function (ab, aa) {
        var Z = c();
        if (!Z.member3590()) {
            return false;
        }
        var Y = X.member6444.member6445();
        if (Y === null) {
            return false;
        }
        Y.member8372(q, ab, aa, Z.member3655(), Z.member3657());
        return true;
    };
    var t = function () {
        var aa = undefined;
        var ab = X.member7135();
        if (ab !== undefined) {
            var Z = ab.member6453();
            if (Z !== undefined) {
                aa = Z.getWorldPosition();
            }
        }
        if (aa === undefined) {
            return;
        }
        for (var ac = 0; ac <= 3; ac++) {
            for (var Y = 0; Y < m; Y++) {
                G[s[Y]] = 0;
            }
            m = 0;
            for (var Z = X.member6452.member776(); Z !== undefined; Z = X.member6452.member777()) {
                j(Z, ac, aa);
            }
            for (var Z = X.member6450.member776(); Z !== undefined; Z = X.member6450.member777()) {
                j(Z, ac, aa);
            }
            for (var Z = X.member6452.member776(); Z !== undefined; Z = X.member6452.member777()) {
                Q(Z, ac, aa);
            }
            for (var Z = X.member6450.member776(); Z !== undefined; Z = X.member6450.member777()) {
                Q(Z, ac, aa);
            }
        }
    };
    var M = function (Y, Z) {
        if ((Y & 1) === 0) {
            if ((Z[0] & Class86.member732) !== 0 || (Z[2] & Class86.member732) !== 0) {
                return true;
            }
        } else if ((Z[0] & Class86.member732) !== Class86.member733 || (Z[2] & Class86.member732) !== Class86.member733) {
            return true;
        }
        return false;
    };
    var j = function (ag, Z, ab) {
        if (ag.member4081() !== Z) {
            return;
        }
        if (ag.member7812() === ag.member7784) {
            return;
        }
        var an = ag.member7795();
        var af = ag.getWorldPosition();
        if (M(an, af)) {
            return;
        }
        if (ag.member7801()) {
            return;
        }
        Class41.member322(af, ab, T);
        T[0] -= Class86.member733;
        T[2] -= Class86.member733;
        if (an === 1) {
            var Y = (T[0] >> Class86.member720) + F;
            var am = (T[2] >> Class86.member720) + F;
            if (Y < 0 || Y > I || am < 0 || am > I) {
                ag.member7813(ag.member7784);
                return;
            }
            var ac = Y + am * I;
            if (ag.member7812() > G[ac]) {
                G[ac] = ag.member7812();
                y[ac] = 1;
                s[m++] = ac;
            } else if (ag.member7812() === G[ac]) {
                y[ac]++;
            }
        } else {
            var ai = (an - 1) * Class86.member733 + 60;
            var al = (T[0] - ai >> Class86.member720) + F;
            var ak = (T[2] - ai >> Class86.member720) + F;
            var ah = (T[0] + ai >> Class86.member720) + F;
            var ae = (T[2] + ai >> Class86.member720) + F;
            if (al < 0 || ah > I || ak < 0 || ae > I) {
                ag.member7813(ag.member7784);
                return;
            }
            for (var aj = al; aj <= ah; aj++) {
                for (var aa = ak; aa <= ae; aa++) {
                    var ad = aj + aa * I;
                    if (ag.member7812() > G[ad]) {
                        G[ad] = ag.member7812();
                        y[ad] = 1;
                        s[m++] = ad;
                    } else if (ag.member7812() === G[ad]) {
                        y[ad]++;
                    }
                }
            }
        }
    };
    var Q = function (ag, Z, ab) {
        if (ag.member4081() !== Z) {
            return;
        }
        if (ag.member7812() === ag.member7784) {
            ag.member7816(false);
            return;
        }
        var an = ag.member7795();
        var af = ag.getWorldPosition();
        if (M(an, af)) {
            return;
        }
        if (ag.member7801()) {
            return;
        }
        Class41.member322(af, ab, T);
        T[0] -= Class86.member733;
        T[2] -= Class86.member733;
        if (an === 1) {
            var Y = (T[0] >> Class86.member720) + F;
            var am = (T[2] >> Class86.member720) + F;
            var ac = Y + am * I;
            if (ag.member7812() != G[ac]) {
                ag.member7816(true);
                return;
            }
            if (y[ac] > 1) {
                y[ac]--;
                ag.member7816(true);
                return;
            }
        } else {
            var ai = (an - 1) * Class86.member733 + (Class86.member733 - 4);
            var al = (T[0] - ai >> Class86.member720) + F;
            var ak = (T[2] - ai >> Class86.member720) + F;
            var ah = (T[0] + ai >> Class86.member720) + F;
            var ae = (T[2] + ai >> Class86.member720) + F;
            if (!v(ag.member7812(), al, ak, ah, ae)) {
                for (var aj = al; aj <= ah; aj++) {
                    for (var aa = ak; aa <= ae; aa++) {
                        var ad = aj + aa * I;
                        if (ag.member7812() === G[ad]) {
                            y[ad]--;
                        }
                    }
                }
                ag.member7816(true);
                return;
            }
        }
        ag.member7816(false);
    };
    var v = function (aa, Z, af, ae, ac) {
        for (var Y = Z; Y <= ae; Y++) {
            for (var ad = af; ad <= ac; ad++) {
                var ab = Y + ad * I;
                if (aa === G[ab] && y[ab] <= 1) {
                    return true;
                }
            }
        }
        return false;
    };
    return O;
}();