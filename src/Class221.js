import { Packet } from 'Class124.js';
export var Class221 = function () {
    var a = function (m) {
        var d = {};
        var n;
        var b;
        var k = 0, i = 0;
        var c = 0;
        if (m.size !== undefined) {
            n = m.size;
            b = Packet(n);
        } else {
            throw new Error('1786 ');
        }
        d.member2718 = function () {
            return c;
        };
        var j = d.member2718;
        d.member2719 = function (q, o) {
            if (o > n) {
                throw new Error('1787 ' + o);
            }
            if (n - c < o) {
                throw new Error('1788 ');
            }
            if (i >= k) {
                if (i + o > n) {
                    b.member1067(q, 0, n - i);
                    b.setPos(0);
                    b.member1067(q, n - i, o - (n - i));
                    i = o - (n - i);
                } else {
                    b.member1067(q, 0, o);
                    i += o;
                }
            } else {
                b.member1067(q, 0, o);
                i += o;
            }
            c += o;
        };
        var h = d.member2719;
        d.getData = function (o, q) {
            if (c < q) {
                throw new Error('1789 ');
            }
            if (k > i) {
                if (k + q > n) {
                    o.member1067(b.getData(), k, n - k);
                    o.member1067(b.getData(), 0, q - (n - k));
                    k = q - (n - k);
                } else {
                    o.member1067(b.getData(), k, q);
                    k += q;
                }
            } else {
                o.member1067(b.getData(), k, q);
                k += q;
            }
            c -= q;
        };
        var e = d.getData;
        d.member301 = function () {
            k = i = c = 0;
            b.setPos(0);
        };
        var g = d.member301;
        m = undefined;
        return d;
    };
    return a;
}();