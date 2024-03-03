import { Class86 } from 'Class86.js';
export var Class158 = function () {
    var b = {};
    var c = Class86.member717 - 1;
    var a = Class86.member731 - 1;
    b.member1634 = function (g, d, e) {
        e &= 3;
        if (e === 0) {
            return g;
        } else if (e === 1) {
            return d;
        } else if (e === 2) {
            return c - g;
        } else {
            return c - d;
        }
    };
    b.member1635 = function (g, d, e) {
        e &= 3;
        if (e === 0) {
            return d;
        } else if (e === 1) {
            return c - g;
        } else if (e === 2) {
            return c - d;
        } else {
            return g;
        }
    };
    b.member1636 = function (g, d, e) {
        e &= 3;
        if (e === 0) {
            return g;
        } else if (e === 1) {
            return d;
        } else if (e === 2) {
            return a - g;
        } else {
            return a - d;
        }
    };
    b.member1637 = function (g, d, e) {
        e &= 3;
        if (e === 0) {
            return d;
        } else if (e === 1) {
            return a - g;
        } else if (e === 2) {
            return a - d;
        } else {
            return g;
        }
    };
    b.member1638 = function (k, i, j, g, h, e) {
        if ((e & 1) === 1) {
            var d = g;
            g = h;
            h = d;
        }
        j &= 3;
        if (j === 0) {
            return k;
        } else if (j === 1) {
            return i;
        } else if (j === 2) {
            return c - k - (g - 1);
        } else {
            return c - i - (h - 1);
        }
    };
    b.member1639 = function (k, i, j, g, h, e) {
        if ((e & 1) === 1) {
            var d = g;
            g = h;
            h = d;
        }
        j &= 3;
        if (j === 0) {
            return i;
        } else if (j === 1) {
            return c - k - (g - 1);
        } else if (j === 2) {
            return c - i - (h - 1);
        } else {
            return k;
        }
    };
    return b;
}();