import { Class433 } from 'Class433.js';
import { Class719 } from 'Class719.js';
import { Js5ConfigGroup } from 'Class131.js';
import { Class302 } from 'Class302.js';
import { Class450 } from 'Class450.js';
import { Class317 } from 'Class317.js';
export var Class720 = function () {
    var h = {};
    var a;
    var d = 32768;
    var g = 32767;
    var i = function (j) {
        a = j;
    };
    h.member25 = i;
    Class433.member6365.member6428 = function (q, u) {
        if (!a.member9737.readyanim()) {
            return true;
        }
        var s = q.g2();
        var n = a.member6452.member6453(s);
        if (n === undefined) {
            return;
        }
        var r = q.g2();
        var k = (r & d) !== 0;
        var v = Class719.getByID(q.g1());
        var t;
        var j;
        if (k) {
            r &= g;
            j = q.g2();
            var m = a.member2970.getConfigType(Js5ConfigGroup.CHATPHRASETYPE.member1204, j);
            if (m === NULL) {
                return true;
            }
            t = m.member3637(q);
        } else {
            t = Class302.member3614(a.member9737.member10048(q));
        }
        if (v.member10039) {
            var x = a.member7135();
            if (x !== undefined && (x.member8175() && !x.member8181() || a.member8782().member8786())) {
                return;
            }
            if (a.member7259.member7242(n.member7787())) {
                return;
            }
        }
        n.member8021(t.trim(), r >> 8, r & 255);
        var o;
        if (v.member10038) {
            o = k ? Class450.member7153 : Class450.member7144;
        } else {
            o = k ? Class450.member7153 : Class450.member7145;
        }
        if (v.member10037 !== -1) {
            a.member8023.member7186(o, 0, Class317.member3724(v.member10037).concat(n.member7791(true)), Class317.member3724(v.member10037).concat(n.member3009(false)), n.member3009(false), t, v, undefined, j);
        } else {
            a.member8023.member7186(o, 0, n.member7791(true), n.member3009(false), n.member3009(false), t, v, undefined, j);
        }
    };
    Class433.member6237.member6428 = function (o, s) {
        var n = o.gSmart1or2();
        var k = o.g4();
        var m = o.g1();
        var r = '', q = r;
        if ((m & 1) != 0) {
            r = o.gjstr();
            if ((m & 2) != 0) {
                q = o.gjstr();
            } else {
                q = r;
            }
        }
        var j = o.gjstr();
        if (n === Class450.member7176) {
            a.member9219.member9734(j);
        } else if (n === Class450.member7175) {
            a.member9219.member9735(j);
        } else {
            if (!q === '') {
                if (a.member7259.member7242(q)) {
                    return;
                }
            }
            a.member8023.member7186(n, k, r, q, r, j);
        }
    };
    Class433.member6253.member6428 = function (j, k) {
        a.member8023.member7180(j.g1_alt1());
        a.member8023.member7182(j.g1_alt2());
    };
    var b = 100;
    var e = 0;
    var c = [];
    Class433.member6252.member6428 = function (m, r) {
        if (!a.member9737.readyanim()) {
            return true;
        }
        var j = m.g1() === 1;
        var y = m.gjstr();
        var s = y;
        if (j) {
            s = m.gjstr();
        }
        var t = m.g2();
        var v = m.g3();
        var u = Class719.getByID(m.g1());
        var o = t * Math.pow(2, 24) + v;
        for (var n = 0; n < c.length; n++) {
            if (c[n] === o) {
                return;
            }
        }
        if (u.member10039) {
            var x = a.member7135();
            if (x !== undefined && (x.member8175() && !x.member8181() || a.member8782().member8786())) {
                return;
            }
            if (a.member7259.member7242(s)) {
                return;
            }
        }
        c[e] = o;
        e = (e + 1) % b;
        var q = Class302.member3614(a.member9737.member10048(m));
        var k = u.member10038 ? Class450.member7150 : Class450.member7146;
        if (u.member10037 !== -1) {
            a.member8023.member7186(k, 0, Class317.member3724(u.member10037).concat(y), Class317.member3724(u.member10037).concat(s), y, q, u);
        } else {
            a.member8023.member7186(k, 0, y, s, y, q, u);
        }
    };
    Class433.member6268.member6428 = function (k, m) {
        if (!a.member9737.readyanim()) {
            return true;
        }
        var j = k.gjstr();
        var n = Class302.member3614(a.member9737.member10048(k));
        a.member8023.member7186(Class450.member7149, 0, j, j, j, n);
    };
    Class433.member6270.member6428 = function (k, q) {
        if (!a.member9737.readyanim()) {
            return true;
        }
        var j = k.g1() === 1;
        var y = k.gjstr();
        var r = y;
        if (j) {
            r = k.gjstr();
        }
        var u = k.gjstr();
        var s = k.g2();
        var v = k.g3();
        var t = Class719.getByID(k.g1());
        var n = s * Math.pow(2, 24) + v;
        for (var m = 0; m < c.length; m++) {
            if (c[m] === n) {
                return;
            }
        }
        if (t.member10039) {
            var x = a.member7135();
            if (x !== undefined && (x.member8175() && !x.member8181() || a.member8782().member8786())) {
                return;
            }
            if (a.member7259.member7242(r)) {
                return;
            }
        }
        c[e] = n;
        e = (e + 1) % b;
        var o = Class302.member3614(a.member9737.member10048(k));
        if (t.member10037 !== -1) {
            a.member8023.member7186(Class450.member7151, 0, Class317.member3724(t.member10037).concat(y), Class317.member3724(t.member10037).concat(r), y, o, t, u);
        } else {
            a.member8023.member7186(Class450.member7151, 0, y, r, y, o, t, u);
        }
    };
    Class433.member6271.member6428 = function (m, r) {
        if (!a.member9737.readyanim()) {
            return true;
        }
        var j = m.g1() === 1;
        var x = m.gjstr();
        var s = m.g2();
        var u = m.g3();
        var t = Class719.getByID(m.g1());
        var o = s * Math.pow(2, 24) + u;
        var y = j ? a.member9752.member8849() : a.member9752.member9597();
        if (y === undefined) {
            return;
        }
        for (var n = 0; n < c.length; n++) {
            if (c[n] === o) {
                return;
            }
        }
        if (t.member10039) {
            var v = a.member7135();
            if (v !== undefined && (v.member8175() && !v.member8181() || a.member8782().member8786())) {
                return;
            }
            if (a.member7259.member7242(x)) {
                return;
            }
        }
        c[e] = o;
        e = (e + 1) % b;
        var q = Class302.member3614(a.member9737.member10048(m));
        var k = j ? Class450.member7167 : Class450.member7170;
        if (t.member10037 !== -1) {
            a.member8023.member7186(k, 0, Class317.member3724(t.member10037).concat(x), Class317.member3724(t.member10037).concat(x), x, q, t, y.member2798());
        } else {
            a.member8023.member7186(k, 0, x, x, x, q, t, y.member2798());
        }
    };
    Class433.member6272.member6428 = function (m, r) {
        if (!a.member9737.readyanim()) {
            return true;
        }
        var j = m.g1() === 1;
        var s = m.g2();
        var t = m.g3();
        var n = s * Math.pow(2, 24) + t;
        var u = j ? a.member9752.member8849() : a.member9752.member9597();
        if (u === undefined) {
            return;
        }
        for (var o = 0; o < c.length; o++) {
            if (c[o] === n) {
                return;
            }
        }
        c[e] = n;
        e = (e + 1) % b;
        var q = a.member9737.member10048(m);
        var k = j ? Class450.member7169 : Class450.member7172;
        a.member8023.member7186(k, 0, '', '', '', q, undefined, u.member2798());
    };
    Class433.member6405.member6428 = function (m, r) {
        if (!a.member9737.readyanim()) {
            return true;
        }
        var y = m.gjstr();
        var s = m.g2();
        var v = m.g3();
        var t = Class719.getByID(m.g1());
        var o = s * Math.pow(2, 24) + v;
        var j = m.g1() === 1;
        var u = a.member8846.member8444();
        if (u === undefined) {
            return;
        }
        for (var n = 0; n < c.length; n++) {
            if (c[n] === o) {
                return;
            }
        }
        if (t.member10039) {
            var x = a.member7135();
            if (x !== undefined && (x.member8175() && !x.member8181() || a.member8782().member8786())) {
                return;
            }
            if (a.member7259.member7242(y)) {
                return;
            }
        }
        c[e] = o;
        e = (e + 1) % b;
        var q = Class302.member3614(a.member9737.member10048(m));
        var k = j ? Class450.member7157 : Class450.member7159;
        if (t.member10037 !== -1) {
            a.member8023.member7186(k, 0, Class317.member3724(t.member10037).concat(y), Class317.member3724(t.member10037).concat(y), y, q, t, u.member3009());
        } else {
            a.member8023.member7186(k, 0, y, y, y, q, t, u.member3009());
        }
    };
    Class433.member6286.member6428 = function (m, o) {
        var k = m.gjstr();
        var n = m.g2();
        var j = a.member2970.getConfigType(Js5ConfigGroup.CHATPHRASETYPE.member1204, n);
        if (j === NULL) {
            return true;
        }
        var q = j.member3637(m);
        a.member8023.member7186(Class450.member7155, 0, k, k, k, q, undefined, undefined, n);
    };
    Class433.member6287.member6428 = function (n, s) {
        var k = n.g1() === 1;
        var y = n.gjstr();
        var t = y;
        if (k) {
            t = n.gjstr();
        }
        var u = n.g2();
        var x = n.g3();
        var v = Class719.getByID(n.g1());
        var j = n.g2();
        var q = u * Math.pow(2, 24) + x;
        for (var o = 0; o < c.length; o++) {
            if (c[o] === q) {
                return;
            }
        }
        if (v.member10039 && a.member7259.member7242(t)) {
            return;
        }
        var m = a.member2970.getConfigType(Js5ConfigGroup.CHATPHRASETYPE.member1204, j);
        if (m === NULL) {
            return true;
        }
        c[e] = q;
        e = (e + 1) % b;
        var r = m.member3637(n);
        if (v.member10037 !== -1) {
            a.member8023.member7186(Class450.member7154, 0, Class317.member3724(v.member10037).concat(y), Class317.member3724(v.member10037).concat(t), y, r, v, undefined, j);
        } else {
            a.member8023.member7186(Class450.member7154, 0, y, t, y, r, v, undefined, j);
        }
    };
    Class433.member6288.member6428 = function (n, s) {
        var k = n.g1() === 1;
        var z = n.gjstr();
        var t = z;
        if (k) {
            t = n.gjstr();
        }
        var y = n.gjstr();
        var u = n.g2();
        var x = n.g3();
        var v = Class719.getByID(n.g1());
        var j = n.g2();
        var q = u * Math.pow(2, 24) + x;
        for (var o = 0; o < c.length; o++) {
            if (c[o] === q) {
                return;
            }
        }
        if (v.member10039 && a.member7259.member7242(t)) {
            return;
        }
        var m = a.member2970.getConfigType(Js5ConfigGroup.CHATPHRASETYPE.member1204, j);
        if (m === NULL) {
            return true;
        }
        c[e] = q;
        e = (e + 1) % b;
        var r = m.member3637(n);
        if (v.member10037 !== -1) {
            a.member8023.member7186(Class450.member7156, 0, Class317.member3724(v.member10037).concat(z), Class317.member3724(v.member10037).concat(t), z, r, v, y, j);
        } else {
            a.member8023.member7186(Class450.member7156, 0, z, t, z, r, v, y, j);
        }
    };
    Class433.member6289.member6428 = function (n, t) {
        var o = n.g1() === 1;
        var z = n.gjstr();
        var u = n.g2();
        var y = n.g3();
        var v = Class719.getByID(n.g1());
        var j = n.g2();
        var A = o ? a.member9752.member8849() : a.member9752.member9597();
        if (A === undefined) {
            return;
        }
        var r = u * Math.pow(2, 24) + y;
        for (var q = 0; q < c.length; q++) {
            if (c[q] === r) {
                return;
            }
        }
        if (v.member10039 && a.member7259.member7242(z)) {
            return;
        }
        var k = a.member2970.getConfigType(Js5ConfigGroup.CHATPHRASETYPE.member1204, j);
        if (k === NULL) {
            return true;
        }
        c[e] = r;
        e = (e + 1) % b;
        var s = k.member3637(n);
        var m = o ? Class450.member7168 : Class450.member7171;
        var x = A.member2798();
        if (v.member10037 !== -1) {
            a.member8023.member7186(m, 0, Class317.member3724(v.member10037).concat(z), Class317.member3724(v.member10037).concat(z), z, s, v, x, j);
        } else {
            a.member8023.member7186(m, 0, z, z, z, s, v, x, j);
        }
    };
    Class433.member6406.member6428 = function (o, t) {
        var z = o.gjstr();
        var u = o.g2();
        var x = o.g3();
        var v = Class719.getByID(o.g1());
        var k = o.g1() === 1;
        var j = o.g2();
        var y = a.member8846.member8444();
        if (y === undefined) {
            return;
        }
        var r = u * Math.pow(2, 24) + x;
        for (var q = 0; q < c.length; q++) {
            if (c[q] === r) {
                return;
            }
        }
        if (v.member10039 && a.member7259.member7242(z)) {
            return;
        }
        var m = a.member2970.getConfigType(Js5ConfigGroup.CHATPHRASETYPE.member1204, j);
        if (m === NULL) {
            return true;
        }
        c[e] = r;
        e = (e + 1) % b;
        var s = m.member3637(o);
        var n = k ? Class450.member7158 : Class450.member7160;
        if (v.member10037 !== -1) {
            a.member8023.member7186(n, 0, Class317.member3724(v.member10037).concat(z), Class317.member3724(v.member10037).concat(z), z, s, v, y.member3009(), j);
        } else {
            a.member8023.member7186(n, 0, z, z, z, s, v, y.member3009(), j);
        }
    };
    return h;
}();