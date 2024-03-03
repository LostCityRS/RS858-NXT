export var Class694 = function () {
    var a = 1;
    return function (b) {
        var c = {};
        var e = a++;
        c.member6725 = function () {
            return e;
        };
        var h;
        c.member4486 = function () {
            return h;
        };
        var g;
        c.member7607 = function () {
            return g;
        };
        var d;
        c.member7608 = function () {
            return d;
        };
        if (b.member9904 !== undefined || b.member2616 !== undefined || b.member2618 !== undefined) {
            if (b.member9904 !== undefined) {
                h = b.member9904;
            }
            if (b.member2616 !== undefined) {
                g = b.member2616;
            }
            if (b.member2618 !== undefined) {
                d = b.member2618;
            }
        } else {
            throw new Error('1061 ');
        }
        b = undefined;
        return c;
    };
}();