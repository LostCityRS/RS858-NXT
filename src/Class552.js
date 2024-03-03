import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Js5ConfigGroup } from 'Class131.js';
import { Priority } from 'Class96.js';
import { MSIType } from 'Class551.js';
export var MSITypeList = function (k) {
    var d = {};
    var m = null;
    d.member7535 = function () {
        return m;
    };
    var a = d.member7535;
    if (k.member995 !== undefined) {
        m = k.member995;
    } else {
        throw new Error('960 ');
    }
    var c = Class105({ member895: 2048 });
    var b = Class105({
        member895: 256,
        member898: function (n) {
            n.member510();
        },
        member897: function (n) {
            n.member511();
        }
    });
    d.list = function (q) {
        var n = c.find(q);
        if (n === null) {
            var o = m.getFile(Class95.member807, Js5ConfigGroup.MSITYPE.member1204, q, Priority.member840, Js5ConfigGroup.MSITYPE.priority);
            if (o === null) {
                return null;
            }
            n = MSIType({
                member625: q,
                myList: d
            });
            if (o !== undefined) {
                n.decode(o);
            }
            c.put(n, 1, q);
        }
        return n;
    };
    var j = d.list;
    d.member8754 = function (n, o) {
        b.put(n, 1, o);
    };
    var g = d.member8754;
    d.member8753 = function (n) {
        return b.find(n);
    };
    var e = d.member8753;
    d.member8696 = function () {
        c.member301();
    };
    var i = d.member8696;
    d.member8697 = function (n) {
        c.member905(n);
    };
    var h = d.member8697;
    k = undefined;
    return d;
};