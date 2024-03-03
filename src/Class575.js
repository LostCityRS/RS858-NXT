import { Class41 } from 'Class41.js';
export var Class575 = function () {
    var a = function () {
        var c = {};
        var b = new Array(3);
        for (var d = 0; d < 3; d++) {
            b[d] = Class41.create();
        }
        c.getControlPoint = function (e, g) {
            Class41.set(b[e], g);
        };
        c.setControlPoint = function (e, g) {
            Class41.set(g, b[e]);
        };
        c.getWorldPosition = function (k, j) {
            var i = (1 - k) * (1 - k);
            var h = 2 * k * (1 - k);
            var g = k * k;
            for (var e = 0; e < 3; e++) {
                j[e] = b[0][e] * i + b[1][e] * h + b[2][e] * g;
            }
        };
        return c;
    };
    return a;
}();