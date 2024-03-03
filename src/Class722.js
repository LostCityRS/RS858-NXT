import { Class182 } from 'Class182.js';
import { Class41 } from 'Class41.js';
import { Class377 } from 'Class377.js';
import { Class525 } from 'Class525.js';
import { Js5ConfigGroup } from 'Class131.js';
import { Class50 } from 'Class50.js';
export var Class722 = function () {
    var e = {};
    var b;
    var j = Class182();
    var g = Class41.create();
    e.member25 = function (k) {
        b = k;
    };
    var c = e.member25;
    e.member7183 = function (n, m) {
        var k = j.member776();
        while (k !== undefined) {
            k.member512();
            k = j.member777();
        }
        j.member301();
    };
    var h = e.member7183;
    e.member486 = function () {
        var m = b.member6116.member7139();
        var k = j.member776();
        while (k !== undefined) {
            k.member4380(m);
            if (k.member1999()) {
                k.member512();
                j.remove();
            }
            k = j.member777();
        }
    };
    e.add = function (m) {
        if (m.member4179 === undefined || m.member6432 === undefined || m.member6439 === undefined || m.member6448 === undefined || m.member6440 === undefined || m.member6449 === undefined || m.member1788 === undefined || m.level === undefined || m.member4345 === undefined || m.member4179 !== null && m.slotID === undefined) {
            throw new Error('1354 ');
        }
        var k = null;
        var q = Class377();
        var n = b.member6444.member6445();
        if (m.member4179 === null) {
            if (n !== null) {
                k = n.member7842();
            }
        } else {
            k = m.member4179.member3320();
        }
        k.member2013(q);
        m.member7710 = b;
        m.parent = m.member4179;
        m.member4070 = n;
        m.node = q;
        var o = Class525(m);
        q.member4185(o);
        if (m.member4179 === null) {
            j.member2038(o);
        } else {
            m.member4179.member7822(o, m.slotID);
        }
    };
    var i = e.add;
    e.member6454 = function (m) {
        if (m.member4179 === undefined || m.member6432 === undefined || m.member6439 === undefined || m.member6448 === undefined || m.member6440 === undefined || m.member6449 === undefined || m.member1788 === undefined || m.level === undefined || m.member4345 === undefined || m.slotID === undefined) {
            throw new Error('1355 ');
        }
        var k = true;
        var n = m.member4179.member7821(m.slotID);
        if (n !== undefined && m.member6432 !== -1) {
            if (n.member8462() === m.member6432) {
                var q = b.member2970.getConfigType(Js5ConfigGroup.SPOTTYPE.member1204, m.member6432);
                if (q !== NULL && q.member8464()) {
                    if (n.member2928() === Class50.member371 || n.member2928() === Class50.member373) {
                        k = false;
                    }
                }
            } else {
                var s = b.member2970.getConfigType(Js5ConfigGroup.SPOTTYPE.member1204, m.member6432);
                if (s !== NULL) {
                    var r = b.member2970.getConfigType(Js5ConfigGroup.SEQTYPE.member1204, s.member4609());
                    var o = n.member8467();
                    if (r !== NULL && o !== NULL) {
                        if (o.getPriority() > r.getPriority()) {
                            k = false;
                        }
                    }
                }
            }
        }
        if (k) {
            if (n !== undefined) {
                n.member512();
                m.member4179.member7822(undefined, m.slotID);
            }
            if (m.member6432 !== -1) {
                i(m);
            }
        }
    };
    var d = e.member6454;
    e.member8037 = function (u, t, o, q, s, k, m, r, n) {
        d({
            member6432: u,
            member4345: o,
            member6439: 0,
            member6440: 0,
            member6448: t,
            level: m.member4081(),
            member1788: q,
            member6449: k,
            member4179: m,
            slotID: r,
            member4370: n
        });
    };
    e.member10052 = function (n, k) {
        var m = j.member776();
        while (m !== undefined) {
            if (m.member8463()) {
                m.member3320().member344(g);
                if (g[0] === n && g[2] === k) {
                    return m;
                }
            }
            m = j.member777();
        }
        return null;
    };
    var a = e.member10052;
    e.member6447 = function (n, k) {
        var m = a(n, k);
        if (m !== null) {
            m.member512();
            j.remove();
        }
    };
    return e;
}();