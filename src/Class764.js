import { Class531 } from 'Class531.js';
import { Class290 } from 'Class290.js';
import { Class86 } from 'Class86.js';
export var Class764 = function () {
    var a = function (e) {
        var g = Class531({ member7710: e });
        var b = e;
        var c = Class290();
        var d = [];
        g.member487 = function () {
            var k = b.member6444.member6445();
            if (k === null) {
                return;
            }
            for (var h = 0; h < d.length; h++) {
                var j = d[h];
                var n = j.member4597();
                var m = j.member4598();
                var o = k.member8344(Math.floor(n / Class86.member729), Math.floor(m / Class86.member729));
                var i = null;
                if (o !== undefined) {
                    i = o.member4853(n % Class86.member729, m % Class86.member729);
                }
                if (i !== null && i.member4566()) {
                    j.member6425(i);
                    d.splice(h, 1);
                    h--;
                } else {
                    c.member3454[0] = n * Class86.member718;
                    c.member3454[2] = m * Class86.member718;
                    if (!g.member4583().member4532 && !g.member8492(c)) {
                        d.splice(h, 1);
                        h--;
                    }
                }
            }
        };
        g.addRequest = function (h) {
            if (h.member6425 === undefined) {
                throw new Error('1319 ');
            }
            d.push(h);
        };
        return g;
    };
    return a;
}();