import { Class270 } from 'Class270.js';
import { Class453 } from 'Class453.js';
import { Class299 } from 'Class299.js';
import { Class504 } from 'Class504.js';
import { Class236 } from 'Class236.js';
import { Class500 } from 'Class500.js';
import { Class642 } from 'Class642.js';
import { Class769 } from 'Class769.js';
import { Class458 } from 'Class458.js';
import { Class124 } from 'Class124.js';
import { Class502 } from 'Class502.js';
import { Class721 } from 'Class721.js';
import { Class723 } from 'Class723.js';
import { Class315 } from 'Class315.js';
import { Class317 } from 'Class317.js';
import { Class66 } from 'Class66.js';
import { Class528 } from 'Class528.js';
import { Class95 } from 'Class95.js';
export var Class807 = function () {
    var a8 = {};
    var aB;
    var a7 = 100;
    var ag = 200;
    var al = -1;
    var n = null;
    var U = false;
    var aK = null;
    var bb = '', aP = '';
    var d = '';
    var aj = true;
    var a6 = 0;
    var h = 0;
    var aC = 0;
    var ab;
    var aA;
    var a3;
    var aw = 0;
    var ar = 0;
    a8.member9725 = function () {
        return ar;
    };
    var aJ = false;
    var Z = 4;
    var aD = 0;
    var M = 10;
    var j = 15;
    var aV = 30;
    var P = 40;
    var a = 50;
    var aO = 60;
    var u = 70;
    var q = 80;
    var a9 = 90;
    var X = 92;
    var i = 94;
    var a1 = 96;
    var r = 100;
    var m = 110;
    var aG = 120;
    var aR = 130;
    var N = 132;
    var aH = 134;
    var ak = 136;
    var O = 140;
    var an = 150;
    var a5 = 160;
    var y = 170;
    var v = 180;
    var av = 190;
    var aq = 200;
    var be = 210;
    var a4 = 220;
    var B = 230;
    var aT = 240;
    var A = 250;
    var aE = 260;
    var k = 270;
    var I = aD;
    var at = 1000;
    var ah = false;
    var ai = -1;
    var aM = {
        member1058: -1,
        member1059: 0
    };
    var a2;
    var aF = {
        member1058: 0,
        member1059: 0
    };
    var D = {
        member1058: 0,
        member1059: Math.floor(Math.random() * 99999999)
    };
    var R = Class270.member3144;
    var af = function () {
        return R;
    };
    a8.member9717 = af;
    var ap = 0;
    a8.member9718 = function () {
        return ap;
    };
    var b = -1;
    var ae = function () {
        return b;
    };
    a8.member9716 = ae;
    var o = -1;
    var ad = function () {
        return o;
    };
    a8.member9715 = ad;
    var au = 0;
    a8.member9728 = function () {
        return au;
    };
    var aU = false;
    a8.member10200 = function () {
        return aU;
    };
    var x;
    var t;
    var az;
    var L = undefined;
    var F = Class270.member3144;
    a8.member9723 = function () {
        return F;
    };
    var aS = Class270.member3144;
    a8.member9709 = function () {
        return aS;
    };
    var ac = function (bh) {
        aS = bh;
    };
    a8.member9712 = ac;
    var ay = -1;
    a8.member9711 = function () {
        return ay;
    };
    var Y = function (bh) {
        ay = bh;
    };
    a8.member9714 = Y;
    var c = -1;
    a8.member9710 = function () {
        return c;
    };
    var W = function (bh) {
        c = bh;
    };
    a8.member9713 = W;
    var ax = function (bh) {
        aB = bh;
    };
    a8.member25 = ax;
    var aW = function (bj, bh) {
        if (bh === Class453.member7202) {
            if (bj === Class453.member7201) {
                H();
            } else if (bj === Class453.member7204) {
                ac(af());
                W(ad());
                Y(ae());
                if (aB.member7140.member10104()) {
                    aB.member7140.member10102();
                    aB.member8252.member10109();
                    aB.member8236(Class453.member7203);
                    H();
                } else {
                    C(aU);
                }
            } else {
                C(aU);
            }
        } else if (bh === Class453.member7204) {
            H();
        }
    };
    a8.member7183 = aW;
    var V = function () {
        return I !== aD;
    };
    a8.member8235 = V;
    var aQ = function () {
        if (V()) {
            return false;
        }
        if (aB.member8559.member8230().id > 0) {
            return false;
        }
        if (aB.member8233() === Class453.member7201 && !aJ) {
            return false;
        }
        return true;
    };
    var T = function () {
        I = aD;
        R = Class270.member3144;
        F = Class270.member3144;
    };
    a8.member9708 = T;
    var g = function () {
        aM.member1058 = -1;
        aM.member1059 = 0;
        aF.member1058 = 0;
        aF.member1059 = 0;
        ai = -1;
    };
    var S = function () {
        if (I !== aD) {
            n.member8254();
            T();
            aN();
        }
    };
    a8.member9726 = S;
    var Q = function (bl, bj, bm, bh) {
        if (!aQ()) {
            return;
        }
        g();
        a0(a7, aB.member8252.member8253(), bl, bj, bm, bh, false, false, false, aM);
    };
    a8.member9721 = Q;
    var K = function (bj, bl, bh) {
        if (!aQ()) {
            return;
        }
        if (bj !== ai) {
            aM.member1058 = -1;
            aM.member1059 = 0;
        }
        ai = bj;
        a0(a7, aB.member8252.member8253(), '', '', bl, bh, false, aM.member1058 === -1, true, aM);
    };
    a8.member9730 = K;
    var J = function (bj, bh) {
        if (!aQ()) {
            return;
        }
        ap = 0;
        o = -1;
        b = -1;
        aU = true;
        am(false, bj, bh);
    };
    a8.member9720 = J;
    var H = function () {
        aJ = true;
        if (!aQ()) {
            aJ = false;
            return;
        }
        am(aJ, '', false);
    };
    a8.member10529 = H;
    var G = function (bl, bj, bm, bh) {
        if (!aQ()) {
            return;
        }
        g();
        aB.member8252.member9083().member8254();
        ap = 0;
        o = -1;
        b = -1;
        aU = false;
        a0(ag, aB.member8252.member9083(), bl, bj, bm, bh, false, false, false, aM);
    };
    a8.member9719 = G;
    var E = function (bj, bl, bh) {
        if (!aQ()) {
            return;
        }
        aB.member8252.member9083().member8254();
        ap = 0;
        o = -1;
        b = -1;
        if (bj !== ai) {
            aM.member1058 = -1;
            aM.member1059 = 0;
        }
        ai = bj;
        a0(ag, aB.member8252.member9083(), '', '', bl, bh, false, aM.member1058 === -1, true, aM);
    };
    a8.member9729 = E;
    var C = function (bh) {
        T();
        if (bh) {
            aB.member8236(Class453.member3549);
            aB.member8252.member9083().member8254();
            a0(a7, aB.member8252.member8253(), bb, aP, '', false, false, false, false, aM);
            try {
                loggedout();
            } catch (bj) {
            }
        } else {
            aB.member8236(Class453.member7198);
            try {
                loggedout();
            } catch (bj) {
            }
        }
    };
    a8.member9722 = C;
    var am = function (bj, bl, bh) {
        if (ai !== -1) {
            a0(ag, aB.member8252.member9083(), '', '', bl, bh, bj, aM.member1058 === -1, true, aM);
            return;
        }
        g();
        a0(ag, aB.member8252.member9083(), bb, aP, bl, bh, bj, false, false, aM);
    };
    var a0 = function (bo, bt, br, bx, bl, bm, bj, bq, bv, bh) {
        if (br === undefined || bx === undefined) {
            throw new Error('1292 ');
        }
        al = bo;
        n = bt;
        bb = br;
        aP = bx;
        d = bl;
        aj = bm;
        aJ = bj;
        ah = bq;
        aM = bh;
        if (!bv) {
            aM.member1058 = -1;
            aM.member1059 = 0;
        }
        U = bv;
        if (!U && (bb === '' || aP === '')) {
            ao(Class270.member3151);
            aN();
            return;
        }
        n.member8254();
        ao(Class270.member3145);
        I = M;
        h = 0;
        aC = 0;
    };
    a8.member10530 = null;
    var ao = function (bh) {
        if (al === a7) {
            F = bh;
        } else {
            R = bh;
        }
        if (a8.member10530 !== null && (bh > 0 || bh === Class270.member3147)) {
            a8.member10530(bh);
        }
    };
    var aN = function () {
        aJ = false;
    };
    var z = function () {
        if (I !== r) {
            return;
        }
        I = m;
    };
    a8.member9727 = z;
    var aX = function () {
        if (af() !== Class270.member3150 && af() !== Class270.member3145 && af() !== Class270.member3163) {
            aB.member8236(Class453.member7202);
        }
    };
    var aY = function () {
        if (aB.member8233() === Class453.member7204) {
            aX();
        }
        if (I === aD || I === r) {
            return;
        }
        var bT;
        if (aC === 0 && I < a9) {
            bT = 10 * Class299.member3571;
        } else {
            bT = 40 * Class299.member3571;
        }
        if (ah && I >= aO) {
            bT = 120 * Class299.member3571;
        }
        if (al !== ag || I !== be && R !== Class270.member3190) {
            h++;
        }
        if (h > bT) {
            n.member8254();
            if (aC < Z - 1) {
                h = 0;
                aC++;
                I = M;
            } else {
                I = aD;
                if (false) {
                }
                ao(Class270.member3147);
                aN();
                C(false);
                return;
            }
        }
        if (I === M) {
            if (al === ag) {
                n.member8267(aB.member7140.member7227().member8269(), aB.member7140.member7227().member8270(), Class299.member3584().member3484());
            } else {
                n.member8267(aB.member7140.member8268().member8269(), aB.member7140.member8268().member8270(), Class299.member3584().member3484());
            }
            I = j;
        }
        if (I === j) {
            if (!n.member8239()) {
                return;
            }
            n.member8271();
            var bv;
            if (ah) {
                bv = Class504.member8229(Class236.member2826.member2818, Class236.member2826.member2819, undefined);
                bv.member2698.member1054(0);
                var bm = bv.member2698.member1047();
                bv.member2698.member1056(Class299.member3565());
                bv.member2698.member1056(Class299.member3566());
                if (al === ag) {
                    bv.member2698.member1051(aJ ? 1 : 0);
                }
                var bt = s();
                aa(bt, ai);
                a6 = ai;
                bt.member1051(ai);
                bt.member1051(aB.clientParameters.member7138.value.id);
                bt.member1056(aB.clientParameters.member8273.value);
                for (var bZ = 0; bZ < 5; bZ++) {
                    bt.member1056(Math.floor(Math.random() * 99999999));
                }
                bt.member1057(D);
                bt.member1051(aB.clientParameters.member7256.value.id);
                bt.member1051(Math.floor(Math.random() * 99999999));
                bt.member1101(Class500.member8047, Class500.member8048);
                bv.member2698.member1067(bt.getData(), 0, bt.member1047());
                var bD = bv.member2698.member1047() - bm;
                bv.member2698.member607(bm - 2);
                bv.member2698.member1054(bD);
                bv.member2698.member607(bm + bD);
            } else {
                bv = Class504.member8229(Class236.member2817.member2818, Class236.member2817.member2819, undefined);
            }
            n.member8261(bv);
            n.member8279();
            I = aV;
        }
        if (I === aV) {
            if (n.member8281() < 1) {
                return;
            }
            var bE = n.member8282(1);
            var bJ = bE.member609();
            if (bJ !== 0) {
                if (false) {
                }
                I = aD;
                ao(bJ);
                n.member8254();
                aN();
                return;
            }
            if (ah) {
                I = P;
            } else {
                I = q;
            }
        }
        if (I === P) {
            if (n.member8281() < 2) {
                return;
            }
            var bE = n.member8282(2);
            a2 = bE.member608();
            I = a;
        }
        if (I === a) {
            if (n.member8281() < a2) {
                return;
            }
            var bE = n.member8282(a2);
            bE.member1103(aK, 0, a2);
            var bq = bE.member1089(true);
            Class642.member9618(Class642.member2827, [bq]);
            I = aO;
        }
        if (I === aO) {
            if (n.member8281() < 1) {
                return;
            }
            var bE = n.member8282(1);
            if (bE.member609() === 1) {
                I = u;
            }
        }
        if (I === u) {
            if (n.member8281() < 16) {
                return;
            }
            var bE = n.member8282(16);
            bE.member1103(aK, 0, 16);
            aM = bE.member1077();
            aF = bE.member1077();
            if (aM.member1058 < 0) {
                I = aD;
                ao(Class270.member3183);
                aN();
                return;
            }
            I = q;
        }
        if (I === q) {
            n.member8271();
            var bv;
            if (al == ag) {
                if (!aL()) {
                    return;
                }
                var bB;
                if (ah) {
                    bB = Class236.member2827;
                } else {
                    bB = Class236.member2821;
                }
                bv = Class504.member8229(bB.member2818, bB.member2819, undefined);
                bv.member2698.member1054(0);
                var bm = bv.member2698.member1047();
                var bR;
                if (!ah) {
                    bv.member2698.member1056(Class299.member3565());
                    bv.member2698.member1056(Class299.member3566());
                    bv.member2698.member1051(aJ ? 1 : 0);
                    bR = bv.member2698.member1047();
                    var bt = aZ();
                    bv.member2698.member1067(bt.getData(), 0, bt.member1047());
                    bR = bv.member2698.member1047();
                    bv.member2698.member1051(aM.member1058 === -1 ? 1 : 0);
                    if (aM.member1058 === -1) {
                        bv.member2698.member1065(bb);
                    } else {
                        bv.member2698.member1057(aM);
                    }
                } else {
                    bR = bm;
                }
                bv.member2698.member1051(aB.member6103.member9895() ? 3 : 2);
                bv.member2698.member1054(aB.member433.member588());
                bv.member2698.member1054(aB.member433.member589());
                bv.member2698.member1051(aB.member4480().member3940.getValue());
                aB.member9854().member2815(bv.member2698);
                var bC = aB.clientParameters.member9630.value;
                if (bC === undefined) {
                    bC = '';
                }
                bv.member2698.member1065(bC);
                bv.member2698.member1056(aB.clientParameters.member8273.value);
                var bj = aB.member4480().member3389();
                bv.member2698.member1051(bj.member1047());
                bv.member2698.member1067(bj.getData(), 0, bj.member1047());
                aB.member6103.member6104(true);
                var bx = aB.member8278().member681();
                bv.member2698.member1067(bx.getData(), 0, bx.member1047());
                bv.member2698.member1056(Class769.member10380());
                bv.member2698.member1057({
                    member1059: aB.clientParameters.member8274.value,
                    member1058: aB.clientParameters.member8275.value
                });
                bv.member2698.member1057({
                    member1059: aB.clientParameters.member8781.value,
                    member1058: aB.clientParameters.member8780.value
                });
                var bU = aB.clientParameters.member8276.value;
                if (bU === undefined) {
                    bU = '';
                }
                bv.member2698.member1065(bU);
                var bM = aB.clientParameters.member8277.value;
                bv.member2698.member1051(bM === undefined ? 0 : 1);
                if (bM !== undefined) {
                    bv.member2698.member1065(bM);
                }
                bv.member2698.member1051(1);
                bv.member2698.member1051(aB.clientParameters.member10342.value ? 1 : 0);
                bv.member2698.member1051(aB.member9733());
                bv.member2698.member1056(aB.clientParameters.member10343.value);
                bv.member2698.member1065(aB.clientParameters.member8272.value);
                var b0 = aB.member7140.member7227();
                var bH = aB.member7140.member10098();
                bv.member2698.member1051(bH === null || bH.member7228() !== b0.member7228() ? 1 : 0);
                var bW = aB.member7140.member8268();
                bv.member2698.member1054(bW === null ? -1 : bW.member7228());
                e(bv.member2698);
                bv.member2698.member1102(aK, bR, bv.member2698.member1047());
                var bD = bv.member2698.member1047() - bm;
                bv.member2698.member607(1);
                bv.member2698.member1054(bD);
                bv.member2698.member607(1 + 2 + bD);
            } else {
                if (!aL()) {
                    return;
                }
                var bB;
                if (ah) {
                    bB = Class236.member2827;
                } else {
                    bB = Class236.member2822;
                }
                bv = Class504.member8229(bB.member2818, bB.member2819, undefined);
                bv.member2698.member1054(0);
                var bm = bv.member2698.member1047();
                var bR;
                if (!ah) {
                    bv.member2698.member1056(Class299.member3565());
                    bv.member2698.member1056(Class299.member3566());
                    bR = bv.member2698.member1047();
                    var bt = aZ();
                    bv.member2698.member1067(bt.getData(), 0, bt.member1047());
                    bR = bv.member2698.member1047();
                    bv.member2698.member1051(aM.member1058 === -1 ? 1 : 0);
                    if (aM.member1058 === -1) {
                        bv.member2698.member1065(bb);
                    } else {
                        bv.member2698.member1057(aM);
                    }
                } else {
                    bR = bm;
                }
                bv.member2698.member1051(aB.clientParameters.member7256.value.id);
                bv.member2698.member1051(aB.clientParameters.member7138.value.id);
                if (true) {
                    bv.member2698.member1051(aB.member6103.member9895() ? 3 : 2);
                    bv.member2698.member1054(aB.member433.member588());
                    bv.member2698.member1054(aB.member433.member589());
                    bv.member2698.member1051(aB.member4480().member3940.getValue());
                } else {
                }
                aB.member9854().member2815(bv.member2698);
                var bC = aB.clientParameters.member9630.value;
                if (bC === undefined) {
                    bC = '';
                }
                bv.member2698.member1065(bC);
                var bj = aB.member4480().member3389();
                bv.member2698.member1051(bj.member1047());
                bv.member2698.member1067(bj.getData(), 0, bj.member1047());
                aB.member6103.member6104(true);
                var bx = aB.member8278().member681();
                bv.member2698.member1067(bx.getData(), 0, bx.member1047());
                bv.member2698.member1056(Class769.member10380());
                var bU = aB.clientParameters.member8276.value;
                if (bU === undefined) {
                    bU = '';
                }
                bv.member2698.member1065(bU);
                bv.member2698.member1056(aB.clientParameters.member8273.value);
                bv.member2698.member1056(aB.clientParameters.member10343.value);
                bv.member2698.member1065(aB.clientParameters.member8272.value);
                bv.member2698.member1051(aB.member9733());
                e(bv.member2698);
                bv.member2698.member1102(aK, bR, bv.member2698.member1047());
                var bD = bv.member2698.member1047() - bm;
                bv.member2698.member607(1);
                bv.member2698.member1054(bD);
                bv.member2698.member607(1 + 2 + bD);
            }
            n.member8261(bv);
            n.member8279();
            var br = Class458({ member7265: aK });
            for (var bS = 0; bS < 4; bS++) {
                aK[bS] += 50;
            }
            var bF = Class458({ member7265: aK });
            n.member8283(br, bF);
            aK = null;
            I = a9;
        }
        if (I === a9) {
            if (n.member8281() < 1) {
                return;
            }
            var bE = n.member8282(1);
            x = bE.member609();
            I = a1;
            if (false) {
            }
        }
        if (false) {
        }
        if (I === a1) {
            if (x === Class270.member3169) {
                I = aG;
            } else if (x === Class270.member3149) {
                I = r;
                ao(x);
                return;
            } else if (x === Class270.member3200) {
                a3 = x;
                I = a4;
            } else if (x === Class270.member3150) {
                if (al === ag) {
                    if (aB.member8233() === Class453.member7202) {
                        aB.member8236(Class453.member7203);
                    }
                    I = A;
                } else {
                    I = O;
                }
            } else if (x === Class270.member3163) {
                n.member10531 = -2;
                I = aq;
            } else if (x === Class270.member3171 && aC < Z - 1) {
                h = 0;
                aC++;
                I = M;
                n.member8254();
                return;
            } else if (x === Class270.member3190) {
                I = be;
                ao(x);
                return;
            } else if (al === a7 && x === Class270.member3197 && aB.member8233() !== Class453.member7201) {
                if (F !== Class270.member3200) {
                    ao(x);
                }
                return;
            } else if (U && !ah && ai != -1 && x === Class270.member3183) {
                ah = true;
                h = 0;
                I = M;
                n.member8254();
                return;
            } else {
                I = aD;
                ao(x);
                n.member8254();
                aN();
                return;
            }
        }
        if (I === m) {
            n.member8271();
            var bv = n.member8260(Class236.member2823);
            n.member8261(bv);
            n.member8279();
            I = a9;
            return;
        }
        if (I === aG) {
            if (n.member8281() < 1) {
                return;
            }
            var bE = n.member8282(1);
            var bo = bE.member609();
            ap = bo * Class299.member3571;
            I = aD;
            ao(Class270.member3169);
            n.member8254();
            aN();
            return;
        }
        if (I === be) {
            if (n.member8281() < 2) {
                return;
            }
            var bE = n.member8282(2);
            au = bE.member608();
            if (false) {
            }
            I = a9;
            return;
        }
        if (I === aT) {
            if (n.member8281() < 4) {
                return;
            }
            var bE = n.member8282(4);
            ar = bE.member1073();
            bE.member607(0);
            I = aD;
            ao(Class270.member3201);
            n.member8254();
            aN();
            return;
        }
        if (I === av) {
            if (a3 === Class270.member3177) {
                if (n.member8281() < 1) {
                    return;
                }
                var bE = n.member8282(1);
                o = bE.member609();
            } else if (a3 === Class270.member3193) {
                if (n.member8281() < 3) {
                    return;
                }
                var bE = n.member8282(3);
                o = bE.member609();
                b = bE.member608();
            } else if (false) {
            } else {
                throw new Error();
            }
            I = aD;
            ao(a3);
            n.member8254();
            aN();
            if (aB.member8233() === Class453.member7199) {
                aB.member8234.member9722(true);
                R = a3;
            }
            return;
        }
        if (I === a4) {
            if (n.member8281() < 2) {
                return;
            }
            var bE = n.member8282(2);
            aA = bE.member608();
            I = B;
            return;
        }
        if (I === B) {
            if (n.member8281() < aA) {
                return;
            }
            var bE = n.member8282(aA);
            var bq = bE.member1091(aA);
            try {
                window.openjs(bq);
            } catch (bX) {
            }
            ao(a3);
            if (al === a7 && aB.member8233() !== Class453.member7201) {
                I = a9;
            } else {
                I = aD;
                n.member8254();
                aN();
            }
            return;
        }
        if (I === A) {
            if (n.member8281() < 2) {
                return;
            }
            var bE = n.member8282(2);
            n.member10531 = bE.member608();
            I = aE;
        }
        if (I === aE) {
            if (n.member8281() < n.member10531) {
                return;
            }
            var bE = n.member8282(n.member10531);
            L = Class124(n.member10531);
            bE.member1092(L.getData(), 0, n.member10531);
            I = k;
        }
        if (I === k) {
            L.member607(0);
            var bV = L.member609() === 1;
            var bQ = aB.member2970.member10424();
            var bN = aB.member6116.member9766().member10421();
            while (L.member1047() < L.getSize()) {
                var bI = bQ.member3026(L);
                if (bI === member47) {
                    return;
                }
                var bh = bQ.list(bI.id);
                bN.member2945(bh, bI.value);
            }
            L = undefined;
            if (bV) {
                var bv = Class504.member8229(Class236.member2823.member2818, Class236.member2823.member2819, undefined);
                n.member8261(bv);
                n.member8279();
                I = aR;
            } else {
                I = A;
                return;
            }
        }
        if (I === aR) {
            if (n.member8281() < 1) {
                return;
            }
            var bE = n.member8282(1);
            t = bE.member609();
            I = ak;
            if (false) {
            }
        }
        if (false) {
        }
        if (I === ak) {
            if (t === Class270.member3177 || t === Class270.member3193) {
                a3 = t;
                I = av;
            } else if (t !== Class270.member3150) {
                I = aD;
                ao(t);
                n.member8254();
                aN();
                if (aB.member8233() === Class453.member7199) {
                    C(true);
                    R = t;
                }
                return;
            } else {
                I = O;
            }
        }
        if (I === O) {
            if (n.member8281() < 1) {
                return;
            }
            var bE = n.member8282(1);
            ab = bE.member609();
            I = an;
            return;
        }
        if (I === aq) {
            var bE;
            if (n.member10531 === -2) {
                if (n.member8281() < 2) {
                    return;
                }
                bE = n.member8282(2);
                bE.member607(0);
                n.member10531 = bE.member608();
            }
            if (n.member8281() < n.member10531) {
                return;
            }
            bE = n.member8282(n.member10531);
            I = aD;
            ao(Class270.member3163);
            aJ = false;
            aB.member8236(Class453.member7201);
            aB.member7135().member7846(true);
            bE.member607(0);
            aB.member6452.member8460(bE, n.member10531);
            if (bE.member1047() !== n.member10531) {
                if (false) {
                } else {
                    throw new Error();
                }
            }
            if (true) {
                aB.member6101.member9071().member9054(aB);
            } else {
            }
            return;
        }
        if (I === an) {
            if (n.member8281() < ab) {
                return;
            }
            var bE = n.member8282(ab);
            var b1 = Class502({ member7710: aB });
            aB.member8280(b1);
            var bl = Class721({ member7710: aB });
            if (al === ag) {
                aI(bE);
                b1.member8171(bE.member609());
                b1.member8173(bE.member609());
                b1.member8176(bE.member609() === 1);
                b1.member8182(bE.member609() === 1);
                b1.member8184(bE.member609() === 1);
                bl.member10049(bE.member609() === 1);
                b1.member8205(bE.member608());
                b1.member8192(bE.member609() === 1);
                b1.member8178(bE.member1072());
                bl.member10051(bE.member609() === 1);
                aB.clientParameters.member8502.value = bE.member1089();
                b1.member8220(bE.member1076() - Date.now());
            } else {
                aI(bE);
                b1.member8171(bE.member609());
                b1.member8173(bE.member609());
                b1.member8176(bE.member609() === 1);
                b1.member8178(bE.member1072());
                b1.member8218(bE.member1070());
                b1.member8182(bE.member609() === 1);
                b1.member8184(bE.member609() === 1);
                var bK = bE.member1077();
                b1.member8196(bK);
                b1.member8220(bK - Date.now() - bE.member1075());
                var bO = bE.member609();
                b1.member8192((bO & 1) != 0);
                b1.member8194((bO & 2) != 0);
                b1.member8202(bE.member1073());
                b1.member8204(bE.member1073());
                b1.member8186(bE.member608());
                b1.member8188(bE.member608());
                b1.member8209(bE.member608());
                b1.member8210(bE.member1073());
                b1.member8190(bE.member609());
                b1.member8198(bE.member608());
                b1.member8200(bE.member608());
                b1.member8180(bE.member609() === 1);
                b1.member3010(bE.member1089(true));
                b1.member8216(bE.member609());
                b1.member8214(bE.member1073());
                var bL = bE.member608();
                if (bL === 65535) {
                    bL = -1;
                }
                var bA = bE.member1089(true);
                var bP = bE.member608();
                var bY = bE.member608();
                var bG = aB.clientParameters.member8025.value;
                var bH = Class723({
                    member8439: bL,
                    member10059: bA,
                    member10060: bP,
                    member10061: bY
                });
                aB.member7140.member10097(bH);
                if (bG !== Class315.member3689 && (bG !== Class315.member3693 || b1.member8026() < 2)) {
                    if (aB.member7140.member7227().member2969(aB.member7140.member7141())) {
                        aB.member7140.member9665();
                    }
                }
            }
            aB.member10532(bl);
            if (b1.member8175() && !b1.member8183() || b1.member8191()) {
                try {
                    zap();
                } catch (bX) {
                }
            } else {
                try {
                    unzap();
                } catch (bX) {
                }
            }
            if (aB.clientParameters.member8025.value === Class315.member3696) {
                Class642.member9618(Class642.member9607);
            }
            n.setTimeout(0);
            aw = aB.member6116.member7139();
            aB.member8023.member301();
            aB.member8845.member301();
            aB.member9752.member301();
            aB.member8846.member301();
            if (true) {
                aB.member6101.member9070().member9051(true);
            } else {
            }
            if (al === ag) {
                I = aD;
                ao(Class270.member3150);
                aB.member8236(Class453.member7201);
                return;
            } else {
                I = aD;
                ao(Class270.member3150);
                aB.member8236(Class453.member7199);
                return;
            }
        }
    };
    a8.member487 = aY;
    var s = function () {
        var bh = Class124(518);
        aK = new Array(4);
        aK[0] = Math.floor(Math.random() * 99999999);
        aK[1] = Math.floor(Math.random() * 99999999);
        aK[2] = Math.floor(Math.random() * 99999999);
        aK[3] = Math.floor(Math.random() * 99999999);
        bh.member1051(10);
        bh.member1056(aK[0]);
        bh.member1056(aK[1]);
        bh.member1056(aK[2]);
        bh.member1056(aK[3]);
        return bh;
    };
    var aZ = function () {
        var bh = s();
        var bj;
        if (ai !== -1) {
            bj = ai;
        } else if (aM.member1058 === -1) {
            bj = Class317.member3717(bb);
        } else {
            bj = aM.member1058;
        }
        a6 = bj;
        aa(bh, bj);
        bh.member1065(aP);
        bh.member1057(aF);
        bh.member1057(D);
        bh.member1101(Class500.member8047, Class500.member8048);
        return bh;
    };
    var aa = function (bh, bl) {
        var bo;
        var bj = Class66.member432('totp');
        if (d !== undefined && d.length === 6) {
            if (aj) {
                bo = Class528.member8481;
            } else {
                bo = Class528.member8483;
            }
        } else if (localStorage[bj + '' + bl] !== undefined) {
            bo = Class528.member8480;
        } else {
            bo = Class528.member8482;
        }
        bh.member1051(bo);
        switch (bo) {
        case Class528.member8480:
            var bm = parseInt(localStorage[bj + '' + bl]);
            bh.member1056(bm);
            break;
        case Class528.member8481:
        case Class528.member8483:
            bh.member1055(parseInt(d));
            bh.member607(bh.member1047() + 1);
            break;
        case Class528.member8482:
            bh.member607(bh.member1047() + 4);
            break;
        }
    };
    var aI = function (bo) {
        var bh = bo.member609() === 1;
        if (bh) {
            var bm = 0;
            var bj = new ArrayBuffer(4);
            bo.member1093(bj, 0, 4);
            bo.member607(bo.member1047() - 4);
            bo.member1067(bj, 0, 4);
            bo.member607(bo.member1047() - 4);
            var bm = bo.member1074();
            var bl = Class66.member432('totp');
            localStorage[bl + '' + a6] = bm;
        }
    };
    var aL = function () {
        var bh = true;
        if (true) {
            if (aB.member995.member1439(Class95.member805) === member47) {
                bh = false;
            }
            if (aB.member995.member1439(Class95.member806) === member47) {
                bh = false;
            }
        } else {
        }
        if (aB.member995.member1439(Class95.member807) === member47) {
            bh = false;
        }
        if (true) {
            if (aB.member995.member1439(Class95.member808) === member47) {
                bh = false;
            }
            if (aB.member995.member1439(Class95.member809) === member47) {
                bh = false;
            }
            if (aB.member995.member1439(Class95.member810) === member47) {
                bh = false;
            }
            if (aB.member995.member1439(Class95.member811) === member47) {
                bh = false;
            }
            if (aB.member995.member1439(Class95.member837) === member47) {
                bh = false;
            }
            if (aB.member995.member1439(Class95.member838) === member47) {
                bh = false;
            }
            if (aB.member995.member1439(Class95.member839) === member47) {
                bh = false;
            }
        } else {
        }
        if (aB.member995.member1439(Class95.member813) === member47) {
            bh = false;
        }
        if (true) {
            if (aB.member995.member1439(Class95.member814) === member47) {
                bh = false;
            }
        } else {
        }
        if (aB.member995.member1439(Class95.member816) === member47) {
            bh = false;
        }
        if (aB.member995.member1439(Class95.member817) === member47) {
            bh = false;
        }
        if (aB.member995.member1439(Class95.member818) === member47) {
            bh = false;
        }
        if (aB.member995.member1439(Class95.member819) === member47) {
            bh = false;
        }
        if (aB.member995.member1439(Class95.member820) === member47) {
            bh = false;
        }
        if (aB.member995.member1439(Class95.member821) === member47) {
            bh = false;
        }
        if (aB.member995.member1439(Class95.member822) === member47) {
            bh = false;
        }
        if (true) {
            if (aB.member995.member1439(Class95.member823) === member47) {
                bh = false;
            }
            if (aB.member995.member1439(Class95.member826) === member47) {
                bh = false;
            }
            if (aB.member995.member1439(Class95.member827) === member47) {
                bh = false;
            }
        } else {
        }
        if (aB.member995.member1439(Class95.member828) === member47) {
            bh = false;
        }
        if (true) {
            if (aB.member995.member1439(Class95.member829) === member47) {
                bh = false;
            }
        } else {
        }
        return bh;
    };
    var e = function (bh) {
        bh.member1056(true ? aB.member995.member1439(Class95.member805).member3897() : {});
        bh.member1056(true ? aB.member995.member1439(Class95.member806).member3897() : {});
        bh.member1056(aB.member995.member1439(Class95.member807).member3897());
        bh.member1056(true ? aB.member995.member1439(Class95.member808).member3897() : {});
        bh.member1056(true ? aB.member995.member1439(Class95.member809).member3897() : {});
        bh.member1056(true ? aB.member995.member1439(Class95.member810).member3897() : {});
        bh.member1056(true ? aB.member995.member1439(Class95.member811).member3897() : {});
        bh.member1056(0);
        bh.member1056(aB.member995.member1439(Class95.member813).member3897());
        bh.member1056(true ? aB.member995.member1439(Class95.member814).member3897() : {});
        bh.member1056(0);
        bh.member1056(aB.member995.member1439(Class95.member816).member3897());
        bh.member1056(aB.member995.member1439(Class95.member817).member3897());
        bh.member1056(aB.member995.member1439(Class95.member818).member3897());
        bh.member1056(aB.member995.member1439(Class95.member819).member3897());
        bh.member1056(aB.member995.member1439(Class95.member820).member3897());
        bh.member1056(aB.member995.member1439(Class95.member821).member3897());
        bh.member1056(aB.member995.member1439(Class95.member822).member3897());
        bh.member1056(true ? aB.member995.member1439(Class95.member823).member3897() : {});
        bh.member1056(0);
        bh.member1056(0);
        bh.member1056(true ? aB.member995.member1439(Class95.member826).member3897() : {});
        bh.member1056(true ? aB.member995.member1439(Class95.member827).member3897() : {});
        bh.member1056(aB.member995.member1439(Class95.member828).member3897());
        bh.member1056(true ? aB.member995.member1439(Class95.member829).member3897() : {});
        bh.member1056(0);
        bh.member1056(0);
        bh.member1056(0);
        bh.member1056(0);
        bh.member1056(0);
        bh.member1056(0);
        bh.member1056(0);
        bh.member1056(true ? aB.member995.member1439(Class95.member837).member3897() : {});
        bh.member1056(true ? aB.member995.member1439(Class95.member838).member3897() : {});
        bh.member1056(true ? aB.member995.member1439(Class95.member839).member3897() : {});
        bh.member1056(0);
        bh.member1056(0);
        bh.member1056(0);
    };
    return a8;
}();