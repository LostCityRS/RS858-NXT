import { Class635 } from 'Class635.js';
import { Class564 } from 'Class564.js';
import { Class501 } from 'Class501.js';
export var Class678 = function () {
    var b = {};
    var a;
    var c = function (d) {
        a = d;
    };
    b.member25 = c;
    Class635.member6817.member867 = function (d) {
    };
    Class635.member9488.member867 = function (g) {
        var e = a.member7619;
        var d = g.member9529();
        var h = g.member9530();
        var i = e.member7745().member7105(h, d);
        if (i === null) {
            return;
        }
        e.member7640();
        e.member7641(i, i.member6770() + '<col=ffffff>');
    };
    Class635.member9489.member867 = function (g) {
        var e = a.member7619;
        if (e.member7463() === null) {
            var d = g.member9529();
            var h = g.member9530();
            var i = e.member7745().member7105(h, d);
            e.member7464(i);
            e.member7465();
        }
    };
    Class635.member9500.member867 = Class635.member9506.member867 = function (i) {
        var d = i.member9531();
        var h = i.member9539();
        var g = i.member9529();
        var j = i.member9530();
        var e = a.member7619;
        var k = e.member7745().member7105(j, g);
        e.member7638(k, j, g, d, h);
    };
    Class635.member8065.member867 = function (o) {
        var n = a.member7619;
        if (!n.member8851()) {
            return;
        }
        var g = o.member9529();
        var h = o.member9530();
        var j = n.member7745().member7105(h, g);
        if (j === null) {
            return;
        }
        var k = j.member6792();
        if (k !== undefined && k.member6572() !== null) {
            var e = n.member7745().member7105(n.member9247(), n.member9248());
            if (e !== null) {
                var m = Class564(k.member6572(), j.member6725(), j, e);
                a.member7887.member9276(m);
            }
        }
        var d = a.member8252.member8259();
        if (d === undefined) {
            return;
        }
        var i = d.member8260(Class501.member8065);
        i.packet.p2_alt1(n.member9248());
        i.packet.p2_alt1(j.member6807());
        i.packet.p4_alt2(n.member9247());
        i.packet.p4(h);
        i.packet.p2_alt1(g);
        i.packet.p2(n.member9249());
        d.member8261(i);
    };
    return b;
}();