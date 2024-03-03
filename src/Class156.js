import { Class41 } from 'Class41.js';
export var Class156 = function () {
    var d = {};
    var e = Class41.create();
    var a = Class41.create();
    var b = Class41.create();
    var c = 1 / 1024;
    d.member1555 = function (i, o, m, h) {
        var r = e;
        Class41.member322(i, m, r);
        var k = Class41.member327(r, r) - h * h;
        var j = Class41.member327(o, r);
        var n = j * j - k;
        if (n < 0) {
            return undefined;
        } else if (n >= c) {
            var s = {
                member1556: Class41.set(i, a),
                member1557: Class41.set(i, b)
            };
            var q = Math.sqrt(n);
            Class41.scale(o, -j - q, e);
            Class41.add(s.member1556, e);
            Class41.scale(o, -j + q, e);
            Class41.add(s.member1557, e);
            return s;
        } else {
            var s = {
                member1556: Class41.set(i, a),
                member1557: undefined
            };
            s[0] = Class41.create(i);
            Class41.scale(o, -j, e);
            Class41.add(s[0], e);
            return s;
        }
    };
    var g = function (j, i, h) {
        return (j.x - h.x) * (i.y - h.y) - (i.x - h.x) * (j.y - h.y);
    };
    d.member1558 = function (i, n, k, h) {
        var o = g(i, n, k) < 0;
        var m = g(i, k, h) < 0;
        var j = g(i, h, n) < 0;
        return o === m && o === j;
    };
    return d;
}();