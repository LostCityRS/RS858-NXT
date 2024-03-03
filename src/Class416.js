import { Class140 } from 'Class140.js';
import { Class41 } from 'Class41.js';
import { Class337 } from 'Class337.js';
import { Class86 } from 'Class86.js';
import { Class415 } from 'Class415.js';
import { Class394 } from 'Class394.js';
import { Class377 } from 'Class377.js';
import { Class372 } from 'Class372.js';
export var Class416 = function () {
    var c = {};
    var d = [
        1,
        0,
        0
    ];
    var a = [
        0,
        1,
        0
    ];
    var h = [
        0,
        0,
        1
    ];
    var g = Class140.create();
    var e = Class41.create();
    var b = Class337.create();
    c.member4777 = 128;
    c.member4778 = 384;
    c.member4779 = Math.PI / 8;
    c.member4780 = 3 * Math.PI / 8;
    c.member4781 = 334;
    c.member4782 = 512 / 334;
    c.member4783 = 90;
    c.member4784 = c.member4783;
    c.member4785 = 2400;
    c.member4786 = 100;
    c.member4787 = Class86.member718 / 2;
    c.member4788 = 256;
    c.member4789 = function (j, k, i, m) {
        j = Class415.member4773(j);
        k = Class415.member4773(k);
        i = Class415.member4773(i);
        Class140.member1353(a, -k, m);
        Class140.member318(m, d, e);
        Class140.member1353(e, j, g);
        Class140.member323(g, m, m);
        if (i === 0) {
            return;
        }
        Class140.member318(m, h, e);
        Class140.member1353(e, i, g);
        Class140.member323(g, m, m);
    };
    c.member4790 = function (i) {
        Class140.set(i, g);
        Class140.member318(g, h, e);
        b[0] = e[0];
        b[1] = e[2];
        var j = Math.acos(Class337.length(b) / Class41.length(e));
        if (j === null) {
            j = 0;
        } else if (e[1] > 0) {
            j = -j;
        }
        j = Class415.member4774(j) % Class394.member4540 >> Class394.member4541;
        var k = Math.acos(e[2] / Class337.length(b));
        if (k === null) {
            k = 0;
        } else if (e[0] > 0) {
            k = Math.PI - k + Math.PI;
        }
        k = Class415.member4774(k) % Class394.member4540 >> Class394.member4541;
        return {
            member4791: j,
            member4792: k
        };
    };
    c.member4793 = function (o, i, n, k) {
        var m = Class377();
        m.member4193(new Float32Array([
            o,
            n,
            i
        ]));
        var j = new Class372(m, null, k, -1, 0);
        return j;
    };
    return c;
}();