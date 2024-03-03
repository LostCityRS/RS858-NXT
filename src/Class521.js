import { Class519 } from 'Class519.js';
import { Class260 } from 'Class260.js';
import { Class520 } from 'Class520.js';
import { Class251 } from 'Class251.js';
export var Class521 = function () {
    var b = 1;
    var c = 1 << 0;
    var a = 1 << 1;
    var d = 1 << 2;
    return function () {
        var h = {};
        var s;
        h.member8410 = function () {
            return s;
        };
        var t;
        h.member3009 = function () {
            return t;
        };
        var o;
        h.member2981 = function () {
            return o;
        };
        var r;
        h.member8411 = function () {
            return r;
        };
        var i;
        h.member8412 = function () {
            return i;
        };
        var e;
        h.member8413 = function () {
            return e;
        };
        var g;
        h.member8414 = function () {
            return g;
        };
        var n = -1;
        h.member8415 = function () {
            return n;
        };
        var q;
        h.member8416 = function () {
            return q;
        };
        h.member8417 = function () {
            q++;
        };
        var m;
        var k;
        var j = function () {
            var v = -1;
            var x = -1;
            for (var u = 0; u < e.length; u++) {
                var y = e[u];
                var z = y.member3016();
                if (z > v) {
                    v = z;
                    x = u;
                }
            }
            n = x;
        };
        h.member8418 = function () {
            if (e.length === 0) {
                return Class519.member8406;
            }
            var x = e[0].member2723();
            switch (x) {
            case Class519.member8408:
            case Class519.member8409:
                return x;
            default:
                for (var u = 0; u < e.length; u++) {
                    var v = e[u];
                    if (v.member2723() === Class519.member8406) {
                        return Class519.member8406;
                    }
                }
                return Class519.member8407;
            }
        };
        h.member8419 = function (u) {
            if (u === -1) {
                return undefined;
            }
            return e[u];
        };
        h.member8420 = function (u) {
            if (u === -1) {
                return undefined;
            }
            return g[u];
        };
        h.member8421 = function (u) {
            e.push(u);
            j();
        };
        h.member8422 = function (u) {
            e.splice(u, 1);
            j();
        };
        h.member8423 = function (u) {
            g.push(u);
        };
        h.member8424 = function (u) {
            g.splice(u, 1);
        };
        h.member8425 = function (u, v) {
            e[u].member3017(v);
            j();
        };
        h.member8426 = function (v, u) {
            var x = e[v];
            x.member3012(u);
            x.member3014(true);
        };
        h.member8427 = function (u) {
            var v = e[u];
            v.member3014(false);
        };
        h.member8428 = function (u, x) {
            var v = e[u];
            v.member2876(x ? Class519.member8407 : Class519.member8406);
        };
        h.member8429 = function (v, u) {
            e[v].setTeam(u);
        };
        h.member8430 = function () {
            for (var u = 0; u < e.length; u++) {
                var v = e[u];
                v.member2876(Class519.member8408);
            }
        };
        h.member8431 = function () {
            for (var u = 0; u < e.length; u++) {
                var v = e[u];
                v.member2876(Class519.member8409);
            }
        };
        h.member8432 = function (u, x) {
            var v = e[u];
            v.member3021(x);
        };
        h.decode = function (x, D) {
            var B = x.g1();
            if (B <= 0 || B > b) {
                throw new Error('1328 ' + B + '1328 ' + b + '1328 ');
            }
            var u = x.g1();
            o = (u & c) !== 0;
            q = x.g4();
            x.g2();
            s = x.g6();
            t = x.gjstr();
            r = x.g2s();
            m = x.g4();
            x.g2();
            k = x.g6();
            var z = x.g2();
            e = new Array(z);
            for (var A = 0; A < z; A++) {
                e[A] = Class260(x, D);
            }
            var v = x.g2();
            g = new Array(v);
            for (var A = 0; A < v; A++) {
                g[A] = Class520(x);
            }
            i = Class251();
            var C = x.g2();
            for (var A = 0; A < C; A++) {
                var y = D.getVarPlayerGroupTypeList().member3026(x);
                if (y === NULL) {
                    return false;
                }
                i.member2947(y.id, y.value);
            }
            j();
            return true;
        };
        return h;
    };
}();