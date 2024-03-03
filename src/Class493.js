export var Class493 = function () {
    var a = function () {
        var g = {};
        var i = 4;
        var b = new Array(i);
        g.member7900 = function (s, o, q) {
            if (s === null || o === null) {
                return;
            }
            for (var n = 0; n < b.length; n++) {
                if (b[n] !== undefined && j(b[n].settings, q)) {
                    k(n);
                    return;
                }
            }
            var r = b.length;
            if (r < i) {
                r++;
            } else if (b[r - 1] !== undefined) {
                b[r - 1].member2621.member511();
            }
            m(r - 1);
            s.member510();
            b[0] = {
                member2621: s,
                member2619: o,
                settings: q
            };
        };
        g.member7901 = function (o) {
            for (var n = 0; n < b.length; n++) {
                if (b[n] !== undefined) {
                    if (j(b[n].settings, o)) {
                        k(n);
                        return b[0];
                    }
                }
            }
            return null;
        };
        var j = function (o, n) {
            if (o.member7902 !== n.member7902) {
                return false;
            }
            if (!c(o.member7903, n.member7903)) {
                return false;
            }
            if (!d(o.member7904, n.member7904)) {
                return false;
            }
            if (!h(o.member7905, n.member7905)) {
                return false;
            }
            if (!h(o.member7906, n.member7906)) {
                return false;
            }
            return true;
        };
        var k = function (o) {
            if (o === 0) {
                return;
            }
            var n = b[o];
            m(o);
            b[0] = n;
        };
        var m = function (o) {
            for (var n = o; n > 0; n--) {
                b[n] = b[n - 1];
            }
        };
        var d = function (q, o) {
            if (q === undefined) {
                return o === undefined;
            }
            if (o === undefined) {
                return false;
            }
            if (q === null) {
                return o === null;
            }
            if (o === null) {
                return false;
            }
            if (q.length !== o.length) {
                return false;
            }
            for (var n = 0; n < q.length; n++) {
                if (q[n] === undefined || q[n] === null || o[n] === undefined || o[n] === null) {
                    if (q[n] !== o[n]) {
                        return false;
                    }
                } else if (!q[n].member2969(o[n])) {
                    return false;
                }
            }
            return true;
        };
        var h = function (q, o) {
            if (q === undefined) {
                return o === undefined;
            }
            if (o === undefined) {
                return false;
            }
            if (q === null) {
                return o === null;
            }
            if (o === null) {
                return false;
            }
            if (q.length !== o.length) {
                return false;
            }
            for (var n = 0; n < q.length; n++) {
                if (q[n] !== o[n]) {
                    return false;
                }
            }
            return true;
        };
        var c = function (q, o) {
            if (q === undefined) {
                return o === undefined;
            }
            if (o === undefined) {
                return false;
            }
            if (q === null) {
                return o === null;
            }
            if (o === null) {
                return false;
            }
            if (q.length !== o.length) {
                return false;
            }
            for (var n = 0; n < q.length; n++) {
                if (q[n] === undefined) {
                    if (o[n] !== undefined) {
                        return false;
                    } else {
                        continue;
                    }
                }
                if (o[n] === undefined) {
                    return false;
                }
                if (q[n].member7907 !== o[n].member7907) {
                    return false;
                }
                if (q[n].member7470 !== o[n].member7470) {
                    return false;
                }
            }
            return true;
        };
        g.member7908 = function () {
            for (var n = 0; n < b.length; n++) {
                if (b[n] !== undefined) {
                    b[n].member2621.member511();
                }
            }
            b.length = 0;
        };
        var e = g.member7908;
        g.member512 = function () {
            e();
        };
        return g;
    };
    return a;
}();