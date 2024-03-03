export var Class475 = function () {
    var b = function (q) {
        var g = {};
        var d;
        g.member6725 = function () {
            return d;
        };
        g.member7603 = function (r) {
            d = r;
        };
        var n = undefined;
        g.member4486 = function () {
            return n;
        };
        var m = undefined;
        g.member7604 = function () {
            return m;
        };
        var h = undefined;
        g.member7605 = function () {
            return h;
        };
        var e = undefined;
        g.member7606 = function () {
            return e;
        };
        var j = undefined;
        g.member7607 = function () {
            return j;
        };
        var i = undefined;
        g.member7608 = function () {
            return i;
        };
        if (q.member4249 !== undefined) {
            d = q.member4249;
            n = q.member7609;
            m = q.member7610;
            h = q.member7611;
            e = q.member7612;
            j = q.member2616;
            i = q.member2618;
        } else if (q.member7613 !== undefined && q.member7614 !== undefined) {
            if (q.member7614) {
                n = q.member7613.member7615().slice(0);
            } else {
                n = q.member7613.member7616().slice(0);
            }
            var k = q.member7613.member7607();
            if (k !== null) {
                j = k.slice(0);
            }
            var o = q.member7613.member7608();
            if (o !== null) {
                i = o.slice(0);
            }
        } else {
            throw new Error('1213 ');
        }
        q = undefined;
        return g;
    };
    var a = 1;
    b.member7617 = function () {
        return a++;
    };
    var c = 1;
    b.member7618 = function () {
        return c++;
    };
    return b;
}();