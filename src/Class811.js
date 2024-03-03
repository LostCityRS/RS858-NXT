import { Class165 } from 'Class165.js';
import { Class547 } from 'Class547.js';
import { Class131 } from 'Class131.js';
export var Class811 = function () {
    var e = {};
    var d;
    e.member25 = function (g) {
        d = g;
    };
    var b;
    var a = 0;
    e.member9749 = function () {
        if (b === undefined) {
            return -1;
        }
        if (a >= b.length) {
            return -1;
        }
        return b[a++];
    };
    e.member9750 = function () {
        a = 0;
    };
    e.member9748 = function () {
        if (b === undefined) {
            return -1;
        }
        return b.length;
    };
    e.member9747 = function (m, j) {
        m = m.toLowerCase();
        var o = [];
        var s = [];
        var r = d.member9744();
        var g = j ? r.member9881() : r.member2975();
        var i = j ? r.member2975() : 0;
        var n = i + g;
        for (var q = i; q < n; q++) {
            var k = r.member9882(q);
            if (!k.member8722) {
                continue;
            }
            if (k.text.toLowerCase().indexOf(m) === -1) {
                continue;
            }
            if (o.length >= 50) {
                b = undefined;
                a = 0;
                return;
            }
            var h = q;
            if (j) {
                h = q - i + r.member8729();
            }
            o.push(h);
            s.push(k.text);
        }
        Class165.member1787(c, s, o);
        b = o;
        a = 0;
    };
    e.member8730 = function (k, i, j) {
        if (k === Class547.member8701 || k === Class547.member8708 || k === Class547.member8709 || k === Class547.member8713) {
            var h = d.member3227(Class131.member1212.member1204, i[0]);
            if (h === member47) {
                return member47;
            }
            return h.member9450(j);
        }
        if (k === Class547.member8705 || k === Class547.member8712) {
            var g = d.member3227(Class131.member1214.member1204, j);
            if (g === member47) {
                return member47;
            }
            return g.getName();
        }
        return undefined;
    };
    var c = function (h, g) {
        return h.localeCompare(g);
    };
    return e;
}();