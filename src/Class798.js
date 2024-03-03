import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Class131 } from 'Class131.js';
import { Class443 } from 'Class443.js';
import { Class96 } from 'Class96.js';
import { Class790 } from 'Class790.js';
export var Class798 = function (i) {
    var s = {};
    var u = null;
    var t = null;
    var r;
    s.member8682 = function () {
        return r;
    };
    var q = null;
    var e = 0;
    s.member2975 = function () {
        return e;
    };
    var d = null;
    s.member7539 = function () {
        return d;
    };
    var n = null;
    s.member8687 = function () {
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
        r = i.member8693;
        q = i.member995;
        d = i.member2970;
        n = i.member8694;
        var v = q.member1439(Class95.member816).member3896();
        e = v * Class131.member1262(Class131.member1209.member1210) + q.member1439(Class95.member816).member1440(v);
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
            var C = q.getFile(Class95.member816, Class131.member1263(D, Class131.member1209.member1210), Class131.member1264(D, Class131.member1209.member1210), Class96.member840, Class131.member1209.priority);
            if (C === null) {
                return null;
            }
            B = Class790(D, s, x.slice(0));
            if (C !== undefined) {
                B.decode(C);
            }
            B.member2934();
            if (B.member10494) {
                B.member10490 = 0;
                B.member10491 = false;
            }
            if (!r && B.member8376) {
                B.member8602.length = 0;
                B.member8605 = null;
            }
            m.put(B, 1, D);
        }
        return B;
    };
    s.list = y;
    var A = function () {
        return r;
    };
    s.member8695 = function (B) {
        r = B;
        b();
    };
    s.member8682 = A;
    var k = function () {
        return q;
    };
    s.member7535 = k;
    var z = function () {
        return d;
    };
    s.member7539 = z;
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