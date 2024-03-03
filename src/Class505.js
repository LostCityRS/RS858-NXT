import { Class453 } from 'Class453.js';
import { Class478 } from 'Class478.js';
import { Class503 } from 'Class503.js';
import { Class480 } from 'Class480.js';
import { Class425 } from 'Class425.js';
import { Packet } from 'Class124.js';
import { Class500 } from 'Class500.js';
import { Class460 } from 'Class460.js';
import { Class501 } from 'Class501.js';
import { Class299 } from 'Class299.js';
import { Class502 } from 'Class502.js';
import { Class504 } from 'Class504.js';
import { Class236 } from 'Class236.js';
import { Class235 } from 'Class235.js';
import { Class66 } from 'Class66.js';
import { Class458 } from 'Class458.js';
export var Class505 = function () {
    var S = {};
    var Y;
    var a = 3;
    var G = true;
    var P = new Uint32Array(4);
    var h = 0;
    var s = 0;
    var r = { id: 0 };
    var T = { id: 10 };
    var H = { id: 15 };
    var L = { id: 20 };
    var d = { id: 30 };
    var V = r;
    S.member8230 = function () {
        return V;
    };
    var c;
    var E;
    var b;
    var Q;
    var W;
    var o;
    var R = false;
    S.member8231 = function () {
        return R;
    };
    S.member8232 = function (Z) {
        R = Z;
    };
    var X = function (Z) {
        Y = Z;
    };
    S.member25 = X;
    var u = function (aa, Z) {
        if (Z === Class453.member7200) {
            m();
        }
    };
    S.member7183 = u;
    var M = function () {
        if (Y.member8233() !== Class453.member7198) {
            return;
        }
        if (Y.member8234.member8235() || z()) {
            return;
        }
        Y.member8236(Class453.member7200);
    };
    S.member8237 = M;
    var z = function () {
        return V.id > r.id && V.id < d.id;
    };
    S.member8238 = z;
    var A = function () {
        return V === d;
    };
    S.member8239 = A;
    var K = function (Z) {
        Q = Z;
    };
    S.member8240 = K;
    var J = function (Z) {
        return Q;
    };
    S.member8241 = J;
    var I = function (Z) {
        W = Z;
        o = undefined;
    };
    S.member8242 = I;
    var F = function (Z) {
        W = Class478.member6136;
        o = Z;
    };
    S.member8243 = F;
    var D = function () {
        if (W === undefined) {
            return Class478.member778;
        }
        return W;
    };
    S.member8244 = D;
    var C = function () {
        return o;
    };
    S.member8245 = C;
    var B = function () {
        if (c === undefined) {
            return Class503.member778;
        }
        return c;
    };
    S.member8246 = B;
    var y = function () {
        if (E === undefined) {
            return Class480.member778;
        }
        return E;
    };
    S.member8247 = y;
    var x = function () {
        if (b === undefined) {
            return Class425.member778;
        }
        return b;
    };
    S.member8248 = x;
    var v = function (Z) {
        E = Z;
    };
    S.member8249 = v;
    var t = function (Z) {
        b = Z;
    };
    S.member8250 = t;
    var U = 99999999;
    var q = function (aa) {
        var ab = new Packet(518);
        for (var Z = 0; Z < 4; Z++) {
            P[Z] = Math.floor(Math.random() * U);
        }
        ab.p1(10);
        for (var Z = 0; Z < 4; Z++) {
            ab.p4(P[Z]);
        }
        for (var Z = 0; Z < 10; Z++) {
            ab.p4(Math.floor(Math.random() * U));
        }
        ab.p2(Math.floor(Math.random() * U));
        ab.member1101(Class500.member8047, Class500.member8048);
        aa.packet.member1067(ab.getData(), 0, ab.getPos());
        return P;
    };
    S.member8251 = q;
    var O = function () {
        Y.member8252.member8253().member8254();
        if (s < a) {
            h = 0;
            s++;
            V = T;
        } else {
            V = r;
            c = Class503.member8226;
        }
    };
    var n = function () {
        var aa = Y.clientParameters.member8255.value;
        var Z = Math.floor(Date.now() / 86400000) - 11745;
        document.member8256 = 'usrdob=' + Z + '; version=1; path=/; domain=' + aa;
    };
    S.member8257 = n;
    var m = function () {
        V = T;
        c = Class503.member6135;
        E = Class480.member778;
        b = Class425.member778;
        W = Class478.member778;
        Q = Class460.member778;
    };
    S.member8258 = m;
    var k = function (Z) {
        if (Y.member8233() !== Class453.member7200 || !A()) {
            return;
        }
        var ad = Y.member8252.member8259();
        var aa = ad.member8260(Class501.member8164);
        var ac = aa.packet;
        ac.p2(0);
        var ab = ac.getPos();
        ac.pjstr(Z);
        ac.pos += 7;
        ac.member1102(P, ab, ac.getPos());
        ac.member1069(ac.getPos() - ab);
        ad.member8261(aa);
        b = Class425.member6135;
    };
    S.member8262 = k;
    var j = function (aa) {
        if (Y.member8233() !== Class453.member7200 || !A()) {
            return;
        }
        var ad = Y.member8252.member8259();
        var Z = ad.member8260(Class501.member8167);
        var ac = Z.packet;
        ac.p1(0);
        var ab = ac.getPos();
        ac.pjstr(aa);
        ac.pos += 7;
        ac.member1102(P, ab, ac.getPos());
        ac.member1068(ac.getPos() - ab);
        ad.member8261(Z);
        Q = Class460.member6135;
    };
    S.member8263 = j;
    var i = function () {
        var aa = Y.member8252.member8259();
        var Z = aa.member8260(Class501.member8166);
        aa.member8261(Z);
        W = Class478.member6135;
        o = undefined;
    };
    S.member8264 = i;
    var g = function (ac, ag, ad, af, ah) {
        if (Y.member8233() !== Class453.member7200 || !A()) {
            return;
        }
        var ae = Y.member8252.member8259();
        var aa = ae.member8260(Class501.member8163);
        var ab = aa.packet;
        ab.p2(0);
        var Z = ab.getPos();
        ab.pjstr(ac);
        ab.pjstr(ag);
        ab.p1(ad);
        ab.p1(af ? 1 : 0);
        ab.pjstr(ah);
        ab.pos += 7;
        ab.member1102(P, Z, ab.getPos());
        ab.member1069(ab.getPos() - Z);
        ae.member8261(aa);
        if (ad < 13) {
            R = true;
            n();
        }
        E = Class480.member6135;
    };
    S.member8265 = g;
    var e = function (aa) {
        if (Y.member8233 !== Class453.member7200 || !A()) {
            return;
        }
        var ab = Y.member8252.member8259();
        var Z = ab.member8260(Class501.member8165);
        Z.packet.p1(aa);
        ab.member8261(Z);
    };
    S.member8266 = e;
    var N = function () {
        if (V === r) {
            return;
        }
        if (V === d) {
            if (!Y.member8252.member8253().member8239()) {
                V = r;
            }
            return;
        }
        var Z = 40 * 50;
        h++;
        if (h > Z) {
            O();
        }
        V.member867();
    };
    S.member487 = N;
    T.member867 = function () {
        Y.member8252.member8253().member8267(Y.member7140.member8268().member8269(), Y.member7140.member8268().member8270(), Class299.member3584().member3484());
        Y.member8252.member8253().member8271();
        V = H;
    };
    H.member867 = function () {
        var af = Y.member8252.member8253();
        if (!af.member8239()) {
            return;
        }
        var ac = Class502({ member7710: Y });
        ac.member8206();
        af.member8271();
        var ae = Class504.member8229(Class236.member2825.member2818, Class236.member2825.member2819, undefined);
        ae.packet.p2(0);
        var Z = ae.packet.getPos();
        ae.packet.p2(Number(Y.member3565()));
        ae.packet.p2(Number(Y.member3566()));
        q(ae);
        var ag = ae.packet.getPos();
        var ak = Y.clientParameters.clientToken.value;
        if (ak === undefined) {
            ak = '';
        }
        ae.packet.pjstr(ak);
        ae.packet.p2(Y.clientParameters.affiliate.value);
        var ai = Y.clientParameters.member8274.value;
        var ab = Y.clientParameters.member8275.value;
        if (ai === undefined) {
            ai = 0;
        }
        if (ab === undefined) {
            ab = 0;
        }
        ae.packet.p8({
            low: ai,
            high: ab
        });
        var ah = Y.clientParameters.member8276.value;
        if (ah === undefined) {
            ah = '';
        }
        ae.packet.pjstr(ah);
        ae.packet.p1(Y.clientParameters.member7138.value.id);
        ae.packet.p1(Y.clientParameters.member7256.value.id);
        var ad = Class235(Class66.member432('player'));
        ad.member2816();
        ad.member2815(ae.packet);
        var aa = Y.clientParameters.member8277.value !== undefined;
        ae.packet.p1(aa ? 1 : 0);
        if (aa) {
            ae.packet.pjstr(Y.clientParameters.member8277.value);
        }
        var aj = Y.member8278().member681();
        ae.packet.member1067(aj.getData(), 0, aj.getPos());
        ae.packet.pos += 7;
        ae.packet.member1102(P, ag, ae.packet.getPos());
        ae.packet.member1069(ae.packet.getPos() - Z);
        af.member8261(ae);
        af.member8279();
        Y.member8280(ac);
        V = L;
    };
    L.member867 = function () {
        var ad = Y.member8252.member8253();
        if (!ad.member8239()) {
            O();
            return;
        }
        if (ad.member8281() < 1) {
            return;
        }
        var ac = ad.member8282(1);
        c = ac.g1();
        if (c === Class503.member6136) {
            var Z = Class458({ member7265: P });
            var ab = new Uint32Array(4);
            for (var ae = 0; ae < 4; ae++) {
                ab[ae] = P[ae] + 50;
            }
            var aa = Class458({ member7265: ab });
            ad.member8283(Z, aa);
            V = d;
            ad.member8271();
            ad.member8279();
            ad.member8284().setPos(0);
        } else {
            console.log(c);
            ad.member8254();
            V = r;
        }
    };
    return S;
}();