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
        var m = c.member609();
        for (var o = 0; o < m; o++) {
            var d = c.member1074();
            var n = Class741(d);
            Class620.member9287(n);
            var i = c.member609();
            for (var e = 0; e < i; e++) {
                n.member10190(c.member1074());
            }
            var k = c.member609();
            for (var e = 0; e < k; e++) {
                n.member10187(c.member1074());
            }
            for (var h = 0; h < i; h++) {
                n.member10186(h, c.member609() === 1);
                for (var j = 0; j < k; j++) {
                    if (c.member609() === 0) {
                        n.member10193(h, j, null);
                    } else {
                        n.member10193(h, j, c.member1074());
                    }
                }
            }
        }
    };
    Class433.member6412.member6428 = function (e, h) {
        var d = e.member1047();
        var g = e.member1070();
        while (g !== -1) {
            var i = e.member1070();
            while (i !== -1) {
                var c = e.member1070();
                while (c !== -1) {
                    Class620.member3995(g).member10193(i, c, e.member1074());
                    c = e.member1070();
                    if (d + h < e.member1047()) {
                        throw new Error('1392 ');
                    }
                }
                i = e.member1070();
            }
            g = e.member1070();
        }
    };
    Class433.member6413.member6428 = function (d, g) {
        var c = d.member1139();
        var e = d.member1110();
        Class620.member9287(Class741(c), e);
    };
    Class433.member6414.member6428 = function (c, e) {
        var d = c.member1108();
        Class620.member3995(d).member10191(rowIndex);
    };
    Class433.member6415.member6428 = function (c, g) {
        var e = c.member1137();
        var h = c.member1110();
        var d = c.member1109();
        Class620.member3995(d).member10190(e, h);
    };
    Class433.member6416.member6428 = function (c, e) {
        var d = c.member1108();
        var g = c.member609();
        Class620.member3995(d).member10191(g);
    };
    Class433.member6417.member6428 = function (d, g) {
        var h = d.member1108();
        var c = d.member1108() == 1;
        var e = d.member1108();
        Class620.member3995(e).member10186(h, c);
    };
    Class433.member6418.member6428 = function (e, h) {
        var g = e.member609();
        var c = e.member609();
        var d = e.member1108();
        Class620.member3995(g).member10189(d, c);
    };
    Class433.member6419.member6428 = function (d, h) {
        var g = d.member1138();
        var e = d.member1108();
        var c = d.member1111();
        Class620.member3995(e).member10187(g, c);
    };
    Class433.member6420.member6428 = function (d, g) {
        var c = d.member609();
        var e = d.member1108();
        Class620.member3995(e).member10188(c);
    };
    Class433.member6421.member6428 = function (e, h) {
        var c = e.member609();
        var d = e.member1107();
        var g = e.member1109();
        Class620.member3995(g).member10192(d, c);
    };
    Class433.member6422.member6428 = function (d, g) {
        var h = d.member1108();
        var e = d.member1108();
        var c = d.member1108();
        Class620.member3995(e).member10193(h, c, null);
    };
    return b;
}();