export var Class1 = function () {
    var d = {};
    var s = false;
    var n = d.member10 = { member11: Float32Array };
    var h = d.member12 = { member11: Int32Array };
    var g = d.member13 = { member11: Uint32Array };
    d.member14 = -3.4 * Math.pow(10, 38);
    d.member15 = 3.4 * Math.pow(10, 38);
    d.member16 = 2147483648 - 1;
    d.member17 = -2147483648;
    d.member18 = 4294967296 - 1;
    d.member19 = 0;
    d.member20 = 1;
    d.BOOLEAN_FALSE;
    var a = 16777216;
    var i = new Uint32Array([
        32,
        64,
        128,
        256,
        1024,
        4096,
        16384,
        65536,
        1048576,
        a
    ]);
    var c = 524288;
    var q;
    var r = d.member21 = undefined;
    var k = 0;
    var o = d.member22 = undefined;
    var m = d.member23 = undefined;
    var j = d.member24 = undefined;
    var e = new Array(i.length);
    d.member25 = function (v) {
        q = v;
        r = d.member21 = new ArrayBuffer(q);
        o = d.member22 = new Float32Array(r);
        m = d.member23 = new Int32Array(r);
        j = d.member24 = new Uint32Array(r);
        for (var t = 0; t < i.length; t++) {
            var x = c / i[t];
            if (x < 1) {
                x = 1;
            }
            e[t] = {
                member26: i[t],
                member27: new Array(x),
                member28: 0
            };
        }
        var u = new Float32Array(2);
        u[0] = d.member14;
        u[1] = d.member15;
        d.member14 = u[0];
        d.member15 = u[1];
    };
    d.member29 = function (x) {
        if (x > a) {
            throw new Error('924 ' + x);
        }
        if (x + k > q) {
            throw new Error('925 ');
        }
        var t = 0;
        var v = i[t];
        while (v < x) {
            v = i[++t];
        }
        var u = e[t];
        if (u.member28 === u.member27.length) {
            var z = c / v;
            if (z < 1) {
                z = 1;
            }
            u.member27 = u.member27.concat(new Array(z));
            if (false) {
            }
        }
        var y = u.member27[u.member28++] = {
            member30: v,
            member31: k / 4,
            member32: true
        };
        if (false) {
        }
        k += v;
        return y;
    };
    var b = d.member29;
    d.member33 = function (t) {
        t.member32 = false;
    };
    d.member34 = function (x, u) {
        var v = 0;
        if (u !== undefined) {
            v += 4;
            v += u.member35 * 8;
        }
        var z = v;
        for (var t in x) {
            var y = x[t];
            y.member31 = z / 4;
            if (y.member36 === undefined) {
                z += 4;
            } else {
                z += y.member36 * 4;
            }
            if (y.type === n) {
                y.member21 = o;
            } else if (y.type === h) {
                y.member21 = m;
            } else if (y.type === g) {
                y.member21 = j;
            }
        }
        return z;
    };
    d.member37 = function (v, y) {
        for (var u in v) {
            var x = v[u];
            if (x.member36 === undefined) {
                x.member21[y.member31 + x.member31] = x.member38;
            } else {
                for (var t = 0; t < x.member36; t++) {
                    x.member21[y.member31 + x.member31 + t] = x.member38;
                }
            }
        }
    };
    d.member39 = function (u) {
        var x = 0;
        for (var t in u) {
            var v = u[t];
            v.member40 = x++;
            v.member41 = 1 + 2 * v.member40;
            v.member42 = 1 + 2 * v.member40 + 1;
            if (v.type === n) {
                v.member21 = o;
            } else if (v.type === h) {
                v.member21 = m;
            } else if (v.type === g) {
                v.member21 = j;
            }
        }
        u.member35 = x;
    };
    d.member43 = function (u, y) {
        var x = u;
        for (var v in y) {
            var z = y[v];
            if (z.member36 !== undefined) {
                z.member31 = x / 4;
                x += z.member36 * 4;
            }
        }
        var A = b(x);
        j[A.member31] = y.member35;
        var t = 0;
        for (var v in y) {
            var z = y[v];
            if (z.member36 !== undefined) {
                j[A.member31 + 1 + t * 2] = z.member31;
                j[A.member31 + 1 + t * 2 + 1] = z.member36;
                t++;
            }
        }
        return A;
    };
    d.member44 = function (v, y) {
        for (var u in v) {
            var x = v[u];
            if (x.member36 !== undefined) {
                for (var t = 0; t < x.member36; t++) {
                    x.member21[y.member31 + x.member31 + t] = x.member38;
                }
            }
        }
    };
    return d;
}();