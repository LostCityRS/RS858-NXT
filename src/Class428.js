import { Class41 } from 'Class41.js';
export var Class428 = function () {
    var a = {};
    a.member6204 = function (h, i, g, e, b) {
        if (h >= i) {
            Class41.set(e, b);
            return true;
        }
        var d = i - h;
        var c = 1 - d * d * d / (i * i * i);
        Class41.member329(g, b, c, e);
        return false;
    };
    return a;
}();