export var Class560 = function () {
    var a = function (d) {
        var e = {};
        var g;
        e.member6719 = function () {
            return g;
        };
        var i;
        e.member7444 = function () {
            return i;
        };
        e.member7438 = function (j) {
            return i[j];
        };
        var h;
        e.member7461 = function () {
            return h;
        };
        var c;
        e.member7460 = function () {
            return c;
        };
        e.member7462 = function (j) {
            c = j;
        };
        var b;
        e.member7621 = function () {
            return b;
        };
        if (d.member6675 !== undefined && d.member8792 !== undefined && d.member8793 !== undefined && d.member8794 !== undefined) {
            g = d.member6675;
            i = d.member8792;
            b = d.member8793;
            h = d.member8794;
            c = h;
        } else {
            throw new Error('1291 ');
        }
        e.member512 = function (k) {
            for (var j = 0; j < i.length; j++) {
                i[j].member512(k);
            }
        };
        d = undefined;
        return e;
    };
    return a;
}();