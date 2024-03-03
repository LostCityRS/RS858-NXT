import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Class131 } from 'Class131.js';
import { Class96 } from 'Class96.js';
import { Class625 } from 'Class625.js';
export var Class761 = function (n) {
    var d = {};
    var o = null;
    d.member7535 = function () {
        return o;
    };
    var a = d.member7535;
    var m = null;
    d.member7539 = function () {
        return m;
    };
    var i = null;
    d.member8687 = function () {
        return i;
    };
    if (n.member995 !== undefined && n.member2970 !== undefined && n.member8694 !== undefined) {
        o = n.member995;
        m = n.member2970;
        i = n.member8694;
    } else {
        throw new Error('1711 ');
    }
    var c = Class105({ member895: 2048 });
    var b = Class105({
        member895: 256,
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
            var r = o.getFile(Class95.member807, Class131.member1230.member1204, s, Class96.member840, Class131.member1230.priority);
            if (r === null) {
                return null;
            }
            q = Class625({
                member625: s,
                member2896: d
            });
            if (r !== undefined) {
                q.decode(r);
            }
            q.member2934();
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