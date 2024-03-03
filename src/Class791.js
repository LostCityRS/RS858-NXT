export var Class791 = function () {
    var a = function (n) {
        var e = {};
        var d;
        var i = -1;
        if (n.member625 !== undefined && n.member2896 !== undefined) {
            i = n.member625;
            d = n.member2896;
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
                var o = q.member609();
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
                h = r.member608();
            } else if (q === 2) {
                k = new Array(r.member609());
                for (var o = 0; o < k.length; o++) {
                    k[o] = r.member608();
                }
            } else if (q === 3) {
                m = r.member609();
            } else if (q === 4) {
                g = r.member609();
            } else if (q === 5) {
                c = r.member1086();
            } else if (q === 6) {
                j = r.member1086();
            } else if (false) {
            }
        };
        n = undefined;
        return e;
    };
    return a;
}();