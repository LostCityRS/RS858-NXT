export var Class728 = function (m) {
    var g = {};
    var d;
    var j = -1;
    if (m.member625 !== undefined && m.member2896 !== undefined) {
        j = m.member625;
        d = m.member2896;
    } else {
        throw new Error('1350 ');
    }
    var k = 0;
    g.member600 = function () {
        return k;
    };
    var h = -1;
    g.member701 = function () {
        return h;
    };
    var e = 1;
    g.member10110 = function () {
        return e;
    };
    var c = true;
    var i = function () {
        return {
            member625: j,
            member546: k,
            member651: h,
            member743: e,
            member2526: c
        };
    };
    g.member681 = i;
    var b = function (o) {
        while (true) {
            var n = o.member609();
            if (n === undefined) {
                throw new Error('1351 ');
                break;
            }
            if (n === 0) {
                break;
            }
            a(o, n);
        }
    };
    g.decode = b;
    var a = function (q, o) {
        if (o === 1) {
            var n = q.g3();
            if (n === 16711935) {
                k = 0;
            } else {
                k = n << 8 | 255;
            }
        } else if (o === 2) {
            h = q.member608();
            if (h === 65535) {
                h = -1;
            }
        } else if (o === 3) {
            e = q.member608() / 128;
        } else if (o === 4) {
            c = false;
        } else if (o === 5) {
        } else if (false) {
        }
    };
    m = undefined;
    return g;
};