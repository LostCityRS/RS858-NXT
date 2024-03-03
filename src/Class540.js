export var Class540 = function () {
    var a = function (b) {
        var e = {};
        var g;
        e.member8584 = function () {
            return g;
        };
        var d;
        e.member8585 = function () {
            return d;
        };
        var c;
        e.member8586 = function () {
            return c;
        };
        e.member8587 = function (h, i) {
            c[h] = i;
        };
        if (b !== undefined && b.member8588 !== undefined && b.member8589 !== undefined) {
            g = b.member8588;
            d = b.member8589;
            if (b.member8590 !== undefined) {
                c = b.member8590;
            } else {
                c = [];
            }
        } else {
            throw new Error('1593 ');
        }
        b = undefined;
        return e;
    };
    return a;
}();