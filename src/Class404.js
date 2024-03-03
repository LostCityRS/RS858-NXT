import { Class103 } from 'Class103.js';
export var Class404 = function () {
    var b = {};
    var a = [];
    b.add = function (d) {
        if (d === undefined) {
            throw new Error('1588 ');
        }
        if (d === null) {
            throw new Error('1589 ');
        }
        var e = d.member4646();
        if (e === -1) {
            return;
        }
        var c = a[e];
        if (c === undefined) {
            c = a[e] = Class103();
        }
        c.member887(d);
    };
    b.remove = function (d) {
        var e = d.member4646();
        if (e === -1) {
            return;
        }
        if (d.next === undefined) {
            if (false) {
            }
        }
        var c = a[e];
        if (c === undefined) {
            if (false) {
            }
        }
        c.unlink(d);
        if (c.member890() === 0) {
            a[e] = undefined;
        }
    };
    b.get = function (c) {
        return a[c];
    };
    return b;
}();