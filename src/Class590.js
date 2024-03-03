import { Class582 } from 'Class582.js';
import { Class49 } from 'Class49.js';
export var Class590 = function () {
    var a = function (b) {
        var e = {};
        var d = Class582.member8943;
        e.member8967 = function () {
            return d;
        };
        var g;
        e.member8968 = function () {
            return g;
        };
        var c;
        e.member8987 = function (h) {
            c = h;
        };
        e.member4224 = function (h) {
        };
        e.apply = function (h) {
            Class49.member347(h, c);
        };
        e.member6219 = function (h) {
            c = h.gFloat();
        };
        if (b.member8969 !== undefined && b.member8988 !== undefined) {
            g = b.member8969;
            c = b.member8988;
        } else if (b.member8969 !== undefined && b.member3456 !== undefined) {
            g = b.member8969;
            c = b.member3456.gFloat();
        } else {
            throw new Error('964 ');
        }
        b = undefined;
        return e;
    };
    return a;
}();