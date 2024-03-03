import { Class442 } from 'Class442.js';
export var Class472 = function () {
    var a = function (e, d, m, n, g, h, i, b, k, c, j) {
        this.member7555 = 1;
        this.member7556 = false;
        member46(this, Class442, e, d, m, n, g, h, i, b, k, c, j);
    };
    member45(Class442, a);
    a.prototype.member6797 = function (g, c, e, b) {
        this.member7555 = g.g1();
        var d = g.g4();
        this.member7556 = g.g1() === 1;
        return {
            member4638: d,
            alpha: 255
        };
    };
    a.prototype.member7003 = function (b, d, g, e, c) {
        this.member6680(b, d, g, e, c);
    };
    a.prototype.member7026 = function () {
        this.member7555 = 1;
        this.member7556 = false;
        this.member6681();
    };
    a.prototype.member7557 = function () {
        return this.member7555;
    };
    a.prototype.member7558 = function (b) {
        this.member7555 = b;
    };
    a.prototype.member7559 = function () {
        return this.member7556;
    };
    a.prototype.member7560 = function (b) {
        this.member7556 = b;
    };
    return a;
}();