import { Class103 } from 'Class103.js';
import { Class450 } from 'Class450.js';
import { Class451 } from 'Class451.js';
import { Class234 } from 'Class234.js';
export var Class452 = function () {
    var e = {};
    var b;
    var g = 0;
    e.member7179 = function () {
        return g;
    };
    e.member7180 = function (s) {
        g = s;
    };
    var q = 0;
    e.member7181 = function () {
        return q;
    };
    e.member7182 = function (s) {
        q = s;
    };
    var d = 0;
    var h = 0;
    var a = 100;
    var i;
    var r;
    var n = new Class103();
    e.member25 = function (s) {
        b = s;
        j();
    };
    var c = e.member25;
    e.member7183 = function (t, s) {
    };
    var m = e.member7183;
    e.member7184 = function (s) {
        k(Class450.member7143, 0, '', '', '', s);
    };
    var o = e.member7184;
    e.member7185 = null;
    e.member7186 = function (x, v, u, D, B, C, z, A, y) {
        var t = i[x];
        if (t === undefined) {
            t = i[x] = {
                history: new Array(a),
                length: 0
            };
        }
        var F = t.history[a - 1];
        for (var s = t.length; s > 0; s--) {
            if (s === a) {
                continue;
            }
            t.history[s] = t.history[s - 1];
        }
        var E = {
            id: d++,
            member2803: b.member6116.member7139(),
            member2804: Class451.member7178(),
            type: x,
            flags: v,
            member2805: u,
            member2806: D,
            member2807: B,
            member2808: A,
            member2809: y,
            member2810: C,
            member2811: z
        };
        if (F !== undefined) {
            delete r[F.member444()];
            n.unlink(F);
            F.member2802(E);
        } else {
            F = Class234(E);
        }
        t.history[0] = F;
        r[E.id] = F;
        n.member887(F);
        if (t.length < a) {
            t.length++;
        }
        b.member7187.member7188();
        if (e.member7185 !== null) {
            e.member7185(F);
        }
    };
    var k = e.member7186;
    e.member7189 = function (s) {
        if (i[s] === undefined) {
            return 0;
        } else {
            return i[s].length;
        }
    };
    e.member7190 = function (s, t) {
        if (i[s] === undefined) {
            return undefined;
        } else {
            return i[s].history[t];
        }
    };
    e.member7191 = function (s) {
        return r[s];
    };
    e.member7192 = function (s) {
        if (r[s] === undefined) {
            return -1;
        }
        if (r[s].member884 === n.member883) {
            return -1;
        } else {
            return r[s].member884.member444();
        }
    };
    e.member7193 = function (s) {
        if (r[s] === undefined) {
            return -1;
        }
        if (r[s].next === n.member883) {
            return -1;
        } else {
            return r[s].next.member444();
        }
    };
    e.member7194 = function () {
        return n.member890();
    };
    e.member7195 = function () {
        return n.member776();
    };
    e.member301 = function () {
        i = {};
        r = {};
        n.member301();
        d = 0;
    };
    var j = e.member301;
    return e;
}();