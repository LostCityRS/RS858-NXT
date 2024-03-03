export var Class793 = function (j) {
    var e = {};
    var c;
    var g = -1;
    if (j.member625 !== undefined && j.member2896 !== undefined) {
        g = j.member625;
        c = j.member2896;
    } else {
        throw new Error('1086 ');
    }
    var d = null;
    var b = function (m) {
        while (true) {
            var k = m.member609();
            if (k === undefined) {
                throw new Error('1087 ');
                break;
            }
            if (k === 0) {
                break;
            }
            a(m, k);
        }
    };
    e.decode = b;
    var a = function (r, m) {
        if (m === 249) {
            var n = r.member609();
            if (d === null) {
                d = {};
            }
            for (var o = 0; o < n; o++) {
                var k = r.member609() === 1;
                var q = r.g3();
                if (k) {
                    d[q] = r.member1089();
                } else {
                    d[q] = r.member1074();
                }
            }
        } else if (false) {
        }
    };
    var h = function (n, m) {
        if (d === null) {
            return m;
        }
        var k = d[n];
        if (k === undefined) {
            return m;
        } else {
            return k;
        }
    };
    e.getParam = h;
    var i = function (n, m) {
        if (d === null) {
            return m;
        }
        var k = d[n];
        if (k === undefined) {
            return m;
        } else {
            return k;
        }
    };
    e.member2941 = i;
    j = undefined;
    return e;
};