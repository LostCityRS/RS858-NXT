import { Class562 } from 'Class562.js';
import { Class86 } from 'Class86.js';
import { Class467 } from 'Class467.js';
export var Class712 = function () {
    var a = function (k) {
        var h = Class562(k);
        var b;
        var i;
        var g;
        var d;
        var c;
        var e;
        var j;
        if (k.member9995 !== undefined && k.member6444 !== undefined && k.member7887 !== undefined) {
            b = k.member9995;
            e = k.member6444;
            j = k.member7887;
            i = Math.floor(b.member4597() / Class86.member729);
            g = Math.floor(b.member4598() / Class86.member729);
            d = b.member4597() % Class86.member729;
            c = b.member4598() % Class86.member729;
        } else {
            throw new Error('1556 ');
        }
        h.member8802 = function () {
            var m = e.member6445();
            if (m !== null) {
                var q = m.member8344(i, g);
                if (q !== undefined) {
                    var n = q.member4853(d, c);
                    if (n !== undefined && n !== null) {
                        var o = n.member4608(b);
                        if (o !== null) {
                            j.member9762(Class467.member7424, h.member6719(), -1, o);
                            return true;
                        }
                    }
                }
            }
            return false;
        };
        k = undefined;
        return h;
    };
    return a;
}();