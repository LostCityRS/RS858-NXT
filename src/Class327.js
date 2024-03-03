import { Class326 } from 'Class326.js';
import { Class325 } from 'Class325.js';
import { Class188 } from 'Class188.js';
import { Class111 } from 'Class111.js';
import { Class109 } from 'Class109.js';
import { Class299 } from 'Class299.js';
import { Class132 } from 'Class132.js';
import { Class292 } from 'Class292.js';
import { Class49 } from 'Class49.js';
import { Class41 } from 'Class41.js';
import { Class307 } from 'Class307.js';
import { Class37 } from 'Class37.js';
import { Class303 } from 'Class303.js';
export var Class327 = function () {
    var h = true;
    var t = 500;
    var n = true;
    var k = false;
    var v = {};
    v.member3765 = 0;
    v.member3766 = 1;
    v.member3767 = 2;
    v.member406 = 3;
    v.member502 = 4;
    v.member3768 = -1;
    v.member3769 = -2;
    var x;
    var o = false;
    v.member3770 = function () {
        return o;
    };
    var a = null;
    var y;
    var A;
    var i;
    var q;
    var u;
    var b;
    var r;
    var E;
    var m;
    var e = function () {
        return m;
    };
    v.member3771 = e;
    var z;
    var c = function () {
        return z;
    };
    v.member3772 = c;
    var j = Array();
    v.member25 = function (I) {
        if (x !== undefined) {
            return;
        }
        x = I;
        if (true) {
            a = x.member580(1024, 1024, true, true, false);
            a.member510();
        } else {
        }
        y = x.member580(1024, 1024, true, true, false);
        y.member510();
        var H = 64000;
        var G = 0.5 * (Math.sqrt(2 * H + 1) + 1);
        var J = Class326({
            member3764: Math.ceil(G),
            member546: 4278190335
        });
        G = (H - 1) / 2;
        var F = Class325({
            member3764: Math.ceil(G),
            member546: 16711935
        });
        i = Class188(undefined, J.member2008(), x);
        i.member510();
        A = Class188(undefined, F.member2008(), x);
        A.member510();
        q = Class111({ member433: x });
        u = Class109({ member433: x });
    };
    v.member3773 = function () {
        b = 0;
        r = 0;
        o = true;
        z = Class299.member3573();
        if (false) {
        }
        m = x.member3762();
        if (false) {
        }
    };
    var g = function () {
        o = false;
        v.member512();
    };
    var D = function (F) {
        if (F === v.member3768) {
            return c();
        }
        if (F === v.member3769) {
            return e();
        }
        var G = j[F].member3774;
        if (G === undefined) {
            G = 0;
        }
        return G;
    };
    v.member3775 = D;
    var C = function () {
        return x.member3776();
    };
    var B = function () {
        var F = Date.now();
        if (r === 1) {
            Class299.member3585(F);
            E = F;
        } else if (r > 2 && F - E > t) {
            Class299.member3585(F);
            j[b].member3774 = Class299.member3573();
            if (false) {
            }
            if (b === v.member3765 || j[b].member3774 <= j[v.member3765].member3774) {
                b++;
                r = 0;
                if (b === v.member502 && C() === false) {
                    j[b].member3774 = 0;
                    if (false) {
                    }
                    b++;
                }
                if (b === j.length) {
                    g();
                    return;
                }
            } else {
                if (false) {
                }
                b = 0;
                r = 0;
            }
        }
        if (true) {
            x.member581(a);
        } else {
        }
        x.member582(0, 0, x.member588(), x.member589());
        x.member1344(0, 0, x.member588(), x.member589());
        x.gl.clearColor(1, 0, 1, 1);
        x.gl.clear(x.gl.COLOR_BUFFER_BIT | x.gl.DEPTH_BUFFER_BIT);
        Class132.member1267(Class132.member1265());
        if (j[b].member3777()) {
            r++;
        }
        if (true) {
            x.member581(null);
        } else {
        }
        x.member582(0, 0, x.member588(), x.member589());
        x.member1344(0, 0, x.member588(), x.member589());
        x.member585();
    };
    v.member486 = B;
    v.member512 = function () {
        if (true) {
            a.member511();
            a = undefined;
        } else {
        }
        y.member511();
        y = undefined;
        x = undefined;
        i.member511();
        i = undefined;
        A.member511();
        A = undefined;
        q = undefined;
        u = undefined;
    };
    j[v.member3765] = {
        name: false ? {} : '',
        member3777: function () {
            return true;
        }
    };
    var d = false;
    j[v.member3766] = {
        name: false ? {} : '',
        member3777: function () {
            var Q = 10;
            var S = 10;
            var K = 10;
            var O = 512;
            var J = 1, P = 2000;
            var L = Class292(Class49.create(), Class49.create(), Class41.create(), Class41.create());
            if (d === false) {
                Class49.member356(x.member588() / 2, x.member589() / 2, O, O, J, P, x.member588(), x.member589(), L.member3463);
            } else {
                Class49.member357(x.member588() / 2, x.member589() / 2, O / K, O / K, J, P, x.member588(), x.member589(), 1, L.member3463);
            }
            var R = Class307();
            R.member3651(L.member1624);
            R.member3649(L.member3464);
            var F = Class49.member313();
            var I = Class49.create();
            var G = Class37.member313();
            x.member3640.member1630();
            x.member586();
            var N = Class41.create();
            for (var M = 0; M < 256; M++) {
                N[0] = Q / 2 - Math.random() * Q;
                N[1] = S / 2 - Math.random() * S;
                N[2] = K;
                Class49.translate(F, N, I);
                var H;
                if (M % 2) {
                    H = A.member1630(0, L, I, G, undefined, true);
                } else {
                    H = i.member1630(0, L, I, G, undefined, true);
                }
                if (!H) {
                    return false;
                }
            }
            x.member585();
            return true;
        }
    };
    j[v.member3767] = {
        name: false ? {} : '',
        member3777: function () {
            for (var H = 0; H < 128; H++) {
                var I = Math.random() * x.member588();
                var G = Math.random() * x.member589();
                var F = Math.random() * (x.member588() - I);
                var J = Math.random() * (x.member589() - G);
                Class303.member3643(F, J, I, G);
            }
            x.member3640.member1630();
            return true;
        }
    };
    var s = function (K, I) {
        x.member581(y);
        x.gl.clear(x.gl.COLOR_BUFFER_BIT | x.gl.DEPTH_BUFFER_BIT);
        var J = Math.random() * x.member588();
        var H = Math.random() * x.member589();
        var G = Math.random() * (x.member588() - J);
        var L = Math.random() * (x.member589() - H);
        Class303.member3643(G, L, J, H);
        x.member3640.member1630();
        for (var F = 0; F != I; ++F) {
            K.member584(y.member575(), a);
        }
        x.member581(a);
    };
    j[v.member406] = {
        name: false ? {} : '',
        member3777: function () {
            s(q, 48);
            return true;
        }
    };
    j[v.member502] = {
        name: false ? {} : '',
        member3777: function () {
            s(u, 16);
            return true;
        }
    };
    return v;
}();