import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Js5ConfigGroup } from 'Class131.js';
import { Priority } from 'Class96.js';
import { EnumType } from 'Class784.js';
export var EnumTypeList = function (k) {
    var c = {};
    var j = null;
    var i = null;
    var m = null;
    var h = 0;
    c.member2975 = function () {
        return h;
    };
    var b = Class105({ member895: 128 });
    if (k.member2739 !== undefined && k.member3992 !== undefined && k.member995 !== null) {
        j = k.member2739;
        i = k.member3992;
        m = k.member995;
        var a = m.member1439(Class95.member817).member3896();
        h = a * Js5ConfigGroup.getFileBits(Js5ConfigGroup.ENUMTYPE.fileBits) + m.member1439(Class95.member817).member1440(a);
    } else {
        throw new Error('986 ');
    }
    var g = function (q) {
        var n = b.find(q);
        if (n === null) {
            var o = m.getFile(Class95.member817, Js5ConfigGroup.getGroupID(q, Js5ConfigGroup.ENUMTYPE.fileBits), Js5ConfigGroup.getFileID(q, Js5ConfigGroup.ENUMTYPE.fileBits), Priority.member840, Js5ConfigGroup.ENUMTYPE.priority);
            if (o === null) {
                return null;
            }
            n = EnumType({
                member625: q,
                myList: c
            });
            if (o !== undefined) {
                n.decode(o);
            }
            b.put(n, 1, q);
        }
        return n;
    };
    c.list = g;
    var e = function () {
        b.member301();
    };
    c.member8696 = e;
    var d = function (n) {
        b.member905(n);
    };
    c.member8697 = d;
    k = undefined;
    return c;
};