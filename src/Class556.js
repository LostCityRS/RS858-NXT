import { Class182 } from 'Class182.js';
export var Class556 = function () {
    var a = function (c, t) {
        var s = {};
        var z = false;
        var x = 0;
        var q;
        var r;
        var u = -1;
        var v;
        var e = -1;
        var g = Class182(x);
        var k;
        var m = 0;
        if (c === undefined || t === undefined) {
            throw new Error('1171 ');
        }
        q = c;
        r = [];
        for (var n = t.member776(); n !== undefined; n = t.member777()) {
            if (n.member780() !== undefined) {
                r.push(n);
            }
        }
        r.sort(function (B, A) {
            return B.member780() - A.member780();
        });
        var b = function () {
            var A;
            do {
                if (u === r.length - 1) {
                    return false;
                }
                if (u >= 0) {
                    m += r[u].member791();
                }
                u++;
                A = r[u];
            } while (A.member787() === undefined || A.member775() !== undefined && A.member775() < A.member787());
            if (false) {
            }
            v = undefined;
            return true;
        };
        var o = function () {
            if (v === undefined) {
                var A = q.member1439(r[u]);
                if (A === member47) {
                    return false;
                }
                v = A.member3902();
                e = -1;
            }
            e++;
            if (e >= v.length) {
                if (!b()) {
                    return false;
                }
                return o();
            }
            if (false) {
            }
            return true;
        };
        var j = 0;
        var d = 1;
        var y = 2;
        var i = 3;
        var h = j;
        s.member78 = function () {
            for (var C = g.member776(); C !== undefined; C = g.member777()) {
                var B = q.member4002(C.member2693, C.member1204);
                if (B === member47) {
                    continue;
                }
                if (false) {
                }
                g.remove();
            }
            if (g.getSize() < x) {
                while (true) {
                    if (h === j) {
                        if (q.member4001() === member47) {
                            return;
                        }
                        k = 0;
                        for (var A = 0; A < r.length; A++) {
                            k += r[A].member791();
                        }
                        if (!b()) {
                            return;
                        }
                        h = d;
                    }
                    if (h === d) {
                        if (!o()) {
                            return;
                        }
                        h = y;
                    }
                    if (h === y) {
                        var B = q.member4002(r[u], v[e]);
                        if (B !== member47) {
                            if (false) {
                            }
                            h = d;
                            continue;
                        }
                        g.member2038({
                            member2693: r[u],
                            member1204: v[e]
                        });
                        h = i;
                    }
                    if (h === i) {
                        if (g.getSize() >= x) {
                            return;
                        }
                        h = d;
                        continue;
                    }
                }
            }
        };
        s.member8764 = function () {
            return x;
        };
        s.member8765 = function (A) {
            x = A;
        };
        s.member4388 = function () {
            h = j;
            u = e = -1;
            m = 0;
        };
        s.member3266 = function () {
            return s.member8766() + '%';
        };
        s.member8766 = function () {
            var A = m;
            if (v !== undefined && v.length > 0) {
                if (u >= 0 && u < r.length - 1) {
                    var B = r[u].member791();
                    A += B * e / v.length;
                }
            }
            return Math.floor(A * 100 / k);
        };
        return s;
    };
    return a;
}();