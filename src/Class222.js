import { Class220 } from 'Class220.js';
export var Class222 = function () {
    var a = function () {
        var e = {};
        var c = new Class220(false);
        var d = 0;
        var h = 0;
        e.member2718 = function () {
            return h;
        };
        var j = e.member2718;
        e.member2719 = function (k) {
            c.member2715(k);
            h += k.byteLength;
        };
        var i = e.member2719;
        e.getData = function (m, q) {
            if (h < q) {
                throw new Error('886 ');
            }
            var o = q;
            while (o > 0) {
                var n = c.member2717();
                var k = n.byteLength - d;
                if (o <= k) {
                    m.member1067(n, d, o);
                    d += o;
                    o = 0;
                } else {
                    m.member1067(n, d, k);
                    d += k;
                    o -= k;
                }
                if (d === n.byteLength) {
                    c.member2716();
                    d = 0;
                }
            }
            h -= q;
        };
        var b = e.getData;
        e.member301 = function () {
            c = Class220(false);
            d = 0;
            h = 0;
        };
        var g = e.member301;
        return e;
    };
    return a;
}();