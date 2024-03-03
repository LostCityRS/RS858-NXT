import { Class149 } from 'Class149.js';
import { Class137 } from 'Class137.js';
import { Class133 } from 'Class133.js';
import { Class147 } from 'Class147.js';
import { Class138 } from 'Class138.js';
import { Class75 } from 'Class75.js';
import { Class7 } from 'Class7.js';
import { Class5 } from 'Class5.js';
export var Class150 = function () {
    var d = {};
    var m = new Float32Array(3);
    var a;
    var g;
    var b;
    var e = {};
    d.member1504 = function () {
        return e;
    };
    var j = false;
    d.member1505 = function () {
        return j;
    };
    d.member1506 = function (n) {
        j = n;
    };
    d.member25 = function (n) {
        a = n.member433;
        g = n.member1300;
        b = n.member1507;
    };
    var k = function (r, n) {
        if (r.length === 0 && n.length === 0) {
            return undefined;
        } else {
            var q = c(r, false);
            if (q !== undefined) {
                q.member1327(r);
            }
            var o = c(n, true);
            if (o !== undefined) {
                o.member1327(n);
            }
            return b({
                member1508: q,
                member1509: r,
                member1510: o,
                member1511: n
            });
        }
    };
    d.member1512 = function (r) {
        var q = new Array(0), o = new Array(0);
        for (var n = 0; n < r.length; n++) {
            if (r[n] === undefined) {
                continue;
            }
            h(r[n], q, o);
        }
        return k(q, o);
    };
    d.member1513 = function (o) {
        var s = new Array(0), q = new Array(0);
        for (var n = 0; n < o.length; n++) {
            var r = o[n];
            if (r === undefined) {
                continue;
            }
            if (r === -1) {
                s.push(Class149(-1, Class137.member1305, true, Class133.member1268));
                continue;
            }
            var t = Class147.member1484(r);
            if (t === undefined) {
                if (false) {
                }
                continue;
            }
            h(t, s, q);
        }
        return k(s, q);
    };
    var h = function (s, r, o) {
        var q = s.getSize();
        var n = s.member1337();
        if (s.member1361()) {
            if (s.member1469() && a.member553()) {
                o.push(Class149(s.member444(), q, n, s.member1417()));
            } else {
                r.push(Class149(s.member444(), q, n, s.member1417()));
            }
        }
    };
    d.member1514 = function (t, o) {
        if (t.length === 0) {
            return undefined;
        }
        for (var r in e) {
            var n = e[r];
            if (o !== n.member559()) {
                continue;
            }
            if (n.member1334(t)) {
                return n;
            }
        }
        for (var r in e) {
            var n = e[r];
            if (o !== n.member559()) {
                continue;
            }
            if (n.member1339(t)) {
                return n;
            }
        }
        var s = 0;
        while (e[s] !== undefined) {
            s++;
        }
        var q = Class138({
            member433: a,
            member1300: g,
            id: s,
            member552: o
        });
        if (!q.member1339(t)) {
            throw new Error('1825 ' + (o ? '1825 ' : '1825 ') + '1825 ');
        }
        e[s] = q;
        return q;
    };
    var c = d.member1514;
    d.member1497 = function (n) {
        return e[n];
    };
    d.member1515 = function (s, r) {
        var o = undefined, n = undefined;
        if (s !== undefined && s !== member47) {
            o = s.member1516();
            n = s.member1517();
        }
        if (o !== undefined) {
            var q = a.bindTexture(Class75.member529, o.member558(), a.gl.TEXTURE_2D);
            r.member467(Class7.member155, q);
            m[0] = o.member1320();
            m[1] = Class137.member1305;
            m[2] = o.member1321();
            r.member467(Class7.member156, m);
        }
        if (n !== undefined && r.member445().member291(Class5.member94)) {
            var q = a.bindTexture(Class75.member532, n.member558(), a.gl.TEXTURE_2D);
            r.member467(Class7.member157, q);
            m[0] = n.member1320();
            m[1] = Class137.member1305;
            m[2] = n.member1321();
            r.member467(Class7.member158, m);
        }
    };
    d.member487 = function () {
    };
    d.member1346 = function () {
        for (var n in e) {
            e[n].member1346(n);
        }
    };
    d.member486 = function () {
        for (var n in e) {
            e[n].member78();
            if (!e[n].member1336()) {
                e[n].member512();
                delete e[n];
            }
        }
    };
    var i = function () {
        for (var n in e) {
            e[n].member1347();
        }
    };
    d.member1347 = i;
    return d;
}();