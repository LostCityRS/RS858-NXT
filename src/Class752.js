import { Class433 } from 'Class433.js';
import { Class620 } from 'Class620.js';
import { Class741 } from 'Class741.js';
export var Class752 = function () {
    var b = {};
    var a;
    b.member25 = function (c) {
        a = c;
    };
    Class433.member6411.member6428 = function (c, g) {
        Class620.clear();
        var m = c.g1();
        for (var o = 0; o < m; o++) {
            var d = c.g4s();
            var n = Class741(d);
            Class620.member9287(n);
            var i = c.g1();
            for (var e = 0; e < i; e++) {
                n.member10190(c.g4s());
            }
            var k = c.g1();
            for (var e = 0; e < k; e++) {
                n.member10187(c.g4s());
            }
            for (var h = 0; h < i; h++) {
                n.member10186(h, c.g1() === 1);
                for (var j = 0; j < k; j++) {
                    if (c.g1() === 0) {
                        n.member10193(h, j, null);
                    } else {
                        n.member10193(h, j, c.g4s());
                    }
                }
            }
        }
    };
    Class433.member6412.member6428 = function (e, h) {
        var d = e.getPos();
        var g = e.g1s();
        while (g !== -1) {
            var i = e.g1s();
            while (i !== -1) {
                var c = e.g1s();
                while (c !== -1) {
                    Class620.member3995(g).member10193(i, c, e.g4s());
                    c = e.g1s();
                    if (d + h < e.getPos()) {
                        throw new Error('1392 ');
                    }
                }
                i = e.g1s();
            }
            g = e.g1s();
        }
    };
    Class433.member6413.member6428 = function (d, g) {
        var c = d.g4s_alt3();
        var e = d.g1s_alt1();
        Class620.member9287(Class741(c), e);
    };
    Class433.member6414.member6428 = function (c, e) {
        var d = c.g1_alt2();
        Class620.member3995(d).member10191(rowIndex);
    };
    Class433.member6415.member6428 = function (c, g) {
        var e = c.g4s_alt1();
        var h = c.g1s_alt1();
        var d = c.g1_alt3();
        Class620.member3995(d).member10190(e, h);
    };
    Class433.member6416.member6428 = function (c, e) {
        var d = c.g1_alt2();
        var g = c.g1();
        Class620.member3995(d).member10191(g);
    };
    Class433.member6417.member6428 = function (d, g) {
        var h = d.g1_alt2();
        var c = d.g1_alt2() == 1;
        var e = d.g1_alt2();
        Class620.member3995(e).member10186(h, c);
    };
    Class433.member6418.member6428 = function (e, h) {
        var g = e.g1();
        var c = e.g1();
        var d = e.g1_alt2();
        Class620.member3995(g).member10189(d, c);
    };
    Class433.member6419.member6428 = function (d, h) {
        var g = d.g4s_alt2();
        var e = d.g1_alt2();
        var c = d.g1s_alt2();
        Class620.member3995(e).member10187(g, c);
    };
    Class433.member6420.member6428 = function (d, g) {
        var c = d.g1();
        var e = d.g1_alt2();
        Class620.member3995(e).member10188(c);
    };
    Class433.member6421.member6428 = function (e, h) {
        var c = e.g1();
        var d = e.g1_alt1();
        var g = e.g1_alt3();
        Class620.member3995(g).member10192(d, c);
    };
    Class433.member6422.member6428 = function (d, g) {
        var h = d.g1_alt2();
        var e = d.g1_alt2();
        var c = d.g1_alt2();
        Class620.member3995(e).member10193(h, c, null);
    };
    return b;
}();