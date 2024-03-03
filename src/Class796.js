import { Class95 } from 'Class95.js';
import { Class105 } from 'Class105.js';
import { Js5ConfigGroup } from 'Class131.js';
import { Priority } from 'Class96.js';
export var ConfigTypeList = function (o) {
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
    if (o.member2739 !== undefined && o.member3992 !== undefined && o.member995 !== null && o.member2385 !== undefined && o.configTypeConstructor !== undefined) {
        n = o.member2739;
        m = o.member3992;
        q = o.member995;
        j = o.member2385;
        h = o.configTypeConstructor;
        if (o.member10513 !== undefined) {
            e = o.member10513;
        }
        if (j.fileBits !== undefined) {
            var a = q.member1439(e).member3896();
            k = a * Js5ConfigGroup.getFileBits(j.fileBits) + q.member1439(e).member1440(a);
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
            if (j.fileBits !== undefined) {
                s = q.getFile(e, Js5ConfigGroup.getGroupID(t, j.fileBits), Js5ConfigGroup.getFileID(t, j.fileBits), Priority.member840, j.priority);
            } else {
                s = q.getFile(e, j.member1204, t, Priority.member840, j.priority);
            }
            if (s === null) {
                return null;
            }
            r = h({
                member625: t,
                myList: c
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