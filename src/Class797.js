import { Class95 } from 'Class95.js';
import { Class131 } from 'Class131.js';
import { Class105 } from 'Class105.js';
import { Class96 } from 'Class96.js';
import { Class789 } from 'Class789.js';
export var Class797 = function (m) {
    var c = {};
    var j = null;
    var i = null;
    var n = null;
    c.member7535 = function () {
        return n;
    };
    var h = 0;
    c.member2975 = function () {
        return h;
    };
    var k = null;
    c.member7539 = function () {
        return k;
    };
    var b;
    if (m.member2739 !== undefined && m.member3992 !== undefined && m.member995 !== null && m.member2970 !== undefined) {
        j = m.member2739;
        i = m.member3992;
        n = m.member995;
        k = m.member2970;
        h = n.member1439(Class95.member807, Class131.member1229.member1204).member3896();
        b = Class105({ member895: h });
    } else {
        throw new Error('1679 ');
    }
    var g = function (r) {
        var o = b.find(r);
        if (o === null) {
            var q = n.getFile(Class95.member807, Class131.member1229.member1204, r, Class96.member840, Class131.member1229.priority);
            if (q === null) {
                return null;
            }
            o = Class789(r, c);
            if (q !== undefined) {
                o.decode(q);
            }
            o.member2934();
            b.put(o, 1, r);
        }
        return o;
    };
    c.list = g;
    var a = function () {
        return member8693;
    };
    c.member8682 = a;
    var e = function () {
        b.member301();
    };
    c.member8696 = e;
    var d = function (o) {
        b.member905(o);
    };
    c.member8697 = d;
    m = undefined;
    return c;
};