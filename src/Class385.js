import { Class50 } from 'Class50.js';
export var Class385 = function () {
    var a = function () {
        this.member1994 = undefined;
        this.member4353 = new Array(0);
        this.member1838 = false;
        this.member4354 = false;
    };
    a.prototype.member1843 = function () {
        return this.member1838;
    };
    a.prototype.member583 = function () {
        this.member1994 = undefined;
        this.member4355 = -1;
        this.member4353 = new Array(0);
        this.member1838 = false;
        this.member4354 = false;
    };
    a.prototype.member843 = function (e, i, k, h, j, q, g, m) {
        this.member1994 = e;
        this.member1838 = g;
        var o = 0, n = undefined;
        if (m !== undefined) {
            o = m.member4337();
            n = m.member2919();
        }
        if (this.member4353[o] === undefined) {
            this.member4353[o] = new d(i, k, h, j, q, n);
        } else {
            this.member4353[o].member843(i, k, h, j, q, n);
        }
        if (n !== undefined) {
            this.member4354 = true;
        }
    };
    a.prototype.member1733 = function (o, i, h) {
        var m = this.member1994.member2135();
        if (this.member4354) {
            for (var q = 0; q < h.length; q++) {
                h[q] = m[q];
            }
        }
        for (var u = 0; u < this.member4353.length; u++) {
            var s = this.member4353[u];
            if (s === undefined) {
                continue;
            }
            if (s.member4355 < 0 || s.member4356 === null && s.member4357 === null) {
                if (o !== null) {
                    for (var i = 0; i < o.length; i++) {
                        if (o[i] === undefined) {
                            continue;
                        }
                        var v = 1;
                        if (s.member2920 !== undefined) {
                            v = s.member2920[i];
                        }
                        var t = o[i] * 12;
                        for (var n = 0; n < 12; n++) {
                            h[t + n] = h[t + n] * (1 - v) + m[i * 12 + n] * v;
                        }
                    }
                } else {
                    var v = 1;
                    if (s.member2920 !== undefined) {
                        v = s.member2920[i];
                    }
                    for (var q = 0; q < 12; q++) {
                        h[q] = h[q] * (1 - v) + m[q] * v;
                    }
                }
            } else if (s.member4356 === null) {
                s.member4357.member1970(o, i, h, s.member2920);
            } else if (s.member4357 === null) {
                s.member4356.member1970(o, i, h, s.member2920);
            } else if (!this.member1994.member2138() || s.member4358 === s.member4355) {
                s.member4357.member1970(o, i, h, s.member2920);
            } else {
                var k = s.member4357.member1965();
                var r;
                if (k > s.member4358) {
                    r = k - s.member4358;
                } else {
                    r = s.member1996 - s.member4358;
                }
                var g = s.member4355 - s.member4358;
                var e = g / r;
                s.member4357.member1971(s.member4356, e, o, i, h, s.member2920);
            }
        }
        return h;
    };
    a.prototype.member1734 = function (y, i) {
        for (var x = 0; x < this.member4353.length; x++) {
            var t = this.member4353[x];
            if (t === undefined) {
                continue;
            }
            if (t.member4355 < 0 || t.member4356 === null && t.member4357 === null) {
                return this.member1994.member2136();
            }
            if (t.member4356 === null) {
                b(t.member4357.member1734(), y, i, t.member2920);
            } else if (t.member4357 === null) {
                b(t.member4356.member1734(), y, i, t.member2920);
            } else {
                var k = t.member4357.member1734();
                if (!this.member1994.member2138() || t.member4358 === t.member4355) {
                    b(k, y, i, t.member2920);
                } else {
                    var v = t.member4357.member1968();
                    var m = t.member4356.member1734();
                    var q = t.member4356.member1968();
                    var n = t.member4357.member1965();
                    var s;
                    if (n > t.member4358) {
                        s = n - t.member4358;
                    } else {
                        s = t.member1996 - t.member4358;
                    }
                    var g = t.member4355 - t.member4358;
                    var e = g / s;
                    for (var o = 0; o < 4; o++) {
                        i[o] = Class50.member365[o];
                    }
                    for (var r = 0; r < y.length; r++) {
                        if (y[r] !== undefined) {
                            var h = y[r] * 4;
                            if (h === 0) {
                                throw new Error('1065 ');
                            }
                            var u = k;
                            if (r * 4 >= k.length) {
                                u = Class50.member380;
                            }
                            var z = m;
                            if (r * 4 >= m.length) {
                                z = Class50.member380;
                            }
                            if (v !== null && (v[r] & Class50.member376) !== 0 || q !== null && (q[r] & Class50.member375) !== 0) {
                                for (var o = 0; o < 4; o++) {
                                    i[h + o] = u[r * 4 + o];
                                }
                            } else {
                                for (var o = 0; o < 4; o++) {
                                    i[h + o] = u[r * 4 + o] + (z[r * 4 + o] - u[r * 4 + o]) * e;
                                }
                            }
                        }
                    }
                }
            }
        }
        return i;
    };
    var b = function (g, k, n) {
        for (var i = 0; i < 4; i++) {
            n[i] = Class50.member365[i];
        }
        for (var e = 0; e < k.length; e++) {
            if (k[e] !== undefined) {
                var h = k[e] * 4;
                if (h === 0) {
                    throw new Error('1066 ');
                }
                var m = g;
                if (e * 4 >= g.length) {
                    m = Class50.member380;
                }
                for (var i = 0; i < 4; i++) {
                    n[h + i] = m[e * 4 + i];
                }
            }
        }
    };
    a.prototype.member1735 = function (i, e) {
        for (var r = 0; r < this.member4353.length; r++) {
            var y = this.member4353[r];
            if (y === undefined) {
                continue;
            }
            if (y.member4355 < 0 || y.member4356 === null && y.member4357 === null) {
                return this.member1994.member2137();
            }
            if (y.member4356 === null) {
                c(y.member4357.member1966(), i, e, y.member2920);
            } else if (y.member4357 === null) {
                c(y.member4356.member1966(), i, e, y.member2920);
            } else {
                var o = y.member4357.member1966();
                if (!this.member1994.member2138() || y.member4358 === y.member4355) {
                    c(o, i, e, y.member2920);
                } else {
                    var u = y.member4357.member1969();
                    var v = y.member4356.member1966();
                    var h = y.member4356.member1969();
                    var k = y.member4357.member1965();
                    var z;
                    if (k > y.member4358) {
                        z = k - y.member4358;
                    } else {
                        z = y.member1996 - y.member4358;
                    }
                    var n = y.member4355 - y.member4358;
                    var A = n / z;
                    var m = Class50.member366;
                    for (var s = 0; s < m; s++) {
                        e[s] = Class50.member367[s];
                    }
                    for (var x = 0; x < i.length; x++) {
                        if (i[x] !== undefined) {
                            var q = i[x] * m;
                            if (q === 0) {
                                throw new Error('1067 ');
                            }
                            var t = o;
                            if (x * m >= o.length) {
                                t = Class50.member381;
                            }
                            var g = v;
                            if (x * m >= v.length) {
                                g = Class50.member381;
                            }
                            if (u !== null && (u[x] & Class50.member376) !== 0 || h !== null && (h[x] & Class50.member375) !== 0) {
                                for (var s = 0; s < m; s++) {
                                    e[q + s] = t[x * m + s];
                                }
                            } else {
                                for (var s = 0; s < m; s++) {
                                    e[q + s] = t[x * m + s] + (g[x * m + s] - t[x * m + s]) * A;
                                }
                            }
                        }
                    }
                }
            }
        }
        return e;
    };
    var c = function (n, m, h) {
        var k = Class50.member366;
        for (var i = 0; i < k; i++) {
            h[i] = Class50.member367[i];
        }
        for (var e = 0; e < m.length; e++) {
            if (m[e] !== undefined) {
                var g = m[e] * k;
                if (g === 0) {
                    throw new Error('1068 ');
                }
                var o = n;
                if (e * k >= n.length) {
                    o = Class50.member381;
                }
                for (var i = 0; i < k; i++) {
                    h[g + i] = o[e * k + i];
                }
            }
        }
    };
    var d = function (j, k, e, i, g, h) {
        this.member4355 = j;
        this.member4358 = k;
        this.member1996 = k;
        this.member4357 = i;
        this.member4356 = g;
        this.member2920 = h;
    };
    d.prototype.member843 = function (j, k, e, i, g, h) {
        this.member4355 = j;
        this.member4358 = k;
        this.member1996 = k;
        this.member4357 = i;
        this.member4356 = g;
        this.member2920 = h;
    };
    return function () {
        return new a();
    };
}();