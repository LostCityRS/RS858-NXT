export var SkyBoxType = function () {
    var a = function (n) {
        var e = {};
        var d;
        var i = -1;
        if (n.member625 !== undefined && n.myList !== undefined) {
            i = n.member625;
            d = n.myList;
        } else {
            throw new Error('1147 ');
        }
        var h = -1;
        var k = null;
        var m = -1;
        var g = 0;
        var c;
        var j = undefined;
        e.member3228 = function () {
            return j;
        };
        e.decode = function (q) {
            while (true) {
                var o = q.g1();
                if (o === undefined) {
                    throw new Error('1148 ');
                    break;
                }
                if (o === 0) {
                    break;
                }
                b(q, o);
            }
        };
        var b = function (r, q) {
            if (q === 1) {
                h = r.g2();
            } else if (q === 2) {
                k = new Array(r.g1());
                for (var o = 0; o < k.length; o++) {
                    k[o] = r.g2();
                }
            } else if (q === 3) {
                m = r.g1();
            } else if (q === 4) {
                g = r.g1();
            } else if (q === 5) {
                c = r.gSmart2or4null();
            } else if (q === 6) {
                j = r.gSmart2or4null();
            } else if (false) {
            }
        };
        n = undefined;
        return e;
    };
    return a;
}();