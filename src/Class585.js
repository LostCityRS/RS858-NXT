import { Class41 } from 'Class41.js';
import { Class582 } from 'Class582.js';
import { Class299 } from 'Class299.js';
import { Class584 } from 'Class584.js';
import { Class49 } from 'Class49.js';
export var Class585 = function () {
    var a = function (m) {
        var b = {};
        var g = Class41.create();
        var h = Class582.member8942;
        b.member8967 = function () {
            return h;
        };
        var j;
        b.member8968 = function () {
            return j;
        };
        var c;
        var k;
        var i;
        var e = 0;
        b.member4224 = function (n) {
            e += i * n / Class299.member3571;
        };
        b.apply = function (n) {
            var o = Math.sin(e) * k;
            switch (c) {
            case Class584.member8959:
                g[0] = o;
                g[1] = 0;
                g[2] = 0;
                Class49.translate(n, g);
                break;
            case Class584.member8960:
                g[0] = 0;
                g[1] = o;
                g[2] = 0;
                Class49.translate(n, g);
                break;
            case Class584.member8961:
                g[0] = 0;
                g[1] = 0;
                g[2] = o;
                Class49.translate(n, g);
                break;
            case Class584.member8962:
                Class49.member345(n, o);
                break;
            case Class584.member8963:
                Class49.member346(n, o);
                break;
            case Class584.member8964:
                Class49.member347(n, o);
                break;
            }
        };
        b.member6219 = function (n) {
            c = n.g1();
            k = n.gFloat();
            i = n.gFloat();
        };
        var d = b.member6219;
        if (m.member8969 !== undefined && m.member3701 !== undefined && m.member4735 !== undefined && m.member8970 !== undefined) {
            j = m.member8969;
            c = m.member3701;
            k = m.member4735;
            i = m.member8970;
        } else if (m.member8969 !== undefined && m.member3456 !== undefined) {
            j = m.member8969;
            d(m.member3456);
        } else {
            throw new Error('1348 ');
        }
        m = undefined;
        return b;
    };
    return a;
}();