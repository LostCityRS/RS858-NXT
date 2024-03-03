import { Class605 } from 'Class605.js';
export var Class677 = function () {
    var a = function (u) {
        var h = {};
        var r = null;
        h.member9539 = function () {
            return r;
        };
        var q = null;
        h.member9538 = function () {
            return q;
        };
        var n = null;
        h.member9814 = function () {
            return n;
        };
        h.member9817 = function (v) {
            n = v;
        };
        var m = -1;
        h.member9265 = function () {
            return m;
        };
        var k = -1;
        var j = -1;
        h.member9531 = function () {
            return j;
        };
        var i = -1;
        h.member9529 = function () {
            return i;
        };
        var g = -1;
        h.member9530 = function () {
            return g;
        };
        var e;
        h.member9800 = function () {
            return e;
        };
        var o;
        h.member9805 = function () {
            return o;
        };
        var d;
        h.member9818 = function () {
            return d;
        };
        var c;
        h.member9819 = function () {
            return c;
        };
        var s = null;
        h.member9540 = function () {
            return s;
        };
        h.member9820 = function (v) {
            s = v;
        };
        var b = null;
        h.member9821 = function (v) {
            if (b === null) {
                b = [v];
                return;
            }
            b.push(v);
        };
        h.member9801 = function () {
            return b;
        };
        h.member9822 = function (x) {
            if (b === null && x === null) {
                return true;
            }
            if (b === null || x === null) {
                return false;
            }
            if (b.length !== x.length) {
                return false;
            }
            for (var v = 0; v < b.length; v++) {
                if (b[v] !== x[v]) {
                    return false;
                }
            }
            return true;
        };
        if (u.member9823 !== undefined && u.member9824 !== undefined && u.member9825 !== undefined && u.member9826 !== undefined && u.member9827 !== undefined && u.member9828 !== undefined && u.member9829 !== undefined && u.member9830 !== undefined && u.member9831 !== undefined && u.otherLevel !== undefined && u.member9832 !== undefined && u.member9833 !== undefined && u.member9834 !== undefined) {
            r = u.member9823;
            h.member9823 = r;
            q = u.member9824;
            h.member9824 = q;
            n = u.member9825;
            m = u.member9826;
            k = u.member9827;
            j = u.member9828;
            i = u.member9829;
            g = u.member9830;
            e = u.member9831;
            o = u.otherLevel;
            d = u.member9832;
            c = u.member9833;
            b = u.member9834;
        } else {
            throw new Error('1587 ');
        }
        h.member3637 = function () {
            var v = q;
            if (r !== null && r.length > 0) {
                v = v.concat(' ', r);
            }
            if (s !== null && s.length > 0) {
                v = v.concat(' ', s);
            }
            return v;
        };
        var t = h.member3637;
        h.member2794 = function () {
            var v = n.type;
            if (v !== undefined) {
                return v;
            } else {
                return Class605.member9168;
            }
        };
        u = undefined;
        return h;
    };
    return a;
}();