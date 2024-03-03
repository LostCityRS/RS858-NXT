import { Class334 } from 'Class334.js';
import { Class49 } from 'Class49.js';
import { Class337 } from 'Class337.js';
import { Class313 } from 'Class313.js';
import { Class148 } from 'Class148.js';
import { Class29 } from 'Class29.js';
import { Class5 } from 'Class5.js';
import { Class68 } from 'Class68.js';
import { Class63 } from 'Class63.js';
import { Class75 } from 'Class75.js';
import { Class7 } from 'Class7.js';
export var Class338 = function () {
    var Y = false;
    var ax = Class334();
    var S;
    var g = false;
    ax.member3795 = function () {
        g = !g;
    };
    var B = 0;
    var ay = 1;
    var X = 2;
    ax.member3811 = 1;
    ax.member3812 = 2;
    var C = ax.member3811;
    var z = Class49.create();
    var j = -1, h = -1;
    var ah = new Float32Array(4);
    var aq = Class49.member313();
    var m = {};
    var af = Class337.create();
    var ab = Class337.create();
    var ac = Class337.create();
    var t = Class337.create();
    var H = Class337.create();
    var a = Class313.create();
    var an = undefined;
    var ag = undefined;
    var aa = undefined;
    var R = 512;
    var I = 2 * 2 + 2 * 2 + 4 * 1;
    var ao = 2 * 2 + 4 * 1;
    var ae = R * 4 * I;
    var Z = R * 6;
    var al = -1;
    var am = null;
    var Q = null;
    var U = null;
    var W = -1;
    var F = -1;
    var E = -1;
    var aw = null;
    var P = null;
    var o = 0;
    var i = 0;
    var d = 0;
    var x = I * 4;
    var b = 6;
    var c = ao * 2;
    var s = 2;
    var k = Math.pow(2, 15) - 1;
    ax.member3813 = k;
    var D = 0;
    var at = 1;
    var u = 2;
    var A = at;
    var ar = 1;
    var ai = null;
    var M = false;
    var J = false;
    ax.member25 = function (aB) {
        S = aB.member433;
        if (S.gl !== undefined) {
            al = S.gl.createBuffer();
            am = new ArrayBuffer(ae);
            Q = new Uint16Array(am);
            U = new Uint8Array(am);
            E = S.gl.createBuffer();
            aw = new ArrayBuffer(Z * 2);
            P = new Uint16Array(aw);
            var aE = new ArrayBuffer(R * 6 * 2);
            var aD = new Uint16Array(aE);
            W = S.gl.createBuffer();
            var aA = 0;
            for (var az = 0; az < R; az++) {
                aD[aA++] = az * 4;
                aD[aA++] = az * 4 + 1;
                aD[aA++] = az * 4 + 2;
                aD[aA++] = az * 4;
                aD[aA++] = az * 4 + 2;
                aD[aA++] = az * 4 + 3;
            }
            S.gl.bindBuffer(S.gl.ELEMENT_ARRAY_BUFFER, W);
            S.gl.bufferData(S.gl.ELEMENT_ARRAY_BUFFER, aE, S.gl.STATIC_DRAW);
            F = S.gl.createBuffer();
            aA = 0;
            for (var az = 0; az < R; az++) {
                aD[aA++] = az * 2 + 1;
                aD[aA++] = az * 2;
            }
            S.gl.bindBuffer(S.gl.ELEMENT_ARRAY_BUFFER, F);
            S.gl.bufferData(S.gl.ELEMENT_ARRAY_BUFFER, aE, S.gl.STATIC_DRAW);
        }
        var aC = new ArrayBuffer(4 * 4 * 4);
        var aF = new Uint32Array(aC);
        for (var az = 0; az < 16; az++) {
            aF[az] = 4294967295;
        }
        an = Class148.member1495(aC, 4, 4, 1);
        av();
    };
    var T = ax.member25;
    var v = function (az, aA) {
        if (o + az >= ae || i + aA >= Z) {
            return false;
        }
        return true;
    };
    var n = function (aA, az) {
        if (az !== M) {
            if ((aA & 255) === 255) {
                az = M;
            }
        }
        return az;
    };
    var av = function () {
        if (an.member1541(true)) {
            var az = an.member1539();
            ag = az.member1285(an.member1494());
            aa = az.member1277();
        }
    };
    var ad = function (aA) {
        var aD = m[aA] = new Array(0);
        aD.push(0);
        aD.push(0);
        var aB = Math.PI * 2 / aA;
        var aC = 0;
        for (var az = 0; az < aA; az++, aC += aB) {
            aD.push(Math.cos(aC));
            aD.push(Math.sin(aC));
        }
    };
    ax.member3796 = function (aA, aE, aC, az, aD, aB) {
        if (!S.member3814(aA, aE, aA + aC, aE + az)) {
            return;
        }
        aB = n(aD, aB);
        av();
        r(aA, aE, aA + aC, aE + az, aD, ag.member493, ag.member494, ag.member495, ag.member496, aa, aB, false);
    };
    var O = ax.member3796;
    ax.member3797 = function (az, aC, aB, aA) {
        aA = n(aB, aA);
        au(az, aC, aB, ag.member493, ag.member494, aa, aA);
    };
    ax.member3798 = function (aE, az, aD, aA, aC, aB) {
        aB = n(aC, aB);
        aA = Math.floor(aA);
        if (m[aA] === undefined) {
            ad(aA);
        }
        ap(m[aA], aE, az, aD, aC, ag.member493, ag.member494, aa, aB);
    };
    ax.member3799 = function (az, aE, aD, aC, aB) {
        aB = n(aD, aB);
        var aA = undefined;
        var aF = undefined;
        if (aC === undefined) {
            aA = ag.member493;
            aF = ag.member494;
            aC = aa;
        }
        au(az, aE, aD, aA, aF, aC, aB);
    };
    ax.member3623 = function (aE, aC, az, aI, aD, aJ, aH, aG, aB, aA, aF) {
        r(aE, aC, aE + az, aC + aI, aD, aJ, aH, aG, aB, aA, aF, false);
    };
    var N = ax.member3623;
    ax.member3800 = function (aA, aF, aD, az, aB, aE, aC) {
        aD--;
        az--;
        O(aA, aF, aD, aB, aE, aC);
        O(aA, aF + az, aD + 1, aB, aE, aC);
        O(aA, aF, aB, az, aE, aC);
        O(aA + aD, aF, aB, az, aE, aC);
    };
    ax.member3801 = function (az, aE, aC, aA, aD, aB) {
        O(az, aE, aA, aC, aD, aB);
    };
    ax.member3624 = function (az, aE, aC, aA, aD, aB) {
        O(az, aE, aC, aA, aD, aB);
    };
    ax.member3627 = function (aJ, aA, aH, az, aD, aI, aG, aF, aC, aB, aE) {
        r(aJ, aA, aH, az, aD, aI, aG, aF, aC, aB, aE, false);
    };
    var K = ax.member3627;
    ax.member3803 = function (aJ, aA, aH, az, aD, aI, aG, aF, aC, aB, aE) {
        r(aJ, aA, aH, az, aD, aI, aG, aF, aC, aB, aE, true);
    };
    ax.member3804 = function (aO, aA, aJ, az, aF, aM, aI, aH, aE, aC, aG, aB, aN, aL) {
        if (aB === 0) {
            r(aO, aA, aJ, az, aF, aM, aI, aH, aE, aC, aG, false);
            return;
        }
        if (aN === undefined) {
            af[0] = (aO + aJ) / 2;
            af[1] = (aA + az) / 2;
        } else {
            af[0] = aN;
            af[1] = aL;
        }
        ab[0] = aO - af[0];
        ab[1] = aA - af[1];
        ac[0] = aJ - af[0];
        ac[1] = aA - af[1];
        H[0] = aJ - af[0];
        H[1] = az - af[1];
        t[0] = aO - af[0];
        t[1] = az - af[1];
        var aD = Math.sin(aB);
        var aK = Math.cos(aB);
        a[0] = aK;
        a[1] = -aD;
        a[2] = aD;
        a[3] = aK;
        Class313.member3688(a, ab);
        Class337.add(ab, af);
        Class313.member3688(a, ac);
        Class337.add(ac, af);
        Class313.member3688(a, H);
        Class337.add(H, af);
        Class313.member3688(a, t);
        Class337.add(t, af);
        L(ab[0], ab[1], ac[0], ac[1], H[0], H[1], t[0], t[1], aF, aM, aI, aH, aE, aC, aG, false);
    };
    var aj = ax.member3804;
    ax.member3641 = function (aP, aQ, aN, aM, aO, aH, aG, aE, aB, aL, aC) {
        var az = aL.member556() * Math.abs(aE - aH);
        var aR = aL.member557() * Math.abs(aB - aG);
        var aI = aN - aP;
        var aA = aM - aQ;
        var aF = Math.ceil(aI / az);
        var aD = Math.ceil(aA / aR);
        for (var aK = 0; aK < aF; aK++) {
            for (var aJ = 0; aJ < aD; aJ++) {
                r(aP + aK * az, aQ + aJ * aR, aP + aK * az + az, aQ + aJ * aR + aR, aO, aH, aG, aE, aB, aL, aC, false);
            }
        }
    };
    ax.member3642 = function (aW, aX, aU, aR, aV, aL, aK, aJ, aF, aQ, aH, aC, aT, aS) {
        var aA = aQ.member556() * Math.abs(aJ - aL);
        var aY = aQ.member557() * Math.abs(aF - aK);
        if (aT === undefined) {
            af[0] = aW + aA / 2;
            af[1] = aX + aY / 2;
        } else {
            af[0] = aT;
            af[1] = aS;
        }
        ab[0] = aW - af[0];
        ab[1] = aX - af[1];
        ac[0] = aW + aA - af[0];
        ac[1] = aX - af[1];
        H[0] = aW + aA - af[0];
        H[1] = aX + aY - af[1];
        t[0] = aW - af[0];
        t[1] = aX + aY - af[1];
        var az = Math.sin(aC);
        var aB = Math.cos(aC);
        a[0] = aB;
        a[1] = -az;
        a[2] = az;
        a[3] = aB;
        Class313.member3688(a, af);
        Class313.member3688(a, ab);
        Class337.add(ab, af);
        Class313.member3688(a, ac);
        Class337.add(ac, af);
        Class313.member3688(a, H);
        Class337.add(H, af);
        Class313.member3688(a, t);
        Class337.add(t, af);
        af[0] = Math.min(ab[0], ac[0], t[0], H[0]) - aW;
        af[1] = Math.min(ab[1], ac[1], t[1], H[1]) - aX;
        Class337.member322(ab, af);
        Class337.member322(ac, af);
        Class337.member322(H, af);
        Class337.member322(t, af);
        var aN = aU - aW;
        var aE = aR - aX;
        var aD = aA;
        var aM = aY;
        aA = Math.abs(Math.cos(aC) * aD) + Math.abs(Math.sin(aC) * aM);
        aY = Math.abs(Math.cos(aC) * aM) + Math.abs(Math.sin(aC) * aD);
        var aI = Math.ceil(aN / aA);
        var aG = Math.ceil(aE / aY);
        for (var aP = 0; aP < aI; aP++) {
            for (var aO = 0; aO < aG; aO++) {
                L(ab[0] + aP * aA, ab[1] + aO * aY, ac[0] + aP * aA, ac[1] + aO * aY, H[0] + aP * aA, H[1] + aO * aY, t[0] + aP * aA, t[1] + aO * aY, aV, aL, aK, aJ, aF, aQ, aH, false);
            }
        }
    };
    ax.member3805 = function (aQ, aJ, aH, aO, aM, aI, aF, aD, aC, az, aG, aA, aP, aK) {
        ah[0] = aQ[0];
        ah[1] = aQ[1];
        ah[2] = aQ[2];
        ah[3] = 1;
        Class49.member323(aO, aM, aq);
        Class49.member331(aq, ah);
        ah[0] /= ah[3];
        ah[1] /= ah[3];
        ah[2] /= ah[3];
        ah[0] = (ah[0] + 1) / 2 * j;
        ah[1] = (ah[1] + 1) / 2 * h;
        var aL, aE, aN, aB;
        if (aP === undefined || aK === undefined) {
            aL = ah[0] - aJ / 2;
            aE = ah[1] - aH / 2;
            aN = ah[0] + aJ / 2;
            aB = ah[1] + aH / 2;
        } else {
            aL = ah[0] - aP;
            aE = ah[1] - aK;
            aN = ah[0] - aP + aJ;
            aB = ah[1] - aK + aH;
        }
        r(aL, aE, aN, aB, aI, aF, aD, aC, az, aG, aA, false);
    };
    var r = function (aP, aQ, aM, aJ, aO, aG, aF, aE, aC, aI, aD, aL) {
        if (!S.member3814(aP, aQ, aM, aJ)) {
            return;
        }
        if (d >= R || A !== at || aI !== ai || aD !== M || aL !== J) {
            y(d >= R ? B : X);
            A = at;
            ai = aI;
            M = aD;
            J = aL;
        }
        var aH = d * 4 * I / 4;
        var aR = aO >> 24 & 255;
        var aS = aO >> 16 & 255;
        var az = aO >> 8 & 255;
        var aT = aO & 255;
        S.member3815(ah);
        if (ah[0] !== -1) {
            var aN = aM - aP;
            var aK = aJ - aQ;
            var aB = aE - aG;
            var aA = aC - aF;
            if (aP < ah[0]) {
                aG += (ah[0] - aP) / aN * aB;
                aP = ah[0];
            }
            if (aQ < ah[1]) {
                aC -= (ah[1] - aQ) / aK * aA;
                aQ = ah[1];
            }
            if (aM > ah[2]) {
                aE -= (aM - ah[2]) / aN * aB;
                aM = ah[2];
            }
            if (aJ > ah[3]) {
                aF += (aJ - ah[3]) / aK * aA;
                aJ = ah[3];
            }
        }
        var aU = S.member589();
        aQ = aU - aQ;
        aJ = aU - aJ;
        aG *= k, aE *= k, aF *= k, aC *= k;
        Q[aH * 2] = aP;
        Q[aH * 2 + 1] = aJ;
        aH++;
        U[aH * 4] = aR;
        U[aH * 4 + 1] = aS;
        U[aH * 4 + 2] = az;
        U[aH * 4 + 3] = aT;
        aH++;
        Q[aH * 2] = aG;
        Q[aH * 2 + 1] = aF;
        aH++;
        Q[aH * 2] = aM;
        Q[aH * 2 + 1] = aJ;
        aH++;
        U[aH * 4] = aR;
        U[aH * 4 + 1] = aS;
        U[aH * 4 + 2] = az;
        U[aH * 4 + 3] = aT;
        aH++;
        Q[aH * 2] = aE;
        Q[aH * 2 + 1] = aF;
        aH++;
        Q[aH * 2] = aM;
        Q[aH * 2 + 1] = aQ;
        aH++;
        U[aH * 4] = aR;
        U[aH * 4 + 1] = aS;
        U[aH * 4 + 2] = az;
        U[aH * 4 + 3] = aT;
        aH++;
        Q[aH * 2] = aE;
        Q[aH * 2 + 1] = aC;
        aH++;
        Q[aH * 2] = aP;
        Q[aH * 2 + 1] = aQ;
        aH++;
        U[aH * 4] = aR;
        U[aH * 4 + 1] = aS;
        U[aH * 4 + 2] = az;
        U[aH * 4 + 3] = aT;
        aH++;
        Q[aH * 2] = aG;
        Q[aH * 2 + 1] = aC;
        aH++;
        d++;
    };
    var L = function (aA, aM, aL, aJ, aP, aI, aK, aH, aO, aF, aE, aD, aB, aN, aC) {
        S.member3815(ah);
        if (ah[0] !== -1) {
            if (aA > ah[2] && aL > ah[2] && aK > ah[2] && aP > ah[2]) {
                return;
            }
            if (aA < ah[0] && aL < ah[0] && aK < ah[0] && aP < ah[0]) {
                return;
            }
            if (aM > ah[3] && aJ > ah[3] && aH > ah[3] && aI > ah[3]) {
                return;
            }
            if (aM < ah[1] && aJ < ah[1] && aH < ah[1] && aI < ah[1]) {
                return;
            }
        }
        if (d >= R || A !== at || aN !== ai || aC !== M) {
            y(d >= R ? B : X);
            A = at;
            ai = aN;
            M = aC;
        }
        var aG = d * 4 * I / 4;
        var aR = aO >> 24 & 255;
        var aQ = aO >> 16 & 255;
        var az = aO >> 8 & 255;
        var aS = aO & 255;
        aF *= k, aD *= k, aE *= k, aB *= k;
        var aT = S.member589();
        aM = aT - aM;
        aJ = aT - aJ;
        aI = aT - aI;
        aH = aT - aH;
        Q[aG * 2] = aP;
        Q[aG * 2 + 1] = aI;
        aG++;
        U[aG * 4] = aR;
        U[aG * 4 + 1] = aQ;
        U[aG * 4 + 2] = az;
        U[aG * 4 + 3] = aS;
        aG++;
        Q[aG * 2] = aD;
        Q[aG * 2 + 1] = aE;
        aG++;
        Q[aG * 2] = aL;
        Q[aG * 2 + 1] = aJ;
        aG++;
        U[aG * 4] = aR;
        U[aG * 4 + 1] = aQ;
        U[aG * 4 + 2] = az;
        U[aG * 4 + 3] = aS;
        aG++;
        Q[aG * 2] = aD;
        Q[aG * 2 + 1] = aB;
        aG++;
        Q[aG * 2] = aA;
        Q[aG * 2 + 1] = aM;
        aG++;
        U[aG * 4] = aR;
        U[aG * 4 + 1] = aQ;
        U[aG * 4 + 2] = az;
        U[aG * 4 + 3] = aS;
        aG++;
        Q[aG * 2] = aF;
        Q[aG * 2 + 1] = aB;
        aG++;
        Q[aG * 2] = aK;
        Q[aG * 2 + 1] = aH;
        aG++;
        U[aG * 4] = aR;
        U[aG * 4 + 1] = aQ;
        U[aG * 4 + 2] = az;
        U[aG * 4 + 3] = aS;
        aG++;
        Q[aG * 2] = aF;
        Q[aG * 2 + 1] = aE;
        aG++;
        d++;
    };
    var au = function (aN, az, aI, aB, aA, aK, aE) {
        var aD = 2 + (aB !== undefined ? 0 : 2) + (aI !== undefined ? 0 : 1);
        var aQ = aN.length / aD;
        var aP = aQ * I;
        var aL = v(aP, az.length);
        if (!aL || A !== D || aK !== ai || aE !== M) {
            y(aL ? X : B);
            A = D;
            ai = aK;
            M = aE;
        }
        var aH, aC, aU, aV;
        if (aI !== undefined) {
            aH = aI >> 24 & 255;
            aC = aI >> 16 & 255;
            aU = aI >> 8 & 255;
            aV = aI & 255;
        }
        var aF = o / I;
        var aG = o / 4;
        var aX = S.member589();
        var aT = 0;
        var aO = 1;
        var aJ, aS, aR;
        if (aB === undefined && aI === undefined) {
            aS = 2, aR = 3, aJ = 4;
        } else if (aB === undefined) {
            aS = 2, aR = 3, aJ = -1;
        } else if (aI === undefined) {
            aS = -1, aR = -1, aJ = 2;
        } else {
            aS = -1, aR = -1, aJ = -1;
        }
        if (aB !== undefined) {
            aB *= k;
            aA *= k;
        }
        for (var aW = 0; aW < aN.length; aW += aD) {
            Q[aG * 2] = aN[aW + aT];
            Q[aG * 2 + 1] = aX - aN[aW + aO];
            aG++;
            if (aJ < 0) {
                U[aG * 4] = aH;
                U[aG * 4 + 1] = aC;
                U[aG * 4 + 2] = aU;
                U[aG * 4 + 3] = aV;
            } else {
                var aM = aN[aW + aJ];
                U[aG * 4] = aM >> 24 & 255;
                U[aG * 4 + 1] = aM >> 16 & 255;
                U[aG * 4 + 2] = aM >> 8 & 255;
                U[aG * 4 + 3] = aM & 255;
            }
            aG++;
            if (aS < 0) {
                Q[aG * 2] = aB;
                Q[aG * 2 + 1] = aA;
            } else {
                Q[aG * 2] = aN[aW + aS] * k;
                Q[aG * 2 + 1] = aN[aW + aR] * k;
            }
            aG++;
        }
        for (var aW = 0; aW < az.length; aW++) {
            P[i++] = aF + az[aW];
        }
        o += aP;
    };
    var ap = function (aP, aF, aK, aQ, aJ, aA, az, aM, aD) {
        S.member3815(ah);
        if (ah[0] !== -1) {
            if (aF - aQ > ah[2] || aF + aQ < ah[0] || aK - aQ > ah[3] || aK + aQ < ah[1]) {
                return;
            }
        }
        var aC = 2 + (aA !== undefined ? 0 : 2) + (aJ !== undefined ? 0 : 1);
        var aT = aP.length / aC;
        var aS = aT * I;
        var aE = (aT - 1) * 3;
        var aN = v(aS, aE);
        if (!aN || A !== D || aM !== ai || aD !== M) {
            y(aN ? X : B);
            A = D;
            ai = aM;
            M = aD;
        }
        var aI, aB, aX, aY;
        if (aJ !== undefined) {
            aI = aJ >> 24 & 255;
            aB = aJ >> 16 & 255;
            aX = aJ >> 8 & 255;
            aY = aJ & 255;
        }
        var aH = o / I;
        var aG = o / 4;
        var a0 = S.member589();
        var aW = 0;
        var aR = 1;
        var aL, aV, aU;
        if (aA === undefined && aJ === undefined) {
            aV = 2, aU = 3, aL = 4;
        } else if (aA === undefined) {
            aV = 2, aU = 3, aL = -1;
        } else if (aJ === undefined) {
            aV = -1, aU = -1, aL = 2;
        } else {
            aV = -1, aU = -1, aL = -1;
        }
        if (aA !== undefined) {
            aA *= k;
            az *= k;
        }
        aK = a0 - aK;
        for (var aZ = 0; aZ < aP.length; aZ += aC) {
            Q[aG * 2] = aQ * aP[aZ + aW] + aF;
            Q[aG * 2 + 1] = aQ * aP[aZ + aR] + aK;
            aG++;
            if (aL < 0) {
                U[aG * 4] = aI;
                U[aG * 4 + 1] = aB;
                U[aG * 4 + 2] = aX;
                U[aG * 4 + 3] = aY;
            } else {
                var aO = aP[aZ + aL];
                U[aG * 4] = aO >> 24 & 255;
                U[aG * 4 + 1] = aO >> 16 & 255;
                U[aG * 4 + 2] = aO >> 8 & 255;
                U[aG * 4 + 3] = aO & 255;
            }
            aG++;
            if (aV < 0) {
                Q[aG * 2] = aA;
                Q[aG * 2 + 1] = az;
            } else {
                Q[aG * 2] = aP[aZ + aV] * k;
                Q[aG * 2 + 1] = aP[aZ + aU] * k;
            }
            aG++;
        }
        for (var aZ = 1; aZ < aT; aZ++) {
            if (aZ === aT - 1) {
                P[i++] = aH;
                P[i++] = aH + aZ;
                P[i++] = aH + 1;
            } else {
                P[i++] = aH;
                P[i++] = aH + aZ;
                P[i++] = aH + aZ + 1;
            }
        }
        o += aS;
    };
    ax.member3806 = function (aA, aE, aI, aD, aC, aH, aJ) {
        Class49.member323(aD, aC, aq);
        ah[0] = aA[0];
        ah[1] = aA[1];
        ah[2] = aA[2];
        ah[3] = 1;
        Class49.member331(aq, ah);
        ah[0] /= ah[3];
        ah[1] /= ah[3];
        ah[2] /= ah[3];
        ah[0] = (ah[0] + 1) / 2 * j;
        ah[1] = (ah[1] + 1) / 2 * h;
        var aB = ah[0];
        var aG = ah[1];
        ah[0] = aE[0];
        ah[1] = aE[1];
        ah[2] = aE[2];
        ah[3] = 1;
        Class49.member331(aq, ah);
        ah[0] /= ah[3];
        ah[1] /= ah[3];
        ah[2] /= ah[3];
        ah[0] = (ah[0] + 1) / 2 * j;
        ah[1] = (ah[1] + 1) / 2 * h;
        var az = ah[0];
        var aF = ah[1];
        ak(aB, aG, az, aF, aI, aH, aJ);
    };
    ax.member3802 = function (aB, aF, aA, aE, aJ, aI, aK) {
        S.member3815(ah);
        if (ah[0] !== -1) {
            if (aB > ah[2] && aA > ah[2]) {
                return;
            }
            if (aB < ah[0] && aA < ah[0]) {
                return;
            }
            if (aF > ah[3] && aE > ah[3]) {
                return;
            }
            if (aF < ah[1] && aE < ah[1]) {
                return;
            }
        }
        if (d >= R || A !== u || ar !== aJ || aK !== M) {
            y(d >= R ? B : X);
            A = u;
            ar = aJ;
            M = aK;
        }
        var aL = d * 2 * ao / 4;
        var aG = aI >> 24 & 255;
        var az = aI >> 16 & 255;
        var aC = aI >> 8 & 255;
        var aH = aI & 255;
        var aD = S.member589();
        aF = aD - aF;
        aE = aD - aE;
        Q[aL * 2] = aB;
        Q[aL * 2 + 1] = aF;
        aL++;
        U[aL * 4] = aG;
        U[aL * 4 + 1] = az;
        U[aL * 4 + 2] = aC;
        U[aL * 4 + 3] = aH;
        aL++;
        Q[aL * 2] = aA;
        Q[aL * 2 + 1] = aE;
        aL++;
        U[aL * 4] = aG;
        U[aL * 4 + 1] = az;
        U[aL * 4 + 2] = aC;
        U[aL * 4 + 3] = aH;
        aL++;
        d++;
    };
    var ak = ax.member3802;
    var e = Class29([Class5.member109]);
    var V = Class29([
        Class5.member109,
        Class5.member93
    ]);
    var G = Class29([
        Class5.member109,
        Class5.member93,
        Class5.member95
    ]);
    ax.member1630 = function (aB) {
        if (A === D) {
            if (i === 0) {
                return;
            }
        } else if (d === 0) {
            return;
        }
        if (C === ax.member3811) {
            q();
        }
        S.member590(!M);
        var aD;
        var aA;
        if (A === u) {
            var az = e;
            aD = Class68.member421(Class63.member402.id, az);
            S.gl.lineWidth(ar);
            aA = ao;
        } else {
            var az = e;
            if (J && ai !== null) {
                az = G;
            } else if (ai !== null) {
                az = V;
            }
            aD = Class68.member421(Class63.member393.id, az);
            aA = I;
        }
        Class68.member483(aD, true);
        S.gl.bindBuffer(S.gl.ARRAY_BUFFER, al);
        S.gl.bufferData(S.gl.ARRAY_BUFFER, am, S.gl.DYNAMIC_DRAW);
        if (A !== u && ai !== null) {
            var aC = S.bindTexture(Class75.member393, ai.member558(), S.gl.TEXTURE_2D);
            S.gl.uniform1i(aD.member457(Class7.member159.id), aC);
        }
        S.gl.uniformMatrix4fv(aD.member457(Class7.member142.id), false, z);
        S.gl.vertexAttribPointer(aD.member459(Class7.member262.id), 2, S.gl.SHORT, false, aA, 0);
        S.gl.vertexAttribPointer(aD.member459(Class7.member265.id), 4, S.gl.UNSIGNED_BYTE, false, aA, 4);
        if (A !== u && ai !== null) {
            S.gl.vertexAttribPointer(aD.member459(Class7.member270.id), 2, S.gl.SHORT, false, aA, 8);
        }
        if (false) {
        }
        if (!g) {
            if (A === at) {
                S.gl.bindBuffer(S.gl.ELEMENT_ARRAY_BUFFER, W);
                S.gl.drawElements(S.gl.TRIANGLES, d * 6, S.gl.UNSIGNED_SHORT, 0);
            } else if (A === D) {
                S.gl.bindBuffer(S.gl.ELEMENT_ARRAY_BUFFER, E);
                S.gl.bufferData(S.gl.ELEMENT_ARRAY_BUFFER, aw, S.gl.DYNAMIC_DRAW);
                S.gl.drawElements(S.gl.TRIANGLES, i, S.gl.UNSIGNED_SHORT, 0);
            } else if (A === u) {
                S.gl.bindBuffer(S.gl.ELEMENT_ARRAY_BUFFER, F);
                S.gl.drawElements(S.gl.LINES, d * 2, S.gl.UNSIGNED_SHORT, 0);
            }
        }
        if (false) {
        }
        S.member3816();
        S.member587();
        o = 0;
        i = 0;
        d = 0;
    };
    var y = ax.member1630;
    ax.member3807 = function (aA, aB, az) {
        C = aA;
        if (C === ax.member3812) {
            j = aB;
            h = az;
        } else {
            j = S.member588();
            h = S.member589();
        }
        Class49.member351(0, j, 0, h, 0.1, 5000, z);
    };
    var q = function () {
        if (j !== S.member588() || h !== S.member589()) {
            j = S.member588();
            h = S.member589();
            Class49.member351(0, j, 0, h, 0.1, 5000, z);
        }
    };
    return ax;
}();