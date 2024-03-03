export var Class184 = function () {
    var a = function (e) {
        var g = {};
        var b;
        g.member682 = function () {
            return b;
        };
        var d;
        g.member1953 = function () {
            return d;
        };
        var c;
        g.member1954 = function () {
            return c;
        };
        if (e.member625 !== undefined && e.member1947 !== undefined && e.member1950 !== undefined) {
            b = e.member625;
            d = e.member1947;
            c = e.member1950;
        } else if (e.member680 !== undefined) {
            b = e.member680.member625;
            d = e.member680.member1947;
            c = e.member680.member1950;
        } else {
            throw new Error('1664 ');
        }
        g.member681 = function () {
            return {
                member625: b,
                member1947: d,
                member1950: c
            };
        };
        e = undefined;
        return g;
    };
    return a;
}();