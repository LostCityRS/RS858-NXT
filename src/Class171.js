import { HillChange } from 'Class170.js';
import { Class41 } from 'Class41.js';
import { Packet } from 'Class124.js';
export var Class171 = function () {
    var a = 1;
    var b = new Float32Array(3);
    return function (aa) {
        var aL = {};
        var n = HillChange.member1860;
        var h = 0;
        aL.member1861 = function () {
            return h;
        };
        var ap = undefined;
        aL.member1862 = function (u) {
            return ap[u][0];
        };
        aL.member1863 = function (u) {
            return ap[u][1];
        };
        aL.member1864 = function (u) {
            return ap[u][2];
        };
        var J = undefined;
        aL.member1865 = function (u) {
            if (J === undefined) {
                return 0;
            } else {
                return J[u];
            }
        };
        aL.member1866 = function (u) {
            if (J === undefined) {
                return false;
            }
            if ((J[aN[u][0]] & 255) !== 255) {
                return true;
            }
            if ((J[aN[u][1]] & 255) !== 255) {
                return true;
            }
            if ((J[aN[u][2]] & 255) !== 255) {
                return true;
            }
            return false;
        };
        var g = undefined;
        var s = undefined;
        aL.member1722 = function (u) {
            if (s === undefined) {
                return undefined;
            } else {
                return s[u];
            }
        };
        aL.member1867 = function (u, aO) {
            if (s === undefined) {
                return undefined;
            } else {
                aO[0] = s[aN[u][0]];
                aO[1] = s[aN[u][1]];
                aO[2] = s[aN[u][2]];
                return aO;
            }
        };
        var aw = 0;
        aL.member1868 = function () {
            return aw;
        };
        var aN = undefined;
        aL.member1869 = function (u, aO) {
            return aN[u][aO];
        };
        aL.member1870 = function (aO) {
            var u = aN[aO][0];
            var aU = aN[aO][1];
            var aT = aN[aO][2];
            var aP = ap[u][0];
            var aQ = ap[u][1];
            var aS = ap[u][2];
            b[0] = aP - ap[aU][0];
            b[1] = aQ - ap[aU][1];
            b[2] = aS - ap[aU][2];
            b[0] = aP - ap[aT][0];
            b[1] = aQ - ap[aT][1];
            b[2] = aS - ap[aT][2];
            var aR = b;
            Class41.member325(aR, b);
            Class41.normalize(aR);
            return aR;
        };
        var ax = undefined;
        aL.member1871 = function (u) {
            if (ax === undefined) {
                return undefined;
            } else {
                return {
                    u: [
                        g[aN[u][0]][ax[u][0]][0],
                        g[aN[u][1]][ax[u][1]][0],
                        g[aN[u][2]][ax[u][2]][0]
                    ],
                    member1873: [
                        g[aN[u][0]][ax[u][0]][1],
                        g[aN[u][1]][ax[u][1]][1],
                        g[aN[u][2]][ax[u][2]][1]
                    ]
                };
            }
        };
        var aC = undefined;
        aL.member1874 = function () {
            return aC !== undefined;
        };
        aL.member1875 = function (u) {
            if (aC !== undefined) {
                return aC[u];
            } else {
                return undefined;
            }
        };
        if (aa.data !== undefined) {
            var y = aa.data;
            var ae = Packet(undefined, y.getData());
            var aE = Packet(undefined, y.getData());
            var aB = Packet(undefined, y.getData());
            var aA = Packet(undefined, y.getData());
            var az = Packet(undefined, y.getData());
            var at = Packet(undefined, y.getData());
            var m = Packet(undefined, y.getData());
            var X = Packet(undefined, y.getData());
            var aN = Packet(undefined, y.getData());
            var ao = Packet(undefined, y.getData());
            var ar = Packet(undefined, y.getData());
            ap = new Array(0);
            J = new Array(0);
            g = new Array(0);
            s = new Array(0);
            aN = new Array(0);
            ax = new Array(0);
            aC = new Array(0);
            var n = ae.g1();
            if (n !== HillChange.member1860) {
                throw new Error('1570 ' + n);
            }
            var C = ae.g1();
            if (C > a) {
                throw new Error('1571 ' + C);
            }
            var K = ae.g3();
            var aG = ae.g3();
            var q = ae.g3();
            var A = ae.g3();
            var av = ae.g3();
            var v = ae.g3();
            var E = ae.g3();
            var z = ae.g3();
            var F = ae.g3();
            var ah = ae.g3();
            var Y = ae.g1();
            for (var Z = 0; Z < Y; Z++) {
                var af = ae.g2();
                var c = ae.g2();
                var k = ae.g2s();
                aE.setPos(K + ae.gSmart2or4null());
                aB.setPos(aG + ae.gSmart2or4null());
                aA.setPos(q + ae.gSmart2or4null());
                az.setPos(A + ae.gSmart2or4null());
                at.setPos(av + ae.gSmart2or4null());
                X.setPos(v + ae.gSmart2or4null());
                m.setPos(E + ae.gSmart2or4null());
                aN.setPos(z + ae.gSmart2or4null());
                ao.setPos(F + ae.gSmart2or4null());
                ar.setPos(ah + ae.gSmart2or4null());
                var ag = new Float32Array(3);
                var e = 0;
                var aM = new Array(af);
                var ai = new Array(af);
                var aq = new Array(af);
                var r = new Array(af);
                for (var aj = 0; aj < af; aj++) {
                    var i = aE.g1();
                    var aK = 0;
                    if ((i & 1) === 1) {
                        aK = aB.gSmart1or2s();
                    }
                    var aJ = 0;
                    if ((i & 2) === 2) {
                        aJ = aA.gSmart1or2s();
                    }
                    var aI = 0;
                    if ((i & 4) === 4) {
                        aI = az.gSmart1or2s();
                    }
                    var o = 0;
                    if ((i & 8) === 8) {
                        o = at.g4s();
                    }
                    ag[0] += aK;
                    ag[1] += aJ;
                    ag[2] += aI;
                    e += o;
                    aM[aj] = new Float32Array([
                        ag[0],
                        ag[1],
                        ag[2]
                    ]);
                    ai[aj] = e;
                    var an = m.g1();
                    aq[aj] = new Array(an);
                    for (var H = 0; H < an; H++) {
                        var G = 1 - X.g2s() / (32767 / 8);
                        var ak = 1 - X.g2s() / (32767 / 8);
                        aq[aj][H] = new Float32Array([
                            G,
                            ak
                        ]);
                    }
                    r[aj] = -1;
                }
                ap = ap.concat(aM);
                J = J.concat(ai);
                g = g.concat(aq);
                s = s.concat(r);
                var am = new Array(c);
                var j = new Array(c);
                var D = new Array(c);
                var P = 0, N = 0, M = 0;
                var T = 0, Q = 0, O = 0;
                var aH = 0;
                for (var d = 0; d < c; d++) {
                    var S = ao.g1();
                    if (S === 1) {
                        P = aN.gSmart1or2s() + aH;
                        aH = P;
                        T = ar.g1();
                        N = aN.gSmart1or2s() + aH;
                        aH = N;
                        Q = ar.g1();
                        M = aN.gSmart1or2s() + aH;
                        aH = M;
                        O = ar.g1();
                    } else if (S === 2) {
                        N = M;
                        M = aN.gSmart1or2s() + aH;
                        aH = M;
                        Q = O;
                        O = ar.g1();
                    } else if (S === 3) {
                        P = M;
                        M = aN.gSmart1or2s() + aH;
                        aH = M;
                        T = O;
                        O = ar.g1();
                    } else if (S === 4) {
                        var ad = P;
                        P = N;
                        N = ad;
                        M = aN.gSmart1or2s() + aH;
                        aH = M;
                        ad = T;
                        T = Q;
                        Q = ad;
                        O = ar.g1();
                    }
                    am[d] = [
                        P + h,
                        N + h,
                        M + h
                    ];
                    D[d] = k;
                    j[d] = [
                        T,
                        Q,
                        O
                    ];
                    for (var au = 0; au < 3; au++) {
                        var ac = am[d][au];
                        var W = j[d][au];
                        var H = g[ac][W];
                    }
                }
                aN = aN.concat(am);
                aC = aC.concat(D);
                ax = ax.concat(j);
                h += af;
                aw += c;
            }
        } else if (aa.member680 !== undefined) {
        } else if (aa.member1876 !== undefined) {
            for (var aF = 0; aF < aa.member1876.length; aF++) {
                var ab = aa.member1876[aF];
                h += ab.member1861();
                aw += ab.member1868();
            }
            ap = new Array(h);
            J = new Array(h);
            g = new Array(h);
            s = new Array(h);
            aN = new Array(aw);
            ax = new Array(aw);
            aC = new Array(aw);
            var I = 0;
            var ay = 0;
            for (var aF = 0; aF < aa.member1876.length; aF++) {
                var ab = aa.member1876[aF];
                for (var d = 0; d < ab.member1868(); d++) {
                    definition.faceVertices[ay] = [
                        ab.faceVertices[d][0] + I,
                        ab.faceVertices[d][1] + I,
                        ab.faceVertices[d][2] + I
                    ];
                    definition.member1877[ay] = ab.member1877[d];
                    definition.member1878[ay] = [
                        ab.member1878[d][0],
                        ab.member1878[d][1],
                        ab.member1878[d][2]
                    ];
                    ay++;
                }
                for (var aj = 0; aj < ab.member1879; aj++) {
                    definition.vertexPositions[I] = new Float32Array([
                        ab.vertexPositions[aj][0],
                        ab.vertexPositions[aj][1],
                        ab.vertexPositions[aj][2]
                    ]);
                    definition.vertexRGBAs[I] = ab.vertexRGBAs[aj];
                    definition.vertexUVs[I] = new Array(ab.vertexUVs.length);
                    for (var H = 0; H < ab.vertexUVs[aj].length; H++) {
                        definition.vertexUVs[I][H] = new Float32Array([
                            ab.vertexUVs[aj][H][0],
                            ab.vertexUVs[aj][H][1]
                        ]);
                    }
                    definition.vertexBoneIDs[I] = ab.vertexBoneIDs[aj];
                    I++;
                }
            }
        } else if (aa.member1880 !== undefined) {
            var t = aa.member1880.member1881();
            var V = aa.member1880.member1882();
            var B = aa.member1880.member1883();
            var U = aa.member1880.getColour();
            var x = aa.member1880.member1884();
            var al = new Float32Array([
                0,
                0
            ]);
            var R = [
                0,
                0,
                0
            ];
            h = t.length;
            ap = t;
            s = V;
            J = new Array(h);
            g = new Array(h);
            for (var ak = 0; ak < h; ak++) {
                if (x !== undefined) {
                    J[ak] = x[ak];
                } else {
                    J[ak] = U;
                }
                g[ak] = al;
            }
            aw = B.length;
            aN = B;
            ax = new Array(aw);
            aC = new Array(aw);
            for (var L = 0; L < aw; L++) {
                ax[L] = R;
                aC[L] = -1;
            }
        } else {
            throw new Error('1572 ');
        }
        var aD = function (aO) {
            var aP = 0;
            var aS = {};
            var aR = new Array(0);
            if (aC !== undefined) {
                for (var aQ = 0; aQ < aw; aQ++) {
                    var u = aC[aQ];
                    if (u !== -1) {
                        if (aS[u] === undefined) {
                            aR[aP++] = u;
                            aS[u] = 1;
                        }
                    }
                }
            }
            return aR;
        };
        aL.member1885 = aD;
        aL.member1886 = function () {
            return HillChange.member1860;
        };
        aL.member1887 = function (u) {
            return undefined;
        };
        aL.member1888 = function (u) {
            return false;
        };
        aL.member1889 = function (u) {
            return false;
        };
        aL.member1890 = function (u) {
            return 0;
        };
        aL.member1891 = function () {
            return false;
        };
        aL.member1723 = function (u) {
            return undefined;
        };
        aL.member1709 = function () {
            return 0;
        };
        aL.member1892 = function () {
            return 0;
        };
        aa = undefined;
        return aL;
    };
}();