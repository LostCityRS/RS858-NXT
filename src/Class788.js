import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Class131 } from 'Class131.js';
import { Class96 } from 'Class96.js';
import { Class783 } from 'Class783.js';
export var Class788 = function (n) {
    var d = {};
    var o = null;
    d.member7535 = function () {
        return o;
    };
    var a = d.member7535;
    var i = null;
    d.member8687 = function () {
        return i;
    };
    var m = null;
    d.member7539 = function () {
        return m;
    };
    if (n.member995 !== undefined && n.member8694 !== undefined && n.member2970 !== undefined) {
        o = n.member995;
        i = n.member8694;
        m = n.member2970;
    } else {
        throw new Error('1634 ');
    }
    var c = Class105({ member895: 64 });
    var b = Class105({
        member895: 20,
        member898: function (q) {
            q.member510();
        },
        member897: function (q) {
            q.member511();
        }
    });
    d.list = function (s) {
        var q = c.find(s);
        if (q === null) {
            var r = o.getFile(Class95.member807, Class131.member1234.member1204, s, Class96.member840, Class131.member1234.priority);
            if (r === null) {
                return null;
            }
            q = Class783({
                member625: s,
                member2896: d
            });
            if (r !== undefined) {
                q.decode(r);
            }
            c.put(q, 1, s);
        }
        return q;
    };
    var k = d.list;
    d.member8754 = function (q, r) {
        b.put(q, 1, r);
    };
    var g = d.member8754;
    d.member8753 = function (q) {
        return b.find(q);
    };
    var e = d.member8753;
    d.member8696 = function () {
        c.member301();
    };
    var j = d.member8696;
    d.member8697 = function (q) {
        c.member905(q);
    };
    var h = d.member8697;
    n = undefined;
    return d;
};