import { Class95 } from 'Class95.js';
import { Class96 } from 'Class96.js';
import { Class80 } from 'Class80.js';
import { Class76 } from 'Class76.js';
export var Class551 = function (j) {
    var g = {};
    var e;
    var h;
    if (j.member625 !== undefined && j.member2896 !== undefined) {
        h = j.member625;
        e = j.member2896;
    } else {
        throw new Error('1208 ');
    }
    var i;
    g.member7027 = function () {
        return i;
    };
    var c;
    g.member8751 = function () {
        return c;
    };
    var d = false;
    g.member8600 = function () {
        return d;
    };
    g.decode = function (m) {
        while (true) {
            var k = m.member609();
            if (k === undefined) {
                throw new Error('1209 ');
                break;
            }
            if (k === 0) {
                break;
            }
            a(m, k);
        }
    };
    var b = g.decode;
    var a = function (m, k) {
        if (k === 1) {
            i = m.member1086();
        } else if (k === 2) {
            c = m.g3();
        } else if (k === 3) {
            d = true;
        } else if (k === 4) {
            i = -1;
        } else if (false) {
        }
    };
    g.member8752 = function (m, r, o) {
        if (i === -1) {
            return undefined;
        }
        var u = e.member8753(i);
        if (u === null) {
            var q = e.member7535();
            var k = q.getFile(Class95.member811, i, 0, Class96.member840);
            if (k !== null) {
                var n = Class80.member606(k);
                n[0].member604();
                if (o) {
                    n[0].member601();
                }
                for (var s = 0; s < r; s++) {
                    n[0].member602();
                }
                var t = n[0].member600();
                u = Class76(m, n[0].member556(), n[0].member557(), t, false);
                u.member563();
                e.member8754(u, i);
            }
        }
        return u;
    };
    j = undefined;
    return g;
};