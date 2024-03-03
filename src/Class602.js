import { CoordFine } from 'Class290.js';
import { Class292 } from 'Class292.js';
import { Class49 } from 'Class49.js';
import { Class41 } from 'Class41.js';
import { Class307 } from 'Class307.js';
import { Class140 } from 'Class140.js';
import { Class86 } from 'Class86.js';
import { Class395 } from 'Class395.js';
import { Js5ConfigGroup } from 'Class131.js';
import { Class121 } from 'Class121.js';
import { Class68 } from 'Class68.js';
import { Class132 } from 'Class132.js';
import { Class417 } from 'Class417.js';
import { Class198 } from 'Class198.js';
import { Class424 } from 'Class424.js';
import { Class601 } from 'Class601.js';
export var Class602 = function () {
    var a = function (V) {
        var aA = {};
        aA.member9095 = 4;
        var ar = 1;
        var ak = 512;
        var K = false;
        var ag = true;
        var X = true;
        var v = true;
        var k = {
            member2022: 0,
            member2023: 0,
            b: 0,
            a: 0
        };
        var ai = true;
        var Z = true;
        var y = false;
        var at = false;
        var G = false;
        var aj = false;
        var af = false;
        var U = true;
        var T;
        var O;
        var B;
        var i;
        var az, ax;
        var aw;
        var E;
        aA.member9096 = function () {
            return E.member575();
        };
        var q = undefined;
        var S = undefined;
        var Q;
        var r, ao;
        var o, al;
        var ac, b;
        var g, F;
        var c = undefined;
        var s;
        var D = true;
        var C = false;
        aA.member9097 = function () {
            M(B);
        };
        var Y = false;
        var j = new Array();
        var av = new Array();
        var m = 100;
        var R;
        aA.member9098 = function () {
            return R.member575();
        };
        var h = new CoordFine();
        var e = 0;
        var I = Class292(Class49.member313(), Class49.member313(), Class41.create(), Class41.create());
        var ay = Class49.member313();
        var N = Class49.member313();
        var J = Class307();
        var ae = new Float32Array(3), au = new Float32Array(3), x = Class140.create(), ad = new Float32Array(4);
        var ap = Class49.create();
        var t = {
            x: 0,
            y: 0
        };
        var P = new Array(0);
        var aa = new Float32Array([
                1,
                0,
                0
            ]), A = new Float32Array([
                0,
                0,
                1
            ]);
        var aq = function (aE, aF) {
            var aD = Math.ceil(Math.max(aE, aF) / (Class86.member729 * aA.member9095));
            aD = Math.ceil(Math.sqrt(aD * aD + aD * aD));
            return aD + 1;
        };
        var H = new Array();
        var W = new Array();
        if (V.member433 !== undefined && V.member2970 !== undefined && V.member9099 !== undefined && V.member9100 !== undefined) {
            T = V.member433;
            O = V.member2970;
            az = V.member9099;
            ax = V.member9100;
            aw = V.member9101;
            B = aq(az, ax);
            if (false) {
            }
            i = B * Class86.member729 * aA.member9095;
            s = i;
            E = T.member580(i, i, true, false, false);
            E.member510();
            R = T.member580(az, ax, true, true, false);
            R.member510();
        } else {
            throw new Error('1143 ');
        }
        aA.member512 = function () {
            E.member511();
            R.member511();
            if (c !== undefined) {
                c.member511();
            }
        };
        aA.member9102 = function (aE, aD) {
            if (aE === az && aD === ax) {
                return;
            }
            I.member3466();
            az = aE;
            ax = aD;
            R.member511();
            R = T.member580(az, ax, true, true, false);
            R.member510();
            var aF = aq(az, ax);
            if (aF !== B) {
                M(aF);
            }
        };
        aA.member486 = function (aF, aG, aJ, aH, aE) {
            if (!h.equals(aG)) {
                I.member3466();
            }
            if (h.level !== aG.level) {
                af = true;
            }
            h.set(aG);
            e = aJ;
            if (q !== undefined) {
                var aI = Math.abs(aG.member3454[0] - q.member3454[0]);
                var aD = Math.abs(aG.member3454[2] - q.member3454[2]);
                if (aG.level !== q.level || aI > Class86.member730 || aD > Class86.member730 || q.level !== aG.level) {
                    M(B);
                }
            }
            if (S !== undefined) {
                var aI = Math.abs(aG.member3454[0] - S.member3454[0]) / Class86.member718;
                var aD = Math.abs(aG.member3454[2] - S.member3454[2]) / Class86.member718;
                if (aI > Class395.member4545 || aD > Class395.member4545) {
                    C = true;
                }
            }
            if (D) {
                z(aF, aG);
            }
            if (q !== undefined) {
                if (C) {
                    d(aF, q, aG);
                }
                L(aF, aG, aJ, aH, aE);
            }
            T.member3640.member3807(T.member3640.member3811, -1, -1);
            return R.member575();
        };
        var M = function (aD) {
            B = aD;
            if (false) {
            }
            if (!D) {
                s = i;
                if (c !== undefined) {
                    c.member511();
                }
                c = E;
            }
            i = B * Class86.member729 * aA.member9095;
            E = T.member580(i, i, true, false, false);
            E.member510();
            D = true;
        };
        var u = function (aD, aE) {
            Class49.member351(-Q / 2, Q / 2, -Q / 2, Q / 2, Class86.member718, Class86.member730, I.member3463);
            Class49.member351(-Q / 2, Q / 2, Q / 2, -Q / 2, Class86.member718, Class86.member730, ay);
            Class140.member1353(aa, -Math.PI / 2, x);
            J.setOrientation(x);
            J.setPosition(aE.member3454);
            J.member3651(I.member1624);
            J.member3649(I.member3464);
            T.member581(E);
            T.member582(0, 0, i, i);
            T.member1344(0, 0, i, i);
        };
        var z = function (aG, aI) {
            var aE = aG.member8341();
            if (aE === NULL) {
                return;
            }
            for (var aY = 0; aY < aE.length; aY++) {
                var aH = O.getConfigType(Js5ConfigGroup.MELTYPE.member1204, aE[aY].member8375);
                if (aH === NULL) {
                    return;
                }
            }
            aI.member3454[1] += Class86.member730 / 2;
            aI = CoordFine(aI);
            var aV = B;
            var aJ = ao;
            var aS = b;
            Q = B * Class86.member730;
            r = (aI.member3454[2] + Q / 2) / Class86.member718;
            ao = Math.floor(r / Class86.member729);
            o = (aI.member3454[2] - Q / 2) / Class86.member718;
            al = Math.floor(o / Class86.member729);
            ac = (aI.member3454[0] + Q / 2) / Class86.member718;
            b = Math.floor(ac / Class86.member729);
            g = (aI.member3454[0] - Q / 2) / Class86.member718;
            F = Math.floor(g / Class86.member729);
            aI.member3454[0] = (F + B / 2) * Class86.member730;
            aI.member3454[2] = (al + B / 2) * Class86.member730;
            u(aG, aI);
            T.gl.clearColor(k.member2022, k.member2023, k.b, k.a);
            T.gl.clear(T.gl.COLOR_BUFFER_BIT | T.gl.DEPTH_BUFFER_BIT);
            if (c !== undefined) {
                var aW = (aI.member3454[0] - q.member3454[0]) / Class86.member718 * aA.member9095;
                var aF = (q.member3454[2] - aI.member3454[2]) / Class86.member718 * aA.member9095;
                var aQ = i / 2 - s / 2 - aW;
                var aT = i / 2 - s / 2 - aF;
                var aO = i / 2 + s / 2 - aW;
                var aK = i / 2 + s / 2 - aF;
                T.member3640.member3804(aQ, aT, aO, aK, 4294967295, 0, 0, 1, 1, c.member575(), true, 0, i / 2, i / 2);
                T.member3640.member1630();
                T.gl.clear(T.gl.DEPTH_BUFFER_BIT);
                if (false) {
                }
            }
            if (aV !== B || aJ !== ao || aS !== b) {
                if (false) {
                }
                var aU = aI.member3454[0] / Class86.member730;
                var aR = aI.member3454[2] / Class86.member730;
                W.push.apply(W, H);
                H.length = 0;
                for (var aZ = F; aZ < b; aZ++) {
                    for (var aX = al; aX < ao; aX++) {
                        if (false) {
                        }
                        var aD = undefined;
                        for (var aP = 0; aP != W.length; ++aP) {
                            if (W[aP].member1643 === aZ && W[aP].member1642 === aX) {
                                if (false) {
                                }
                                aD = W[aP];
                                break;
                            }
                        }
                        if (aD === undefined) {
                            aD = {
                                level: aI.level,
                                member1643: aZ,
                                member1642: aX,
                                member9103: Class121.member778,
                                member9104: Class121.member778,
                                member9105: new Array()
                            };
                        }
                        H.push(aD);
                    }
                }
                W.length = 0;
                H.sort(function (a1, a0) {
                    var a3 = Math.abs(a1.member1643 - aU) + Math.abs(a1.member1642 - aR);
                    var a2 = Math.abs(a0.member1643 - aU) + Math.abs(a0.member1642 - aR);
                    var a5 = (Class121.member778 - a1.member9103) * Class121.member778 + (Class121.member778 - a1.member9104);
                    var a4 = (Class121.member778 - a0.member9103) * Class121.member778 + (Class121.member778 - a0.member9104);
                    return (a5 - a4) * B + (a3 - a2);
                });
            }
            if (af) {
                for (var aP = 0; aP != H.length; ++aP) {
                    H[aP].member9103 = Class121.member778;
                }
                af = false;
            }
            j.length = 0;
            for (var aY = 0; aY < aE.length; aY++) {
                var aN = aE[aY].member3460;
                if (aN.level !== aI.level) {
                    continue;
                }
                var aM = false;
                if (aN.x >= g && aN.x <= ac && aN.member756 >= o && aN.member756 <= r && aG.member8344(Math.floor(aN.x / Class86.member729), Math.floor(aN.member756 / Class86.member729)) !== undefined) {
                    aM = true;
                } else {
                    var aH = O.getConfigType(Js5ConfigGroup.MELTYPE.member1204, aE[aY].member8375);
                    var aL = aH.member9106();
                    if (aL !== undefined) {
                        if (aN.x + aL.member9107 < g || aN.x + aL.member9108 > ac || aN.member756 + aL.member9109 < o || aN.member756 + aL.member9108 > r) {
                            continue;
                        }
                        aM = true;
                    }
                }
                if (aM) {
                    j.push({
                        member9110: aE[aY].member8375,
                        member9111: aN.x * Class86.member718,
                        member9112: aN.member756 * Class86.member718
                    });
                }
            }
            D = false;
            C = true;
            if (q === undefined) {
                q = CoordFine(aI);
            } else {
                q.set(aI);
            }
            if (false) {
            }
        };
        var d = function (aF, aG, aD) {
            if (Class68.member477() || Class68.member479()) {
                return true;
            }
            u(aF, q);
            var aE = Class132.member1266();
            Class132.member1267(Class132.member1265());
            var aJ = aE.member1020();
            aE.member1022();
            T.member3640.member3807(T.member3640.member3812, i, i);
            C = H.length > ar;
            av.length = 0;
            av.push.apply(av, j);
            for (var aI = 0; aI < Math.min(H.length, ar); ++aI) {
                var aH = H.shift();
                if (!n(aF, aH, aG)) {
                    C = true;
                    H.push(aH);
                } else {
                    if (false) {
                    }
                    W.push(aH);
                }
            }
            for (var aI = 0; aI < H.length; ++aI) {
                if (H[aI].member9105 !== undefined) {
                    av.push.apply(av, H[aI].member9105);
                }
            }
            for (var aI = 0; aI < W.length; ++aI) {
                if (W[aI].member9105 !== undefined) {
                    av.push.apply(av, W[aI].member9105);
                }
            }
            T.member3640.member1630();
            T.member581(null);
            if (aJ) {
                aE.member1021();
            }
            Class132.member1267(aE);
            if (!C) {
                if (S === undefined) {
                    S = CoordFine(aD);
                } else {
                    S.set(aD);
                }
                if (false) {
                }
            }
        };
        var aC = function (aF, aE) {
            H.push.apply(H, W);
            W.length = 0;
            for (var aH = 0; aH < H.length; ++aH) {
                var aG = H[aH];
                if (Math.abs(aG.member1643 - aF) + Math.abs(aG.member1642 - aE) <= 1) {
                    aG.member9104 = Class121.member778;
                    if (aG.member9113 !== undefined) {
                        for (var aD = 0; aD != aG.member9113.length; ++aD) {
                            aG.member9113[aD] = Class121.member778;
                        }
                    }
                }
            }
        };
        var n = function (aF, aH, aK) {
            var aV = true;
            var bo = aH.member1643;
            var bm = aH.member1642;
            if (false) {
            }
            var aT = aF.member8344(bo, bm);
            if (aT === undefined) {
                return false;
            }
            if (true) {
                var a2 = aT.member4830();
                if (a2 !== null) {
                    var a5 = aH.member9103 > a2.member4087();
                    if (false) {
                    }
                    if (a5) {
                        T.member944();
                        a2.member4230(I, a2.member3320().member4200(), undefined);
                        T.member942();
                        aH.member9103 = a2.member4087();
                        aC(bo, bm);
                        if (false) {
                        }
                    }
                    if (!a2.member4091()) {
                        aV = false;
                    }
                } else {
                    return false;
                }
            } else {
            }
            if (true) {
                if (aH.member9103 < Class121.member778) {
                    var aI = aT.member4832();
                    if (aI !== null) {
                        if (aH.member9104 > aI.member4087()) {
                            T.member586();
                            aI.member4230(I, aI.member3320().member4200());
                            T.member585();
                            aH.member9104 = aI.member4087();
                            if (aH.member9113 !== undefined) {
                                for (var bl = 0; bl != aH.member9113.length; ++bl) {
                                    aH.member9113[bl] = Class121.member778;
                                }
                            }
                            if (false) {
                            }
                        }
                        if (aH.member9104 === Class121.member778 || !a2.member4091()) {
                            aV = false;
                        }
                    } else if (aT.member4833()) {
                        aV = false;
                    }
                }
            } else {
            }
            if (true) {
                if (aH.member9103 < Class121.member778 && aH.member9103 <= Class417.member4804()) {
                    var a0 = aF.member4111();
                    var aW = aT.member4835();
                    aH.member9105.length = 0;
                    if (aT.member4822 !== null) {
                        for (var bl = 0; bl < aT.member4822.length; bl++) {
                            for (var bb = 0; bb < aT.member4822[bl].length; bb++) {
                                if (aT.member4822[bl][bb] === NULL) {
                                    return false;
                                }
                                if (aT.member4822[bl][bb].member4556.length > 0) {
                                    if (!aB(aT.member4822[bl][bb].member4556, aH, bo, bm, a0)) {
                                        return false;
                                    }
                                }
                            }
                        }
                    }
                    if (aW === NULL) {
                        return false;
                    }
                    if (!aW.member3250()) {
                        return false;
                    }
                    var a6 = aW.member4617();
                    if (a6 === NULL) {
                        return false;
                    }
                    if (aH.member9113 === undefined) {
                        aH.member9113 = new Int8Array(Class86.member729 * Class86.member729);
                        for (var bl = 0; bl != aH.member9113.length; ++bl) {
                            aH.member9113[bl] = Class121.member778;
                        }
                    }
                    var aP = 0;
                    for (var bj = 0; bj < a6.length; bj++) {
                        var aU = a6[bj];
                        var aS = aU.x + bo * Class86.member729;
                        var aQ = aU.member756 + bm * Class86.member729;
                        var aD = aU.member4148.getMapElement();
                        if (aD !== -1) {
                            var be = aU.x + bo * Class86.member729;
                            var a8 = aU.member756 + bm * Class86.member729;
                            if (be >= g && be <= ac && a8 >= o && a8 <= r && aU.level === aK.level) {
                                aH.member9105.push({
                                    member9110: aD,
                                    member9111: be * Class86.member718,
                                    member9112: a8 * Class86.member718
                                });
                            }
                        }
                        if (U) {
                            if (aP < ak) {
                                var a9 = aS % Class86.member729;
                                var a7 = aQ % Class86.member729;
                                var aO = aT.member4853(a9, a7);
                                if (aO !== undefined && aO !== null) {
                                    var bl = a9 + a7 * Class86.member729;
                                    if (aO.member4091()) {
                                        if (aH.member9113[bl] > aO.member4087()) {
                                            T.member586();
                                            var aX = aO.member3320();
                                            var aL = aX.member2010();
                                            if (aL !== undefined) {
                                                var bh = aX.member4200();
                                                aP += aL.length;
                                                aH.member9113[bl] = aO.member4087();
                                                for (var aG = 0; aG < aL.length; aG++) {
                                                    bh = aX.member4200();
                                                    var aM = aL[aG].member4186();
                                                    if (aM !== undefined) {
                                                        if (aM.member4456 !== undefined) {
                                                            var aN = Class49.create();
                                                            Class49.set(bh, aN);
                                                            if (aM.member4152() === NULL) {
                                                                return false;
                                                            }
                                                            var aJ = aM.member4152().getWidth(aM.member2520) * Class86.member718;
                                                            var aE = aM.member4152().getLength(aM.member2520) * Class86.member718;
                                                            aN[12] += aM.member4456 * Class86.member718 + aJ / 2;
                                                            aN[14] += aM.member4455 * Class86.member718 + aE / 2;
                                                            aM.member4222(0, aN, I.member1624, I.member3463, 0, h.level);
                                                            aM.member4230(I, aN, 0, 0);
                                                        } else {
                                                            aM.member4222(0, bh, I.member1624, I.member3463, 0, h.level);
                                                            aM.member4230(I, bh, 0, 0);
                                                        }
                                                    } else if (false) {
                                                    }
                                                }
                                                if (aP >= ak) {
                                                    aV = false;
                                                    if (false) {
                                                    }
                                                }
                                            }
                                            T.member585();
                                        }
                                    } else {
                                        aV = false;
                                        T.member585();
                                    }
                                } else {
                                    aV = false;
                                }
                            } else {
                                aV = false;
                            }
                        } else {
                            if (aU.level !== aK.level || !a0.member8302(aK.level, aU.level, aS, aQ)) {
                                continue;
                            }
                            var a1 = aU.member4148.getMSI();
                            if (a1 !== -1) {
                                var a3 = O.getConfigType(Js5ConfigGroup.MSITYPE.member1204, a1);
                                if (a3 === NULL) {
                                    aV = false;
                                }
                                var a4 = 0;
                                if (aU.member4148.getMSIRotate()) {
                                    a4 = aU.member2520 + aU.member4148.getMSIAngle() & 3;
                                }
                                var aZ = a3.member8752(T, a4, aU.member4148.getMSIMirror());
                                if (aZ === NULL) {
                                    aV = false;
                                } else if (aZ !== undefined) {
                                    var aR = a3.member8751();
                                    if (aR === undefined || aR === 0) {
                                        aR = 4294967295;
                                    } else {
                                        aR = aR << 8 | 255;
                                    }
                                    T.member3640.member3805(ae, aZ.member556(), aZ.member557(), ay, I.member1624, aR, 0, 0, 1, 1, aZ, false);
                                }
                            }
                        }
                        if (aU.level !== aK.level || !a0.member8302(aK.level, aU.level, aS, aQ)) {
                            continue;
                        }
                        if (aU.member4148.getMSI() !== -1) {
                            continue;
                        }
                        ae[0] = aS * Class86.member718;
                        ae[2] = aQ * Class86.member718;
                        var aY = 4294967295;
                        if (aU.member4148.getActive()) {
                            aY = 4278190335;
                        }
                        if (aU.member2519 === Class198.member2330 || aU.member2519 === Class198.member2332) {
                            if (aU.member2520 === 0) {
                                au[0] = ae[0];
                                au[2] = ae[2] + Class86.member718;
                            } else if (aU.member2520 === 1) {
                                au[0] = ae[0] + Class86.member718;
                                au[2] = ae[2] = ae[2] + Class86.member718;
                            } else if (aU.member2520 === 2) {
                                au[0] = ae[0] = ae[0] + Class86.member718;
                                au[2] = ae[2] + Class86.member718;
                            } else if (aU.member2520 === 3) {
                                au[0] = ae[0] + Class86.member718;
                                au[2] = ae[2];
                            }
                            T.member3640.member3806(ae, au, 1, ay, I.member1624, aY, false);
                        }
                        if (aU.member2519 === Class198.member2333) {
                            if (aU.member2520 === 0) {
                                au[0] = ae[0];
                                au[2] = ae[2];
                            } else if (aU.member2520 === 1) {
                                au[0] = ae[0] = ae[0] + Class86.member718;
                                au[2] = ae[2];
                            } else if (aU.member2520 === 2) {
                                au[0] = ae[0] = ae[0] + Class86.member718;
                                au[2] = ae[2] = ae[2] + Class86.member718;
                            } else if (aU.member2520 === 3) {
                                au[0] = ae[0];
                                au[2] = ae[2] = ae[2] + Class86.member718;
                            }
                            T.member3640.member3806(ae, au, 1, ay, I.member1624, aY, false);
                        }
                        if (aU.member2519 === Class198.member2334) {
                            if (aU.member2520 === 0 || aU.member2520 === 2) {
                                au[0] = ae[0] + Class86.member718;
                                au[2] = ae[2] + Class86.member718;
                            } else {
                                au[0] = ae[0] + Class86.member718;
                                au[2] = ae[2];
                                ae[2] += Class86.member718;
                            }
                            T.member3640.member3806(ae, au, 1, ay, I.member1624, aY, false);
                        }
                    }
                }
            } else {
            }
            return aV;
        };
        var aB = function (aN, aD, aG, aF, aM, aJ) {
            for (var aK = 0; aK < aN.length; aK++) {
                var aL = aN[aK];
                if (aL.member4148 === NULL) {
                    return false;
                }
                if (aL.member4148 === undefined) {
                    continue;
                }
                var aE = aL.member4148.getMapElement();
                if (aE !== -1) {
                    var aI = aL.member4147.x;
                    var aH = aL.member4147.member756;
                    if (aI >= g && aI <= ac && aH >= o && aH <= r) {
                        aD.member9105.push({
                            member9110: aE,
                            member9111: aI * Class86.member718,
                            member9112: aH * Class86.member718
                        });
                    }
                }
            }
            return true;
        };
        var L = function (aJ, aK, aM, aE, aP) {
            T.member581(R);
            T.member582(0, 0, az, ax);
            T.member1344(0, 0, az, ax);
            T.gl.clearColor(0, 0, 0, 0);
            T.gl.clear(T.gl.COLOR_BUFFER_BIT | T.gl.DEPTH_BUFFER_BIT);
            T.member3640.member3807(T.member3640.member3812, az, ax);
            if (false) {
            } else {
                var aV = (aK.member3454[0] - q.member3454[0]) / Class86.member718 * aA.member9095;
                var aI = (q.member3454[2] - aK.member3454[2]) / Class86.member718 * aA.member9095;
                var aQ = (az / 2 - i / 2 - aV) * aE;
                var aR = (ax / 2 - i / 2 - aI) * aE;
                var aO = (az / 2 + i / 2 - aV) * aE;
                var aN = (ax / 2 + i / 2 - aI) * aE;
                if (true) {
                    T.member3640.member3804(aQ, aR, aO, aN, 4294967295, 0, 0, 1, 1, E.member575(), true, -aM, az / 2, ax / 2);
                } else {
                }
                var aU = az / aA.member9095 * Class86.member718 / 2;
                var aT = ax / aA.member9095 * Class86.member718 / 2;
                Class49.member351(-aU, aU, aT, -aT, Class86.member718, Class86.member730, I.member3463);
                Class140.member1353(aa, -Math.PI / 2, x);
                J.setOrientation(x);
                Class140.member1353(A, aM, x);
                J.rotate(x);
                aK.member3454[1] += Class86.member730 / 2;
                J.setPosition(aK.member3454);
                J.member3651(I.member1624);
                J.member3649(I.member3464);
                var aG = az * (Class86.member718 * aA.member9095);
                var aX = ax * (Class86.member718 * aA.member9095);
                var aS = aK.member3454[0] - aG;
                var aD = aK.member3454[0] + aG;
                var aW = aK.member3454[2] - aX;
                var aH = aK.member3454[2] + aX;
                Class49.member323(I.member3463, I.member1624, ap);
                for (var aL = 0; aL < av.length; aL++) {
                    var aF = av[aL];
                    if (aF.member9111 >= aS && aF.member9111 < aD) {
                        if (aF.member9112 >= aW && aF.member9112 < aH) {
                            an(aF.member9110, aF.member9111 + Class86.member718 / 2, aF.member9112 + Class86.member718 / 2);
                        }
                    }
                }
                if (false) {
                }
                if (true) {
                    if (aP !== undefined) {
                        aP(aA, aK);
                    }
                } else {
                }
            }
            T.member3640.member1630();
            T.member581(null);
        };
        aA.member9118 = function (aI, aH, aF) {
            var aL = O.getConfigType(Js5ConfigGroup.MELTYPE.member1204, aI);
            if (aL === NULL) {
                return;
            }
            if (aL.member9119()) {
                aL = aL.member9120();
                if (aL === undefined || aL === NULL) {
                    return;
                }
            }
            if (!aL.member9121()) {
                return;
            }
            if (!aL.getMinimap()) {
                return;
            }
            if (aL.member9106() !== undefined) {
                ah(aL.member9106(), aH, aF);
                return;
            }
            var aG = aL.member8752(T);
            if (aG === undefined || aG === null) {
                return;
            }
            var aJ = aw;
            if (aL.member9122() > 0) {
                aJ = aL.member9122();
            }
            var aD = aJ / m;
            var aE = 0;
            var aM = 0;
            var aN = 0;
            var aK = 0;
            switch (aL.member9123()) {
            case Class424.member6132:
                aE = 0;
                aM = aG.width * aD;
                break;
            case Class424.member6133:
                aE = Math.floor(aG.width / 2) * aD;
                aM = Math.ceil(aG.width / 2) * aD;
                break;
            case Class424.member6134:
                aE = aG.width * aD;
                aM = 0;
                break;
            }
            switch (aL.member9124()) {
            case Class601.member9092:
                aN = 0;
                aK = aG.height * aD;
                break;
            case Class601.member9093:
                aN = Math.floor(aG.height / 2) * aD;
                aK = Math.ceil(aG.height / 2) * aD;
                break;
            case Class601.member9094:
                aN = aG.height * aD;
                aK = 0;
                break;
            }
            am(aG, aH, aF, aE, aN, aM, aK);
        };
        var an = aA.member9118;
        aA.member9125 = function (aG, aI, aH, aE, aJ, aF, aD) {
            ab(aI, aH, ap);
            T.member3640.member3627(t.x - aE, t.y - aJ, t.x + aF, t.y + aD, 4294967295, 0, 0, 1, 1, aG, false);
        };
        var am = aA.member9125;
        aA.member9126 = function (aE, aH, aG) {
            ae[0] = aH;
            ae[2] = aG;
            var aD = aE.member1539();
            var aF = aD.member1285(aE.member1494());
            T.member3640.member3805(ae, aF.member1292, aF.member1293, I.member3463, I.member1624, 4294967295, aF.member493, aF.member494, aF.member495, aF.member496, aD.member1277(), false);
        };
        var ah = function (aF, aG, aE) {
            P.length = aF.member9127.length;
            for (var aD = 0; aD < P.length; aD += 2) {
                ab(aF.member9127[aD] + aG, aF.member9127[aD + 1] + aE, ap);
                P[aD] = t.x;
                P[aD + 1] = t.y;
            }
            T.member3640.member3797(P, aF.member9128, aF.member9129, false);
            for (var aD = 0; aD < P.length - 2; aD += 2) {
                T.member3640.member3802(P[aD], P[aD + 1], P[aD + 2], P[aD + 3], 1, aF.member9130[aF.member9131[aD / 2]], false);
            }
            T.member3640.member3802(P[P.length - 2], P[P.length - 1], P[0], P[1], 1, aF.member9130[aF.member9131[P.length / 2 - 1]], false);
        };
        var ab = function (aF, aE, aD) {
            ad[0] = aD[0] * aF + aD[8] * aE + aD[12];
            ad[1] = aD[1] * aF + aD[9] * aE + aD[13];
            ad[3] = aD[3] * aF + aD[11] * aE + aD[15];
            t.x = (ad[0] / ad[3] + 1) * az / 2;
            t.y = (ad[1] / ad[3] + 1) * ax / 2;
        };
        aA.member9132 = function (aO, aD, aJ, aF, aH) {
            Class41.set(aH, ae);
            aA.member9133(h.member3454, ae, e);
            var aE = az / aA.member9095 * Class86.member718 / 2;
            var aM = ax / aA.member9095 * Class86.member718 / 2;
            var aU = Math.atan(Math.abs(ae[2]) / Math.abs(ae[0]));
            var aI = Math.atan(aM / aE);
            var aP = 0;
            var aG;
            if (aU < aI) {
                aG = e - aO;
                aP = az / 2;
            } else {
                aG = Math.PI / 2 - e + aO;
                aP = ax / 2;
            }
            var aK = aP * Math.sin(Math.PI / 2) / Math.sin(aG);
            aK = Math.abs(aK);
            var aS = az / 2 - aJ / 2;
            var aT = ax / 2 - aF / 2 - aK + aF / 2;
            var aR = az / 2 + aJ / 2;
            var aQ = ax / 2 + aF / 2 - aK + aF / 2;
            var aN = aD.member1539();
            var aL = aN.member1285(aD.member1494());
            T.member3640.member3804(aS, aT, aR, aQ, 4294967295, aL.member493, aL.member494, aL.member495, aL.member496, aN.member1277(), false, aO - e, az / 2, ax / 2);
        };
        aA.member9133 = function (aD, aG, aJ) {
            var aF = Math.sin(aJ);
            var aI = Math.cos(aJ);
            aG[0] -= aD[0];
            aG[2] -= aD[2];
            var aH = aG[0] * aI - aG[2] * aF;
            var aE = aG[0] * aF + aG[2] * aI;
            aG[0] = aH;
            aG[2] = aE;
        };
        aA.member9134 = function (aG, aF) {
            Class41.set(aG, ae);
            aA.member9133(h.member3454, ae, e);
            var aD = az / aA.member9095 * Class86.member718 / 2;
            if (ae[0] > aD || ae[0] < -aD) {
                return false;
            }
            var aE = ax / aA.member9095 * Class86.member718 / 2;
            if (ae[2] > aE || ae[2] < -aE) {
                return false;
            }
            return true;
        };
        V = undefined;
        return aA;
    };
    return a;
}();