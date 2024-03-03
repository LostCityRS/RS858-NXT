import { Class421 } from 'Class421.js';
import { Class649 } from 'Class649.js';
import { Class122 } from 'Class122.js';
import { Class501 } from 'Class501.js';
import { Class124 } from 'Class124.js';
export var Class664 = function () {
    var c = {};
    var b;
    var d = function (e) {
        b = e;
    };
    c.member25 = d;
    Class421.member5256.member867 = function (e) {
        e.member6143 -= 2;
        a(e.member6142[e.member6143], e.member6142[e.member6143 + 1], '', e.member6100[--e.member6099] == 1, false);
    };
    Class421.member5261.member867 = function (h) {
        var i = h.member6142[--h.member6143];
        var e = h.member6100[--h.member6099] == 1;
        var g = Class649.member7142() + i;
        Class649.member9629(g, e);
    };
    Class421.member5271.member867 = function (e) {
        e.member6143 -= 3;
        a(e.member6142[e.member6143], e.member6142[e.member6143 + 1], e.member6142[e.member6143 + 2], e.member6100[--e.member6099] === 1, true);
    };
    Class421.member5257.member867 = function (e) {
        var g = e.member6142[--e.member6143];
        css.member6142[css.member6143++] = Class122.member1039(g);
    };
    var a = function (k, n, g, i, m) {
        var j = b.member8252.member8259();
        if (j !== undefined && j.member8239()) {
            var h = j.member8260(Class501.member8116);
            h.member2698.member1054(Class124.member1152(k) + Class124.member1152(n) + Class124.member1152(g) + 1);
            h.member2698.member1065(k);
            h.member2698.member1065(n);
            h.member2698.member1065(g);
            var e = 0;
            if (i) {
                e |= 1;
            }
            if (m) {
                e |= 2;
            }
            h.member2698.member1051(e);
            j.member8261(h);
        } else if (false) {
        }
    };
    return c;
}();