import { Class433 } from 'Class433.js';
import { Class501 } from 'Class501.js';
import { Class299 } from 'Class299.js';
import { Class618 } from 'Class618.js';
export var Class714 = function () {
    var b = {};
    var a;
    var c = function (d) {
        a = d;
    };
    b.member25 = c;
    Class433.member6374.member6428 = function (i, j) {
        var e = i.member1073();
        var g = i.member1073();
        var h = a.member8252.member8259();
        var d = h.member8260(Class501.member8146);
        d.member2698.member1132(e);
        d.member2698.member1132(g);
        d.member2698.member1104(Class299.member3580());
        h.member8261(d);
    };
    Class433.member6381.member6428 = function (d, e) {
        a.member7140.member9997(d, e - 1);
    };
    if (true) {
        Class433.member6266.member6428 = function (d, g) {
            var e = d.member609();
            a.member9171.member9998(e % 3);
            if (e >= 3) {
                Class618.member9240(false);
            } else {
                Class618.member9240(true);
            }
        };
        Class433.member6356.member6428 = function (d, e) {
            a.member6101.member9075(d.member1108());
            a.member7620.member9780();
        };
        Class433.member6377.member6428 = function (d, e) {
            var g = d.member1089();
            a.member9219.member9620(g, false, false);
        };
        Class433.member6366.member6428 = function (e, g) {
            var d = e.member1107() === 1;
            a.member7620.member9780();
        };
    } else {
    }
    return b;
}();