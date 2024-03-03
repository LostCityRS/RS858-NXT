import { Class41 } from 'Class41.js';
import { Class576 } from 'Class576.js';
export var Class577 = function () {
    var a = function (t) {
        var e = {};
        var k = Class41.create();
        var o = Class41.create();
        var n = Class41.create();
        var m = Class41.create();
        var i = new Array();
        var s = new Array();
        e.member8896 = function (u, y, x) {
            var v = i[i.length - 1];
            v.getControlPoint(3, k);
            v.getControlPoint(2, o);
            Class41.member322(k, o, o);
            Class41.add(k, o, o);
            i[i.length] = Class576({
                member8895: [
                    k,
                    o,
                    y,
                    u
                ]
            });
            s[s.length] = x;
        };
        var q = e.member8896;
        e.setControlPoint = function (x, u, v) {
            if (u) {
                if (x === i.length) {
                    Class41.member322(v, i[x - 1].getControlPoint(3, k), k);
                    i[x - 1].setControlPoint(3, v);
                    i[x - 1].setControlPoint(2, Class41.add(k, i[x - 1].getControlPoint(2, o), o));
                } else {
                    Class41.member322(v, i[x].getControlPoint(0, k), k);
                    i[x].setControlPoint(0, v);
                    i[x].setControlPoint(1, Class41.add(k, i[x].getControlPoint(1, o), o));
                    if (x > 0) {
                        i[x - 1].setControlPoint(3, v);
                        i[x - 1].setControlPoint(2, Class41.add(k, i[x - 1].getControlPoint(2, o), o));
                    }
                }
            } else if (x === i.length) {
                i[x - 1].setControlPoint(2, v);
            } else {
                Class41.member322(v, i[x].getControlPoint(1, k), k);
                i[x].setControlPoint(1, v);
                if (x > 0) {
                    i[x - 1].setControlPoint(2, Class41.sub(i[x - 1].getControlPoint(2, o), k));
                }
            }
        };
        e.member8897 = function (v, u) {
            if (v > i.length) {
                throw new Error('1372 ');
            }
            s[v] = u;
        };
        e.getControlPoint = function (x, u, v) {
            if (x === i.length) {
                if (u) {
                    i[x - 1].getControlPoint(3, v);
                } else {
                    i[x - 1].getControlPoint(2, v);
                }
            } else if (u) {
                i[x].getControlPoint(0, v);
            } else {
                i[x].getControlPoint(1, v);
            }
        };
        e.member8898 = function (u) {
            return s[u];
        };
        e.member8899 = function () {
            return i.length;
        };
        e.member8892 = function () {
            var v = 0;
            for (var u = 0; u < i.length; u++) {
                v += i[u].member8892();
            }
            return v;
        };
        var j = e.member8892;
        e.member8900 = function (x) {
            if (x > i.length) {
                throw new Error('1373 ');
            }
            var v = 0;
            for (var u = 0; u < x; u++) {
                v += i[u].member8892();
            }
            return v;
        };
        var g = e.member8900;
        e.getWorldPosition = function (v, y) {
            var x = d(v);
            var u = Math.floor(x);
            if (x < i.length) {
                i[u].getWorldPosition(x - u, y);
                return;
            }
            i[i.length - 1].getWorldPosition(1, y);
        };
        e.member8901 = function (y) {
            var v = 0;
            var x = 0;
            for (var u = 0; u < i.length; u++) {
                x += i[u].member8892();
                if (y < x) {
                    return u + i[u].member8894(y - v);
                }
                v = x;
            }
            return i.length;
        };
        var d = e.member8901;
        e.member8902 = function (v) {
            if (v <= 0) {
                return 0;
            }
            if (v >= i.length) {
                return j();
            }
            var u = Math.floor(v);
            var x = g(u);
            x += i[u].member8893(v - u);
            return x;
        };
        e.member8903 = function (x, v) {
            var u = Math.floor(x);
            if (u < i.length) {
                i[u].getWorldPosition(x - u, v);
                return;
            }
            i[i.length - 1].getWorldPosition(1, v);
        };
        e.member8904 = function (u) {
            return r(d(u));
        };
        e.member8905 = function (y) {
            var x = Math.floor(y);
            if (x < i.length) {
                var z = s[x];
                var u = s[x + 1];
                var v = y - x;
                return (1 - v) * z + v * u;
            }
            return s[i.length];
        };
        var r = e.member8905;
        e.member8891 = function (v, y) {
            var x = d(v);
            var u = Math.floor(x);
            if (u < i.length) {
                i[u].member8891(x - u, y);
                return;
            }
            i[i.length - 1].member8891(1);
        };
        e.member8906 = function (x, v) {
            if (v === undefined) {
                v = i.length;
            }
            if (v < x) {
                var z = v;
                v = x;
                x = z;
            }
            if (x === i.length) {
                throw new Error('1374 ');
            }
            if (x === v) {
                throw new Error('1375 ');
            }
            var y = a({
                member8895: i[x].member8890(),
                member8907: s[x],
                member8908: s[x + 1]
            });
            for (var u = x + 1; u < v; u++) {
                i[u].getControlPoint(3, point1);
                i[u].getControlPoint(2, point2);
                y.member8896(point1, point2, s[u + 1]);
            }
            return y;
        };
        if (t !== undefined) {
            if (t.member8895 !== undefined) {
                i[0] = Class576(t);
                s[0] = t.member8909 !== undefined ? t.member8909 : 0;
                s[1] = t.member8910 !== undefined ? t.member8910 : 0;
            } else if (t.member3456 !== undefined) {
                var b = t.member3456;
                var c = b.member1078();
                b.member1088(k);
                b.member1088(o);
                s[0] = b.member320();
                b.member1088(n);
                b.member1088(m);
                Class41.member322(n, m, m);
                Class41.add(n, m, m);
                s[1] = b.member320();
                i[0] = Class576({
                    member8895: [
                        k,
                        o,
                        m,
                        n
                    ]
                });
                for (var h = 2; h < c; h++) {
                    b.member1088(n);
                    b.member1088(m);
                    Class41.member322(n, m, m);
                    Class41.add(n, m, m);
                    q(n, m, b.member320());
                }
            } else {
                throw new Error('1376 ');
            }
        } else {
            throw new Error('1377 ');
        }
        t = undefined;
        return e;
    };
    return a;
}();