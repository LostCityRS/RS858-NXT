import { Class140 } from 'Class140.js';
import { Class433 } from 'Class433.js';
import { Class416 } from 'Class416.js';
import { Class86 } from 'Class86.js';
import { Class742 } from 'Class742.js';
export var Class743 = function () {
    var b = {};
    var d = Class140.create();
    var c = new Float64Array(3);
    var a;
    var e = function (g) {
        a = g;
    };
    b.member25 = e;
    Class433.member6234.member6428 = function (g, h) {
        a.member6101.member9069().member6219(g, h, a);
        a.member7187.member9164();
    };
    Class433.member6235.member6428 = function (h, i) {
        var g = h.member609() === 1;
        a.member6101.member9072(g);
    };
    Class433.member6283.member6428 = function (g, h) {
        a.member6101.member7844(a.member6116.member6117().member7845());
        a.member7620.member9780();
    };
    Class433.member6284.member6428 = function (g, j) {
        var i = g.member1117();
        var h = g.member1117();
        Class416.member4789(h, i, 0, d);
        a.member6101.member9070().member8927(d);
        a.member7620.member9780();
    };
    Class433.member6280.member6428 = function (j, m) {
        var q = a.member6101.member6430();
        var n = j.member1108();
        var i = (j.member1108() + q.x) * Class86.member718 + Class86.member718 / 2;
        var h = (j.member609() + q.member756) * Class86.member718 + Class86.member718 / 2;
        var r = j.member1118() << Class86.member719;
        var o = j.member1108();
        var g = a.member6101.member9084(i, h);
        if (g === -1) {
            return true;
        }
        r += g;
        var k = a.member6101.member9068();
        a.member6101.member9071().member3650(c);
        if (k) {
            a.member6101.member9072(false);
        }
        a.member6101.member9070().moveTo(i, h, r, n, o, true, c);
        if (k) {
            a.member6101.member9069().member9024(c);
            a.member6101.member9070().member352(c[0], c[2], c[1], n, Class416.member4786, true, c);
        }
        a.member7620.member9780();
    };
    Class433.member6281.member6428 = function (j, m) {
        var q = a.member6101.member6430();
        var r = j.member608() << Class86.member719;
        var i = (j.member1108() + q.x) * Class86.member718 + Class86.member718 / 2;
        var n = j.member1108();
        var h = (j.member1108() + q.member756) * Class86.member718 + Class86.member718 / 2;
        var o = j.member1109();
        var g = a.member6101.member9084(i, h);
        if (g === -1) {
            return true;
        }
        r += g;
        var k = a.member6101.member9068();
        a.member6101.member9071().member9024(c);
        if (k) {
            a.member6101.member9072(false);
        }
        a.member6101.member9070().member352(i, h, r, n, o, true, c);
        if (k) {
            a.member6101.member9069().member3650(c);
            a.member6101.member9070().moveTo(c[0], c[2], c[1], n, Class416.member4786, true, c);
        }
        a.member7620.member9780();
    };
    Class433.member6299.member6428 = function (g, h) {
        if (a.member6116.member6117().member7845()) {
            a.member6101.member9074();
        } else {
            if (!a.member6101.member9070().member3590()) {
                return;
            }
            a.member6101.member9070().member9055(a.member7135().member6453(), a.member6116.member7139());
        }
        a.member7620.member9780();
    };
    Class433.member6282.member6428 = function (h, m) {
        var j = h.member608();
        var g = h.member609();
        var i = h.member1108();
        var o = h.member1107();
        var n = h.member1107();
        var q = {
            member3701: i,
            random: g,
            member4735: o,
            member8970: n,
            position: j
        };
        var k = Class742(q);
        a.member6101.member9070().member9003(k);
        a.member7620.member9780();
    };
    Class433.member6285.member6428 = function (h, i) {
        var g = h.member1073();
        a.member6101.member3959(g !== -1);
        a.member7620.member9780();
    };
    return b;
}();