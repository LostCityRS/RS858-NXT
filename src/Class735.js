export var Class735 = function (j) {
    var g = {};
    var e;
    var i = -1;
    if (j.member625 !== undefined && j.member2896 !== undefined) {
        i = j.member625;
        e = j.member2896;
    } else {
        throw new Error('884 ');
    }
    var k = 0;
    g.getSize = function () {
        return k;
    };
    var d = 0;
    g.member9703 = function () {
        return d;
    };
    var c = null;
    g.member9702 = function () {
        return c;
    };
    var h = null;
    g.member9704 = function (m) {
        return h[m];
    };
    var b = function (n) {
        while (true) {
            var m = n.member609();
            if (m === undefined) {
                throw new Error('885 ');
                break;
            }
            if (m === 0) {
                break;
            }
            a(n, m);
        }
    };
    g.decode = b;
    var a = function (o, n) {
        if (n === 2) {
            k = o.member608();
        } else if (n === 4) {
            d = o.member609();
            c = new Array(d);
            h = new Array(d);
            for (var m = 0; m < d; m++) {
                c[m] = o.member608();
                h[m] = o.member608();
            }
        } else if (false) {
        }
    };
    j = undefined;
    return g;
};