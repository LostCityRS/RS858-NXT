import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Class96 } from 'Class96.js';
import { Class692 } from 'Class692.js';
import { Class462 } from 'Class462.js';
export var Class794 = function (o) {
    var e = {};
    var n = null;
    var m = null;
    var d = null;
    var q = null;
    var j;
    var k = 0;
    e.member2975 = function () {
        return k;
    };
    var b = Class105({ member895: 1024 });
    if (o.member2739 !== undefined && o.member3992 !== undefined && o.member995 !== null && o.member2385 !== undefined && o.member10511 !== undefined) {
        n = o.member2739;
        m = o.member3992;
        q = o.member995;
        j = o.member2385;
        d = o.member10511;
        k = q.member1439(Class95.member807).member1440(j.member1204);
    } else {
        throw new Error('1702 ');
    }
    var i = function (t) {
        var r = b.find(t);
        if (r === null) {
            var s = q.getFile(Class95.member807, j.member1204, t, Class96.member840, j.priority);
            if (s === null) {
                return null;
            }
            r = Class692(t, d);
            if (s !== undefined) {
                r.decode(s);
            }
            b.put(r, 1, t);
        }
        return r;
    };
    e.list = i;
    var h = function () {
        b.member301();
    };
    e.member8696 = h;
    var g = function (r) {
        b.member905(r);
    };
    e.member8697 = g;
    var c = function (t) {
        var v = t.member608();
        var s = i(v);
        if (s === member47) {
            return member47;
        }
        var u;
        var r = s.member7378.member7287;
        if (r === Class462.member7281) {
            u = t.member1073();
        } else if (r === Class462.member7282) {
            u = t.member1077();
        } else if (r === Class462.member7283) {
            u = t.member1089();
        } else if (r === Class462.member7284) {
            throw new Error();
        } else {
            throw new Error();
        }
        return {
            id: v,
            value: u
        };
    };
    e.member3026 = c;
    var a = function (t, u) {
        u.member1054(t.id);
        var s = i(t.id);
        var r = s.member7378.member7287;
        if (r === Class462.member7281) {
            u.member1056(t.value);
        } else if (r === Class462.member7282) {
            u.member1057(t.value);
        } else if (r === Class462.member7283) {
            u.member1065(t.value, true);
        } else {
            throw new Error();
        }
    };
    e.member10425 = a;
    o = undefined;
    return e;
};