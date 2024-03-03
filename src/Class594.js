import { Class306 } from 'Class306.js';
import { Class588 } from 'Class588.js';
import { Class140 } from 'Class140.js';
import { Class290 } from 'Class290.js';
import { Class49 } from 'Class49.js';
import { Class419 } from 'Class419.js';
import { Class593 } from 'Class593.js';
import { Class416 } from 'Class416.js';
import { Class587 } from 'Class587.js';
import { Class586 } from 'Class586.js';
import { Class589 } from 'Class589.js';
import { Class568 } from 'Class568.js';
import { Class579 } from 'Class579.js';
import { Class578 } from 'Class578.js';
import { Class429 } from 'Class429.js';
import { Class580 } from 'Class580.js';
import { Class591 } from 'Class591.js';
import { Class581 } from 'Class581.js';
import { Class592 } from 'Class592.js';
import { Class86 } from 'Class86.js';
import { Class41 } from 'Class41.js';
import { Class417 } from 'Class417.js';
import { Class569 } from 'Class569.js';
import { Class428 } from 'Class428.js';
import { Class583 } from 'Class583.js';
import { Class582 } from 'Class582.js';
import { Class585 } from 'Class585.js';
import { Class590 } from 'Class590.js';
import { Class415 } from 'Class415.js';
export var Class594 = function () {
    var a = function (aj) {
        var bb = Class306();
        var a2 = Class588.member8985;
        bb.member8991 = function () {
            return a2;
        };
        bb.member8992 = function (be) {
            if (a2 === Class588.member8985) {
                if (be !== Class588.member8985) {
                    throw new Error('1222 ' + be);
                }
            } else {
                if (be === Class588.member8985) {
                    throw new Error('1223 ');
                }
                a2 = be;
            }
        };
        var u = bb.member8992;
        var m = Class140.create();
        var z = Class140.create();
        var aQ = new Float64Array(3);
        var aC = new Float64Array(3);
        var aB = new Float64Array(3);
        var aU = new Float64Array(3);
        var I = new Float64Array(3);
        var a6 = Class290();
        var aW = Class49.member313();
        var a5 = new Float32Array([
            1,
            1,
            -1
        ]);
        var au = [
            1,
            0,
            0
        ];
        var ad = [
            0,
            1,
            0
        ];
        var H = [
            0,
            0,
            1
        ];
        var P = [
            0,
            0,
            0,
            1
        ];
        var aE = [
            Class419.member4864,
            0,
            0
        ];
        bb.member8921 = function () {
            return K === Class593.member7656 && a3.member8921();
        };
        bb.member8922 = function () {
            if (K !== Class593.member7656) {
                return;
            }
            a3.member8922();
            Class416.member4789(256, 0, 0, m);
            a3.member8927(m);
        };
        bb.member8923 = function () {
            if (K !== Class593.member7656) {
                return;
            }
            a3.member8923();
        };
        var ac = true;
        bb.member8993 = function () {
            return ac;
        };
        bb.member8994 = function (be) {
            ac = be;
        };
        var G = Class587.member8977;
        bb.member8995 = function () {
            return G;
        };
        bb.member3807 = function (be) {
            if (be !== Class587.member8977) {
                throw new Error('1224 ');
            }
            G = be;
        };
        bb.member8996 = function () {
            return B;
        };
        bb.member8997 = function () {
            return a3;
        };
        var aY;
        var B;
        bb.member8998 = function () {
            return aY;
        };
        bb.member8999 = function (be, bh) {
            if (!bh && !ac) {
                throw new Error('1225 ');
            }
            switch (be) {
            case Class586.member8971:
                B = Class589();
                break;
            case Class586.member7656:
                B = Class568();
                break;
            case Class586.member8972:
                B = Class579({ member8919: Class578.member8912 });
                break;
            case Class586.member8973:
                B = Class429();
                break;
            case Class586.member8974:
                B = Class579({ member8919: Class578.member8911 });
                break;
            case Class586.member8975:
                B = Class580();
                break;
            case Class586.member8976:
                B = Class579({ member8919: Class578.member8913 });
                break;
            default:
                throw new Error('1226 ' + be);
            }
            aY = be;
        };
        var q = bb.member8999;
        var K;
        var a3;
        bb.member9000 = function () {
            return K;
        };
        bb.member9001 = function (be, bh) {
            if (!bh && !ac) {
                throw new Error('1227 ');
            }
            switch (be) {
            case Class593.member8971:
                a3 = Class591();
                break;
            case Class593.member7656:
                a3 = Class581();
                break;
            case Class593.member8972:
                a3 = Class592({ member8919: Class578.member8912 });
                break;
            case Class593.member8974:
                a3 = Class592({ member8919: Class578.member8911 });
                break;
            case Class593.member8976:
                a3 = Class592({ member8919: Class578.member8913 });
                break;
            default:
                throw new Error('1228 ' + be);
            }
            K = be;
        };
        var o = bb.member9001;
        var ag = undefined;
        var a9 = undefined;
        var y = undefined;
        var aD = undefined;
        var ay = false;
        bb.member9002 = function () {
            var be = ay;
            ay = false;
            return be;
        };
        var aA = [];
        bb.member9003 = function (be) {
            aA[be.member8968()] = be;
        };
        var j = bb.member9003;
        bb.member9004 = function (be) {
            delete aA[be];
        };
        var i = bb.member9004;
        bb.member941 = function (be) {
            return aA[be];
        };
        bb.member9005 = function () {
            aA.length = 0;
        };
        var d = bb.member9005;
        var aF = 0;
        bb.member9006 = function () {
            aF++;
            if (aF === 126) {
                aF = 0;
            }
            return aF;
        };
        var h = true;
        var an = true;
        bb.member9007 = function (bh, be) {
            h = bh;
            an = be;
        };
        var v = Class419.member4860;
        bb.member9008 = function () {
            return v;
        };
        bb.member9009 = function (be) {
            v = be;
        };
        var E = 0.05;
        var c = function () {
            if (a2 === Class588.member8985) {
                return E;
            } else {
                return 1;
            }
        };
        var az = 0.05;
        var Y = function () {
            if (a2 === Class588.member8985) {
                return az;
            } else {
                return 1;
            }
        };
        var n = 0;
        var r = 1;
        bb.member9010 = function (bh, be) {
            n = bh;
            r = be;
        };
        var ak = 10 * Class86.member718;
        var J = ak;
        var S = 10;
        var aG = S;
        var W = 1;
        var C = W;
        bb.member9011 = function (be, bj, bh) {
            J = be;
            aG = bj;
            C = bh;
        };
        bb.member9012 = function () {
            J = ak;
            aG = S;
            C = W;
        };
        var U = Class41.create();
        var a4 = Class41.create();
        var R = Class41.create();
        Class41.set(aE, R);
        var L = Class41.create();
        Class41.set(aE, L);
        var ap = Class41.create();
        var aS = Class41.create();
        var aX;
        var e;
        var a1 = 0;
        var av = 0;
        var aL = 0;
        var aI = 0;
        var aq = 100;
        var t = aq;
        var x = aq;
        var a0 = 0;
        var ax = 0;
        var F = false;
        var aN = Class416.member4783;
        var aM = Class416.member4783;
        bb.member9013 = function (bh, be) {
            aN = bh;
            aM = be;
        };
        bb.member9014 = function () {
            return aN;
        };
        bb.member9015 = function () {
            return aM;
        };
        var aR = Class416.member4783;
        var aT = Class416.member4784;
        var af;
        var ai;
        var X;
        var al;
        bb.member9016 = function (bh, be, bl, bj) {
            if (bh === 0) {
                af = undefined;
                ai = undefined;
                X = undefined;
                al = undefined;
            } else {
                af = bh;
                ai = be;
                X = bl;
                al = bj;
            }
        };
        var aZ = {
            width: 0,
            height: 0
        };
        bb.member9017 = function () {
            return aZ;
        };
        var T = 2 * Class416.member4783 * Math.PI / 180;
        var at = 2 * Class416.member4784 * Math.PI / 180;
        bb.member9018 = function (be, bh) {
            T = be;
            at = bh;
        };
        bb.member3652 = function () {
            if (a2 === Class588.member8985) {
                return T * 180 / Math.PI;
            } else {
                return aR;
            }
        };
        bb.member3653 = function () {
            if (a2 === Class588.member8985) {
                return Math.tan(at / 4) / Math.tan(T / 4);
            } else {
                return aT / aR;
            }
        };
        var V = Class416.member4787;
        bb.member3655 = function () {
            return V;
        };
        bb.member3656 = function (be) {
            V = be;
            if (V < 1) {
                V = Class416.member4787;
            }
            ar = true;
        };
        var O;
        var ar = true;
        bb.member3657 = function () {
            if (ar) {
                O = Class417.member3657();
                O = Math.min(O, V * Class416.member4788 + Class86.member718 / 2);
                ar = false;
            }
            return O;
        };
        bb.member9019 = function () {
            ar = true;
        };
        var aV = -1;
        bb.member9020 = function () {
            aV = -1;
        };
        bb.member4224 = function (bA, be, bC, bm, bj) {
            var bB;
            if (aV === -1) {
                bB = 1;
            } else {
                bB = bA - aV;
            }
            aV = bA;
            var bD = bm - Class416.member4781;
            if (bD < 0) {
                bD = 0;
            }
            if (bD > 100) {
                bD = 100;
            }
            aR = aN + (aM - aN) * bD / 100;
            aT = aR * bj / bm;
            aZ.width = bj;
            aZ.height = bm;
            if (af !== undefined) {
                if (aT < X) {
                    aT = X;
                    aR = aT * bm / bj;
                    if (aR > ai) {
                        aR = ai;
                        aZ.height = aR * bj / aT;
                    }
                }
                if (aT > al) {
                    aT = al;
                    aR = aT * bm / bj;
                    if (aR < af) {
                        aR = af;
                        aZ.width = aT * bm / aR;
                    }
                }
            }
            if (!M()) {
                Class140.set(P, m);
            } else {
                B.member6215(aU);
                a3.member2026(I);
                Class41.member325(aU, I, aQ);
                for (var bo = 0; bo < 3; bo++) {
                    m[bo] = aQ[bo];
                }
                m[3] = Math.sqrt(Class41.length(aU) * Class41.length(I)) + Class41.member327(aU, I);
                Class140.normalize(m);
                if (Class140.member1359(m) === 0) {
                    m[3] = 1;
                }
            }
            if (B !== undefined) {
                if (a2 === Class588.member8982 || B.member8917 !== undefined) {
                    B.member4224(bB, U, R);
                } else {
                    var bE = B.member6214();
                    if (bE !== undefined) {
                        if (a2 === Class588.member8981) {
                            if (a3 !== undefined) {
                                var bh = a3.member8934(Y());
                                if (bh !== undefined) {
                                    Class569.member8866(bB, bh.member7699, bE.member8861, bE.member8862, a1, aL);
                                }
                                Class41.member322(bE.member8861, bh.member7699, aQ);
                                var bv = -aQ[1];
                                var bx = Math.sqrt(aQ[0] * aQ[0] + aQ[2] * aQ[2]);
                                var br = Math.atan(bv / bx);
                                if (br < Class416.member4779) {
                                    bv = Math.tan(Class416.member4779) * bx;
                                    bE.member8861[1] = bh.member7699[1] - bv;
                                } else if (br > Class416.member4780) {
                                    if (bx === 0) {
                                        bE.member8861[2] = bh.member7699[2] + bv * Math.tan(Math.PI / 2 - Class416.member4780);
                                    } else {
                                        bv = Math.tan(Class416.member4780) * bx;
                                        bE.member8861[1] = bh.member7699[1] - bv;
                                    }
                                }
                            }
                        } else if (a2 === Class588.member8984 || F) {
                            B.member6215(aQ);
                            B.member6216(aC);
                            var bl = Class428.member6204(bA - a0, t, aD, aQ, aC);
                            B.member8856(aC);
                            Class41.member322(aQ, aC, bE.member8861);
                            if (bl) {
                                y = undefined;
                                aD = undefined;
                                F = false;
                                if (a2 === Class588.member8984) {
                                    a2 = Class588.member8980;
                                }
                            }
                        } else {
                            if (v === Class419.member4859) {
                                Class419.member4865(bB, bE.member8861, bE.member8862, bE.member8863, R, U, n, r, J, aG);
                            }
                            if (v === Class419.member4860) {
                                Class419.member4866(bB, bE.member8861, m, bE.member8862, bE.member8863, R, U, n, r, J, aG);
                            }
                            if (v === Class419.member4861) {
                                Class419.member4867(bB, bE.member8861, m, bE.member8862, bE.member8863, ap, aX, J, C);
                            }
                        }
                    }
                }
            }
            if (a3 !== undefined) {
                if (a3.member8938 !== undefined) {
                    a3.member8938(be, bC, an, h);
                }
                if (a2 === Class588.member8982 || a3.member8917 !== undefined) {
                    a3.member4224(bB, a4, L);
                    if (a3.member8990()) {
                        ay = true;
                    }
                } else {
                    ah();
                    var bh = a3.member8934(Y());
                    if (bh !== undefined) {
                        if (a2 === Class588.member8981) {
                            Class569.member8865(bB, bh.member7699, bh.member8935, av, aI);
                        } else if (a2 === Class588.member8984 || F) {
                            a3.member2026(aQ);
                            a3.member8936(aC);
                            var bl = Class428.member6204(bA - ax, x, y, aQ, aC);
                            a3.member8924(aC);
                            a3.member8926(m);
                            Class140.member318(m, aC);
                            Class41.member322(aQ, aC, bh.member7699);
                            if (bl) {
                                y = undefined;
                                aD = undefined;
                                F = false;
                                if (a2 === Class588.member8984) {
                                    a2 = Class588.member8980;
                                }
                            }
                        } else {
                            if (v === Class419.member4859) {
                                Class419.member4865(bB, bh.member7699, bh.member8935, bh.member8863, L, a4, n, r, J, aG);
                            }
                            if (v === Class419.member4860) {
                                Class419.member4866(bB, bh.member7699, m, bh.member8935, bh.member8863, L, a4, n, r, J, aG);
                            }
                            if (v === Class419.member4861) {
                                Class419.member4867(bB, bh.member7699, m, bh.member8935, bh.member8863, aS, e, J, C);
                            }
                        }
                    }
                    if (a2 === Class588.member8980 || a2 === Class588.member8983 || a2 === Class588.member8984) {
                        var bD = bm - Class416.member4781;
                        if (bD < 0) {
                            bD = 0;
                        }
                        if (bD > 100) {
                            bD = 100;
                        }
                        var bq = aJ + (Q - aJ) * bD / 100;
                        var bt = s * bq / 256;
                        Class41.set(a8, D);
                        D[2] = bt;
                        a3.member8925(D);
                    }
                }
            }
            for (var bo = 0; bo < aA.length; bo++) {
                if (aA[bo] !== undefined) {
                    aA[bo].member4224(bB);
                }
            }
        };
        bb.member3590 = function () {
            return M();
        };
        var A = bb.member3590;
        var M = function () {
            return B !== undefined && B.member3590() && a3 !== undefined && a3.member3590();
        };
        bb.member3649 = function (be) {
            if (!B.member3590() || !a3.member3590()) {
                throw new Error('1229 ');
            }
            B.member6215(aQ);
            a3.member2026(aC);
            Class41.normalize(Class41.member322(aQ, aC, be));
        };
        var aK = bb.member3649;
        bb.member3650 = function (be) {
            if (!a3.member3590()) {
                throw new Error('1230 ');
            }
            a3.member2026(be);
        };
        bb.member9021 = function (be) {
            if (!a3.member3590()) {
                throw new Error('1231 ');
            }
            a3.member8928(be);
        };
        bb.member9022 = function (be) {
            if (!a3.member3590()) {
                throw new Error('1232 ');
            }
            a3.member8929(be);
        };
        bb.member9023 = function (be) {
            if (!a3.member3590()) {
                throw new Error('1233 ');
            }
            a3.member8924(be);
        };
        bb.member9024 = function (be) {
            if (!B.member3590()) {
                throw new Error('1234 ');
            }
            B.member6215(be);
        };
        bb.member9025 = function (be) {
            if (!B.member3590()) {
                throw new Error('1235 ');
            }
            B.member6208(be);
        };
        bb.member9026 = function (be) {
            if (!B.member3590()) {
                throw new Error('1236 ');
            }
            B.member8856(be);
        };
        bb.member3651 = function (bj) {
            if (!B.member3590() || !a3.member3590()) {
                throw new Error('1237 ');
            }
            if (aY === Class586.member8973) {
                bb.member9027(bj);
            } else {
                var bh = B.member6218();
                aK(aQ);
                Class140.member1353(aQ, bh, m);
                Class140.member318(m, ad, aC);
                var bl = Math.abs(Class41.member327(aQ, aC));
                if (bl === 1) {
                    Class41.set(H, aC);
                }
                a3.member2026(I);
                B.member6215(aU);
                Class49.member352(I, aU, aC, bj);
            }
            Class49.scale(bj, a5);
            for (var be = 0; be < aA.length; be++) {
                if (aA[be] !== undefined) {
                    aA[be].apply(bj);
                }
            }
            Class49.inverse(bj);
        };
        bb.member9027 = function (be) {
            a3.member2026(I);
            B.member6209(I);
            if (B.member78() && K === Class593.member8971) {
                a3.member7838(a6);
                B.member6216(a6.member3454);
                a3.setDestination(a6);
            }
            Class140.member316(B.member6205(), be);
            Class49.member313(aW);
            Class41.member313(aQ);
            a3.member2026(aQ);
            Class49.translate(aW, aQ);
            Class49.member323(aW, be, be);
        };
        bb.member8926 = function (bh, be) {
            if (a3.member8926 === undefined) {
                Class140.set(P, bh);
                return;
            }
            a3.member8926(bh, be);
        };
        bb.member7838 = function (be) {
            if (!a3.member3590()) {
                throw new Error('1238 ');
            }
            if (be === undefined) {
                be = Class290();
            }
            a3.member7838(be);
            return be;
        };
        bb.member6217 = function (be) {
            if (!B.member3590()) {
                throw new Error('1239 ');
            }
            if (be === undefined) {
                be = Class290();
            }
            B.member6217(be);
            return be;
        };
        bb.member8939 = function (be) {
            if (!A()) {
                return 0;
            }
            if (a3.member8939 === undefined) {
                if (be !== undefined) {
                    be[0] = 0;
                    be[1] = 0;
                }
                return 0;
            }
            return a3.member8939(be);
        };
        bb.member9028 = function (be) {
            if (!ac) {
                throw new Error('1240 ');
            }
            if (a2 !== Class588.member8985) {
                throw new Error('1241 ');
            }
            E = be;
        };
        bb.member9029 = function (be) {
            if (!ac) {
                throw new Error('1242 ');
            }
            if (a2 !== Class588.member8985) {
                throw new Error('1243 ');
            }
            az = be;
        };
        bb.member9009 = function (be) {
            if (!ac) {
                throw new Error('1244 ');
            }
            if (a2 !== Class588.member8985) {
                throw new Error('1245 ');
            }
            v = be;
        };
        bb.member9030 = function (be) {
            if (!ac || !Class419.member4862(v)) {
                throw new Error('1246 ');
            }
            if (a2 !== Class588.member8985) {
                throw new Error('1247 ');
            }
            Class41.set(be, R);
        };
        bb.member9031 = function (be) {
            if (!ac || !Class419.member4862(v)) {
                throw new Error('1248 ');
            }
            if (a2 !== Class588.member8985) {
                throw new Error('1249 ');
            }
            Class41.set(be, L);
        };
        bb.member9032 = function (be) {
            if (!ac || !Class419.member4862(v)) {
                throw new Error('1250 ');
            }
            if (a2 !== Class588.member8985) {
                throw new Error('1251 ');
            }
            Class41.set(be, U);
        };
        bb.member9033 = function (be) {
            if (!ac || !Class419.member4862(v)) {
                throw new Error('1252 ');
            }
            if (a2 !== Class588.member8985) {
                throw new Error('1253 ');
            }
            Class41.set(be, a4);
        };
        bb.member9034 = function (bh, be) {
            if (!ac || Class419.member4862(v)) {
                throw new Error('1254 ');
            }
            if (a2 !== Class588.member8985) {
                throw new Error('1255 ');
            }
            Class41.set(bh, ap);
            Class41.set(bh, aS);
            aX = be;
            e = be;
        };
        bb.member9035 = function (bh, be) {
            if (!ac || Class419.member4862(v)) {
                throw new Error('1256 ');
            }
            if (a2 !== Class588.member8985) {
                throw new Error('1257 ');
            }
            Class41.set(bh, ap);
            aX = be;
        };
        bb.member9036 = function (bh, be) {
            if (!ac || Class419.member4862(v)) {
                throw new Error('1258 ');
            }
            if (a2 !== Class588.member8985) {
                throw new Error('1259 ');
            }
            Class41.set(bh, aS);
            e = be;
        };
        bb.member9037 = function (be) {
            if (!ac) {
                throw new Error('1260 ');
            }
            if (a2 !== Class588.member8985) {
                throw new Error('1261 ');
            }
            if (B === undefined) {
                throw new Error('1262 ');
            }
            B.member8986(be);
        };
        bb.member9038 = function (be) {
            if (!ac) {
                throw new Error('1263 ');
            }
            if (a2 !== Class588.member8985) {
                throw new Error('1264 ');
            }
            if (a3 === undefined) {
                throw new Error('1265 ');
            }
            a3.setDestination(be);
        };
        bb.member6219 = function (bA, bq, bD) {
            if (a2 !== Class588.member8985) {
                throw new Error('1266 ');
            }
            var be = bA.member1047();
            var br = bA.member609();
            ac = (br & 1) === 1;
            if (!ac) {
                k = 0;
                N = false;
                ae = 0;
                ab = false;
            }
            if ((br & 1 << 3) !== 0) {
                var bh = bA.member609();
                if (bh !== aY) {
                    q(bh, true);
                }
            }
            if ((br & 1 << 4) !== 0) {
                var bF = bA.member609();
                if (bF !== K) {
                    o(bF, true);
                }
            }
            if (br >> 7 & 1 === 1) {
                var bt = bA.member608();
                if ((bt >> Class583.member8944 & 1) === 1) {
                    bA.member1088(U);
                }
                if ((bt >> Class583.member8945 & 1) === 1) {
                    bA.member1088(a4);
                }
                if ((bt >> Class583.member8946 & 1) === 1) {
                    bA.member1088(R);
                }
                if ((bt >> Class583.member8947 & 1) === 1) {
                    bA.member1088(L);
                }
                if ((bt >> Class583.member8948 & 1) === 1) {
                    bA.member320();
                    bA.member320();
                }
                if ((bt >> Class583.member8949 & 1) === 1) {
                    at = bA.member320() * 2;
                    T = bA.member320() * 2;
                }
                if ((bt >> Class583.member8950 & 1) === 1) {
                    G = bA.member609();
                }
                if ((bt >> Class583.member8951 & 1) === 1) {
                    bA.g3();
                    bA.member609();
                }
                if ((bt >> Class583.member8952 & 1) === 1) {
                    var bm = bA.member609();
                    h = (bm & 1) === 1;
                    an = (bm & 2) === 2;
                }
                if ((bt >> Class583.member8953 & 1) === 1) {
                    var bo = bA.member609();
                    for (var bG = 0; bG < bo; bG++) {
                        var bv = bA.member609();
                        var bx = bA.member609();
                        if (bv === 0) {
                            i(bx);
                        } else {
                            var bj = bA.member609();
                            var bC = true;
                            for (var bl = 0; bl < aA.length; bl++) {
                                if (aA[bl] !== undefined) {
                                    if (aA[bl].member8968() === bx) {
                                        aA[bl].member6219(bA);
                                        bC = false;
                                        break;
                                    }
                                }
                            }
                            if (bC) {
                                var bB;
                                if (bj === Class582.member8942) {
                                    bB = Class585;
                                }
                                if (bj === Class582.member8943) {
                                    bB = Class590;
                                }
                                var bE = bB({
                                    member8969: bx,
                                    member3456: bA
                                });
                                j(bE);
                            }
                        }
                    }
                }
                if ((bt >> Class583.member8954 & 1) === 1) {
                    n = bA.member608();
                    r = bA.member320();
                }
                if ((bt >> Class583.member8955 & 1) === 1) {
                    v = bA.member609();
                }
                if ((bt >> Class583.member8956 & 1) === 1) {
                    bA.member1088(ap);
                    bA.member1088(aS);
                    aX = bA.member320();
                    e = bA.member320();
                }
                if ((bt >> Class583.member8957 & 1) === 1) {
                    E = bA.member320();
                }
                if ((bt >> Class583.member8958 & 1) === 1) {
                    az = bA.member320();
                }
            }
            if (B !== undefined && (br >> 5 & 1) === 1) {
                B.member6219(bA, bD);
            }
            if (a3 !== undefined && (br >> 6 & 1) === 1) {
                a3.member6219(bA, bD);
            }
            if (bA.member1047() - be !== bq) {
                throw new Error('1267 ');
            }
        };
        var Z = 400;
        bb.member9039 = function () {
            return Z;
        };
        bb.member9040 = function (be) {
            Z = be;
            a8 = [
                0,
                Z,
                s
            ];
            aP = [
                0,
                Z,
                0
            ];
        };
        var s = -4500;
        bb.member9041 = function () {
            return s;
        };
        bb.member9042 = function (be) {
            s = be;
            a8 = [
                0,
                Z,
                s
            ];
        };
        var aP = [
            0,
            Z,
            0
        ];
        var a8 = [
            0,
            Z,
            s
        ];
        var b = Class140.create();
        Class140.member1353(au, Math.PI / 4, b);
        var aJ = 256;
        var Q = 320;
        bb.member9043 = function (bh, be) {
            aJ = bh;
            Q = be;
        };
        bb.member9044 = function () {
            return aJ;
        };
        bb.member9045 = function () {
            return Q;
        };
        var D = Class41.create();
        var g = 600;
        var aH = 12;
        var aw = 24;
        var k = 0;
        var ae = 0;
        var N = false;
        var ab = false;
        bb.member9046 = function () {
            am(true, true);
        };
        bb.member9047 = function () {
            am(true, false);
        };
        bb.member9048 = function () {
            am(false, true);
        };
        bb.member9049 = function () {
            am(false, false);
        };
        var a7 = true;
        bb.member9050 = function () {
            return a7;
        };
        bb.member9051 = function (be) {
            a7 = be;
        };
        var am = function (be, bh) {
            if (!ac || a2 !== Class588.member8980 && a2 !== Class588.member8983) {
                return;
            }
            if (be && !N) {
                if (bh) {
                    k += (aH - k) / 2;
                } else {
                    k += (-aH - k) / 2;
                }
                N = true;
                a7 = true;
            }
            if (!be && !ab) {
                if (bh) {
                    ae += (aw - ae) / 2;
                } else {
                    ae += (-aw - ae) / 2;
                }
                ab = true;
                a7 = true;
            }
        };
        bb.rotate = function (be) {
            if (!ac || !M()) {
                return;
            }
            a3.member8926(m);
            Class140.member323(be, m, m);
            a3.member8927(m);
        };
        bb.member8927 = function (be, bj, bh) {
            if (!ac || a2 !== Class588.member8980 && a2 !== Class588.member8983 || !M()) {
                return;
            }
            a3.member8927(be, bj, bh);
            a7 = true;
        };
        bb.member9052 = function (bh, be) {
            if (a2 === Class588.member8985) {
                throw new Error('1268 ');
            }
            if (be !== undefined && be && a9 !== undefined) {
                B = a9;
            } else if (aY !== Class586.member7656 || B === undefined || B.member8857() !== bh) {
                if (B === undefined || aY !== Class586.member7656) {
                    q(Class586.member7656);
                    Class41.set(aP, aQ);
                } else {
                    B.member8856(aQ);
                }
                B.member8858({
                    member4179: bh,
                    member8859: aQ,
                    member8860: false
                });
            }
            if (be !== undefined && be && ag !== undefined) {
                a3 = ag;
            } else if (K !== Class593.member7656 || a3 === undefined || a3.member8933() !== bh) {
                if (a3 === undefined || K !== Class593.member7656) {
                    o(Class593.member7656);
                    Class41.set(a8, aQ);
                    Class140.set(b, m);
                } else {
                    a3.member8924(aQ);
                    a3.member8926(m);
                }
                a3.member8930({
                    member4179: bh,
                    member8859: aQ,
                    member8931: m,
                    member8860: false,
                    member8932: 200
                });
            }
            if (a2 !== Class588.member8983) {
                Class41.set(bh.node.member3454, B.member6214().member8861);
                Class41.set(bh.node.member3454, a3.member8934().member7699);
            }
            ag = undefined;
            a9 = undefined;
            a2 = Class588.member8980;
        };
        var aa = bb.member9052;
        bb.member9053 = function (bh, be) {
            if (a2 === Class588.member8985) {
                throw new Error('1269 ');
            }
            if (!M()) {
                throw new Error('1270 ');
            }
            if (y === undefined) {
                y = new Float64Array(3);
            }
            if (aD === undefined) {
                aD = new Float64Array(3);
            }
            a3.member2026(y);
            B.member6215(aD);
            aa(bh, false);
            a0 = be;
            ax = be;
            t = aq;
            x = aq;
            d();
            a2 = Class588.member8983;
            F = true;
        };
        bb.member9054 = function (be) {
            if (a2 !== Class588.member8985 || aY !== Class586.member7656 || K !== Class593.member7656) {
                return;
            }
            if (B.member8864 !== undefined) {
                B.member8864(be);
            }
            if (a3.member8864 !== undefined) {
                a3.member8864(be);
            }
        };
        var ah = function () {
            if (a2 !== Class588.member8980 && a2 !== Class588.member8983 || !M()) {
                return;
            }
            if (ae !== 0) {
                Class140.member1353(ad, ae / g, m);
                a3.member8937(Class140.normalize(m));
                if (ab) {
                    ab = false;
                } else {
                    ae = ae / 2;
                    if (Math.abs(ae) < 1) {
                        ae = 0;
                    }
                }
            } else if (ab) {
                ab = false;
            }
            if (k !== 0) {
                a3.member8926(m);
                Class140.member318(m, au, aQ);
                Class140.member1353(aQ, k / g, m);
                a3.member8937(Class140.normalize(m));
                if (N) {
                    N = false;
                } else {
                    k = k / 2;
                    if (Math.abs(k) < 1) {
                        k = 0;
                    }
                }
            } else if (N) {
                N = false;
            }
        };
        var ao = {};
        bb.member8930 = function (bl, be, br, bj, bh, bq, bo, bm) {
            aQ[0] = be;
            aQ[1] = br;
            aQ[2] = bj;
            Class140.member1353(ad, Class415.member4772(bq), m);
            Class140.member318(m, au, aC);
            Class41.member324(aC);
            Class140.member1353(aC, Class415.member4772(bh), z);
            Class140.member323(z, m, m);
            if (K !== Class593.member7656) {
                K = Class593.member7656;
                a3 = Class581();
            }
            ao.member4179 = bl;
            ao.member8859 = aQ;
            ao.member8931 = m;
            ao.member8860 = bo;
            ao.member8932 = bm;
            a3.member8930(ao);
        };
        var aO = {};
        bb.member8858 = function (bj, be, bm, bh, bl) {
            aQ[0] = be;
            aQ[1] = bm;
            aQ[2] = bh;
            if (aY !== Class586.member7656) {
                aY = Class586.member7656;
                B = Class568();
            }
            aO.member4179 = bj;
            aO.member8859 = aQ;
            aO.member8860 = bl;
            B.member8858(aO);
        };
        bb.moveTo = function (bq, bh, be, bm, bl, bo, bj) {
            if (a2 === Class588.member8985) {
                throw new Error('1271 ');
            }
            if (!M()) {
                throw new Error('1272 ');
            }
            if (a2 === Class588.member8980) {
                if (ag !== undefined) {
                    if (false) {
                    }
                }
                ag = a3;
            }
            if (K !== Class593.member8971) {
                o(Class593.member8971, bo);
            }
            aC[0] = bq;
            aC[1] = be;
            aC[2] = bh;
            a3.setDestination(Class290({
                member3454: aC,
                level: 0
            }));
            if (bo && bl >= Class416.member4786) {
                Class41.set(aC, a3.member8934().member7699);
            } else {
                Class41.set(bj, a3.member8934().member7699);
            }
            av = bm;
            aI = bl;
            a2 = Class588.member8981;
        };
        bb.member352 = function (bq, bh, be, bm, bl, bo, bj) {
            if (a2 === Class588.member8985) {
                throw new Error('1273 ');
            }
            if (!M()) {
                throw new Error('1274 ');
            }
            if (a2 === Class588.member8980) {
                if (a9 !== undefined) {
                    if (false) {
                    }
                }
                a9 = B;
            }
            if (aY !== Class586.member8971) {
                q(Class586.member8971, bo);
            }
            aC[0] = bq;
            aC[1] = be;
            aC[2] = bh;
            B.member8986(Class290({
                member3454: aC,
                level: 0
            }));
            if (bl >= Class416.member4786) {
                Class41.set(aC, B.member6214().member8861);
            } else {
                Class41.set(bj, B.member6214().member8861);
            }
            a1 = bm;
            aL = bl;
            a2 = Class588.member8981;
        };
        bb.member9055 = function (bm, bh, bj) {
            if (a2 === Class588.member8985) {
                throw new Error('1275 ');
            }
            if (!M()) {
                throw new Error('1276 ');
            }
            if (y === undefined) {
                y = new Float64Array(3);
            }
            if (aD === undefined) {
                aD = new Float64Array(3);
            }
            a3.member2026(y);
            B.member6215(aD);
            aa(bm, true);
            var be = a3.member8934();
            var bl = B.member6214();
            Class41.set(y, be.member7699);
            Class41.set(aD, bl.member8861);
            a0 = bh;
            ax = bh;
            if (bj !== undefined) {
                t = bj;
                x = bj;
            } else {
                t = aq;
                x = aq;
            }
            d();
            a2 = Class588.member8984;
        };
        bb.member9056 = function (bj, bh, be, bl) {
            if (a2 !== Class588.member8985) {
                throw new Error('1277 ');
            }
            if (y === undefined) {
                y = Class41.create();
            }
            if (aD === undefined) {
                aD = Class41.create();
            }
            Class41.set(bj, y);
            Class41.set(bh, aD);
            a0 = be;
            ax = be;
            F = true;
            if (bl !== undefined) {
                t = bl;
                x = bl;
            } else {
                t = aq;
                x = aq;
            }
            d();
        };
        bb.member9057 = function (bj, bl, bm, bo, be, bh) {
            if (!M()) {
                throw new Error('1278 ');
            }
            u(Class588.member8982);
            o(Class593.member8976, true);
            q(Class586.member8976, true);
            a3.member8916(bj, 0);
            a3.member8917(bl, bm);
            B.member8916(bo, 0);
            B.member8917(be, bh);
        };
        if (aj !== undefined && aj.member9058 !== undefined) {
            a2 = Class588.member8980;
        }
        aj = undefined;
        return bb;
    };
    return a;
}();