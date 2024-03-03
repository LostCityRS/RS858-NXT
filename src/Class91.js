import { Class90 } from 'Class90.js';
export var Class91 = function () {
    var a = function (q, c, g, h, k, t) {
        var j = {};
        if (q === undefined) {
            throw new Error('1406 ');
        }
        var e = q;
        var m = c;
        var d = g !== undefined ? g : false;
        var o = h !== undefined ? h : Class90.member778;
        var i = k !== undefined ? k : false;
        var r = t !== undefined ? t : undefined;
        var b;
        var u;
        var s;
        var n = false;
        j.member444 = function () {
            return e;
        };
        j.member780 = function () {
            return m;
        };
        j.member781 = function () {
            return d;
        };
        j.member782 = function () {
            return o;
        };
        j.member783 = function () {
            return i;
        };
        j.member784 = function () {
            return r;
        };
        j.member785 = function () {
            return b;
        };
        j.member786 = function (v) {
            b = v;
        };
        j.member775 = function () {
            return u;
        };
        j.member774 = function (v) {
            u = v;
        };
        j.member787 = function () {
            return s;
        };
        j.member788 = function (v) {
            s = v;
        };
        j.member789 = function (v) {
            n = v;
        };
        j.member790 = function () {
            return n;
        };
        j.member791 = function () {
            if (s === undefined) {
                return 0;
            }
            if (u === undefined) {
                return s;
            }
            if (u < s) {
                return 0;
            }
            return u;
        };
        return j;
    };
    return a;
}();