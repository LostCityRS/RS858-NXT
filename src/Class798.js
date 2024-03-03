import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Js5ConfigGroup } from 'Class131.js';
import { Class443 } from 'Class443.js';
import { Priority } from 'Class96.js';
import { LocType } from 'Class790.js';
export var LocTypeList = function (i) {
    var s = {};
    var u = null;
    var t = null;
    var allowMembers;
    s.getAllowMembers = function () {
        return allowMembers;
    };
    var q = null;
    var e = 0;
    s.member2975 = function () {
        return e;
    };
    var d = null;
    s.getVarTypeProvider = function () {
        return d;
    };
    var n = null;
    s.getVarValueProvider = function () {
        return n;
    };
    var m = Class105({ member895: 2048 });
    var o = Class105({
        member895: 1000,
        member898: function (B) {
            B.member2621.member510();
        },
        member897: function (B) {
            B.member2621.member511();
        }
    });
    var j = Class105({ member895: 100 });
    var x;
    if (i.member2739 !== undefined && i.member3992 !== undefined && i.member8693 !== undefined && i.member995 !== null && i.member2970 !== undefined && i.member8694 !== undefined) {
        u = i.member2739;
        t = i.member3992;
        allowMembers = i.member8693;
        q = i.member995;
        d = i.member2970;
        n = i.member8694;
        var v = q.member1439(Class95.member816).member3896();
        e = v * Js5ConfigGroup.getFileBits(Js5ConfigGroup.LOCTYPE.fileBits) + q.member1439(Class95.member816).member1440(v);
        x = [
            null,
            null,
            null,
            null,
            null,
            Class443.member6944[t.id]
        ];
    } else {
        throw new Error('868 ');
    }
    var y = function (D) {
        var B = m.find(D);
        if (B === null) {
            var C = q.getFile(Class95.member816, Js5ConfigGroup.getGroupID(D, Js5ConfigGroup.LOCTYPE.fileBits), Js5ConfigGroup.getFileID(D, Js5ConfigGroup.LOCTYPE.fileBits), Priority.member840, Js5ConfigGroup.LOCTYPE.priority);
            if (C === null) {
                return null;
            }
            B = LocType(D, s, x.slice(0));
            if (C !== undefined) {
                B.decode(C);
            }
            B.postDecode();
            if (B.breakroutefinding) {
                B.blockwalk = 0;
                B.blockrange = false;
            }
            if (!allowMembers && B.members) {
                B.op.length = 0;
                B.quest = null;
            }
            m.put(B, 1, D);
        }
        return B;
    };
    s.list = y;
    var A = function () {
        return allowMembers;
    };
    s.member8695 = function (B) {
        allowMembers = B;
        b();
    };
    s.getAllowMembers = A;
    var k = function () {
        return q;
    };
    s.member7535 = k;
    var z = function () {
        return d;
    };
    s.getVarTypeProvider = z;
    var h = function () {
        return o;
    };
    s.member10508 = h;
    var g = function () {
        return j;
    };
    s.member10509 = g;
    var c = function (B) {
        buildingCount = B;
    };
    s.member10514 = c;
    var b = function () {
        m.member301();
        o.member301();
        j.member301();
    };
    s.member8696 = b;
    var a = function (B) {
        m.member905(B);
        o.member905(B);
        j.member905(B);
    };
    s.member8697 = a;
    i = undefined;
    return s;
};