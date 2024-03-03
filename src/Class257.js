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
            var i = m.member609();
            if (i === 0) {
                break;
            } else if (i === 1) {
                var c = m.member609();
                u = new Array(c);
                for (var x = 0; x < c; x++) {
                    var o = m.member609();
                    var k = m.member608();
                    var a = m.member609();
                    var g = 0;
                    var e = Class256.member925;
                    var d = 1;
                    var j = (a & 1) !== 0;
                    if ((a & 2) !== 0) {
                        g = m.member609();
                    }
                    if ((a & 4) !== 0) {
                        e = s[m.member609()];
                    }
                    if ((a & 8) !== 0) {
                        d = m.member1070();
                    }
                    var h = m.member609() === 1;
                    u[o] = Class255({
                        id: o,
                        member2984: k,
                        member2981: j,
                        member2985: h,
                        member2986: g,
                        member2987: e,
                        member2988: d
                    });
                }
            } else if (i === 2) {
                s = new Array(m.member609());
                var v = m.member609();
                while (v !== 255) {
                    var e = new Array(m.member608());
                    for (var q = 0; q < e.length; q++) {
                        e[q] = m.member1073();
                    }
                    s[v] = Class256({ member2987: e });
                    v = m.member609();
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