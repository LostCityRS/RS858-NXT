import { Class95 } from 'Class95.js';
import { Class105 } from 'Class105.js';
import { Class131 } from 'Class131.js';
import { Class96 } from 'Class96.js';
export var Class796 = function (o) {
    var c = {};
    var n = null;
    var m = null;
    var j;
    var h = null;
    var e = Class95.member807;
    var q = null;
    c.member7535 = function () {
        return q;
    };
    var k = 0;
    c.member2975 = function () {
        return k;
    };
    var b = Class105({ member895: 512 });
    if (o.member2739 !== undefined && o.member3992 !== undefined && o.member995 !== null && o.member2385 !== undefined && o.member10512 !== undefined) {
        n = o.member2739;
        m = o.member3992;
        q = o.member995;
        j = o.member2385;
        h = o.member10512;
        if (o.member10513 !== undefined) {
            e = o.member10513;
        }
        if (j.member1210 !== undefined) {
            var a = q.member1439(e).member3896();
            k = a * Class131.member1262(j.member1210) + q.member1439(e).member1440(a);
        } else {
            k = q.member1439(Class95.member807).member1440(j.member1204);
        }
    } else {
        throw new Error('959 ');
    }
    var i = function (t) {
        var r = b.find(t);
        if (r === null) {
            var s;
            if (j.member1210 !== undefined) {
                s = q.getFile(e, Class131.member1263(t, j.member1210), Class131.member1264(t, j.member1210), Class96.member840, j.priority);
            } else {
                s = q.getFile(e, j.member1204, t, Class96.member840, j.priority);
            }
            if (s === null) {
                return null;
            }
            r = h({
                member625: t,
                member2896: c
            });
            if (s !== undefined) {
                r.decode(s);
            }
            b.put(r, 1, t);
        }
        return r;
    };
    c.list = i;
    var g = function () {
        b.member301();
    };
    c.member8696 = g;
    var d = function (r) {
        b.member905(r);
    };
    c.member8697 = d;
    o = undefined;
    return c;
};