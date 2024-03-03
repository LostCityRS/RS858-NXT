import { Class562 } from 'Class562.js';
import { Class467 } from 'Class467.js';
export var Class750 = function () {
    var a = function (b) {
        var e = Class562(b);
        var g;
        var d;
        var c;
        if (b.member10211 !== undefined && b.member6450 !== undefined && b.member7887 !== undefined) {
            g = b.member10211;
            d = b.member6450;
            c = b.member7887;
        } else {
            throw new Error('866 ');
        }
        e.member8802 = function () {
            var h = d.member6451(g);
            if (h !== undefined) {
                c.member9229(Class467.member7422, e.member6719(), -1, h, g);
                return true;
            }
            return false;
        };
        b = undefined;
        return e;
    };
    return a;
}();