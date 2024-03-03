export var Class518 = function () {
    var a = function (k) {
        var e = {};
        var g;
        e.member8396 = function () {
            return g;
        };
        e.member8397 = function (n) {
            g = n;
        };
        var i;
        e.member8398 = function () {
            return i;
        };
        e.member8399 = function (n) {
            i = n;
        };
        var c;
        e.member8400 = function () {
            return c;
        };
        var h;
        e.member8401 = function () {
            return h;
        };
        var b;
        e.member8402 = function () {
            return b;
        };
        var j;
        e.member8403 = function () {
            return j;
        };
        var d;
        e.member8404 = function () {
            return d;
        };
        if (k.member8405 === true) {
            g = 0;
            i = 0;
            c = 0;
            h = 0;
            b = 0;
            j = 0;
            d = 0;
        } else if (k.data !== undefined) {
            var m = k.data.member1070();
            g = m & 7;
            i = m >> 3;
            c = k.data.member608();
            h = k.data.member1073();
            b = k.data.member1073();
            j = k.data.member1073();
            d = k.data.member1073();
        } else {
            throw new Error('1407 ');
        }
        k = undefined;
        return e;
    };
    return a;
}();