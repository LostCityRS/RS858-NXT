import { Class433 } from 'Class433.js';
export var Class753 = function () {
    var b = {};
    var a;
    var c = function (d) {
        a = d;
    };
    b.member25 = c;
    Class433.member6240.member6428 = function (g, j) {
        var k = g.member608();
        var e = g.member609();
        var i = (e & 1) === 1;
        var d = a.member9208.member7552(k, i);
        if (d === null) {
            d = a.member9208.member8478(k, i);
        }
        while (g.member1047() < j) {
            var m = g.member1078();
            var n = g.member608();
            var h = 0;
            if (n !== 0) {
                h = g.member609();
                if (h === 255) {
                    h = g.member1073();
                }
            }
            d.member8477(m, n - 1, h);
        }
        a.member7187.member9146(k);
    };
    Class433.member6241.member6428 = function (g, j) {
        var k = g.member608();
        var e = g.member609();
        var i = (e & 1) === 1;
        var d = a.member9208.member8478(k, i);
        var n = g.member608();
        for (var m = 0; m < n; m++) {
            var o = g.member1118();
            var h = g.member1107();
            if (h === 255) {
                h = g.member1134();
            }
            d.member8477(m, o - 1, h);
        }
        a.member7187.member9146(k);
    };
    Class433.member6269.member6428 = function (g, i) {
        var e = g.member608();
        var d = g.member609();
        var h = (d & 1) === 1;
        a.member9208.member8479(e, h);
        a.member7187.member9146(e);
    };
    Class433.member6290.member6428 = function (d, e) {
        a.member9753.member3295(d);
    };
    return b;
}();