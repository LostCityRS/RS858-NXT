import { Class562 } from 'Class562.js';
import { CoordFine } from 'Class290.js';
import { Class86 } from 'Class86.js';
import { Class467 } from 'Class467.js';
export var Class748 = function () {
    var a = function (c) {
        var g = Class562(c);
        var e;
        var b;
        var h;
        var d;
        if (c.member7907 !== undefined && c.position !== undefined && c.member9078 !== undefined && c.member7887 !== undefined) {
            e = c.member7907;
            b = CoordFine({
                level: c.position.level,
                x: c.position.x * Class86.member718,
                member756: c.position.member756 * Class86.member718
            });
            h = c.member9078;
            d = c.member7887;
        } else {
            throw new Error('1422 ');
        }
        g.member8802 = function () {
            var i = h.member8495(b);
            if (i !== null && i.member890() > 0) {
                d.member9763(Class467.member7425, g.member6719(), -1, i);
                return true;
            }
            return false;
        };
        c = undefined;
        return g;
    };
    return a;
}();