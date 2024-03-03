import { Class562 } from 'Class562.js';
import { Class467 } from 'Class467.js';
export var Class749 = function () {
    var a = function (d) {
        var g = Class562(d);
        var c;
        var b;
        var e;
        if (d.member10210 !== undefined && d.member6452 !== undefined && d.member7887 !== undefined) {
            c = d.member10210;
            b = d.member6452;
            e = d.member7887;
        } else {
            throw new Error('914 ');
        }
        g.member8802 = function () {
            var h = b.member6453(c);
            if (h !== undefined) {
                e.member9229(Class467.member7423, g.member6719(), -1, h, c);
                return true;
            }
            return false;
        };
        d = undefined;
        return g;
    };
    return a;
}();