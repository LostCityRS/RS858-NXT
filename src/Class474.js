import { Class442 } from 'Class442.js';
export var Class474 = function () {
    var a = function (e, d, m, n, g, h, i, b, k, c, j) {
        this.member7002();
        member46(this, Class442, e, d, m, n, g, h, i, b, k, c, j);
    };
    member45(Class442, a);
    a.prototype.member7003 = function (b, d, g, e, c) {
        this.member6680(b, d, g, e, c);
    };
    a.prototype.member7002 = function () {
        this.member7577 = -1;
        this.member7578 = true;
        this.member7579 = '';
        this.member7580 = 0;
        this.member7581 = 0;
        this.member7582 = 0;
        this.member7583 = false;
        this.member7584 = 0;
        this.member7585 = false;
        this.member7013 = -1;
        this.member7014 = 0;
        this.member7016 = false;
    };
    a.prototype.member7026 = function () {
        this.member7002();
        this.member6681();
    };
    a.prototype.member6797 = function (g, c, e, b) {
        this.member7577 = g.member1086();
        if (c >= 2) {
            this.member7578 = g.member609() === 1;
        }
        this.member7579 = g.member1089();
        this.member7580 = g.member609();
        this.member7581 = g.member609();
        this.member7582 = g.member609();
        this.member7583 = g.member609() === 1;
        var d = g.member1073();
        var h = 255 - g.member609();
        if (c >= 0) {
            this.member7584 = g.member609();
        }
        return {
            member4638: d,
            alpha: h
        };
    };
    a.prototype.member7586 = function () {
        return this.member7577;
    };
    a.prototype.member7587 = function (b) {
        this.member7577 = b;
    };
    a.prototype.member7588 = function () {
        return this.member7578;
    };
    a.prototype.member7589 = function (b) {
        this.member7578 = b;
    };
    a.prototype.member6806 = function () {
        return this.member7579;
    };
    a.prototype.member6805 = function (b) {
        this.member7579 = b;
    };
    a.prototype.member7590 = function () {
        return this.member7580;
    };
    a.prototype.member7591 = function (b) {
        this.member7580 = b;
    };
    a.prototype.member7592 = function () {
        return this.member7581;
    };
    a.prototype.member7593 = function (b) {
        this.member7581 = b;
    };
    a.prototype.member7594 = function () {
        return this.member7582;
    };
    a.prototype.member7595 = function (b) {
        this.member7582 = b;
    };
    a.prototype.member7596 = function () {
        return this.member7583;
    };
    a.prototype.member7597 = function (b) {
        this.member7583 = b;
    };
    a.prototype.member7598 = function () {
        return this.member7584;
    };
    a.prototype.member7599 = function (b) {
        this.member7584 = b;
    };
    a.prototype.member7600 = function (b) {
        this.member7601 = b;
    };
    a.prototype.member7602 = function () {
        return this.member7601;
    };
    a.prototype.member6807 = function () {
        return this.member7013;
    };
    a.prototype.member7043 = function (b) {
        this.member7013 = b;
    };
    a.prototype.member7044 = function () {
        return this.member7014;
    };
    a.prototype.member7045 = function (b) {
        this.member7014 = b;
    };
    a.prototype.member3639 = function (b) {
        return b.member3639(this.member7577);
    };
    return a;
}();