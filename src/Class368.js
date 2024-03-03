import { Class228 } from 'Class228.js';
import { Class93 } from 'Class93.js';
import { Class367 } from 'Class367.js';
import { Class230 } from 'Class230.js';
import { Class293 } from 'Class293.js';
import { Class342 } from 'Class342.js';
import { Packet } from 'Class124.js';
import { Class365 } from 'Class365.js';
import { Class275 } from 'Class275.js';
import { Class295 } from 'Class295.js';
import { Class345 } from 'Class345.js';
import { Class299 } from 'Class299.js';
import { Class343 } from 'Class343.js';
import { Class336 } from 'Class336.js';
import { Class355 } from 'Class355.js';
import { Class366 } from 'Class366.js';
import { Priority } from 'Class96.js';
export var Class368 = function () {
    var aa = {};
    var ai = false;
    var k = false;
    var X = 9999;
    var Z = 100;
    var d = 'js5';
    var ag = 64 * 1024 * 1024;
    var W = 1024;
    var u = 10;
    var E = 0;
    var g = null;
    var R = 0;
    aa.member3997 = function () {
        return R;
    };
    var V;
    aa.member3998 = function () {
        return V;
    };
    var n = {};
    var am;
    var P;
    var af;
    var D;
    var ah;
    var H = {};
    var h;
    var ak = Class228(Z);
    var Y = 0;
    var al = 0;
    for (var ab in Class93) {
        if (!Class93.hasOwnProperty(ab)) {
            continue;
        }
        H[Class93[ab]] = 0;
        ak[Class93[ab]] = new Array(Z);
        if (Class93[ab] > al) {
            al = Class93[ab];
        }
    }
    var F = 'Disconnected';
    aa.member3266 = function () {
        return F + (D === undefined ? '' : ', ' + D.member3266() + ', ' + P.member3266() + ', ' + af.member3266());
    };
    var z = false;
    var v = NULL;
    var O = false;
    var j = NULL;
    var L = false;
    var e = 0;
    var B;
    aa.member3999 = Class367.member3996;
    var J = aa.member3999;
    var S = 0;
    var c = 1;
    var Q = 2;
    var U = 3;
    var i = NULL;
    var M = NULL;
    var N = function (an) {
        try {
            var aw = an.data;
            var ax = aw.member59;
            if (ax === Class230.member2767) {
                if (aw.member2783 !== null) {
                    if (false) {
                    }
                    var ar = aw.member2693;
                    var aB = aw.member1204;
                    var at = aw.member2783[0];
                    var av = M[ar];
                    if (aw.member2781 !== av.member3259(aB)) {
                        throw new Error('1626 ' + aw.member2693 + '1626 ' + aw.member1204);
                    }
                    var ao = n.getByID(ar);
                    if (aw.member2694 === true) {
                        ae(ao).member3256(ar, aB, av.member3258(aB), aw.member2781, at);
                    }
                    D.member3256(ao, aB, at, av.member3259(aB), av.member3258(aB));
                }
                Y--;
                if (false) {
                }
                delete h[an.data.member2693][an.data.member1204];
            } else if (ax === Class230.member2313) {
                if (aw.available !== -1) {
                    F = Math.floor(aw.member2787.totalBytesRead / 1024) + 'KB Read';
                } else {
                    F = 'Disconnected';
                }
                if (true) {
                    var az = Class293.document.getElementById('js5lps');
                    var au = Class293.document.getElementById('js5active');
                    var aA = Class293.document.getElementById('js5activity');
                    if (az !== null && au !== null && aA !== null) {
                        az.textContent = aw.member2788;
                        au.textContent = aw.activity + '%';
                        if (aw.available !== -1) {
                            var aq = Math.floor(aw.member2787.totalBytesRead / 1024) + 'KB Read';
                            aq += ' ' + H[Class93.member796] + ',' + H[Class93.member797];
                            aA.textContent = aq;
                        } else {
                            aA.textContent = 'Disconnected';
                        }
                    }
                } else {
                }
            } else if (ax === Class230.LOG) {
                console.log(aw.logMessage);
            } else if (ax === Class230.member2766) {
                if (aw.member2782 !== null) {
                    if (false) {
                    }
                    var ap = v.member3982(aw.member2693);
                    if (aw.member2781 !== ap.member2774) {
                        throw new Error('1627 ' + aw.member2693);
                    }
                    M[aw.member2693] = Class342({
                        member2774: ap.member2774,
                        member3877: ap.member3877,
                        member3878: ap.member3878,
                        packet: Packet(undefined, aw.member2782)
                    });
                    D.member3256(n.getByID(aw.member2693), J, aw.member2782, ap.member2774, ap.member3878);
                    i[aw.member2693] = U;
                } else {
                    i[aw.member2693] = S;
                }
            } else if (ax === Class230.member2765) {
                if (aw.member2780 !== null) {
                    v = Class365({
                        member3983: null,
                        member3984: null,
                        packet: Packet(undefined, aw.member2780)
                    });
                    try {
                        aj();
                    } catch (ay) {
                        if (++e === u) {
                            throw ay;
                        }
                        v = NULL;
                        z = false;
                        if (false) {
                        }
                    }
                } else {
                    z = false;
                }
            } else if (ax === Class230.member2768) {
                if (aw.member2780 !== null) {
                    j = Class365({
                        member3983: null,
                        member3984: null,
                        packet: Packet(undefined, aw.member2780)
                    });
                    try {
                        K();
                    } catch (ay) {
                        if (++e === u) {
                            throw ay;
                        }
                        j = NULL;
                        O = false;
                        if (false) {
                        }
                    }
                } else {
                    O = false;
                }
            } else if (ax === Class230.member2763) {
                R = aw.member2789;
            } else {
                throw new Error('1628 ' + ax);
            }
        } catch (ay) {
            B = ay;
        }
    };
    var K = function () {
        o();
    };
    var o = function () {
        for (var ao = n.member776(); ao !== undefined; ao = n.member777()) {
            var ap = ao.getID();
            if (ao.member783() && j.member3982(ap) !== undefined && v.member3982(ap) !== undefined) {
                var aq = v.member3982(ap);
                var an = j.member3982(ap);
                if (aq.member2774 !== an.member2774 || aq.member3878 !== an.member3878) {
                    ao.member789(false);
                } else {
                    ao.member789(true);
                }
            }
        }
    };
    var aj = function () {
        var ar = v.member3981();
        if (false) {
        }
        for (var aq = n.member776(); aq !== undefined; aq = n.member777()) {
            var at = aq.getID();
            if (v.member3982(at) !== undefined) {
                aq.member786(v.member3982(at).member3985);
                aq.member788(v.member3982(at).member3986);
            }
        }
        n.member773();
        if (D === undefined) {
            i = new Array(ar);
            M = new Array(ar);
            for (var an = 0; an < ar; an++) {
                i[an] = S;
                M[an] = NULL;
            }
            P = Class275({
                member895: ag,
                member3254: W
            });
            af = Class275({
                member895: 4294967295,
                member3254: W
            });
            ah = new Array(n.member771() + 1);
            for (var an = 0; an < ah.length; an++) {
                ah[an] = {};
            }
            h = new Array(ah.length);
            for (var an = 0; an < ah.length; an++) {
                h[an] = {};
            }
            var ap;
            if (Class295.isFileSystemSupported()) {
                ap = Class345(V, Class299.member3584().member3474());
            } else if (Class295.isIndexedDBSupported()) {
                ap = Class343(V, d);
            } else if (Class295.isWebSQLSupported()) {
                ap = Class336(V, Class299.member3584().member3474());
            } else {
                throw new Error('1629 ');
            }
            D = Class367({
                member3991: ap,
                member3992: am,
                member3993: n
            });
        } else {
            for (var an = 0; an < ar; an++) {
                if (M[an] !== NULL) {
                    var ao = v.member3982(an);
                    if (M[an].member3895() !== ao.member3878 || M[an].member3897() !== ao.member2774) {
                        M[an] = NULL;
                        i[an] = S;
                    }
                }
            }
            q();
        }
        j = NULL;
        O = false;
    };
    var I = function () {
        throw new Error('1630 ', arguments);
    };
    var m = function (an) {
        if (n.getByID(an.getID()) !== an) {
            throw new Error('1631 ');
        }
    };
    var ae = function (an) {
        if (an.member784() === undefined) {
            return P;
        } else {
            return af;
        }
    };
    aa.member25 = function (at, aq, av, ap, ar, au, ao, an) {
        if (false) {
        }
        V = at;
        n = ao;
        if (an === undefined) {
            throw new Error('1632 ');
        }
        am = an;
        g = Class355.member3929();
        g.postMessage = g.webkitPostMessage || g.postMessage;
        g.onmessage = N;
        g.onerror = I;
        L = av !== undefined;
        g.postMessage({
            member59: Class230.member2312,
            member2771: aq,
            member2738: av,
            member2739: ap,
            member2772: ar,
            member2773: au
        });
    };
    aa.member4000 = function (an, ao) {
        L = ao !== undefined;
        g.postMessage({
            member59: Class230.member2764,
            member2771: an,
            member2738: ao
        });
    };
    aa.member773 = function () {
        if (D !== undefined) {
            D.member773();
        }
    };
    var q = aa.member773;
    aa.member1437 = function (ao) {
        if (v === NULL) {
            return false;
        } else {
            if (ao === undefined) {
                return true;
            }
            m(ao);
            var aq = ao.getID();
            if (M[aq] !== NULL) {
                return true;
            } else {
                var an = i[aq];
                if (an === S || an === c) {
                    var ap = A(ao, J, Class93.member796);
                    if (!ap) {
                        i[aq] = Q;
                        g.postMessage({
                            member59: Class230.member2766,
                            member2693: aq,
                            member2774: v.member3982(aq).member2774
                        });
                    }
                }
                return false;
            }
        }
    };
    var G = aa.member1437;
    aa.member1439 = function (an) {
        if (!G(an)) {
            return NULL;
        } else {
            return M[an.getID()];
        }
    };
    aa.member4001 = function () {
        return v;
    };
    aa.member1551 = function (ap, at, an, ao, ar) {
        if (!G(ap)) {
            return false;
        }
        var au = ap.getID();
        var aq = M[au];
        if (!aq.member3903(at)) {
            return undefined;
        }
        if (!aq.member3904(at, an)) {
            return undefined;
        }
        if (ae(ap).member3264(au, at, an, aq)) {
            return true;
        }
        if (A(ap, at, ao)) {
            return false;
        }
        ac(ap, at, an, ao, ar);
        return false;
    };
    var C = aa.member1551;
    aa.member4002 = function (ao, aq) {
        if (!G(ao)) {
            return NULL;
        }
        var ar = ao.getID();
        var ap = M[ar];
        if (!ap.member3903(aq)) {
            return undefined;
        }
        if (!s()) {
            return NULL;
        }
        var an = D.member3994(ao, aq, ap);
        if (an === Class366.member3990) {
            return NULL;
        }
        if (an === Class366.member3988) {
            return true;
        }
        if (A(ao, aq, Class93.member797)) {
            return NULL;
        }
        ac(ao, aq, 0, Class93.member797, false);
        return NULL;
    };
    aa.member1438 = function (ao, aq, an, ap) {
        return C(ao, aq, 0, an, ap);
    };
    var y = aa.member1438;
    aa.getFile = function (ao, aw, at, av, au, an) {
        if (!G(ao)) {
            return NULL;
        }
        var ap = ao.getID();
        var aq = M[ap];
        if (!aq.member3903(aw)) {
            return undefined;
        }
        if (!aq.member3904(aw, at)) {
            return undefined;
        }
        var ar = ae(ao).getFile(ap, aw, at, aq);
        if (ar !== undefined) {
            if (av === Priority.member840) {
                return ar;
            } else if (av === Priority.member2828 || av === Priority.member841) {
                ar = Packet(undefined, ar.getData().slice(0));
                return ar;
            } else {
                throw new Error('1633 ');
            }
        }
        if (A(ao, aw, au)) {
            return NULL;
        }
        ac(ao, aw, at, au, an);
        return NULL;
    };
    var ad = aa.getFile;
    var r = function (ao, aw, an) {
        var ap = ao.getID();
        if (aw === J) {
            for (var au in an) {
                var ax = parseInt(au);
                var av = an[ax];
                if (ax === J) {
                    var aq = v.member3982(ap);
                    M[ap] = Class342({
                        member2774: aq.member2774,
                        member3877: aq.member3877,
                        member3878: aq.member3878,
                        packet: Packet(undefined, av.data)
                    });
                    i[ap] = U;
                    break;
                }
            }
        }
        for (var au in an) {
            var ax = parseInt(au);
            var av = an[ax];
            if (ax === J) {
                continue;
            }
            var at;
            var ar = M[ap];
            ae(ao).member3256(ap, ax, av.version, av.crc, av.data);
        }
        H[ah[ap][aw]]--;
        delete ah[ap][aw];
    };
    var T = function (an, ao) {
        var ap = an.getID();
        if (ao === J) {
            i[ap] = Q;
            g.postMessage({
                member59: Class230.member2766,
                member2693: ap,
                member2774: v.member3982(ap).member2774
            });
        }
        H[ah[ap][ao]]--;
        delete ah[ap][ao];
    };
    if (false) {
    }
    var A = function (ap, aw, au) {
        if (!s()) {
            return true;
        }
        var at = ap.getID();
        var av;
        if (aw === J) {
            av = {
                member3261: function (ax) {
                    return 1;
                },
                member3259: function (ax) {
                    return v.member3982(at).member2774;
                },
                member3258: function (ax) {
                    return v.member3982(at).member3878;
                }
            };
        } else {
            av = M[at];
        }
        var ar = D.member3994(ap, aw, av);
        if (ar === Class366.member3989) {
            return false;
        } else if (ar === Class366.member3990) {
            return true;
        }
        var ao = Class93.member797;
        if (au !== undefined && au !== null) {
            ao = au;
        }
        var aq = 0;
        for (var an = 0; an <= ao; an++) {
            aq += H[an];
        }
        if (aq >= X) {
            return;
        }
        if (ah[at][aw] !== undefined) {
            return true;
        }
        ah[at][aw] = ao;
        H[ao]++;
        if (false) {
        }
        if (aw === J) {
            i[at] = c;
        }
        D.member3995(ap, aw, av, r, T);
        return true;
    };
    var ac = function (ap, ax, av, aw, ao) {
        var an = Class93.member797;
        if (aw !== undefined && aw !== null) {
            an = aw;
        }
        if (Y >= Z) {
            return;
        }
        if (ap.member783() && !ap.member790()) {
            return;
        }
        var aq = ap.getID();
        var au = h[aq][ax];
        if (au !== undefined) {
            if (au.member4003) {
                return;
            }
            if (an >= au.priority) {
                return;
            }
            au.unlink();
        }
        if (false) {
        }
        var at = M[aq];
        var ar = {
            member59: Class230.member2767,
            member2693: aq,
            member1204: ax,
            member2775: M[aq].member3261(ax),
            member2776: ap.member782(),
            member2777: ap.member783() === true,
            member4004: ap.member783() === true ? av : undefined,
            member2694: ao === undefined ? true : ao,
            member4003: false,
            member2778: at.member3259(ax),
            member2779: at.member3258(ax)
        };
        ak.add(ar, al - an);
        h[aq][ax] = ar;
    };
    aa.member78 = function () {
        if (B !== undefined) {
            throw B;
        }
        E++;
        if (v === NULL && !z) {
            z = true;
            g.postMessage({ member59: Class230.member2765 });
        }
        if (L && v !== NULL && j === NULL && !O) {
            O = true;
            g.postMessage({ member59: Class230.member2768 });
        }
        if (D !== undefined) {
            D.member78();
            P.member78();
        }
        if (ak.member890() > 0) {
            while (true) {
                var an = ak.member776();
                if (an === null) {
                    break;
                }
                an.unlink();
                if (Y < Z) {
                    delete an.next;
                    delete an.member884;
                    delete an.unlink;
                    an.member4003 = true;
                    Y++;
                    g.postMessage(an);
                } else {
                    delete h[an.member2693][an.member1204];
                }
            }
        }
    };
    var x = aa.member78;
    aa.member4005 = function () {
        v = NULL;
        z = false;
    };
    aa.member4006 = function () {
        j = NULL;
        O = false;
    };
    aa.member4007 = function () {
        P.member3265();
        af.member3265();
        D.member3265();
    };
    var t = aa.member4007;
    aa.member4008 = function () {
        if (D === undefined) {
            return false;
        } else {
            return D.readyanim();
        }
    };
    var s = aa.member4008;
    aa.member4009 = function () {
        g.postMessage({ member59: Class230.member2317 });
    };
    var b = aa.member4009;
    aa.member4010 = function () {
        g.postMessage({ member59: Class230.member2319 });
    };
    var a = aa.member4010;
    aa.member9 = function () {
        D.member9();
    };
    aa.member475 = function () {
        if (D !== undefined) {
            D.member475();
        }
    };
    return aa;
}();