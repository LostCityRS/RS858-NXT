import { Class171 } from 'Class171.js';
export var Class179 = function () {
    var a = function (r) {
        var c = {};
        var e;
        c.member1881 = function () {
            return e;
        };
        var o;
        c.member1882 = function () {
            return o;
        };
        var g;
        c.member1883 = function () {
            return g;
        };
        var n;
        c.member600 = function () {
            return n;
        };
        c.member2005 = function (s) {
            n = s;
        };
        var i = undefined;
        c.member1884 = function () {
            return i;
        };
        c.member2006 = function (u, y, x, v) {
            if (i === undefined) {
                i = new Array(8);
                for (var t = 0; t < 8; t++) {
                    i[t] = v;
                }
                return;
            }
            var s;
            if (y) {
                if (u) {
                    s = x ? 6 : 7;
                } else {
                    s = x ? 5 : 4;
                }
            } else if (u) {
                s = x ? 2 : 3;
            } else {
                s = x ? 1 : 0;
            }
            i[s] = v;
        };
        if (r.position !== undefined && r.size !== undefined && r.member546 !== undefined) {
            n = r.member546;
            var k = -1;
            if (r.member2007 !== undefined) {
                k = r.member2007;
            }
            var m = r.position[0];
            var j = r.position[1];
            var b = r.position[2];
            var d = r.size[0] / 2;
            var h = r.size[1] / 2;
            var q = r.size[2] / 2;
            e = new Array(8);
            o = new Array(8);
            e[0] = [
                m - d,
                j - h,
                b - q
            ];
            o[0] = k;
            e[1] = [
                m - d,
                j - h,
                b + q
            ];
            o[1] = k;
            e[2] = [
                m + d,
                j - h,
                b + q
            ];
            o[2] = k;
            e[3] = [
                m + d,
                j - h,
                b - q
            ];
            o[3] = k;
            e[4] = [
                m - d,
                j + h,
                b - q
            ];
            o[4] = k;
            e[5] = [
                m - d,
                j + h,
                b + q
            ];
            o[5] = k;
            e[6] = [
                m + d,
                j + h,
                b + q
            ];
            o[6] = k;
            e[7] = [
                m + d,
                j + h,
                b - q
            ];
            o[7] = k;
            g = new Array(12);
            g[0] = [
                0,
                1,
                2
            ];
            g[1] = [
                0,
                2,
                3
            ];
            g[2] = [
                0,
                7,
                4
            ];
            g[3] = [
                0,
                3,
                7
            ];
            g[4] = [
                3,
                6,
                7
            ];
            g[5] = [
                3,
                2,
                6
            ];
            g[6] = [
                2,
                5,
                6
            ];
            g[7] = [
                2,
                1,
                5
            ];
            g[8] = [
                1,
                4,
                5
            ];
            g[9] = [
                1,
                0,
                4
            ];
            g[10] = [
                4,
                6,
                5
            ];
            g[11] = [
                4,
                7,
                6
            ];
        } else {
            throw new Error('902 ');
        }
        c.member2008 = function () {
            return Class171({ member1880: c });
        };
        r = undefined;
        return c;
    };
    return a;
}();