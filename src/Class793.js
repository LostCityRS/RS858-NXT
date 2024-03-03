export var StructType = function (j) {
    var e = {};
    var c;
    var g = -1;
    if (j.member625 !== undefined && j.myList !== undefined) {
        g = j.member625;
        c = j.myList;
    } else {
        throw new Error('1086 ');
    }
    var d = null;
    var b = function (m) {
        while (true) {
            var k = m.g1();
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
            var n = r.g1();
            if (d === null) {
                d = {};
            }
            for (var o = 0; o < n; o++) {
                var k = r.g1() === 1;
                var q = r.g3();
                if (k) {
                    d[q] = r.gjstr();
                } else {
                    d[q] = r.g4s();
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