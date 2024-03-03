import { Class63 } from 'Class63.js';
export var Class64 = function () {
    var a = function () {
        this.clear();
    };
    a.prototype.clear = function () {
        this.member419 = new Array(Class63.member417());
        this.member420 = new Array(0);
    };
    a.prototype.member421 = function (e, d) {
        var c = d.member304();
        var g = this.member419[e];
        if (g === undefined) {
            return undefined;
        }
        for (var b = 0; b < c.length; b++) {
            g = g[c[b]];
            if (g == undefined) {
                return undefined;
            }
        }
        return g;
    };
    a.prototype.member422 = function (e, d, h) {
        var c = d.member304();
        var g = this.member419[e];
        if (g === undefined) {
            g = this.member419[e] = {};
        }
        for (var b = 0; b < c.length - 1; b++) {
            if (g[c[b]] === undefined) {
                g = g[c[b]] = {};
            } else {
                g = g[c[b]];
            }
        }
        g[c[b]] = h;
        this.member420.push(h);
    };
    a.prototype.member423 = function () {
        return this.member420;
    };
    return function () {
        return new a();
    };
}();