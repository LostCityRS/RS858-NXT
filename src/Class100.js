import { Class74 } from 'Class74.js';
import { Class72 } from 'Class72.js';
import { Class7 } from 'Class7.js';
export var Class100 = function () {
    var a = function (g) {
        var n = null;
        var s;
        var b = null;
        if (g.member433 !== undefined) {
            n = Class74({ member526: Class72.member118 });
            s = g.member433;
        } else {
            throw new Error('1015 ');
        }
        var v = new Float32Array([
            0.4,
            0.6588,
            0.747
        ]);
        var o = v;
        var m = 1.5;
        var u = m;
        var x = 0.3;
        var i = x;
        var y = 0.0008;
        var c = y;
        var d = 0.0001;
        var k = d;
        var t = false;
        var e = new Float32Array(4);
        var r = new Float32Array(3);
        var q = new Float32Array(3);
        var j = new Float32Array(3);
        var h = new Float32Array(4);
        n.member514 = function () {
            t = false;
        };
        n.member515 = function () {
            t = false;
        };
        n.member523 = function () {
            member868(v);
            member869(m);
            setG(G_DEFAULT);
            member870(y);
            member871(d);
            b = null;
        };
        n.member583 = function () {
            t = false;
            b = null;
        };
        n.member868 = function (z) {
            if (o != z) {
                o = z;
                t = false;
            }
        };
        n.member869 = function (z) {
            if (u != z) {
                u = z;
                t = false;
            }
        };
        n.member872 = function (z) {
            if (i !== z) {
                i = z;
                t = false;
            }
        };
        n.member870 = function (z) {
            if (c !== z) {
                c = Math.max(0, z);
                t = false;
            }
        };
        n.member871 = function (z) {
            if (k !== z) {
                k = Math.max(0, z);
                t = false;
            }
        };
        n.bind = function (B) {
            if (n.member291() && b !== B) {
                var E = Math.max(0, c / 256);
                var z = Math.max(0, k / 256);
                var D = E + z;
                var C = 1 / D;
                var F = E * (3 / (16 * Math.PI) * C);
                var A = z * (1 / (4 * Math.PI) * C);
                e[0] = o[0];
                e[1] = o[1];
                e[2] = o[2];
                e[3] = u;
                B.member467(Class7.member182, e);
                r[0] = F;
                r[1] = F;
                r[2] = F;
                B.member467(Class7.member183, r);
                q[0] = A;
                q[1] = A;
                q[2] = A;
                B.member467(Class7.member184, q);
                j[0] = D;
                j[1] = D;
                j[2] = D;
                B.member467(Class7.member185, j);
                h[0] = i;
                h[1] = 1 - i * i;
                h[2] = 1 + i * i;
                h[3] = 2 * i;
                B.member467(Class7.member186, h);
                b = B;
            }
        };
        g = undefined;
        return n;
    };
    return a;
}();