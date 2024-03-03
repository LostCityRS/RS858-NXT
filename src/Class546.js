import { Class545 } from 'Class545.js';
import { Class423 } from 'Class423.js';
export var Class546 = function () {
    var a = 1;
    var d = 20;
    var e = 5;
    var b = 4;
    var c = function () {
        var i = {};
        var h = Class545.member778;
        var n = 0;
        var m = 0;
        var g = 0;
        var k = function () {
            h = Class545.member778;
            n = 0;
            m = 0;
            g = 0;
        };
        i.member8700 = function (r, t, s) {
            g = 0;
            h = s;
            n = r;
            m = t;
        };
        var o = i.member8700;
        i.member486 = function (r) {
            if (h === Class545.member778) {
                return;
            }
            var u = Class423.member6130(Class423.member6115.member325);
            if (u === NULL) {
                return;
            }
            var x = Math.floor(g / (e * a));
            if (h === Class545.member8699) {
                x = x + b;
            }
            var t = u[x];
            if (t === undefined || t === NULL) {
                return;
            }
            var s = t.member3606.member1539();
            var v = s.member1285(t.member3606.member1494());
            r.member3623(n - Math.floor(t.width / 2), m - Math.floor(t.height / 2), t.width, t.height, 4294967295, v.member493, v.member494, v.member495, v.member496, s.member1277(), false);
        };
        var j = i.member486;
        i.member487 = function () {
            if (h === Class545.member778) {
                return;
            }
            g += a;
            if (g >= d) {
                k();
            }
        };
        var q = i.member487;
        return i;
    };
    return c;
}();