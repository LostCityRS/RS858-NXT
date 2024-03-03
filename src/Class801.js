import { Class531 } from 'Class531.js';
import { Class377 } from 'Class377.js';
import { Class776 } from 'Class776.js';
export var Class801 = function () {
    var a = function (c) {
        var d = Class531({
            member7710: c,
            member8500: false
        });
        var b = c;
        d.member9906 = function (j, i, g) {
            var e = d.member8495(j);
            if (e === null) {
                var k = Class377();
                var h = b.member6444.member6445();
                e = Class776({
                    node: k,
                    parent: null,
                    member4070: h,
                    member7710: b,
                    member10414: j
                });
                k.member4185(e);
                d.member8494(e);
            }
            e.member8494(i, g);
        };
        d.member9907 = function (h, g) {
            for (var e = d.member776(); e !== undefined; e = d.member777()) {
                if (h.member2969(e.member8493())) {
                    e.member8496(g);
                    if (e.member10416()) {
                        e.member512();
                        d.remove();
                    }
                    return;
                }
            }
            if (false) {
            }
        };
        d.member9908 = function (j, h, g, i) {
            var e = d.member8495(j);
            if (e === null) {
                throw new Error('1566 ');
            }
            e.member9908(h, g, i);
        };
        return d;
    };
    return a;
}();