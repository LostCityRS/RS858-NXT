import { Class49 } from 'Class49.js';
export var Class515 = function () {
    var c = {};
    var b = new Float32Array(4);
    var a = Class49.create();
    c.member8337 = function (d, h, g) {
        if (h === null) {
            d[0] = d[1] = d[2] = -1;
            return;
        }
        b[0] = d[0];
        b[1] = d[1];
        b[2] = d[2];
        b[3] = 1;
        var j = h.member8338();
        var e = h.member8339();
        var i = j[14] + j[2] * d[0] + j[6] * d[1] + j[10] * d[2];
        Class49.member331(e, b);
        d[0] = b[0] / b[3];
        d[1] = -b[1] / b[3];
        d[2] = g ? -i : i;
    };
    c.member8340 = function (d) {
        if (d[0] < -1 || d[0] > 1 || d[1] < -1 || d[1] > 1 || d[2] > 0) {
            return false;
        }
        return true;
    };
    return c;
}();