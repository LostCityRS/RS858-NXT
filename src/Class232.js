import { Class124 } from 'Class124.js';
import { Class230 } from 'Class230.js';
import { Class229 } from 'Class229.js';
import { Class225 } from 'Class225.js';
import { Class231 } from 'Class231.js';
import { Class227 } from 'Class227.js';
import { Class214 } from 'Class214.js';
import { Class90 } from 'Class90.js';
import { Class226 } from 'Class226.js';
import { Class223 } from 'Class223.js';
export var Class232 = function () {
    var P = {};
    var E;
    var j = 0, k = 0;
    var u = 0;
    var N = 0;
    var D = 0;
    var s = 0;
    var B = true ? 5 : {};
    var S;
    var R;
    var x;
    var v;
    var I = 0;
    var c = 1;
    var K = 2;
    var Y = 3;
    var Z = 5000;
    var M = 0;
    var G = 0;
    var z = false;
    var q = true;
    var y = undefined;
    var r = I;
    var T = false;
    var V = Class124(1000);
    var H = undefined;
    var t = undefined;
    var C = [];
    var O = 2;
    var m = 0;
    var g;
    P.member2770 = function (aa) {
        g = aa;
    };
    P.onmessage = function (aa) {
        var ab = aa.data.member59;
        if (ab === Class230.member2312) {
            W(aa.data.member2771, aa.data.member2738, aa.data.member2739, aa.data.member2772, aa.data.member2773);
        } else if (ab === Class230.member2764) {
            if (aa.data.member2771 !== undefined) {
                S = aa.data.member2771;
                y.close();
            }
            if (aa.data.member2738 !== undefined) {
                R = aa.data.member2738;
                t.member2740(R);
            }
        } else if (ab === Class230.member2317) {
            self.gc();
        } else if (ab === Class230.member2319) {
            console.log(requireJS_logConstructionCounts());
        } else if (ab === Class230.member2765) {
            L();
        } else if (ab === Class230.member2766) {
            i(aa.data.member2693, aa.data.member2774);
        } else if (ab === Class230.member2767) {
            a(aa.data.member2693, aa.data.member1204, aa.data.member2775, aa.data.member2776, aa.data.member2777, aa.data.member2694, aa.data.priority, aa.data.member2778, aa.data.member2779);
        } else if (ab === Class230.member2768) {
            Q();
        } else {
            throw new Error('1062 ' + ab);
        }
    };
    var W = function (ab, ae, aa, ac, ad) {
        if (false) {
        }
        if (false) {
        }
        S = ab;
        R = ae;
        x = ac;
        v = ad;
        H = Class229();
        if (R !== undefined) {
            t = Class225({
                member2738: R,
                member2739: aa
            });
        }
        N = Date.now();
        E = u = Math.floor(N / 1000);
        setInterval(n, B);
    };
    var U = function (ac, ab, ad) {
        if (ad !== member47) {
            var aa = ad.getData();
            g({
                member59: Class230.member2765,
                member2780: aa
            }, [aa]);
        } else {
            g({
                member59: Class230.member2765,
                member2780: member47
            });
        }
    };
    var L = function () {
        if (!d()) {
            q = true;
            U(255, 255, member47);
        } else if (!H.member2741(255, 255, m, true, U)) {
            U(255, 255, member47);
        }
    };
    var o = function (ac, ab, ad) {
        if (ad !== member47) {
            var aa = ad.getData();
            g({
                member59: Class230.member2768,
                member2780: aa
            }, [aa]);
        } else {
            g({
                member59: Class230.member2768,
                member2780: member47
            });
        }
    };
    var Q = function () {
        if (!t.member2741(255, 255, m, true, o)) {
            o(255, 255, member47);
        }
    };
    var X = function (ae, ad, af) {
        if (af !== member47) {
            var ab = Class231.member2769(af, 0, af.getSize());
            var ac = Class227.member2691(af);
            var aa = ac.getData();
            g({
                member59: Class230.member2766,
                member2693: ad,
                member2781: ab,
                member2782: aa
            }, [aa]);
        } else {
            g({
                member59: Class230.member2766,
                member2693: ad,
                member2782: member47
            });
        }
    };
    var i = function (aa) {
        if (!d()) {
            q = true;
            X(255, aa, member47);
        } else if (!H.member2741(255, aa, m, true, X)) {
            X(255, aa, member47);
        }
    };
    var A = function (ab, ac, ak, at, ap) {
        if (ak !== member47) {
            if (ak.getSize() <= 2) {
                throw new Error('1063 ');
            }
            var ao = ap.member2777 === true ? ak.getSize() : ak.getSize() - 2;
            var ag = Class231.member2769(ak, 0, ao);
            var aj = Class227.member2691(ak);
            var ah;
            if (ap.member2775 > 1) {
                ah = Class214.member2637(aj, 0, aj.getSize(), ap.member2775);
                if (ap.member2776 === Class90.member779) {
                    throw new Error('1064 ');
                }
            } else if (ap.member2776 === Class90.member779) {
                var ar = Class124(undefined, aj.getData());
                var am = ar.member609();
                var ai = 0;
                var aa;
                for (var aq = 0; aq < am; aq++) {
                    var ae = ar.member1073();
                    var an = new ArrayBuffer(ae);
                    ar.member1092(an, 0, ae);
                    var ad = Class226({
                        member2744: an,
                        member2745: true
                    });
                    var af = ad.member2743();
                    if (ah === undefined) {
                        ah = new ArrayBuffer(af.length * am);
                        aa = new Uint8Array(ah);
                    }
                    aa.set(af, ai);
                    ai += af.length;
                }
            } else {
                ah = aj.getData();
            }
            var al = [ah];
            g({
                member59: Class230.member2767,
                member2693: ab,
                member1204: ac,
                member2781: ag,
                member2694: at,
                member2783: al
            }, al);
        } else {
            g({
                member59: Class230.member2767,
                member2693: ab,
                member1204: ac,
                member2694: at,
                member2783: member47
            });
        }
    };
    var a = function (ac, aj, af, ae, ad, ab, ag, ah, ai) {
        var aa = {
            member2775: af,
            member2776: ae,
            member2777: ad
        };
        if (!d()) {
            q = true;
            A(ac, aj, member47, ab, aa);
        } else if (ad) {
            if (!t.member2741(ac, aj, O, true, A, aa, ah, ai)) {
                A(ac, aj, member47, ab, aa);
            }
        } else if (!H.member2741(ac, aj, O, ab, A, aa, ag)) {
            A(ac, aj, member47, ab, aa);
        }
    };
    var F = function (ai) {
        var af;
        var ac;
        var aa;
        var ad;
        for (var ah = 0; ah < C.length; ah++) {
            var ae = C[ah];
            if (ae.request === ai) {
                af = ae.member2784;
                ac = ae.member2785;
                aa = ae.member2697;
                ad = ae.member2786;
                C.splice(ah, 1);
                break;
            }
        }
        if (af !== undefined) {
            var ab = ai.response;
            if (ab !== null && ab !== undefined) {
                var ag = Class124(undefined, ab);
                A(ad, af, ag, true, aa);
            }
        }
    };
    var b = function () {
        return y !== undefined && y.member2723() === y.member2721;
    };
    var d = function () {
        return r === Y;
    };
    var n = function () {
        var aa = Date.now();
        if (E !== Math.floor(aa / 1000)) {
            j = k;
            k = 0;
            E = Math.floor(aa / 1000);
            if (u < E - 10) {
                N = aa;
                D = 0;
                s = 0;
                u = E;
            }
        }
        if (y !== undefined && k % 10 === 0) {
            var ac = y.member2726();
            var ad = s + D;
            var ab = Math.floor(ad / (Date.now() - N) * 100);
            g({
                member59: Class230.member2313,
                member2787: ac,
                member2788: j,
                getGroupTime: D,
                serviceTime: s,
                activity: ab
            });
        }
        if (z && y !== undefined && y.member2723() === y.member2722) {
            h(G + 1);
        }
        if (b()) {
            J();
        } else if (y === undefined || y.member2723() === y.member2722) {
            e();
        }
        k++;
        s += Date.now() - aa;
    };
    P.member78 = n;
    var e = function () {
        if (q && M < Date.now() - Z) {
            if (false) {
            }
            y = Class223({
                url: S,
                protocol: 'jagex',
                inBufferSize: 4000000,
                outBufferSize: 10000
            });
            M = Date.now();
            q = false;
            r = I;
            z = true;
        } else if (y !== undefined) {
            H.member2762();
            y = undefined;
            r = I;
        }
    };
    var J = function () {
        if (r === I) {
            y.write(x);
            y.member2601();
            r = c;
        } else if (r === c) {
            V.member607(0);
            var ag = y.read(V, 1);
            if (ag === 1) {
                V.member607(0);
                var ab = V.member609();
                if (ab == 0) {
                    r = K;
                } else if (false) {
                }
            }
        } else if (r === K) {
            var af = v * 4;
            var ae = y.member2718(af);
            if (ae >= af) {
                if (af > 0) {
                    V.member607(0);
                    y.read(V, af);
                    V.member607(0);
                    for (var aa = 0; aa < v; aa++) {
                        var ad = V.member1073();
                    }
                }
                H.member2755(y, false);
                r = Y;
                q = false;
                z = false;
                h(0);
                if (false) {
                }
            }
        } else {
            var ac = H.member78();
            if (!ac) {
                q = true;
            }
        }
    };
    var h = function (aa) {
        G = aa;
        if (false) {
        }
        g({
            member59: Class230.member2763,
            member2789: G
        });
    };
    return P;
}();