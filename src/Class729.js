import { Class170 } from 'Class170.js';
import { Class459 } from 'Class459.js';
import { Class188 } from 'Class188.js';
import { Class95 } from 'Class95.js';
import { Class209 } from 'Class209.js';
import { Class96 } from 'Class96.js';
export var Class729 = function () {
    var a = function (k) {
        var r = {};
        var y;
        var b;
        r.member444 = function () {
            return b;
        };
        if (k.member625 !== undefined && k.member2896 !== undefined) {
            b = k.member625;
            y = k.member2896;
        } else {
            throw new Error('1440 ');
        }
        var h;
        var s = -1;
        r.member4609 = function () {
            return s;
        };
        var u;
        var g;
        var t;
        var d;
        var v = 1;
        var n = 1;
        var e = 0;
        var x = false;
        r.member8464 = function () {
            return x;
        };
        var c = Class170.member1852;
        r.member8466 = function () {
            return c === Class170.member1855;
        };
        var m;
        var i = true;
        r.member4494 = function () {
            return i;
        };
        r.decode = function (B) {
            while (true) {
                var A = B.member609();
                if (A === undefined) {
                    throw new Error('1441 ');
                    break;
                }
                if (A === 0) {
                    break;
                }
                o(B, A);
            }
        };
        var q = r.decode;
        var o = function (E, B) {
            if (B === 1) {
                h = E.member1086();
            } else if (B === 2) {
                s = E.member1086();
            } else if (B === 4) {
                v = E.member608() / Class459.member7266;
            } else if (B === 5) {
                n = E.member608() / Class459.member7266;
            } else if (B === 6) {
                e = E.member608();
            } else if (B === 7) {
                E.member609();
            } else if (B === 8) {
                E.member609();
            } else if (B === 9) {
                c = Class170.member1855;
                m = Class459.member7267;
            } else if (B === 10) {
                x = true;
            } else if (B === 15) {
                c = Class170.member1855;
                m = E.member608();
            } else if (B === 16) {
                c = Class170.member1855;
                m = E.member1073();
            } else if (B === 40) {
                var C = E.member609();
                u = new Float32Array(C);
                g = new Float32Array(C);
                for (var A = 0; A < C; A++) {
                    u[A] = E.member608();
                    g[A] = E.member608();
                }
            } else if (B === 41) {
                var D = E.member609();
                t = new Float32Array(D);
                d = new Float32Array(D);
                for (var A = 0; A < D; A++) {
                    t[A] = E.member608();
                    d[A] = E.member608();
                }
            } else if (B === 44) {
                E.member608();
            } else if (B === 45) {
                E.member608();
            } else if (B === 46) {
                i = false;
            } else if (false) {
            }
        };
        if (true) {
            r.member7075 = function (F, E, D) {
                var C = null;
                var C = y.member9978().find(h);
                if (C === null) {
                    var B = j();
                    if (B === null) {
                        return null;
                    }
                    var A = {};
                    A.member10111 = B;
                    C = Class188(B, undefined, F);
                    y.member9978().put(C, 1, h);
                }
                return C;
            };
            var z = r.member7075;
            r.member2008 = function () {
                var A = y.member9979().find(h);
                if (A === null) {
                    if (!y.member7535().member1551(Class95.member810, h, 0)) {
                        return null;
                    }
                    A = Class209(y.member7535().getFile(Class95.member810, h, 0, Class96.member840));
                    if (A.member2463() < 13) {
                        A.member2495(2);
                    }
                    if (u !== undefined) {
                        A.member2497(u, g);
                    }
                    if (t !== undefined) {
                        A.member2499(t, d);
                    }
                    if (v !== 1 || n !== 1) {
                        A.scale(v, n, v);
                    }
                    y.member9979().put(A, 1, h);
                }
                return A;
            };
            var j = r.member2008;
        } else {
        }
        k = undefined;
        return r;
    };
    return a;
}();