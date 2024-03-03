import { Class442 } from 'Class442.js';
export var Class470 = function () {
    var a = function (e, d, m, n, g, h, i, b, k, c, j) {
        this.member7467 = false;
        member46(this, Class442, e, d, m, n, g, h, i, b, k, c, j);
    };
    member45(Class442, a);
    a.prototype.member7003 = function (b, d, g, e, c) {
        this.member6680(b, d, g, e, c);
    };
    a.prototype.member7026 = function () {
        this.member7467 = false;
        this.member6681();
    };
    a.prototype.member6797 = function (g, c, e, b) {
        var d = g.member1073();
        this.member7467 = g.member609() === 1;
        var h = 255 - g.member609();
        return {
            member4638: d,
            alpha: h
        };
    };
    a.prototype.member7468 = function (b) {
        this.member7467 = b;
    };
    a.prototype.member7469 = function () {
        return this.member7467;
    };
    return a;
}();