import { Class421 } from 'Class421.js';
import { Class501 } from 'Class501.js';
import { Class124 } from 'Class124.js';
export var Class647 = function () {
    var c = {};
    var a;
    var d = function (e) {
        a = e;
    };
    c.member25 = d;
    Class421.member5413.member867 = function (g) {
        var h = g.member6100[--g.member6099];
        g.member6143 -= 2;
        var i = g.member6142[g.member6143];
        var e = g.member6142[g.member6143 + 1];
        if (i.length > 500) {
            return;
        }
        if (e.length > 500) {
            return;
        }
        b(h, i, e);
    };
    var b = function (i, j, g) {
        if (a.member8252.member8259() !== undefined) {
            var h = a.member8252.member8259();
            var e = h.member8260(Class501.member8147);
            e.member2698.member1054(1 + Class124.member1152(j, true) + Class124.member1152(g, true));
            e.member2698.member1065(g, true);
            e.member2698.member1065(j, true);
            e.member2698.member1106(i);
            h.member8261(e);
        }
    };
    return c;
}();