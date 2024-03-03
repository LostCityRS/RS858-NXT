import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Class131 } from 'Class131.js';
import { Class758 } from 'Class758.js';
import { Class96 } from 'Class96.js';
export var Class799 = function (k) {
    var b = {};
    var j = null;
    var i = null;
    var m = null;
    var h = 0;
    b.member2975 = function () {
        return h;
    };
    var d = null;
    var a = Class105({ member895: 64 });
    if (k.member2739 !== undefined && k.member3992 !== undefined && k.member995 !== null) {
        j = k.member2739;
        i = k.member3992;
        m = k.member995;
        h = m.member1439(Class95.member807).member1440(Class131.member1226.member1204);
        d = Class758(-1, b);
    } else {
        throw new Error('1058 ');
    }
    var g = function (q) {
        var n = a.find(q);
        if (n === null) {
            var o = m.getFile(Class95.member807, Class131.member1226.member1204, q, Class96.member840, Class131.member1226.priority);
            if (o === null) {
                return null;
            }
            n = Class758(q, b);
            if (o !== undefined) {
                n.decode(o);
            }
            a.put(n, 1, q);
        }
        return n;
    };
    b.list = g;
    var e = function () {
        a.member301();
    };
    b.member8696 = e;
    var c = function (n) {
        a.member905(n);
    };
    b.member8697 = c;
    k = undefined;
    return b;
};