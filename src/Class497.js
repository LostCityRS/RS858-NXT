import { Class252 } from 'Class252.js';
export var Class497 = function (h) {
    var n = {};
    var u = 1 << 0;
    var c = 1 << 1;
    var t = 1 << 2;
    var v = 1 << 3;
    var e = null;
    n.member7935 = function () {
        return e;
    };
    var r = null;
    n.member7936 = function () {
        return r;
    };
    var b = null;
    n.member7607 = function () {
        return b;
    };
    var i = null;
    n.member7608 = function () {
        return i;
    };
    if (h.member7937 !== undefined && h.member2698 !== undefined) {
        var q = h.member7937;
        var m = h.member2698;
        var s = q.member7935();
        if (s !== null) {
            e = s.member1319();
        } else {
            e = Class252({});
        }
        s = q.member7936();
        if (s != null) {
            r = s.member1319();
        } else {
            r = Class252({});
        }
        if (q.member7607() !== null) {
            b = q.member7607().slice(0);
        }
        if (q.member7608() !== null) {
            i = q.member7608().slice(0);
        }
        var d = m.member609();
        if ((d & u) !== 0) {
            e.member2959(m.member1086());
            r.member2959(m.member1086());
            if (q.member7935().member2960() !== -1 || q.member7936().member2960() !== -1) {
                e.member2961(m.member1086());
                r.member2961(m.member1086());
            }
            if (q.member7935().member2962() !== -1 || q.member7936().member2962() !== -1) {
                e.member2963(m.member1086());
                r.member2963(m.member1086());
            }
        }
        if ((d & c) !== 0) {
            e.member2965(m.member1086());
            r.member2965(m.member1086());
            if (q.member7935().member2966() !== -1 || q.member7936().member2966() !== -1) {
                e.member2967(m.member1086());
                r.member2967(m.member1086());
            }
        }
        if ((d & t) !== 0) {
            var k = m.member608();
            var g = new Array(4);
            g[0] = k & 15;
            g[1] = k >> 4 & 15;
            g[2] = k >> 8 & 15;
            g[3] = k >> 12 & 15;
            for (var o = 0; o < 4; o++) {
                if (g[o] !== 15) {
                    b[g[o]] = m.member608();
                }
            }
        }
        if ((d & v) !== 0) {
            var k = m.member609();
            var g = new Array(2);
            g[0] = k & 15;
            g[1] = k >> 4 & 15;
            for (var o = 0; o < 2; o++) {
                if (g[o] !== 15) {
                    i[g[o]] = m.member608();
                }
            }
        }
    } else {
        throw new Error('887 ');
    }
    var a = function (y, x) {
        if (y === undefined) {
            return x === undefined;
        }
        if (x === undefined) {
            return false;
        }
        if (y === null) {
            return x === null;
        }
        if (x === null) {
            return false;
        }
        if (y.length !== x.length) {
            return false;
        }
        for (var j = 0; j < y.length; j++) {
            if (y[j] !== x[j]) {
                return false;
            }
        }
        return true;
    };
    n.member2969 = function (j) {
        if (j === null || j === undefined) {
            return false;
        }
        if (!e.member2969(j.member7935())) {
            return false;
        }
        if (!r.member2969(j.member7936())) {
            return false;
        }
        if (!a(b, j.member7607())) {
            return false;
        }
        if (!a(i, j.member7608())) {
            return false;
        }
        return true;
    };
    h = undefined;
    return n;
};