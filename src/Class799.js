import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Js5ConfigGroup } from 'Class131.js';
import { BASType } from 'Class758.js';
import { Priority } from 'Class96.js';
export var BASTypeList = function (k) {
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
        h = m.member1439(Class95.member807).member1440(Js5ConfigGroup.BASTYPE.member1204);
        d = BASType(-1, b);
    } else {
        throw new Error('1058 ');
    }
    var g = function (q) {
        var n = a.find(q);
        if (n === null) {
            var o = m.getFile(Class95.member807, Js5ConfigGroup.BASTYPE.member1204, q, Priority.member840, Js5ConfigGroup.BASTYPE.priority);
            if (o === null) {
                return null;
            }
            n = BASType(q, b);
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