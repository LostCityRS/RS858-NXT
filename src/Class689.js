import { Class140 } from 'Class140.js';
import { Class41 } from 'Class41.js';
import { Class337 } from 'Class337.js';
import { Class453 } from 'Class453.js';
import { Class298 } from 'Class298.js';
import { Class501 } from 'Class501.js';
import { Class416 } from 'Class416.js';
export var Class689 = function () {
    var g = {};
    var a;
    var t = true;
    var i = {
        x: 0,
        y: 0,
        member3564: -1
    };
    var c = Class140.create();
    var j = Class41.create();
    var k = Class337.create();
    var s = -1;
    var d = -1;
    var r = 0;
    var h = 20;
    var e;
    var q = false;
    var n = true;
    var b = function (u) {
        a = u;
    };
    g.member25 = b;
    var m = function (v, u) {
        if (u === Class453.member7201) {
            g.member9705();
        }
    };
    g.member7183 = m;
    var o = function () {
        if (a.member8233() !== Class453.member7201) {
            return;
        }
        var v = a.member8252.member9083();
        if (!v.member8239()) {
            return;
        }
        var z = Class298.member3559();
        if (z !== undefined) {
            var K = 32767;
            if (d !== -1) {
                K = z.timeStamp - d;
                if (K > 32767) {
                    K = 32767;
                }
            }
            d = z.timeStamp;
            var G = z.position.y;
            if (G < 0) {
                G = 0;
            } else if (G > 65535) {
                G = 65535;
            }
            var J = z.position.x;
            if (J < 0) {
                J = 0;
            } else if (J > 65535) {
                J = 65535;
            }
            var u = z.button;
            if (u === Class298.member3553) {
                u = 1;
            }
            var B = v.member8260(Class501.member8054);
            B.member2698.member1131(J | G << 16);
            B.member2698.member1113(K | u << 15);
            v.member8261(B);
        }
        if (z !== undefined || Date.now() - i.member3564 > 2000) {
            var B = undefined;
            var L = 0;
            var E = 0;
            var F = 0;
            var O = 0;
            var H = 0;
            var K = 0;
            var C = Class298.member3563();
            while (C !== undefined) {
                if (B !== undefined && B.member2698.member1045 - L >= 246) {
                    break;
                }
                C.x = Math.max(-1, Math.min(65534, C.x));
                C.y = Math.max(-1, Math.min(65534, C.y));
                if (C.x === i.x && C.y === C.y) {
                    C = Class298.member3563();
                    continue;
                }
                if (B === undefined) {
                    B = v.member8260(Class501.member8056);
                    B.member2698.member1051(0);
                    L = B.member2698.member1045;
                    B.member2698.member1045 += 2;
                    E = 0;
                    F = 0;
                }
                O = C.x - i.x;
                H = C.y - i.y;
                if (i.member3564 === -1) {
                    O = C.x;
                    H = C.y;
                    K = 8191;
                } else {
                    K = Math.floor((C.member3564 - i.member3564) / 20);
                    E += (C.member3564 - i.member3564) % 20;
                }
                i = C;
                if (K < 8 && O >= -32 && O <= 31 && H >= -32 && H <= 31) {
                    O += 32;
                    H += 32;
                    B.member2698.member1054((K << 12) + (O << 6) + H);
                } else if (K < 32 && O >= -128 && O <= 127 && H >= -128 && H <= 127) {
                    O += 128;
                    H += 128;
                    B.member2698.member1051((4 << 5) + K);
                    B.member2698.member1054((O << 8) + H);
                } else if (K < 32) {
                    B.member2698.member1051((6 << 5) + K);
                    if (C.x === -1 || C.y === -1) {
                        B.member2698.member1056(-2147483648);
                    } else {
                        B.member2698.member1056(C.x | C.y << 16);
                    }
                } else {
                    B.member2698.member1054((7 << 13) + (K & 8191));
                    if (C.x === -1 || C.y === -1) {
                        B.member2698.member1056(-2147483648);
                    } else {
                        B.member2698.member1056(C.x | C.y << 16);
                    }
                }
                F++;
                C = Class298.member3563();
            }
            if (B !== undefined) {
                B.member2698.member1068(B.member2698.member1045 - L);
                var A = B.member2698.member1045;
                B.member2698.member1045 = L;
                B.member2698.member1051(Math.floor(E / F));
                B.member2698.member1051(E % F);
                B.member2698.member1045 = A;
                v.member8261(B);
            }
        }
        var P = a.member7619.member3138();
        if (P > 0) {
            var B = v.member8260(Class501.member8053);
            B.member2698.member1054(P * 4);
            var I = a.member7619.member9233();
            for (var Q = 0; Q < P; Q++) {
                var D = I[Q];
                var K = D.timeStamp - s;
                if (K > 16777215) {
                    K = 16777215;
                }
                s = D.timeStamp;
                B.member2698.member1051(D.keyCode);
                B.member2698.member1055(K);
            }
            v.member8261(B);
        }
        var M = a.member6101.member9070();
        if (r > 0) {
            r--;
        }
        if (M.member9050() && r <= 0 && M.member3590()) {
            r = h;
            M.member9051(false);
            M.member8926(c);
            e = Class416.member4790(c);
            var B = v.member8260(Class501.member8059);
            B.member2698.member1054(e.member4791);
            B.member2698.member1115(e.member4792);
            v.member8261(B);
        }
        if (document.hasFocus() !== t) {
            t = document.hasFocus();
            var B = v.member8260(Class501.member8058);
            B.member2698.member1051(t ? 1 : 0);
            v.member8261(B);
        }
        if (g.member9895() !== q) {
            member9705();
        }
        if (!n) {
            var B = v.member8260(Class501.member8062);
            var N = a.member4480().member3389();
            B.member2698.member1051(N.member1047());
            B.member2698.member1067(N.getData(), 0, N.member1047());
            v.member8261(B);
            n = true;
        }
    };
    g.member487 = o;
    g.member9895 = function () {
        var u = document.fullScreen;
        if (u === undefined) {
            u = document.webkitIsFullScreen;
            if (u === undefined) {
                u = document.mozFullScreen;
            }
        }
        if (u === undefined) {
            u = false;
        }
    };
    g.member9705 = function () {
        var x = a.member8252.member8259();
        if (x === undefined || !x.member8239()) {
            return;
        }
        var u = x.member8260(Class501.member8061);
        var v = g.member9895();
        q = v;
        u.member2698.member1051(v ? 3 : 2);
        if (true) {
            u.member2698.member1054(a.member433.member588());
            u.member2698.member1054(a.member433.member589());
            u.member2698.member1051(a.member4480().member3940.getValue());
        } else {
        }
        x.member8261(u);
    };
    g.member6104 = function (u) {
        n = u;
    };
    return g;
}();