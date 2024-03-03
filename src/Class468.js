import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Class96 } from 'Class96.js';
import { Class93 } from 'Class93.js';
import { Class466 } from 'Class466.js';
import { Class467 } from 'Class467.js';
export var Class468 = function () {
    var e = {};
    var a;
    var m = Class105({ member895: 1024 });
    var i = Class105({ member895: 128 });
    var j = {};
    var c = function (n) {
        a = n;
    };
    e.member25 = c;
    var b = function () {
        for (var n in j) {
            if (j[n] !== undefined) {
                h(j[n].scriptID, true);
            }
        }
        m.member905(500);
        i.member905(500);
    };
    e.member78 = b;
    var h = function (r, q) {
        var o = m.find(r);
        if (o !== null) {
            return;
        }
        if (!q) {
            if (j[r] === undefined) {
                j[r] = { scriptID: r };
            } else {
                return;
            }
        }
        var n = a.member995.getFile(Class95.member813, r, 0, Class96.member840, Class93.member795);
        if (n === undefined) {
            return;
        }
        if (n === null) {
            return;
        }
        if (n.getSize() <= 1) {
            return;
        }
        o = Class466({
            scriptID: r,
            data: n,
            member2970: a.member2970
        });
        if (o === null) {
            return;
        }
        delete j[r];
        m.put(o, 1, r);
    };
    e.member7430 = h;
    var d = function (q) {
        var o = m.find(q);
        if (o !== null) {
            return o;
        }
        var n = a.member995.getFile(Class95.member813, q, 0, Class96.member840, Class93.member795);
        if (n === undefined) {
            return undefined;
        }
        if (n === null) {
            return null;
        }
        if (n.getSize() <= 1) {
            return null;
        }
        o = Class466({
            scriptID: q,
            data: n,
            member2970: a.member2970
        });
        if (o === null) {
            return null;
        }
        delete j[q];
        m.put(o, 1, q);
        return o;
    };
    e.getByID = d;
    var g = function (q, n, s) {
        var r = q.id | n << Class467.member7407;
        var o = k(r);
        if (o !== undefined) {
            return o;
        }
        r = q.id | s + 65536 << Class467.member7407;
        o = k(r);
        if (o !== undefined) {
            return o;
        }
        r = q.id | 65535 << Class467.member7407;
        o = k(r);
        if (o !== undefined) {
            return o;
        }
        return undefined;
    };
    e.member7431 = g;
    var k = function (r) {
        var o = i.find(r);
        if (o !== null) {
            return o;
        }
        var q = a.member995.member1439(Class95.member813);
        if (q === member47) {
            return member47;
        }
        var n = a.member995.getFile(Class95.member813, q.member3899(r), 0, Class96.member840, Class93.member795);
        if (n !== undefined) {
            if (n === null) {
                return null;
            }
            if (n.getSize() <= 1) {
                return null;
            }
            o = Class466({
                scriptID: r,
                data: n,
                member2970: a.member2970
            });
            if (o === null) {
                return null;
            }
            i.put(o, 1, r);
            return o;
        } else {
            return undefined;
        }
    };
    return e;
}();