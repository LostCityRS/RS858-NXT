export var Class536 = function () {
    var b = 8;
    var a = function (o) {
        var e = {};
        var i = undefined;
        e.member8561 = function () {
            return i;
        };
        var g = undefined;
        e.member1439 = function () {
            return g;
        };
        var j = false;
        e.member8562 = function () {
            return j;
        };
        var d = function (q, r, s) {
            i[q] = r;
            g[q] = s;
        };
        e.member8477 = d;
        var n = function (r, q) {
            if (j) {
                m(r, q);
            } else {
                i = r;
                g = q;
            }
        };
        e.member8563 = n;
        var k = function (r) {
            if (r.member8564() != undefined) {
                m(r.member8564().slice(0), r.member8565().slice(0));
            } else if (j) {
                for (var q = 0; q < i.length; q++) {
                    if (i[q] === member47) {
                        i[q] = -1;
                        g[q] = -1;
                    }
                }
                j = false;
            }
        };
        e.member8566 = k;
        var m = function (t, s) {
            var r = Math.min(i.length, t.length);
            for (var q = 0; q < r; q++) {
                if (i[q] !== member47) {
                    t[q] = i[q];
                    s[q] = g[q];
                }
            }
            i = t;
            g = s;
            j = false;
        };
        if (o.member8567 !== undefined && o.member8568 !== undefined) {
            i = o.member8567;
            g = o.member8568;
        } else if (o.member7613 !== undefined) {
            var c = 0;
            if (o.member7613.member8564() === undefined) {
                i = new Array(b);
                g = new Array(b);
            } else {
                c = o.member7613.member8564().length;
                i = o.member7613.member8564().concat(new Array(b - c));
                g = o.member7613.member8565().concat(new Array(b - c));
            }
            for (var h = c; h < b; h++) {
                i[h] = -1;
                g[h] = -1;
            }
        } else if (o.member8569) {
            i = new Array(b);
            g = new Array(b);
            for (var h = 0; h < i.length; h++) {
                i[h] = member47;
                g[h] = member47;
            }
            j = true;
        } else {
            throw new Error('1581 ');
        }
        o = undefined;
        return e;
    };
    return a;
}();