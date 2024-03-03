export var Class694 = function () {
    var a = 1;
    return function (b) {
        var c = {};
        var e = a++;
        c.member6725 = function () {
            return e;
        };
        var h;
        c.getModels = function () {
            return h;
        };
        var g;
        c.getRecolD = function () {
            return g;
        };
        var d;
        c.getRetexD = function () {
            return d;
        };
        if (b.model !== undefined || b.recol_d !== undefined || b.member2618 !== undefined) {
            if (b.model !== undefined) {
                h = b.model;
            }
            if (b.recol_d !== undefined) {
                g = b.recol_d;
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