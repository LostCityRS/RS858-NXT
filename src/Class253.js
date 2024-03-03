export var Class253 = function (i) {
    var r = {};
    var c;
    var a = 1;
    var m = 1000 / 2;
    var s;
    var u;
    var k = {};
    if (i.member2970 !== undefined) {
        c = i.member2970;
        s = new Array(10000);
        u = new Array(10000);
    } else {
        throw new Error('1303 ');
    }
    var n = function () {
        var v = Date.now();
        for (var z in k) {
            var x = parseInt(z);
            var y = k[x];
            if (y.delayTime < v) {
                if (y.member2971) {
                    u[x] = s[x];
                    delete k[x];
                    q = undefined;
                    return x;
                } else {
                    delete k[x];
                }
            }
        }
        return -1;
    };
    r.member78 = n;
    var t = function () {
        for (var v = 0; v < s.length; v++) {
            s[v] = 0;
            u[v] = 0;
        }
        q = undefined;
        k = {};
    };
    r.member301 = t;
    var o = function (v) {
        return u[v.getID()];
    };
    r.getVarInt = o;
    var j = function (v, x) {
        u[v.getID()] = x;
        q = undefined;
        var y = k[v.getID()];
        if (y !== undefined) {
            y.delayTime = Date.now() + m;
            y.member2971 = false;
        } else {
            k[v.getID()] = {
                delayTime: Date.now() + m,
                member2971: false
            };
        }
    };
    r.member2945 = j;
    var h = function (v, x) {
        s[v.getID()] = x;
        var y = k[v.getID()];
        if (y !== undefined) {
            if (y.delayTime !== a && !y.member2971) {
                y.delayTime = Date.now() + m;
                y.member2971 = true;
            }
        } else {
            k[v.getID()] = {
                delayTime: Date.now() + a,
                member2971: true
            };
        }
    };
    r.member2972 = h;
    var g = function (v) {
        return v.member2948(u[v.member2949().getID()]);
    };
    r.getVarBit = g;
    var e = function (z, x) {
        try {
            var v = z.member2949();
            j(v, z.member2951(o(v), x));
        } catch (y) {
        }
    };
    r.member2952 = e;
    var d = function (y, x) {
        var v = y.member2949();
        h(v, y.member2951(s[v.getID()], x));
    };
    r.member2973 = d;
    var q;
    var b = function () {
        if (q) {
            return q;
        }
        var z = c.member2974();
        var y = z.member2975();
        q = 0;
        for (var v = 0; v < y; v++) {
            var x = z.list(v);
            if (x === NULL) {
                return NULL;
            }
            if (x.member2976(r)) {
                q += x.member2977();
            }
        }
        return q;
    };
    r.member2978 = b;
    i = undefined;
    return r;
};