import { Class95 } from 'Class95.js';
import { Js5ConfigGroup } from 'Class131.js';
import { Class105 } from 'Class105.js';
import { Priority } from 'Class96.js';
import { EffectAnimType } from 'Class729.js';
export var EffectAnimTypeList = function (k) {
    var d = {};
    var m = null;
    d.member7535 = function () {
        return m;
    };
    var a = d.member7535;
    var i = 0;
    d.member2975 = function () {
        return i;
    };
    if (k.member995 !== undefined) {
        m = k.member995;
        var b = m.member1439(Class95.member821).member3896();
        i = b * Js5ConfigGroup.getFileBits(Js5ConfigGroup.SPOTTYPE.fileBits) + m.member1439(Class95.member821).member1440(b);
    } else {
        throw new Error('979 ');
    }
    var c = Class105({ member895: 64 });
    var e = Class105({
        member895: 50,
        member898: function (n) {
            n.member510();
        },
        member897: function (n) {
            n.member511();
        }
    });
    d.member9978 = function () {
        return e;
    };
    var j = Class105({ member895: 5 });
    d.member9979 = function () {
        return j;
    };
    d.list = function (q) {
        var n = c.find(q);
        if (n === null) {
            var o = m.getFile(Class95.member821, Js5ConfigGroup.getGroupID(q, Js5ConfigGroup.SPOTTYPE.fileBits), Js5ConfigGroup.getFileID(q, Js5ConfigGroup.SPOTTYPE.fileBits), Priority.member840, Js5ConfigGroup.SPOTTYPE.priority);
            if (o === null) {
                return null;
            }
            n = EffectAnimType({
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
    d.member8696 = function () {
        c.member301();
    };
    var h = d.member8696;
    d.member8697 = function (n) {
        c.member905(n);
    };
    var g = d.member8697;
    k = undefined;
    return d;
};