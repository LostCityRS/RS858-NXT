export var Class74 = function () {
    var a = function (d) {
        var e = {};
        var g;
        var c = false;
        e.enable = function () {
            if (!c) {
                c = true;
                if (e.member514 !== undefined) {
                    e.member514();
                }
            }
        };
        e.disable = function () {
            if (c) {
                c = false;
                if (e.member515 !== undefined) {
                    e.member515();
                }
            }
        };
        e.member291 = function () {
            return c;
        };
        e.member516 = function () {
            if (e.member517 !== undefined) {
                return e.member517();
            } else {
                return false;
            }
        };
        var b = false;
        e.member518 = function (h) {
            b = true;
            if (e.member519 !== undefined) {
                e.member519(h);
            }
        };
        e.member520 = function (h) {
            b = false;
            if (e.member521 !== undefined) {
                e.member521(h);
            }
        };
        e.member522 = function () {
            return b;
        };
        e.member301 = function () {
            c = false;
            b = false;
            if (e.member523 !== undefined) {
                e.member523();
            }
        };
        e.saveState = function (i) {
            var h = {};
            h.member524 = c;
            if (e.saveStateInner !== undefined) {
                e.saveStateInner(h);
            }
            i[g] = h;
        };
        e.member525 = function (i) {
            var h = i[g];
            c = h.member524;
            if (e.loadStateInner !== undefined) {
                e.loadStateInner(h);
            }
        };
        if (d.member526 !== undefined) {
            g = d.member526;
        } else {
            throw new Error('1353 ');
        }
        d = undefined;
        return e;
    };
    return a;
}();