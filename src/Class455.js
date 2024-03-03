import { Class317 } from 'Class317.js';
import { Class454 } from 'Class454.js';
import { Class453 } from 'Class453.js';
import { Class452 } from 'Class452.js';
import { Class450 } from 'Class450.js';
import { Class443 } from 'Class443.js';
export var Class455 = function () {
    var n = {};
    var r;
    var m = -1;
    n.member7209 = function () {
        return m;
    };
    var u = null;
    n.member7210 = function (x) {
        u = x;
    };
    n.member7211 = function (x) {
        if (u !== null) {
            u(x);
        }
    };
    var v = null;
    n.member7212 = function (x) {
        v = x;
    };
    n.member7213 = function (x) {
        if (v !== null) {
            v(x);
        }
    };
    var d = null;
    n.member7214 = function (x) {
        d = x;
    };
    n.member7215 = function (x) {
        if (d !== null) {
            d(x);
        }
    };
    var e = null;
    n.member7216 = function (x) {
        e = x;
    };
    n.member7217 = function (x) {
        if (e !== null) {
            e(x);
        }
    };
    var o = null;
    n.member7218 = function (x) {
        o = x;
    };
    n.member7219 = function (x) {
        if (o !== null) {
            o(x);
        }
    };
    var c = [];
    n.member7220 = function (x) {
        return c[x];
    };
    n.member7221 = function (x) {
        c[c.length] = x;
    };
    n.member7222 = function (x) {
        c.splice(x, 1);
    };
    n.member7223 = function () {
        return c.length;
    };
    n.member7224 = 400;
    n.member7225 = n.member7224;
    n.member7226 = 200;
    var h = function (y, x) {
        if (y.status !== r.member7140.member7227().member7228() && x.status === r.member7140.member7227().member7228()) {
            return 1;
        }
        if (y.status === r.member7140.member7227().member7228() && x.status !== r.member7140.member7227().member7228()) {
            return -1;
        }
        if (y.status === 0 && x.status !== 0) {
            return 1;
        }
        if (y.status !== 0 && x.status === 0) {
            return -1;
        }
        if (!y.member7229 && x.member7229) {
            return 1;
        }
        if (y.member7229 && !x.member7229) {
            return -1;
        }
        if (!y.member7230 && x.member7230) {
            return 1;
        }
        if (y.member7230 && !x.member7230) {
            return -1;
        }
        return 0;
    };
    n.member7231 = function () {
        c.sort(h);
    };
    n.member7232 = function (y) {
        var z = Class317.member3718(y, m);
        if (z === undefined) {
            return false;
        }
        if (r.member7135() === undefined) {
            return false;
        }
        if (j(y, r.member7135().member3009())) {
            return true;
        }
        for (var x = 0; x < c.length; x++) {
            if (j(y, c[x].member7233)) {
                return true;
            }
            if (j(y, c[x].member7234)) {
                return true;
            }
        }
        return false;
    };
    var k = [];
    n.member7235 = function (x) {
        return k[x];
    };
    n.member7236 = function (x) {
        k[k.length] = x;
    };
    n.member7237 = function (x) {
        k.splice(x, 1);
    };
    n.member7238 = function () {
        return k.length;
    };
    n.member7239 = 400;
    n.member7240 = n.member7239;
    n.member7241 = 200;
    n.member7242 = function (y) {
        var z = Class317.member3718(y, m);
        if (z === null) {
            return false;
        }
        for (var x = 0; x < k.length; x++) {
            if (j(y, k[x].member7233)) {
                return true;
            }
            if (j(y, k[x].member7234)) {
                return true;
            }
        }
        return false;
    };
    var g = [];
    n.member7243 = function (x) {
        return g[x];
    };
    n.member7244 = function (x) {
        g[g.length] = x;
    };
    n.member7245 = function (x) {
        g.splice(x, 1);
    };
    n.member7246 = function () {
        return g.length;
    };
    n.member7247 = 0;
    n.member7248 = 1;
    n.member7249 = 2;
    var a = n.member7247;
    n.member7250 = function () {
        return a;
    };
    n.member7251 = function (x) {
        a = x;
    };
    var i = 0;
    n.member7252 = function () {
        return i;
    };
    n.member7253 = function (x) {
        i = x;
    };
    var b = null;
    n.member7254 = function (x) {
        b = x;
    };
    n.member7255 = function () {
        if (b !== null) {
            b();
        }
    };
    var q = function (x) {
        r = x;
        switch (r.clientParameters.member7256.value) {
        case Class454.member3713:
            m = Class317.member3715.member3712.member3713;
            break;
        case Class454.member3714:
            m = Class317.member3715.member3712.member3714;
            break;
        default:
            m = 0;
        }
    };
    n.member25 = q;
    n.member7257 = function (A, z) {
        if (A === undefined || z === undefined) {
            return false;
        }
        var y = Class317.member3718(A, m);
        var x = Class317.member3718(z, m);
        if (A === null || z === null) {
            return false;
        }
        if (A.charAt(0) === '#' || z.charAt(0) === '#') {
            return A === z;
        }
        if (y === null || x === null) {
            return false;
        }
        return y === x;
    };
    var j = n.member7257;
    var t = function (y, x) {
        if (y === Class453.member7198) {
            c.length = 0;
            k.length = 0;
        }
    };
    n.member7183 = t;
    var s = function () {
        for (var x = 0; x < g.length; x++) {
            if (g[x].member3564 < Date.now() / 1000 - 5) {
                if (g[x].member7258 > 0) {
                    Class452.member7186(Class450.member7148, 0, '', '', '', g[x].member7233.concat(Class443.member6940[r.clientParameters.member7138.value.id]));
                }
                if (g[x].member7258 == 0) {
                    Class452.member7186(Class450.member7148, 0, '', '', '', g[x].member7233.concat(Class443.member6941[r.clientParameters.member7138.value.id]));
                }
                g.splice(x, 1);
            }
        }
    };
    n.member487 = s;
    return n;
}();