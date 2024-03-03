import { Class171 } from 'Class171.js';
export var Class189 = function () {
    var a = function (c) {
        var g = {};
        var i;
        g.member1881 = function () {
            return i;
        };
        var e;
        g.member1882 = function () {
            return e;
        };
        var b;
        g.member1883 = function () {
            return b;
        };
        var h;
        g.member600 = function () {
            return h;
        };
        g.member1884 = function () {
            return undefined;
        };
        if (c.member1594 !== undefined && c.member1595 !== undefined && c.member1596 !== undefined && c.member1597 !== undefined && c.member546 !== undefined) {
            h = c.member546;
            var d = -1;
            if (c.member2007 !== undefined) {
                d = c.member2007;
            }
            if (c.member2131 !== undefined) {
                e = new Array(4);
                e[0] = c.member2131[0];
                e[1] = c.member2131[1];
                e[2] = c.member2131[2];
                e[3] = c.member2131[3];
            } else {
                e = new Array(4);
                e[0] = d;
                e[1] = d;
                e[2] = d;
                e[3] = d;
            }
            i = new Array(4);
            i[0] = c.member1594;
            i[1] = c.member1595;
            i[2] = c.member1596;
            i[3] = c.member1597;
            b = new Array(2);
            b[0] = [
                0,
                2,
                1
            ];
            b[1] = [
                0,
                3,
                2
            ];
            if (c.member2132 === true) {
                b[2] = [
                    0,
                    1,
                    2
                ];
                b[3] = [
                    0,
                    2,
                    3
                ];
            }
        } else {
            throw new Error('1515 ');
        }
        g.member2008 = function () {
            return Class171({ member1880: g });
        };
        c = undefined;
        return g;
    };
    return a;
}();