import { Class262 } from 'Class262.js';
import { Class279 } from 'Class279.js';
import { Packet } from 'Class124.js';
import { Class276 } from 'Class276.js';
import { Class280 } from 'Class280.js';
export var Class281 = function () {
    var a = function () {
        var bb = {};
        var s = true;
        var a0 = false;
        var am = Class262.member3034;
        var aq = Class279.member3304;
        var ai = undefined;
        var aX;
        var T;
        var ag;
        var h;
        var aZ;
        var an;
        var N;
        var aj;
        var r;
        var g;
        var y;
        var aO;
        var a8;
        var aR;
        var Y;
        var au;
        var a1;
        var bh;
        var F;
        var S;
        var D;
        var j;
        var a6;
        var aM;
        var aF;
        var Z;
        var X;
        var u;
        var t;
        var aQ;
        var i;
        var ap;
        var ak;
        var aI;
        var C;
        var aK;
        var a7;
        var M;
        var aE;
        var al;
        var e;
        var aJ;
        var at;
        var I;
        var a2;
        var aa;
        var P;
        var H;
        var a3;
        var be;
        var aT;
        var b;
        var aA;
        var K;
        var bj;
        var A;
        var aS;
        var aU = 0;
        var q = 0;
        var o;
        var n;
        var G;
        var ah = false;
        var af = 3000;
        var ae = 0;
        var ab = 1;
        var aH = function (bq, bl, bo, bm) {
            L();
            aM = bm;
            am = bl;
            aq = Class279.member3305;
            ai = bo;
            aK = bq;
            a0 = true;
            return true;
        };
        bb.member25 = aH;
        var aY = function () {
            aX = undefined;
            am = Class262.member3034;
            aq = Class279.member3304;
        };
        bb.member497 = aY;
        var ad = function () {
            for (var bl = 0; bl < aF.length; bl++) {
                var bm = aF[bl];
                if (ai.member3314(bm)) {
                    return true;
                }
            }
            return g > 0.01 && aF.length > 0;
        };
        bb.member3315 = ad;
        var aG = function (br, bq, bv, bm, bo, bt, bl, bx) {
            aX = br;
            if (aX !== null && aX !== undefined && bq !== null && bq !== undefined) {
                if (false) {
                }
            }
            if ((aX === null || aX === undefined) && (bq === null || bq === undefined)) {
                if (false) {
                }
                return false;
            }
            if (aX === undefined) {
                T = bq;
            }
            Y = bv;
            g = bm;
            au = bo;
            bj = bt;
            A = bl;
            a6 = bx;
            at = true;
            return O();
        };
        bb.member3316 = aG;
        var O = function () {
            var br;
            if (aX !== undefined) {
                br = aX;
            } else if (T !== undefined) {
                ag = 0;
                br = T(ag);
            }
            if (br !== undefined && br !== null) {
                var bt = Packet(undefined, br);
                if (bt.g1() !== 74 || bt.g1() != 65 || bt.g1() !== 71 || bt.g1() !== 65) {
                    throw new Error('1682 ');
                }
                N = bt.g4();
                aj = bt.g4();
                if (aj < 0) {
                    aj = ~aj;
                    r = true;
                }
                var bm = bt.g4();
                h = bt.g4();
                X = bt.g4();
                C = aK > X ? X : aK;
                for (var bl = 0; bl < X; bl++) {
                    u[bl] = bt.g4();
                    aQ[bl] = bt.g4();
                }
                Z = bt.getPos();
                for (var bl = 0; bl < (T === undefined ? X : 1); bl++) {
                    var bq = bt.getPos();
                    var bo = bq + u[bl];
                    t[bl] = bq;
                    bt.setPos(bo);
                }
                a7 = at ? new Array(C) : new Array(X);
                M = new Array(a7.length);
                aE = new Array(a7.length);
                return true;
            }
            return br === undefined ? undefined : false;
        };
        var aP = function (bl, bm) {
            if (bm !== undefined && bm > 0) {
                y = g;
                aO = bl;
                a8 = ai.member3282() + bm;
                aR = ai.member3282();
            } else {
                y = -1;
                aO = -1;
                a8 = -1;
                aR = -1;
                g = bl;
            }
        };
        bb.member3317 = aP;
        var x = function () {
            if (aq === Class279.member3310) {
                if (aF.length > 0) {
                    aq = Class279.member3309;
                } else {
                    aq = Class279.member3307;
                }
                return;
            }
            if (aq >= Class279.member3307) {
                return;
            }
            aq = Class279.member3307;
            J();
            if (ak >= C) {
                v();
            }
        };
        bb.start = x;
        var aD = function () {
            if (aq >= Class279.member3307) {
                return;
            }
            aq = Class279.member3307;
            for (var bl = numPacketsDecoded; bl < numPacketsDecodedOptimal; bl++) {
                J();
            }
        };
        bb.member3318 = aD;
        var aC = function () {
            aS = true;
            aU = ai.member3282();
            for (var bl = 0; bl < aF.length; bl++) {
                var bo = aF[bl].member3319(Class276.member3267).member3320();
                var bm = aF[bl].member3319(Class276.member3269).member3320();
                ai.member3321(aF[bl], 0);
            }
        };
        bb.member3322 = aC;
        var az = function () {
            aS = false;
            var br = ai.member3282() - aU;
            q += br;
            var bt = 0;
            var bq = 0;
            var bm = 0;
            for (var bl = 0; bl < aF.length; bl++) {
                var bo = aF[bl].member3319(Class276.member3267).member3320();
                bq = bo.member3323 + br;
                bm = bo.endTime + br;
                if (bo.member3323 < aU) {
                    bt = aU - bo.member3323;
                } else {
                    bt = 0;
                }
                aF[bl] = d(bo.buffer, bq, bm, 0, 0, bt, Y, g, a6);
            }
        };
        bb.member3324 = az;
        var ao = function () {
            if (aq >= Class279.member3310 || aq < Class279.member3306) {
                return;
            }
            aq = Class279.member3310;
            for (var bm = 0; bm < aF.length; bm++) {
                var bq = aF[bm];
                var bo = ai.member3325(bq);
                var bl = ai.member3326(bq);
                if (bo === true) {
                    continue;
                }
                if (bl === true) {
                    ai.member3321(bq, 0);
                } else {
                    ai.member3321(bq, 0);
                }
            }
            for (var bm = 0; bm < aF.length; bm++) {
                var bq = aF[bm];
                var bo = ai.member3325(bq);
                if (bo === true) {
                    aF.splice(bm, 1);
                    --bm;
                    continue;
                }
            }
        };
        bb.member3327 = ao;
        var v = function () {
            if (ac() === false) {
                return;
            }
            if (at == true) {
                aq = Class279.member3309;
                var bC = h;
                if (I === true) {
                    for (var bA = 0; bA < bC; bA++) {
                        P[bA] = 0;
                    }
                    k(1, bC, aW, Y, g);
                } else {
                    var bm = 0;
                    var bB = ai.member3282();
                    var bx = X <= 1 && bj === true;
                    for (var bA = 0; bA < a7.length; bA++) {
                        var bt = a7[bA];
                        bm += bt.length;
                        var bv = c(N, aZ, bt.sampleRate);
                        var bq = c(aj, aZ, bt.sampleRate);
                        var bl = bv / bt.sampleRate;
                        var bo = bq / bt.sampleRate;
                        var br = 0;
                        if (A >= 0) {
                            br = bx ? bB + bt.duration * A : bB + bt.duration;
                        } else {
                            br = -1;
                        }
                        aF.push(d(bt, bB, br, bl, bo, 0, Y, g, a6));
                        aE[bA] = bB;
                        M[bA] = bt.duration;
                        bB += bt.duration;
                    }
                    a3 = bB;
                }
            } else {
                aq = Class279.member3309;
                for (var bA = 0; bA < bC; bA++) {
                    P[bA] = 0;
                }
                var bC = h;
                var bm = 0;
                var bB = ai.member3282();
                var bx = X <= 1 && bj === true;
                for (var bA = 0; bA < a7.length; bA++) {
                    var bt = a7[bA];
                    bm += bt.length;
                    var bv = c(N, aZ, bt.sampleRate);
                    var bq = c(aj, aZ, bt.sampleRate);
                    var bl = bv / bt.sampleRate;
                    var bo = bq / bt.sampleRate;
                    if (A >= 0) {
                        br = bx ? bB + bt.duration * A : bB + bt.duration;
                    } else {
                        br = -1;
                    }
                    aF.push(d(bt, bB, br, bl, bo, 0, Y, g, a6));
                    bB += bt.duration;
                }
            }
        };
        var aW = function (bv) {
            if (aJ < t.length) {
                var bq = a7[a2];
                var br = new Array(bv.outputBuffer.numberOfChannels);
                var bm = new Array();
                var bo = false;
                for (var bt = 0; bt < bv.outputBuffer.numberOfChannels; bt++) {
                    aa[bt] = 0;
                    br[bt] = bv.outputBuffer.getChannelData(bt);
                    if (bq.numberOfChannels > bt) {
                        bm[bt] = bq.getChannelData(bt);
                    } else {
                        bm[bt] = undefined;
                    }
                }
                while (bo == false) {
                    for (var bt = 0; bt < bv.outputBuffer.numberOfChannels; bt++) {
                        for (var bl = aa[bt]; bl < br[bt].length; bl++) {
                            if (bm[bt] != undefined) {
                                br[bt][bl] = bm[bt][P[bt]];
                                P[bt]++;
                                aa[bt]++;
                            } else {
                                br[bt][bl] = 0;
                                aa[bt]++;
                            }
                            if (bm[bt] != undefined && P[bt] >= bm[bt].length) {
                                break;
                            }
                        }
                    }
                    if (bm[0] != undefined && P[0] >= bm[0].length) {
                        ++aJ;
                        if (aJ >= aI) {
                            for (var bt = 0; bt < bv.outputBuffer.numberOfChannels; bt++) {
                                bm[bt] = undefined;
                            }
                            if (ak > 0) {
                                ak--;
                            }
                            if (i > 0) {
                                --i;
                            }
                        } else {
                            a2++;
                            if (aJ == aI) {
                                console.log('===AUDIO BUFFERING STARVING!===');
                            }
                            if (ak > 0) {
                                ak--;
                            }
                            if (i > 0) {
                                --i;
                            }
                            if (a2 >= a7.length) {
                                a2 = 0;
                            }
                            bq = a7[a2];
                            for (var bt = 0; bt < bv.outputBuffer.numberOfChannels; bt++) {
                                if (bq.numberOfChannels > bt) {
                                    bm[bt] = bq.getChannelData(bt);
                                } else {
                                    bm[bt] = undefined;
                                }
                                P[bt] = 0;
                            }
                        }
                    }
                    if (aa[0] >= br[0].length) {
                        bo = true;
                    }
                }
            } else {
                for (var bt = 0; bt < bv.outputBuffer.numberOfChannels; bt++) {
                    var br = bv.outputBuffer.getChannelData(bt);
                    for (var bl = 0; bl < br.length; bl++) {
                        br[bl] = 0;
                    }
                }
            }
        };
        var J = function () {
            if (ac() === false) {
                return;
            }
            if (at == true) {
                if (ak < C && i < C) {
                    var br = bj === false || bj === true && (K < A || A < 0);
                    if (br && ap < X || X > 1 && bj === true && aT >= 0) {
                        var bm;
                        if (T !== undefined) {
                            bm = T(aQ[ag]);
                            if (bm === null || bm === undefined) {
                                return;
                            }
                        }
                        if (e >= t.length) {
                            e = aT;
                            aT = -1;
                            ++K;
                            if (K < A && A >= 0) {
                                aI = 0;
                                ap = 0;
                            }
                        }
                        br = bj === false || bj === true && (K < A || A < 0);
                        if (br) {
                            var bt = aT < 0;
                            if (bm === undefined) {
                                bm = aX.slice(t[e], t[e] + u[e]);
                            } else if (ag === 0) {
                                bm = bm.slice(t[0], u[0] + u[0]);
                            }
                            if (bm === null || bm === undefined) {
                                return;
                            }
                            ag++;
                            if (ag >= X) {
                                ag = 0;
                            }
                            var bl = al;
                            if (false) {
                            }
                            var bv = bt;
                            var bq = G.member3328();
                            if (bq.member3329 === undefined || bq.member3329(e) === undefined) {
                                ai.decodeAudioData(bb, bv, bm, function (bx) {
                                    E(bx, bl, true);
                                }, false ? {} : W);
                            } else {
                                E(G.member3328().member3329(e), bl, false, bv);
                            }
                            ++e;
                            ++i;
                            ++ap;
                            ++al;
                            var bo = at ? C : X;
                            if (al >= bo) {
                                al = 0;
                            }
                        }
                    }
                }
            } else if (ak < X && i < X && ap < X) {
                if (e < t.length) {
                    var bm = aX.slice(t[e], t[e] + u[e]);
                    e++;
                    ++i;
                    ++ap;
                    var bl = al;
                    ai.decodeAudioData(bb, bm, function (bx) {
                        E(bx, bl);
                    }, false ? {} : W);
                    ++al;
                    var bo = at ? C : X;
                    if (al >= bo) {
                        al = 0;
                    }
                }
            }
        };
        var B = function () {
            if (aS) {
                return;
            }
            var bo = ai.member3282();
            if (aO >= 0) {
                if (bo >= a8) {
                    g = aO;
                    y = -1;
                    aO = -1;
                    a8 = -1;
                    aR = -1;
                } else {
                    var br = aO - y;
                    var bE = a8 - aR;
                    var bx = br / bE;
                    g = y + bx * (bo - aR);
                    g = Math.max(0, Math.min(1, g));
                }
            }
            if (aq >= Class279.member3309 && at === true && I === false) {
                var bA = Number.MAX_VALUE;
                var bm = 0;
                var bq = 0;
                var bD = 0;
                for (var bC = 0; bC < M.length; bC++) {
                    var bv = aE[bC];
                    var bF = M[bC];
                    bD += bF;
                    if (bv < bA) {
                        bA = bv;
                    }
                    if (bv > bm) {
                        bm = bv;
                        bq = bF;
                    }
                    if (bv < bo && bv + bF < bo) {
                        if (ak > 0) {
                            ak--;
                        }
                        if (i > 0) {
                            --i;
                        }
                    }
                }
                for (var bC = 0; bC < aF.length; bC++) {
                    var bl = aF[bC];
                    var bt = ai.member3325(bl);
                    if (bt === true) {
                        aF.splice(bC, 1);
                        --bC;
                        continue;
                    }
                    ai.member3330(bl, g);
                    if (au === true) {
                        Q(bl);
                    }
                }
                if (aq == Class279.member3309) {
                    if (aI < X && bm + bq < bo) {
                    }
                    var bB = X <= 1 && bj === true;
                    if (bB) {
                        if (A > 0 && bA + bD * A < bo) {
                            aq = Class279.member3311;
                        }
                    } else if ((bj === false || aA >= A && A >= 0) && aI >= X && bm + bq < bo) {
                        aq = Class279.member3311;
                    }
                }
            }
        };
        var a5 = function () {
            L();
            aq = Class279.member3305;
        };
        var ar = function (bl) {
            if (aq >= Class279.member3306) {
                if (false) {
                }
            }
            L();
            G = bl;
            aq = Class279.member3306;
            return;
        };
        bb.member3331 = ar;
        var R = function () {
            if (aq < Class279.member3306) {
                if (false) {
                }
            }
            aq = Class279.member3312;
            return;
        };
        bb.member33 = R;
        var ay = function () {
            return aq === Class279.member3311;
        };
        bb.member1999 = ay;
        var ax = function () {
            return aq === Class279.member3310;
        };
        bb.member3332 = ax;
        var L = function () {
            aX = undefined;
            T = undefined;
            ag = 0;
            a7 = undefined;
            h = 1;
            aZ = 22050;
            an = 0;
            g = 1;
            y = -1;
            aO = -1;
            a8 = -1;
            aR = -1;
            Y = undefined;
            au = false;
            a1 = undefined;
            bh = {};
            F = undefined;
            S = undefined;
            D = 0;
            j = 0;
            a6 = 1;
            aF = [];
            aM = false;
            Z = 0;
            X = 0;
            u = new Array();
            t = new Array();
            aQ = new Array();
            i = 0;
            ap = 0;
            ak = 0;
            aI = 0;
            a7;
            M;
            aE;
            al = 0;
            e = 0;
            aJ = 0;
            at = true;
            I = false;
            a2 = 0;
            aa = new Array();
            P = new Array();
            H = 0;
            a3 = 0;
            be = 0;
            aT = -1;
            b = -1;
            C = 3;
            aA = 0;
            K = 0;
            bj = false;
            A = -1;
            o = -1;
            n = true;
            G = undefined;
            ah = false;
            af = 3000;
            ae = 0;
            ab = 1;
        };
        var aw = function () {
            return G;
        };
        bb.member3333 = aw;
        var aL = function () {
            return o;
        };
        bb.getPriority = aL;
        var av = function () {
            var bl = n;
            n = false;
            return bl;
        };
        bb.member3334 = av;
        bb.member3335 = function (bl, bo, bm, bq) {
            ah = bl;
            af = bo;
            ae = bm;
            ab = bq;
        };
        var z = function () {
            if (aq >= Class279.member3305 && Y != undefined) {
                var bq = Y.member3293();
                var bo = bq;
                var br = g;
                for (var bm = 0; bm < aF.length; bm++) {
                    var bl = ai.member3336(aF[bm]);
                    if (bl > br) {
                        br = bl;
                    }
                }
                bo *= br;
                if (!ad() && aq == Class279.member3309) {
                    bo = -1;
                }
                if (o != bo) {
                    o = bo;
                    n = true;
                }
            }
        };
        var aV = function () {
            z();
            if (aq >= Class279.member3307) {
                if (aq == Class279.member3312) {
                    if (ai.member3337(bb) === true) {
                        a5();
                    }
                } else if (at === true) {
                    if (aq != Class279.member3311 && ak < C) {
                        J();
                    } else if (aq < Class279.member3309) {
                        v();
                    }
                } else if (aq != Class279.member3311 && ak < X) {
                    J();
                } else if (aq < Class279.member3309) {
                    v();
                }
            }
            B();
        };
        bb.member3295 = aV;
        var Q = function (bl) {
            if (au === false) {
                return;
            }
            if (a1 === undefined) {
                ai.member3338(bl, F);
                ai.member3339(bl, S);
                ai.member3340(bl);
                ai.member3341(bl, D, j, 0.9);
            } else {
                bh.member3342 = bl;
                bh.setPosition = ai.member3338;
                bh.setVelocity = ai.member3339;
                bh.member3343 = ai.member3343;
                bh.member3344 = ah;
                bh.member3345 = af;
                bh.member3346 = ae;
                bh.member3347 = ab;
                bh.member3348 = ai.member3348;
                bh.member3349 = ai.member3349;
                a1(F, S, bh);
                ai.member3340(bl);
                ai.member3341(bl, 10000, 1, 1);
            }
        };
        var aN = function (bm, bl) {
            a1 = bm;
            bh = bl;
        };
        bb.member3350 = aN;
        var a4 = function (bl) {
            bl.srcElement.member3351 = Class280.FINISHED_STATE;
        };
        var d = function (bq, bm, bt, bA, bv, bx, bB, bC, br) {
            var bl = undefined;
            var bo = bj === true && X <= 1;
            if (a1 !== undefined && bh !== undefined && bh.member3352 !== undefined) {
                bl = ai.member3353(bq, bm, bt, bx, bo, bo ? bA : -1, bo ? bv : -1, bB, bC, bh, br, ah, af, ae, ab);
            } else {
                bl = ai.member3354(bq, bm, bt, bx, bo, bo ? bA : -1, bo ? bv : -1, bB, bC, au, br);
            }
            if (bl !== undefined) {
                bl.member3319(Class276.member3267).member3320().member3355 = a4;
                bl.member3319(Class276.member3267).member3320().member3351 = Class280.member3313;
                return bl;
            } else if (false) {
            }
        };
        var k = function (bm, bt, bq, bo, bl) {
            var br = ai.member3356(bm, bt, bq, bo, bl, au);
            br.member3319(Class276.member3267).member3320().member3355 = a4;
            br.member3319(Class276.member3267).member3320().member3351 = Class280.member3313;
            aF.push(br);
        };
        var c = function (bm, bo, bl) {
            return Math.max(Math.floor(bl / bo * bm), 0);
        };
        var E = function (bJ, bH, bv, bm) {
            if (aS) {
                return;
            }
            var bq = bv ? ai.member3357(bb) : bm;
            if (bv) {
                ai.member3358(bb);
            }
            if (aq === Class279.member3312) {
                return;
            }
            var bF = be;
            var br = false;
            var bI = false;
            var bG = 0;
            var bL = 0;
            var bx = 0;
            var bM = bj === true && X === 1;
            var bK = 0;
            be += bJ.length;
            var bD = c(N, aZ, bJ.sampleRate);
            var bE = c(aj, aZ, bJ.sampleRate);
            if (aI % X >= X - 1) {
                if (bE > be) {
                    bE = be;
                }
            }
            if (bq === true && bj === true && aT < 0 && be >= bD) {
                aT = aI % X;
                br = true;
                bx = aA > 0 ? bD - bF : 0;
                bK = bx / bJ.sampleRate;
                b = -1;
            }
            if (bj === true && b < 0 && be >= bE) {
                b = aI % X;
                bI = true;
                var bC = be - bF;
                bL = (bE - bF) / bJ.sampleRate;
                be = 0;
            }
            a7[bH] = bJ;
            var bB = G.member3328();
            if (bB.member3359 !== undefined) {
                bB.member3359(aI, bJ);
            }
            if (at === true && aq == Class279.member3309 && I === false) {
                M[bH] = bJ.duration;
                aE[bH] = a3;
                bG = bI ? a3 + bL : a3 + bJ.duration;
                var bl = a3 + q;
                var bo = bG + q;
                var bt = bK;
                var bA = bL;
                aF.push(d(a7[bH], bl, bo, bt, bA, bx, Y, g, a6));
                a3 += bJ.duration;
            }
            if (bI === true) {
                ++aA;
            }
            ++ak;
            ++aI;
        };
        var W = function (bl, bm) {
            ai.member3358(bb);
            if (false) {
            }
        };
        var a0 = function () {
            return a0;
        };
        bb.member67 = a0;
        var V = function () {
            return aq;
        };
        bb.member3360 = V;
        var U = function () {
            return am;
        };
        bb.member3361 = U;
        var ac = function () {
            if (aq === Class279.member3304 || aq === Class279.member3305) {
                if (false) {
                } else {
                    return false;
                }
            }
            if (aX === undefined && T === undefined) {
                if (false) {
                } else {
                    return false;
                }
            }
            if (ai === undefined) {
                if (false) {
                } else {
                    return false;
                }
            }
            return true;
        };
        var a9 = function (bl) {
            F = bl;
        };
        bb.setPosition = a9;
        var m = function (bl) {
            S = bl;
        };
        bb.setVelocity = m;
        var aB = function (bm, bl) {
            D = bm;
            j = bl;
        };
        bb.member3362 = aB;
        return bb;
    };
    return a;
}();