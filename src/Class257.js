import { Class256 } from 'Class256.js';
import { Class255 } from 'Class255.js';
export var Class257 = function (b) {
    var r = {};
    var u = null;
    r.member2994 = function (n) {
        return u[n];
    };
    r.member2995 = function () {
        return u.length;
    };
    var s = null;
    if (b.data !== undefined) {
        var m = b.data;
        while (true) {
            var i = m.g1();
            if (i === 0) {
                break;
            } else if (i === 1) {
                var c = m.g1();
                u = new Array(c);
                for (var x = 0; x < c; x++) {
                    var o = m.g1();
                    var k = m.g2();
                    var a = m.g1();
                    var g = 0;
                    var e = Class256.member925;
                    var d = 1;
                    var j = (a & 1) !== 0;
                    if ((a & 2) !== 0) {
                        g = m.g1();
                    }
                    if ((a & 4) !== 0) {
                        e = s[m.g1()];
                    }
                    if ((a & 8) !== 0) {
                        d = m.g1s();
                    }
                    var h = m.g1() === 1;
                    u[o] = Class255({
                        id: o,
                        member2984: k,
                        member2981: j,
                        getActive: h,
                        member2986: g,
                        member2987: e,
                        member2988: d
                    });
                }
            } else if (i === 2) {
                s = new Array(m.g1());
                var v = m.g1();
                while (v !== 255) {
                    var e = new Array(m.g2());
                    for (var q = 0; q < e.length; q++) {
                        e[q] = m.g4();
                    }
                    s[v] = Class256({ member2987: e });
                    v = m.g1();
                }
            } else {
                throw new Error('1019 ' + i);
            }
        }
    } else {
        throw new Error('1020 ');
    }
    b = undefined;
    return r;
};