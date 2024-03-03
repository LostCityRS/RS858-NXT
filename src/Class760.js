import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Class131 } from 'Class131.js';
import { Class96 } from 'Class96.js';
import { Class250 } from 'Class250.js';
import { Class734 } from 'Class734.js';
export var Class760 = function (q) {
    var e = {};
    var o = undefined;
    var m = undefined;
    var s = undefined;
    e.member2933 = function () {
        return s;
    };
    var r = null;
    var j = null;
    var k = 0;
    e.member2975 = function () {
        return k;
    };
    var c = Class105({ member895: 512 });
    var n = Class105({ member895: 512 });
    if (q.member2739 !== undefined && q.member3992 !== undefined && q.member995 !== undefined && q.member10262 !== undefined) {
        o = q.member2739;
        m = q.member3992;
        r = q.member995;
        s = q.member10262;
        var a = r.member1439(Class95.member820).member3896();
        k = a * Class131.member1262(Class131.member1216.member1210) + r.member1439(Class95.member820).member1440(a);
    } else {
        throw new Error('1758 ');
    }
    var i = function (x) {
        var u = c.find(x);
        if (u === member47) {
            var v = r.getFile(Class95.member820, Class131.member1263(x, Class131.member1216.member1210), Class131.member1264(x, Class131.member1216.member1210), Class96.member840, Class131.member1216.priority);
            if (v === member47) {
                return member47;
            }
            u = Class250(x, e);
            if (v !== undefined) {
                var t = u.decode(v);
                if (t === member47) {
                    return member47;
                }
            }
            u.member2934();
            c.put(u, 1, x);
        }
        return u;
    };
    e.list = i;
    if (true) {
        var d = function (u) {
            var t = n.find(u);
            if (t === null) {
                t = Class734(u, r, Class95.member806, Class95.member805);
                n.put(t, 1, u);
            }
            var v = Date.now();
            if (t.member10263 === undefined || t.member10263 < v - 5) {
                if (!t.member3250()) {
                    t.member10263 = v;
                    return null;
                } else {
                    t.member10263 = undefined;
                    return t;
                }
            } else {
                return null;
            }
        };
        e.member2940 = d;
        var b = function (v) {
            var t = d(v >>> 16);
            if (t !== null) {
                var u = t.member2914();
                return u[v & 65535];
            } else {
                return null;
            }
        };
        e.member2937 = b;
    } else {
    }
    var h = function () {
        c.member301();
        n.member301();
    };
    e.member8696 = h;
    var g = function (t) {
        c.member905(t * 10);
        n.member905(t * 10);
    };
    e.member8697 = g;
    q = undefined;
    return e;
};