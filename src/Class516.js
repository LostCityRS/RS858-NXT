import { Class49 } from 'Class49.js';
import { Cuboid } from 'Class166.js';
import { Class508 } from 'Class508.js';
import { Class121 } from 'Class121.js';
import { Class417 } from 'Class417.js';
import { Class272 } from 'Class272.js';
import { Class86 } from 'Class86.js';
import { Class41 } from 'Class41.js';
import { Class393 } from 'Class393.js';
import { Class155 } from 'Class155.js';
import { Class510 } from 'Class510.js';
import { Class514 } from 'Class514.js';
import { Class512 } from 'Class512.js';
import { Class507 } from 'Class507.js';
import { Class72 } from 'Class72.js';
import { Class299 } from 'Class299.js';
import { Class132 } from 'Class132.js';
import { Class511 } from 'Class511.js';
import { Class130 } from 'Class130.js';
import { Class515 } from 'Class515.js';
import { Class292 } from 'Class292.js';
import { Class129 } from 'Class129.js';
import { Class376 } from 'Class376.js';
import { Class133 } from 'Class133.js';
import { Class95 } from 'Class95.js';
import { Priority } from 'Class96.js';
import { Class291 } from 'Class291.js';
import { Class293 } from 'Class293.js';
import { Class377 } from 'Class377.js';
import { Class418 } from 'Class418.js';
import { Class374 } from 'Class374.js';
export var Class516 = function (aT) {
    var W = {};
    var n;
    W.member4584 = function () {
        return n;
    };
    var aN;
    var aL;
    var ce;
    var r;
    var q;
    var T = 250;
    var au = 0.6;
    var cA = 2;
    var ak = 0.5;
    var ah = 1;
    var af = 0.5;
    var J = new Float32Array(3);
    var H = new Float32Array(4);
    var O = new Float32Array(4);
    var ci = Class49.create();
    var a7 = Cuboid(new Float32Array([
        0,
        0,
        0
    ]), new Float32Array([
        0,
        0,
        0
    ]));
    var cE = [
        0,
        0,
        0
    ];
    var bA;
    W.member4695 = function () {
        return bA;
    };
    var aA = null;
    W.member8341 = function () {
        return aA;
    };
    var cw = Class508({});
    W.member7842 = function () {
        return cw.member8303();
    };
    var bx;
    W.member6102 = function () {
        return bx;
    };
    var t;
    var bm = undefined;
    var ab;
    var Y;
    var aa;
    var V;
    W.member8342 = function () {
        return aa;
    };
    W.member8343 = function () {
        return V;
    };
    var bN = -1;
    var cv = -1;
    var bL = -1;
    var cs = -1;
    var D = -1;
    var aO = -1;
    var C = -1;
    var aM = -1;
    var co;
    var Z;
    var aE;
    var ac;
    W.member8344 = function (cH, cG) {
        if (ac === undefined || ac[cH - ab] === undefined) {
            return undefined;
        }
        return ac[cH - ab][cG - Y];
    };
    var b5;
    var ax = [
        0,
        0
    ];
    W.member4766 = function () {
        return ax;
    };
    var I = -1, F = -1;
    var cr;
    W.member4114 = function () {
        return cr;
    };
    var cj;
    W.member4111 = function () {
        return cj;
    };
    var br;
    var aI = undefined, bb = undefined;
    var bo = undefined;
    W.member4583 = function () {
        return bo;
    };
    W.member8345 = function () {
        return b5 !== undefined && b5.member4087() <= Class121.member881;
    };
    var bW = false;
    W.member8346 = function (cG) {
        bW = cG;
    };
    W.member8347 = function () {
        return bW;
    };
    var b7 = false;
    W.member8348 = function () {
        b7 = !b7;
    };
    var P;
    var bC = false;
    var u = 0;
    W.member4652 = function () {
        return u++;
    };
    var aQ = {};
    W.member4841 = function (cH, cG) {
        aQ[cH] = cG;
    };
    W.member4851 = function (cG) {
        aQ[cG] = undefined;
    };
    W.member8349 = function (cG) {
        return aQ[cG];
    };
    var Q = undefined;
    var aK = undefined;
    var aP = undefined;
    var g = function () {
        return aP !== undefined;
    };
    W.member4836 = g;
    W.member4808 = function (cG) {
        aB.length = 0;
        if (cG === true) {
            aP = {
                member1605: au,
                member1606: cA,
                member1583: ak,
                member1584: ah,
                member1585: af
            };
            cD(cw.member8303());
        } else {
            aP = undefined;
        }
        Class417.member4808(cG);
        bC = true;
        cc = true;
    };
    W.member8350 = function (cI, cH, cG, cK, cJ) {
        aP.member1605 = cI;
        aP.member1606 = cH;
        aP.member1583 = cG;
        aP.member1584 = cK;
        aP.member1585 = cJ;
        aP.member1537 = true;
    };
    var aB = new Array(0);
    W.member8351 = function () {
        return aB;
    };
    var cc = false;
    W.member8352 = function () {
        cc = true;
    };
    var az = Class272({ member3248: true });
    var bF = Class86.member718 / 2;
    W.member3655 = function () {
        return bF;
    };
    var bG = Class41.create();
    var bl = Class41.create();
    var a1 = Class49.create();
    var bV = a1;
    var ag = Class393();
    W.member8353 = function () {
        return a1;
    };
    W.member8354 = function () {
        return bV;
    };
    var aG = Class49.create();
    W.member8338 = function () {
        return aG;
    };
    var K = Class49.create();
    W.member8339 = function () {
        return K;
    };
    W.member4580 = function () {
        return ag;
    };
    var x = Class86.member414;
    W.member4225 = function () {
        return x;
    };
    var b9 = 0;
    W.member4227 = function () {
        return b9;
    };
    var bS = {
        width: -1,
        height: -1
    };
    var ar = function (cH, cG) {
        bS.width = cH;
        bS.height = cG;
    };
    W.member4166 = function () {
        return bS;
    };
    var aY = Class49.create();
    var o = Class49.create();
    var aZ = Class49.create();
    var aH = Class49.create();
    var a8 = Class393();
    var bH = Class393();
    var R = new Float32Array([
        0,
        1,
        0
    ]);
    var ay = Class41.create();
    var am = new Float32Array([
        1,
        1,
        -1
    ]);
    var s = new Array(8);
    for (var bh = 0; bh < 8; bh++) {
        s[bh] = Class41.create();
    }
    var a3 = Class41.create();
    var cg = Class41.create();
    var ay = Class41.create();
    var cC = Class41.create();
    var ai = 0;
    var i = 0;
    var be = 1;
    var y = 0;
    var aq = Class49.create();
    var aX = Class41.create();
    var aF = Class393();
    var b1 = new Float32Array([
        0,
        1,
        0
    ]);
    var bJ = Class49.create();
    var bR = Class41.create();
    var E = 0;
    var al = Class49.create();
    var at = 100;
    W.member8355 = function (cG) {
        if (cG < 1) {
            cG = 1;
        }
        at = cG;
    };
    var a = 1;
    W.member8356 = function () {
        return a;
    };
    var a2 = 0.75;
    var b = false;
    var bE = null;
    var a4 = null;
    var m = null;
    var cm = null;
    var bv = new Array(50);
    var a6 = 0;
    var ap = new Array(1000);
    var b0 = 0;
    var a0 = true;
    var z = true;
    W.member8357 = function () {
        z = !z;
    };
    W.member8358 = function () {
        return z;
    };
    var b3 = Array(Class155.member2832);
    b3[Class155.member2830] = Class510(1000, 50, 1000);
    b3[Class155.member112] = Class510(1000, 50, 1000);
    b3[Class155.member2831] = Class510(1000, 50, 1000);
    b3[Class155.member96] = Class510(1000, 50, 1000);
    b3[Class155.member416] = Class510(1000, 50, 1000);
    b3[Class155.member117] = Class510(1000, 50, 1000);
    var bT = Class514(b3, Class155.member2831, Class510.member8323.member1268);
    var aw = new Array(1000);
    W.member4168 = function (cG) {
        aw[ad++] = cG;
    };
    var ad = 0;
    var bI = 0;
    var A = 1;
    var bj = 2;
    var bD = new Array(4);
    var b2 = 0;
    W.member4480 = function () {
        return n.member4480();
    };
    var ch = Class86.member718 * 16;
    var cF = Cuboid(new Float32Array(3), new Float32Array(3));
    var aV = false;
    var d = undefined;
    var j = undefined;
    var bZ = undefined;
    var bP = undefined;
    var ao = undefined;
    W.member8359 = function (cG) {
        if (false) {
        }
    };
    W.member8360 = function () {
        return aV;
    };
    var bq = false;
    var aW = 5;
    var aS = undefined;
    var bO = undefined;
    var a5 = undefined;
    var bU = undefined;
    var bt = undefined;
    W.member8361 = function (cG, cH, cI) {
        bq = cG;
        if (false) {
        }
    };
    var aR = false;
    var b6 = undefined;
    var aD = undefined;
    var bY = undefined;
    W.member8362 = function (cH, cI, cK, cG, cJ) {
        aR = cH;
        aD = cG;
        bY = cJ;
        if (false) {
        }
    };
    var cB = function () {
        var cH = cw.member8303();
        var cG = bA.member6198(br !== undefined);
        ab = Math.floor(cG.member6162 / Class86.member729);
        aa = Math.floor(cG.member6163 / Class86.member729);
        co = aa - ab;
        Y = Math.floor(cG.member6164 / Class86.member729);
        V = Math.floor(cG.member6165 / Class86.member729);
        Z = V - Y;
        if (co > Z) {
            aE = co;
        } else {
            aE = Z;
        }
        ac = new Array(co + 1);
        cr = Class512({
            member8296: ac,
            member8297: ab,
            member8298: aa,
            member8299: Y,
            member8300: V
        });
        cj = Class507({
            member8296: ac,
            member8297: ab,
            member8298: aa,
            member8299: Y,
            member8300: V
        });
        for (var cI = ab; cI <= aa; cI++) {
            ac[cI - ab] = new Array(Z + 1);
        }
    };
    W.member8363 = function (cG, cI) {
        if (cG === undefined) {
            throw new Error('1708 ');
        }
        if (br === undefined) {
            throw new Error('1709 ');
        }
        br = cG;
        bo = cI;
        for (var cJ = ab; cJ <= aa; cJ++) {
            for (var cH = Y; cH <= V; cH++) {
                var cL = ac[cJ - ab][cH - Y];
                if (cL === undefined) {
                    continue;
                }
                var cK = B(br, cJ, cH);
                if (!cL.member4854(cK)) {
                    cL.member4856(cK);
                }
            }
        }
    };
    var B = function (cP, cL, cK) {
        var cQ = bA.member6198(cP !== undefined);
        var cO = new Array(Class86.member414);
        for (var cH = 0; cH < Class86.member414; cH++) {
            cO[cH] = new Array(Class86.member716);
            for (var cN = 0; cN < Class86.member716; cN++) {
                cO[cH][cN] = new Array(Class86.member716);
                for (var cM = 0; cM < Class86.member716; cM++) {
                    var cJ = cL * Class86.member716 + cN - Math.floor(cQ.member6162 / Class86.member717);
                    var cG = cK * Class86.member716 + cM - Math.floor(cQ.member6164 / Class86.member717);
                    if (cJ >= 0 && cJ < cP[cH].length && cG >= 0 && cG < cP[cH][cJ].length) {
                        var cI = cP[cH][cJ][cG];
                        if (cI !== -1) {
                            cO[cH][cN][cM] = {
                                level: cI >> 24 & 3,
                                member4620: cI >> 14 & 1023,
                                member4621: cI >> 3 & 2047,
                                member1668: cI >> 1 & 3
                            };
                        }
                    }
                }
            }
        }
        return cO;
    };
    if (aT.member6444 !== undefined && aT.member433 !== undefined && aT.member995 !== undefined && aT.member2970 !== undefined && aT.member4409 !== undefined && aT.member8364 !== undefined && aT.member953 !== undefined && aT.member8365 !== undefined) {
        n = aT.member6444;
        aN = aT.member433;
        aL = aT.member995;
        ce = aT.member2970;
        r = aT.member4409;
        q = aT.member8366;
        bA = aT.member8364;
        bx = aT.member953;
        bo = aT.member8365;
        if (aT.member6154 !== undefined) {
            br = aT.member6154;
        }
        if (aT.member8367 !== undefined) {
            bm = aT.member8367;
        }
        cB();
    } else {
        throw new Error('1710 ');
    }
    W.member512 = function () {
        for (var cH = 0; cH < ac.length; cH++) {
            for (var cI = 0; cI < ac[cH].length; cI++) {
                if (ac[cH][cI] !== undefined) {
                    e(ac[cH][cI]);
                }
            }
        }
        ac = undefined;
        cw.member301();
        for (var cG = 0; cG < aw.length; cG++) {
            aw[cG] = undefined;
        }
        ad = 0;
        for (var cG = 0; cG < ap.length; cG++) {
            ap[cG] = undefined;
        }
        a6 = b0 = 0;
    };
    var b8 = W.member512;
    W.member301 = function () {
        b8();
        cB();
    };
    W.member8368 = function () {
        var cG = bx.member1025(Class72.member502);
        return aN.member3776() && cG;
    };
    W.member487 = function () {
        bx.member487();
        if (!W.member8345()) {
            Class299.member3577(false);
        }
    };
    W.member8369 = function (cL, cK, cH, cI) {
        var cG = this.member8368();
        if (!cL && cK > 1 || cL && cK > 2) {
            if (cm === null || cm.member556() !== cH || cm.member557() !== cI || cm.member3826() !== cG) {
                if (cm !== null) {
                    cm.member511();
                }
                cm = aN.member580(cH, cI, true, false, cG);
                cm.member510();
            }
        } else if (cm !== null) {
            cm.member511();
            cm = null;
        }
        if (m === null || cL && (bE === null || a4 === null) || m.member556() !== cH || m.member557() !== cI || m.member3826() !== cG) {
            if (m !== null) {
                m.member511();
            }
            if (bE !== null) {
                bE.member511();
            }
            if (a4 !== null) {
                a4.member511();
            }
            m = aN.member580(cH, cI, true, false, cG);
            m.member510();
            if (cL) {
                var cM = cH * a2, cJ = cI * a2;
                if (cM <= 0) {
                    cM = 1;
                }
                if (cJ <= 0) {
                    cJ = 1;
                }
                bE = aN.member580(cM, cJ, true, false, cG);
                bE.member510();
                a4 = aN.member580(cM, cJ, true, false, cG);
                a4.member510();
            } else {
                bE = null;
                a4 = null;
            }
        }
    };
    W.member486 = function (cL, c2, cR, cQ, c5, c1, c7) {
        a0 = z;
        var cU = c2 - E;
        E = c2;
        var cW = c1.w;
        var cP = c1.member1272;
        var cY = cW / cP;
        ar(cW, cP);
        x = c5;
        b9 = cQ.level;
        ad = 0;
        a6 = b0 = 0;
        Class132.member1267(bx);
        var cH = bx.member941(Class72.member407);
        cH.member929(b);
        var cO = cH.member291();
        var db = g() ? new Array(0) : bx.member1027();
        this.member8369(cO, db.length, cW, cP);
        cR.member3651(aG);
        cR.member3650(bG);
        cR.member3649(bl);
        var c3 = g() ? bG[1] - 50 : cR.member3655();
        var cN = g() ? bG[1] + 50 : cR.member3657();
        if (cO) {
            a = a2;
            var c8 = b ? -0.5 : 0.5;
            Class49.member350(c8, c8, cW * a2, cP * a2, cR.member3652() / 2, cR.member3653(cW, cP), c3, cN, a1);
            Class49.member349(cR.member3652() / 2, cR.member3653(cW, cP), c3, cN, bV);
        } else {
            a = 1;
            Class49.member349(cR.member3652() / 2, cR.member3653(cW, cP), c3, cN, a1);
            bV = a1;
        }
        ag.member4224(aG, a1);
        Class49.member323(bV, aG, K);
        var dd = c2;
        if (Class511.member8325() !== -1) {
            dd = Class511.member8325();
        }
        var cM = cl(cL, cQ.member3454, c2);
        b2 = 0;
        bD[b2] = ag;
        b2++;
        var cX = false;
        if (b5 !== undefined) {
            if (bx.member1025(Class72.member499)) {
                bB(aN, cR.member3652(), cR.member3653(cW, cP), cR.member3655());
                bD[b2] = a8;
                b2++;
            }
            if (Class130.member1020()) {
                cX = L(cW, cP, bG, cU);
                if (cX) {
                    bD[b2] = aF;
                    b2++;
                }
            }
        }
        cw.member8304(cL, bD, undefined, b2, bI);
        cF.member1789[0] = cQ.member3454[0] - ch;
        cF.member1789[1] = cQ.member3454[1] - ch;
        cF.member1789[2] = cQ.member3454[2] - ch;
        cF.member1790[0] = cQ.member3454[0] + ch;
        cF.member1790[1] = cQ.member3454[1] + ch;
        cF.member1790[2] = cQ.member3454[2] + ch;
        aC(cw.member8303());
        var cG = bx.member941(Class72.member102);
        var c4 = false;
        if (b5 !== undefined) {
            if (bx.member1025(Class72.member102) && cw.member1805(bG, cQ.member3454, cL, 0)) {
                Class41.set(cQ.member3454, H);
                Class515.member8337(H, W, true);
                H[0] = (H[0] + 1) * aN.member588() / 2;
                H[1] = (H[1] + 1) * aN.member589() / 2;
                cG.member843(H[0], H[1], 100, H[2]);
                c4 = true;
            } else {
                cG.member843(0, 0, 0, 0);
            }
            if (bx.member1025(Class72.member499)) {
                bK(cL, cQ, dd);
            }
            if (cX && Class130.member1020()) {
                av(cL, cQ, dd, cW, cP);
            }
            if (!g()) {
                S(cQ, cR.member3655(), cR.member3657());
            }
        }
        cw.member4190(cL, ag, A);
        var df = undefined;
        if (!g() && bx.member1025(Class72.member401)) {
            df = bx.member941(Class72.member401);
        } else {
            Class132.member1267(bx);
        }
        var cT = Class292(a1, aG, bl, bG);
        var cZ = bx.member1025(Class72.member96);
        var cS = bx.member1025(Class72.member416);
        var c9 = bx.member1025(Class72.member117);
        if (a0) {
            bT.member8336(Class155.member2831);
            bT.member8318(Class155.member96, cZ);
            bT.member8318(Class155.member416, cS);
            bT.member8318(Class155.member117, c9);
            if (df !== undefined) {
                bT.member8335 = Class510.member8323.member1268;
                df.member952(bT, bx, ag, bG, false);
            }
            v(bT, cL, cQ.member3454, cT, aG, a1, A, dd, c5);
            aU(b3[Class155.member2831]);
        }
        var da, di, cJ;
        if (db.length <= 1) {
            da = m;
        } else {
            da = db.length & 1 ? m : cm;
        }
        if (cO) {
            if (b) {
                di = bE;
            } else {
                di = a4;
            }
            cJ = di;
            b = !b;
        } else {
            cJ = da;
        }
        aN.member581(cJ);
        aN.member582(0, 0, cW, cP);
        aN.gl.clear(aN.gl.COLOR_BUFFER_BIT | aN.gl.DEPTH_BUFFER_BIT);
        if (cO) {
            aN.member3644();
            aN.member1344(0, 0, cW * a2, cP * a2);
        }
        if (a0) {
            X(b3[Class155.member2831]);
        } else {
            if (df !== undefined) {
                df.member584(bx, ag, bG, false);
            }
            an(cL, cQ.member3454, cT, aG, a1, A, dd, c5, true, false, false);
        }
        if (Class130.member1020() && cX) {
            aN.member3644();
            Class130.member1193(cJ);
            aN.member581(cJ);
            aN.member3645();
        }
        if (a0) {
            U(b3[Class155.member2831]);
            b3[Class155.member2831].member8320();
        } else {
            an(cL, cQ.member3454, cT, aG, a1, A, dd, c5, false, true, true);
        }
        if (false) {
        }
        if (c9) {
            ae(cL, cQ, dd, cO ? di : cJ, cT);
        }
        if (cZ) {
            c(cL, cQ, dd, cO ? di : cJ, cT);
        }
        if (cS) {
            cy(cL, cQ, dd, cO ? di : cJ, cT);
        }
        var cV = cW - c7.left - c7.member596;
        var c6 = cP - c7.top - c7.member597;
        var c0 = [
            c7.left,
            c7.top,
            cV,
            c6
        ];
        var cI = [
            c1.x + c7.left,
            c1.y + c7.top,
            cV,
            c6
        ];
        if (cO) {
            aN.member3645();
        }
        if (db.length === 0) {
            aN.member3247(cJ, null, false, 1, c0, cI);
        } else {
            while (db.length > 0) {
                var dk = db.shift();
                var cK;
                if (cO) {
                    cK = di.member575();
                    cO = false;
                } else {
                    cK = db.length % 2 === 0 ? m.member575() : cm.member575();
                }
                if (db.length > 0) {
                    dk.member584(cK, db.length % 2 === 0 ? cm : m);
                } else {
                    dk.member584(cK, null, c0, cI);
                }
            }
        }
        if (false) {
        }
        return cM;
    };
    var aC = function (cJ) {
        var cH = cJ.member4167();
        if (cH !== undefined && !cH.member1803(cF)) {
            return;
        }
        var cI = cJ.member4186();
        if (cI !== undefined && cI.member4122 !== undefined) {
            cI.member4122();
        }
        var cG = cJ.member2010();
        if (cG !== undefined) {
            for (var cK = 0; cK < cG.length; cK++) {
                aC(cG[cK]);
            }
        }
    };
    var k = [];
    var bB = function (cL, cO, cI, cM) {
        Class49.member349(cO / 2, cI, cM, Class86.member730 * 0.5, aH);
        bH.member4224(aG, aH);
        bH.member935(s[0]);
        bH.member933(s[1]);
        bH.member937(s[2]);
        bH.member939(s[3]);
        bH.member936(s[4]);
        bH.member934(s[5]);
        bH.member938(s[6]);
        bH.member940(s[7]);
        Class41.member313(a3);
        for (var cN = 0; cN < s.length; cN++) {
            Class41.add(a3, s[cN]);
        }
        Class41.scale(a3, 1 / 8);
        var cK = bx.member1016();
        Class41.scale(cK, Class86.member730, cg);
        Class41.add(a3, cg, ay);
        Class49.member352(ay, a3, R, aZ);
        Class49.inverse(aZ);
        var cT = Number.MAX_VALUE;
        var cH = Number.MAX_VALUE;
        var cS = Number.MAX_VALUE;
        var cR = -Number.MAX_VALUE;
        var cG = -Number.MAX_VALUE;
        var cQ = -Number.MAX_VALUE;
        for (var cN = 0; cN < s.length; cN++) {
            var cP = s[cN];
            Class49.member318(aZ, cP, cC);
            cT = cC[0] < cT ? cC[0] : cT;
            cR = cC[0] > cR ? cC[0] : cR;
            cH = cC[1] < cH ? cC[1] : cH;
            cG = cC[1] > cG ? cC[1] : cG;
            cS = cC[2] < cS ? cC[2] : cS;
            cQ = cC[2] > cQ ? cC[2] : cQ;
        }
        var cJ = bx.member941(Class72.member499);
        J[0] = Math.abs(cR - cT) / cJ.member954();
        J[1] = Math.abs(cG - cH) / cJ.member954();
        cT = Math.floor(cT / J[0]) * J[0];
        cH = Math.floor(cH / J[1]) * J[1];
        cR = Math.floor(cR / J[0]) * J[0];
        cG = Math.floor(cG / J[1]) * J[1];
        if (aN.member860()) {
            Class49.member351(cT, cR, cH, cG, cS, cQ + Class86.member730 * 2, aY);
        } else {
            Class49.member351(cT, cR, cH, cG, cS - Class86.member731 * 2, cQ + Class86.member730 * 2, aY);
        }
        Class49.member351(cT, cR, cH, cG, cS - Class86.member731 * 2, cQ, o);
        Class49.inverse(aZ);
        Class49.scale(aZ, am);
        Class49.inverse(aZ);
        a8.member4224(aZ, o);
        cJ.member959(Class86.member730 * 0.4);
        cJ.member961(Class86.member730 * 0.5 - cJ.member960());
    };
    var bK = function (cG, cI, cH) {
        cw.member4190(cG, a8, A);
        bx.member518(Class72.member499, {
            member980: aZ,
            member981: aY
        });
        var cJ = Class292(aY, aZ, bl, bG);
        if (a0) {
            bT.member8336(Class155.member2830);
            v(bT, cG, cI.member3454, cJ, aG, a1, A, cH, Class86.member414);
            aU(b3[Class155.member2830]);
            a9(b3[Class155.member2830], true, true, true);
            b3[Class155.member2830].member8320();
        } else {
            an(cG, cI.member3454, cJ, aG, a1, A, cH, Class86.member414, true, true, true);
        }
        bx.member520(Class72.member499);
    };
    var c = function (cH, cK, cJ, cL, cI) {
        var cG = bx.member941(Class72.member96).member1001();
        if (cG !== null) {
            aN.member581(cG);
            cG.member3831(cL);
        }
        bx.member518(Class72.member96);
        if (a0) {
            aU(b3[Class155.member96]);
            a9(b3[Class155.member96], true, false, true);
            b3[Class155.member96].member8320();
        } else {
            an(cH, cK.member3454, cI, aG, a1, A, cJ, Class86.member414, true, false, true);
        }
        bx.member520(Class72.member96, { member3463: a1 });
    };
    var cy = function (cG, cJ, cI, cK, cH) {
        al = Class49.inverse(cH.member3463, al);
        bx.member518(Class72.member416, { member861: al });
        if (a0) {
            aU(b3[Class155.member416]);
            a9(b3[Class155.member416], true, true, true);
            b3[Class155.member416].member8320();
        } else {
            an(cG, cJ.member3454, cH, aG, a1, A, cI, Class86.member414, true, false, true);
        }
        bx.member520(Class72.member416, { member3463: a1 });
    };
    var ae = function (cG, cK, cJ, cL, cI) {
        var cH = bx.member941(Class72.member117).member576();
        if (cH !== null) {
            aN.member581(cH);
            cH.member3831(cL);
        }
        bx.member518(Class72.member117);
        if (a0) {
            aU(b3[Class155.member117]);
            a9(b3[Class155.member117], true, true, true);
            b3[Class155.member117].member8320();
        } else {
            an(cG, cK.member3454, cI, aG, a1, A, cJ, Class86.member414, true, false, true);
        }
        bx.member520(Class72.member117, { member3463: a1 });
    };
    var L = function (cX, cI, cU, cY) {
        Class130.member1189(cX, cI);
        var cP = Math.floor(cU[0] / Class86.member730) - ab;
        var cN = Math.floor(cU[2] / Class86.member730) - Y;
        var cV = cP - 1;
        if (cV < 0) {
            cV = 0;
        }
        var cR = cP + 1;
        if (cR > co) {
            cR = co;
        }
        var cS = cN - 1;
        if (cS < 0) {
            cS = 0;
        }
        var cQ = cN + 1;
        if (cQ > Z) {
            cQ = Z;
        }
        var cO = -Number.MAX_VALUE;
        var cT = Number.MAX_VALUE;
        var cK = -Number.MAX_VALUE;
        var cW = false;
        for (var cH = cV; cH <= cR; ++cH) {
            for (var cG = cS; cG <= cQ; ++cG) {
                var cJ = ac[cH][cG];
                if (cJ === undefined) {
                    continue;
                }
                var c1 = cJ.member4832();
                if (c1 === NULL) {
                    continue;
                }
                if (!c1.member4631()) {
                    continue;
                }
                cW = true;
                var cZ = c1.member4635();
                if (cZ > cK) {
                    cK = cZ;
                }
                var cM = c1.member4632(ag, aG, cU);
                if (cM !== undefined && cM[0] !== undefined && cM[1] < cT) {
                    cO = cM[0];
                    cT = cM[1];
                }
            }
        }
        if (!cW) {
            return false;
        }
        var cL = cY / at;
        var c0 = be - y;
        if (c0 > 0) {
            y += cL;
            if (y >= 1) {
                y = 1;
            }
        } else if (c0 < 0) {
            y -= cL;
        }
        if (y <= 0) {
            y = 0;
            be = 1;
            ai = cO;
        }
        if (cO !== ai) {
            if (Math.abs(cO - ai) < 128) {
                ai = cO;
            } else {
                be = 0;
            }
        }
        i = cK;
        bJ = Class49.member355(b1, -ai);
        Class49.member340(bJ, bl, aX);
        Class49.member318(bJ, bG, bR);
        Class49.member323(aG, bJ, aq);
        aF.member4224(aq, a1);
        return true;
    };
    var av = function (cI, cK, cJ, cG, cH) {
        Class130.member1181(ai - i);
        Class130.member1183(y);
        cw.member4190(cI, aF, A);
        Class130.member1191();
        var cL = undefined;
        var cN = false;
        if (bx.member1025(Class72.member401)) {
            cL = bx.member941(Class72.member401);
            if (P !== undefined && P.member3229() && Q !== NULL && aK !== NULL) {
                cN = true;
                cL.member946(Q);
            }
        }
        var cM = Class292(a1, aq, aX, bG);
        if (a0) {
            bT.member8336(Class155.member112);
            if (cL !== undefined) {
                bT.member8335 = Class510.member8323.member1268;
                cL.member952(bT, bx, aF, bR, true);
            }
            v(bT, cI, cK.member3454, cM, aG, a1, A, cJ, Class86.member414);
            aU(b3[Class155.member112]);
            a9(b3[Class155.member112], true, true, true);
            b3[Class155.member112].member8320();
        } else {
            if (cL !== undefined) {
                cL.member584(bx, aF, bR, true);
            }
            an(cI, cK.member3454, cM, aG, a1, A, cJ, Class86.member414, true, true, true);
        }
        if (cN) {
            var cL = bx.member941(Class72.member401);
            cL.member946(undefined);
        }
        Class130.member1199(cG, cH);
    };
    W.member4223 = function (cP) {
        var cQ = cP.member3320().member4167();
        var cW = Math.floor(cQ.member1789[0] / Class86.member730);
        var cU = Math.floor(cQ.member1789[2] / Class86.member730);
        var cV = Math.floor(cQ.member1790[0] / Class86.member730);
        var cT = Math.floor(cQ.member1790[2] / Class86.member730);
        var cJ = false;
        var cG = false;
        cP.member4109(cG);
        member8370:
            for (var cR = cW; cR <= cV; ++cR) {
                for (var cN = cU; cN <= cT; ++cN) {
                    var cI = this.member8344(cR, cN);
                    if (cI === undefined) {
                        continue;
                    }
                    var cM = cI.member4832();
                    if (cM === NULL) {
                        cJ = true;
                        continue;
                    }
                    var cS = cM.member4630();
                    if (cS === NULL) {
                        cJ = true;
                        continue;
                    }
                    for (var cK = 0; cK < cS.length; ++cK) {
                        var cL = cS[cK];
                        if (!cL.member2285.member2274()) {
                            cJ = true;
                            continue;
                        }
                        if (!cL.member2285.member2238) {
                            continue;
                        }
                        var cH = cL.member3320().member4167();
                        var cO = bX(cQ, cH);
                        cG |= cO <= Class86.member718 * 20 * Class86.member718 * 20;
                        if (cG) {
                            break member8370;
                        }
                    }
                }
            }
        if (!cG && cJ) {
            return false;
        }
        cP.member4109(cG);
        return true;
    };
    var bX = function (cN, cG) {
        var cH = 0;
        var cQ = cN.member1789[0] - cG.member1790[0];
        var cP = cN.member1790[0] - cG.member1790[0];
        var cO = cN.member1789[0] - cG.member1789[0];
        var cM = Math.min(Math.abs(cQ), Math.min(Math.abs(cP), Math.abs(cO)));
        if (cM > 0) {
            cH += cM * cM;
        }
        var cL = cN.member1789[2] - cG.member1790[2];
        var cK = cN.member1790[2] - cG.member1790[2];
        var cJ = cN.member1789[2] - cG.member1789[2];
        var cI = Math.min(Math.abs(cL), Math.min(Math.abs(cK), Math.abs(cJ)));
        if (cI > 0) {
            cH += cI * cI;
        }
        return cH;
    };
    W.member8371 = function () {
        var cV = 4294967295;
        var cL = true;
        var cR = 0;
        var cT = 256;
        var cW = bx.member941(Class72.member499);
        if (cW !== null && cW.member291()) {
            var cH = cW.member983();
            if (cH !== null) {
                aN.member3640.member3803(cR * cT, 0, (cR + 1) * cT, cT, cV, 0, 0, 1, 1, cH, cL);
                cR += 1;
            }
        }
        var cU = bx.member941(Class72.member96);
        if (cU !== null && cU.member291()) {
            var cN = cU.member1000();
            if (cN !== null) {
                aN.member3640.member3627(cR * cT, 0, (cR + 1) * cT, cT, cV, 0, 0, 1, 1, cN, cL);
                cR += 1;
            }
        }
        var cX = bx.member941(Class72.member416);
        if (cX !== null && cX.member291()) {
            var cJ = cX.member846();
            if (cJ !== null) {
                aN.member3640.member3803(cR * cT, 0, (cR + 1) * cT, cT, cV, 0, 0, 1, 1, cJ, cL);
                cR += 1;
            }
        }
        var cG = bx.member941(Class72.member117);
        if (cG !== null && cG.member291()) {
            var cK = cG.member574();
            if (cK !== null) {
                aN.member3640.member3627(cR * cT, 0, (cR + 1) * cT, cT, cV, 0, 0, 1, 1, cK, cL);
                cR += 1;
            }
        }
        var cI = Class130.member1201();
        if (cI !== null) {
            aN.member3640.member3627(cR * cT, 0, (cR + 1) * cT, cT, cV, 0, 0, 1, 1, cI, cL);
            cR += 1;
        }
        var cS = bx.member941(Class72.member502);
        if (cS !== null && cS.member291()) {
            var cM = cS.member920();
            if (cM !== null) {
                aN.member3640.member3627(cR * cT, 0, (cR + 1) * cT, cT, cV, 0, 0, 1, 1, cM, cL);
                cR += 1;
            }
            var cQ = cS.member921();
            if (cQ !== null) {
                aN.member3640.member3627(cR * cT, 0, (cR + 1) * cT, cT, cV, 0, 0, 1, 1, cQ, cL);
                cR += 1;
            }
            var cP = cS.member922();
            if (cP !== null) {
                aN.member3640.member3627(cR * cT, 0, (cR + 1) * cT, cT, cV, 0, 0, 1, 1, cP, cL);
                cR += 1;
            }
            var cO = cS.member923();
            if (cO !== null) {
                aN.member3640.member3627(cR * cT, 0, (cR + 1) * cT, cT, cV, 0, 0, 1, 1, cO, cL);
                cR += 1;
            }
        }
    };
    function bQ(cI) {
        var cH = cI.member8313.data;
        for (var cG = 0; cG < cI.member8313.member8305; ++cG) {
            cH[cG].member867();
        }
    }
    function h(cI) {
        var cH = cI.member8314.data;
        for (var cG = 0; cG < cI.member8314.member8305; ++cG) {
            cH[cG].member867();
        }
    }
    function U(cG) {
        bQ(cG);
        h(cG);
    }
    function X(cI) {
        var cH = cI.member8312.data;
        for (var cG = 0; cG < cI.member8312.member8305; ++cG) {
            cH[cG].member867();
        }
    }
    function a9(cH, cI, cJ, cG) {
        if (cI) {
            X(cH);
        }
        if (cJ) {
            bQ(cH);
        }
        if (cG) {
            h(cH);
        }
    }
    function cp(cJ, cM, cK, cR, cN, cQ, cG, cL, cU, cH) {
        if (cM.member4192(cL) !== cK) {
            return;
        }
        var cP = cM.member4186();
        if (cP !== undefined && cP.member486 !== undefined && !Class129.member1178(cP.member4110(), cP.member4083(), cH)) {
            var cV = cM.member4200();
            cM.member4201(cN.member1624);
            cP.member3437(cK, cV, cQ, cG, cU);
            if (cP.member4104() && cP.member4106()) {
                var cO = cP.member4100();
                cJ.member863 = cM.member4187();
                if ((cO & Class376.member4171) !== 0) {
                    var cT = cP.member4100();
                    cJ.member8335 = Class510.member8323.member8309;
                    cP.member952(cJ, cN, cV, cU, (cT & Class376.member4172) === Class376.member4172 ? undefined : Class133.member1270);
                } else if ((cO & Class376.member4170) !== 0) {
                    cJ.member8335 = Class510.member8323.member8308;
                    cP.member952(cJ, cN, cV, cU, Class133.member1270);
                }
                if ((cO & Class376.member4169) !== 0) {
                    cJ.member8335 = Class510.member8323.member1268;
                    cP.member952(cJ, cN, cV, cU, Class133.member1268);
                }
            }
        }
        var cS = cM.member2010();
        if (cS !== undefined) {
            for (var cI = 0; cI < cS.length; cI++) {
                cp(cJ, cS[cI], cK, cR, cN, cQ, cG, cL, cU, cH);
            }
        }
    }
    var bM = function (cH, cG) {
        if (cH.priority !== cG.priority) {
            return cH.priority - cG.priority;
        }
        if (cH.member862 !== cG.member862) {
            return cH.member862 - cG.member862;
        }
        if (cH.member425 !== cG.member425) {
            return cH.member425 - cG.member425;
        }
        return cH.member863 - cG.member863;
    };
    var N = function (cH, cG) {
        if (cH.member863 !== cG.member863) {
            return cH.member863 - cG.member863;
        }
        if (cH.member865 !== cG.member865) {
            return cH.member865 - cG.member865;
        }
        if (cH.member864 !== cG.member864) {
            return cH.member864 - cG.member864;
        }
        if (cH.member866 !== cG.member866) {
            return cH.member866 - cG.member866;
        }
        if (cH.member862 !== cG.member862) {
            return cH.member862 - cG.member862;
        }
        if (cH.member425 !== cG.member425) {
            return cH.member425 - cG.member425;
        }
        return 0;
    };
    function aU(cG) {
        cG.member8312.data.length = cG.member8312.member8305;
        cG.member8312.data.sort(bM);
        cG.member8313.data.length = cG.member8313.member8305;
        cG.member8313.data.sort(N);
        cG.member8314.data.length = cG.member8314.member8305;
        cG.member8314.data.sort(N);
    }
    function v(cI, cJ, cN, cL, cM, cG, cK, cO, cH) {
        cp(cI, cw.member8303(), cJ, cN, cL, cM, cG, cK, cO, cH);
    }
    var M = function (cH, cG) {
        return cH.member4187() - cG.member4187();
    };
    var an = function (cJ, cQ, cM, cO, cH, cK, cS, cI, cL, cG, cP) {
        if (cL) {
            G(cJ, cw.member8303(), cM, cO, cH, cK, cS, cI);
        }
        if (cG) {
            bv.length = a6;
            bv.sort(M);
            for (var cN = 0; cN < a6; cN++) {
                bv[cN].member4186().member486(cM, bv[cN].member4200(), cS, Class133.member1270);
            }
            a6 = 0;
        }
        if (cP) {
            ap.length = b0;
            ap.sort(M);
            for (var cN = 0; cN < b0; cN++) {
                var cR = ap[cN].member4186().member4100();
                ap[cN].member4186().member486(cM, ap[cN].member4200(), cS, (cR & Class376.member4172) === Class376.member4172 ? undefined : Class133.member1270);
            }
            b0 = 0;
        }
    };
    var G = function (cJ, cL, cM, cP, cG, cK, cR, cH) {
        if (cL.member4192(cK) !== cJ) {
            return;
        }
        var cO = cL.member4186();
        if (cO !== undefined && cO.member486 !== undefined && !Class129.member1178(cO.member4110(), cO.member4083(), cH)) {
            var cS = cL.member4200();
            cL.member4201(cM.member1624);
            cO.member3437(cJ, cS, cP, cG, cR);
            if (cO.member4104() && cO.member4106()) {
                var cN = cO.member4100();
                if ((cN & Class376.member4171) !== 0) {
                    ap[b0++] = cL;
                } else if ((cN & Class376.member4170) !== 0) {
                    bv[a6++] = cL;
                }
                if ((cN & Class376.member4169) !== 0) {
                    cO.member486(cM, cS, cR, Class133.member1268);
                }
            }
        }
        var cQ = cL.member2010();
        if (cQ !== undefined) {
            for (var cI = 0; cI < cQ.length; cI++) {
                G(cJ, cQ[cI], cM, cP, cG, cK, cR, cH);
            }
        }
    };
    W.member8372 = function (cK, cL, cJ, cI, cM) {
        t = cL;
        if (b5 === undefined) {
            return;
        }
        var cG = b5.member4834();
        if (cG === NULL) {
            return;
        }
        var cH = cG.member3249(Math.floor(cK.member3454[0] / Class86.member731 % Class86.member716), Math.floor(cK.member3454[2] / Class86.member731 % Class86.member716));
        if (cH === NULL) {
            return;
        }
        if (t !== undefined) {
            az.member3247(cH);
            az.member3238(t);
            cH = az;
        }
        if (!cH.equals(P)) {
            b4(cH, P === undefined, cJ, cI, cM);
            P = cH;
        }
    };
    var S = function (cK, cJ, cN) {
        var cH = b5.member4834();
        if (cH !== NULL) {
            var cI = cH.member3249(Math.floor(cK.member3454[0] / Class86.member731 % Class86.member716), Math.floor(cK.member3454[2] / Class86.member731 % Class86.member716));
            if (cI !== NULL) {
                if (t !== undefined) {
                    az.member3247(cI);
                    az.member3238(t);
                    cI = az;
                }
            }
            if (cI !== NULL && (!cI.equals(P) || bC)) {
                b4(cI, P === undefined, T, cJ, cN);
                P = cI;
                bC = false;
            }
        }
        if (Q === NULL) {
            var cG = undefined;
            if (bm !== undefined) {
                cG = bm.member6226();
            }
            Q = P.member3237(aL, cG);
            if (Q !== NULL && Q !== undefined) {
                var cM = bx.member941(Class72.member501);
                cM.member1005(Q);
            }
        }
        if (aK === NULL) {
            aK = P.member3226(ce, aL);
            if (aK !== NULL && aK !== undefined) {
                var cL = bx.member941(Class72.member401);
                cL.member945(aK, T);
            }
        }
        ca(cJ, cN);
    };
    var b4 = function (cM, cV, cQ, cX, cN) {
        if (cV) {
            cQ = 0;
        }
        var cS = cM.member3219();
        bx.member1008(new Float32Array([
            (cS >> 24 & 255) / 255,
            (cS >> 16 & 255) / 255,
            (cS >> 8 & 255) / 255,
            (cS & 255) / 255
        ]), cQ);
        var cP = cM.member1471();
        var cG = cM.member3216();
        cG = (0.7 + 0.3) * cG;
        bx.member1009(new Float32Array([
            (cP >> 24 & 255) / 255 * cG,
            (cP >> 16 & 255) / 255 * cG,
            (cP >> 8 & 255) / 255 * cG
        ]), cQ);
        var cK = cM.member3217();
        bx.member1010(new Float32Array([
            (cP >> 24 & 255) / 255 * cK,
            (cP >> 16 & 255) / 255 * cK,
            (cP >> 8 & 255) / 255 * cK
        ]), cQ);
        var cL = cM.member3218();
        bx.member1011(new Float32Array([
            (cP >> 24 & 255) / 255 * cL,
            (cP >> 16 & 255) / 255 * cL,
            (cP >> 8 & 255) / 255 * cL
        ]), cQ);
        var cO = cM.member3215();
        bx.member1012(cO, cQ);
        var cU = bx.member941(Class72.member500);
        cU.member879(new Float32Array([
            0,
            0,
            0,
            0
        ]), cQ);
        cU.member878(Class417.member4809(cM.member3220(), cX, cN), cQ);
        var cH = undefined;
        if (bm !== undefined) {
            cH = bm.member6226();
        }
        Q = cM.member3237(aL, cH);
        if (Q !== NULL && Q !== undefined) {
            var cR = bx.member941(Class72.member501);
            cR.member1005(Q);
        }
        var cW = bx.member941(Class72.member502);
        cW.member924([
            cM.member3223(),
            cM.member3222(),
            cM.member3221()
        ], cQ);
        var cT = bx.member941(Class72.member414);
        cT.member994([
            cM.member3230(),
            cM.member3231(),
            cM.member3232(),
            cM.member3233(),
            cM.member3234()
        ], cQ);
        var cJ = bx.member941(Class72.member503);
        cJ.member996(cM.member3235(), cM.member3236(), cQ);
        aK = cM.member3226(ce, aL);
        if (aK !== NULL && aK !== undefined) {
            var cI = bx.member941(Class72.member401);
            cI.member945(aK, cQ);
        }
    };
    W.member8373 = function (cG, cI) {
        var cH = bx.member941(Class72.member500);
        if (P !== undefined) {
            cH.member878(Class417.member4809(P.member3220(), cG, cI), T);
        } else {
            cH.member878(Class417.member4809(0, cG, cI), T);
        }
    };
    var ca = W.member8373;
    W.member8374 = function (cG) {
        if (P !== undefined) {
            P.member3225(cG);
            aK = NULL;
        }
    };
    if (false) {
    }
    W.member7395 = function (cG, cI, cH) {
        return cl(cG, cH, cI);
    };
    var cl = function (cO, cW, cM) {
        if (cW[0] === 0 && cW[1] === 0 && cW[2] === 0) {
            return;
        }
        bN = -1;
        cv = -1;
        bL = -1;
        cs = -1;
        if (aA === NULL && aL.member1437(Class95.member837)) {
            var cH = aL.member1439(Class95.member837);
            var db = cH.member2700(bA.member6192());
            if (db !== undefined) {
                var c0 = aL.member1438(Class95.member837, db);
                if (c0) {
                    var cN = aL.getFile(Class95.member837, db, 0, Priority.member840);
                    if (cN !== undefined) {
                        var cU = cN.g2();
                        aA = new Array(cU);
                        for (var c6 = 0; c6 < cU; c6++) {
                            aA[c6] = {
                                member3460: Class291(cN.g4()),
                                member8375: cN.g2(),
                                members: cN.g1() === 1
                            };
                        }
                    }
                }
            } else {
                aA = new Array(0);
            }
        }
        var da = Math.floor(cW[0] / Class86.member731);
        var c7 = Math.floor(cW[2] / Class86.member731);
        var cX = false;
        if (da !== I || c7 !== F) {
            cX = true;
            if (bb === undefined) {
                bb = Date.now();
            }
            if (aI === undefined) {
                aI = Date.now();
            }
        }
        I = da;
        F = c7;
        var cS = 9;
        var c2 = cS;
        if (cc) {
            c2 = 99999;
        }
        var cQ = true;
        var cT = Math.floor(cW[0] / Class86.member730) - ab;
        var cR = Math.floor(cW[2] / Class86.member730) - Y;
        var cK = Class417.member4804();
        var c5 = 0;
        if (cK === Class121.member893) {
            c5 = Math.floor(Class417.member4810() / Class86.member730);
        } else if (cK === Class121.member796) {
            c5 = Math.floor(Class417.member4811() / Class86.member730);
        } else if (cK === Class121.member881) {
            c5 = Math.floor(Class417.member4812() / Class86.member730);
        } else if (cK === Class121.member797) {
            c5 = Math.floor(Class417.member4813() / Class86.member730);
        } else if (cK === Class121.member1028) {
            c5 = Math.floor(Class417.member4795(cW[1]) / Class86.member730);
        }
        if (g()) {
            c5 = Math.max(co, Z);
        }
        if (c5 < 1) {
            c5 = 1;
        }
        var cQ = cT >= 0 && cT <= co && cR >= 0 && cR <= Z;
        if (cT >= 0 && cT <= co && cR >= 0 && cR <= Z) {
            if (!aJ(cT, cR, cO, aN, aL, ce, r, cW, 0, c5, ab + cT, Y + cR, cX, cM)) {
                cQ = false;
                c2--;
            }
            b5 = ac[cT][cR];
            ax[0] = cT + ab;
            ax[1] = cR + Y;
        }
        if (cQ && aI !== undefined) {
            if (true) {
                var cG = 'Centre map square build took: ' + (Date.now() - aI) + 'ms';
                var cZ = Class293.document.getElementById('lastcentrebuildtime');
                if (cZ !== null) {
                    cZ.textContent = cG;
                }
            } else {
            }
            aI = undefined;
        }
        bN = cT - c5;
        cv = cT + c5;
        bL = cR - c5;
        cs = cR + c5;
        member8377:
            for (var cL = 1; cL <= c5; cL++) {
                var c3 = cT - cL;
                if (c3 < 0) {
                    c3 = 0;
                }
                var cY = cT + cL;
                if (cY > co) {
                    cY = co;
                }
                var c1 = cR - cL + 1;
                if (c1 < 0) {
                    c1 = 0;
                }
                var cV = cR + cL - 1;
                if (cV > Z) {
                    cV = Z;
                }
                if (cR + cL >= 0 && cR + cL <= Z) {
                    for (var c9 = c3; c9 <= cY; c9++) {
                        if (!aJ(c9, cR + cL, cO, aN, aL, ce, r, cW, cL, c5, ab + cT, Y + cR, cX, cM)) {
                            c2--;
                            if (c2 === 0) {
                                break member8377;
                            }
                        }
                    }
                }
                if (cR - cL >= 0 && cR - cL <= Z) {
                    for (var c9 = c3; c9 <= cY; c9++) {
                        if (!aJ(c9, cR - cL, cO, aN, aL, ce, r, cW, cL, c5, ab + cT, Y + cR, cX, cM)) {
                            c2--;
                            if (c2 === 0) {
                                break member8377;
                            }
                        }
                    }
                }
                if (cT + cL >= 0 && cT + cL <= co) {
                    for (var c8 = c1; c8 <= cV; c8++) {
                        if (!aJ(cT + cL, c8, cO, aN, aL, ce, r, cW, cL, c5, ab + cT, Y + cR, cX, cM)) {
                            c2--;
                            if (c2 === 0) {
                                break member8377;
                            }
                        }
                    }
                }
                if (cT - cL >= 0 && cT - cL <= co) {
                    for (var c8 = c1; c8 <= cV; c8++) {
                        if (!aJ(cT - cL, c8, cO, aN, aL, ce, r, cW, cL, c5, ab + cT, Y + cR, cX, cM)) {
                            c2--;
                            if (c2 === 0) {
                                break member8377;
                            }
                        }
                    }
                }
            }
        for (var c8 = cs + 1; c8 <= aM; c8++) {
            for (var c9 = D; c9 <= aO; c9++) {
                if (c9 >= 0 && c8 >= 0 && c9 <= co && c8 <= Z) {
                    e(ac[c9][c8]);
                    ac[c9][c8] = undefined;
                }
            }
        }
        for (var c8 = bL - 1; c8 >= C; c8--) {
            for (var c9 = D; c9 <= aO; c9++) {
                if (c9 >= 0 && c8 >= 0 && c9 <= co && c8 <= Z) {
                    e(ac[c9][c8]);
                    ac[c9][c8] = undefined;
                }
            }
        }
        for (var c9 = cv + 1; c9 <= aO; c9++) {
            for (var c8 = C; c8 <= aM; c8++) {
                if (c9 >= 0 && c8 >= 0 && c9 <= co && c8 <= Z) {
                    e(ac[c9][c8]);
                    ac[c9][c8] = undefined;
                }
            }
        }
        for (var c9 = bN - 1; c9 >= D; c9--) {
            for (var c8 = C; c8 <= aM; c8++) {
                if (c9 >= 0 && c8 >= 0 && c9 <= co && c8 <= Z) {
                    e(ac[c9][c8]);
                    ac[c9][c8] = undefined;
                }
            }
        }
        D = bN;
        aO = cv;
        C = bL;
        aM = cs;
        var cJ = 0, cI = 0, cP = 0;
        for (var c9 = bN; c9 <= cv; c9++) {
            for (var c8 = bL; c8 <= cs; c8++) {
                if (c9 >= 0 && c8 >= 0 && c9 <= co && c8 <= Z) {
                    var c4 = ac[c9][c8];
                    if (c4 !== undefined) {
                        cJ++;
                        if (c4.member4091()) {
                            cI++;
                        } else if (c4.member4087() <= Class121.member881) {
                            cP++;
                        }
                    }
                }
            }
        }
        cc = false;
        if (g()) {
            aP.member1537 = false;
        }
        if (c2 === cS && bb !== undefined) {
            if (true) {
                var cG = 'All map squares build took: ' + (Date.now() - bb) + 'ms';
                if (false) {
                }
                var cZ = Class293.document.getElementById('lastmapbuildtime');
                if (cZ !== null) {
                    cZ.textContent = cG;
                }
            } else {
            }
            bb = undefined;
        }
        if (cJ === 0) {
            return 0;
        } else {
            return (cI + cP / 2) / cJ * 100;
        }
    };
    var aJ = function (c0, cZ, cL, cV, cS, cH, cY, cP, cJ, cW, cO, cN, cQ, cK) {
        var cU = ac[c0][cZ];
        if (cU === undefined) {
            var cT = Class377();
            var cG = undefined;
            if (br !== undefined) {
                cG = B(br, ab + c0, Y + cZ);
            }
            cU = ac[c0][cZ] = Class418(cT, cw.member8303(), W, ab + c0, Y + cZ, cG);
            cT.member4185(cU);
            J[0] = (ab + c0) * Class86.member730;
            J[1] = 0;
            J[2] = (Y + cZ) * Class86.member730;
            cT.member4193(J);
            cw.member8303().member2013(cT);
            if (g()) {
                cU.member4837(cV, c0, cZ);
            }
        }
        var cT = cU.member3320();
        var cI = cT.member4167();
        var cX;
        if (g()) {
            a7.member1797(cI);
            a7.scale(2);
            var c1 = bG[1] * bG[1];
            var cR = !ag.member1803(a7);
            cX = Class417.member4814(c1, cR);
        } else {
            cX = Class417.member4571(cI.member1809(cP));
        }
        cU.member4090(cX);
        if (!cU.member4091() || cQ || cc || g() && aP.member1537 === true) {
            var cM = cU.member4380(cL, cV, cS, cH, cY, q, cP, cJ, cW, cO, cN, cK, bo.member4532, aP);
            if (cM && g()) {
                cT.member344(J);
                aB.push({
                    member8378: cU,
                    member8379: J[0],
                    member8380: J[2]
                });
                cU.member4858();
            }
            return cM;
        } else {
            return true;
        }
    };
    var e = function (cH) {
        if (cH !== undefined) {
            cH.member512();
            var cG = cH.member3320();
            cw.member8303().removeChild(cG);
        }
    };
    W.member8381 = function (cK, cH, cJ) {
        for (var cG = 0; cG < ad; cG++) {
            var cI = aw[cG].member4095();
            if (cI.member4130(cK, cH)) {
                cJ.push(aw[cG]);
            }
        }
    };
    W.member4485 = function (cH, cN, cO) {
        var cQ = cH.member3454;
        if (cO) {
            cQ = bG;
        }
        var cM = Math.floor(cQ[0] / Class86.member730) - ab;
        var cK = Math.floor(cQ[2] / Class86.member730) - Y;
        if (ac === undefined) {
            return 0;
        }
        if (cM < 0 || cM >= ac.length) {
            return 0;
        }
        if (cK < 0 || cK >= ac[cM].length) {
            return 0;
        }
        var cT = 0;
        var cG = cM, cS = cM;
        if (cQ[0] % Class86.member730 > Class86.member730 - Class86.member718 * 8) {
            cS++;
        } else if (cQ[0] % Class86.member730 < Class86.member718 * 8) {
            cG--;
        }
        var cV = cK, cR = cK;
        if (cQ[2] % Class86.member730 > Class86.member730 - Class86.member718 * 8) {
            cR++;
        } else if (cQ[2] % Class86.member730 < Class86.member718 * 8) {
            cV--;
        }
        for (var cP = cG; cP <= cS; cP++) {
            for (var cL = cV; cL <= cR; cL++) {
                if (cP < 0 || cP >= ac.length) {
                    continue;
                }
                if (cL < 0 || cL >= ac[cP].length) {
                    continue;
                }
                var cJ = ac[cP][cL];
                if (cJ === undefined || cJ.member4089() > Class121.member797 || cJ.member4089() > Class417.member4804()) {
                    continue;
                }
                var cU = cJ.member4831();
                if (cU === NULL) {
                    return -1;
                }
                for (var cI = 0; cI < cU.length; cI++) {
                    if (aj(cN, cT, cU[cI], cH.level, cQ, cO)) {
                        cT++;
                    }
                }
            }
        }
        return cT;
    };
    var aj = function (cJ, cP, cM, cH, cL, cK) {
        if (!cM.member4658(cH)) {
            return false;
        }
        var cI;
        if (cK) {
            cI = cM.member4657(bG);
            if (cI >= Class86.member730 / 2 * (Class86.member730 / 2)) {
                return false;
            }
            if (!ag.member1803(cM.member2098())) {
                return false;
            }
        } else {
            cI = cM.member4656(cL);
            if (cI === -1) {
                return false;
            }
        }
        if (cP === cJ.length) {
            var cN = 0;
            var cO = 0;
            for (var cQ = 0; cQ < cP; cQ++) {
                var cG = cJ[cQ].member4657(cL);
                if (cG > cN) {
                    cN = cG;
                    cO = cQ;
                }
            }
            if (cI < cN) {
                cJ[cO] = cM;
            }
            return false;
        } else {
            cJ[cP] = cM;
            return true;
        }
    };
    W.member4528 = function (cJ) {
        if (cJ === undefined) {
            return undefined;
        } else {
            var cI = new Array(0);
            for (var cG = 0; cG < cJ.length; cG++) {
                var cH = aQ[cJ[cG]];
                if (cH !== undefined) {
                    cI.push(cH);
                }
            }
            return cI;
        }
    };
    var cD = function (cI) {
        var cH = cI.member4186();
        if (cH !== undefined && cH.member87() === Class374.member4140) {
            cI.member344(J);
            aB.push({
                member8378: cH,
                member8379: J[0],
                member8380: J[2]
            });
            return;
        }
        var cG = cI.member2010();
        if (cG !== undefined) {
            for (var cJ = 0; cJ < cG.length; cJ++) {
                cD(cG[cJ]);
            }
        }
    };
    aT = undefined;
    return W;
};