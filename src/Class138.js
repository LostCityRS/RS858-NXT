import { Class136 } from 'Class136.js';
import { Class137 } from 'Class137.js';
import { Class133 } from 'Class133.js';
import { Class76 } from 'Class76.js';
export var Class138 = function () {
    var t = 3;
    var b = 0;
    var q = 1;
    var m = 2;
    var i = -1;
    var c = -2;
    var s = new Array(5);
    var d = new Array(5);
    var h;
    var r;
    var k = undefined;
    var g = function () {
        if (k === undefined) {
            k = Class136.member1301();
        }
        return k;
    };
    var j = new Array(5);
    var o = new Array(5);
    var e = function (v, u) {
        var y = v / Class137.member1305;
        if (!u) {
            if (j[y] !== undefined) {
                return j[y];
            } else {
                var x = new Uint8Array(v * v * 4);
                j[y] = x;
                return x;
            }
        } else if (o[y] !== undefined) {
            return o[y];
        } else {
            var x = new Float32Array(v * v * 4);
            o[y] = x;
            return x;
        }
    };
    var n = function (v, u, x, y) {
        if (y !== undefined) {
            this.member1315 = y.g2();
            this.member1316 = y.g2();
            this.member745 = y.g2();
            this.member1282 = 0;
            this.member1317 = y.g1() === 1;
        } else {
            this.member1315 = v;
            this.member1316 = u;
            this.member745 = x;
            this.member1282 = 0;
            this.member1317 = true;
        }
    };
    n.prototype.member1318 = function (u) {
        u.p2(this.member1315);
        u.p2(this.member1316);
        u.p2(this.member745);
        u.p1(this.member1317 ? 1 : 0);
    };
    n.prototype.clone = function () {
        return {
            member1315: this.member1315,
            member1316: this.member1316,
            member745: this.member745,
            member1282: this.member1282,
            member1317: this.member1317
        };
    };
    var a = function (B) {
        var ai = {};
        var ao;
        var an;
        var G;
        ai.member1320 = function () {
            return G;
        };
        var Z;
        var ad;
        ai.member1321 = function () {
            return ad;
        };
        var ac;
        ai.getID = function () {
            return ac;
        };
        var x = false;
        ai.member559 = function () {
            return x;
        };
        var Y;
        var X = {};
        var W = {};
        var P = false;
        var H;
        var al;
        var ap = 0;
        var A = [];
        var F = false;
        var z = 0;
        ai.member1322 = function (ax) {
            var au = {
                id: ac,
                member552: x
            };
            if (ax === undefined) {
                au.member1323 = Y;
                au.member1324 = X;
            } else {
                var av = {};
                for (var at = 0; at < ax.length; at++) {
                    var aw = X[ax[at].member1325];
                    av[ax[at].member1325] = aw.clone();
                }
                if (X[-1] !== undefined) {
                    av[-1] = X[-1].clone();
                }
                au.member1324 = av;
            }
            return au;
        };
        ai.member1326 = function (av, az) {
            av.p2(ac);
            av.p1(x ? 1 : 0);
            var ay = av.getPos();
            av.setPos(ay + 8);
            var ax = 0, aB = 0;
            if (az === undefined) {
                for (var aA = 0; aA < Z; aA++) {
                    var au = aA * t;
                    if (Y[au + b] !== c) {
                        av.p4(aA);
                        av.p4(Y[au + b]);
                        av.p2(Y[au + q]);
                        av.p1(Y[au + m]);
                        ax++;
                    }
                }
                for (var aC in X) {
                    av.p4(aC);
                    X[aC].member1318(av);
                    aB++;
                }
            } else {
                for (var aw = 0; aw < az.length; aw++) {
                    av.p4(az[aw].member1325);
                    X[az[aw].member1325].member1318(av);
                    aB++;
                }
                av.p4(-1);
                X[-1].member1318(av);
                aB++;
            }
            var at = av.getPos();
            av.setPos(ay);
            av.p4(ax);
            av.p4(aB);
            av.setPos(at);
        };
        ai.member1327 = function (ax, au) {
            if (au) {
                var av = {};
                for (var at = 0; at < ax.length; at++) {
                    var aw = U(ax[at].member1325);
                    av[ax[at].member1328] = aw;
                    ax[at].member1329(aw);
                }
                return av;
            } else {
                for (var at = 0; at < ax.length; at++) {
                    ax[at].member1329(U(ax[at].member1325));
                }
            }
        };
        var U = function (at) {
            var au = X[at];
            if (au === undefined) {
                if (false) {
                }
                return 0;
            } else {
                return (au.member1316 + 1) * G + au.member1315 + 1;
            }
        };
        ai.member1330 = U;
        var aa = function (at) {
            var au = X[at];
            if (au === undefined) {
                if (false) {
                }
                return 64;
            } else {
                return au.member745 * Class137.member1304;
            }
        };
        ai.member1331 = aa;
        ai.member1332 = function (av) {
            for (var at = 0; at < av.length; at++) {
                var au = av[at].member1325;
                if (au !== -1) {
                    if (X[au] === undefined) {
                        if (false) {
                        }
                    }
                    X[au].member1282++;
                }
            }
        };
        ai.member1333 = function (av) {
            for (var at = 0; at < av.length; at++) {
                var au = av[at].member1325;
                if (au !== -1) {
                    var aw = X[au];
                    aw.member1282--;
                    if (aw.member1282 < 1) {
                        A.push(au);
                    }
                }
            }
        };
        var Q = function (au) {
            for (var at = 0; at < au.length; at++) {
                if (X[au[at].member1325] === undefined) {
                    return false;
                }
            }
            return true;
        };
        ai.member1334 = Q;
        ai.member1335 = function (au) {
            for (var at = 0; at < au.length; at++) {
                if (X[au[at].member1325] === undefined) {
                    return false;
                }
                if (W[au[at].member1325] === true) {
                    return false;
                }
            }
            return true;
        };
        ai.member1336 = function () {
            for (var at = 0; at < Z; at++) {
                var au = Y[at * t + b];
                if (au !== c && X[au].member1282 > 0) {
                    return true;
                }
            }
            return false;
        };
        var N = function (az) {
            var ay = new Array(az.length);
            for (var au = 0; au < az.length; au++) {
                var aw = az[au].member1325;
                var ax = az[au].member745;
                if (X[aw] === undefined) {
                    ay[au] = ak(aw, ax);
                    if (ay[au] === null) {
                        for (var aA = 0; aA < G; aA++) {
                            for (var av = 0; av < G; av++) {
                                var at = (aA * G + av) * t;
                                if (Y[at + b] !== c && Y[at + m] === 1) {
                                    Y[at + b] = c;
                                    Y[at + m] = 0;
                                }
                            }
                        }
                        for (var aw in X) {
                            if (X[aw].member1317) {
                                delete X[aw];
                            }
                        }
                        return false;
                    } else {
                        S(aw, ax, ay[au]);
                    }
                }
            }
            for (var au = 0; au < az.length; au++) {
                var aw = az[au].member1325;
                if (X[aw].member1317) {
                    am(aw, az[au].member745, az[au].member1337, az[au].member1338, ay[au]);
                }
            }
            return true;
        };
        ai.member1339 = N;
        var ak = function (au, ax) {
            var ay = ax * Class137.member1304 / Class137.member1305 + 2;
            for (var az = 0; az < G; az++) {
                slotFind:
                    for (var at = 0; at < G; at++) {
                        if (Y[(az * G + at) * t + b] === c) {
                            if (at + ay > G) {
                                continue slotFind;
                            }
                            if (az + ay > G) {
                                continue slotFind;
                            }
                            for (var av = az; av < az + ay; av++) {
                                for (var aw = at; aw < at + ay; aw++) {
                                    if (Y[(av * G + aw) * t + b] !== c) {
                                        continue slotFind;
                                    }
                                }
                            }
                            return {
                                member1315: at,
                                member1316: az
                            };
                        }
                    }
            }
            return null;
        };
        var S = function (av, aw, ay) {
            var ax = aw * Class137.member1304 / Class137.member1305 + 2;
            for (var az = ay.member1316; az < ay.member1316 + ax; az++) {
                for (var au = ay.member1315; au < ay.member1315 + ax; au++) {
                    var at = (az * G + au) * t;
                    Y[at + b] = av;
                    Y[at + q] = aw;
                    Y[at + m] = 1;
                }
            }
            X[av] = new n(ay.member1315, ay.member1316, aw);
        };
        var ag = function () {
            var at;
            if (x) {
                if (r === undefined) {
                    r = ao.member580(ad, ad, false, false, true, true);
                }
                at = r;
            } else {
                if (h === undefined) {
                    h = ao.member580(ad, ad, false, false, false, true);
                }
                at = h;
            }
            return at;
        };
        var af = function () {
            if (!g() || z === 0) {
                return;
            }
            var at = ag();
            if (!F) {
                ao.member581(at);
            }
            at.member1340(H);
            if (!F) {
                ao.member581(null);
            }
            ao.member1341(al, at, false, 1, undefined, undefined);
            ao.member581(null);
            z = 0;
        };
        var D = function () {
            if (!F) {
                var at = ag();
                ao.member581(at);
                at.member1340(al);
                ao.member1342();
                F = true;
            }
        };
        var I = function () {
            if (F) {
                ao.member581(null);
                ao.member1343();
                F = false;
            }
        };
        var ah = function (av, az, ax, aw, ay, at, au) {
            ao.member1344(av * Class137.member1305, ad - az * Class137.member1305 - ax, ax, ax);
            ao.enableScissorTest();
            ao.gl.clearColor(aw, ay, at, au);
            ao.gl.clear(ao.gl.COLOR_BUFFER_BIT);
            ao.member978();
        };
        var am = function (aE, ax, aA, aB, az) {
            var ay = ax * Class137.member1304;
            var aD = ay / Class137.member1305 + 2;
            var av = ay + Class137.member1305 * 2;
            for (var aC = az.member1316; aC < az.member1316 + aD; aC++) {
                for (var at = az.member1315; at < az.member1315 + aD; at++) {
                    Y[(aC * G + at) * t + m] = 0;
                }
            }
            X[aE].member1317 = false;
            var au = an.member1345(aE, ax, x);
            if (au === NULL) {
                if (aA && aB !== Class133.member1268) {
                    D();
                    ah(az.member1315, az.member1316, av, 1, 1, 1, 0);
                    I();
                }
                W[aE] = true;
                P = true;
            } else if (au !== undefined) {
                var aw = T(au.getData(), ax, ax, x);
                aw = V(aw, ay, ay, x);
                aq(az.member1315 * Class137.member1305, az.member1316 * Class137.member1305, av, av, false, aw);
            }
        };
        var O = function (av) {
            var ay = X[av];
            var aw = ay.member745 * Class137.member1304 + Class137.member1305 * 2;
            ah(ay.member1315, ay.member1316, aw, 1, 1, 1, 1);
            delete X[av];
            var ax = ay.member745 * Class137.member1304 / Class137.member1305 + 2;
            for (var az = ay.member1316; az < ay.member1316 + ax; az++) {
                for (var au = ay.member1315; au < ay.member1315 + ax; au++) {
                    var at = (az * G + au) * t;
                    Y[at + b] = c;
                    Y[at + m] = 0;
                }
            }
            delete W[av];
        };
        var aq = function (au, ay, aw, ax, av, at) {
            z++;
            al.member569(au, ay, aw, ax, av, at);
        };
        var T = function (aC, au, aw, aE) {
            if (Class137.member1304 === 1) {
                return aC;
            }
            var aH = au * Class137.member1304;
            var av = aw * Class137.member1304;
            var ay, aD;
            if (aE) {
                aD = new Float32Array(aC);
                ay = new Float32Array(aH * av * 4);
            } else {
                aD = new Uint8Array(aC);
                ay = new Uint8Array(aH * av * 4);
            }
            for (var aF = 0; aF < av; aF++) {
                for (var aG = 0; aG < aH; aG++) {
                    var aA = aF / (av - 1) * (aw - 1);
                    var aB = aG / (aH - 1) * (au - 1);
                    var az = (Math.floor(aA) * au + Math.floor(aB)) * 4;
                    var ax = (aF * aH + aG) * 4;
                    for (var at = 0; at < 4; at++) {
                        ay[ax + at] = aD[az + at];
                    }
                }
            }
            return ay;
        };
        var V = function (aN, at, aW, aU) {
            var aH = Class137.member1305;
            var aI = at + aH * 2;
            var aQ = aW + aH * 2;
            var aA, aX;
            if (aU) {
                aA = new Float32Array(aN);
                aX = new Float32Array(aI * aQ * 4);
            } else {
                aA = new Uint8Array(aN);
                aX = new Uint8Array(aI * aQ * 4);
            }
            for (var aE = 0; aE < aW; aE++) {
                for (var aG = 0; aG < at; aG++) {
                    var au = aE * at + aG;
                    var aR = (aE + aH) * aI + (aG + aH);
                    for (var aL = 0; aL < 4; aL++) {
                        aX[aR * 4 + aL] = aA[au * 4 + aL];
                    }
                }
            }
            var aw = aI * aH + aH;
            var aO = aw + (aW - 1) * aI;
            var av = aw;
            var aT = aw + at - 1;
            for (var aY = 0; aY < aH; aY++) {
                for (var aS = 0; aS < at; aS++) {
                    var aB = aw - (aY + 1) * aI + aS;
                    var ay = aO - aY * aI + aS;
                    for (var aL = 0; aL < 4; aL++) {
                        aX[aB * 4 + aL] = aX[ay * 4 + aL];
                    }
                    var aM = aO + (aY + 1) * aI + aS;
                    var az = aw + aY * aI + aS;
                    for (var aL = 0; aL < 4; aL++) {
                        aX[aM * 4 + aL] = aX[az * 4 + aL];
                    }
                }
                for (var aS = 0; aS < aW; aS++) {
                    var ax = av - (aY + 1) + aS * aI;
                    var aV = aT - aY + aS * aI;
                    for (var aL = 0; aL < 4; aL++) {
                        aX[ax * 4 + aL] = aX[aV * 4 + aL];
                    }
                    var aF = aT + (aY + 1) + aS * aI;
                    var aC = av + aY + aS * aI;
                    for (var aL = 0; aL < 4; aL++) {
                        aX[aF * 4 + aL] = aX[aC * 4 + aL];
                    }
                }
            }
            var aP = aw;
            var aK = aP + aW - (aH + 1);
            var aJ = aP + (aW - aH) * aI;
            var aD = aJ + aW - (aH + 1);
            for (var aE = 0; aE < aH; aE++) {
                for (var aG = 0; aG < aH; aG++) {
                    for (var aL = 0; aL < 4; aL++) {
                        aX[(aE * aI + aG) * 4 + aL] = aX[(aD + aE * aI + aG) * 4 + aL];
                        aX[((aE + 1) * aI - aH + aG) * 4 + aL] = aX[(aJ + aE * aI + aG) * 4 + aL];
                        aX[(aI * (aQ - aH + aE) + aG) * 4 + aL] = aX[(aK + aE * aI + aG) * 4 + aL];
                        aX[(aI * (aQ - aH + aE + 1) - aH + aG) * 4 + aL] = aX[(aP + aE * aI + aG) * 4 + aL];
                    }
                }
            }
            return aX;
        };
        ai.member78 = function () {
            if (P) {
                var ay = true;
                for (var ax in W) {
                    var aB = parseInt(ax);
                    var au = an.member1345(aB, X[aB].member745, x);
                    if (au === NULL) {
                        ay = false;
                    } else if (au !== undefined) {
                        var at = X[aB];
                        var aA = at.member745 * Class137.member1304;
                        var av = aA + Class137.member1305 * 2;
                        var az = T(au.getData(), at.member745, at.member745, x);
                        az = V(az, aA, aA, x);
                        aq(at.member1315 * Class137.member1305, at.member1316 * Class137.member1305, av, av, false, az);
                        delete W[aB];
                    }
                }
                if (ay) {
                    P = false;
                }
            }
            if (H.member560() && ap < Date.now() - 1000) {
                H.member570();
                ap = Date.now();
            }
            if (A.length > 0) {
                for (var aw = 0; aw < A.length; aw++) {
                    var aB = A[aw];
                    if (X[aB] === undefined || X[aB].member1282 > 0) {
                        continue;
                    }
                    D();
                    O(aB);
                }
                I();
                A.length = 0;
            }
            af();
        };
        var J = function () {
        };
        var L = function (au) {
            console.log('Texture atlas entries for atlas ' + au + ':');
            for (var at in X) {
                var av = X[at];
                console.log(at + ' === x ' + av.member1315 + ', y ' + av.member1316 + ', size ' + av.member745 * Class137.member1304 + ' (source ' + av.member745 + '), referencers ' + av.member1282 + ', provisional ' + av.member1317);
            }
        };
        ai.member1346 = L;
        var K = function () {
            al.member568(true);
        };
        ai.member1347 = K;
        var u = function () {
            return H.member558();
        };
        ai.member558 = u;
        var R = function () {
            H.member511();
        };
        ai.member512 = R;
        var C = function () {
            if (x) {
                G = Class137.member1307;
            } else {
                G = Class137.member1306;
            }
            Z = G * G;
            ad = G * Class137.member1305;
            var av = Math.ceil(Math.log(ad) / Math.log(2));
            ad = Math.pow(2, av);
            if (Y === undefined) {
                Y = new Int32Array(Z * t);
                for (var aw = 0; aw < Z; aw++) {
                    Y[aw * t + b] = c;
                }
            }
            for (var ax = 0; ax < 3; ax++) {
                for (var au = 0; au < 3; au++) {
                    var at = (ax * G + au) * t;
                    Y[at + b] = i;
                    Y[at + q] = Class137.member1305;
                    Y[at + m] = 0;
                }
            }
            X[-1] = new n(1, 1, Class137.member1305);
            X[-1].member1317 = false;
        };
        if (B.member433 !== undefined && B.member1300 !== undefined && B.id !== undefined) {
            ao = B.member433;
            an = B.member1300;
            ac = B.id;
            if (B.member552 !== undefined) {
                x = B.member552;
            }
            if (x && !ao.member553()) {
                throw new Error('1192 ');
            }
            C();
            var v;
            if (x) {
                v = new Float32Array(ad * ad * 4);
            } else {
                v = new Uint32Array(ad * ad);
            }
            var aj = ad * ad;
            if (x) {
                for (var ar = 0; ar < aj; ar++) {
                    v[ar * 4 + 0] = 1;
                    v[ar * 4 + 1] = 1;
                    v[ar * 4 + 2] = 1;
                    v[ar * 4 + 3] = 1;
                }
            } else {
                for (var ar = 0; ar < aj; ar++) {
                    v[ar] = 4294967295;
                }
            }
            H = Class76(ao, ad, ad, v.buffer, true, true, false, x);
            H.member510();
            H.member563();
            if (g()) {
                al = Class76(ao, ad, ad, v.buffer, true, true, false, x);
                al.member510();
                al.member563();
            } else {
                al = H;
                al.member510();
            }
        } else if (B.member1348 !== undefined) {
            ac = B.member1348.id;
            x = B.member1348.member552;
            if (B.member1348.member1323 !== undefined) {
                Y = B.member1348.member1323;
            }
            X = B.member1348.member1324;
            C();
        } else if (B.member1349 !== undefined) {
            ac = B.member1349.g2();
            x = B.member1349.g1() === 1;
            C();
            var y = B.member1349.g4();
            var M = B.member1349.g4();
            for (var ab = 0; ab < y; y++) {
                var ab = B.member1349.g4();
                Y[ab * t + b] = B.member1349.g4s();
                Y[ab * t + q] = B.member1349.g2();
                Y[ab * t + m] = B.member1349.g1();
            }
            for (var E = 0; E < M; E++) {
                var ae = B.member1349.g4s();
                X[ae] = new n(undefined, undefined, undefined, B.member1349);
            }
        } else {
            throw new Error('1193 ');
        }
        B = undefined;
        return ai;
    };
    return a;
}();