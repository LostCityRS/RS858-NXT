export var Class89 = function () {
    var a = function () {
        var e = {};
        var g = -1;
        var c = [];
        var d;
        var h = [];
        var b;
        e.member771 = function () {
            return g;
        };
        e.member772 = function (i) {
            h.push(i);
        };
        e.member773 = function () {
            for (var i = 0; i < h.length; i++) {
                h[i](d);
            }
        };
        e.member774 = function (i) {
            d = i;
            e.member773();
        };
        e.member775 = function () {
            return d;
        };
        e.add = function (i) {
            if (i === undefined) {
                throw new Error('1618 ');
            }
            var j = i.member444();
            if (c[j] !== undefined) {
                throw new Error('1619 ' + i.member444());
            }
            if (g < j) {
                g = j;
                c.length = g + 1;
            }
            c[j] = i;
            return i;
        };
        e.getByID = function (i) {
            return c[i];
        };
        e.member776 = function () {
            b = -1;
            return e.member777();
        };
        e.member777 = function () {
            if (b === undefined) {
                throw new Error('1620 ');
            }
            for (var i = b + 1; i < c.length; i++) {
                if (c[i] !== undefined) {
                    b = i;
                    return c[i];
                }
            }
            b = undefined;
            return undefined;
        };
        return e;
    };
    return a;
}();