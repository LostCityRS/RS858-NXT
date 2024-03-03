import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Class96 } from 'Class96.js';
import { Class550 } from 'Class550.js';
export var Class731 = function (o) {
    var d = {};
    var m;
    var j;
    var q;
    var i = 0;
    d.member2975 = function () {
        return i;
    };
    var a = 0;
    d.member9881 = function () {
        return a;
    };
    var b = Class105({ member895: 512 });
    var k = 0;
    var c = 32768;
    d.member8729 = function () {
        return c;
    };
    var n = c - 1;
    if (o.member2739 !== undefined && o.member3992 !== undefined && o.member995 !== undefined) {
        m = o.member2739;
        j = o.member3992;
        q = o.member995;
        i = q.member1439(Class95.member824).member1440(k);
        a = q.member1439(Class95.member825).member1440(k);
    } else {
        throw new Error('1000 ');
    }
    var h = function (u) {
        var t = b.find(u);
        if (t === member47) {
            var r = u >= c;
            var s;
            if (r) {
                s = q.getFile(Class95.member825, k, u & n, Class96.member840);
            } else {
                s = q.getFile(Class95.member824, k, u, Class96.member840);
            }
            if (s === member47) {
                return member47;
            }
            t = Class550(u, d);
            if (s !== undefined) {
                t.decode(s);
                t.member2934();
            }
            b.put(t, 1, u);
        }
        return t;
    };
    d.list = h;
    var g = function () {
        b.member301();
    };
    d.member8696 = g;
    var e = function (r) {
        b.member905(r * 10);
    };
    d.member8697 = e;
    o = undefined;
    return d;
};