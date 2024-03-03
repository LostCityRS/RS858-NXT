import { Class433 } from 'Class433.js';
export var Class753 = function () {
    var b = {};
    var a;
    var c = function (d) {
        a = d;
    };
    b.member25 = c;
    Class433.member6240.member6428 = function (g, j) {
        var k = g.g2();
        var e = g.g1();
        var i = (e & 1) === 1;
        var d = a.member9208.member7552(k, i);
        if (d === null) {
            d = a.member9208.member8478(k, i);
        }
        while (g.getPos() < j) {
            var m = g.gSmart1or2();
            var n = g.g2();
            var h = 0;
            if (n !== 0) {
                h = g.g1();
                if (h === 255) {
                    h = g.g4();
                }
            }
            d.member8477(m, n - 1, h);
        }
        a.member7187.member9146(k);
    };
    Class433.member6241.member6428 = function (g, j) {
        var k = g.g2();
        var e = g.g1();
        var i = (e & 1) === 1;
        var d = a.member9208.member8478(k, i);
        var n = g.g2();
        for (var m = 0; m < n; m++) {
            var o = g.g2_alt3();
            var h = g.g1_alt1();
            if (h === 255) {
                h = g.g4_alt1();
            }
            d.member8477(m, o - 1, h);
        }
        a.member7187.member9146(k);
    };
    Class433.member6269.member6428 = function (g, i) {
        var e = g.g2();
        var d = g.g1();
        var h = (d & 1) === 1;
        a.member9208.member8479(e, h);
        a.member7187.member9146(e);
    };
    Class433.member6290.member6428 = function (d, e) {
        a.member9753.member3295(d);
    };
    return b;
}();