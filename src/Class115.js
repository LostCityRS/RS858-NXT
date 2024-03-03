import { Class32 } from 'Class32.js';
import { Class74 } from 'Class74.js';
import { Class72 } from 'Class72.js';
import { Class7 } from 'Class7.js';
export var Class115 = function () {
    var a = function (d) {
        var g = null;
        var j;
        var e = new Float32Array(Class32.member312 * 4);
        var c = new Int32Array(Class32.member312);
        var h = undefined;
        if (d.member433 !== undefined) {
            g = Class74({ member526: Class72.POINTLIGHT });
            j = d.member433;
        } else {
            throw new Error('1182 ');
        }
        var b = undefined;
        g.member515 = function () {
            g.member523();
        };
        g.member523 = function () {
            i();
        };
        g.member583 = function () {
            i();
        };
        g.member987 = function () {
            return b;
        };
        g.member988 = function () {
            if (b === undefined) {
                return 0;
            } else {
                return b.member989();
            }
        };
        g.member990 = function (k) {
            if (b === k) {
                return;
            }
            b = k;
            if (b !== undefined && b.member989() > Class32.member312) {
                throw new Error('1183 ' + b.member989() + '1183 ' + Class32.member312);
            }
            h = undefined;
        };
        g.member991 = function () {
            b = undefined;
        };
        var i = g.member991;
        g.bind = function (o) {
            if (h === o) {
                return;
            }
            if (b !== undefined) {
                var r = b.member427();
                var k = b.member989();
                for (var n = 0; n < k; n++) {
                    var q = r[n];
                    var m = q.getWorldPosition();
                    e[4 * n + 0] = m[0];
                    e[4 * n + 1] = m[1];
                    e[4 * n + 2] = m[2];
                    e[4 * n + 3] = 1 / q.member992();
                    c[n] = q.getDamageColour();
                }
                o.member467(Class7.member169, e);
                o.member467(Class7.member170, c);
                o.member467(Class7.member168, k);
            } else {
                o.member467(Class7.member168, 0);
            }
            h = o;
        };
        d = undefined;
        return g;
    };
    return a;
}();