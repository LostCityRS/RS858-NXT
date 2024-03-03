import { Class143 } from 'Class143.js';
export var Class762 = function () {
    var a = 74;
    return function (i) {
        var r = {};
        var u;
        var b = -1;
        if (i.member625 !== undefined && i.member2896 !== undefined) {
            b = i.member625;
            u = i.member2896;
        } else {
            throw new Error('1102 ');
        }
        var q = 0;
        r.member600 = function () {
            return q;
        };
        var y = -1;
        r.member701 = function () {
            return y;
        };
        var x = 1;
        r.member10110 = function () {
            return x;
        };
        var c = 0;
        r.member10264 = function () {
            return c;
        };
        var t = 8;
        r.member2703 = function () {
            return t;
        };
        var v = false;
        r.member10265 = function () {
            return v;
        };
        var s = true;
        var e = 0;
        var g = 64;
        var j = 255;
        var z = 63;
        var d = 0;
        var k = 64;
        var h = function () {
            return {
                member625: b,
                member546: q,
                member10266: c,
                member651: y,
                member743: x,
                priority: t,
                member10267: v,
                member2526: s
            };
        };
        r.member681 = h;
        var n = function (B) {
            while (true) {
                var A = B.member609();
                if (A === undefined) {
                    throw new Error('1103 ');
                    break;
                }
                if (A === 0) {
                    break;
                }
                m(B, A);
            }
        };
        r.decode = n;
        var m = function (D, C) {
            if (C === 1) {
                var B = D.g3();
                if (B === 16711935) {
                    q = 0;
                } else {
                    q = o(B);
                }
            } else if (C === 2) {
                y = D.member609();
            } else if (C === 3) {
                y = D.member608();
                if (y === 65535) {
                    y = -1;
                }
            } else if (C === 5) {
            } else if (C === 7) {
                var A = D.g3();
                if (A === 16711935) {
                    c = 0;
                } else {
                    c = o(A);
                }
            } else if (C === 8) {
            } else if (C === 9) {
                x = D.member608() / 128;
            } else if (C === 10) {
                s = false;
            } else if (C === 11) {
                t = D.member609();
            } else if (C === 12) {
                v = true;
            } else if (C === 13) {
                e = D.g3();
            } else if (C === 14) {
                g = D.member609() * 4;
            } else if (C === 16) {
                j = D.member609();
            } else if (C === 20) {
                z = D.member608();
            } else if (C === 21) {
                d = D.member609();
            } else if (C === 22) {
                k = D.member608();
            } else if (false) {
            }
        };
        var o = function (B) {
            var A = Class143.member1443(B);
            A = (A & 127) * a / 127 | A & ~127;
            return Class143.member1441(A) << 8 | 255;
        };
        i = undefined;
        return r;
    };
}();