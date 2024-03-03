export var Class219 = function () {
    var O = {};
    var q = 32768;
    var A = 0;
    var I = 1;
    var j = 2;
    var V = 9;
    var i = 6;
    var x = 32768;
    var a = 64;
    var F = null;
    var m;
    var T = null;
    var b;
    var N, R;
    var v;
    var u;
    var X;
    var P;
    var W;
    var B;
    var o, r;
    var g, k;
    var E;
    var G;
    var t;
    var S = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
    var c = new Array(3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0);
    var M = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99);
    var J = new Array(1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577);
    var C = new Array(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13);
    var s = new Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15);
    O.member2709 = function (af, ad, ac) {
        Q();
        E = new Uint8Array(ad);
        G = ac;
        if (E[ac] != 31 || E[ac + 1] != 139) {
            throw new Error('926 ');
        }
        G += 10;
        t = ad.byteLength - 4;
        var ae = new Array(1024);
        var ab = new Uint8Array(af);
        var Y = H(ae, 0, ae.length), aa = 0;
        var Z = 0;
        while (Y > 0) {
            for (aa = 0; aa < Y; aa++) {
                ab[Z++] = ae[aa];
            }
            Y = H(ae, 0, ae.length);
        }
        E = null;
    };
    var L = O.member2709;
    var n = function (aA, ar, Y, ap, ay, av) {
        var al = {
            member2710: 16,
            member2711: 288,
            status: 0,
            root: null,
            m: 0
        };
        var aB;
        var az = new Array(al.member2710 + 1);
        var Z;
        var ax;
        var ac;
        var aw;
        var aC;
        var at;
        var aa;
        var ad = new Array(al.member2710 + 1);
        var ao;
        var ae;
        var an;
        var ag = {
            e: 0,
            b: 0,
            n: 0,
            t: null
        };
        var am = new Array(al.member2710);
        var au = new Array(al.member2711);
        var ak;
        var ai = new Array(al.member2710 + 1);
        var aj;
        var ah;
        var af;
        var aq;
        var ab;
        ab = al.root = null;
        for (aC = 0; aC < az.length; aC++) {
            az[aC] = 0;
        }
        for (aC = 0; aC < ad.length; aC++) {
            ad[aC] = 0;
        }
        for (aC = 0; aC < am.length; aC++) {
            am[aC] = null;
        }
        for (aC = 0; aC < au.length; aC++) {
            au[aC] = 0;
        }
        for (aC = 0; aC < ai.length; aC++) {
            ai[aC] = 0;
        }
        Z = ar > 256 ? aA[256] : al.member2710;
        ao = aA;
        ae = 0;
        aC = ar;
        do {
            az[ao[ae]]++;
            ae++;
        } while (--aC > 0);
        if (az[0] == ar) {
            al.root = null;
            al.m = 0;
            al.status = 0;
            return;
        }
        for (at = 1; at <= al.member2710; at++) {
            if (az[at] != 0) {
                break;
            }
        }
        aa = at;
        if (av < at) {
            av = at;
        }
        for (aC = al.member2710; aC != 0; aC--) {
            if (az[aC] != 0) {
                break;
            }
        }
        ac = aC;
        if (av > aC) {
            av = aC;
        }
        for (ah = 1 << at; at < aC; at++, ah <<= 1) {
            if ((ah -= az[at]) < 0) {
                al.status = 2;
                al.m = av;
                return;
            }
        }
        if ((ah -= az[aC]) < 0) {
            al.status = 2;
            al.m = av;
            return;
        }
        az[aC] += ah;
        ai[1] = at = 0;
        ao = az;
        ae = 1;
        aj = 2;
        while (--aC > 0) {
            ai[aj++] = at += ao[ae++];
        }
        ao = aA;
        ae = 0;
        aC = 0;
        do {
            if ((at = ao[ae++]) != 0) {
                au[ai[at]++] = aC;
            }
        } while (++aC < ar);
        ar = ai[ac];
        ai[0] = aC = 0;
        ao = au;
        ae = 0;
        aw = -1;
        ak = ad[0] = 0;
        an = null;
        af = 0;
        for (; aa <= ac; aa++) {
            aB = az[aa];
            while (aB-- > 0) {
                while (aa > ak + ad[1 + aw]) {
                    ak += ad[1 + aw];
                    aw++;
                    af = (af = ac - ak) > av ? av : af;
                    if ((ax = 1 << (at = aa - ak)) > aB + 1) {
                        ax -= aB + 1;
                        aj = aa;
                        while (++at < af) {
                            if ((ax <<= 1) <= az[++aj]) {
                                break;
                            }
                            ax -= az[aj];
                        }
                    }
                    if (ak + at > Z && ak < Z) {
                        at = Z - ak;
                    }
                    af = 1 << at;
                    ad[1 + aw] = at;
                    an = new Array(af);
                    for (aq = 0; aq < af; aq++) {
                        an[aq] = {
                            e: 0,
                            b: 0,
                            n: 0,
                            t: null
                        };
                    }
                    if (ab == null) {
                        ab = al.root = {
                            next: null,
                            list: null
                        };
                    } else {
                        ab = ab.next = {
                            next: null,
                            list: null
                        };
                    }
                    ab.next = null;
                    ab.list = an;
                    am[aw] = an;
                    if (aw > 0) {
                        ai[aw] = aC;
                        ag.b = ad[aw];
                        ag.e = 16 + at;
                        ag.t = an;
                        at = (aC & (1 << ak) - 1) >> ak - ad[aw];
                        am[aw - 1][at].e = ag.e;
                        am[aw - 1][at].b = ag.b;
                        am[aw - 1][at].n = ag.n;
                        am[aw - 1][at].t = ag.t;
                    }
                }
                ag.b = aa - ak;
                if (ae >= ar) {
                    ag.e = 99;
                } else if (ao[ae] < Y) {
                    ag.e = ao[ae] < 256 ? 16 : 15;
                    ag.n = ao[ae++];
                } else {
                    ag.e = ay[ao[ae] - Y];
                    ag.n = ap[ao[ae++] - Y];
                }
                ax = 1 << aa - ak;
                for (at = aC >> ak; at < af; at += ax) {
                    an[at].e = ag.e;
                    an[at].b = ag.b;
                    an[at].n = ag.n;
                    an[at].t = ag.t;
                }
                for (at = 1 << aa - 1; (aC & at) != 0; at >>= 1) {
                    aC ^= at;
                }
                aC ^= at;
                while ((aC & (1 << ak) - 1) != ai[aw]) {
                    ak -= ad[aw];
                    aw--;
                }
            }
        }
        al.m = ad[1];
        al.status = ah != 0 && ac != 1 ? 1 : 0;
        return al;
    };
    var e = function () {
        if (t == G) {
            return -1;
        }
        return E[G++] & 255;
    };
    var U = function (Y) {
        while (u < Y) {
            v |= e() << u;
            u += 8;
        }
    };
    var y = function (Y) {
        return v & S[Y];
    };
    var d = function (Y) {
        v >>= Y;
        u -= Y;
    };
    var h = function (ad, aa, Z) {
        var ab;
        var Y;
        var ac;
        if (Z == 0) {
            return 0;
        }
        ac = 0;
        for (;;) {
            U(g);
            Y = o.list[y(g)];
            ab = Y.e;
            while (ab > 16) {
                if (ab == 99) {
                    return -1;
                }
                d(Y.b);
                ab -= 16;
                U(ab);
                Y = Y.t[y(ab)];
                ab = Y.e;
            }
            d(Y.b);
            if (ab == 16) {
                m &= q - 1;
                ad[aa + ac++] = F[m++] = Y.n;
                if (ac == Z) {
                    return Z;
                }
                continue;
            }
            if (ab == 15) {
                break;
            }
            U(ab);
            W = Y.n + y(ab);
            d(ab);
            U(k);
            Y = r.list[y(k)];
            ab = Y.e;
            while (ab > 16) {
                if (ab == 99) {
                    return -1;
                }
                d(Y.b);
                ab -= 16;
                U(ab);
                Y = Y.t[y(ab)];
                ab = Y.e;
            }
            d(Y.b);
            U(ab);
            B = m - Y.n - y(ab);
            d(ab);
            while (W > 0 && ac < Z) {
                W--;
                B &= q - 1;
                m &= q - 1;
                ad[aa + ac++] = F[m++] = F[B++];
            }
            if (ac == Z) {
                return Z;
            }
        }
        X = -1;
        return ac;
    };
    var z = function (ab, Z, Y) {
        var aa;
        aa = u & 7;
        d(aa);
        U(16);
        aa = y(16);
        d(16);
        U(16);
        if (aa != (~v & 65535)) {
            return -1;
        }
        d(16);
        W = aa;
        aa = 0;
        while (W > 0 && aa < Y) {
            W--;
            m &= q - 1;
            U(8);
            ab[Z + aa++] = F[m++] = y(8);
            d(8);
        }
        if (W == 0) {
            X = -1;
        }
        return aa;
    };
    var K = function (ad, ac, ab) {
        if (T == null) {
            var Z;
            var aa = new Array(288);
            var Y;
            for (Z = 0; Z < 144; Z++) {
                aa[Z] = 8;
            }
            for (; Z < 256; Z++) {
                aa[Z] = 9;
            }
            for (; Z < 280; Z++) {
                aa[Z] = 7;
            }
            for (; Z < 288; Z++) {
                aa[Z] = 8;
            }
            N = 7;
            Y = n(aa, 288, 257, c, M, N);
            if (Y.status != 0) {
                if (false) {
                }
                return -1;
            }
            T = Y.root;
            N = Y.m;
            for (Z = 0; Z < 30; Z++) {
                aa[Z] = 5;
            }
            R = 5;
            Y = n(aa, 30, 0, J, C, R);
            if (Y.status > 1) {
                T = null;
                if (false) {
                }
                return -1;
            }
            b = Y.root;
            R = Y.m;
        }
        o = T;
        r = b;
        g = N;
        k = R;
        return h(ad, ac, ab);
    };
    var D = function (ai, aa, ak) {
        var af;
        var ad;
        var ab;
        var Z;
        var aj;
        var ae;
        var Y;
        var ac;
        var ag = new Array(286 + 30);
        var ah;
        for (af = 0; af < ag.length; af++) {
            ag[af] = 0;
        }
        U(5);
        Y = 257 + y(5);
        d(5);
        U(5);
        ac = 1 + y(5);
        d(5);
        U(4);
        ae = 4 + y(4);
        d(4);
        if (Y > 286 || ac > 30) {
            return -1;
        }
        for (ad = 0; ad < ae; ad++) {
            U(3);
            ag[s[ad]] = y(3);
            d(3);
        }
        for (; ad < 19; ad++) {
            ag[s[ad]] = 0;
        }
        g = 7;
        ah = n(ag, 19, 19, null, null, g);
        if (ah.status != 0) {
            return -1;
        }
        o = ah.root;
        g = ah.m;
        Z = Y + ac;
        af = ab = 0;
        while (af < Z) {
            U(g);
            aj = o.list[y(g)];
            ad = aj.b;
            d(ad);
            ad = aj.n;
            if (ad < 16) {
                ag[af++] = ab = ad;
            } else if (ad == 16) {
                U(2);
                ad = 3 + y(2);
                d(2);
                if (af + ad > Z) {
                    return -1;
                }
                while (ad-- > 0) {
                    ag[af++] = ab;
                }
            } else if (ad == 17) {
                U(3);
                ad = 3 + y(3);
                d(3);
                if (af + ad > Z) {
                    return -1;
                }
                while (ad-- > 0) {
                    ag[af++] = 0;
                }
                ab = 0;
            } else {
                U(7);
                ad = 11 + y(7);
                d(7);
                if (af + ad > Z) {
                    return -1;
                }
                while (ad-- > 0) {
                    ag[af++] = 0;
                }
                ab = 0;
            }
        }
        g = V;
        ah = n(ag, Y, 257, c, M, g);
        if (g == 0) {
            ah.status = 1;
        }
        if (ah.status != 0) {
            if (ah.status == 1) {
            }
            return -1;
        }
        o = ah.root;
        g = ah.m;
        for (af = 0; af < ac; af++) {
            ag[af] = ag[af + Y];
        }
        k = i;
        ah = n(ag, ac, 0, J, C, k);
        r = ah.root;
        k = ah.m;
        if (k == 0 && Y > 257) {
            return -1;
        }
        if (ah.status == 1) {
        }
        if (ah.status != 0) {
            return -1;
        }
        return h(ai, aa, ak);
    };
    var Q = function () {
        var Y;
        if (F === null) {
            F = new Uint8Array(new ArrayBuffer(2 * q));
        }
        m = 0;
        v = 0;
        u = 0;
        X = -1;
        P = false;
        W = B = 0;
        o = null;
    };
    var H = function (ac, aa, Z) {
        var ab, Y;
        ab = 0;
        while (ab < Z) {
            if (P && X == -1) {
                return ab;
            }
            if (W > 0) {
                if (X != A) {
                    while (W > 0 && ab < Z) {
                        W--;
                        B &= q - 1;
                        m &= q - 1;
                        ac[aa + ab++] = F[m++] = F[B++];
                    }
                } else {
                    while (W > 0 && ab < Z) {
                        W--;
                        m &= q - 1;
                        U(8);
                        ac[aa + ab++] = F[m++] = y(8);
                        d(8);
                    }
                    if (W == 0) {
                        X = -1;
                    }
                }
                if (ab == Z) {
                    return ab;
                }
            }
            if (X == -1) {
                if (P) {
                    break;
                }
                U(1);
                if (y(1) != 0) {
                    P = true;
                }
                d(1);
                U(2);
                X = y(2);
                d(2);
                o = null;
                W = 0;
            }
            switch (X) {
            case 0:
                Y = z(ac, aa + ab, Z - ab);
                break;
            case 1:
                if (o != null) {
                    Y = h(ac, aa + ab, Z - ab);
                } else {
                    Y = K(ac, aa + ab, Z - ab);
                }
                break;
            case 2:
                if (o != null) {
                    Y = h(ac, aa + ab, Z - ab);
                } else {
                    Y = D(ac, aa + ab, Z - ab);
                }
                break;
            default:
                Y = -1;
                break;
            }
            if (Y == -1) {
                if (P) {
                    return 0;
                }
                return -1;
            }
            ab += Y;
        }
        return ab;
    };
    return O;
}();