export var Class780 = function (q) {
    var d = {};
    var h = 0;
    d.member8033 = h;
    var e = 1;
    d.member8032 = e;
    var c = 2;
    d.member10419 = c;
    var j = null;
    d.member8031 = function () {
        return j;
    };
    var o = null;
    d.member10420 = function () {
        return o;
    };
    var n = 0;
    var s = 0;
    var k = -1;
    d.member7925 = function () {
        return k;
    };
    var b = -1;
    d.member7927 = function () {
        return b;
    };
    var m = null;
    d.member7926 = function () {
        return m;
    };
    var i = null;
    d.member7928 = function () {
        return i;
    };
    if (q.data !== undefined) {
        var a = q.data;
        while (true) {
            var r = a.g1();
            if (r === 0) {
                break;
            } else if (r === 1) {
                j = new Array(a.g1());
                n = 0;
                s = 0;
                for (var g = 0; g < j.length; g++) {
                    j[g] = a.g1();
                    if (j[g] === h) {
                        n++;
                    } else if (j[g] === c) {
                        s++;
                    }
                }
            } else if (r === 3) {
                k = a.g1();
            } else if (r === 4) {
                b = a.g1();
            } else if (r === 5) {
                m = new Array(a.g1());
                for (var g = 0; g < m.length; g++) {
                    m[g] = a.g1();
                }
            } else if (r === 6) {
                i = new Array(a.g1());
                for (var g = 0; g < i.length; g++) {
                    i[g] = a.g1();
                }
            } else if (r === 7) {
                o = new Array(j.length);
                for (var g = 0; g < j.length; g++) {
                    o[g] = a.g1() - 1;
                }
            } else {
                throw new Error('1025 ' + r);
            }
        }
    } else {
        throw new Error('1026 ');
    }
    q = undefined;
    return d;
};