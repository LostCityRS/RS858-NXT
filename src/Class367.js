import { Class322 } from 'Class322.js';
import { Class300 } from 'Class300.js';
import { Packet } from 'Class124.js';
import { Class366 } from 'Class366.js';
export var Class367 = function () {
    var v = 1;
    var k = 4294967295;
    var u = k - v;
    var i = false;
    var x = false;
    var c = 30000;
    var t = 1000;
    var s = 5 * 1024 * 1024;
    var n = 300;
    var b = 2;
    var o = 'version';
    var g = 1;
    var a = 0;
    var m = 1;
    var q = 2;
    var e = 3;
    var h = 4;
    var j = 5;
    var r = 6;
    var d = function (H) {
        var ae = {};
        var T;
        var D;
        var an;
        var ai;
        var z;
        var I = false;
        var C;
        var af;
        var am = 0;
        var y = 0;
        var W = a;
        var ak;
        ae.member3266 = function () {
            if (T === undefined) {
                return 'No filesystem';
            } else {
                return T.member3266();
            }
        };
        var P = function (aq) {
            var ap = C.getByID(aq).member785();
            if (ap === undefined) {
                ap = 0;
            }
            return ap + v;
        };
        var A = function (ap, aq) {
            return Math.floor(aq / ap.member784());
        };
        var U = function (aq, ar) {
            var ap = aq.getID() + '-';
            if (aq.member784() !== undefined) {
                ap += A(aq, ar) + '-' + aq.member784();
            } else {
                ap += ar + '-1';
            }
            if (aq.member781()) {
                ap += '-' + an.member3700;
            }
            return ap;
        };
        var ah = function (aq) {
            var ap = aq.getID() + '-index';
            if (aq.member781()) {
                ap += '-' + an.member3700;
            }
            return ap;
        };
        var R = function () {
            ai = new Array(C.member771() + 1);
            af = new Array(ai.length);
            for (var ap = 0; ap < af.length; ap++) {
                af[ap] = false;
            }
        };
        var Z = function (aq, ap) {
            if (ap > u) {
                return P(aq) - 1 + (ap - k);
            }
            return ap;
        };
        var ad = function (av, at, au, ar, aq) {
            var ap = ai[av];
            if (ap === undefined) {
                E(C.getByID(av));
                ap = ai[av];
            }
            at = Z(av, at);
            ap.member3742(at, au, ar, aq);
        };
        var ag = function (ar, aq) {
            var ap = ai[ar];
            if (ap === undefined) {
                return undefined;
            }
            aq = Z(ar, aq);
            return ap.member3741(aq);
        };
        var ac = function (ar, aq) {
            var ap = ai[ar];
            if (ap !== undefined) {
                aq = Z(ar, aq);
                ap.member3743(aq);
            }
        };
        var ao = function (ap) {
            af[ap.getID()] = true;
        };
        var E = function (ap) {
            var aq = ap.getID();
            ai[aq] = Class322(undefined, P(aq));
            ao(ap);
        };
        var al = function (aq, av) {
            var ar = aq.getID();
            if (av === undefined || av === null || av.byteLength === 0) {
                return;
            }
            var at = ai[ar] = Class322(av);
            if (at === undefined) {
                throw new Error('1297 ');
            }
            var ax = at.member3744();
            var ap = P(ar);
            if (ax < ap) {
                var at = ai[ar] = Class322(av, ap);
                for (var aw = 0; aw < v; aw++) {
                    var au = at.member3741(ax - 1 - aw);
                    if (au !== undefined) {
                        at.member3743(ax - 1 - aw);
                        var ay = Z(ar, k - aw);
                        at.member3742(ay, au.crc, au.version, au.bytes);
                    }
                }
                ao(aq);
            }
        };
        var aa = function (ap) {
            T.readFile(ah(ap), function (aq, ar) {
                if (false) {
                }
                try {
                    al(ap, ar);
                } catch (at) {
                    T.deleteFile(ah(ap));
                    E(ap);
                    if (false) {
                    }
                }
                z--;
                if (false) {
                }
            }, function (aq) {
                z--;
                if (false) {
                }
            });
        };
        var ab = function () {
            R();
            if (false) {
            }
            z = 0;
            for (var ap = C.member776(); ap !== undefined; ap = C.member777()) {
                z++;
                aa(ap);
            }
        };
        var Q = function (ap) {
            var aq = ap.getID();
            T.writeFile(ah(ap), ai[aq].member681(), false);
        };
        var N = function (at, av, aq) {
            var au = at.member775();
            if (au === undefined) {
                return 0;
            }
            var ar = av.getSize();
            var ap = 0;
            for (var aw = av.member776(); aw !== undefined; aw = av.member777()) {
                if (T.member3588() >= n || ar <= au || aq !== undefined && ap >= aq) {
                    break;
                }
                ae.member3260(at, aw.id, av);
                ar -= aw.bytes;
                ap += aw.bytes;
            }
            return ap;
        };
        ae.member773 = function () {
            for (var ap = C.member776(); ap !== undefined; ap = C.member777()) {
                var ar = ap.getID();
                var aq = ai[ar];
                if (aq === undefined) {
                    continue;
                }
                if (P(ar) > aq.member3744()) {
                    al(ap, aq.member681());
                }
            }
        };
        var F = ae.member773;
        if (H.member3991 === undefined || H.member3992 === undefined || H.member3993 === undefined) {
            throw new Error('1298 ');
        }
        D = H.member3991;
        an = H.member3992;
        C = H.member3993;
        ae.readyanim = function () {
            return I && T.readyanim();
        };
        var G = function () {
            var ap = new ArrayBuffer(1);
            new Uint8Array(ap)[0] = b;
            T.writeFile(o, ap, false);
        };
        var S = function () {
            T.member301(undefined, function (ap) {
                if (false) {
                }
            });
            R();
            G();
        };
        var Y = function () {
            if (af === undefined) {
                return;
            }
            for (var ap = 0; ap < af.length; ap++) {
                if (af[ap] === true) {
                    Q(C.getByID(ap));
                }
            }
        };
        ae.member78 = function () {
            if (I) {
                var ar = Date.now();
                if (ar - am > c) {
                    am = ar;
                    Y();
                }
                if (ar - y > t) {
                    y = ar;
                    var au = s;
                    for (var at = C.member776(); at !== undefined && au > 0; at = C.member777()) {
                        var aq = ai[at.getID()];
                        if (aq === undefined) {
                            continue;
                        }
                        au -= N(at, aq, au);
                    }
                    if (T !== undefined) {
                        T.member3587();
                    }
                }
                return;
            }
            if (W === a) {
                T = Class300(D);
                ak = 0;
                T.readFile(o, function (av, aw) {
                    if (aw !== null && aw.byteLength > 0) {
                        ak = new Uint8Array(aw)[0];
                    }
                    W = h;
                }, function (av, aw) {
                    W = h;
                });
                W = e;
            }
            if (W === e) {
                return;
            }
            if (W === h) {
                var ap = false;
                if (ak > b) {
                    throw new Error('1299 ' + ak);
                }
                if (ak < 2) {
                    S();
                    ak = 2;
                }
                if (ap) {
                    G();
                }
                W = j;
            }
            if (W === j) {
                ab();
                W = r;
            }
            if (W === r) {
                if (z === 0) {
                    F();
                    I = true;
                }
            }
        };
        var K = function (ap, aq) {
            if (false) {
            }
        };
        ae.member3256 = function (au, ay, aq, aw, ax) {
            var av = au.getID();
            var at = 16 + aq.byteLength + 8;
            var ap = U(au, ay);
            var ar = Packet(at);
            ar.p4(ay);
            ar.p4(aq.byteLength);
            ar.p4(aw);
            ar.p4(ax);
            ar.member1067(aq, 0, aq.byteLength);
            ar.p4(aw);
            ar.p4(ax);
            T.writeFile(U(au, ay), ar.getData(), au.member784() !== undefined, function (az) {
                if (false) {
                }
                ad(av, ay, aw, ax, at);
                ao(au);
            }, K);
        };
        ae.member3994 = function (ar, at, av) {
            var au = ar.getID();
            var aq = T.getFileStatus(U(ar, at));
            if (aq !== undefined) {
                return Class366.member3990;
            }
            var ap = ag(au, at);
            if (ap === undefined) {
                return Class366.member3989;
            }
            if (ap.crc !== av.member3259(at) || ap.version !== av.member3258(at)) {
                if (false) {
                }
                ae.member3260(ar, at, av);
                return Class366.member3989;
            }
            return Class366.member3988;
        };
        var B = ae.member3994;
        ae.member3995 = function (at, au, ax, aw, ar) {
            var av = at.getID();
            var aq = function () {
                ac(av, au);
                ao(at);
                ar(at, au);
            };
            var ap = function (ay, aA) {
                if (aA === null || aA.byteLength <= 0) {
                    if (false) {
                    }
                    aq();
                    return;
                }
                var az = Packet(undefined, aA);
                var aC = {};
                while (az.getPos() < az.getSize()) {
                    try {
                        if (!O(at, au, ax, aw, ar, az, aC, ay)) {
                            return;
                        }
                    } catch (aB) {
                        if (false) {
                        }
                        ae.member3260(at, au, ax);
                        ar(at, au);
                        return;
                    }
                    if (at.member784() === undefined) {
                        break;
                    }
                }
                aj(at, au, ax, aC);
                aw(at, au, aC);
            };
            if (T.member3591(U(at, au), Class300.member3592)) {
                ar(at, au);
                return;
            }
            if (false) {
            }
            T.readFile(U(at, au), ap, aq);
        };
        var V = ae.member3995;
        var O = function (az, ar, aB, aI, av, aD, aG, aF) {
            var ap = az.getID();
            var at = aD.g4();
            var ax = aD.g4();
            var aw = aD.g4s();
            var au = aD.g4s();
            var aK = aD.getPos();
            aD.setPos(aK + ax);
            var ay = aD.g4s();
            var aH = aD.g4s();
            if (aw !== ay || au !== aH) {
                if (false) {
                }
                ae.member3260(az, ar, aB);
                av(az, ar);
                return false;
            }
            if (aw !== aB.member3259(at)) {
                if (false) {
                }
                ae.member3260(az, ar, aB);
                av(az, ar);
                return false;
            }
            if (au !== aB.member3258(at)) {
                if (false) {
                }
                ae.member3260(az, ar, aB);
                av(az, ar);
                return false;
            }
            var aJ;
            var aq = aD.getPos();
            var aC = new Packet(ax);
            aD.setPos(aK);
            aD.gdata(aC.getData(), 0, ax);
            aC.setPos(0);
            aD.setPos(aq);
            aG[at] = {
                crc: aw,
                version: au,
                data: aC.getData().slice(0)
            };
            var aE = ag(ap, at);
            var aA = 16 + ax + 8;
            if (aE === undefined) {
                if (false) {
                }
                ad(ap, at, aw, au, aA);
                ao(az);
            } else if (aE.crc !== aw || aE.version !== au || aE.bytes !== aA) {
                if (false) {
                }
                ad(ap, at, aw, au, aA);
                ao(az);
            }
            return true;
        };
        var aj = function (aq, ax, aw, ap) {
            if (aq.member784() !== undefined && ap[ax] === undefined) {
                var ar = aq.getID();
                if (ax > u) {
                    ac(ar, ax);
                } else {
                    var ay = A(aq, ax);
                    var au = aq.member784();
                    if (false) {
                    }
                    var av = Math.min((ay + 1) * au, aw.member3896() + 1);
                    for (var at = ay * au; at < av; at++) {
                        if (ap[at] === undefined) {
                            ac(ar, at);
                        }
                    }
                }
                ao(aq);
            }
        };
        var X = function (ap) {
            if (false) {
            }
        };
        var J = function (ap, aq) {
            if (false) {
            }
        };
        ae.member3260 = function (at, av, ax) {
            var aw = at.getID();
            if (at.member784() === undefined || av > u) {
                ac(aw, av);
            } else {
                var ar = A(at, av);
                var au = at.member784();
                if (false) {
                }
                var aq = Math.min((ar + 1) * au, ax.member3896() + 1);
                for (var ap = ar * au; ap < aq; ap++) {
                    ac(aw, ap);
                }
            }
            ao(at);
            T.deleteFile(U(at, av), X, J);
        };
        var M = ae.member3260;
        ae.member3265 = function () {
            S();
        };
        var L = ae.member3265;
        ae.member9 = function () {
            Class300.printStacks();
        };
        ae.member475 = function () {
            Y();
        };
        H = undefined;
        return ae;
    };
    d.member3996 = k;
    return d;
}();