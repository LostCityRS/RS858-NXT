import { Class170 } from 'Class170.js';
import { Class41 } from 'Class41.js';
import { Class124 } from 'Class124.js';
export var Class171 = function () {
    var a = 1;
    var b = new Float32Array(3);
    return function (aa) {
        var aL = {};
        var n = Class170.member1860;
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
            var ae = Class124(undefined, y.getData());
            var aE = Class124(undefined, y.getData());
            var aB = Class124(undefined, y.getData());
            var aA = Class124(undefined, y.getData());
            var az = Class124(undefined, y.getData());
            var at = Class124(undefined, y.getData());
            var m = Class124(undefined, y.getData());
            var X = Class124(undefined, y.getData());
            var aN = Class124(undefined, y.getData());
            var ao = Class124(undefined, y.getData());
            var ar = Class124(undefined, y.getData());
            ap = new Array(0);
            J = new Array(0);
            g = new Array(0);
            s = new Array(0);
            aN = new Array(0);
            ax = new Array(0);
            aC = new Array(0);
            var n = ae.member609();
            if (n !== Class170.member1860) {
                throw new Error('1570 ' + n);
            }
            var C = ae.member609();
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
            var Y = ae.member609();
            for (var Z = 0; Z < Y; Z++) {
                var af = ae.member608();
                var c = ae.member608();
                var k = ae.member1071();
                aE.member607(K + ae.member1086());
                aB.member607(aG + ae.member1086());
                aA.member607(q + ae.member1086());
                az.member607(A + ae.member1086());
                at.member607(av + ae.member1086());
                X.member607(v + ae.member1086());
                m.member607(E + ae.member1086());
                aN.member607(z + ae.member1086());
                ao.member607(F + ae.member1086());
                ar.member607(ah + ae.member1086());
                var ag = new Float32Array(3);
                var e = 0;
                var aM = new Array(af);
                var ai = new Array(af);
                var aq = new Array(af);
                var r = new Array(af);
                for (var aj = 0; aj < af; aj++) {
                    var i = aE.member609();
                    var aK = 0;
                    if ((i & 1) === 1) {
                        aK = aB.member1080();
                    }
                    var aJ = 0;
                    if ((i & 2) === 2) {
                        aJ = aA.member1080();
                    }
                    var aI = 0;
                    if ((i & 4) === 4) {
                        aI = az.member1080();
                    }
                    var o = 0;
                    if ((i & 8) === 8) {
                        o = at.member1074();
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
                    var an = m.member609();
                    aq[aj] = new Array(an);
                    for (var H = 0; H < an; H++) {
                        var G = 1 - X.member1071() / (32767 / 8);
                        var ak = 1 - X.member1071() / (32767 / 8);
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
                    var S = ao.member609();
                    if (S === 1) {
                        P = aN.member1080() + aH;
                        aH = P;
                        T = ar.member609();
                        N = aN.member1080() + aH;
                        aH = N;
                        Q = ar.member609();
                        M = aN.member1080() + aH;
                        aH = M;
                        O = ar.member609();
                    } else if (S === 2) {
                        N = M;
                        M = aN.member1080() + aH;
                        aH = M;
                        Q = O;
                        O = ar.member609();
                    } else if (S === 3) {
                        P = M;
                        M = aN.member1080() + aH;
                        aH = M;
                        T = O;
                        O = ar.member609();
                    } else if (S === 4) {
                        var ad = P;
                        P = N;
                        N = ad;
                        M = aN.member1080() + aH;
                        aH = M;
                        ad = T;
                        T = Q;
                        Q = ad;
                        O = ar.member609();
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
            var U = aa.member1880.member600();
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
            return Class170.member1860;
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