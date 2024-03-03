export var Class134 = function (o) {
    var e = 0;
    var a = 1;
    var g = 2;
    var k = 3;
    var i = {};
    var b;
    var q;
    var d;
    var h = -1;
    var n = new Array(0);
    var c = new Array(0);
    if (o.width !== undefined && o.height !== undefined) {
        b = o.width;
        q = o.height;
        d = o.width * o.height;
        n.push([
            0,
            0,
            o.width,
            o.height
        ]);
    } else {
        throw new Error('1318 ');
    }
    var j = function (r, z) {
        var t = Infinity;
        var s = -1;
        for (var u = 0; u < n.length; u++) {
            var x = n[u];
            var y = x[g] - r;
            var A = x[k] - z;
            if (y === 0 && A === 0) {
                return u;
            }
            var v = Math.min(y, A);
            if (v < 0) {
                continue;
            }
            if (v < t) {
                t = v;
                s = u;
            }
        }
        return s;
    };
    i.member1271 = function (x, r) {
        var t = j(x, r);
        if (t === -1) {
            return null;
        }
        var y = n[t];
        var z = y[g] - x;
        var v = y[k] - r;
        var u = undefined, s = undefined;
        if (z < v) {
            if (z > 0) {
                u = [
                    y[e] + x,
                    y[a],
                    y[g] - x,
                    r
                ];
            }
            if (v > 0) {
                s = [
                    y[e],
                    y[a] + r,
                    y[g],
                    y[k] - r
                ];
            }
        } else {
            if (z > 0) {
                u = [
                    y[e] + x,
                    y[a],
                    y[g] - x,
                    y[k]
                ];
            }
            if (v > 0) {
                s = [
                    y[e],
                    y[a] + r,
                    x,
                    y[k] - r
                ];
            }
        }
        n.splice(t, 1);
        if (u !== undefined) {
            n.push(u);
        }
        if (s !== undefined) {
            n.push(s);
        }
        y[g] = x;
        y[k] = r;
        c[++h] = y;
        d -= x * r;
        return {
            x: y[e],
            y: y[a],
            w: y[g],
            member1272: y[k],
            id: h
        };
    };
    i.member1273 = function (r) {
        n.unshift([
            c[r][e],
            c[r][a],
            c[r][g],
            c[r][k]
        ]);
        d += c[r][g] * c[r][k];
        delete c[r];
    };
    i.member1274 = function () {
        var v = new Array(0);
        for (var t = 0; t < n.length; t++) {
            var u = n[t][g] / b;
            var s = n[t][k] / q;
            var r = n[t][e] / b;
            var z = (q - n[t][a]) / q - s;
            v.push({
                x: r,
                y: z,
                w: u,
                member1272: s
            });
        }
        return v;
    };
    i.member1275 = function (z) {
        var v = new Array(0);
        for (var t = 0; t < z.length; t++) {
            var u = c[z[t]][g] / b;
            var s = c[z[t]][k] / q;
            var r = c[z[t]][e] / b;
            var A = (q - c[z[t]][a]) / q - s;
            v.push({
                x: r,
                y: A,
                w: u,
                member1272: s
            });
        }
        return v;
    };
    var m = function () {
        return d / (b * q);
    };
    i.member1276 = function () {
        var y = 0, u = 0;
        for (var s = 0; s < n.length; s++) {
            if (n[s] !== undefined) {
                var t = n[s][g];
                var r = n[s][k];
                y += t * r;
                u += t * r * Math.min(t, r);
            }
        }
        var x = 0;
        for (var s = 0; s < c.length; s++) {
            if (c[s] !== undefined) {
                var t = c[s][g];
                var r = c[s][k];
                x += t * r;
            }
        }
        var v = y * Math.min(b, q);
        return v / u * m();
    };
    o = undefined;
    return i;
};