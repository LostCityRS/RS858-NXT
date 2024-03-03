import { Class41 } from 'Class41.js';
import { Class140 } from 'Class140.js';
import { Class124 } from 'Class124.js';
import { Class86 } from 'Class86.js';
import { Class121 } from 'Class121.js';
import { Class131 } from 'Class131.js';
import { Class157 } from 'Class157.js';
import { Class128 } from 'Class128.js';
import { Class87 } from 'Class87.js';
import { Class158 } from 'Class158.js';
import { Class129 } from 'Class129.js';
import { Class147 } from 'Class147.js';
import { Class143 } from 'Class143.js';
export var Class159 = function (m) {
    var U = {};
    var L = 0;
    var v = 1;
    var N = 74;
    var B = false;
    var y, x;
    var l;
    var r;
    var s;
    var P;
    var p;
    var J;
    var o;
    var A = null;
    var d = null;
    var S = false;
    var k = false;
    var a = false;
    var M = new Array(0);
    var u = false;
    var W = false;
    var D = new Array(0);
    var H = Class41.create();
    var R = Class41.create();
    var I = Class140.create();
    var j = Class41.create();
    var X = Class41.create();
    var b = Class41.create();
    var z = Class41.create();
    if (m.request.member1640 !== undefined && m.request.member1641 !== undefined && m.request.member1566 !== undefined) {
        y = m.request.member1642;
        x = m.request.member1643;
        l = new Array(m.request.member1640.length);
        for (var h = 0; h < l.length; h++) {
            l[h] = Class124(undefined, m.request.member1640[h]);
        }
        r = m.request.member1644;
        s = m.request.member1641;
        p = m.request.member1566;
        o = m.request.member1565;
        if (false) {
        } else {
            U.name = '';
        }
    } else {
        throw new Error('1971 ');
    }
    var E = function (Z, aa, Y) {
        if (aa === 0) {
            if (Y !== null) {
                M = Y;
                k = true;
            }
            a = false;
        } else if (aa === 1) {
            if (Y !== null) {
                D = Y;
                u = true;
            }
            W = false;
        } else {
            throw new Error('1972 ' + Z.member1645() + '1972 ' + aa);
        }
    };
    U.member1646 = E;
    var C = function (Y, Z) {
        d[Z].member1569 = Y;
        d[Z].member1647 = false;
    };
    U.member1648 = C;
    var Q = function (Y) {
        var Z;
        if (Y === 0) {
            Z = 0;
        } else if (Y === 1) {
            Z = 1;
        } else if (Y === P) {
            Z = Class86.member729;
        } else if (Y === P + 1) {
            Z = Class86.member729 + 1;
        } else {
            Z = Math.ceil((Y - 1) * J + 1);
        }
        return Z;
    };
    var c = function (ac, an) {
        if (A === null) {
            P = Class121.member1032[s];
            J = (Class86.member729 + 2) / (P + 2);
            G();
            var am = 0;
            var ae = {};
            var ao = 0;
            var aa = {};
            for (var aj = 0; aj < A.length; aj++) {
                for (var Y = 0; Y < Class86.member414; Y++) {
                    if (A[aj][Y] === undefined) {
                        continue;
                    }
                    var ar = A[aj][Y];
                    for (var af = 0; af < P + 2; af++) {
                        var al = Q(af);
                        for (var ai = 0; ai < P + 2; ai++) {
                            var ak = Q(ai);
                            var aq = ar[al][ak];
                            if (aq !== undefined) {
                                if (aq.member1649 !== undefined && aq.member1649 !== -1) {
                                    if (ae[aq.member1649] === undefined) {
                                        ae[aq.member1649] = true;
                                        M[am++] = aq.member1649;
                                    }
                                }
                                if (aq.member1650 !== undefined && aq.member1650 !== -1) {
                                    if (ae[aq.member1650] === undefined) {
                                        ae[aq.member1650] = true;
                                        M[am++] = aq.member1650;
                                    }
                                }
                                if (aq.member1651 !== undefined && aq.member1651 !== -1) {
                                    if (aa[aq.member1651] === undefined) {
                                        aa[aq.member1651] = true;
                                        D[ao++] = aq.member1651;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (d === null) {
            var Z = true;
            if (!k) {
                if (!a) {
                    ac.member1652(Class131.member1203.member1204, M, an, 0);
                    a = true;
                }
                Z = false;
            }
            if (!u) {
                if (!W) {
                    ac.member1652(Class131.member1207.member1204, D, an, 1);
                    W = true;
                }
                Z = false;
            }
            if (!Z) {
                return null;
            }
            T();
        }
        if (s <= Class121.member796) {
            var ad = true;
            for (var Y = 0; Y < Class86.member414; Y++) {
                if (d[Y] === undefined) {
                    continue;
                }
                if (d[Y].member1569 === undefined && d[Y].member1653.length > 0) {
                    if (!d[Y].member1647) {
                        ac.member1654(d[Y].member1653, an, Y);
                        d[Y].member1647 = true;
                    }
                    ad = false;
                }
            }
            if (!ad) {
                return null;
            }
        }
        var ah = new Array(Class86.member414);
        var ag = [];
        for (var Y = 0; Y < Class86.member414; Y++) {
            if (d[Y] === undefined) {
                continue;
            }
            ah[Y] = {};
            if (o !== undefined) {
                o.level = Y;
                if (Y === 0) {
                    o.member1566 = p;
                } else {
                    o.member1566 = undefined;
                }
            }
            var ab = Class157({
                member1560: P,
                member1561: Math.floor(Class86.member718 * (Class86.member729 / P)),
                member1562: d[Y].member1562,
                member1569: d[Y].member1569,
                member1565: o
            });
            ah[Y].member1655 = d[Y].member1655;
            if (Y === 0) {
                ah[Y].member1656 = d[Y].member1656;
            }
            ah[Y].member1657 = d[Y].member1657;
            ah[Y].member1607 = ab.member681();
            ag.push(ah[Y].member1607.member1570);
            for (var ap = 0; ap < ah[Y].member1655.length; ap++) {
                ag.push(ah[Y].member1655[ap].buffer);
                if (Y === 0) {
                    ag.push(ah[Y].member1656[ap].buffer);
                }
                ag.push(ah[Y].member1657[ap].buffer);
            }
            ab.member512();
        }
        return {
            member1658: ah,
            member1659: ag
        };
    };
    U.member78 = c;
    var G = function () {
        A = new Array(l.length);
        for (var ad = 0; ad < A.length; ad++) {
            A[ad] = new Array(Class86.member414);
            var ac = l[ad];
            while (ac.member1047() < ac.getSize()) {
                var aa = ac.member609();
                var ab = A[ad][aa] = new Array(Class86.member729 + 2);
                for (var Y = 0; Y < Class86.member729 + 2; Y++) {
                    ab[Y] = new Array(Class86.member729 + 2);
                    for (var ag = 0; ag < Class86.member729 + 2; ag++) {
                        var ae = ab[Y][ag] = {};
                        var af = ac.member609();
                        if (af !== 0) {
                            ae.member1660 = af >> 1 & 7;
                            ae.member1661 = (af >> 4 & 1) === 1;
                            ae.member1662 = ac.member609();
                            if (ae.member1661) {
                                ae.member1663 = ac.member609();
                            } else if (aa === 0) {
                                ae.member1663 = 0;
                            }
                            ae.member1649 = ac.member1078() - 1;
                            if (ae.member1649 !== -1) {
                                ae.member1664 = ac.member608();
                            }
                            ae.member1651 = ac.member1078() - 1;
                            if (ae.member1651 !== -1) {
                                var Z = ac.member609();
                                ae.member1598 = Class128.getByID(Z >> 2);
                                ae.member1665 = Z & 3;
                                if (ae.member1661) {
                                    ae.member1650 = ac.member1078() - 1;
                                }
                            }
                            if (o !== undefined && ae.member1661) {
                                if (ae.member1650 === -1 || ae.member1651 === -1) {
                                    ae.member766 = Class87.member749;
                                }
                            }
                        } else {
                            ae.member1662 = ac.member609();
                            ae.member1661 = false;
                            ae.member1663 = 0;
                        }
                    }
                }
            }
        }
    };
    var i = function (ae, ad, ab, Z, aa) {
        var Y = 0;
        if (Z === 0) {
            if (aa) {
                Y = 0;
            } else {
                var ac = ae - 1;
                Y = 240 * 4;
                while (ac >= 0) {
                    if (d[ac] === undefined) {
                        Y += 240 * 4;
                    } else {
                        if (ac > 0) {
                            Y += d[ac].member1655[ad][ab];
                        } else {
                            Y += d[ac].member1656[ad][ab];
                        }
                        break;
                    }
                    ac--;
                }
            }
        } else if (aa) {
            Y = Z * 32;
        } else {
            if (Z === 1) {
                Z = 0;
            }
            var ac = ae - 1;
            Y = Z * 32;
            while (ac >= 0) {
                if (d[ac] === undefined) {
                    Y += 240 * 4;
                } else {
                    if (ac > 0) {
                        Y += d[ac].member1655[ad][ab];
                    } else {
                        Y += d[ac].member1656[ad][ab];
                    }
                    break;
                }
                ac--;
            }
        }
        return Y;
    };
    var F = function (aa, Z, Y, ad, ac, af, ae, ab) {
        Z.member1598 = aa.member1598;
        if (Z.member1598 === Class128.member1161) {
            q(Y, Z, af, ae);
        } else {
            Z.member768 = null;
            Z.member769 = null;
            if (ad !== null && ac !== null) {
                Z.member768 = {};
                O(ac, Z.member768, af, ae, aa.member1664);
                Z.member769 = {};
                O(ad, Z.member769, af, ae, aa.member1664);
                if (o !== undefined) {
                    Z.member766 = Class87.member750;
                }
            } else {
                if (Y !== null) {
                    Z.member768 = {};
                    q(Y, Z.member768, af, ae);
                }
                if (ad !== null) {
                    Z.member769 = {};
                    O(ad, Z.member769, af, ae, aa.member1664);
                }
            }
            Z.member763 = aa.member1665 + ab & 3;
        }
    };
    var T = function () {
        d = new Array(Class86.member414);
        for (var ah = 0; ah < Class86.member414; ah++) {
            var av = d[ah] = {};
            var aD = av.member1562 = new Array(P + 2);
            av.member1655 = new Array(Class86.member729 + 2);
            av.member1657 = new Array(Class86.member729 + 2);
            if (ah === 0) {
                av.member1656 = new Array(Class86.member729 + 2);
            }
            var aI = {};
            var aB = av.member1653 = new Array(0);
            av.member1569 = undefined;
            av.member1647 = false;
            var an = false;
            for (var aX = 0; aX < Class86.member729 + 2; aX++) {
                var aF;
                if (aX === Class86.member729 + 1) {
                    aF = P + 1;
                } else {
                    aF = Math.floor(aX / (Class86.member729 / P));
                }
                var aV = Q(aF);
                var ai;
                if (aD[aF] === undefined) {
                    ai = aD[aF] = new Array(P + 2);
                }
                av.member1655[aX] = new Float32Array(Class86.member729 + 2);
                av.member1657[aX] = new Float32Array(Class86.member729 + 2);
                if (ah === 0) {
                    av.member1656[aX] = new Float32Array(Class86.member729 + 2);
                }
                for (var aW = 0; aW < Class86.member729 + 2; aW++) {
                    var aC;
                    if (aW === Class86.member729 + 1) {
                        aC = P + 1;
                    } else {
                        aC = Math.floor(aW / (Class86.member729 / P));
                    }
                    var ac = aV;
                    var ad = aX;
                    var Z = Q(aC);
                    var ab = aW;
                    var aP = ah;
                    var aj = undefined;
                    if (ai !== undefined && ai[aC] === undefined) {
                        aj = ai[aC] = {};
                        aj.member546 = 0;
                        aj.member651 = -1;
                        aj.member743 = -1;
                        aj.height = 0;
                        aj.member1598 = Class128.member1161;
                        aj.member763 = 0;
                        aj.member766 = Class87.member748;
                    }
                    av.member1655[aX][aW] = 0;
                    av.member1657[aX][aW] = 0;
                    if (ah === 0) {
                        av.member1656[aX][aW] = 0;
                    }
                    var au = A[0];
                    var aa = 0;
                    if (r !== undefined) {
                        var af = ac - 1, ap = ad - 1;
                        if (af < 0) {
                            af = 0;
                        } else if (af >= Class86.member729) {
                            af = Class86.member729 - 1;
                        }
                        if (ap < 0) {
                            ap = 0;
                        } else if (ap >= Class86.member729) {
                            ap = Class86.member729 - 1;
                        }
                        var ae = Z - 1, ao = ab - 1;
                        if (ae < 0) {
                            ae = 0;
                        } else if (ae >= Class86.member729) {
                            ae = Class86.member729 - 1;
                        }
                        if (ao < 0) {
                            ao = 0;
                        } else if (ao >= Class86.member729) {
                            ao = Class86.member729 - 1;
                        }
                        var aL = Math.floor(af / Class86.member717);
                        var aJ = Math.floor(ae / Class86.member717);
                        var aQ = r.member1666[aP][aL][aJ];
                        if (aQ === undefined) {
                            continue;
                        }
                        au = A[aQ.member1667];
                        aP = aQ.level;
                        var ax = af % Class86.member717, al = ap % Class86.member717;
                        var aw = ae % Class86.member717, ak = ao % Class86.member717;
                        var aR = 0;
                        if (aQ.member1668 === 1 || aQ.member1668 === 3) {
                            aR = 2;
                        }
                        var az = 0, aS = 0;
                        if (ac === 0) {
                            az = -1;
                        } else if (ac === Class86.member729 + 1) {
                            az = 1;
                        }
                        if (ad === 0) {
                            aS = -1;
                        } else if (ad === Class86.member729 + 1) {
                            aS = 1;
                        }
                        var aG = Class158.member1634(ax, aw, aQ.member1668 + aR);
                        ac = (aG + aQ.member1669 * Class86.member717) % Class86.member729 + az + 1;
                        var at = Class158.member1634(al, ak, aQ.member1668 + aR);
                        ad = (at + aQ.member1669 * Class86.member717) % Class86.member729 + aS + 1;
                        var aA = 0, aT = 0;
                        if (Z === 0) {
                            aA = -1;
                        } else if (Z === Class86.member729 + 1) {
                            aA = 1;
                        }
                        if (ab === 0) {
                            aT = -1;
                        } else if (ab === Class86.member729 + 1) {
                            aT = 1;
                        }
                        var aE = Class158.member1635(ax, aw, aQ.member1668 + aR);
                        Z = (aE + aQ.member1670 * Class86.member717) % Class86.member729 + aA + 1;
                        var aq = Class158.member1635(al, ak, aQ.member1668 + aR);
                        ab = (aq + aQ.member1670 * Class86.member717) % Class86.member729 + aT + 1;
                        aa = aQ.member1668;
                    }
                    var ar = au[aP];
                    if (ar === undefined) {
                        continue;
                    }
                    var ag = ar[ad][ab];
                    av.member1655[aX][aW] = i(ah, aX, aW, ag.member1662, ag.member1661);
                    av.member1657[aX][aW] = ag.member1660;
                    if (ag.member1661) {
                        av.member1656[aX][aW] = i(ah, aX, aW, ag.member1663, false);
                        av.member1655[aX][aW] = av.member1656[aX][aW] - av.member1655[aX][aW];
                    } else if (ah === 0) {
                        av.member1656[aX][aW] = av.member1655[aX][aW];
                    }
                    var ay = ar[ac][Z];
                    if (ay === undefined) {
                        continue;
                    }
                    an = true;
                    if (aj === undefined) {
                        continue;
                    }
                    aj.member1582 = L;
                    if (ah > 0) {
                        for (var Y = ah - 1; Y >= 0; Y--) {
                            var aN = d[Y];
                            if (aN !== undefined && (aN.member1657[aX][aW] & Class129.member1176) !== 0) {
                                aj.member1582 = v;
                            }
                        }
                    }
                    aj.height = i(ah, aX, aW, ay.member1662, ay.member1661);
                    if (ay.member1661) {
                        var am = i(ah, aX, aW, ay.member1663, false);
                        aj.height = am - aj.height;
                    }
                    var aO = null, aK = null, aU = null;
                    if (ay.member1649 !== undefined && ay.member1649 !== -1 && ay.member1649 === ay.member1649) {
                        aO = K(ay.member1649);
                    }
                    if (ay.member1650 !== undefined && ay.member1650 !== -1 && ay.member1650 === ay.member1650) {
                        aK = K(ay.member1650);
                    }
                    if (ay.member1651 !== undefined && ay.member1651 !== -1 && ay.member1651 === ay.member1651) {
                        aU = t(ay.member1651);
                    }
                    if (aO === null && aU === null) {
                        continue;
                    }
                    aj.member766 = ay.member766;
                    if (aU === null) {
                        O(aO, aj, aI, aB, ay.member1664);
                    } else {
                        F(ay, aj, aU, aO, aK, aI, aB, aa);
                    }
                    e(aj, aX - 1, aW - 1);
                }
            }
            if (!an) {
                d[ah] = undefined;
            }
            if (false) {
            }
        }
        if (r !== undefined) {
            for (var ah = 0; ah < r.member1666.length; ah++) {
                if (d[ah] === undefined) {
                    continue;
                }
                for (var aM = 0; aM < Class86.member717; aM++) {
                    for (var aH = 0; aH < Class86.member717; aH++) {
                        if (r.member1666[ah][aM][aH] === undefined) {
                            n(ah, aM, aH);
                        }
                    }
                }
                V(ah);
            }
        }
    };
    var K = function (Z) {
        for (var Y = 0; Y < M.length; Y++) {
            if (M[Y].member625 === Z) {
                return M[Y];
            }
        }
        if (false) {
        }
        return null;
    };
    var t = function (Z) {
        for (var Y = 0; Y < D.length; Y++) {
            if (D[Y].member625 === Z) {
                return D[Y];
            }
        }
        if (false) {
        }
        return null;
    };
    var O = function (ab, af, ad, ac, Y) {
        var ae;
        if (ab.member651 !== -1) {
            ae = Class147.member1484(ab.member651);
            if (ae === null) {
                ae = undefined;
            }
            if (o !== undefined && ae !== undefined && ae.member1337()) {
                ae = undefined;
            }
        }
        var Z = -1;
        if (ae !== undefined) {
            if (ae.member1361()) {
                Z = ab.member651;
                if (ad[Z] === undefined) {
                    ad[Z] = true;
                    ac[ac.length] = Z;
                }
            }
        }
        var ag = Y;
        ag = (ag & 127) * N / 127 | ag & ~127;
        var aa = Class143.member1441(ag) << 8 | 255;
        if (o === undefined) {
            if (Z != -1 && ae.member1386()) {
                aa = Class143.member1445(aa >> 8, 127, ae.member1430(), ae.member1429()) << 8 | aa & 255;
            }
        }
        af.member546 = aa;
        af.member651 = Z;
        af.member743 = ab.member743;
        af.priority = 0;
        af.member759 = true;
        return Z !== -1;
    };
    var q = function (aa, ae, ad, ac) {
        var Y;
        if (aa.member651 !== -1) {
            Y = Class147.member1484(aa.member651);
            if (Y === null) {
                Y = undefined;
            }
            if (o !== undefined && Y !== undefined && Y.member1337()) {
                Y = undefined;
            }
        }
        var Z = -1;
        if (Y !== undefined) {
            if (Y.member1361()) {
                Z = aa.member651;
                if (ad[Z] === undefined) {
                    ad[Z] = true;
                    ac[ac.length] = Z;
                }
            }
        }
        var ab = aa.member546;
        if (o === undefined) {
            if (Z != -1 && Y.member1386()) {
                ab = Class143.member1445(ab >> 8, 127, Y.member1430(), Y.member1429()) << 8 | ab & 255;
            }
        } else if (aa.member1671 !== 0) {
            ab = aa.member1671;
        }
        ae.member546 = ab;
        ae.member651 = Z;
        ae.member743 = aa.member743;
        ae.priority = aa.priority;
        ae.member759 = aa.member1672;
        return Z !== -1;
    };
    var e = function (an, al, aj) {
        var ae = al * Class86.member718, ad = aj * Class86.member718;
        for (var ap = 0; ap < p.length; ap++) {
            var ac = p[ap];
            var aa = ae - ac.member1593[0];
            var Y = ad - ac.member1593[2];
            H[0] = 0;
            H[1] = 1;
            H[2] = 0;
            Class140.member318(ac.member763, H);
            R[0] = aa;
            R[1] = an.height - ac.member1593[1];
            R[2] = Y;
            if (Class41.member327(H, R) > 0) {
                continue;
            }
            j[0] = -ac.width / 2;
            j[1] = 0;
            j[2] = -ac.length / 2;
            X[0] = -ac.width / 2;
            X[1] = 0;
            X[2] = ac.length / 2;
            b[0] = ac.width / 2;
            b[1] = 0;
            b[2] = ac.length / 2;
            z[0] = ac.width / 2;
            z[1] = 0;
            z[2] = -ac.length / 2;
            Class140.member318(ac.member763, j);
            Class140.member318(ac.member763, X);
            Class140.member318(ac.member763, b);
            Class140.member318(ac.member763, z);
            j[1] = X[1] = b[1] = z[1] = 0;
            j[0] -= aa;
            j[2] -= Y;
            X[0] -= aa;
            X[2] -= Y;
            b[0] -= aa;
            b[2] -= Y;
            z[0] -= aa;
            z[2] -= Y;
            var ah = Class41.length(j);
            var am = Class41.length(X);
            var ab = Class41.length(b);
            var ao = Class41.length(z);
            var ag = Math.acos(Class41.member327(j, X) / (ah * am));
            ag += Math.acos(Class41.member327(X, b) / (am * ab));
            ag += Math.acos(Class41.member327(b, z) / (ab * ao));
            ag += Math.acos(Class41.member327(z, j) / (ao * ah));
            if (ag < 0.99 * Math.PI * 2) {
                continue;
            }
            R[1] = 0;
            Class140.member318(Class140.member1355(ac.member763, I), R);
            var af = -R[1] + ac.member1593[1];
            var Z = af - an.height;
            if (Z < ac.member1673) {
                continue;
            }
            if (Z > ac.depth) {
                continue;
            }
            var ai = (Z - ac.member1673) / (ac.member1674 - ac.member1673);
            if (ai > 1) {
                ai = 1;
            }
            var ak = ac.member1675 << 8 | 255;
            g(an, ak, ai);
            return;
        }
        g(an, 0, 0);
    };
    var g = function (aa, Y, Z) {
        if (aa !== undefined) {
            aa.member746 = Y;
            aa.member747 = Z;
        }
    };
    var n = function (Z, ad, ac) {
        var Y = ad * Class86.member717 + 1;
        var ag = ac * Class86.member717 + 1;
        var aa = d[Z].member1655;
        var ae;
        if (Z === 0) {
            ae = d[0].member1656;
        }
        if (ad > 0) {
            for (var ab = ag + 1; ab < ag + Class86.member717; ab++) {
                aa[Y][ab] = aa[Y - 1][ab];
                if (ae !== undefined) {
                    ae[Y][ab] = ae[Y - 1][ab];
                }
            }
        }
        if (ac > 0) {
            for (var af = Y + 1; af < Y + Class86.member717; af++) {
                aa[af][ag] = aa[af][ag - 1];
                if (ae !== undefined) {
                    ae[af][ag] = ae[af][ag - 1];
                }
            }
        }
        if (ad >= 0 && ac >= 0) {
            if (Z === 0) {
                if (ad > 0 && aa[Y - 1][ag] !== 0) {
                    aa[Y][ag] = aa[Y - 1][ag];
                    ae[Y][ag] = ae[Y - 1][ag];
                } else if (ac > 0 && aa[Y][ag - 1] !== 0) {
                    aa[Y][ag] = aa[Y][ag - 1];
                    ae[Y][ag] = ae[Y][ag - 1];
                } else if (ad > 0 && ac > 0 && aa[Y - 1][ag - 1] !== 0) {
                    aa[Y][ag] = aa[Y - 1][ag - 1];
                    ae[Y][ag] = ae[Y - 1][ag - 1];
                }
            } else if (ad > 0 && (d[Z - 1] === undefined || aa[Y - 1][ag] !== d[Z - 1].member1655[Y - 1][ag])) {
                aa[Y][ag] = aa[Y - 1][ag];
            } else if (ac > 0 && (d[Z - 1] === undefined || aa[Y][ag - 1] !== d[Z - 1].member1655[Y][ag - 1])) {
                aa[Y][ag] = aa[Y][ag - 1];
            } else if (ad > 0 && ac > 0 && (d[Z - 1] === undefined || aa[Y - 1][ag - 1] !== d[Z - 1].member1655[Y - 1][ag - 1])) {
                aa[Y][ag] = aa[Y - 1][ag - 1];
            }
        }
    };
    var V = function (Y) {
        var Z = d[Y].member1655;
        var ae = d[Y].member1562;
        var ad;
        if (Y === 0) {
            ad = d[0].member1656;
        }
        var ag = false;
        for (var af = 1; af < Class86.member729 + 1; af++) {
            Z[af][Class86.member729 + 1] = Z[af][Class86.member729];
            if (ad !== undefined) {
                ad[af][Class86.member729 + 1] = ad[af][Class86.member729];
            }
        }
        for (var ab = 1; ab < Class86.member729 + 1; ab++) {
            Z[Class86.member729 + 1][ab] = Z[Class86.member729][ab];
            if (ad !== undefined) {
                ad[Class86.member729 + 1][ab] = ad[Class86.member729][ab];
            }
        }
        if (Y === 0) {
            if (Z[Class86.member729][Class86.member729 + 1] !== 0) {
                Z[Class86.member729 + 1][Class86.member729 + 1] = Z[Class86.member729][Class86.member729 + 1];
                ad[Class86.member729 + 1][Class86.member729 + 1] = ad[Class86.member729][Class86.member729 + 1];
            } else if (Z[Class86.member729 + 1][Class86.member729] !== 0) {
                Z[Class86.member729 + 1][Class86.member729 + 1] = Z[Class86.member729 + 1][Class86.member729];
                ad[Class86.member729 + 1][Class86.member729 + 1] = ad[Class86.member729 + 1][Class86.member729];
            } else if (Z[Class86.member729][Class86.member729] !== 0) {
                Z[Class86.member729 + 1][Class86.member729 + 1] = Z[Class86.member729][Class86.member729];
                ad[Class86.member729 + 1][Class86.member729 + 1] = ad[Class86.member729][Class86.member729];
            }
        } else {
            var aa;
            var ac = Y - 1;
            while (ac >= 0) {
                if (d[ac] !== undefined) {
                    aa = d[ac].member1655;
                    break;
                }
                ac--;
            }
            if (aa === undefined) {
                throw new Error('1973 ');
            }
            if (Z[Class86.member729][Class86.member729 + 1] !== aa[Class86.member729][Class86.member729 + 1]) {
                Z[Class86.member729 + 1][Class86.member729 + 1] = Z[Class86.member729][Class86.member729 + 1];
            } else if (Z[Class86.member729 + 1][Class86.member729] !== aa[Class86.member729 + 1][Class86.member729]) {
                Z[Class86.member729 + 1][Class86.member729 + 1] = Z[Class86.member729 + 1][Class86.member729];
            } else if (Z[Class86.member729][Class86.member729] !== aa[Class86.member729][Class86.member729]) {
                Z[Class86.member729 + 1][Class86.member729 + 1] = Z[Class86.member729][Class86.member729];
            }
        }
    };
    m = undefined;
    return U;
};