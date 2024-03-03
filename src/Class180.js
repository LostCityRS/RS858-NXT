import { Class49 } from 'Class49.js';
export var Class180 = function () {
    var a = function (e) {
        var i = {};
        var c;
        i.member1722 = function () {
            return c;
        };
        var h;
        i.member1987 = function () {
            return h;
        };
        var d;
        i.member2009 = function (j) {
            d = j;
        };
        var g;
        i.member1985 = function () {
            return g;
        };
        var b;
        i.member2010 = function () {
            return b;
        };
        if (e.member2011 !== undefined && e.member2012 !== undefined) {
            c = e.member2011;
            h = e.member2012;
            g = e.parent;
        } else {
            throw new Error('1545 ');
        }
        i.member2013 = function (j) {
            if (b === undefined) {
                b = new Array(0);
            }
            b.push(j);
        };
        i.member2014 = function () {
            var j;
            if (g !== undefined) {
                j = g.member2014();
            } else {
                j = Class49.member313();
            }
            var k = Class49.create();
            if (d === undefined) {
                Class49.member323(j, h, k);
            } else {
                Class49.member323(j, d, k);
            }
            return k;
        };
        i.member1986 = function () {
            var j;
            if (g !== undefined) {
                j = g.member1986();
            } else {
                j = Class49.member313();
            }
            var k = Class49.create();
            Class49.member323(j, h, k);
            return k;
        };
        e = undefined;
        return i;
    };
    return a;
}();