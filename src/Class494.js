import { Class492 } from 'Class492.js';
import { Class493 } from 'Class493.js';
import { Class105 } from 'Class105.js';
import { Js5ConfigGroup } from 'Class131.js';
import { Class387 } from 'Class387.js';
import { Class209 } from 'Class209.js';
import { Class188 } from 'Class188.js';
export var Class494 = function () {
    var a = -1;
    var b = function (E) {
        var P = {};
        var U;
        var M;
        var V;
        var B;
        var X;
        var c = null;
        var Z = undefined;
        var Y = null;
        var W = null;
        var d = Class492.member7897;
        var N = -1;
        P.member7909 = function () {
            return N;
        };
        var F = false;
        P.member7910 = function (aa) {
            if (!F || !aa) {
                return F;
            }
            F = false;
            return true;
        };
        var H = a;
        var g = a;
        var y = a;
        var Q = a;
        var O = [
            8,
            11,
            4,
            6,
            9,
            7,
            10,
            0
        ];
        var r = Class493();
        var L = Class493();
        var T = null;
        var G = Class105({
            member895: 100,
            member898: function (aa) {
                aa.member510();
            },
            member897: function (aa) {
                aa.member511();
            }
        });
        var A = NULL;
        var x = NULL;
        var u = NULL;
        var t = NULL;
        if (E.member995 !== undefined && E.member2970 !== undefined && E.member7911 !== undefined && E.member4409 !== undefined) {
            U = E.member995;
            M = E.member2970;
            V = E.member4409;
            B = E.member7911;
        } else {
            throw new Error('1568 ');
        }
        var K = function () {
            x = A = NULL;
            t = u = NULL;
            F = true;
        };
        var I = function () {
            G.member301();
        };
        P.member7912 = function (af, ae, ad, ab, ag, ac, aa) {
            X = af;
            c = ae;
            Z = ad;
            Y = ab;
            W = ag;
            d = ac ? Class492.member7899 : Class492.member7898;
            N = aa;
            H = a;
            g = a;
            y = a;
            Q = a;
            K();
            I();
        };
        P.member7913 = function (aa, ab) {
            var ac = O[aa];
            if (c[ac] !== undefined && c[ac].member7470 !== undefined && c[ac].member7907 === undefined && c[ac].member7470 === ab) {
                return;
            }
            c[ac] = { member7470: ab };
            K();
            return true;
        };
        var v = P.member7913;
        P.member7914 = function (aa, ab) {
            if (Y[aa] === ab) {
                return;
            }
            Y[aa] = ab;
            K();
            I();
        };
        var s = P.member7914;
        P.member7915 = function (aa, ab) {
            if (W[aa] === ab) {
                return;
            }
            W[aa] = ab;
            K();
            I();
        };
        var q = P.member7915;
        P.member7916 = function (aa) {
            d = aa;
            K();
        };
        var n = P.member7916;
        P.member7917 = function () {
            return d;
        };
        var m = P.member7916;
        P.member7918 = function (ab, aa) {
            if (aa === -1 && c[ab] === undefined) {
                return;
            }
            if (c[ab] !== undefined && c[ab].member7907 !== undefined && c[ab].member7470 === undefined && c[ab].member7907 === aa) {
                return;
            }
            if (aa === -1) {
                c[ab] = undefined;
            } else {
                c[ab] = { member7907: aa };
            }
            K();
        };
        var k = P.member7918;
        var D = function () {
            var aa = r.member7901(z());
            if (aa === NULL) {
                return false;
            }
            A = aa.member2619;
            x = aa.member2621;
            return true;
        };
        var o = function () {
            var aa = L.member7901(z());
            if (aa === NULL) {
                return false;
            }
            u = aa.member2619;
            t = aa.member2621;
            return true;
        };
        P.member7546 = function (af) {
            if (N !== -1) {
                var ac = M.getConfigType(Js5ConfigGroup.NPCTYPE.member1204, N);
                if (ac === NULL) {
                    return NULL;
                }
                return ac.member7546(af, V, Class387.member4393, undefined);
            }
            if (A !== NULL) {
                return A;
            }
            if (D() && A !== NULL) {
                return A;
            }
            var ad = true;
            for (var ae = 0; ae < c.length; ae++) {
                if (c[ae] === undefined) {
                    continue;
                } else if (c[ae].member7470 !== undefined) {
                    var ab = M.getConfigType(Js5ConfigGroup.IDKTYPE.member1204, c[ae].member7470);
                    if (ab === NULL) {
                        ad = false;
                    } else if (!ab.member7662()) {
                        ad = false;
                    }
                } else if (c[ae].member7907 !== undefined) {
                    var aa = M.getConfigType(Js5ConfigGroup.OBJTYPE.member1204, c[ae].member7907);
                    var ah;
                    if (Z !== undefined) {
                        ah = Z[ae];
                    }
                    if (aa === NULL) {
                        ad = false;
                    } else if (!aa.member7662(d === Class492.member7899, ah)) {
                        ad = false;
                    }
                }
            }
            if (!ad) {
                return NULL;
            }
            var ag = new Array(c.length);
            for (var ae = 0; ae < c.length; ae++) {
                if (c[ae] === undefined) {
                    continue;
                } else if (c[ae].member7470 !== undefined) {
                    var ab = M.getConfigType(Js5ConfigGroup.IDKTYPE.member1204, c[ae].member7470);
                    ag[ae] = ab.member7546();
                } else if (c[ae].member7907 !== undefined) {
                    var aa = M.getConfigType(Js5ConfigGroup.OBJTYPE.member1204, c[ae].member7907);
                    var ah;
                    if (Z !== undefined) {
                        ah = Z[ae];
                    }
                    ag[ae] = aa.member7546(d === Class492.member7899, ah);
                }
            }
            A = Class209(undefined, ag);
            j(A);
            i(A);
            A.member2500(64);
            return A;
        };
        var S = P.member7546;
        P.member7545 = function (ab) {
            if (N !== -1) {
                var aa = M.getConfigType(Js5ConfigGroup.NPCTYPE.member1204, N);
                if (aa === NULL) {
                    return NULL;
                }
                return aa.member7545(ab, V, Class387.member4393, undefined);
            }
            if (x !== NULL) {
                return x;
            }
            if (D() && x !== NULL) {
                return x;
            }
            S();
            if (A === NULL) {
                return NULL;
            }
            if (A === undefined) {
                return undefined;
            }
            x = Class188(A, undefined, ab);
            if (x !== NULL && A !== NULL) {
                r.member7900(x, A, z());
            }
            F = true;
            return x;
        };
        P.member7544 = function (aa) {
            if (N !== -1) {
                var af = M.getConfigType(Js5ConfigGroup.NPCTYPE.member1204, N);
                if (af === NULL) {
                    return NULL;
                }
                return af.member7544(undefined);
            }
            if (u !== NULL) {
                return u;
            }
            if (o() && u !== NULL) {
                return u;
            }
            var aj = aa;
            if (aj === undefined) {
                aj = c;
            }
            var ai = true;
            for (var ac = 0; ac < aj.length; ac++) {
                if (aj[ac] === undefined) {
                    continue;
                } else if (aj[ac].member7470 !== undefined) {
                    var ae = M.getConfigType(Js5ConfigGroup.IDKTYPE.member1204, aj[ac].member7470);
                    if (ae === NULL) {
                        ai = false;
                    } else if (!ae.member7663()) {
                        ai = false;
                    }
                } else if (aj[ac].member7907 !== undefined) {
                    var ad = M.getConfigType(Js5ConfigGroup.OBJTYPE.member1204, aj[ac].member7907);
                    var ah;
                    if (aa === undefined && Z !== undefined) {
                        ah = Z[ac];
                    }
                    if (ad === NULL) {
                        ai = false;
                    } else if (!ad.member7663(d === Class492.member7899, ah)) {
                        ai = false;
                    }
                }
            }
            if (!ai) {
                return NULL;
            }
            var ag = new Array(aj.length);
            for (var ac = 0; ac < aj.length; ac++) {
                if (aj[ac] === undefined) {
                    continue;
                } else if (aj[ac].member7470 !== undefined) {
                    var ae = M.getConfigType(Js5ConfigGroup.IDKTYPE.member1204, aj[ac].member7470);
                    ag[ac] = ae.member7544();
                } else if (aj[ac].member7907 !== undefined) {
                    var ad = M.getConfigType(Js5ConfigGroup.OBJTYPE.member1204, aj[ac].member7907);
                    var ah;
                    if (aa === undefined && Z !== undefined) {
                        ah = Z[ac];
                    }
                    ag[ac] = ad.member7544(d === Class492.member7899, ah);
                }
            }
            var ab = Class209(undefined, ag);
            j(ab);
            i(A);
            ab.member2500(64);
            if (aa === undefined) {
                u = ab;
            }
            return ab;
        };
        var R = P.member7544;
        P.member7543 = function (ab) {
            if (N !== -1) {
                var aa = M.getConfigType(Js5ConfigGroup.NPCTYPE.member1204, N);
                if (aa === NULL) {
                    return NULL;
                }
                return aa.member7543(ab, undefined);
            }
            if (t !== NULL) {
                return t;
            }
            if (o() && t !== NULL) {
                return t;
            }
            R();
            if (u === NULL) {
                return NULL;
            }
            if (u === undefined) {
                return undefined;
            }
            t = Class188(u, undefined, ab);
            if (t !== NULL && u !== NULL) {
                L.member7900(t, u, z());
            }
            return t;
        };
        P.member7919 = function (ae) {
            var ab = B.member7920();
            var ad = B.member7921();
            for (var ac = 0; ac < 10; ac++) {
                for (var aa = 0; aa < ab[ac].length; aa++) {
                    if (Y[ac] < ad[ac][aa].length) {
                        ae.member4327(ab[ac][aa], ad[ac][aa][Y[ac]]);
                    }
                }
            }
        };
        var j = P.member7919;
        P.member7922 = function (ab) {
            var ae = B.member7923();
            var ad = B.member7924();
            for (var ac = 0; ac < 10; ac++) {
                for (var aa = 0; aa < ae[ac].length; aa++) {
                    if (W[ac] < ad[ac][aa].length) {
                        ab.member4328(ae[ac][aa], ad[ac][aa][W[ac]]);
                    }
                }
            }
        };
        var i = P.member7922;
        var C = function (af, ac) {
            if (af < 0) {
                return false;
            }
            var ae = false;
            var ad;
            var ab;
            if (ac) {
                ad = X.member7925();
                ab = X.member7926();
            } else {
                ad = X.member7927();
                ab = X.member7928();
            }
            if (ad === -1) {
                return false;
            }
            if (ac) {
                if (H === a) {
                    H = c[ad];
                    g = Z[ad];
                }
            } else if (y === a) {
                y = c[ad];
                Q = Z[ad];
            }
            if (af === 65535) {
                if (c[ad] !== undefined) {
                    ae = true;
                }
                c[ad] = undefined;
            } else {
                if (c[ad] === undefined || c[ad].member7907 !== af || Z[ad] !== undefined) {
                    ae = true;
                }
                c[ad] = { member7907: af };
            }
            Z[ad] = undefined;
            if (ab !== null && ab.length > 0) {
                for (var aa = 0; aa < ab.length; aa++) {
                    if (c[ab[aa]] !== undefined) {
                        ae = true;
                    }
                    c[ab[aa]] = undefined;
                }
            }
            if (ae) {
                K();
            }
            return ae;
        };
        var J = function (aa) {
            if (aa && H === a || !aa && y === a) {
                return false;
            }
            var ac = false;
            var ab;
            if (aa) {
                ab = X.member7925();
                if (c[ab] !== H || g !== a) {
                    if (c[ab] !== H) {
                        c[ab] = H;
                    }
                    if (g !== a) {
                        Z[ab] = g;
                    }
                    H = a;
                    g = a;
                    ac = true;
                }
            } else {
                ab = X.member7927();
                if (c[ab] !== y || Q !== a) {
                    if (c[ab] !== y) {
                        c[ab] = y;
                    }
                    if (Q !== a) {
                        Z[ab] = Q;
                    }
                    y = a;
                    Q = a;
                    ac = true;
                }
            }
            if (ac) {
                K();
            }
            return ac;
        };
        P.member7548 = function (aa) {
            if (aa === NULL) {
                return;
            }
            aa.member4381(M);
            var ab = aa.member4373();
            if (ab === NULL) {
                return;
            }
            if (ab.member2923() !== -1) {
                C(ab.member2923(), true);
            } else {
                J(true);
            }
            if (ab.member2924() !== -1) {
                C(ab.member2924(), false);
            } else {
                J(false);
            }
        };
        var h = P.member7548;
        P.member7549 = function () {
            J(true);
            J(false);
        };
        var e = P.member7549;
        var z = function () {
            var ab = new Array(c.length);
            for (var aa = 0; aa < c.length; aa++) {
                if (c[aa] !== undefined) {
                    if (c[aa].member7907 !== undefined && c[aa].member7907 !== -1) {
                        ab[aa] = { member7907: c[aa].member7907 };
                    } else if (c[aa].member7470 !== undefined && c[aa].member7470 !== -1) {
                        ab[aa] = { member7470: c[aa].member7470 };
                    }
                }
            }
            return {
                member7902: d,
                member7903: ab,
                member7904: Z.slice(0),
                member7905: Y.slice(0),
                member7906: W.slice(0)
            };
        };
        P.member512 = function () {
            r.member512();
            L.member512();
            G.member301();
        };
        P.member7929 = function (aa) {
            return G.find(aa);
        };
        P.member7930 = function (aa, ab) {
            G.put(ab, 1, aa);
        };
        E = undefined;
        return P;
    };
    return b;
}();