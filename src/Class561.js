import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Class438 } from 'Class438.js';
import { Class473 } from 'Class473.js';
import { Class472 } from 'Class472.js';
import { Class471 } from 'Class471.js';
import { Class470 } from 'Class470.js';
import { Class445 } from 'Class445.js';
import { Class474 } from 'Class474.js';
import { Class93 } from 'Class93.js';
import { Class96 } from 'Class96.js';
import { Class560 } from 'Class560.js';
export var Class561 = function () {
    var a = function (s) {
        var e = {};
        var t = null;
        e.member7535 = function () {
            return t;
        };
        var n = 0;
        e.member2975 = function () {
            return n;
        };
        var q = null;
        e.member7539 = function () {
            return q;
        };
        var c = Class105({
            member895: 400,
            member898: function (u) {
                u.texture.member510();
            },
            member897: function (u) {
                u.texture.member511();
            }
        });
        e.member8795 = function () {
            return c;
        };
        var o = Class105({
            member895: 256,
            member898: function (u) {
                u.texture.member510();
            },
            member897: function (u) {
                u.texture.member511();
            }
        });
        e.member7081 = function () {
            return o;
        };
        var m = Class105({ member895: 8 });
        var j = Class105({ member895: 4 });
        var k = null;
        if (s.member995 !== null && s.member2970 !== undefined) {
            t = s.member995;
            q = s.member2970;
        } else {
            throw new Error('1326 ');
        }
        var r = function () {
            if (!t.member1437(Class95.member808)) {
                return;
            }
            k = new Array(t.member1439(Class95.member808).member3896());
        };
        e.member8796 = function (v, u) {
            var x = undefined;
            switch (v) {
            case Class438.member6632:
                x = Class473;
                break;
            case Class438.member402:
                x = Class472;
                break;
            case Class438.member6636:
                x = Class471;
                break;
            case Class438.member6633:
                x = Class470;
                break;
            case Class438.member6635:
                x = Class445;
                break;
            case Class438.member6634:
                x = Class474;
                break;
            default:
                throw new Error('1327 ' + v + '1327 ' + u);
                break;
            }
            return x;
        };
        e.member8797 = function (v, u) {
            return undefined;
        };
        e.member7439 = function (D, L, x) {
            if (k === null) {
                r();
            }
            if (k === null) {
                return null;
            }
            if (k[D] === undefined) {
                if (t.member1438(Class95.member808, D, Class93.member795)) {
                    var z = t.member1439(Class95.member808).member1440(D);
                    var v = new Array(z);
                    var B = {};
                    var C = new Array(z);
                    for (var F = 0; F < z; F++) {
                        var K = t.getFile(Class95.member808, D, F, Class96.member841, Class93.member795);
                        if (K === undefined) {
                            continue;
                        }
                        var E = K.member609();
                        if (E === 255) {
                            E = -1;
                        }
                        var G = K.member609();
                        if ((G & 128) != 0) {
                            G &= 127;
                            var u = K.member1089();
                        }
                        var I = K.member608();
                        var H = e.member8796(G, I);
                        var J = new H(e, D, F, undefined, undefined, G, E, K, u, x, I);
                        var y = e.member8797(G, I);
                        if (y !== undefined) {
                            y(J);
                        }
                        var A = J.member6723();
                        if (C[A] === undefined) {
                            C[A] = new Array(0);
                        }
                        C[A][C[A].length] = J;
                        v[F] = J;
                    }
                    for (var F = 0; F < z; F++) {
                        if (C[F] !== undefined) {
                            v[F].member7575(C[F]);
                        }
                    }
                    k[D] = Class560({
                        member6675: D,
                        member8792: v,
                        member8793: L,
                        member8794: C[-1]
                    });
                    return k[D];
                } else {
                    return member47;
                }
            } else {
                return k[D];
            }
        };
        var h = e.member7439;
        e.member7105 = function (v, u) {
            if (u === -1) {
                return i(v);
            } else {
                return g(v, u);
            }
        };
        var b = e.member7105;
        e.member7438 = function (u) {
            var v = u >> 16;
            var x = h(v, false);
            if (x === null) {
                return member47;
            } else {
                return x.member7438(u & 65535);
            }
        };
        var i = e.member7438;
        e.member7634 = function (x, u) {
            var y = i(x);
            if (y === null) {
                return member47;
            } else {
                var v = y.member7445();
                if (v === null || u >= v.length) {
                    return undefined;
                } else {
                    return v[u];
                }
            }
        };
        var g = e.member7634;
        e.member7885 = function (v, u) {
            if (k[v] === undefined) {
                return;
            }
            k[v].member512(u);
            delete k[v];
        };
        var d = e.member7885;
        s = undefined;
        return e;
    };
    return a;
}();