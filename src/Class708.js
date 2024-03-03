import { Class638 } from 'Class638.js';
import { Class518 } from 'Class518.js';
export var Class708 = function () {
    var e = {};
    var b;
    var c = new Array(Class638.member9563);
    for (var a = 0; a < Class638.member9563; a++) {
        c[a] = new Array(Class638.member9562);
    }
    e.member9576 = function (h, i) {
        return c[h][i];
    };
    e.member25 = function (h) {
        b = h;
    };
    var g = e.member25;
    var d = function (m, k) {
        for (var h = 0; h < c.length; h++) {
            for (var i = 0; i < c[h].length; i++) {
                c[h][i] = undefined;
            }
        }
    };
    e.member7183 = d;
    e.member3295 = function (j) {
        var i = j.member609();
        var h = j.member609();
        if (j.member609() === 0) {
            c[i][h] = Class518({ member8405: true });
        } else {
            j.member607(j.member1047() - 1);
            c[i][h] = Class518({ data: j });
        }
        b.member7187.member9160();
    };
    return e;
}();