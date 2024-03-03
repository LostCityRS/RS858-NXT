import { Class433 } from 'Class433.js';
export var Class456 = function () {
    var b = {};
    var a;
    var c = function (d) {
        a = d;
    };
    b.member25 = c;
    Class433.member6251.member6428 = function (j, n) {
        var m = a.member7259;
        while (j.getPos() < n) {
            var e = j.g1();
            var i = (e & 1) === 1;
            var r = (e & 2) === 2;
            var d = j.gjstr();
            var q = j.gjstr();
            var h = j.gjstr();
            var o = true;
            for (var k = 0; k < m.member7238(); k++) {
                var g = m.member7235(k);
                if (i && m.member7257(q, g.member7233)) {
                    g.member7233 = d;
                    g.member7234 = q;
                    g.member7260 = h;
                    o = false;
                    break;
                } else if (m.member7257(d, g.member7233)) {
                    g.member7233 = d;
                    g.member7234 = q;
                    g.member7260 = h;
                    o = false;
                    break;
                }
            }
            if (o && m.member7238() < m.member7239) {
                m.member7236({
                    member7233: d,
                    member7234: q,
                    member7260: h,
                    temp: r
                });
            }
        }
        a.member7187.member7261();
        m.member7255();
    };
    return b;
}();