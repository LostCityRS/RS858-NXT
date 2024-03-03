import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Class131 } from 'Class131.js';
import { Class96 } from 'Class96.js';
import { Class702 } from 'Class702.js';
export var Class787 = function (o) {
    var d = {};
    var k = null;
    var j = null;
    var q = null;
    var m = null;
    var i = 0;
    d.member2975 = function () {
        return i;
    };
    d.member9927 = new Array(32);
    var b = 2;
    for (var a = 0; a < 32; a++) {
        d.member9927[a] = b - 1;
        b += b;
    }
    var c = Class105({ member895: 128 });
    if (o.member2739 !== undefined && o.member3992 !== undefined && o.member995 !== undefined && o.member2970 !== undefined) {
        k = o.member2739;
        j = o.member3992;
        q = o.member995;
        m = o.member2970;
        i = q.member1439(Class95.member807).member1440(Class131.member1254.member1204);
    } else {
        throw new Error('1747 ');
    }
    var h = function (s) {
        var r = c.find(s);
        if (r === null) {
            var n = q.getFile(Class95.member807, Class131.member1254.member1204, s, Class96.member840, Class131.member1254.priority);
            if (n === null) {
                return null;
            }
            r = Class702({
                member625: s,
                member2896: d
            });
            if (n !== undefined) {
                if (!r.decode(n, m)) {
                    return null;
                }
            }
            c.put(r, 1, s);
        }
        return r;
    };
    d.list = h;
    var g = function () {
        c.member301();
    };
    d.member8696 = g;
    var e = function (n) {
        c.member905(n);
    };
    d.member8697 = e;
    o = undefined;
    return d;
};