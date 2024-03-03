import { Class41 } from 'Class41.js';
import { Class174 } from 'Class174.js';
export var Class187 = function () {
    var a = function (r) {
        var e = {};
        var d = null;
        e.member1719 = function () {
            return d;
        };
        var g = null;
        e.member1720 = function () {
            return g;
        };
        var c = undefined;
        e.member1722 = function () {
            return c;
        };
        var b = 4294967295;
        var s = undefined;
        e.member1723 = function () {
            return s;
        };
        var q = undefined;
        e.member1724 = function () {
            return q;
        };
        var n = 0;
        e.member1721 = function () {
            return n;
        };
        var j = 4294967295;
        e.member600 = function () {
            return j;
        };
        var o = 1, m = 1;
        var k = 0, i = 0;
        var h = 0;
        if (r.member2070 !== undefined && r.member1594 !== undefined && r.member1595 !== undefined && r.member1596 !== undefined && r.member1924 !== undefined && r.member2071 !== undefined) {
            d = r.member2070;
            g = new Float32Array(3);
            Class41.add(r.member1594, r.member1595, g);
            Class41.add(g, r.member1596, g);
            Class41.scale(g, 1 / 3);
            c = r.member2011;
            b = r.member1924;
            s = r.member2072;
            q = r.member2073;
            n = r.member2071;
            j = b;
        } else if (r.member680 !== undefined) {
            d = Class174.member1719(r.member680.member2074);
            g = r.member680.member2075;
            c = r.member680.member2011 === -1 ? undefined : r.member680.member2011;
            b = r.member680.member1924;
            s = r.member680.member2072;
            q = r.member680.member2073;
            j = b;
        } else {
            throw new Error('881 ');
        }
        e.member681 = function () {
            return {
                member2074: d.member682(),
                member2075: g,
                member2011: c === undefined ? -1 : c,
                member1924: b,
                member2072: s,
                member2073: q
            };
        };
        r = undefined;
        return e;
    };
    return a;
}();