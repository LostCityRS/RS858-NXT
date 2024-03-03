import { Class49 } from 'Class49.js';
import { Cuboid } from 'Class166.js';
import { Class148 } from 'Class148.js';
import { Class424 } from 'Class424.js';
import { Class601 } from 'Class601.js';
import { Class302 } from 'Class302.js';
import { Class301 } from 'Class301.js';
import { Class121 } from 'Class121.js';
import { Class86 } from 'Class86.js';
import { Class198 } from 'Class198.js';
import { Js5ConfigGroup } from 'Class131.js';
import { Class291 } from 'Class291.js';
import { Class515 } from 'Class515.js';
import { Class41 } from 'Class41.js';
import { CoordFine } from 'Class290.js';
import { Class467 } from 'Class467.js';
import { Class68 } from 'Class68.js';
import { Class63 } from 'Class63.js';
import { Class29 } from 'Class29.js';
import { Class5 } from 'Class5.js';
import { Class7 } from 'Class7.js';
import { Class75 } from 'Class75.js';
export var Class626 = function () {
    var aR = {};
    var ah;
    var D;
    var R;
    var ac;
    var ad;
    var r = 999999;
    var al = 999998;
    var ap = 999997;
    var g = 0;
    var Q = 1;
    var aQ = 2;
    aR.member9354 = 50;
    aR.member9355 = 3;
    var aa = 24;
    var ak = 16776960;
    var e = 0;
    var F = 96;
    var Y = 5;
    var aU = 1.2;
    var s = 2;
    aR.member9356 = 0;
    aR.member9357 = 1;
    aR.member9358 = 2;
    var n = 3 * 4 + 4 * 1;
    var aK = 3 * 4 + 2 * 2;
    var aS = 0;
    var aP = undefined;
    var S = {
        x: 0,
        y: 0
    };
    var aG = {
        x: 0,
        y: 0
    };
    var aw = new Float32Array(3);
    var aJ = new Float32Array(3);
    var av = new Float32Array(4);
    var aH = Class49.member313();
    var ag = Cuboid(new Float32Array([
        0,
        0,
        0
    ]), new Float32Array([
        0,
        0,
        0
    ]));
    var E = {
        x: 0,
        y: 0,
        w: 0,
        member1272: 0
    };
    var aj = Class49.member313();
    var C = Class49.member313();
    var az = Class49.create();
    var M = new Float32Array(4);
    var H = new Float32Array(4);
    var j = new Array(0);
    var k = false;
    var Z = false;
    aR.member1540 = function () {
        return k && Z;
    };
    var aV = undefined;
    var ai = undefined;
    var O = undefined;
    var I = new Array(0);
    var ao = new Array(0);
    var V = {};
    var aM = true;
    aR.member9359 = function (aW) {
        aM = aW;
    };
    aR.member9360 = function () {
        return aM;
    };
    var ar = {};
    aR.member9361 = function (aW, aX) {
        ar[aW] = aX;
    };
    var aC = aR.member9361;
    aR.member9362 = function (aW) {
        if (ar[aW] === undefined || ar[aW] === true) {
            return true;
        }
        return false;
    };
    var aA = aR.member9362;
    var aE = {};
    aR.member9363 = function (aW, aX) {
        aE[aW] = aX;
    };
    aR.member9364 = function (aW) {
        if (aE[aW] === undefined || aE[aW] === true) {
            return true;
        }
        return false;
    };
    var ay = aR.member9364;
    var aq = {};
    var P = function (aW) {
        if (aq[aW] === undefined || aq[aW] === false) {
            return false;
        }
        return true;
    };
    var T = new Array(0);
    var aL = {};
    var c = false;
    aR.member9365 = function (aW, aX) {
        if (aL[aW] === undefined) {
            i(aW, aX);
        } else {
            T[aL[aW]].priority = aX;
        }
    };
    aR.member9366 = function (aW) {
        if (aL[aW] === undefined) {
            throw new Error('1610 ');
        }
        return T[aL[aW]].priority;
    };
    var K = undefined;
    var aD = undefined;
    var at = undefined;
    aR.member9367 = function (aW) {
        K = aW;
    };
    aR.member9368 = function (aW) {
        aD = aW;
    };
    aR.member9369 = function (aW) {
        at = aW;
    };
    var a = new Array(0);
    var aB = [];
    var d = [];
    var q = aR.member9355;
    aR.member9370 = function (aW) {
        q = aW < 1 ? aR.member9355 : aW;
    };
    var af = aR.member9354;
    aR.member9371 = function (aW) {
        af = aW < 1 ? aR.member9354 : aW;
    };
    var ax = false;
    aR.member9372 = function (aW) {
        ax = aW;
    };
    aR.member9373 = function () {
        aB.length = 0;
        d.length = 0;
    };
    var X = 0;
    var G = new Array(0);
    var aO = false;
    var h = false;
    var z = false;
    aR.member9374 = function (aX, aW) {
        if (aX === aR.member9356) {
            aO = aW;
        } else if (aX === aR.member9357) {
            h = aW;
        } else if (aX === aR.member9358) {
            z = aW;
        }
    };
    aR.member9375 = function (aW) {
        if (aW === aR.member9356) {
            return aO;
        } else if (aW === aR.member9357) {
            return h;
        } else if (aW === aR.member9358) {
            return z;
        }
    };
    aR.member9376 = function (aX, aW) {
        if (aX === g) {
            aR.member9363(r, !aW);
        } else if (aX === Q) {
            aR.member9363(al, !aW);
        } else if (aX === aQ) {
            aR.member9363(ap, !aW);
        } else {
            return false;
        }
        return true;
    };
    aR.member9377 = function (aW) {
        if (aW === g) {
            return !aR.member9364(r);
        } else if (aW === Q) {
            return !aR.member9364(al);
        } else if (aW === aQ) {
            return !aR.member9364(ap);
        } else {
            return undefined;
        }
    };
    var aF = function () {
        if (ai === undefined) {
            return true;
        } else {
            return false;
        }
    };
    aR.member25 = function (aW) {
        ah = aW;
        D = ah.member6116;
        R = ah.member2970;
        ac = ah.member995;
        ad = ah.member433;
        i(al, -3);
        i(ap, -2);
        i(r, -1);
        c = true;
        Class148.member1501(aF);
    };
    var ae = aR.member25;
    var aI = function (aX, aW) {
        if (true) {
            am();
        } else {
        }
    };
    aR.member7183 = aI;
    aR.member9378 = function () {
        for (var aX = 0; aX < ao.length; aX++) {
            var aY = ao[aX];
            for (var aZ = 0; aZ < aY.member9379.length; aZ++) {
                var a1 = aY.member9379[aZ];
                for (var aW = 0; aW < a1.length; aW++) {
                    var a0 = a1[aW];
                    if (a0.member3615 !== undefined) {
                        a0.member3615.member512();
                    }
                    if (a0.member9380 !== undefined) {
                        ad.gl.deleteBuffer(a0.member491);
                        ad.gl.deleteBuffer(a0.member492);
                    }
                    if (a0.member9381 !== undefined) {
                        ad.gl.deleteBuffer(a0.member491);
                        for (l = 0; l < a0.member9381.member9382.member1492.length; l++) {
                            a0.member9381.member9382.member1492[l].member512();
                        }
                    }
                }
            }
        }
        ad.gl.deleteBuffer(aP);
        aP = undefined;
        aS = 0;
        V = {};
        ao.length = 0;
        aE.length = 0;
        I.length = 0;
        j.length = 0;
        ai = undefined;
        O = undefined;
        k = false;
        Z = false;
        X = 0;
        G.length = 0;
    };
    var am = aR.member9378;
    aR.member486 = function (aX, aZ, a9, a1, a0) {
        if (false) {
        }
        if (!k || ao.length === 0) {
            return;
        }
        Z = true;
        a.length = 0;
        E.x = a9.x;
        E.y = a9.y;
        E.w = a9.w;
        E.member1272 = a9.member1272;
        aG.x = a1;
        aG.y = a0;
        Class49.set(aZ.member8338(), aj);
        Class49.set(aZ.member8339(), C);
        var a6 = 0;
        for (var a7 = 0; a7 < ao.length; a7++) {
            var aW = ao[a7];
            aW.member9383 = false;
            if (aW.member9384 !== O) {
                var a5 = aW.member9384 >> 8 & 255;
                var a4 = aW.member9384 & 255;
                var a3 = ai.member8344(a5, a4);
                if (a3 === undefined || a3.member3320().member4192(1) !== aX) {
                    aW.member9383 = true;
                } else if (false) {
                }
            }
        }
        if (false) {
        }
        if (c) {
            v();
            c = false;
        }
        for (var bb = 0; bb < T.length; bb++) {
            var a2 = T[bb].type;
            var a8 = d[a2];
            for (var a7 = 0; a7 < ao.length; a7++) {
                var aW = ao[a7];
                var aY = aW.member9385[a2];
                if (aY !== undefined) {
                    y(a2, aW.member9379[aY].member7428, aW.member9383, a8);
                }
            }
        }
        ah.member433.member3874('MapOverlayManager end');
    };
    var J = aR.member486;
    var y = function (aZ, a1, aX, aY) {
        if (!aX && !ay(aZ)) {
            aX = true;
        }
        if (!aX && !aM && !(aZ === al || aZ === ap)) {
            aX = true;
        }
        if (aX && !P(aZ)) {
            return;
        }
        for (var aW = 0; aW < a1.length; aW++) {
            var a0 = a1[aW];
            var a2 = N(a0);
            if (aX || !a2) {
                m(a0);
            } else if (a2) {
                if (aY === undefined) {
                    aY = aB[a0.member9386];
                }
                W(a0, aY);
            }
        }
    };
    var N = function (aW) {
        if (aW.member9387 !== undefined) {
            if (!aA(aW.member9387)) {
                return false;
            }
            if (aW.member9387.member9121() === true) {
                if (aW.member9387.member3637() !== undefined) {
                    if (aW.member9387.member9338() === aR.member9356 && aO) {
                        return false;
                    } else if (aW.member9387.member9338() === aR.member9357 && h) {
                        return false;
                    } else if (aW.member9387.member9338() === aR.member9358 && z) {
                        return false;
                    }
                }
                return true;
            } else {
                return false;
            }
        }
        return true;
    };
    var m = function (aW) {
        if (aW.member9388) {
            a[a.length] = aW;
        }
    };
    var W = function (bE, bv) {
        if (bE.member9380 !== undefined) {
            if (!bE.member9389) {
                B(bE);
            }
            U(bE);
            return;
        }
        if (bE.member9390 !== undefined) {
            return;
        }
        if (bE.member9381 !== undefined) {
            aN(bE);
            return;
        }
        var a5 = 0;
        if (bE.member3615 !== undefined && bE.member3615.member1540()) {
            if (bE.member9386 !== undefined) {
                an(bE.member9111, 0, bE.member9112);
                var a9 = bE.member3615.member1539();
                var a8 = a9.member1285(bE.member3615.member1494());
                var a2 = S.x + a8.member1295.left;
                var bm = S.y + a8.member1295.top;
                if (bE.member9387 !== undefined) {
                    switch (bE.member9387.member9123()) {
                    case Class424.member6132:
                        a2 -= a8.member1292;
                        break;
                    case Class424.member6133:
                        a2 -= a8.member1292 / 2;
                        break;
                    case Class424.member6134:
                        break;
                    }
                    switch (bE.member9387.member9124()) {
                    case Class601.member9092:
                        break;
                    case Class601.member9093:
                        bm -= a8.member1293 / 2;
                        break;
                    case Class601.member9094:
                        bm -= a8.member1293;
                        break;
                    }
                }
                var bt = a2 + a8.member1292;
                var bq = bm + a8.member1293;
                a5 = a8.member1293;
                a[a.length] = bE;
                if (bt < 0 || bq < 0 || a2 > E.w || bm > E.member1272) {
                    bE.member9391 = false;
                    return;
                }
                if (aG.x < a2 || aG.x > bt || aG.y < bm || aG.y > bq) {
                    bE.member9391 = false;
                } else {
                    bE.member9391 = true;
                    if (bE.member9392 !== undefined && bE.member9392.member1540()) {
                        a9 = bE.member9392.member1539();
                        a8 = a9.member1285(bE.member9392.member1494());
                    }
                }
                if (bv !== undefined && bE.member9393 === undefined) {
                    var a6;
                    if (bv.member9394 > af / 2) {
                        a6 = (af - bv.member9394) * 2 / af;
                    } else {
                        a6 = bv.member9394 * 2 / af;
                    }
                    var a4 = e + (F - e) * a6;
                    var bB = ak << 8 | a4 & 255;
                    for (var bF = 0; bF < Y; bF++) {
                        var a3 = aU + bF / (Y - 1) * (s - aU);
                        var bC = a5 * a3 * 0.5;
                        var aX = S.x;
                        var bA = S.y;
                        if (bE.member9387 !== undefined) {
                            switch (bE.member9387.member9123()) {
                            case Class424.member6132:
                                aX -= a8.member1292 / 2;
                                break;
                            case Class424.member6133:
                                break;
                            case Class424.member6134:
                                aX -= a8.member1292 / 2;
                                break;
                            }
                            switch (bE.member9387.member9124()) {
                            case Class601.member9092:
                                bA -= a8.member1293 / 2;
                                break;
                            case Class601.member9093:
                                break;
                            case Class601.member9094:
                                bA += a8.member1293 / 2;
                                break;
                            }
                        }
                        ad.member3640.member3798(aX, bA, bC, aa, bB, false);
                    }
                }
                ad.member3640.member3627(a2, bm, bt, bq, 4294967295, a8.member493, a8.member494, a8.member495, a8.member496, a9.member1277(), false);
                if (bv !== undefined && bE.member9393 !== undefined && bE.member9393.member1540()) {
                    var a6;
                    if (bv.member9394 > af / 2) {
                        a6 = (af - bv.member9394) * 2 / af;
                    } else {
                        a6 = bv.member9394 * 2 / af;
                    }
                    var a7 = e + (F - e) * a6;
                    var bo = ak << 8 | a7 & 255;
                    var br = bE.member3615.member1539();
                    var a1 = br.member1285(bE.member9393.member1494());
                    var bb = S.x + a1.member1295.left;
                    var bx = S.y + a1.member1295.top;
                    if (bE.member9387 !== undefined) {
                        switch (bE.member9387.member9123()) {
                        case Class424.member6132:
                            bb -= a1.member1292;
                            break;
                        case Class424.member6133:
                            bb -= a1.member1292 / 2;
                            break;
                        case Class424.member6134:
                            break;
                        }
                        switch (bE.member9387.member9124()) {
                        case Class601.member9092:
                            break;
                        case Class601.member9093:
                            bx -= (a1.member1293 / 2 + a8.member1293) / 2;
                            break;
                        case Class601.member9094:
                            bx -= (a1.member1293 + a8.member1293) / 2;
                            break;
                        }
                    }
                    var aY = bb + a1.member1292;
                    var bG = bx + a1.member1293;
                    ad.member3640.member3627(bb, bx, aY, bG, bo, a1.member493, a1.member494, a1.member495, a1.member496, br.member1277(), false);
                }
            }
        }
        if (bE.member9387 !== undefined && bE.member9387.member3637() !== undefined) {
            var a0 = bE.member9387;
            an(bE.member9111 + a0.member9339(), 0, bE.member9112 + a0.member9340());
            var bl = undefined;
            if (a0.member9338() === aR.member9356) {
                bl = K;
            } else if (a0.member9338() === aR.member9357) {
                bl = aD;
            } else if (a0.member9338() === aR.member9358) {
                bl = at;
            }
            if (bl !== undefined) {
                bl = ah.member7137.member3639(bl);
                if (bl === NULL) {
                    bl = undefined;
                }
            }
            if (bl === undefined) {
                return;
            }
            var aW = Class302.member3612(a0.member3637(), undefined, 0, bl, null);
            var aZ = Class302.member3613(a0.member3637(), undefined, bl, null);
            if (a5 === 0) {
                S.y += aW / 2;
            } else {
                S.y -= a5 / 2;
            }
            var bh = S.x - aZ / 2 - 5;
            var be = S.y - aW - 2;
            if (a0.member9341() !== 0) {
                ad.member3640.member3796(bh, be, aZ + 10, aW + 1, a0.member9341(), false);
            }
            if (a0.member9342() !== 0) {
                ad.member3640.member3800(bh, be, aZ + 10, aW + 1, 1, a0.member9342(), false);
            }
            var bD = a0.member9336();
            if (bE.member9391 && a0.member9337() !== -1) {
                bD = a0.member9337();
            }
            Class302.member3604(a0.member3637(), S.x, S.y, bl, -1, -1, Class301.member3595, Class301.member3596, 0, 0, bD, 255, null, null);
        }
        if (bE.member9387 !== undefined && bE.member9387.member9106() !== undefined) {
            var a0 = bE.member9387;
            var bj = a0.member9106();
            j.length = bj.member9127.length;
            for (var bF = 0; bF < j.length; bF += 2) {
                an(bj.member9127[bF] + bE.member9111, 0, bj.member9127[bF + 1] + bE.member9112);
                j[bF] = S.x;
                j[bF + 1] = S.y;
            }
            ad.member3640.member3797(j, bj.member9128, bj.member9129, false);
            for (var bF = 0; bF < j.length - 2; bF += 2) {
                ad.member3640.member3802(j[bF], j[bF + 1], j[bF + 2], j[bF + 3], 1, bj.member9130[bj.member9131[bF / 2]], false);
            }
            ad.member3640.member3802(j[j.length - 2], j[j.length - 1], j[0], j[1], 1, bj.member9130[bj.member9131[j.length / 2 - 1]], false);
        }
    };
    aR.member4086 = function (aW) {
        am();
        ai = aW;
        O = ai.member8342() + 1 << 8 | ai.member8343() + 1;
        A(O, Class121.member1029);
    };
    var o = function () {
        var aX = ai.member8341();
        if (aX === undefined || aX === null) {
            return false;
        }
        k = true;
        if (aX.length === 0) {
            return true;
        }
        for (var aW = 0; aW < aX.length; aW++) {
            var aZ = aX[aW];
            if (aZ !== undefined) {
                var aY = ai.member4695().member6202(aZ.member3460);
                if (aY !== undefined) {
                    I.push({
                        member9384: O,
                        member9395: {
                            member9111: aY.x * Class86.member718,
                            member9112: aY.member756 * Class86.member718,
                            member9386: aZ.member8375
                        }
                    });
                }
            }
        }
        return true;
    };
    var A = function (aZ, aY, aX, aW) {
        V[aZ] = ao.length;
        ao[ao.length++] = {
            member9384: aZ,
            member9396: aX,
            member9397: aW,
            member4071: aY,
            member9379: new Array(0),
            member9385: {},
            member9398: false,
            member9399: 0
        };
    };
    aR.member487 = function () {
        if (ai === undefined) {
            return;
        }
        if (!k && !o()) {
            return;
        }
        var a5 = ai.member8351();
        for (var bt = 0; bt < a5.length; bt++) {
            var a3 = a5[bt];
            var be = a3.member8378;
            var bq = be.member4828() << 8 | be.member4829();
            var aX = false;
            if (V[bq] !== undefined) {
                ao[V[bq]].member4071 = be.member4087();
            } else {
                var br = be.member4835();
                if (br === NULL) {
                    continue;
                }
                var a6 = br.member4617();
                if (a6 === NULL) {
                    continue;
                }
                A(bq, be.member4087(), a3.member8379, a3.member8380);
                for (var a9 = 0; a9 < a6.length; a9++) {
                    var aW = a6[a9];
                    var a2 = a3.member8379 + aW.x * Class86.member718;
                    var a1 = a3.member8380 + aW.member756 * Class86.member718;
                    var bm = aW.member4148.getMSI();
                    if (bm !== -1) {
                        ao[V[bq]].member9399++;
                        var a8 = 0;
                        if (aW.member4148.getMSIRotate()) {
                            a8 = aW.member2520 + aW.member4148.getMSIAngle() & 3;
                        }
                        I.push({
                            member9384: bq,
                            member9395: {
                                member9111: a2,
                                member9112: a1,
                                member9390: bm,
                                member9400: a8,
                                member9401: aW.member4148.getMSIMirror(),
                                member9402: {
                                    width: aW.member4148.getWidth(),
                                    length: aW.member4148.getLength()
                                }
                            }
                        });
                    } else {
                        if (aW.level !== 0) {
                            continue;
                        }
                        var a0 = 4294967295;
                        if (aW.member4148.getActive()) {
                            a0 = 4278190335;
                        }
                        if (aW.member2519 === Class198.member2330 || aW.member2519 === Class198.member2332) {
                            var bj, bh;
                            if (aW.member2520 === 0) {
                                bj = a2;
                                bh = a1 + Class86.member718;
                            } else if (aW.member2520 === 1) {
                                bj = a2 + Class86.member718;
                                bh = a1 = a1 + Class86.member718;
                            } else if (aW.member2520 === 2) {
                                bj = a2 = a2 + Class86.member718;
                                bh = a1 + Class86.member718;
                            } else if (aW.member2520 === 3) {
                                bj = a2 + Class86.member718;
                                bh = a1;
                            }
                            L(bq, al, {
                                member9403: a2,
                                member9404: a1,
                                member9405: bj,
                                member9406: bh,
                                member9407: a0,
                                member9408: aW.level
                            });
                            aX = true;
                        }
                        if (aW.member2519 === Class198.member2333) {
                            var bj, bh;
                            if (aW.member2520 === 0) {
                                bj = a2;
                                bh = a1;
                            } else if (aW.member2520 === 1) {
                                bj = a2 = a2 + Class86.member718;
                                bh = a1;
                            } else if (aW.member2520 === 2) {
                                bj = a2 = a2 + Class86.member718;
                                bh = a1 = a1 + Class86.member718;
                            } else if (aW.member2520 === 3) {
                                bj = a2;
                                bh = a1 = a1 + Class86.member718;
                            }
                            L(bq, al, {
                                member9403: a2,
                                member9404: a1,
                                member9405: bj,
                                member9406: bh,
                                member9407: a0,
                                member9408: aW.level
                            });
                            aX = true;
                        }
                        if (aW.member2519 === Class198.member2334) {
                            if (aW.member2520 === 0 || aW.member2520 == 2) {
                                bj = a2 + Class86.member718;
                                bh = a1 + Class86.member718;
                            } else {
                                bj = a2 + Class86.member718;
                                bh = a1;
                                a1 += Class86.member718;
                            }
                            L(bq, al, {
                                member9403: a2,
                                member9404: a1,
                                member9405: bj,
                                member9406: bh,
                                member9407: a0,
                                member9408: aW.level
                            });
                            aX = true;
                        }
                    }
                    var a7 = aW.member4148.getMapElement();
                    if (a7 !== -1) {
                        I.push({
                            member9384: bq,
                            member9395: {
                                member9111: a2,
                                member9112: a1,
                                member9386: a7
                            }
                        });
                    }
                }
            }
            a5.splice(bt, 1);
            bt--;
        }
        if (I.length !== 0) {
            for (var bt = 0; bt < I.length; bt++) {
                var bo = I[bt];
                var aY = t(bo.member9395);
                if (aY === NULL) {
                    continue;
                }
                I.splice(bt, 1);
                bt--;
                if (aY === -1) {
                    aY = r;
                }
                if (aY !== undefined) {
                    L(bo.member9384, aY, bo.member9395);
                } else if (bo.member9395.member9390 !== undefined) {
                    var a4 = V[bo.member9384];
                    if (--ao[a4].member9399 === 0) {
                        var bl = ao[a4].member9385[ap];
                        var bb = ao[a4].member9379[bl];
                        if (bb !== undefined) {
                            ab(bb);
                        }
                    }
                }
            }
        }
        b();
        for (id in aB) {
            var aZ = aB[id];
            if (aZ === undefined) {
                continue;
            }
            aZ.member9394--;
            if (aZ.member9394 === 0) {
                if (aZ.member9409 <= 1 && !ax) {
                    aB[id] = undefined;
                } else {
                    aZ.member9409--;
                    aZ.member9394 = af;
                }
            }
        }
        for (id in d) {
            var aZ = d[id];
            if (aZ === undefined) {
                continue;
            }
            aZ.member9394--;
            if (aZ.member9394 === 0) {
                if (aZ.member9409 <= 1 && !ax) {
                    d[id] = undefined;
                } else {
                    aZ.member9409--;
                    aZ.member9394 = af;
                }
            }
        }
    };
    var L = function (aZ, aW, aX) {
        var aY = V[aZ];
        var a1 = ao[aY].member9385[aW];
        if (a1 === undefined) {
            a1 = ao[aY].member9379.length;
            ao[aY].member9385[aW] = a1;
            ao[aY].member9379[a1] = {
                member9410: aW,
                member7428: new Array(0)
            };
        }
        if (aW === al) {
            if (ao[aY].member9379[a1].member7428.length === 0) {
                ao[aY].member9379[a1].member7428.push({
                    member9127: new Array(0),
                    member9411: new Array(0),
                    member9380: true,
                    member9389: false
                });
            }
            var a0 = ao[aY].member9379[a1].member7428[0];
            aT(a0, aX);
        } else {
            ao[aY].member9379[a1].member7428.push(aX);
            if (aW === ap && --ao[aY].member9399 === 0) {
                ab(ao[aY].member9379[a1]);
            }
        }
        if (aL[aW] === undefined) {
            i(aW, 0);
        }
        if (aX.member9328 !== undefined) {
            G.push(aX.member9328);
            aX.member9328 = undefined;
        }
    };
    var i = function (aW, aX) {
        aL[aW] = T.length;
        T.push({
            type: aW,
            priority: aX
        });
        c = true;
    };
    var t = function (a1) {
        if (a1.member9386 !== undefined) {
            var aY = R.getConfigType(Js5ConfigGroup.MELTYPE.member1204, a1.member9386);
            if (aY === NULL) {
                return NULL;
            }
            var a0 = aY.member7027();
            var a2 = aY.member9335();
            var a3 = aY.member9347();
            if (aY.member9119()) {
                var aX = aY.member9120();
                if (aX === NULL) {
                    return NULL;
                }
                if (aX === undefined || !aX.member9121()) {
                    return;
                }
                a0 = aX.member7027();
                a2 = aX.member9335();
                a3 = aX.member9347();
            }
            if (!aY.member9343()) {
                return undefined;
            }
            a1.member9387 = aY;
            if (a0 !== -1) {
                a1.member3615 = Class148.member1491(a0);
            }
            if (a2 !== -1) {
                a1.member9392 = Class148.member1491(a2);
            }
            if (a3 !== -1) {
                a1.member9393 = Class148.member1491(a3);
            }
            if (aY.member9334()) {
                var aZ = Class291(0, a1.member9111 / Class86.member718, a1.member9112 / Class86.member718);
                a1.member9328 = {
                    member9412: a1.member9386,
                    member9413: aZ.member3462()
                };
            }
            aq[aY.getCategory] = true;
            return aY.getCategory();
        } else if (a1.member9390 !== undefined) {
            var aW = R.getConfigType(Js5ConfigGroup.MSITYPE.member1204, a1.member9390);
            if (aW === NULL) {
                return NULL;
            }
            var a0 = aW.member7027();
            if (a0 === undefined || a0 === -1) {
                console.log('MapOverlayManager.loadMapElement - Cannot load MSI type element, invalid sprite ID');
                return undefined;
            }
            if (a1.member9402 !== undefined) {
                if (!aW.getResize() || a1.member9402.width === 1 && a1.member9402.length === 1) {
                    a1.member9402 = undefined;
                }
            }
            if (a1.member3615 === undefined) {
                a1.member3615 = Class148.member1491(a0);
            }
            if (!a1.member3615.member1540()) {
                return NULL;
            }
            return ap;
        } else {
            throw new Error('1611 ');
        }
    };
    var x = function (a5) {
        var aZ = a5 >> 8 & 255;
        var aY = a5 & 255;
        var a1 = V[a5];
        var a3 = ao[a1].member9385[al];
        var aW = ao[a1].member9379[a3].member7428;
        var aX = ai.member8344(aZ, aY);
        if (aX === undefined) {
            if (false) {
            }
            return;
        }
        for (var a0 = 0; a0 < aW.length; a0++) {
            var a2 = aW[a0];
            var a4 = ai.member4114().member4115(a2.member9408, a2.member9403, a2.member9404, false, false);
            if (a4 === -1) {
                return;
            }
            a2.member9414 = a2.member9408;
            a4 = ai.member4114().member4115(a2.member9408, a2.member9405, a2.member9406, false, false);
            if (a4 === -1) {
                return;
            }
            a2.member9415 = a2.member9408;
        }
    };
    var an = function (aX, aY, aW) {
        av[0] = C[0] * aX + C[4] * aY + C[8] * aW + C[12];
        av[1] = C[1] * aX + C[5] * aY + C[9] * aW + C[13];
        av[3] = C[3] * aX + C[7] * aY + C[11] * aW + C[15];
        S.x = E.x + (av[0] / av[3] + 1) * E.w / 2;
        S.y = E.y + (-av[1] / av[3] + 1) * E.member1272 / 2;
    };
    aR.member9416 = function (aX, aY, aW) {
        aw[0] = aX;
        aw[1] = aY;
        aw[2] = aW;
        Class515.member8337(aw, ai);
        return {
            x: E.x + (aw[0] + 1) * E.w / 2,
            y: E.y + (aw[1] + 1) * E.member1272 / 2
        };
    };
    aR.member9417 = function (aX, aW, aY) {
        aW = E.member1272 - aW;
        Class49.set(C, az);
        var aZ = Class49.inverse(az);
        if (aZ === null) {
            return undefined;
        }
        H[0] = M[0] = 2 * aX / E.w - 1;
        H[1] = M[1] = 2 * aW / E.member1272 - 1;
        H[3] = M[3] = 1;
        H[2] = 1;
        M[2] = -1;
        Class49.member331(az, M);
        Class49.member331(az, H);
        M[0] /= M[3];
        M[1] /= M[3];
        M[2] /= M[3];
        H[0] /= H[3];
        H[1] /= H[3];
        H[2] /= H[3];
        Class41.normalize(Class41.member322(M, H, aw));
        var a0 = M[1] / aw[1];
        Class41.scale(aw, a0);
        Class41.add(M, aw);
        return CoordFine(0, M[0], M[1], M[2]);
    };
    var u = aR.member9417;
    aR.member9218 = function (aX, aW, aY) {
        var aZ = u(aX, aW, aY);
        if (aZ === undefined) {
            return undefined;
        }
        return ai.member4695().member6203(Class291(aZ));
    };
    var au = function (aW, aX) {
        return aW.priority - aX.priority;
    };
    var v = function () {
        T.sort(au);
        for (var aW = 0; aW < T.length; aW++) {
            aL[T[aW].type] = aW;
        }
    };
    var b = function () {
        var aZ = aG.x - E.x;
        var aY = aG.y - E.y;
        for (var aW = 0; aW < a.length; aW++) {
            var aX = a[aW];
            if (aX.member9391) {
                if (!aX.member9388) {
                    aX.member9388 = true;
                    ah.member7887.member9418(Class467.member7413, aX.member9386, aX.member9387.getCategory(), aZ, aY);
                }
                if (aX.member9388) {
                    ah.member7887.member9418(Class467.member7415, aX.member9386, aX.member9387.getCategory(), aZ, aY);
                }
            } else if (aX.member9388) {
                aX.member9388 = false;
                ah.member7887.member9418(Class467.member7414, aX.member9387, aX.member9387.getCategory(), aZ, aY);
            }
        }
    };
    aR.member9419 = function (aZ, aY, aX) {
        for (var aW = 0; aW < a.length; aW++) {
            var a0 = a[aW];
            if (a0.member9388 && a0.member9387 !== undefined) {
                aX[aX.length] = a0.member9387;
            }
        }
        return true;
    };
    aR.member9420 = function (aX) {
        var aW = aB[member9395];
        if (aW === undefined) {
            aB[category] = {
                member9409: q,
                member9394: af
            };
        } else {
            aW.member9409 = q;
            aW.member9394 = af;
        }
    };
    aR.member9421 = function (aX) {
        var aW = d[aX];
        if (aW === undefined) {
            d[aX] = {
                member9409: q,
                member9394: af
            };
        } else {
            aW.member9409 = q;
            aW.member9394 = af;
        }
    };
    aR.member9422 = function () {
        X = 0;
        return aR.member9423();
    };
    aR.member9423 = function () {
        return G[X++];
    };
    aR.member9424 = function (be, a8) {
        var aY = be.member682();
        var a5 = be.getCategory();
        var aX = Number.MAX_VALUE;
        var a4 = ai.member4695().member6202(a8);
        var a3 = a4.x * Class86.member718;
        var aZ = a4.member756 * Class86.member718;
        var a9 = undefined;
        for (var a7 = 0; a7 < ao.length; a7++) {
            var aW = ao[a7];
            var a2 = aW.member9385[member9410];
            if (a2 !== undefined) {
                var a1 = aW.member9379[a2].member7428;
                for (var a6 = 0; a6 < a1.length; a6++) {
                    var bb = a1[a6];
                    if (bb.member9386 === be.id) {
                        var a0 = (a3 - bb.member9111) * (a3 - bb.member9111) + (aZ - bb.member9112) * (aZ - bb.member9112);
                        if (a0 < aX) {
                            aX = a0;
                            a9 = bb;
                        }
                    }
                }
            }
        }
        if (a9 === undefined) {
            return undefined;
        } else {
            return Class291(0, bb.member9111 / Class86.member718, bb.member9112 / Class86.member718);
        }
    };
    var aT = function (aY, a1) {
        var a0, aZ;
        for (var aX = 0; aX < aY.member9127.length; aX++) {
            if (a1.member9407 !== aY.member9127[aX].member7892) {
                continue;
            }
            var aW = aY.member9127[aX].x;
            var a2 = aY.member9127[aX].member756;
            if (a0 === undefined) {
                if (a1.member9403 === aW && a1.member9404 === a2) {
                    a0 = aX;
                }
            }
            if (aZ === undefined) {
                if (a1.member9405 === aW && a1.member9406 === a2 && a0 !== aX) {
                    aZ = aX;
                }
            } else {
                break;
            }
        }
        if (a0 === undefined) {
            a0 = aY.member9127.length;
            aY.member9127.push({
                x: a1.member9403,
                y: 0,
                member756: a1.member9404,
                member546: a1.member9407
            });
        }
        if (aZ === undefined) {
            aZ = aY.member9127.length;
            aY.member9127.push({
                x: a1.member9405,
                y: 0,
                member756: a1.member9406,
                member546: a1.member9407
            });
        }
        aY.member9411.push(a0);
        aY.member9411.push(aZ);
    };
    var B = function (a3) {
        a3.member9389 = true;
        if (a3.member9127.length === 0) {
            return;
        }
        a3.member491 = ad.gl.createBuffer();
        var aW = new ArrayBuffer(n * a3.member9127.length);
        var a0 = new Uint8Array(aW);
        var a1 = new Float32Array(aW);
        a3.member492 = ad.gl.createBuffer();
        var aY = new ArrayBuffer(a3.member9411.length * 2);
        var aX = new Uint16Array(aY);
        var a4 = 0;
        for (var aZ = 0; aZ < a3.member9127.length; aZ++) {
            var a2 = a3.member9127[aZ];
            a1[a4++] = a2.x;
            a1[a4++] = a2.y;
            a1[a4++] = a2.member756;
            a0[a4 * 4] = a2.member546 >> 24 & 255;
            a0[a4 * 4 + 1] = a2.member546 >> 16 & 255;
            a0[a4 * 4 + 2] = a2.member546 >> 8 & 255;
            a0[a4 * 4 + 3] = a2.member546 & 255;
            a4++;
        }
        ad.gl.bindBuffer(ad.gl.ARRAY_BUFFER, a3.member491);
        ad.gl.bufferData(ad.gl.ARRAY_BUFFER, aW, ad.gl.STATIC_DRAW);
        a3.member9425 = 0;
        for (var aZ = 0; aZ < a3.member9411.length; aZ++) {
            aX[a3.member9425++] = a3.member9411[aZ];
        }
        ad.gl.bindBuffer(ad.gl.ELEMENT_ARRAY_BUFFER, a3.member492);
        ad.gl.bufferData(ad.gl.ELEMENT_ARRAY_BUFFER, aY, ad.gl.STATIC_DRAW);
        aW = undefined;
        a0 = undefined;
        a1 = undefined;
        aY = undefined;
        aX = undefined;
        a3.member9127 = undefined;
        a3.member9411 = undefined;
    };
    var U = function (aW) {
        ad.member3640.member1630();
        var aX = Class68.member421(Class63.member408.id, Class29([Class5.member109]));
        Class68.member483(aX, true);
        ad.gl.lineWidth(1);
        ad.gl.bindBuffer(ad.gl.ARRAY_BUFFER, aW.member491);
        ad.gl.bindBuffer(ad.gl.ELEMENT_ARRAY_BUFFER, aW.member492);
        ad.gl.uniformMatrix4fv(aX.member457(Class7.member142.id), false, C);
        ad.gl.vertexAttribPointer(aX.member459(Class7.member262.id), 3, ad.gl.FLOAT, false, n, 0);
        ad.gl.vertexAttribPointer(aX.member459(Class7.member265.id), 4, ad.gl.UNSIGNED_BYTE, false, n, 12);
        ad.gl.drawElements(ad.gl.LINES, aW.member9425, ad.gl.UNSIGNED_SHORT, 0);
        ad.member1632();
        ad.member587();
    };
    var ab = function (bD) {
        if (bD.member7428.length === 0) {
            return;
        }
        var bb = {
            member9426: new Array(0),
            member9427: new Array(0),
            member9428: new Array(0),
            member9411: new Array(0)
        };
        for (var bI = 0; bI < bD.member7428.length; bI++) {
            var bH = bD.member7428[bI];
            var aW = bH.member3615.member1494();
            var bo = bH.member3615.member1539();
            var bq = bo.member1277();
            var aX;
            for (var bE = 0; bE < bb.member9426.length; bE++) {
                if (bb.member9426[bE].texture === bq) {
                    aX = bb.member9426[bE];
                }
            }
            if (aX === undefined) {
                bb.member9426.push({
                    texture: bq,
                    member1492: {},
                    member7428: new Array(0)
                });
                aX = bb.member9426[bb.member9426.length - 1];
            }
            if (aX.member1492[aW] === undefined) {
                var bm = bo.member1285(aW);
                aX.member1492[aW] = {
                    member3606: bH.member3615,
                    member493: bm.member493 * ad.member3640.member3813,
                    member494: bm.member494 * ad.member3640.member3813,
                    member495: bm.member495 * ad.member3640.member3813,
                    member496: bm.member496 * ad.member3640.member3813,
                    member1292: bm.member1292,
                    member1293: bm.member1293
                };
            } else {
                bH.member3615.member512();
            }
            aX.member7428.push(bH);
        }
        for (var bI = 0; bI < bb.member9426.length; bI++) {
            var aX = bb.member9426[bI];
            var bF = new ArrayBuffer(aK * aX.member7428.length * 4);
            var br = new Uint16Array(bF);
            var bG = new Float32Array(bF);
            var bl = 5;
            var bj = 0;
            for (var bE = 0; bE < aX.member7428.length; bE++) {
                var bH = aX.member7428[bE];
                var aW = bH.member3615.member1494();
                var a9 = (bH.member9400 & 1) === 1 ? aX.member1492[aW].member1293 : aX.member1492[aW].member1292;
                var a7 = (bH.member9400 & 1) === 1 ? aX.member1492[aW].member1292 : aX.member1492[aW].member1293;
                var bC = bH.member9111;
                var bt = bH.member9112 + Class86.member718 * 2;
                var bx = bt - Class86.member718 * a7 / 5;
                var bv = bC + Class86.member718 * a9 / 5;
                var be = bH.member9401 ? aX.member1492[aW].member495 : aX.member1492[aW].member493;
                var a8 = bH.member9401 ? aX.member1492[aW].member493 : aX.member1492[aW].member495;
                var aZ, aY, a3, a1, a6, a4, a2, a0;
                if (bH.member9400 === 0) {
                    aZ = a2 = be;
                    aY = a1 = aX.member1492[aW].member496;
                    a3 = a6 = a8;
                    a0 = a4 = aX.member1492[aW].member494;
                } else if (bH.member9400 === 1) {
                    aZ = a3 = be;
                    a1 = a4 = aX.member1492[aW].member496;
                    a2 = a6 = a8;
                    a0 = aY = aX.member1492[aW].member494;
                } else if (bH.member9400 === 2) {
                    a3 = a6 = be;
                    a0 = a4 = aX.member1492[aW].member496;
                    aZ = a2 = a8;
                    aY = a1 = aX.member1492[aW].member494;
                } else {
                    a6 = a2 = be;
                    a0 = aY = aX.member1492[aW].member496;
                    aZ = a3 = a8;
                    a1 = a4 = aX.member1492[aW].member494;
                }
                bG[bj++] = bC;
                bG[bj++] = bl;
                bG[bj++] = bx;
                br[bj * 2] = a2;
                br[bj * 2 + 1] = a0;
                bj++;
                bG[bj++] = bC;
                bG[bj++] = bl;
                bG[bj++] = bt;
                br[bj * 2] = aZ;
                br[bj * 2 + 1] = aY;
                bj++;
                bG[bj++] = bv;
                bG[bj++] = bl;
                bG[bj++] = bt;
                br[bj * 2] = a3;
                br[bj * 2 + 1] = a1;
                bj++;
                bG[bj++] = bv;
                bG[bj++] = bl;
                bG[bj++] = bx;
                br[bj * 2] = a6;
                br[bj * 2 + 1] = a4;
                bj++;
            }
            var a5 = ad.gl.createBuffer();
            ad.gl.bindBuffer(ad.gl.ARRAY_BUFFER, a5);
            ad.gl.bufferData(ad.gl.ARRAY_BUFFER, bF, ad.gl.STATIC_DRAW);
            var bh = aX.member7428.length * 6;
            if (bh > aS) {
                if (aP !== undefined) {
                    ad.gl.deleteBuffer(aP);
                }
                var bB = new ArrayBuffer(bh * 2);
                var bA = new Uint16Array(bB);
                var bh = 0;
                for (var bE = 0; bE < aX.member7428.length; bE++) {
                    bA[bh++] = bE * 4 + 0;
                    bA[bh++] = bE * 4 + 2;
                    bA[bh++] = bE * 4 + 1;
                    bA[bh++] = bE * 4 + 0;
                    bA[bh++] = bE * 4 + 3;
                    bA[bh++] = bE * 4 + 2;
                }
                aS = bh;
                aP = ad.gl.createBuffer();
                ad.gl.bindBuffer(ad.gl.ELEMENT_ARRAY_BUFFER, aP);
                ad.gl.bufferData(ad.gl.ELEMENT_ARRAY_BUFFER, bB, ad.gl.STATIC_DRAW);
            }
            bb.member9411.push(bh);
            bb.member9427.push(a5);
            aX.member7428 = undefined;
        }
        bD.member7428.length = 0;
        for (var bI = 0; bI < bb.member9426.length; bI++) {
            bD.member7428.push({
                member9381: true,
                member9382: bb.member9426[bI],
                member491: bb.member9427[bI],
                member9425: bb.member9411[bI]
            });
        }
    };
    var aN = function (aW) {
        ad.member3640.member1630();
        ad.member590(true);
        var aY = Class68.member421(Class63.member409.id, Class29([Class5.member93]));
        Class68.member483(aY, true);
        ad.gl.bindBuffer(ad.gl.ARRAY_BUFFER, aW.member491);
        ad.gl.bindBuffer(ad.gl.ELEMENT_ARRAY_BUFFER, aP);
        var aX = ad.bindTexture(Class75.member393, aW.member9382.texture.member558(), ad.gl.TEXTURE_2D);
        ad.gl.uniform1i(aY.member457(Class7.member159.id), aX);
        ad.gl.uniformMatrix4fv(aY.member457(Class7.member142.id), false, C);
        ad.gl.vertexAttribPointer(aY.member459(Class7.member262.id), 3, ad.gl.FLOAT, false, aK, 0);
        ad.gl.vertexAttribPointer(aY.member459(Class7.member270.id), 2, ad.gl.SHORT, false, aK, 12);
        ad.gl.drawElements(ad.gl.TRIANGLES, aW.member9425, ad.gl.UNSIGNED_SHORT, 0);
        ad.member1632();
        ad.member587();
    };
    return aR;
}();