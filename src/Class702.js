import { Class254 } from 'Class254.js';
import { Class465 } from 'Class465.js';
export var Class702 = function (k) {
    var h = {};
    var j;
    var g;
    var i;
    h.member2949 = function () {
        return i;
    };
    var c;
    var m;
    if (k.member625 !== undefined && k.member2896 !== undefined) {
        j = k.member625;
        g = k.member2896;
    } else {
        throw new Error('861 ');
    }
    var a = function (s, q) {
        while (true) {
            var t = s.member609();
            if (t == 0) {
                break;
            }
            if (t === Class254.member2979.serialID) {
                var r = s.member609();
                var o = Class465.getByID(r);
                if (o === null) {
                    throw new Error('862 ' + r);
                }
                var n = s.member1086();
                i = q.member7393(o, n);
                if (i === member47) {
                    return false;
                }
            } else if (t === Class254.member2980.serialID) {
                c = s.member609();
                m = s.member609();
            } else {
                throw new Error('863 ' + t);
            }
        }
        return true;
    };
    h.decode = a;
    var e = function (n) {
        var o = g.member9927[m - c];
        return n >> c & o;
    };
    h.member2948 = e;
    var d = function (n, q) {
        var o = g.member9927[m - c];
        if (q < 0 || q > o) {
            throw new Error('864 ' + q + '864 ' + o);
        }
        o <<= c;
        return n & ~o | q << c & o;
    };
    h.member2951 = d;
    var b = function () {
        return j;
    };
    h.member682 = b;
    k = undefined;
    return h;
};