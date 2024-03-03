export var Class81 = function () {
    var r = {};
    var a, d;
    var x = 16384;
    var h = x - 1;
    var t = 14;
    var A = x / (Math.PI * 2);
    var g = t - 11;
    var e = 16384;
    var m = e - 1;
    var z = 14;
    r.member610 = z;
    var o = x >> 4;
    var s = x >> 3;
    var u = s + s;
    var v = u + s;
    var y = u + u;
    var j = y + s;
    var k = y + u;
    var b = k + s;
    var c = x;
    d = new Array(x);
    a = new Array(x);
    var i = Math.PI * 2 / x;
    for (var q = 0; q < x; q++) {
        d[q] = Math.floor(e * Math.sin(q * i));
        a[q] = Math.floor(e * Math.cos(q * i));
    }
    r.sin = function (B) {
        return d[B];
    };
    r.cos = function (B) {
        return a[B];
    };
    return r;
}();