import { Class41 } from 'Class41.js';
import { Class49 } from 'Class49.js';
import { Class582 } from 'Class582.js';
import { Class299 } from 'Class299.js';
import { Class584 } from 'Class584.js';
import { Class415 } from 'Class415.js';
export var Class742 = function () {
    var a = function (o) {
        var d = {};
        var q = [
            0,
            0,
            1
        ];
        var h = Class41.create();
        var i = Class41.create();
        var c = Class49.create();
        var j = Class582.member8941;
        d.member8967 = function () {
            return j;
        };
        var n;
        d.member8968 = function () {
            return n;
        };
        var e;
        var m;
        var k;
        var g;
        var b;
        d.member4224 = function (r) {
            g += r / Class299.member3571;
        };
        d.apply = function (r) {
            var t = Math.sin(g * (k / 100)) * m;
            t += Math.random() * (b * 2 + 1) - b;
            switch (e) {
            case Class584.member8959:
                h[0] = t;
                h[1] = 0;
                h[2] = 0;
                Class49.translate(r, h);
                break;
            case Class584.member8960:
                h[0] = 0;
                h[1] = t;
                h[2] = 0;
                Class49.translate(r, h);
                break;
            case Class584.member8961:
                h[0] = 0;
                h[1] = 0;
                h[2] = t;
                Class49.translate(r, h);
                break;
            case Class584.member8966:
                t = Class415.member4772(t);
                Class49.member336(r, c);
                Class49.member318(c, q, h);
                Class41.normalize(h);
                Class41.set(h, i);
                i[1] = 0;
                Class41.normalize(i);
                var s = Math.acos(Class41.member327(i, h)) - t;
                if (s < Math.PI / 8) {
                    t -= Math.PI / 8 - s;
                }
                if (s > 3 * Math.PI / 8) {
                    t += s - 3 * Math.PI / 8;
                }
                Class49.member345(r, t);
                break;
            case Class584.member8965:
                t = Class415.member4772(t);
                Class49.member346(r, t);
                break;
            }
        };
        if (o.member3701 !== undefined && o.member4735 !== undefined && o.member8970 !== undefined && o.position !== undefined && o.random !== undefined) {
            n = o.member3701;
            if (o.member3701 === Class584.member8964) {
                throw new Error('1329 ');
            }
            e = o.member3701;
            m = o.member4735;
            k = o.member8970;
            g = o.position;
            b = o.random;
        } else {
            throw new Error('1330 ');
        }
        o = undefined;
        return d;
    };
    return a;
}();