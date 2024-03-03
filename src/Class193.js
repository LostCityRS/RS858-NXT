import { Class192 } from 'Class192.js';
import { Class169 } from 'Class169.js';
import { Class191 } from 'Class191.js';
export var Class193 = function (h) {
    var b = {};
    var i;
    var c;
    var j;
    if (h.request.member2233 !== undefined && h.request.member2234 !== undefined && h.request.member2235 !== undefined) {
        i = Class192(undefined, undefined, h.request.member2233);
        c = new Array(h.request.member2234.length);
        for (var a = 0; a < c.length; a++) {
            c[a] = Class169(undefined, undefined, h.request.member2234[a]);
        }
        j = h.request.member2235;
        if (false) {
        } else {
            b.name = '';
        }
    } else {
        throw new Error('1840 ');
    }
    var d = function (l, m, k) {
    };
    b.member2236 = d;
    var e = function (k) {
    };
    b.member2237 = e;
    var g = function (o, m) {
        i.member2232();
        var n = Class191.member2144(c, j, i);
        var l = new Array(0);
        var k = n.member681(l);
        return {
            member1658: k,
            member1659: l
        };
    };
    b.member78 = g;
    h = undefined;
    return b;
};