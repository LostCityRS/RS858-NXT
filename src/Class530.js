export var Class530 = function () {
    var a = function (m) {
        var d = {};
        var c = null;
        var b = null;
        var n = -1;
        d.member3602 = function () {
            return n;
        };
        var k = -1;
        d.member3599 = function () {
            return k;
        };
        var j = -1;
        d.member3603 = function () {
            return j;
        };
        var i = -1;
        var h = -1;
        if (m.member8484 !== undefined && m.member8485 !== undefined && m.member8486 !== undefined && m.member8487 !== undefined && m.member8488 !== undefined && m.member8489 !== undefined) {
            c = m.member8484;
            if (m.member8490 !== undefined) {
                b = m.member8490;
            }
            n = m.member8485;
            k = m.member8486;
            j = m.member8487;
            i = m.member8488;
            h = m.member8489;
        } else {
            throw new Error('1194 ');
        }
        var g = function (o, q) {
            if (b !== null && q !== -1) {
                return b[q][o];
            } else {
                return 0;
            }
        };
        d.member3608 = g;
        var e = function (o) {
            return c[o];
        };
        d.member3607 = e;
        m = undefined;
        return d;
    };
    return a;
}();