export var Class256 = function () {
    var a = function (c) {
        var d = {};
        var g;
        var e = function () {
            for (var k = 1; k < g.length; k++) {
                if (g[k - 1] < 0) {
                    throw new Error('1724 ' + (k - 1));
                }
                if (g[k] < g[k - 1]) {
                    throw new Error('1725 ' + k);
                }
            }
        };
        if (c !== undefined && c.member2987 !== undefined) {
            g = c.member2987;
            e();
        } else {
            g = new Array(120);
            var b = 0;
            for (var j = 0; j < 120; j++) {
                var i = j + 1;
                var h = Math.floor(i + 300 * Math.pow(2, i / 7));
                b += h;
                g[j] = Math.floor(b / 4);
            }
            e();
        }
        d.member2989 = function (k) {
            var o = 0;
            for (var m = 0; m < g.length; m++) {
                if (k >= g[m]) {
                    o = m + 1;
                } else {
                    break;
                }
            }
            return o;
        };
        d.member2990 = function (k) {
            var m = k / 10;
            return member2989(m);
        };
        d.member2982 = function (k) {
            if (k < 1) {
                return 0;
            }
            if (k > g.length) {
                k = g.length;
            }
            return g[k - 1];
        };
        d.member2983 = function (k) {
            return member2982(k) * 10;
        };
        c = undefined;
        return d;
    };
    a.member925 = a();
    return a;
}();