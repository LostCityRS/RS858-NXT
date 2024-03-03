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
        var e = i.g4();
        var g = i.g4();
        var h = a.member8252.member8259();
        var d = h.member8260(Class501.member8146);
        d.packet.p4_alt2(e);
        d.packet.p4_alt2(g);
        d.packet.p1_alt1(Class299.member3580());
        h.member8261(d);
    };
    Class433.member6381.member6428 = function (d, e) {
        a.member7140.member9997(d, e - 1);
    };
    if (true) {
        Class433.member6266.member6428 = function (d, g) {
            var e = d.g1();
            a.member9171.member9998(e % 3);
            if (e >= 3) {
                Class618.member9240(false);
            } else {
                Class618.member9240(true);
            }
        };
        Class433.member6356.member6428 = function (d, e) {
            a.member6101.member9075(d.g1_alt2());
            a.delayedStateChange.incrementVerifyID();
        };
        Class433.member6377.member6428 = function (d, e) {
            var g = d.gjstr();
            a.member9219.member9620(g, false, false);
        };
        Class433.member6366.member6428 = function (e, g) {
            var d = e.g1_alt1() === 1;
            a.delayedStateChange.incrementVerifyID();
        };
    } else {
    }
    return b;
}();