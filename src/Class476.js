import { Class469 } from 'Class469.js';
import { Js5ConfigGroup } from 'Class131.js';
import { Class421 } from 'Class421.js';
import { Class471 } from 'Class471.js';
import { Class438 } from 'Class438.js';
import { Class439 } from 'Class439.js';
import { Class461 } from 'Class461.js';
import { Class444 } from 'Class444.js';
import { Class440 } from 'Class440.js';
import { Class302 } from 'Class302.js';
import { Class423 } from 'Class423.js';
import { Class475 } from 'Class475.js';
import { Class41 } from 'Class41.js';
export var Class476 = function () {
    var bC = {};
    var aF;
    var aj;
    var bv;
    var aD;
    var bj;
    var r;
    var aX = new Float32Array(3);
    var bt;
    var bq;
    var bl;
    var aB = function (bE, bF) {
        aF = bE;
        aj = aF.member2970;
        bv = bF;
        aD = aF.member7619;
        bj = aF.delayedStateChange;
        r = aF.member7137;
        bt = Class469.member7436;
        bq = Class469.member7441;
        bl = Class469.member7443;
    };
    bC.member25 = aB;
    var x = function (bJ, bH, bE) {
        bE.member6099 -= 2;
        var bI = bE.member6100[bE.member6099];
        var bF = bE.member6100[bE.member6099 + 1];
        var bG = aj.getConfigType(Js5ConfigGroup.PARAMTYPE.member1204, bI);
        if (bG === NULL) {
            bE.member6099 += 2;
            return true;
        }
        if (bF !== bG.member6145()) {
            bJ.member6802(bI, bF);
        } else {
            bJ.member6803(bI);
        }
    };
    Class421.member5083.member867 = function (bE) {
        return bq(bE, x);
    };
    Class421.member4962.member867 = function (bE) {
        return bt(bE, x);
    };
    Class421.member4967.member867 = function (bE) {
        return bt(bE, x);
    };
    var aN = function (bJ, bH, bE) {
        var bI = bE.member6100[--bE.member6099];
        var bF = bE.member6142[--bE.member6143];
        var bG = aj.getConfigType(Js5ConfigGroup.PARAMTYPE.member1204, bI);
        if (bG === NULL) {
            bE.member6099++;
            bE.member6143++;
            return true;
        }
        if (bF !== bG.member6144()) {
            bJ.member6802(bI, bF);
        } else {
            bJ.member6803(bI);
        }
    };
    Class421.member5084.member867 = function (bE) {
        return bq(bE, aN);
    };
    Class421.member4963.member867 = function (bE) {
        return bt(bE, aN);
    };
    var K = function (bJ, bI, bG) {
        bG.member6099 -= 3;
        var bF = bG.member6100[bG.member6099];
        var bH = bG.member6100[bG.member6099 + 1];
        var bE = bG.member6100[bG.member6099 + 2];
        if (bF < 0 || bF >= Class471.MAX_RECOLS) {
            return;
        }
        bJ.member7517(bF, bH, bE);
        if (bJ.member6722() === -1 && !bI.member7621()) {
            bj.member7622(false, bJ.member6721());
        }
    };
    Class421.member5085.member867 = function (bE) {
        return bq(bE, K);
    };
    Class421.member4964.member867 = function (bE) {
        return bt(bE, K);
    };
    var L = function (bJ, bH, bG) {
        bG.member6099 -= 3;
        var bF = bG.member6100[bG.member6099];
        var bI = bG.member6100[bG.member6099 + 1];
        var bE = bG.member6100[bG.member6099 + 2];
        if (bF < 0 || bF >= Class471.MAX_RETEXS) {
            return;
        }
        bJ.member7518(bF, bI, bE);
        if (bJ.member6722() === -1 && !bH.member7621()) {
            bj.member7623(false, bJ.member6721(), bF);
        }
    };
    Class421.member5086.member867 = function (bE) {
        return bq(bE, L);
    };
    Class421.member4965.member867 = function (bE) {
        return bt(bE, L);
    };
    var o = function (bG, bF, bE) {
        bG.member7624(bE.member6100[--bE.member6099] === 1);
        if (bG.member6722() === -1 && !bF.member7621()) {
            bj.member7625(false, bG.member6721());
        }
    };
    Class421.member5087.member867 = function (bE) {
        return bq(bE, o);
    };
    Class421.member4966.member867 = function (bE) {
        return bt(bE, o);
    };
    Class421.member5438.member867 = function (bE) {
        var bF = bE.member7433 ? bE.member7434 : bE.member7435;
        var bI = bF.member7105();
        var bG = bE.member6100[--bE.member6099];
        var bH = aj.getConfigType(Js5ConfigGroup.PARAMTYPE.member1204, bG);
        if (bH === NULL) {
            bE.member6099++;
            return true;
        }
        if (bH.member6141()) {
            bE.member6142[bE.member6143++] = bI.getParam(bG, bH.member6144());
        } else {
            bE.member6100[bE.member6099++] = bI.getParam(bG, bH.member6145());
        }
    };
    var be = function (bI, bH, bG) {
        bG.member6099 -= 4;
        bI.member6737(bG.member6100[bG.member6099]);
        bI.member6739(bG.member6100[bG.member6099 + 1]);
        var bF = bG.member6100[bG.member6099 + 2];
        if (bF < 0) {
            bF = 0;
        } else if (bF > 5) {
            bF = 5;
        }
        var bE = bG.member6100[bG.member6099 + 3];
        if (bE < 0) {
            bE = 0;
        } else if (bE > 5) {
            bE = 5;
        }
        bI.member6729(bF);
        bI.member6731(bE);
        aD.member7626(bI, bH);
        if (bI.member2794() === Class438.member6632) {
            aD.member7627(bI, false);
        }
        if (bI.member6722() === -1 && !bH.member7621()) {
            bj.member7628(false, bI.member6721());
        }
    };
    Class421.member5048.member867 = function (bE) {
        return bq(bE, be);
    };
    Class421.member4927.member867 = function (bE) {
        return bt(bE, be);
    };
    var ag = function (bG, bF, bE) {
        bE.member6100[bE.member6099++] = bG.member6748();
    };
    Class421.member5452.member867 = function (bE) {
        return bq(bE, ag);
    };
    Class421.member5417.member867 = function (bE) {
        return bt(bE, ag);
    };
    var ae = function (bG, bF, bE) {
        bE.member6100[bE.member6099++] = bG.member6750();
    };
    Class421.member5453.member867 = function (bE) {
        return bq(bE, ae);
    };
    Class421.member5418.member867 = function (bE) {
        return bt(bE, ae);
    };
    var aA = function (bI, bH, bG) {
        bG.member6099 -= 4;
        bI.member6741(bG.member6100[bG.member6099]);
        bI.member6743(bG.member6100[bG.member6099 + 1]);
        if (bI.member2794() === Class438.MODEL) {
            bI.member7511(0);
            bI.member7513(0);
        }
        var bF = bG.member6100[bG.member6099 + 2];
        if (bF < 0) {
            bF = 0;
        } else if (bF > 4) {
            bF = 4;
        }
        var bE = bG.member6100[bG.member6099 + 3];
        if (bE < 0) {
            bE = 0;
        } else if (bE > 4) {
            bE = 4;
        }
        bI.member6733(bF);
        bI.member6735(bE);
        aD.member7626(bI, bH);
        if (bI.member2794() === Class438.member6632) {
            aD.member7627(bI, false);
        }
    };
    Class421.member5049.member867 = function (bE) {
        return bq(bE, aA);
    };
    Class421.member4928.member867 = function (bE) {
        return bt(bE, aA);
    };
    var e = function (bG, bF, bE) {
        bE.member6100[bE.member6099++] = bG.member6752();
    };
    Class421.member5454.member867 = function (bE) {
        return bq(bE, e);
    };
    Class421.member5419.member867 = function (bE) {
        return bt(bE, e);
    };
    var a5 = function (bG, bF, bE) {
        bE.member6100[bE.member6099++] = bG.member6754();
    };
    Class421.member5455.member867 = function (bE) {
        return bq(bE, a5);
    };
    Class421.member5420.member867 = function (bE) {
        return bt(bE, a5);
    };
    var a7 = function (bH, bG, bF) {
        var bE = bF.member6100[--bF.member6099] === 1;
        bH.member6756(bE);
        if (bH.member6722() === -1 && !bG.member7621()) {
            bj.member7629(false, bH.member6721());
        }
    };
    Class421.member5050.member867 = function (bE) {
        return bq(bE, a7);
    };
    Class421.member4929.member867 = function (bE) {
        return bt(bE, a7);
    };
    var bD = function (bG, bF, bE) {
        bE.member6100[bE.member6099++] = bG.member4159() ? 1 : 0;
    };
    Class421.member5456.member867 = function (bE) {
        return bq(bE, bD);
    };
    Class421.member5421.member867 = function (bE) {
        return bt(bE, bD);
    };
    var aI = function (bH, bG, bF) {
        var bE = bF.member6100[--bF.member6099];
        bH.member4647(bE);
        if (bH.member6722() === -1 && !bG.member7621()) {
            bj.member7630(false, bH.member6721());
        }
    };
    Class421.member5054.member867 = function (bE) {
        return bq(bE, aI);
    };
    Class421.member4933.member867 = function (bE) {
        return bt(bE, aI);
    };
    var Z = function (bG, bF, bE) {
        bG.member6766(255 - bE.member6100[--bE.member6099]);
    };
    Class421.member5056.member867 = function (bE) {
        return bq(bE, Z);
    };
    Class421.member4935.member867 = function (bE) {
        return bt(bE, Z);
    };
    var a6 = function (bG, bF, bE) {
        bE.member6100[bE.member6099++] = 255 - bG.member6765();
    };
    Class421.member5469.member867 = function (bE) {
        return bq(bE, a6);
    };
    Class421.member5434.member867 = function (bE) {
        return bt(bE, a6);
    };
    var S = function (bH, bG, bF) {
        var bE = bF.member6100[--bF.member6099] - 1;
        if (bE < 0 || bE > 9) {
            bF.member6143--;
            return;
        }
        bH.member6773(bE, bF.member6142[--bF.member6143]);
    };
    Class421.member5105.member867 = function (bE) {
        return bq(bE, S);
    };
    Class421.member4985.member867 = function (bE) {
        return bt(bE, S);
    };
    Class421.member5485.member867 = function (bF) {
        var bH = bl(bF);
        if (bH === null) {
            return true;
        }
        var bG = bF.member6100[--bF.member6099] - 1;
        var bE = bH.member6772(bG);
        if (bE === null) {
            bE = '';
        }
        bF.member6142[bF.member6143++] = bE;
    };
    Class421.member5448.member867 = function (bF) {
        var bG = bF.member7433 ? bF.member7434 : bF.member7435;
        var bH = bF.member6100[--bF.member6099] - 1;
        var bE = bG.member7105().member6772(bH);
        if (bE === null) {
            bE = '';
        }
        bF.member6142[bF.member6143++] = bE;
    };
    var a0 = function (bG, bF, bE) {
        bG.member6771(bE.member6142[--bE.member6143]);
    };
    Class421.member5110.member867 = function (bE) {
        return bq(bE, a0);
    };
    Class421.member4990.member867 = function (bE) {
        return bt(bE, a0);
    };
    var y = function (bG, bF, bE) {
        if (bG.member6770() === null) {
            bE.member6142[bE.member6143++] = '';
        } else {
            bE.member6142[bE.member6143++] = bG.member6770();
        }
    };
    Class421.member5486.member867 = function (bE) {
        return bq(bE, y);
    };
    Class421.member5449.member867 = function (bE) {
        return bt(bE, y);
    };
    var br = function (bK, bG, bH, bI) {
        var bJ = bK.member6768();
        if (bJ === undefined) {
            if (bH > 0) {
                bJ = Class439();
                bK.member6769(bJ);
            } else {
                return;
            }
        }
        var bF = bJ.member6655();
        bF[bG] = bH;
        if (bH > 0) {
            bJ.member6657(true);
        } else {
            bJ.member6657(false);
            for (var bE = 0; bE < bF.length; bE++) {
                if (bF[bE] !== undefined) {
                    bJ.member6657(true);
                    break;
                }
            }
        }
    };
    var af = function (bI, bH, bG) {
        bG.member6099 -= 2;
        var bE = bG.member6100[bG.member6099] - 1;
        var bF = bG.member6100[bG.member6099 + 1];
        if (bE < 0 || bE > 9) {
            throw new Error('1112 ' + (bE + 1));
        }
        br(bI, bE, bF, bG);
    };
    Class421.member5117.member867 = function (bE) {
        return bq(bE, af);
    };
    Class421.member4997.member867 = function (bE) {
        return bt(bE, af);
    };
    var aW = function (bI, bH, bG) {
        var bE = 10;
        var bF = bG.member6100[--bG.member6099];
        br(bI, bE, bF, bG);
    };
    Class421.member5118.member867 = function (bE) {
        return bq(bE, aW);
    };
    Class421.member4998.member867 = function (bE) {
        return bt(bE, aW);
    };
    var al = function (bL, bG, bM, bE, bF) {
        var bJ = bL.member6768();
        if (bJ === undefined) {
            if (bM !== undefined) {
                bJ = Class439();
                bL.member6769(bJ);
            } else {
                return;
            }
        }
        var bH = bJ.member6647();
        var bI = bJ.member6649();
        bH[bG] = bM;
        bI[bG] = bE;
        if (bM !== undefined) {
            bJ.member6646(true);
        } else {
            bJ.member6646(false);
            for (var bK = 0; bK < bH.length; bK++) {
                if (bH[bK] !== undefined) {
                    bJ.member6646(true);
                    break;
                }
            }
        }
    };
    var aa = function (bI, bH, bG, bF) {
        var bE = bF.member6100[--bF.member6099] - 1;
        if (bE < 0 || bE > 9) {
            throw new Error('1113 ' + (bE + 1));
        }
        al(bI, bE, bH, bG, bF);
    };
    Class421.member5119.member867 = function (bF) {
        bF.member6099 -= 3;
        var bH = [bF.member6100[bF.member6099]];
        var bE = [bF.member6100[bF.member6099 + 1]];
        var bG = bF.member6100[bF.member6099 + 2];
        var bI = bv.member7438(bG);
        if (bI === null) {
            bF.member6099 += 3;
            return true;
        }
        aa(bI, bH, bE, bF);
    };
    Class421.member4999.member867 = function (bG) {
        var bI = bG.member7433 ? bG.member7434 : bG.member7435;
        var bJ = bI.member7105();
        bG.member6099 -= 10;
        var bH = undefined;
        var bF = undefined;
        var bE;
        for (bE = 0; bE < 10; bE += 2) {
            if (bG.member6100[bG.member6099 + bE] < 0) {
                break;
            }
        }
        if (bE > 0) {
            bH = new Array(bE / 2);
            bF = new Array(bE / 2);
            for (bE -= 2; bE >= 0; bE -= 2) {
                bH[bE / 2] = bG.member6100[bG.member6099 + bE];
                bF[bE / 2] = bG.member6100[bG.member6099 + bE + 1];
            }
        }
        aa(bJ, bH, bF, bG);
    };
    var m = function (bJ, bI, bG) {
        bG.member6099 -= 2;
        var bE = 10;
        var bH = [bG.member6100[bG.member6099]];
        var bF = [bG.member6100[bG.member6099 + 1]];
        al(bJ, bE, bH, bF, bG);
    };
    Class421.member5000.member867 = function (bE) {
        return bt(bE, m);
    };
    Class421.member5120.member867 = function (bE) {
        return bq(bE, m);
    };
    var ac = function (bL, bF, bG, bI, bH) {
        var bK = bL.member6768();
        if (bK === undefined) {
            throw new Error('1114 ');
        }
        var bE = bK.member6651();
        var bJ = bK.member6654();
        bE[bF] = bG;
        bJ[bF] = bI;
    };
    var D = function (bJ, bI, bH) {
        bH.member6099 -= 3;
        var bE = bH.member6100[bH.member6099] - 1;
        var bF = bH.member6100[bH.member6099 + 1];
        var bG = bH.member6100[bH.member6099 + 2];
        if (bE < 0 || bE > 9) {
            throw new Error('1115 ' + (bE + 1));
        }
        ac(bJ, bE, bF, bG, bH);
    };
    Class421.member5121.member867 = function (bE) {
        return bq(bE, D);
    };
    Class421.member5001.member867 = function (bE) {
        return bt(bE, D);
    };
    var a8 = function (bJ, bI, bH) {
        var bE = 10;
        var bF = bH.member6100[--bH.member6099];
        var bG = bH.member6100[--bH.member6099];
        ac(bJ, bE, bF, bG, bH);
    };
    Class421.member5002.member867 = function (bE) {
        return bt(bE, a8);
    };
    Class421.member5122.member867 = function (bE) {
        return bq(bE, a8);
    };
    var J = function (bI, bE, bG) {
        var bH = bI.member6768();
        if (bH === undefined) {
            throw new Error('1116 ');
        }
        var bF = bH.member6652();
        if (bF === null) {
            bF = new Int32Array(bH.member6647().length);
        }
        bF[bE] = 2147483647;
        bH.member6653(bF);
    };
    var aC = function (bH, bG, bF) {
        bF.member6099 -= 1;
        var bE = bF.member6100[bF.member6099] - 1;
        if (bE < 0 || bE > 9) {
            throw new Error('1117 ' + (bE + 1));
        }
        J(bH, bE, bF);
    };
    Class421.member5123.member867 = function (bE) {
        return bq(bE, aC);
    };
    Class421.member5003.member867 = function (bE) {
        return bt(bE, aC);
    };
    var aY = function (bH, bG, bF) {
        var bE = 10;
        J(bH, bE, bF);
    };
    Class421.member5004.member867 = function (bE) {
        return bt(bE, aY);
    };
    Class421.member5124.member867 = function (bE) {
        return bq(bE, aY);
    };
    var t = function (bG, bF, bE) {
        bG.member6774();
    };
    Class421.member5112.member867 = function (bE) {
        return bq(bE, t);
    };
    Class421.member4992.member867 = function (bE) {
        return bt(bE, t);
    };
    var Y = function (bG, bF, bE) {
        bG.member6764(bE.member6100[--bE.member6099] === 1);
    };
    Class421.member5052.member867 = function (bE) {
        return bq(bE, Y);
    };
    Class421.member4931.member867 = function (bE) {
        return bt(bE, Y);
    };
    var aG = function (bI, bG, bF) {
        var bH = bF.member6100[--bF.member6099];
        var bE = bF.member6100[--bF.member6099];
        if (bE >= 1 && bE <= 10) {
            bI.member6778(bE - 1, bH);
        }
    };
    Class421.member5114.member867 = function (bE) {
        return bq(bE, aG);
    };
    Class421.member4994.member867 = function (bE) {
        return bt(bE, aG);
    };
    var h = function (bG, bF, bE) {
        bG.member6776(bE.member6142[--bE.member6143]);
    };
    Class421.member5115.member867 = function (bE) {
        return bq(bE, h);
    };
    Class421.member4995.member867 = function (bE) {
        return bt(bE, h);
    };
    var ao = function (bL, bK, bG, bJ, bI) {
        bI.member6099 -= 2;
        var bH = bI.member6100[bI.member6099];
        var bE = bI.member6100[bI.member6099 + 1];
        if (bL.member6722() === -1 && !bK.member7621()) {
            bj.member7631(false, bL.member6721());
            bj.member7632(false, bL.member6721());
            bj.member7633(false, bL.member6721());
        }
        if (bH === -1) {
            if (bL.member2794() === Class438.MODEL) {
                bL.member7497(Class461.MODEL);
                bL.member7500(-1);
            }
            bL.member7043(-1);
            return;
        }
        var bF = aj.getConfigType(Js5ConfigGroup.OBJTYPE.member1204, bH);
        if (bF === NULL) {
            bI.member6099 += 2;
            return true;
        }
        bL.member7043(bH);
        bL.member7045(bE);
        if (bL.member2794() === Class438.MODEL) {
            bL.member7049(bG);
            bL.member7504(bF.get2dAngle());
            bL.member7533(bF.get2dOffset());
            bL.member7507(bF.getDescription());
            if (bL.member7510() > 0) {
                bL.member7507(bL.member7506() * 32 / bL.member7510());
            } else if (bL.member6740() > 0) {
                bL.member7507(bL.member7506() * 32 / bL.member6740());
            }
        } else if (bL.member2794() === Class438.member6635) {
            bL.member7049(bG);
            bL.member7046(bJ);
        }
    };
    var b = function (bG, bF, bE) {
        return ao(bG, bF, false, Class444.member7001, bE);
    };
    Class421.member5089.member867 = function (bE) {
        return bq(bE, b);
    };
    Class421.member4969.member867 = function (bE) {
        return bt(bE, b);
    };
    var aL = function (bG, bF, bE) {
        return ao(bG, bF, false, Class444.member6999, bE);
    };
    Class421.member5094.member867 = function (bE) {
        return bq(bE, aL);
    };
    Class421.member4974.member867 = function (bE) {
        return bt(bE, aL);
    };
    var u = function (bG, bF, bE) {
        return ao(bG, bF, false, Class444.member7000, bE);
    };
    Class421.member5103.member867 = function (bE) {
        return bq(bE, u);
    };
    Class421.member4983.member867 = function (bE) {
        return bt(bE, u);
    };
    var aw = function (bG, bF, bE) {
        return ao(bG, bF, true, Class444.member7001, bE);
    };
    Class421.member5100.member867 = function (bE) {
        return bq(bE, aw);
    };
    Class421.member4980.member867 = function (bE) {
        return bt(bE, aw);
    };
    var O = function (bG, bF, bE) {
        return ao(bG, bF, true, Class444.member6999, bE);
    };
    Class421.member5101.member867 = function (bE) {
        return bq(bE, O);
    };
    Class421.member4981.member867 = function (bE) {
        return bt(bE, O);
    };
    var i = function (bG, bF, bE) {
        return ao(bG, bF, true, Class444.member7000, bE);
    };
    Class421.member5104.member867 = function (bE) {
        return bq(bE, i);
    };
    Class421.member4984.member867 = function (bE) {
        return bt(bE, i);
    };
    var I = function (bJ, bI, bG) {
        bG.member6099 -= 2;
        var bH = bG.member6100[bG.member6099];
        var bF = bG.member6100[bG.member6099 + 1];
        if (bH === -1 && bF === -1) {
            bJ.member6782(null);
        } else if (bF !== -1) {
            var bE = bv.member7634(bH, bF);
            if (bE === null) {
                bG.member6099 += 2;
                return true;
            } else {
                bJ.member6782(bE);
            }
        } else {
            var bE = bv.member7438(bH);
            if (bE === null) {
                bG.member6099 += 2;
                return true;
            } else {
                bJ.member6782(bE);
            }
        }
    };
    Class421.member5106.member867 = function (bE) {
        return bq(bE, I);
    };
    Class421.member4986.member867 = function (bE) {
        return bt(bE, I);
    };
    var bx = function (bH, bG, bF) {
        var bE = bF.member6100[--bF.member6099];
        if (bE !== Class440.member6658 && bE !== Class440.member6659 && bE !== Class440.member6660 && bE !== Class440.member6661) {
            return;
        }
        bH.member6788(bE);
    };
    Class421.member5107.member867 = function (bE) {
        return bq(bE, bx);
    };
    Class421.member4987.member867 = function (bE) {
        return bt(bE, bx);
    };
    var R = function (bG, bF, bE) {
        bG.member6784(bE.member6100[--bE.member6099]);
    };
    Class421.member5108.member867 = function (bE) {
        return bq(bE, R);
    };
    Class421.member4988.member867 = function (bE) {
        return bt(bE, R);
    };
    var ax = function (bG, bF, bE) {
        bG.member6786(bE.member6100[--bE.member6099]);
    };
    Class421.member5109.member867 = function (bE) {
        return bq(bE, ax);
    };
    Class421.member4989.member867 = function (bE) {
        return bt(bE, ax);
    };
    var z = function (bI, bG, bF) {
        bF.member6099 -= 2;
        var bE = bF.member6100[bF.member6099];
        var bH = bF.member6100[bF.member6099 + 1];
        aD.member7635(bI, bE, bH, bG);
    };
    Class421.member5185.member867 = function (bE) {
        return bq(bE, z);
    };
    Class421.member5186.member867 = function (bE) {
        return bt(bE, z);
    };
    var aZ = function (bG, bF, bE) {
        bG.member6762(bE.member6100[--bE.member6099]);
        bG.member6760(bE.member6100[--bE.member6099]);
    };
    Class421.member5113.member867 = function (bE) {
        return bq(bE, aZ);
    };
    Class421.member4993.member867 = function (bE) {
        return bt(bE, aZ);
    };
    var k = function (bG, bF, bE) {
        bG.member6780(bE.member6100[--bE.member6099]);
    };
    Class421.member5116.member867 = function (bE) {
        return bq(bE, k);
    };
    Class421.member4996.member867 = function (bE) {
        return bt(bE, k);
    };
    Class421.member5484.member867 = function (bE) {
        var bF = bl(bE);
        if (bF === null) {
            return true;
        } else {
            bE.member6100[bE.member6099++] = aD.member6767(bF).member6669();
        }
    };
    Class421.member5447.member867 = function (bE) {
        var bF = bE.member7433 ? bE.member7434 : bE.member7435;
        bE.member6100[bE.member6099++] = aD.member6767(bF.member7105()).member6669();
    };
    var ap = function (bG, bF, bE) {
        bG.member6790(bE.member6142[--bE.member6143]);
    };
    Class421.member5111.member867 = function (bE) {
        return bq(bE, ap);
    };
    Class421.member4991.member867 = function (bE) {
        return bt(bE, ap);
    };
    var av = function (bG, bF, bE) {
        bE.member6099 -= 2;
        bG.member7572(bE.member6100[bE.member6099]);
        bG.member7574(bE.member6100[bE.member6099 + 1]);
        if (bG.member2794() === Class438.member6632) {
            aD.member7627(bG, false);
        }
    };
    Class421.member5077.member867 = function (bE) {
        return bq(bE, av);
    };
    Class421.member4956.member867 = function (bE) {
        return bt(bE, av);
    };
    var a3 = function (bG, bF, bE) {
        bE.member6100[bE.member6099++] = bG.member7571();
    };
    Class421.member5463.member867 = function (bE) {
        return bq(bE, a3);
    };
    Class421.member5428.member867 = function (bE) {
        return bt(bE, a3);
    };
    var aH = function (bG, bF, bE) {
        bE.member6100[bE.member6099++] = bG.member7573();
    };
    Class421.member5464.member867 = function (bE) {
        return bq(bE, aH);
    };
    Class421.member5429.member867 = function (bE) {
        return bt(bE, aH);
    };
    var a9 = function (bG, bF, bE) {
        bE.member6099 -= 2;
        bG.member7569(bE.member6100[bE.member6099]);
        if (bG.member6809() > bG.member7571() - bG.member6752()) {
            bG.member7569(bG.member7571() - bG.member6752());
        }
        if (bG.member6809() < 0) {
            bG.member7569(0);
        }
        bG.member7570(bE.member6100[bE.member6099 + 1]);
        if (bG.member6810() > bG.member7573() - bG.member6754()) {
            bG.member7570(bG.member7573() - bG.member6754());
        }
        if (bG.member6810() < 0) {
            bG.member7570(0);
        }
        if (bG.member6722() === -1 && !bF.member7621()) {
            bj.member7636(false, bG.member6721());
        }
    };
    Class421.member5053.member867 = function (bE) {
        return bq(bE, a9);
    };
    Class421.member4932.member867 = function (bE) {
        return bt(bE, a9);
    };
    var bo = function (bG, bF, bE) {
        bE.member6100[bE.member6099++] = bG.getDamageColour();
    };
    Class421.member5459.member867 = function (bE) {
        return bq(bE, bo);
    };
    Class421.member5424.member867 = function (bE) {
        return bt(bE, bo);
    };
    var Q = function (bG, bF, bE) {
        bE.member6100[bE.member6099++] = bG.member6809();
    };
    Class421.member5460.member867 = function (bE) {
        return bq(bE, Q);
    };
    Class421.member5425.member867 = function (bE) {
        return bt(bE, Q);
    };
    var P = function (bG, bF, bE) {
        bE.member6100[bE.member6099++] = bG.member6810();
    };
    Class421.member5461.member867 = function (bE) {
        return bq(bE, P);
    };
    Class421.member5426.member867 = function (bE) {
        return bt(bE, P);
    };
    Class421.member5886.member867 = function (bE) {
        bE.member6100[bE.member6099++] = aD.member7637();
    };
    Class421.member5388.member867 = function (bG) {
        bG.member6099 -= 2;
        var bE = bG.member6100[bG.member6099];
        var bF = bG.member6100[bG.member6099 + 1];
        var bH = bv.member7105(bE, bF);
        if (bH === NULL) {
            bG.member6099 += 2;
            return true;
        }
        aF.member7638(bH, bE, bF, 1, '');
    };
    Class421.member5389.member867 = function (bF) {
        bF.member6099 -= 2;
        var bG = bF.member6100[bF.member6099];
        var bE = bF.member6100[bF.member6099 + 1];
        var bH = bv.member7105(comID, bE);
        if (bH === NULL) {
            bF.member6099 += 2;
            return true;
        }
        aF.member7638(bH, comID, bE, 2, '');
    };
    Class421.member5390.member867 = function (bF) {
        bF.member6099 -= 2;
        var bG = bF.member6100[bF.member6099];
        var bE = bF.member6100[bF.member6099 + 1];
        var bH = bv.member7105(comID, bE);
        if (bH === NULL) {
            bF.member6099 += 2;
            return true;
        }
        aF.member7638(bH, member6675 * Math.pow(2, 16) | bG, bE, 3, '');
    };
    Class421.member5391.member867 = function (bF) {
        bF.member6099 -= 2;
        var bG = bF.member6100[bF.member6099];
        var bE = bF.member6100[bF.member6099 + 1];
        var bH = bv.member7105(comID, bE);
        if (bH === NULL) {
            bF.member6099 += 2;
            return true;
        }
        aF.member7638(bH, comID, bE, 4, '');
    };
    Class421.member5392.member867 = function (bF) {
        bF.member6099 -= 2;
        var bG = bF.member6100[bF.member6099];
        var bE = bF.member6100[bF.member6099 + 1];
        var bH = bv.member7105(comID, bE);
        if (bH === NULL) {
            bF.member6099 += 2;
            return true;
        }
        aF.member7638(bH, comID, bE, 5, '');
    };
    Class421.member5393.member867 = function (bF) {
        bF.member6099 -= 2;
        var bG = bF.member6100[bF.member6099];
        var bE = bF.member6100[bF.member6099 + 1];
        var bH = bv.member7105(comID, bE);
        if (bH === NULL) {
            bF.member6099 += 2;
            return true;
        }
        aF.member7638(bH, comID, bE, 6, '');
    };
    Class421.member5394.member867 = function (bF) {
        bF.member6099 -= 2;
        var bG = bF.member6100[bF.member6099];
        var bE = bF.member6100[bF.member6099 + 1];
        var bH = bv.member7105(comID, bE);
        if (bH === NULL) {
            bF.member6099 += 2;
            return true;
        }
        aF.member7638(bH, comID, bE, 7, '');
    };
    Class421.member5395.member867 = function (bF) {
        bF.member6099 -= 2;
        var bG = bF.member6100[bF.member6099];
        var bE = bF.member6100[bF.member6099 + 1];
        var bH = bv.member7105(comID, bE);
        if (bH === NULL) {
            bF.member6099 += 2;
            return true;
        }
        aF.member7638(bH, comID, bE, 8, '');
    };
    Class421.member5396.member867 = function (bF) {
        bF.member6099 -= 2;
        var bG = bF.member6100[bF.member6099];
        var bE = bF.member6100[bF.member6099 + 1];
        var bH = bv.member7105(comID, bE);
        if (bH === NULL) {
            bF.member6099 += 2;
            return true;
        }
        aF.member7638(bH, comID, bE, 9, '');
    };
    Class421.member5397.member867 = function (bF) {
        bF.member6099 -= 2;
        var bG = bF.member6100[bF.member6099];
        var bE = bF.member6100[bF.member6099 + 1];
        var bH = bv.member7105(comID, bE);
        if (bH === NULL) {
            bF.member6099 += 2;
            return true;
        }
        aF.member7638(bH, comID, bE, 10, '');
    };
    Class421.member5890.member867 = function (bF) {
        var bG = bF.member6100[--bF.member6099];
        var bE = bv.member7439(bG, false);
        if (bE === NULL) {
            bF.member6099++;
            return true;
        }
        bF.member6100[bF.member6099++] = bE.member7444().length;
    };
    Class421.member5891.member867 = function (bF) {
        bF.member6099 -= 2;
        var bH = bF.member6100[bF.member6099];
        var bG = bF.member6100[bF.member6099 + 1];
        var bE = bv.member7439(bH, false);
        if (bE === NULL) {
            bF.member6099 += 2;
            return true;
        }
        var bI = bE.member7444()[bG].member283();
        if (bI === undefined) {
            bF.member6142[bF.member6143++] = '';
        } else {
            bF.member6142[bF.member6143++] = bI;
        }
    };
    Class421.member5892.member867 = function (bF) {
        bF.member6099 -= 2;
        var bH = bF.member6100[bF.member6099];
        var bG = bF.member6100[bF.member6099 + 1];
        var bE = bv.member7439(bH, false);
        if (bE === NULL) {
            bF.member6099 += 2;
            return true;
        }
        bF.member6100[bF.member6099++] = bE.member7444()[bG].member6727();
    };
    Class421.member5887.member867 = function (bF) {
        var bE = aD.member7639().length;
        if (interfaceManger.member7637() !== -1) {
            bE++;
        }
        bF.member6100[bF.member6099++] = bE;
    };
    Class421.member5888.member867 = function (bG) {
        var bI = bG.member6100[--bG.member6099];
        if (aD.member7637() !== -1) {
            if (bI === 0) {
                bG.member6100[bG.member6099++] = aF.member7637();
                return;
            }
            bI--;
        }
        var bF = aD.member7639();
        var bH;
        for (var bE in bF) {
            bH = bE;
        }
        bG.member6100[bG.member6099++] = bH.member6719();
    };
    Class421.member5889.member867 = function (bF) {
        var bG = bF.member6100[--bF.member6099];
        var bE = bv.member7439(bG, false);
        if (bE === NULL) {
            bF.member6099++;
            return true;
        }
        var bH = bE.getBaseComponent(0).member283();
        if (bH === undefined) {
            bF.member6142[bF.member6143++] = '';
        } else {
            bF.member6142[bF.member6143++] = bH.substring(0, bH.indexOf(':'));
        }
    };
    Class421.member5398.member867 = function (bF) {
        bF.member6099 -= 3;
        var bH = bF.member6100[bF.member6099];
        var bG = bF.member6100[bF.member6099 + 1];
        var bE = bF.member6100[bF.member6099 + 2];
        var bI = bv.member7105(bH * Math.pow(2, 16) | bG, bE);
        if (bI === NULL) {
            bF.member6099 += 3;
            return true;
        }
        aD.member7640();
        interfaceManger.member7641(bI);
    };
    var s = function (bH, bG, bE) {
        var bF = bE.member6100[--bE.member6099];
        bH.member6808(bF);
        if (bH.member6722() === -1 && !bG.member7621()) {
            bj.member7642(false, bH.member6721());
        }
    };
    Class421.member5058.member867 = function (bE) {
        return bq(bE, s);
    };
    Class421.member4937.member867 = function (bE) {
        return bt(bE, s);
    };
    var a1 = function (bG, bF, bE) {
        bE.member6100[bE.member6099++] = bG.member7027();
    };
    Class421.member5472.member867 = function (bE) {
        return bq(bE, a1);
    };
    Class421.member5437.member867 = function (bE) {
        return bt(bE, a1);
    };
    var aM = function (bH, bG, bE) {
        var bF = bE.member6100[--bE.member6099];
        bH.member7035(bF);
    };
    Class421.member5074.member867 = function (bE) {
        return bq(bE, aM);
    };
    Class421.member4953.member867 = function (bE) {
        return bt(bE, aM);
    };
    var bm = function (bG, bF, bE) {
        bG.member7029(bE.member6100[--bE.member6099]);
    };
    Class421.member5059.member867 = function (bE) {
        return bq(bE, bm);
    };
    Class421.member4938.member867 = function (bE) {
        return bt(bE, bm);
    };
    var az = function (bG, bF, bE) {
        bE.member6100[bE.member6099++] = bG.member7028();
    };
    Class421.member5473.member867 = function (bE) {
        return bq(bE, az);
    };
    Class421.member5439.member867 = function (bE) {
        return bt(bE, az);
    };
    var j = function (bH, bF, bE) {
        var bG = bE.member6100[--bE.member6099];
        bH.member7497(Class461.MODEL);
        bH.member7500(bG);
        if (bH.member6722() === -1 && !bF.member7621()) {
            bj.member7643(false, bH.member6721());
        }
    };
    Class421.member5061.member867 = function (bE) {
        return bq(bE, j);
    };
    Class421.member4940.member867 = function (bE) {
        return bt(bE, j);
    };
    var ak = function (bG, bF, bE) {
        bE.member6100[bE.member6099++] = bG.member1886() === 1 ? bG.member7501() : -1;
    };
    Class421.member5474.member867 = function (bE) {
        return bq(bE, ak);
    };
    Class421.member5440.member867 = function (bE) {
        return bt(bE, ak);
    };
    var U = function (bG, bF, bE) {
        bE.member6100[bE.member6099++] = bG.member7586();
    };
    Class421.member5475.member867 = function (bE) {
        return bq(bE, U);
    };
    Class421.member5441.member867 = function (bE) {
        return bt(bE, U);
    };
    var G = function (bI, bH, bF) {
        var bG = bI.member7070();
        var bE = bI.member7071();
        if (bG === NULL || bE === NULL) {
            return true;
        }
        bF.member6100[bF.member6099++] = bG;
        bF.member6100[bF.member6099++] = bE;
    };
    Class421.member5442.member867 = function (bE) {
        return bt(bE, G);
    };
    Class421.member5476.member867 = function (bE) {
        return bq(bE, G);
    };
    var F = function (bG, bF, bE) {
        bG.member7037(bE.member6100[--bE.member6099] === 1);
    };
    Class421.member5075.member867 = function (bE) {
        return bq(bE, F);
    };
    Class421.member4954.member867 = function (bE) {
        return bt(bE, F);
    };
    var a4 = function (bG, bF, bE) {
        bG.member7039(bE.member6100[--bE.member6099] === 1);
    };
    Class421.member5076.member867 = function (bE) {
        return bq(bE, a4);
    };
    Class421.member4955.member867 = function (bE) {
        return bt(bE, a4);
    };
    var aS = function (bG, bF, bE) {
        bG.member7031(bE.member6100[--bE.member6099] === 1);
    };
    Class421.member5060.member867 = function (bE) {
        return bq(bE, aS);
    };
    Class421.member4939.member867 = function (bE) {
        return bt(bE, aS);
    };
    var E = function (bG, bF, bE) {
        bG.member7600(bE.member6100[--bE.member6099] === 1);
        if (bG.member6722() === -1 && !bF.member7621()) {
            bj.member7644(false, bG.member6721());
        }
    };
    Class421.member5072.member867 = function (bE) {
        return bq(bE, E);
    };
    Class421.member4951.member867 = function (bE) {
        return bt(bE, E);
    };
    var aQ = function (bG, bF, bE) {
        bG.member7032(bE.member6100[--bE.member6099]);
    };
    Class421.member5073.member867 = function (bE) {
        return bq(bE, aQ);
    };
    Class421.member4952.member867 = function (bE) {
        return bt(bE, aQ);
    };
    var ad = function (bG, bF, bE) {
        bG.member7040(bE.member6100[--bE.member6099] === 1);
    };
    Class421.member5078.member867 = function (bE) {
        return bq(bE, ad);
    };
    Class421.member4957.member867 = function (bE) {
        return bt(bE, ad);
    };
    var W = function (bG, bF, bE) {
        bG.member7042(bE.member6100[--bE.member6099] === 1);
        if (bG.member6722() === -1 && !bF.member7621()) {
            bj.member7645(false, bG.member6721());
        }
    };
    Class421.member5088.member867 = function (bE) {
        return bq(bE, W);
    };
    Class421.member4968.member867 = function (bE) {
        return bt(bE, W);
    };
    var bA = function (bH, bF, bE) {
        var bG = bE.member6142[--bE.member6143];
        bH.member6805(bG);
        if (bH.member6722() === -1 && !bF.member7621()) {
            bj.member7646(false, bH.member6721());
        }
    };
    Class421.member5068.member867 = function (bE) {
        return bq(bE, bA);
    };
    Class421.member4947.member867 = function (bE) {
        return bt(bE, bA);
    };
    var n = function (bG, bF, bE) {
        bE.member6142[bE.member6143++] = bG.member6806();
    };
    Class421.member5462.member867 = function (bE) {
        return bq(bE, n);
    };
    Class421.member5427.member867 = function (bE) {
        return bt(bE, n);
    };
    var aU = function (bG, bF, bE) {
        bG.member7587(bE.member6100[--bE.member6099]);
        if (bG.member6722() === -1 && !bF.member7621()) {
            bj.member7647(false, bG.member6721());
        }
    };
    Class421.member5069.member867 = function (bE) {
        return bq(bE, aU);
    };
    Class421.member4948.member867 = function (bE) {
        return bt(bE, aU);
    };
    var au = function (bG, bF, bE) {
        bE.member6100[bE.member6099++] = bG.member7586();
    };
    Class421.member5477.member867 = function (bE) {
        return bq(bE, au);
    };
    Class421.member5443.member867 = function (bE) {
        return bt(bE, au);
    };
    var aK = function (bG, bF, bE) {
        bE.member6099 -= 3;
        bG.member7593(bE.member6100[bE.member6099]);
        bG.member7595(bE.member6100[bE.member6099 + 1]);
        bG.member7591(bE.member6100[bE.member6099 + 2]);
    };
    Class421.member5070.member867 = function (bE) {
        return bq(bE, aK);
    };
    Class421.member4949.member867 = function (bE) {
        return bt(bE, aK);
    };
    var v = function (bG, bF, bE) {
        bG.member7597(bE.member6100[--bE.member6099] === 1);
    };
    Class421.member5071.member867 = function (bE) {
        return bq(bE, v);
    };
    Class421.member4950.member867 = function (bE) {
        return bt(bE, v);
    };
    var X = function (bL, bJ, bH) {
        var bK = bH.member6100[--bH.member6099];
        var bE = bH.member6100[--bH.member6099];
        var bG = bL.member7586();
        var bF = r.member3639(bG);
        if (bF === NULL) {
            bH.member6099 += 2;
            return true;
        }
        var bI = Class302.member3629(bL.member6806(), bL.member6752(), bL.member7590(), bF, bE, bK, Class423.member6115.modicon);
        bH.member6100[bH.member6099++] = bI;
    };
    Class421.member5487.member867 = function (bE) {
        return bq(bE, X);
    };
    Class421.member5450.member867 = function (bE) {
        return bt(bE, X);
    };
    var bB = function (bK, bI, bG) {
        var bJ = bG.member6100[--bG.member6099];
        var bF = bK.member7586();
        var bE = r.member3639(bF);
        if (bE === NULL) {
            bG.member6099++;
            return true;
        }
        var bH = Class302.member3628(bK.member6806(), bK.member6752(), bK.member7590(), bE, bJ, Class423.member6115.modicon);
        bG.member6100[bG.member6099++] = bH[0];
        bG.member6100[bG.member6099++] = bH[1];
    };
    Class421.member5488.member867 = function (bE) {
        return bq(bE, bB);
    };
    Class421.member5451.member867 = function (bE) {
        return bt(bE, bB);
    };
    var ai = function (bG, bF, bE) {
        bG.member7468(bE.member6100[--bE.member6099] === 1);
    };
    Class421.member5055.member867 = function (bE) {
        return bq(bE, ai);
    };
    Class421.member4934.member867 = function (bE) {
        return bt(bE, ai);
    };
    var at = function (bH, bG, bF) {
        var bE = bF.member6100[--bF.member6099];
        bH.member7560(bE === 1);
    };
    Class421.member5080.member867 = function (bE) {
        return bq(bE, at);
    };
    Class421.member4959.member867 = function (bE) {
        return bt(bE, at);
    };
    var aJ = function (bG, bF, bE) {
        bG.member7558(bE.member6100[--bE.member6099]);
    };
    Class421.member5057.member867 = function (bE) {
        return bq(bE, aJ);
    };
    Class421.member4936.member867 = function (bE) {
        return bt(bE, aJ);
    };
    var N = function (bG, bF, bE) {
        bG.member7599(bE.member6100[--bE.member6099]);
    };
    Class421.member5082.member867 = function (bE) {
        return bq(bE, N);
    };
    Class421.member4961.member867 = function (bE) {
        return bt(bE, N);
    };
    var bh = function (bG, bF, bE) {
        bE.member6099 -= 2;
        bG.setsetAspectRatioWidth(bE.member6100[bE.member6099]);
        bG.setsetAspectRatioHeight(bE.member6100[bE.member6099 + 1]);
        aD.member7626(bG, bF);
        if (bG.member2794() === Class438.member6632) {
            aD.member7627(bG, false);
        }
    };
    Class421.member5051.member867 = function (bE) {
        return bq(bE, bh);
    };
    Class421.member4930.member867 = function (bE) {
        return bt(bE, bh);
    };
    var am = function (bH, bG, bE) {
        bE.member6099 -= 2;
        var bF = bH.member7508();
        bF[0] = bE.member6100[bE.member6099];
        bF[1] = bE.member6100[bE.member6099 + 1];
    };
    Class421.member5081.member867 = function (bE) {
        return bq(bE, am);
    };
    Class421.member4960.member867 = function (bE) {
        return bt(bE, am);
    };
    var a2 = function (bG, bF, bE) {
        bG.member7515(bE.member6100[--bE.member6099] === 1);
    };
    Class421.member5064.member867 = function (bE) {
        return bq(bE, a2);
    };
    Class421.member4943.member867 = function (bE) {
        return bt(bE, a2);
    };
    var A = function (bG, bF, bE) {
        bE.member6099 -= 4;
        bG.member7520(bE.member6100[bE.member6099]);
        bG.member7522(bE.member6100[bE.member6099 + 1]);
        bG.member7524(bE.member6100[bE.member6099 + 2]);
        bG.member7526(bE.member6100[bE.member6099 + 3]);
    };
    Class421.member5065.member867 = function (bE) {
        return bq(bE, A);
    };
    Class421.member4944.member867 = function (bE) {
        return bt(bE, A);
    };
    var a = function (bG, bF, bE) {
        bG.member7507(bE.member6100[--bE.member6099]);
        if (bG.member6722() === -1 && !bF.member7621()) {
            bj.member7632(false, bG.member6721());
        }
    };
    Class421.member5079.member867 = function (bE) {
        return bq(bE, a);
    };
    Class421.member4958.member867 = function (bE) {
        return bt(bE, a);
    };
    var T = function (bH, bG, bE) {
        var bF = bE.member6100[--bE.member6099];
        bH.member7530(bF);
        if (bH.member6722() === -1 && !bG.member7621()) {
            bj.member7648(false, bH.member6721());
        }
    };
    Class421.member5063.member867 = function (bE) {
        return bq(bE, T);
    };
    Class421.member4942.member867 = function (bE) {
        return bt(bE, T);
    };
    var an = function (bH, bG, bF) {
        bH.member7497(Class461.member7276);
        var bE = aF.member7135();
        if (bE !== undefined) {
            bH.member7500(bE.member7649());
        } else {
            bH.member7500(0);
        }
        bH.member7502(0);
        if (bH.member6722() === -1 && !bG.member7621()) {
            bj.member7643(false, bH.member6721());
        }
    };
    Class421.member5102.member867 = function (bE) {
        return bq(bE, an);
    };
    Class421.member4982.member867 = function (bE) {
        return bt(bE, an);
    };
    Class421.member5552.member867 = function (bE) {
        bE.member6100[bE.member6099++] = aF.member7135().member7649();
    };
    var M = function (bH, bG, bF) {
        bH.member7497(Class461.member7275);
        var bE = aF.member7135();
        if (bE !== undefined) {
            bH.member7500(bE.member7649());
        } else {
            bH.member7500(0);
        }
        bH.member7502(0);
        if (bH.member6722() === -1 && !bG.member7621()) {
            bj.member7643(false, bH.member6721());
        }
    };
    Class421.member5091.member867 = function (bE) {
        return bq(bE, M);
    };
    Class421.member4971.member867 = function (bE) {
        return bt(bE, M);
    };
    var ar = function (bI, bG, bE) {
        bE.member6099 -= 6;
        var bH = bI.member7532();
        bH[0] = bE.member6100[bE.member6099];
        bH[1] = bE.member6100[bE.member6099 + 1];
        var bF = bI.member7505();
        bF[0] = bE.member6100[bE.member6099 + 2];
        bF[1] = bE.member6100[bE.member6099 + 3];
        bF[2] = bE.member6100[bE.member6099 + 4];
        bI.member7507(bE.member6100[bE.member6099 + 5]);
        if (bI.member6722() === -1 && !bG.member7621()) {
            bj.member7632(false, bI.member6721());
            bj.member7633(false, bI.member6721());
        }
    };
    Class421.member5062.member867 = function (bE) {
        return bq(bE, ar);
    };
    Class421.member4941.member867 = function (bE) {
        return bt(bE, ar);
    };
    var C = function (bG, bF, bE) {
        bE.member6100[bE.member6099++] = bG.member7506();
    };
    Class421.member5465.member867 = function (bE) {
        return bq(bE, C);
    };
    Class421.member5430.member867 = function (bE) {
        return bt(bE, C);
    };
    var aq = function (bH, bE, bF) {
        var bG = bH.member7505();
        bE.member6100[bE.member6099++] = bG[bF];
    };
    var g = function (bG, bF, bE) {
        aq(bG, bE, 0);
    };
    Class421.member5466.member867 = function (bE) {
        return bq(bE, g);
    };
    Class421.member5431.member867 = function (bE) {
        return bt(bE, g);
    };
    var d = function (bG, bF, bE) {
        aq(bG, bE, 1);
    };
    Class421.member5468.member867 = function (bE) {
        return bq(bE, d);
    };
    Class421.member5433.member867 = function (bE) {
        return bt(bE, d);
    };
    var c = function (bG, bF, bE) {
        aq(bG, bE, 2);
    };
    Class421.member5467.member867 = function (bE) {
        return bq(bE, c);
    };
    Class421.member5432.member867 = function (bE) {
        return bt(bE, c);
    };
    var H = function (bH, bE, bF) {
        var bG = bH.member7532();
        bE.member6100[bE.member6099++] = bG[bF];
    };
    var ah = function (bG, bF, bE) {
        H(bG, bE, 0);
    };
    Class421.member5470.member867 = function (bE) {
        return bq(bE, ah);
    };
    Class421.member5435.member867 = function (bE) {
        return bt(bE, ah);
    };
    var ab = function (bG, bF, bE) {
        H(bG, bE, 1);
    };
    Class421.member5471.member867 = function (bE) {
        return bq(bE, ab);
    };
    Class421.member5436.member867 = function (bE) {
        return bt(bE, ab);
    };
    var aV = function (bK, bJ, bG) {
        var bI = bG.member6100[--bG.member6099];
        var bF = bG.member6100[--bG.member6099] - 1;
        if (bK.member1886() !== Class461.member7277) {
            throw new Error('1118 ');
        }
        var bH = aj.getConfigType(Js5ConfigGroup.NPCTYPE.member1204, bK.member7501());
        if (bH === NULL) {
            bG.member6099 += 2;
            return true;
        }
        var bE = bK.member7528();
        if (bE === undefined) {
            bE = Class475({
                member7613: bH,
                member7614: true
            });
            bK.member7529(bE);
        }
        bE.member7603(Class475.member7617() * Math.pow(2, 32) | 4294967295);
        if (bF < 0 || bF >= bH.getModels().length) {
            throw new Error('1119 ' + slotID);
        }
        bE.getModels()[bF] = bI;
    };
    Class421.member5168.member867 = function (bE) {
        return bq(bE, aV);
    };
    Class421.member5169.member867 = function (bE) {
        return bt(bE, aV);
    };
    var B = function (bK, bJ, bG) {
        var bI = bG.member6100[--bG.member6099];
        var bF = bG.member6100[--bG.member6099] - 1;
        if (bK.member1886() !== Class461.member7274) {
            throw new Error('1120 ');
        }
        var bH = aj.getConfigType(Js5ConfigGroup.NPCTYPE.member1204, bK.member7501());
        if (bH === NULL) {
            bG.member6099 += 2;
            return true;
        }
        var bE = bK.member7528();
        if (bE === undefined) {
            bE = Class475({
                member7613: bH,
                member7614: false
            });
            bK.member7529(bE);
        }
        bE.member7603(Class475.member7618() * Math.pow(2, 32) | 4294967295);
        if (bF < 0 || bF >= bH.getHeadModels().length) {
            throw new Error('1121 ' + slotID);
        }
        bE.getModels()[bF] = bI;
    };
    Class421.member5170.member867 = function (bE) {
        return bq(bE, B);
    };
    Class421.member5171.member867 = function (bE) {
        return bt(bE, B);
    };
    var aO = function (bM, bJ, bE) {
        var bP = bE.member6100[--bE.member6099];
        var bK = bE.member6100[--bE.member6099] - 1;
        var bN = bK;
        var bF = bM.member1886();
        if (bF !== Class461.member7277 && bF !== Class461.member7274) {
            throw new Error('1122 ');
        }
        var bL = aj.getConfigType(Js5ConfigGroup.NPCTYPE.member1204, bM.member7501());
        if (bL === NULL) {
            bE.member6099 += 2;
            return true;
        }
        var bH = bM.member7528();
        if (bH === undefined) {
            bH = Class475({
                member7613: bL,
                member7614: bF === Class461.member7277
            });
            bM.member7529(bH);
        }
        var bG;
        if (bF === Class461.member7277) {
            bG = Class475.member7617();
        } else {
            bG = Class475.member7618();
        }
        bH.member7603(bG * Math.pow(2, 32) | 4294967295);
        var bI = bL.getRecolIndices();
        if (bI !== null) {
            if (bK < 0 || bK >= bI.length) {
                throw new Error('1123 ' + (bK + 1));
            } else {
                bN = bI[bK];
            }
        }
        var bO = bL.getRecolD();
        if (bO === null || bN < 0 || bN >= bO.length) {
            throw new Error('1124 ' + (bK + 1));
        }
        bH.getRecolD()[bN] = bP;
    };
    Class421.member5172.member867 = function (bE) {
        return bq(bE, aO);
    };
    Class421.member5173.member867 = function (bE) {
        return bt(bE, aO);
    };
    var aR = function (bN, bJ, bE) {
        var bK = bE.member6100[--bE.member6099];
        var bL = bE.member6100[--bE.member6099] - 1;
        var bP = bL;
        var bF = bN.member1886();
        if (bF !== Class461.member7277 && bF !== Class461.member7274) {
            throw new Error('1125 ');
        }
        var bM = aj.getConfigType(Js5ConfigGroup.NPCTYPE.member1204, bN.member7501());
        if (bM === NULL) {
            bE.member6099 += 2;
            return true;
        }
        var bI = bN.member7528();
        if (bI === undefined) {
            bI = Class475({
                member7613: bM,
                member7614: bF === Class461.member7277
            });
            bN.member7529(bI);
        }
        var bH;
        if (bF === Class461.member7277) {
            bH = Class475.member7617();
        } else {
            bH = Class475.member7618();
        }
        bI.member7603(bH * Math.pow(2, 32) | 4294967295);
        var bO = bM.getRetexIndices();
        if (bO !== null) {
            if (bL < 0 || bL >= bO.length) {
                throw new Error('1126 ' + (bL + 1));
            } else {
                bP = bO[bL];
            }
        }
        var bG = bM.getRetexD();
        if (bG === null || bP < 0 || bP >= bG.length) {
            throw new Error('1127 ' + (bL + 1));
        }
        bI.getRetexD()[bP] = bK;
    };
    Class421.member5174.member867 = function (bE) {
        return bq(bE, aR);
    };
    Class421.member5175.member867 = function (bE) {
        return bt(bE, aR);
    };
    var V = function (bG, bF, bE) {
        bG.member7497(Class461.member7274);
        bG.member7529(undefined);
        bG.member7500(bE.member6100[--bE.member6099]);
        if (bG.member6722() === -1 && !bF.member7621()) {
            bj.member7643(false, bG.member6721());
        }
    };
    Class421.member5090.member867 = function (bE) {
        return bq(bE, V);
    };
    Class421.member4970.member867 = function (bE) {
        return bt(bE, V);
    };
    var q = function (bG, bF, bE) {
        bG.member7497(Class461.member7277);
        bG.member7529(undefined);
        bG.member7500(bE.member6100[--bE.member6099]);
        if (bG.member6722() === -1 && !bF.member7621()) {
            bj.member7643(false, bG.member6721());
        }
    };
    Class421.member5092.member867 = function (bE) {
        return bq(bE, q);
    };
    Class421.member4972.member867 = function (bE) {
        return bt(bE, q);
    };
    var ay = function (bG, bF, bE) {
        bG.member7497(Class461.member7276);
        bG.member7500(bE.member6100[--bE.member6099]);
        if (bG.member6722() === -1 && !bF.member7621()) {
            bj.member7643(false, bG.member6721());
        }
    };
    Class421.member5093.member867 = function (bE) {
        return bq(bE, ay);
    };
    Class421.member4973.member867 = function (bE) {
        return bt(bE, ay);
    };
    var aP = function (bG, bF, bE) {
        bG.member6758(bE.member6100[--bE.member6099]);
    };
    Class421.member5125.member867 = function (bE) {
        return bq(bE, aP);
    };
    Class421.member5005.member867 = function (bE) {
        return bt(bE, aP);
    };
    var aT = function (bG, bF, bE) {
        bE.member6099 -= 10;
        aX[0] = bE.member6100[bE.member6099 + 6];
        aX[1] = -bE.member6100[bE.member6099 + 7];
        aX[2] = bE.member6100[bE.member6099 + 8];
        aX = Class41.normalize(aX);
        bG.member7652(aF, bE.member6100[bE.member6099] / 256, bE.member6100[bE.member6099 + 1] / 256, bE.member6100[bE.member6099 + 2] / 256, [
            Math.max(Math.min(bE.member6100[bE.member6099 + 3] / 255, 1), 0),
            Math.max(Math.min(bE.member6100[bE.member6099 + 4] / 255, 1), 0),
            Math.max(Math.min(bE.member6100[bE.member6099 + 5] / 255, 1), 0)
        ], aX, bE.member6100[bE.member6099 + 9]);
    };
    Class421.member5066.member867 = function (bE) {
        return bq(bE, aT);
    };
    Class421.member4945.member867 = function (bE) {
        return bt(bE, aT);
    };
    var aE = function (bG, bF, bE) {
        bG.member7653();
    };
    Class421.member5067.member867 = function (bE) {
        return bq(bE, aE);
    };
    Class421.member4946.member867 = function (bE) {
        return bt(bE, aE);
    };
    Class421.member5959.member867 = function (bE) {
        var bF = aF.member7619.member7654();
        bE.member6100[bE.member6099++] = bF === undefined ? -1 : bF.member6721();
    };
    Class421.member5960.member867 = function (bE) {
        aF.member7619.member7655(bE.member6100[--bE.member6099] === 1);
    };
    var bb = function (bE, bG, bF) {
        if (bE < 1 || bE > 10) {
            throw new Error('1128 ' + bE);
        }
        aF.member7638(bG, bG.member6719(), bG.member6722(), bE, '');
    };
    Class421.member5400.member867 = function (bE) {
        var bF = bE.member7433 ? bE.member7434 : bE.member7435;
        var bG = bF.member7105();
        return bb(bG, bE);
    };
    Class421.member5399.member867 = function (bG) {
        bG.member6099 -= 3;
        var bE = bG.member6100[bG.member6099];
        var bF = bG.member6100[bG.member6099 + 1];
        var bI = bG.member6100[bG.member6099 + 2];
        var bH = bv.member7105(bE, bF);
        if (bH === NULL) {
            bG.member6099 += 3;
            return true;
        }
        return bb(bI, bH, bG);
    };
    return bC;
}();