import { Class433 } from 'Class433.js';
import { Class537 } from 'Class537.js';
import { Class423 } from 'Class423.js';
import { Class86 } from 'Class86.js';
import { Class290 } from 'Class290.js';
export var Class549 = function () {
    var b = {};
    var a;
    var c = function (d) {
        a = d;
    };
    b.member25 = c;
    Class433.member2867.member6428 = function (i, n) {
        var q = i.member609();
        var s = q >> 5;
        var k = q & 31;
        if (a.member8733.member8734(s)) {
            a.member8733.remove(s);
        }
        if (k === Class537.member8570) {
            return false;
        }
        var o = Class423.member6130(Class423.member6115.member6112);
        if (o === member47) {
            return true;
        }
        var t = i.member609();
        if (t >= 0 && t < Class423.member6115.member6112.member1288.length) {
            var h = undefined;
            var e = undefined;
            var r = undefined;
            var d = undefined;
            var j = undefined;
            if (k === Class537.member8571 || k === Class537.member8573) {
                h = i.member608();
                r = i.member608();
                i.member1045 += 4;
            } else if (k >= 2 && k <= 6) {
                var g = i.member609();
                var v = 0, u = 0;
                if (k === 2) {
                    v = Class86.member718 / 2;
                    u = Class86.member718 / 2;
                }
                if (k === 3) {
                    v = 0;
                    u = Class86.member718 / 2;
                }
                if (k === 4) {
                    v = Class86.member718;
                    u = Class86.member718 / 2;
                }
                if (k === 5) {
                    v = Class86.member718 / 2;
                    u = 0;
                }
                if (k === 6) {
                    v = Class86.member718 / 2;
                    u = Class86.member718;
                }
                k = Class537.member8572;
                v += i.member608() * Class86.member718;
                u += i.member608() * Class86.member718;
                var m = i.member609() << Class86.member719;
                m *= 2;
                e = Class290({
                    level: g,
                    x: v,
                    y: m,
                    member756: u
                });
                d = i.member608();
            }
            j = i.member1074();
            if (!a.member8733.add(s, k, t, j, h, r, e, d)) {
                return true;
            }
        }
        return false;
    };
    Class433.member6263.member6428 = function (e, g) {
        var d = e.member609();
        var h = e.member1086();
        if (h !== -1) {
            return a.member8735.add(e, d, h);
        } else if (a.member8735.member8734(d)) {
            a.member8735.remove(d);
        }
    };
    return b;
}();