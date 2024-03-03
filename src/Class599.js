import { Class143 } from 'Class143.js';
export var Class599 = function () {
    var d = {};
    var c = 7;
    var b = 127;
    var a = 64;
    d.member9089 = function () {
        return a;
    };
    var g = 8;
    var e = 128;
    d.member9090 = function (o, m, k, h) {
        var q = c;
        var s = b;
        for (var r = a - 1; r >= 0; r--) {
            var j = (r << 10) + (q << 7) + s;
            var i = Class143.member1442(j);
            var n = (i << 8) + 255;
            h.member3796(o, m + ((a - 1 - r) * k.member6754() >> 6), k.member6752(), (k.member6754() >> 6) + 1, n, true);
        }
    };
    d.member9091 = function (q, n, m, k, h) {
        for (var r = g - 1; r >= 0; r--) {
            for (var s = e - 1; s >= 0; s--) {
                var j = ((k & a - 1) << 10) + (r << 7) + s;
                var i = Class143.member1442(j);
                var o = (i << 8) + 255;
                h.member3796(q + (s * m.member6752() >> 7), n + ((g - 1 - r) * m.member6754() >> 3), (m.member6752() >> 7) + 1, (m.member6754() >> 3) + 1, o, true);
            }
        }
    };
    return d;
}();