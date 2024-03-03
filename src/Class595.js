import { Class41 } from 'Class41.js';
import { Class577 } from 'Class577.js';
export var Class595 = function () {
    var a = {};
    a.member9059 = 2;
    var e = a.member9059;
    a.member9060 = 65535;
    var d = Class41.create();
    var c = new Array(e);
    var b = new Array(e);
    var g = new Array();
    a.member9061 = function (i, h) {
        if (i >= 0 && i < a.member9059) {
            if (h < 2) {
                throw new Error('1343 ' + h);
            }
            c[i] = undefined;
            g[i] = h;
        }
    };
    a.member9062 = function (m, k, h, j, i) {
        if (m < 0 || m >= a.member9059) {
            return;
        }
        if (k < 0 || k >= g[m]) {
            return;
        }
        if (c[m] !== undefined) {
            Class41.member322(j, h, d);
            Class41.member322(h, d, j);
            c[m].member8896(h, j, i);
            return;
        }
        if (b[m] === undefined) {
            b[m] = [
                Class41.create(h),
                Class41.create(j),
                i
            ];
        } else {
            Class41.member322(j, h, d);
            Class41.member322(h, d, j);
            c[m] = Class577({
                member8895: [
                    b[m][0],
                    b[m][1],
                    j,
                    h
                ],
                member8909: b[m][2],
                member8910: i
            });
            b[m] = undefined;
        }
    };
    a.member9063 = function (h) {
        return g[h];
    };
    a.member9064 = function (h) {
        return c[h];
    };
    return a;
}();